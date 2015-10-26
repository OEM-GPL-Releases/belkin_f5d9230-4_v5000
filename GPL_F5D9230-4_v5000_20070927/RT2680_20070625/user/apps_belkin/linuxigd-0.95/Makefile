# +++ Gemtek
#PREFIX=/usr
#LIBUPNP_PREFIX=/usr
#LIBIPTC_PREFIX=/usr
#CC=gcc
LIBUPNP_PREFIX = ../libupnp-1.3.1
INCLUDES= -I$(LIBUPNP_PREFIX)/upnp/inc -I$(LIBUPNP_PREFIX)/ixml/inc -I$(LIBUPNP_PREFIX)/threadutil/inc -I../include
LIBS=  -L$(LIBUPNP_PREFIX)/upnp/.libs -L$(LIBUPNP_PREFIX)/ixml/.libs -L$(LIBUPNP_PREFIX)/threadutil/.libs -lpthread -lupnp -lixml -lthreadutil
# --- Gemtek
FILES= main.o gatedevice.o pmlist.o util.o config.o

CFLAGS += -Wall -g -O2

ifdef HAVE_LIBIPTC
ifdef LIBIPTC_PREFIX
LIBS += -L$(LIBIPTC_PREFIX)/lib
INCLUDES += -I$(LIBIPTC_PREFIX)/include
endif

LIBS += -liptc
INCLUDES += -DHAVE_LIBIPTC
FILES += iptc.o
endif

all: upnpd

upnpd: $(FILES)
	$(CC) $(CFLAGS) $(FILES) $(LIBS) -o $@
	$(STRIP) upnpd
	@echo "make $@ finished on `date`"

%.o:	%.c
	$(CC) $(CFLAGS) $(INCLUDES) -c $<

clean:
	rm -f *.o upnpd

install: upnpd
	install -d $(INSTALLDIR)/etc/linuxigd
	install -d $(INSTALLDIR)/bin
#	install -d $(INSTALLDIR)/etc
#	install etc/gatedesc.xml $(INSTALLDIR)/etc/linuxigd/gatedesc.xml
	install etc/gateconnSCPD.xml  $(INSTALLDIR)/etc/linuxigd/gateconnSCPD.xml
	install etc/gateicfgSCPD.xml $(INSTALLDIR)/etc/linuxigd/gateicfgSCPD.xml
	install etc/dummy.xml $(INSTALLDIR)/etc/linuxigd/dummy.xml
	install upnpd $(INSTALLDIR)/bin/upnpd
#	install etc/upnpd.conf $(INSTALLDIR)/etc/upnpd.conf

romfs:
	mkdir -p $(ROMFSDIR)/etc/linuxigd
	cp etc/gateconnSCPD.xml  $(ROMFSDIR)/etc/linuxigd/gateconnSCPD.xml
	cp etc/gateicfgSCPD.xml $(ROMFSDIR)/etc/linuxigd/gateicfgSCPD.xml
	cp etc/dummy.xml $(ROMFSDIR)/etc/linuxigd/dummy.xml
	cp upnpd $(ROMFSDIR)/bin/upnpd