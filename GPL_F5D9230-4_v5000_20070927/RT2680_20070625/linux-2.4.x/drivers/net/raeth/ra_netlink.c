// for netlink header
#include <asm/types.h>
#include <net/sock.h>
#include <linux/socket.h>
#include <linux/netlink.h>
#include <linux/skbuff.h>
#include <linux/net.h>

#include "csr_netlink.h"
#include "ra2882ethreg.h"
#include "ra_netlink.h"

static struct sock *csr_msg_socket = NULL; // synchronize socket for netlink use
unsigned int flags;

void rt2880_csr_receiver(struct sock *sk, int len)
{
	struct sk_buff *skb;
	int err;
	struct nlmsghdr *nlh;
	unsigned int reg_value = 0;
	RT2880_CSR_MSG *csrmsg;
#ifdef DEBUG
	printk("csr netlink receiver!\n");
#endif
	skb = skb_recv_datagram(sk, 0, 1, &err);

#ifdef DEBUG	
	printk("error no : %d\n", err);
#endif
	
	if (skb == NULL) {
		printk("rt2880_csr_receiver(): No data received, error!\n");
		return;
	}
	
	nlh = (struct nlmsghdr*)skb->data;
	
	csrmsg = NLMSG_DATA(nlh);

	if (csrmsg->enable == CSR_READ ) {
		reg_value = sysRegRead(csrmsg->address);
#if 0
		printk("raeth -- 0x%08x: 0x%08x\n", csrmsg->address, reg_value);
#endif
	} else if ( csrmsg->enable == CSR_WRITE ) {
		sysRegWrite(csrmsg->address, csrmsg->default_value);
		reg_value = sysRegRead(csrmsg->address);
	} else if ( csrmsg->enable == CSR_TEST ) {
		reg_value = sysRegRead(csrmsg->address);
		printk("0x%08x: 0x%08x\n", csrmsg->address, reg_value);	
	}
	else
		printk("drv: Command format error!\n");

	csrmsg->default_value = reg_value;
		
#ifdef DEBUG
	printk("drv: rt2880_csr_msgsend() - msg to send!\n");		
#endif
	
	err = rt2880_csr_msgsend(csrmsg);	
	
	if ( err == -2 )
		printk("drv: msg send error!\n");

	skb_free_datagram(sk, skb);
}

int rt2880_csr_msgsend(RT2880_CSR_MSG* csrmsg)
{
	struct sk_buff *skb;
	struct nlmsghdr *nlh = NULL;
	size_t size = 0;
	struct sock *send_syncnl = csr_msg_socket;

	RT2880_CSR_MSG* csr_reg;
	if (send_syncnl == NULL) {
		printk("drv: netlink_kernel_create() failed!\n");
		return -1;
	}
		
	size = NLMSG_SPACE(sizeof(RT2880_CSR_MSG));
	skb = alloc_skb(size, GFP_ATOMIC);
	
	if(!skb)
	{
		printk("rt2880_csr_msgsend() : error! msg structure not available\n");
		return -1;
	}
	
	nlh = NLMSG_PUT(skb, 0, 0, RA2882_CSR_GROUP, size - sizeof(struct nlmsghdr));
	
	if (!nlh)
	{
		printk("rt2880_csr_msgsend() : error! nlh structure not available\n");
		return -1;
	}

	csr_reg = NLMSG_DATA(nlh);
	if (!csr_reg)
	{
		printk("rt2880_csr_msgsend() : error! nlh structure not available\n");
		return -1;
	}

	csr_reg->address	= csrmsg->address;
	csr_reg->default_value 	= csrmsg->default_value;

	NETLINK_CB(skb).dst_groups = RA2882_CSR_GROUP;
	netlink_broadcast(send_syncnl, skb, 0, RA2882_CSR_GROUP, GFP_ATOMIC);
	return 0;

nlmsg_failure:
	return -2;	
}

int csr_netlink_init()
{
	csr_msg_socket = netlink_kernel_create(NETLINK_CSR, rt2880_csr_receiver);
	if ( csr_msg_socket == NULL )
		printk("unable to create netlink socket!\n");
	else
		printk("Netlink init ok!\n");	
	return 0;
}

void csr_netlink_end()
{
	if (csr_msg_socket != NULL){
		sock_release(csr_msg_socket->socket);
		printk("Netlink end...\n");
	}
}
