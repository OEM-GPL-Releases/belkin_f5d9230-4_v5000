/*
 ***************************************************************************
 * Ralink Tech Inc.
 * 4F, No. 2 Technology 5th Rd.
 * Science-based Industrial Park
 * Hsin-chu, Taiwan, R.O.C.
 *
 * (c) Copyright 2002-2006, Ralink Technology, Inc.
 *
 * All rights reserved. Ralink's source code is an unpublished work and the
 * use of a copyright notice does not imply otherwise. This source code
 * contains confidential trade secret material of Ralink Tech. Any attempt
 * or participation in deciphering, decoding, reverse engineering or in any
 * way altering the source code is stricitly prohibited, unless the prior
 * written consent of Ralink Technology, Inc. is obtained.
 ***************************************************************************

    Module Name:
    sw_nat_ioctl.h

    Abstract:

    Revision History:
    Who         When            What
    --------    ----------      ----------------------------------------------
    Name        Date            Modification logs
    Steven Liu  2006-10-06      Initial version
*/

#ifndef	__SW_NAT_IOCTL_H__
#define	__SW_NAT_IOCTL_H__

#define SW_NAT_DEBUG	   		(0x01)

#define SW_NAT_DEVNAME			"swnat0"
#define SW_NAT_MAJOR			(210)

struct sw_nat_args {
	unsigned int    debug;
};

int RegSwNatIoctlHandler(void);
void UnRegSwNatIoctlHandler(void);

#endif
