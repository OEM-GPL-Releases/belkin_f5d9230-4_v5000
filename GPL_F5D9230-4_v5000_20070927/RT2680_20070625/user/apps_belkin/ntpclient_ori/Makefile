#
# Router NTP control scripts Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 1.1.1.1 2004/03/22 03:02:34 tom Exp $
#
CP	=	cp -f
CHMOD	=	chmod 755
DISKPATH =	/home/Bcom11g/linux4702/target/usr/sbin



CFLAGS	+=	-I. -I../include -I../shared -I$(SRCBASE)/include -I$(HPATH) -Wall
CFLAGS	+=  -O2 -DMODULE -D__KERNEL__ -DHAVE_CONFIG_H
CFLAGS  +=	-DLINUX -DTIMEZONE -DDAYLIGHTSAVE #-DANDYDEBUG -m4710a0kern
CFLAGS  +=	-Dlinux
CFLAGS  +=  -I../nvram/include -L../nvram/bin
CLIB	=	-L$(LIBDIR)
#LDFLAGS	=	-L$(TOP)/nvram
LDFLAGS += -L../nvram/bin -lnvram

OBJS	=	Getntp.o phaselock.o exeNtp.o
#Getntp
all	: 	clean exeNtp 

romfs	:	all
	cp exeNtp $(ROMFSDIR)/bin
	$(STRIP) $(ROMFSDIR)/bin/exeNtp
#	cp Getntp $(ROMFSDIR)/bin
#	$(STRIP) $(ROMFSDIR)/bin/Getntp

#parentCnt:	parentCnt.o
#	$(CC) $(CFLAGS) $(CLIB) parentCnt.c -o $@ $(LDFLAGS) -lnvram

exeNtp	:	$(OBJS)
	$(CC) $(CFLAGS) $(CLIB) -o $@ $(OBJS) $(LDFLAGS)

#Getntp	:	$(OBJS)
#	$(CC) $(CFLAGS) $(CLIB) -o $@ $(OBJS) $(LDFLAGS)

clean:
	rm -f Getntp.o phaselock.o *~ exeNtp
#	rm -f $(INSTALLDIR)/npclient/usr/sbin/exeNtp Getntp

