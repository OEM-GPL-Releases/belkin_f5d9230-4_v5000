
all:
#	make -C nvram clean
#	make -C nvram
#	mkdir -p bin
#	cp nvram/nvram bin/nvram
#	cp nvram/libnvram.so bin/libnvram.so
#	cp nvram/nvserv	bin/nvserv
#	$(STRIP) bin/nvram
#	$(STRIP) bin/libnvram.so
#	$(STRIP) bin/nvserv

clean:
#	make -C nvram clean
#	rm -f bin/*
#	rm -f *.bak
	
romfs:
	cp bin/libnvram.so $(ROMFSDIR)/lib/libnvram.so
	cp bin/nvram $(ROMFSDIR)/usr/sbin/nvram
	cp bin/nvserv $(ROMFSDIR)/usr/sbin/nvserv
	chmod 644 $(ROMFSDIR)/lib/libnvram.so
	chmod 711 $(ROMFSDIR)/usr/sbin/nvram
	chmod 711 $(ROMFSDIR)/usr/sbin/nvserv

