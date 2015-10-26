#ifdef __COUNTRY_DE
	#define LOG_PING_MSG_1 sprintf(tempStr,"Keine Antwort von %s\n", hostname);
	#define LOG_PING_MSG_2 sprintf(tempStr,"%s ist aktiv\n", hostname);
	#define LOG_PING_MSG_3 sprintf(tempStr,"\n--- %s Ping-Statistik ---\n", hostent->h_name);	
	#define LOG_PING_MSG_4 sprintf(tempStr,"%ld Pakete gesendet, %ld Pakete empfangen, ", ntransmitted, nreceived);	
	#define LOG_PING_MSG_5 sprintf(tempStr,"%ld Duplikate, ", nrepeats);	
	#define LOG_PING_MSG_6 sprintf(tempStr,"%ld\%%\%% Pakete verloren\n", (ntransmitted - nreceived) * 100 / ntransmitted);	
	#define LOG_PING_MSG_7 sprintf(tempStr,"Durchlauf Minimum/Mittelwert/Maximum = %lu.%lu/%lu.%lu/%lu.%lu ms\n", tmin / 10, tmin % 10, (tsum / (nreceived + nrepeats)) / 10, (tsum / (nreceived + nrepeats)) % 10, tmax / 10, tmax % 10);	
	#define	LOG_PING_MSG_8 sprintf(tempStr,"%d Byte von %s: icmp_seq =%u ttl=%d Zeit=%lu.%lu ms%s\n", sz-8, inet_ntoa(*(struct in_addr *) &from->sin_addr.s_addr), icmppkt->icmp_seq, iphdr->ttl, triptime / 10, triptime % 10,(dupflag)?" (DUP!)":"");
#elif __COUNTRY_EU
	#define LOG_PING_MSG_1 sprintf(tempStr,"No response from %s\n", hostname);
	#define LOG_PING_MSG_2 sprintf(tempStr,"%s is alive!\n", hostname);
	#define LOG_PING_MSG_3 sprintf(tempStr,"\n--- %s ping statistics ---\n", hostent->h_name);	
	#define LOG_PING_MSG_4 sprintf(tempStr,"%ld packets transmitted, %ld packets received, ", ntransmitted, nreceived);
	#define LOG_PING_MSG_5 sprintf(tempStr,"%ld duplicates, ", nrepeats);
	#define LOG_PING_MSG_6 sprintf(tempStr,"%ld\%%\%% packet loss\n", (ntransmitted - nreceived) * 100 / ntransmitted);	
	#define LOG_PING_MSG_7 sprintf(tempStr,"round-trip min/avg/max = %lu.%lu/%lu.%lu/%lu.%lu ms\n", tmin / 10, tmin % 10, (tsum / (nreceived + nrepeats)) / 10, (tsum / (nreceived + nrepeats)) % 10, tmax / 10, tmax % 10);
	#define	LOG_PING_MSG_8 sprintf(tempStr,"%d bytes from %s: icmp_seq=%u ttl=%d time=%lu.%lu ms%s\n", sz-8, inet_ntoa(*(struct in_addr *) &from->sin_addr.s_addr), icmppkt->icmp_seq, iphdr->ttl, triptime / 10, triptime % 10,(dupflag)?" (DUP!)":"");
#elif __COUNTRY_FR
	#define LOG_PING_MSG_1 sprintf(tempStr," Aucune réponse de %s\n", hostname);
	#define LOG_PING_MSG_2 sprintf(tempStr,"%s activé !\n", hostname);
	#define LOG_PING_MSG_3 sprintf(tempStr,"\n--- %s Statistiques du Ping ---\n", hostent->h_name);	
	#define LOG_PING_MSG_4 sprintf(tempStr,"%ld paquets transmis, %ld paquets reçus, ", ntransmitted, nreceived);
	#define LOG_PING_MSG_5 sprintf(tempStr,"%ld doublons, ", nrepeats);
	#define LOG_PING_MSG_6 sprintf(tempStr,"%ld\%%\%% perte de paquet :\n", (ntransmitted - nreceived) * 100 / ntransmitted);	
	#define LOG_PING_MSG_7 sprintf(tempStr," durée de propagation min/moy/max = %lu.%lu/%lu.%lu/%lu.%lu ms\n", tmin / 10, tmin % 10, (tsum / (nreceived + nrepeats)) / 10, (tsum / (nreceived + nrepeats)) % 10, tmax / 10, tmax % 10);
	#define	LOG_PING_MSG_8 sprintf(tempStr,"%d octets de %s: icmp_seq=%u ttl=%d time=%lu.%lu ms%s\n", sz-8, inet_ntoa(*(struct in_addr *) &from->sin_addr.s_addr), icmppkt->icmp_seq, iphdr->ttl, triptime / 10, triptime % 10,(dupflag)?" (DUP!)":"");
#else
	#define LOG_PING_MSG_1 sprintf(tempStr,"No response from %s\n", hostname);
	#define LOG_PING_MSG_2 sprintf(tempStr,"%s is alive!\n", hostname);
	#define LOG_PING_MSG_3 sprintf(tempStr,"\n--- %s ping statistics ---\n", hostent->h_name);	
	#define LOG_PING_MSG_4 sprintf(tempStr,"%ld packets transmitted, %ld packets received, ", ntransmitted, nreceived);
	#define LOG_PING_MSG_5 sprintf(tempStr,"%ld duplicates, ", nrepeats);
	#define LOG_PING_MSG_6 sprintf(tempStr,"%ld\%%\%% packet loss\n", (ntransmitted - nreceived) * 100 / ntransmitted);	
	#define LOG_PING_MSG_7 sprintf(tempStr,"round-trip min/avg/max = %lu.%lu/%lu.%lu/%lu.%lu ms\n", tmin / 10, tmin % 10, (tsum / (nreceived + nrepeats)) / 10, (tsum / (nreceived + nrepeats)) % 10, tmax / 10, tmax % 10);
	#define	LOG_PING_MSG_8 sprintf(tempStr,"%d bytes from %s: icmp_seq=%u ttl=%d time=%lu.%lu ms%s\n", sz-8, inet_ntoa(*(struct in_addr *) &from->sin_addr.s_addr), icmppkt->icmp_seq, iphdr->ttl, triptime / 10, triptime % 10,(dupflag)?" (DUP!)":"");
#endif
