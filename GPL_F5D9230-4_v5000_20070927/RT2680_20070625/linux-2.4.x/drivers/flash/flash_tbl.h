#ifndef FLASH_TBL_H
#define FLASH_TBL_H

#include "flash.h"

struct flsh_sector {
    unsigned int size;
    unsigned short count;
};

struct flsh_dev {
    unsigned short man_id;
    unsigned short dev_id;
    unsigned int  max_sector;
    struct flsh_sector sector[MAX_SECTOR_GROUPS];
};


static struct flsh_dev flsh_tbl[] = 
{
#ifdef CONFIG_FLASH_MX29LV320
 { .man_id= 0xc2, /* Mxic */
   .dev_id= 0x22A7, /* MX29LV320T */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(64),.count=63},
             {.size=KBYTES(8),.count=8}
	    }
 },

 { .man_id= 0xc2, /* Mxic */
   .dev_id= 0x22A8, /* MX29LV320B */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(8),.count=8},
             {.size=KBYTES(64),.count=63}
	    }
 },
#endif
#ifdef CONFIG_FLASH_EN29LV320
 { .man_id= 0x7F, /* EON */
   .dev_id= 0x22F6, /* EN29LV320T */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(64),.count=63},
             {.size=KBYTES(8),.count=8}
	    }
 },
 { .man_id= 0x7F, /* EON */
   .dev_id= 0x22F9, /* EN29LV320B */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(8),.count=8},
             {.size=KBYTES(64),.count=63}
	    }
 },
#endif
#ifdef CONFIG_FLASH_K8D3X16U
 { .man_id= 0xEC, /* Samsung */
   .dev_id= 0x22A0, /* K8D3216UT */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(64),.count=63},
             {.size=KBYTES(8),.count=8}
	    }
 },
 { .man_id= 0xEC, /* Samsung */
   .dev_id= 0x22A2, /* K8D3216UB */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(8),.count=8},
             {.size=KBYTES(64),.count=63}
	    }
 },
 { .man_id= 0xEC, /* Samsung */
   .dev_id= 0x22A1, /* K8D3316UT */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(64),.count=63},
             {.size=KBYTES(8),.count=8}
	    }
 },
 { .man_id= 0xEC, /* Samsung */
   .dev_id= 0x22A3, /* K8D3316UB */
   .max_sector = 70,
   .sector= {
	     {.size=KBYTES(8),.count=8},
             {.size=KBYTES(64),.count=63}
	    }
 },
#endif
#ifdef CONFIG_FLASH_SST39VF320X 
 { .man_id= SST_FL_MANUFACT, /* SST */
	 .dev_id= 0x235B, /* SST39VF3201 */
	 .max_sector = 1023,
	 .sector= {
		 {.size=KBYTES(4),.count=1024}
	 }
 },
 { .man_id= SST_FL_MANUFACT, /* SST */
	 .dev_id= 0x235A, /* SST39VF3202 */
	 .max_sector = 1023,
	 .sector= {
		 {.size=KBYTES(4),.count=1024}
	 }
 },
#endif
 { .man_id= 0x00,  /* END_MARK */
	 .dev_id= 0x0000, 
	 .max_sector = 0,
	 .sector= {
		 {.size=KBYTES(0),.count=0},
		 {.size=KBYTES(0),.count=0}
	 }

 }

};

#endif
