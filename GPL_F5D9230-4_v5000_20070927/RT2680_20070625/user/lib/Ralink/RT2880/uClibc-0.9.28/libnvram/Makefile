#
# (C) Copyright 2002
# Wolfgang Denk, DENX Software Engineering, wd@denx.de.
#
# See file CREDITS for list of people who contributed to this
# project.
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License as
# published by the Free Software Foundation; either version 2 of
# the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston,
# MA 02111-1307 USA
#

OBJS	:= crc32.o nvram_env.o flash_api.o
HEADERS := nvram_env.h nvram.h flash_api.h
CFLAGS  += -DUSE_HOSTCC -Wall -g -I../zlib -I../include -I../../linux-2.4.x/drivers/flash/
ARFLAGS :=rc

all:	libnvram 

libnvram:$(OBJS) $(HEADERS)
	$(AR) $(ARFLAGS) libnvram.a $(OBJS)

$(OBJS): $(HEADERS)

romfs:
	$(ROMFSINST) libnvram.so ../lib
clean:
	rm -f libnvram.a *.o
