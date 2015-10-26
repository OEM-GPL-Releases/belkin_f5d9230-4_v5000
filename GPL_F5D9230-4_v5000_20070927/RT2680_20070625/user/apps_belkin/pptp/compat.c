/*
 * compat.c
 *
 * Compatibility functions for different OSes
 *
 * $Id: compat.c,v 1.1.1.1 2004/04/28 07:18:26 tom Exp $
 */

//#if HAVE_CONFIG_H
//include "config.h"
//#endif

//#ifndef HAVE_STRLCPY
//#include "compat.h"
//#include <string.h>

//void strlcpy(char *dst, const char *src, size_t size)
//{
//	strncpy(dst, src, size - 1);
//	dst[size - 1] = '\0';
//}
// #endif

//#ifndef HAVE_MEMMOVE
//void *memmove(void *dst, const void *src, size_t size)
//{
//	bcopy(src, dst, size);
//	return dst;
//}
//#endif

#ifndef HAVE_OPENPTY
/*
 * Finds a free PTY/TTY pair.
 *
 * This is derived from C.S. Ananian's pty.c that was with his pptp client.
 *
 *************************************************************************
 * pty.c - find a free pty/tty pair.
 *         inspired by the xterm source.
 *         NOTE: This is very likely to be highly non-portable.
 *         C. Scott Ananian <cananian@alumni.princeton.edu>
 *
 * Heavily modified to chage from getpseudopty() to openpty().
 */

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include "pty.h"
#include <stdio.h>
#include <unistd.h>
#include <errno.h>

int create_pty(char *ptydev)
{
	if (mknod(ptydev,S_IFCHR | S_IRUSR | S_IWUSR | S_IRGRP |
			S_IWGRP | S_IROTH | S_IWOTH,makedev(2, 176)) >= 0)
		return 1;
	else
		return 0;
}
int create_tty(char *ttydev)
{
	char ttybuf[16];
	int i;
	
	return 1;
	if( open("/dev/pty/s255", O_RDONLY) >= 0 )
		return 1;
	for( i = 0 ; i < 256 ; i++ )
	{
		sprintf( ttybuf , "/bin/mknod %s%d c 2 %d",TTYDEV,i,i);
//	  mknod(ttybuf,S_IFCHR ,makedev(2, i));
    system( ttybuf );
	}	
	return 1;
}

#define PACKET_MAX 1
int open_pty(int *master, int *slave, char *name, void *unused1, void *unused2)
{
	int devindex = 0, letter = 0;
	int fd1, fd2;
	char ttydev[PTYMAX], ptydev[TTYMAX] , ttybuf[16],ptybuf[16];
    unsigned char buffer[120];
	int end , i;

	strcpy(ttydev, TTYDEV);
	strcpy(ptydev, PTYDEV);

#if 0
 	if(create_pty(ptydev))
		{
		//printf("Successful create a device node %s\n", ptydev);
		}
 	if(create_tty(ttydev))
		{
		//printf("Successful create a device node %s\n", ttydev);
		}
#endif
  for( i = 0 ; i < 256 ; i++ )
  {
  	sprintf( ptybuf , "%s%d",PTYDEV , i);
		if ((fd1 = open(ptybuf, O_RDWR)) >= 0)
		{
	  	sprintf( ttybuf , "%s%d",TTYDEV , i);
			if ((fd2 = open(ttybuf, O_RDWR)) >= 0) {
						goto out;
			}
	  }
	}
	unlink(ttybuf);	/* didn't work, undo the mknod */
	return -1 ;
out:
	//syslog(LOG_INFO, "CTRL: Allocated pty/tty pair (%s,%s)", ptydev, ttydev);
#ifdef ANDYDEBUG
	printf("Allocated pty/tty pair (%s/%s) (%d/%d)\n",ptybuf, ttybuf, fd1,fd2);
#endif ANDYDEBUG
	if (master)
		*master = fd1;
	if (slave)
		*slave = fd2;
	if (name)
		strcpy(name, ttybuf);	/* no way to bounds check */
	return 0;
}


#if 0
int open_pty(int *master, int *slave, char *name, void *unused1, void *unused2)
{
	int devindex = 0, letter = 0;
	int fd1, fd2;
	char ttydev[PTYMAX], ptydev[TTYMAX];
#ifdef ANDYDEBUG
	printf("CTRL: Allocating pty/tty pary \n");
 #endif
	strcpy(ttydev, TTYDEV);
	strcpy(ptydev, PTYDEV);
	if ((fd1 = open(ptydev, O_RDWR)) >= 0)
	{
 #ifdef ANDYDEBUG
		printf("Pty device %s is Opened\n and ", ptydev);
 #endif
		if ((fd2 = open(ttydev, O_RDWR)) >= 0) {
					goto out;
		}
		else{
			/* try making it and see if that helps. */
			if (mknod(ttydev,S_IFCHR | S_IRUSR | S_IWUSR | S_IRGRP |
			S_IWGRP | S_IROTH | S_IWOTH,makedev(3, 1)) >= 0)
			{
#ifdef ANDYDEBUG
				printf("Successful create a device node %s\n", ttydev);
 #endif
				fd2 = open(ttydev, O_RDWR);
	    		if (fd2 >= 0){
#ifdef ANDYDEBUG
					printf("Open the created %s device node\n", ttydev);
 #endif
					goto out;
				}
	    		else{
#ifdef ANDYDEBUG
					printf("Fail to open a created %s device node \n", ttydev);
 #endif
					unlink(ttydev);	/* didn't work, undo the mknod */
					return -1 ;
				}
			}
		}
    }
      out:
	//syslog(LOG_INFO, "CTRL: Allocated pty/tty pair (%s,%s)", ptydev, ttydev);
	printf("Allocated pty/tty pair (%s/%s) \n",ptydev, ttydev);
	if (master)
		*master = fd1;
	if (slave)
		*slave = fd2;
	if (name)
		strcpy(name, ttydev);	/* no way to bounds check */
	return 0;
}
#endif



#if 0
int open_pty(int *master, int *slave, char *name, void *unused1, void *unused2)
{
	int devindex = 0, letter = 0;
	int fd1, fd2;
	char ttydev[PTYMAX], ptydev[TTYMAX];

	//syslog(LOG_DEBUG, "CTRL: Allocating pty/tty pair");
	printf("CTRL: Allocating pty/tty pary \n");
	strcpy(ttydev, TTYDEV);
	strcpy(ptydev, PTYDEV);
	//printf("ptydev is %s \n", ptydev);
	//printf("ttydev is %s \n", ttydev);
	while (PTYCHAR1[letter])
	{	//ttydev[TTYMAX - 3] = ptydev[PTYMAX - 3] = PTYCHAR1[letter];
		ptydev[PTYMAX-3] = PTYCHAR1[letter];
		while (PTYCHAR2[devindex])
		{
			//ttydev[TTYMAX - 2] = ptydev[PTYMAX - 2] = PTYCHAR2[devindex];
			ptydev[PTYMAX - 2] = PTYCHAR2[devindex];
			if ((fd1 = open(ptydev, O_RDWR)) >= 0)
			{
				printf("Pty device %s is Open\n", ptydev);
				if ((fd2 = open(ttydev, O_RDWR)) >= 0) {
					goto out;
				} else {
					close(fd1);
				}
			}
			devindex++;
		}
		devindex = 0;
		letter++;
	}
	//syslog(LOG_ERR, "CTRL: Failed to allocate pty");
	printf("Fail to allocate pty \n");
	return -1;		/* Unable to allocate pty */

      out:
	//syslog(LOG_INFO, "CTRL: Allocated pty/tty pair (%s,%s)", ptydev, ttydev);
	printf("Allocated pty/tty pair (%s/%s) \n",ptydev, ttydev);
	if (master)
		*master = fd1;
	if (slave)
		*slave = fd2;
	if (name)
		strcpy(name, ttydev);	/* no way to bounds check */
	return 0;
}
#endif

#endif

#ifndef HAVE_STRERROR
char *strerror(int errnum) {
	static char buf[16];
	sprintf(buf, "Error %d", errnum);
	return buf;
}
#endif
