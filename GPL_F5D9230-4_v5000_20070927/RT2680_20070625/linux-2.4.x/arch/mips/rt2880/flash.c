/******************************************************************************
*
* (c) Copyright 1996-2001, Palmchip Corporation
*
* This document is an unpublished work protected under the copyright laws
* of the United States containing the confidential, proprietary and trade
* secret information of Palmchip Corporation. This document may not be
* copied or reproduced in any form whatsoever without the express written
* permission of Palmchip Corporation.
*
*******************************************************************************
*
*  File Name: flash.c
*     Author: Mark Seagoe
*
*******************************************************************************
*
* Revision History:
*
*      Date    Name  Comments
*    --------  ---   ------------------------------------
*    01/31/00  MAS   Created
*    03/21/01  IST   Removed inlines
*
*
*******************************************************************************/

/* FILE_DESC ******************************************************************/
//
// Purpose:
//    This file contains all Flash related functions.
//    Flash is assumed to be AS29LV800B or equivalent,
//    as mounted on Palmchip Surfboard PCB.
//
// Sp. Notes: This Library requires timer block.
//    Read mode command is inserted before any other commands
//    to compensate for corruption caused by some emulators.
//    Each functionality is implemented as two functions -
//    one for 16-bit wide flash, one for 32-bit wide flash
//    (2 16-bit wide flash in parallel).
//
/******************************************************************************/

/*=====================*
 *  Include Files      *
 *=====================*/
//#include "cpu.h"
#include "flash.h"
#include <linux/module.h>

#define KSEG_MSK                  0xE0000000
#define KSEG0BASE                 0x80000000
#define KSEG1BASE                 0xA0000000
#define KSEG2BASE                 0xC0000000
#define KSEG3BASE                 0xE0000000
#define KUSEGBASE                 0x00000000
#define UNCACHED(addr)            (((addr) & ~KSEG_MSK) | KSEG1BASE)


/*=====================*
 *  Defines            *
 *=====================*/
/* compensated for word addressing (A0 doesn't go to flash) */
#ifdef GRAPHITEBOARD
#define FL_BASE                        ((uint32)UNCACHED(0x1F800000))
#else
#define FL_BASE                        ((uint32)UNCACHED(MAC_ROM_BASE))
#endif


/* Address interface to flash (which is always set to 16-bit mode):
** When memory controller (MAC) is configured to access flash/ROM using
** 16-bit width:  program address = flash address << 1
** 32-bit width:  program address = flash address << 2
*/
#define FL_ADDR_SHIFT_16               (1)
#define FL_ADDR_SHIFT_32               (2)


/**********************************/
/* Alliance Flash chip AS29LV800B */
/**********************************/

/* These are defined in flash.h so that defines FL_FIRST_SECT_NUM and
** FL_LAST_SECT_NUM flash.h can be resolved properly.
**
** #define AS29LV800B_FIRST_SECT_NUM      (0)
** #define AS29LV800B_LAST_SECT_NUM       (18)
*/


/* Sizes for a flash chip set to 16-bit mode.
** For development boards, each flash chip is always set to 16-bit mode.
*/
#define AS29LV800B_SECT_0_SIZE         (8 << 10)    /*  8 K words */
#define AS29LV800B_SECT_1_SIZE         (4 << 10)    /*  4 K words */
#define AS29LV800B_SECT_2_SIZE         (4 << 10)    /*  4 K words */
#define AS29LV800B_SECT_3_SIZE         (16 << 10)   /* 16 K words */
#define AS29LV800B_SECT_x_SIZE         (32 << 10)   /* 32 K words */


/* Equation to calculate flash sector offset address.
** To get the program address, must shift this value by the appropriate
**   FL_ADDR_SHIFT_* and then add it to the base address of the flash.
**   (ex.  progAddr = (AS29LV800B_SECT_x_OFF(sectNum) << FL_ADDR_SHIFT_16)
**                    + FL_BASE;
** The following equation works because the combined size of sectors 0 to 3 is
**   the same size as each of the remaining sectors.  So, after sector 3,
**   the sector offset can be calculated based on the sector number.
** Also use the fact that AS29LV800B_SECT_x_SIZE = (32 << 10) = (1 << 15)
**   to avoid multiplication in the equation.
*/
#define AS29LV800B_SECT_x_OFF(sect)    (((sect) - 3) << 15)

/******************************/
/* AMD Flash chip AM29LV320DB */
/******************************/

/* These are defined in flash.h so that defines FL_FIRST_SECT_NUM and
** FL_LAST_SECT_NUM flash.h can be resolved properly.
**
** #define AM29LV320DB_FIRST_SECT_NUM     (0)
** #define AM29LV320DB_LAST_SECT_NUM      (70)
*/


/* Sizes for a flash chip set to 16-bit mode.
** For development boards, each flash chip is always set to 16-bit mode.
*/
#define AM29LV320DB_SECT_0_7_SIZE      (4 << 10)    /*  4 K words */
#define AM29LV320DB_SECT_x_SIZE        (32 << 10)   /* 32 K words */

/* Equation to calculate flash sector offset address.
** To get the program address, must shift this value by the appropriate
**   FL_ADDR_SHIFT_* and then add it to the base address of the flash.
**   (ex.  progAddr = (AM29LV320DB_SECT_x_OFF(sectNum) << FL_ADDR_SHIFT_16)
**                    + FL_BASE;
** The first equation works because for sectors 0 to 7 the sectors are the same
**   size, so the sector offset can be calculated based on the sector number.
** The second equation works because the combined size of sectors 0 to 7 is the
**   same size as each of the remaining sectors.  So, after sector 7,
**   the sector offset can be calculated based on the sector number.
** Also use the facts that AM29LV320DB_SECT_0_7_SIZE = (4 << 10) = (1 << 12)
**   and AM29LV320DB_SECT_x_SIZE = (32 << 10) = (1 << 15)
**   to avoid multiplication in the equations.
*/
#define AM29LV320DB_SECT_0_7_OFF(sect) ((sect) << 12)
#define AM29LV320DB_SECT_x_OFF(sect)   (((sect) - 7) << 15)

/******************************/
/* AMD Flash chip AM29LV641DL */
/******************************/

/* These are defined in flash.h so that defines FL_FIRST_SECT_NUM and
** FL_LAST_SECT_NUM flash.h can be resolved properly.
**
** #define AM29LV641DL_FIRST_SECT_NUM     (0)
** #define AM29LV641DL_LAST_SECT_NUM      (127)
*/


/* Sizes for a flash chip set to 16-bit mode.
** For development boards, each flash chip is always set to 16-bit mode.
*/
#define AM29LV641DL_SECT_x_SIZE        (32 << 10)   /* 32 K words */

/* Equation to calculate flash sector offset address.
** To get the program address, must shift this value by the appropriate
**   FL_ADDR_SHIFT_* and then add it to the base address of the flash.
**   (ex.  progAddr = (AM29LV641DL_SECT_x_OFF(sectNum) << FL_ADDR_SHIFT_16)
**                    + FL_BASE;
** The following equation works because all sectors are the same size, so
**   all sector offsets can be calculated based on the sector number.
** Also use the fact that AM29LV641DL_SECT_x_SIZE = (32 << 10) = (1 << 15)
**   to avoid multiplication in the equation.
*/
#define AM29LV641DL_SECT_x_OFF(sect)   ((sect) << 15)


/* Flash register addresses */
#define FL_MFR_ID                      (0x000)
#define FL_DEV_ID                      (0x001)
#define FL_CMD1                        (0x555)
#define FL_CMD2                        (0x2AA)


/* Defines of flash register locations: 16-bit access width */
#define FL_BASE_REG_16                 (*((volatile uint16 *)(FL_BASE)))
#define FL_MFR_REG_16                  (*((volatile uint16 *)(FL_BASE + \
                                           (FL_MFR_ID << FL_ADDR_SHIFT_16))))
#define FL_DEV_REG_16                  (*((volatile uint16 *)(FL_BASE + \
                                           (FL_DEV_ID << FL_ADDR_SHIFT_16))))
#define FL_CMD1_REG_16                 (*((volatile uint16 *)(FL_BASE + \
                                           (FL_CMD1 << FL_ADDR_SHIFT_16))))
#define FL_CMD2_REG_16                 (*((volatile uint16 *)(FL_BASE + \
                                           (FL_CMD2 << FL_ADDR_SHIFT_16))))

/* Defines of flash register locations: 32-bit access width */
#define FL_BASE_REG_32                 (*((volatile uint32 *)(FL_BASE)))
#define FL_MFR_REG_32                  (*((volatile uint32 *)(FL_BASE + \
                                           (FL_MFR_ID << FL_ADDR_SHIFT_32))))
#define FL_DEV_REG_32                  (*((volatile uint32 *)(FL_BASE + \
                                           (FL_DEV_ID << FL_ADDR_SHIFT_32))))
#define FL_CMD1_REG_32                 (*((volatile uint32 *)(FL_BASE + \
                                           (FL_CMD1 << FL_ADDR_SHIFT_32))))
#define FL_CMD2_REG_32                 (*((volatile uint32 *)(FL_BASE + \
                                           (FL_CMD2 << FL_ADDR_SHIFT_32))))


/*
** MFR_ID	Alliance	= 0x52
**		AMD		= 0x01
** DEV_ID			= 0x225B
*/


/*=====================*
 *  Global Variables   *
 *=====================*/
uint32 flashFailure;    /* This variable can be used to provide extra debug  */
                        /* information when flash programming fails (for ex. */
                        /* the current flash address).                       */
                        /* This variable is exported via the flash.h file.   */


/*=====================*
 *  Local Variables    *
 *=====================*/


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_SetModeRead()
//
// SYNOPSIS       void Flash_SetModeRead ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Puts the Flash ROM into Read Mode
//
// NOTE           This must be used before any other Flash commands for reasons
//                unknown, and not in spec.
//
/******************************************************************************/
static void Flash_SetModeRead()
{
    volatile uint32 delay;

    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_BASE_REG_16 = 0x00F0;

    for (delay = 0; delay < 5; delay++) ;
}

static void Flash_SetModeRead32()
{
    volatile uint32 delay;

    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_BASE_REG_32 = 0x00F000F0;

    for (delay = 0; delay < 5; delay++) ;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_SetModeReadID()
//
// SYNOPSIS       void Flash_SetModeReadID ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Puts the Flash ROM into ReadID Mode
//
// NOTE           To read unique manufacturer & product IDs
//
/******************************************************************************/
static void Flash_SetModeReadID()
{
    volatile uint32 delay;

    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_CMD1_REG_16 = 0x0090;

    for (delay = 0; delay < 5; delay++) ;
}

static void Flash_SetModeReadID32()
{
    volatile uint32 delay;

    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_CMD1_REG_32 = 0x00900090;

    for (delay = 0; delay < 5; delay++) ;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_SetModeUnlockBypass()
//
// SYNOPSIS       void Flash_SetModeUnlockBypass ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Unlocks needs for subsequent individual Bypass commands for
//                individual double-byte operations
//
// NOTE           
//
/******************************************************************************/
static void Flash_SetModeUnlockBypass()
{
    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_CMD1_REG_16 = 0x0020;
}

static void Flash_SetModeUnlockBypass32()
{
    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_CMD1_REG_32 = 0x00200020;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_ClearModeUnlockBypass()
//
// SYNOPSIS       void Flash_ClearModeUnlockBypass ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Turns Unlock Bypass Mode off
//
// NOTE           
//
/******************************************************************************/
static void Flash_ClearModeUnlockBypass()
{
    volatile uint16 dummywrite;     /* somewhere to do dummywrites */

    FL_BASE_REG_16 = 0x0090;
    FL_BASE_REG_16 = 0x0000;

    dummywrite = FL_BASE_REG_16;    /* slight delay */
    dummywrite = FL_BASE_REG_16;
    dummywrite = FL_BASE_REG_16;
    dummywrite = FL_BASE_REG_16;
    dummywrite = FL_BASE_REG_16;
}

static void Flash_ClearModeUnlockBypass32()
{
    volatile uint32 dummywrite;     /* somewhere to do dummywrites */

    FL_BASE_REG_32 = 0x00900090;
    FL_BASE_REG_32 = 0x00000000;

    dummywrite = FL_BASE_REG_32;    /* slight delay */
    dummywrite = FL_BASE_REG_32;
    dummywrite = FL_BASE_REG_32;
    dummywrite = FL_BASE_REG_32;
    dummywrite = FL_BASE_REG_32;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_SetModeChipErase()
//
// SYNOPSIS       void Flash_SetModeChipErase ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Turns on Chip Erase mode
//
// NOTE           
//
/******************************************************************************/
static void Flash_SetModeChipErase()
{
    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_CMD1_REG_16 = 0x0080;
    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_CMD1_REG_16 = 0x0010;
}

static void Flash_SetModeChipErase32()
{
    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_CMD1_REG_32 = 0x00800080;
    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_CMD1_REG_32 = 0x00100010;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           Flash_SetModeSectorErase()
//
// SYNOPSIS       void Flash_SetModeSectorErase ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         None
//
// DESCRIPTION    Turns on Sector Erase mode
//
// NOTE           
//
/******************************************************************************/
static void Flash_SetModeSectorErase()
{
    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
    FL_CMD1_REG_16 = 0x0080;
    FL_CMD1_REG_16 = 0x00AA;
    FL_CMD2_REG_16 = 0x0055;
}

static void Flash_SetModeSectorErase32()
{
    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
    FL_CMD1_REG_32 = 0x00800080;
    FL_CMD1_REG_32 = 0x00AA00AA;
    FL_CMD2_REG_32 = 0x00550055;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashSectSize()
//
// SYNOPSIS       uint32 FlashSectSize ( flashType flash, uint32 width,
//                                       uint32 sectorNum )
//
// TYPE           Regular function
//
// INPUT          flashType flash:  type of flash chip
//                uint32 width:  configured width of the flash/ROM in the MAC
//                               ROM config register
//                uint32 sectorNum:  sector number
//
// OUTPUT         uint32:  size of the given sector in number of bytes
//                         = 0 if any input is invalid
//
// DESCRIPTION    Returns the size of the given sector.
//                Returns 0 if any input is invalid.
//
// NOTE           Assumes Bottom Boot Flash Configuration
//                On the Palmchip development boards, the flash chips are always
//                set in 16-bit mode.
//                When the MAC ROM width is configured to 16-bits, one flash
//                chip is used.  When configured to 32-bits, two flash chips
//                are used.
//
/******************************************************************************/
uint32 FlashSectSize(flashType flash, uint32 width, uint32 sectorNum)
{
    uint32 sectSize;


    if (flash == AS29LV800B)
    {
        if (sectorNum > AS29LV800B_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectSize = 0;
        }
        else if (sectorNum == 0)
        {
            sectSize = AS29LV800B_SECT_0_SIZE;
        }
        else if (sectorNum == 1)
        {
            sectSize = AS29LV800B_SECT_1_SIZE;
        }
        else if (sectorNum == 2)
        {
            sectSize = AS29LV800B_SECT_2_SIZE;
        }
        else if (sectorNum == 3)
        {
            sectSize = AS29LV800B_SECT_3_SIZE;
        }
        else /* sectorNum 4 to AS29LV800B_LAST_SECT_NUM */
        {
            sectSize = AS29LV800B_SECT_x_SIZE;
        }
    }
    else if (flash == AM29LV320DB)
    {
        if (sectorNum > AM29LV320DB_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectSize = 0;
        }
        else if (sectorNum <= 7)
        {
            sectSize = AM29LV320DB_SECT_0_7_SIZE;
        }
        else /* sectorNum 7 to AM29LV320DB_LAST_SECT_NUM */
        {
            sectSize = AM29LV320DB_SECT_x_SIZE;
        }
    }
    else if (flash == AM29LV641DL)
    {
        if (sectorNum > AM29LV641DL_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectSize = 0;
        }
        else
        {
            sectSize = AM29LV641DL_SECT_x_SIZE;
        }
    }
    else /* invalid flash type */
    {
        sectSize = 0;
    }

    /* Convert to size in bytes */
    if (width == 16)       /* single flash chip */
    {
        sectSize = sectSize << FL_ADDR_SHIFT_16;
    }
    else if (width == 32)  /* two flash chips */
    {
        sectSize = sectSize << FL_ADDR_SHIFT_32;
    }
    else /* invalid width */
    {
        sectSize = 0;
    }

    return (sectSize);
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashSectAddr()
//
// SYNOPSIS       uint32 FlashSectAddr ( flashType flash, uint32 width,
//                                       uint32 sectorNum )
//
// TYPE           Regular function
//
// INPUT          flashType flash:  type of flash chip
//                uint32 width:  configured width of the flash/ROM in the MAC
//                               ROM config register
//                uint32 sectorNum:  sector number
//
// OUTPUT         uint32:  Address of the first data in the given sector
//                         = default address if any input is invalid
//                         (default address is address for sectorNum=0)
//
// DESCRIPTION    Returns the program address of the start of the given sector.
//                Returns a default address if any input is invalid.
//                The default address is the address returned for sectorNum=0.
//
// NOTE           Assumes Bottom Boot Flash Configuration
//
/******************************************************************************/
uint32 FlashSectAddr(flashType flash, uint32 width, uint32 sectorNum)
{
    uint32 sectOffset, sectAddr;


    if (flash == AS29LV800B)
    {
        if (sectorNum > AS29LV800B_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectOffset = 0;
        }
        else if (sectorNum == 0)
        {
            sectOffset = 0;
        }
        else if (sectorNum == 1)
        {
            sectOffset = AS29LV800B_SECT_0_SIZE;
        }
        else if (sectorNum == 2)
        {
            sectOffset = AS29LV800B_SECT_0_SIZE
                       + AS29LV800B_SECT_1_SIZE;
        }
        else if (sectorNum == 3)
        {
            sectOffset = AS29LV800B_SECT_0_SIZE
                       + AS29LV800B_SECT_1_SIZE
                       + AS29LV800B_SECT_2_SIZE;
        }
        else /* sectorNum == 4 to AS29LV800B_LAST_SECT_NUM */
        {
            sectOffset = AS29LV800B_SECT_x_OFF(sectorNum);
        }
    }
    else if (flash == AM29LV320DB)
    {
        if (sectorNum > AM29LV320DB_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectOffset = 0;
        }
        else if (sectorNum <= 7)
        {
            sectOffset = AM29LV320DB_SECT_0_7_OFF(sectorNum);
        }
        else /* sectorNum == 7 to AM29LV320DB_LAST_SECT_NUM */
        {
            sectOffset = AM29LV320DB_SECT_x_OFF(sectorNum);
        }
    }
    else if (flash == AM29LV641DL)
    {
        if (sectorNum > AM29LV641DL_LAST_SECT_NUM) /* invalid sectorNum */
        {
            sectOffset = 0;
        }
        else
        {
            sectOffset = AM29LV641DL_SECT_x_OFF(sectorNum);
        }
    }
    else /* invalid flash type */
    {
        sectOffset = 0;
    }

    /* Convert offset to bytes */
    if (width == 16)       /* single flash chip */
    {
        sectOffset = sectOffset << FL_ADDR_SHIFT_16;
    }
    else if (width == 32)  /* two flash chips */
    {
        sectOffset = sectOffset << FL_ADDR_SHIFT_32;
    }
    else /* invalid width */
    {
        sectOffset = 0;
    }

    /* Add offset to base of flash */
    sectAddr = FL_BASE + sectOffset;

    return (sectAddr);
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashReadManID()
//
// SYNOPSIS       void FlashReadManID ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         uint16:  ManID value
//
// DESCRIPTION    Returns Manufacturer ID register contents
//
// NOTE           
//
/******************************************************************************/
uint16 FlashReadManID()
{
    uint16 temp;


    Flash_SetModeRead();

    /* Read MFR_ID */
    Flash_SetModeReadID();
    temp = FL_MFR_REG_16;

    Flash_SetModeRead();

    return temp;
}

uint32 FlashReadManID32()
{
    uint32 temp;


    Flash_SetModeRead32();

    /* Read MFR_ID */
    Flash_SetModeReadID32();
    temp = FL_MFR_REG_32;

    Flash_SetModeRead32();

    return temp;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashReadDevID()
//
// SYNOPSIS       void FlashReadDevID ( void )
//
// TYPE           Regular function
//
// INPUT          None
//
// OUTPUT         uint16:  DevID value
//                
// DESCRIPTION    Returns Device ID register contents
//
// NOTE           
//
/******************************************************************************/
uint16 FlashReadDevID()
{
    uint16 temp;


    Flash_SetModeRead();

    /* Read DEV_ID */
    Flash_SetModeReadID();
    temp = FL_DEV_REG_16;

    Flash_SetModeRead();

    return temp;
}

uint32 FlashReadDevID32()
{
    uint32 temp;


    Flash_SetModeRead32();

    /* Read DEV_ID */
    Flash_SetModeReadID32();
    temp = FL_DEV_REG_32;

    Flash_SetModeRead32();

    return temp;
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashWrite()
//
// SYNOPSIS       bool FlashWrite ( uint16 *source, uint16 *dest,
//                                  uint32 numBytes )
//
// TYPE           Regular function
//
// INPUT          uint16 *source:  pointer to the source from which double-bytes
//                                 are to be transferred
//                uint16 *dest:  pointer to the destination (in flash)
//                uint32 numBytes:  the number of bytes to transer
//
// OUTPUT         boolean (TRUE = successful, FALSE = error)
//
// DESCRIPTION    Copies from any memory to flash for programming
//
// NOTE           3rd parameter, "numBytes", must be an even number
//                If error, global "flashFailure" has error code
//
/******************************************************************************/
bool FlashWrite(uint16 *source, uint16 *dest, uint32 numBytes)
{
    /* Note: numBytes must be an even number */
    uint32 loopCount;
    uint32 wordDone;
    uint16 bit7polarity;
    uint16 contents;

    Flash_SetModeRead();
    Flash_SetModeUnlockBypass(); /* Unlock Bypass Programming */

    for (loopCount = 0; loopCount < numBytes; loopCount += 2)
    {
        *dest = 0x00A0;     /* unlock bypass write key */
        *dest = *source;    /* program data */

        /* Wait till Dest Bit7 == Source Bit7 (meaning done) */
        bit7polarity = *source & POLARITYBIT;

        wordDone = 0;
        while (!wordDone)
        {
            contents = *((volatile uint16 *)(dest));

            if ((contents & POLARITYBIT) == bit7polarity)
            {
                wordDone = 1;    /* Word successfully programmed */
            }
            else
            {
                if (contents & TIMEOUTBIT)
                {
                    /* Check one last time whether programming succeeded */
                    contents = *((volatile uint16 *)(dest));

                    if ((contents & POLARITYBIT) == bit7polarity)
                    {
                        wordDone = 1;    /* Word successfully programmed */
                    }
                    else
                    {
                        Flash_ClearModeUnlockBypass(); /* Unlock Bypass Reset */
			Flash_SetModeRead();

                        flashFailure = (uint32)dest;

                        return (1);      /* Signal failure to caller */
                    }
                }
            }
        }
        dest++;
        source++;
    }

    Flash_ClearModeUnlockBypass();    /* Unlock Bypass Reset */
    Flash_SetModeRead();

    return (0);
}

/*
** Unlike FlashWrite16(), which exits with a failcode if the programming times
** out, this function will keep retrying writes that time out until it succeeds.
*/
bool FlashWrite32(uint32 *source, uint32 *dest, uint32 numBytes)
{
    /* Note: numBytes must be an even number */
    uint32 loopCount;
    uint32 wordDone, retryWord;
    uint32 bit7polarity;
    uint32 contents;
    uint32 polMask, toMask;


    /* 2 flash chips in parallel store the upper and lower 16 bits of each
    ** 32 bits.  Check for values on both chips as one 32 bit value
    */
    polMask = (POLARITYBIT | ((uint32)POLARITYBIT << 16));
    toMask = (TIMEOUTBIT | ((uint32)TIMEOUTBIT << 16));

    Flash_SetModeRead32();
    Flash_SetModeUnlockBypass32(); /* Unlock Bypass Programming */

    for (loopCount = 0 ; loopCount < numBytes ; loopCount += 4)
    {
        retryWord = 1;
        while (retryWord)
        {
            *dest = 0x00A000A0;    /* unlock bypass write key */
            *dest = *source;       /* program data write */

            /* Wait till Dest Bit7 == Source Bit7 (meaning done) */
            bit7polarity = *source & polMask;

            wordDone = 0;
            while (!wordDone)
            {
                contents = *((volatile uint32 *)(dest));

                if ((contents & polMask) == bit7polarity)
                {
                    retryWord = 0; /* Word successfully programmed */
                    wordDone = 1;
                }
                else
                {
                    if (contents & toMask)    /* if either timed out... */
                    {
                        /* Check one last time whether programming succeeded */
                        contents = *((volatile uint32 *)(dest));

                        if ((contents & polMask) == bit7polarity)
                        {
                            retryWord = 0;    /* Word successfully programmed */
                            wordDone = 1;
                        }
                        else
                        {
                            wordDone = 1;     /* Retry word programming */
                        }

                        /* When timeout bit get set, must issue Reset command
                        ** in order to return to Read mode.
                        ** First exit Unlock Bypass mode, issue Reset, then
                        ** re-enter Unlock Bypass mode.
                        ** Get less flaky behavior from flash if Reset command
                        ** is issued even if a word was programmed successfully
                        ** at the same time the timeout bit is detected.
                        */
                        Flash_ClearModeUnlockBypass32();
                        Flash_SetModeRead32();
                        Flash_SetModeUnlockBypass32();
                    }
                }
            }
            if (!retryWord)  /* Write was successful */
            {
                dest++;
                source++;
            }
        }
    }

    Flash_ClearModeUnlockBypass32();    /* Unlock Bypass Reset */
    Flash_SetModeRead32();

    return (0);
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashVerify()
//
// SYNOPSIS       bool FlashVerify ( uint16 *source, uint16 *dest,
//                                   uint32 numBytes )
//
// TYPE           Regular function
//
// INPUT          uint16 *source:  pointer to the source from which double-bytes
//                                 were transferred
//                uint16 *dest:  pointer to the destination (in flash) where
//                               double-bytes were programmed
//                uint32 numBytes:  the number of bytes to verify
//
// OUTPUT         boolean (TRUE = successful, FALSE = error)
//
// DESCRIPTION    Verifies double-bytes were programmed correctly
//
// NOTE           3rd parameter, "numBytes", must be an even number
//                If error, global "flashFailure" has read data
//
/******************************************************************************/
bool FlashVerify(uint16 *source, uint16 *dest, uint32 numBytes)
{
    uint32 loopCount;


    Flash_SetModeRead();

    for (loopCount = 0; loopCount < numBytes; loopCount += 2)
    {
        if (*dest != *source)
        {
            Flash_SetModeRead();

            flashFailure = (uint32)dest;

            return (1);
        }
        dest++;
        source++;
    }

    Flash_SetModeRead();

    return (0);
}


bool FlashVerify32(uint32 *source, uint32 *dest, uint32 numBytes)
{
    uint32 loopCount;


    Flash_SetModeRead32();

    for (loopCount = 0; loopCount < numBytes; loopCount += 4)
    {
        if (*dest != *source)
        {
            Flash_SetModeRead32();

            flashFailure = (uint32)dest;

            return (1);
        }
        dest++;
        source++;
    }

    Flash_SetModeRead32();

    return (0);
}


/* FUNCTION_DESC **************************************************************/
//
// NAME           FlashErase()
//
// SYNOPSIS       bool FlashErase ( uint32 firstSector, uint32 lastSector)
//
// TYPE           Regular function
//
// INPUT          uint32 firstSector:  number of the first sector to be erased
//                uint32 lastSector:  number of the last sector to be erased
//
// OUTPUT         boolean (TRUE = successful, FALSE = error)
//
// DESCRIPTION    This function erases the flash.
//                If the first and last sector input parameters are equal to
//                the first and last sector numbers on the chip, then chip
//                erase mode is envoked, else sector erase method is envoked. 
//
// NOTE
//
/******************************************************************************/
bool FlashErase(uint32 firstSector, uint32 lastSector)
{
    volatile uint16 *sectAddr, *pollAddr;
    volatile uint16 contents;
    uint32 loopCount;      /* used for sector erase only */
    uint32 attemptNum;     /* used for sector erase only */
    uint32 sectorDone;     /* used for sector erase only */
    uint32 windowClosed;   /* used for sector erase only */


    flashFailure = 0;

    Flash_SetModeRead();

    /* if entire chip, use Chip Erase Function */
    if (firstSector == FL_FIRST_SECT_NUM && lastSector == FL_LAST_SECT_NUM)
    {
        Flash_SetModeChipErase();

        contents = 0;
        sectAddr = (uint16 *)FlashSectAddr(FLASH_TYPE, 16, FL_FIRST_SECT_NUM);

        /* Wait till Polarity Bit (Bit 7) == 1 */
        while (!(contents & POLARITYBIT))
        {
            contents = *sectAddr;

            if ( contents & POLARITYBIT )
            {
                Flash_SetModeRead();
                return (0); /* Successfully erased */
            }
            else
            {
                if ( contents & TIMEOUTBIT )
                {
                    contents = *sectAddr;

                    if ( contents & POLARITYBIT )
                    {
                        Flash_SetModeRead();
                        return (0); /* Successfully erased */
                    }
                    else
                    {
                        Flash_SetModeRead();    /* Signal Failure to erase */
// Linda - debug:  for now, just assume timeout = flash erase okay
                        //return (1);
                          return (0);
                    }
                }
            }
        }
    }

    else /* else use Sector Erase Function */
    {
        loopCount = firstSector;
        attemptNum = 0;
        while (loopCount <= lastSector)
        {
            sectAddr = (uint16 *)FlashSectAddr(FLASH_TYPE, 16, loopCount);
            pollAddr = sectAddr;

            /* Sector Erase Mode */
            Flash_SetModeSectorErase();
            *sectAddr = 0x0030;

            /* Make sure device accepted the command sequence */
            while (!(*sectAddr & POLARITYBIT))
            {
                ; 
            }

            /*
            ** If flash chip's erase window has closed, erase algorithm
            ** has started and cannot write more sector erase commands.
            ** Always check if window still open before writing each command.
            ** When window is detected as closed, the last sector command
            ** written might not have been accepted and should be reissued again
            ** next time through the erase command sequence.
            */ 
            windowClosed = (*sectAddr & ERASEWINDOW);
            loopCount++;
            while (!windowClosed)
            {
                if (loopCount <= lastSector)
                {
                    sectAddr = (uint16 *)FlashSectAddr(FLASH_TYPE, 16,
                                                       loopCount);
                    *sectAddr = 0x0030;

                    windowClosed = (*sectAddr & ERASEWINDOW);

                    if (!windowClosed)
                    {
                        loopCount++;
                    }
                }
                else
                {
                    /* No more sectors to erase */
                    break;
                }
            }


            /* wait for polarity of POLARITYBIT to be 1 */
            sectorDone = 0;
            while (!sectorDone)
            {
                contents = *pollAddr;

                if (contents & POLARITYBIT)
                {
                    sectorDone = 1; /* Successfully erased */
                }
                else
                {
                    if (contents & TIMEOUTBIT)
                    {
                        contents = *pollAddr;

                        if (contents & POLARITYBIT)
                        {
                            sectorDone = 1; /* Successfully erased */
                        }
                        else
                        {
                            /* Put back in Read Mode, Signal Failure to erase */
                            Flash_SetModeRead();

                            flashFailure = (uint32)pollAddr;

                            return (1);
                        }
                    }
                }
                /* If this is getting old, something's wrong */
                if (++attemptNum > 0x10000)
                {
                    /* Return to Read Mode */
                    Flash_SetModeRead();

                    flashFailure = (uint32)(0xDEADDEAD);
  
                    return (1);
                }
            }
            /* Return to Read Mode */
            Flash_SetModeRead();
        }
    }

    return 0;
}


bool FlashErase32(uint32 firstSector, uint32 lastSector)
{
    volatile uint32 *sectAddr, *pollAddr;
    volatile uint32 contents;
    uint32 polMask, toMask, eraseMask;
    uint32 loopCount;      /* used for sector erase only */
    uint32 attemptNum;     /* used for sector erase only */
    uint32 sectorDone;     /* used for sector erase only */
    uint32 windowClosed;   /* used for sector erase only */


    /* 2 flash chips in parallel store the upper and lower 16 bits of each
    ** 32 bits.  Check for values on both chips as one 32 bit value
    */
    polMask = (POLARITYBIT | ((uint32)POLARITYBIT << 16));
    toMask = (TIMEOUTBIT | ((uint32)TIMEOUTBIT << 16));
    eraseMask = (ERASEWINDOW | ((uint32)ERASEWINDOW << 16));

    Flash_SetModeRead32();

    /* if entire chip, use Chip Erase Function */
    if (firstSector == FL_FIRST_SECT_NUM && lastSector == FL_LAST_SECT_NUM)
    {
        Flash_SetModeChipErase32();

        /* Wait till Polarity Bit (Bit 7) == 1 */
        contents = 0;
        while ((contents & polMask) != polMask)
        {
            sectAddr = (uint32 *)FlashSectAddr(FLASH_TYPE, 32,
                                               FL_FIRST_SECT_NUM);

            contents = *sectAddr;

            if ( ( contents & polMask ) == polMask)
            {
                Flash_SetModeRead32();

                return (0); /* Successfully erased */
            }
            else
            {
                if ( ( contents & toMask ) == toMask )
                {
                    contents = *sectAddr;

                    Flash_SetModeRead32();

                    if ( ( contents & polMask ) == polMask )
                    {
                        return (0);   /* Successfully erased */
                    }
                    else
                    {
                        return (1);   /* Signal Failure to erase */
                    }
                }
            }
        }
    }

    else /* else use Sector Erase Function */
    {
        loopCount = firstSector;
        attemptNum = 0;
        while (loopCount <= lastSector)
        {
            sectAddr = (uint32 *)FlashSectAddr(FLASH_TYPE, 32, loopCount);
            pollAddr = sectAddr;

            /* Sector Erase Mode */
            Flash_SetModeSectorErase32();
            *sectAddr = 0x00300030;

            /* Make sure device accepted the command sequence */
            while ((*sectAddr & polMask) != polMask)
            {
                ; 
            }

            /*
            ** If either flash chip's erase window has closed, erase algorithm
            ** has started and cannot write more sector erase commands.
            ** Always check if window still open before writing each command.
            ** When window is detected as closed, the last sector command
            ** written might not have been accepted and should be reissued again
            ** next time through the erase command sequence.
            */ 
            windowClosed = (*sectAddr & eraseMask);
            loopCount++;
            while (!windowClosed)
            {
                if (loopCount <= lastSector)
                {
                    sectAddr = (uint32 *)FlashSectAddr(FLASH_TYPE, 32,
                                                       loopCount);
                    *sectAddr = 0x00300030;

                    windowClosed = (*sectAddr & eraseMask);

                    if (!windowClosed)
                    {
                        loopCount++;
                    }
                }
                else
                {
                    /* No more sectors to erase */
                    break;
                }
            }


            /* wait for polarity of POLARITYBIT to be 1 */
            sectorDone = 0;
            while (!sectorDone)
            {
                contents = *pollAddr;

                if ((contents & polMask) == polMask)
                {
                    sectorDone = 1; /* Successfully erased */
                }
                else
                {
                    if ((contents & toMask) == toMask)
                    {
                        contents = *pollAddr;

                        if ((contents & polMask) == polMask)
                        {
                            sectorDone = 1; /* Successfully erased */
                        }
                        else
                        {
                            /* Put back in Read Mode, Signal Failure to erase */
                            Flash_SetModeRead32();

                            flashFailure = (uint32)pollAddr;

                            return (1);
                        }
                    }
                }
                /* If this is getting old, something's wrong */
                if (++attemptNum > 0x10000)
                {
                    /* Return to Read Mode */
                    Flash_SetModeRead32();

                    flashFailure = (uint32)(0xDEADDEAD);
  
                    return (1);
                }
            }
            /* Return to Read Mode */
            Flash_SetModeRead32();
        }
    }

    return 0;
}

EXPORT_SYMBOL(FlashErase);
EXPORT_SYMBOL(FlashWrite);
