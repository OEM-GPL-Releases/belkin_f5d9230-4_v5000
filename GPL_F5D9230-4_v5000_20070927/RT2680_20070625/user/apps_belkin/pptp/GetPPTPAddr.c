#include <bcmnvram.h> 		// Andy add 20021213
#include <sys/ioctl.h>

#include <net/if.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <net/if_arp.h>
#include	<unistd.h>

#define sin_addr(s) (((struct sockaddr_in *)(s))->sin_addr)

/* Get PPTP address, gateway and netmask Added by YaoChung*/
int main(void)
{
 int s,s1;
 struct ifreq ifr,ifr1;
 char *wan_proto = nvram_get("wan_proto");

	daemon ( 0 , 0 );

	sleep(10);
/* printf("GetPPTPAddr............................................\n");*/
 if ((s = socket(AF_INET, SOCK_RAW, IPPROTO_RAW)) < 0)
  return;
 if ((s1 = socket(AF_INET, SOCK_RAW, IPPROTO_RAW)) < 0)
  return;
 strcpy(ifr.ifr_name, "ppp0");
 strcpy(ifr1.ifr_name, "ppp1");
#ifndef LINKSYS
 nvram_set("pptp_ipaddr", "0.0.0.0");
 nvram_set("pptp_netmask", "0.0.0.0");
 nvram_set("pptp_dstaddr", "0.0.0.0");

 if (!strcmp("wan_proto", "pppoe"))
 {
  if (ioctl(s, SIOCGIFADDR, &ifr1) == 0)
  {
/*   printf("PPP1 is ok............................................\n");*/
   nvram_set("pptp_ipaddr", inet_ntoa(sin_addr(&ifr1.ifr_addr)));
   if (ioctl(s, SIOCGIFNETMASK, &ifr1) == 0)
    nvram_set("pptp_netmask", inet_ntoa(sin_addr(&ifr1.ifr_netmask)));
   if (ioctl(s, SIOCGIFDSTADDR, &ifr1) == 0)
    nvram_set("pptp_dstaddr", inet_ntoa(sin_addr(&ifr1.ifr_dstaddr)));

  }
 }
 else
 {
  if (ioctl(s, SIOCGIFADDR, &ifr) == 0)
  {
/*   printf("PPP0 is ok...............................................\n");*/
   nvram_set("pptp_ipaddr", inet_ntoa(sin_addr(&ifr.ifr_addr)));
   if (ioctl(s, SIOCGIFNETMASK, &ifr) == 0)
    nvram_set("pptp_netmask", inet_ntoa(sin_addr(&ifr.ifr_netmask)));
   if (ioctl(s, SIOCGIFDSTADDR, &ifr) == 0)
    nvram_set("pptp_dstaddr", inet_ntoa(sin_addr(&ifr.ifr_dstaddr)));
  }
 }
#endif

 close(s);
 close(s1);
 return 0;
}
/* Get PPTP address, gateway and netmask Added by YaoChung*/
