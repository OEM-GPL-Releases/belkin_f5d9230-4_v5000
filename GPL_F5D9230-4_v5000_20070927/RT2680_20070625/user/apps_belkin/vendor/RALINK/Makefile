
include $(USERDIR)/conf/$(VENDOR)_$(MODEL)/config.mk

obj-clean 	:= $(foreach obj,$(obj-v) $(dir),$(obj)-clean)
obj-install := $(foreach obj,$(obj-v),$(obj)-install)
obj-romfs 	:= $(foreach obj,$(obj-v),$(obj)-romfs)


# Gemtek : define Project-related parameters in source code 

all: $(obj-v)

clean: $(obj-clean)

romfs: $(obj-romfs)

install: $(obj-install)
	install -d $(TARGETDIR)
	for dir in $(wildcard $(patsubst %,$(INSTALLDIR)/%,$(obj-v))) ; do \
	    (cd $${dir} && tar cpf - .) | (cd $(TARGETDIR) && tar xpf -) \
	done

#
# Generic rules
#

busybox-1.2.1-install:
	$(MAKE) -C busybox-1.2.1 PREFIX=$(INSTALLDIR)/busybox-1.2.1 install

%:
	[ ! -d $* ] || $(MAKE) -C $*

%-clean:
	[ ! -d $* ] || $(MAKE) -C $* clean

%-install:
	[ ! -d $* ] || $(MAKE) -C $* install INSTALLDIR=$(INSTALLDIR)/$*

%-romfs:
	[ ! -d $* ] || $(MAKE) -C $* romfs

$(obj-v) $(obj-n) $(obj-clean) $(obj-install): dummy

.PHONY: all clean install
