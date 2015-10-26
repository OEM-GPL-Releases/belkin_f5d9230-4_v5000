
/******************************************************************************
*
* (c) Copyright 1996-97, Palmchip Corporation
*
* This document is an unpublished work protected under the copyright laws
* of the United States containing the confidential, proprietary and trade
* secret information of Palmchip Corporation. This document may not be
* copied or reproduced in any form whatsoever without the express written
* permission of Palmchip Corporation.
*
*******************************************************************************
*
*  File Name: flash.h
*     Author: Mark Seagoe 
*
*******************************************************************************
*
* Revision History:
*
*      Date    Name    Comments
*    --------  ---   -------------------------------------------------
*    01/31/00  MAS     Created
*    11/08/06  Steven  Flash operation based on man_id & dev_id
*
*
*******************************************************************************/
/* FILE_DESC ******************************************************************/
//
// Purpose:
//    This file contains all the Flash defines & function prototypes.
//
// Sp. Notes:
//    It is extremenly important that you follow the coding style. The utility
//    program will extract out the comment to generate the programmer's guide.
//
/******************************************************************************/

#ifndef FLASHDEF_H
#define FLASHDEF_H

/*=====================*
 *  Defines            *
 *=====================*/
#define POLARITY_BIT		((uint16_t) 0x0080)
#define TIMEOUT_BIT		((uint16_t) 0x0020)
#define ERASE_WINDOW		((uint16_t) 0x0008)

#define MAX_SECTOR_GROUPS	10  
#define KBYTES(x)		((x)*1024)
#define MAX_SECTOR_SIZE	    	KBYTES(64) /* the max sector size in all sectors */
#define MAX_FLSH_TBL		(sizeof(flsh_tbl) / sizeof(struct flsh_dev))

//#define FL_BASE               ((uint32_t)KSEG1ADDR(0x1C400000))
#define FL_BASE                 CONFIG_FLASH_PHYSMAP_START

/* Address interface to flash (which is always set to 16-bit mode):
 * When memory controller (MAC) is configured to access flash/ROM using
 * 16-bit width:  program address = flash address << 1
 * 32-bit width:  program address = flash address << 2
 */
#define FL_ADDR_SHIFT_16               (1)


/* Flash register addresses */
#define FL_MFR_ID                      (0x000)
#define FL_DEV_ID                      (0x001)

// kaiker,define for SST
#define SST_FL_CMD1                    (0x5555)
#define SST_FL_CMD2                    (0x2AAA)
#define SST_FL_CMD1_REG_16             FL_REG_16(SST_FL_CMD1<<FL_ADDR_SHIFT_16)
#define SST_FL_CMD2_REG_16             FL_REG_16((SST_FL_CMD2 << FL_ADDR_SHIFT_16))
#define SST_FL_MANUFACT                (0xBF)

#define FL_CMD1                        (0x555)
#define FL_CMD2                        (0x2AA)

#define FL_REG_16(x)			(*((volatile uint16_t *)(FL_BASE + (x))))
#define FL_REG_32(x)			(*((volatile uint32_t *)(FL_BASE + (x))))

/* Defines of flash register locations: 16-bit access width */
#define FL_BASE_REG_16                 FL_REG_16(0)
#define FL_MFR_REG_16                  FL_REG_16(FL_MFR_ID<<FL_ADDR_SHIFT_16)
#define FL_DEV_REG_16                  FL_REG_16(FL_DEV_ID<<FL_ADDR_SHIFT_16)
#define FL_CMD1_REG_16                 FL_REG_16(FL_CMD1<<FL_ADDR_SHIFT_16)
#define FL_CMD2_REG_16                 FL_REG_16((FL_CMD2 << FL_ADDR_SHIFT_16))

/*=====================*
 *  External Functions *
 *=====================*/
uint16_t FlashReadManID( void );
uint16_t FlashReadDevID( void );
void FlashDumpSect(void);


int32_t FlashSectSize(uint32_t sector_num);
int32_t FlashSectNum(uint32_t sector_addr);
int32_t FlashSectAddr(uint32_t sector_num); 
int32_t FlashRead(uint32_t *dst, uint32_t *src, uint32_t numBytes);
int32_t FlashWrite(uint16_t *source, uint16_t *dest, uint32_t numBytes);
int32_t FlashVerify(uint16_t *source, uint16_t *dest, uint32_t numBytes);
int32_t FlashErase(uint32_t firstSector, uint32_t lastSector);

#endif /* FLASHDEF_H */
