
#
#	Chipset Vendor related Application
#
obj-v += nvram
obj-v += nvram_factory
obj-v += flash
obj-v += configRa0
#obj-v += wireless_tools.27
#OsborneModify Start on May 2, 2007. Include the calibration tool for now..
obj-v += ate
obj-v += rt2860ap-802.1X
#OsborneModify End.

#
#	Gemtek Application
#
obj-y += libutility
#obj-y += nvram
#obj-y += nvram_factory
obj-y += busybox-1.2.1
obj-y += bridge-utils-1.0.4
obj-y += openssl
#obj-y	+= lltdset
obj-y += udhcpc-0.9.8
obj-y += udhcpd-0.9.8
obj-y += udhcpdset
#obj-y += bpalogin-2.0.2
obj-y += pppd-2.4.2
obj-y += l2tpd-0.69
obj-y += pptp-1.1.0
obj-y += ntpclient
obj-y += dnsmasq
obj-y += conn_log
obj-y += tproxy
obj-y += iptbl
#obj-y += iproute2
obj-y += igmp
obj-y += zebrip
obj-y += zebra
obj-y += www
obj-y += ddns-1.4
obj-y += iptables-1.2.8
obj-y += qos
#obj-y += flex-2.5.33
#obj-y += radvd-0.9.1
obj-y += radvdset
obj-y += dslmode
#obj-y += tftpd-fw
#obj-y += libupnp-1.3.1
#obj-y += linuxigd-0.95
#obj-y += linuxigd-0.95_set
obj-y += easytest
obj-y += easyconf




#obj-y += libstorage
#obj-y += cron
#obj-y += crondset
#obj-y += mediascan
#obj-y += libupnp-1.3.1_debug
#obj-y += linuxigd-0.95_debug
#obj-y += ushare-0.9.7
#obj-y += disktype-9
#obj-y += mkdosfs
#obj-y += proftpd-1.3.0
#obj-y += user_group
#obj-y += tinylogin
#obj-y += samba-3.0.2

# 
#		All Supported Feature
#
# Configuration, supported feature
#
dir += bpalogin-2.0.2             
dir += bridge-utils-1.0.4      
dir += busybox-1.2.1              
dir += conn_log             
dir += ddns-1.4           
dir += dnsmasq              
dir += dnsmasq-2.33       
#dir += flex-2.5.33     
dir += httpd
dir += httpd_WRTB188GN
dir += igmp
dir += iproute2
dir += iptables-1.2.8
dir += iptbl
dir += iptbl_WRTB188GN
dir += l2tpd-0.69
dir += openssl
dir += openssl-0.9.8a
dir += ntpclient
dir += pppd-2.4.2
dir += pptp-1.1.0
dir += qos
dir += radvd-0.9.1
dir += radvdset
dir += rc
dir += rc_WRTB188GN
dir += samba-3.0.2
dir += libutility
dir += snmpdset
dir += tftpd-fw
dir += tiny-snmp
dir += tproxy
dir += udhcpc-0.9.8
dir += udhcpd-0.9.8
dir += udhcpdset
dir += upnp
dir += vconfig-1.6
dir += www
dir += zebra
dir += zebrip
dir += wsccmd-1.0.1
dir += ms-lltd
dir += lltdset
dir += dhcpv6-0.10
dir += wsd
dir += dslmode
dir += tftpd
dir += libupnp-1.3.1
dir += linuxigd-0.95
dir += linuxigd-0.95_set
dir += ushare-0.9.7
dir += easytest
dir += proftpd-1.3.0
dir += tinylogin
#dir += ctorrent-1.3.4
dir += BCM_nas_mipsel
dir += BCM_wlconf
dir += BCM_nvram
dir += BCM5397_set
dir += easyconf
dir += easytest
dir += libstorage
dir += disktype-9
#dir += user_group
dir += netbios
dir += mediascan
dir += cron
dir += crondset
dir += factory_nvram
