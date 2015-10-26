#
# EasyConf control scripts Makefile
#
# Copyright (C) 2002 Gemtek
#
# $Id: Makefile,v 1.1.1.1 2004/04/28 07:18:25 tom Exp $
#

CFLAGS	+= -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
#CFLAGS	+= -g -DDEBUG
CFLAGS	+= -s -O2 
LDFLAGS	+= -L$(TOP)/nvram 
# -L$(TOP)/netconf
CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
LDFLAGS	+= -L../nvram/bin -L../shared/nvram

# vpath %.c $(TOP)/shared

all:

clean:
#	rm -f *.o *~ conn_log

install: all
	install -d $(INSTALLDIR)/usr/sbin
	install conn_log $(INSTALLDIR)/usr/sbin
	$(STRIP) $(INSTALLDIR)/usr/sbin/conn_log
romfs: all	
	mkdir -p $(ROMFSDIR)/usr/sbin
	cp conn_log $(ROMFSDIR)/usr/sbin
	
conn_log: conn_log.o 
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram 
# -lnetconf
