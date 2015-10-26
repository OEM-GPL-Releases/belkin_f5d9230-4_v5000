#ifndef __I2CDRV
#define __I2CDRV

#define	RT2880_I2C_READ_STR		"read"	/* I2C read operation */
#define	RT2880_I2C_WRITE_STR		"write"	/* I2C read operation */

#define RT2880_I2C_READ        3
#define RT2880_I2C_WRITE       5

#define I2C_DEV_NAME	"i2cM0"

typedef struct i2c_write_data {
	unsigned long address;
	unsigned long value;
	unsigned long size;
} I2C_WRITE;


/*---------------------------------------------------------------------*/
/* Symbol & Macro Definitions                                          */
/*---------------------------------------------------------------------*/

#define	RT2880_REG(x)						(*((volatile u32 *)(x)))
#define	RT2880_RSTCTRL_REG			(0xA0300034)

#define RSTCTRL_I2C_RESET		(1<<9)

#define RT2880_I2C_REG_BASE			(0xA0300900)
#define RT2880_I2C_CONFIG_REG		(RT2880_I2C_REG_BASE+0x00)
#define RT2880_I2C_CLKDIV_REG		(RT2880_I2C_REG_BASE+0x04)
#define RT2880_I2C_DEVADDR_REG		(RT2880_I2C_REG_BASE+0x08)
#define RT2880_I2C_ADDR_REG			(RT2880_I2C_REG_BASE+0x0C)
#define RT2880_I2C_DATAOUT_REG	 	(RT2880_I2C_REG_BASE+0x10)
#define RT2880_I2C_DATAIN_REG  		(RT2880_I2C_REG_BASE+0x14)
#define RT2880_I2C_STATUS_REG  		(RT2880_I2C_REG_BASE+0x18)
#define RT2880_I2C_STARTXFR_REG		(RT2880_I2C_REG_BASE+0x1C)
#define RT2880_I2C_BYTECNT_REG		(RT2880_I2C_REG_BASE+0x20)


/* I2C_CFG register bit field */
#define I2C_CFG_ADDRLEN_8				(7<<5)	/* 8 bits */
#define I2C_CFG_DEVADLEN_7				(6<<2)	/* 7 bits */
#define I2C_CFG_ADDRDIS					(1<<1)	/* disable address transmission*/
#define I2C_CFG_DEVADDIS				(1<<0)	/* disable evice address transmission */


#define IS_BUSY		(RT2880_REG(RT2880_I2C_STATUS_REG) & 0x01)
#define IS_SDOEMPTY	(RT2880_REG(RT2880_I2C_STATUS_REG) & 0x02)
#define IS_DATARDY	(RT2880_REG(RT2880_I2C_STATUS_REG) & 0x04)


/*
 * max SCLK : 400 KHz (2.7V)
 * assumed that BUS CLK is 150 MHZ 
 * so DIV 375
 * SCLK = PB_CLK / (2*CLKDIV)
 */
#ifndef FPGA_BOARD_RT2880
#define CLKDIV_VALUE	375
#else
#define CLKDIV_VALUE	60
#endif 

#define i2c_busy_loop 	(CLKDIV_VALUE*30)
#define max_ee_busy_loop	(CLKDIV_VALUE*25)
						  

/* 
 * AT24C01A/02/04/08A/16A (1K, 2K, 4K, 8K, 16K) 
 *	-- address : 8-bits
 * AT24C512 (512K)
 *  -- address : two 8-bits
 */    
#if (CONFIG_EEPROM_ADDRESS_BYTES == 2)
#define ADDRESS_BYTES	2
#else
#define ADDRESS_BYTES	1
#endif

/* 
 * sequential reads
 * because BYTECNT REG max 64 (6-bits)
 * , max READ_BLOCK is 64 
 */
#define READ_BLOCK		16

/*
 * AT24C01A/02 (1K, 2K)  have 8-byte Page
 */
#define WRITE_BLOCK		8


/*
 * ATMEL AT25XXXX Serial EEPROM 
 * access type
 */

/* Instruction codes */
#define READ_CMD	0x01
#define WRITE_CMD	0x00


#define I2C_CFG_DEFAULT			(I2C_CFG_ADDRLEN_8  | \
								 I2C_CFG_DEVADLEN_7 | \
								 I2C_CFG_ADDRDIS)

#endif
