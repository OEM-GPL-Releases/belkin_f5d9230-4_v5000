#ifndef __FLASH_API
#define __FLASH_API

int FlashRead(unsigned int *dst, unsigned int *src, unsigned int numBytes);
int FlashWrite(unsigned short *source, unsigned short *dest, unsigned int numBytes);
int FlashErase(unsigned int firstSector, unsigned int lastSector);

#endif
