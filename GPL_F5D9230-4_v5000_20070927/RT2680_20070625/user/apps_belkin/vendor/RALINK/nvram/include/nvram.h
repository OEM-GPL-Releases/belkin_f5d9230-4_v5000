#ifndef __NVRAM_H
#define __NVRAM_H

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <sysdep.h>

#include <nvserv.h>


#define FACTORY_MTDPATH		"/dev/mtd/3"
#define NVRAM_MAXNAMESZ		32											/* Remember to minus 1 for NULL '\0' */
#define NVRAM_MAXVALUESZ	(NVSERV_BUFSIZE - 4)		/* Remember to minus 1 for NULL '\0' */
#define SHM_KEY						5536
#define SHM_NVRAM_MTD_KEY	5986
//#define MAX_ENTRY					768					/* max entries of nvram parameters */
#define MAX_ENTRY				2048				/* max entries of nvram parameters */

struct nventry
{
	char name[NVRAM_MAXNAMESZ];
	char value[NVRAM_MAXVALUESZ];
	unsigned flag;
};

struct def_nventry
{
	char name[NVRAM_MAXNAMESZ];
	char value[NVRAM_MAXVALUESZ];
	unsigned flag;
};

#define DONTCARE		0   //parameter must exist
#define FIXVALU		  1   //parameter must exist and value can't be changed

typedef struct def_nventry	def_entry_t;
typedef struct nventry	nvram_entry_t;

struct shmnvram
{
	volatile unsigned char writing;
	volatile unsigned char created;
	struct nventry nvram_entry[MAX_ENTRY];
};


//OsborneModify Start on March 18, 2005.
//OsborneModify End
char* nvram_get(char *name );
int nvram_get2buf(char *name,char *value );
int nvram_set(char *name, char *value);
int nvram_unset(char *name);
int nvram_commit(void);
int nvram_restore(void);
int nvram_clear(void);
int nvram_list_all(void);
int nvram_update(void);
//OsborneAdd Start on March 30, 2005.
	//OsborneModify Start on April 5, 2005.
	//static function prototypes are not suitable in header files..?!
//static int nvram_match(char *id1, char *id2);
//static int nvram_invmatch(char *name, char *invmatch);
int nvram_match(char *id1, char *id2);  //match the value of id1 and return 1 if matched .
int nvram_invmatch(char *name, char *invmatch);
	//OsborneModify End
//OsborneAdd End

int get_factory_to_nvram(void);
int set_factory_from_nvram(void);

#define nvram_safe_get(name) (nvram_get(name) ? : "")

#endif
