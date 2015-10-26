/*
 ***************************************************************************
 * Ralink Tech Inc.
 * 4F, No. 2 Technology 5th Rd.
 * Science-based Industrial Park
 * Hsin-chu, Taiwan, R.O.C.
 *
 * (c) Copyright, Ralink Technology, Inc.
 *
 * All rights reserved. Ralink's source code is an unpublished work and the
 * use of a copyright notice does not imply otherwise. This source code
 * contains confidential trade secret material of Ralink Tech. Any attemp
 * or participation in deciphering, decoding, reverse engineering or in any
 * way altering the source code is stricitly prohibited, unless the prior
 * written consent of Ralink Technology, Inc. is obtained.
 ***************************************************************************
 *
 * $Id: rt2880_gpio.c,v 1.4 2007-06-29 02:26:38 winfred Exp $
 */
#include <linux/init.h>
#include <linux/module.h>
#include <linux/config.h>
#include <linux/kernel.h>
#include <linux/interrupt.h>
#include <asm/uaccess.h>
#include "rt2880_gpio.h"

#ifdef  CONFIG_DEVFS_FS
#include <linux/devfs_fs_kernel.h>
static  devfs_handle_t devfs_handle;
#endif

#define NAME			"rt2880_gpio"
#define RT2880GPIO_DEVNAME	"gpio"
int rt2880gpio_major = 220;
u32 rt2880gpio_intp = 0;
int rt2880gpio_irqnum = 0;
u32 rt2880gpio_edge = 0;
#define RT2880GPIO_MAX_INFO (RT2880GPIO_DATA_LEN)
rt2880gpio_reg_info rt2880gpio_info[RT2880GPIO_MAX_INFO];

MODULE_DESCRIPTION("Ralink RT2880 SoC GPIO Driver");
MODULE_AUTHOR("Winfred Lu <winfred_lu@ralinktech.com.tw>");
MODULE_LICENSE("GPL");
rt2880gpio_reg_info info;


int rt2880gpio_ioctl(struct inode *inode, struct file *file, unsigned int req,
		unsigned long arg)
{
	unsigned long idx, tmp;
	rt2880gpio_reg_info info;

	idx = (req >> RT2880GPIO_DATA_LEN) & 0xFFL;
	req &= RT2880GPIO_DATA_MASK;

	switch(req) {
	case RT2880GPIO_SET_DIR:
		*(volatile u32 *)(RT2880_REG_PIODIR) = cpu_to_le32(arg);
		break;
	case RT2880GPIO_READ: //RT2880GPIO_READ_INT
		//Gemtek:Return RT2880_REG_PIODIR value for Read GPIO , 
		//since it seems the GPIO bit can only be controlled by this register
		//tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODATA));
		tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODIR));
		put_user(tmp, (int __user *)arg);
		break;
	case RT2880GPIO_WRITE: //RT2880GPIO_WRITE_INT
		*(volatile u32 *)(RT2880_REG_PIODATA) = cpu_to_le32(arg);
		break;
	case RT2880GPIO_READ_BIT:
		tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODATA));
		if (0L <= idx && idx < RT2880GPIO_DATA_LEN) {
			tmp = (tmp >> idx) & 1L;
			put_user(tmp, (int __user *)arg);
		}
		else
			return -EINVAL;
		break;
	case RT2880GPIO_WRITE_BIT:
		if (0L <= idx && idx < RT2880GPIO_DATA_LEN) {
			//Gemtek:Set POL to 1 of the index bit , so we can change the pin value
			tmp =le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIOPOL));
			tmp |= (1L << idx);
			*(volatile u32 *)(RT2880_REG_PIOPOL)= cpu_to_le32(tmp);
			//Gemtek:Set the real GPIO data
			tmp =le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODATA));
			printk("tmp from cpu %08x\n" , tmp);
			if (arg & 1L)
				tmp |= (1L << idx);
			else
				tmp &= ~(1L << idx);

			*(volatile u32 *)(RT2880_REG_PIODATA)= cpu_to_le32(tmp);
			printk("gpio:%d , value:%d\n" , idx , arg);
			printk("new tmp %08x\n" , tmp);
			
		}
		else
			return -EINVAL;
		break;
	case RT2880GPIO_READ_BYTE:
		tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODATA));
		if (0L <= idx && idx < RT2880GPIO_DATA_LEN/8) {
			tmp = (tmp >> idx*8) & 0xFFL;
			put_user(tmp, (int __user *)arg);
		}
		else
			return -EINVAL;
		break;
	case RT2880GPIO_WRITE_BYTE:
		if (0L <= idx && idx < RT2880GPIO_DATA_LEN/8) {
			tmp =le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIODATA));
			tmp &= ~(0xFFL << idx*8);
			tmp |= ((arg & 0xFFL) << idx*8);
			*(volatile u32 *)(RT2880_REG_PIODATA)= cpu_to_le32(tmp);
		}
		else
			return -EINVAL;
		break;
	case RT2880GPIO_ENABLE_INTP:
		*(volatile u32 *)(RT2880_REG_INTENA) = cpu_to_le32(0x8);
		break;
	case RT2880GPIO_DISABLE_INTP:
		*(volatile u32 *)(RT2880_REG_INTDIS) = cpu_to_le32(0x8);
		break;
	case RT2880GPIO_REG_IRQ:
		copy_from_user(&info, (rt2880gpio_reg_info *)arg, sizeof(info));
		if (0 <= info.irq && info.irq < RT2880GPIO_MAX_INFO) {
			rt2880gpio_info[info.irq].pid = info.pid;
		tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIORENA));
			tmp |= (0x1 << info.irq);
			*(volatile u32 *)(RT2880_REG_PIORENA) = cpu_to_le32(tmp);
		tmp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIOFENA));
			tmp |= (0x1 << info.irq);
			*(volatile u32 *)(RT2880_REG_PIOFENA) = cpu_to_le32(tmp);
		}
		else
			printk(KERN_ERR NAME ": irq number(%d) out of range\n",
					info.irq);
		break;
	default:
		return -ENOIOCTLCMD;
	}
	return 0;
}

int rt2880gpio_open(struct inode *inode, struct file *file)
{
	MOD_INC_USE_COUNT;
	return 0;
}

int rt2880gpio_release(struct inode *inode, struct file *file)
{
	MOD_DEC_USE_COUNT;
	return 0;
}

struct file_operations rt2880gpio_fops =
{
	owner:		THIS_MODULE,
	ioctl:		rt2880gpio_ioctl,
	open:		rt2880gpio_open,
	release:	rt2880gpio_release,
};

int __init rt2880gpio_init(void)
{
	unsigned int i;
        unsigned long tmp;
	SET_MODULE_OWNER(&rt2880gpio_fops);

#ifdef  CONFIG_DEVFS_FS
	if (devfs_register_chrdev(rt2880gpio_major, RT2880GPIO_DEVNAME,
				&rt2880gpio_fops)) {
		printk(KERN_ERR NAME ": unable to register character device\n");
		return -EIO;
	}
	devfs_handle = devfs_register(NULL, RT2880GPIO_DEVNAME,
			DEVFS_FL_DEFAULT, rt2880gpio_major, 0,
			S_IFCHR | S_IRUGO | S_IWUGO, &rt2880gpio_fops, NULL);
#else
	int r = 0;
	r = register_chrdev(rt2880gpio_major, RT2880GPIO_DEVNAME,
			&rt2880gpio_fops);
	if (r < 0) {
		printk(KERN_ERR NAME ": unable to register character device\n");
		return r;
	}
	if (rt2880gpio_major == 0) {
		rt2880gpio_major = r;
		printk(KERN_DEBUG NAME ": got dynamic major %d\n", r);
	}
#endif

	//config these pins to gpio mode
	*(volatile u32 *)(RT2880_REG_GPIOMODE) =
		cpu_to_le32(RT2880_GPIOMODE_DFT);
	//Gemtek:According to Ralink , inorder to access GPIO 8,10,13 , 
	//we need to set 4 of UART-Full pins as normal UART 	
	tmp = le32_to_cpu( *(volatile u32 *)(RT2880_REG_SYSCFG) ) ;
	tmp = tmp & 0xFFFFFBF ;//Set bit 6 to 0 , turn off PCM funtion
	*(volatile u32 *)(RT2880_REG_SYSCFG) = cpu_to_le32(tmp);
	
	printk("Ralink RT2880 gpio mode %08x\n" ,*(volatile u32 *)(RT2880_REG_GPIOMODE));	
	//enable gpio interrupt
	*(volatile u32 *)(RT2880_REG_INTENA) = cpu_to_le32(0x8);
	for (i = 0; i < RT2880GPIO_MAX_INFO; i++) {
		rt2880gpio_info[i].irq = i;
		rt2880gpio_info[i].pid = 0;
	}
	printk("Ralink RT2880 gpio driver initialized\n");
	return 0;
}

void __exit rt2880gpio_exit(void)
{
#ifdef  CONFIG_DEVFS_FS
	devfs_unregister_chrdev(rt2880gpio_major, RT2880GPIO_DEVNAME);
	devfs_unregister(devfs_handle);
#else
	unregister_chrdev(rt2880gpio_major, RT2880GPIO_DEVNAME);
#endif

	//config these pins to normal mode
	*(volatile u32 *)(RT2880_REG_GPIOMODE) = 0;
	//disable gpio interrupt
	*(volatile u32 *)(RT2880_REG_INTDIS) = cpu_to_le32(0x8);
	printk("Ralink RT2880 gpio driver exited\n");
}

/*
 * send a signal(SIGUSR1) to the registered user process whenever any gpio
 * interrupt comes
 * (called by interrupt handler)
 */
void rt2880gpio_notify_user(int usr)
{
	struct task_struct *p = NULL;

	if (rt2880gpio_irqnum < 0 || RT2880GPIO_MAX_INFO <= rt2880gpio_irqnum) {
		printk(KERN_ERR NAME ": gpio irq number out of range\n");
		return;
	}

	//don't send any signal if pid is 0 or 1
	if ((int)rt2880gpio_info[rt2880gpio_irqnum].pid < 2)
		return;
	p = find_task_by_pid(rt2880gpio_info[rt2880gpio_irqnum].pid);
	if (NULL == p) {
		printk(KERN_ERR NAME ": no registered process to notify\n");
		return;
	}

	if (usr == 1) {
		printk(KERN_NOTICE NAME ": sending a SIGUSR1 to process %d\n",
				rt2880gpio_info[rt2880gpio_irqnum].pid);
	send_sig(SIGUSR1, p, 0);
}
	else if (usr == 2) {
		printk(KERN_NOTICE NAME ": sending a SIGUSR2 to process %d\n",
				rt2880gpio_info[rt2880gpio_irqnum].pid);
		send_sig(SIGUSR2, p, 0);
	}
}

/*
 * 1. save the PIOINT and PIOEDGE value
 * 2. clear PIOINT by writing 1
 * (called by interrupt handler)
 */
void rt2880gpio_save_clear_intp(void)
{
	rt2880gpio_intp = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIOINT));
	rt2880gpio_edge = le32_to_cpu(*(volatile u32 *)(RT2880_REG_PIOEDGE));
	*(volatile u32 *)(RT2880_REG_PIOINT) = cpu_to_le32(0x00FFFFFF);
	*(volatile u32 *)(RT2880_REG_PIOEDGE) = cpu_to_le32(0x00FFFFFF);
}

void rt2880gpio_irq_handler(unsigned int irq, struct irqaction *irqaction)
{
	extern unsigned long volatile jiffies;
	struct gpio_time_record {
		unsigned long falling;
		unsigned long rising;
	};
	static struct gpio_time_record record[RT2880GPIO_MAX_INFO];
	unsigned long now;
	int i;

	rt2880gpio_save_clear_intp();
	now = jiffies;
	for (i = 0; i < RT2880GPIO_MAX_INFO; i++) {
		if (! (rt2880gpio_intp & (1 << i)))
			continue;
		rt2880gpio_irqnum = i;
		if (rt2880gpio_edge & (1 << i)) { //rising edge
			if (record[i].rising != 0 && time_before_eq(now,
						record[i].rising + 30L)) {
	/*
				 * If the interrupt comes in a short period,
				 * it might be floating. We ignore it.
	 */
			}
			else {
				record[i].rising = now;
				if (time_before(now, record[i].falling + 200L)) {
					//one click
					rt2880gpio_notify_user(1);
				}
				else {
					//press for several seconds
					rt2880gpio_notify_user(2);
				}
			}
		}
		else { //falling edge
			record[i].falling = now;
		}
		break;
	}
}

struct irqaction rt2880gpio_irqaction = {
	rt2880gpio_irq_handler,
	SA_INTERRUPT,
	0,
	"rt2880_gpio",
	NULL,
	NULL
};

void __init rt2880gpio_init_irq(void)
{
	setup_irq(7, &rt2880gpio_irqaction);
}

module_init(rt2880gpio_init);
module_exit(rt2880gpio_exit);

