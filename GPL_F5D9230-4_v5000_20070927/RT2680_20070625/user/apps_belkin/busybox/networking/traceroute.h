#ifdef __COUNTRY_DE
	#define LOG_TRACEROUTE_MSG_1 printf("Routenverfolgung: %s %d Zeichen geschrieben, ret=%d\n", hostname, datalen, i);
	#define LOG_TRACEROUTE_MSG_2 printf("Routenverfolgung zu %s (%s)", hostname,	inet_ntoa(to->sin_addr));	
	#define LOG_TRACEROUTE_MSG_3 printf("von %s", source);	
	#define LOG_TRACEROUTE_MSG_4 printf(", %d Hops max., %d Byte Pakete \n", max_ttl, datalen);	
	#define LOG_TRACEROUTE_MSG_5 printf("  %g ms ", deltaT(&t1, &t2));	
#elif __COUNTRY_EU
	#define LOG_TRACEROUTE_MSG_1 printf("traceroute: wrote %s %d chars, ret=%d\n", hostname, datalen, i);
	#define LOG_TRACEROUTE_MSG_2 printf("traceroute to %s (%s)", hostname,	inet_ntoa(to->sin_addr));	
	#define LOG_TRACEROUTE_MSG_3 printf(" from %s", source);	
	#define LOG_TRACEROUTE_MSG_4 printf(", %d hops max, %d byte packets\n", max_ttl, datalen);	
	#define LOG_TRACEROUTE_MSG_5 printf("  %g ms", deltaT(&t1, &t2));		
#elif __COUNTRY_FR
	#define LOG_TRACEROUTE_MSG_1 printf("détermination d'itinéraire : écriture %s %d caractères, ret=%d\n", hostname, datalen, i);
	#define LOG_TRACEROUTE_MSG_2 printf("détermination d'itinéraire vers %s (%s)", hostname,	inet_ntoa(to->sin_addr));	
	#define LOG_TRACEROUTE_MSG_3 printf(" de %s", source);	
	#define LOG_TRACEROUTE_MSG_4 printf(", %d sauts max, %d octets de paquets\n", max_ttl, datalen);	
	#define LOG_TRACEROUTE_MSG_5 printf("  %g ms", deltaT(&t1, &t2));		
#else
	#define LOG_TRACEROUTE_MSG_1 printf("traceroute: wrote %s %d chars, ret=%d\n", hostname, datalen, i);
	#define LOG_TRACEROUTE_MSG_2 printf("traceroute to %s (%s)", hostname,	inet_ntoa(to->sin_addr));	
	#define LOG_TRACEROUTE_MSG_3 printf(" from %s", source);	
	#define LOG_TRACEROUTE_MSG_4 printf(", %d hops max, %d byte packets\n", max_ttl, datalen);	
	#define LOG_TRACEROUTE_MSG_5 printf("  %g ms", deltaT(&t1, &t2));	
#endif
