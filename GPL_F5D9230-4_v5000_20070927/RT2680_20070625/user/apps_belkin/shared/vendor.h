#ifndef __VENDOR_H
#define __VENDOR_H

#define VENDOR_WAN_IP "0.0.0.0"
#define VENDOR_WAN_GW "0.0.0.0"
#define VENDOR_WAN_MASK "0.0.0.0"
#define VENDOR_WAN_PROTO "dhcp"

#define FW_VERSION "1.0.65"
#define MY_FW_VERSION "1.0.65 2007_01_17_1700_EU"
#define HW_VERSION "WRTR_136G_v01"
#define VENDOR_DOMAIN ""
#define VENDOR_SSID "MIMO"
#define AUTH_TITLE "MIMO"
#define REMOTE_PING "0"
#define DHCP_LEASE_TIME "0"
#define PPPOE_MTU "1492"
#define PPPOE_IDLETIME "15"
#define PPTP_MTU "1460"
#define PPTP_IDLETIME "15"
#ifdef FR
#define VENDOR_CHANNEL "10"
#else
#define VENDOR_CHANNEL "6"
#endif
#define VENDOR_LAN_IP "192.168.1.1"
#define TIME_INDEX "001"
#define TIME_DIFF "001+12:00"
#define AUTH_USERNAME ""
#define AUTH_PASSWORD "admin"
#define DHCPS_START_IP "100"
#define DHCPS_END_IP "149"
#define UPNP_ENABLED "1"
#define PPPOE_DEMAND "0"
#define WL_DEF_IF "ra0"
#define LAN_IFNAMES "vlan1 ra0"
#define VENDOR_SSID_NOBCAST "0"
#define VENDOR_SECMODE "none"
#define VENDOR_ENC "1"
#define VENDOR_PSKKEY ""
#define VENDOR_SSIDNUM "1"
#define VENDOR_WDS "0"
#define VENDOR_AUTH "WEPAUTO"
#define VENDOR_TXKEY "1"
#define VENDOR_REKEY "3600"
#define VENDOR_SWMCAST_IP "234.2.2.9"
#define VENDOR_SWMCAST_PORT "14675"
#define CHARSET "UTF-8"
#define VENDOR_DATARATE "0"
#define VENDOR_AP_ISO   "0"
#define UPNP_FRIENDLYNAME							"Gemtek Wireless Broadband Router"
#define UPNP_MANUFACTURER							"Gemtek Inc."
#define UPNP_MANUFACTURER_URL					"http://www.gemtek.com"
#define UPNP_MODELDESCRIPTION					"802.11g Wireless Broadband Router"
#define UPNP_MODELNAME								"Gemtek Wireless Broadband Router"
#define UPNP_MODELNUMBER							"Gemtek"
#define UPNP_MODELURL									"http://www.gemtek.com"
#define VENDOR_WMM "0"

//******************BELKIN***************************
#ifdef BELKIN

#undef FW_VERSION
#undef MY_FW_VERSION
#undef HW_VERSION
#undef VENDOR_DOMAIN
#undef VENDOR_SSID
#undef AUTH_TITLE
#undef VENDOR_CHANNEL
#undef TIME_INDEX
#undef TIME_DIFF
#undef AUTH_USERNAME
#undef AUTH_PASSWORD
#undef VENDOR_LAN_IP
#undef DHCPS_START_IP
#undef DHCPS_END_IP
#undef UPNP_ENABLED
#undef REMOTE_PING
#undef DHCP_LEASE_TIME
#undef PPPOE_MTU
#undef PPPOE_IDLETIME
#undef PPTP_MTU
#undef PPTP_IDLETIME
#undef UPNP_FRIENDLYNAME
#undef UPNP_MANUFACTURER
#undef UPNP_MANUFACTURER_URL
#undef UPNP_MODELDESCRIPTION
#undef UPNP_MODELNAME
#undef UPNP_MODELNUMBER
#undef UPNP_MODELURL			

#ifdef EU
#undef PPPOE_DEMAND
#define PPPOE_DEMAND "1"
#endif

#define VENDOR_DOMAIN "Belkin"
#define VENDOR_SSID "Belkin_G_Plus_MIMO_180170"
#define VENDOR_CHANNEL "0"
#define AUTH_TITLE "Belkin"
#define AUTH_USERNAME ""
#define AUTH_PASSWORD ""
#define VENDOR_LAN_IP "192.168.2.1"
//#define FW_VERSION "3.01.65"
#define FW_VERSION "3.02.72"
#define HW_VERSION "WRTR_159G_v01"
#ifdef EU
#define MY_FW_VERSION "1.0.76 2007_03_02_1900_UK" //13
#elif AU
#define MY_FW_VERSION "1.0.57 2006_04_12_1200_AU" //13
#elif SC
#define MY_FW_VERSION "1.0.63 2006_08_10_1700_SC" //11
#elif KR
#define MY_FW_VERSION "1.0.72 2006_08_10_1700_KR" //13
#elif JP
#define MY_FW_VERSION "1.0.71 2006_10_02_1200_JP" //13
#elif TW
#define MY_FW_VERSION "1.0.65 2006_08_10_1700_TW" //11
#elif DE
#define MY_FW_VERSION "1.0.64 2006_08_31_1700_DE" //13
#elif FR
#define MY_FW_VERSION "1.0.62 2006_08_10_1700_FR" //13
#elif ES
#define MY_FW_VERSION "1.0.61 2006_09_13_1200_ES" //13
#else
#define MY_FW_VERSION "1.0.76 2007_03_02_1900" //11
#endif
#ifdef SC
	#define TIME_INDEX "045"
	#define TIME_DIFF "045-08:00"
#else
	#define TIME_INDEX "005"
	#define TIME_DIFF "005+08:00"
#endif
#define DHCPS_START_IP "2"
#define DHCPS_END_IP "100"
#define UPNP_ENABLED "0"
#define REMOTE_PING "0"
#define DHCP_LEASE_TIME "525600"
#define PPPOE_MTU "1432"
#ifdef EU
#define PPPOE_IDLETIME "300"
#else
#define PPPOE_IDLETIME "0"
#endif
#define PPTP_MTU "1454"
#define PPTP_IDLETIME "0"
#ifdef FR
#define CHARSET "ISO-8859-1"
#elif ES
#define CHARSET "ISO-8859-1"
#elif DE
#define CHARSET "ISO-8859-1"
#elif SC
#define CHARSET "gb2312"
#else
#define CHARSET "UTF-8"
#endif

#define UPNP_FRIENDLYNAME							"Belkin Wireless Broadband Router F5D9230"
#define UPNP_MANUFACTURER							"Belkin Inc."
#define UPNP_MANUFACTURER_URL					"http://www.belkin.com"
#define UPNP_MODELDESCRIPTION					"802.11g Wireless Broadband Router"
#define UPNP_MODELNAME								"Belkin Wireless Broadband Router F5D9230"
#define UPNP_MODELNUMBER							"F5D9230"
#define UPNP_MODELURL									"http://www.belkin.com"
//#define OLD

#endif //BELKIN

#endif //__VENDOR_H
