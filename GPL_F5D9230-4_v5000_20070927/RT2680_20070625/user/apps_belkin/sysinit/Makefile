CFLAGS		+= -O2 -Wall -I../shared -I../../include
LDFLAGS		+= -L../nvram/bin -lnvram
LDFLAGS		+= -L../vendor/RALINK/nvram_factory/bin -lfactory
OBJS		= sysinit.o util.o interfaces.o services.o psmon.o dhcpc.o pppoe.o wan_connect.o
 

#include $(ROOTDIR)/config.mk

#ifeq ($(VENDOR),LINKSYS)
#CFLAGS		+= -DWAN_MODE_DETECT -D__WITH_TFTPD
#endif

ifeq ($(HAS_WPSBTN),Y)
CFLAGS		+= -DHAS_WPSBTN
endif

all:
# wan_connect

sysinit: $(OBJS)
	$(CC) $(CFLAGS) -o $@ $(OBJS) $(LDFLAGS)

libsysutil.so: util.o
	$(LD) -EL -shared -o $@ $^

#wan_connect: $(WANOBJS) 
#	$(CC) $(CFLAGS) -o $@ $(WANOBJS) $(LDFLAGS)


clean:
#	rm -f *.bak $(OBJS) sysinit $(WANOBJS) wan_connect libsysutil.so
	
romfs:
	cp rc $(ROMFSDIR)/etc/rc
#	cp inittab $(ROMFSDIR)/etc/inittab
	cp sysinit $(ROMFSDIR)/bin/sysinit
	cp libsysutil.so $(ROMFSDIR)/lib
#	cp wan_connect $(ROMFSDIR)/bin/wan_connect
#	cp options.ppp $(ROMFSDIR)/etc
#	$(ROMFSINST)    /etc/rc
#	$(ROMFSINST)    /etc/inittab
#	$(ROMFSINST)    /usr/sbin/sysinit
	cd $(ROMFSDIR)/bin && ln -sf sysinit restart
	cd $(ROMFSDIR)/bin && ln -sf sysinit wanup.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit udhcpc.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit release-wan.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit renew-wan.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit loglevel
	cd $(ROMFSDIR)/bin && ln -sf sysinit wan_connect
	cd $(ROMFSDIR)/bin && ln -sf sysinit psmon
	cd $(ROMFSDIR)/bin && ln -sf sysinit util
	cd $(ROMFSDIR)/bin && ln -sf busybox reboot
	cd $(ROMFSDIR)/bin && ln -sf sysinit gpio_show
	cd $(ROMFSDIR)/bin && ln -sf sysinit gpio_write
