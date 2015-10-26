#
# C library Makefile
# 
# Copyright 2004, Broadcom Corporation
# All Rights Reserved.
# 
# THIS SOFTWARE IS OFFERED "AS IS", AND BROADCOM GRANTS NO WARRANTIES OF ANY
# KIND, EXPRESS OR IMPLIED, BY STATUTE, COMMUNICATION OR OTHERWISE. BROADCOM
# SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A SPECIFIC PURPOSE OR NONINFRINGEMENT CONCERNING THIS SOFTWARE.
#
# $Id$
#
TARGETDIR := $(ROMFSDIR)

# Extra libraries
lib-y += libcrypt
lib-y += libdl
lib-y += libm
lib-y += libnsl
lib-y += libpthread
lib-y += libresolv
lib-y += libutil
#lib-y += libstdc++
lib-y += libgcc_s

libc-link = libc.so.0
libc-entity = libuClibc-0.9.27.so

# uClibc names
LINKER := ld-uClibc.so.0
LIBC := libuClibc-0.9.27.so
#MAP := uClibc.map


# Nothing to do until installation
all:
		
# Install default C library
romfs: $(LIBDIR)/$(LIBC)

# Also install extra libraries
romfs: $(wildcard $(foreach lib,$(LINKER) $(lib-y),$(LIBDIR)/$(lib) $(LIBDIR)/$(lib).so.?))
	/usr/bin/install -d $(TARGETDIR)/lib
	/usr/bin/install $^ $(TARGETDIR)/lib/
	$(STRIP) $(TARGETDIR)/lib/*.so*
	ln -s $(libc-entity) $(TARGETDIR)/lib/$(libc-link)

clean:
	rm -f $(LIBC) $(MAP) .symbols
