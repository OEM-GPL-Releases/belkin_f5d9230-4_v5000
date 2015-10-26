#
# udhcpd scripts controler Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 0.1 2002/12/13 AM 09:47:55 , Made by PeterChen
#

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
#CFLAGS	+= -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
#CFLAGS	+= -g -DDEBUG
CFLAGS	+= -Os
#LDFLAGS	+= -L$(TOP)/nvram
LDFLAGS	+= -L../nvram/bin
# -L$(TOP)/netconf

#vpath %.c $(TOP)/shared

all:

clean:
#	rm -f *.o *~ rc udhcpdset

install:		all
	install -d $(INSTALLDIR)/sbin
	install udhcpdset $(INSTALLDIR)/sbin
	$(STRIP) $(INSTALLDIR)/sbin/udhcpdset

romfs:		all
	cp udhcpdset $(ROMFSDIR)/sbin
	
udhcpdset:	udhcpdset.o 
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram
