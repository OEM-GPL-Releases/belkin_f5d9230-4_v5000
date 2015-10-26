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
apply_text_1='Applying changes. Please wait....... ';
language='English';
show1='Home';
show2='Help';
show3='Login';
show4='Logout';
show5='Internet Status';
show6='Connected';
show7='Disconnected';
show8='LAN Setup';
show9='LAN Settings';
show10='DHCP Client List';
show11='Internet WAN';
show12='Connection Type';
show13='DNS';
show14='MAC Address';
show15='WLAN Not Available';
show16='Wireless';
show17='Channel and SSID';
show18='Security';
show19='Use as Access Point';
show20='Specify IP Address';
show21='MAC Address Control';
show22='Wireless Bridge';
show23='Firewall';
show24='Virtual Servers';
show25='Client IP Filters';
show26='MAC Address Filtering';
show27='DMZ';
show28='WAN Ping Blocking';
show29='Security Log';
show30='Utilities';
show31='Parental Control';
show32='Restart Router';
show33='Restart AP';
show34='Restore Factory Default';
show35='Save/Backup Settings';
show36='Restore Previous Settings';
show37='Firmware Update';
show38='System Settings';
show39='Printer Service';
show40='Print Server Configuration';
show41='DDNS';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='More Info';
btn1='Clear Changes';
btn2='Apply Changes';
btn3='Update Dynamic DNS';
Router='Router';
AP='AP';
Dynamic='Dynamic';
cff1='Check Firmware Successfully';
cff2='Firmware Info.'; 
cff3='There is no new firmware update available for this Router!';
cff4='Cannot connect to the firmware information server, <br>please double check the wan connection.';
cff5='An updated version of firmware is available for your Router';
d1='Belkin | Duplicate Administrator';
d2='Duplicate Administrator';
d3='This device is managed by';
d4='currently!!';
fc1='Firewall > Client IP filters';
fc2a='The Router can be configured to restrict access to the Internet, e-mail or other network services'; fc2b=' at specific days and times.'; 
IP='IP';
Port='Port';
Type='Type';
BT='Block Time';
Day='Day';
Tm='Time';
Enable='Enable';
BOTH='BOTH';
Always='Always';
Block='Block';
SUN='>SUN';
MON='>MON';
TUE='>TUE';
WED='>WED';
THU='>THU';
FRI='>FRI';
SAT='>SAT';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 1 and 254.';
fcsm='The port numbers you entered are invalid.';
fcrm='The latter of the port range must be larger than the former.';
fcripm='The latter of the ip range must be larger than the former.';
fcpm='The number in port entry box should be between 1 - 65535.';
fd1='Firewall > DMZ'; 
fd2='The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.'; 
fd3='The computer in the DMZ is not protected from hacker attacks.'; 
fd4='To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Submit" for the change to take effect.'; 
fd5='IP Address of Virtual DMZ Host'; 
fd6='Static IP';  
fd7='Private IP';  
fd8='Enable'; 
fd9='Firewall > DDNS'; 
fd10='Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router\'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org ';
fd11='You must create an account before using this service.&nbsp;'; 
fd12='User Name > '; 
fd13='Password > '; 
fd14='Domain Name > '; 
fd15='Please enter the IP address before enabling DMZ';
fd16='Auto-update';
fmc1='Firewall > MAC address filtering';
fmc2='This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.';    
fmc3='Enable MAC Address Filtering';   
fmc4='MAC Address Filtering List';  
fmc5='Block';  
fmc6='Host';  
fmc7='MAC Address';  
fmc9='Can not input a multicast MAC';
fmc12='This MAC has already been added!';
Add='Add'; 
Del='Delete';
fmcipm='Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.';
fmn1='Firewall >';
fmn2='Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.'; 
fmn3='Firewall Enable / Disable >';
Disable='Disable';
fp1='Firewall > WAN Ping Blocking';
fp2='<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.'; 
fp3='Block ICMP Ping >';  
fs1='Firewall > Security log';
fs2='The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.'; 
fs3='Log File';
Save='Save';
Clear='Clear';
Refresh='Refresh';  
fv1='Firewall > Virtual servers';
fvipm='Either you have not entered all of the ip addresses \n or some of the numbers you entered are invalid. \n The number in ip address entry box should be between 1 - 254.';
fvrm='The public port number can not be 88.Because it will have a collision with the Wireless Router  web service.';
fvipr='The Inbound port range is not correct.';
fvppr='The Private port range is not correct.';
fv2='This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.'; 
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
fv39='DirectX 7 Games'; 
fv40='DirectX 8 Games'; 
fv41='Domain Name Server (DNS)'; 
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
fv56='FTP Server'; 
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
fv73='Lotus Notes Server'; 
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
fv121='Telnet Server'; 
fv122='The 4th Coming'; 
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"'; 
fv125='Total Annihilation'; 
fv126='Ultima'; 
fv127='Unreal Tournament'; 
fv128='Urban Assault'; 
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2'; 
fv131='Web Server (HTTP)'; 
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
fv200='Clear entry ';
Description='Description';  
Inb='Inbound port';  
Type='Type';  
Pipa='Private IP address ';  
Pport='Private port';  
htop='top'; 
h1='Help';
h2='GLOSSARY OF TERMS';  
h3='<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.';  
h4='<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.';  
h6='<b>Dial-Up</b> A connection which uses the public telephone network.'; 
h7='<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.';   
h8='<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.';  
h9='<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.';  
h10='<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.';  
h11='<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).';  
h12='<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.';  
h13='<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.';  
h14='<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.';  
h15='<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.';  
h16='<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations.';  
h17='<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem.';  
h18='<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.';  
h19='<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.';  
h20='<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.';  
h21='<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.';  
h22='<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.';  
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.';  
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.';  
h25='<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.';  
h26='<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.';  
h27='<b>Static IP</b> An IP address that is manually configured and never changes.';  
h28='<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC).';  
h29='<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.';  
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.';  
h31='<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. '; 
h32='<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.';  
h33='<b>WAN IP Address</b> The IP address assigned to the router by the ISP.';  
h34='<b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)'; 
Enabled='Enabled';
Disabled='Disabled';
i1='Setup Home'; 
i2='Status';
i3='Version Info'; 
i4='Firmware Version'; 
i5='Boot Version';  
i6='Hardware';  
i7='Serial No.';  
i8='LAN Settings '; 
i9='LAN/WLAN MAC';  
i9a='LAN MAC';
i9b='WLAN Not Available';
i10='IP address'; 
i11='Subnet mask '; 
i12='DHCP Server ';
i13='Internet Settings';  
i14='WAN MAC address'; 
i15='Connection Type';  
i16='Subnet mask';  
i17='Wan IP'; 
i18='Default gateway';  
i19='DNS Address';  
i20='Features'; 
i21='NAT';  
i22='Firewall Settings '; 
i23='SSID'; 
i24='Security'; 
i25='Printer'; 
i26='(enable/disable)';
i27='You will need to log in before you can change any settings.'; 
i28='Print Server / Printer';
i29='Print Server Name';
i30='FTP Printing';
i31='RAW TCP/IP Printing';
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
langt='Language';
langc='English';
ld1='LAN > DHCP';
ld2='LAN > DHCP Client List';
ld3='This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.'; 
ld4='IP Address'; 
ld5='Host Name';
ld6='MAC Address'; 
lm1='LAN';
lm2='Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.'; 
lm3='The changes that you can make are:';
lm4='- Change the Internal IP address of the Router. The default = 192.168.2.1';
lm5='- Change the Subnet Mask. The default = 255.255.255.0';
lm6='- Enable/Disable the DHCP Server Function. Default= ON (Enabled)';
lm7='- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100';
lm8='- Specify the IP address Lease Time. Default= Forever';
lm9='- Specify a local Domain Name. Default = Belkin';
lm10='To make changes, click "LAN Settings" on the LAN tab to the left.';
lm11='The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP client list" on the LAN tab to the left.';
ls1='LAN > LAN Settings';
ls2='You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.'; 
ls3='IP Address';   
ls4='Subnet Mask';     
ls5='DHCP server';  
On='On';  
Off='Off';  
all='all';
Auto='Auto';
langt='Language';
langc='English';
langcl='Current Language';
langal='Available Languages';
ls6='The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.'; 
ls7='IP Pool Starting Address';  
ls8='IP Pool Ending Address';   
ls9='Lease Time';   
ls10='Forever'; 
ls11='Half Hour ';
ls12='1 Hour ';
ls13='Two Hours';
ls14='Half Day'; 
ls15='One Day ';
ls16='Two Days ';
ls17='One Week'; 
ls18='Two Weeks';  
ls19='The length of time the DHCP server will reserve the IP address for each computer.';  
ls20='Local Domain Name';
Optional='Optional';    
ls21='A feature that lets you assign a name to your network.'; 
lsipm='Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.';
lssm='The Subnet mask number you entered is invalid.';
lsnetm='The IP pool must be in the same subnet as the gateway IP ';
lsendm='The ending IP address must be larger than the starting IP address.';
lspoolm='The LAN IP address can not be in the DHCP address pool.'; 
lsipm2='Invalid Lan Ip address, the last number cannot be 0 or 255';
lsipm3='Invalid Lan Ip address, the first number cannot be 127 or 0';
lsldnm='Invalid Local Domain Name';
lsipm4='The IP that you entered is invalid';
lsipalert='Please change the Address entry box in the status bar of your browser manually to the new lan address';
lsipm5='The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)';
lsipc='Do you really wish to change the LAN IP address?';
lo1='Login';
lo2='Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit." ';
lo3='Password ';  
lo4='Default = leave blank ';
Clear='Clear';
Submit='Submit';
le1='Belkin | Login Error';
lerror='Login Error !!';  
Utilities='Utilities > ';
rs1='Reset Successfully ';
rs2='The reset is complete when the power light stops blinking.';  
rs3='Router is rebooting';
rs4='seconds remaining.';  
rf1='Restore factory defaults Successfully'; 
rf2='The restore is complete when the power light stops blinking.';  
rss1='Restored Settings Successfully ';
rss2='The restored settings is complete when the power light stops blinking.';  
ufy1='Restore factory defaults';
ufy2='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.';
ufy3='WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?';
ufy4='Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.';
ufy5='Will Not Restore Factory Defaults.No Settings Will be lost!';
ufy='Restore Defaults';
ufe1='Utilities > Firmware update';
ufe2='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.';
ufe3='NOTE: Please backup your current settings before updating to a new version of firmware.';
ufe4='Click Here';
ufe5='to go to the Save/Backup current settings page.';
ufe6='Check For New Firmware Version >';
ufe7='Check Firmware'; 
ufe8='Update Firmware >';
Update='Update';
ufe9='Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.';
ufe10='Are you sure you want to continue with upgrading?';
ufe11='At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.';
um1='This screen lets you manage different parameters of the Router and perform certain administrative functions.';
um2='Parental Control';
um3='Belkin\'s Parental Control protects you and your kids from objectionable content on the web.'; 
um4='Belkin\'s Parental Control is the filter you set up. Now you can surf the net with your kids even when you are not there.<br>&nbsp;';
um5='Restart Router';
um6='Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.'; 
um7='Restore Factory Defaults';
um8='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.';
um9='Save/Backup Current Settings';
um10='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.';
um11='Restore Previous Saved Settings';
um12='This option will allow you to restore a previously saved configuration.';
um13='Firmware Update';
um14='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed. ';
um15='System Settings';
um16='The System Settings page is where you can enter a new administrator password ';
um17=', set the time zone, enable remote management and turn on and off the NAT function';
um18=' of the Router.';
upc1='Utilities > Parental Control';
upc2='Belkin\'s Parental Control protects you and your children/employees from objectionable content on the web. Parental Control comes pre-configured to block many types of web content, but is custom configurable to be more or less restrictive. Any web site can easily be set to be either, always blocked, or always allowed.';
upc3='Your Parental Control Subscription is ';
upc4='UN-ACTIVATED'; 
upc5='NOT-ACTIVATED';
upc6='ACTIVATED';
upc7='To stop PARENTAL CONTROL signup prompts, Click here:';
upc8='EXPIRED';
upc9='Your subscription will expire in ';
days='days';
upc10='Account information';
Advanced='Advanced';
Apply='Apply';
upc11='Refresh Account information';
upc12='Reporting';
upc13='You are currently ';
upc14=' subscribed to reporting.';
not='not';
upc15='Click here to see a sample of how reporting works.';
upc16='Reporting Sample';
upc17='Click here to signup for reporting.';
upc18='Subscribe Now';
upc19='Click here to view your report.';
upc20='View Report';
upc21='Parental Control Status';
upc22='Turn Parental Control Filter ON and OFF.';
upc23='Web Filter is currently ';
ON='ON';
OFF='OFF';
pwd='Password';
upc24='e-mail Notification';
upc25='Notify me by e-mail if the Parental Control is overridden.';
upc26='Email is currently ';
upc27='Modify policy';
upc28='To view or change Default Policies for your Parental Control, click here';
Modify='Modify';
upc29='Parental Control Sign-up';
upc30='If you wish to sign up for Belkin\'s Parental Control feature, please click the button below.'; 
upc31='You are currently <b>NOT</b> subscribed to the Parental Control service.';  
upc32='Parental Control Renew';
upc33='Your subscription is close to the expiration date. Please click to renew your subscription.';
upc34='Renew Now';
upc35='url is empty';
upa1='Utilities &gt; Parental Control Account Information';
upa2="You can change your Parental Control user information here such as the Parental Control notification e-mail address and the Parental Control administrator password.";
upa3='Change Parental Control notification e-mail address.';
upa4='your current e-mail address'; 
upa5='Enter your new e-mail address'; 
upa6='Re-enter your new e-mail address';
upa7='Change Parental Control Administrator Password';
upa8='Enter your new password';
upa9='Re-enter your new password';
upa14='E-mail address can not be set null';
Change='Change';
Stop=Apply;
upad1='Utilities &gt; Parental Control Advanced Settings';
upad2="Belkin's Parental Control requires an Internet rating response from Cerberian (our partner) for every web site requested. Normally, response time is less than 1 second causing virtually no delay. However when you request a rare site that is not in their data base, they rate the site dynamically, which can take a few seconds depending on how fast the site loads. If the response time is slower than the time interval below, PARENTAL CONTROLS can be configured to either: Allow all sites on timeouts, or Block all sites on timeouts.";
Timeout='Timeout';
upad3='Timeout after waiting';
upad4='seconds for a response';
upad5='Default behavior when timeout occurs';
upad6='Setting the default behavior when timeout occurs, the router will block/pass all the web surfing according to the setting.';
upad7='Allow all sites on timeout.';
upad8='Block all sites on timeout.';
upr1='Utilities > Parental Control Account Refresh';
upr2='This function is only necessary if your PARENTAL CONTROL subscription information is not correct.<br>By pressing this button, the router will download/refresh all account information from Belkin.<br>To refresh your PARENTAL CONTROL router account information, click Refresh:';
uprev1='Utilities > Restore previous saved settings';
uprev2='This option will allow you to restore a previously saved configuration.';  
Restore='Restore';
uprev3='Type the name of the file that contains the backup settings.';
uprev4='Do you want to continue and restore settings?';
uprev5='After settings are restored, the Router may not respond\n to commands for as long as one minute.\n\nThis is normal. Do not power down the Router during this time.';
ur1='Utilities > Restart Router';
ur2='Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restartting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.';
ur3='Restart Router';
ur4='Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.';
ur5='Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.';
usave1='Utilities > Save/Backup current settings';
usave2='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.'; 
Save='Save';
usys1='Utilities > System settings';
usys2='Administrator Password: '; 
usys3='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
usys4='Type in current Password';  
usys5='Type in new Password';  
usys6='Confirm new Password';  
usys7='Login Timeout';
usys8='(1-99 minutes)'; 
usys9='Time and Time Zone: '; 
January='January'; February='February'; March='March'; April='April'; May='May'; June='June'; July='July'; August='August'; September='September'; October='October'; November='November'; December='December';
usys10='Please set your time Zone. If you are in an area that observes daylight saving check this box.';
usys11='Time Zone';
usys12='(GMT-12:00) Enewetak, Kwajalein'; 
usys13='(GMT-11:00) Midway Island, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (US & Canada); Tijuana';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (US & Canada) ';
usys19='(GMT-06:00) Central Time (US & Canada) ';
usys20='(GMT-06:00) Mexico City, Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (US & Canada) ';
usys24='(GMT-05:00) Indiana (East) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:30) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31='(GMT-02:00) Mid-Atlantic ';
usys32='(GMT-01:00) Azores, Cape Verde Is. ';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Dublin, Edinburgh ';
usys35='(GMT) Greenwich Mean Time: Lisbon, London ';
usys36='(GMT+01:00) Amsterdam, Berlin, Bern, Rome ';
usys37='(GMT+01:00) Stockholm, Vienna, Belgrade ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Prague,Brussels, Copenhagen, Madrid ';
usys40='(GMT+01:00) Paris, Vilnius, Sarajevo, Skopje ';
usys41='(GMT+01:00) Sofija, Warsaw, Zagreb ';
usys42='(GMT+02:00) Athens, Istanbul, Minsk ';
usys43='(GMT+02:00) Bucharest ';
usys44='(GMT+02:00) Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys47='(GMT+02:00) Israel ';
usys48='(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh ';
usys49='(GMT+03:00) Moscow, St. Petersburg ';
usys50='(GMT+03:00) Tehran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilisi, Kazan ';
usys52='(GMT+04:00) Volgograd, Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinburg ';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Beijing, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Toyko, Osaka, Sapporo, Yakutsk ';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Solamon, New Caledonia ';
usys64='(GMT+12:00) Fiji, Kamchatka, Marshall Is. ';
usys65='(GMT+12:00) Wellington, Auckland ';
usys66='Daylight Savings';
usys67='Automatically Adjust Daylight Saving';
 
usys68='Remote Management:';    
AF='ADVANCED FEATURE!';
usys69='Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function, ';
usys70='MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.';
usys71='Any IP address can remotely manage the router.';  
usys72='Only this IP address can remotely manage the router';  

usys73='NAT Enabling:';    
usys74='Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NAT Enable / Disable';
usys76='UPNP Enabling: ';   
usys77='Allows you to turn the UPNP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router. ';
usys78='UPNP Enable / Disable';
usys79='Auto Update Firmware Enabling:';  
usys80='Allows you to automatically check the availability of firmware updates for your router.';
usys81='Auto Update Firmware Enable / Disable ';
usys82='Current Password is invalid';
usys83='New Password and Re-new Password is different';
usys84='Login Timeout range: 1-99';
usys85='Password length is invalid. The maximum password length is 12 and The minimum password length is 3';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='It is strongly recommended that you set your Administrator password.';
usys88='Primary NTP Server';
usys89='Backup NTP Server';
usys90='192.43.244.18-North America';
usys91='132.163.4.102-North America';
usys92='192.5.41.41-North America';
usys93='192.5.41.209-North America';
usys94='207.200.81.113-North America';
usys95='208.184.49.9-North America';
usys96='129.132.2.21-Europe';
usys97='130.149.17.8-Europe';
usys98='137.189.8.174-Asia Pacific';
usys99='Remote Access Port';
usysipm='Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 0 and 255';
usysb1='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
vjs1='Invalid IP address, too long, Please check again';
vjs2='Invalid IP address, missing \'.\' , Please check again!';
vjs3='Invalid IP address, missing numbers between \'.\', Please check again!';
vjs4="Invalid IP address, extra '.' , Please check again!"
vjs5='Invalid IP address, numbers between \'.\' are too big, Please check again!';
vm1='Invalid Character ';
vm2=' at Position ';
vm3='Must be ';
vjs6='Invalid year format, please enter as (e.g. 2002)';
vm4='Invalid number '; 
vjs8='Invalid,must between 1970..2037';
vjs9='Invalid month format, please enter as (e.g. 01...12)';
vjs10='Please enter Year and Month First';
vjs11='Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)';
vjs12='Invalid hour format, please enter as (e.g. 00...23)';
vjs13='Invalid minute format, please enter as (e.g. 00...59)';
vjs14='Invalid MTU, must be between 576...1492';
vjs15='Invalid MRU, must be between 128...65535';
vjs16="Invalid Ip: ";  vjs161=" not in ";   vjs162=" netmask";
vjs17='You typed two different passwords, please double check again!';
vjs18='Please enter start port number.';
vjs19='Start port number should be smaller than end port number.';
vjs20='Invalid port number, port numbers should be positive integer';
vjs21='Invalid Length';
vjs22='Invalid Format at position '; vjs221='! Must be :';
vjs23='Invalid MAC address, it is a broadcast address.';
vjs24='Invalid MAC address, it is a null address';
vjs25='Invalid MAC address, it is a mutlicast address.';
vjs26='Invalid start and end IP address, end IP should be larger than start IP';
vjs27='Invalid number! Must between 1..65535';
vjs28='Invalid netmask format.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Invalid Ip address, the last number cannot be 0 or 255';
vjs31='Invalid Lan Ip address, the first number cannot be 127';
vjs32='Invalid Lan Ip address, cannot be 0.0.0.0';
vjs33='Invalid Lan Ip address, must under 224.0.0.0';
vjs34='Valid range is ';
vp1='This web site is blocked by PARENTAL CONTROL';
vp2=' is prohibited by PARENTAL CONTROL and categorized as: ';
vp3='If you disagree with the rating and want the site to be re-rated, click Disagree:';
vp4='If you would like to modify the policies for PARENTAL CONTROL, click Change:';
vp5='To override your policies (this computer only) for 1 hour, input password and click Override:';
Disagree='Disagree';
Change='Change';
Override='Override';
wc1='WAN > Connection Type';
wc2='Select your connection type:'; 
wc3='Dynamic'; 
wc4='A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.';  
wc5='Static'; 
wc6='A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.';  
wc7='PPPoE'; 
wc8='If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.';  
wc9='PPTP'; 
wc10='[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.'; 
wc11='Telstra BigPond'; 
wc12='[Australia Only] Users of Telstra BigPond Cable or DSL will use this option to configure the connection.'; 
Next='Next';
wds1='WAN > DNS';
wds2='If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".'; 
wds3='Automatic from ISP '; 
wds4='DNS Address';   
wds5='Secondary DNS Address';   
wds6='DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP addresses.';
wds7='You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function';
wdy1='WAN > Connection Type > Dynamic IP';
wdy2='To enter your Dynamic IP settings, type in your information below and click "Apply changes".';
wdy3='Host Name';  
wdy4='Host Name = A name that some Internet Service Providers require for connection to their system.';  
wdy5='Change WAN MAC Address '; 
wdy6='Invalid Host Name: ~!##$%^&*()=+{}[]|\'\\\":;?/.<> ';
wmc1='WAN > MAC address';
wmc2='Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.';
wmc3='WAN MAC Address'; 
wmc4='Clone Computer\'s MAC Address';  
wmc5='Clone';
wm1='Internet/WAN';
WAN='WAN';
wm2='The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.';
wm3='Connection types supported: ';
wm4='<b>Dynamic:</b> including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. ';
wm5='<b>Static IP address:</b> the Router supports a connection to an ISP which assigns a static IP address. '; 
wm6='<b>PPPoE:</b> the Router supports a dynamic connection type which requires a PPPoE login for authentication.'; 
wm7='<b>PPTP:</b> For European users ONLY. The Router supports connections to European ISP\'s which connect via PPTP. ';
wm8='<b>Telstra BigPond:</b>';
wm9='Australian users ONLY. The router supports connection to Telstra BigPond.'; 
wpe1='WAN > Connection Type > PPPoE';
wpe2='To enter your PPPoE settings, type in your information below and click "Apply changes".';
wpe3='User Name';   
wpe4='Retype Password';   
wpe5='Service Name (Optional)';    
wpe6='MTU (576-1492)';    
wpe7='Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1432.';
wpe8='Disconnect after';
wpe9=' minutes of no activity. ';
idlerangerro='Idle time of the numbers you entered are invalid.\n The number has to be an integer between 1-99.';
wpe10='Invalid character: <>&';
pm='Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.';
wpe11='Invalid MTU value';
wpe12='Please enter your username';
wpp1='WAN > Connection Type > PPTP';
wpp2='PPTP Account';    
wpp3='PPTP Password';    
wpp4='Retype Password';   
wpp5='Host Name';   
wpp6='Service IP Address';  
wpp7='My IP Address';  
wpp8='My Subnet Mask';  
wpp9='Connection ID (optional)';    
wpp10='Disconnect after';
wpp11=' minutes of no activity.';
wpp12='Click here to enter your DNS Settings ';
wpp13='Please enter your PPTP Account';
wpp14='Please re-enter your password!';
wpp15='Please enter your password!';
ws1='WAN > Connection Type > Static IP';
ws2='To enter your Static IP settings, type in your information below and click "Apply changes".';
ws3='IP Address';  
ws4='Subnet Mask';   
ws5='ISP Gateway Address';   
ws6='My ISP provides more than one Static IP address';  
ws7='Click here to enter your DNS Settings';  
dm='Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.';
sm='The Subnet mask numbers you entered are invalid.';
ws8='Please enter/validate your DNS address settings on the following screen';
wsc1='Alias IP Address';  
im='The Alias IP Address list is full. Additional rules can not be created.';
wt1='WAN > Connection Type > Telstra BigPond';
wt2='If your Internet service is provided by Telstra BigPond in Australia, you will need to enter your information below. This information is provided by Telstra BigPond.';
wt3='Select Your State';
wt4='User decide login server manually'; 
wt5='Login Server'; 
Logout='Logout';
wt6='Please enter your Server IP or select your state from the menu.';
wla1='Wireless > Use as Access Point';
wlad1='The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.';
wlad2='Enable / Disable';
wlae1='Specify IP Address';  
wlae2='Subnetmask';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Wireless channels must match between Router and AP.<br>'+
      '2) Security settings (WEP) must match between Router and AP.<br>'+
      '3) If MAC filtering is enabled, user must be sure to add the WLAN MAC address(es) of the Router/AP in order to allow communication with each other.<br>';
wlc1='Wireless > Channel and SSID';
wlc2='To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.';
wlc3='Wireless Channel';
wlc4='SSID';  
wlc5='Wireless Mode'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Broadcast SSID';  
wlc10='Turbo Mode'; 
wlc11="Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.";
wlc12='Protected Mode';
wlc13="NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.";
wlc14='current channel';
wle1='Wireless > Security';
wle2='Security Mode';
wle3='WPA-PSK(no server)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.";
wle8='(13 hex digit pairs)';  
wle9='NOTE: ';
wle10='To automatically generate hex pairs using a PassPhrase, input the passphrase in the box provided below, then select generate.';
PP='PassPhrase'; 
generate='generate';
errm='Please enter a PassPhrase';
keym='Key is not complete';
wle11='Key 1';  
wle12='Key 2'; 
wle13='Key 3'; 
wle14='Key 4';   
wle15='(hex digit pairs)'; 
wle16='WPA/WPA2(with Server)';
wle17='Advance Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
keym1=' is not complete';
keym2=' is invalid, please correct it first!';
wlm1='Wireless';
wlm2='In this tab you can adjust settings to the Wireless section of the Router.';
wlm3='Channel and SSID';
wlm4='Make adjustments to the wireless channel and SSID(wireless network name)';
wlm5='Security';
wlm6='Change the wireless security settings such as WPA settings or WEP settings. ';
wlm7='USE as Access Point';
wlm8='Set the operating mode of the Router to AP mode ';
wlm9='Specify IP address';
wlm10='Specify IP address of the AP.';
wlm11='MAC Address Control'
wlm12='Set up a list of clients that you want to allow or deny access to the wireless network.';
wlm13='Wireless Bridge';
wlm14='Allows you to Setup WDS bridging modes.';
ww8='Please input radius port number';
ww9='Radius port number should be a number between 1 and 65535';
ww10='Please input radius key';
ww11='re-key interval should be a number';
ww12='re-key interval should be larger than 60 seconds';
ww13='Authentication';
ww1='WPA (with server) ';
ww2='Advanced Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
ww3='Encryption Technique';
ww4='Radius Server';
ww5='Radius Port';
ww6='Radius Key';
ww7='Re-Key Interval';
seconds='seconds';
wwp6='Input pre-shared key (PSK)';
wwp7='The length of pre-shared key should be 8 to 63 or 64 Hex';
wwp1='Default is TKIP';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (no server)';
wwp4='Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex(0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). ';
wwp5='Obscure PSK';
wlb1='Wireless > Wireless bridge';
wlb2='Wireless Bridging or Wireless Distribution System (WDS) is used to connect Wireless Routers and Access points together to extend a network.';
wlb3='Enable Wireless Bridging.';
wlb4='(enabling this feature allows other Access Points to connect to this Access Point.)';
wlb5='Default is enabled';
wlb6='Enable ONLY specific Access Points to connect.';
wlb7="(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)";
wlb8='Disable ability for Wireless CLIENTS to connect.';
wlb9='(This feature should only be used when the AP is used  exclusively to connect wirelessly to other APs.)';
wlb10='invalid';
wlbss1='Site Survey';
BSSID='BSSID';
wlbss2='Network Type';
wlbss3='Encryption';
wlbss4='Select';
wlbss5='No available BSSID found.'; 
wlbss6='All 4 fields are full, remove one of them before you select new one!';
wlq1='QoS (Quality of Service) Configuration';
wlq2='QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.<br>'; 
wlq3='QoS Switch'; 
wlq4='Allows you to turn ON or OFF QoS.<br>'; 
wlac1='ACK Mode'; 
wlac2=' There are two acknowledgement (ACK) modes that can be employed to get the best multimedia performance on your network: Burst ACK and Immediate ACK. <br><br>'+
' Immediate ACK is the default (factory) setting and is recommended for normal network operation. Changing the ACK mode from Immediate ACK to Burst ACK may affect long-range throughput. Use Immediate ACK when long-range performance of your network is most important to you. <br><br>'+
'Burst ACK mode will lower overhead by not acknowledging every packet sent over the network. When there is a very good link between the Router and the client, Burst ACK can provide a throughput boost. If an application, such as streaming multiple high-data video streams, requires maximum bandwidth, use Burst ACK mode. Keep in mind that long-range performance may be affected when using Burst ACK mode. <br>'; //
wmac1='Setting MAC Address Control'; 
wmac2=' The MAC address filter is a powerful security feature that allows you to specify which computers are allowed on the wireless network. Note: This list applies only to wireless computers. This list can be configured so any computer attempting to access the wireless network that is not specified in the filter list will be denied access. When you enable this feature, you must enter the MAC address of each client (computer) to which you want to allow network access. The "Block" feature lets you turn on and off access to the network easily for any computer without having to add and remove the computer\'s MAC address from the list.<br>'+
'Setting up an Allow Access List <br>'+
'1.		Select the "Allow" radio button (1) to begin setting up a list of computers allowed to connect to the wireless network.<br>'+
'2. 	Next, in the "MAC Address" field that is blank (3), type in the MAC address of the wireless computer you want to be able to access the wireless network, then click "Add" (4).<br>'+
'3. 	Continue to do this until all of the computers you want to add have been entered.<br>'+
'4. 	Click "Apply Changes" (5) to finish.<br><br>'+
'Setting up a Deny Access List <br>'+
'The "Deny Access" list lets you specify computers that you DO NOT want to access the network. Any computer in the list will not be allowed access to the wireless network. All others will.<br>'+
'1.		Select the "Deny" radio button (2) to begin setting up a list of computers to be denied access to the wireless network.<br>'+
'2. 	Next, in the "MAC Address" field that is blank (3), type in the MAC address of the wireless computer you want to deny access to the wireless network, then click "Add" (4).<br>'+
'3. 	Continue to do this until all of the computers you want to deny access to have been entered.<br>'+
'4. 	Click "Apply Changes" (5) to finish.<br>'; //
wlmc1='Wireless > MAC address control';
wlmc2='MAC Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.';
Allow='Allow';   Deny='Deny';   //Disable='Disable';
wlmc7='Select you want to allow or deny access the MAC address list first!';
wlmc6='Can\'t enter more than 16 MAC addresses!';

wlmc3="Invalid MAC address ";
wlmc4='Please correct it first!';
wlmc5='The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!';
ENTRY_FULL	= 'All entries are full.\nPlease remove some entries then try again.';
CLEAR_CONFIRM	= 'Do you want to clear entry ';
CLEAR_ALL_CONFIRM = 'Do you want to clear all entries?';
ERR_INTERNAL	= 'Internal Error: Please check the javascrip function -- ';
g1='The "IP address" is the Internal IP address of the Router. To access the advanced setup '+ 
'interface, type this IP address into the address bar of your browser. This address can '+  
'be changed if needed. To Change the IP address, type in the new IP address and click "Apply '+  
'Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable '+  
'IP are: ';
g2='192.168.x.x (where x is anything between 0 and 255.)<br>';
g3='10.x.x.x (where x is anything between 0 and 255.)<br>';
g4='172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)<br>';
g5='There is no need to change the subnet '+
'mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet '+
'Mask if you specifically have a reason to do so.<br>';
g6=	'DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the '+ 
	'Internet that translates URL\'s (Universal Resource Links) like www.belkin.com to IP '+
	'addresses. Many ISP\'s do not require you to enter this information into the Router. The '+ 
	'"Automatic from ISP" checkbox should be checked if your ISP did not give you a specific '+
	'DNS address. If you are using a Static IP connection type, then you may need to enter a '+
	'specific DNS address and secondary DNS address for your connection to work properly. If '+
	'your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS '+ 
	'address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and '+
	'enter your DNS entries in the spaces provided. Click "Apply Changes" to save the settings. <br>';
g7=	'The DHCP server function makes setting up a network very easy by assigning IP addresses '+ 
	'to each computer on the network. The DHCP Server can be turned off if necessary. Turning '+
	'off the DHCP server will require you to manually set a Static IP address in each computer '+
	'on your network. The IP pool is the range of IP addresses set aside for dynamic assignment '+
	'to the computers on your network. The default is 2-100 (99 computers) if you want to change '+
	'this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g8=	'You can set a local domain name (network name) for your network. There is no need to change '+ 
	'this setting unless you have a specific advanced need to do so. The Local Domain Name should '+
	'only contain valid characters for Internet domains, i.e. letters, digits, dashes, and dots.  '+
	'No spaces or special characters. <br>';
g9='Dynamic IP';
g10=	'A dynamic connection type is the most common connection type found with cable modems. '+ 
	'Setting the connection type to dynamic in many cases is enough to complete the connection '+ 
	'to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host '+
	'Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. '+
	'Some dynamic connections may require that you clone the MAC address of the PC that was '+
	'originally connected to the modem. To do so, click on the "Change WAN MAC address" link in '+
	'the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';
g11=	'A Static IP address connection type is less common than other connection types. If your ISP '+ 
	'uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway '+
	'address. This information is available from your ISP or on the paperwork that your ISP left '+ 
	'with you. Type in your information then click "Apply Changes". After you apply the changes, '+
	'the Internet Status indicator will read "Connected" if your Router is set up properly.<br><br>'+
	'If your ISP assigns you more than one static IP address, your Router is capable of handling '+ 
	'up to five static WAN IP addresses. Select "My ISP provides more than one static IP address" '+
	'and enter your additional addresses. <br>';
g12=	'Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to '+ 
	'the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet '+
	'connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. '+
	'<br><br>'+
	'Your connection type is PPPoE if:<br>'+ 
	'1) Your ISP gave you a user name and password which is required to connect to the Internet<br>'+
	'2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet<br>'+
	'3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>'+
	'To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. '+
	'If you do not have a Service Name or do not know it, leave the Service Name field blank. '+
	'After you have typed in your information, click "Apply Changes". After you apply the changes, '+ 
	'the Internet Status indicator will read "Connected" if your Router is set up properly. '+
	'For more details on configuring your Router to use PPPoE, see the user manual.<br>';
g13=	'Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system. '+
	'Type in the information provided by your ISP in the space provided. When you have finished, '+
	'click "Apply Changes". After you apply the changes, the Internet Status indicator will read '+
	'"Connected" if your Router is set up properly. ';
g14=	'Your user name and password are provided to you by Telstra BigPond. Enter this information below. '+ 
	'Choosing your state will automatically fill in your Login Server IP address. '+
	'If your Login Server address is different than one provided here, '+
	'you may manually enter the Login Server IP address. '+
	'When you have entered your information, click "Apply Changes". '+ 
	'After you apply the changes, the Internet Status indicator will read "Connected" '+
	'if your Router is set up properly. ';
g15='MTU Setting'
g16=	'The MTU setting should never be changed unless your ISP gives you a specific MTU setting. '+ 
	'Making changes to the MTU setting can cause problems with your Internet connection including '+ 
	'disconnection from the Internet, slow Internet access and problems with Internet applications working properly. '; 

g17='Disconnect after X...'; 
g18=	'The Disconnect feature is used to automatically disconnect the router from your ISP when '+ 
	'there is no activity for a specified period of time. For instance, placing a checkmark '+
	'next to this option and entering 5 into the minute field will cause the router to '+
	'disconnect from the Internet after 5 minutes of no Internet activity. This option should '+ 
	'be used if you pay for your Internet service by the minute. ';
g19='MAC is an acronym for Media Access Controller. All network components including cards, '+ 
'adapters, and routers, have a unique "serial number" called a MAC address. Your ISP may '+
'record the MAC address of your computer\'s adapter and only let that particular computer '+ 
'connect to the Internet service. When you install the router, the Router\'s own MAC address '+ 
'will be "seen" by the ISP and may cause the connection not to work. Belkin has provided '+ 
'the ability to clone (copy) the MAC address of the computer into the router. This MAC '+ 
'address, in turn, will be seen by the ISP\'s system as the original MAC address and will '+ 
'allow the connection to work. If you are not sure if your ISP needs to see the original '+ 
'MAC address, simply clone the MAC address of the computer that was originally connected '+ 
'to the modem. Cloning the address will not cause any problems with your network. <br> '+
'To Clone your MAC address, make sure that you are using the computer which was ORIGINALLY '+
'CONNECTED to your modem before the Router was installed. Click the "Clone MAC address" '+ 
'button. Click "Apply Changes". Your MAC address is now cloned to the router. ';
g20='To change the channel of operation of the Router, select the desired channel from the drop-down menu and select your channel. Click "Apply Changes" to save the setting. You '+
 'can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your '+
 'area, you should give your wireless network a unique name. The default is Belkin_Pre-N_xxxxxx. To '+ 
'change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.'; 
g21='It is possible to make your wireless network nearly invisible. By turning off the broadcast '+ 
'of the SSID, your network will not appear in a site survey. Site Survey is a feature of '+
'many wireless network adapters on the market today. It will scan the "air" for any available'+
' network and allow the computer to select the network from the site survey. Turning off the '+
'broadcast of the SSID will help increase security.';
g22='When using the Router as an Access Point, you must specify an IP address for the Access'+
' Point. This IP address must fall into the same range as the network that you will be'+
' connecting it to. To access the advanced setup interface of the Router again, type in'+
' the IP address in the web browser and login.';
g23= 'Using the Wireless Mode Switch';
g24= 'This switch allows you to set the Router\'s wireless modes. There are three modes. <br>'+
'1) 802.11g only<br>'+
'Setting the Router to this mode will allow only Pre-N and 802.11g-compliant devices to join the network, keeping out any slower 802.11b devices.<br> '+

'2) 802.11g & 802.11b<br>'+
'Setting the Router to this mode will let Pre-N-, 802.11g-, and 802.11b-compliant devices to join the network. <br>'+
'3) Off<br>'+
'This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time.';
g25='Virtual Servers';
g26=	'This function will allow you to route external (Internet) calls for services such as '+ 	
	'a web server (port 80), FTP server (Port 21), or other applications through your Router '+ 
	'to your internal network. Since your internal computers are protected by a firewall, '+
	'machines from the Internet cannot get to them because they cannot be \'seen\'. If you need '+ 
	'to configure the Virtual Server function for a specific application, a list of common '+
	'applications has been provided. If your application is not listed, you will need to contact '+ 
	'the application vendor to find out which port settings you need. To select from the provided '+
	'list, select your application from the drop-down list. Select the row that you want to copy '+
	'the settings to from the drop-down list next to "to row", then click "Enter". The settings '+
	'will be transferred to the row you specified. Click "Apply Changes" to save the setting for '+
	'that application. To manually enter settings, enter the IP address in the space provided for '+
	'the internal (server) machine, the port(s) required to pass (use a comma between multiple '+
	'ports), select the port type (TCP or UDP) and click "Apply Changes". You can only pass one '+
	'port per internal IP address. Opening ports in your firewall can pose a security risk. You '+
	'can enable and disable settings very quickly. It is recommended that you disable the settings '+
	'when you are not using a specific application. ';
g27='Client IP filters';
g28=	'The Router can be configured to restrict access to the Internet, e-mail or other network '+ 
	'services at specific days and times. Restriction can be set for a single computer, a '+
	'range of computers, or multiple computers. To restrict Internet access to a single '+
	'computer for example, enter the IP address of the computer you wish to restrict access '+ 
	'to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. '+
	'You can also select Always to block access all of the time. Select the day to start on '+
	'top, the time to start on top, the day to end on the bottom and the time to stop on the '+
	'bottom. Click "Apply Changes". The computer at the IP address you specified will now be '+
	'blocked from Internet access at the times you specified. Note: be sure you have selected '+
	'the correct time zone under Utilities> System Settings> Time Zone. ';
g29='MAC Address Filtering';
g30=	'The MAC Address Filter is a powerful security feature that allows you to specify which '+
	'computers are allowed on the network. Any computer attempting to access the network that '+
	'is not specified in the filter list will be denied access. When you enable this feature, '+
	'you must enter the MAC address of each client on your network to allow network access to '+
	'each. The "Block" feature lets you turn on and off access to the network easily for any '+
	'computer without having to add and remove the computer\'s MAC address from the list. To '+
	'enable this feature, select "Enable MAC Address Filtering". Next, enter the MAC address '+
	'of each computer on your network by clicking "Add" and entering the MAC address in the '+
	'space provided. Click "Apply Changes" to save the settings. To delete a MAC address from '+
	'the list, simply click "Delete" next to the MAC address you wish to delete. Click "Apply '+
	'Changes" to save the settings. <br><br>'+
	'Note: you will not be able to delete the MAC address of the computer you are using to '+ 
	'access the Router\'s administrative functions. (The computer you are using now). ';
g31=	'The DMZ feature allows you to specify one computer on your network to be placed '+
	'outside of the NAT firewall. This may be necessary if the NAT feature is causing '+
	'problems with an application such as a game or video conferencing application. '+
	'Use this feature on a temporary basis. '+
	'<font class="redBold">'+
	'The computer in the DMZ is not protected from hacker attacks.</font> '+ 
	'To put a computer in the DMZ, enter the last digits of its IP address in the '+ 
	'IP field and select "Enable". Click "Apply Changes" for the change to take effect. '+ 
	'If you are using multiple static WAN IP addresses, it is possible to select which '+
	'WAN IP address the DMZ host will be directed to. Type in the WAN IP address you '+
	'wish the DMZ host to direct to, enter the last two digits of the IP address of '+
	'the DMZ host computer, select "Enable" and Click "Apply Changes". ';
g32='Block ICMP Ping'
g33=	'Computer hackers use what is known as "Pinging" to find potential victims on the '+
	'Internet. By pinging a specific IP address and receiving a response from the IP '+
	'address, a hacker can determine that something of interest might be there. The '+
	'Router can be set up so it will not respond to an ICMP Ping from the outside. This '+ 
	'heightens the level of security of your Router. To turn off the ping response, select '+ 
	'"Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. '; 
g34='Administrator Password';
g35='The Router ships with NO password entered. If you wish to add a password for more '+
'security, you can set a password here. Keep your password in a safe place, as you '+
'will need this password if you need to log into the router in the future. It is '+
'also recommended that you set a password if you plan to use the Remote management '+
'feature of this Router. <br><br>'+
'The login timeout option allows you to set the period of time that you can be logged '+ 
'into the Router\'s advanced setup interface. The timer starts when there has been no '+
'activity. For example, you have made some changes in the advanced setup interface, '+
'then left your computer alone without clicking "Logout". Assuming the timeout is set '+
'to 10 minutes, then 10 minutes after you leave, the login session will expire. You '+
'will have to login to the router again to make any more changes. The login timeout '+
'option is for security purposes and the default is set to 10 minutes. As a note, only '+
'one computer can be logged into the Router\'s advanced setup interface at one time. ';
g36='Time and Time Zone';
g37=	'The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server. '+  
	'This allows the Router to synchronize the system clock to the global Internet. The '+ 
	'synchronized clock in the Router is used to record the security log and control client '+  
	'filtering. Select the time zone that you reside in. If you reside in an area that '+ 
	'observes Daylight Saving, then place a checkmark in the box next to "Enable Daylight '+ 
	'Saving". The system clock may not update immediately. Allow at least 15 minutes for '+ 
	'the router to contact the time servers on the Internet and get a response. You cannot '+ 
	'set the clock yourself. '; 
g38='Remote Management';
g39=	'Before you enable this function,'+  
	'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	'Remote management allows you to make changes to your Router\'s settings from anywhere '+ 
	'on the Internet. There are two methods of remotely managing the router. The first '+ 
	'method is to allow access to the router from anywhere on the Internet by selecting '+ 
	'"Any IP address can remotely manage the router". By typing in your WAN IP address '+ 
	'from any computer on the Internet, you will be presented with a login screen where '+ 
	'you need to type in the password of your router. The Second method is to allow a '+ 
	'specific IP address only to remotely manage the router. This is more secure, but less '+  
	'convenient. To use this method, enter the IP address you know you will be accessing '+ 
	'the Router from in the space provided and select "Only this IP address can remotely '+ 
	'manage the Router". Before you enable this function, it is STRONGLY RECOMMENDED that '+ 
	'you set your administrator password. Leaving the password empty will potentially open '+ 
	'your router to intrusion. ';
g40='NAT Enabling'
g41=	'Before you enable this function, '+  
	'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	'Network Address Translation (NAT) is the method by which the router shares the single '+ 
	'IP address assigned by your ISP with the computers on your network. Advanced users '+ 
	'should only use this function. This function should only be used if your ISP assigns '+ 
	'you multiple IP addresses or you need NAT disabled for an advanced system configuration. '+  
	'If you have a single IP address and you turn NAT off, the computers on your network will '+ 
	'not be able to access the Internet. Other problems may also occur. Turning off NAT will '+ 
	'disable your firewall functions. '; 
g42=	'UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice '+
	'messaging, video messaging, games, and other applications that are UPnP compliant. Some '+
	'applications require the Router\'s firewall to be configured in a specific way to operate '+
	'properly. This usually requires opening TCP and UDP ports and in some instances setting '+
	'trigger ports. An application that is UPnP compliant has the ability to communicate with '+
	'the Router, basically "telling" the Router which way it needs the firewall configured. '+
	'The Router ships with the UPnP feature disabled. If you are using any applications that '+ 
	'are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the '+ 
	'UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. '+ 
	'Click "Apply Changes" to save the change. ';
g43='Automatic Firmware Update Notification';
g44='The Router has the capability built-in to automatically check for a new version of '+ 
'firmware and alert you that the new firmware is available. When you log into the '+ 
'Router advanced interface, the router will perform a check to see if new firmware '+ 
'is available. If new firmware is available, you will be notified. You can choose to '+ 
'download the new version or ignore it. The router ships with this feature disabled. '+  
'If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='Wireless Security';
g46='Using Encryption can help secure your wireless network. Only one type of security '+ 
'may be selected at a time. Therefore the customer must select a mode that is '+ 
'supported on all network devices on the wireless network. This Belkin product has 5 '+ 
'possible Security settings:<br><br>'+
'1) Disabled. No encryption is enabled in this mode. Open networks where all users are '+ 
'             welcome sometimes prefer to not enable encryption.<br><br> '+ 
'2) WPA PSK - Home (no server). WPA (Wireless protected Access) PSK is a recent '+ 
'             standards-based security technique where each packet of information is '+ 
'             encrypted with a different code, or key. Since the key is constantly changing, '+  
'             WPA is very secure. There are two types of WPA, WPA-PSK (Pre-Shared Key), and '+ 
'             WPA-Radius Server. Obviously the difference being that one requires a server '+  
'             and one does not. WPA-PSK is for home and small business users who do not have '+  
'             a server. The PSK encryption key is generated automatically from a string of '+  
'             characters or Pass Phrase. Obviously the biggest security risk in WPA PSK is '+  
'             if someone finds out your Pass Phrase.<br><br> '+ 
'	a. TKIP verses AES. WPA setup requires the user to select whether to encrypt using '+  
'	   TKIP or AES. The WPA standard specifies TKIP, so that is the default. Additionally '+  
'	   TKIP should provide better compatibility between wireless products from different '+  
'	   vendors since many wireless products will never be upgraded to AES. AES is a new '+  
'	   encryption technique based on the un-ratified 802.11i standard. New WPA standards '+  
'	   are being considered using AES. Although AES is not as popular, some users may '+  
'	   prefer to use this technique. Either way, all networks devices must use the same '+  
'	   technique.<br><br> '+
'	b. Pre-Shared Key. Enter any word or phrase up to 40 characters. The same PSK must '+  
'	   also be used for every other wireless network device on the network. Watch out for '+  
'	   upper and lower case differences ("n" is different than "N".) Remember, the easiest '+  
'	   way to break your security is for someone to guess your PSK.<br><br> '+ 
'3) 128-bit WEP. Until recently, 128-bit WEP (Wired Equivalent Privacy) was the standard for '+  
'                wireless encryption. If not all of your wireless devices support WPA, 128bit '+  
'                WEP still offers very good security option. It will require you to enter hex '+  
'                numbers, or you can generate them automatically.<br><br> '+ 
'4) 64-bit WEP. Belkin only recommends 64-bit mode on networks where some devices do not support '+  
'               either WPA or 128bit WEP.<br><br> '+
'5) WPA - Radius Server. (This mode is accessed from any Advanced Button). WPA '+
'server is only  for networks using a Radius Server. All parameter for this mode '+
'should be obtained from the administrator of your Radius Server. Unlike WPA PSK '+
'WPA server passes the key from the server to the clients instead of generating it automatically.';
g57='Using Dynamic DNS';
g58='The Dynamic DNS service allows you to alias a dynamic IP address to a static host name in any of the many domains DynDNS.org offers, allowing your network computers to be more easily accessed from various locations on the Internet. DynDNS.org provides this service, for up to five host names, free to the Internet community.<br>'+
'The Dynamic DNSSM service is ideal for a home website, file server, or to make it easy to access your home PC and stored files while you\'re at work. Using the service can ensure that your host name always points to your IP address, no matter how often your ISP changes it. When your IP address changes, your friends and associates can always locate you by visiting yourname.dyndns.org instead!<br>'+
'<br>To register free for your Dynamic DNS host name, please visit http://www.dyndns.org.<br>'+
'<br><b>Setting up the Router\'s Dynamic DNS Update Client</b><br>'+
'<br>To register free for your Dynamic DNS host name, please visit http://www.dyndns.org.<br>'+
'<br><b>Setting up the Router\'s Dynamic DNS Update Client</b><br>'+
'You must register with DynDNS.org\'s free update service before using this feature. Once you have your registration, follow the directions below.<br>'+
'1.Enter your DynDNS.org user name in the \"User Name\" field (1).<br>'+
'2.Enter your DynDNS.org password in the \"Password\" field (2).<br>'+
'3.Enter the DynDNS.org domain name you set up with DynDNS.org in the \"Domain Name\" field (3).<br>'+
'4.Click \"Update Dynamic DNS\" to update your IP address.<br>'+
'Whenever your IP address assigned by your ISP changes, the Router will automatically update DynDNS.org\'s servers with your new IP address. You can also do this manually by clicking the \"Update Dynamic DNS\" button (4).<br>';
fw1='Firmware update in progress. ';
fw2='DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable. '; 
//apply_text_1='Applying changes. Please wait....... ';
warn_msg1='SSID can not be set as NULL!';
warn_msg2='The wireless will restart, if you are making this change from wireless computer, your wireless computer maybe temperorily disconnected from the router.';
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
h40='<b>USB Print Server</b> The USB print server in this router allows networked computer to print to a single USB printer. To enable a computer to print to this printer, you must install the printer\'s drivers and software on the computer and also you must install the Belkin printer port. The Belkin printer port software is included with the Router.';
}
