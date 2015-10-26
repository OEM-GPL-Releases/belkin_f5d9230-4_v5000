CC			= $(HOSTCC)
STRIP		= strip
CFLAGS	+= -O -Wall
CFLAGS	+= $(PATHCONF)
CFLAGS	+= $(PATHUSER)


OBJS		= mkimage.o crc32.o

all:

mkimage: $(OBJS)

clean:
#	@rm -f $(OBJS) *.bak mkimage
