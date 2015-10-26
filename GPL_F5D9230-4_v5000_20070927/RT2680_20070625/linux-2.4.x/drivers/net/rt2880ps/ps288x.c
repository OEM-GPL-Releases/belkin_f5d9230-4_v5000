/*
 ***************************************************************************
 * Ralink Tech Inc.
 * 4F, No. 2 Technology	5th	Rd.
 * Science-based Industrial	Park
 * Hsin-chu, Taiwan, R.O.C.
 *
 * (c) Copyright 2002-2005, Ralink Technology, Inc.
 *
 * All rights reserved.	Ralink's source	code is	an unpublished work	and	the
 * use of a	copyright notice does not imply	otherwise. This	source code
 * contains	confidential trade secret material of Ralink Tech. Any attempt
 * or participation	in deciphering,	decoding, reverse engineering or in	any
 * way altering	the	source code	is stricitly prohibited, unless	the	prior
 * written consent of Ralink Technology, Inc. is obtained.
 ***************************************************************************

    Module Name:
    ps288x.c

    Abstract:
    Insert Pseudo device RT2880 in kernel, so that application(web UI) can control 2880 registers.

    Revision History:
	Who			When		  What
	--------	----------	  ----------------------------------------------
    Roger Lin   Mar-02-2006   Initial version
*/

#define MODULE
#include "ps288x.h"

#include <linux/module.h>
#include <linux/version.h>
#include <linux/init.h>
#include <linux/kernel.h>

#include <asm/io.h>

MODULE_LICENSE("GPL");

struct net_device ps_dev = { \
    init: ps288x_init
};

static int __init ps288x_init_module(void);
static void __exit ps288x_cleanup_module(void);

// =======================================================================
// LOAD / UNLOAD sections
// =======================================================================
//
// Driver module load function
//
static int __init ps288x_init_module(void)
{
	int result;
	
	printk("ps288x_init_module\n");
	
	strcpy(ps_dev.name, "ps0"); // Pseudo device 0
	result = register_netdev(&ps_dev);	
	if (result < 0)
	{
		printk("ps288x_init_module: error %i registering device\n", result);
	}
	return 0;
}

//
// Driver module unload function
//
static void __exit ps288x_cleanup_module(void)
{
	printk("ps288x_cleanup_module\n");
	unregister_netdev(&ps_dev);
}



int __init ps288x_init(struct net_device *dev)
{
	printk("ps288x_init\n");
    SET_MODULE_OWNER(dev);

	ether_setup(dev); // Is this necessary???
    dev->open            = ps288x_open;
    dev->stop            = ps288x_close;
    dev->do_ioctl        = ps288x_ioctl;
	
	dev->priv = NULL; // No private data
    return 0;
}

int ps288x_open(struct net_device *dev)
{
    MOD_INC_USE_COUNT;
    return 0;
}

int ps288x_close(struct net_device *dev)
{
    MOD_DEC_USE_COUNT;
    return 0;
}

int ps288x_ioctl(struct net_device	*net_dev, struct ifreq	*rq, int cmd)
{
    struct iwreq                        *wrq = (struct iwreq *) rq;
    unsigned long rtvalue, offset = 0, baseaddr;
    char *p;

	// Roger debug
	printk("ps288x : ioctl\n");

	switch(cmd)
	{
		case RTPRIV_ICOTL_SYSCTL:
			baseaddr = PS288X_SYSCTL_ADDR;
			break;
			
		case RTPRIV_ICOTL_TIMER:
			baseaddr = PS288X_TIMER_ADDR;
			break;

		case RTPRIV_ICOTL_ITRCTL:
			baseaddr = PS288X_ITRCTL_ADDR;
			break;

		case RTPRIV_ICOTL_MEMCTL:
			baseaddr = PS288X_MEMCTL_ADDR;
			break;

		case RTPRIV_ICOTL_TSTCTL:
			baseaddr = PS288X_TSTCTL_ADDR;
			break;

		case RTPRIV_ICOTL_UART:
			baseaddr = PS288X_UART_ADDR;
			break;

		case RTPRIV_ICOTL_PRGIO:
			baseaddr = PS288X_PRGIO_ADDR;
			break;

		case RTPRIV_ICOTL_LCD:
			baseaddr = PS288X_LCD_ADDR;
			break;

		case RTPRIV_ICOTL_I2C:
			baseaddr = PS288X_I2C_ADDR;
			break;

		case RTPRIV_ICOTL_CLOCK:
			baseaddr = PS288X_CLOCK_ADDR;
			break;

		case RTPRIV_ICOTL_SPI:
			baseaddr = PS288X_SPI_ADDR;
			break;

		case RTPRIV_ICOTL_UARTL:
			baseaddr = PS288X_UARTL_ADDR;
			break;

		case RTPRIV_ICOTL_PCI:
			baseaddr = PS288X_PCI_ADDR;
			break;

		default:
			return -1;
	}

	// offset = atoi(wrq->u.data.pointer); 
	// Roger : Implement an ASCII to hex
	p = wrq->u.data.pointer;
	while (*p != '\0')
	{
		if (*p >= '0' && *p <= '9')
			offset = offset * 16 + *p - 48;
		else 
		{
			if (*p >= 'A' && *p <= 'F')
				offset = offset * 16 + *p - 55;
			else if (*p >= 'a' && *p <= 'f')
				offset = offset * 16 + *p - 87;
		}
		p++;
	}
	printk("Roger debug is %s == %x\n", wrq->u.data.pointer, offset);
	rtvalue = readl((void *)(baseaddr + offset));
	printk("Roger debug: ret value is %x\n", rtvalue);
	memcpy(wrq->u.data.pointer+11, &rtvalue, 4);

	return 0;
}



module_init(ps288x_init_module);
module_exit(ps288x_cleanup_module);

