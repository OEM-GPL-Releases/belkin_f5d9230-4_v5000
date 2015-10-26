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
    foe_fdb.h

    Abstract:

    Revision History:
    Who         When            What
    --------    ----------      ----------------------------------------------
    Name        Date            Modification logs
    Steven Liu  2006-10-06      Initial version
*/

#include "foe_fdb.h"

#ifndef _RA_NAT_WANTED
#define _RA_NAT_WANTED

/*
 * DEFINITIONS AND MACROS
 */

#define SW_NAT_VER			   "v1.00.000"

/*
 *    16b	1b 1b      14b 
 * +-----------+--+--+-----------+
 * | Magic Tag |A |C |  Hash Num |
 * +-----------+--+--+-----------+
 * |<------FOE Flow Info-------->|
 */

#define FOE_MAGIC_NUM			    0x2880
#define FOE_ALG_FLAGS			    0x8000
#define FOE_CONNTRACKING_FLAGS		    0x4000
#define FOE_BINDING_THRESHOLD		    10

#define FOE_MAGIC_TAG(skb)		    *(unsigned short *)((skb)->head)
#define FOE_HASH_NUM(skb)		    *(unsigned short *)((skb)->head+2)
#define FOE_FLOW_INFO(skb)		    *(unsigned long *)((skb)->head)

// using tailroom
//#define FOE_MAGIC_TAG(skb)		    *(unsigned short *)((skb)->end-4)
//#define FOE_HASH_NUM(skb)		    *(unsigned short *)((skb)->end-2)
//#define FOE_FLOW_INFO(skb)		    *(unsigned long *)((skb)->end-4)


#define MAX_TCP_MSS			    1448

/*
 * TYPEDEFS AND STRUCTURES
 */


/*
 * EXPORT FUNCTION
 */

#endif
