TOPDIR=../
include $(TOPDIR)Rules.mak

LIBTHREADUTIL=libthreadutil.a

COBJS=$(patsubst %.c,%.o, $(CSRC))
OBJS=$(COBJS)

HEADERS = $(CSRH)
CSRC = $(libthreadutil_la_SOURCES)
CSRH = $(upnpinclude_HEADERS)
CFLAGS  += -DHAVE_CONFIG_H -DUSE_HOSTCC -pthread -g -O2 -Os -Wall -I./inc/ -I../libthreadutil/inc

libthreadutil_la_SOURCES = \
			src/FreeList.c src/LinkedList.c \
			src/ThreadPool.c src/TimerThread.c \
			src/iasnprintf.c
upnpincludedir = $(includedir)/upnp
upnpinclude_HEADERS = \
			inc/FreeList.h inc/LinkedList.h \
			inc/ThreadPool.h inc/TimerThread.h \
			inc/iasnprintf.h inc/ithread.h

all: libthreadutil

libthreadutil: $(OBJS) $(HEADERS)
	$(AR) $(ARFLAGS) $(LIBTHREADUTIL) $(OBJS)

$(OBJS): %.o : %.c
	$(CC) $(CFLAGS) -c $< -o $@
	$(STRIPTOOL) -x -R .note -R .comment $*.o

clean:
	rm -rf $(LIBTHREADUTIL) *.o
	find . -name *.o -exec rm -rf {} \;



