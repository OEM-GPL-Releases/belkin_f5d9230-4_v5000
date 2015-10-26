dir_y =
dir_n =


dir_y		+= busybox
dir_y		+= bridge-utils-1.0.4
dir_y		+= init
dir_y		+= iptables
dir_y		+= www
dir_y		+= reset_default
dir_v		+= conn_log
dir_y		+= vconfig-1.6

dir_v		+= httpd
dir_y		+= sysinit
dir_v		+= udhcpc
dir_v		+= easytest

dir_v		+= easyconf_BELKIN
dir_v		+= easytest

dir_v		+= wireless_tools 

ifeq ($(FIRMWARE),)
dir_v		+= udhcpd
dir_v		+= udhcpdset
dir_v		+= dnsmasq-2.26-modify
dir_v		+= dslmode
dir_v		+= pppd-2.4.2
dir_v		+= ntpclient_ori
dir_v		+= ddns_final
dir_v		+= pptp
dir_v		+= conn_log
dir_v		+= iptbl
dir_v		+= bpalogin-2.0.2
dir_v		+=libupnp-1.3.1
dir_v		+=linuxigd-0.95
dir_v		+=linuxigd-0.95_set

dir_v		+= tproxy_cwf
dir_v		+= rp-pppoe-3.8/src
endif

all:
	for i in $(dir_y) $(dir_v) $(dir_p); do \
		[ ! -d $$i ] || make -C $$i || exit $$? ; \
	done

romfs:
	for i in $(dir_v) $(sort $(dir_y)) $(dir_p) ; do \
		[ ! -d $$i ] || make -C $$i romfs || exit $$? ; \
	done

clean:
	for i in $(dir_v) $(sort $(dir_y) $(dir_n) $(dir_)) $(dir_p) ; do \
		[ ! -d $$i ] || make -C $$i clean; \
	done
