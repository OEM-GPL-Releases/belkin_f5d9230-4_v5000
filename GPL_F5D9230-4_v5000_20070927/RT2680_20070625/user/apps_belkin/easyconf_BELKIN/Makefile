#
# easyconf (Setup Wizard) Makefile
#

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
CFLAGS	+= -s -O2
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= -L../nvram/bin -lnvram

vpath %.c $(TOP)/shared

OBJS	= easyconf.o

all:

easyconf: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -rf $(OBJS) easyconf

romfs:
	cp easyconf $(ROMFSDIR)/bin/easyconf
