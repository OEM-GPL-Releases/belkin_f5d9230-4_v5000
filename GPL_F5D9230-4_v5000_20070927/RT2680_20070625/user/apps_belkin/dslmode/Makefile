#CC	= gcc
#CFLAGS	+= -O -Wall -I.

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
CFLAGS	+= -s -O2
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= -L../nvram/bin -lnvram

OBJS	= dslmode.o

all:

dslmode: $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -rf $(OBJS) *.bak dslmode

romfs:
	cp dslmode $(ROMFSDIR)/bin/dslmode
#	$(ROMFSINST)    /usr/sbin/dslmode
