CFLAGS		+= -O2 -Wall -I.

CFLAGS		+= $(PATHNVRAM)
LDFLAGS 	+= $(LIBNVRAM)

OBJS		:= configRa0.o

all:

configRa0: $(OBJS)	
	$(CC) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	$(STRIP) configRa0
	
clean:
#	rm -f $(OBJS) configRa0

#install:	
#	mkdir -p $(ROOTDIR)/romfs/usr/sbin
#	cp fwupgrade $(ROOTDIR)/romfs/usr/sbin/fwupgrade
	
romfs:
	cp configRa0 $(ROMFSDIR)/bin/configRa0
#Don't copy wireless driver since it has been built into kernel
#OsborneModify Start on June 4, 2007.
#	cp rt2860v2_ap_m.obj $(ROMFSDIR)/etc/rt2860v2_ap.o
#	cp rt2860v2_ap.o $(ROMFSDIR)/etc/rt2860v2_ap.o
#OsborneModify End.
#	cp -f RT2860AP.dat $(ROMFSDIR)/etc/Wireless/RT2860AP/RT2860AP.dat
	
#	$(ROMFSINST)    /usr/sbin/fwupgrade

