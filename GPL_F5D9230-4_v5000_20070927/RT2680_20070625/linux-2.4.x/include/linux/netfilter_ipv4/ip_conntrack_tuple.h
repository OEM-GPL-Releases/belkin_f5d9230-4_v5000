#ifndef _IP_CONNTRACK_TUPLE_H
#define _IP_CONNTRACK_TUPLE_H

/* A `tuple' is a structure containing the information to uniquely
  identify a connection.  ie. if two packets have the same tuple, they
  are in the same connection; if not, they are not.

  We divide the structure along "manipulatable" and
  "non-manipulatable" lines, for the benefit of the NAT code.
*/

/* The protocol-specific manipulable parts of the tuple: always in
   network order! */
union ip_conntrack_manip_proto
{
	/* Add other protocols here. */
	//u_int16_t all;
	u_int32_t all;
	//Added by ChungLiang on 92.9.4
	u_int32_t       spi;    // this is for IPSec (ESP)

	struct {
		u_int16_t port;
	} tcp;
	struct {
		u_int16_t port;
	//Added by ChungLiang on 92.9.4
		u_int16_t fakeTID;
    u_int16_t realTID;
	} udp;
	struct {
		u_int16_t id;
	} icmp;
	struct {
		u_int32_t key;
	} gre;
};

/* The manipulable part of the tuple. */
struct ip_conntrack_manip
{
	u_int32_t ip;
	union ip_conntrack_manip_proto u;
};

/* This contains the information to distinguish a connection. */
struct ip_conntrack_tuple
{
	struct ip_conntrack_manip src;

	/* These are the parts of the tuple which are fixed. */
	struct {
		u_int32_t ip;
		union {
			/* Add other protocols here. */
			//u_int16_t all;
			u_int64_t all;

			u_int64_t gre_all;

			//Added by ChungLiang on 92.9.4
			u_int32_t       spi;    // this is for IPSec (ESP)

			struct {
				u_int16_t port;
			} tcp;
			struct {
				u_int16_t port;
			//Added by ChungLiang on 92.9.4
				u_int16_t fakeTID;
				u_int16_t realTID;
			} udp;
			struct {
				u_int8_t type, code;
			} icmp;
			struct {
				u_int16_t protocol;
				u_int8_t version;
				u_int32_t key;
			} gre;
		} u;

		/* The protocol. */
		u_int16_t protonum;
	} dst;
};

/* This is optimized opposed to a memset of the whole structure.  Everything we
 * really care about is the  source/destination unions */
#define IP_CT_TUPLE_U_BLANK(tuple) 				\
	do {							\
		(tuple)->src.u.all = 0;				\
		(tuple)->dst.u.all = 0;				\
	} while (0)

enum ip_conntrack_dir
{
	IP_CT_DIR_ORIGINAL,
	IP_CT_DIR_REPLY,
	IP_CT_DIR_MAX
};

#ifdef __KERNEL__
#define DEBUGP(format, args...) printk(format, ## args)

#ifdef CONFIG_NETFILTER_DEBUG
#define DUMP_TUPLE(tp)						\
DEBUGP("tuple %p: %u %u.%u.%u.%u:%x -> %u.%u.%u.%u:%x\n",	\
       (tp), (tp)->dst.protonum,				\
       NIPQUAD((tp)->src.ip), (tp)->src.u.all,		\
       NIPQUAD((tp)->dst.ip), (tp)->dst.u.all)
#define DUMP_TUPLE_RAW(tp)						\
DEBUGP("tuple_raw %p: %u %u.%u.%u.%u:%x -> %u.%u.%u.%u:%x\n",	\
       (tp), (tp)->dst.protonum,				\
       NIPQUAD((tp)->src.ip), (tp)->src.u.all,		\
       NIPQUAD((tp)->dst.ip), (tp)->dst.u.all)
#define DUMP_TUPLE_GRE(tp)						\
DEBUGP("tuple_gre %p: %u %u.%u.%u.%u:%x -> %u.%u.%u.%u:%x:%x:%x\n",	\
       (tp), (tp)->dst.protonum,				\
       NIPQUAD((tp)->src.ip), (tp)->src.u.gre.key,		\
       NIPQUAD((tp)->dst.ip), (tp)->dst.u.gre.key, \
       (tp)->dst.u.gre.version, (tp)->dst.u.gre.protocol) 
#else
#define DUMP_TUPLE(tp)						
#define DUMP_TUPLE_RAW(tp)
#define DUMP_TUPLE_GRE(tp)
#endif       

#define CTINFO2DIR(ctinfo) ((ctinfo) >= IP_CT_IS_REPLY ? IP_CT_DIR_REPLY : IP_CT_DIR_ORIGINAL)

/* If we're the first tuple, it's the original dir. */
#define DIRECTION(h) ((enum ip_conntrack_dir)(&(h)->ctrack->tuplehash[1] == (h)))

/* Connections have two entries in the hash table: one for each way */
struct ip_conntrack_tuple_hash
{
	struct list_head list;

	struct ip_conntrack_tuple tuple;

	/* this == &ctrack->tuplehash[DIRECTION(this)]. */
	struct ip_conntrack *ctrack;
};

#endif /* __KERNEL__ */

static inline int ip_ct_tuple_src_equal(const struct ip_conntrack_tuple *t1,
				        const struct ip_conntrack_tuple *t2)
{
	
	
	if (t1->src.ip != t2->src.ip)
		return 0;

	//Added by ChungLiang on 92.9.4
			 if (t1->dst.protonum == 50) { //ESP protocol number
          #ifdef CONFIG_NETFILTER_DEBUG
               DEBUGP("ip_ct_tuple_src_equal.\n");
               DUMP_TUPLE(t1);
               DUMP_TUPLE(t2);
          #endif

          return (t1->src.u.spi == t2->src.u.spi || t2->src.u.spi==0);
       }
       else if (t1->dst.protonum == 17 && ntohs(t1->dst.u.udp.port) == 1701) {
          return ((t1->src.u.udp.fakeTID == t2->src.u.udp.fakeTID) || t2->src.u.udp.fakeTID==0);
       }
			 else if (t1->dst.protonum == 47) { //GRE protocol number
          #ifdef CONFIG_NETFILTER_DEBUG
					DEBUGP("%s: t1-ip %x , t2-ip %x \n" ,__FUNCTION__,t1->src.ip,t2->src.ip );
					DEBUGP("%s: t1-src.u.all %x , t2-src.u.all %x \n" ,__FUNCTION__,t1->src.u.all,t2->src.u.all );
        	DEBUGP("%s: t1-src.u.gre.key %x , t2-src.u.gre.key %x \n" ,__FUNCTION__,t1->src.u.gre.key,t2->src.u.gre.key );
          #endif
          return t1->src.u.gre.key == t2->src.u.gre.key;
	     }
       else
       {
					return t1->src.ip == t2->src.ip	&& t1->src.u.all == t2->src.u.all;
       }
}

static inline int ip_ct_tuple_dst_equal(const struct ip_conntrack_tuple *t1,
				        struct ip_conntrack_tuple *t2)
{
	
	//Added by ChungLiang on 92.9.4
	if (t1->dst.ip != t2->dst.ip)
		return 0;

	   if (t1->dst.protonum == 50) { //ESP protocol number
          #ifdef CONFIG_NETFILTER_DEBUG
               DEBUGP("ip_ct_tuple_dst_equal.\n");
               DUMP_TUPLE(t1);
               DUMP_TUPLE(t2);
          #endif

          return t1->dst.protonum == t2->dst.protonum;
     }
     else if (t1->dst.protonum == 17 && ntohs(t1->dst.u.udp.port) == 1701) {
          if ( t2->dst.u.udp.fakeTID==0 && t1->dst.ip == t2->dst.ip )
               t2->dst.u.udp.fakeTID = t1->dst.u.udp.fakeTID; 
			//set the fakeTID to match
          return t1->dst.u.udp.fakeTID == t2->dst.u.udp.fakeTID;
     }
     else if (t1->dst.protonum == 47) { //GRE protocol number
          #ifdef CONFIG_NETFILTER_DEBUG
               DEBUGP("ip_ct_tuple_dst_equal.\n");
               DUMP_TUPLE_GRE(t1);
               DUMP_TUPLE_GRE(t2);
          #endif

          return t1->dst.u.gre_all == t2->dst.u.gre_all
               && t1->dst.protonum == t2->dst.protonum;
     }
     else
{
	return t1->dst.ip == t2->dst.ip
		&& t1->dst.u.all == t2->dst.u.all
		&& t1->dst.protonum == t2->dst.protonum;
}
}

static inline int ip_ct_tuple_equal(const struct ip_conntrack_tuple *t1,
				    const struct ip_conntrack_tuple *t2)
{
	return ip_ct_tuple_src_equal(t1, t2) && ip_ct_tuple_dst_equal(t1, t2);
}

/* Added by Steven Liu */
static inline int ip_ct_tuple_equal2(const struct ip_conntrack_tuple *t1,
				    const struct ip_conntrack_tuple *t2)
{
#if CONFIG_NAT_FCONE   /* Full Cone */
	return ip_ct_tuple_dst_equal(t1, t2);
#elif CONFIG_NAT_RCONE   /* Restricted Cone */
	return ip_ct_tuple_dst_equal(t1, t2) && (t1->src.ip == t2->src.ip);
#elif CONFIG_NAT_LINUX  /* Original Linux NAT */
	return ip_ct_tuple_src_equal(t1, t2) && ip_ct_tuple_dst_equal(t1, t2);
#endif
}
/*---*/

static inline int ip_ct_tuple_mask_cmp(const struct ip_conntrack_tuple *t,
				       const struct ip_conntrack_tuple *tuple,
				       const struct ip_conntrack_tuple *mask)
{
	return !(((t->src.ip ^ tuple->src.ip) & mask->src.ip)
		 || ((t->dst.ip ^ tuple->dst.ip) & mask->dst.ip)
		 || ((t->src.u.all ^ tuple->src.u.all) & mask->src.u.all)
		 || ((t->dst.u.all ^ tuple->dst.u.all) & mask->dst.u.all)
		 || ((t->dst.protonum ^ tuple->dst.protonum)
		     & mask->dst.protonum));
}

#endif /* _IP_CONNTRACK_TUPLE_H */
