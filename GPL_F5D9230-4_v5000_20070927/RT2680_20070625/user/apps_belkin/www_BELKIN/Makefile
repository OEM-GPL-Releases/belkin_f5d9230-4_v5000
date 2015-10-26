#CC	= gcc
CFLAGS	+= -O -Wall -I.

OBJS	= main.o

all: 
	echo "um.....nothing to do :p"
romfs:
	mkdir -p $(ROMFSDIR)/www
#	$(ROOTDIR)/tools/delch -d ../www
#	cp WebUI/* $(ROMFSDIR)/www
#ifneq ($(COUNTRY), )
#	cp -f ../country/$(COUNTRY)/showMenu.js_BELKIN ./showMenu.js
#	cp -f ../country/$(COUNTRY)/htm_BELKIN/*.htm ./
#else
#kyo	cp -f ../country/US/showMenu.js_BELKIN ./showMenu.js
#kyo	cp -f ../country/US/htm_BELKIN/*.htm ./
#endif
#ifeq ($(COUNTRY), JP)
#	cp -f ../country/$(COUNTRY)/htm_BELKIN/wan_conn.htm ./
#	cp -f ../country/$(COUNTRY)/htm_BELKIN/wan_multipppoe.htm ./
#	cp -f ../country/$(COUNTRY)/htm_BELKIN/wan_multipppoe_route.htm ./
#endif

	cp * $(ROMFSDIR)/www
ifeq ($(TYPE), APAC)
	rm -f $(ROMFSDIR)/www/language_de.js
	rm -f $(ROMFSDIR)/www/language_du.js
	rm -f $(ROMFSDIR)/www/language_es.js
	rm -f $(ROMFSDIR)/www/language_it.js
	rm -f $(ROMFSDIR)/www/language_jp.js
	rm -f $(ROMFSDIR)/www/language_es.js
endif
ifeq ($(TYPE), MR)
	rm -f $(ROMFSDIR)/www/language_du.js
	rm -f $(ROMFSDIR)/www/language_it.js
	rm -f $(ROMFSDIR)/www/language_jp.js
	rm -f $(ROMFSDIR)/www/language_kr.js
	rm -f $(ROMFSDIR)/www/language_tw.js
	rm -f $(ROMFSDIR)/www/language_sc.js
endif
ifeq ($(TYPE), JP)
	rm -f $(ROMFSDIR)/www/language_de.js
	rm -f $(ROMFSDIR)/www/language_es.js
	rm -f $(ROMFSDIR)/www/language_it.js	
	rm -f $(ROMFSDIR)/www/language_du.js
	rm -f $(ROMFSDIR)/www/language_it.js
	rm -f $(ROMFSDIR)/www/language_kr.js
	rm -f $(ROMFSDIR)/www/language_tw.js
	rm -f $(ROMFSDIR)/www/language_sc.js
endif


clean:
#	rm -f ./wan_multipppoe.htm
#	rm -f ./home.htm
