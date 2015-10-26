#ifndef RA2882ETHEND_H
#define RA2882ETHEND_H

#ifdef DSP_VIA_NONCACHEABLE
#define ESRAM_BASE	0xa0800000	/* 0x0080-0000  ~ 0x00807FFF */
#else
#define ESRAM_BASE	0x80800000	/* 0x0080-0000  ~ 0x00807FFF */
#endif
#define RX_RING_BASE	((int)(ESRAM_BASE + 0x7000))
#define TX_RING_BASE	((int)(ESRAM_BASE + 0x7800))

#ifdef CONFIG_RAETH_ROUTER
#define NUM_RX_DESC     128
#define NUM_TX_DESC    	64
#else
#define NUM_RX_DESC     64
#define NUM_TX_DESC    	64
#endif

#define RA2882_ENET0	RA2882ETH_BASE

#define RT2880_IRQ_ENET0	3 	/* hardware interrupt #3, defined in RT2880 Soc Design Spec Rev 0.03, pp43 */

#define RT2880_FE_INT_STATUS_REG (*(volatile unsigned long *)(FE_INT_STATUS))
#define RT2880_FE_INT_STATUS_CLEAN(reg) (*(volatile unsigned long *)(FE_INT_STATUS)) = reg

struct net_device_stats *ra_get_stats(struct net_device *dev);

void ei_tx_timeout(struct net_device *dev);
int rather_probe(struct net_device *dev);
int ei_open(struct net_device *dev);
int ei_close(struct net_device *dev);

int ra2882eth_init(void);
void ra2882eth_cleanup_module(void);
void phyInit(void);

void ei_xmit_housekeeping(unsigned long data);
void START_RT2880_ETH(void);

static int ei_set_mac_addr(struct net_device *dev, void *p);
int update_ppe(int control);
#endif
