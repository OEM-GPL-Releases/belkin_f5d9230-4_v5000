CFLAGS	+=	$(PATHUSER)

all:
#	make -C factory clean
#	make -C factory
#	cp factory/factory bin/factory
#	cp factory/libfactory.so bin/libfactory.so
#	cp factory/factory_nvserv	bin/factory_nvserv
#	$(STRIP) bin/factory
#	$(STRIP) bin/libfactory.so
#	$(STRIP) bin/factory_nvserv

clean:
#	make -C factory clean
#	rm -f bin/*
#	rm -f *.bak

romfs:
	cp bin/libfactory.so $(ROMFSDIR)/lib/libfactory.so
	cp bin/factory $(ROMFSDIR)/usr/sbin/factory
	cp bin/factory_nvserv $(ROMFSDIR)/usr/sbin/factory_nvserv
	chmod 644 $(ROMFSDIR)/lib/libfactory.so
	chmod 711 $(ROMFSDIR)/usr/sbin/factory
	chmod 711 $(ROMFSDIR)/usr/sbin/factory_nvserv

install: all
	install -D bin/libfactory.so $(INSTALLDIR)/usr/lib/libfactory.so
	install -D bin/factory $(INSTALLDIR)/usr/sbin/factory
	install -D bin/factory_nvserv  $(INSTALLDIR)/usr/sbin/factory_nvserv
