
WFLAGS := -Wall -Wstrict-prototypes -Wno-trigraphs

LINUX_SRC = $(ROOTDIR)/linux-2.4.x

MFLAGS := -D__KERNEL__ -DMODULE -I$(LINUX_SRC)/include -Wall -Wstrict-prototypes -Wno-trigraphs -O2 -fno-strict-aliasing -fno-common -fomit-frame-pointer -I$(ROOTDIR)/user/conf/WL_BELKIN -I$(LINUX_SRC)/include/asm/gcc -G 0 -mno-abicalls -fno-pic -pipe  -finline-limit=100000 -mlong-calls -march=mips2 -mabi=32 -Wa,--trap -DEXPORT_SYMTAB -iwithprefix -DMODVERSIONS -include $(LINUX_SRC)/include/linux/modversions.h

CFLAGS	+= -O2 -Wall -I. -I../nvram/include -I../sysinit

#include $(ROOTDIR)/config.mk

ifeq ($(HAS_WPSBTN),Y)
APPS = resetD resetC saveCurrentChannel wpsCtrl gpio ledctrl
CFLAGS	+= -DWPS_BTN_SUPPORT
else
APPS = resetD resetC saveCurrentChannel 
endif
APPS = resetD resetC saveCurrentChannel phy_control icplus

all:

resetD:
	$(CC) $(MFLAGS) -c -o resetD.o resetD.c

phy_control:
	$(CC) $(MFLAGS) -c -o phy_control.o phy_control.c

wpsCtrl:
	gcc $(MFLAGS) -c -o wpsCtrl.o wpsCtrl.c

resetC: resetC.o
	$(CC) -L../nvram/bin -lnvram -o resetC resetC.o $(LDLIBS)
#	$(CC) -o resetC resetC.o
	$(STRIP) resetC

icplus: icplus.o
	$(CC) -o icplus icplus.o $(LDLIBS)
#	$(CC) -o ledctrl ledctrl.o
	$(STRIP) icplus
	
#setPhy: setPhy.o
#	$(CC) -L../../user/nvram/bin -lnvram -o setPhy setPhy.o $(LDLIBS)
#	$(CC) -o resetC resetC.o
#	$(STRIP) setPhy

saveCurrentChannel: saveCurrentChannel.o
	$(CC) -L../nvram/bin -lnvram -o saveCurrentChannel saveCurrentChannel.o $(LDLIBS)
	$(STRIP) saveCurrentChannel

clean:
#	rm -f resetD.o resetC.o resetC phy_control.o icplus saveCurrentChannel saveCurrentChannel.o

romfs:
#	cp resetD.o $(ROMFSDIR)/etc/PhyDetect.o
#kyo	if [ "$(HAS_WPSBTN)" = "Y" ]; then \
#		cp wpsCtrl.o $(ROMFSDIR)/etc/wpsCtrl.o; \
#		cp gpio.o $(ROMFSDIR)/etc/gpio.o; \
#		cp ledctrl $(ROMFSDIR)/bin/ledctrl; \
#	fi	
	cp resetC $(ROMFSDIR)/bin/resetC
	chmod 777 $(ROMFSDIR)/bin/resetC
	cp phy_control.o $(ROMFSDIR)/etc/phy_control.o
#	chmod 777 $(ROMFSDIR)/bin/setPhy
	cp icplus $(ROMFSDIR)/bin/icplus
	chmod 777 $(ROMFSDIR)/bin/icplus
	cp saveCurrentChannel $(ROMFSDIR)/bin/saveCurrentChannel
	chmod 777 $(ROMFSDIR)/bin/saveCurrentChannel
	cp detectReset $(ROMFSDIR)/bin/detectReset

