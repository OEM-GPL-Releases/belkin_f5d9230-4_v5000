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
show1='��ҳ'; // Home 
show2='����'; // Help 
show3='��¼'; // Login 
show4='�˳�'; // Logout 
show5='������״̬'; // Internet Status 
show6='������';  //Connected 
show7='������'; // No Connection 
show8='��������װ'; // LAN Setup 
show9='����������'; // LAN Settings 
show10='DHCP �ͻ��б�'; // DHCP Client List 
show11='��������'; // Internet WAN 
show12='��������'; // Connection Type 
show13='DNS������'; //DNS 
show14='MAC��ַ'; // MAC Address 
show15='���߾�����������'; // WLAN Not Available 
show16='����'; // Wireless 
show17='ͨ���ŵ� �� SSID'; // Channel and SSID 
show18= '��ȫ'; // Security 
show19=  '�趨ΪAP������㣩'; // Use as Access Point 
show20=  'ѡ��IP��ַ'; // Specify IP Address 
show21=  'MAC��ַ����'; // MAC Address Control 
show22=   '��������'; // Wireless Bridge 
show23=   '����ǽ'; // Firewall 
show24=   '���������'; // Virtual Servers 
show25=   '�û���IP��ַ������'; //Client IP Filters 
show26=   'MAC��ַ����'; // MAC Address Filtering 
show27=   '�Ǿ�����'; // DMZ 
show28=   'WAN Ping�赲'; // WAN Ping Blocking 
show29=   '��ȫ��¼��¼'; // Security Log 
show30=   '���߳���'; // Utilities 
show31=   '�ҳ�����'; // Parental Control 
show32=   '��������·����'; // Restart Router 
show33=   '��������AP�����'; // Restart AP 
show34=  '�ָ���������'; //Restore Factory Default 
show35=  '����/���� ����'; // Save/Backup Settings 
show36=  '�ָ�֮ǰ������'; // Restore Previous Settings 
show37=  'Firmware����'; // Firmware Update 
show38=  'ϵͳ�趨'; // System Settings 
show39='��ӡ������'; // Printer Service 
show40='��ӡ����������'; // Print Server Configuration 
show41=   'DDNS '; // DDNS 
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='������Ϣ'; //More Info 
btn1='������'; //Clear Changes
btn2='���ñ��'; //Apply Changes
btn3='���¶�̬DNS������'; //Update Dynamic DNS
Router='·����'; //Router
AP='AP�����'; //AP
Dynamic='��̬'; //Dynamic
cff1='Firmware ������'; //Check Firmware Successfully
cff2='Firmware��Ϣ';  // Firmware Info.
cff3='�޷�Ϊ��·��������Firmware'; // There is no new firmware update available for this Router!
cff4='�޷���Firmware��Ϣ���������ӣ�<br>����������������'; // Cannot connect to the firmware information server, <br>please double check the wan connection.
cff5='An updated version of firmware is available for your Router';
d1='Belkin | ���ƹ���Ա'; //Belkin | Duplicate Administrator
d2=' '; //Duplicate Administrator
d3='��������Ա���ڲ������豸,�����ܵ�¼'; // This device is managed by 
d4=' '; //currently!!
fc1='����ǽ > �û�IP����'; // Firewall > Client IP filters 
fc2a='��·�����ɱ��趨Ϊֻ��ȡ���硢�����ʼ��������������'; fc2b='���ض�������ʱ��'; // The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times.
IP='IP';
Port='�˿�'; //Port 
Type='����'; //Type 
BT='�赲ʱ��'; // Block Time 
Day='����'; //Day
Tm='ʱ��'; //Time
Enable='����'; //Enable
BOTH='���߾���'; // BOTH 
Always='����'; // Always 
Block='�赲'; // Block 
SUN='>������'; //>SUN 
MON='>����һ'; //>MON 
TUE='>���ڶ�'; //>TUE 
WED='>������'; //>WED 
THU='>������'; //>THU 
FRI='>������'; //>FRI 
SAT='>������'; //>SAT 
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='��������δ����IP��ַ����������Ĳ���IP��ַ�ǲ���ȷ�ġ�IP��ַ�����ǽ���0��254֮�����һ����'; // Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 1 and 254.
fcsm='��������Ķ˿ں����ǲ���ȷ��'; // The port numbers you entered are invalid.
fcrm='�˿ڷ�ΧӦ���Ǻ����ǰ'; // The latter of the port range must be larger than the former.
fcripm='IP��ΧӦ���Ǻ����ǰ'; // The latter of the ip range must be larger than the former.
fcpm='�ڴ˶˿��������е�����Ӧ����1��65535'; // The number in port entry box should be between 1 - 65535.
fd1='����ǽ > �Ǿ�����'; // Firewall > DMZ 
fd2='�Ǿ���������������ָ���ض���һ���������еĵ��Ա�NAT����ǽ���롣���NAT�������⣬������Ǳ���ģ����䵱��ʹ�õ�����Ϸ������Ѷ����ʱ������ʱ״��������ʹ�ô���ܡ�'; // The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.
fd3='�ڴ˷Ǿ������ĵ��Բ�δ�ܵ��ڿ����Եı���'; // The computer in the DMZ is not protected from hacker attacks.
fd4='������IP��ַ�����һλ���ֲ�ѡȡ�����á�����ѡ�����ñ����ʹ������Ч��'; // To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Submit" for the change to take effect.
fd5='����Ǿ���������IP��ַ'; // IP Address of Virtual DMZ Host 
fd6='��̬IP'; // Static IP  
fd7='ר�� IP';// Private IP  
fd8='����'; // Enable 
fd9='����ǽ > DDNS '; // Firewall > DDNS 
fd10='��̬DNS����Ϊ�����������û��ṩһ���̶���DNS��������(ȡ����ǰ�ṩIP��ַ�����ܾ�����Ҫ�任). ��������·��������·��������������������е�Ӧ�ÿ������������Ĳ�ͬ�ط��������Ӻ�ʹ�ö�����֪������ǰ��IP��ַ. ��������·����ͨ��DynDNS.org֧�ֶ�̬DNS����. '; //Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router/'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org
fd11='��ʹ�ø÷���֮ǰ����������һ���û��ʺ�&nbsp;'; // You must create an account before using this service.
fd12='�û����� > '; // User Name 
fd13='���� > '; // Password 
fd14='����> '; // Domain Name 
fd15='�������÷Ǿ�����ǰ����IP��ַ'; 
fd16='Auto-update'; 
fmc1='����ǽ > MAC��ַ����'; // Firewall > MAC address filtering 
fmc2='�˹��ܿ���������������ʵĿͻ����б��������ô˹���ʱ������������������ÿ̨�ͻ����� MAC ��ַ���Ӷ�ʹÿ̨�ͻ������ɷ������硣'; // This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.  
fmc3='����MAC��ַ����'; // Enable MAC Address Filtering 
fmc4='MAC��ַ�����嵥'; // MAC Address Filtering List 
fmc5='�赲'; // Block 
fmc6='����'; // Host 
fmc7='MAC��ַ'; // MAC Address 
fmc9='�޷�������ز���ý��MAC��ַ';
fmc12='���MAC��ַ�Ѿ�����';
Add='����'; //Add 
Del='ɾ��'; //Delete
fmcipm='������δ����ȫ����ʮ���������ֻ��ǲ������������ʮ�����������ǲ���ȷ�ġ�һ��ʮ����������ӦΪ0��9����A��F����ĸ'; // Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.
fmn1='����ǽ >'; // Firewall >
fmn2='����·������һ������ǽ���Ա����������类һ��ڿ����֣�����Ping of Death(PoD)��Denial of Service (DoS)�������Ҫ�����Խ�����ǽ�رա���Ȼ������ǽ�رղ���������ȫ�޷��赲�ڿ͵Ĺ����������ǽ�������������������ǽ��'; // Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.
fmn3='����ǽ����/����'; // Firewall Enable / Disable >
Disable='�ر�'; // Disable 
fp1='����ǽ > �赲WAN Ping'; // Firewall > WAN Ping Blocking 
fp2='<b>�����趨����!</b> �������趨·��������ӦICMP Ping(ping to the WAN�˿�)���������߰�ȫ��'; //<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.
fp3='�赲ICMP Ping';  // Block ICMP Ping >
fs1='����ǽ > ��ȫ��¼'; //Firewall > Security log
fs2='��·�����������е�����ע��֮��¼���Լ����������ϵĹ�������¼�����·�����'; // The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.
fs3='��¼����'; // Log File 
Save='�浵'; // Save 
Clear='���'; //Clear
Refresh='��������';  //Refresh
fv1='����ǽ>���������'; // Firewall > Virtual servers 
fvipm='��������δ��������IP��ַ��\n���ǲ�����������������ǲ���ȷ�ġ�\nIP��ַ������Ӧ����0��255֮�䡣'; // Either you have not entered all of the ip addresses \n or some of the numbers you entered are invalid. \n The number in ip address entry box should be between 1 - 254.
fvrm='�˹��ö˿ں��벻������88����Ϊ������·��������������ͻ��'; // The public port number can not be 88.Because it will have a collision with the Wireless Router  web service.
fvipr='�ڴ��˿ڷ�Χ����ȷ'; // The Inbound port range is not correct.
fvppr='˽�˶˿ڷ�Χ����ȷ'; // The Private port range is not correct.
fv2='������ܹ�����׷���ⲿ(������)�ķ������ӣ��������������(�˿�80)��FTP������(�˿�21)������Ӧ�ó������·�����������ڲ��������������'; // This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.
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
fv39='DirectX 7 ��Ϸ'; //DirectX 7 Games
fv40='DirectX 8 ��Ϸ'; //DirectX 8 Games
fv41='DNS������'; // Domain Name Server (DNS)
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
fv56='FTP������'; //FTP Server
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
fv73='Lotus Notes������'; //Lotus Notes Server
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
fv121='Telnet������'; //Telnet Server
fv122='The 4th Coming'; 
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"'; 
fv125='Total Annihilation'; 
fv126='Ultima'; 
fv127='Unreal Tournament'; 
fv128='Urban Assault'; 
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2'; 
fv131='WEB������(HTTP) '; // Web Server (HTTP)
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
fv200='�����¼'; // Clear entry 
Description='˵��';  //Description
Inb='�ڴ��˿�';  //Inbound port 
Type='����'; //Type
Pipa='˽��IP��ַ';  // Private IP address 
Pport='˽�˶˿�'; // Private port 
htop='�ص���ǰ��'; // top 
h1='����'; //Help
h2='���ʽ���';  //GLOSSARY OF TERMS
h3='<b>����Ա</b> ����Ա���ṩ����ά�����񡣶Դ�·�������ԣ������߿ɸ���·�����趨'; //<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.
h4='<b>�û�</b> ָ�ڴ������ϵĵ��ԣ����ʹ��·�������ṩ�Ĺ��ܣ������Զ�DHCP������������ǽ'; //<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.
h5='<b>DHCP</b> ��̬��������Э��. ��ͨѶЭ����Զ���������ÿһ̨���Ե�TCP/IP��ַ��������';  //<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.
h6='<b>��������</b>  ʹ�ù��õ绰������������'; //<b>Dial-Up</b> A connection which uses the public telephone network.
h7='<b>�Ǿ�����</b> ·�����е��������򲢲��ܵ�·��������ǽ�ı�������ͬһʱ���ڣ�ֻ��һ̨���Կ��Է��ڷǾ�������'; //<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.
h8='<b>DNS��������ַ</b>  DNSָ��������ϵͳ����������ʹ���������������һ����������(����:belkin.com)�Լ�һ�������IP��ַ(����:192.34.45.8)��һ��DNS�������ɱ����������Ե����Ͽ�, �������Ƽ�IP��ַ���ʵ�����Ҫһ����������ʱ��ʹ���߿��Եõ�һ����ȷ��IP��ַ���������������ʹ�õ�DNS��������ַλ����ISP����Ӧ����ָ����DNS������';  //<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.
h9='<b>DSL���ƽ����</b>  DSLָ�����û�ר�ߣ�һ��DSL���ƽ�������������еĵ绰���Ը�������������'; //<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.
h10='<b>��̬IP</b>  ��ָһ���Զ���DHCP�������ϻ�õ�IP��ַ'; //<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.
h11='<b>��̫����</b> ���ǵ��������׼�� ��̫������͸��Ѷ���ߺ����缯�����������ӣ��������ϵ��ٶȿɸߴ�ÿ��1000Mbits'; //<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).
h12='<b>����ǽ</b> ����ǽ��ָһ������ǽ�������赲δ����Ȩ��ʹ���ߴ�ȡ�ض��������������еĵ���'; //<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.
h13='<b>Firmware</b> ��ָ��װ�ڼ������е����塣��Ҫ�ĳ��򽫻�������о���ϵͳ�Ѿ��رա������Ӳ�����׸��ĵ��ȴ����ڴ����ϵ���������ȶ�'; //<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.
h14='<b>IP��ַ</b> ��ָ��������Э��  һ��IP��ַ���������Ծ��ֿ�����������ɣ���������ʶһ����������ĵ�������������:192.34.45.8'; //<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.
h15='<b>ISDN</>  ���ɷ����������硣ISDN����ͬʱ����������Ӱ�����Ѷ���ٶȸߴ�128Kps����һ�����ģ����ƽ����������ȶ��������Ź�˾���ṩISDN����֧��'; //<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.
h16='<b>ISP</b>������������ṩ��ISP���ǿ����ø��ˡ���ҵ����֯���ӵ���������Ĺ�˾'; //<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations. 
h17='<b>ISP���ص�ַ</b> (����ISP˵��) ISP���ص�ַ�Ǹ�·������IP��ַ��ֻ����ʹ��CABLE��DSL���ƽ����ʱ������Ҫʹ�������ַ'; //<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem. 
h18='<b>������LAN</b>����һȺ����Զ��Խ�С��������(����:�����칫����)�໥������һ��ĵ��Ժ�װ�á������е��������һ��LAN'; //<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.
h19='<b>MAC��ַ</b> MAC��ָý���ȡ���ơ�ý���ȡ���Ƶ�ַ�������ӵ�����֮װ�õ�Ӳ���ַ'; //<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.
h20='<b>MTU</b>ָ����䵥Ԫ  ��ÿ�δ������ϵ����ֵ'; //<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.
h21='<b>�����ַת��</b>  �����̿��������е����е��Թ���һ��IP��ַ���������Ϳ���͸������������κ�һ�����Դ�ȡ���������ϵ����ϣ���������ISP����������IP��ַ'; //<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.
h22='<b>���Ӷ˿�</b> һ���ض���Ƶ���ǽ����ض������Ӷ˿ں��������塣'; //<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.
h23='<b>��̫����ʹ�õĵ�Ե�Э��</b>  ��Ե�Э����һ�ְ�ȫ�����ϴ��䷽�������������ڵ绰�������ӡ�PPPoE��������̫����'; //<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.
h24='<b>PPTP��Ե�ͨѶЭ��</b>  ����PPP(��Ե�ͨѶЭ��)��һ�֣����Խ�һ��ͨѶЭ��ѹ������൵������һ��ͨѶЭ��ʹ�á�����ͨѶ�Ƽ�����TCP/IP�����ڷ�TCP/IP�����ϴ��䡣PPTP�������������統��ý��ȥ���벻ͬ������'; //<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.
h25='<b>SNTP��������ʱ��ͨѶЭ��<b>  ����������·������ϵͳ��ʱ����ʾһ��'; //<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.
h26='<b>��̬��״̬���</b>  SPI��һ���������õ������ṩ����ҵ�û������簲ȫ������ʹ��SPI�����ؼ��������ǽһ�������������粻�ܺڿ���Ϯ'; //<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.
h27='<b>��̬IP</b> ��ָ���ֶ������Ҳ���ı��IP'; //<b>Static IP</b> An IP address that is manually configured and never changes.
h28='<b>��������</b> ���������Ϊ����ISP���ṩ����Ϣ���������������IP��ַ����������ɡ���������ʹ�����ض������IP��ַ(�෴��ɱ������ʶ��IP��ַ������豻��������ָ����'; //<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC). 
h29='<b>�������Э��</b> TCP�����ʹ�õ�Э�� TCP�Ǹ��������벻�ж��ԣ���������ṩ�ȶ��Ĵ�������'; //<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.
h30='<b>TCP/IP</> ��͸���������������Ϣ����ı�׼Э��'; //<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.
h31='<b>UDP</b>�����ն˻�Э�飺��һ̨���Դ���һ���ն˻�ѶϢ������һ̨��������Ӧ�ó���ļ������������TCP��UDP��͸�����ߴ���ģʽ���ܱ�֤�����ȶ��Ĵ��䣬���Ӧ�ó��������������д��󲢼��ɿ��Ĵ���'; //<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. 
h32='<b>������</b>  һϵ�б˴�������LAN���������λ�ڲ�ͬ�ص�(����:��ͬ��������С�����)����������һ����������'; //<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.
h33='<b>WAN IP��ַ</b> ��IP��ַ��ISP��·����ָ��'; //<b>WAN IP Address</b> The IP address assigned to the router by the ISP.
h34='<b>���߾�����</b>  һ��͸�����ߵķ�ʽ���������Եľ�����'; // <b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)
Enabled='����'; //Enabled
Disabled='�ر�'; // Disabled 
i1='�趨��ҳ'; // Setup Home 
i2='״̬'; // Status 
i3='�汾��Ϣ'; //Version Info
i4='Firmware�汾'; // Firmware Version 
i5='�����汾'; // Boot Version 
i6='Ӳ��'; // Hardware 
i7='���'; // Serial No.
i8='����������'; // LAN Settings 
i9='������/���߾����� MAC��ַ'; // LAN/WLAN MAC 
i9a='������ MAC��ַ'; // LAN MAC 
i9b='WLAN�޷�����'; // WLAN Not Available 
i10='IP��ַ'; // IP address 
i11='��������'; // Subnet mask 
i12='DHCP������'; // DHCP Server 
i13='����������'; // Internet Settings 
i14='������ MAC��ַ'; // WAN MAC address 
i15='��������'; // Connection Type 
i16='��������'; // Subnet mask 
i17='������ IP'; // Wan IP 
i18='ȱʡ����'; // Default gateway 
i19='DNS��ַ'; // DNS Address 
i20='����'; // Features 
i21='�����ַת��'; //NAT  
i22='����ǽ����'; // Firewall Settings 
i23='SSID'; 
i24='��ȫ'; //Security
i25='��ӡ��'; // Printer 
i26='(����/����)'; //(enable/disable)
i27='�ڸ����κ��趨ǰ���������ȵ�¼'; // You will need to log in before you can change any settings.
i28='��ӡ������/��ӡ��'; // Print Server / Printer 
i29='��ӡ����������'; // Print Server Name 
i30='FTP��ӡ'; // FTP Printing 
i31='RAW TCP/IP��ӡ'; // RAW TCP/IP Printing 
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
langt='����'
langc='��������'
ld1='������ > DHCP'; // LAN > DHCP 
ld2='������ > DHCP�û�����'; // LAN > DHCP Client List 
ld3='��ҳ��ʾ��������ÿһ̨���Ե�IP��ַ������������MAC��ַ���������û���ض����������ƣ��ɽ�����������Ŀ���ס��밴"��������"�����������嵥'; // This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.
ld4='IP��ַ'; // IP Address 
ld5='��������'; // Host Name 
ld6='MAC��ַ'; // MAC Address 
lm1='������'; // LAN 
lm2='����·��������DHCPָ����������ÿһ̨���Ե�IP��ַ��DHCP����������ʱ�󲿷�ʱ���ʹ��ԭ���趨ֵ��������Ҫ���ģ�������ʱ����'; // Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.
lm3='�����ܸ��ĵ��趨Ϊ:'; // The changes that you can make are:
lm4='- ����·������IP��ַ��ȱʡֵΪ��192.168.2.1'; // - Change the Internal IP address of the Router. The default = 192.168.2.1
lm5='- �������������ַ��ȱʡֵΪ��255.255.255.0'; //- Change the Subnet Mask. The default = 255.255.255.0
lm6='- ����/����DHCP���������ܣ�ȱʡֵΪ������'; //- Enable/Disable the DHCP Server Function. Default= ON (Enabled)
lm7='- ָ����ʼ�����IP��ַ�嵥����ʼȱʡֵΪ2������Ϊ100'; //- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100
lm8='- ָ��һ��IP��ַ����ʱ�䣬ȱʡֵΪ����Զ'; //- Specify the IP address Lease Time. Default= Forever 
lm9='- ָ��һ�����ص��������ƣ�ȱʡֵΪ��NONE'; //- Specify a local Domain Name. Default = Belkin 
lm10='��������趨����ѡ�������Ŀ��"����������"'; // To make changes, click "LAN Settings" on the LAN tab to the left.
lm11='·����������һ�����ӵ����Ե��û��б�Ҫ�����б��밴"����������"�µ�"DHCP�û��嵥"'; // The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP client list" on the LAN tab to the left.
ls1='������>����������'; // LAN > LAN Settings 
ls2='�������ڴ˸��ľ��������á���Ҫ������Ч����ѡȡ"���ñ��"'; // You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.
ls3='IP��ַ'; // IP Address 
ls4='��������'; // Subnet Mask 
ls5='DHCP������'; // DHCP server 
On='����'; //On
Off='����'; // Off 
all='all';
Auto='Auto'; 
langt='����';
langc='��������';
langcl='��ǰ����';
langal='��������';
ls6='DHCP�������ܼ��׵�͸���趨�����е�ÿ̨����һ��IP��ַ���������硣�����Բ��ظ����κ����ݡ�'; // The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.
ls7='IP��ַ�ؿ�ʼ��ַ'; // IP Pool Starting Address 
ls8='IP��ַ�ؽ�����ַ'; // IP Pool Ending Address 
ls9='����ʱ��'; //Lease Time
ls10='��Զ'; // Forever 
ls11='��Сʱ'; // Half Hour 
ls12='һСʱ'; //1 Hour 
ls13='��Сʱ'; // Two Hours 
ls14='����'; //Half Day 
ls15='һ��'; //One Day 
ls16='����'; // Two Days 
ls17='һ��'; // One Week 
ls18='����'; // Two Weeks 
ls19='DHCP�������ܹ�Ϊÿ̨������ָ����ʱ����Ԥ���ض���IP��ַ'; // The length of time the DHCP server will reserve the IP address for each computer.
ls20='������������'; // Local Domain Name 
Optional='��ѡ��Ŀ'; // Optional 
ls21='����Ϊ������������'; // A feature that lets you assign a name to your network.
lsipm='��������δ��������IP��ַ�����ǲ�����������������ǲ���ȷ�ġ�IP��ַ������Ӧ����0��255֮�䡣'; // Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.
lssm='������������������ǲ���ȷ��'; // The Subnet mask number you entered is invalid.
lsnetm='IP��ֵַӦ��IP���ص�ַһ��λ��һ��������������'; // The IP pool must be in the same subnet as the gateway IP 
lsendm='������IP��ַ������ڿ�ʼ��IP��ַ'; // The ending IP address must be larger than the starting IP address.
lspoolm='��������IP��ַ����������DHCP��ַ��'; // The LAN IP address can not be in the DHCP address pool.
lsipm2='����ȷ�ľ�����IP��ַ�����һ�����ֲ���Ϊ0��255'; // Invalid Lan Ip address, the last number cannot be 0 or 255
lsipm3='����ȷ�ľ�����IP��ַ�����һ�����ֲ���Ϊ127��0'; // Invalid Lan Ip address, the first number cannot be 127 or 0
lsldnm='����ȷ����������'; // Invalid Local Domain Name 
lsipm4='�������IP��ַ����ȷ'; // The IP that you entered is invalid 
lsipalert='���ֶ������������ַ���������µľ�����IP��ַ'; // Please change the Address entry box in the status bar of your browser manually to the new lan address 
lsipm5='����ѡ��IP��ַӦΪnon-routable��IP.\n  192.168.x.x (x���Խ���0��255.) \n10.x.x.x (x���Խ���0��255.)\n172.y.x.x (y��Ϊ����16��31���κ�����, ����x �ɽ���0��255.)'; // The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)
lsipc='��ȷ��Ҫ���ľ�����IP��ַ��'; // Do you really wish to change the LAN IP address?
lo1='��¼'; // Login 
lo2='���������κθ���ǰ������Ҫ��һ�������¼���������δ�趨�����˵����룬�뽫��������Ȼ��ѡȡ'; // Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit."
lo3='����'; // Password 
lo4='ȱʡֵ������'; // Default = leave blank 
Clear='���'; // Clear 
Submit='�ύ'; // Submit 
le1='Belkin | ��¼����'; // Belkin | Login Error 
lerror='��¼����';  // Login Error !!
Utilities='���߳��� > '; // Utilities >
rs1='���������ɹ�'; // Reset Successfully 
rs2='����Դ��ֹͣ��˸ʱ��ʾ���������Ѿ����'; //The reset is complete when the power light stops blinking.
rs3='·��������������'; // Router is rebooting 
rs4='��ʣ����'; // seconds remaining.
rf1='�ָ���������ֵ�ɹ�'; // Restore factory defaults Successfully 
rf2='����Դ��ֹͣ��˸ʱ��ʾ���»ָ��Ѿ����'; // The restore is complete when the power light stops blinking.
rss1='�ָ��趨�ɹ�'; // Restored Settings Successfully 
rss2='����Դ��ֹͣ��˸ʱ��ʾ���»ָ��Ѿ����'; // The restored settings is complete when the power light stops blinking.
ufy1='�ָ���������'; // Restore factory defaults 
ufy2='ʹ�ô�ѡ����Խ������趨�ָ�Ϊԭ���趨ֵ�����ǽ������ڻָ�����Ĭ��ֵǰ�����ȴ��������趨ֵ����Ҫ�ָ�ԭ���趨ֵ���밴�·���"�ָ�Ĭ��ֵ"��'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.
ufy3='����: �����е��趨������ʧ��\n��ȷ��Ҫ������?'; // WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?
ufy4='�ָ�Ĭ��ֵ��Ҫ��ʮ���ʱ�䡣�벻Ҫ�ڹ����йرյ�Դ'; // Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.
ufy5='������ָ�ԭ��Ĭ��ֵ��û���κ��趨����ʧ��'; // Will Not Restore Factory Defaults.No Settings Will be lost!
ufy='�ָ�Ĭ��ֵ'; // Restore Defaults 
ufe1='���߳���>Firmware����'; // Utilities > Firmware update 
ufe2='��ʱ������ᷢ���°汾�����塣���°����������˿����޸���������Ĳ��������밴�·���������Ƿ����µ�������°汾'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.
ufe3='ע��: �ڸ�������汾ǰ�����ȴ��������ڵ��趨'; // NOTE: Please backup your current settings before updating to a new version of firmware.
ufe4='�밴��'; //Click Here 
ufe5='�����ﴢ��/���������趨'; // to go to the Save/Backup current settings page.
ufe6='���˻���µ�Firmware�汾'; // Check For New Firmware Version >
ufe7='�������'; // Check Firmware 
ufe8='��������'; // Update Firmware >
Update='����'; // Update 
ufe9='��ָ�����µ�����λ�á������뵵��·���͵������ơ���"���"��Ѱ�ҵ���λ��'; // Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.
ufe10='��ȷ����Ҫ����������?'; // Are you sure you want to continue with upgrading?
ufe11='�����������·������Լ��һ��������ʱ��������Ӧ�����Ǻ������������벻Ҫ�رյ�Դ����������'; // At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.';
um1='����Ļ������ʹ�ò�ͬ�Ĳ������ض��Ĺ�����Э������';// This screen lets you manage different parameters of the Router and perform certain administrative functions.
um2='�ҳ�����'; // Parental Control 
um3='�������Parental Control�ܱ����������ĺ���Զ�벻��������������'; // Belkin\'s Parental Control protects you and your kids from objectionable content on the web.
um4='�������Parental Control�����趨�Ĺ����������������Ժ����ĺ���һͬ������磬������ʱҲ�ɷ����ú������<br>&nbsp;'; // Belkin\'s Parental Control is the filter you set up. Now you can surf the net with your kids even when you are not there.<br>&nbsp;
um5='��������·����'; // Restart Router 
um6='��ʱ��һ����Ҫ��������·��������·������ʼ����������ʱ��������������ɾ���κ����������趨'; // Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.
um7='�ָ���������'; // Restore Factory Defaults 
um8='ѡ�ô�ѡ���������������趨�ָ�Ϊ�����趨ֵ���������ȱ��������趨�ٻָ�����Ĭ��ֵ'; // Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.
um9='����/������������'; // Save/Backup Current Settings 
um10='����ʹ�ô˹��ܴ�����Ŀǰ�������趨���������������趨�����������Ժ���Ļ�С����ʧʱ�ָ������ǽ�������Firmware����ǰ�ȱ������������趨ֵ��'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
um11='�ָ���ǰ���������ֵ'; // Restore Previous Saved Settings 
um12='��ѡ���������ָ���ǰ������������趨'; // This option will allow you to restore a previously saved configuration.
um13='Firmware����'; // Firmware Update 
um14='��ʱ������ᷢ���°汾��Firmware�����°��Firmware�����˿����޸������������Ϣ��'; // From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed.
um15='ϵͳ�趨'; // System Settings 
um16='��������ϵͳ�趨ҳ���趨����������'; // The System Settings page is where you can enter a new administrator password 
um17='�趨ʱ��������Զ�̹���������ر�NAT����'; //, set the time zone, enable remote management and turn on and off the NAT function 
um18='·������'; // of the Router.
upc1='���߳��� > �ҳ�����'; // Utilities > Parental Control 
upc2='�����𡰼ҳ����ơ������������ĺ�����Ա��Զ�벻�������������ݡ��ҳ����ƿ���Ԥ�����ò��赲�����������ݡ����������׵�ѡ���κ���վ��Զ�赲������Զ����'; // Belkin\'s Parental Control protects you and your children/employees from objectionable content on the web. Parental Control comes pre-configured to block many types of web content, but is custom configurable to be more or less restrictive. Any web site can easily be set to be either, always blocked, or always allowed.
upc3='������Parental Control����״��Ϊ'; // Your Parental Control Subscription is 
upc4='δ����'; // UN-ACTIVATED 
upc5='�޷�����'; // NOT-ACTIVATED 
upc6='����'; // ACTIVATED 
upc7='�밴��ֹͣParental Control¼��'; // To stop PARENTAL CONTROL signup prompts, Click here:
upc8='����'; // EXPIRED 
upc9='���Ķ��ƽ���XXX����'; // Your subscription will expire in 
days='����'; //days 
upc10='�ʺ�����'; // Account information 
Advanced='����'; // Advanced 
Apply='Ӧ��'; // Apply 
upc11='���������ʻ���Ϣ'; // Refresh Account information 
upc12='����'; // Reporting 
upc13='������'; // You are currently 
upc14='�ύ������'; // subscribed to reporting.
not='��'; // not 
upc15='���˼�鱨������'; // Click here to see a sample of how reporting works.
upc16='��������'; // Reporting Sample 
upc17='�������뱨��'; //Click here to signup for reporting.
upc18='���ڶ���'; // Subscribe Now 
upc19='���˲鿴���ı���'; // Click here to view your report.
upc20='��鱨��'; // View Report 
upc21='�ҳ�����״̬'; // Parental Control Status 
upc22='��Parental Control���˿��Ż�ر�'; // Turn Parental Control Filter ON and OFF.
upc23='�������ǽ����������'; // Web Filter is currently 
ON='����'; // ON 
OFF='����'; // OFF 
pwd='����'; // Password 
upc24='�����ʼ�����'; // e-mail Notification 
upc25='������ҳ����ơ���Ч���Ե����ʼ�֪ͨ��'; // Notify me by e-mail if the Parental Control is overridden.
upc26='�����ʼ����ڹ���'; // Email is currently 
upc27='�޸Ĺ涨'; // Modify policy 
upc28='�����Parental Control�趨ֵ�Ĺ����밴��'; // To view or change Default Policies for your Parental Control, click here';
Modify='�޸�'; // Modify 
upc29='�ҳ���������'; // Parental Control Sign-up 
upc30='������ġ��ҳ����ơ��ܱ����������ĺ���Զ�������ϲ��ѵ����ݡ������𡰼ҳ����ơ����������趨�ķ���ǽ ����������������������磬�������赣�����ĺ��ӵ������'; // If you wish to sign up for Belkin\'s Parental Control feature, please click the button below.
upc31='�����ڲ��޶��ơ��ҳ����ơ�����'; // You are currently <b>NOT</b> subscribed to the Parental Control service.
upc32='���¡��ҳ����ơ�'; // Parental Control Renew 
upc33='���Ķ��Ƽ������ڣ���������Ķ���'; // Your subscription is close to the expiration date. Please click to renew your subscription.
upc34='���ϸ���'; // Renew Now 
upc35='URL�ǿհ׵�'; // url is empty 
upa1='���߳���&gt; ���ҳ����ơ��ʻ���Ѷ'; // Utilities &gt; Parental Control Account Information 
upa2="�����Ը��ġ��ҳ����ơ��û���Ϣ����: ���ҳ����ơ���ʾ�����ʼ��롰�ҳ����ơ�����Ա����"; // You can change your Parental Control user information here such as the Parental Control notification e-mail address and the Parental Control administrator password.
upa3='���� ���ҳ����ơ���ʾ�����ʼ���ַ'; // Change Parental Control notification e-mail address.
upa4='������ʹ�õĵ����ʼ���ַ'; // your current e-mail address 
upa5='�������µĵ����ʼ���ַ'; // Enter your new e-mail address 
upa6='�ٴ�ȷ�������µĵ����ʼ���ַ'; // Re-enter your new e-mail address 
upa7='���������ҳ����ơ��Ĺ���Ա����'; // Change Parental Control Administrator Password 
upa8='��������������'; // Enter your new password 
upa9='�ٴ���������������'; // Re-enter your new password 
upa14='�����ʼ���ַ��Ч';
Change='����'; // Change 
Stop='Ӧ��'; // Apply 
upad1='���߳��� &gt; �ҳ����ƽ�������ֵ��Ч'; // Utilities &gt; Parental Control Advanced Settings 
upad2='Belkin ���ҳ����ơ���ҪCerberian(���ǵĻ��)���������������������һ���״��֮�£���Ӧʱ�������һ�룬���Բ������ӳ١�Ȼ����������CerberianҪ��һ���������������ҳʱ�����ǻ᲻�ϸ��¼�����������ܻỨ�����ʱ�䣬ȡ������վ���ص�ʱ�䡣'; // Belkin's Parental Control requires an Internet rating response from Cerberian (our partner) for every web site requested. Normally, response time is less than 1 second causing virtually no delay. However when you request a rare site that is not in their data base, they rate the site dynamically, which can take a few seconds depending on how fast the site loads. If the response time is slower than the time interval below, PARENTAL CONTROLS can be configured to either: Allow all sites on timeouts, or Block all sites on timeouts.
Timeout='��ʱ'; // Timeout 
upad3='��ʱ�ȴ�ʱ��'; // Timeout after waiting 
upad4='������ȴ���Ӧ'; // seconds for a response 
upad5='��ʱ�������ȱʡ��Ϊ'; // Default behavior when timeout occurs 
upad6='�趨��������¼ʱ��Ĭ��ֵ��·��������ݴ��趨�赲�����������������ҳ'; // Setting the default behavior when timeout occurs, the router will block/pass all the web surfing according to the setting.
upad7='׼��������ҳ��ʱ'; // Allow all sites on timeout.
upad8='�赲������ҳ��ʱ'; // Block all sites on timeout.
upr1='���߳��� > �ҳ����� �ʻ�����'; // Utilities > Parental Control Account Refresh 
upr2='�����ġ��ҳ����ơ����ƹ��ܲ���ȷʱ��<br>������Ҫ�˹��ܡ��밴�´˼���·�����������ػ������������б������ʻ���Ϣ��<br>�������������ġ��ҳ����ơ�·�����ʻ���Ϣ���밴"��������"'; // This function is only necessary if your PARENTAL CONTROL subscription information is not correct.<br>By pressing this button, the router will download/refresh all account information from Belkin.<br>To refresh your PARENTAL CONTROL router account information, click Refresh:
uprev1='���߳��� > �ָ�֮ǰ������趨'; // Utilities > Restore previous saved settings 
uprev2='���ѡ����Իָ���֮ǰ������ֵ'; // This option will allow you to restore a previously saved configuration.
Restore='�ָ�'; // Restore 
uprev3='���뺬�б�������ֵ�ĵ�������'; // Type the name of the file that contains the backup settings.
uprev4='��Ҫ�����ָ�����ֵ��'; // Do you want to continue and restore settings?
uprev5='�ڻָ��趨��·����������һ��������ʱ�����л�Ӧ��\n\n���Ǻ���������������ر�·������Դ'; // After settings are restored, the Router may not respond\n to commands for as long as one minute.\n\nThis is normal. Do not power down the Router during this time.
ur1='���߳��� > ����·����'; // Utilities > Restart Router 
ur2='��·������ʼ����������ʱ����ʱ�������ܱ�����������·��������������������ʹ���������趨ֵ��ʧ��&quot;�밴�·�����&quot;��������'; // Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restartting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.
ur3='��������'; // Restart Router 
ur4='��ȷ��Ҫ���������������������������������'; // Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.
ur5='·������Ҫ��ʮ���ʱ�������������������������ǰ���𽫵�Դ�ر�'; // Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.
usave1='���߳��� > ����/�������ڵ�����ֵ'; // Utilities > Save/Backup current settings 
usave2='���������ڴ�����������'; // You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.
Save='����'; //Save
usys1='���߳��� > ϵͳ�趨'; // Utilities > System settings 
usys2='����������'; // Administrator Password: 
usys3='��·������δ�趨�κ����룬Ϊ��ȷ����ȫ���������ڴ��趨һ������'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
usys4='�������ڵ�����'; // Type in current Password 
usys5='�����µ�����'; // Type in new Password 
usys6='ȷ���µ�����'; // Confirm new Password 
usys7='��¼����ʱ��'; // Login Timeout 
usys8='1-99����'; //(1-99 minutes)
usys9='ʱ���ʱ��'; // Time and Time Zone: 
January='һ��'; February='����'; March='����'; April='����'; May='����'; June='����'; July='����'; August='����'; September='����'; October='ʮ��'; November='ʮһ��'; December='ʮ����';
usys10='���趨�����ڵ�ʱ�������������ʱ��ʱ��(ָ���ļ��ѱ�׼ʱ�䲦��1Сʱ��ʱ��)���밴�˴�'; // Please set your time Zone. If you are in an area that observes daylight saving check this box.
usys11='ʱ��'; // Time Zone 
usys12='(GMT-12:00) �ϼ��ֵ�'; //(GMT-12:00) Enewetak, Kwajalein 
usys13='(GMT-11:00) ��Ħ��'; //(GMT-11:00) Midway Island, Samoa 
usys14='(GMT-10:00) ������'; // Hawaii 
usys15='(GMT-09:00) ��������˹����'; // Alaska 
usys16='(GMT-08:00) ̫ƽ��ʱ��(��������ô�) '; // Pacific Time (US & Canada); Tijuana 
usys17='(GMT-07:00) ��������ɣ����'; // Arizona 
usys18='(GMT-07:00) ��������ô�ɽ��'; // Mountain Time (US & Canada)
usys19='(GMT-06:00) ��������ô��в�'; // Central Time (US & Canada)
usys20='(GMT-06:00) ��������ô��в�'; //Mexico City, Tegucigalpa
usys21='(GMT-06:00) ����˹����ʡ'; //Saskatchewan
usys22='(GMT-05:00) ����(��³�׶�) '; // Bogota, Lima, Quito 
usys23='(GMT-05:00) ��������ô󶫲�'; // Eastern Time (US & Canada)
usys24='(GMT-05:00) ����ӡ�ڰ�����'; // Indiana (East)
usys25='(GMT-04:00) ������(���ô�)'; // Atlantic Time (Canada)
usys26='(GMT-04:00) ������˹(ί�������׶�)������˹(����ά��֮�׶�) '; // Caracas, La Paz 
usys27='(GMT-04:00) ʥ���Ǹ�(�����׶�) '; //Santiago 
usys28='(GMT-03:00) Ŧ����(���ô󶫺����ĵ���) '; // Newfoundland 
usys29='(GMT-03:00) ����'; // Brasilia 
usys30='(GMT-03:00) ����ŵ˹����˹(����͢�׶�)�����γ�(���������ǹ��͹��׶�) '; // Buenos Aires, Georgetown 
usys31='(GMT-02:00) �������в�'; // Mid-Atlantic 
usys32='(GMT-01:00) ���ٶ�Ⱥ��'; // Azores, Cape Verde Is.
usys33='(GMT) ������������(Ħ��纣��)������ά��(���������׶�) '; // Casablanca, Monrovia 
usys34='(GMT) ��������ʱ�䣺�����֡�������'; // Greenwich Mean Time: Dublin, Edinburgh 
usys35='(GMT) ��������ʱ�䣺��˹�����׶�'; // Greenwich Mean Time: Lisbon, London 
usys36='(GMT+01:00) ��ķ˹�ص������֡�����������'; // Amsterdam, Berlin, Bern, Rome 
usys37='(GMT+01:00) ˹�¸��Ħ��άҲ�ɡ���������(��˹�����׶�) '; // Stockholm, Vienna, Belgrade 
usys38='(GMT+01:00) ������˹����(�ݿ�)��������˹(�������׶�)��¬��������(˹��ά���ǹ��͹��׶�) '; // Bratislava, Budapest, Ljubljana 
usys39='(GMT+01:00) �����񡢲�³�����籾�����������'; // Prague,Brussels, Copenhagen, Madrid 
usys40='(GMT+01:00) ���衢ά��Ŧ˹(�����𹲺͹��׶�)������Ү��(�����������ά�ǹ��͹��׶�)��ʷ������(����ٹ��͹��׶�) '; // Paris, Vilnius, Sarajevo, Skopje 
usys41='(GMT+01:00) ��ɳ(�����׶�)����������(���ް����ǹ��͹��׶�) '; // Sofija, Warsaw, Zagreb 
usys42='(GMT+02:00) �ŵ䡢��˹̹������˹��(�׶���˹�׶�) '; // Athens, Istanbul, Minsk 
usys43='(GMT+02:00) ������˹��(���������׶�) '; // Bucharest 
usys44='(GMT+02:00) ����'; // Cairo 
usys45='(GMT+02:00) ����������(�Ϸ������׶�) '; // Harare, Pretoria 
usys46='(GMT+02:00) �ն����������(����ά�ǹ��͹��׶�)�� ����(��ɳ���ǹ��͹��׶�) '; // Helsinki, Riga, Tallinn 
usys47='(GMT+02:00) ��ɫ��'; // Israel 
usys48='(GMT+03:00) �͸��(�������׶�)�������ء������(���ǹ��͹��׶�)�����ŵ�(ɳ�ذ�����) '; // Baghdad, Kuwait, Nairobi, Riyadh 
usys49='(GMT+03:00) Ī˹��(����˹�׶�) '; // Moscow, St. Petersburg 
usys50='(GMT+03:00) �º���(�����׶�) '; // Tehran 
usys51='(GMT+04:00) �������(���������ϴ󹫹�֮�׶�)����˹����(�����׶�)���ڱ���˹(��³���ǹ��͹��׶�) '; // Abu Dhabi, Muscat, Tbilisi, Kazan 
usys52='(GMT+04:00) ������(�������׶�) '; // Volgograd, Kabul 
usys53='(GMT+05:00) ��˹����͵�(�ͻ�˹̹�׶�)����������(�ͻ�˹̹) '; // Islamabad, Karachi, Ekaterinburg 
usys54='(GMT+06:00) �￨(�ϼ����׶�) '; // Almaty, Dhaka 
usys55='(GMT+07:00) ���ȡ��żӴ����'; // Bangkok, Jakarta, Hanoi 
usys56='(GMT+08:00) ���������졢��³ľ��'; //Beijing, Chongqing, Urumqi
usys57='(GMT+08:00) ��ۡ���˹���¼��¡�̨��'; // Hong Kong, Perth, Singapore, Taipei 
usys58='(GMT+09:00) ���������桢���ϡ��ǿ�ο�'; // Toyko, Osaka, Sapporo, Yakutsk 
usys59='(GMT+10:00) ����˹��'; // Brisbane 
usys60='(GMT+10:00) ��������ī������ѩ��'; // Canberra, Melbourne, Sydney 
usys61='(GMT+10:00) �ص���Ħ��˹�ȸ�(�Ͳ����¼�����֮�׶�)��������'; // Guam, Port Moresby, Vladivostok 
usys62='(GMT+10:00) ������'; //Hobart
usys63='(GMT+11:00) ������(����˹)���¿��������'; // Magadan, Solamon, New Caledonia 
usys64='(GMT+12:00) 쳼á�����Ӱ뵺(��������)'; // Fiji, Kamchatka, Marshall Is.
usys65='(GMT+12:00) ����١��¿���'; // Wellington, Auckland 
usys66='�չ��Լʱ��'; // Daylight Savings 
usys67='�Զ���������Լ�չ�ʱ��'; //Automatically Adjust Daylight Saving
 
usys68='Զ�̹���'; // Remote Management:
AF='���׹���'; // ADVANCED FEATURE!
usys69='Զ�̹����������������ϵ��κεط�����·�������趨�����������˹���ǰ '; // Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,
usys70='��ȷ�������趨����������'; // MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.
usys71='�κ�IP��ַ�Կ�Զ�̹���·����'; // Any IP address can remotely manage the router.
usys72='ֻ�д�IP��ַ��Զ�̹���·����'; //Only this IP address can remotely manage the router 

usys73='NAT����'; // NAT Enabling:
usys74='�������ر�Network Address Translation���ܣ��ڴ������״��������ò�Ҫ���˹��ܹر�'; // Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NAT���� / ����'; // NAT Enable / Disable 
 usys76='UPNP����'; // UPNP Enabling: 
usys77='������������ر�UPNP���ܡ������ʹ�ô������֧��UPnP������UPnP������ЩӦ�ó����Զ���װ��·���� '; // Allows you to turn the UPNP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router.
usys78='UPNP���� / ����'; //UPNP Enable / Disable
usys79='�Զ����� Firmware����'; // Auto Update Firmware Enabling:
usys80='�������Զ����·����Firmware����'; // Allows you to automatically check the availability of firmware updates for your router.
usys81='�Զ����� Firmware���� / �ر�'; // Auto Update Firmware Enable / Disable 
usys82='����ʹ�õ���������Ч��'; // Current Password is invalid 
usys83='�µ���������º�����벻ͬ'; // New Password and Re-new Password is different 
usys84='��¼����ʱ�䷶Χ1-99'; // Login Timeout range: 1-99
usys85='���볤�Ȳ���ȷ�����3�����֣��12��'; // Password length is invalid. The maximum password length is 12 and The minimum password length is 3
usys86='���ֶ�����״̬���ĵ�ַ������ΪԤ��LAN��ַ'; // Please change the Address entry box in the status bar of your browser manually to the default lan address 
usys87='����ǿ�ҽ������趨����������'; // It is strongly recommended that you set your Administrator password.
usys88='�� NTP ������'; //Primary NTP Server
usys89='���� NTP ������'; // Backup NTP Server 
usys90='192.43.244.18-����'; //192.43.244.18-North America 
usys91='132.163.4.102-����'; //132.163.4.102-North America 
usys92='192.5.41.41-����'; //192.5.41.41-North America 
usys93='192.5.41.209-����'; //192.5.41.209-North America 
usys94='207.200.81.113-����'; //207.200.81.113-North America 
usys95='208.184.49.9-����'; //208.184.49.9-North America 
usys96='129.132.2.21-ŷ��'; //129.132.2.21-Europe 
usys97='130.149.17.8-ŷ��'; //130.149.17.8-Europe 
usys98='137.189.8.174-��̫����'; //137.189.8.174-Asia Pacific 
usys99='Զ�̷��ʶ˿�'; // Remote Access Port 
usysipm='������δ�������е�IP��ַ���ǲ�����������������ǲ���ȷ�ġ���Щ����Ӧ����0��255'; // Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 0 and 255
usysb1='��·����δ�趨�κ����룬�����Ҫ��߰�ȫ�ԣ������ڴ���������'; // The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.
vjs1='����ȷ��IP��ַ��IP��ַ̫�������ٴ�ȷ��'; // Invalid IP address, too long, Please check again 
vjs2='����ȷ��IP��ַ������\'.\'�����ٴ�ȷ��!'; // Invalid IP address, missing \'.\' , Please check again!
vjs3='����ȷ��IP��ַ����\'.\'֮������һЩ���룬���ٴ�ȷ��'; // Invalid IP address, missing numbers between \'.\', Please check again!
vjs4="����ȷ��IP��ַ���ж����'.'�����ٴ�ȷ��" ; // Invalid IP address, extra '.' , Please check again!
vjs5='����ȷ��IP��ַ����\'.\'֮�����̫�������ٴ�ȷ��!'; // Invalid IP address, numbers between \'.\' are too big, Please check again!
vm1='����ȷ����ĸ'; // Invalid Character 
vm2='λ��'; // at Position 
vm3='����Ϊ'; //Must be 
vjs6='����ȷ����ݸ�ʽ��������Ϊ(����:2002)'; // Invalid year format, please enter as (e.g. 2002)
vm4='����ȷ�ĺ���'; // Invalid number 
vjs8='����ȷ���������1970..2037'; // Invalid,must between 1970..2037
vjs9='����ȷ���·ݸ�ʽ��������'; //01...12 Invalid month format, please enter as (e.g. 01...12)
vjs10='��������������·�'; // Please enter Year and Month First 
vjs11='����ȷ�����ڸ�ʽ��������01...31��ĳЩ�·ݿ���ֻ��00..28'; // Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)
vjs12='����ȷ��Сʱ��ʽ��������00...23'; // Invalid hour format, please enter as (e.g. 00...23)
vjs13='����ȷ�ķ��Ӹ�ʽ��������00��59 '; // Invalid minute format, please enter as (e.g. 00...59)
vjs14='����ȷ��MTUֵ���������1440��1454'; // Invalid MTU, must be between 576...1492
vjs15='����ȷ��MRUֵ���������128��65535'; // Invalid MRU, must be between 128...65535
vjs16="��Ч IP ��";  //Invalid Ip:
vjs161="����";  // not in
vjs162="��������"; // netmask 
vjs17='���������鲻һ�������룬���ٴ�ȷ��'; // You typed two different passwords, please double check again!
vjs18='�����뿪ʼ���Ӷ˿ڵ���ֵ'; // Please enter start port number.
vjs19='��ʼ���Ӷ˿�ֵ����С�ڽ����˿�ֵ'; // Start port number should be smaller than end port number.
vjs20='����ȷ�����Ӷ˿�ֵ�����Ӷ˿�ֵӦΪһ������'; // Invalid port number, port numbers should be positive integer 
vjs21='����ȷ�ĳ���'; // Invalid Length 
vjs22='����ȷ��λ�ø�ʽ';// Invalid Format at position 
vjs221='!����Ϊ: '; //! Must be :
vjs23='����ȷ��MAC��ַ����Ϊһ�㲥��ַ'; // Invalid MAC address, it is a broadcast address.
vjs24='����ȷ��MAC��ַ����Ϊ�յ�ַ'; // Invalid MAC address, it is a null address 
vjs25='����ȷ��MAC��ַ����Ϊ�㲥��ַ'; // Invalid MAC address, it is a mutlicast address.
vjs26='����ȷ�Ŀ�ͷ��ĩβIP��ַ��ĩβIP��ַӦ���ڿ�ʼIP��ַ'; // Invalid start and end IP address, end IP should be larger than start IP 
vjs27='����ȷ�����֣� �������1��65535'; // Invalid number! Must between 1..65535
vjs28='����ȷ�����������ʽ'; // Invalid netmask format.
vjs29='����ȷ�����������ʽ��������������ǣ�255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254'; // Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254
vjs30='����ȷ��IP��ַ�������һ�벻��Ϊ0��255'; // Invalid Ip address, the last number cannot be 0 or 255
vjs31='����ȷ�ľ�����IP��ַ�����һ�벻��Ϊ127'; // Invalid Lan Ip address, the first number cannot be 127
vjs32='����ȷ�ľ�����IP��ַ���䲻��Ϊ0.0.0.0'; // Invalid Lan Ip address, cannot be 0.0.0.0
vjs33='����ȷ�ľ�����IP��ַ����������224.0.0.0'; // Invalid Lan Ip address, must under 224.0.0.0
vjs34='��ȷ�ķ�Χ�ǣ�'; // Valid range is 
vp1='����վ�����ҳ����ơ��赲'; // This web site is blocked by PARENTAL CONTROL 
vp2='���Ѿ������ҳ����ơ���ֹ������Ϊ��'; // is prohibited by PARENTAL CONTROL and categorized as: 
vp3='��������ͬ�˷ּ�����ϣ������վ�����·ּ����밴��ͬ��'; // If you disagree with the rating and want the site to be re-rated, click Disagree:
vp4='����Ҫ�޸ġ��ҳ����ơ��Ĺ涨���밴����'; // If you would like to modify the policies for PARENTAL CONTROL, click Change:';
vp5='ȡ�����Ĺ涨(���ޱ�̨����)�����������벢ѡȡ��'; // To override your policies (this computer only) for 1 hour, input password and click Override:
Disagree='��ͬ��'; // Disagree 
Change='����'; // Change 
Override='ȡ��'; //Override
wc1='������ > ��������'; // WAN > Connection Type 
wc2='ѡ��������������'; // Select your connection type:
wc3='��̬IP '; // Dynamic 
wc4='��̬���͵����������ձ�ġ������ʹ��Cable���ƽ���������Ƚ��п������ö�̬���ӡ��������һ��Cable���ƽ����������ȷ������������ͣ���ʹ�����'; // A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.
wc5='��̬'; // Static 
wc6='һ����̬IP��ַ�������ͽϲ�Ϊ�ձ顣������ISP��Ӧ���ṩ��һ�������ı��IP��ַʱ����ʹ�����ѡ��'; // A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.
wc7=' PPPoE '; // PPPoE 
wc8='�����ʹ��ADSL���ƽ����������ISP�ṩ��һ��ʹ�������������룬���������������;�ΪPPPoE����ʹ�ô�����������'; // If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.
wc9='PPTP'; 
wc10='[��ŷ�޹���]����������������ŷ�޹�����Ϊ�ձ顣�������ISP�Ѹ�֪���ر�ʹ��PPTP�����ṩ����ȷ��PPTP��Ϣ������ʹ�ô�ѡ��'; //[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.'; 
wc11=' Telstra BigPond '; // Telstra BigPond 
wc12='[������] Telstra BigPondʹ������ʹ�ô�ѡ��������'; //[Australia Only] Users of Telstra BigPond Cable or DSL will use this option to configure the connection.
Next='��һ��'; // Next 
wds1='������ > DNS '; // WAN > DNS 
wds2='�������ISP�ṩ��һ���ض���DNS��ַ�����ڴ��������벢��ѡ"���ñ��"'; // If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".
wds3='�Զ���ISP���'; // Automatic from ISP 
wds4='DNS��ַ'; // DNS Address 
wds5='�μ�DNS��ַ'; //Secondary DNS Address  
wds6='DNS��ָ��������ϵͳ����ָһ��λ�������Ϸ���URL��ַ������www.belkin.comΪһ��IP��ַ'; // DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP addresses.
wds7='������������Զ�DNS���ܵĻ�������������ISP���ṩ��DNS�趨'; // You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function 
wdy1='������ > �������� > ��̬IP '; // WAN > Connection Type > Dynamic IP 
wdy2='�������Ķ�̬IP��ַ��������������Ϣ��ѡȡ"���ñ��"'; // To enter your Dynamic IP settings, type in your information below and click "Apply changes".
wdy3='��������'; // Host Name 
wdy4='����������ISP��������Ҫ��'; // Host Name = A name that some Internet Service Providers require for connection to their system.
wdy5='���Ĺ����� MAC��ַ'; // Change WAN MAC Address 
wdy6='����ȷ����������: ~!##$%^&*()=+{}[]|\'\\\":;?/.<>'; // Invalid Host Name: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<> 
wmc1='������ > MAC��ַ'; // WAN > MAC address 
wmc2='����ISP�����ӵ��������ϸ���MAC��ַ��·�������������ȷ����ֻҪ�����ڰ�װ·����ǰԭ�����ӵ�Modem�ĵ���������MAC��ַ����������MAC��ַ��������κ�����'; // Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.
wmc3='������ MAC��ַ'; // Wan Mac Address 
wmc4='���Ƶ��� MAC��ַ';  //Clone Computer\'s MAC Address
wmc5='����'; // Clone 
wm1='������/������'; // Internet/WAN 
WAN='������'; // WAN 
wm2='��������������/������ ���趨����·����������ISP��·�����ܹ����κ�ISP�������ӣ�ֻҪ������ȷ�ؽ�·�����趨��ISP���趨ƥ�䡣Ҫ������·������ISP���ӣ��밴��Ļ��ߵ�"��������" '; // The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.
wm3='֧����������'; // Connection types supported:
wm4='<b>��̬IP:</b> ����Ҫ��һ���������Ƶ�ISP�����������һ���ض���MAC��ַ'; //<b>Dynamic:</b> including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. 
wm5='<b>��̬IP:</b> ·����֧������ָ����̬IP��ַ��ISP����'; //<b>Static IP address:</b> the Router supports a connection to an ISP which assigns a static IP address. 
wm6='<b>PPPoE:</b> ��̫����ʹ�õĵ�Ե�Э�� ·����֧��PPPoE���佫Ҫ��PPPoE��¼ȷ��'; //<b>PPPoE:</b> the Router supports a dynamic connection type which requires a PPPoE login for authentication.
wm7='<b>PPTP:</b> ֻ����ŷ���û� ·����֧��͸��PPTP���ӵ�ŷ��ISP'; //<b>PPTP:</b> For European users ONLY. The Router supports connections to European ISP\'s which connect via PPTP.
wm8='<b>Telstra BigPond:</b>';
wm9='ֻ���ڰ����û� ·����֧�����ӵ�Telstra BigPond '; // Australian users ONLY. The router supports connection to Telstra BigPond.'; 
wpe1='������ > �������� > PPPoE'; // WAN > Connection Type > PPPoE 
wpe2='��������PPPoE�趨�����������µ���Ϣ��ѡȡ"���ñ��"'; // To enter your PPPoE settings, type in your information below and click "Apply changes".
wpe3='ʹ��������'; // User Name 
wpe4='������������'; // Retype Password 
wpe5='��������(����ɲ���)'; // Service Name (Optional)
wpe6=' MTU(1440-1454)'; // MTU (576-1492)
wpe7='�벻Ҫ����MTUֵ����������ISP�ر�ָ��һ����1432���趨'; // Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1454.
wpe8='������'; // Disconnect after 
wpe9='�޻���� '; // minutes of no activity.
idlerangerro='�������������ʱ���ǲ���ȷ�ġ����������ܽ���1-99'; // Idle time of the numbers you entered are invalid.\n The number has to be an integer between 1-99.
wpe10='��Ч�ַ�: <>&'; // Invalid character: <>&
pm='���ķ����޷�ȷ��������������롣��ȷ�������������������ȷ��'; // Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.
wpe11='����ȷ��MTUֵ'; // Invalid MTU value 
wpe12='����������ʹ��������'; // Please enter your username 
wpp1='������ > �������� > PPTP '; // WAN > Connection Type > PPTP 
wpp2='PPTP�ʺ�'; // PPTP Account 
wpp3='PPTP����'; // PPTP Password
wpp4='���ٴ���������'; // Retype Password 
wpp5='��������'; // Host Name 
wpp6='����IP��ַ'; // Service IP Address 
wpp7='�ҵ�IP��ַ'; // My IP Address 
wpp8='�ҵ���������'; // My Subnet Mask 
wpp9='����ID(ѡ����Ŀ) '; // Connection ID (optional)
wpp10='�����ж���'; // Disconnect after 
wpp11='�޻������'; // minutes of no activity.
wpp12='�밴����������DNS�趨'; //Click here to enter your DNS Settings
wpp13='����������PPTP�ʺ�'; // Please enter your PPTP Account 
wpp14='���ٴ���������'; // Please re-enter your password!
wpp15='��������������'; // Please enter your password!
ws1= '������ > �������� > ��̬IP '; // WAN > Connection Type > Static IP 
ws2='�������ľ�̬IP�趨��������������ϢȻ��ѡȡ"���ñ��"'; // To enter your Static IP settings, type in your information below and click "Apply changes".
ws3='IP��ַ'; // IP Address 
ws4='��������'; // Subnet Mask 
ws5='ISP���ص�ַ'; // ISP Gateway Address 
ws6='�ҵ�ISP�Ƿ��ṩ����һ����̬IP��ַ��'; // My ISP Provides more than one Static IP address?
ws7='������������DNS�趨'; // Click here to enter your DNS Settings 
dm='��������δ�������е�DNS���룬�򲿷���������ĺ��벻��ȷ���˺���Ӧ����0��255'; // Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.
sm='����������������������ǲ���ȷ��'; // The Subnet mask numbers you entered are invalid.
ws8='���ڽ������Ĵ�����������DNS��ַ'; // Please enter/validate your DNS address settings on the following screen 
wsc1=' IP��ַ����'; // Alias IP Address 
im='IP��ַ�����������޷�������'; // The Alias IP Address list is full. Additional rules can not be created.
wt1='������ > �������� > Telstra BigPond '; // WAN > Connection Type > Telstra BigPond 
wt2='�����������������ɰ��޵�Telstra BigPond���ṩ������Ҫ�������µ���Ϣ����Щ��Ϣ��Telstra BigPond�ṩ'; // If your Internet service is provided by Telstra BigPond in Australia, you will need to enter your information below. This information is provided by Telstra BigPond.
wt3='ѡȡ������'; // Select Your State 
wt4='ʹ���߾����ֶ�ѡȡ��¼������'; // User decide login server manually 
wt5='��¼������'; // Login Server 
Logout='�˳�'; // Logout 
wt6='���������ķ�����IP����嵥��ѡ��'; // Please enter your Server IP or select your state from the menu.
wla1='����>�趨ΪAP(�����) '; // Wireless > Use as Access Point 
wlad1='·��������ֻ�޶���Ϊһ��AP���߽���㣬��������·�ɺͷ���ǽ���ܡ�������ѡȡ"����" Ȼ�����������APָ����IP��ַ����'; // The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.
wlad2='����/����'; // Enable / Disable 
wlae1='ָ��IP��ַ'; // Specify IP Address 
wlae2='��������'; // Subnetmask 
wlae3='����������������ֶ������������ĵ�ַΪ�������ĵ�ַ'; // Please change the Address entry box in the status bar of your browser manually to the lan address 
wlae4='1)����Ƶ����·������AP�������<br>'+
      '2)��ȫ�趨��·������AP�������<br>'+
      '3)���MAC���˷���ǽ���ã�ʹ���߱���ȷ������·������AP�����߾�����MAC��ַ���ܹ�ȷ�����߻���ͨ�š�<br>';
//	1) Wireless channels must match between Router and AP.<br>
//	2) Security settings (WEP) must match between Router and AP.<br>
//	3) If MAC filtering is enabled, user must be sure to add the WLAN MAC address(es) of the Router/AP in order to allow communication with each other.<br>
wlc1='���� > Ƶ�� �� SSID '; // Wireless > Channel and SSID 
wlc2='Ҫ����·�����ϵ������趨�����ڴ˸��ģ�Ȼѡȡ"���ñ��"��������'; // To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.
wlc3='����Ƶ��'; //Wireless Channel
wlc4='SSID '; // SSID 
wlc5='����ģʽ'; // Wireless Mode 
wlc6='54G-Auto '; //802.11g-Auto 
wlc7='54G-Only '; //802.11g-Only 
wlc8='54G LRS '; //802.11g LRS 
wlc9='�㲥SSID '; // Broadcast SSID 
wlc10='��ǿģʽ'; //Turbo Mode
wlc11="���� Turbo ģʽ����·��������ʵ�ʹ��֡�ŷ���ȡ��·��������ʵ㵽 802.11g �ͻ����������������Turbo ģʽ��֧�� Turbo ģʽ�� 802.11g �ͻ���Эͬ���С�ʹ��������������� Belkin 802.11g �ͻ���֧�� Turbo ģʽ����֧�� Turbo ģʽ�Ŀͻ��������� Turbo ģʽʱ�������С�"; // Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.
wlc12='����ģʽ'; //Protected Mode
wlc13="ע��: �ڴ����������У����״��(������)�ǽ�����ģʽ�رա������ʹ��HEAVY802.11b�����Ч��ӦΪ������ģʽ�ر�ʱ"; // NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.
wlc14='current channel';
wle1='���� > ��ȫ'; // Wireless > Security 
wle2='��ȫģʽ'; // Security Mode 
wle3='WPA-PSK(�޷�����)'; // WPA-PSK(no server)
wle4='128λWEP '; //128bit WEP 
wle5='64λWEP '; //64bit WEP 
wle6='WPA (��Radius������)'; // WPA(with Radius Server)
wle7="�������ڴ��趨���߰�ȫ/���ܡ���ȫ����ʱ��ȷ�����ֵ�����߰�ȫ��WPA�ṩ���ǲ�������ı�ļ��ܴ����Լ�ָ������ѵı�ȫ��������������߻�����������е��豸����֧��WPA�����Ծͱ���ʹ��WEP"; // You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.
wle8='13��ʮ�����Ƶĳɶ�����'; //(13 hex digit pairs)
wle9='ע��'; NOTE: 
wle10='����ʹ���ַ��������ɶԵ�ʮ���������֣�����ߵ���Ŀ�������ַ���'; // To automatically generate hex pairs using a PassPhrase, check the box on the left and input the passphrase here 
PP='�ַ���'; // PassPhrase 
generate='����'; // generate 
errm='�������ַ���'; // Please enter a PassPhrase 
keym='��Կ������'; // Key is not complete 
wle11='��Կ1 '; // Key 1
wle12='��Կ2'; // Key 2
wle13='��Կ3'; // Key 3
wle14='��Կ4'; // Key 4
wle15='ʮ�����Ƶĳɶ�����'; //(hex digit pairs)
wle16='WPA/WPA2(with Server)';
wle17='Advance Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
keym1='��Կ���ɺ����ѡ�����ñ����ʹ����Ч'; // is not complete 
keym2='������, �����!'; // is invalid, please correct it first!
wlm1='����'; // Wireless 
wlm2='�����������Ե����趨Ϊ������'; // In this tab you can adjust settings to the Wireless section of the Router.
wlm3='Ƶ�� �� SSID '; // Channel and SSID 
wlm4='��������Ƶ����SSID�������������ƣ�'; // Make adjustments to the wireless channel and SSID(wireless network name)
wlm5='��ȫ'; // Security 
wlm6='�������߰�ȫ�趨������WPA�趨��WEP�趨'; // Change the wireless security settings such as WPA settings or WEP settings.
wlm7='����AP���߽����'; // USE as Access Point 
wlm8='�趨·����������ģʽΪAPģʽ'; // Set the operating mode of the Router to AP mode 
wlm9='ָ��IP��ַ'; //Specify IP address
wlm10='ָ��AP��IP��ַ'; // Specify IP address of the AP.
wlm11='MAC��ַ����'; // MAC Address Control 
wlm12='�趨һ������Ҫ������Ǿܾ������������û��嵥'; // Set up a list of clients that you want to allow or deny access to the wireless network.
wlm13='��������'; // Wireless Bridge 
wlm14='�����趨�����Ž�WDSģʽ'; // Allows you to Setup WDS bridging modes.
ww8='������radius���Ӷ˿ں���'; // Please input radius port number 
ww9='Radius���Ӷ˿ں���ӦΪһ������1��65535�ĺ���'; // Radius port number should be a number between 1 and 65535
ww10='������radius��Կ'; // Please input radius key 
ww11='����������ӦΪһ������'; // re-key interval should be a number 
ww12='����������ӦΪ����60��'; // re-key interval should be larger than 60 seconds 
ww13='Authentication '; // Authentication 
ww1=' WPA ���з�������'; // WPA (with server) 
ww2='�����趨 - ���߱�ȫ��ȡʹ�÷�������������Կ���û������ѡ����ҪRadius������������������'; // Advanced Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.
ww3='���ܼ���'; // Encryption Technique 
ww4='Radius������'; // Radius Server 
ww5=' Radius���Ӷ˿�'; // Radius Port 
ww6=' Radius��Կ'; // Radius Key 
ww7='����������ʱ��'; // Re-Key Interval 
seconds='����'; // seconds 
wwp6='����PSK'; // Input pre-shared key (PSK)
wwp7=' PSK�ĳ���ӦΪ8��63��64��ʮ��������'; // The length of pre-shared key should be 8 to 63 or 64 Hex 
wwp1='Ԥ��ֵΪTKIP'; // Default is TKIP 
wwp2='PSK'; // Pre-shared Key (PSK)
wwp3='WPA-PSK(�޷�����)'; // WPA-PSK (no server)
wwp4='��Ϊһ���룬�Ե��֡����顢һ����ĸ������������ɡ��������������<b>8</b>��<b>63</b>����ĸ�����п��԰����հ׻��Ǳ����š�ÿһ�����ӵ��������ʹ���߱���Ҫʹ��ͬһ������'; // Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex(0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). 
wwp5='ģ�� PSK '; // Obscure PSK 
wlb1='���� > ��������'; // Wireless > Wireless bridge 
wlb2='�����Žӻ����߷ֲ�ϵͳWDS��������������·����������AP����ʹ�������縲�Ƿ�Χ����'; // Wireless Bridging or Wireless Distribution System (WDS) is used to connect Wireless Routers and Access points together to extend a network.
wlb3='���������Ž�'; // Enable Wireless Bridging.
wlb4='(�����˹��ܻ���������Access Point�������ӵ����Access Point)'; //(enabling this feature allows other Access Points to connect to this Access Point.)
wlb5='Ĭ��ֵΪ����'; // Default is enabled 
wlb6='�����������ض�Access Point������'; //Enable ONLY specific Access Points to connect.
wlb7="(����AP��MAC��ַ�����ӣ���������Ŀû�б�ȷ�ϣ����κ�AP���������ӡ�ע��: �����ӵ�AP������һ��AP��Ҫ��������AP��MAC��ַ�� ��ʾ:MAC��ַ����͸��������������վѰ�ҹ����ҵ�)"; //(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)
wlb8='�ر��û��������ӹ���'; // Disable ability for Wireless CLIENTS to connect.
wlb9='�˹���ֻ����AP����������������APʱ'; //(This feature should only be used when the AP is used  exclusively to connect wirelessly to other APs.)
wlb10='��Ч'; // invalid 
wlbss1='վ����Ѱ'; // Site Survey 
BSSID='BSSID';
wlbss2='��������'; // Network Type 
wlbss3='����'; // Encryption 
wlbss4='ѡ��'; // Select 
wlbss5='û���ҵ����õ�BSSID'; // No available BSSID found.
wlbss6='�����ĸ��������ˣ����Ƴ�����һ�����ſ������µ�ѡ��!'; // All 4 fields are full, remove one of them before you select new one!';
wlq1='QoS����������������';// QoS (Quality of Service) Configuration
wlq2='QoS �������е���Ҫ���ݣ����ý�����ݺͻ��� IP ��������VoIP������Ϊ������ȼ��������Щ���ݲ����ܵ�����ͨ�����緢�͵��������ݵĸ��š����� 802.11e�������Դ򿪻�رմ˹��ܣ�����ѡ��Ҫʹ�õ�Ӧ��ģʽ����������������д��ݶ�ý�����ݻ�ʹ�� VoIP����Ӧ���� QoS��<br>'; //QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.
wlq3=' QoS �л�'; // QoS Switch
wlq4='�����Դ򿪻�ر� QoS <br>'; //Allows you to turn ON or OFF QoS. 
wlac1='ACK ģʽ'; // ACK Mode
wlac2='������������ʹ������Ӧ��ACK��ģʽ����ȡ��ѵĶ�ý�����ܣ��ŷ� ACK �ͼ�ʱ ACK<br><br>'+
'��ʱ ACK ��ȱʡ�����������ã����齫��������������������� ACK ģʽ�Ӽ�ʱ ACK ����Ϊ�ŷ� ACK ���ܻ�Ӱ�쳤�������������������ĳ��������ܶ�����˵������Ҫ��ʱ����ʹ�ü�ʱ ACK��<br><br>'+
'�ŷ� ACK ģʽ����������������͵�ÿ���Ű�������Ӧ������ή�Ϳ�������·�����Ϳͻ���֮������ӷǳ�����ʱ���ŷ� ACK ���Դ�����������������ĳ��Ӧ�ó��������Ͷ��������Ƶ������Ҫ���Ĵ�����ʹ�ñŷ� ACK ģʽ�����ס����ʹ�ñŷ� ACK ģʽʱ���ܻ�Ӱ�쳤�������ܡ�<br>'; //
wmac1='���� MAC ��ַ����'; // Setting MAC Address Control
wmac2=' MAC ��ַ��������һ��ǿ��İ�ȫ�Թ��ܣ�������ָ������������ʹ�õļ������ע�����б�����������߼�����������ԶԴ��б�������ã������κ�δ�ڹ������б���ָ���ļ��������ͼ������������ʱ���ᱻ�ܾ����������ô˹���ʱ������������������������ÿ̨�ͻ�������������� MAC ��ַ������ֹ�����ܿ������ǳ����׵�Ϊ�κμ���������͹ر�������ʣ����������б�����ӻ����������� MAC ��ַ��<br>'+
'������������б�<br>'+
'1.		ѡ���������߰�ť (1) ��ʼ�����������ӵ���������ļ�������б�<br>'+
'2. 	���ţ��ڿհ׵ġ�MAC ��ַ���ֶ��� (3)������ϣ���ܷ���������������߼������ MAC ��ַ��Ȼ�󵥻�����ӡ�(4)��<br>'+
'3. 	����ִ�д˲�����ֱ����������������Ҫ��ӵļ����Ϊֹ��<br>'+
'4. 	���������ñ����(5) ��ɲ�����<br><br>'+
'���þܾ������б�<br>'+
'���ܾ����ʡ��б������ָ����ϣ����������ļ�������κ�λ�ڴ��б��еļ����������������������硣��������ԡ�<br>'+
'1.		ѡ��"�ܾ�"���߰�ť(2)��ʼ���þܾ�������������ļ�����б�<br>'+
'2. 	���ţ��ڿհ׵ġ�MAC ��ַ���ֶ��У����������������������������߼������ MAC ��ַ��Ȼ�󵥻�����ӡ�(4)��<br>'+
'3. 	����ִ�д˲�����ֱ����������������Ҫ�ܾ����ʵļ����Ϊֹ��<br>'+
'4. 	���������ñ����(5) ��ɲ�����<br>'; //

wlmc1='���� > MAC��ַ����'; // Wireless > MAC address control 
wlmc2=' MAC��ַ���� ���趨һ���������ܾ���ȡ����������û��嵥'; // Mac Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.
Allow='׼��';	Deny='�ܾ�';   //Disable='ʹ��Ч';
wlmc7='����ѡ����Ҫ�����ܾ������ȡ��MAC��ַ�嵥'; // Select you want to allow or deny access the MAC address list first!
wlmc6='�޷����볬��16��MAC��ַ'; // Can\'t enter more than 16 MAC addresses!
wlmc3="����ȷ��MAC��ַ"; //Invalid MAC address
wlmc4='���ȸ���'; // Please correct it first!
wlmc5='��ȷ��MAC��ַӦΪ xx:xx:xx:xx:xx:xx��x�ǽ���0-9��a-f'; // The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!
ENTRY_FULL	= '���е������¼��������������������¼������һ��'; // All entries are full.\nPlease remove some entries then try again.
CLEAR_CONFIRM	= '��Ҫ��������¼��? '; // Do you want to clear entry 
CLEAR_ALL_CONFIRM = 'ȷ��ȫ�����  ��Ҫ������������¼��'; // Do you want to clear all entries?
ERR_INTERNAL	= '�ڲ�������ȷ��Javascrip���� --'; // Internal Error: Please check the javascrip function -- 
g1=' IP��ַ��·�������ڲ�IP��ַ����ȡ�����趨�ӿڣ�'+ 
'ֻҪ�����µĵ�ַȻ��ѡȡ"���ø���"��'+ 
'���������������ַ��λ�������IP��ַ'+  
' �������Ҫ�����Ը��������ַ�� ';
// The "IP address" is the Internal IP address of the Router. To access the advanced setup 
// interface, type this IP address into the address bar of your browser. This address can 
//be changed if needed. To Change the IP address, type in the new IP address and click "Apply
// Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable
// IP are:
g2=' 192.168.x.x (x�������0��255) <br>'; //192.168.x.x (where x is anything between 0 and 255.)<br>
g3='10.x.x.x (x�������0��255)<br>'; //10.x.x.x (where x is anything between 0 and 255.)<br>
g4='172.y.x.x(y�������16��31����x�������0��255)'; //172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)<br>
g5='����ı��������롣�����Ҫ�Ļ����Ը����������롣����������������ʱ�Ÿ�����������<br>'; // There is no need to change the subnet '+
'mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet '+'Mask if you specifically have a reason to do so.<br>'
g6=	' DNS����������ϵͳ����������д��һ��DNS��������һ��λ��URL��ַ�ķ�����������:www.belkin.com��������ʼʹ��һ��·����ǰ�����ISP������Ҫ��������������Ϣ��������ISP���ṩ��һ���ض��� DNS��ַʱ����Ӧ��Ҫѡȡ"�Զ���ISP��ȡ"���������ʹ�þ�̬IP���ӣ�����Ҫ����һ���ض���DNS��ַ����һ���μ���DNS��ַ������������������Ƕ�̬IP��PPPoE�������п��ܲ�һ����Ҫ����һ��DNS��ַ������DNS��ַ�趨��"�Զ���ISP��ȡ������DNS�������ø����������趨��<br>'; // DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the '+ 
	//'Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP '+
	//'addresses. Many ISP\'s do not require you to enter this information into the Router. The '+ 
	//'"Automatic from ISP" checkbox should be checked if your ISP did not give you a specific '+
	//'DNS address. If you are using a Static IP connection type, then you may need to enter a '+
	//'specific DNS address and secondary DNS address for your connection to work properly. If '+
	//'your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS '+ 
	//'address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and '+
	//'enter your DNS entries in the spaces provided. Click "Apply Changes" to save //the settings. <br>'
g7=	'DHCP�������������趨����ǳ����ף���ֻҪ�������е�ÿһ�������ָ��һ��IP��ַ���������Ҫ�����Թر�DHCP������������Ҫ�������е�ÿһ̨������ֶ��趨һ����̬IP��ַ���ر�DHCP��������IP��ַ�ķ�ΧӦ�ã���ֵӦ����2-100(99̨�����)�������Ҫ����������֣�����������һ���µĿ�ʼ��������֣�Ȼ��ѡȡ"Ӧ�ø���ֵ"<br>';
//The DHCP server function makes setting up a network very easy by assigning IP addresses '+ 
	//'to each computer on the network. The DHCP Server can be turned off if necessary. Turning '+
	//'off the DHCP server will require you to manually set a Static IP address in each computer '+
	//'on your network. The IP pool is the range of IP addresses set aside for dynamic assignment '+
	//'to the computers on your network. The default is 2-100 (99 computers) if you want to change '+
	//'this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g8=	'������Ϊ���������������ơ������ظı����Ƴ��Ǳ��롣�����Ը������������κ����Ʊ��磺�ҵ����硣<br>';  // You can set a local domain name (network name) for your network. There is no need to change 
	//'this setting unless you have a specific advanced need to do so. You can name the network '+
	//'anything you want such as "MY NETWORK". <br>';
g9='��̬IP '; // Dynamic IP 
g10= '��̬IP�������µ��ƽ����ʹ�õ��������͡�ͨ��ֻҪ������ISP�Ϳ��Խ��趨��Ϊ��̬IP����Щ��̬IP���ӿ��ܻ�Ҫ��һ���������ƣ��������һ��ָ�����������ƣ��������뼴�ɡ�������������Ҳ��������ISPָ���ģ�ĳЩ��̬IP���ӿ��ܻ�Ҫ��������ԭ�����ӵ��Ե�MAC��ַ��ѡȡ��Ļ�е�"���Ĺ�����MAC��ַ"���ӣ��������·��������ȷ���ӣ�����״̬��ʾ����"������"<br>'; // A dynamic connection type is the most common connection type found with cable modems.
	//'Setting the connection type to dynamic in many cases is enough to complete the connection '+ 
	//'to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host '+
	//'Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. '+
	//'Some dynamic connections may require that you clone the MAC address of the PC that was '+
	//'originally connected to the modem. To do so, click on the "Change WAN MAC address" link in '+
	//'the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';
g11=	'һ����̬IP�������ͽ��������Ͳ��ձ顣�������ISPʹ�þ�̬IP��ַ����������Ҫ����IP��ַ���������롢��ISP���ء�����ISP���ṩ�����Ϣ��������������Ȼ��ѡȡ"Ӧ��"������Ӧ����Щ�ı���������·��������ȷ�趨����������״̬����ʾΪ"������"���������ISP�ṩ������һ����̬IP��ַ������·����Ӧ�ɴ��������̬IP��ַ��ѡȡ"�ҵ�ISP�ṩ����һ����IP��ַ"Ȼ���������������IP��ַ<br>'; // A Static IP address connection type is less common than other connection types. If your ISP 
	//'uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway '+
	//'address. This information is available from your ISP or on the paperwork that your ISP left '+ 
	//'with you. Type in your information then click "Apply Changes". After you apply the changes, '+
	//'the Internet Status indicator will read "Connected" if your Router is set up properly.<br><br>'+
	//'If your ISP assigns you more than one static IP address, your Router is capable of handling '+ 
	//'up to five static WAN IP addresses. Select "My ISP provides more than one static IP address" '+
	//'and enter your additional addresses. <br>';
g12=	'�󲿷ݵ�DSL ISP�ṩ��̫����ĵ�Ե�Э�顣�����ʹ��DSL���ƽ�������������磬����ISP���ܻ�ʹ����̫�����PPPoEЭ���������������硣������ļ��������С�Ͱ칫�����Ӳ���ҪModem�������µ�״��������ʹ��PPPoE: 1)����ISP�ṩ��һ��ʹ������������������������ 2)����ISP�ṩ���������ӵ����������"WinPOET��Enternet300 3)������ȷ��ѡȡ�����ϵ�ͼ������������  ��·�����趨ʹ��PPPoE����������ʹ�������������룬�����û�л�����֪�������������հ׼��ɡ���������??? <br>';// Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to '
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
g13=	'��ЩISPҪ��PPTPͨѶЭ�顣�⽫��ʹ������ֱ���趨һ��ISPϵͳ������ISP�ṩ����Ϣ������������ϣ�ѡȡ"���ñ��"������Ӧ�ø���ֵ���������·��������ȷ���ӣ�����״̬��ʾΪ"������"';// Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system.
	//'Type in the information provided by your ISP in the space provided. When you have finished, '+
	//'click "Apply Changes". After you apply the changes, the Internet Status indicator will read '+
	//'"Connected" if your Router is set up properly. ';
g14=	'����ʹ������������������Telstra BigPond�ṩ��������������Ϣ��ѡȡ����״̬������Զ��������ķ�����IP��ַ��������ĵ����������ַ���ṩ�Ĳ�ͬ�������ܱ����ֶ�������������IP��ַ��ѡȡ"���ñ��"���������·��������ȷ���ӣ�����״̬��ʾ��"������"'; // Your user name and password are provided to you by Telstra BigPond. Enter this information below. 
	//'Choosing your state will automatically fill in your Login Server IP address. '+
	//'If your Login Server address is different than one provided here, '+
	//'you may manually enter the Login Server IP address. '+
	//'When you have entered your information, click "Apply Changes". '+ 
	//'After you apply the changes, the Internet Status indicator will read "Connected" '+
	//'if your Router is set up properly. ';
g15='MTU�趨'; // MTU Setting 
g16=	'MTU�趨ֵ����ı��������ISP�ṩ��һ���ض���MTUֵ������MTUֵ�������������������: ��������ߡ������ٶ���������Ӧ������';
 // The MTU setting should never be changed unless your ISP gives you a specific MTU setting.
	//'Making changes to the MTU setting can cause problems with your Internet connection including '+ 
	//'disconnection from the Internet, slow Internet access and problems with Internet applications working properly. '; 

g17='��X֮����ߡ�'; // Disconnect after X...
g18=	'���߹��ܽ�����·������ISP�Զ�����ʱʹ�ã���һ��ʱ��������ʱ������:����ʹ�õ�����������Ʒ�ʱ��������ʹ�ô�ѡ��'; // The Disconnect feature is used to automatically disconnect the router from your ISP when 
	//'there is no activity for a specified period of time. For instance, placing a checkmark '+
	//'next to this option and entering 5 into the minute field will cause the router to '+
	//'disconnect from the Internet after 5 minutes of no Internet activity. This option should '+ 
	//'be used if you pay for your Internet service by the minute. ';
g19='MAC��ָý���ȡ���Ƶ�ַ�����е�����������������������������Լ�·�������ж��е�"���"����ý���ȡ���Ƶ�ַ������ISP���ܻ��¼�������ĵ��Ե�ý���ȡ���Ƶ�ַ�����ҽ����ض��ĵ�����ʹ��������񡣵�����װ·������·���������MAC��ַ�ᱻISP�������������޷���ҵ�����������ṩ·�����������MAC��ַ��������޷�ȷ������ISP�Ƿ���Ҫ���ԭ����MAC��ַ��ֻҪ����MAC��ַ����ȷ������ʹ�õĵ��������ӵ���������װ·����ǰ��ʹ�õĵ��ƽ������ѡȡ"����MAC��ַ"��ѡȡ"���ñ��������MAC��ַ���ѱ�·����???'; // MAC is an acronym for Media Access Controller. All network components including cards, 
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
g20='������·����������Ƶ������ѡ����ѡȡȡƵ����ѡȡ"���ñ��"�������趨�������Ը���SSID��SSID��ͬ���������������ơ���������ڵ��������������������磬��Ӧ��Ϊ��������Ĭ��ֵΪbelkin54g��������SSID��ѡȡSSID��λ������һ���µ����ơ�ѡȡ"���ñ��"ʹ�µ��趨ֵ��Ч';  // To change the channel of operation of the Router, select the desired channel from the drop-down menu and select your channel. Click "Apply Changes" to save the setting. You 
 //'can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your '+
 //'area, you should give your wireless network a unique name. The default is Belkin_Pre-N_xxxxxx. To '+ 
//'change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.'; 
g21='���Խ��������������趨Ϊ���Ρ�ֻҪ�ر�SSID�㲥����������Ͳ��������վ��ɨ�赥�С�Site Survey��һ����������������е����ԣ�������ɨ����������п�ʹ�õ����粢�õ��Կɴ���ѡ�񡣽�SSID�Ĺ㲥�رտ�����߰�ȫ�ԡ�'; // It is possible to make your wireless network nearly invisible. By turning off the broadcast 
//'of the SSID, your network will not appear in a site survey. Site Survey is a feature of '+
//'many wireless network adapters on the market today. It will scan the "air" for any available'+
//' network and allow the computer to select the network from the site survey. Turning off the '+
//'broadcast of the SSID will help increase security.';
g22='��������·��������APʱ��������Ϊ��ָ��һ��IP��ַ����IP��ַ�������������ӵ����緶Χ�ڡ�������·���������趨֮�ӿڣ����������������IP��ַ����¼'; // When using the Router as an Access Point, you must specify an IP address for the Access 
//' Point. This IP address must fall into the same range as the network that you will be'+
//' connecting it to. To access the advanced setup interface of the Router again, type in'+
//' the IP address in the web browser and login.';
g23='ʹ������ģʽ�л�'; // Using the Wireless Mode Switch 
g24= 'ʹ�ô��л�����������·��������������ģʽ��<br>'+
'1) 802.11g only<br>'+
'����·��������Ϊ��ģʽ����ֻ��ʹ�÷��� Pre-N �� 802.11g ���豸�������磬�ų��ٶȽ����� 802.11b �豸��<br> '+
'2) 802.11g �� 802.11b<br>'+
'����·��������Ϊ��ģʽ����ʹ�÷��� Pre-N��802.11g �� 802.11b ���豸�������硣<br>'+
'3)�ر�'+
'��ģʽ���ر�·�����ķ��ʵ㣬���û�������豸�����������硣������Һܳ�ʱ�����Ҫʹ��·���������߹���ʱ���ر�·���������߹����Ǳ�������ļ��ѷ�����';
// This switch allows you to set the Router's wireless modes. There are three modes.
// 1) 802.11g only<br>'+ Setting the Router to this mode will allow only Pre-N and 802.11g-compliant devices to join the network, keeping out any slower 802.11b devices.<br> '+
//2) 802.11g & 802.11b<br>'+
//Setting the Router to this mode will let Pre-N-, 802.11g-, and 802.11b-compliant devices to join the network. <br>'+
//3) Off<br>'+
//'This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time. ';

g25='���������'; // Virtual Servers 
g26=	'�˹����ṩ��·���������ⲿ�ķ�������:���������(���Ӷ˿�80)��FTP������(���Ӷ˿�21)��������͸������·�������ܹ��ṩ�ķ��������ڲ������������ǽ�����������������ϲ����ᱻ"����"�����Ϊ���ض���Ӧ�ó�������Ҫʹ��������������ã�һ��Ӧ�ó�����嵥���ᱻ�ṩ���������������Ҫ��Ӧ�ó������嵥�ϣ���������������Ӧ�ó����ṩ�̣��˽�����Ҫ��һ�ֳ�������Ҫ���ṩ���嵥��ѡ�񣬴�������Ҫ��Ӧ�ó�����һ�У�Ȼ��ѡȡ"����"�������趨����ı�Ϊ����ָ������һ�С�֮��ѡȡ"���ñ��"�����������ĵ��趨����??? '; // This function will allow you to route external (Internet) calls for services such as 
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
g27='�û�IP����ǽ'; // Client IP filters 
g28=	'·���������趨��ĳЩ�ض����ڻ��ض�ʱ���޷����ӵ����硢�����ʼ���������������������趨����һ̨���ԡ�һϵ�еĵ��Ի��Ǻܶ���ԡ�����:��Ҫ����ĳһ̨�ض��ĵ��ԣ�������IP��ַ���������Ƶ�IP��Χ���������ڶ˿���λ����80��Ȼ��ѡ��TCP��������ѡ��Block����Ҳ����ѡ����Զ�赲�����Ϸ�ѡ��ʼ������ʱ�䣬Ȼ�����·�ѡ�����������ʱ�䡣ѡ��"���ñ��"����̨����������ָ����ʱ����޷����ӵ�����ָ��������IP��ע��:��ȷ����ѡ������ȷ��ʱ��'; // The Router can be configured to restrict access to the Internet, e-mail or other network 
	//'services at specific days and times. Restriction can be set for a single computer, a '+
	//'range of computers, or multiple computers. To restrict Internet access to a single '+
	//'computer for example, enter the IP address of the computer you wish to restrict access '+ 
	//'to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. '+
	//'You can also select Always to block access all of the time. Select the day to start on '+
	//'top, the time to start on top, the day to end on the bottom and the time to stop on the '+
	//'bottom. Click "Apply Changes". The computer at the IP address you specified will now be '+
	//'blocked from Internet access at the times you specified. Note: be sure you have selected '+
	//'the correct time zone under Utilities> System Settings> Time Zone. ';
g29=' MAC��ַ����'; // MAC Address Filtering 
g30=	'ý���ȡ���Ƶ�ַ����ǽ�ܹ������趨��Щ���Ա��������ӡ��κβ�������ĵ��Զ����޷���ȡ��Ϣ��������������ܣ����������������е�ÿһ̨���Զ�����MAC��ַ��"Block"�����������򵥵ؿ�����ر������ȡ���ܣ�������嵥�����ӻ��Ƴ�MAC��ַ����ʹ������ܣ�ѡȡ"����ý���ȡ���Ƶ�ַ����ǽ"����������ÿһ̨���������ý���ȡ���Ʒ���ǽ��ַ����ֻҪѡȡ"����"��Ȼ���ڿհ��ֶ�������ý���ȡ���Ʒ���ǽ��Ȼ��ѡ��"���ñ��"���ɡ���Ҫ���嵥��ɾ��ý���ȡ���Ƶ�ַ��ֻҪ������ɾ����ý���ȡ���Ƶ�ַ�Ա߰�"ɾ��"���ɣ�??? '; // The MAC Address Filter is a powerful security feature that allows you to specify which 
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
g31=	'�Ǿ���������������ָ���ض���һ���������еĵ��Ա������ַ����ǽȡ������������ַ�������⣬������Ǳ���ģ����䵱��ʹ�õ�����Ϸ������Ѷ����ʱ������ʱ״��������ʹ�ô���ܡ�<font class="redBold">��̨�ڷǾ������ĵ��Բ�δ�ܵ��ڿ͹����ı���</font>��������������Ǿ��������������һ��IP��ַ�����֣�Ȼ��ѡȡ"����"��Ҫ�ø�����Ч��ѡȡ"���ñ��"������Ҫʹ�ö��������IP��ַ����ѡȡ�Ǿ����������ܹ�ֱ�������Ĺ�����IP��ַ������Ǿ�������������IP��ַ��������룬ѡ��"����"Ȼ��ѡȡ"���ñ��"'; // The DMZ feature allows you to specify one computer on your network to be placed 
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
g32='�赲ICMP Ping '; // Block ICMP Ping 
g33=	'���Ժڿ�ͨ����ʹ��"Pinging"��Ѱ������������Ŀ�ꡣ͸�����һ���ض���IP��ַ���յ���Ӧ�����ԺڿͿ��жϳ��Ƿ����������Ϣ���Խ�ȡ����·���������趨������������ICMP����Ӧ�����һ�������������ļ������ȫ�㼶��Ҫ�رյ��Զ�Ping�Ļ�Ӧ����ѡȡ"�赲ICMP Ping"Ȼ��ѡȡ"���ñ��"��'; // Computer hackers use what is known as "Pinging" to find potential victims on the 
	//'Internet. By pinging a specific IP address and receiving a response from the IP '+
	//'address, a hacker can determine that something of interest might be there. The '+
	//'Router can be set up so it will not respond to an ICMP Ping from the outside. This '+ 
	//'heightens the level of security of your Router. To turn off the ping response, select '+ 
	//'"Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. '; 
g34='����Ա����'; // Administrator Password 
g35='��·������δ�趨�κ����롣����Ҫ��߰�ȫ�㼶������������趨�������Ʊ����������룬δ��������Ҫ��������ʹ�ô�·����������Ҫʹ��Զ�̹����ܣ����ǽ���������趨���롣�˳�ʱ���������趨���ܹ�ʹ��·���������趨��ʱ�䳤�ȡ�������ʼ����ʱ����ʱ���Ὺʼ��ʱ������:���Ѿ��ڽ����趨�����˸��ģ�δ��ѡ"�˳�"���뿪���ԣ��������趨�˳�ʱ��Ϊʮ���ӣ��������뿪����ʮ����֮��ϵͳ�ͻ��Զ������˳����������Ϊ����߰�ȫ�ԣ�ϵͳԤ����˳�ʱ��Ϊʮ���ӡ�ע��:��ͬһʱ����ֻ��һ̨���Կ��Ե�¼�������趨�Ľӿڡ�'; // The Router ships with NO password entered. If you wish to add a password for more 
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
g36='ʱ����ʱ��'; // Time and Time Zone 
g37=	'��̨·������ʱ��͸����������ʱ��ͨѶЭ���趨����˿���·������ȫ������ʱ��ͬ����·�����е�ͬ��ʱ����������¼�����ʹ���ߵ��롣��ѡ��������ס�ص�ʱ��������ס����ʱ�Ƶ�������ѡ��"������ʱ��"��ϵͳ���ܲ������ϸ��£���Ⱥ�����15������·��������ʱ�����������õ���Ӧ�����޷������趨ʱ�䡣 '; // The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server.
	//'This allows the Router to synchronize the system clock to the global Internet. The '+ 
	//'synchronized clock in the Router is used to record the security log and control client '+  
	//'filtering. Select the time zone that you reside in. If you reside in an area that '+ 
	//'observes Daylight Saving, then place a checkmark in the box next to "Enable Daylight '+ 
	//'Saving". The system clock may not update immediately. Allow at least 15 minutes for '+ 
	//'the router to contact the time servers on the Internet and get a response. You cannot '+ 
	//'set the clock yourself. '; 
g38='Զ�̹���'; // Remote Management 
g39=	'�������ô����ǰ��<font class="plaintext_bold">��ȷ�����Ѿ��趨����Ա����</font>��Զ�̹�����������������κεط���·�������趨���ܹ�������Զ�̹���·�����ķ�ʽ����һ�ַ�ʽ���Դ��κεط���ȡ·������ֻҪѡ���κο���Զ�̹���·������IP��ַ���������ϵ��κεط���������������IP�������Կ���һ��Ҫ��������·��������Ĵ��ڡ��ڶ��ַ�ʽ�ܹ���ָ����IP��ַ��·����Զ�̹��������ʽ�Ƚϰ�ȫ�����ǽ�Ϊ���㡣��Ҫʹ�����ַ�ʽ����������Ҫ��ȡ��·����֮IP��ַ��Ȼ��ѡ��"ֻ�����IP��ַ�ɶ�·����Զ�̲���"���������������ǰ������ǿ�ҽ������趨һ��������???';// Before you enable this function,
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
g40='����NAT ';// NAT Enabling 
g41=	'�������ô����ǰ��<font class="plaintext_bold">��ȷ�����Ѿ��趨����������</font>��NAT���������������е��������������ISP���ṩ��ͬһ��IP��ַ������ʹ����Ӧ�ý�ʹ�ô���ܡ�������ISP�ṩ�����IP��ַ����������Ҫ���н���ϵͳ���ö��ر�NATʱ������ʹ�ô���ܡ��������ʹ�õ�һIP��ַ������NAT�ǹر�ʱ�����ĵ��Խ��޷�������������������������Ҳ�п��ܻᷢ������NAT�ر�Ҳ����ر����ķ���ǽ����';  // Before you enable this function, 
	//'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	//'Network Address Translation (NAT) is the method by which the router shares the single '+ 
	//'IP address assigned by your ISP with the computers on your network. Advanced users '+ 
	//'should only use this function. This function should only be used if your ISP assigns '+ 
	//'you multiple IP addresses or you need NAT disabled for an advanced system configuration. '+  
	//'If you have a single IP address and you turn NAT off, the computers on your network will '+ 
	//'not be able to access the Internet. Other problems may also occur. Turning off NAT will '+ 
	//'disable your firewall functions. '; 
g42=	'"ȫ����弴��"�ṩ����©����ҵ������������ѶϢ����ѶѶϢ����Ϸ������ȫ����弴�õ�Ӧ�ó���ĳЩӦ�ó�����Ҫ·�����ķ���ǽ͸���ض��ķ�ʽ��̬����������ͨ������Ҫ��TCP��UDP�����Ӷ˿ڣ���ʱ����Ҫ�趨�����������Ӷ˿ڡ�ȫ����弴�ÿ���·���������������֪·�����δ���Ҫ����ǽ��̬����·������ȫ����弴�ù����ǹرյġ��������ʹ�ô˹��ܣ�ֻҪ�ڹ��߳���ҳ��Ѱ��"����ȫ����弴��"Ȼ��ѡȡ"����"����ѡȡ"���ñ��"����'; // UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice 
	//'messaging, video messaging, games, and other applications that are UPnP compliant. Some '+
	//'applications require the Router\'s firewall to be configured in a specific way to operate '+
	//'properly. This usually requires opening TCP and UDP ports and in some instances setting '+
	//'trigger ports. An application that is UPnP compliant has the ability to communicate with '+
	//'the Router, basically "telling" the Router which way it needs the firewall configured. '+
	//'The Router ships with the UPnP feature disabled. If you are using any applications that '+ 
	//'are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the '+ 
	//'UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. '+ 
	//'Click "Apply Changes" to save the change. ';
g43='�Զ�Firmware��������'; // Automatic Firmware Update Notification 
g44='��·�����ڽ��Զ�ȷ���°汾�����岢�������Ƿ���������ɹ����¡���������·�����Ľ����趨�ӿ�ʱ��·������ȷ���Ƿ���������ɹ����¡�����У�·������֪ͨ��������ѡ�������µ�������Ǻ��Ը���ʾ��������趨Ϊ�رգ������Ҫ���ã�ֻҪѡȡ"����"��Ȼ��ѡȡ"���ñ��"���� ';// The Router has the capability built-in to automatically check for a new version of 
//'firmware and alert you that the new firmware is available. When you log into the '+ 
//'Router advanced interface, the router will perform a check to see if new firmware '+ 
//'is available. If new firmware is available, you will be notified. You can choose to '+ 
//'download the new version or ignore it. The router ships with this feature disabled. '+  
//'If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='���߰�ȫ'; // Wireless Security 
g46='ʹ�ü��ܹ��ܿ�����ȷ����������İ�ȫ�㼶����ͬһʱ����ֻ��ʹ��һ�ְ�ȫ�㼶�趨������ʹ���߱���ѡ���ܹ�֧����������װ�õ�ģʽ���������Ʒ�������ְ�ȫ�㼶�趨�ɹ���ѡ��<br><br>' +
'1)�رա�û�����õļ���ģʽ�����������ϵ�ʹ���߽Կ��������粢��¼<br><br>' +
'2)WPA PSK - ����(�޷�����)�����߱�ȫ��ȡ��һ�������е���Ϣ��װ���в�ͬ�ļ��ܴ��������Կ��������Կ�����ı䣬����WPA�Ƿǳ���ȫ�ġ���������WPA��һ����WPA-PSK (Pre-Shared Key)����һ����WPA-Radius Server�����������ŵĲ������һ����Ҫ������һ������Ҫ��WPA-PSK���ṩû�з������ļ��û�С����ҵ�û���PSK������Կ�ǲ�����һ���ַ�������䡣�����Եأ�����Σ�����ڵ������ҳ�����Pass Phrase�ַ�������䡣<br><br>'+
'a. TKIP(��ʱ��Կ������ͨѶЭ��)ָAES(���׼��ܱ�׼) WPA�趨��Ҫʹ����ѡ��ʹ��TKIP���ܻ�AES���ܡ�WPA��׼ָ��TKIP�����Դ�ΪĬ��ֵ������֮�⣬TKIPӦ�ṩ���������ѵ�Ч�ܣ���Ϊ��������߲�Ʒ��Զ�޷�����ΪAES��AES��һ�ֻ���802.11i�����¼��ܼ������µ�WPA��׼������ʹ��AES����ȻĿǰ��˵AES��δ�ռ���������Щʹ���߽�ϲ��ʹ�ô˿Ƽ�������ʹ����һ�ֱ�׼�����е������Ʒ��һ��Ҫ��һ���ļ�����׼<br><br>'+
'b. Pre-Shared Key ����һ������40���ַ��ĵ��ֻ���飬ͬ����PSKһ��Ҫ����ʹ����ÿһ�������е������豸����ע���Ϸ����·���λ�Ĳ�ͬ(��дN��Сдn�ǲ�һ����)������ƻ������簲ȫ�ķ�ʽ���ǲ³�����PSK��<br><br>'+
'3) 128-bit WEP  ֱ�������128-bit WEP(Wired Equivalent Privacy)�����߼��ܵı�׼��������������е������豸֧��WPA��128bitWEP�Կ����ṩ���ѵİ�ȫѡ��ϵͳ��Ҫ��������һ��ʮ�����Ƶ����֣����������������в���<br><br>'+
'4) 64-bit WEP ��������ʹ��64-bit WEPģʽ�������������Щ�豸��֧��WPA��128-bit WEP<br><br>'+
'5) WPA - Radius������(��ģʽ��͸�����װ�ť��ȡ)��WPA������ֻ�ܹ����統��һ��Radius��������ʹ�á����еĲ����ڴ�ģʽ�ж����Դ�Radius�������Ĺ���Ա��á�������WPA PSK��WPA���������ṩ������һ����Կ������ϵͳ���в���<br><br>';
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
g57='ʹ�ö�̬ DNS'; //Using Dynamic DNS
g58='��̬ DNS ����������������� DynDNS.org ��Ʒ��Ϊ��̬ IP ��ַָ����̬�������������Ӷ������׵ش��������ϵĲ�ͬ���������������������DynDNS.org Ϊ��������������ṩ�˷�������������������<br>'+
'��̬ DNSSM �����Ǽ�ͥ��վ���ļ�������������ѡ�񣬻�ʹ���ڹ���ʱ���׷������ļ��� PC ���Ѵ洢���ļ���ʹ�ô˷����ȷ����������������ָ������ IP ��ַ������������ ISP ��ö��������һ�Ρ������� IP ��ַ����ʱ���������Ѻ�ͬ�����ͨ������ yourname.dyndns.org ���ҵ�����<br>'+
'<br>Ҫ���ע�����Ķ�̬ DNS ������������� http://www.dyndns.org��<br>'+
'<br><b>����·�����Ķ�̬ DNS ���¿ͻ���</b><br>'+
'��ʹ�ô˹���ǰ��������ʹ��DynDNS.org ����Ѹ��·������ע�ᡣһ��ע�ᣬ�밴����ָʾ���в�����<br>'+
'1. 	�ڡ��û������ֶ��� (1) �������� DynDNS.org �û�����<br>'+
'2. 	�ڡ����롱�ֶ��� (2) �������� DynDNS.org ���롣<br>'+
'3. 	�ڡ��������ֶ��� (3) ������ͨ�� DynDNS.org ���õ� DynDNS.org ������<br>'
'4. 	���������¶�̬ DNS���������� IP ��ַ��<br>'+
'���ۺ�ʱ�������� ISP ָ���� IP ��ַ����ʱ��·��������ʹ�������� IP ��ַ�Զ����� DynDNS.org �ķ���������������ͨ�����������¶�̬ DNS����ť (4) ���ֶ���ɴ˲�����<br>'; // 
fw1='�̼����½�����'; // Firmware update in progress.
fw2='�����ж�·�������л�γ�·�����Ĳ�ͷ����������ᵼ��·�������ܹ���'; //DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable
apply_text_1='��������,���Ե�һ��......<BR>\n '; // Applying changes. Please wait .......


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
