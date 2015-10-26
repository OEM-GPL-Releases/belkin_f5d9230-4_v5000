# PPP top-level Makefile for Linux.


BINDIR = $(DESTDIR)/usr/sbin
INCDIR = $(DESTDIR)/usr/include
MANDIR = $(DESTDIR)/usr/man
ETCDIR = $(DESTDIR)/etc/ppp

# uid 0 = root
INSTALL= install
DIRS = pppd pppd/plugins

all:
# +++ Gamble, Gemtek
#	cd chat; $(MAKE) $(MFLAGS) all
#	cd pppd/plugins; $(MAKE) $(MFLAGS) all
#	cd pppd; $(MAKE) $(MFLAGS) all
#	cd pppstats; $(MAKE) $(MFLAGS) all
#	cd pppdump; $(MAKE) $(MFLAGS) all
	cd pppd/plugins && $(MAKE) $(MFLAGS) all
	cd pppd && $(MAKE) $(MFLAGS) all
# --- Gamble, Gemtek

# +++ Gemtek
#install: $(BINDIR) $(MANDIR)/man8 install-progs install-etcppp install-devel
install:
	cd pppd/plugins && $(MAKE) install
	cd pppd && $(MAKE) install
# --- Gemtek

install-progs:
	cd chat; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) $(MFLAGS) install
	cd pppd/plugins; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) $(MFLAGS) install
	cd pppd; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) $(MFLAGS) install
	cd pppstats; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) $(MFLAGS) install
	cd pppdump; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) $(MFLAGS) install

install-etcppp: $(ETCDIR) $(ETCDIR)/options $(ETCDIR)/pap-secrets \
	$(ETCDIR)/chap-secrets

install-devel:
	cd pppd; $(MAKE) BINDIR=$(BINDIR) MANDIR=$(MANDIR) INCDIR=$(INCDIR) $(MFLAGS) install-devel

$(ETCDIR)/options:
	$(INSTALL) -c -m 644 etc.ppp/options $@
$(ETCDIR)/pap-secrets:
	$(INSTALL) -c -m 600 etc.ppp/pap-secrets $@
$(ETCDIR)/chap-secrets:
	$(INSTALL) -c -m 600 etc.ppp/chap-secrets $@

$(BINDIR):
	$(INSTALL) -d -m 755 $@
$(MANDIR)/man8:
	$(INSTALL) -d -m 755 $@
$(ETCDIR):
	$(INSTALL) -d -m 755 $@

romfs:
	for i in $(DIRS) ; do make -C $$i romfs || exit $? ; done

clean:
	rm -f `find . -name '*.[oas]' -print`
	rm -f `find . -name 'core' -print`
	rm -f `find . -name '*~' -print`
	cd chat; $(MAKE) clean
	cd pppd/plugins; $(MAKE) clean
	cd pppd; $(MAKE) clean
	cd pppstats; $(MAKE) clean
	cd pppdump; $(MAKE) clean

dist-clean:	clean
	rm -f Makefile `find . -name Makefile -print`

#kernel:
#	cd linux; ./kinstall.sh
