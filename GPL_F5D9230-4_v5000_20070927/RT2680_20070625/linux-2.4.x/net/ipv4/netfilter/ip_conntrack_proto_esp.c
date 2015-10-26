#include <linux/types.h>
#include <linux/sched.h>
#include <linux/timer.h>
#include <linux/netfilter.h>
#include <linux/in.h>
#include <linux/netfilter_ipv4/ip_conntrack_protocol.h>

#define ESP_TIMEOUT (600*HZ)

static int esp_pkt_to_tuple(const void *datah, size_t datalen,
				struct ip_conntrack_tuple *tuple)
{
	tuple->src.u.spi = *( (unsigned int *) datah);
	tuple->dst.u.spi = 0;

	return 1;
}

static int esp_invert_tuple(struct ip_conntrack_tuple *tuple,
				const struct ip_conntrack_tuple *orig)
{
	tuple->src.u.spi = orig->dst.u.spi;
	tuple->dst.u.spi = orig->src.u.spi;

	return 1;
}

/* Print out the per-protocol part of the tuple. */
static unsigned int esp_print_tuple(char *buffer,
					const struct ip_conntrack_tuple *tuple)
{
	return sprintf(buffer, "src spi=%x dst spi=%x ",
                       ntohs(tuple->src.u.spi),
                       ntohs(tuple->dst.u.spi));
}

/* Print out the private part of the conntrack. */
static unsigned int esp_print_conntrack(char *buffer,
					    const struct ip_conntrack *state)
{
	return 0;
}

/* Returns verdict for packet, or -1 for invalid. */
static int established(struct ip_conntrack *conntrack,
		       struct iphdr *iph, size_t len,
		       enum ip_conntrack_info conntrackinfo)
{
	ip_ct_refresh(conntrack, ESP_TIMEOUT);
	return NF_ACCEPT;
}

/* Called when a new connection for this protocol found. */
static int
new(struct ip_conntrack *conntrack, struct iphdr *iph, size_t len)
{
#ifdef FAST_NAT
	conntrack->allow_cache=0;
#endif
	return 1;
}

struct ip_conntrack_protocol ip_conntrack_protocol_esp
= { { NULL, NULL }, IPPROTO_ESP, "esp",
    esp_pkt_to_tuple, esp_invert_tuple, esp_print_tuple,
    esp_print_conntrack, established, new, NULL, NULL, NULL};
