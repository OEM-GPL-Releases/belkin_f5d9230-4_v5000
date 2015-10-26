/* Kernel module to match a string into a packet.
 *
 * Copyright (C) 2000 Emmanuel Roger  <winfield@freegates.be>
 * 
 * ChangeLog
 *	19.02.2002: Gianni Tedesco <gianni@ecsc.co.uk>
 *		Fixed SMP re-entrancy problem using per-cpu data areas
 *		for the skip/shift tables.
 *	02.05.2001: Gianni Tedesco <gianni@ecsc.co.uk>
 *		Fixed kernel panic, due to overrunning boyer moore string
 *		tables. Also slightly tweaked heuristic for deciding what
 * 		search algo to use.
 * 	27.01.2001: Gianni Tedesco <gianni@ecsc.co.uk>
 * 		Implemented Boyer Moore Sublinear search algorithm
 * 		alongside the existing linear search based on memcmp().
 * 		Also a quick check to decide which method to use on a per
 * 		packet basis.
 */

#include <linux/smp.h>
#include <linux/module.h>
#include <linux/skbuff.h>
#include <linux/file.h>
#include <net/sock.h>
//OsborneModify Start on January 15, 2007.
#include <linux/udp.h>
//#include <linux/tcp.h>
//OsborneModify End.

#include <linux/netfilter_ipv4/ip_tables.h>
#include <linux/netfilter_ipv4/ipt_string.h>

MODULE_LICENSE("GPL");

struct string_per_cpu {
	int *skip;
	int *shift;
	int *len;
};

struct string_per_cpu *bm_string_data=NULL;

/* Boyer Moore Sublinear string search - VERY FAST */
char *search_sublinear (char *needle, char *haystack, int needle_len, int haystack_len) 
{
	int M1, right_end, sk, sh;  
	int ended, j, i;

	int *skip, *shift, *len;
	
	/* use data suitable for this CPU */
	shift=bm_string_data[smp_processor_id()].shift;
	skip=bm_string_data[smp_processor_id()].skip;
	len=bm_string_data[smp_processor_id()].len;
	
	/* Setup skip/shift tables */
	M1 = right_end = needle_len-1;
	for (i = 0; i < BM_MAX_HLEN; i++) skip[i] = needle_len;  
	for (i = 0; needle[i]; i++) skip[needle[i]] = M1 - i;  

	for (i = 1; i < needle_len; i++) {   
		for (j = 0; j < needle_len && needle[M1 - j] == needle[M1 - i - j]; j++);  
		len[i] = j;  
	}  

	shift[0] = 1;  
	for (i = 1; i < needle_len; i++) shift[i] = needle_len;  
	for (i = M1; i > 0; i--) shift[len[i]] = i;  
	ended = 0;  
	
	for (i = 0; i < needle_len; i++) {  
		if (len[i] == M1 - i) ended = i;  
		if (ended) shift[i] = ended;  
	}  

	/* Do the search*/  
	while (right_end < haystack_len)
	{
		for (i = 0; i < needle_len && haystack[right_end - i] == needle[M1 - i]; i++);  
		if (i == needle_len) {
			return haystack+(right_end - M1);
		}
		
		sk = skip[haystack[right_end - i]];  
		sh = shift[i];
		right_end = max(right_end - i + sk, right_end + sh);  
	}

	return NULL;
}  

//OsborneModify Start on January 15, 2007.
//Osborne: this function parses the URL string in DNS queries and HTTP GET packets. For PPPoE2 policy routing.
char *search_pppoe2 (char *needle, char *haystack, int needle_len, int haystack_len, int pkt_type)
{
	char *k = haystack + (haystack_len-needle_len);
	char *t = haystack;
	char str_buf[BM_MAX_NLEN]={0}, *p_char, *needle_start, *index1, *index2;
	int  tok_length, needle_start_located=0, end_in_slash=0, start_with_dot=0;
	char str_buf_bak[BM_MAX_NLEN]={0};

//printk("%s(%d) OsborneTest0: needle=%p or %s, haystack=%p, needle_len=%d, haystack_len=%d, pkt_type=%d,\n", __FUNCTION__, __LINE__, needle, needle, haystack, needle_len, haystack_len, pkt_type);
	p_char = needle;
	
	while ( *p_char == '.' )
	{
		start_with_dot = 1;
		p_char++;
	}

	strcpy(str_buf, p_char);
	
	if ( str_buf[strlen(str_buf) - 1] == '/' )
	{
		str_buf[strlen(str_buf) - 1] = 0;
		end_in_slash = 1;
	}

//printk("%s(%d) OsborneTest1: needle=%s, str_buf=%s, end_in_slash=%d, start_with_dot=%d,\n", __FUNCTION__, __LINE__, needle, str_buf, end_in_slash, start_with_dot);
/*
	if ( pkt_type == 6 )	// TCP. i.e. HTTP.
	{
		char *ptr = strstr(haystack, "Host: ");

//printk("%s(%d) OsborneTest1.1: haystack=%s,\n", __FUNCTION__, __LINE__, haystack);		
		if ( ptr )
		{
			char host_buf[BM_MAX_NLEN]={0};
			int index;
			
			strncpy(host_buf, ptr + strlen("Host: "), BM_MAX_NLEN-1);

			for ( index = 0; index < strlen(host_buf); index++ )
			{
				if ( host_buf[index] == '\r' )
				{
					host_buf[index] = 0;
					break;
				}
			}
				
			for ( index = 0; index < strlen(host_buf); index++ )
			{
				if ( host_buf[index] == '\n' )
				{
					host_buf[index] = 0;
					break;
				}
			}

//printk("%s(%d) OsborneTest2: host_buf=%s,\n", __FUNCTION__, __LINE__, host_buf);
			ptr = strstr(host_buf, str_buf);
			if ( ptr )
			{
				if ( end_in_slash )
				{
					if ( *(ptr + strlen(str_buf)) == 0 )
					{
						if ( start_with_dot )
						{
							if ( (ptr-1) >= host_buf && *(ptr-1) == '.' )
//{
//printk("%s(%d) OsborneTest3.1, ptr=%s,\n", __FUNCTION__, __LINE__, ptr);

								return ptr;
//}
							else
//{
//printk("%s(%d) OsborneTest3.2, NULL,\n", __FUNCTION__, __LINE__);

								return NULL;
//}
						}
						else
//{
//printk("%s(%d) OsborneTest3.3, ptr=%s,\n", __FUNCTION__, __LINE__, ptr);

							return ptr;
//}
					}
					else
//{
//printk("%s(%d) OsborneTest4, NULL\n", __FUNCTION__, __LINE__);
						return NULL;
//}
				}
				else
//{
//printk("%s(%d) OsborneTest5, ptr=%s,\n", __FUNCTION__, __LINE__, ptr);
					return ptr;
//}
			}
			else
//{
//printk("%s(%d) OsborneTest6, NULL\n", __FUNCTION__, __LINE__);
				return NULL;
//}
		}
		else
//{
//printk("%s(%d) OsborneTest7, NULL\n", __FUNCTION__, __LINE__);
			return NULL;
//}
	}
*/

	// Now we've got a UDP packet to deal with..
	strcpy(str_buf_bak, str_buf);
	p_char = strtok(str_buf, ".");
	tok_length = strlen(p_char);

//printk("%s(%d) OsborneTest A, t=%p, k=%p, p_char=%s, tok_length=%d\n", __FUNCTION__, __LINE__, t, k, p_char, tok_length);
	while ( t <= k )
	{
		if ( !memcmp(t, p_char, tok_length) )
		{
			char str_buf_inner[BM_MAX_NLEN]={0}, *p_char_2;
			int  tok_length_2;

			strcpy(str_buf_inner, str_buf_bak);
			p_char_2 = strtok(str_buf_inner, ".");
			tok_length_2 = strlen(p_char_2);
			
			if ( !needle_start_located )
			{
				needle_start = t;
				needle_start_located = 1;
			}

			index1 = t;

//printk("%s(%d) OsborneTest D1, p_char_2=%p, index1=%p or %s,\n", __FUNCTION__, __LINE__, p_char_2, index1, index1);
//if (p_char_2) printk("%s(%d) OsborneTest D2, p_char_2=%s, strlen(p_char_2)=%d\n", __FUNCTION__, __LINE__, p_char_2, strlen(p_char_2));
			do
			{
				p_char_2 = strtok(NULL, ".");

//if (p_char_2) printk("%s(%d) OsborneTest E, p_char_2=%s, strlen(p_char_2)=%d, index1=%p or %s\n", __FUNCTION__, __LINE__, p_char_2, strlen(p_char_2), index1, index1);
//else	printk("%s(%d) OsborneTest E, p_char_2=NULL,\n", __FUNCTION__, __LINE__);
				if ( !p_char_2 )
				{
					if ( end_in_slash )
					{
//printk("%s(%d) OsborneTest F, needle_start=%p or %s, strlen(str_buf_bak)=%d, *(needle_start + strlen(str_buf_bak))=%d,\n", __FUNCTION__, __LINE__, needle_start, needle_start, strlen(str_buf_bak), *(needle_start + strlen(str_buf_bak)));
						if ( *(needle_start + strlen(str_buf_bak)) == 0 )
						{
							if ( start_with_dot )
							{
//printk("%s(%d) OsborneTest H, needle_start=%p, haystack=%p,\n", __FUNCTION__, __LINE__, needle_start, haystack);
								if ( (needle_start-1) >= haystack && *(needle_start-1) <= 16 )
//{
//printk("%s(%d) OsborneTest8.1, needle_start=%s,\n", __FUNCTION__, __LINE__, needle_start);
									return needle_start;
//}
								else
//{
//printk("%s(%d) OsborneTest8.2, NULL\n", __FUNCTION__, __LINE__);
									return NULL;
//}
				}
							else
//{
//printk("%s(%d) OsborneTest8.3, needle_start=%s,\n", __FUNCTION__, __LINE__, needle_start);
								return needle_start;
//}
						}
						else
				{
					needle_start_located = 0;
					t = index1; //Osborne: do some offset addition here to speed up. Can be removed for safety.
//printk("%s(%d) OsborneTest9, break, t=index1=%p or %s,\n", __FUNCTION__, __LINE__, t, t);
					break; // Needle not found.
				}
					}
					else
//{
//printk("%s(%d) OsborneTest10, needle_start=%s,\n", __FUNCTION__, __LINE__, needle_start);
						return needle_start;	// No more tokens. Needle is supposed to be found.
//}
				}

				index2 = index1 + tok_length_2 + 1;
				tok_length_2 = strlen(p_char_2);
//printk("%s(%d) OsborneTest I, index2=%p or %s, p_char_2=%s, tok_length_2=%d\n", __FUNCTION__, __LINE__, index2, index2, p_char_2, tok_length_2);

				if ( memcmp(index2, p_char_2, tok_length_2) )
				{
					needle_start_located = 0;
					t = index1;	//Osborne: do some offset addition here to speed up. Can be removed for safety.
//printk("%s(%d) OsborneTest11, break, t=index1=%p or %s,\n", __FUNCTION__, __LINE__, t, t);
					break;		// Needle not found.
				}

				index1 = index2;
			}
			while ( p_char_2 );
		}

		t++;
	}

//printk("%s(%d) OsborneTest14, NULL\n", __FUNCTION__, __LINE__);
	return NULL;
}
//OsborneModify End.
/* Linear string search based on memcmp() */
char *search_linear (char *needle, char *haystack, int needle_len, int haystack_len) 
{
	char *k = haystack + (haystack_len-needle_len);
	char *t = haystack;
	
	while ( t <= k ) {
		if (memcmp(t, needle, needle_len) == 0)
			return t;
		t++;
	}

	return NULL;
}

static int
match(const struct sk_buff *skb,
      const struct net_device *in,
      const struct net_device *out,
      const void *matchinfo,
      int offset,
      const void *hdr,
      u_int16_t datalen,
      int *hotdrop)
{
	const struct ipt_string_info *info = matchinfo;
	struct iphdr *ip = skb->nh.iph;
	int hlen, nlen;
	char *needle, *haystack;
	proc_ipt_search search=search_linear;

	if ( !ip ) return 0;

	/* get lenghts, and validate them */
	nlen=info->len;
	hlen=ntohs(ip->tot_len)-(ip->ihl*4);
	if ( nlen > hlen ) return 0;

	needle=(char *)&info->string;
	haystack=(char *)ip+(ip->ihl*4);

/*
if(ip->protocol==17 && skb->h.uh->dest==53)//DNS
{
printk("%s(%d) OsborneTest 1, protocol=%d, check=%04X, haystack[0-7]=%02x %02x %02x %02x %02x %02x %02x %02x\n", 
__FUNCTION__, __LINE__, ip->protocol, ip->check, (unsigned char)haystack[0], (unsigned char)haystack[1], (unsigned char)haystack[2], 
(unsigned char)haystack[3], (unsigned char)haystack[4], (unsigned char)haystack[5], (unsigned char)haystack[6], (unsigned char)haystack[7]);

printk("haystack[last22]=\n%02x %02x %02x %02x %02x %02x %02x %02x\n%02x %02x %02x %02x %02x %02x %02x %02x\n%02x %02x %02x %02x %02x %02x %02x %02x\n%02x %02x %02x %02x %02x %02x %02x %02x\n",
(unsigned char)haystack[hlen-32], (unsigned char)haystack[hlen-31], (unsigned char)haystack[hlen-30], (unsigned char)haystack[hlen-29], (unsigned char)haystack[hlen-28], (unsigned char)haystack[hlen-27], (unsigned char)haystack[hlen-26], (unsigned char)haystack[hlen-25],
(unsigned char)haystack[hlen-24], (unsigned char)haystack[hlen-23], (unsigned char)haystack[hlen-22], (unsigned char)haystack[hlen-21], (unsigned char)haystack[hlen-20], (unsigned char)haystack[hlen-19], (unsigned char)haystack[hlen-18], (unsigned char)haystack[hlen-17],
(unsigned char)haystack[hlen-16], (unsigned char)haystack[hlen-15], (unsigned char)haystack[hlen-14], (unsigned char)haystack[hlen-13], (unsigned char)haystack[hlen-12], (unsigned char)haystack[hlen-11], (unsigned char)haystack[hlen-10], (unsigned char)haystack[hlen-9],
(unsigned char)haystack[hlen-8], (unsigned char)haystack[hlen-7], (unsigned char)haystack[hlen-6], (unsigned char)haystack[hlen-5], (unsigned char)haystack[hlen-4], (unsigned char)haystack[hlen-3], (unsigned char)haystack[hlen-2], (unsigned char)haystack[hlen-1]);

printk("haystack[last22]=%s\n", (char *)&haystack[hlen-22]);
}
*/
	/* The sublinear search comes in to its own
	 * on the larger packets */
	if ( (hlen>IPT_STRING_HAYSTACK_THRESH) &&
	  	(nlen>IPT_STRING_NEEDLE_THRESH) ) {
		if ( hlen < BM_MAX_HLEN ) {
			search=search_sublinear;
		}else{
			if (net_ratelimit())
				printk(KERN_INFO "ipt_string: Packet too big "
					"to attempt sublinear string search "
					"(%d bytes)\n", hlen );
		}
	}
	
//OsborneModify Start on January 15, 2007.
//printk("%s(%d) OsborneTest string matched START, ip->protocol=%d, skb->h.uh->dest=%d,\n", __FUNCTION__, __LINE__, ip->protocol, skb->h.uh->dest);
	//if ( ip->protocol==17 && skb->h.uh->dest==53 ) // DNS
	if ( ip->protocol==17 )
		return ((search_pppoe2(needle, haystack, nlen, hlen, ip->protocol)!=NULL) ^ info->invert);

	//if ( ip->protocol==6 && skb->h.th->dest==80 ) // HTTP
	//	return ((search_pppoe2(needle, haystack, nlen, hlen, ip->protocol)!=NULL) ^ info->invert);
//OsborneModify End.
    return ((search(needle, haystack, nlen, hlen)!=NULL) ^ info->invert);
}

static int
checkentry(const char *tablename,
           const struct ipt_ip *ip,
           void *matchinfo,
           unsigned int matchsize,
           unsigned int hook_mask)
{

       if (matchsize != IPT_ALIGN(sizeof(struct ipt_string_info)))
               return 0;

       return 1;
}

void string_freeup_data(void)
{
	int c;
	
	if ( bm_string_data ) {
		for(c=0; c<smp_num_cpus; c++) {
			if ( bm_string_data[c].shift ) kfree(bm_string_data[c].shift);
			if ( bm_string_data[c].skip ) kfree(bm_string_data[c].skip);
			if ( bm_string_data[c].len ) kfree(bm_string_data[c].len);
		}
		kfree(bm_string_data);
	}
}

static struct ipt_match string_match
= { { NULL, NULL }, "string", &match, &checkentry, NULL, THIS_MODULE };

static int __init init(void)
{
	int c;
	size_t tlen;
	size_t alen;

	tlen=sizeof(struct string_per_cpu)*smp_num_cpus;
	alen=sizeof(int)*BM_MAX_HLEN;
	
	/* allocate array of structures */
	if ( !(bm_string_data=kmalloc(tlen,GFP_KERNEL)) ) {
		return 0;
	}
	
	memset(bm_string_data, 0, tlen);
	
	/* allocate our skip/shift tables */
	for(c=0; c<smp_num_cpus; c++) {
		if ( !(bm_string_data[c].shift=kmalloc(alen, GFP_KERNEL)) )
			goto alloc_fail;
		if ( !(bm_string_data[c].skip=kmalloc(alen, GFP_KERNEL)) )
			goto alloc_fail;
		if ( !(bm_string_data[c].len=kmalloc(alen, GFP_KERNEL)) )
			goto alloc_fail;
	}
	
	return ipt_register_match(&string_match);

alloc_fail:
	string_freeup_data();
	return 0;
}

static void __exit fini(void)
{
	ipt_unregister_match(&string_match);
	string_freeup_data();
}

module_init(init);
module_exit(fini);
