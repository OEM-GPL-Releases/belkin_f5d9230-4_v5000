#
# radvd scripts controler Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 0.1 2002/12/13 AM 09:47:55 , Made by PeterChen
#

#CFLAGS	+= -s -O2 -Wall

#CFLAGS	+=	$(PATHNVRAM)
#CFLAGS	+=	$(PATHUSER)
#LDFLAGS	+= $(LIBNVRAM)

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
#CFLAGS	+= -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
#CFLAGS	+= -g -DDEBUG
CFLAGS	+= -Os
#LDFLAGS	+= -L$(TOP)/nvram
LDFLAGS	+= -L../nvram/bin

all:

clean:
#	rm -f *.o *~ linuxigdset

install:
	install -d $(INSTALLDIR)/bin
	install linuxigdset $(INSTALLDIR)/bin
	

romfs: all
	cp linuxigdset $(ROMFSDIR)/sbin
	
linuxigdset:	linuxigdset.o Makefile
	$(CC) -o $@ linuxigdset.o $(LDFLAGS) -lnvram
	$(STRIP)	linuxigdset
