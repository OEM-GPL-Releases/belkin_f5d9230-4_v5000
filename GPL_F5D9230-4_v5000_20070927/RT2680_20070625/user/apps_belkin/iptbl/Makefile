#
# filter and port forwarding control Makefile
#

CFLAGS	+= -I. -I../shared -I../shared/nvram -I$(SRCBASE)/include -Wall
#CFLAGS	+= -g -DDEBUG
#CFLAGS	+= -DUPGRADE_PMON
CFLAGS	+= -s -O2 #-DPeterChen_DEBUG
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= -L../netconf 
LDFLAGS	+= -L../nvram/bin

IPTBL_OBJ += iptbl.o
IPTBL_OBJ += firewall.o
IPTBL_OBJ += nat.o
IPTBL_OBJ += gemtek.o
IPTBL_OBJ += port_trigger.o
IPTBL_OBJ += port_fw.o
IPTBL_OBJ += single_port_fw.o
IPTBL_OBJ += normal_dmz.o
IPTBL_OBJ += dmz.o
IPTBL_OBJ += remote_management.o
IPTBL_OBJ += port_filter.o
IPTBL_OBJ += schedule.o
IPTBL_OBJ += filter_iprange_with_port.o
IPTBL_OBJ += filter_ip_mac.o
IPTBL_OBJ += filter_idnt.o
IPTBL_OBJ += lan_rule.o
IPTBL_OBJ += vpn_passthrough.o
IPTBL_OBJ += mac_filter.o

vpath %.c $(TOP)/shared

#all: filter portfw iptbl
all:

clean:
#	rm -f *.o *~ iptbl

install: all
	# install -d $(INSTALLDIR)/usr/bin
	install filter $(INSTALLDIR)/usr/sbin
	$(STRIP) $(INSTALLDIR)/usr/sbin/filter
	
	install portfw $(INSTALLDIR)/usr/sbin
	# install portfw /home/tftpd
	$(STRIP) $(INSTALLDIR)/usr/sbin/portfw
	# $(STRIP) /home/tftpd/portfw
	
romfs: all
	#cp filter $(ROMFSDIR)/usr/sbin
	#cp portfw $(ROMFSDIR)/usr/sbin
	cp iptbl $(ROMFSDIR)/usr/sbin
	
filter: filter.o gemtek.o
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram -lnetconf

portfw: portfw.o gemtek.o
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram 

iptbl: $(IPTBL_OBJ)
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram
