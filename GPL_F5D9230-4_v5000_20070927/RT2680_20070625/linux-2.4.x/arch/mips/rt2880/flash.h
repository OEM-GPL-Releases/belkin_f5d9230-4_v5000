
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
*      Date    Name  Comments
*    --------  ---   ------------------------------------
*    01/31/00  MAS   Created
*
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
 *  Include Files      *
 *=====================*/
#include "pubdefs.h"
#include "product.h"


/*=====================*
 *  Defines            *
 *=====================*/
#define POLARITYBIT ((uint16) 0x0080)
#define TIMEOUTBIT ((uint16) 0x0020)
#define ERASEWINDOW ((uint16) 0x0008)

#define DIAMONDBOARD11

#ifdef DIAMONDBOARD11
  #define FLASH_TYPE                     (AM29LV641DL)
  #define FL_FIRST_SECT_NUM              (AM29LV641DL_FIRST_SECT_NUM)
  #define FL_LAST_SECT_NUM               (AM29LV641DL_LAST_SECT_NUM)
#else
#ifdef GRAPHITEBOARD
  #define FLASH_TYPE                     (AM29LV320DB)
  #define FL_FIRST_SECT_NUM              (AM29LV320DB_FIRST_SECT_NUM)
  #define FL_LAST_SECT_NUM               (AM29LV320DB_LAST_SECT_NUM)
#else /* SURFBOARD or WAKEBOARD */
  #define FLASH_TYPE                     (AS29LV800B)
  #define FL_FIRST_SECT_NUM              (AS29LV800B_FIRST_SECT_NUM)
  #define FL_LAST_SECT_NUM               (AS29LV800B_LAST_SECT_NUM)
#endif
#endif


/**********************************/
/* Alliance Flash chip AS29LV800B */
/**********************************/
#define AS29LV800B_FIRST_SECT_NUM      (0)
#define AS29LV800B_LAST_SECT_NUM       (18)


/******************************/
/* AMD Flash chip AM29LV320DB */
/******************************/
#define AM29LV320DB_FIRST_SECT_NUM     (0)
#define AM29LV320DB_LAST_SECT_NUM      (70)


/******************************/
/* AMD Flash chip AM29LV320DB */
/******************************/
#define AM29LV641DL_FIRST_SECT_NUM     (0)
#define AM29LV641DL_LAST_SECT_NUM      (127)


typedef enum flashType_t
{
    AS29LV800B,    /* Alliance 8 Mbit flash chip */
    AM29LV320DB,   /* AMD 32 Mbit flash chip */
    AM29LV641DL    /* AMD 64 Mbit flash chip */
} flashType;


/*=====================*
 *  External Variables *
 *=====================*/
PUBLIC uint32 flashFailure;


/*=====================*
 *  External Functions *
 *=====================*/
PUBLIC uint16 FlashReadManID( void );
PUBLIC uint32 FlashReadManID32( void );
PUBLIC uint16 FlashReadDevID( void );
PUBLIC uint32 FlashReadDevID32( void );
PUBLIC uint32 FlashSectSize(flashType flash, uint32 width, uint32 sectorNum);
PUBLIC uint32 FlashSectAddr(flashType flash, uint32 width, uint32 sectorNum);
PUBLIC bool FlashWrite(uint16 *source, uint16 *dest, uint32 numBytes);
PUBLIC bool FlashWrite32(uint32 *source, uint32 *dest, uint32 numBytes);
PUBLIC bool FlashVerify(uint16 *source, uint16 *dest, uint32 numBytes);
PUBLIC bool FlashVerify32(uint32 *source, uint32 *dest, uint32 numBytes);
PUBLIC bool FlashErase(uint32 firstSector, uint32 lastSector);
PUBLIC bool FlashErase32(uint32 firstSector, uint32 lastSector);


#endif /* FLASHDEF_H */
