CC			= $(HOSTCC)
STRIP		= strip
CFLAGS	+= -O -Wall
CFLAGS	+= $(PATHCONF)
CFLAGS	+= $(PATHUSER)

OBJS		= mkimage.o crc32.o

ifeq ($(SYS_ENDIAN),LITTLE_ENDIAN)
	CFLAGS += -D__LITTLE_ENDIAN__
else
	CFLAGS += -D__BIG_ENDIAN__ 		
endif

all:

mkimage: $(OBJS)

clean:
#	rm -f $(OBJS) *.bak mkimage
