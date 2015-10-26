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
	ps288x.h

	Abstract:

	Revision History:
	Who			When		  What
	--------	----------	  ----------------------------------------------
    Roger Lin   Mar-02-2006   Initial version
*/

#ifndef	__PS_288X_H__
#define	__PS_288X_H__

#include <linux/netdevice.h>
#include <linux/wireless.h>

#define RTPRIV_ICOTL_SYSCTL		(SIOCIWFIRSTPRIV + 0x01) // system control
#define RTPRIV_ICOTL_TIMER		(SIOCIWFIRSTPRIV + 0x02) // timer
#define RTPRIV_ICOTL_ITRCTL		(SIOCIWFIRSTPRIV + 0x03) // interrupt control
#define RTPRIV_ICOTL_MEMCTL		(SIOCIWFIRSTPRIV + 0x04) // memory control
#define RTPRIV_ICOTL_TSTCTL		(SIOCIWFIRSTPRIV + 0x05) // Test Control
#define RTPRIV_ICOTL_UART		(SIOCIWFIRSTPRIV + 0x06) // UART
#define RTPRIV_ICOTL_PRGIO		(SIOCIWFIRSTPRIV + 0x07) // Programming I/O
#define RTPRIV_ICOTL_LCD		(SIOCIWFIRSTPRIV + 0x08) // LCD
#define RTPRIV_ICOTL_I2C		(SIOCIWFIRSTPRIV + 0x09) // I2C
#define RTPRIV_ICOTL_CLOCK		(SIOCIWFIRSTPRIV + 0x0A) // realtime clock
#define RTPRIV_ICOTL_SPI		(SIOCIWFIRSTPRIV + 0x0B) // SPI
#define RTPRIV_ICOTL_UARTL		(SIOCIWFIRSTPRIV + 0x0C) // UART Lite
#define RTPRIV_ICOTL_PCI		(SIOCIWFIRSTPRIV + 0x0D) // PCI Controller

#define PS288X_SYSCTL_ADDR		0xA0300000 // system control
#define PS288X_TIMER_ADDR		0xA0300100 // timer
#define PS288X_ITRCTL_ADDR		0xA0300200 // interrupt control
#define PS288X_MEMCTL_ADDR		0xA0300300 // memory control
#define PS288X_TSTCTL_ADDR		0xA0300400 // Test Control
#define PS288X_UART_ADDR		0xA0300500 // UART
#define PS288X_PRGIO_ADDR		0xA0300600 // Programming I/O
#define PS288X_LCD_ADDR			0xA0300800 // LCD
#define PS288X_I2C_ADDR			0xA0300900 // I2C
#define PS288X_CLOCK_ADDR		0xA0300A00 // realtime clock
#define PS288X_SPI_ADDR			0xA0300B00 // SPI
#define PS288X_UARTL_ADDR		0xA0300C00 // UART Lite
#define PS288X_PCI_ADDR			0xA0301000 // PCI Controller

int ps288x_init(struct net_device *dev);
int ps288x_open(struct net_device *dev);
int ps288x_close(struct net_device *dev);
int ps288x_ioctl(struct net_device	*net_dev, struct ifreq	*rq, int cmd);

#endif
