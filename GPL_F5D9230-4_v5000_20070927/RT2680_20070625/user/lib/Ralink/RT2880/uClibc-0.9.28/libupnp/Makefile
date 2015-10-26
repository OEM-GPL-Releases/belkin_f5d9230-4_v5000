TOPDIR=../
include $(TOPDIR)Rules.mak

LIBUPNP=libupnp.a

COBJS=$(patsubst %.c,%.o, $(CSRC))
OBJS=$(COBJS)

HEADERS = $(CSRH)
CSRC = $(filter %.c, $(libupnp_la_SOURCES))
CSRH = $(filter %.h, $(libupnp_la_SOURCES))
#CFLAGS  += -DDEBUG -DUPNP_HAVE_DEBUG 
CFLAGS  += -DHAVE_CONFIG_H -DUSE_HOSTCC -pthread -g -O2 -Os -Wall -I./src/inc/ -I./inc/ -I./ -I../libixml/inc -I../libthreadutil/inc

am__append_1 = inc/upnptools.h 
#am__append_2 = inc/upnpdebug.h
am__append_3 = src/api/upnptools.c
#am__append_4 = src/api/upnpdebug.c 

upnpinclude_HEADERS = inc/upnp.h $(am__append_1) $(am__append_2)

libupnp_la_SOURCES = src/inc/config.h src/inc/client_table.h \
	src/inc/global.h src/inc/md5.h src/inc/ssdplib.h \
	src/inc/unixutil.h src/inc/urlconfig.h src/inc/gmtdate.h \
	src/inc/membuffer.h src/inc/server.h src/inc/statcodes.h \
	src/inc/upnpapi.h src/inc/utilall.h src/inc/gena_ctrlpt.h \
	src/inc/http_client.h src/inc/miniserver.h \
	src/inc/service_table.h src/inc/statuscodes.h \
	src/inc/upnpclosesocket.h src/inc/util.h src/inc/gena_device.h \
	src/inc/httpparser.h src/inc/netall.h src/inc/soaplib.h \
	src/inc/strintmap.h src/inc/upnp_timeout.h src/inc/uuid.h \
	src/inc/gena.h src/inc/httpreadwrite.h src/inc/parsetools.h \
	src/inc/sock.h src/inc/sysdep.h src/inc/uri.h \
	src/inc/webserver.h src/ssdp/ssdp_device.c \
	src/ssdp/ssdp_ctrlpt.c src/ssdp/ssdp_server.c \
	src/soap/soap_device.c src/soap/soap_ctrlpt.c \
	src/soap/soap_common.c src/genlib/miniserver/miniserver.c \
	src/genlib/service_table/service_table.c \
	src/genlib/util/membuffer.c src/genlib/util/strintmap.c \
	src/genlib/util/upnp_timeout.c src/genlib/util/util.c \
	src/genlib/client_table/client_table.c src/genlib/net/sock.c \
	src/genlib/net/http/httpparser.c \
	src/genlib/net/http/httpreadwrite.c \
	src/genlib/net/http/statcodes.c \
	src/genlib/net/http/webserver.c \
	src/genlib/net/http/parsetools.c src/genlib/net/uri/uri.c \
	src/gena/gena_device.c src/gena/gena_ctrlpt.c \
	src/gena/gena_callback2.c src/api/upnpapi.c $(am__append_3) \
	$(am__append_4) src/uuid/md5.c src/uuid/sysdep.c \
	src/uuid/uuid.c src/urlconfig/urlconfig.c 

all: libupnp

libupnp: $(OBJS) $(HEADERS)
	$(AR) $(ARFLAGS) $(LIBUPNP) $(OBJS)

$(OBJS): %.o : %.c
	$(CC) $(CFLAGS) -c $< -o $@
	$(STRIPTOOL) -x -R .note -R .comment $*.o

clean:
	rm -rf $(LIBUPNP) *.o
	find . -name *.o -exec rm -rf {} \;
