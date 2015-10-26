#include <linux/types.h>
#include <linux/sched.h>
#include <linux/timer.h>
#include <linux/netfilter.h>
#include <linux/in.h>
#include <linux/ip.h>
#include <linux/udp.h>
#include <linux/netfilter_ipv4/ip_conntrack_protocol.h>

#define ISAKMP_TIMEOUT (5*HZ)
#define StopCCN_TIMEOUT (5*HZ)

#define UDP_TIMEOUT (10*HZ)
#define UDP_STREAM_TIMEOUT (180*HZ)

#ifdef CONFIG_NETFILTER_DEBUG
#define DEBUGP printk
#else
#define DEBUGP(format, args...)
#endif

static unsigned short	fakeTID=1;	//This is for L2TP
//Header  |T|L|x|x|S|x|O|P|x|x|x|x|  Ver  |
#define	L2TP_HDR_Control	0x80	//The Type (T) bit indicates the type of message. It is set to 0 for a data message and 1 for a control message.
#define	L2TP_HDR_Length		0x40	//If the Length (L) bit is 1, the Length field is present. This bit MUST be set to 1 for control messages.
#define	L2TP_HDR_Sequence	0x08	// If the Sequence (S) bit is set to 1 the Ns and Nr fields are present. The S bit MUST be set to 1 for control messages.
#define	L2TP_HDR_Offset		0x02	//If the Offset (O) bit is 1, the Offset Size field is present. The O bit MUST be set to 0 (zero) for control messages.
#define	L2TP_HDR_Priority	0x01	//The P bit MUST be set to 0 for all control messages.


unsigned long ip_ct_udp_timeout = 10*HZ;
unsigned long ip_ct_udp_timeout_stream = 180*HZ;

static int udp_pkt_to_tuple(const void *datah, size_t datalen,
			    struct ip_conntrack_tuple *tuple)
{
	struct udphdr *hdr = datah;
	unsigned char *l2tph = datah + sizeof (struct udphdr), *p;
	unsigned short	PktLength, processed=0; // pkt length processed

	unsigned short *TID;

	DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	switch ( ntohs(hdr->dest) ) {		// Depending on different protocol on UDP
		case	1701: 	// This is L2TP
			if( ntohs(hdr->len) < 14 )
			{
			  DEBUGP("(%s)%d None L2TP packet\n" , __FUNCTION__,__LINE__);
			  return 0;
			}
			
	    tuple->src.u.udp.port = hdr->source;
	    // checking whether the length field exists, ChungLiang 01/20/2004
			if ( *(l2tph) & 0x40 )
			   TID = (unsigned short *) (l2tph + 4) ;
			else
			   TID = (unsigned short *) (l2tph + 2) ;

			if ( *TID == 0 && *l2tph==(unsigned char)0xc8 && *(l2tph+1)==(unsigned char)0x02  ) { // this is SCCRQ with control bit set to 0xc8 and version set to 2
				 PktLength = *(l2tph+3) + (*(l2tph+2)*256);
				 DEBUGP("(%s)%d Found SCCRQ with length=%d\n" , __FUNCTION__,__LINE__,PktLength);
				 processed = 12;
				 p = l2tph+13; //current pointer

				 // Searching for TID record
				   while ( PktLength > processed ) {
  						 DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );
							 if ( *(p+4) == 9 ) { // this is tunnel ID AVP
								   tuple->src.u.udp.realTID = *(p+6) + (*(p+5)*256);
								   tuple->src.u.udp.fakeTID = fakeTID;
								    *(p+5) = fakeTID >> 8;
								    *(p+6) = fakeTID & 0xFF;
									 if (hdr->check) {
					    				if ((unsigned int)p & 0x0001) // this is odd align
													hdr->check = ip_nat_cheat_check(
													                    htons(~tuple->src.u.udp.realTID),
													                    htons(fakeTID), hdr->check   );
											else
													hdr->check = ip_nat_cheat_check(
																							~tuple->src.u.udp.realTID,
																							fakeTID, hdr->check);
					    		 }
								   fakeTID++;
									if (fakeTID==0) fakeTID++;
	                 break;
							 }
						   if (*p < 6) {		//This violates the minimum length of AVP
						 DEBUGP("(%s)%d None L2TP packet\n" , __FUNCTION__,__LINE__);
						 	//Invalid L2TP header format, drop packet
							return 0;
							}
						   processed += *p;
						   p += *p;
				  }
				  if (PktLength < processed) { //This violates the definition of L2TP, there is no tunnel ID AVP in SCCRQ
				 DEBUGP("(%s)%d None L2TP packet\n" , __FUNCTION__,__LINE__);
				 //Invalid L2TP header format, drop packet
				 return 0;
					}
			}
			else if ( *TID != 0 && *(l2tph+1)==(unsigned char)0x02  ){	
				//We got destination TID from packet
				 DEBUGP("(%s)%d None SCCRQ packet\n" , __FUNCTION__,__LINE__);
				  tuple->src.u.udp.realTID = 0;
				  tuple->src.u.udp.fakeTID = 0;
			}
			else {
				 DEBUGP("(%s)%d None L2TP packet\n" , __FUNCTION__,__LINE__);
				 //Invalid L2TP header format, drop packet
				 return 0;
			}

			tuple->dst.u.udp.port = hdr->dest;
			tuple->dst.u.udp.fakeTID = ntohs(*TID);	//This will be zero at the SCCRQ packet
			tuple->dst.u.udp.realTID = ntohs(*TID);

			break;
		default:
non_L2TP:
	tuple->src.u.udp.port = hdr->source;
	tuple->dst.u.udp.port = hdr->dest;
	}

	return 1;
}

static int udp_invert_tuple(struct ip_conntrack_tuple *tuple,
			    const struct ip_conntrack_tuple *orig)
{

	DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	switch ( ntohs(orig->dst.u.udp.port) ) {		// Depending on different protocol on UDP
		//case	500: 	// This is ISAKMP
			//tuple->src.u.udp.port = orig->src.u.udp.port;
			//tuple->dst.u.udp.port = orig->dst.u.udp.port;
			//break;
		case	1701: 	// This is L2TP
			tuple->src.u.udp.port = orig->dst.u.udp.port;
			tuple->src.u.udp.fakeTID = orig->dst.u.udp.fakeTID;
			tuple->src.u.udp.realTID = orig->dst.u.udp.realTID;

			tuple->dst.u.udp.port = orig->src.u.udp.port;
			tuple->dst.u.udp.fakeTID = orig->src.u.udp.fakeTID;
			tuple->dst.u.udp.realTID = orig->src.u.udp.realTID;
			break;
		default:
	tuple->src.u.udp.port = orig->dst.u.udp.port;
	tuple->dst.u.udp.port = orig->src.u.udp.port;
	}
	return 1;
}

/* Print out the per-protocol part of the tuple. */
static unsigned int udp_print_tuple(char *buffer,
				    const struct ip_conntrack_tuple *tuple)
{

	DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	switch ( ntohs(tuple->dst.u.udp.port) ) {		// Depending on different protocol on UDP
		case	1701: 	// This is L2TP
			return sprintf(buffer, "srealTID=%hu ,drealTID=%hu ",
					  tuple->src.u.udp.realTID,
					  tuple->dst.u.udp.realTID);
			break;
		default:
	return sprintf(buffer, "sport=%hu dport=%hu ",
		       ntohs(tuple->src.u.udp.port),
		       ntohs(tuple->dst.u.udp.port));
}
}

/* Print out the private part of the conntrack. */
static unsigned int udp_print_conntrack(char *buffer,
					const struct ip_conntrack *conntrack)
{

	DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	return 0;
}

/* Returns verdict for packet, and may modify conntracktype */
static int udp_packet(struct ip_conntrack *conntrack,
		      struct iphdr *iph, size_t len,
		      enum ip_conntrack_info conntrackinfo)
{
	struct udphdr *hdr = (struct udphdr *)((u_int32_t *)iph + iph->ihl);

	DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	if (ntohs(hdr->dest) == 500) { // This is ISAKMP
		if (conntrack->status & IPS_SEEN_REPLY)
			set_bit(IPS_ASSURED_BIT, &conntrack->status);

		 ip_ct_refresh(conntrack, ISAKMP_TIMEOUT);
#ifdef FAST_NAT
		conntrack->allow_cache=0;
#endif
		return NF_ACCEPT;
	}
#ifdef FAST_NAT
	else if( ntohs(hdr->dest) == 1701 )
		conntrack->allow_cache=0;
#endif

	/* If we've seen traffic both ways, this is some kind of UDP
	   stream.  Extend timeout. */
	if (test_bit(IPS_SEEN_REPLY_BIT, &conntrack->status)) {
		ip_ct_refresh(conntrack, ip_ct_udp_timeout_stream);
		/* Also, more likely to be important, and not a probe */
		set_bit(IPS_ASSURED_BIT, &conntrack->status);
	} else
		ip_ct_refresh(conntrack, ip_ct_udp_timeout);

	return NF_ACCEPT;
}

/* Called when a new connection for this protocol found. */
static int udp_new(struct ip_conntrack *conntrack,
			     struct iphdr *iph, size_t len)
{

		DEBUGP("(%s)%d\n" , __FUNCTION__,__LINE__ );

	return 1;
}

struct ip_conntrack_protocol ip_conntrack_protocol_udp
= { { NULL, NULL }, IPPROTO_UDP, "udp",
    udp_pkt_to_tuple, udp_invert_tuple, udp_print_tuple, udp_print_conntrack,
    udp_packet, udp_new, NULL, NULL, NULL };
