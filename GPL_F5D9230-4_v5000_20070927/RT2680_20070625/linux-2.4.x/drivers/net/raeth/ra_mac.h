#ifndef RA_MAC_H
#define RA_MAC_H

void ra2880start(END_DEVICE *ei_local);
void ra2880stop(END_DEVICE *ei_local);
void ra2880dmaRest(MAC_INFO *macinfo);

void ra2880MacAddressSet(MAC_INFO *macinfo, unsigned char p[6]);
void hard_init(struct net_device *dev);

void ra2880EnableInterrupt(void);

void dump_reg(void);
void dump_cp0(void);

int debug_proc_init(void);
void debug_proc_exit(void);

unsigned long readreg(unsigned long addr);
void writereg(unsigned long value, unsigned long addr);

int phyregread(unsigned long phy_register, unsigned long* value);
int phyregwrite(unsigned long phy_register, unsigned long value);
void rt2880_mdio_cfg(unsigned long address, unsigned int offset, unsigned int value);
void phySetup(void);
void rt2880_gmac_hard_reset(void);
#endif
