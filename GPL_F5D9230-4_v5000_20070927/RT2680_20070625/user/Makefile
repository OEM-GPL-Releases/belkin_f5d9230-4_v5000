
ifeq ($(PROJECT), RALINK)
include ./conf/$(VENDOR)_$(MODEL)/compile.mk
endif


prep:
	@echo '#define PROJECT "$(PROJECT)"' > conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define WL_DOMAIN "$(WL_DOMAIN)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define COUNTRY "$(COUNTRY)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define DEVMODE "$(DEVMODE)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define MODEL "$(MODEL)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define VENDOR "$(VENDOR)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define FUNC "$(FUNC)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define INCLUDE_SSL "$(INCLUDE_SSL)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	@echo '#define BAND "$(BAND)"' >> conf/$(VENDOR)_$(MODEL)/project.h;
	
menuconfig:
	make -C config mconf
	@./config/mconf ./config/Config-$(MODEL)
	
all:
	make -C $(LIBDIR) all
	make -C $(VENDOR_DIR) all	
	make -C apps all
	rm -rf $(TARGETDIR)
	rm -rf $(INSTALLDIR)
	
install:
	make -C apps install
		
romfs: romfs_prep
	make -C $(LIBDIR) romfs
	make -C $(VENDOR_DIR) romfs	
	make -C apps romfs	

romfs_prep:
	rm -rf $(ROMFSDIR)
	mkdir -p $(ROMFSDIR)/bin
	mkdir -p $(ROMFSDIR)/dev
	mkdir -p $(ROMFSDIR)/etc
	mkdir -p $(ROMFSDIR)/etc/linuxigd
	mkdir -p $(ROMFSDIR)/lib
	mkdir -p $(ROMFSDIR)/proc
	mkdir -p $(ROMFSDIR)/sbin
	mkdir -p $(ROMFSDIR)/tmp
#	mkdir -p $(ROMFSDIR)/var	
	mkdir -p $(ROMFSDIR)/usr/bin
	mkdir -p $(ROMFSDIR)/usr/sbin
	mkdir -p $(ROMFSDIR)/usr/lib
	mkdir -p $(ROMFSDIR)/www
	ln -sf /tmp/resolv.conf $(ROMFSDIR)/etc/resolv.conf
	ln -s /tmp $(ROMFSDIR)/var
	ln -sf /tmp/user.conf $(ROMFSDIR)/www/user.conf
	ln -sf /tmp/log/security.log $(ROMFSDIR)/www/security.log
	ln -sf /tmp/log/dhcpc.log $(ROMFSDIR)/www/dhcpc.log
	ln -sf /tmp/log/outgoing.log $(ROMFSDIR)/www/outgoing.log
	ln -sf /tmp/log/incoming.log $(ROMFSDIR)/www/incoming.log
	ln -sf /tmp/syslog.conf $(ROMFSDIR)/www/syslog.conf
	ln -sf /tmp/version.html $(ROMFSDIR)/www/version.htm
	mkdir -p $(ROMFSDIR)/etc/Wireless/RT2860AP
	ln -sf /var/RT2860AP.dat $(ROMFSDIR)/etc/Wireless/RT2860AP/RT2860AP.dat
	
clean:
	make -C apps clean
	make -C $(VENDOR_DIR) clean
	make -C $(LIBDIR) clean
	make -C $(FWTOOL) clean	
	make -C $(SQSHTOOL) clean
	make -C $(UBOOTTOOL) clean
	make -C $(HEADERTOOL) clean
	rm -f $(IMAGEDIR)/*
	rm -rf $(ROMFSDIR)	

image_prep:
	rm -f $(IMAGEDIR)/*

image_root:
	$(MAKE) -C $(SQSHTOOL) all
	$(STRIP) $(ROMFSDIR)/lib/*
	for i in `find romfs/bin -type f -print | file -f - | grep ELF | cut -d':' -f1`; do \
		$(STRIP) $$i; \
	done
ifeq ($(SYS_ENDIAN),LITTLE_ENDIAN)
	cd $(IMAGEDIR) && $(SQSHTOOL)/mksquashfs-lzma $(ROMFSDIR) $(IMAGE_ROOT) -le -all-root -noappend
else
	cd $(IMAGEDIR) && $(SQSHTOOL)/mksquashfs-lzma $(ROMFSDIR) $(IMAGE_ROOT) -be -all-root -noappend
endif

# image_kernel is defined at compile.mk
image: image_prep image_root image_kernel
	$(MAKE) -C $(FWTOOL) all
	cd $(IMAGEDIR) && $(FWTOOL)/mkimage $(IMAGE_KERNEL_UBOOT) $(IMAGE_ROOT) $(IMAGE_FIRMWARE)
	$(MAKE) -C $(HEADERTOOL) all
	cd $(IMAGEDIR) && $(HEADERTOOL)/mkimage $(IMAGE_FIRMWARE)
	
	
header:
	make -C tools/addhdr all
	@cd image && ./../tools/addhdr/mkimage $(FW_FILE)
	@make -C tools/addhdr clean
	
.PHONY : header image romfs
