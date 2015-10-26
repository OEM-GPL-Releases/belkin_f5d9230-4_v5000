#ifndef RA_MAC
#define RA_MAC

#include <linux/config.h>
#include <linux/module.h>
#include <linux/version.h>

#include <linux/kernel.h>
#include <linux/sched.h>
#include <linux/types.h>
#include <linux/fcntl.h>
#include <linux/interrupt.h>
#include <linux/ptrace.h>
#include <linux/ioport.h>
#include <linux/in.h>
#include <linux/slab.h>
#include <linux/string.h>
#include <linux/signal.h>
#include <linux/irq.h>

#include <asm/system.h>
#include <asm/io.h>
#include <asm/bitops.h>
#include <asm/io.h>
#include <asm/dma.h>

#include <asm-mips/mipsregs.h>  /* for cp0 reg definition */
#include <asm/rt2880/surfboardint.h>	/* for cp0 reg access, added by bobtseng */

#include <linux/errno.h>
#include <linux/init.h>
#include <linux/mca.h>

#include <linux/netdevice.h>
#include <linux/etherdevice.h>
#include <linux/skbuff.h>

#include <linux/init.h>
#include <linux/module.h>
#include <linux/proc_fs.h>
#include <asm/uaccess.h>

#include "ra2882ethreg.h"
#include "raether.h"
#include "ra_mac.h"

unsigned long readreg(unsigned long addr)
{
        unsigned long value;
        value = (*(volatile unsigned long *)(addr + RA2882ETH_BASE));
        return (value);
}

void writereg(unsigned long value, unsigned long addr)
{
        *(volatile unsigned long *)(addr + RA2882ETH_BASE) = (value);
}

int phyregread(unsigned long phy_register, unsigned long* value)
{
	unsigned long mdio_reg = sysRegRead(MDIO_ACCESS);
	unsigned long timer = jiffies;

	for (;;)
	{
		if ( !(mdio_reg & RT2880_BIT(31) ) )
			break;
		else if ((jiffies - timer) > (5*HZ))
		{
			printk(KERN_ERR "rt2880 MDIO read Failed...\n");
			return -1;
		}
	}
	sysRegWrite(MDIO_ACCESS, 0);

	mdio_reg = (0x1f << 24) | (phy_register << 16);
	sysRegWrite(MDIO_ACCESS, mdio_reg);
	mdio_reg |= RT2880_BIT(31);
	sysRegWrite(MDIO_ACCESS, mdio_reg);

	timer = jiffies;

        for (;;)
        {
		mdio_reg = sysRegRead(MDIO_ACCESS);

                if ( !(mdio_reg & RT2880_BIT(31) )) {
			mdio_reg = sysRegRead(MDIO_ACCESS);
			*value = (unsigned long)(mdio_reg & 0x0000ffff);
                        break;
		} else if ((jiffies - timer) > (5*HZ))
                {
                        printk(KERN_ERR "rt2880 MDIO read Failed!\n");
                        return -2;
                }
        }

	return 1;
}

int phyregwrite(unsigned long phy_register, unsigned long value)
{
        unsigned long mdio_reg = sysRegRead(MDIO_ACCESS);
        unsigned long timer = jiffies;

        for (;;)
        {
                if ( !(mdio_reg & RT2880_BIT(31) ) )
                        break;
                else if ((jiffies - timer) > (5*HZ))
                {
                        printk(KERN_ERR "rt2880 MDIO Write Failed...\n");
                        return -1;
                }
        }

        sysRegWrite(MDIO_ACCESS, 0);
	mdio_reg = (0x1f << 24) | (phy_register << 16) | RT2880_BIT(30) | value;
        sysRegWrite(MDIO_ACCESS, mdio_reg);

	mdio_reg |= RT2880_BIT(31);
	sysRegWrite(MDIO_ACCESS, mdio_reg);

	timer = jiffies;

        mdio_reg = sysRegRead(MDIO_ACCESS);
        for (;;)
        {
                if ( !(mdio_reg & RT2880_BIT(31) )) {
                        break;
                } else if ((jiffies - timer) > (5*HZ))
                {
                        printk(KERN_ERR "rt2880 MDIO Write Failed!\n");
                        return -2;
                }
        	mdio_reg = sysRegRead(MDIO_ACCESS);
        }
	return 1;

}

void rt2880_mdio_cfg(unsigned long addr, unsigned int offset, unsigned int value)
{
	unsigned long phy_register;
	int ret;
	if (offset > 32) {
		printk("offset input failed");
		return;
	}

	ret = phyregread(addr, &phy_register);
	if (ret < 0) {
		printk("PHY config read failed!");
		return;
	} else
		printk("mdio.wb addr[0x%08x] value[0x%08x]\n", addr, phy_register);

	if(phy_register)
	{
		phy_register |= RT2880_BIT(offset);
	} else {
		phy_register &= ~(RT2880_BIT(offset));
	}

	ret = phyregwrite(addr, phy_register);

	if ( ret < 0)
		printk("PHY config write failed!");
	else
		printk("mdio.wb addr[0x%08x] value[0x%08x]\n", addr, phy_register);
}

void phySetup()
{
	int ret = 0;
	unsigned long phy_id0, phy_id1;
	unsigned long regValue = sysRegRead(MDIO_CFG);
#ifdef CONFIG_MAC_TO_MAC_MODE
	*(unsigned long *)MDIO_CFG = 0x1F01DC01;
	printk("MDIO_CFG = %x\n", *(unsigned long *)MDIO_CFG);
	return;
#endif
        regValue &= ~(0x1F << 24);
        regValue |= (0x1F << 24);
        sysRegWrite(MDIO_CFG, regValue);

	ret =  phyregread(2, &phy_id0);
	if (!ret) {
		printk("PhyID 0 read failed!\n");
		phy_id0 = 0;
	}
	
	ret = phyregread(3, &phy_id1);
	if (!ret) {
		printk("PhyID 1 read failed!\n");
		phy_id1 = 0;
	}

	if ( (phy_id0 == EV_MARVELL_PHY_ID0) && (phy_id1 == EV_MARVELL_PHY_ID1) ) {
		printk("MARVELL PHY Init ok...\n");
                rt2880_mdio_cfg(20, 7, 1);
                rt2880_mdio_cfg(0, 15, 1);
		regValue = sysRegRead(FE_DMA_GLO_CFG); 
		regValue |= 0x0000ff00;
		sysRegWrite(FE_DMA_GLO_CFG, regValue);
	} else {
		printk("IC-Plus PHY Init...");
		sysRegWrite(MDIO_CFG, INIT_VALUE_OF_ICPLUS_PHY_INIT_VALUE);
		printk("ok\n");
	}
}

void ra2880stop(END_DEVICE *ei_local)
{
	unsigned int regValue;
	printk("ra2880stop()...");

	regValue = sysRegRead(PDMA_GLO_CFG);
	regValue &= ~(RT2880_TX_WB_DDONE | RT2880_RX_DMA_EN | RT2880_TX_DMA_EN);
	sysRegWrite(PDMA_GLO_CFG, regValue);
    	
	printk("Done\n");	
	// printk("Done0x%x...\n", readreg(PDMA_GLO_CFG));
}

void rt2880_gmac_hard_reset(void)
{
	unsigned int regValue = sysRegRead(FE_RESET);

	regValue |= FE_RESET_BIT;
	sysRegWrite(FE_RESET, regValue);
}

void ra2880EnableInterrupt()
{
	unsigned int regValue = sysRegRead(FE_INT_ENABLE);
#ifdef DEBUG
	printk("FE_INT_ENABLE -- : 0x%08x\n", regValue);
#endif
//	regValue |= (RX_DONE_INT0 | TX_DONE_INT0);
		
	sysRegWrite(FE_INT_ENABLE, regValue);
}

void ra2880MacAddressSet(MAC_INFO *MACInfo, unsigned char p[6])
{
        unsigned long regValue;

	regValue = (p[0] << 8) + (p[1]);
        sysRegWrite(GDMA1_MAC_ADRH, regValue);

        regValue = (p[2] << 8) + (p[3]);
        regValue = (regValue << 16);
        regValue |= (p[4] << 8) + (p[5]);
        sysRegWrite(GDMA1_MAC_ADRL, regValue);

#ifdef DEBUG
    printk("  sb = %2.2X %2.2X %2.2X %2.2X %2.2X %2.2X\n",
            (unsigned char)(0xff&macAddr[0]), 
	    (unsigned char)(0xff&macAddr[1]),
	    (unsigned char)(0xff&macAddr[2]), 
	    (unsigned char)(0xff&macAddr[3]), 
	    (unsigned char)(0xff&macAddr[4]),
	    (unsigned char)(0xff&macAddr[5]) );
	printk("GDMA1_MAC_ADRH -- : 0x%08x\n", sysRegRead(GDMA1_MAC_ADRH));
	printk("GDMA1_MAC_ADRL -- : 0x%08x\n", sysRegRead(GDMA1_MAC_ADRL));	    
#endif	    
        return;
}

/**
 * hard_init - Called by raeth_probe to inititialize network device
 * @dev: device pointer
 *
 * ethdev_init initilize dev->priv and set to END_DEVICE structure
 *
 */
void hard_init(struct net_device *dev)
{
	END_DEVICE *ei_local = kmalloc(sizeof(END_DEVICE), GFP_KERNEL);
	MAC_INFO *macinfo = kmalloc(sizeof(MAC_INFO), GFP_KERNEL);

	macinfo->ivec = dev->irq;
	
#ifdef DEBUG
	printk("debug: dev_raether irq is %d(%s)\n", dev->irq, dev->name);
#endif	
	ei_local->MACInfo = macinfo;
	dev->priv = (void *)ei_local;

	((END_DEVICE *)(dev->priv))->devFlags = 0;

	if ( dev->dev_addr != NULL)
		ra2880MacAddressSet(macinfo, (void *)(dev->dev_addr));
	else
		printk("HWnetInit() failed!!!\n");

	return;
}

void dump_reg()
{
	printk("\n\nFE_INT_ENABLE  : 0x%08x\n", sysRegRead(FE_INT_ENABLE));
	printk("DLY_INT_CFG	: 0x%08x\n", sysRegRead(DLY_INT_CFG));
	printk("TX_BASE_PTR0   : 0x%08x\n", sysRegRead(TX_BASE_PTR0));	
	printk("TX_CTX_IDX0    : 0x%08x\n", sysRegRead(TX_CTX_IDX0));	
	printk("TX_DTX_IDX0    : 0x%08x\n", sysRegRead(TX_DTX_IDX0));


	printk("RX_BASE_PTR0   : 0x%08x\n", sysRegRead(RX_BASE_PTR0));	
	printk("RX_MAX_CNT0    : 0x%08x\n", sysRegRead(RX_MAX_CNT0));	
	printk("RX_CALC_IDX0   : 0x%08x\n", sysRegRead(RX_CALC_IDX0));
	printk("RX_DRX_IDX0    : 0x%08x\n", sysRegRead(RX_DRX_IDX0));

	printk("GDMA1_FWD_CFG  : 0x%08x\n", sysRegRead(GDMA1_FWD_CFG));	
	printk("PDMA_GLO_CFG   : 0x%08x\n", sysRegRead(PDMA_GLO_CFG));
	printk("PDMA_RST_CFG   : 0x%08x\n", sysRegRead(PDMA_RST_CFG));	
	printk("FE_RST_GL      : 0x%08x\n\n", sysRegRead(FE_RST_GL));

	printk("MDIO_CFG(0x%08x)     : 0x%08x\n", MDIO_CFG, sysRegRead(MDIO_CFG));
	printk("CDMA_OQ_STA(0x%08x)     : 0x%08x\n", CDMA_OQ_STA, sysRegRead(CDMA_OQ_STA));
	printk("GDMA1_OQ_STA(0x%08x)     : 0x%08x\n", GDMA1_OQ_STA, sysRegRead(GDMA1_OQ_STA));
	printk("PPE_OQ_STA(0x%08x)     : 0x%08x\n", PPE_OQ_STA, sysRegRead(PPE_OQ_STA));
	printk("PSE_IQ_STA(0x%08x)     : 0x%08x\n", PSE_IQ_STA, sysRegRead(PSE_IQ_STA));
	
	printk("\n-----\nRX Counters:\n");
	printk("GDMA_RX_GBCNT0(0x%08x)     : 0x%08x\n", GDMA_RX_GBCNT0, sysRegRead(GDMA_RX_GBCNT0));
	printk("GDMA_RX_GPCNT0(0x%08x)     : 0x%08x\n", GDMA_RX_GPCNT0, sysRegRead(GDMA_RX_GPCNT0));
	printk("GDMA_RX_OERCNT0(0x%08x)    : 0x%08x\n", GDMA_RX_OERCNT0, sysRegRead(GDMA_RX_OERCNT0));
	printk("GDMA_RX_FERCNT0(0x%08x)     : 0x%08x\n", GDMA_RX_FERCNT0, sysRegRead(GDMA_RX_FERCNT0));
	printk("GDMA_RX_SERCNT0(0x%08x)     : 0x%08x\n", GDMA_RX_SERCNT0, sysRegRead(GDMA_RX_SERCNT0));
	printk("GDMA_RX_LERCNT0(0x%08x)     : 0x%08x\n", GDMA_RX_LERCNT0, sysRegRead(GDMA_RX_LERCNT0));
	printk("GDMA_RX_CERCNT0(0x%08x)     : 0x%08x\n\n", GDMA_RX_CERCNT0, sysRegRead(GDMA_RX_CERCNT0));	
}

void dump_cp0(void)
{
	printk("CP0 Register dump --\n");
	printk("CP0_INDEX\t: 0x%08x\n", read_32bit_cp0_register(CP0_INDEX));
	printk("CP0_RANDOM\t: 0x%08x\n", read_32bit_cp0_register(CP0_RANDOM));
	printk("CP0_ENTRYLO0\t: 0x%08x\n", read_32bit_cp0_register(CP0_ENTRYLO0));
	printk("CP0_ENTRYLO1\t: 0x%08x\n", read_32bit_cp0_register(CP0_ENTRYLO1));
	printk("CP0_CONF\t: 0x%08x\n", read_32bit_cp0_register(CP0_CONF));
	printk("CP0_CONTEXT\t: 0x%08x\n", read_32bit_cp0_register(CP0_CONTEXT));
	printk("CP0_PAGEMASK\t: 0x%08x\n", read_32bit_cp0_register(CP0_PAGEMASK));
	printk("CP0_WIRED\t: 0x%08x\n", read_32bit_cp0_register(CP0_WIRED));
	printk("CP0_INFO\t: 0x%08x\n", read_32bit_cp0_register(CP0_INFO));
	printk("CP0_BADVADDR\t: 0x%08x\n", read_32bit_cp0_register(CP0_BADVADDR));
	printk("CP0_COUNT\t: 0x%08x\n", read_32bit_cp0_register(CP0_COUNT));
	printk("CP0_ENTRYHI\t: 0x%08x\n", read_32bit_cp0_register(CP0_ENTRYHI));
	printk("CP0_COMPARE\t: 0x%08x\n", read_32bit_cp0_register(CP0_COMPARE));
	printk("CP0_STATUS\t: 0x%08x\n", read_32bit_cp0_register(CP0_STATUS));
	printk("CP0_CAUSE\t: 0x%08x\n", read_32bit_cp0_register(CP0_CAUSE));
	printk("CP0_EPC\t: 0x%08x\n", read_32bit_cp0_register(CP0_EPC));
	printk("CP0_PRID\t: 0x%08x\n", read_32bit_cp0_register(CP0_PRID));
	printk("CP0_CONFIG\t: 0x%08x\n", read_32bit_cp0_register(CP0_CONFIG));
	printk("CP0_LLADDR\t: 0x%08x\n", read_32bit_cp0_register(CP0_LLADDR));
	printk("CP0_WATCHLO\t: 0x%08x\n", read_32bit_cp0_register(CP0_WATCHLO));
	printk("CP0_WATCHHI\t: 0x%08x\n", read_32bit_cp0_register(CP0_WATCHHI));
	printk("CP0_XCONTEXT\t: 0x%08x\n", read_32bit_cp0_register(CP0_XCONTEXT));
	printk("CP0_FRAMEMASK\t: 0x%08x\n", read_32bit_cp0_register(CP0_FRAMEMASK));
	printk("CP0_DIAGNOSTIC\t: 0x%08x\n", read_32bit_cp0_register(CP0_DIAGNOSTIC));
	printk("CP0_DEBUG\t: 0x%08x\n", read_32bit_cp0_register(CP0_DEBUG));
	printk("CP0_DEPC\t: 0x%08x\n", read_32bit_cp0_register(CP0_DEPC));
	printk("CP0_PERFORMANCE\t: 0x%08x\n", read_32bit_cp0_register(CP0_PERFORMANCE));
	printk("CP0_ECC\t: 0x%08x\n", read_32bit_cp0_register(CP0_ECC));
	printk("CP0_CACHEERR\t: 0x%08x\n", read_32bit_cp0_register(CP0_CACHEERR));
	printk("CP0_TAGLO\t: 0x%08x\n", read_32bit_cp0_register(CP0_TAGLO));
	printk("CP0_TAGHI\t: 0x%08x\n", read_32bit_cp0_register(CP0_TAGHI));
	printk("CP0_ERROREPC\t: 0x%08x\n", read_32bit_cp0_register(CP0_ERROREPC));
	printk("CP0_DESAVE\t: 0x%08x\n\n", read_32bit_cp0_register(CP0_DESAVE));
}

static struct proc_dir_entry *procRegDir, *procGmac, *procSysCP0;

int RegReadMain(void)
{
	dump_reg();
	return 0;
}

int CP0RegRead(void)
{
	dump_cp0();
	return 0;
}

int debug_proc_init(void)
{
    procRegDir = proc_mkdir(PROCREG_DIR, NULL);
	
    if ((procGmac = create_proc_entry(PROCREG_GMAC, 0, procRegDir)))
	 procGmac->read_proc = (read_proc_t*)&RegReadMain;

    if ((procSysCP0 = create_proc_entry(PROCREG_CP0, 0, procRegDir)))
	 procSysCP0->read_proc = (read_proc_t*)&CP0RegRead;
     
    printk(KERN_ALERT "PROC INIT OK!\n");
    return 0;
}

void debug_proc_exit(void)
{

    if (procSysCP0)
    	remove_proc_entry(PROCREG_CP0, procRegDir);

    if (procGmac)
    	remove_proc_entry(PROCREG_GMAC, procRegDir);
    
    if (procRegDir)
	remove_proc_entry(PROCREG_DIR, 0);
	

    printk(KERN_ALERT "proc exit\n");
}

#endif
