#
# easytest (Product Test Program) Makefile
#

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
CFLAGS	+= -O2 #-s
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= -L../nvram/bin -lnvram

vpath %.c $(TOP)/shared

OBJS	= easytest.o

all:

easytest: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -rf $(OBJS) easytest

romfs:
	cp easytest $(ROMFSDIR)/bin/easytest
