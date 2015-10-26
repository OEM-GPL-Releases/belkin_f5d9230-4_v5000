#
# udhcpd Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 0.1 2002/12/13 AM 09:47:55 , Made by PeterChen
#

prefix=/usr
SBINDIR=/sbin
USRSBINDIR=${prefix}/sbin
USRBINDIR=${prefix}/bin
USRSHAREDIR=${prefix}/share

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
#CFLAGS	+= -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
CFLAGS	+= -s -O2 -DOSCAR
#LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L../nvram/bin -L../shared/nvram

# Comment this to involve some features ( related with LED control ).
# Uncomment this to remove some features ( related with LED control ).
# This item is for some project that they needn't the WAN side LED control.
# The WAN Led control was added by Gemtek
# This item is added by Gemtek
CFLAGS += -DRemoveWANLedControl

# Uncomment this to get a shared binary. Call as udhcpd for the server,
# and udhcpc for the client
# COMBINED_BINARY=1

# Uncomment this for extra output and to compile with debugging symbols
# Added by PeterChen , 2002/12/12 PM 02:38 , For debugging
 PeterChen_DBG=1
 PeterChen_DEBUG=1

# Uncomment this for extra output and to compile with debugging symbols
 DEBUG=1

# Uncomment this to output messages to syslog, otherwise, messages go to stdout
CFLAGS += -DSYSLOG

#CROSS_COMPILE=arm-uclibc-
CC = $(CROSS_COMPILE)gcc
LD = $(CROSS_COMPILE)gcc
INSTALL = install

VER := 0.9.8


OBJS_SHARED = options.o socket.o packet.o pidfile.o
DHCPD_OBJS = dhcpd.o arpping.o files.o leases.o serverpacket.o
DHCPC_OBJS = dhcpc.o clientpacket.o script.o 
#../shared/nvram/shutils.o

ifdef COMBINED_BINARY
EXEC1 = udhcpd
OBJS1 = $(DHCPD_OBJS) $(DHCPC_OBJS) $(OBJS_SHARED) frontend.o
CFLAGS += -DCOMBINED_BINARY
else
EXEC1 = udhcpd
OBJS1 = $(DHCPD_OBJS) $(OBJS_SHARED)

EXEC2 = udhcpc
OBJS2 = $(DHCPC_OBJS) $(OBJS_SHARED)
endif

EXEC3 = dumpleases
OBJS3 = dumpleases.o

BOOT_PROGRAMS = udhcpc
DAEMONS = udhcpd
COMMANDS = dumpleases

ifdef SYSLOG
CFLAGS += -DSYSLOG
endif

CFLAGS += -W -Wall -Wstrict-prototypes -DVERSION='"$(VER)"'

ifdef PeterChen_DBG		# Added by PeterChen , 2002/12/12 PM 02:38 , For debugging
CFLAGS += -DPeterChen_DBG
endif

ifdef	PeterChen_DEBUG		# Added by PeterChen , 2002/12/12 PM 02:38 , For debugging
CFLAGS += -DPeterChen_DEBUG
endif

ifdef DEBUG
CFLAGS += -g -DDEBUG
STRIP=true
else
CFLAGS += -O2 -fomit-frame-pointer
STRIP=$(CROSS_COMPILE)strip
endif

all:
	make clean
	make PeterChen
#	rm -f ../../../target/usr/sbin/udhcpd
#	rm -f ../../../target/usr/sbin/udhcpc
#	cp ./udhcpd ../../../target/usr/sbin/
#	cp ./udhcpc ../../../target/usr/sbin/

PeterChen:	$(EXEC1) $(EXEC2) $(EXEC3)
#	chmod +w ../../../target/lib/libc.so.6
#	cp /opt/brcm/hndtools-mipsel-linux-3.0/mipsel-linux/lib/libc.so.6 ../../../target/lib/
	$(STRIP) --remove-section=.note --remove-section=.comment $(EXEC1) $(EXEC2) $(EXEC3)

$(OBJS1) $(OBJS2) $(OBJS3): *.h Makefile
$(EXEC1) $(EXEC2) $(EXEC3): Makefile

.c.o:
	$(CC) -c $(CFLAGS) $<

$(EXEC1): $(OBJS1)
	$(LD) $(LDFLAGS) $(OBJS1) -o $(EXEC1) -lnvram

$(EXEC2): $(OBJS2)
	$(LD) $(LDFLAGS) $(OBJS2) -o $(EXEC2) -lnvram

$(EXEC3): $(OBJS3)
	$(LD) $(LDFLAGS) $(OBJS3) -o $(EXEC3)


install: all

	$(INSTALL) $(DAEMONS) $(USRSBINDIR)
	$(INSTALL) $(COMMANDS) $(USRBINDIR)

ifdef COMBINED_BINARY
	ln -sf $(USRSBINDIR)/$(DAEMONS) $(SBINDIR)/$(BOOT_PROGRAMS)
else
	$(INSTALL) $(BOOT_PROGRAMS) $(SBINDIR)
endif

#	mkdir -p $(USRSHAREDIR)/udhcpc
#	for name in bound deconfig renew script ; do \
#		$(INSTALL) samples/sample.$$name \
#			$(USRSHAREDIR)/udhcpc/default.$$name ; \
#	done
#	mkdir -p $(USRSHAREDIR)/man/man1
#	$(INSTALL) dumpleases.1 $(USRSHAREDIR)/man/man1
#	mkdir -p $(USRSHAREDIR)/man/man5
#	$(INSTALL) udhcpd.conf.5 $(USRSHAREDIR)/man/man5
#	mkdir -p $(USRSHAREDIR)/man/man8
#	$(INSTALL) udhcpc.8 udhcpd.8 $(USRSHAREDIR)/man/man8

romfs: all
	cp $(DAEMONS) $(ROMFSDIR)/usr/sbin
	cp $(COMMANDS) $(ROMFSDIR)/usr/sbin

#We don't need udhcpc
#ifdef COMBINED_BINARY
#	ln -sf $(ROMFSDIR)/sbin/$(DAEMONS) $(ROMFSDIR)/sbin/$(BOOT_PROGRAMS)
#else
#	cp $(BOOT_PROGRAMS) $(ROMFSDIR)/sbin
#endif

clean:
	-rm -f udhcpd udhcpc dumpleases *.o core
