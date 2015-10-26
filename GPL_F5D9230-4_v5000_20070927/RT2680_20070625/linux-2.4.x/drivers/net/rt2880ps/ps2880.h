
#ifndef	__PS_2880_H__
#define	__PS_2880_H__

#include <linux/fs.h>       /* everything... */

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

#define PS2880_SYSCTL_ADDR		0xA0300000 // system control

int ps2880_open(struct inode *inode, struct file *filp);
int ps2880_release(struct inode *inode, struct file *filp);
int ps2880_ioctl (struct inode *inode, struct file *filp,
                     unsigned int cmd, unsigned long arg);


#endif
