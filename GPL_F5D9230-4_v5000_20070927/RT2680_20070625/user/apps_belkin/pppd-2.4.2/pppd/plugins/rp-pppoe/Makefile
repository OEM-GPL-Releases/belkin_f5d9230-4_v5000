# Generated automatically from Makefile.in by configure.
#***********************************************************************
#
# Makefile
#
# Makefile for Roaring Penguin's Linux PPPoE plugin.
#
# Copyright (C) 2001 Roaring Penguin Software Inc.
#
# This program may be distributed according to the terms of the GNU
# General Public License, version 2 or (at your option) any later version.
#
# $Id: Makefile.linux,v 1.2 2004/01/13 03:57:55 paulus Exp $
#***********************************************************************

# Version is set ONLY IN THE MAKEFILE!  Don't delete this!
VERSION=3.3

COPTS=-O2 -g
CFLAGS=$(COPTS) -I../../../include/linux
all: rp-pppoe.so

rp-pppoe.so: libplugin.a plugin.o
	$(CC) -o rp-pppoe.so -shared plugin.o libplugin.a
	$(STRIP) rp-pppoe.so

# Gemtek
#install: all
#	$(INSTALL) -d -m 755 $(LIBDIR)
#	$(INSTALL) -s -c -m 4550 rp-pppoe.so $(LIBDIR)

install:
	$(STRIP) rp-pppoe.so
	install -D rp-pppoe.so $(INSTALLDIR)/bin/rp-pppoe.so
	
romfs:
	cp rp-pppoe.so $(ROMFSDIR)/bin/$(EXEC)


clean:
	rm -f *.o *.so

plugin.o: plugin.c
# +++ Gamble, Gemtek
#	gcc '-DRP_VERSION="$(VERSION)"' $(CFLAGS) -I../../..  -c -o plugin.o -fPIC plugin.c
	$(CC) '-DRP_VERSION="$(VERSION)"' $(CFLAGS) -I../../..  -c -o plugin.o -fPIC plugin.c
# --- Gamble, Gemtek 

libplugin.a: discovery.o if.o common.o debug.o
# +++ Gamble, Gemtek
#	ar -rc $@ $^
	$(AR) -rc $@ $^
# --- Gamble, Gemtek

discovery.o: discovery.c
# +++ Gamble, Gemtek
#	gcc $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o discovery.o -fPIC discovery.c
	$(CC) $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o discovery.o -fPIC discovery.c
# --- Gamble, Gemtek

if.o: if.c
# +++ Gamble, Gemtek
#	gcc $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o if.o -fPIC if.c
	$(CC) $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o if.o -fPIC if.c
# --- Gamble, Gemtek

debug.o: debug.c
# +++ Gamble, Gemtek
#	gcc $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o debug.o -fPIC debug.c
	$(CC) $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o debug.o -fPIC debug.c
# --- Gamble, Gemtek

common.o: common.c
# +++ Gamble, Gemtek
#	gcc $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o common.o -fPIC common.c
	$(CC) $(CFLAGS) '-DVERSION="$(VERSION)"' -c -o common.o -fPIC common.c
# --- Gamble, Gemtek
