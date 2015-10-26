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
 */

#ifndef __RT2880_GPIO_H__
#define __RT2880_GPIO_H__


/*
 * ioctl commands
 */
#define	RT2880GPIO_SET_DIR		0x01
#define	RT2880GPIO_READ			0x02
#define	RT2880GPIO_WRITE		0x03
#define	RT2880GPIO_READ_BIT		0x04
#define	RT2880GPIO_WRITE_BIT		0x05
#define	RT2880GPIO_READ_BYTE		0x06
#define	RT2880GPIO_WRITE_BYTE		0x07
#define	RT2880GPIO_READ_INT		0x02 //same as read
#define	RT2880GPIO_WRITE_INT		0x03 //same as write
#define RT2880GPIO_ENABLE_INTP		0x08
#define RT2880GPIO_DISABLE_INTP		0x09
#define RT2880GPIO_REG_IRQ		0x0A

#define FLASH_MAX_RW_SIZE		0x100


/*
 * Address of RT2880 Registers
 */
#define RT2880_SYSCTL_ADDR		0xA0300000 // system control
#define RT2880_REG_GPIOMODE		(RT2880_SYSCTL_ADDR + 0x60)
#define RT2880_REG_SYSCFG		  (RT2880_SYSCTL_ADDR + 0x10)

#define RT2880_IRQ_ADDR			0xA0300200
#define RT2880_REG_INTENA		(RT2880_IRQ_ADDR + 0x34)
#define RT2880_REG_INTDIS		(RT2880_IRQ_ADDR + 0x38)

#define RT2880_PRGIO_ADDR		0xA0300600 // Programmable I/O
#define RT2880_REG_PIOINT		(RT2880_PRGIO_ADDR + 0)
#define RT2880_REG_PIOEDGE		(RT2880_PRGIO_ADDR + 0x04)
#define RT2880_REG_PIORENA		(RT2880_PRGIO_ADDR + 0x08)
#define RT2880_REG_PIOFENA		(RT2880_PRGIO_ADDR + 0x0C)
#define RT2880_REG_PIODATA		(RT2880_PRGIO_ADDR + 0x20)
#define RT2880_REG_PIODIR		(RT2880_PRGIO_ADDR + 0x24)
#define RT2880_REG_PIOPOL		(RT2880_PRGIO_ADDR + 0x28)


/*
 * Values for the GPIOMODE Register
 */
#define RT2880_GPIOMODE_I2C		0x01
#define RT2880_GPIOMODE_SPI		0x02
#define RT2880_GPIOMODE_UART1		0x04
#define RT2880_GPIOMODE_UART2		0x08
//to use gpio 8,10,13, you also have to set UARTF_PCM_MODE to UART mode
#define RT2880_GPIOMODE_JTAG		0x10
#define RT2880_GPIOMODE_MDIO		0x20
#define RT2880_GPIOMODE_SDRAM		0x40
#define RT2880_GPIOMODE_PCI		0x80
// if you would like to enable GPIO mode for other pins, please modify this value
// !! Warning: changing this value may make other features(MDIO, PCI, etc) lose efficacy
#define RT2880_GPIOMODE_DFT		(RT2880_GPIOMODE_SPI)

/*
 * bit is the unit of length
 */
#define RT2880GPIO_DATA_MASK		0x00FFFFFF
#define RT2880GPIO_DATA_LEN		24
#define RT2880GPIO_DIR_IN		0
#define RT2880GPIO_DIR_OUT		1
#define RT2880GPIO_DIR_ALLIN		0
//#define RT2880GPIO_DIR_ALLOUT		0x00FFFFFF
#define RT2880GPIO_DIR_ALLOUT		0x00FFBDFF

/*
 * structure used at regsitration
 */
typedef struct {
	unsigned int irq;		//request irq pin number
	pid_t pid;			//process id to notify
} rt2880gpio_reg_info;

#endif
