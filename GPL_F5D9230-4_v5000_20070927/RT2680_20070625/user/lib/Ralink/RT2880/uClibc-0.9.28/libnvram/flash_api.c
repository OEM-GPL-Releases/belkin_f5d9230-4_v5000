#include <stdlib.h>             
#include <stdio.h>             
#include <string.h>           
#include <sys/ioctl.h>
#include <fcntl.h>
#include <getopt.h>
#include "flash_ioctl.h"


int FlashRead(unsigned int *dst, unsigned int *src, unsigned int numBytes)
{
    struct flash_opt flash;
    int fd;

    if(numBytes > FLASH_MAX_RW_SIZE) {
	printf("Too many bytes - %d > %d bytes\n",numBytes, FLASH_MAX_RW_SIZE);
	return 0;
    }
    
    flash.dest=dst;
    flash.src=src;
    flash.bytes=numBytes;

    fd = open("/dev/flash0", O_RDONLY);
    if (fd < 0)
    {
	printf("Open flash pseudo device failed\n");
	return 0;
    }

    if(ioctl(fd, FLASH_IOCTL_READ, &flash)<0) {
	printf("FLASH_API: ioctl error\n");
	close(fd);
	return -1;
    }

    close(fd);
    if(flash.result==OUT_OF_SCOPE) {
	return -1;
    }else {
	return 0;
    }
}


int FlashWrite(unsigned short *source, unsigned short *dest, unsigned int numBytes)
{
    struct flash_opt flash;
    int fd;

    if(numBytes > FLASH_MAX_RW_SIZE) {
	printf("Too many bytes - %d > %d bytes\n",flash.bytes, FLASH_MAX_RW_SIZE);
	return 0;
    }
    
    flash.dest=(unsigned int *)dest;
    flash.src=(unsigned int *)source;
    flash.bytes=numBytes;

    fd = open("/dev/flash0", O_RDONLY);
    if (fd < 0)
    {
	printf("Open flash pseudo device failed\n");
	return 0;
    }

    if(ioctl(fd, FLASH_IOCTL_WRITE, &flash)<0) {
	printf("FLASH_API: ioctl error\n");
	close(fd);
	return -1;
    }

    close(fd);
    if(flash.result==OUT_OF_SCOPE) {
	return -1;
    }else {
	return 0;
    }
}

int FlashErase(unsigned int firstSector, unsigned int lastSector)
{
    struct flash_opt flash;
    int fd;

    flash.fst_sector_num = firstSector;
    flash.lst_sector_num = lastSector;

    fd = open("/dev/flash0", O_RDONLY);
    if (fd < 0)
    {
	printf("Open flash pseudo device failed\n");
	return 0;
    }

    if(ioctl(fd, FLASH_IOCTL_ERASE, &flash)<0) {
	printf("FLASH_API: ioctl error\n");
	close(fd);
	return -1;
    }

    close(fd);
    if(flash.result==OUT_OF_SCOPE) {
	return -1;
    }else {
	return 0;
    }

}

