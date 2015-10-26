
# include $(TOP)/.config

# CFLAGS  += -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
# #CFLAGS += -g -DDEBUG
# CFLAGS  += -s -O2
# LDFLAGS += -L$(TOP)/nvram -L$(INSTALLDIR)/nvram/usr/lib -lnvram -L$(TOP)/shared -L$(INSTALLDIR)/shared/usr/lib -lshared

#INCLUDE_SSL=Y
#include $(ROOTDIR)/config.mk

CFLAGS	+= -I. -I../shared -I../openssl/include -Wall -O2 -DSNAPGEAR -DWL_ACL
CFLAGS += -I../../conf/$(VENDOR)_$(MODEL)
# +++ add for gemtek.c(do_upload_post)
CFLAGS += -I../../include -I../vendor/RALINK/flash
ifeq ($(INCLUDE_SSL),Y)
LDFLAGS	+= -L../nvram/bin -lnvram -L../openssl -lssl -lcrypto -L../sysinit/ -lsysutil
OBJS = httpd.o cgi.o ej.o webs_control.o gemtek_wep_passphrase.o ssl_util.o crc32.o shutils.o
CFLAGS += -DUSE_SSL
else
LDFLAGS	+= -L../nvram/bin -lnvram -L../sysinit/ -lsysutil
OBJS =  httpd.o cgi.o ej.o webs_control.o gemtek_wep_passphrase.o crc32.o shutils.o
endif
# +++ add for write_to_flash in gemtek.c of do_upload_post()
CFLAGS  += $(PATHFLASH)
LDFLAGS += $(LIBFLASH)
ifeq ($(INCLUDE_TR069),Y)
CFLAGS	+= -DTR069
OBJS +=  tr069.o 
endif


# ifeq ($(CONFIG_EZC),y)
# OBJS += ezc.o
# endif

# vpath %.c $(TOP)/shared
vpath %.c ../shared ../sysinit
# vpath %.o $(SRCBASE)/router/httpd/prebuilt

all:

clean:
#	rm -f *.o *~ httpd https

# install: all
#	install -D httpd $(INSTALLDIR)/usr/sbin/httpd
#	$(STRIP) $(INSTALLDIR)/usr/sbin/httpd
romfs: all
	cp httpd $(ROMFSDIR)/bin/httpd
	cp mini_httpd.pem $(ROMFSDIR)/etc/mini_httpd.pem
	cd $(ROOTDIR)/user/romfs/bin && ln -sf httpd https
#	cp https $(ROMFSDIR)/bin/https	
#	$(ROMFSINST) /bin/httpd

httpd: $(OBJS)
#	$(CC) -o $@ $^ $(LDFLAGS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDLIBS) $(LDFLAGS)
#	echo OsborneTest
#	$(STRIP) $@

https: $(OBJS-s)
#	$(CC) -o $@ $^ $(LDFLAGS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDLIBS) $(LDFLAGS)
#	echo OsborneTest
#	$(STRIP) $@
                    
