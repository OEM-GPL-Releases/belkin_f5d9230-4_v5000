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
#include <linux/pci.h>


#include <asm/system.h>
#include <asm/io.h>
#include <asm/bitops.h>
#include <asm/io.h>
#include <asm/dma.h>
#include <asm/atomic.h>
#include <asm/rt2880/surfboardint.h>

#include <linux/errno.h>
#include <linux/init.h>
#include <linux/mca.h>

#include <linux/netdevice.h>
#include <linux/etherdevice.h>
#include <linux/skbuff.h>
#include <linux/ip.h>
#include <linux/tcp.h>
#include <linux/if_vlan.h>
#include <linux/if_ether.h>

#include "ra2882ethreg.h"
#include "raether.h"
#include "ra_mac.h"

#include "ra_netlink.h"

#if defined (CONFIG_RA_HW_NAT) || defined (CONFIG_RA_HW_NAT_MODULE)
#include "../../../net/nat/hw_nat/ra_nat.h"
#endif

#define EV_BOARD

#ifdef CONFIG_RAETH_NAPI
static int raeth_clean(struct net_device *dev, int *budget);
static int rt2880_eth_recv(struct net_device* dev, int *work_done, int work_to_do);
#else
static int rt2880_eth_recv(struct net_device* dev);
#endif

#if !defined(CONFIG_RA_NAT_NONE) 
/* bruce+
 */
extern int (*ra_sw_nat_hook_rx)(struct sk_buff *skb);
extern int (*ra_sw_nat_hook_tx)(struct sk_buff *skb);
#endif


/* gmac driver feature set config */
#define	HEADER_ALIGNED	1
#ifdef CONFIG_RAETH_NAPI
#undef DELAY_INT
//#define DELAY_INT	1
#else
#define DELAY_INT	1
#endif
//#define DSP_EN
#undef	DSP_EN
/* end of config */

#define	MAX_RX_LENGTH	1600
#define RX_DESC_SIZE	(sizeof(struct PDMA_rxdesc))

static struct sk_buff	*netrx_skbuf[NUM_RX_DESC];

static struct net_device dev_raether = { \
	init: rather_probe, \
	base_addr: RA2882_ENET0,\
	irq: RT2880_IRQ_ENET0, \
	name: "eth2", \
	addr_len: 6, \
	dev_addr: {0x00, 0xAA, 0xBB, 0xCC, 0xDD, 0x90}
};

static int rx_dma_owner_idx0;                             /* Point to the next RXD DMA wants to use in RXD Ring#0.  */
static int rx_wants_alloc_idx0;                           /* Point to the next RXD CPU wants to allocate to RXD Ring #0. */
static int tx_cpu_owner_idx0;                             /* Point to the next TXD in TXD_Ring0 CPU wants to use */
static struct PDMA_rxdesc *rx_ring;
static struct PDMA_txdesc *tx_ring;
static unsigned int phy_tx_ring,phy_rx_ring;

//bruce debug
#if 1
void skb_dump(struct sk_buff* sk) {
        unsigned int i;

        printk("skb_dump: from %s with len %d (%d) headroom=%d tailroom=%d\n",
                sk->dev?sk->dev->name:"ip stack",sk->len,sk->truesize,
                skb_headroom(sk),skb_tailroom(sk));

        for(i=(unsigned int)sk->head;i<=(unsigned int)sk->tail;i++) {
                if((i % 20) == 0)
                        printk("\n");
                if(i==(unsigned int)sk->data) printk("{");
                if(i==(unsigned int)sk->h.raw) printk("#");
                if(i==(unsigned int)sk->nh.raw) printk("|");
                if(i==(unsigned int)sk->mac.raw) printk("*");
                printk("%02x",*((unsigned char*)i));
                if(i==(unsigned int)sk->tail) printk("}");
        }
        printk("\n");
}
#endif

void START_RT2880_ETH()
{
	writereg(INIT_VALUE_OF_RT2880_PDMA_GLO_CFG, RT2880_PDMA_GLO_CFG);
}

static int rt2880_eth_setup(struct net_device *dev)
{

	int	i;
	unsigned int	regVal;
	
	while(1)
	{
		regVal = readreg(RT2880_PDMA_GLO_CFG);	
		if((regVal & RT2880_RX_DMA_BUSY))
		{
			printk("\n  RT2880_RX_DMA_BUSY !!! ");
			continue;
		}
		if((regVal & RT2880_TX_DMA_BUSY))
		{
			printk("\n  RT2880_TX_DMA_BUSY !!! ");
			continue;
		}
		break;
	}

	phySetup();
	regVal = readreg(RT2880_GDMA1_FWD_CFG);

#if defined (CONFIG_RA_HW_NAT) || defined (CONFIG_RA_HW_NAT_MODULE) 
	regVal = 0x716666;
#else
	//Uni-cast frames forward to CPU 
	regVal = regVal & RT2880_GDM1_UFRC_P_CPU;

	//Broad-cast MAC address frames forward to CPU
	regVal = regVal & RT2880_GDM1_BFRC_P_CPU;

	//Multi-cast MAC address frames forward to CPU
	regVal = regVal & RT2880_GDM1_MFRC_P_CPU;

	//Other MAC address frames forward to CPU
	regVal = regVal & RT2880_GDM1_OFRC_P_CPU;
#endif

#if 1
	if ( ((END_DEVICE *)(dev->priv))->devFlags == 0)
		writereg(cpu_to_le32((u32) regVal), RT2880_GDMA1_FWD_CFG);
	else
		writereg(cpu_to_le32((u32) ((END_DEVICE *)(dev->priv))->devFlags), RT2880_GDMA1_FWD_CFG);
#endif
	// writereg(cpu_to_le32((u32) regVal), RT2880_GDMA1_FWD_CFG);
	writereg(INIT_VALUE_OF_RT2880_PSE_FQFC_CFG, RT2880_PSE_FQFC_CFG);


#ifdef DSP_EN 
	phy_tx_ring 	= (volatile int*)TX_RING_BASE;
	tx_ring 	= (volatile struct PDMA_rxdesc *)TX_RING_BASE;
	phy_rx_ring = rx_ring = (volatile int*)RX_RING_BASE;
	printk("DSP_EN ON version driver\n");
#else
    	tx_ring = pci_alloc_consistent(NULL, NUM_TX_DESC * sizeof(struct PDMA_txdesc), &phy_tx_ring);
	rx_ring = pci_alloc_consistent(NULL, NUM_RX_DESC * sizeof(struct PDMA_rxdesc), &phy_rx_ring);
	printk("DSP_EN OFF version driver\n");
#endif
 	printk("\nphy_tx_ring = %08x, tx_ring = %08x, size: %d bytes\n",phy_tx_ring,tx_ring, sizeof(struct PDMA_txdesc));
 	printk("\nphy_rx_ring = %08x, rx_ring = %08x, size: %d bytes\n",phy_rx_ring,rx_ring, sizeof(struct PDMA_rxdesc));

	for (i = 0; i < NUM_RX_DESC; i++) {
		// dma_cache_inv((unsigned long*)&rx_ring[i], sizeof(struct PDMA_rxdesc));
		memset(&rx_ring[i],0,16);
	    	rx_ring[i].rxd_info2.DDONE_bit = 0;
		rx_ring[i].rxd_info2.LS0 = 1;
#ifdef 	HEADER_ALIGNED	
		rx_ring[i].rxd_info1.PDP0 = pci_map_single(dev, skb_put(netrx_skbuf[i], 2), MAX_RX_LENGTH, PCI_DMA_FROMDEVICE);
#else
		rx_ring[i].rxd_info1.PDP0 = pci_map_single(dev, netrx_skbuf[i]->data, MAX_RX_LENGTH, PCI_DMA_FROMDEVICE);
#endif			
	}
#ifndef DSP_VIA_NONCACHEABLE
	dma_cache_wback_inv(rx_ring, NUM_RX_DESC*(sizeof(struct PDMA_rxdesc)));
#endif

	for (i=0; i < NUM_TX_DESC; i++) {
#ifndef DSP_VIA_NONCACHEABLE
		dma_cache_inv((unsigned long*)&tx_ring[i], sizeof(struct PDMA_txdesc));	
#endif
		memset(&tx_ring[i],0,16);
		tx_ring[i].txd_info2.LS0_bit = 1;
		tx_ring[i].txd_info2.DDONE_bit = 1;
		/*
		 PN:
			0:CPU
			1:GE
			6:PPE
			7:Discard
		*/
		tx_ring[i].txd_info4.PN = 1;
		tx_ring[i].txd_info4.QN = 0;
	}
#ifndef DSP_VIA_NONCACHEABLE
	dma_cache_wback_inv(tx_ring, NUM_TX_DESC*(sizeof(struct PDMA_txdesc)));
#endif

	rx_dma_owner_idx0 = 0;
	rx_wants_alloc_idx0 = (NUM_RX_DESC - 1);
	tx_cpu_owner_idx0 = 0;
	regVal=readreg(RT2880_PDMA_GLO_CFG);
	regVal &= 0x000000FF;
   	writereg(regVal, RT2880_PDMA_GLO_CFG);
	regVal=readreg(RT2880_PDMA_GLO_CFG);

	/* Tell the adapter where the TX/RX rings are located. */
	writereg(phys_to_bus((u32) phy_rx_ring), RT2880_RX_BASE_PTR0);
	writereg(phys_to_bus((u32) phy_tx_ring), RT2880_TX_BASE_PTR0);
	writereg(cpu_to_le32((u32) NUM_RX_DESC), RT2880_RX_MAX_CNT0);
	writereg(cpu_to_le32((u32) NUM_TX_DESC), RT2880_TX_MAX_CNT0);
	writereg(cpu_to_le32((u32) tx_cpu_owner_idx0), RT2880_TX_CTX_IDX0);
	writereg(cpu_to_le32((u32) tx_cpu_owner_idx0), RT2880_TX_DTX_IDX0);
	writereg(cpu_to_le32((u32) (NUM_RX_DESC - 1)), RT2880_RX_CALC_IDX0);
	writereg(cpu_to_le32((u32) 0), RT2880_RX_DRX_IDX0);

	START_RT2880_ETH();

	return 1;
}

static inline int rt2880_eth_send(struct net_device* dev, struct sk_buff *skb)
{
	int		status = -1;
	int		temp; 
	void		*packet=skb->data;
	int		length=skb->len;
	END_DEVICE* ei_local = (END_DEVICE*)dev->priv;
	unsigned long flags;

	// printk("0xa0300010 - 0x%08x\n", sysRegRead(0xa0300010));
	if (length <= 0) {
		printk(KERN_ERR "bad packet size: %d\n",length);
		ei_local->stat.tx_errors++;
		return (status);
	}

	while(tx_ring[tx_cpu_owner_idx0].txd_info2.DDONE_bit == 0)
	{
		printk(KERN_ERR "%s: TX DMA is Busy !! TX desc is Empty!\n", dev->name);
		ei_local->stat.tx_errors++;
	}


	temp = readreg(RT2880_TX_DTX_IDX0);	
	if(temp == ((tx_cpu_owner_idx0+1) % NUM_TX_DESC))
	{
		//printk(KERN_ERR "%s: TXD full!\n", dev->name);	
		ei_local->tx_full = 1;
		netif_stop_queue(dev);
		return -1;
	}

	//ei_local->tx_full = 0;
	tx_ring[tx_cpu_owner_idx0].txd_info1.SDP0 = virt_to_phys((u32) packet);
	tx_ring[tx_cpu_owner_idx0].txd_info2.SDL0 = length;
	
	tx_ring[tx_cpu_owner_idx0].txd_info2.DDONE_bit = 0;

#if defined (CONFIG_RA_HW_NAT) || defined (CONFIG_RA_HW_NAT_MODULE) 
	if(FOE_MAGIC_TAG(skb) == FOE_MAGIC_PPE) {
	    tx_ring[tx_cpu_owner_idx0].txd_info4.PN = 6; /* PPE */
	} else {
	    tx_ring[tx_cpu_owner_idx0].txd_info4.PN = 1; /* GE1 */
	}
#endif	
	status = length;

    	tx_cpu_owner_idx0 = (tx_cpu_owner_idx0+1) % NUM_TX_DESC;
	writereg(cpu_to_le32((u32) tx_cpu_owner_idx0), RT2880_TX_CTX_IDX0);
    
	ei_local->stat.tx_packets++;
	ei_local->stat.tx_bytes += length;
#ifdef CONFIG_RAETH_NAPI
	if ( ei_local->tx_full == 1) {
		ei_local->tx_full = 0;
		netif_wake_queue(dev);
	}
#endif

	return status;
}

#ifdef CONFIG_RAETH_NAPI
static int rt2880_eth_recv(struct net_device* dev, int *work_done, int work_to_do)
#else
static int rt2880_eth_recv(struct net_device* dev)
#endif
{
	struct sk_buff *skb, *rx_skb;
	unsigned int	length = 0;
	END_DEVICE* 	ei_local = (END_DEVICE*)dev->priv;

	for ( ; ; ) { 

#ifdef CONFIG_RAETH_NAPI
                if(*work_done >= work_to_do)
                        break;
                (*work_done)++;
#endif
		/* Update to Next packet point that was received.
		 */ 
		rx_dma_owner_idx0 = (sysRegRead(RX_CALC_IDX0) + 1) % NUM_RX_DESC;
	
		if (rx_ring[rx_dma_owner_idx0].rxd_info2.DDONE_bit == 0) 
			break;


		length = rx_ring[rx_dma_owner_idx0].rxd_info2.PLEN0;

/* skb processing */
		rx_skb = netrx_skbuf[rx_dma_owner_idx0];
		rx_skb->len 	= length;
		rx_skb->data	= netrx_skbuf[rx_dma_owner_idx0]->data;
		//rx_skb->tail 	= rx_skb->data + length + 2;
		rx_skb->tail 	= rx_skb->data + length;
#ifdef CONFIG_PSEUDO_SUPPORT 
    /* process vlan tag */
{
    unsigned int vlan_tag =0;
    struct vlan_hdr *vh = NULL;

    rx_skb->protocol  = eth_type_trans(rx_skb,dev);
    if (ntohs(rx_skb->protocol) == ETH_P_8021Q) {
	skb_dump(rx_skb);
        vh = (struct vlan_hdr *) rx_skb->data;
        vlan_tag = ntohs(vh->h_vlan_TCI & 0x0fff);
	if(vlan_tag ==1){
		rx_skb->dev = dev;
	}
	else if(vlan_tag ==2){
		rx_skb->dev = (struct net_device *)ei_local->PseudoDev;
	}
	else {
		printk("wrong vlan_tag %d\n", vlan_tag);
	}
	printk("rx: vlan_tag = %d, dev = %x\n", vlan_tag, rx_skb->dev);
	rx_skb->data = (unsigned char *)rx_skb->data + 4;
	rx_skb->len = rx_skb->len -4;
        rx_skb->protocol = *(unsigned short *)(rx_skb->data -2);
	skb_dump(rx_skb);
    } else {
	printk("error, not receive vlan packet\n");
	rx_skb->dev 	  = dev;
    }
}
#else
		rx_skb->dev 	  = dev;
		rx_skb->protocol  = eth_type_trans(rx_skb,dev);
#endif
		//printk("4. rx_skb->protocol = %x\n", ntohs(rx_skb->protocol));
		rx_skb->ip_summed = CHECKSUM_UNNECESSARY; /* Don't check it */
#ifdef CONFIG_RT2880_BRIDGING_ONLY
		rx_skb->cb[22]=0xa8;
#endif

#if defined (CONFIG_RA_HW_NAT)  || defined (CONFIG_RA_HW_NAT_MODULE)
	FOE_MAGIC_TAG(rx_skb)= FOE_MAGIC_GE;
	memcpy(rx_skb->head+2,&rx_ring[rx_dma_owner_idx0].rxd_info4,
		sizeof(PDMA_RXD_INFO4_T));
#endif

#if !defined(CONFIG_RA_NAT_NONE) 
/* bruce+
 * ra_sw_nat_hook_rx return 1 --> continue
 * ra_sw_nat_hook_rx return 0 --> FWD & without netif_rx
 */
	 unsigned long flags;
         if(ra_sw_nat_hook_rx!= NULL)
         {
	   spin_lock_irqsave(&ei_local->page_lock, flags);
           if(ra_sw_nat_hook_rx(rx_skb)) {
#ifdef CONFIG_RAETH_NAPI
                netif_receive_skb(rx_skb);
#else
                netif_rx(rx_skb);
#endif
	   }
	   spin_unlock_irqrestore(&ei_local->page_lock, flags);
         } else {
#ifdef CONFIG_RAETH_NAPI
                netif_receive_skb(rx_skb);
#else
                netif_rx(rx_skb);
#endif
	 }
#else

#ifdef CONFIG_RAETH_NAPI
                netif_receive_skb(rx_skb);
#else
                netif_rx(rx_skb);
#endif


#endif 
		skb = __dev_alloc_skb(MAX_RX_LENGTH + 2, GFP_DMA | GFP_ATOMIC);
#ifdef HEADER_ALIGNED		
		skb_reserve(skb, 2);
#endif	
		if (skb == NULL)
		{
			printk(KERN_ERR "skb not available...\n");
			ei_local->stat.rx_dropped++;
			return;
		}
	
		rx_ring[rx_dma_owner_idx0].rxd_info2.DDONE_bit = 0;	
		netrx_skbuf[rx_dma_owner_idx0] = skb;
		rx_ring[rx_dma_owner_idx0].rxd_info1.PDP0 = pci_map_single(dev, skb->data, MAX_RX_LENGTH, PCI_DMA_FROMDEVICE);

#ifndef DSP_EN
#ifndef DSP_VIA_NONCACHEABLE
		dma_cache_wback_inv((unsigned long*)&rx_ring[rx_dma_owner_idx0], sizeof(struct PDMA_rxdesc));	
#endif
#endif

		/*  Move point to next RXD which wants to alloc*/
		writereg(rx_dma_owner_idx0, RT2880_RX_CALC_IDX0);	
		ei_local->stat.rx_packets++;
		ei_local->stat.rx_bytes += length;	
	}	/* for */

	//printk("%s(): %d\n",__FUNCTION__, __LINE__);
	return length;
}



///////////////////////////////////////////////////////////////////
/////
///// ra_get_stats - gather packet information for management plane
/////
///// Pass net_device_stats to the upper layer.
///// 
/////
///// RETURNS: pointer to net_device_stats
///////////////////////////////////////////////////////////////////

struct net_device_stats *ra_get_stats(struct net_device *dev)
{
	
	END_DEVICE *ei_local = (END_DEVICE *) dev->priv;
    
	return &ei_local->stat;
}

///////////////////////////////////////////////////////////////////
/////
///// ra2880Recv - process the next incoming packet
/////
///// Handle one incoming packet.  The packet is checked for errors and sent
///// to the upper layer.
/////
///// RETURNS: OK on success or ERROR.
///////////////////////////////////////////////////////////////////

void ei_receive(struct net_device *dev)  // device structure 
{
	unsigned long flags;
	END_DEVICE *ei_local = (END_DEVICE *)dev->priv;
	spin_lock_irqsave(&(ei_local->page_lock), flags);
#ifndef CONFIG_RAETH_NAPI
	rt2880_eth_recv(dev);
#endif
	spin_unlock_irqrestore(&(ei_local->page_lock), flags);
}

#ifdef CONFIG_RAETH_NAPI
static int
raeth_clean(struct net_device *netdev, int *budget)
{
	END_DEVICE *ei_local =(END_DEVICE *)netdev->priv;
	unsigned int reg_int_val;
        int work_to_do = min(*budget, netdev->quota);
        //int tx_cleaned;
        int work_done = 0;
	int i;
	unsigned long flags;
	//reg_int_val = readreg(RT2880_FE_INT_STATUS);

        //if (reg_int_val & RT2880_TX_DONE_INT0)
	spin_lock_irqsave(&ei_local->page_lock, flags);
        	ei_xmit_housekeeping(netdev);

	//if((reg_int_val & RT2880_RX_DONE_INT0))
		rt2880_eth_recv(netdev, &work_done, work_to_do);
	spin_unlock_irqrestore(&ei_local->page_lock, flags);
        //tx_cleaned = e1000_clean_tx_irq(adapter);
        //e1000_clean_rx_irq(adapter, &work_done, work_to_do);
#if 1 /* this could control when to re-enable interrupt, 0-> mean never enable interrupt*/
        *budget -= work_done;
        netdev->quota -= work_done;
        /* if no Tx and not enough Rx work done, exit the polling mode */
        if(( (work_done < work_to_do)) || !netif_running(netdev)) {
                netif_rx_complete(netdev);
		atomic_dec_and_test(&ei_local->irq_sem);
		//for(i=0;i<10000;i++);

		//printk("O");
		writereg(0xFFFFFFFF, RT2880_FE_INT_STATUS);
#ifdef DELAY_INT
		writereg(0x00000003,RT2880_FE_INT_ENABLE);
#else
		writereg(0xffffffff,RT2880_FE_INT_ENABLE);
#endif
                return 0;
        }
#endif

        return 1;
}

#endif


/**
 * ei_interrupt - handle controler interrupt
 *
 * This routine is called at interrupt level in response to an interrupt from
 * the controller.
 *
 * RETURNS: N/A.
 */
void ei_interrupt(int irq, void *dev_id, struct pt_regs * regs)
{
	struct net_device *dev = (struct net_device *) dev_id;
	END_DEVICE *ei_local = (END_DEVICE *)dev->priv;
	unsigned int reg_int_val;
	unsigned int recv = 0;
	unsigned int transmit = 0;

	unsigned long flags; 
	//int budget = 64;

	//printk("I");

	if (dev == NULL) 
	{
		printk (KERN_ERR "net_interrupt(): irq %x for unknown device.\n", RT2880_IRQ_ENET0);
		return;
	}

#ifdef CONFIG_RAETH_NAPI
        if(netif_rx_schedule_prep(dev)) {
                atomic_inc(&ei_local->irq_sem);
		writereg(0,RT2880_FE_INT_ENABLE);
                __netif_rx_schedule(dev);
        }
#else
	spin_lock_irqsave(&(ei_local->page_lock), flags);
	reg_int_val = readreg(RT2880_FE_INT_STATUS);

#ifdef DELAY_INT
	if((reg_int_val & RT2880_RX_DLY_INT))
		recv = 1;

	if (reg_int_val & RT2880_TX_DLY_INT)
		transmit = 1;
#else
	if((reg_int_val & RT2880_RX_DONE_INT0))
		recv = 1;

	if (reg_int_val & RT2880_TX_DONE_INT0)
		transmit = 1;
#endif

	writereg(0xFFFFFFFF, RT2880_FE_INT_STATUS);	

	spin_unlock_irqrestore(&(ei_local->page_lock), flags);
	
	if( recv == 1)
	{
		tasklet_schedule(&ei_local->rx_tasklet);
		recv = 0;
	}	



	if ( transmit == 1)  {
		if(ei_local->tx_full)
		{
			if(readreg(RT2880_TX_DTX_IDX0) != ( (tx_cpu_owner_idx0+1) % NUM_TX_DESC) ){
				ei_local->tx_full = 0;
				netif_wake_queue(dev);
			}
		}
		tasklet_schedule(&ei_local->tx_tasklet);
		transmit = 0;
	}
#endif
}

static int ei_start_xmit(struct sk_buff* skb, struct net_device *dev)
{
	END_DEVICE *ei_local = (END_DEVICE*)(dev->priv);
	unsigned long flags;
#ifdef CONFIG_PSEUDO_SUPPORT
	unsigned char pseudo_tmp[12];
	struct sk_buff *skb2;

	//printk("head=%x, data=%x, tail=%x, end=%x, headroom= %x\n",skb->head, skb->data, skb->tail, skb->end,  skb_headroom(skb));
	if (skb_headroom(skb) < 4) {
	   //printk("skb_headroom = %d\n", skb_headroom(skb));
           skb2 = skb_realloc_headroom(skb, sizeof(ETH_HLEN));
           kfree_skb(skb);
           if (skb2 == NULL) {
		ei_local->stat.tx_dropped++;
           	return 0;
           }
           skb = skb2;
	}
	memcpy(pseudo_tmp, skb->data, 12);
	if(skb->cb[40] == 0x5a){
	//if(ei_local->isPseudo == 1){
	  *(unsigned short *) ((skb)->data +10) = htons(2);
	  //printk("tx: wan packet\n");
	}else{
	  *(unsigned short *) ((skb)->data +10) = htons(1);
	  //printk("tx: lan packet\n");
	}
	*(unsigned short *) ((skb)->data +8 ) = htons(ETH_P_8021Q);
	skb_push(skb, 4);
	skb->cb[40] = 0;
	memcpy(skb->data, pseudo_tmp, 12);
	//printk("head=%x, data=%x, tail=%x, end=%x, headroom= %x\n",skb->head, skb->data, skb->tail, skb->end,  skb_headroom(skb));
#endif

#if !defined(CONFIG_RA_NAT_NONE)
/* bruce+
 */
         if(ra_sw_nat_hook_tx!= NULL)
         {
	   spin_lock_irqsave(&ei_local->page_lock, flags);
           ra_sw_nat_hook_tx(skb);
	   spin_unlock_irqrestore(&ei_local->page_lock, flags);
         }
#endif

	dev->trans_start = jiffies;	/* save the timestamp */
	spin_lock_irqsave(&ei_local->page_lock, flags);
#if defined( CONFIG_RT2880_ENHANCE) || defined (CONFIG_RT2880_BRIDGING_ONLY)
	if ((unsigned char)skb->cb[22] == 0xa9)
		dma_cache_wback_inv((unsigned long)skb->data, 60);
	else if ((unsigned char)skb->cb[22] == 0xa8) {
		dma_cache_wback_inv((unsigned long)skb->data, 16);
	}
	else
		dma_cache_wback_inv((unsigned long)skb->data, skb->len);
#else
	dma_cache_wback_inv((unsigned long)skb->data, skb->len);
#endif
	rt2880_eth_send(dev, skb);
	spin_unlock_irqrestore(&ei_local->page_lock, flags);
	
	//netif_wake_queue(dev);
	skb_queue_tail(&ei_local->txq, skb);
	
	return 0;	
}

void ra2880_setup_dev_fptable(struct net_device *dev)
{
#ifdef DEBUG
	printk(__FUNCTION__ "is called!\n");
#endif
	dev->set_mac_address	= ei_set_mac_addr;
	dev->open		= ei_open;
	dev->stop		= ei_close;
	dev->hard_start_xmit	= ei_start_xmit;
	dev->tx_timeout		= ei_tx_timeout;
	dev->get_stats		= ra_get_stats;
#ifdef CONFIG_RAETH_NAPI
        dev->poll = &raeth_clean;
#ifdef CONFIG_RAETH_ROUTER
        dev->weight = 32;
#else
        dev->weight = 32;
#endif
#endif
}


#define TX_TIMEOUT (20*HZ/100)
void ei_tx_timeout(struct net_device *dev)
{
#ifdef DEBUG
	printk(__FUNCTION__ " is called\n");
	printk("wake up queue\n");
#endif

	netif_wake_queue(dev);
	return;
}

void setup_statistics(END_DEVICE* ei_local)
{
	ei_local->stat.tx_packets	= 0;
	ei_local->stat.tx_bytes 	= 0;
	ei_local->stat.tx_dropped 	= 0;
	ei_local->stat.tx_errors	= 0;
	ei_local->stat.tx_aborted_errors= 0;
	ei_local->stat.tx_carrier_errors= 0;
	ei_local->stat.tx_fifo_errors	= 0;
	ei_local->stat.tx_heartbeat_errors = 0;
	ei_local->stat.tx_window_errors	= 0;
	
	ei_local->stat.rx_packets	= 0;
	ei_local->stat.rx_bytes 	= 0;
	ei_local->stat.rx_dropped 	= 0;	
	ei_local->stat.rx_errors	= 0;
	ei_local->stat.rx_length_errors = 0;
	ei_local->stat.rx_over_errors	= 0;
	ei_local->stat.rx_crc_errors	= 0;
	ei_local->stat.rx_frame_errors	= 0;
	ei_local->stat.rx_fifo_errors	= 0;
	ei_local->stat.rx_missed_errors	= 0;

	ei_local->stat.collisions	= 0;
	ei_local->tx_full = 0;
#ifdef CONFIG_RAETH_NAPI
	atomic_set(&ei_local->irq_sem, 1);
#endif
}

/**
 * rather_probe - pick up ethernet port at boot time
 * @dev: network device to probe
 *
 * This routine probe the ethernet port at boot time.
 *
 *
 */

int __init rather_probe(struct net_device *dev)
{
	int i;
        unsigned int regValue = sysRegRead(FE_RESET);
        int retval;
        END_DEVICE *ei_local =(END_DEVICE *)dev->priv;

	SET_MODULE_OWNER(dev);

	dev->base_addr = RA2882ETH_BASE;
        regValue |= FE_RESET_BIT;;
        sysRegWrite(FE_RESET, regValue);

        /* receiving packet buffer allocation - NUM_RX_DESC x MAX_RX_LENGTH */
        for ( i = 0; i < NUM_RX_DESC; i++)
        {      		
                netrx_skbuf[i] = NULL;
        }	// kmalloc
        
        ei_set_mac_addr(dev, dev->dev_addr);
	spin_lock_init(&ei_local->page_lock);	
	ra2880_setup_dev_fptable(dev);
	ether_setup(dev);

	dev->tx_timeout = ei_tx_timeout;
	dev->watchdog_timeo = TX_TIMEOUT;

#if 0
	retval = request_irq( dev->irq, ei_interrupt, SA_INTERRUPT, dev->name, dev);

	if ( retval ) {
		printk("unable to get IRQ %d (irqval=%d).\n", dev->irq, retval);
		return retval;
	}
#endif

	setup_statistics(ei_local);

	for ( i = 0; i < NUM_RX_DESC; i++)
		netrx_skbuf[i] = NULL;

	return 0;
}

void inline ei_xmit_housekeeping(unsigned long data)
{
	struct net_device *dev = (struct net_device *)data;
	END_DEVICE *ei_local	= (END_DEVICE *)dev->priv;

	struct sk_buff* txskb_tofree;

	while (skb_queue_len(&ei_local->txq) > 0)
	{
		txskb_tofree = skb_dequeue_tail(&ei_local->txq);
		dev_kfree_skb(txskb_tofree);
	}
}

#ifdef CONFIG_WAN_AT_P4
void config_ICPLUS_175C_eva(void)
{
	unsigned int phy_data;
	
	//MII0 doesn't strip the tag of an outgoing packet.
	//MII0 adds a tag to an outgoing packet.
	//Port0~4 strip the tag of an outgoing packet.
	//Port0~4 doesn't add a tag to an outgoing packet.
	
	//Tag/Untag function setup
	mii_mgr_write(29, 23, 0x07c2);
	//setup port 0, 1 vlan group
	//mii_mgr_write(29, 19, 0x8f8f);
	//setup port 2, 3 vlan group
	//mii_mgr_write(29, 20, 0x8f8f);
	//setup port 4 vlan group
	//mii_mgr_write(29, 21, 0x8000);
	//setup default vlan tag value port0~4
	
	//force cpu port is 100F	
	mii_mgr_write(29, 22, 0x8420);
	
	//Define PVID for port0~3
	mii_mgr_write(29, 24, 0x1);
	mii_mgr_write(29, 25, 0x1);
	mii_mgr_write(29, 26, 0x1);
	mii_mgr_write(29, 27, 0x1);
	//Define PVID for port4
	mii_mgr_write(29, 28, 0x2);
	//Define PVID for MII0
	mii_mgr_write(29, 30, 0x2);

	//for unknow mac flooding to all ports.
	//this will make flooding to the same PVID ports
	
	//SMART MAC function setup
	//mii_mgr_write(30, 9, 0x1081); 
	mii_mgr_write(30, 9, 0x1089); 
	
	mii_mgr_write(30, 1, 0x2f00);
	mii_mgr_write(30, 2, 0x0030);
	mii_mgr_write(30, 2, 0x0030);
	

	
	//mii_mgr_read( 30 , 16 , &phy_data );
	//mii_mgr_write( 30 , 16 , phy_data | 0xE0FF ); //Set the adress learning disable for all port
	
	printk("ICPLUS 175C config LAN_WAN finished (evaluation board)\n");
}
#endif

#ifdef CONFIG_WAN_AT_P0
void config_ICPLUS_175C_demo(void)
{
	//MII0 doesn't strip the tag of an outgoing packet.
	//MII0 adds a tag to an outgoing packet.
	//Port0~4 strip the tag of an outgoing packet.
	//Port0~4 doesn't add a tag to an outgoing packet.
	mii_mgr_write(29, 23, 0x07c2);
	//setup port 0, 1 vlan group
	//mii_mgr_write(29, 19, 0x8f8f);
	//setup port 2, 3 vlan group
	//mii_mgr_write(29, 20, 0x8f8f);
	//setup port 4 vlan group
	//mii_mgr_write(29, 21, 0x8000);
	//setup default vlan tag value port0~4
	//force cpu port is 100F
	mii_mgr_write(29, 22, 0x8420);
	mii_mgr_write(29, 24, 0x2);
	mii_mgr_write(29, 25, 0x1);
	mii_mgr_write(29, 26, 0x1);
	mii_mgr_write(29, 27, 0x1);
	mii_mgr_write(29, 28, 0x1);

	//for unknow mac flooding to all ports.
	//this will make flooding to the same PVID ports
	mii_mgr_write(30, 9, 0x0181); 
	mii_mgr_write(30, 1, 0x3e00);
	mii_mgr_write(30, 2, 0x0021);
	printk("ICPLUS 175C config LAN_WAN finished (demo board)\n");
}
#endif

#ifdef CONFIG_PSEUDO_SUPPORT
int VirtualIF_ioctl(struct net_device * net_dev,
		    struct ifreq * rq, int cmd)
{
	return 0;
}

int VirtualIF_open(struct net_device * dev)
{
    PSEUDO_ADAPTER *pPesueoAd = dev->priv;

    //END_DEVICE *pAd = pPesueoAd->RaethDev->priv;
    int index;

    printk("%s: ===> VirtualIF_open\n", dev->name);

    netif_start_queue(pPesueoAd->PseudoDev);

    return 0;
}

int VirtualIF_close(struct net_device * dev)
{
    PSEUDO_ADAPTER *pPesueoAd = dev->priv;

    printk("%s: ===> VirtualIF_close\n", dev->name);

    netif_stop_queue(pPesueoAd->PseudoDev);

    return 0;
}

int VirtualIFSendPackets(struct sk_buff * pSkb,
			 struct net_device * dev)
{
    int i;
    PSEUDO_ADAPTER *pPesueoAd = dev->priv;
    //END_DEVICE *pAd = pPesueoAd->RaethDev->priv;

    //printk("VirtualIFSendPackets --->\n");

    if (!(pPesueoAd->RaethDev->flags & IFF_UP)) {
	dev_kfree_skb_any(pSkb);
	return 0;
    }

    pSkb->cb[40]=0x5a;
    pSkb->dev = pPesueoAd->RaethDev;
    dev_queue_xmit(pSkb);
    return 0;
}


// Register pseudo interface
void RAETH_Init_PSEUDO(pEND_DEVICE pAd, struct net_device *net_dev)
{
    int index;
    struct net_device *dev;
    PSEUDO_ADAPTER *pPseudoAd;
    int i = 0;
    char slot_name[16];
    struct net_device *device;

    printk("%s():%d\n", __FUNCTION__, __LINE__);
    for (index = 0; index < MAX_PSEUDO_ENTRY; index++) {

	dev = alloc_etherdev(sizeof(PSEUDO_ADAPTER));
	//printk("************dev = %x\n", dev);

	{			// find available 
	    for (i = 3; i < 32; i++) {
		sprintf(slot_name, "eth%d", i);

		for (device = dev_base; device != NULL;
		     device = device->next) {
		    if (strncmp(device->name, slot_name, 4) == 0) {
			break;
		    }
		}
		if (device == NULL)
		    break;
	    }

	    if (i != 32) {
		sprintf(dev->name, "eth%d", i);
	    } else {
		printk("Ethernet interface number overflow...\n");
		break;
	    }
	}

	ether_setup(dev);
	pPseudoAd = dev->priv;

	pPseudoAd->PseudoDev = dev;
	pPseudoAd->RaethDev = net_dev;
	//pAd->isPseudo= 0;
	pAd->PseudoDev = dev;
	printk("realdev dev = %x, pseudo dev = %x\n", net_dev, dev);

	memcpy(&dev->dev_addr, &net_dev->dev_addr, 6);

	dev->hard_start_xmit = VirtualIFSendPackets;
	dev->stop = VirtualIF_close;
	dev->open = VirtualIF_open;
	dev->do_ioctl = VirtualIF_ioctl;

	// Register this device
	register_netdevice(dev);
    }
}
#endif				/* WDS_SUPPORT */



/**
 * ei_open - Open/Initialize the ethernet port.
 * @dev: network device to initialize
 *
 * This routine goes all-out, setting everything
 * up a new at each open, even though many of these registers should only need to be set once at boot.
 */
int ei_open(struct net_device *dev)
{
	int i;
	unsigned long flags;

	MOD_INC_USE_COUNT;
  	END_DEVICE *ei_local = dev->priv; // get device pointer from System
	// unsigned int flags;

	if (ei_local == NULL)
	{
		printk(KERN_EMERG "%s: ei_open passed a non-existent device!\n", dev->name);
		return -ENXIO;
	}

        /* receiving packet buffer allocation - NUM_RX_DESC x MAX_RX_LENGTH */
        for ( i = 0; i < NUM_RX_DESC; i++)
        {
                netrx_skbuf[i] = dev_alloc_skb(MAX_RX_LENGTH+2);
                if (netrx_skbuf[i] == NULL )
                        printk("rx skbuff buffer allocation failed!");
#ifdef HEADER_ALIGNED
                skb_reserve(netrx_skbuf[i], 2);
#endif
        }       // kmalloc

	spin_lock_irqsave(&(ei_local->page_lock), flags);
	request_irq( dev->irq, ei_interrupt, SA_INTERRUPT, dev->name, dev);	// try to fix irq in open
	rt2880_eth_setup(dev);	

	ei_local->MACInfo->phy_tx_ring = phy_tx_ring;
	ei_local->MACInfo->phy_rx_ring = phy_rx_ring;
	ei_local->MACInfo->tx_ring = tx_ring;
	ei_local->MACInfo->rx_ring = rx_ring;
	

#ifdef DELAY_INT
#ifdef CONFIG_RAETH_NAPI 
	writereg(0x840f8514,RT2880_DELAY_INT_CFG);
#else /*CONFIG_RAETH_NAPI*/
	writereg(0x84048404,RT2880_DELAY_INT_CFG);
#endif /*CONFIG_RAETH_NAPI*/
    	writereg(0x00000003,RT2880_FE_INT_ENABLE);
#else
    	writereg(0xffffffff,RT2880_FE_INT_ENABLE);
#endif

	skb_queue_head_init(&ei_local->txq);
	tasklet_init(&ei_local->tx_tasklet, ei_xmit_housekeeping ,(unsigned long)dev);
	tasklet_init(&ei_local->rx_tasklet, ei_receive,(unsigned long)dev);

	netif_start_queue(dev);

#ifdef CONFIG_RAETH_NAPI
	atomic_dec(&ei_local->irq_sem);
        netif_poll_enable(dev);
#endif

#ifdef CONFIG_PSEUDO_SUPPORT 
	RAETH_Init_PSEUDO(ei_local, dev);
#endif
	spin_unlock_irqrestore(&(ei_local->page_lock), flags);
	return 0;
}

/**
 * ei_close - shut down network device
 * @dev: network device to clear
 *
 * This routine shut down network device.
 *
 *
 */
int ei_close(struct net_device *dev)
{
	int i;
	END_DEVICE *ei_local = (END_DEVICE *)dev->priv;	// device pointer
	unsigned int flags;
	spin_lock_irqsave(&(ei_local->page_lock), flags);
#ifdef DEBUG
	printk(__FUNCTION__ " is called\n");
#endif

	netif_stop_queue(dev);
	spin_lock_irqsave(&ei_local->page_lock, flags);
	ra2880stop(ei_local);
	
	spin_unlock_irqrestore(&ei_local->page_lock, flags);
	skb_queue_purge(&ei_local->txq);
	
	tasklet_kill(&ei_local->tx_tasklet);
	tasklet_kill(&ei_local->rx_tasklet);

        for ( i = 0; i < NUM_RX_DESC; i++)
        {
                if (netrx_skbuf[i] != NULL) {
                        dev_kfree_skb(netrx_skbuf[i]);
			netrx_skbuf[i] = NULL;
		}
        }       // dev_kfree_skb


#ifndef DSP_EN 
	pci_free_consistent(NULL, NUM_TX_DESC*sizeof(struct PDMA_txdesc), (void *)ei_local->MACInfo->tx_ring, (dma_addr_t)&(ei_local->MACInfo->phy_tx_ring));
	pci_free_consistent(NULL, NUM_RX_DESC*sizeof(struct PDMA_rxdesc), (void *)ei_local->MACInfo->rx_ring, (dma_addr_t)&(ei_local->MACInfo->phy_rx_ring));
#if 0
	if (rx_ring!=NULL)
		pci_free_consistent(NULL, NUM_RX_DESC * sizeof(struct PDMA_rxdesc), &phy_rx_ring);	
#endif
	printk("tx, rx ring memory free!\n");
#endif
	free_irq(dev->irq, dev);
	rt2880_gmac_hard_reset();

#ifdef CONFIG_RAETH_NAPI
	atomic_inc(&ei_local->irq_sem);
        netif_poll_disable(dev);
#endif
	spin_unlock_irqrestore(&(ei_local->page_lock), flags);
	MOD_DEC_USE_COUNT;
	return 0;
}

/*
 * Set the hardware MAC address.
 */
static int ei_set_mac_addr(struct net_device *dev, void *p)
{
	END_DEVICE *ei_local=(END_DEVICE *)dev->priv;
	MAC_INFO *macinfo = (MAC_INFO*)ei_local->MACInfo;

	if(netif_running(dev))
		return -EBUSY;

        ra2880MacAddressSet(macinfo, p);
	return 0;
}

int update_ppe(int control)
{
        struct net_device *dev = &dev_raether;
        ei_close(dev);
        if ( control == 1 ) {
                ((END_DEVICE *)(dev->priv))->devFlags = PPE_ENABLE;
        }
        else {
                ((END_DEVICE *)(dev->priv))->devFlags = 0;
        }

	ei_open(dev);
	((END_DEVICE *)(dev->priv))->devFlags = 0;
	return 0;
}

/**
 * ra2882eth_init - Module Init code
 *
 * Called by kernel to register net_device
 *
 */
int __init ra2882eth_init(void)
{
	int ret;
	struct net_device *dev = &dev_raether;
	int i;
  
	/* net_device structure Init */
	hard_init(dev);
	printk("RA2880 Ethernet Driver Initilization. %s  %d rx/tx descriptors allocated!\n", RAETH_VERSION, NUM_RX_DESC);

	/* Register net device for the driver */

	if ( register_netdev(dev) != 0) {
        	printk(KERN_WARNING " " __FILE__ ": No ethernet port found.\n");
        	return -ENXIO;
	}

	csr_netlink_init();
	ret = debug_proc_init();
#ifdef CONFIG_RAETH_ROUTER
	*(unsigned long *)MDIO_CFG = 0x1001BC01;
	//wait auto polling stop
	for(i=0;i<0xffff;i++); 
	//force cpu port is 100F
	mii_mgr_write(29, 22, 0x8420);
#endif
#ifdef CONFIG_WAN_AT_P4 //evaluation board
	config_ICPLUS_175C_eva();
#endif
#ifdef CONFIG_WAN_AT_P0 //demo board
	config_ICPLUS_175C_demo();
#endif

	return ret;
}

/**
 * ra2882eth_cleanup_module - Module Exit code
 *
 * Cmd 'rmmod' will invode the routine to exit the module
 *
 */
void ra2882eth_cleanup_module(void)
{
	int i;
	struct net_device *dev = &dev_raether;

	if (dev->priv != NULL)
	{
		END_DEVICE *ei_local = (END_DEVICE *)dev->priv;
		if ( ei_local->MACInfo != NULL )
		{
#ifdef DEBUG
			printk("Free MACInfo...\n");
#endif
			kfree(ei_local->MACInfo);

		} 
#ifdef DEBUG
		else
			printk("MACInfo is null\n");	
#endif
		kfree(dev->priv);
		unregister_netdev(dev);
#ifdef DEBUG
		printk("Free ei_local and unregister netdev...\n");
#endif
  	} /* dev->priv */
        for ( i = 0; i < NUM_RX_DESC; i++)
        {
                if (netrx_skbuf[i] != NULL) {
                        dev_kfree_skb(netrx_skbuf[i]);
                        netrx_skbuf[i] = NULL;
                }
        }       // dev_kfree_skb

	debug_proc_exit();
	csr_netlink_end();
}

EXPORT_SYMBOL(update_ppe);
module_init(ra2882eth_init);
module_exit(ra2882eth_cleanup_module);
MODULE_LICENSE("GPL");

/*
 * Local variables:
 * compile-command: "gcc -DMODULE -DMODVERSIONS -D__KERNEL__ -Wall -Wstrict-prototypes -O2 -g -fomit-frame-pointer -c raether.c"
 * End:
 */
