function dw(message)
{
 if((message.indexOf("<script", 0) != -1) || (message.indexOf("</script", 0) != -1))
 {
  message = message.replace("<script", "&#60script");
  message = message.replace("</script", "&#60/script");  
 }
  
 document.write(message); 
}
function assign_var()
{
language='Simplified Chinese';
show1='Ê×Ò³'; // Home 
show2='°ïÖú'; // Help 
show3='µÇÂ¼'; // Login 
show4='ÍË³ö'; // Logout 
show5='ÒòÌØÍø×´Ì¬'; // Internet Status 
show6='Á¬½ÓÖĞ';  //Connected 
show7='ÎŞÁ¬½Ó'; // No Connection 
show8='¾ÖÓòÍø°²×°'; // LAN Setup 
show9='¾ÖÓòÍøÉèÖÃ'; // LAN Settings 
show10='DHCP ¿Í»§ÁĞ±í'; // DHCP Client List 
show11='¹ãÓòÍøÂç'; // Internet WAN 
show12='Á¬½ÓÀàĞÍ'; // Connection Type 
show13='DNS·şÎñÆ÷'; //DNS 
show14='MACµØÖ·'; // MAC Address 
show15='ÎŞÏß¾ÖÓòÍø²»¿ÉÓÃ'; // WLAN Not Available 
show16='ÎŞÏß'; // Wireless 
show17='Í¨ĞÅĞÅµÀ ºÍ SSID'; // Channel and SSID 
show18= '°²È«'; // Security 
show19=  'Éè¶¨ÎªAP£¨½ÓÈëµã£©'; // Use as Access Point 
show20=  'Ñ¡ÔñIPµØÖ·'; // Specify IP Address 
show21=  'MACµØÖ·¿ØÖÆ'; // MAC Address Control 
show22=   'ÎŞÏßÍøÇÅ'; // Wireless Bridge 
show23=   '·À»ğÇ½'; // Firewall 
show24=   'ĞéÄâ·şÎñÆ÷'; // Virtual Servers 
show25=   'ÓÃ»§¶ËIPµØÖ·¹ıÂËÆ÷'; //Client IP Filters 
show26=   'MACµØÖ·¹ıÂË'; // MAC Address Filtering 
show27=   '·Ç¾üÊÂÇø'; // DMZ 
show28=   'WAN Ping×èµ²'; // WAN Ping Blocking 
show29=   '°²È«µÇÂ¼¼ÇÂ¼'; // Security Log 
show30=   '¹¤¾ß³ÌĞò'; // Utilities 
show31=   '¼Ò³¤¿ØÖÆ'; // Parental Control 
show32=   'ÖØĞÂÆô¶¯Â·ÓÉÆ÷'; // Restart Router 
show33=   'ÖØĞÂÆô¶¯AP½ÓÈëµã'; // Restart AP 
show34=  '»Ö¸´³ö³§ÉèÖÃ'; //Restore Factory Default 
show35=  '±£´æ/±¸·İ ÉèÖÃ'; // Save/Backup Settings 
show36=  '»Ö¸´Ö®Ç°µÄÉèÖÃ'; // Restore Previous Settings 
show37=  'Firmware¸üĞÂ'; // Firmware Update 
show38=  'ÏµÍ³Éè¶¨'; // System Settings 
show39='´òÓ¡»ú·şÎñ'; // Printer Service 
show40='´òÓ¡·şÎñÆ÷ÅäÖÃ'; // Print Server Configuration 
show41=   'DDNS '; // DDNS 
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='¸ü¶àĞÅÏ¢'; //More Info 
btn1='Çå³ı±ä¸ü'; //Clear Changes
btn2='Ì×ÓÃ±ä¸ü'; //Apply Changes
btn3='¸üĞÂ¶¯Ì¬DNS·şÎñÆ÷'; //Update Dynamic DNS
Router='Â·ÓÉÆ÷'; //Router
AP='AP½ÓÈëµã'; //AP
Dynamic='¶¯Ì¬'; //Dynamic
cff1='Firmware ¼ì²éÍê³É'; //Check Firmware Successfully
cff2='FirmwareĞÅÏ¢';  // Firmware Info.
cff3='ÎŞ·¨Îª´ËÂ·ÓÉÆ÷¸üĞÂFirmware'; // There is no new firmware update available for this Router!
cff4='ÎŞ·¨ÓëFirmwareĞÅÏ¢·şÎñÆ÷Á¬½Ó£¬<br>Çë¼ì²éÎŞÏßÍøÂçÁ¬½Ó'; // Cannot connect to the firmware information server, <br>please double check the wan connection.
cff5='An updated version of firmware is available for your Router';
d1='Belkin | ¸´ÖÆ¹ÜÀíÔ±'; //Belkin | Duplicate Administrator
d2=' '; //Duplicate Administrator
d3='ÆäËû¹ÜÀíÔ±ÕıÔÚ²Ù×÷´ËÉè±¸,Äú²»ÄÜµÇÂ¼'; // This device is managed by 
d4=' '; //currently!!
fc1='·À»ğÇ½ > ÓÃ»§IP¹ıÂË'; // Firewall > Client IP filters 
fc2a='´ËÂ·ÓÉÆ÷¿É±»Éè¶¨ÎªÖ»´æÈ¡ÍøÂç¡¢µç×ÓÓÊ¼ş»òÆäËüÍøÂç·şÎñ'; fc2b='ÔÚÌØ¶¨ÈÕÆÚÓëÊ±¼ä'; // The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times.
IP='IP';
Port='¶Ë¿Ú'; //Port 
Type='ÀàĞÍ'; //Type 
BT='×èµ²Ê±¼ä'; // Block Time 
Day='ÈÕÆÚ'; //Day
Tm='Ê±¼ä'; //Time
Enable='¿ªÆô'; //Enable
BOTH='Á½Õß¾ùÓÃ'; // BOTH 
Always='×ÜÊÇ'; // Always 
Block='×èµ²'; // Block 
SUN='>ĞÇÆÚÌì'; //>SUN 
MON='>ĞÇÆÚÒ»'; //>MON 
TUE='>ĞÇÆÚ¶ş'; //>TUE 
WED='>ĞÇÆÚÈı'; //>WED 
THU='>ĞÇÆÚËÄ'; //>THU 
FRI='>ĞÇÆÚÎå'; //>FRI 
SAT='>ĞÇÆÚÁù'; //>SAT 
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Äú¿ÉÄÜÉĞÎ´ÊäÈëIPµØÖ·»òÄúËùÊäÈëµÄ²¿·İIPµØÖ·ÊÇ²»ÕıÈ·µÄ¡£IPµØÖ·¿ÉÒÔÊÇ½çÓÚ0ÖÁ254Ö®¼äµÄÈÎÒ»Êı×Ö'; // Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 1 and 254.
fcsm='ÄúËùÊäÈëµÄ¶Ë¿ÚºÅÂëÊÇ²»ÕıÈ·µÄ'; // The port numbers you entered are invalid.
fcrm='¶Ë¿Ú·¶Î§Ó¦¸ÃÊÇºó´óÓÚÇ°'; // The latter of the port range must be larger than the former.
fcripm='IP·¶Î§Ó¦¸ÃÊÇºó´óÓÚÇ°'; // The latter of the ip range must be larger than the former.
fcpm='ÔÚ´Ë¶Ë¿ÚÊäÈëÀ¸ÖĞµÄÊı×ÖÓ¦½çÓÚ1µ½65535'; // The number in port entry box should be between 1 - 65535.
fd1='·À»ğÇ½ > ·Ç¾üÊÂÇø'; // Firewall > DMZ 
fd2='·Ç¾üÊÂÇø¹¦ÄÜÄÜÈÃÄúÖ¸¶¨ÌØ¶¨ÈÎÒ»ÔÚÄúÇøÓòÖĞµÄµçÄÔ±»NAT·À»ğÇ½¸ôÀë¡£Èç¹ûNAT·¢ÉúÎÊÌâ£¬ÕâÏî¹¦ÄÜÊÇ±ØĞèµÄ£¬ÓÉÆäµ±ÄúÊ¹ÓÃµçÄÔÓÎÏ·»òÊÇÊÓÑ¶»áÒéÊ±¡£ÈôÁÙÊ±×´¿ö·¢ÉúÇëÊ¹ÓÃ´ËÏî¹¦ÄÜ¡£'; // The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.
fd3='ÔÚ´Ë·Ç¾üÊÂÇøµÄµçÄÔ²¢Î´ÊÜµ½ºÚ¿ÍÇÖÂÔµÄ±£»¤'; // The computer in the DMZ is not protected from hacker attacks.
fd4='ÇëÊäÈëIPµØÖ·µÄ×îºóÒ»Î»Êı×Ö²¢Ñ¡È¡¡ºÆôÓÃ¡»¡£µãÑ¡¡°Ì×ÓÃ±ä¸ü¡±Ê¹¸ü¸ÄÉúĞ§¡£'; // To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Submit" for the change to take effect.
fd5='ĞéÄâ·Ç¾üÊÂÇøÖ÷»úIPµØÖ·'; // IP Address of Virtual DMZ Host 
fd6='¾²Ì¬IP'; // Static IP  
fd7='×¨ÓÃ IP';// Private IP  
fd8='ÆôÓÃ'; // Enable 
fd9='·À»ğÇ½ > DDNS '; // Firewall > DDNS 
fd10='¶¯Ì¬DNS·şÎñÎªÄúµÄÒòÌØÍøÓÃ»§Ìá¹©Ò»¸ö¹Ì¶¨µÄDNS·şÎñÆ÷Ãû(È¡´úÒÔÇ°Ìá¹©IPµØÖ·¶ø¿ÉÄÜ¾­³£ĞèÒª±ä»»). ÕâÑùÄúµÄÂ·ÓÉÆ÷ºÍÔÚÂ·ÓÉÆ÷µÄĞéÄâ·şÎñÆ÷ÉÏÔËĞĞµÄÓ¦ÓÃ¿ÉÒÔÔÚÒòÌØÍøµÄ²»Í¬µØ·½½øĞĞÁ¬½ÓºÍÊ¹ÓÃ¶øÎŞĞèÖªµÀÄúµ±Ç°µÄIPµØÖ·. ÄúµÄÎŞÏßÂ·ÓÉÆ÷Í¨¹ıDynDNS.orgÖ§³Ö¶¯Ì¬DNS·şÎñ. '; //Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router/'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org
fd11='ÔÚÊ¹ÓÃ¸Ã·şÎñÖ®Ç°Äú±ØĞëÉú³ÉÒ»¸öÓÃ»§ÕÊºÅ&nbsp;'; // You must create an account before using this service.
fd12='ÓÃ»§Ãû³Æ > '; // User Name 
fd13='ÃÜÂë > '; // Password 
fd14='ÓòÃû> '; // Domain Name 
fd15='ÇëÔÚÆôÓÃ·Ç¾üÊÂÇøÇ°ÊäÈëIPµØÖ·'; 
fd16='Auto-update'; 
fmc1='·À»ğÇ½ > MACµØÖ·¹ıÂË'; // Firewall > MAC address filtering 
fmc2='´Ë¹¦ÄÜ¿ÉÈÃÄúÉèÖÃÔÊĞí·ÃÎÊµÄ¿Í»§»úÁĞ±í¡£µ±ÄúÆôÓÃ´Ë¹¦ÄÜÊ±£¬Äú±ØĞëÊäÈëÍøÂçÖĞÃ¿Ì¨¿Í»§»úµÄ MAC µØÖ·£¬´Ó¶øÊ¹Ã¿Ì¨¿Í»§»ú¶¼¿É·ÃÎÊÍøÂç¡£'; // This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.  
fmc3='ÆôÓÃMACµØÖ·¹ıÂË'; // Enable MAC Address Filtering 
fmc4='MACµØÖ·¹ıÂËÇåµ¥'; // MAC Address Filtering List 
fmc5='×èµ²'; // Block 
fmc6='Ö÷»ú'; // Host 
fmc7='MACµØÖ·'; // MAC Address 
fmc9='ÎŞ·¨ÊäÈë¶àÖØ²¥ËÍÃ½ÌåMACµØÖ·';
fmc12='Õâ¸öMACµØÖ·ÒÑ¾­¼ÓÈë';
Add='¼ÓÈë'; //Add 
Del='É¾³ı'; //Delete
fmcipm='Äú¿ÉÄÜÎ´ÊäÈëÈ«²¿µÄÊ®Áù½øÖÆÊı×Ö»òÊÇ²¿·İÄúËùÊäÈëµÄÊ®Áù½øÖÆÊı×ÖÊÇ²»ÕıÈ·µÄ¡£Ò»¸öÊ®Áù½øÖÆÊı×ÖÓ¦Îª0ÖÁ9»òÊÇAÖÁFµÄ×ÖÄ¸'; // Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.
fmn1='·À»ğÇ½ >'; // Firewall >
fmn2='ÄúµÄÂ·ÓÉÆ÷ÓĞÒ»¸ö·À»ğÇ½¿ÉÒÔ±£»¤ÄúµÄÍøÂç±»Ò»°ãºÚ¿ÍÈëÇÖ£¬°üÀ¨Ping of Death(PoD)ºÍDenial of Service (DoS)¡£Èç¹ûĞèÒªÄú¿ÉÒÔ½«·À»ğÇ½¹Ø±Õ¡£ËäÈ»½«·À»ğÇ½¹Ø±Õ²»»áÈÃÄúÍêÈ«ÎŞ·¨×èµ²ºÚ¿ÍµÄ¹¥»÷£¬µ«»¹ÊÇ½¨ÒéÄú¾¡Á¿¶¼¿ªÆô·À»ğÇ½¡£'; // Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.
fmn3='·À»ğÇ½ÆôÓÃ/½ûÓÃ'; // Firewall Enable / Disable >
Disable='¹Ø±Õ'; // Disable 
fp1='·À»ğÇ½ > ×èµ²WAN Ping'; // Firewall > WAN Ping Blocking 
fp2='<b>½ø½×Éè¶¨¹¦ÄÜ!</b> Äú¿ÉÒÔÉè¶¨Â·ÓÉÆ÷²»»ØÓ¦ICMP Ping(ping to the WAN¶Ë¿Ú)¡£Õâ¿ÉÒÔÌá¸ß°²È«¶È'; //<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.
fp3='×èµ²ICMP Ping';  // Block ICMP Ping >
fs1='·À»ğÇ½ > °²È«¼ÇÂ¼'; //Firewall > Security log
fs2='´ËÂ·ÓÉÆ÷±£´æËùÓĞµÇÈëÓë×¢ÏúÖ®¼ÇÂ¼£¬ÒÔ¼°ËùÓĞÍøÂçÉÏµÄ¹¥»÷£¬¼ÇÂ¼¿ÉÔÚÏÂ·½²éÔÄ'; // The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.
fs3='¼ÇÂ¼µµ°¸'; // Log File 
Save='´æµµ'; // Save 
Clear='Çå³ı'; //Clear
Refresh='ÖØĞÂÕûÀí';  //Refresh
fv1='·À»ğÇ½>ĞéÄâ·şÎñÆ÷'; // Firewall > Virtual servers 
fvipm='Äú¿ÉÄÜÉĞÎ´ÊäÈëËùÓĞIPµØÖ·£¬\n»òÊÇ²¿·İÄúËùÊäÈëµÄÊı×ÖÊÇ²»ÕıÈ·µÄ¡£\nIPµØÖ·µÄÊı×ÖÓ¦½çÓÚ0ÖÁ255Ö®¼ä¡£'; // Either you have not entered all of the ip addresses \n or some of the numbers you entered are invalid. \n The number in ip address entry box should be between 1 - 254.
fvrm='´Ë¹«ÓÃ¶Ë¿ÚºÅÂë²»¿ÉÄÜÊÇ88£¬ÒòÎªÓëÎŞÏßÂ·ÓÉÆ÷ÍøÂç·şÎñÏà³åÍ»¡£'; // The public port number can not be 88.Because it will have a collision with the Wireless Router  web service.
fvipr='ÄÚ´«¶Ë¿Ú·¶Î§²»ÕıÈ·'; // The Inbound port range is not correct.
fvppr='Ë½ÈË¶Ë¿Ú·¶Î§²»ÕıÈ·'; // The Private port range is not correct.
fv2='ÕâÏî¹¦ÄÜÄÜ¹»ÈÃÄú×·×ÙÍâ²¿(ÒòÌØÍø)µÄ·şÎñÁ¬½Ó£¬ÀıÈçÍøÂç·şÎñÆ÷(¶Ë¿Ú80)£¬FTP·şÎñÆ÷(¶Ë¿Ú21)»òÆäËüÓ¦ÓÃ³ÌĞò½åÓÉÂ·ÓÉÆ÷µ½´ïÄúÄÚ²¿ÍøÂçµÄÆäËü³ÌĞò'; // This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.
fv3='Active Worlds'; 
fv4='Age of Empires'; 
fv5='Age of Empires Expansion: The Rise of Rome'; 
fv6='Age of Empires II Expansion: The Conquerors'; 
fv7='Age of Empires II: The Age of Kings'; 
fv8='Age of Kings'; 
fv9='Age of Wonders'; 
fv10='Aliens vs. Predator'; 
fv11='Anarchy Online (BETA)'; 
fv12='AOL Instant Messenger'; 
fv13='Audiogalaxy Satellite'; 
fv14='Baldur\'s Gate'; 
fv15='BattleCom'; 
fv16='Battlefield Communicator'; 
fv17='Black and White'; 
fv18='Blizzard Battle.net'; 
fv19='Buddy Phone'; 
fv20='Bungie.net'; 
fv21='Camerades'; 
fv22='CART Precision Racing ';
fv23='Close Combat for Windows ';
fv24='Close Combat III: The Russian Front'; 
fv25='Close Combat: A Bridge Too Far'; 
fv26='Combat Flight Simulator 2: WWII Pacific Theater';
fv27='Combat Flight Simulator: WWII Europe Series'; 
fv28='Crimson Skies'; 
fv29='Dark Reign'; 
fv30='Dark Reign 2'; 
fv31='Delta Force 2'; 
fv32='Delta Three PC to Phone'; 
fv33='Descent 3'; 
fv34='Descent Freespace'; 
fv35='Diablo (1.07+)'; 
fv36='Diablo I';
fv37='Diablo II'; 
fv38='DialPad.Com';
fv39='DirectX 7 ÓÎÏ·'; //DirectX 7 Games
fv40='DirectX 8 ÓÎÏ·'; //DirectX 8 Games
fv41='DNS·şÎñÆ÷'; // Domain Name Server (DNS)
fv42='Doom'; 
fv43='Dune 2000'; 
fv44='Dwyco Video Conferencing'; 
fv45='Elite Force'; 
fv46='Everquest'; 
fv47='F-16 ';
fv48='F-22 Lightning 3'; 
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)'; 
fv51='Falcon 4.0'; 
fv52='Fighter Ace II'; 
fv53='Flight Simulator 2000'; 
fv54='Flight Simulator 98'; 
fv55='Freetel'; 
fv56='FTP·şÎñÆ÷'; //FTP Server
fv57='GNUtella'; 
fv58='Golf 1998 Edition'; 
fv59='Golf 1999 Edition'; 
fv60='Golf 2001 Edition'; 
fv61='Go2Call'; 
fv62='Half Life'; 
fv63='Half Life Server'; 
fv64='Heretic II Server'; 
fv65='I76'; 
fv66='Ivisit'; 
fv67='IRC'; 
fv68='IStreamVideo2HPz'; 
fv69='KaZaA'; 
fv70='Kohan Immortal Sovereigns'; 
fv71='LapLink Gold'; 
fv72='Links 2001'; 
fv73='Lotus Notes·şÎñÆ÷'; //Lotus Notes Server
fv74='Mail (POP3)'; 
fv75='Mail (SMTP)'; 
fv76='MechCommander 2.0'; 
fv77='MechWarrior 3'; 
fv78='MechWarrior 4'; 
fv79='Media Player 7'; 
fv80='Midtown Madness'; 
fv81='Midtown Madness 2'; 
fv82='Mig 29'; 
fv83='Monster Truck Madness'; 
fv84='Monster Truck Madness 2'; 
fv85='Motocross Madness'; 
fv86='Motocross Madness 2'; 
fv87='Motorhead Server'; 
fv88='MSN Gaming Zone'; 
fv89='MSN Messenger'; 
fv90='Myth'; 
fv91='Myth II Server'; 
fv92='Myth: The Fallen Lords'; 
fv93='Need for Speed'; 
fv94='NetMech'; 
fv95='Network Time Protocol (NTP)'; 
fv96='News Server (NNTP)'; 
fv97='OKWeb'; 
fv98='OKWin'; 
fv99='Outlaws'; 
fv100='pcAnywhere v7.5'; 
fv101='PhoneFree'; 
fv102='Polycom ViaVideo H.323'; 
fv103='Polycom ViaVideo H.324'; 
fv104='Quake'; 
fv105='Quake II (Client and Server)'; 
fv106='Quake III';
fv107='Red Alert'; 
fv108='Rise of Rome'; 
fv109='Roger Wilco'; 
fv110='Rogue Spear'; 
fv111='Secure Shell Server (SSH)'; 
fv112='Secure Web Server (HTTPS)'; 
fv113='ShoutCast'; 
fv114='SNMP ';
fv115='SNMP Trap'; 
fv116='Speak Freely'; 
fv117='StarCraft'; 
fv118='Starfleet Command'; 
fv119='StarLancer'; 
fv120='SWAT3';
fv121='Telnet·şÎñÆ÷'; //Telnet Server
fv122='The 4th Coming'; 
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"'; 
fv125='Total Annihilation'; 
fv126='Ultima'; 
fv127='Unreal Tournament'; 
fv128='Urban Assault'; 
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2'; 
fv131='WEB·şÎñÆ÷(HTTP) '; // Web Server (HTTP)
fv132='WebPhone 3.0'; 
fv133='Windows 2000 Terminal Server'; 
fv134='X Windows'; 
fv135='Yahoo Pager'; 
fv136='Yahoo Messenger Chat'; 
fv137='Pal Talk'; 
fv138='Real Player 8 Plus'; 
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone'; 
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client';       
fv200='Çå³ı¼ÇÂ¼'; // Clear entry 
Description='ËµÃ÷';  //Description
Inb='ÄÚ´«¶Ë¿Ú';  //Inbound port 
Type='ÀàĞÍ'; //Type
Pipa='Ë½ÈËIPµØÖ·';  // Private IP address 
Pport='Ë½ÈË¶Ë¿Ú'; // Private port 
htop='»Øµ½×îÇ°Ãæ'; // top 
h1='°ïÖú'; //Help
h2='Ãû´Ê½âÊÍ';  //GLOSSARY OF TERMS
h3='<b>¹ÜÀíÔ±</b> ¹ÜÀíÔ±¿ÉÌá¹©ÍøÂçÎ¬»¤·şÎñ¡£¶Ô´ËÂ·ÓÉÆ÷¶øÑÔ£¬¹ÜÀíÕß¿É¸ü¸ÄÂ·ÓÉÆ÷Éè¶¨'; //<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.
h4='<b>ÓÃ»§</b> Ö¸ÔÚ´ËÍøÂçÉÏµÄµçÄÔ£¬Æä¿ÉÊ¹ÓÃÂ·ÓÉÆ÷ËùÌá¹©µÄ¹¦ÄÜ£¬ÀıÈç×Ô¶¯DHCP·şÎñÆ÷¼°·À»ğÇ½'; //<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.
h5='<b>DHCP</b> ¶¯Ì¬Ö÷»úÅäÖÃĞ­Òé. ´ËÍ¨Ñ¶Ğ­Òé¿É×Ô¶¯½«ÍøÂçÖĞÃ¿Ò»Ì¨µçÄÔµÄTCP/IPµØÖ·½øĞĞÅäÖÃ';  //<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.
h6='<b>²¦ºÅÁ¬½Ó</b>  Ê¹ÓÃ¹«ÓÃµç»°½øĞĞÍøÂçÁ¬½Ó'; //<b>Dial-Up</b> A connection which uses the public telephone network.
h7='<b>·Ç¾üÊÂÇø</b> Â·ÓÉÆ÷ÖĞµÄĞéÄâÇøÓò²¢²»ÊÜµ½Â·ÓÉÆ÷·À»ğÇ½µÄ±£»¤¡£ÔÚÍ¬Ò»Ê±¼äÄÚ£¬Ö»ÓĞÒ»Ì¨µçÄÔ¿ÉÒÔ·ÅÔÚ·Ç¾üÊÂÇøÖĞ'; //<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.
h8='<b>DNS·şÎñÆ÷µØÖ·</b>  DNSÖ¸ÍøÓòÃû³ÆÏµÍ³·şÎñÆ÷£¬¿ÉÊ¹ÍøÂçµçÄÔÖ÷»úÏíÓĞÒ»¸öÍøÓòÃû³Æ(ÀıÈç:belkin.com)ÒÔ¼°Ò»¸ö»ò¸ü¶àIPµØÖ·(ÀıÈç:192.34.45.8)¡£Ò»¸öDNS·şÎñÆ÷¿É±£ÓĞÖ÷»úµçÄÔµÄ×ÊÁÏ¿â, ÍøÓòÃû³Æ¼°IPµØÖ·£¬¹Êµ±ÄúĞèÒªÒ»¸öÍøÓòÃû³ÆÊ±£¬Ê¹ÓÃÕß¿ÉÒÔµÃµ½Ò»¸öÕıÈ·µÄIPµØÖ·¡£¼ÒÓÃÍøÂçµçÄÔËùÊ¹ÓÃµÄDNS·şÎñÆ÷µØÖ·Î»ÓÚÄúISP·şÎñ¹©Ó¦ÉÌËùÖ¸¶¨µÄDNS·şÎñÆ÷';  //<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.
h9='<b>DSLµ÷ÖÆ½âµ÷Æ÷</b>  DSLÖ¸Êı×ÖÓÃ»§×¨Ïß£¬Ò»¸öDSLµ÷ÖÆ½âµ÷Æ÷ÊÇÓÃÄúÏÖÓĞµÄµç»°ÏßÒÔ¸ßËÙÀ´´«ËÍ×ÊÁÏ'; //<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.
h10='<b>¶¯Ì¬IP</b>  ¼´Ö¸Ò»¸ö×Ô¶¯ÓÉDHCP·şÎñÆ÷ÉÏ»ñµÃµÄIPµØÖ·'; //<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.
h11='<b>ÒÔÌ«ÍøÂç</b> ÕâÊÇµçÄÔÍøÂç±ê×¼¡£ ÒÔÌ«ÍøÂçÊÇÍ¸¹ıÑ¶ºÅÏßºÍÍøÂç¼¯ÏßÆ÷½øĞĞÁ¬½Ó£¬´«ËÍ×ÊÁÏµÄËÙ¶È¿É¸ß´ïÃ¿Ãë1000Mbits'; //<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).
h12='<b>·À»ğÇ½</b> ·À»ğÇ½ÒâÖ¸Ò»µÀµç×ÓÇ½£¬¿ÉÒÔ×èµ²Î´¾­ÊÚÈ¨µÄÊ¹ÓÃÕß´æÈ¡ÌØ¶¨µµ°¸»òÔÚÍøÂçÖĞµÄµçÄÔ'; //<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.
h13='<b>Firmware</b> ÒâÖ¸°²×°ÔÚ¼ÇÒäÌåÖĞµÄÈíÌå¡£±ØÒªµÄ³ÌĞò½«»á³ÖĞøÔËĞĞ¾¡¹ÜÏµÍ³ÒÑ¾­¹Ø±Õ¡£ÈíÌå±ÈÓ²ÌåÈİÒ×¸ü¸Äµ«±È´¢´æÔÚ´ÅÅÌÉÏµÄÈí¼şÀ´µÃÎÈ¶¨'; //<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.
h14='<b>IPµØÖ·</b> ÒâÖ¸Íø¼ÊÍøÂçĞ­Òé  Ò»¸öIPµØÖ·ÊÇÓÉËÄ×éÒÔ¾äµã·Ö¿ªµÄÊı×ÖËù×é³É£¬¿ÉÓÃÀ´±êÊ¶Ò»¸öÍø¼ÊÍøÂçµÄµçÄÔÖ÷»ú£¬ÀıÈç:192.34.45.8'; //<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.
h15='<b>ISDN</>  ¼¯³É·şÎñÊı×ÖÍøÂç¡£ISDN¿ÉÒÔÍ¬Ê±´«ËÍÉùÒô¡¢Ó°ÏñµÈ×ÊÑ¶£¬ËÙ¶È¸ß´ï128Kps£¬±ÈÒ»°ã¸ßËÙÄ£Äâµ÷ÖÆ½âµ÷Æ÷¸ü¿ì¸üÎÈ¶¨¡£Ğí¶àµçĞÅ¹«Ë¾¶¼Ìá¹©ISDN·şÎñÖ§³Ö'; //<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.
h16='<b>ISP</b>Íø¼ÊÍøÂç·şÎñÌá¹©ÉÌISP¾ÍÊÇ¿ÉÒÔÈÃ¸öÈË¡¢ÆóÒµ»ò×éÖ¯Á¬½Óµ½Íø¼ÊÍøÂçµÄ¹«Ë¾'; //<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations. 
h17='<b>ISPÍø¹ØµØÖ·</b> (²ÎÕÕISPËµÃ÷) ISPÍø¹ØµØÖ·ÊÇ¸øÂ·ÓÉÆ÷µÄIPµØÖ·£¬Ö»ÓĞÔÚÊ¹ÓÃCABLE»òDSLµ÷ÖÆ½âµ÷Æ÷Ê±£¬²ÅĞèÒªÊ¹ÓÃÕâ¸öµØÖ·'; //<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem. 
h18='<b>¾ÖÓòÍøLAN</b>¾ÍÊÇÒ»ÈºÔÚÏà¶Ô¶øÑÔ½ÏĞ¡µÄÇøÓòÄÚ(ÀıÈç:¼ÒÀï»ò°ì¹«ÊÒÄÚ)Ïà»¥Á¬½ÓÔÚÒ»ÆğµÄµçÄÔºÍ×°ÖÃ¡£Äú¼ÒÖĞµÄÍøÂç¾ÍÊÇÒ»¸öLAN'; //<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.
h19='<b>MACµØÖ·</b> MACÒâÖ¸Ã½Ìå´æÈ¡¿ØÖÆ¡£Ã½Ìå´æÈ¡¿ØÖÆµØÖ·¾ÍÊÇÁ¬½Óµ½ÍøÂçÖ®×°ÖÃµÄÓ²ÌåµØÖ·'; //<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.
h20='<b>MTU</b>Ö¸×î´ó´«Êäµ¥Ôª  ¼´Ã¿´Î´«Êä×ÊÁÏµÄ×î´óÖµ'; //<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.
h21='<b>ÍøÂçµØÖ·×ª»»</b>  ´ËÁ÷³Ì¿ÉÈÃÄú¼ÒÖĞµÄËùÓĞµçÄÔ¹²ÏíÒ»¸öIPµØÖ·£¬ÕâÑùÄú¾Í¿ÉÒÔÍ¸¹ı¼ÒÖĞÍøÂçµÄÈÎºÎÒ»²¿µçÄÔ´æÈ¡Íø¼ÊÍøÂçÉÏµÄ×ÊÁÏ£¬¶øÎŞĞèÏòISP¹ºÂòÆäËüµÄIPµØÖ·'; //<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.
h22='<b>Á¬½Ó¶Ë¿Ú</b> Ò»¸öÌØ¶¨µÄÆµµÀÊÇ½éÓÉÌØ¶¨µÄÁ¬½Ó¶Ë¿ÚºÅÂëËù¶¨Òå¡£'; //<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.
h23='<b>ÒÔÌ«ÍøÂçÊ¹ÓÃµÄµã¶ÔµãĞ­Òé</b>  µã¶ÔµãĞ­ÒéÊÇÒ»ÖÖ°²È«µÄ×ÊÁÏ´«Êä·½·¨£¬×îÔçÊÇÓÃÓÚµç»°²¦ºÅÁ¬½Ó¡£PPPoEÊÇÓÃÓÚÒÔÌ«ÍøÂç'; //<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.
h24='<b>PPTPµã¶ÔµãÍ¨Ñ¶Ğ­Òé</b>  ËüÊÇPPP(µã¶ÔµãÍ¨Ñ¶Ğ­Òé)µÄÒ»ÖÖ£¬¿ÉÒÔ½«Ò»¸öÍ¨Ñ¶Ğ­ÒéÑ¹ËõµÄĞí¶àµµ°¸ÈÃÁíÒ»¸öÍ¨Ñ¶Ğ­ÒéÊ¹ÓÃ¡£ÕâÖÖÍ¨Ñ¶¿Æ¼¼¿ÉÈÃTCP/IP×ÊÁÏÔÚ·ÇTCP/IPÍøÂçÉÏ´«Êä¡£PPTP¿ÉÈÃÄúÀûÓÃÍøÂçµ±³ÉÃ½½éÈ¥¼ÓÈë²»Í¬µÄÍøÂç'; //<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.
h25='<b>SNTP¼òÒ×ÍøÂçÊ±¼äÍ¨Ñ¶Ğ­Òé<b>  ¿ÉÒÔÈÃÄúµÄÂ·ÓÉÆ÷ÓëÏµÍ³µÄÊ±¼äÏÔÊ¾Ò»ÖÂ'; //<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.
h26='<b>¶¯Ì¬°ü×´Ì¬Õì²â</b>  SPIÊÇÒ»ÖÖÓÉÄú¼ÒÓÃµÄÍø¹ØÌá¹©µÄÆóÒµÓÃ»§¼¶ÍøÂç°²È«±£»¤¡£Ê¹ÓÃSPI£¬Íø¹Ø¼´¿ÉÏñ·À»ğÇ½Ò»Ñù±£»¤ÄúµÄÍøÂç²»ÊÜºÚ¿ÍÇÖÏ®'; //<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.
h27='<b>¾²Ì¬IP</b> ÒâÖ¸ÓÉÊÖ¶¯ÅäÖÃÇÒ²»»á¸Ä±äµÄIP'; //<b>Static IP</b> An IP address that is manually configured and never changes.
h28='<b>×ÓÍøÑÚÂë</b> ×ÓÍøÑÚÂë¿ÉÎªÄúµÄISPËùÌá¹©µÄĞÅÏ¢£¬ÊÇÓÉËÄ×éºÜÀàËÆIPµØÖ·µÄÊı×ÖËù×é³É¡£ÓÃÀ´½¨Á¢Ê¹ÓÃÔÚÌØ¶¨ÍøÂçµÄIPµØÖ·(Ïà·´Óë¿É±»ÍøÂç±æÊ¶µÄIPµØÖ·£¬Æä±ØĞè±»µçÄÔÍø¿¨Ö¸¶¨¡£'; //<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC). 
h29='<b>´«Êä¿ØÖÆĞ­Òé</b> TCPÊÇ×î³£±»Ê¹ÓÃµÄĞ­Òé TCPÊÇ¸ßÁ¬ÏßĞÔÓë²»ÖĞ¶ÏĞÔ£¬¹ÊÆä¿ÉÒÔÌá¹©ÎÈ¶¨µÄ´«ÊäĞÔÄÜ'; //<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.
h30='<b>TCP/IP</> ÊÇÍ¸¹ıÍøÂç½øĞĞ×ÊÁÏĞÅÏ¢´«ÊäµÄ±ê×¼Ğ­Òé'; //<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.
h31='<b>UDP</b>ÍøÂçÖÕ¶Ë»úĞ­Òé£º´ÓÒ»Ì¨µçÄÔ´«ËÍÒ»¸öÖÕ¶Ë»úÑ¶Ï¢µ½ÁíÍâÒ»Ì¨ÕıÔÚÔË×÷Ó¦ÓÃ³ÌĞòµÄ¼ÆËã»ú¡£²»ÏñÊÇTCP£¬UDPÊÇÍ¸¹ıÎŞÏß´«ÊäÄ£Ê½¶øÄÜ±£Ö¤¾ø¶ÔÎÈ¶¨µÄ´«Êä£¬Õâ¸öÓ¦ÓÃ³ÌĞò±¾Éí±ØĞëÕì²âËùÓĞ´íÎó²¢¼ì²é¿É¿¿µÄ´«ËÍ'; //<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. 
h32='<b>¹ãÓòÍø</b>  Ò»ÏµÁĞ±Ë´ËÏàÁ¬µÄLAN£¬Á¬½ÓĞí¶àÎ»ÓÚ²»Í¬µØµã(ÀıÈç:²»Í¬½¨ÖşÎï¡¢³ÇÊĞ¡¢¹ú¼Ò)ÒòÌØÍø¾ÍÊÇÒ»¸ö¹ãÓòÍøÂç'; //<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.
h33='<b>WAN IPµØÖ·</b> ´ËIPµØÖ·ÓÉISPµÄÂ·ÓÉÆ÷Ö¸¶¨'; //<b>WAN IP Address</b> The IP address assigned to the router by the ISP.
h34='<b>ÎŞÏß¾ÖÓòÍø</b>  Ò»¸öÍ¸¹ıÎŞÏßµÄ·½Ê½Á¬½ÓĞí¶àµçÄÔµÄ¾ÖÓòÍø'; // <b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)
Enabled='ÆôÓÃ'; //Enabled
Disabled='¹Ø±Õ'; // Disabled 
i1='Éè¶¨Ê×Ò³'; // Setup Home 
i2='×´Ì¬'; // Status 
i3='°æ±¾ĞÅÏ¢'; //Version Info
i4='Firmware°æ±¾'; // Firmware Version 
i5='Æô¶¯°æ±¾'; // Boot Version 
i6='Ó²Ìå'; // Hardware 
i7='ĞòºÅ'; // Serial No.
i8='¾ÖÓòÍøÉèÖÃ'; // LAN Settings 
i9='¾ÖÓòÍø/ÎŞÏß¾ÖÓòÍø MACµØÖ·'; // LAN/WLAN MAC 
i9a='¾ÖÓòÍø MACµØÖ·'; // LAN MAC 
i9b='WLANÎŞ·¨Á¬½Ó'; // WLAN Not Available 
i10='IPµØÖ·'; // IP address 
i11='×ÓÍøÑÚÂë'; // Subnet mask 
i12='DHCP·şÎñÆ÷'; // DHCP Server 
i13='ÒòÌØÍøÉèÖÃ'; // Internet Settings 
i14='¹ãÓòÍø MACµØÖ·'; // WAN MAC address 
i15='Á¬½ÓÀàĞÍ'; // Connection Type 
i16='×ÓÍøÑÚÂë'; // Subnet mask 
i17='¹ãÓòÍø IP'; // Wan IP 
i18='È±Ê¡Íø¹Ø'; // Default gateway 
i19='DNSµØÖ·'; // DNS Address 
i20='ÌØĞÔ'; // Features 
i21='ÍøÂçµØÖ·×ª»»'; //NAT  
i22='·À»ğÇ½ÉèÖÃ'; // Firewall Settings 
i23='SSID'; 
i24='°²È«'; //Security
i25='´òÓ¡»ú'; // Printer 
i26='(ÆôÓÃ/½ûÓÃ)'; //(enable/disable)
i27='ÔÚ¸ü¸ÄÈÎºÎÉè¶¨Ç°£¬Äú±ØĞëÏÈµÇÂ¼'; // You will need to log in before you can change any settings.
i28='´òÓ¡·şÎñÆ÷/´òÓ¡»ú'; // Print Server / Printer 
i29='´òÓ¡·şÎñÆ÷Ãû³Æ'; // Print Server Name 
i30='FTP´òÓ¡'; // FTP Printing 
i31='RAW TCP/IP´òÓ¡'; // RAW TCP/IP Printing 
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
langt='ÓïÑÔ'
langc='¼òÌåÖĞÎÄ'
ld1='¾ÖÓòÍø > DHCP'; // LAN > DHCP 
ld2='¾ÖÓòÍø > DHCPÓÃ»§Ãûµ¥'; // LAN > DHCP Client List 
ld3='´ËÒ³ÏÔÊ¾ÄúÍøÂçÖĞÃ¿Ò»Ì¨µçÄÔµÄIPµØÖ·¡¢Ö÷»úÃû³ÆÓëMACµØÖ·¡£Èç¹ûµçÄÔÃ»ÓĞÌØ¶¨µÄÖ÷»úÃû³Æ£¬¿É½«Ö÷»úÃû³ÆÀ¸Ä¿Áô°×¡£Çë°´"ÖØĞÂÕûÀí"À´ÖØĞÂÕûÀíÇåµ¥'; // This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.
ld4='IPµØÖ·'; // IP Address 
ld5='Ö÷»úÃû³Æ'; // Host Name 
ld6='MACµØÖ·'; // MAC Address 
lm1='¾ÖÓòÍø'; // LAN 
lm2='ÄúµÄÂ·ÓÉÆ÷ÊÇÓÉDHCPÖ¸¶¨ÄúÍøÂçÖĞÃ¿Ò»Ì¨µçÄÔµÄIPµØÖ·£¬DHCP·şÎñÆ÷ÔËĞĞÊ±´ó²¿·İÊ±¼ä»áÊ¹ÓÃÔ­³§Éè¶¨Öµ£¬ÈôÄúĞèÒª¸ü¸Ä£¬¿ÉÒÔËæÊ±¸ü¸Ä'; // Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.
lm3='ÄúËùÄÜ¸ü¸ÄµÄÉè¶¨Îª:'; // The changes that you can make are:
lm4='- ¸ü¸ÄÂ·ÓÉÆ÷µÄIPµØÖ·£¬È±Ê¡ÖµÎª£º192.168.2.1'; // - Change the Internal IP address of the Router. The default = 192.168.2.1
lm5='- ¸ü¸Ä×ÓÍøÑÚÂëµØÖ·£¬È±Ê¡ÖµÎª£º255.255.255.0'; //- Change the Subnet Mask. The default = 255.255.255.0
lm6='- ÆôÓÃ/½ûÓÃDHCP·şÎñÆ÷¹¦ÄÜ£¬È±Ê¡ÖµÎª£ºÆôÓÃ'; //- Enable/Disable the DHCP Server Function. Default= ON (Enabled)
lm7='- Ö¸¶¨¿ªÊ¼Óë½áÊøIPµØÖ·Çåµ¥¡£¿ªÊ¼È±Ê¡ÖµÎª2£¬½áÊøÎª100'; //- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100
lm8='- Ö¸¶¨Ò»¸öIPµØÖ·×âÁŞÊ±¼ä£¬È±Ê¡ÖµÎª£ºÓÀÔ¶'; //- Specify the IP address Lease Time. Default= Forever 
lm9='- Ö¸¶¨Ò»¸öµ±µØµÄÍøÓòÃû³Æ£¬È±Ê¡ÖµÎª£ºNONE'; //- Specify a local Domain Name. Default = Belkin 
lm10='ÈôĞè¸ü¸ÄÉè¶¨£¬ÇëÑ¡ÔÚ×ó±ßÀ¸Ä¿µÄ"¾ÖÓòÍøÉèÖÃ"'; // To make changes, click "LAN Settings" on the LAN tab to the left.
lm11='Â·ÓÉÆ÷¸ø³öÄúÒ»¸öÁ¬½Óµ½µçÄÔµÄÓÃ»§ÁĞ±í¡£Òª¼ì²é´ËÁĞ±í£¬Çë°´"¾ÖÓòÍøÉèÖÃ"ÏÂµÄ"DHCPÓÃ»§Çåµ¥"'; // The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP client list" on the LAN tab to the left.
ls1='¾ÖÓòÍø>¾ÖÓòÍøÉèÖÃ'; // LAN > LAN Settings 
ls2='Äú¿ÉÒÔÔÚ´Ë¸ü¸Ä¾ÖÓòÍøÉèÖÃ¡£ÈôÒª¸ü¸ÄÉúĞ§£¬ÇëÑ¡È¡"Ì×ÓÃ±ä¸ü"'; // You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.
ls3='IPµØÖ·'; // IP Address 
ls4='×ÓÍøÑÚÂë'; // Subnet Mask 
ls5='DHCP·şÎñÆ÷'; // DHCP server 
On='ÆôÓÃ'; //On
Off='½ûÓÃ'; // Off 
all='all';
Auto='Auto'; 
langt='ÓïÑÔ';
langc='¼òÌåÖĞÎÄ';
langcl='µ±Ç°ÓïÑÔ';
langal='¿ÉÓÃÓïÑÔ';
ls6='DHCP·şÎñÆ÷ÄÜ¼òÒ×µØÍ¸¹ıÉè¶¨ÍøÂçÖĞµÄÃ¿Ì¨µçÄÔÒ»¸öIPµØÖ·À´½¨Á¢ÍøÂç¡£Äú¿ÉÒÔ²»±Ø¸ü¸ÄÈÎºÎÄÚÈİ¡£'; // The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.
ls7='IPµØÖ·³Ø¿ªÊ¼µØÖ·'; // IP Pool Starting Address 
ls8='IPµØÖ·³Ø½áÊøµØÖ·'; // IP Pool Ending Address 
ls9='×âÁŞÊ±¼ä'; //Lease Time
ls10='ÓÀÔ¶'; // Forever 
ls11='°ëĞ¡Ê±'; // Half Hour 
ls12='Ò»Ğ¡Ê±'; //1 Hour 
ls13='Á½Ğ¡Ê±'; // Two Hours 
ls14='°ëÌì'; //Half Day 
ls15='Ò»Ìì'; //One Day 
ls16='Á½Ìì'; // Two Days 
ls17='Ò»ÖÜ'; // One Week 
ls18='Á½ÖÜ'; // Two Weeks 
ls19='DHCP·şÎñÆ÷ÄÜ¹»ÎªÃ¿Ì¨µçÄÔÔÚÖ¸¶¨µÄÊ±¼äÄÚÔ¤ÁôÌØ¶¨µÄIPµØÖ·'; // The length of time the DHCP server will reserve the IP address for each computer.
ls20='±¾µØÍøÓòÃû³Æ'; // Local Domain Name 
Optional='¿ÉÑ¡ÏîÄ¿'; // Optional 
ls21='ÈÃÄúÎªÄúµÄÍøÂçÃüÃû'; // A feature that lets you assign a name to your network.
lsipm='Äú¿ÉÄÜÉĞÎ´ÊäÈëËùÓĞIPµØÖ·£¬»òÊÇ²¿·İÄúËùÊäÈëµÄÊı×ÖÊÇ²»ÕıÈ·µÄ¡£IPµØÖ·µÄÊı×ÖÓ¦½çÓÚ0ÖÁ255Ö®¼ä¡£'; // Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.
lssm='ÄúËùÊäÈëµÄ×ÓÍøÑÚÂëÊÇ²»ÕıÈ·µÄ'; // The Subnet mask number you entered is invalid.
lsnetm='IPµØÖ·ÖµÓ¦ÓëIPÍø¹ØµØÖ·Ò»ÑùÎ»ÓÚÒ»ÑùµÄ×ÓÍøÑÚÂëÖĞ'; // The IP pool must be in the same subnet as the gateway IP 
lsendm='½áÊøµÄIPµØÖ·±ØĞë´óÓÚ¿ªÊ¼µÄIPµØÖ·'; // The ending IP address must be larger than the starting IP address.
lspoolm='¾ÖÓòÍøµÄIPµØÖ·²»ÄÜÀ´×ÔÓÚDHCPµØÖ·³Ø'; // The LAN IP address can not be in the DHCP address pool.
lsipm2='²»ÕıÈ·µÄ¾ÖÓòÍøIPµØÖ·£¬×îºóÒ»¸öÊı×Ö²»¿ÉÎª0»ò255'; // Invalid Lan Ip address, the last number cannot be 0 or 255
lsipm3='²»ÕıÈ·µÄ¾ÖÓòÍøIPµØÖ·£¬×îºóÒ»¸öÊı×Ö²»¿ÉÎª127»ò0'; // Invalid Lan Ip address, the first number cannot be 127 or 0
lsldnm='²»ÕıÈ·µÄÍøÓòÃû³Æ'; // Invalid Local Domain Name 
lsipm4='ÄúÊäÈëµÄIPµØÖ·²»ÕıÈ·'; // The IP that you entered is invalid 
lsipalert='ÇëÊÖ¶¯¸ü¸Ää¯ÀÀÆ÷µØÖ·ÊäÈëÀ¸µ½ĞÂµÄ¾ÖÓòÍøIPµØÖ·'; // Please change the Address entry box in the status bar of your browser manually to the new lan address 
lsipm5='ÄúËùÑ¡µÄIPµØÖ·Ó¦Îªnon-routable£¬IP.\n  192.168.x.x (x¿ÉÒÔ½çÓÚ0ºÍ255.) \n10.x.x.x (x¿ÉÒÔ½çÓÚ0ºÍ255.)\n172.y.x.x (y¿ÉÎª½çÓÚ16ºÍ31µÄÈÎºÎÊı×Ö, ¶øÇÒx ¿É½çÓÚ0ºÍ255.)'; // The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)
lsipc='ÄúÈ·¶¨Òª¸ü¸Ä¾ÖÓòÍøIPµØÖ·Âğ£¿'; // Do you really wish to change the LAN IP address?
lo1='µÇÂ¼'; // Login 
lo2='ÔÚÄú×ö³öÈÎºÎ¸ü¸ÄÇ°£¬ÄúĞèÒªÓÃÒ»¸öÃÜÂëµÇÂ¼¡£Èç¹ûÄúÉĞÎ´Éè¶¨Äú¸öÈËµÄÃÜÂë£¬Çë½«´ËÀ¸Áô°×È»ºóÑ¡È¡'; // Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit."
lo3='ÃÜÂë'; // Password 
lo4='È±Ê¡Öµ£½Áô°×'; // Default = leave blank 
Clear='Çå³ı'; // Clear 
Submit='Ìá½»'; // Submit 
le1='Belkin | µÇÂ¼´íÎó'; // Belkin | Login Error 
lerror='µÇÂ¼´íÎó';  // Login Error !!
Utilities='¹¤¾ß³ÌĞò > '; // Utilities >
rs1='ÖØĞÂÆô¶¯³É¹¦'; // Reset Successfully 
rs2='µ±µçÔ´µÆÍ£Ö¹ÉÁË¸Ê±±íÊ¾ÖØĞÂÆô¶¯ÒÑ¾­Íê³É'; //The reset is complete when the power light stops blinking.
rs3='Â·ÓÉÆ÷ÕıÔÚÆô¶¯ÖĞ'; // Router is rebooting 
rs4='ËùÊ£ÃëÊı'; // seconds remaining.
rf1='»Ö¸´³ö³§ÉèÖÃÖµ³É¹¦'; // Restore factory defaults Successfully 
rf2='µ±µçÔ´µÆÍ£Ö¹ÉÁË¸Ê±±íÊ¾ÖØĞÂ»Ö¸´ÒÑ¾­Íê³É'; // The restore is complete when the power light stops blinking.
rss1='»Ö¸´Éè¶¨³É¹¦'; // Restored Settings Successfully 
rss2='µ±µçÔ´µÆÍ£Ö¹ÉÁË¸Ê±±íÊ¾ÖØĞÂ»Ö¸´ÒÑ¾­Íê³É'; // The restored settings is complete when the power light stops blinking.
ufy1='»Ö¸´³ö³§ÉèÖÃ'; // Restore factory defaults 
ufy2='Ê¹ÓÃ´ËÑ¡Ïî¿ÉÒÔ½«ËùÓĞÉè¶¨»Ö¸´ÎªÔ­³§Éè¶¨Öµ¡£ÎÒÃÇ½¨ÒéÄúÔÚ»Ö¸´ËùÓĞÄ¬ÈÏÖµÇ°£¬ÇëÏÈ´¢´æÄúµÄÉè¶¨Öµ¡£ÈôÒª»Ö¸´Ô­³§Éè¶¨Öµ£¬Çë°´ÏÂ·½µÄ"»Ö¸´Ä¬ÈÏÖµ"¼ü'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.
ufy3='¾¯¸æ: ÄúËùÓĞµÄÉè¶¨¶¼»áÏûÊ§£¬\nÄúÈ·¶¨Òª¼ÌĞøÂğ?'; // WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?
ufy4='»Ö¸´Ä¬ÈÏÖµĞèÒª¾ÅÊ®ÃëµÄÊ±¼ä¡£Çë²»ÒªÔÚ¹ı³ÌÖĞ¹Ø±ÕµçÔ´'; // Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.
ufy5='½«²»»á»Ö¸´Ô­³§Ä¬ÈÏÖµ¡£Ã»ÓĞÈÎºÎÉè¶¨»áÏûÊ§¡£'; // Will Not Restore Factory Defaults.No Settings Will be lost!
ufy='»Ö¸´Ä¬ÈÏÖµ'; // Restore Defaults 
ufe1='¹¤¾ß³ÌĞò>Firmware¸üĞÂ'; // Utilities > Firmware update 
ufe2='ÓĞÊ±±´¶û½ğ»á·¢²¼ĞÂ°æ±¾µÄÈíÌå¡£¸üĞÂ°æµÄÈíÌå°üº¬ÁË¿ÉÒÔĞŞ¸ÄÏÖÓĞÎÊÌâµÄ²¹¶¡³ÌĞò¡£Çë°´ÏÂ·½°´¼ü¼ì²éÊÇ·ñÓĞĞÂµÄÈíÌå¸üĞÂ°æ±¾'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.
ufe3='×¢Òâ: ÔÚ¸üĞÂÈíÌå°æ±¾Ç°£¬ÇëÏÈ´¢´æÄúÏÖÔÚµÄÉè¶¨'; // NOTE: Please backup your current settings before updating to a new version of firmware.
ufe4='Çë°´´Ë'; //Click Here 
ufe5='µ½ÕâÀï´¢´æ/±¸·İÏÖÓĞÉè¶¨'; // to go to the Save/Backup current settings page.
ufe6='°´´Ë»ñµÃĞÂµÄFirmware°æ±¾'; // Check For New Firmware Version >
ufe7='¼ì²éÈíÌå'; // Check Firmware 
ufe8='¸üĞÂÈíÌå'; // Update Firmware >
Update='¸üĞÂ'; // Update 
ufe9='ÇëÖ¸¶¨¸üĞÂµµ°¸µÄÎ»ÖÃ¡£ÇëÊäÈëµµ°¸Â·¾¶ºÍµµ°¸Ãû³Æ¡£°´"ä¯ÀÀ"À´Ñ°ÕÒµµ°¸Î»ÖÃ'; // Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.
ufe10='ÄúÈ·¶¨ÄúÒª¼ÌĞø¸üĞÂÂğ?'; // Are you sure you want to continue with upgrading?
ufe11='ÔÚÉı¼¶µÄ×îºó£¬Â·ÓÉÆ÷´óÔ¼ÔÚÒ»·ÖÖÓÄÚÔİÊ±²»»áÓĞÏìÓ¦¡£ÕâÊÇºÜÕı³£µÄÏÖÏó£¬Çë²»Òª¹Ø±ÕµçÔ´»òÖØĞÂÆô¶¯'; // At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.';
um1='¸ÄÆÁÄ»ÄÜÈÃÄúÊ¹µÃ²»Í¬µÄ²ÎÊıÓëÌØ¶¨µÄ¹ÜÀí¹¦ÄÜĞ­µ÷ÔË×÷';// This screen lets you manage different parameters of the Router and perform certain administrative functions.
um2='¼Ò³¤¿ØÖÆ'; // Parental Control 
um3='±´¶û½ğµÄParental ControlÄÜ±£»¤ÄúºÍÄúµÄº¢×ÓÔ¶Àë²»½¡¿µµÄÍøÂçÄÚÈİ'; // Belkin\'s Parental Control protects you and your kids from objectionable content on the web.
um4='±´¶û½ğµÄParental ControlÊÇÄúÉè¶¨µÄ¹ıÂËÍø¡£ÏÖÔÚÄú¿ÉÒÔºÍÄúµÄº¢×ÓÒ»Í¬ä¯ÀÀÍøÂç£¬Äú²»ÔÚÊ±Ò²¿É·ÅĞÄÈÃº¢×Óä¯ÀÀ<br>&nbsp;'; // Belkin\'s Parental Control is the filter you set up. Now you can surf the net with your kids even when you are not there.<br>&nbsp;
um5='ÖØĞÂÆô¶¯Â·ÓÉÆ÷'; // Restart Router 
um6='ÓĞÊ±ºó²»Ò»¶¨ĞèÒªÖØĞÂÆô¶¯Â·ÓÉÆ÷¡£µ±Â·ÓÉÆ÷¿ªÊ¼²»Õı³£ÔË×÷Ê±£¬ÖØĞÂÆô¶¯²»»áÉ¾³ıÈÎºÎÄúµÄÅäÖÃÉè¶¨'; // Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.
um7='»Ö¸´³ö³§ÉèÖÃ'; // Restore Factory Defaults 
um8='Ñ¡ÓÃ´ËÑ¡ÏîÄÜÈÃÄú½«ËùÓĞÉè¶¨»Ö¸´Îª³ö³§Éè¶¨Öµ¡£½¨ÒéÄúÏÈ±¸·İÄúµÄÉè¶¨ÔÙ»Ö¸´ËùÓĞÄ¬ÈÏÖµ'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.
um9='±£´æ/±¸·İÏÖÔÚÉèÖÃ'; // Save/Backup Current Settings 
um10='Äú¿ÉÊ¹ÓÃ´Ë¹¦ÄÜ´¢´æÄúÄ¿Ç°µÄÅäÖÃÉè¶¨¡£±£´æÄúµÄÅäÖÃÉè¶¨¿ÉÒÔÈÃÄúÔÚÉÔºó¸ü¸Ä»ò²»Ğ¡ĞÄÒÅÊ§Ê±»Ö¸´¡£ÎÒÃÇ½¨ÒéÄúÔÚFirmware¸üĞÂÇ°ÏÈ±¸·İÄúµÄÅäÖÃÉè¶¨Öµ¡£'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
um11='»Ö¸´ÏÈÇ°±£´æµÄÉèÖÃÖµ'; // Restore Previous Saved Settings 
um12='´ËÑ¡ÏîÄÜÈÃÄú»Ö¸´ÏÈÇ°Ëù´¢´æµÄÅäÖÃÉè¶¨'; // This option will allow you to restore a previously saved configuration.
um13='Firmware¸üĞÂ'; // Firmware Update 
um14='ÓĞÊ±±´¶û½ğ»á·¢²¼ĞÂ°æ±¾µÄFirmware¡£¸üĞÂ°æµÄFirmware°üº¬ÁË¿ÉÒÔĞŞ¸ÄÏÖÓĞÎÊÌâµÄĞÅÏ¢¡£'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed.
um15='ÏµÍ³Éè¶¨'; // System Settings 
um16='Äú¿ÉÒÔÔÚÏµÍ³Éè¶¨Ò³ÃæÉè¶¨¹ÜÀíÕßÃÜÂë'; // The System Settings page is where you can enter a new administrator password 
um17='Éè¶¨Ê±Çø£¬¿ªÆôÔ¶³Ì¹ÜÀí²¢¿ªÆô»ò¹Ø±ÕNAT¹¦ÄÜ'; //, set the time zone, enable remote management and turn on and off the NAT function 
um18='Â·ÓÉÆ÷µÄ'; // of the Router.
upc1='¹¤¾ß³ÌĞò > ¼Ò³¤¿ØÖÆ'; // Utilities > Parental Control 
upc2='±´¶û½ğ¡°¼Ò³¤¿ØÖÆ¡±±£»¤ÄúºÍÄúµÄº¢×ÓÓëÔ±¹¤Ô¶Àë²»½¡¿µµÄÍøÂçÄÚÈİ¡£¼Ò³¤¿ØÖÆ¿ÉÒÔÔ¤ÏÈÅäÖÃ²¢×èµ²²»½¡¿µµÄÄÚÈİ¡£Äú¿ÉÒÔÇáÒ×µØÑ¡Ôñ½«ÈÎºÎÍøÕ¾ÓÀÔ¶×èµ²»òÊÇÓÀÔ¶ÔÊĞí'; // Belkin\'s Parental Control protects you and your children/employees from objectionable content on the web. Parental Control comes pre-configured to block many types of web content, but is custom configurable to be more or less restrictive. Any web site can easily be set to be either, always blocked, or always allowed.
upc3='ÄúÏÖÔÚParental Control¶¨ÖÆ×´¿öÎª'; // Your Parental Control Subscription is 
upc4='Î´ÆôÓÃ'; // UN-ACTIVATED 
upc5='ÎŞ·¨ÆôÓÃ'; // NOT-ACTIVATED 
upc6='ÆôÓÃ'; // ACTIVATED 
upc7='Çë°´´ËÍ£Ö¹Parental ControlÂ¼Èë'; // To stop PARENTAL CONTROL signup prompts, Click here:
upc8='¹ıÆÚ'; // EXPIRED 
upc9='ÄúµÄ¶¨ÖÆ½«ÔÚXXXµ½ÆÚ'; // Your subscription will expire in 
days='ÌìÊı'; //days 
upc10='ÕÊºÅ×ÊÁÏ'; // Account information 
Advanced='½ø½×'; // Advanced 
Apply='Ó¦ÓÃ'; // Apply 
upc11='ÖØĞÂÕûÀíÕÊ»§ĞÅÏ¢'; // Refresh Account information 
upc12='±¨¸æ'; // Reporting 
upc13='ÄúÏÖÔÚ'; // You are currently 
upc14='Ìá½»µ½±¨¸æ'; // subscribed to reporting.
not='²»'; // not 
upc15='°´´Ë¼ì²é±¨¸æÑù±¾'; // Click here to see a sample of how reporting works.
upc16='±¨¸æÑù±¾'; // Reporting Sample 
upc17='°´´ËÉêÇë±¨¸æ'; //Click here to signup for reporting.
upc18='ÏÖÔÚ¶¨ÖÆ'; // Subscribe Now 
upc19='°´´Ë²é¿´ÄúµÄ±¨¸æ'; // Click here to view your report.
upc20='¼ì²é±¨¸æ'; // View Report 
upc21='¼Ò³¤¿ØÖÆ×´Ì¬'; // Parental Control Status 
upc22='½«Parental Control¹ıÂË¿ª·Å»ò¹Ø±Õ'; // Turn Parental Control Filter ON and OFF.
upc23='ÍøÂç·À»ğÇ½ÏÖÔÚÕı¹¤×÷'; // Web Filter is currently 
ON='ÆôÓÃ'; // ON 
OFF='½ûÓÃ'; // OFF 
pwd='ÃÜÂë'; // Password 
upc24='µç×ÓÓÊ¼şÌáĞÑ'; // e-mail Notification 
upc25='Èç¹û¡°¼Ò³¤¿ØÖÆ¡±ÎŞĞ§ÇëÒÔµç×ÓÓÊ¼şÍ¨ÖªÎÒ'; // Notify me by e-mail if the Parental Control is overridden.
upc26='µç×ÓÓÊ¼şÕıÔÚ¹¤×÷'; // Email is currently 
upc27='ĞŞ¸Ä¹æ¶¨'; // Modify policy 
upc28='¼ì²éÄúParental ControlÉè¶¨ÖµµÄ¹æÔò£¬Çë°´´Ë'; // To view or change Default Policies for your Parental Control, click here';
Modify='ĞŞ¸Ä'; // Modify 
upc29='¼Ò³¤¿ØÖÆÉêÇë'; // Parental Control Sign-up 
upc30='±´¶û½ğµÄ¡°¼Ò³¤¿ØÖÆ¡±ÄÜ±£»¤ÄúºÍÄúµÄº¢×ÓÔ¶ÀëÍøÂçÉÏ²»¼ÑµÄÄÚÈİ¡£±´¶û½ğ¡°¼Ò³¤¿ØÖÆ¡±ÊÇÓÉÄúËùÉè¶¨µÄ·À»ğÇ½ £¬ÏÖÔÚÄú¿ÉÒÔËæÒâä¯ÀÀÍøÂç£¬ÉõÖÁ²»Ğèµ£ĞÄÄúµÄº¢×Óµ¥¶Àä¯ÀÀ'; // If you wish to sign up for Belkin\'s Parental Control feature, please click the button below.
upc31='ÄúÏÖÔÚ²¢ÎŞ¶¨ÖÆ¡°¼Ò³¤¿ØÖÆ¡±·şÎñ'; // You are currently <b>NOT</b> subscribed to the Parental Control service.
upc32='¸üĞÂ¡°¼Ò³¤¿ØÖÆ¡±'; // Parental Control Renew 
upc33='ÄúµÄ¶¨ÖÆ¼´½«¹ıÆÚ£¬Çë¸üĞÂÄúµÄ¶¨ÖÆ'; // Your subscription is close to the expiration date. Please click to renew your subscription.
upc34='ÂíÉÏ¸üĞÂ'; // Renew Now 
upc35='URLÊÇ¿Õ°×µÄ'; // url is empty 
upa1='¹¤¾ß³ÌĞò&gt; ¡°¼Ò³¤¿ØÖÆ¡±ÕÊ»§×ÊÑ¶'; // Utilities &gt; Parental Control Account Information 
upa2="Äú¿ÉÒÔ¸ü¸Ä¡°¼Ò³¤¿ØÖÆ¡±ÓÃ»§ĞÅÏ¢ÀıÈç: ¡°¼Ò³¤¿ØÖÆ¡±ÌáÊ¾µç×ÓÓÊ¼şÓë¡°¼Ò³¤¿ØÖÆ¡±¹ÜÀíÔ±ÃÜÂë"; // You can change your Parental Control user information here such as the Parental Control notification e-mail address and the Parental Control administrator password.
upa3='¸ü¸Ä ¡°¼Ò³¤¿ØÖÆ¡±ÌáÊ¾µç×ÓÓÊ¼şµØÖ·'; // Change Parental Control notification e-mail address.
upa4='ÄúÏÖÔÚÊ¹ÓÃµÄµç×ÓÓÊ¼şµØÖ·'; // your current e-mail address 
upa5='ÊäÈëÄúĞÂµÄµç×ÓÓÊ¼şµØÖ·'; // Enter your new e-mail address 
upa6='ÔÙ´ÎÈ·ÈÏÄúµÄĞÂµÄµç×ÓÓÊ¼şµØÖ·'; // Re-enter your new e-mail address 
upa7='¸ü¸ÄÄú¡°¼Ò³¤¿ØÖÆ¡±µÄ¹ÜÀíÔ±ÃÜÂë'; // Change Parental Control Administrator Password 
upa8='ÊäÈëÄúµÄĞÂÃÜÂë'; // Enter your new password 
upa9='ÔÙ´ÎÊäÈëÄúµÄĞÂÃÜÂë'; // Re-enter your new password 
upa14='µç×ÓÓÊ¼şµØÖ·ÎŞĞ§';
Change='¸ü¸Ä'; // Change 
Stop='Ó¦ÓÃ'; // Apply 
upad1='¹¤¾ß³ÌĞò &gt; ¼Ò³¤¿ØÖÆ½ø½×ÉèÖÃÖµÎŞĞ§'; // Utilities &gt; Parental Control Advanced Settings 
upad2='Belkin ¡°¼Ò³¤¿ØÖÆ¡±ĞèÒªCerberian(ÎÒÃÇµÄ»ï°é)ÍøÂçä¯ÀÀÈËÊı¼ÆÊıÆ÷¡£ÔÚÒ»°ãµÄ×´¿öÖ®ÏÂ£¬»ØÓ¦Ê±¼ä»áÉÙÓÚÒ»Ãë£¬ËùÒÔ²»»áÓĞÑÓ³Ù¡£È»¶ø£¬µ±ÄúÏòCerberianÒªÇóÒ»¸öºÜÉÙÈËä¯ÀÀµÄÍøÒ³Ê±£¬ËûÃÇ»á²»¶Ï¸üĞÂ¼ÆÊıÆ÷£¬Õâ¿ÉÄÜ»á»¨ÊıÃëµÄÊ±¼ä£¬È¡¾öÓÚÍøÕ¾ÏÂÔØµÄÊ±¼ä¡£'; // Belkin's Parental Control requires an Internet rating response from Cerberian (our partner) for every web site requested. Normally, response time is less than 1 second causing virtually no delay. However when you request a rare site that is not in their data base, they rate the site dynamically, which can take a few seconds depending on how fast the site loads. If the response time is slower than the time interval below, PARENTAL CONTROLS can be configured to either: Allow all sites on timeouts, or Block all sites on timeouts.
Timeout='³¬Ê±'; // Timeout 
upad3='³¬Ê±µÈ´ıÊ±¼ä'; // Timeout after waiting 
upad4='ĞèÊıÃëµÈ´ı»ØÓ¦'; // seconds for a response 
upad5='³¬Ê±·¢ÉúºóµÄÈ±Ê¡ĞĞÎª'; // Default behavior when timeout occurs 
upad6='Éè¶¨µ±³¬¹ıµÇÂ¼Ê±¼äÄ¬ÈÏÖµ£¬Â·ÓÉÆ÷»á¸ù¾İ´ËÉè¶¨×èµ²»òÔÊĞíËùÓĞä¯ÀÀµÄÍøÒ³'; // Setting the default behavior when timeout occurs, the router will block/pass all the web surfing according to the setting.
upad7='×¼ĞíËùÓĞÍøÒ³³¬Ê±'; // Allow all sites on timeout.
upad8='×èµ²ËùÓĞÍøÒ³³¬Ê±'; // Block all sites on timeout.
upr1='¹¤¾ß³ÌĞò > ¼Ò³¤¿ØÖÆ ÕÊ»§¸üĞÂ'; // Utilities > Parental Control Account Refresh 
upr2='µ±ÄúµÄ¡°¼Ò³¤¿ØÖÆ¡±¶¨ÖÆ¹¦ÄÜ²»ÕıÈ·Ê±£¬<br>Äú²ÅĞèÒª´Ë¹¦ÄÜ¡£Çë°´ÏÂ´Ë¼ü£¬Â·ÓÉÆ÷½«»áÏÂÔØ»òÖØĞÂÕûÀíËùÓĞ±´¶û½ğÕÊ»§ĞÅÏ¢¡£<br>ÓûÖØĞÂÕûÀíÄúµÄ¡°¼Ò³¤¿ØÖÆ¡±Â·ÓÉÆ÷ÕÊ»§ĞÅÏ¢£¬Çë°´"ÖØĞÂÕûÀí"'; // This function is only necessary if your PARENTAL CONTROL subscription information is not correct.<br>By pressing this button, the router will download/refresh all account information from Belkin.<br>To refresh your PARENTAL CONTROL router account information, click Refresh:
uprev1='¹¤¾ß³ÌĞò > »Ö¸´Ö®Ç°´¢´æµÄÉè¶¨'; // Utilities > Restore previous saved settings 
uprev2='Õâ¸öÑ¡Ôñ¿ÉÒÔ»Ö¸´ÄúÖ®Ç°µÄÅäÖÃÖµ'; // This option will allow you to restore a previously saved configuration.
Restore='»Ö¸´'; // Restore 
uprev3='ÊäÈëº¬ÓĞ±¸·İÉèÖÃÖµµÄµµ°¸Ãû³Æ'; // Type the name of the file that contains the backup settings.
uprev4='ÄúÒª¼ÌĞø»Ö¸´ÉèÖÃÖµÂğ£¿'; // Do you want to continue and restore settings?
uprev5='ÔÚ»Ö¸´Éè¶¨ºó£¬Â·ÓÉÆ÷¿ÉÄÜÔÚÒ»·ÖÖÓÄÚÔİÊ±²»»áÓĞ»ØÓ¦£¬\n\nÕâÊÇºÜÕı³£µÄÏÖÏó£¬ÇëÎğ¹Ø±ÕÂ·ÓÉÆ÷µçÔ´'; // After settings are restored, the Router may not respond\n to commands for as long as one minute.\n\nThis is normal. Do not power down the Router during this time.
ur1='¹¤¾ß³ÌĞò > ÖØÆôÂ·ÓÉÆ÷'; // Utilities > Restart Router 
ur2='µ±Â·ÓÉÆ÷¿ªÊ¼²»Õı³£ÔË×÷Ê±£¬ÓĞÊ±ºòÄú¿ÉÄÜ±ØĞëÖØĞÂÆô¶¯Â·ÓÉÆ÷¡£ÖØĞÂÆô¶¯²¢²»»áÊ¹ÄúµÄÉèÖÃÉè¶¨ÖµÏûÊ§£¬&quot;Çë°´ÏÂ·½°´¼ü&quot;ÖØĞÂÆô¶¯'; // Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restartting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.
ur3='ÖØĞÂÆô¶¯'; // Restart Router 
ur4='ÄúÈ·¶¨ÒªÖØĞÂÆô¶¯Âğ£¿ÖØĞÂÆô¶¯²»»á¸ü¸ÄÄúµÄÅäÖÃ'; // Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.
ur5='Â·ÓÉÆ÷ĞèÒªÁùÊ®ÃëµÄÊ±¼äÖØĞÂÆô¶¯¡£ÔÚÖØĞÂÆô¶¯Íê³ÉÇ°ÇëÎğ½«µçÔ´¹Ø±Õ'; // Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.
usave1='¹¤¾ß³ÌĞò > ±£´æ/±¸·İÏÖÔÚµÄÅäÖÃÖµ'; // Utilities > Save/Backup current settings 
usave2='Äú¿ÉÒÔÏÖÔÚ´¢´æÄúµÄÅäÖÃ'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
Save='±£´æ'; //Save
usys1='¹¤¾ß³ÌĞò > ÏµÍ³Éè¶¨'; // Utilities > System settings 
usys2='¹ÜÀíÕßÃÜÂë'; // Administrator Password: 
usys3='´ËÂ·ÓÉÆ÷²¢Î´Éè¶¨ÈÎºÎÃÜÂë£¬ÎªÁËÈ·±£°²È«£¬Äú¿ÉÒÔÔÚ´ËÉè¶¨Ò»×éÃÜÂë'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
usys4='ÊäÈëÏÖÔÚµÄÃÜÂë'; // Type in current Password 
usys5='ÊäÈëĞÂµÄÃÜÂë'; // Type in new Password 
usys6='È·ÈÏĞÂµÄÃÜÂë'; // Confirm new Password 
usys7='µÇÂ¼³ÖĞøÊ±¼ä'; // Login Timeout 
usys8='1-99·ÖÖÓ'; //(1-99 minutes)
usys9='Ê±¼äºÍÊ±Çø'; // Time and Time Zone: 
January='Ò»ÔÂ'; February='¶şÔÂ'; March='ÈıÔÂ'; April='ËÄÔÂ'; May='ÎåÔÂ'; June='ÁùÔÂ'; July='ÆßÔÂ'; August='°ËÔÂ'; September='¾ÅÔÂ'; October='Ê®ÔÂ'; November='Ê®Ò»ÔÂ'; December='Ê®¶şÔÂ';
usys10='ÇëÉè¶¨ÄúËùÔÚµÄÊ±Çø¡£Èç¹ûÄúÔÚÏÄÊ±ÖÆÊ±Çø(Ö¸ÔÚÏÄ¼¾°Ñ±ê×¼Ê±¼ä²¦Ôç1Ğ¡Ê±µÄÊ±Çø)£¬Çë°´´Ë´¦'; // Please set your time Zone. If you are in an area that observes daylight saving check this box.
usys11='Ê±Çø'; // Time Zone 
usys12='(GMT-12:00) ¹Ï¼ÓÁÖµº'; //(GMT-12:00) Enewetak, Kwajalein 
usys13='(GMT-11:00) ÈøÄ¦ÑÇ'; //(GMT-11:00) Midway Island, Samoa 
usys14='(GMT-10:00) ÏÄÍşÒÄ'; // Hawaii 
usys15='(GMT-09:00) ÃÀ¹ú°¢À­Ë¹¼ÓÖİ'; // Alaska 
usys16='(GMT-08:00) Ì«Æ½ÑóÊ±Çø(ÃÀ¹úÓë¼ÓÄÃ´ó) '; // Pacific Time (US & Canada); Tijuana 
usys17='(GMT-07:00) ÃÀ¹úÑÇÀúÉ£ÄÇÖİ'; // Arizona 
usys18='(GMT-07:00) ÃÀ¹úÓë¼ÓÄÃ´óÉ½Çø'; // Mountain Time (US & Canada)
usys19='(GMT-06:00) ÃÀ¹úÓë¼ÓÄÃ´óÖĞ²¿'; // Central Time (US & Canada)
usys20='(GMT-06:00) ÃÀ¹úÓë¼ÓÄÃ´óÖĞ²¿'; //Mexico City, Tegucigalpa
usys21='(GMT-06:00) Èø¿ËË¹ÆäÍòÊ¡'; //Saskatchewan
usys22='(GMT-05:00) ÀûÂí(ÃØÂ³Ê×¶¼) '; // Bogota, Lima, Quito 
usys23='(GMT-05:00) ÃÀ¹úÓë¼ÓÄÃ´ó¶«²¿'; // Eastern Time (US & Canada)
usys24='(GMT-05:00) ÃÀ¹úÓ¡µÚ°²ÄÉÖİ'; // Indiana (East)
usys25='(GMT-04:00) ´óÎ÷Ñó(¼ÓÄÃ´ó)'; // Atlantic Time (Canada)
usys26='(GMT-04:00) ¿¨À­¿¨Ë¹(Î¯ÄÚÈğÀ­Ê×¶¼)£¬À­°ÍË¹(²£ÀûÎ¬ÑÇÖ®Ê×¶¼) '; // Caracas, La Paz 
usys27='(GMT-04:00) Ê¥µØÑÇ¸ç(ÖÇÀûÊ×¶¼) '; //Santiago 
usys28='(GMT-03:00) Å¦·ÒÀ¼(¼ÓÄÃ´ó¶«º£°¶µÄµºÓì) '; // Newfoundland 
usys29='(GMT-03:00) °ÍÎ÷'; // Brasilia 
usys30='(GMT-03:00) ²¼ÒËÅµË¹°¬ÀûË¹(°¢¸ùÍ¢Ê×¶¼)£¬ÇÇÖÎ³Ç(ÄÏÃÀ¸ÇÑÇÄÇ¹²ºÍ¹úÊ×¶¼) '; // Buenos Aires, Georgetown 
usys31='(GMT-02:00) ´óÎ÷ÑóÖĞ²¿'; // Mid-Atlantic 
usys32='(GMT-01:00) ÑÇËÙ¶ûÈºµº'; // Azores, Cape Verde Is.
usys33='(GMT) ¿¨Èø²¼À¼¿¨ÊĞ(Ä¦Âå¸çº£±õ)£¬ÃÉÂŞÎ¬ÑÇ(Àµ±ÈÈğÑÇÊ×¶¼) '; // Casablanca, Monrovia 
usys34='(GMT) ¸ñÁÖÍşÖÎÊ±¼ä£º¶¼²®ÁÖ¡¢°®¶¡±¤'; // Greenwich Mean Time: Dublin, Edinburgh 
usys35='(GMT) ¸ñÁÖÍşÖÎÊ±¼ä£ºÀïË¹±¾¡¢Â×¶Ø'; // Greenwich Mean Time: Lisbon, London 
usys36='(GMT+01:00) °¢Ä·Ë¹ÌØµ¤¡¢°ØÁÖ¡¢²®¶÷¡¢ÂŞÂí'; // Amsterdam, Berlin, Bern, Rome 
usys37='(GMT+01:00) Ë¹µÂ¸ç¶ûÄ¦¡¢Î¬Ò²ÄÉ¡¢±´¶û¸ñÀÕ(ÄÏË¹À­·òÊ×¶¼) '; // Stockholm, Vienna, Belgrade 
usys38='(GMT+01:00) ²®À­µÚË¹À­Íß(½İ¿Ë)¡¢²¼´ïÅåË¹(ĞÙÑÀÀûÊ×¶¼)¡¢Â¬²¼¶ûÑÅÄÇ(Ë¹ÂåÎ¬ÄáÑÇ¹²ºÍ¹úÊ×¶¼) '; // Bratislava, Budapest, Ljubljana 
usys39='(GMT+01:00) ²¼À­¸ñ¡¢²¼Â³Èû¡¢¸ç±¾¹ş¸ù¡¢ÂíµÂÀï'; // Prague,Brussels, Copenhagen, Madrid 
usys40='(GMT+01:00) °ÍÀè¡¢Î¬¶ûÅ¦Ë¹(Á¢ÌÕÍğ¹²ºÍ¹úÊ×¶¼)¡¢ÈûÀ­Ò®·ğ(²£×ÈÄáÑÇÔó¸çÎ¬ÄÇ¹²ºÍ¹úÊ×¶¼)¡¢Ê·¿ÉÆÕÁĞ(ÂíÆä¶Ù¹²ºÍ¹úÊ×¶¼) '; // Paris, Vilnius, Sarajevo, Skopje 
usys41='(GMT+01:00) »ªÉ³(²¨À¼Ê×¶¼)¡¢Ôı¸ñÀ­²¼(¿ËÂŞ°£Î÷ÑÇ¹²ºÍ¹úÊ×¶¼) '; // Sofija, Warsaw, Zagreb 
usys42='(GMT+02:00) ÑÅµä¡¢ÒÁË¹Ì¹±¤¡¢Ã÷Ë¹¿Ë(°×¶íÂŞË¹Ê×¶¼) '; // Athens, Istanbul, Minsk 
usys43='(GMT+02:00) ²¼¼ÓÀÕË¹ÌØ(ÂŞÂíÄáÑÇÊ×¶¼) '; // Bucharest 
usys44='(GMT+02:00) ¿ªÂŞ'; // Cairo 
usys45='(GMT+02:00) ÆÕÀûÍĞÀïÑÇ(ÄÏ·ÇĞĞÕşÊ×¶¼) '; // Harare, Pretoria 
usys46='(GMT+02:00) ºÕ¶ûĞÁ»ù¡¢Àï¼Ó(À­ÍÑÎ¬ÑÇ¹²ºÍ¹úÊ×¶¼)¡¢ ËşÁÖ(°®É³ÄáÑÇ¹²ºÍ¹úÊ×¶¼) '; // Helsinki, Riga, Tallinn 
usys47='(GMT+02:00) ÒÔÉ«ÁĞ'; // Israel 
usys48='(GMT+03:00) °Í¸ñ´ï(ÒÁÀ­¿ËÊ×¶¼)¡¢¿ÆÍşÌØ¡¢ÄÎÂå±È(¿ÏÑÇ¹²ºÍ¹úÊ×¶¼)¡¢ÀûÑÅµÂ(É³ÌØ°¢À­²®) '; // Baghdad, Kuwait, Nairobi, Riyadh 
usys49='(GMT+03:00) ÄªË¹¿Æ(¶íÂŞË¹Ê×¶¼) '; // Moscow, St. Petersburg 
usys50='(GMT+03:00) µÂºÚÀ¼(ÒÁÀÊÊ×¶¼) '; // Tehran 
usys51='(GMT+04:00) °¢²¼´ï±È(°¢À­²®ÁªºÏ´ó¹«¹úÖ®Ê×¶¼)¡¢ÂíË¹¿¦ÌØ(°¢ÂüÊ×¶¼)¡¢µÚ±ÈÀûË¹(¸ñÂ³¼ªÑÇ¹²ºÍ¹úÊ×¶¼) '; // Abu Dhabi, Muscat, Tbilisi, Kazan 
usys52='(GMT+04:00) ¿¦²¼¶û(°¢¸»º¹Ê×¶¼) '; // Volgograd, Kabul 
usys53='(GMT+05:00) ÒÁË¹À¼Âí°ÍµÂ(°Í»ùË¹Ì¹Ê×¶¼)¡¢¿¦À­ò¿¸ÛÊĞ(°Í»ùË¹Ì¹) '; // Islamabad, Karachi, Ekaterinburg 
usys54='(GMT+06:00) ´ï¿¨(ÃÏ¼ÓÀ­Ê×¶¼) '; // Almaty, Dhaka 
usys55='(GMT+07:00) Âü¹È¡¢ÑÅ¼Ó´ï¡¢ºÓÄÚ'; // Bangkok, Jakarta, Hanoi 
usys56='(GMT+08:00) ±±¾©¡¢ÖØÇì¡¢ÎÚÂ³Ä¾Æë'; //Beijing, Chongqing, Urumqi
usys57='(GMT+08:00) Ïã¸Û¡¢°ØË¹¡¢ĞÂ¼ÓÆÂ¡¢Ì¨±±'; // Hong Kong, Perth, Singapore, Taipei 
usys58='(GMT+09:00) ¶«¾©¡¢´óÚæ¡¢Ôı»Ï¡¢ÑÇ¿â´Î¿Ë'; // Toyko, Osaka, Sapporo, Yakutsk 
usys59='(GMT+10:00) ²¼ÀïË¹±¾'; // Brisbane 
usys60='(GMT+10:00) ¿²ÅàÀ­¡¢Ä«¶û±¾¡¢Ñ©Àæ'; // Canberra, Melbourne, Sydney 
usys61='(GMT+10:00) ¹Øµº¡¢Ä¦¶ûË¹±È¸Û(°Í²¼ÑÇĞÂ¼¸ÄÚÑÇÖ®Ê×¶¼)¡¢º£²ÎáË'; // Guam, Port Moresby, Vladivostok 
usys62='(GMT+10:00) ¹ş²®ÌØ'; //Hobart
usys63='(GMT+11:00) Âí¿¦µ¤Öİ(¶íÂŞË¹)¡¢ĞÂ¿¦Àï¶àÄáÑÇ'; // Magadan, Solamon, New Caledonia 
usys64='(GMT+12:00) ì³¼Ã¡¢¿°²ì¼Ó°ëµº(Î÷²®ÀûÑÇ)'; // Fiji, Kamchatka, Marshall Is.
usys65='(GMT+12:00) ÍşÁé¶Ù¡¢°Â¿ËÀ¼'; // Wellington, Auckland 
usys66='ÈÕ¹â½ÚÔ¼Ê±¼ä'; // Daylight Savings 
usys67='×Ô¶¯µ÷Õûµ½½ÚÔ¼ÈÕ¹âÊ±Çø'; //Automatically Adjust Daylight Saving
 
usys68='Ô¶³Ì¹ÜÀí'; // Remote Management:
AF='½ø½×¹¦ÄÜ'; // ADVANCED FEATURE!
usys69='Ô¶³Ì¹ÜÀíÄÜÈÃÄú´ÓÍøÂçÉÏµÄÈÎºÎµØ·½¸ü¸ÄÂ·ÓÉÆ÷µÄÉè¶¨£¬ÔÚÄú¿ªÆô´Ë¹¦ÄÜÇ° '; // Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,
usys70='ÇëÈ·ÈÏÄúÒÑÉè¶¨¹ÜÀíÕßÃÜÂë'; // MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.
usys71='ÈÎºÎIPµØÖ·½Ô¿ÉÔ¶³Ì¹ÜÀíÂ·ÓÉÆ÷'; // Any IP address can remotely manage the router.
usys72='Ö»ÓĞ´ËIPµØÖ·¿ÉÔ¶³Ì¹ÜÀíÂ·ÓÉÆ÷'; //Only this IP address can remotely manage the router 

usys73='NATÆôÓÃ'; // NAT Enabling:
usys74='ÔÊĞíÄú¹Ø±ÕNetwork Address Translation¹¦ÄÜ£¬ÔÚ´ó¶àÊıµÄ×´¿öÀïÄú×îºÃ²»Òª½«´Ë¹¦ÄÜ¹Ø±Õ'; // Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NATÆôÓÃ / ½ûÓÃ'; // NAT Enable / Disable 
 usys76='UPNPÆôÓÃ'; // UPNP Enabling: 
usys77='ÔÊĞíÄú¿ªÆô»ò¹Ø±ÕUPNP¹¦ÄÜ¡£Èç¹ûÄúÊ¹ÓÃ´ËÏî¹¦ÄÜÀ´Ö§³ÖUPnP£¬¿ªÆôUPnPÄÜÈÃÕâĞ©Ó¦ÓÃ³ÌĞò×Ô¶¯°²×°µ½Â·ÓÉÆ÷ '; // Allows you to turn the UPNP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router.
usys78='UPNPÆôÓÃ / ½ûÓÃ'; //UPNP Enable / Disable
usys79='×Ô¶¯¸üĞÂ Firmware¿ªÆô'; // Auto Update Firmware Enabling:
usys80='ÔÊĞíÄú×Ô¶¯¼ì²éÂ·ÓÉÆ÷Firmware¸üĞÂ'; // Allows you to automatically check the availability of firmware updates for your router.
usys81='×Ô¶¯¸üĞÂ Firmware¿ªÆô / ¹Ø±Õ'; // Auto Update Firmware Enable / Disable 
usys82='ÏÖÔÚÊ¹ÓÃµÄÃÜÂëÊÇÎŞĞ§µÄ'; // Current Password is invalid 
usys83='ĞÂµÄÃÜÂëÓë¸üĞÂºóµÄÃÜÂë²»Í¬'; // New Password and Re-new Password is different 
usys84='µÇÂ¼³ÖĞøÊ±¼ä·¶Î§1-99'; // Login Timeout range: 1-99
usys85='ÃÜÂë³¤¶È²»ÕıÈ·£¬×î¶Ì3¸öÊı×Ö£¬×î³¤12¸ö'; // Password length is invalid. The maximum password length is 12 and The minimum password length is 3
usys86='ÇëÊÖ¶¯¸ü¸Ä×´Ì¬À¸µÄµØÖ·ÊäÈëÀ¸ÎªÔ¤ÉèLANµØÖ·'; // Please change the Address entry box in the status bar of your browser manually to the default lan address 
usys87='ÎÒÃÇÇ¿ÁÒ½¨ÒéÄúÉè¶¨¹ÜÀíÕßÃÜÂë'; // It is strongly recommended that you set your Administrator password.
usys88='Ö÷ NTP ·şÎñÆ÷'; //Primary NTP Server
usys89='±¸ÓÃ NTP ·şÎñÆ÷'; // Backup NTP Server 
usys90='192.43.244.18-±±ÃÀ'; //192.43.244.18-North America 
usys91='132.163.4.102-±±ÃÀ'; //132.163.4.102-North America 
usys92='192.5.41.41-±±ÃÀ'; //192.5.41.41-North America 
usys93='192.5.41.209-±±ÃÀ'; //192.5.41.209-North America 
usys94='207.200.81.113-±±ÃÀ'; //207.200.81.113-North America 
usys95='208.184.49.9-±±ÃÀ'; //208.184.49.9-North America 
usys96='129.132.2.21-Å·ÖŞ'; //129.132.2.21-Europe 
usys97='130.149.17.8-Å·ÖŞ'; //130.149.17.8-Europe 
usys98='137.189.8.174-ÑÇÌ«µØÇø'; //137.189.8.174-Asia Pacific 
usys99='Ô¶³Ì·ÃÎÊ¶Ë¿Ú'; // Remote Access Port 
usysipm='Äú¿ÉÄÜÎ´ÊäÈëËùÓĞµÄIPµØÖ·»òÊÇ²¿·İÄúËùÊäÈëµÄÊı×ÖÊÇ²»ÕıÈ·µÄ¡£ÕâĞ©Êı×ÖÓ¦½çÓÚ0µ½255'; // Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 0 and 255
usysb1='´ËÂ·ÓÉÆ÷Î´Éè¶¨ÈÎºÎÃÜÂë£¬Èç¹ûÄúÒªÌá¸ß°²È«ĞÔ£¬Äú¿ÉÔÚ´ËÊäÈëÃÜÂë'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
vjs1='²»ÕıÈ·µÄIPµØÖ·£¬IPµØÖ·Ì«³¤£¬ÇëÔÙ´ÎÈ·ÈÏ'; // Invalid IP address, too long, Please check again 
vjs2='²»ÕıÈ·µÄIPµØÖ·£¬ÉÙÁË\'.\'£¬ÇëÔÙ´ÎÈ·ÈÏ!'; // Invalid IP address, missing \'.\' , Please check again!
vjs3='²»ÕıÈ·µÄIPµØÖ·£¬ÔÚ\'.\'Ö®¼äÉÙÁËÒ»Ğ©ºÅÂë£¬ÇëÔÙ´ÎÈ·ÈÏ'; // Invalid IP address, missing numbers between \'.\', Please check again!
vjs4="²»ÕıÈ·µÄIPµØÖ·£¬ÓĞ¶àÓàµÄ'.'£¬ÇëÔÙ´ÎÈ·ÈÏ" ; // Invalid IP address, extra '.' , Please check again!
vjs5='²»ÕıÈ·µÄIPµØÖ·£¬ÔÚ\'.\'Ö®¼äºÅÂëÌ«³¤£¬ÇëÔÙ´ÎÈ·ÈÏ!'; // Invalid IP address, numbers between \'.\' are too big, Please check again!
vm1='²»ÕıÈ·µÄ×ÖÄ¸'; // Invalid Character 
vm2='Î»ÖÃ'; // at Position 
vm3='±ØĞëÎª'; //Must be 
vjs6='²»ÕıÈ·µÄÄê·İ¸ñÊ½£¬ÇëÊäÈëÎª(ÀıÈç:2002)'; // Invalid year format, please enter as (e.g. 2002)
vm4='²»ÕıÈ·µÄºÅÂë'; // Invalid number 
vjs8='²»ÕıÈ·£¬±ØĞè½éÓÚ1970..2037'; // Invalid,must between 1970..2037
vjs9='²»ÕıÈ·µÄÔÂ·İ¸ñÊ½£¬ÇëÊäÈë'; //01...12 Invalid month format, please enter as (e.g. 01...12)
vjs10='ÇëÏÈÊäÈëÄê·İÓëÔÂ·İ'; // Please enter Year and Month First 
vjs11='²»ÕıÈ·µÄÈÕÆÚ¸ñÊ½£¬ÇëÊäÈë01...31£¬Ä³Ğ©ÔÂ·İ¿ÉÄÜÖ»ÓĞ00..28'; // Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)
vjs12='²»ÕıÈ·µÄĞ¡Ê±¸ñÊ½£¬ÇëÊäÈë00...23'; // Invalid hour format, please enter as (e.g. 00...23)
vjs13='²»ÕıÈ·µÄ·ÖÖÓ¸ñÊ½£¬ÇëÊäÈë00¡­59 '; // Invalid minute format, please enter as (e.g. 00...59)
vjs14='²»ÕıÈ·µÄMTUÖµ£¬ÆäĞè½éÓÚ1440¡­1454'; // Invalid MTU, must be between 576...1492
vjs15='²»ÕıÈ·µÄMRUÖµ£¬ÆäĞè½éÓÚ128¡­65535'; // Invalid MRU, must be between 128...65535
vjs16="ÎŞĞ§ IP £º";  //Invalid Ip:
vjs161="³¬³ö";  // not in
vjs162="ÍøÂçÑÚÂë"; // netmask 
vjs17='ÄúÊäÈëÁ½×é²»Ò»ÑùµÄÃÜÂë£¬ÇëÔÙ´ÎÈ·ÈÏ'; // You typed two different passwords, please double check again!
vjs18='ÇëÊäÈë¿ªÊ¼Á¬½Ó¶Ë¿ÚµÄÊıÖµ'; // Please enter start port number.
vjs19='¿ªÊ¼Á¬½Ó¶Ë¿ÚÖµ±ØĞëĞ¡ÓÚ½áÊø¶Ë¿ÚÖµ'; // Start port number should be smaller than end port number.
vjs20='²»ÕıÈ·µÄÁ¬½Ó¶Ë¿ÚÖµ£¬Á¬½Ó¶Ë¿ÚÖµÓ¦ÎªÒ»ÕıÕûÊı'; // Invalid port number, port numbers should be positive integer 
vjs21='²»ÕıÈ·µÄ³¤¶È'; // Invalid Length 
vjs22='²»ÕıÈ·µÄÎ»ÖÃ¸ñÊ½';// Invalid Format at position 
vjs221='!±ØĞëÎª: '; //! Must be :
vjs23='²»ÕıÈ·µÄMACµØÖ·£¬ÆäÎªÒ»¹ã²¥µØÖ·'; // Invalid MAC address, it is a broadcast address.
vjs24='²»ÕıÈ·µÄMACµØÖ·£¬ÆäÎª¿ÕµØÖ·'; // Invalid MAC address, it is a null address 
vjs25='²»ÕıÈ·µÄMACµØÖ·£¬ÆäÎª¹ã²¥µØÖ·'; // Invalid MAC address, it is a mutlicast address.
vjs26='²»ÕıÈ·µÄ¿ªÍ·»òÄ©Î²IPµØÖ·£¬Ä©Î²IPµØÖ·Ó¦´óÓÚ¿ªÊ¼IPµØÖ·'; // Invalid start and end IP address, end IP should be larger than start IP 
vjs27='²»ÕıÈ·µÄÊı×Ö£¬ ±ØĞë½éÓÚ1µ½65535'; // Invalid number! Must between 1..65535
vjs28='²»ÕıÈ·µÄ×ÓÍøÑÚÂë¸ñÊ½'; // Invalid netmask format.
vjs29='²»ÕıÈ·µÄ×ÓÍøÑÚÂë¸ñÊ½£¬×ÓÍøÑÚÂë±ØĞëÊÇ£º255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254'; // Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254
vjs30='²»ÕıÈ·µÄIPµØÖ·£¬Æä×îºóÒ»Âë²»ÄÜÎª0»ò255'; // Invalid Ip address, the last number cannot be 0 or 255
vjs31='²»ÕıÈ·µÄ¾ÖÓòÍøIPµØÖ·£¬ÆäµÚÒ»Âë²»ÄÜÎª127'; // Invalid Lan Ip address, the first number cannot be 127
vjs32='²»ÕıÈ·µÄ¾ÖÓòÍøIPµØÖ·£¬Æä²»ÄÜÎª0.0.0.0'; // Invalid Lan Ip address, cannot be 0.0.0.0
vjs33='²»ÕıÈ·µÄ¾ÖÓòÍøIPµØÖ·£¬Æä±ØĞèµÍÓÚ224.0.0.0'; // Invalid Lan Ip address, must under 224.0.0.0
vjs34='ÕıÈ·µÄ·¶Î§ÊÇ£º'; // Valid range is 
vp1='¸ÃÍøÕ¾±»¡°¼Ò³¤¿ØÖÆ¡±×èµ²'; // This web site is blocked by PARENTAL CONTROL 
vp2='ÕâÒÑ¾­±»¡°¼Ò³¤¿ØÖÆ¡±½ûÖ¹²¢¹éÀàÎª£º'; // is prohibited by PARENTAL CONTROL and categorized as: 
vp3='ÈôÄú²»ÈÏÍ¬´Ë·Ö¼¶£¬²¢Ï£Íû´ËÍøÕ¾±»ÖØĞÂ·Ö¼¶£¬Çë°´²»Í¬Òâ'; // If you disagree with the rating and want the site to be re-rated, click Disagree:
vp4='ÈôÄúÒªĞŞ¸Ä¡°¼Ò³¤¿ØÖÆ¡±µÄ¹æ¶¨£¬Çë°´¸ü¸Ä'; // If you would like to modify the policies for PARENTAL CONTROL, click Change:';
vp5='È¡ÏûÄúµÄ¹æ¶¨(½öÏŞ±¾Ì¨µçÄÔ)£¬ÇëÊäÈëÃÜÂë²¢Ñ¡È¡Ïû'; // To override your policies (this computer only) for 1 hour, input password and click Override:
Disagree='²»Í¬Òâ'; // Disagree 
Change='¸ü¸Ä'; // Change 
Override='È¡Ïû'; //Override
wc1='¹ãÓòÍø > Á¬½ÓÀàĞÍ'; // WAN > Connection Type 
wc2='Ñ¡ÔñÄúµÄÁ¬½ÓÀàĞÍ'; // Select your connection type:
wc3='¶¯Ì¬IP '; // Dynamic 
wc4='¶¯Ì¬ÀàĞÍµÄÁ¬½ÓÊÇ×îÆÕ±éµÄ¡£Èç¹ûÄúÊ¹ÓÃCableµ÷ÖÆ½âµ÷Æ÷£¬Äú±È½ÏÓĞ¿ÉÄÜÊÇÓÃ¶¯Ì¬Á¬½Ó¡£Èç¹ûÄúÓĞÒ»¸öCableµ÷ÖÆ½âµ÷Æ÷»òÄú²»È·¶¨ÄãµÄÁ¬½ÓÀàĞÍ£¬ÇëÊ¹ÓÃÕâ¸ö'; // A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.
wc5='¾²Ì¬'; // Static 
wc6='Ò»¸ö¾²Ì¬IPµØÖ·Á¬½ÓÀàĞÍ½Ï²»ÎªÆÕ±é¡£µ±ÄúµÄISP¹©Ó¦ÉÌÌá¹©ÄúÒ»¸öÓÀ²»¸Ä±äµÄIPµØÖ·Ê±Äú²ÅÊ¹ÓÃÕâ¸öÑ¡Ïî'; // A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.
wc7=' PPPoE '; // PPPoE 
wc8='Èç¹ûÄúÊ¹ÓÃADSLµ÷ÖÆ½âµ÷Æ÷»òÄúµÄISPÌá¹©ÄúÒ»¸öÊ¹ÓÃÕßÃû³ÆÓëÃÜÂë£¬ÄÇçÛÄúµÄÁ¬½ÓÀàĞÍ¾ÍÎªPPPoE£¬ÇëÊ¹ÓÃ´ËÖÖÁ¬½ÓÀàĞÍ'; // If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.
wc9='PPTP'; 
wc10='[½öÅ·ÖŞ¹ú¼Ò]¡¡ÕâÖÖÁ¬½ÓÀàĞÍÔÚÅ·ÖŞ¹ú¼Ò×îÎªÆÕ±é¡£Èç¹ûÄúµÄISPÒÑ¸æÖªÄúÌØ±ğÊ¹ÓÃPPTP²¢ÒÑÌá¹©ÄúÕıÈ·µÄPPTPĞÅÏ¢£¬Äú¿ÉÊ¹ÓÃ´ËÑ¡Ïî'; //[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.'; 
wc11=' Telstra BigPond '; // Telstra BigPond 
wc12='[½ö°ÄÖŞ] Telstra BigPondÊ¹ÓÃÕßÇëÊ¹ÓÃ´ËÑ¡ÏîÀ´Á¬½Ó'; //[Australia Only] Users of Telstra BigPond Cable or DSL will use this option to configure the connection.
Next='ÏÂÒ»²½'; // Next 
wds1='¹ãÓòÍø > DNS '; // WAN > DNS 
wds2='Èç¹ûÄúµÄISPÌá¹©ÄúÒ»¸öÌØ¶¨µÄDNSµØÖ·£¬ÇëÔÚ´°¿ÚÖĞÊäÈë²¢µãÑ¡"Ì×ÓÃ±ä¸ü"'; // If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".
wds3='×Ô¶¯´ÓISP»ñµÃ'; // Automatic from ISP 
wds4='DNSµØÖ·'; // DNS Address 
wds5='´Î¼¶DNSµØÖ·'; //Secondary DNS Address  
wds6='DNSÒâÖ¸ÍøÓòÃû³ÆÏµÍ³£¬ÊÇÖ¸Ò»¸öÎ»ÓÚÍøÂçÉÏ·­ÒëURLµØÖ·£¬ÀıÈçwww.belkin.comÎªÒ»¸öIPµØÖ·'; // DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP addresses.
wds7='Èç¹ûÄú²»ÆôÓÃ×Ô¶¯DNS¹¦ÄÜµÄ»°£¬Äú±ØĞëÊäÈëISPËùÌá¹©µÄDNSÉè¶¨'; // You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function 
wdy1='¹ãÓòÍø > Á¬½ÓÀàĞÍ > ¶¯Ì¬IP '; // WAN > Connection Type > Dynamic IP 
wdy2='ÊäÈëÄúµÄ¶¯Ì¬IPµØÖ·£¬ÇëÊäÈëÒÔÏÂĞÅÏ¢²¢Ñ¡È¡"Ì×ÓÃ±ä¸ü"'; // To enter your Dynamic IP settings, type in your information below and click "Apply changes".
wdy3='Ö÷»úÃû³Æ'; // Host Name 
wdy4='Ö÷»úÃû³ÆÊÇISPÁ¬½ÓÊÇĞèÒªµÄ'; // Host Name = A name that some Internet Service Providers require for connection to their system.
wdy5='¸ü¸Ä¹ãÓòÍø MACµØÖ·'; // Change WAN MAC Address 
wdy6='²»ÕıÈ·µÄÖ÷»úÃû³Æ: ~!##$%^&*()=+{}[]|\'\\\":;?/.<>'; // Invalid Host Name: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<> 
wmc1='¹ãÓòÍø > MACµØÖ·'; // WAN > MAC address 
wmc2='²¿·İISPÈÃÄú´ÓµçÄÔÍø¿¨ÉÏ¸´ÖÆMACµØÖ·µ½Â·ÓÉÆ÷¡£Èç¹ûÄú²»È·¶¨£¬Ö»Òª¸´ÖÆÔÚ°²×°Â·ÓÉÆ÷Ç°Ô­±¾Á¬½Óµ½ModemµÄµçÄÔÍø¿¨µÄMACµØÖ·¡£¸´ÖÆÄúµÄMACµØÖ·²»»áÔì³ÉÈÎºÎÎÊÌâ'; // Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.
wmc3='¹ãÓòÍø MACµØÖ·'; // Wan Mac Address 
wmc4='¸´ÖÆµçÄÔ MACµØÖ·';  //Clone Computer\'s MAC Address
wmc5='¸´ÖÆ'; // Clone 
wm1='ÒòÌØÍø/¹ãÓòÍø'; // Internet/WAN 
WAN='¹ãÓòÍø'; // WAN 
wm2='Äú¿ÉÒÔÔÚÒòÌØÍø/¹ãÓòÍø À¸Éè¶¨ÄúµÄÂ·ÓÉÆ÷À´Á¬½ÓISP¡£Â·ÓÉÆ÷ÄÜ¹»ÓëÈÎºÎISPĞéÄâÁ¬½Ó£¬Ö»ÒªÄúÄÜÕıÈ·µØ½«Â·ÓÉÆ÷Éè¶¨ÓëISPµÄÉè¶¨Æ¥Åä¡£Òª½«ÄúµÄÂ·ÓÉÆ÷ÓëISPÁ¬½Ó£¬Çë°´ÆÁÄ»×ó±ßµÄ"Á¬½ÓÀàĞÍ" '; // The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.
wm3='Ö§³ÖÁ¬½ÓÀàĞÍ'; // Connection types supported:
wm4='<b>¶¯Ì¬IP:</b> °üÀ¨ÒªÇóÒ»¸öÖ÷»úÃû³ÆµÄISP£¬Æä»áÁ¬½ÓÖÁÒ»¸öÌØ¶¨µÄMACµØÖ·'; //<b>Dynamic:</b> including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. 
wm5='<b>¾²Ì¬IP:</b> Â·ÓÉÆ÷Ö§³ÖÓëÓĞÖ¸¶¨¾²Ì¬IPµØÖ·µÄISPÁ¬½Ó'; //<b>Static IP address:</b> the Router supports a connection to an ISP which assigns a static IP address. 
wm6='<b>PPPoE:</b> ÒÔÌ«ÍøÂçÊ¹ÓÃµÄµã¶ÔµãĞ­Òé Â·ÓÉÆ÷Ö§³ÖPPPoE£¬Æä½«ÒªÇóPPPoEµÇÂ¼È·ÈÏ'; //<b>PPPoE:</b> the Router supports a dynamic connection type which requires a PPPoE login for authentication.
wm7='<b>PPTP:</b> Ö»ÏŞÓÚÅ·ÖŞÓÃ»§ Â·ÓÉÆ÷Ö§³ÖÍ¸¹ıPPTPÁ¬½Óµ½Å·ÖŞISP'; //<b>PPTP:</b> For European users ONLY. The Router supports connections to European ISP\'s which connect via PPTP.
wm8='<b>Telstra BigPond:</b>';
wm9='Ö»ÏŞÓÚ°ÄÖŞÓÃ»§ Â·ÓÉÆ÷Ö§³ÖÁ¬½Óµ½Telstra BigPond '; // Australian users ONLY. The router supports connection to Telstra BigPond.'; 
wpe1='¹ãÓòÍø > Á¬½ÓÀàĞÍ > PPPoE'; // WAN > Connection Type > PPPoE 
wpe2='ÊäÈëÄúµÄPPPoEÉè¶¨£¬ÊäÈëÄúÒÔÏÂµÄĞÅÏ¢²¢Ñ¡È¡"Ì×ÓÃ±ä¸ü"'; // To enter your PPPoE settings, type in your information below and click "Apply changes".
wpe3='Ê¹ÓÃÕßÃû³Æ'; // User Name 
wpe4='ÖØĞÂÊäÈëÃÜÂë'; // Retype Password 
wpe5='·şÎñÃû³Æ(¿ÉÌî¿É²»Ìî)'; // Service Name (Optional)
wpe6=' MTU(1440-1454)'; // MTU (576-1492)
wpe7='Çë²»Òª¸ü¸ÄMTUÖµ£¬³ı·ÇÄúµÄISPÌØ±ğÖ¸¶¨Ò»¸ö·Ç1432µÄÉè¶¨'; // Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1454.
wpe8='¶ÏÏßÓÚ'; // Disconnect after 
wpe9='ÎŞ»î¶¯·ÖÖÓ '; // minutes of no activity.
idlerangerro='ÄúËùÊäÈëµÄÏĞÖÃÊ±¼äÊÇ²»ÕıÈ·µÄ¡£Õâ¸öºÅÂë¿ÉÄÜ½éÓÚ1-99'; // Idle time of the numbers you entered are invalid.\n The number has to be an integer between 1-99.
wpe10='ÎŞĞ§×Ö·û: <>&'; // Invalid character: <>&
pm='ÄúµÄ·şÎñÎŞ·¨È·ÈÏÄúËùÊäÈëµÄÃÜÂë¡£ÇëÈ·ÈÏÄúËùÊäÈëµÄÃÜÂëÊÇÕıÈ·µÄ'; // Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.
wpe11='²»ÕıÈ·µÄMTUÖµ'; // Invalid MTU value 
wpe12='ÇëÊäÈëÄúµÄÊ¹ÓÃÕßÃû³Æ'; // Please enter your username 
wpp1='¹ãÓòÍø > Á¬½ÓÀàĞÍ > PPTP '; // WAN > Connection Type > PPTP 
wpp2='PPTPÕÊºÅ'; // PPTP Account 
wpp3='PPTPÃÜÂë'; // PPTP Password
wpp4='ÇëÔÙ´ÎÊäÈëÃÜÂë'; // Retype Password 
wpp5='Ö÷»úÃû³Æ'; // Host Name 
wpp6='·şÎñIPµØÖ·'; // Service IP Address 
wpp7='ÎÒµÄIPµØÖ·'; // My IP Address 
wpp8='ÎÒµÄ×ÓÍøÑÚÂë'; // My Subnet Mask 
wpp9='Á¬½ÓID(Ñ¡ÓÃÏîÄ¿) '; // Connection ID (optional)
wpp10='Á¬½ÓÖĞ¶ÏÓÚ'; // Disconnect after 
wpp11='ÎŞ»î¶¯·ÖÖÓÊı'; // minutes of no activity.
wpp12='Çë°´´ËÊäÈëÄúµÄDNSÉè¶¨'; //Click here to enter your DNS Settings
wpp13='ÇëÊäÈëÄúµÄPPTPÕÊºÅ'; // Please enter your PPTP Account 
wpp14='ÇëÔÙ´ÎÊäÈëÃÜÂë'; // Please re-enter your password!
wpp15='ÇëÊäÈëÄúµÄÃÜÂë'; // Please enter your password!
ws1= '¹ãÓòÍø > Á¬½ÓÀàĞÍ > ¾²Ì¬IP '; // WAN > Connection Type > Static IP 
ws2='ÊäÈëÄúµÄ¾²Ì¬IPÉè¶¨£¬ÇëÊäÈëÒÔÏÂĞÅÏ¢È»ºóÑ¡È¡"Ì×ÓÃ±ä¸ü"'; // To enter your Static IP settings, type in your information below and click "Apply changes".
ws3='IPµØÖ·'; // IP Address 
ws4='×ÓÍøÑÚÂë'; // Subnet Mask 
ws5='ISPÍø¹ØµØÖ·'; // ISP Gateway Address 
ws6='ÎÒµÄISPÊÇ·ñÌá¹©³¬¹ıÒ»¸ö¾²Ì¬IPµØÖ·£¿'; // My ISP Provides more than one Static IP address?
ws7='°´´ËÊäÈëÄúµÄDNSÉè¶¨'; // Click here to enter your DNS Settings 
dm='¿ÉÄÜÄúÉĞÎ´ÊäÈëËùÓĞµÄDNSºÅÂë£¬»ò²¿·İÄúËùÊäÈëµÄºÅÂë²»ÕıÈ·¡£´ËºÅÂëÓ¦½éÓÚ0µ½255'; // Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.
sm='ÄúËùÊäÈëµÄ×ÓÍøÑÚÂëÊı×ÖÊÇ²»ÕıÈ·µÄ'; // The Subnet mask numbers you entered are invalid.
ws8='ÇëÔÚ½ÓÏÂÀ´µÄ´°¿ÚÊäÈëÄúµÄDNSµØÖ·'; // Please enter/validate your DNS address settings on the following screen 
wsc1=' IPµØÖ·±ğÃû'; // Alias IP Address 
im='IPµØÖ·±ğÃûÒÑÂú£¬ÎŞ·¨ÔÙÔö¼Ó'; // The Alias IP Address list is full. Additional rules can not be created.
wt1='¹ãÓòÍø > Á¬½ÓÀàĞÍ > Telstra BigPond '; // WAN > Connection Type > Telstra BigPond 
wt2='Èç¹ûÄúµÄÍøÂç·şÎñÊÇÓÉ°ÄÖŞµÄTelstra BigPondËùÌá¹©£¬ÄúĞèÒªÊäÈëÒÔÏÂµÄĞÅÏ¢¡£ÕâĞ©ĞÅÏ¢ÓÉTelstra BigPondÌá¹©'; // If your Internet service is provided by Telstra BigPond in Australia, you will need to enter your information below. This information is provided by Telstra BigPond.
wt3='Ñ¡È¡ÄúµÄÖİ'; // Select Your State 
wt4='Ê¹ÓÃÕß¾ö¶¨ÊÖ¶¯Ñ¡È¡µÇÂ¼·şÎñÆ÷'; // User decide login server manually 
wt5='µÇÂ¼·şÎñÆ÷'; // Login Server 
Logout='ÍË³ö'; // Logout 
wt6='ÇëÊäÈëÄúµÄ·şÎñÆ÷IP»ò´ÓÇåµ¥ÖĞÑ¡Ôñ'; // Please enter your Server IP or select your state from the menu.
wla1='ÎŞÏß>Éè¶¨ÎªAP(½ÓÈëµã) '; // Wireless > Use as Access Point 
wlad1='Â·ÓÉÆ÷¿ÉÒÔÖ»ÏŞ¶¨ÓÃÎªÒ»¸öAPÎŞÏß½ÓÈëµã£¬ÆÁ±ÎËùÓĞÂ·ÓÉºÍ·À»ğÇ½¹¦ÄÜ¡£Äú¿ÉÒÔÑ¡È¡"ÆôÓÃ" È»ºóÊäÈëÄúÏë¸øAPÖ¸¶¨µÄIPµØÖ·¼´¿É'; // The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.
wlad2='ÆôÓÃ/½ûÓÃ'; // Enable / Disable 
wlae1='Ö¸¶¨IPµØÖ·'; // Specify IP Address 
wlae2='×ÓÍøÑÚÂë'; // Subnetmask 
wlae3='ÇëÔÚÄúµÄä¯ÀÀÆ÷ÖĞÊÖ¶¯¸ü¸ÄÊäÈëÀ¸µÄµØÖ·Îª¾ÖÓòÍøµÄµØÖ·'; // Please change the Address entry box in the status bar of your browser manually to the lan address 
wlae4='1)ÎŞÏßÆµµÀ£ºÂ·ÓÉÆ÷ÓëAP±ØĞëÏà·û<br>'+
      '2)°²È«Éè¶¨£ºÂ·ÓÉÆ÷ÓëAP±ØĞëÏà·û<br>'+
      '3)Èç¹ûMAC¹ıÂË·À»ğÇ½ÆôÓÃ£¬Ê¹ÓÃÕß±ØĞëÈ·¶¨Ôö¼ÓÂ·ÓÉÆ÷ºÍAPµÄÎŞÏß¾ÖÓòÍøMACµØÖ·²ÅÄÜ¹»È·±£Á½Õß»¥ÏàÍ¨ĞÅ¡£<br>';
//	1) Wireless channels must match between Router and AP.<br>
//	2) Security settings (WEP) must match between Router and AP.<br>
//	3) If MAC filtering is enabled, user must be sure to add the WLAN MAC address(es) of the Router/AP in order to allow communication with each other.<br>
wlc1='ÎŞÏß > ÆµµÀ Óë SSID '; // Wireless > Channel and SSID 
wlc2='Òª¸ü¸ÄÂ·ÓÉÆ÷ÉÏµÄÎŞÏßÉè¶¨£¬ÇëÔÚ´Ë¸ü¸Ä£¬È»Ñ¡È¡"Ì×ÓÃ±ä¸ü"À´±£´æ±ä¸ü'; // To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.
wlc3='ÎŞÏßÆµµÀ'; //Wireless Channel
wlc4='SSID '; // SSID 
wlc5='ÎŞÏßÄ£Ê½'; // Wireless Mode 
wlc6='54G-Auto '; //802.11g-Auto 
wlc7='54G-Only '; //802.11g-Only 
wlc8='54G LRS '; //802.11g LRS 
wlc9='¹ã²¥SSID '; // Broadcast SSID 
wlc10='ÔöÇ¿Ä£Ê½'; //Turbo Mode
wlc11="ÆôÓÃ Turbo Ä£Ê½ÔÊĞíÂ·ÓÉÆ÷»ò·ÃÎÊµãÊ¹ÓÃÖ¡±Å·¢»ñÈ¡´ÓÂ·ÓÉÆ÷»ò·ÃÎÊµãµ½ 802.11g ¿Í»§»úµÄ×î´óÍÌÍÂÁ¿¡£Turbo Ä£Ê½ÓëÖ§³Ö Turbo Ä£Ê½µÄ 802.11g ¿Í»§»úĞ­Í¬ÔËĞĞ¡£Ê¹ÓÃ×îĞÂÇı¶¯³ÌĞòµÄ Belkin 802.11g ¿Í»§»úÖ§³Ö Turbo Ä£Ê½¡£²»Ö§³Ö Turbo Ä£Ê½µÄ¿Í»§»úÔÚÆôÓÃ Turbo Ä£Ê½Ê±Õı³£ÔËĞĞ¡£"; // Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.
wlc12='±£»¤Ä£Ê½'; //Protected Mode
wlc13="×¢Òâ: ÔÚ´ó¶àÊıµÄÇé¿öÖĞ£¬×î¼Ñ×´¿ö(ÍÌÍÂÁ¿)ÊÇ½«±£»¤Ä£Ê½¹Ø±Õ¡£Èç¹ûÄúÊ¹ÓÃHEAVY802.11b£¬×î¼ÑĞ§ÄÜÓ¦Îª½«±£»¤Ä£Ê½¹Ø±ÕÊ±"; // NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.
wlc14='current channel';
wle1='ÎŞÏß > °²È«'; // Wireless > Security 
wle2='°²È«Ä£Ê½'; // Security Mode 
wle3='WPA-PSK(ÎŞ·şÎñÆ÷)'; // WPA-PSK(no server)
wle4='128Î»WEP '; //128bit WEP 
wle5='64Î»WEP '; //64bit WEP 
wle6='WPA (ÓĞRadius·şÎñÆ÷)'; // WPA(with Radius Server)
wle7="Äú¿ÉÒÔÔÚ´ËÉè¶¨ÎŞÏß°²È«/¼ÓÃÜ¡£°²È«¿ªÆôÊ±¿ÉÈ·±£×î´óÖµµÄÎŞÏß°²È«¡£WPAÌá¹©µÄÊÇ²»¶ÏËæ»ú¸Ä±äµÄ¼ÓÃÜ´úÂëÒÔ¼°Ö¸¶¨³ö×î¼ÑµÄ±£È«½â¾ö·½°¸¡£ÔÚÎŞÏß»·¾³Àï£¬²¢·ÇËùÓĞµÄÉè±¸¶¼ÄÜÖ§³ÖWPA£¬ËùÒÔ¾Í±ØĞëÊ¹ÓÃWEP"; // You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.
wle8='13¸öÊ®Áù½øÖÆµÄ³É¶ÔÊı×Ö'; //(13 hex digit pairs)
wle9='×¢Òâ'; NOTE: 
wle10='ÈôĞëÊ¹ÓÃ×Ö·û´®²úÉú³É¶ÔµÄÊ®Áù½øÖÆÊı×Ö£¬°´×ó±ßµÄÀ¸Ä¿²¢ÊäÈë×Ö·û´®'; // To automatically generate hex pairs using a PassPhrase, check the box on the left and input the passphrase here 
PP='×Ö·û´®'; // PassPhrase 
generate='²úÉú'; // generate 
errm='ÇëÊäÈë×Ö·û´®'; // Please enter a PassPhrase 
keym='ÃÜÔ¿²»ÍêÕû'; // Key is not complete 
wle11='ÃÜÔ¿1 '; // Key 1
wle12='ÃÜÔ¿2'; // Key 2
wle13='ÃÜÔ¿3'; // Key 3
wle14='ÃÜÔ¿4'; // Key 4
wle15='Ê®Áù½øÖÆµÄ³É¶ÔÊı×Ö'; //(hex digit pairs)
wle16='WPA/WPA2(with Server)';
wle17='Advance Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
keym1='ÃÜÔ¿Éú³ÉºóÇëµãÑ¡¡°Ì×ÓÃ±ä¸ü¡±Ê¹ÆäÓĞĞ§'; // is not complete 
keym2='²»ÍêÕû, Çë¾ÀÕı!'; // is invalid, please correct it first!
wlm1='ÎŞÏß'; // Wireless 
wlm2='ÔÚÕâÀïÄú¿ÉÒÔµ÷ÕûÉè¶¨ÎªÎŞÏßÇø'; // In this tab you can adjust settings to the Wireless section of the Router.
wlm3='ÆµµÀ Óë SSID '; // Channel and SSID 
wlm4='µ÷ÕûÎŞÏßÆµµÀºÍSSID£¨ÎŞÏßÍøÂçÃû³Æ£©'; // Make adjustments to the wireless channel and SSID(wireless network name)
wlm5='°²È«'; // Security 
wlm6='¸ü¸ÄÎŞÏß°²È«Éè¶¨£¬ÀıÈçWPAÉè¶¨»òWEPÉè¶¨'; // Change the wireless security settings such as WPA settings or WEP settings.
wlm7='ÓÃ×÷APÎŞÏß½ÓÈëµã'; // USE as Access Point 
wlm8='Éè¶¨Â·ÓÉÆ÷µÄÔË×÷Ä£Ê½ÎªAPÄ£Ê½'; // Set the operating mode of the Router to AP mode 
wlm9='Ö¸¶¨IPµØÖ·'; //Specify IP address
wlm10='Ö¸¶¨APµÄIPµØÖ·'; // Specify IP address of the AP.
wlm11='MACµØÖ·¿ØÖÆ'; // MAC Address Control 
wlm12='Éè¶¨Ò»¸öÄúÏëÒªÔÊĞí»òÊÇ¾Ü¾øµÄÎŞÏßÍøÂçÓÃ»§Çåµ¥'; // Set up a list of clients that you want to allow or deny access to the wireless network.
wlm13='ÎŞÏßÍøÇÅ'; // Wireless Bridge 
wlm14='ÈÃÄúÉè¶¨ÎŞÏßÇÅ½ÓWDSÄ£Ê½'; // Allows you to Setup WDS bridging modes.
ww8='ÇëÊäÈëradiusÁ¬½Ó¶Ë¿ÚºÅÂë'; // Please input radius port number 
ww9='RadiusÁ¬½Ó¶Ë¿ÚºÅÂëÓ¦ÎªÒ»¸ö½çÓÚ1ÖÁ65535µÄºÅÂë'; // Radius port number should be a number between 1 and 65535
ww10='ÇëÊäÈëradiusÃÜÔ¿'; // Please input radius key 
ww11='ÖØĞÂÊäÈë¼ä¸ôÓ¦ÎªÒ»¸öºÅÂë'; // re-key interval should be a number 
ww12='ÖØĞÂÊäÈë¼ä¸ôÓ¦Îª´óÓÚ60Ãë'; // re-key interval should be larger than 60 seconds 
ww13='Authentication '; // Authentication 
ww1=' WPA £¨ÓĞ·şÎñÆ÷£©'; // WPA (with server) 
ww2='½ø½×Éè¶¨ - ÎŞÏß±£È«´æÈ¡Ê¹ÓÃ·şÎñÆ÷À´·ÖÅäÃÜÔ¿¸øÓÃ»§£ºÕâ¸öÑ¡ÏîĞèÒªRadius·şÎñÆ÷ÔÚÍøÂçÉÏÔË×÷'; // Advanced Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.
ww3='¼ÓÃÜ¼¼Êõ'; // Encryption Technique 
ww4='Radius·şÎñÆ÷'; // Radius Server 
ww5=' RadiusÁ¬½Ó¶Ë¿Ú'; // Radius Port 
ww6=' RadiusÃÜÔ¿'; // Radius Key 
ww7='ÖØĞÂÊäÈë¼ä¸ôÊ±¼ä'; // Re-Key Interval 
seconds='ÃëÊı'; // seconds 
wwp6='ÊäÈëPSK'; // Input pre-shared key (PSK)
wwp7=' PSKµÄ³¤¶ÈÓ¦Îª8µ½63»ò64µÄÊ®Áù½øÖÆÊı'; // The length of pre-shared key should be 8 to 63 or 64 Hex 
wwp1='Ô¤ÉèÖµÎªTKIP'; // Default is TKIP 
wwp2='PSK'; // Pre-shared Key (PSK)
wwp3='WPA-PSK(ÎŞ·şÎñÆ÷)'; // WPA-PSK (no server)
wwp4='´ËÎªÒ»ÃÜÂë£¬ÒÔµ¥×Ö¡¢´Ê×é¡¢Ò»´®×ÖÄ¸»òÊÇÊı×ÖËù×é³É¡£Õâ¸öÃÜÂë±ØĞë½éÓÚ<b>8</b>ºÍ<b>63</b>¸ö×ÖÄ¸£¬ÆäÖĞ¿ÉÒÔ°üÀ¨¿Õ°×»òÊÇ±êµã·ûºÅ¡£Ã¿Ò»¸öÁ¬½Óµ½´ËÍøÂçµÄÊ¹ÓÃÕß±ØĞëÒªÊ¹ÓÃÍ¬Ò»¸öÃÜÂë'; // Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex(0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). 
wwp5='Ä£ºı PSK '; // Obscure PSK 
wlb1='ÎŞÏß > ÎŞÏßÍøÇÅ'; // Wireless > Wireless bridge 
wlb2='ÎŞÏßÇÅ½Ó»òÎŞÏß·Ö²¼ÏµÍ³WDSÊÇÓÃÀ´Á¬½ÓÎŞÏßÂ·ÓÉÆ÷ÓëÎŞÏßAP£¬¿ÉÊ¹ÎŞÏßÍøÂç¸²¸Ç·¶Î§À©´ó'; // Wireless Bridging or Wireless Distribution System (WDS) is used to connect Wireless Routers and Access points together to extend a network.
wlb3='¿ªÆôÎŞÏßÇÅ½Ó'; // Enable Wireless Bridging.
wlb4='(¿ªÆô´Ë¹¦ÄÜ»áÈÃÆäËüµÄAccess Point¿ÉÒÔÁ¬½Óµ½Õâ¸öAccess Point)'; //(enabling this feature allows other Access Points to connect to this Access Point.)
wlb5='Ä¬ÈÏÖµÎªÆôÓÃ'; // Default is enabled 
wlb6='½öÆôÓÃÔÊĞíÌØ¶¨Access PointÀ´Á¬½Ó'; //Enable ONLY specific Access Points to connect.
wlb7="(ÊäÈëAPµÄMACµØÖ·À´Á¬½Ó£¬Èç¹ûÕâ¸öÏîÄ¿Ã»ÓĞ±»È·ÈÏ£¬ÔòÈÎºÎAP¶¼¿ÉÒÔÁ¬½Ó¡£×¢Òâ: µ±Á¬½Óµ½AP£¬ÖÁÉÙÒ»¸öAPĞèÒªºô½ĞÆäËüAPµÄMACµØÖ·¡£ ÌáÊ¾:MACµØÖ·¿ÉÒÔÍ¸¹ıÎŞÏßÍø¿¨µÄÍøÕ¾Ñ°ÕÒ¹¦ÄÜÕÒµ½)"; //(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)
wlb8='¹Ø±ÕÓÃ»§ÎŞÏßÁ¬½Ó¹¦ÄÜ'; // Disable ability for Wireless CLIENTS to connect.
wlb9='´Ë¹¦ÄÜÖ»ÄÜÔÚAPÓÃÀ´µ¥¶ÀÁ¬½ÓÆäËüAPÊ±'; //(This feature should only be used when the AP is used  exclusively to connect wirelessly to other APs.)
wlb10='ÎŞĞ§'; // invalid 
wlbss1='Õ¾µãËÑÑ°'; // Site Survey 
BSSID='BSSID';
wlbss2='ÍøÂçÀàĞÍ'; // Network Type 
wlbss3='¼ÓÃÜ'; // Encryption 
wlbss4='Ñ¡Ôñ'; // Select 
wlbss5='Ã»ÓĞÕÒµ½¿ÉÓÃµÄBSSID'; // No available BSSID found.
wlbss6='ËùÓĞËÄ¸öÇøÓò¶¼ÂúÁË£¬ÇëÒÆ³ıÆäÖĞÒ»¸öÄú²Å¿ÉÒÔ×öĞÂµÄÑ¡Ôñ!'; // All 4 fields are full, remove one of them before you select new one!';
wlq1='QoS£¨·şÎñÖÊÁ¿£©ÅäÖÃ';// QoS (Quality of Service) Configuration
wlq2='QoS ½«ÍøÂçÖĞµÄÖØÒªÊı¾İ£¨Èç¶àÃ½ÌåÄÚÈİºÍ»ùÓÚ IP µÄÓïÒô£¨VoIP£©£©ÁĞÎª×î¸ßÓÅÏÈ¼¶£¬Òò´ËÕâĞ©Êı¾İ²»»áÊÜµ½ÕıÔÚÍ¨¹ıÍøÂç·¢ËÍµÄÆäËûÊı¾İµÄ¸ÉÈÅ¡£»ùÓÚ 802.11e£¬Äú¿ÉÒÔ´ò¿ª»ò¹Ø±Õ´Ë¹¦ÄÜ£¬²¢¿ÉÑ¡ÔñÒªÊ¹ÓÃµÄÓ¦´ğÄ£Ê½¡£Èç¹ûÄúÏëÔÚÍøÂçÖĞ´«µİ¶àÃ½ÌåÄÚÈİ»òÊ¹ÓÃ VoIP£¬ÔòÓ¦ÆôÓÃ QoS¡£<br>'; //QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.
wlq3=' QoS ÇĞ»»'; // QoS Switch
wlq4='Äú¿ÉÒÔ´ò¿ª»ò¹Ø±Õ QoS <br>'; //Allows you to turn ON or OFF QoS. 
wlac1='ACK Ä£Ê½'; // ACK Mode
wlac2='Äú¿ÉÔÚÍøÂçÖĞÊ¹ÓÃÁ½ÖÖÓ¦´ğ£¨ACK£©Ä£Ê½À´»ñÈ¡×î¼ÑµÄ¶àÃ½ÌåĞÔÄÜ£º±Å·¢ ACK ºÍ¼´Ê± ACK<br><br>'+
'¼´Ê± ACK ÊÇÈ±Ê¡£¨³ö³§£©ÉèÖÃ£¬½¨Òé½«ÆäÓÃÓÚÕı³£ÍøÂç²Ù×÷¡£½« ACK Ä£Ê½´Ó¼´Ê± ACK ¸ü¸ÄÎª±Å·¢ ACK ¿ÉÄÜ»áÓ°Ïì³¤¾àÀëµÄÍÌÍÂÁ¿¡£µ±ÍøÂçµÄ³¤¾àÀëĞÔÄÜ¶ÔÄúÀ´ËµÊÇ×îÖØÒªµÄÊ±ºò£¬ÇëÊ¹ÓÃ¼´Ê± ACK¡£<br><br>'+
'±Å·¢ ACK Ä£Ê½²»»á¶ÔÍøÂçÖĞËù·¢ËÍµÄÃ¿¸öĞÅ°ü¶¼×ö³öÓ¦´ğ£¬Òò¶ø»á½µµÍ¿ªÏú¡£µ±Â·ÓÉÆ÷ºÍ¿Í»§»úÖ®¼äµÄÁ´½Ó·Ç³£Á¼ºÃÊ±£¬±Å·¢ ACK ¿ÉÒÔ´ó´óÔö¼ÓÍÌÍÂÁ¿¡£Èç¹ûÄ³¸öÓ¦ÓÃ³ÌĞò£¨ÈçÁ÷ĞÍ¶à¸ßÊı¾İÒôÆµÁ÷£©ĞèÒª×î´óµÄ´ø¿í£¬ÇëÊ¹ÓÃ±Å·¢ ACK Ä£Ê½¡£Çë¼Ç×¡£¬µ±Ê¹ÓÃ±Å·¢ ACK Ä£Ê½Ê±¿ÉÄÜ»áÓ°Ïì³¤¾àÀëĞÔÄÜ¡£<br>'; //
wmac1='ÉèÖÃ MAC µØÖ·¿ØÖÆ'; // Setting MAC Address Control
wmac2=' MAC µØÖ·¹ıÂËÆ÷ÊÇÒ»¸öÇ¿´óµÄ°²È«ĞÔ¹¦ÄÜ£¬ÔÊĞíÄúÖ¸¶¨ÎŞÏßÍøÂçÖĞÊ¹ÓÃµÄ¼ÆËã»ú¡£×¢£º´ËÁĞ±í½öÊÊÓÃÓÚÎŞÏß¼ÆËã»ú¡£Äú¿ÉÒÔ¶Ô´ËÁĞ±í½øĞĞÅäÖÃ£¬ÕâÑùÈÎºÎÎ´ÔÚ¹ıÂËÆ÷ÁĞ±íÖĞÖ¸¶¨µÄ¼ÆËã»úÔÚÊÔÍ¼·ÃÎÊÎŞÏßÍøÂçÊ±¶¼»á±»¾Ü¾ø¡£µ±ÄúÆôÓÃ´Ë¹¦ÄÜÊ±£¬Äú±ØĞëÊäÈëÔÊĞí·ÃÎÊÍøÂçµÄÃ¿Ì¨¿Í»§»ú£¨¼ÆËã»ú£©µÄ MAC µØÖ·¡£¡°×èÖ¹¡±¹¦ÄÜ¿ÉÈÃÄú·Ç³£ÈİÒ×µØÎªÈÎºÎ¼ÆËã»ú¿ªÆôºÍ¹Ø±ÕÍøÂç·ÃÎÊ£¬¶ø²»±ØÔÚÁĞ±íÖĞÌí¼Ó»òÇå³ı¼ÆËã»úµÄ MAC µØÖ·¡£<br>'+
'ÉèÖÃÔÊĞí·ÃÎÊÁĞ±í<br>'+
'1.		Ñ¡Ôñ¡°ÔÊĞí¡±ÎŞÏß°´Å¥ (1) ¿ªÊ¼ÉèÖÃÔÊĞíÁ¬½Óµ½ÎŞÏßÍøÂçµÄ¼ÆËã»úµÄÁĞ±í¡£<br>'+
'2. 	½Ó×Å£¬ÔÚ¿Õ°×µÄ¡°MAC µØÖ·¡±×Ö¶ÎÖĞ (3)£¬ÊäÈëÏ£ÍûÄÜ·ÃÎÊÎŞÏßÍøÂçµÄÎŞÏß¼ÆËã»úµÄ MAC µØÖ·£¬È»ºóµ¥»÷¡°Ìí¼Ó¡±(4)¡£<br>'+
'3. 	¼ÌĞøÖ´ĞĞ´Ë²Ù×÷£¬Ö±µ½ÒÑÊäÈëÁËËùÓĞÏëÒªÌí¼ÓµÄ¼ÆËã»úÎªÖ¹¡£<br>'+
'4. 	µ¥»÷¡°Ì×ÓÃ±ä¸ü¡±(5) Íê³É²Ù×÷¡£<br><br>'+
'ÉèÖÃ¾Ü¾ø·ÃÎÊÁĞ±í<br>'+
'¡°¾Ü¾ø·ÃÎÊ¡±ÁĞ±í¿ÉÈÃÄúÖ¸¶¨²»Ï£Íû·ÃÎÊÍøÂçµÄ¼ÆËã»ú¡£ÈÎºÎÎ»ÓÚ´ËÁĞ±íÖĞµÄ¼ÆËã»ú¶¼²»ÔÊĞí·ÃÎÊÎŞÏßÍøÂç¡£ÆäËûÔò¿ÉÒÔ¡£<br>'+
'1.		Ñ¡Ôñ"¾Ü¾ø"ÎŞÏß°´Å¥(2)¿ªÊ¼ÉèÖÃ¾Ü¾ø·ÃÎÊÎŞÏßÍøÂçµÄ¼ÆËã»úÁĞ±í<br>'+
'2. 	½Ó×Å£¬ÔÚ¿Õ°×µÄ¡°MAC µØÖ·¡±×Ö¶ÎÖĞ£¬ÊäÈëÄú²»ÔÊĞí·ÃÎÊÎŞÏßÍøÂçµÄÎŞÏß¼ÆËã»úµÄ MAC µØÖ·£¬È»ºóµ¥»÷¡°Ìí¼Ó¡±(4)¡£<br>'+
'3. 	¼ÌĞøÖ´ĞĞ´Ë²Ù×÷£¬Ö±µ½ÒÑÊäÈëÁËËùÓĞÏëÒª¾Ü¾ø·ÃÎÊµÄ¼ÆËã»úÎªÖ¹¡£<br>'+
'4. 	µ¥»÷¡°Ì×ÓÃ±ä¸ü¡±(5) Íê³É²Ù×÷¡£<br>'; //

wlmc1='ÎŞÏß > MACµØÖ·¿ØÖÆ'; // Wireless > MAC address control 
wlmc2=' MACµØÖ·¿ØÖÆ ÊÇÉè¶¨Ò»·İÄúÔÊĞí»ò¾Ü¾ø´æÈ¡ÎŞÏßÍøÂçµÄÓÃ»§Çåµ¥'; // Mac Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.
Allow='×¼Ğí';	Deny='¾Ü¾ø';   //Disable='Ê¹ÎŞĞ§';
wlmc7='ÇëÏÈÑ¡ÔñÄúÒªÔÊĞí»ò¾Ü¾øÍøÂç´æÈ¡µÄMACµØÖ·Çåµ¥'; // Select you want to allow or deny access the MAC address list first!
wlmc6='ÎŞ·¨ÊäÈë³¬¹ı16¸öMACµØÖ·'; // Can\'t enter more than 16 MAC addresses!
wlmc3="²»ÕıÈ·µÄMACµØÖ·"; //Invalid MAC address
wlmc4='ÇëÏÈ¸üÕı'; // Please correct it first!
wlmc5='ÕıÈ·µÄMACµØÖ·Ó¦Îª xx:xx:xx:xx:xx:xx¶øxÊÇ½éÓÚ0-9Óëa-f'; // The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!
ENTRY_FULL	= 'ËùÓĞµÄÊäÈë¼ÇÂ¼ÒÑÂú£¬ÇëÇå³ı²¿·İÊäÈë¼ÇÂ¼²¢ÔÙÊÔÒ»´Î'; // All entries are full.\nPlease remove some entries then try again.
CLEAR_CONFIRM	= 'ÄúÒªÇå³ıÊäÈë¼ÇÂ¼Âğ? '; // Do you want to clear entry 
CLEAR_ALL_CONFIRM = 'È·ÈÏÈ«²¿Çå³ı  ÄúÒªÇå³ıËùÓĞÊäÈë¼ÇÂ¼Âğ£¿'; // Do you want to clear all entries?
ERR_INTERNAL	= 'ÄÚ²¿´íÎó£¬ÇëÈ·ÈÏJavascrip¹¦ÄÜ --'; // Internal Error: Please check the javascrip function -- 
g1=' IPµØÖ·ÊÇÂ·ÓÉÆ÷µÄÄÚ²¿IPµØÖ·¡£´æÈ¡½ø½×Éè¶¨½Ó¿Ú£¬'+ 
'Ö»ÒªÊäÈëĞÂµÄµØÖ·È»ºóÑ¡È¡"Ì×ÓÃ¸ü¸Ä"£¬'+ 
'ÇëÔÚÄúµÄä¯ÀÀÆ÷µØÖ·À¸Î»ÖĞÊäÈë´ËIPµØÖ·'+  
' Èç¹ûÓĞĞèÒªÄú¿ÉÒÔ¸ü¸ÄÕâ¸öµØÖ·£¬ ';
// The "IP address" is the Internal IP address of the Router. To access the advanced setup 
// interface, type this IP address into the address bar of your browser. This address can 
//be changed if needed. To Change the IP address, type in the new IP address and click "Apply
// Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable
// IP are:
g2=' 192.168.x.x (x±ØĞë½éÓÚ0¸ú255) <br>'; //192.168.x.x (where x is anything between 0 and 255.)<br>
g3='10.x.x.x (x±ØĞë½éÓÚ0¸ú255)<br>'; //10.x.x.x (where x is anything between 0 and 255.)<br>
g4='172.y.x.x(y±ØĞë½éÓÚ16µ½31£¬¶øx±ØĞë½éÓÚ0¸ú255)'; //172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)<br>
g5='ÎŞĞè¸Ä±ä×ÓÍøÑÚÂë¡£Èç¹ûĞèÒªµÄ»°¿ÉÒÔ¸ü¸Ä×ÓÍøÑÚÂë¡£½öÔÚÄúÓĞÌØÊâÀíÓÉÊ±²Å¸ü¸Ä×ÓÍøÑÚÂë<br>'; // There is no need to change the subnet '+
'mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet '+'Mask if you specifically have a reason to do so.<br>'
g6=	' DNSÊÇÍøÂçÃû³ÆÏµÍ³·şÎñÆ÷µÄËõĞ´¡£Ò»¸öDNS·şÎñÆ÷ÊÇÒ»¸öÎ»ÓÚURLµØÖ·µÄ·şÎñÆ÷£¬ÀıÈç:www.belkin.com¡£ÔÚÄú¿ªÊ¼Ê¹ÓÃÒ»¸öÂ·ÓÉÆ÷Ç°£¬Ğí¶àISP²¢²»»áÒªÇóÄúÊäÈëÕâÏîĞÅÏ¢¡£µ±ÄúµÄISP²»Ìá¹©ÄúÒ»¸öÌØ¶¨µÄ DNSµØÖ·Ê±£¬ÄúÓ¦¸ÃÒªÑ¡È¡"×Ô¶¯ÓÉISP»ñÈ¡"¡£Èç¹ûÄúÊÇÊ¹ÓÃ¾²Ì¬IPÁ¬½Ó£¬ÄúĞèÒªÊäÈëÒ»¸öÌØ¶¨µÄDNSµØÖ·£¬¼°Ò»¸ö´Î¼¶µÄDNSµØÖ·¡£Èç¹ûÄúµÄÁ¬½ÓÀàĞÍÊÇ¶¯Ì¬IP»òPPPoE£¬ÄúºÜÓĞ¿ÉÄÜ²»Ò»¶¨ĞèÒªÊäÈëÒ»¸öDNSµØÖ·¡£ÊäÈëDNSµØÖ·Éè¶¨£¬"×Ô¶¯´ÓISP»ñÈ¡²¢ÊäÈëDNS£¬°´Ì×ÓÃ¸ü¸ÄÀ´´¢´æÉè¶¨¡£<br>'; // DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the '+ 
	//'Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP '+
	//'addresses. Many ISP\'s do not require you to enter this information into the Router. The '+ 
	//'"Automatic from ISP" checkbox should be checked if your ISP did not give you a specific '+
	//'DNS address. If you are using a Static IP connection type, then you may need to enter a '+
	//'specific DNS address and secondary DNS address for your connection to work properly. If '+
	//'your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS '+ 
	//'address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and '+
	//'enter your DNS entries in the spaces provided. Click "Apply Changes" to save //the settings. <br>'
g7=	'DHCP·şÎñÆ÷¿ÉÒÔÈÃÉè¶¨ÍøÂç·Ç³£¼òÒ×£¬ÄúÖ»ÒªÌæÍøÂçÖĞµÄÃ¿Ò»¸ö¼ÆËã»úÖ¸ÅÉÒ»¸öIPµØÖ·¡£Èç¹ûÓĞĞèÒªÄú¿ÉÒÔ¹Ø±ÕDHCP·şÎñÆ÷¡£ÄúĞèÒªÌæÍøÂçÖĞµÄÃ¿Ò»Ì¨¼ÆËã»úÊÖ¶¯Éè¶¨Ò»¸ö¾²Ì¬IPµØÖ·À´¹Ø±ÕDHCP·şÎñÆ÷¡£IPµØÖ·µÄ·¶Î§Ó¦¸Ã£¬ÊıÖµÓ¦½éÓÚ2-100(99Ì¨¼ÆËã»ú)£¬Èç¹ûÄúÒª¸ü¸ÄÕâ¸öÊı×Ö£¬Äú¿ÉÒÔÊäÈëÒ»×éĞÂµÄ¿ªÊ¼Óë½áÊøÊı×Ö£¬È»ºóÑ¡È¡"Ó¦ÓÃ¸ü¸ÄÖµ"<br>';
//The DHCP server function makes setting up a network very easy by assigning IP addresses '+ 
	//'to each computer on the network. The DHCP Server can be turned off if necessary. Turning '+
	//'off the DHCP server will require you to manually set a Static IP address in each computer '+
	//'on your network. The IP pool is the range of IP addresses set aside for dynamic assignment '+
	//'to the computers on your network. The default is 2-100 (99 computers) if you want to change '+
	//'this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g8=	'Äú¿ÉÒÔÎªÄúµÄÍøÂçÃüÃûÃû³Æ¡£Äú²»±Ø¸Ä±äÃû³Æ³ı·Ç±ØĞë¡£Äú¿ÉÒÔ¸øÄúµÄÍøÂçÆğÈÎºÎÃû³Æ±ÈÈç£ºÎÒµÄÍøÂç¡£<br>';  // You can set a local domain name (network name) for your network. There is no need to change 
	//'this setting unless you have a specific advanced need to do so. You can name the network '+
	//'anything you want such as "MY NETWORK". <br>';
g9='¶¯Ì¬IP '; // Dynamic IP 
g10= '¶¯Ì¬IPÊÇ×î¶àµçÀÂµ÷ÖÆ½âµ÷Æ÷Ê¹ÓÃµÄÁ¬½ÓÀàĞÍ¡£Í¨³£Ö»ÒªÁ¬½ÓÖÁISP¾Í¿ÉÒÔ½«Éè¶¨¸ÄÎª¶¯Ì¬IP¡£ÓĞĞ©¶¯Ì¬IPÁ¬½Ó¿ÉÄÜ»áÒªÇóÒ»¸öÖ÷»úÃû³Æ£¬Èç¹ûÄúÓĞÒ»¸öÖ¸¶¨µÄÖ÷»úÃû³Æ£¬½«ÆäÊäÈë¼´¿É¡£ÄúµÄÖ÷»úÃû³ÆÒ²ÊÇÓÉÄúµÄISPÖ¸¶¨µÄ£¬Ä³Ğ©¶¯Ì¬IPÁ¬½Ó¿ÉÄÜ»áÒªÇóÄú¸´ÖÆÔ­±¾Á¬½ÓµçÄÔµÄMACµØÖ·¡£Ñ¡È¡ÆÁÄ»ÖĞµÄ"¸ü¸Ä¹ãÓòÍøMACµØÖ·"Á¬½Ó£¬Èç¹ûÄúµÄÂ·ÓÉÆ÷ÒÑÕıÈ·Á¬½Ó£¬ÍøÂç×´Ì¬ÏÔÊ¾»áÊÇ"Á¬½ÓÖĞ"<br>'; // A dynamic connection type is the most common connection type found with cable modems.
	//'Setting the connection type to dynamic in many cases is enough to complete the connection '+ 
	//'to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host '+
	//'Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. '+
	//'Some dynamic connections may require that you clone the MAC address of the PC that was '+
	//'originally connected to the modem. To do so, click on the "Change WAN MAC address" link in '+
	//'the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';
g11=	'Ò»¸ö¾²Ì¬IPÁ¬½ÓÀàĞÍ½ÏÆäËüÀàĞÍ²»ÆÕ±é¡£Èç¹ûÄúµÄISPÊ¹ÓÃ¾²Ì¬IPµØÖ·£¬Äú¿ÉÄÜĞëÒªÄúµÄIPµØÖ·¡¢×ÓÍøÑÚÂë¡¢ÓëISPÍø¹Ø¡£ÄúµÄISP»áÌá¹©Ïà¹ØĞÅÏ¢¡£ÊäÈëÄúµÄ×ÊÁÏÈ»ºóÑ¡È¡"Ó¦ÓÃ"£¬ÔÚÄúÓ¦ÓÃÕâĞ©¸Ä±äºó£¬Èç¹ûÄúµÄÂ·ÓÉÆ÷ÒÑÕıÈ·Éè¶¨£¬ÄúµÄÍøÂç×´Ì¬»áÏÔÊ¾Îª"Á¬½ÓÖĞ"¡£Èç¹ûÄúµÄISPÌá¹©Äú³¬¹ıÒ»¸ö¾²Ì¬IPµØÖ·£¬ÄúµÄÂ·ÓÉÆ÷Ó¦¿É´¦ÀíÎå¸ö¾²Ì¬IPµØÖ·£¬Ñ¡È¡"ÎÒµÄISPÌá¹©³¬¹ıÒ»¸öµÄIPµØÖ·"È»ºóÊäÈëÆäËü¶îÍâµÄIPµØÖ·<br>'; // A Static IP address connection type is less common than other connection types. If your ISP 
	//'uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway '+
	//'address. This information is available from your ISP or on the paperwork that your ISP left '+ 
	//'with you. Type in your information then click "Apply Changes". After you apply the changes, '+
	//'the Internet Status indicator will read "Connected" if your Router is set up properly.<br><br>'+
	//'If your ISP assigns you more than one static IP address, your Router is capable of handling '+ 
	//'up to five static WAN IP addresses. Select "My ISP provides more than one static IP address" '+
	//'and enter your additional addresses. <br>';
g12=	'´ó²¿·İµÄDSL ISPÌá¹©ÒÔÌ«ÍøÂçµÄµã¶ÔµãĞ­Òé¡£Èç¹ûÄúÊ¹ÓÃDSLµ÷ÖÆ½âµ÷Æ÷À´Á¬½ÓÍøÂç£¬ÄúµÄISP¿ÉÄÜ»áÊ¹ÓÃÒÔÌ«ÍøÂçµÄPPPoEĞ­ÒéÀ´ÈÃÄúµÇÈëÍøÂç¡£Èç¹ûÄúµÄ¼ÒÓÃÍøÂç»òĞ¡ĞÍ°ì¹«ÊÒÁ¬½Ó²»ĞèÒªModem£¬ÔÚÒÔÏÂµÄ×´¿öÄú¿ÉÒÔÊ¹ÓÃPPPoE: 1)ÄúµÄISPÌá¹©ÄúÒ»¸öÊ¹ÓÃÕßÃû³ÆÓëÃÜÂëÀ´½øĞĞÁ¬½Ó 2)ÄúµÄISPÌá¹©ÄúÍøÂçÁ¬½ÓµÄÈí¼ş£¬ÀıÈç"WinPOET¡¢Enternet300 3)Äú±ØĞëÈ·ÈÏÑ¡È¡×ÀÃæÉÏµÄÍ¼±êÀ´½øĞĞÁ¬½Ó  ½«Â·ÓÉÆ÷Éè¶¨Ê¹ÓÃPPPoE£¬ÊäÈëÄúµÄÊ¹ÓÃÕßÃû³ÆÓëÃÜÂë£¬Èç¹ûÄúÃ»ÓĞ»òÄú²»ÖªµÀ£¬½«¸ÃÀ¸Áô¿Õ°×¼´¿É¡£ÔÚÄúÊäÈë??? <br>';// Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to '
	//'the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet '+
	//'connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. '+
	//'<br><br>'+
	//'Your connection type is PPPoE if:<br>'+ 
	//'1) Your ISP gave you a user name and password which is required to connect to the Internet<br>'+
	//'2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet<br>'+
	//'3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>'+
	//'To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. '+
	//'If you do not have a Service Name or do not know it, leave the Service Name field blank. '+
	//'After you have typed in your information, click "Apply Changes". After you apply the changes, '+ 
	//'the Internet Status indicator will read "Connected" if your Router is set up properly. '+
	//'For more details on configuring your Router to use PPPoE, see the user manual.<br>';
g13=	'ÓĞĞ©ISPÒªÇóPPTPÍ¨Ñ¶Ğ­Òé¡£Õâ½«»áÊ¹Äú¿ÉÒÔÖ±½ÓÉè¶¨Ò»¸öISPÏµÍ³¡£ÊäÈëISPÌá¹©µÄĞÅÏ¢£¬µ±ÄúÊäÈëÍê±Ï£¬Ñ¡È¡"Ì×ÓÃ±ä¸ü"¡£ÔÚÄúÓ¦ÓÃ¸üĞÂÖµºó£¬Èç¹ûÄúµÄÂ·ÓÉÆ÷ÒÑÕıÈ·Á¬½Ó£¬ÍøÂç×´Ì¬ÏÔÊ¾Îª"Á¬½ÓÖĞ"';// Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system.
	//'Type in the information provided by your ISP in the space provided. When you have finished, '+
	//'click "Apply Changes". After you apply the changes, the Internet Status indicator will read '+
	//'"Connected" if your Router is set up properly. ';
g14=	'ÄúµÄÊ¹ÓÃÕßÃû³ÆÓëÃÜÂëÊÇÓÉTelstra BigPondÌá¹©¡£ÇëÊäÈëÒÔÏÂĞÅÏ¢£¬Ñ¡È¡ÄúµÄ×´Ì¬ÇÒÆä»á×Ô¶¯µÇÈëÄúµÄ·şÎñÆ÷IPµØÖ·£¬Èç¹ûÄúµÄµÇÈë·şÎñÆ÷µØÖ·¸úÌá¹©µÄ²»Í¬£¬Äú¿ÉÄÜ±ØĞèÊÖ¶¯ÊäÈëµÇÈë·şÎñÆ÷IPµØÖ·£¬Ñ¡È¡"Ì×ÓÃ±ä¸ü"ºó£¬Èç¹ûÄúµÄÂ·ÓÉÆ÷ÒÑÕıÈ·Á¬½Ó£¬ÍøÂç×´Ì¬ÏÔÊ¾»á"Áª»úÖĞ"'; // Your user name and password are provided to you by Telstra BigPond. Enter this information below. 
	//'Choosing your state will automatically fill in your Login Server IP address. '+
	//'If your Login Server address is different than one provided here, '+
	//'you may manually enter the Login Server IP address. '+
	//'When you have entered your information, click "Apply Changes". '+ 
	//'After you apply the changes, the Internet Status indicator will read "Connected" '+
	//'if your Router is set up properly. ';
g15='MTUÉè¶¨'; // MTU Setting 
g16=	'MTUÉè¶¨Öµ²»»á¸Ä±ä³ı·ÇÄúµÄISPÌá¹©ÄúÒ»¸öÌØ¶¨µÄMTUÖµ¡£¸ü¸ÄMTUÖµ¿ÉÒÔÈÃÄú½â¾öÒÔÏÂÎÊÌâ: ´ÓÍøÂç¶ÏÏß¡¢Á¬½ÓËÙ¶ÈÂı¡¢ÍøÂçÓ¦ÓÃÎÊÌâ';
 // The MTU setting should never be changed unless your ISP gives you a specific MTU setting.
	//'Making changes to the MTU setting can cause problems with your Internet connection including '+ 
	//'disconnection from the Internet, slow Internet access and problems with Internet applications working properly. '; 

g17='ÔÚXÖ®ºó¶ÏÏß¡­'; // Disconnect after X...
g18=	'¶ÏÏß¹¦ÄÜ½ö¹©ÔÚÂ·ÓÉÆ÷´ÓISP×Ô¶¯¶ÏÏßÊ±Ê¹ÓÃ£¬µ±Ò»¶ÎÊ±¼äÎŞÁ¬ÏßÊ±¡£ÀıÈç:µ±ÄúÊ¹ÓÃµÄÍøÂçÊÇÒÔÃë¼Æ·ÑÊ±£¬Äú¿ÉÒÔÊ¹ÓÃ´ËÑ¡Ïî'; // The Disconnect feature is used to automatically disconnect the router from your ISP when 
	//'there is no activity for a specified period of time. For instance, placing a checkmark '+
	//'next to this option and entering 5 into the minute field will cause the router to '+
	//'disconnect from the Internet after 5 minutes of no Internet activity. This option should '+ 
	//'be used if you pay for your Internet service by the minute. ';
g19='MACÒâÖ¸Ã½Ìå´æÈ¡¿ØÖÆµØÖ·¡£ËùÓĞµÄÍøÂçÁã×é¼ş£¬°üÀ¨Íø¿¨¡¢¼¯ÏßÆ÷ÒÔ¼°Â·ÓÉÆ÷¶¼ÓĞ¶ÀÓĞµÄ"ĞòºÅ"½Ğ×öÃ½Ìå´æÈ¡¿ØÖÆµØÖ·¡£ÄúµÄISP¿ÉÄÜ»á¼ÇÂ¼ËùÓĞÄúµÄµçÄÔµÄÃ½Ìå´æÈ¡¿ØÖÆµØÖ·£¬²¢ÇÒ½öÈÃÌØ¶¨µÄµçÄÔÀ´Ê¹ÓÃÍøÂç·şÎñ¡£µ±Äú°²×°Â·ÓÉÆ÷£¬Â·ÓÉÆ÷±¾ÉíµÄMACµØÖ·»á±»ISP²ì¾õ²¢Ôì³ÉÍøÂçÎŞ·¨×÷Òµ¡£±´¶û½ğÒÑÌá¹©Â·ÓÉÆ÷¼ÆËã»úµÄMACµØÖ·¡£Èç¹ûÄúÎŞ·¨È·¶¨ÄúµÄISPÊÇ·ñĞèÒª¼ì²éÔ­±¾µÄMACµØÖ·£¬Ö»Òª¸´ÖÆMACµØÖ·£¬²¢È·±£ÄúËùÊ¹ÓÃµÄµçÄÔËùÁ¬½ÓµÄÊÇÔÚÄú°²×°Â·ÓÉÆ÷Ç°ËùÊ¹ÓÃµÄµ÷ÖÆ½âµ÷Æ÷¡£Ñ¡È¡"¸´ÖÆMACµØÖ·"ÔÙÑ¡È¡"Ì×ÓÃ±ä¸ü£¬ÄúµÄMACµØÖ·¼´ÒÑ±»Â·ÓÉÆ÷???'; // MAC is an acronym for Media Access Controller. All network components including cards, 
//'adapters, and routers, have a unique "serial number" called a MAC address. Your ISP may '+
//'record the MAC address of your computer\'s adapter and only let that particular computer '+ 
//'connect to the Internet service. When you install the router, the Router\'s own MAC address '+ 
//'will be "seen" by the ISP and may cause the connection not to work. Belkin has provided '+ 
//'the ability to clone (copy) the MAC address of the computer into the router. This MAC '+ 
//'address, in turn, will be seen by the ISP\'s system as the original MAC address and will '+ 
//'allow the connection to work. If you are not sure if your ISP needs to see the original '+ 
//'MAC address, simply clone the MAC address of the computer that was originally connected '+ 
//'to the modem. Cloning the address will not cause any problems with your network. <br> '+
//'To Clone your MAC address, make sure that you are using the computer which was ORIGINALLY '+
//'CONNECTED to your modem before the Router was installed. Click the "Clone MAC address" '+ 
//'button. Click "Apply Changes". Your MAC address is now cloned to the router. ';
g20='Óû¸ü¸ÄÂ·ÓÉÆ÷µÄÔË×÷ÆµµÀ£¬´ÓÑ¡µ¥ÏÂÑ¡È¡È¡ÆµµÀ£¬Ñ¡È¡"Ì×ÓÃ±ä¸ü"²¢´¢´æÉè¶¨¡£Äú¿ÉÒÔ¸ü¸ÄSSID¡£SSIDÊÇÍ¬µÈÓÚÎŞÏßÍøÂçÃû³Æ¡£Èç¹ûÄúËùÔÚµÄÇøÓòÓĞÆäËüµÄÎŞÏßÍøÂç£¬ÄúÓ¦¸ÃÎªÆäÃüÃû¡£Ä¬ÈÏÖµÎªbelkin54g¡£Óû¸ü¸ÄSSID£¬Ñ¡È¡SSIDÀ¸Î»²¢ÊäÈëÒ»¸öĞÂµÄÃû³Æ¡£Ñ¡È¡"Ì×ÓÃ±ä¸ü"Ê¹ĞÂµÄÉè¶¨ÖµÉúĞ§';  // To change the channel of operation of the Router, select the desired channel from the drop-down menu and select your channel. Click "Apply Changes" to save the setting. You 
 //'can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your '+
 //'area, you should give your wireless network a unique name. The default is Belkin_Pre-N_xxxxxx. To '+ 
//'change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.'; 
g21='¿ÉÒÔ½«ÄúµÄÎŞÏßÍøÂçÉè¶¨ÎªÒşĞÎ¡£Ö»Òª¹Ø±ÕSSID¹ã²¥¡£ÄúµÄÍøÂç¾Í²»»á³öÏÖÔÚÕ¾µãÉ¨Ãèµ¥ÖĞ¡£Site SurveyÊÇÒ»¸öĞí¶àÎŞÏßÍø¿¨¶¼ÓĞµÄÌØĞÔ£¬Ëû¿ÉÒÔÉ¨Ãè¿ÕÆøÖĞËùÓĞ¿ÉÊ¹ÓÃµÄÍøÂç²¢ÈÃµçÄÔ¿É´ÓÖĞÑ¡Ôñ¡£½«SSIDµÄ¹ã²¥¹Ø±Õ¿ÉÒÔÌá¸ß°²È«ĞÔ¡£'; // It is possible to make your wireless network nearly invisible. By turning off the broadcast 
//'of the SSID, your network will not appear in a site survey. Site Survey is a feature of '+
//'many wireless network adapters on the market today. It will scan the "air" for any available'+
//' network and allow the computer to select the network from the site survey. Turning off the '+
//'broadcast of the SSID will help increase security.';
g22='µ±ÄúÓû½«Â·ÓÉÆ÷µ±×öAPÊ±£¬Äú±ØĞëÎªÆäÖ¸¶¨Ò»¸öIPµØÖ·£¬´ËIPµØÖ·ĞèÂäÔÚÄúËùÁ¬½ÓµÄÍøÂç·¶Î§ÄÚ¡£Óû½øÈëÂ·ÓÉÆ÷½ø½×Éè¶¨Ö®½Ó¿Ú£¬ÔÚÍøÂçä¯ÀÀÆ÷ÊäÈëIPµØÖ·²¢µÇÂ¼'; // When using the Router as an Access Point, you must specify an IP address for the Access 
//' Point. This IP address must fall into the same range as the network that you will be'+
//' connecting it to. To access the advanced setup interface of the Router again, type in'+
//' the IP address in the web browser and login.';
g23='Ê¹ÓÃÎŞÏßÄ£Ê½ÇĞ»»'; // Using the Wireless Mode Switch 
g24= 'Ê¹ÓÃ´ËÇĞ»»Äú¿ÉÒÔÉèÖÃÂ·ÓÉÆ÷µÄÈıÖÖÎŞÏßÄ£Ê½¡£<br>'+
'1) 802.11g only<br>'+
'Èô½«Â·ÓÉÆ÷ÉèÖÃÎª´ËÄ£Ê½£¬ÔòÖ»ÄÜÊ¹ÓÃ·ûºÏ Pre-N ºÍ 802.11g µÄÉè±¸Á¬½ÓÍøÂç£¬ÅÅ³ıËÙ¶È½ÏÂıµÄ 802.11b Éè±¸¡£<br> '+
'2) 802.11g ºÍ 802.11b<br>'+
'Èô½«Â·ÓÉÆ÷ÉèÖÃÎª´ËÄ£Ê½£¬ÔòÊ¹ÓÃ·ûºÏ Pre-N¡¢802.11g ºÍ 802.11b µÄÉè±¸Á¬½ÓÍøÂç¡£<br>'+
'3)¹Ø±Õ'+
'´ËÄ£Ê½½«¹Ø±ÕÂ·ÓÉÆ÷µÄ·ÃÎÊµã£¬Òò´ËÃ»ÓĞÎŞÏßÉè±¸¿ÉÒÔÁ¬½ÓÍøÂç¡£µ±ÄúÀë¼ÒºÜ³¤Ê±¼ä»ò²»ĞèÒªÊ¹ÓÃÂ·ÓÉÆ÷µÄÎŞÏß¹¦ÄÜÊ±£¬¹Ø±ÕÂ·ÓÉÆ÷µÄÎŞÏß¹¦ÄÜÊÇ±£»¤ÍøÂçµÄ¼«¼Ñ·½·¨¡£';
// This switch allows you to set the Router's wireless modes. There are three modes.
// 1) 802.11g only<br>'+ Setting the Router to this mode will allow only Pre-N and 802.11g-compliant devices to join the network, keeping out any slower 802.11b devices.<br> '+
//2) 802.11g & 802.11b<br>'+
//Setting the Router to this mode will let Pre-N-, 802.11g-, and 802.11b-compliant devices to join the network. <br>'+
//3) Off<br>'+
//'This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time. ';

g25='ĞéÄâ·şÎñÆ÷'; // Virtual Servers 
g26=	'´Ë¹¦ÄÜÌá¹©ÄúÂ·ÓÉÖÁÍøÂçÍâ²¿µÄ·şÎñ£¬ÀıÈç:ÍøÂç·şÎñÆ÷(Á¬½Ó¶Ë¿Ú80)£¬FTP·şÎñÆ÷(Á¬½Ó¶Ë¿Ú21)£¬»òÆäËüÍ¸¹ıÄúµÄÂ·ÓÉÆ÷ËùÄÜ¹»Ìá¹©µÄ·şÎñ¡£ÄúµÄÄÚ²¿¼ÆËã»ú±»·À»ğÇ½±£»¤£¬ËùÒÔÔÚÍøÂçÉÏ²¢²»»á±»"¿´¼û"¡£Èç¹ûÎªÁËÌØ¶¨µÄÓ¦ÓÃ³ÌĞò£¬ÄúĞèÒªÊ¹ÓÃĞéÄâ·şÎñÆ÷ÉèÖÃ£¬Ò»°ãÓ¦ÓÃ³ÌĞòµÄÇåµ¥½«»á±»Ìá¹©¸øÄú¡£Èç¹ûÄúËùĞèÒªµÄÓ¦ÓÃ³ÌĞò²»ÔÚÇåµ¥ÉÏ£¬Äú±ØĞëÁªÂçÄúµÄÓ¦ÓÃ³ÌĞòÌá¹©ÉÌ£¬ÁË½âÄúĞèÒªÄÄÒ»ÖÖ³ÌĞò¡£ÈôÄúÒª´ÓÌá¹©µÄÇåµ¥ÖĞÑ¡Ôñ£¬´ÓÄúËùĞèÒªµÄÓ¦ÓÃ³ÌĞòÄÇÒ»ĞĞ£¬È»ºóÑ¡È¡"½øÈë"¡£ÄúµÄÉè¶¨½«»á¸Ä±äÎªÄúËùÖ¸¶¨µÄÄÇÒ»ĞĞ¡£Ö®ºóÑ¡È¡"Ì×ÓÃ±ä¸ü"À´´¢´æÄú¸ü¸ÄµÄÉè¶¨¡£Èô??? '; // This function will allow you to route external (Internet) calls for services such as 
	//'a web server (port 80), FTP server (Port 21), or other applications through your Router '+ 
	//'to your internal network. Since your internal computers are protected by a firewall, '+
	//'machines from the Internet cannot get to them because they cannot be \'seen\'. If you need '+ 
	//'to configure the Virtual Server function for a specific application, a list of common '+
	//'applications has been provided. If your application is not listed, you will need to contact '+ 
	//'the application vendor to find out which port settings you need. To select from the provided '+
	//'list, select your application from the drop-down list. Select the row that you want to copy '+
	//'the settings to from the drop-down list next to "to row", then click "Enter". The settings '+
	//'will be transferred to the row you specified. Click "Apply Changes" to save the setting for '+
	//'that application. To manually enter settings, enter the IP address in the space provided for '+
	//'the internal (server) machine, the port(s) required to pass (use a comma between multiple '+
	//'ports), select the port type (TCP or UDP) and click "Apply Changes". You can only pass one '+
	//'port per internal IP address. Opening ports in your firewall can pose a security risk. You '+
	//'can enable and disable settings very quickly. It is recommended that you disable the settings '+
	//'when you are not using a specific application. ';
g27='ÓÃ»§IP·À»ğÇ½'; // Client IP filters 
g28=	'Â·ÓÉÆ÷¿ÉÒÔÉè¶¨ÔÚÄ³Ğ©ÌØ¶¨ÈÕÆÚ»òÌØ¶¨Ê±¼äÎŞ·¨Á¬½Óµ½ÍøÂç¡¢µç×ÓÓÊ¼ş¡¢»òÆäËüÍøÂç·şÎñ¡£ÕâÏîÉè¶¨¿ÉÔÚÒ»Ì¨µçÄÔ¡¢Ò»ÏµÁĞµÄµçÄÔ»òÊÇºÜ¶àµçÄÔ¡£ÀıÈç:ÄúÒªÏŞÖÆÄ³Ò»Ì¨ÌØ¶¨µÄµçÄÔ£¬ÊäÈëÆäIPµØÖ·ÓëÄúÓûÏŞÖÆµÄIP·¶Î§¡£½ÓÏÂÀ´ÔÚ¶Ë¿ÚÀ¸Î»ÊäÈë80£¬È»ºóÑ¡ÔñTCP£¬½ÓÏÂÀ´Ñ¡ÔñBlock¡£ÄúÒ²¿ÉÒÔÑ¡ÔñÓÀÔ¶×èµ²£¬ÔÚÉÏ·½Ñ¡Ôñ¿ªÊ¼ÈÕÆÚÓëÊ±¼ä£¬È»ºóÔÚÏÂ·½Ñ¡Ôñ½áÊøÈÕÆÚÓëÊ±¼ä¡£Ñ¡Ôñ"Ì×ÓÃ±ä¸ü"ºó£¬ÕâÌ¨µçÄÔÔÚÄúËùÖ¸¶¨µÄÊ±¼ä¾ÍÎŞ·¨Á¬½Óµ½ÄãËùÖ¸¶¨µÄÏŞÖÆIP¡£×¢Òâ:ÇëÈ·ÈÏÄúÑ¡ÔñÁËÕıÈ·µÄÊ±Çø'; // The Router can be configured to restrict access to the Internet, e-mail or other network 
	//'services at specific days and times. Restriction can be set for a single computer, a '+
	//'range of computers, or multiple computers. To restrict Internet access to a single '+
	//'computer for example, enter the IP address of the computer you wish to restrict access '+ 
	//'to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. '+
	//'You can also select Always to block access all of the time. Select the day to start on '+
	//'top, the time to start on top, the day to end on the bottom and the time to stop on the '+
	//'bottom. Click "Apply Changes". The computer at the IP address you specified will now be '+
	//'blocked from Internet access at the times you specified. Note: be sure you have selected '+
	//'the correct time zone under Utilities> System Settings> Time Zone. ';
g29=' MACµØÖ·¹ıÂË'; // MAC Address Filtering 
g30=	'Ã½Ìå´æÈ¡¿ØÖÆµØÖ··À»ğÇ½ÄÜ¹»ÈÃÄúÉè¶¨ÄÄĞ©µçÄÔ±»ÔÊĞíÁ¬½Ó¡£ÈÎºÎ²»±»ÔÊĞíµÄµçÄÔ¶¼½«ÎŞ·¨´æÈ¡ĞÅÏ¢¡£µ±ÄúÆôÓÃÕâÏî¹¦ÄÜ£¬Äú±ØĞëÔÚÄúÍøÂçÖĞµÄÃ¿Ò»Ì¨µçÄÔ¶¼ÊäÈëMACµØÖ·£¬"Block"¹¦ÄÜÄÜÈÃÄú¼òµ¥µØ¿ªÆô»ò¹Ø±ÕÍøÂç´æÈ¡¹¦ÄÜ£¬ÎŞĞè´ÓÇåµ¥ÉÏÔö¼Ó»òÒÆ³ıMACµØÖ·¡£ÓûÊ¹ÓÃÕâÏî¹¦ÄÜ£¬Ñ¡È¡"¿ªÆôÃ½Ìå´æÈ¡¿ØÖÆµØÖ··À»ğÇ½"£¬½ÓÏÂÀ´ÔÚÃ¿Ò»Ì¨¼ÆËã»úÊäÈëÃ½Ìå´æÈ¡¿ØÖÆ·À»ğÇ½µØÖ·£¬ÄúÖ»ÒªÑ¡È¡"Ôö¼Ó"£¬È»ºóÔÚ¿Õ°××Ö¶ÎÖĞÊäÈëÃ½Ìå´æÈ¡¿ØÖÆ·À»ğÇ½£¬È»ºóÑ¡Ôñ"Ì×ÓÃ±ä¸ü"¼´¿É¡£ÈôÒª´ÓÇåµ¥ÉÏÉ¾³ıÃ½Ìå´æÈ¡¿ØÖÆµØÖ·£¬Ö»ÒªÔÚÄúÓûÉ¾³ıµÄÃ½Ìå´æÈ¡¿ØÖÆµØÖ·ÅÔ±ß°´"É¾³ı"¼´¿É£¬??? '; // The MAC Address Filter is a powerful security feature that allows you to specify which 
	//'computers are allowed on the network. Any computer attempting to access the network that '+
	//'is not specified in the filter list will be denied access. When you enable this feature, '+
	//'you must enter the MAC address of each client on your network to allow network access to '+
	//'each. The "Block" feature lets you turn on and off access to the network easily for any '+
	//'computer without having to add and remove the computer\'s MAC address from the list. To '+
	//'enable this feature, select "Enable MAC Address Filtering". Next, enter the MAC address '+
	//'of each computer on your network by clicking "Add" and entering the MAC address in the '+
	//'space provided. Click "Apply Changes" to save the settings. To delete a MAC address from '+
	//'the list, simply click "Delete" next to the MAC address you wish to delete. Click "Apply '+
	//'Changes" to save the settings. <br><br>'+
	//'Note: you will not be able to delete the MAC address of the computer you are using to '+ 
	//'access the Router\'s administrative functions. (The computer you are using now). ';
g31=	'·Ç¾üÊÂÇø¹¦ÄÜÄÜÈÃÄúÖ¸¶¨ÌØ¶¨ÈÎÒ»ÔÚÄúÇøÓòÖĞµÄµçÄÔ±»ÍøÂçµØÖ··À»ğÇ½È¡´ú¡£Èç¹ûÍøÂçµØÖ··¢ÉúÎÊÌâ£¬ÕâÏî¹¦ÄÜÊÇ±ØĞèµÄ£¬ÓÉÆäµ±ÄúÊ¹ÓÃµçÄÔÓÎÏ·»òÊÇÊÓÑ¶»áÒéÊ±¡£ÈôÁÙÊ±×´¿ö·¢ÉúÇëÊ¹ÓÃ´ËÏî¹¦ÄÜ¡£<font class="redBold">ÕâÌ¨ÔÚ·Ç¾üÊÂÇøµÄµçÄÔ²¢Î´ÊÜµ½ºÚ¿Í¹¥»÷µÄ±£»¤</font>£¬½«¼ÆËã»ú·ÅÖÁ·Ç¾üÊÂÇø£¬ÊäÈë×îºóÒ»¸öIPµØÖ·µÄÊı×Ö£¬È»ºóÑ¡È¡"ÆôÓÃ"£¬ÒªÈÃ¸ü¸ÄÉúĞ§ÇëÑ¡È¡"Ì×ÓÃ±ä¸ü"¡£ÈôÄúÒªÊ¹ÓÃ¶à¸ö¹ãÓòÍøIPµØÖ·£¬ÇëÑ¡È¡·Ç¾üÊÂÇøÖ÷»úÄÜ¹»Ö±½ÓÁª»úµÄ¹ãÓòÍøIPµØÖ·£¬ÊäÈë·Ç¾üÊÂÇøÖ÷»úµçÄÔIPµØÖ·µÄ×îºóÁ½Âë£¬Ñ¡Ôñ"ÆôÓÃ"È»ºóÑ¡È¡"Ì×ÓÃ±ä¸ü"'; // The DMZ feature allows you to specify one computer on your network to be placed 
	//'outside of the NAT firewall. This may be necessary if the NAT feature is causing '+
	//'problems with an application such as a game or video conferencing application. '+
	//'Use this feature on a temporary basis. '+
	//'<font class="redBold">'+
	//'The computer in the DMZ is not protected from hacker attacks.</font> '+ 
	//'To put a computer in the DMZ, enter the last digits of its IP address in the '+ 
	//'IP field and select "Enable". Click "Apply Changes" for the change to take effect. '+ 
	//'If you are using multiple static WAN IP addresses, it is possible to select which '+
	//'WAN IP address the DMZ host will be directed to. Type in the WAN IP address you '+
	//'wish the DMZ host to direct to, enter the last two digits of the IP address of '+
	//'the DMZ host computer, select "Enable" and Click "Apply Changes". ';
g32='×èµ²ICMP Ping '; // Block ICMP Ping 
g33=	'µçÄÔºÚ¿ÍÍ¨³£»áÊ¹ÓÃ"Pinging"À´Ñ°ÕÒÆäÓû¹¥»÷µÄÄ¿±ê¡£Í¸¹ıÕì²âÒ»¸öÌØ¶¨µÄIPµØÖ·²¢ÊÕµ½»ØÓ¦£¬µçÄÔºÚ¿Í¿ÉÅĞ¶Ï³öÊÇ·ñÓĞÀûÒæµÄĞÅÏ¢¿ÉÒÔ½ØÈ¡¡£±¾Â·ÓÉÆ÷¿ÉÒÔÉè¶¨²»¸øÓèÍâÀ´µÄICMPÕì²â»ØÓ¦£¬Èç´ËÒ»À´±ã¿ÉÒÔÌá¸ßÄúµÄ¼ÆËã»ú°²È«²ã¼¶¡£Òª¹Ø±ÕµçÄÔ¶ÔPingµÄ»ØÓ¦£¬ÇëÑ¡È¡"×èµ²ICMP Ping"È»ºóÑ¡È¡"Ì×ÓÃ±ä¸ü"¡£'; // Computer hackers use what is known as "Pinging" to find potential victims on the 
	//'Internet. By pinging a specific IP address and receiving a response from the IP '+
	//'address, a hacker can determine that something of interest might be there. The '+
	//'Router can be set up so it will not respond to an ICMP Ping from the outside. This '+ 
	//'heightens the level of security of your Router. To turn off the ping response, select '+ 
	//'"Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. '; 
g34='¹ÜÀíÔ±ÃÜÂë'; // Administrator Password 
g35='±¾Â·ÓÉÆ÷²¢Î´Éè¶¨ÈÎºÎÃÜÂë¡£ÈôÄúÒªÌá¸ß°²È«²ã¼¶£¬Äã¿ÉÒÔÏÖÔÚÉè¶¨¡£ÇëÍ×ÉÆ±£¹ÜÄúµÄÃÜÂë£¬Î´À´Äú½«ĞèÒª´ËÃÜÂëÀ´Ê¹ÓÃ´ËÂ·ÓÉÆ÷¡£ÈôÄúÒªÊ¹ÓÃÔ¶³Ì¹ÜÀí¹¦ÄÜ£¬ÎÒÃÇ½¨ÒéÄú×îºÃÉè¶¨ÃÜÂë¡£ÍË³öÊ±¼äÄÜÈÃÄúÉè¶¨ÄúÄÜ¹»Ê¹ÓÃÂ·ÓÉÆ÷½ø½×Éè¶¨µÄÊ±¼ä³¤¶È¡£µ±Äú¿ªÊ¼ÏĞÖÃÊ±£¬¶¨Ê±Æ÷»á¿ªÊ¼¼ÇÊ±¡£ÀıÈç:ÄúÒÑ¾­ÔÚ½ø½×Éè¶¨ÖĞ×öÁË¸ü¸Ä£¬Î´µãÑ¡"ÍË³ö"¾ÍÀë¿ªµçÄÔ£¬¼ÙÉèÄúÉè¶¨ÍË³öÊ±¼äÎªÊ®·ÖÖÓ£¬ÔòÔÚÄúÀë¿ªµçÄÔÊ®·ÖÖÓÖ®ºó£¬ÏµÍ³¾Í»á×Ô¶¯½«ÄúÍË³ö¡£ÕâÏî¹¦ÄÜÊÇÎªÁËÌá¸ß°²È«ĞÔ£¬ÏµÍ³Ô¤ÉèµÄÍË³öÊ±¼äÎªÊ®·ÖÖÓ¡£×¢Òâ:ÔÚÍ¬Ò»Ê±¼äÄÚÖ»ÓĞÒ»Ì¨µçÄÔ¿ÉÒÔµÇÂ¼ÖÁ½ø½×Éè¶¨µÄ½Ó¿Ú¡£'; // The Router ships with NO password entered. If you wish to add a password for more 
//'security, you can set a password here. Keep your password in a safe place, as you '+
//'will need this password if you need to log into the router in the future. It is '+
//'also recommended that you set a password if you plan to use the Remote management '+
//'feature of this Router. <br><br>'+
//'The login timeout option allows you to set the period of time that you can be logged '+ 
//'into the Router\'s advanced setup interface. The timer starts when there has been no '+
//'activity. For example, you have made some changes in the advanced setup interface, '+
//'then left your computer alone without clicking "Logout". Assuming the timeout is set '+
//'to 10 minutes, then 10 minutes after you leave, the login session will expire. You '+
//'will have to login to the router again to make any more changes. The login timeout '+
//'option is for security purposes and the default is set to 10 minutes. As a note, only '+
//'one computer can be logged into the Router\'s advanced setup interface at one time. ';
g36='Ê±¼äÓëÊ±Çø'; // Time and Time Zone 
g37=	'ÕâÌ¨Â·ÓÉÆ÷µÄÊ±¼äÍ¸¹ı¼òÒ×ÍøÂçÊ±¼äÍ¨Ñ¶Ğ­ÒéÉè¶¨¡£Èç´Ë¿ÉÈÃÂ·ÓÉÆ÷ÓëÈ«ÇòÍøÂçÊ±¼äÍ¬²½¡£Â·ÓÉÆ÷ÖĞµÄÍ¬²½Ê±ÖÓÊÇÓÃÀ´¼ÇÂ¼Óë¿ØÖÆÊ¹ÓÃÕßµÇÈë¡£ÇëÑ¡ÔñÄãËù¾Ó×¡µØµÄÊ±Çø¡£ÈôÄú×¡ÔÚÏÄÊ±ÖÆµØÇø£¬ÔòÑ¡Ôñ"ÆôÓÃÏÄÊ±ÖÆ"¡£ÏµÍ³¿ÉÄÜ²»»áÂíÉÏ¸üĞÂ£¬ÇëµÈºòÖÁÉÙ15·ÖÖÓÈÃÂ·ÓÉÆ÷ÁªÂçÊ±Çø·şÎñÆ÷²¢µÃµ½»ØÓ¦£¬ÄúÎŞ·¨×ÔĞĞÉè¶¨Ê±¼ä¡£ '; // The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server.
	//'This allows the Router to synchronize the system clock to the global Internet. The '+ 
	//'synchronized clock in the Router is used to record the security log and control client '+  
	//'filtering. Select the time zone that you reside in. If you reside in an area that '+ 
	//'observes Daylight Saving, then place a checkmark in the box next to "Enable Daylight '+ 
	//'Saving". The system clock may not update immediately. Allow at least 15 minutes for '+ 
	//'the router to contact the time servers on the Internet and get a response. You cannot '+ 
	//'set the clock yourself. '; 
g38='Ô¶³Ì¹ÜÀí'; // Remote Management 
g39=	'ÔÚÄúÆôÓÃ´ËÏî¹¦ÄÜÇ°£¬<font class="plaintext_bold">ÇëÈ·ÈÏÄúÒÑ¾­Éè¶¨¹ÜÀíÔ±ÃÜÂë</font>¡£Ô¶³Ì¹ÜÀíÄÜÈÃÄú´ÓÍøÂçµÄÈÎºÎµØ·½×öÂ·ÓÉÆ÷µÄÉè¶¨¡£×Ü¹²ÓĞÁ½ÖÖÔ¶³Ì¹ÜÀíÂ·ÓÉÆ÷µÄ·½Ê½£¬µÚÒ»ÖÖ·½Ê½¿ÉÒÔ´ÓÈÎºÎµØ·½´æÈ¡Â·ÓÉÆ÷£¬Ö»ÒªÑ¡ÔñÈÎºÎ¿ÉÒÔÔ¶³Ì¹ÜÀíÂ·ÓÉÆ÷µÄIPµØÖ·¡£´ÓÍøÂçÉÏµÄÈÎºÎµØ·½ÊäÈëÄú¹ãÓòÍøµÄIP£¬Äú¿ÉÒÔ¿´µ½Ò»¸öÒªÇóÄúÊäÈëÂ·ÓÉÆ÷ÃÜÂëµÄ´°¿Ú¡£µÚ¶şÖÖ·½Ê½ÄÜ¹»ÈÃÖ¸¶¨µÄIPµØÖ·¶ÔÂ·ÓÉÆ÷Ô¶³Ì¹ÜÀí¡£Õâ¸ö·½Ê½±È½Ï°²È«£¬µ«ÊÇ½ÏÎª²»±ã¡£ÈôÒªÊ¹ÓÃÕâÖÖ·½Ê½£¬ÊäÈëÄú½«Òª´æÈ¡µÄÂ·ÓÉÆ÷Ö®IPµØÖ·£¬È»ºóÑ¡Ôñ"Ö»ÓĞÕâ¸öIPµØÖ·¿É¶ÔÂ·ÓÉÆ÷Ô¶³Ì²Ù×÷"¡£ÔÚÄú¿ªÆô´ËÏî¹¦ÄÜÇ°¡£ÎÒÃÇÇ¿ÁÒ½¨ÒéÄúÉè¶¨Ò»¸ö¹ÜÀíÕß???';// Before you enable this function,
	//'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	//'Remote management allows you to make changes to your Router\'s settings from anywhere '+ 
	//'on the Internet. There are two methods of remotely managing the router. The first '+ 
	//'method is to allow access to the router from anywhere on the Internet by selecting '+ 
	//'"Any IP address can remotely manage the router". By typing in your WAN IP address '+ 
	//'from any computer on the Internet, you will be presented with a login screen where '+ 
	//'you need to type in the password of your router. The Second method is to allow a '+ 
	//'specific IP address only to remotely manage the router. This is more secure, but less '+  
	//'convenient. To use this method, enter the IP address you know you will be accessing '+ 
	//'the Router from in the space provided and select "Only this IP address can remotely '+ 
	//'manage the Router". Before you enable this function, it is STRONGLY RECOMMENDED that '+ 
	//'you set your administrator password. Leaving the password empty will potentially open '+ 
	//'your router to intrusion. ';
g40='ÆôÓÃNAT ';// NAT Enabling 
g41=	'ÔÚÄúÆôÓÃ´ËÏî¹¦ÄÜÇ°£¬<font class="plaintext_bold">ÇëÈ·ÈÏÄúÒÑ¾­Éè¶¨¹ÜÀíÕßÃÜÂë</font>¡£NAT¿ÉÒÔÈÃÄúÓëÍøÂçÖĞµÄÆäËü¼ÆËã»ú·ÖÏíISPËùÌá¹©µÄÍ¬Ò»¸öIPµØÖ·¡£½ø½×Ê¹ÓÃÕßÓ¦¸Ã½öÊ¹ÓÃ´ËÏî¹¦ÄÜ¡£µ±ÄúµÄISPÌá¹©Äú¶à¸öIPµØÖ·£¬»òÊÇÄúĞèÒª½øĞĞ½ø½×ÏµÍ³ÅäÖÃ¶ø¹Ø±ÕNATÊ±£¬¾ÍĞèÊ¹ÓÃ´ËÏî¹¦ÄÜ¡£Èç¹ûÄú½öÊ¹ÓÃµ¥Ò»IPµØÖ·¶øÄúµÄNATÊÇ¹Ø±ÕÊ±£¬ÄúµÄµçÄÔ½«ÎŞ·¨Áª»úµ½ÒòÌØÍø¡£ÆäËüµÄÎÊÌâÒ²ÓĞ¿ÉÄÜ»á·¢Éú£¬½«NAT¹Ø±ÕÒ²½«»á¹Ø±ÕÄúµÄ·À»ğÇ½¹¦ÄÜ';  // Before you enable this function, 
	//'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	//'Network Address Translation (NAT) is the method by which the router shares the single '+ 
	//'IP address assigned by your ISP with the computers on your network. Advanced users '+ 
	//'should only use this function. This function should only be used if your ISP assigns '+ 
	//'you multiple IP addresses or you need NAT disabled for an advanced system configuration. '+  
	//'If you have a single IP address and you turn NAT off, the computers on your network will '+ 
	//'not be able to access the Internet. Other problems may also occur. Turning off NAT will '+ 
	//'disable your firewall functions. '; 
g42=	'"È«ÇòËæ²å¼´ÓÃ"Ìá¹©ÎŞÊèÂ©µÄ×÷Òµ£¬º­¸ÇÁËÓïÒôÑ¶Ï¢¡¢ÊÓÑ¶Ñ¶Ï¢¡¢ÓÎÏ·¼°ÆäËüÈ«ÇòËæ²å¼´ÓÃµÄÓ¦ÓÃ³ÌĞò¡£Ä³Ğ©Ó¦ÓÃ³ÌĞòĞèÒªÂ·ÓÉÆ÷µÄ·À»ğÇ½Í¸¹ıÌØ¶¨µÄ·½Ê½×éÌ¬·½ÄÜÔË×÷¡£Í¨³£»áĞèÒª´ò¿ªTCPÓëUDPµÄÁ¬½Ó¶Ë¿Ú£¬ÓĞÊ±»¹ĞèÒªÉè¶¨´¥·¢³ÌĞòÁ¬½Ó¶Ë¿Ú¡£È«ÇòËæ²å¼´ÓÃ¿ÉÓëÂ·ÓÉÆ÷Áª»ú£¬Ëü»á¸æÖªÂ·ÓÉÆ÷ºÎ´¦ĞèÒª·À»ğÇ½×éÌ¬¡£´ËÂ·ÓÉÆ÷µÄÈ«ÇòËæ²å¼´ÓÃ¹¦ÄÜÊÇ¹Ø±ÕµÄ¡£Èç¹ûÄúÓûÊ¹ÓÃ´Ë¹¦ÄÜ£¬Ö»ÒªÔÚ¹¤¾ß³ÌĞòÒ³ÃæÑ°ÕÒ"ÆôÓÃÈ«ÇòËæ²å¼´ÓÃ"È»ºóÑ¡È¡"ÆôÓÃ"£¬ÔÙÑ¡È¡"Ì×ÓÃ±ä¸ü"¼´¿É'; // UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice 
	//'messaging, video messaging, games, and other applications that are UPnP compliant. Some '+
	//'applications require the Router\'s firewall to be configured in a specific way to operate '+
	//'properly. This usually requires opening TCP and UDP ports and in some instances setting '+
	//'trigger ports. An application that is UPnP compliant has the ability to communicate with '+
	//'the Router, basically "telling" the Router which way it needs the firewall configured. '+
	//'The Router ships with the UPnP feature disabled. If you are using any applications that '+ 
	//'are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the '+ 
	//'UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. '+ 
	//'Click "Apply Changes" to save the change. ';
g43='×Ô¶¯Firmware¸üĞÂÌáĞÑ'; // Automatic Firmware Update Notification 
g44='´ËÂ·ÓÉÆ÷ÄÚ½¨×Ô¶¯È·ÈÏĞÂ°æ±¾µÄÈíÌå²¢ÌáĞÑÄúÊÇ·ñÓĞĞÂéíÌå¿É¹©¸üĞÂ¡£µ±ÄúµÇÈëÂ·ÓÉÆ÷µÄ½ø½×Éè¶¨½Ó¿ÚÊ±£¬Â·ÓÉÆ÷»áÈ·ÈÏÊÇ·ñÓĞĞÂéíÌå¿É¹©¸üĞÂ¡£Èç¹ûÓĞ£¬Â·ÓÉÆ÷»áÍ¨ÖªÄú¡£Äú¿ÉÑ¡ÔñÏÂÔØĞÂµÄéíÌå»òÊÇºöÂÔ¸ÃÌáÊ¾¡£´ËÏî¹¦ÄÜÉè¶¨Îª¹Ø±Õ£¬Èç¹ûÄúÒªÆôÓÃ£¬Ö»ÒªÑ¡È¡"ÆôÓÃ"£¬È»ºóÑ¡È¡"Ì×ÓÃ±ä¸ü"¼´¿É ';// The Router has the capability built-in to automatically check for a new version of 
//'firmware and alert you that the new firmware is available. When you log into the '+ 
//'Router advanced interface, the router will perform a check to see if new firmware '+ 
//'is available. If new firmware is available, you will be notified. You can choose to '+ 
//'download the new version or ignore it. The router ships with this feature disabled. '+  
//'If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='ÎŞÏß°²È«'; // Wireless Security 
g46='Ê¹ÓÃ¼ÓÃÜ¹¦ÄÜ¿ÉÈÃÄúÈ·±£ÎŞÏßÍøÂçµÄ°²È«²ã¼¶¡£ÔÚÍ¬Ò»Ê±¼äÄÚÖ»ÄÜÊ¹ÓÃÒ»ÖÖ°²È«²ã¼¶Éè¶¨¡£ËùÒÔÊ¹ÓÃÕß±ØĞëÑ¡ÔñÄÜ¹»Ö§³ÖËùÓĞÍøÂç×°ÖÃµÄÄ£Ê½¡£±´¶û½ğ²úÆ·¹²ÓĞÎåÖÖ°²È«²ã¼¶Éè¶¨¿É¹©ÄúÑ¡Ôñ<br><br>' +
'1)¹Ø±Õ¡£Ã»ÓĞÆôÓÃµÄ¼ÓÃÜÄ£Ê½¡£ËùÓĞÍøÂçÉÏµÄÊ¹ÓÃÕß½Ô¿ÉÁ¬½ÓÍøÂç²¢µÇÂ¼<br><br>' +
'2)WPA PSK - ¼ÒÓÃ(ÎŞ·şÎñÆ÷)¡£ÎŞÏß±£È«´æÈ¡ÊÇÒ»ÖÖÈÃËùÓĞµÄĞÅÏ¢°ü×°¶¼ÓĞ²»Í¬µÄ¼ÓÃÜ´úÂë»òÊÇÃÜÔ¿¡£ÓÉÓÚÃÜÔ¿³ÖĞø¸Ä±ä£¬ËùÒÔWPAÊÇ·Ç³£°²È«µÄ¡£¹²ÓĞÁ½ÖÖWPA£¬Ò»ÖÖÊÇWPA-PSK (Pre-Shared Key)£¬ÁíÒ»ÖÖÊÇWPA-Radius Server¡£Á½Õß×îÏÔ×ÅµÄ²î±ğÔÚÓÚÒ»¸öĞèÒª·şÎñÆ÷Ò»¸ö²»ĞèÒª¡£WPA-PSKÊÇÌá¹©Ã»ÓĞ·şÎñÆ÷µÄ¼ÒÓÃ»òĞ¡ĞÍÆóÒµÓÃ»§¡£PSK¼ÓÃÜÃÜÔ¿ÊÇ²úÉúÓëÒ»¸ö×Ö·û´®»òÓï¾ä¡£ºÜÃ÷ÏÔµØ£¬×î´óµÄÎ£»úÔÚÓÚµ±ÓĞÈËÕÒ³öÄúµÄPass Phrase×Ö·û´®»òÓï¾ä¡£<br><br>'+
'a. TKIP(ÔİÊ±ÃÜÔ¿ÍêÕûĞÔÍ¨Ñ¶Ğ­Òé)Ö¸AES(½ø½×¼ÓÃÜ±ê×¼) WPAÉè¶¨ĞèÒªÊ¹ÓÃÕßÑ¡ÔñÊ¹ÓÃTKIP¼ÓÃÜ»òAES¼ÓÃÜ¡£WPA±ê×¼Ö¸¶¨TKIP£¬ËùÒÔ´ËÎªÄ¬ÈÏÖµ¡£³ı´ËÖ®Íâ£¬TKIPÓ¦Ìá¹©±ÈÂôÖ÷¸ü¼ÑµÄĞ§ÄÜ£¬ÒòÎªÓĞĞí¶àÎŞÏß²úÆ·ÓÀÔ¶ÎŞ·¨Éı¼¶ÎªAES¡£AESÊÇÒ»ÖÖ»ùÓÚ802.11iµÄ×îĞÂ¼ÓÃÜ¼¼Êõ¡£ĞÂµÄWPA±ê×¼½«¿ÉÄÜÊ¹ÓÃAES£¬ËäÈ»Ä¿Ç°À´ËµAESÉĞÎ´ÆÕ¼°£¬µ«ÊÇÓĞĞ©Ê¹ÓÃÕß½ÏÏ²°®Ê¹ÓÃ´Ë¿Æ¼¼¡£²»¹ÜÊ¹ÓÃÄÄÒ»ÖÖ±ê×¼£¬ËùÓĞµÄÍøÂç²úÆ·¶¼Ò»¶¨ÒªÓÃÒ»ÑùµÄ¼¼Êõ±ê×¼<br><br>'+
'b. Pre-Shared Key ÊäÈëÒ»¸ö³¬¹ı40¸ö×Ö·ûµÄµ¥×Ö»ò´Ê×é£¬Í¬Ñù£¬PSKÒ»¶¨Òª¿ÉÒÔÊ¹ÓÃÔÚÃ¿Ò»¸öÍøÂçÖĞµÄÎŞÏßÉè±¸¡£Çë×¢ÒâÉÏ·½ºÍÏÂ·½À¸Î»µÄ²»Í¬(´óĞ´N¸úĞ¡Ğ´nÊÇ²»Ò»ÑùµÄ)¡£×î¼òµ¥ÆÆ»ñÄúÍøÂç°²È«µÄ·½Ê½¾ÍÊÇ²Â³öÄúµÄPSKÂë<br><br>'+
'3) 128-bit WEP  Ö±µ½×î½ü£¬128-bit WEP(Wired Equivalent Privacy)ÊÇÎŞÏß¼ÓÃÜµÄ±ê×¼¡£Èç¹û²»ÊÇÄúËùÓĞµÄÎŞÏßÉè±¸Ö§³ÖWPA£¬128bitWEPÈÔ¿ÉÒÔÌá¹©¼«¼ÑµÄ°²È«Ñ¡Ôñ¡£ÏµÍ³»áÒªÇóÄúÊäÈëÒ»¸öÊ®Áù½øÖÆµÄÊı×Ö£¬»òÄú¿ÉÒÔÈÃÆä×ÔĞĞ²úÉú<br><br>'+
'4) 64-bit WEP ±´¶û½ğ½¨ÒéÊ¹ÓÃ64-bit WEPÄ£Ê½£¬Èç¹ûÍøÂçÖĞÓĞĞ©Éè±¸²»Ö§³ÖWPA»ò128-bit WEP<br><br>'+
'5) WPA - Radius·şÎñÆ÷(´ËÄ£Ê½¿ÉÍ¸¹ı½ø½×°´Å¥´æÈ¡)¡£WPA·şÎñÆ÷Ö»ÄÜ¹©ÍøÂçµ±×öÒ»¸öRadius·şÎñÆ÷À´Ê¹ÓÃ¡£ËùÓĞµÄ²ÎÊıÔÚ´ËÄ£Ê½ÖĞ¶¼¿ÉÒÔ´ÓRadius·şÎñÆ÷µÄ¹ÜÀíÔ±»ñµÃ¡£²»ÏñÊÇWPA PSK£¬WPA·şÎñÆ÷»áÌá¹©·şÎñÆ÷Ò»¸öÃÜÔ¿¶ø·ÇÈÃÏµÍ³×ÔĞĞ²úÉú<br><br>';
// Using Encryption can help secure your wireless network. Only one type of security 
//'may be selected at a time. Therefore the customer must select a mode that is '+ 
//'supported on all network devices on the wireless network. This Belkin product has 5 '+ 
//+'possible Security settings:<br><br>'+
//'1) Disabled. No encryption is enabled in this mode. Open networks where all users are '+ 
//'             welcome sometimes prefer to not enable encryption.<br><br> '+ 
//'2) WPA PSK - Home (no server). WPA (Wireless protected Access) PSK is a recent '+ 
//'             standards-based security technique where each packet of information is '+ 
//'             encrypted with a different code, or key. Since the key is constantly changing, '+  
//'             WPA is very secure. There are two types of WPA, WPA-PSK (Pre-Shared Key), and '+ 
//'             WPA-Radius Server. Obviously the difference being that one requires a server '+  
//'             and one does not. WPA-PSK is for home and small business users who do not have '+  
//'             a server. The PSK encryption key is generated automatically from a string of '+  
//'             characters or Pass Phrase. Obviously the biggest security risk in WPA PSK is '+  
//'             if someone finds out your Pass Phrase.<br><br> '+ 
//'	a. TKIP verses AES. WPA setup requires the user to select whether to encrypt using '+  
//'	   TKIP or AES. The WPA standard specifies TKIP, so that is the default. Additionally '+  
//'	   TKIP should provide better compatibility between wireless products from different '+  
//'	   vendors since many wireless products will never be upgraded to AES. AES is a new '+  
//'	   encryption technique based on the un-ratified 802.11i standard. New WPA //standards '+  
//'	   are being considered using AES. Although AES is not as popular, some users may '+  
//'	   prefer to use this technique. Either way, all networks devices must use the same '+  
//'	   technique.<br><br> '+
//'	b. Pre-Shared Key. Enter any word or phrase up to 40 characters. The same PSK must '+  
//'	   also be used for every other wireless network device on the network. Watch out for '+  
//'	   upper and lower case differences ("n" is different than "N".) Remember, the easiest '+  
//'	   way to break your security is for someone to guess your PSK.<br><br> '+ 
//'3) 128-bit WEP. Until recently, 128-bit WEP (Wired Equivalent Privacy) was the standard for '+  
//'                wireless encryption. If not all of your wireless devices support WPA, 128bit '+  
//'                WEP still offers very good security option. It will require you to enter hex '+  
//'                numbers, or you can generate them automatically.<br><br> '+ 
//'4) 64-bit WEP. Belkin only recommends 64-bit mode on networks where some devices do not support '+  
//'               either WPA or 128bit WEP.<br><br> '+
//'5) WPA - Radius Server. (This mode is accessed from the Advanced Button). WPA'+
//'server is only  for networks using a Radius Server. All parameter for this mode'+
//'should be obtained from the administrator of your Radius Server. Unlike WPA PSK'+
//'WPA server passes the key from the server to the clients instead of generating it automatically.';
g57='Ê¹ÓÃ¶¯Ì¬ DNS'; //Using Dynamic DNS
g58='¶¯Ì¬ DNS ·şÎñÔÊĞíÄúÔÚĞí¶àÓò DynDNS.org ²úÆ·ÖĞÎª¶¯Ì¬ IP µØÖ·Ö¸¶¨¾²Ì¬Ö÷»úÃû±ğÃû£¬´Ó¶ø¸üÈİÒ×µØ´ÓÒòÌØÍøÉÏµÄ²»Í¬ÇøÓò·ÃÎÊÄúµÄÍøÂç¼ÆËã»ú¡£DynDNS.org ÎªÒòÌØÍøÉçÇøÃâ·ÑÌá¹©´Ë·şÎñ£¨×î¶àÎå¸öÖ÷»úÃû£©¡£<br>'+
'¶¯Ì¬ DNSSM ·şÎñÊÇ¼ÒÍ¥ÍøÕ¾¡¢ÎÄ¼ş·şÎñÆ÷µÄÀíÏëÑ¡Ôñ£¬»òÊ¹ÄúÔÚ¹¤×÷Ê±¸üÒ×·ÃÎÊÄúµÄ¼ÒÓÃ PC ºÍÒÑ´æ´¢µÄÎÄ¼ş¡£Ê¹ÓÃ´Ë·şÎñ¿ÉÈ·±£ÄúµÄÖ÷»úÃû×ÜÊÇÖ¸ÏòÄúµÄ IP µØÖ·£¬¶ø²»¹ÜÄúµÄ ISP ¶à¾Ã¶ÔÆä¸ü¸ÄÁËÒ»´Î¡£µ±ÄúµÄ IP µØÖ·¸ü¸ÄÊ±£¬ÄúµÄÅóÓÑºÍÍ¬ÊÂÔò¿ÉÍ¨¹ı·ÃÎÊ yourname.dyndns.org À´ÕÒµ½Äú£¡<br>'+
'<br>ÒªÃâ·Ñ×¢²áÄúµÄ¶¯Ì¬ DNS Ö÷»úÃû£¬Çë·ÃÎÊ http://www.dyndns.org¡£<br>'+
'<br><b>ÉèÖÃÂ·ÓÉÆ÷µÄ¶¯Ì¬ DNS ¸üĞÂ¿Í»§»ú</b><br>'+
'ÔÚÊ¹ÓÃ´Ë¹¦ÄÜÇ°£¬Äú±ØĞëÊ¹ÓÃDynDNS.org µÄÃâ·Ñ¸üĞÂ·şÎñ½øĞĞ×¢²á¡£Ò»µ©×¢²á£¬Çë°´ÒÔÏÂÖ¸Ê¾½øĞĞ²Ù×÷¡£<br>'+
'1. 	ÔÚ¡°ÓÃ»§Ãû¡±×Ö¶ÎÖĞ (1) ÊäÈëÄúµÄ DynDNS.org ÓÃ»§Ãû¡£<br>'+
'2. 	ÔÚ¡°ÃÜÂë¡±×Ö¶ÎÖĞ (2) ÊäÈëÄúµÄ DynDNS.org ÃÜÂë¡£<br>'+
'3. 	ÔÚ¡°ÓòÃû¡±×Ö¶ÎÖĞ (3) ÊäÈëÄúÍ¨¹ı DynDNS.org ÉèÖÃµÄ DynDNS.org ÓòÃû¡£<br>'
'4. 	µ¥»÷¡°¸üĞÂ¶¯Ì¬ DNS¡±¸üĞÂÄúµÄ IP µØÖ·¡£<br>'+
'ÎŞÂÛºÎÊ±µ±ÓÉÄúµÄ ISP Ö¸¶¨µÄ IP µØÖ·¸ü¸ÄÊ±£¬Â·ÓÉÆ÷¶¼»áÊ¹ÓÃÄúµÄĞÂ IP µØÖ·×Ô¶¯¸üĞÂ DynDNS.org µÄ·şÎñÆ÷¡£Äú»¹¿ÉÒÔÍ¨¹ıµ¥»÷¡°¸üĞÂ¶¯Ì¬ DNS¡±°´Å¥ (4) À´ÊÖ¶¯Íê³É´Ë²Ù×÷¡£<br>'; // 
fw1='¹Ì¼ş¸üĞÂ½øĞĞÖĞ'; // Firmware update in progress.
fw2='ÇĞÎğÖĞ¶ÏÂ·ÓÉÆ÷ÔËĞĞ»ò°Î³öÂ·ÓÉÆ÷µÄ²åÍ·£¬´ËÀà²Ù×÷»áµ¼ÖÂÂ·ÓÉÆ÷²»ÄÜ¹¤×÷'; //DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable
apply_text_1='¸ü¸ÄÉèÖÃ,ÇëÉÔµÈÒ»»á......<BR>\n '; // Applying changes. Please wait .......


//for print server main added by bin 02/04/2004
pm1='Print Service'
pm2='In this tab you can adjust settings to the Print Service section of the Print Server.'
pm3='Print Server Configuration'
pm4='Make adjustments to the Print Server Configuration.'
//for print server configuration added by bin 02/04/2004
pc1='Print Service > Print Server Configuration'
pc2='Print Server Name:'
pc3='Print Server Name >'
pc4='LPR Printing:'
pc5='This is always enabled. Belkin port uses LPR printing protocol.'
pc6='Raw TCP/IP Printing:'
pc7='Raw TCP/IP Printing protocol uses port 9100.'
pc8='Enable Raw TCP/IP Printing >'
pc9='FTP Printing:'
pc10='Print server accepts anonymous FTP to send file to printer'
pc11='Enable FTP Printing >'
pc12='No Printer connected'
pc13='Ready'
pc14='Out Of Paper'
pc15='Off Line'
pc16='Not Connected'
pc17='Printing'
pc18='Unknow Status'

parentalc_alert = 'Can not connect to outside'
parentalc_timeout = 'Timeout range: 1-60';
parentalc_alert_pwd = 'Password is incorrect'

g47='Printer Field';
g48='This line shows you the name of the printer that is connected to the router and the status of the printer.';
g49='Print Server Name';
g50='The print server name is used to identify the print server. The name can be changed to something more friendly if you prefer by typing in a new name such as "My Print Server" then clicking "Apply Changes"';
g51='LPR Printing (3)';
g52='The Belkin printer port uses LPR printing as the main method to print. ';
g53='Raw TCP/IP Printing';
g54='This feature allows clients to print to the Print Server using the standard TCP/IP printer port built into Windows XP and 2000 instead of the Belkin Port Monitor. Using Raw Printing requires the user to configure all port parameters manually and is not recommended for users unfamiliar with TCP/IP printing.';
g55='FTP Printing';
g56='This feature enables the printer to receive print jobs sent by FTP (see Using FTP Printing of the manual). Disabling this feature will prevent FTP jobs.';
h40=''; //<b>USB Print Server</b> The USB print server in this router allows networked computer to print to a single USB printer. To enable a computer to print to this printer, you must install the printer\'s drivers and software on the computer and also you must install the Belkin printer port. The Belkin printer port software is included with the Rout
}
