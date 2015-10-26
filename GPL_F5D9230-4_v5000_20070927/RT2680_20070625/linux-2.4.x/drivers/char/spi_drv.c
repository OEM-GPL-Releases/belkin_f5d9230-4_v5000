#include <linux/init.h>
#include <linux/config.h>
#include <linux/module.h>
#include <linux/kernel.h>   
#include <linux/fs.h>       
#include <linux/errno.h>    
#include <linux/types.h>    
#include <linux/proc_fs.h>
#include <linux/fcntl.h>    
#include <asm/system.h>     
#include <linux/wireless.h>

#include "spi_drv.h"

#ifdef  CONFIG_DEVFS_FS
#include <linux/devfs_fs_kernel.h>
#endif


static devfs_handle_t devfs_handle;
int spidrv_major =  217;

/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	spi_chip_select                                         */
/*    INPUTS: ENABLE or DISABLE                                         */
/*   RETURNS: None                                                      */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): Pull on or Pull down #CS                                  */
/*                                                                      */
/*----------------------------------------------------------------------*/

static inline void spi_chip_select(u8 enable)
{
	int i;

	for (i=0; i<spi_busy_loop; i++) {
		if (!IS_BUSY) {
			/* low active */
			if (enable) {		
				RT2880_REG(RT2880_SPICTL_REG) =	SPICTL_SPIENA_ON;
			} else  {
				RT2880_REG(RT2880_SPICTL_REG) = SPICTL_SPIENA_OFF;
			}		
			break;
		}
	}

#ifdef DBG
	if (i == spi_busy_loop) {
		printf("warning : spi_transfer (spi_chip_select) busy !\n");
	}
#endif
}

/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	spi_master_init                                         */
/*    INPUTS: None                                                      */
/*   RETURNS: None                                                      */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): Initialize SPI block to desired state                     */
/*                                                                      */
/*----------------------------------------------------------------------*/
void spi_master_init(void)
{
	int i;
	/* reset spi block */
	RT2880_REG(RT2880_RSTCTRL_REG) = RSTCTRL_SPI_RESET;
	/* udelay(500); */
	for ( i = 0; i < 1000; i++);
	

	RT2880_REG(RT2880_SPICFG_REG) = SPICFG_MSBFIRST | 
									SPICFG_RXCLKEDGE_FALLING |
									SPICFG_TXCLKEDGE_FALLING |
									SPICFG_SPICLK_DIV128;	
	spi_chip_select(DISABLE);

#ifdef DBG
	printf("SPICFG = %08x\n", RT2880_REG(RT2880_SPICFG_REG));
	printf("is busy %d\n", IS_BUSY);
#endif		 	
}



/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	spi_write                                               */
/*    INPUTS: 8-bit data                                                */
/*   RETURNS: None                                                      */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): transfer 8-bit data to SPI                                */
/*                                                                      */
/*----------------------------------------------------------------------*/
static void spi_write(u8 data)
{
	int i;

	for (i=0; i<spi_busy_loop; i++) {
		if (!IS_BUSY) {
			RT2880_REG(RT2880_SPIDATA_REG) = data;
			/* start write transfer */
			RT2880_REG(RT2880_SPICTL_REG) = SPICTL_HIZSDO |  SPICTL_STARTWR | 
											SPICTL_SPIENA_ON;
			break;
		}
	}

#ifdef DBG
	if (i == spi_busy_loop) {
		printf("warning : spi_transfer (write %02x) busy !\n", data);
	}
#endif
}

/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	spi_read                                                */
/*    INPUTS: None                                                      */
/*   RETURNS: 8-bit data                                                */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): get 8-bit data from SPI                                   */
/*                                                                      */
/*----------------------------------------------------------------------*/
static u8 spi_read(void) 
{
	int i;

	/* 
	 * poll busy bit until it is 0 
	 * then start read transfer
	 */
	for (i=0; i<spi_busy_loop; i++) {
		if (!IS_BUSY) {
			RT2880_REG(RT2880_SPIDATA_REG) = 0;
			/* start read transfer */
			RT2880_REG(RT2880_SPICTL_REG) = SPICTL_HIZSDO | SPICTL_STARTRD |
											SPICTL_SPIENA_ON;
			break;
		}
	}

	/* 
	 * poll busy bit until it is 0 
	 * then get data 
	 */
	for (i=0; i<spi_busy_loop; i++) {
		if (!IS_BUSY) {
			break;
		}
	}
	
#ifdef DBG		
	if (i == spi_busy_loop) {
		printf("warning : spi_transfer busy !\n");
	} 
#endif

	return ((u8)RT2880_REG(RT2880_SPIDATA_REG));
}

/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	eeprom_get_status_reg                                   */
/*    INPUTS: pointer to status                                         */
/*   RETURNS: None                                                      */
/*   OUTPUTS: status                                                    */
/*   NOTE(S): get the status of eeprom (AT25xxxx)                       */
/*                                                                      */
/*----------------------------------------------------------------------*/
static void eeprom_get_status_reg(u8 *status) 
{
	spi_chip_select(ENABLE);
	spi_write(RDSR_CMD);
	*status = spi_read();		
	spi_chip_select(DISABLE);
}


/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	eeprom_read                                             */
/*    INPUTS: address - start address to be read                        */ 
/*            nbytes  - number of bytes to be read                      */
/*            dest    - pointer to read buffer                          */
/*   RETURNS: 0 - successful                                            */
/*            or eeprom status                                          */
/*   OUTPUTS: read buffer                                               */
/*   NOTE(S): If the eeprom is busy , the function returns with status  */
/*            register of eeprom                                        */
/*----------------------------------------------------------------------*/
unsigned char spi_eeprom_read(u16 address, u16 nbytes, u8 *dest)
{
	u8	status;
	u16	cnt = 0;
	int i = 0;

	do {
		i++;
		eeprom_get_status_reg(&status);		
	}
	while((status & (1<<RDY)) && (i < max_ee_busy_loop));

	if (i == max_ee_busy_loop)
		return (status);

	/* eeprom ready */
	if (!(status & (1<<RDY))) {	
		spi_chip_select(ENABLE);
		/* read op */
		spi_write(READ_CMD);
		spi_write((u8)(address >> 8));		/* MSB byte First */
		spi_write((u8)(address & 0x00FF));	/* LSB byte */

		while (cnt < nbytes) {
			*(dest++) = spi_read();
			cnt++;
		}
		status = 0;
		/* deassert cs */
		spi_chip_select(DISABLE);
	} 
	return (status);	
}


/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	eeprom_write_enable                                     */
/*    INPUTS: None                                                      */
/*   RETURNS: None                                                      */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): always perform write enable  before any write operation   */
/*                                                                      */
/*----------------------------------------------------------------------*/
static void eeprom_write_enable(void)
{
	unsigned char	status;
	int i = 0;

	do {
		i++;
		eeprom_get_status_reg(&status);		
	}
	while((status & (1<<RDY)) && (i < max_ee_busy_loop));

	if (i == max_ee_busy_loop)
		return;

	/* eeprom ready */
	if (!(status & (1<<RDY))) 
	{	
		spi_chip_select(ENABLE);
		/* always write enable  before any write operation */
		spi_write(WREN_CMD);

		spi_chip_select(DISABLE);
		
		/* wait for write enable */
		do {
			eeprom_get_status_reg(&status);
		} while((status & (1<<RDY)) || !(status & (1<<WEN)));

	}

}

/*----------------------------------------------------------------------*/
/*   Function                                                           */
/*           	eeprom_write                                            */
/*    INPUTS: address - the first byte address to be written            */
/*            nbytes  - the number of bytes to be written               */
/*            src     - the pointer to source buffer                    */     
/*   RETURNS: 0  - successful                                           */
/*            or eeprom buy status                                      */
/*   OUTPUTS: None                                                      */
/*   NOTE(S): The different eeprom has various write page size          */
/* 			  The function don't care write page size so the caller     */
/*            must check the page size of eeprom                        */
/*                                                                      */
/*----------------------------------------------------------------------*/
unsigned char spi_eeprom_write(u16 address, u16 nbytes, u8 *src)
{
	unsigned char	status;
	unsigned int	cnt = 0;
	int i = 0;

	do {
		i++;
		eeprom_get_status_reg(&status);		
	}
	while((status & (1<<RDY)) && (i < max_ee_busy_loop));

	if (i == max_ee_busy_loop)
		goto done;


	/* eeprom ready */
	if (!(status & (1<<RDY))) {			
		/* always write enable  before any write operation */		
		eeprom_write_enable();

		spi_chip_select(ENABLE);
		spi_write(WRITE_CMD);
		spi_write((u8)(address >> 8));		/* MSB byte First */
		spi_write((u8)(address & 0x00FF));	/* LSB byte */

		while (cnt < nbytes) {
			spi_write(src[cnt]);
			cnt++;
		}
		status = 0;
		/* last byte sent then pull #cs high  */
		spi_chip_select(DISABLE);
	} 

	i = 0;
	do {
		i++;
		eeprom_get_status_reg(&status);		
	}
	while((status & (1<<RDY)) && (i < max_ee_busy_loop));

done:
	return (status);
}


int spidrv_open(struct inode *inode, struct file *filp)
{
	return 0;
}

int spidrv_release(struct inode *inode, struct file *filp)
{
	return 0;
}


int spidrv_ioctl (struct inode *inode, struct file *filp, \
                     unsigned int cmd, unsigned long arg)
{
	unsigned int address, value, size;
	SPI_WRITE *spi_write;


	switch (cmd) {
	case RT2880_SPI_READ:
		value = 0; address = 0;

		address = (unsigned int)arg;
		spi_master_init();

		spi_eeprom_read(address, 4, (unsigned char*)&value);
		printk("0x%04x : 0x%08x\n", address, value);
		break;
	case RT2880_SPI_WRITE:
		spi_write = (SPI_WRITE*)arg;
		address = spi_write->address;
		value   = spi_write->value;
		size    = spi_write->size;

		spi_master_init();
		spi_eeprom_write(address, size, (unsigned char*)&value);
		break;
	default :
		printk("spi_drv: command format error\n");
	}

	return 0;
}

struct file_operations spidrv_fops = {
    ioctl:      spidrv_ioctl,
    open:       spidrv_open,
    release:    spidrv_release,
};

static int spidrv_init(void)

{
    SET_MODULE_OWNER(&spidrv_fops);

#ifdef  CONFIG_DEVFS_FS
    if(devfs_register_chrdev(spidrv_major, SPI_DEV_NAME , &spidrv_fops)) {
	printk(KERN_WARNING " spidrv: can't create device node\n");
	return -EIO;
    }

    devfs_handle = devfs_register(NULL, SPI_DEV_NAME, DEVFS_FL_DEFAULT, spidrv_major, 0, 
				S_IFCHR | S_IRUGO | S_IWUGO, &spidrv_fops, NULL);
#else
    int result=0;
    result = register_chrdev(spidrv_major, SPI_DEV_NAME, &spidrv_fops);
    if (result < 0) {
        printk(KERN_WARNING "spi_drv: can't get major %d\n",spidrv_major);
        return result;
    }

    if (spidrv_major == 0) {
	spidrv_major = result; /* dynamic */
    }
#endif

    printk("spidrv_major = %d\n", spidrv_major);
    return 0;

}



static void spidrv_exit(void)
{
    printk("spi_drv exit\n");

#ifdef  CONFIG_DEVFS_FS
    devfs_unregister_chrdev(spidrv_major, SPI_DEV_NAME);
    devfs_unregister(devfs_handle);
#else
    unregister_chrdev(spidrv_major, SPI_DEV_NAME);
#endif

}

module_init(spidrv_init);
module_exit(spidrv_exit);

MODULE_PARM(spidrv_major,"i");
MODULE_LICENSE("GPL");
