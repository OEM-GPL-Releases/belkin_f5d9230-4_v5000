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
#include "ps2880.h"

#ifdef  CONFIG_DEVFS_FS
#include <linux/devfs_fs_kernel.h>
#endif

#if defined(CONFIG_RALINK_RT2880_VER_A)
#define PS2880_WIRELESS_ADDR    0xA0600000 // wireless control
#elif defined(CONFIG_RALINK_RT2880_VER_B)
#define PS2880_WIRELESS_ADDR    0xA0480000 // wireless control
#else
#error Please Choice Chip Version (A/B)
#endif

#define PS2880_DEVNAME	    "ps0"
static int register_control = PS2880_WIRELESS_ADDR;
static devfs_handle_t devfs_handle;
int ps2880_major =  254;


struct file_operations ps2880_fops = {
    ioctl:      ps2880_ioctl,
    open:       ps2880_open,
    release:    ps2880_release,
};


int ps2880_open(struct inode *inode, struct file *filp)
{
	//printk("ps2880_open\n");
	return 0;
}

int ps2880_release(struct inode *inode, struct file *filp)
{
	//printk("ps2880_release\n");
	return 0;
}


int ps2880_ioctl (struct inode *inode, struct file *filp,
                     unsigned int cmd, unsigned long arg)
{
	unsigned long rtvalue, baseaddr, offset;
	
	//printk("ps2880_ioctl\n");
	baseaddr = register_control;
	if (cmd == 0x6b01)
	{
		rtvalue = le32_to_cpu(*(volatile u32 *)(baseaddr + arg));
		printk("0x%x(%d)\n", (int)rtvalue, (int)rtvalue);
	}
	else if (cmd == 0x6b0e)
	{
		register_control = PS2880_SYSCTL_ADDR;
		printk("switch register base addr to system register 0xA0300000\n");
	}
	else if (cmd == 0x6b0f)
	{
		register_control = PS2880_WIRELESS_ADDR;
		printk("switch register base addr to wireless register 0x%08x\n", PS2880_WIRELESS_ADDR);
	}
	else if (cmd == 0x6b0c)
	{
		printk("current register base addr is 0x%08x\n", register_control);
	}
	else if (cmd == 0x6b0d)
	{
		register_control = arg;
		printk("switch register base addr to 0x%08x\n", register_control);
	}
	else
	{
		offset = cmd >> 16;
		*(volatile u32 *)(baseaddr + offset) = cpu_to_le32(arg);
		printk("write offset 0x%x(%lu), value 0x%x(%lu)\n", offset, offset, arg, arg);
	}

	return 0;
}

static int ps2880_init(void)

{
    SET_MODULE_OWNER(&ps2880_fops);

#ifdef  CONFIG_DEVFS_FS
    if(devfs_register_chrdev(ps2880_major, PS2880_DEVNAME , &ps2880_fops)) {
	printk(KERN_WARNING " ps2880: can't create device node - ps2880\n");
	return -EIO;
    }

    devfs_handle = devfs_register(NULL, PS2880_DEVNAME, DEVFS_FL_DEFAULT, ps2880_major, 0, 
				S_IFCHR | S_IRUGO | S_IWUGO, &ps2880_fops, NULL);
#else
    int result=0;
    result = register_chrdev(ps2880_major, PS2880_DEVNAME, &ps2880_fops);
    if (result < 0) {
        printk(KERN_WARNING "ps2880: can't get major %d\n",ps2880_major);
        return result;
    }

    if (ps2880_major == 0) {
	ps2880_major = result; /* dynamic */
    }
#endif

    printk("ps2880_major = %d\n", ps2880_major);
    return 0;

}



static void ps2880_exit(void)
{
    printk("ps2880_exit\n");

#ifdef  CONFIG_DEVFS_FS
    devfs_unregister_chrdev(ps2880_major, PS2880_DEVNAME);
    devfs_unregister(devfs_handle);
#else
    unregister_chrdev(ps2880_major, PS2880_DEVNAME);
#endif

}

module_init(ps2880_init);
module_exit(ps2880_exit);

MODULE_PARM(ps2880_major,"i");
MODULE_LICENSE("GPL");
