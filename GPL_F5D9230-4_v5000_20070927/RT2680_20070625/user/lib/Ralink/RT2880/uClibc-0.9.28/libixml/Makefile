TOPDIR=../
include $(TOPDIR)Rules.mak

LIBIXML=libixml.a

COBJS=$(patsubst %.c,%.o, $(CSRC))
OBJS=$(COBJS)

HEADERS = $(CSRH)
CSRC = $(libixml_la_SOURCES)
CSRH = $(upnpinclude_HEADERS)
CFLAGS  += -DHAVE_CONFIG_H -DUSE_HOSTCC -pthread -g -O2 -Os -Wall -I./src/inc -I./inc/ -I../upnp/inc


libixml_la_SOURCES = \
			src/ixml.c src/node.c src/ixmlparser.c \
			src/ixmlmembuf.c src/nodeList.c \
			src/element.c src/attr.c src/document.c \
			src/namedNodeMap.c
			

upnpincludedir = $(includedir)/upnp
upnpinclude_HEADERS = inc/ixml.h src/inc/ixmlmembuf.h src/inc/ixmlparser.h

all: libixml

libixml: $(OBJS) $(HEADERS)
	$(AR) $(ARFLAGS) $(LIBIXML) $(OBJS)

$(OBJS): %.o : %.c
	$(CC) $(CFLAGS) -c $< -o $@
	$(STRIPTOOL) -x -R .note -R .comment $*.o

clean:
	rm -rf $(LIBIXML) *.o
	find . -name *.o -exec rm -rf {} \;

