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
language='English';
show1='Start';
show2='Hilfe';
show3='Anmelden';
show4='Abmelden';
show5='Internetstatus';
show6='Verbunden';
show7='Keine Verbindung';
show8='LAN-Konfiguration';
show9='LAN-Einstellungen';
show10='DHCP-Client-Liste';
show11='Internet WAN';
show12='Verbindungstyp';
show13='DNS';
show14='MAC-Adresse';
show15='WLAN nicht verf�gbar';
show16='Funknetz';
show17='Kanal und SSID';
show18= 'Sicherheit';
show19=  'Als Access Point verwenden';
show20=  'IP-Adresse festlegen';
show21=  'MAC-Adresskontrolle';
show22= 'Kabellose Bridge';
show23=   'Firewall';
show24=   'Virtuelle Server';
show25=   'Client-IP-Filter';
show26=   'MAC-Adressfilter';
show27=   'DMZ';
show28=   'WAN-Ping-Filter';
show29=   'Sicherheitsprotokoll';
show30=   'Dienstprogramme';
show31=   'Kinderschutzfilter';
show32=   'Neustart Router';
show33=   'Neustart AP'
show34=  'Werkseinstellungen wiederherstellen';
show35=  'Einstellungen Speichern/Sichern';
show36=  'Vorherige Einstellungen wiederherstellen';
show37=  'Firmware aktualisieren';
show38=  'Systemeinstellungen';
show39='Druckerservice';
show40='Druckserver Konfiguration';
show41=   'DDNS';
show42='Statisch';
show43='PPPoE';
show44='Dynamisch';
show45='PPTP';
show46='Telstra BigPond';
sm1='Details';
btn1='�nderungen aufheben';
btn2='�nderungen �bernehmen';
btn3='Dynamisches DNS aktualisieren';
Router='Router';
AP='AP';
Dynamic='Dynamisch';
cff1='Firmware erfolgreich pr�fen';
cff2='Firmware-Informationen.'; 
cff3='F�r diesen Router steht keine Firmware-Aktualisierung zur Verf�gung.';
cff4='Kann keine Verbindung zum Firmware-Server herstellen, <br>bitte �berpr�fen Sie die WAN-Verbindung.';
cff5='Es steht eine aktualisierte Version der Firmware f�hr Ihren Router zur Verf�gung';
d1='Belkin | Administrator duplizieren';
d2='Administrator duplizieren';
d3='Dieses Ger�t wird verwaltet von';
d4='derzeit!!';
fc1='Firewall > Client-IP-Filter';
fc2a='Sie k�nnen den Router so einstellen, dass der Zugriff auf das Internet, E-Mails oder andere Netzwerkdienste '; fc2b=' auf bestimmte Tage und Uhrzeiten beschr�nkt wird.'; 
IP='IP';
Port='Port';
Type='Typ';
BT='Sperrzeit';
Day='Tag';
Tm='Zeit';
Enable='Aktivieren';
BOTH='BEIDE';
Always='Immer';
Block='Blockieren';
SUN='>SON';
MON='>MON';
TUE='>DIE';
WED='>MIT';
THU='>DON';	
FRI='>FRE';
SAT='>SAM';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Entweder haben Sie die Client-IP-Adresse nicht eingegeben, oder bestimmte Zahlen in der IP-Adresse sind ung�ltig.  Die Zahl im IP-Eingabefeld muss zwischen 1 und 254 liegen.';
fcsm='Sie haben keine g�ltigen Schnittstellen eingegeben';
fcrm='Die zweite Zahl des Schnittstellenbereichs muss gr��er sein als die erste.';
fcripm='Die zweite Zahl des IP-Bereichs muss gr��er sein als die erste.';
fcpm='Die Zahl im Eingabefeld f�r die Schnittstelle muss zwischen 1 und 65535 liegen.';
fd1='Firewall > DMZ'; 
fd2='Mit der DMZ-Funktion k�nnen Sie einen Computer festlegen, der von der NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung.'; 
fd3='Verwenden Sie diese Funktion nur zeitweise.'; 
fd4='Der DMZ-Computer ist nicht vor Hacker-Angriffen gesch�tzt. Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das Eingabefeld unten ein, und w�hlen Sie "Aktivieren". Klicken Sie auf "Absenden", um die �nderung in Kraft zu setzen.'; 
fd5='IP-Adresse des virtuellen DMZ-Host'; 
fd6='Statische IP-Adresse';  
fd7='Private IP';  
fd8='Aktivieren'; 
fd9='Firewall > DDNS'; 
fd10='Mit dynamischer DNS k�nnen Sie Internet-Nutzern einen festen Dom�nennamen (anstatt einer sicher immer wieder �ndernden IP-Adresse) zuteilen, indem Sie Ihren Router und die Anwendungen in den virtuellen Servern des Routers von jedem Ort �ber das Internet zug�nglich machen, ohne dass die aktuelle IP-Adresse bekannt sein muss. Ihr Kabelloser Router unterst�tzt dynamisches DMS �ber DynDNS.org ';
fd11='Sie m�ssen ein Konto einrichten, bevor Sie diesen Dienst nutzen k�nnen;';
fd12='Benutzername > '; 
fd13='Kennwort > '; 
fd14='Dom�nenname > '; 
fd15='Bitte geben Sie die IP-Adresse ein, bevor Sie die DMZ aktivieren'; fd16='Auto-update'; 
fmc1='Firewall > MAC-Adressfilter';
fmc2='Mit dieser Funktion richten Sie eine Liste zul�ssiger Clients ein. Wenn Sie diese Funktion aktivieren, m�ssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen k�nnen. Bitte geben Sie f�r die Bestimmung der gelisteten Computer einen Benutzernamen ein. Der Benutzername darf keine Leer- oder Sonderzeichen enthalten.';    
fmc3='MAC-Adressfilter aktivieren';   
fmc4='MAC-Adressfilterliste';
fmc5='Blockieren';  
fmc6='Host';  
fmc7='MAC-Adresse';  
fmc9='Keine Eingabe einer Multicast MAC-Adresse m�glich';
fmc12='Diese MAC-Adresse wurde bereits zugef�gt!';
Add='Hinzuf�gen'; 
Del='Entfernen';
fmcipm='Entweder haben Sie nicht alle Hexadezimal-Ziffern eingegeben oder einige der eingegebenen Hexadezimal-Ziffern sind ung�ltig. Ein Hexadezimalzeichen ist entweder eine Zahl zwischen 0 und 9 oder ein Buchstabe zwischen A und F.';
fmn1='Firewall >';
fmn2='Ihr Router ist mit einer Firewall ausgestattet, die Ihr Netzwerk vor einer Reihe h�ufig vorkommender Hacker-Attacken sch�tzt, darunter PoD (Ping of Death) und DoS-Angriffe (Denial of Service). Sie k�nnen die Firewall bei Bedarf abschalten. Dadurch ist Ihr Netzwerk Angriffen nicht v�llig schutzlos ausgeliefert; die Gefahr unbefugter Eingriffe w�chst jedoch. Daher sollten Sie die Firewall weitm�glichst aktiviert lassen.'; 
fmn3='Firewall aktivieren/deaktivieren >';
Disable='Deaktivieren';
fp1='Firewall > WAN Ping-Blockierung';
fp2='<b>ERWEITERTE FUNKTION!</b> Sie k�nnen den Router so einstellen, dass er auf ICMP-Pings (Pings an der WAN-Schnittstelle) nicht reagiert. Dadurch erh�ht sich Ihre Sicherheit.'; 
fp3='ICMP-Ping blockieren >';  
fs1='Firewall > Sicherheitsprotokoll';
fs2='Der Router protokolliert alle routerinternen Aktivit�ten wie das An- und Abmelden von Computern und Versuche aus dem Internet, auf den Router zuzugreifen. Das Protokoll kann unten angezeigt werden.'; 
fs3='Protokolldatei';
Save='Speichern';
Clear='L�schen';
Refresh='Aktualisieren';  
fv1='Firewall > Virtuelle Server';
fvipm='Entweder haben Sie nicht alle IP-Adressen eingegeben \n oder einige der eingegebenen Zahlen sind ung�ltig. \n Die Zahl im Eingabefeld f�r die IP-Adresse muss zwischen 0 und 254 liegen.';
fvrm='Die �ffentliche Schnittstelle kann nicht auf 88 gesetzt werden, da es sonst zu einem Konflikt mit dem Internetdienst des kabellosen Routers kommt.';
fvipr='Der interne Schnittstellenbereich ist nicht korrekt.';
fvppr='Der private Schnittstellenbereich ist nicht korrekt.';
fv2='Mit dieser Funktion k�nnen Sie externe (Internet-)Anfragen bei Diensten wie Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen �ber Ihren Router zum internen Netzwerk aktivieren.'; 
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
fv141='Westwood Online';
fv142='CuSeeMe';
fv143='ICUII Client';       
fv200='Eingabe l�schen ';
Description='Beschreibung';
Inb='Interne Schnittstelle';  
Type='Typ';  
Pipa='Private IP-Adresse ';  
Pport='Private Schnittstelle';  
htop='oben'; 
h1='Hilfe';
h2='FACHGLOSSAR';  
h3='<b>Administrator</b> Ein Administrator ist f�r die Wartung eines Netzwerks verantwortlich. Bei diesem Router die Person, die ihn einrichtet und seine Einstellungen ver�ndert.';  
h4='<b>Client</b> Computer im Netzwerk, der die Dienste des Routers nutzt, zum Beispiel den automatischen DHCP-Server und die Firewall.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dieses Protokoll konfiguriert die TCP/IP-Einstellungen jedes Computers im SoHo-Netzwerk automatisch.';  
h6='<b>DF�</b> Verbindung, die �ber das �ffentliche Telefonnetz zustande kommt.'; 
h7='<b>DMZ</b> Virtuelle Zone im Router, die von seiner Firewall nicht gesch�tzt wird.  Es kann jeweils nur ein Computer in die DMZ-Zone versetzt werden.';   
h8='<b>DNS-Serveradresse</b> DNS steht f�r Domain Name System (Dom�nen-Namensystem). Mit DNS k�nnen Internet-Hostrechner einen Dom�nennamen (zum Beispiel belkin.de) und mehrere IP-Adressen wie 192.34.45.8 besitzen. DNS-Server unterhalten eine Datenbank, in denen die Hostrechner und ihre jeweiligen Dom�nennamen und IP-Adressen verzeichnet sind. Wird ein Dom�nenname abgefragt (zum Beispiel durch die Eingabe von "belkin.de" in Ihrem Browser) wird der Benutzer mit der entsprechenden IP-Adresse verbunden. Die Computer in Ihrem Netzwerk zu Hause verwenden die DNS-Serveradresse des DNS-Servers, den Ihnen Ihr Provider zugewiesen hat.';  
h9='<b>DSL-Modem</b> DSL ist die Abk�rzung von "Digital Subscriber Line" (Digitale Teilnehmerleitung). DSL-Modems nutzen die vorhandene Telefonleitung zur Daten�bertragung mit hoher Geschwindigkeit.';  
h10='<b>Dynamische IP</b> IP-Adresse, die von einem DHCP-Server automatisch zugewiesen wurde.';  
h11='<b>Ethernet</b> Standard f�r Computernetzwerke. Ethernet-Netzwerke verbinden Computer durch spezielle Kabel und Hubs und erm�glichen Daten�bertragungen mit bis zu 10 Millionen Bit pro Sekunde (Mbit/s).';  
h12='<b>Firewall</b> Elektronische Schwelle, die den Zugriff Unbefugter auf bestimmte Dateien oder Computer in einem Netzwerk verhindert.';  
h13='<b>Firmware</b> Software, die permanent im Arbeitsspeicher gespeichert ist. Wichtige Programme, die auch beim Abschalten des Systems im Speicher bleiben. Firmware kann leichter als Hardware ver�ndert werden, ist aber dauerhafter als die Software auf einer Festplatte.';  
h14='<b>IP-Adresse</b> IP steht f�r "Internet Protocol" (Internet-Protokoll). IP-Adressen bestehen aus vier Zahlen, die durch Punkte voneinander getrennt werden. Die Zahlenfolge kennzeichnet jeweils einen bestimmten, eindeutigen Host-Computer im Internet. Beispiel: 192.34.45.8.';  
h15='<b>ISDN</b> K�rzel f�r "Integrated Services Digital Network". Digitale Telekommunikationsverbindungen, die sowohl Sprach- als auch digitale Netzwerkdienste bei Raten bis zu 128 K bieten. Sie sind wesentlich schneller und zuverl�ssiger als analoge Hi-Speed Verbindungen per Modem. ISDN-Leitungen werden in der Regel von Telefongesellschaften angeboten.';  
h16='<b>ISP</b> Abk�rzung f�r Internet Service Provider (Internet-Dienstanbieter, Provider). Der ISP stellt die Verbindung f�r Einzelpersonen, Unternehmen und Organisationen zum Internet bereit.';  
h17='<b>ISP-Gateway-Adresse</b> (siehe auch ISP). Die ISP-Gateway-Adresse ist eine IP-Adresse f�r den Internet-Router des Providers. Diese Adresse wird nur f�r Kabel- oder DSL-Modems ben�tigt.';  
h18='<b>LAN</b> Local Area Network (lokales Netzwerk). Als LAN wird eine Gruppe von Computern und Ger�ten bezeichnet, die auf relativ kleiner Fl�che miteinander verbunden sind (zum Beispiel in einem Haus oder B�ro). Ihr Netzwerk zu Hause ist ein solches LAN.';  
h19='<b>MAC-Adresse</b> MAC steht f�r Media Access Control (Medienzugangskontrolle). MAC-Adresse ist die Bezeichnung f�r die Hardwareadresse eines Ger�ts, das mit einem Netzwerk verbunden ist.';  
h20='<b>MTU</b> Maximum Transmission Unit (maximale �bertragungseinheit). Die gr��te Datenmenge, mit auf einem bestimmten physikalischen Medium �bertragen werden kann.';  
h21='<b>NAT</b> Network Address Translation (Netzwerkadress�bersetzung). Durch dieses Verfahren k�nnen sich alle Computer in Ihrem Heimnetzwerk eine IP-Adresse teilen. Durch die NAT-Funktionalit�t des HomeConnect Heimnetzwerk-Gateways k�nnen alle Computer in Ihrem Heimnetzwerk auf das Internet zugreifen, ohne dass Sie mehrere IP-Adressen von Ihrem Provider beziehen m�ssen.';  
h22='<b>Schnittstelle (Port)</b> Logischer Kanal, der durch seine eindeutige Schnittstellennummer gekennzeichnet ist. Anwendungen warten an bestimmten Schnittstellen auf Daten, die f�r sie bestimmt sein k�nnten.'; 
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet (PPP-Protokoll �ber Ethernet). Das PPP-Protokoll ist ein Verfahren zur sicheren Daten�bertragung, das urspr�nglich f�r DF�-Verbindungen entwickelt wurde. PPPoE setzt dieses Verfahren in Ethernet-Netzwerken um.';  
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol (PPTP-Tunnel-Protokoll) Eine Version des PPP-Protokolls, das Datenpakete, die f�r ein bestimmtes Netzwerk formatiert wurden, zu Paketen f�r ein anderes Protokoll umformen kann. Durch dieses Tunnelverfahren k�nnen TCP/IP-Daten auch �ber TCP/IP-fremde Netzwerke �bertragen werden. PPTP kann zur Vernetzung unterschiedlicher physikalischer Netzwerke mit dem Internet als Mittler dienen.';  
h25='<b>SNTP</b> Simple Network Time Protocol (Einfaches Netzwerkzeitprotokoll) Kommunikationsstandard, der die �bertragung von Echtzeitdaten �ber ein Netzwerk oder das Internet erm�glicht.';
h26='<b>SPI</b> Stateful Packet Inspection (Paketstatus-�berpr�fung). SPI ist die Bezeichnung f�r ein Internet-Sicherheitsverfahren in Industriequalit�t, das vom HomeConnect Heimnetz-Gateway bereitgestellt wird. Unter SPI dient der Gateway als Firewall, die Ihr Netzwerk vor Computerhackern sch�tzt.';  
h27='<b>Statische IP</b> IP-Adresse, die manuell konfiguriert wird und sich nicht �ndert.';  
h28='<b>Subnet Mask</b> Als Subnet Mask wird eine Folge von vier Zahlen bezeichnet, die wie eine IP-Adresse aufgebaut ist. In den vom Provider bereitgestellten TCP/IP-Daten sind oft auch Subnet Masks enthalten. Subnet Masks dienen zur Erstellung von IP-Adressen, die nur innerhalb eines bestimmten Netzwerks gelten (anders als die IP-Adressen im Internet, die von der Organisation InterNIC zentral vergeben werden).';  
h29='<b>TCP</b> Transmission Control Protocol (�bertragungskontrollprotokoll). Das g�ngigste Protokoll f�r die Internet-Transportschicht. TCP ist verbindungsorientiert und datenstromorientiert und sorgt f�r zuverl�ssige Kommunikation �ber paketvermittelte Netzwerke.';  
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol (�bertragungskontrollprotokoll/Internet-Protokoll). Das Standardprotokoll zur Daten�bertragung im Internet.';  
h31='<b>UDP</b> User Datagram Protocol. Kommunikationsprotokoll f�r die Internet-Vermittlungsschicht, Transport- und Sitzungsschicht, das es m�glich macht, eine Datagramm-Meldung von einem Computer an eine Anwendung zu versenden, die auf einem anderen Computer l�uft. Anders als TCP ist UPD nicht verbindungsorientiert und gew�hrleistet keine zuverl�ssige Kommunikation. Die jeweilige Anwendung muss Fehler selbst verarbeiten und die Zuverl�ssigkeit der Datenvermittlung �berpr�fen. '; 
h32='<b>WAN</b> Wide Area Network (�berregionales Netzwerk). Netzwerk, das Computer, die sich zum Beispiel in verschiedenen Geb�uden, St�dten oder L�ndern befinden, weitr�umig miteinander verbindet. Das bekannteste Beispiel f�r ein WAN ist das Internet.';  
h33='<b>WAN IP-Adresse</b> Die IP-Adresse, die der Provider dem Router zuweist.';  
h34='<b>WLAN</b> Wireless Local Area Network (Kabelloses lokales Netzwerk). Lokales Netzwerk, das Computer �ber Funk miteinander verbindet (zum Beispiel 802.11b)'; 
Enabled='Aktiviert';
Disabled='Deaktiviert';
i1='Setup Home'; 
i2='Status';
i3='Version'; 
i4='Firmware-Version'; 
i5='Bootcode-Version';  
i6='Hardware-Version';  
i7='Seriennummer';  
i8='LAN-Einstellungen'; 
i9='LAN/WLAN MAC';  
i9a='LAN MAC-Adresse';
i9b='WLAN nicht verf�gbar';
i10='IP-Adresse'; 
i11='Subnetzmaske'; 
i12='DHCP-Server';
i13='Internet-Einstellungen';  
i14='Wan Mac-Adresse'; 
i15='Verbindungstyp';  
i16='Subnetzmaske';  
i17='WAN-IP'; 
i18='Standard-Gateway';  
i19='DNS-Adresse';  
i20='Merkmale'; 
i21='NAT';  
i22='Firewall-Einstellungen ';
i23='SSID'; 
i24='Sicherheit'; 
i25='Drucker'; 
i26='(aktivieren/deaktivieren)';
i27='Um Einstellungen �ndern zu k�nnen, m�ssen Sie sich anmelden.'; 
i28='Druckserver / Drucker';
i29='Druckservername:';
i30='FTP-Drucken';
i31='RAW TCP/IP-Drucken';
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time'; 
langt='Sprache';
langc='Deutsch';
ld1='LAN > DHCP';
ld2='LAN > DHCP-Client-Liste';
ld3='Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Computer angegeben, die mit dem Netzwerk verbunden sind. Wenn f�r einen Computer kein Hostname festgelegt ist, ist das entsprechende Hostnamen-Feld leer. Mit "Aktualisieren" k�nnen Sie die Liste aktualisieren.'; 
ld4='IP-Adresse'; 
ld5='Hostname';
ld6='MAC-Adresse'; 
lm1='LAN';
lm2='Ihr Router ist mit einem DHCP-Server ausgestattet, der jedem Computer im Netzwerk automatisch eine IP-Adresse zuweist. Die Werkseinstellungen f�r den DHCP-Server funktionieren f�r die meisten Anwendungen. Sie k�nnen die Einstellungen jedoch bei Bedarf ver�ndern.'; 
lm3='Folgende �nderungen k�nnen durchgef�hrt werden:';
lm4='- �ndern der internen IP-Adresse des Routers. Standardeinstellung = 192.168.2.1';
lm5='- �ndern der Subnetzmaske. Standardeinstellung = 255.255.255.0';
lm6='- DHCP-Serverfunktion aktivieren/deaktivieren. Vorgabe= AN (Aktiviert)';
lm7='- Einstellen der Start- und der Endadresse des IP-Pools. Vorgabe = Startadresse: 2 / Endadresse: 100';
lm8='- Vergabedauer f�r die IP-Adresse angeben. Vorgabe= Unbefristet ';
lm9='- Lokalen Dom�nennamen angeben. Standard = Belkin';
lm10='Zur Durchf�hrung von �nderungen klicken Sie links in der Registerkarte "LAN" auf "LAN-Einstellungen".';
lm11='Der Router stellt eine Liste aller Client-Computer bereit, die mit dem Netzwerk verbunden sind. Um die Liste abzurufen, klicken Sie links auf der Registerkarte "LAN" auf "DCHP-Client-Liste".';
ls1='LAN > LAN-Einstellungen';
ls2='Hier k�nnen Sie das LAN (Lokales Netzwerk) einstellen. Damit die �nderungen umgesetzt werden, m�ssen Sie auf die Schaltfl�che "�nderungen �bernehmen" unten auf dem Bildschirm klicken.'; 
ls3='IP-Adresse';   
ls4='Subnetzmaske';     
ls5='DHCP-Server';  
On='Aktiviert';  
Off='Deaktiviert';  
pwd='Kennwort';

all='all';
Auto='Auto'; 
langt='Sprache';
langc='Deutsch';
langcl='Current Language';
langal='Available Languages';
ls6='Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Hier m�ssen keine �nderungen durchgef�hrt werden.'; 
ls7='IP-Pool-Startadresse';  
ls8='IP-Pool-Endadresse';   
ls9='Lease Time (Vergabedauer)';   
ls10='Unbefristet'; 
ls11='Halbe Stunde';
ls12='1 Stunde';
ls13='Zwei Stunden';
ls14='Halber Tag'; 
ls15='Ein Tag';
ls16='Zwei Tage';
ls17='Eine Woche';
ls18='Zwei Wochen ';
ls19='Die Zeit, w�hrend der der DHCP-Server die IP-Adresse f�r die einzelnen Computer reserviert.';  
ls20='Lokaler Dom�nenname';
Optional='Optional';  
ls21='Funktion zur Benennung eines Netzwerks.'; 
lsipm='Entweder haben Sie nicht alle Zahlen eingegeben, oder einige der eingegebenen Zahlen sind ung�ltig. Die Zahl in jedem Eingabefeld muss zwischen 0 und 255 liegen.';
lssm='Sie haben eine ung�ltige Subnetzmaske-Nummer eingegeben.';
lsnetm='Der IP-Pool muss sich im gleichen Subnet wie die Gateway-IP befinden. ';
lsendm='Die IP-Endadresse muss gr��er sein als die IP-Startadresse.';
lspoolm='Die LAN IP-Adresse darf sich nicht im DHCP-Adresspool befinden.';
lsipm2='Ung�ltige LAN IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
lsipm3='Ung�ltige LAN IP-Adresse. Die erste Zahl kann nicht 0 oder 127 sein.';
lsldnm='Ung�ltiger lokaler Dom�nenname';
lsipm4='Die eingegebene IP ist ung�ltig';
lsipalert='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
lsipm5='Die gew�hlte IP-Adresse muss unroutbar sein.\n  192.168.x.x (x steht f�r eine Zahl zwischen 0 und 255.) \n10.x.x.x (x steht f�r eine Zahl zwischen 0 und 255.)\n172.y.x.x (y steht f�r eine Zahl zwischen 16 und 31 und x f�r eine Zahl zwischen  0 und 255.)';
lsipc='Soll die LAN IP-Adresse wirklich ge�ndert werden?';
lo1='Anmelden';
lo2='Um Einstellungen �ndern zu k�nnen, m�ssen Sie sich mit einem Kennwort anmelden. Wenn Sie noch kein eigenes Kennwort eingestellt haben, k�nnen Sie dieses Feld leer lassen und auf "Absenden" klicken." ';
lo3='Kennwort';  
lo4='Vorgabe = leer lassen ';
Clear='L�schen';
Submit='Absenden';
le1='Belkin | Anmeldefehler';
lerror='Anmeldefehler!';  
Utilities='Dienstprogramme > ';
rs1='Reset Successfully';
rs2='Das Zur�cksetzen ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rs3='Der Router wird neu gestartet';
rs4='Sekunden verbleiben.';  
rf1='Werkseinstellungen wiederherstellen erfolgreich'; 
rf2='Die Wiederherstellung ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rss1='Einstellungen wiederherstellen erfolgreich';
rss2='Die Wiederherstellung ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
ufy1='Werkseinstellungen';
ufy2='Mit dieser Option setzen Sie alle Routereinstellungen auf die Werkseinstellungen zur�ck. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen. Um die Werkseinstellungen des Routers wiederherzustellen, klicken Sie auf die Schaltfl�che "Werkseinstellungen".';
ufy3='ACHTUNG: Alle Einstellungen gehen verloren!\nM�chten Sie den Vorgang fortsetzen?';
ufy4='Die Wiederherstellung der Werkseinstellungen nimmt bis zu 60 Sekunden in Anspruch. Schalten Sie den Router w�hrend dieses Vorgangs nicht ab.';
ufy5='Werkseinstellungen werden nicht wiederhergestellt. Alle Einstellungen bleiben erhalten!';
ufy='Standardeinstellungen wiederherstellen';
ufe1='Dienstprogramme > Firmware aktualisieren';
ufe2='Von Zeit zu Zeit ver�ffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Updates enthalten Verbesserungen und L�sungen f�r m�gliche Probleme. Klicken Sie auf den Link unten, um zu �berpr�fen, ob f�r den Router neue Firmware verf�gbar ist.';
ufe3=' HINWEIS: Bitte sichern Sie Ihre aktuellen Einstellungen, bevor Sie die Firmware-Version aktualisieren.';
ufe4='Klicken Sie hier,';
ufe5='um auf die Seite Aktuelle Einstellungen speichern/sichern zur�ckzukehren.';
ufe6='Neue Firmwareversion abfragen >';
ufe7='Firmware abfragen'; 
ufe8='Aktualisieren der Firmware >';
Update='Aktualisieren';
ufe9='Bitte geben Sie den Pfad der Aktualisierungsdatei an. Geben Sie hierzu Pfad und Namen der Datei ein oder klicken Sie auf "Durchsuchen", um die Datei zu suchen.';
ufe10='Sind Sie sicher, dass Sie die Aktualisierung fortsetzen m�chten?';
ufe11='Am Ende der Aktualisierung reagiert der Router bis zu einer Minute lang nicht auf Befehle. Dies ist v�llig normal. Schalten Sie den Router w�hrend dieser Zeit nicht ab, und f�hren Sie keinen Neustart durch.';
um1='Auf dieser Seite k�nnen Sie verschiedene Parameter des Routers verwalten und Verwaltungsfunktionen durchf�hren.';
um2='Kinderschutzfilter';
um3='Der Belkin Kinderschutzfilter sch�tzt Sie und Ihre Kinder vor anst��igen Inhalten im Internet.'; 
um4='Der Belkin Kinderschutzfilter ist der Filter, den Sie eingerichtet haben. Jetzt k�nnen Sie Ihre Kinder selbst dann im Internet surfen lassen, wenn Sie nicht selbst vor dem Bildschirm sitzen.<br>&nbsp;';
um5='Neustart Router';
um6='Wenn der Router nicht mehr fehlerfrei funktioniert, kann oft ein Neustart Abhilfe schaffen. Bei einem Neustart bleiben Ihre Konfigurationseinstellungen erhalten.'; 
um7='Werkseinstellungen';
um8='Mit dieser Option setzen Sie alle Routereinstellungen auf die Werkseinstellungen zur�ck. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen.';
um9='Aktuelle Einstellungen Speichern/Sichern';
um10='Mit dieser Funktion k�nnen Sie die aktuelle Konfiguration sichern. Dadurch k�nnen Sie Ihre Konfigurierung sp�ter wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder ge�ndert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchf�hren.';
um11='Vorherige Einstellungen wiederherstellen';
um12='�ber diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';
um13='Firmware aktualisieren';
um14='Von Zeit zu Zeit ver�ffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Aktualisierungen enthalten verbesserte Funktionen und L�sungen f�r eventuelle Probleme.';
um15='Systemeinstellungen';
um16='Auf der Seite "Systemeinstellungen" k�nnen Sie ein neues Administratorkennwort festlegen';
um17=', die Zeitzone einstellen, die Fernverwaltung aktivieren und die NAT-Funktion ';
um18='des Routers ein- oder ausschalten.';
upc1='Dienstprogramme > Kinderschutzfilter';
upc2='Der Belkin Kinderschutzfilter sch�tzt Sie und Ihre Kinder oder Mitarbeiter vor anst��igen Inhalten im Web. Der Kinderschutzfilter ist so voreingestellt, dass viele Arten von Web-Inhalten gefiltert werden. Sie k�nnen die Einschr�nkungen jedoch lockern oder versch�rfen. Jede Website kann ohne gro�en Aufwand so eingestellt werden, dass sie stets blockiert oder stets zugelassen wird.';
upc3='Ihre Lizenz f�r den Kinderschutzfilter ist ';
upc4='DE-AKTIVIERT'; 
upc5='NICHT-AKTIVIERT';
upc6='AKTIVIERT';
upc7='Wenn Sie die Lizenz-Dialoge f�r den Kinderschutzfilter abstellen m�chten, klicken Sie hier:';
upc8='ABGELAUFEN';
upc9='Your subscription will expire in ';
days='Tagen';
upc10='Kontendaten';
Advanced='Erweitert';
Apply='�bernehmen';
upc11='Kontendaten aktualisieren';
upc12='Bericht';
upc13='Sie sind derzeit';
upc14=' am Berichtdienst angemeldet.';
not='nicht';
upc15='Klicken Sie hier, um ein Beispiel abzurufen, das Ihnen die Berichtfunktion erl�utert.';
upc16='Musterbericht';
upc17='Klicken Sie hier, um die Berichtfunktion zu abonnieren.';
upc18='Jetzt Lizenz erwerben';
upc19='Klicken Sie hier, um Ihren Bericht anzuzeigen.';
upc20='Bericht anzeigen';
upc21='Kinderschutzfilterstatus';
upc22='Kinderschutzfilter Aktivieren/Deaktivieren.';
upc23='Web Filter ist ';
upc24='E-Mail-Benachrichtigung';
upc25='Bitte benachrichtigen Sie mich per E-Mail, wenn den Kinderschutzfilter au�er Kraft gesetzt wurde.';
upc26='E-Mail ist ';
upc27='Vorgaben �ndern';
upc28='Klicken Sie hier, um die Vorgaben f�r Ihren Kinderschutzfilter zu �berpr�fen oder zu �ndern';
upc29='Lizenzierung des Kinderschutzfilters';
upc30='Wenn Sie sich f�r den Kinderschutzfilter von Belkin anmelden m�chten, klicken Sie bitte auf die unten stehende Schaltfl�che.'; 
upc31='Sie besitzen <b>KEINE</b> Lizenz f�r den Kinderschutzfilter.';  
upc32='Kinderschutzfilter verl�ngern';
upc33='Ihre Lizenz l�uft bald ab. Bitte klicken Sie hier, um die Lizenz zu verl�ngern.';
upc34='Jetzt verl�ngern';
upc35='URL ist leer';
Modify='�ndern';
upa1='Dienstprogramme &gt; Kinderschutzfilter: Kontendaten';
upa2="Hier k�nnen Sie Ihre Benutzerdaten f�r den Kinderschutzfilter �ndern, zum Beispiel die E-Mail-Adresse f�r Benachrichtigungen und das Administratorkennwort f�r den Kinderschutzfilter.";
upa3='E-Mail-Adresse f�r Mitteilungen �ndern.';
upa4='Aktuelle E-Mail-Adresse'; 
upa5='Neue E-Mail-Adresse eingeben'; 
upa6='Neue E-Mail-Adresse erneut eingeben';
upa7='Administratorkennwort f�r Kinderschutzfilter �ndern.';
upa8='Neues Kennwort eingeben';
upa9='Neues Kennwort erneut eingeben';
upa14='E-Mailadressen k�nnen nicht auf Null gestellt werden';
Change='�ndern';
Stop=Apply;
upad1='Dienstprogramme &gt; Weitere Einstellungen f�r den Kinderschutzfilter';
upad2="Der Belkin Kinderschutzfilter fordert f�r jede aufgerufene Website eine Internet-Einstufung durch unseren Partner Cerberian an. Normalerweise liegt die Antwortzeit unter einer Sekunde, so dass keine Verz�gerungen entstehen. Wenn Sie jedoch eine unbekanntere Site aufrufen, die noch nicht in der Partnerdatenbank enthalten ist, wird die Site dynamisch bewertet. Je nachdem, wie schnell die Site geladen wird, kann dies einige Sekunden dauern. F�r den Fall, dass die Antwortzeit das unten angegebene Limit �berschreitet, kann der KINDERSCHUTZFILTER folgenderma�en konfiguriert werden: Alle Sites bei einer Zeit�berschreitung zulassen, oder: - Alle Sites bei einer Zeit�berschreitung blockieren.";
Timeout='Zeitlimit';
upad3='Zeitlimit nach Wartefrist von';
upad4='Sekunden f�r eine Antwort';
upad5='Voreingestellte Reaktion bei Zeit�berschreitung';
upad6='Je nach der voreingestellten Reaktion bei Zeit�berschreitungen blockiert der Router alle Webaufrufe oder l�sst sie zu.';
upad7='Bei Zeit�berschreitung alle Sites zulassen.';
upad8='Alle Sites bei einer Zeit�berschreitung blockieren.';
upr1='Dienstprogramme > Kinderschutzfilter: Konto aktualisieren';
upr2='Diese Funktion wird nur dann ben�tigt, wenn die Daten f�r Ihre KINDERSCHUTZFILTER-Lizenz fehlerhaft sind.<br>Wenn Sie auf diese Schaltfl�che klicken, l�dt der Router alle Konteninformationen von Belkin herunter und aktualisiert sie.<br>Um Ihre Daten f�r den KINDERSCHUTZFILTER zu aktualisieren, klicken Sie auf Aktualisieren:';
uprev1='Dienstprogramme > Vorherige Einstellungen wiederherstellen';
uprev2='�ber diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';  
Restore='Wiederherstellen';
uprev3='Geben Sie den Namen der Datei an, die die gesicherten Einstellungen enth�lt.';
uprev4='M�chten Sie die Wiederherstellung der Einstellungen fortsetzen?';
uprev5='Nach der Wiederherstellung der Einstellungen reagiert\n der Router bis zu einer Minute lang nicht auf Befehle. \n\nDies ist v�llig normal. W�hrenddessen darf der Router nicht abgeschaltet werden.';
ur1='Dienstprogramme > Neustart Router ';
ur2='Bisweilen kann es notwendig sein, den Router zur�ckzusetzen oder neu zu starten, falls dieser nicht mehr erwartungsgem�� funktioniert. Bei einem Neustart bleiben die Konfigurationseinstellungen erhalten. Klicken Sie unten auf die Schaltfl�che "Neustart Router", um den Router neu zu starten.';
ur3='Neustart Router';
ur4='Sind Sie sicher, dass Sie den Router neu starten m�chten? Der Router-Neustart wirkt sich nicht auf die Konfiguration aus.';
ur5='Der Neustart des Routers dauert etwa 60 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.';
usave1='Dienstprogramme > Aktuelle Einstellungen sichern/Sicherheitskopie erstellen';
usave2='Mit dieser Funktion k�nnen Sie die aktuelle Konfiguration sichern. Dadurch k�nnen Sie Ihre Konfigurierung sp�ter wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder ge�ndert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchf�hren.'; 
Save='Speichern';
usys1='Dienstprogramme > Systemeinstellungen';
usys2='Administratorkennwort: '; 
usys3='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie k�nnen hier ein Kennwort festlegen und dadurch die Sicherheit erh�hen.';
usys4='Aktuelles Kennwort eingeben';  
usys5='Neues Kennwort eingeben';  
usys6='Neues Kennwort best�tigen';  
usys7='Anmeldezeitlimit';
usys8='(1-99 Minuten)'; 
usys9='Zeit and Zeitzonen: '; 
January='Januar'; February='Februar'; March='M�rz'; April='April'; May='Mai'; June='Juni'; July='Juli'; August='August'; September='September'; October='Oktober'; November='November'; December='Dezember';
usys10='Bitte stellen Sie Ihre Zeitzone ein. Wenn in Ihrem Land zwischen Sommerzeit und Winterzeit umgeschaltet wird, markieren Sie dieses Feld.';
usys11='Abstand Zeitzonen';
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
usys28='(GMT-03:00) Newfoundland ';
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
usys66='Sommerzeit';
usys67='Sommerzeit automatisch einstellen';
usys68='Fernverwaltung:';    
AF='ERWEITERTE FUNKTION!';
usys69='Die Fernverwaltung erm�glicht das �ndern Ihrer Routereinstellungen von jedem Ort aus, an dem sich ein Internet-Anschluss befindet. Bevor Sie diese Funktion aktivieren,';
usys70='SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN.';
usys71='Beliebige IP Adresse zur Fernverwaltung des Routers zulassen.';  
usys72='Nur diese IP-Adresse zur Fernverwaltung des Routers zulassen';  
usys73='NAT-Aktivierung:';    
usys74='Erm�glicht die Deaktivierung der NAT-Funktion. Normalerweise sollte diese Funktion NICHT deaktiviert werden. ';
usys75='NAT Enable / Disable';
usys76='UPnP-Aktivierung:';   
usys77='Erm�glicht die Deaktivierung der UPNP-Funktion des Routers. Wenn Sie Anwendungen benutzen, die UPnP unterst�tzen, k�nnen diese Anwendungen automatisch den Router konfigurieren, wenn Sie UPnP aktivieren. ';
usys78='UPnP Aktivieren / Deaktivieren ';
usys79='Aktivieren der Automatischen Firmware-Aktualisierung:';
usys80='Erm�glicht Ihnen die automatische Suche nach Firmware-Aktualisierungen f�r den Router.';
usys81='Automatische Firmware-Aktualisierung Aktivieren / Deaktivieren ';
usys82='Das aktuelle Kennwort ist ung�ltig ';
usys83='Neues Kennwort und best�tigtes neues Kennwort stimmen nicht �berein ';
usys84='Anmeldezeitlimit-Bereich: 1-99';
usys85='Unzul�ssige Kennwortl�nge. Das Kennwort muss aus mindestens 3 und h�chstens 12 Zeichen bestehen.';
usys86='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
usys87='Es wird dringend empfohlen, ein Administratorkennwort festzulegen.';
usys88='Prim�rer NTP-Server';
usys89='Sicherungs-NTP-Server';
usys90='192.43.244.18-Nordamerika';
usys91='132.163.4.102-Nordamerika';
usys92='192.5.41.41-Nordamerika';
usys93='192.5.41.209-Nordamerika';
usys94='207.200.81.113-Nordamerika';
usys95='208.184.49.9-Nordamerika';
usys96='129.132.2.21-Europa';
usys97='130.149.17.8-Europa';
usys98='137.189.8.174-Asien/Pazifik';
usys99='Remote Access Port (Fernverwaltungsport)';
usysipm='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ung�ltig. Die Nummern sollten zwischen 0 und 255 liegen';
usysb1='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie k�nnen hier ein Kennwort festlegen und dadurch die Sicherheit erh�hen.';
vjs1='Ung�ltige IP-Adresse, zu lang. Bitte erneut pr�fen.';
vjs2=' Ung�ltige IP-Adresse, fehlender Punkt \'.\' , Bitte erneut pr�fen!';
vjs3='Ung�ltige IP-Adresse, fehlende Zahlen zwischen den Punkten \'.\'. Bitte erneut pr�fen.';
vjs4="Ung�ltige IP-Adresse, �berfl�ssiger Punkt '.' , Bitte erneut pr�fen!"
vjs5='Ung�ltige IP-Adresse, Nummern zwischen \'.\'  sind zu gro�. Bitte erneut pr�fen!';
vm1='Ung�ltiges Zeichen:';
vm2='an Position';
vm3='G�ltig ist ';
vjs6='Ung�ltiges Jahresformat, bitte eingeben als (z.B. 2002).';
vm4='Ung�ltige Zahl'; 
vjs8='Ung�ltig, zul�ssig ist der Zahlenbereich 1970 bis 2037.';
vjs9='Ung�ltiges Monatsformat, bitte eingeben als (01 bis 12).';
vjs10='Bitte Jahr und Monat zuerst eingeben';
vjs11='Ung�ltiges Tagesformat. Bitte als (01 bis 31) eingeben, f�r bestimmte Monate nur (01 bis 28).';
vjs12='Ung�ltiges Stundenformat, bitte eingeben als (00 bis 23).';
vjs13='Ung�ltiges Minutenformat, bitte eingeben als (00 bis 59).';
vjs14='Ung�ltige MTU; MTU muss zwischen 576 und 1492 liegen.';
vjs15='Ung�ltige MRU; MRU muss zwischen 128 und 65535 liegen';
vjs16="Ung�ltige IP: ";  vjs161=" nicht in ";   vjs162=" Netmask";
vjs17='Sie haben zwei verschiedene Kennw�rter eingeben. Bitte nochmals �berpr�fen!';
vjs18='Bitte Schnittstellen-Startnummer eingeben.';
vjs19='Die Schnittstellen-Startnummer muss kleiner sein als die Endnummer.';
vjs20='Ung�ltige Schnittstellennummer. F�r Schnittstellen sind nur positive ganze Zahlen zul�ssig.';
vjs21='Ung�ltige L�nge';
vjs22='Ung�ltiges Format an Position'; vjs221='! G�ltig ist:';
vjs23='Ung�ltige MAC-Adresse; dies ist eine Rundsendeadresse.';
vjs24='Ung�ltige MAC-Adresse; dies ist eine Nulladresse.';
vjs25='Ung�ltige MAC-Adresse; dies ist eine Sammeladresse.';
vjs26='Ung�ltige IP-Start- und Endadresse; IP-Endadresse muss gr��er sein als IP-Startadresse';
vjs27='Ung�ltige Zahl! G�ltig ist der Bereich 1 bis 65535';
vjs28='Ung�ltiges Netmask-Format.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Ung�ltige IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
vjs31='Ung�ltige LAN IP-Adresse. Die erste Zahl kann nicht 127 sein.';
vjs32='Ung�ltige LAN IP-Adresse (0.0.0.0).';
vjs33='Ung�ltige LAN IP-Adresse. Adresse muss unter 224.0.0.0 liegen.';
vjs34='G�ltiger Zahlenbereich: ';
vp1='Diese Website wird vom KINDERSCHUTZFILTER blockiert.';
vp2=' wird vom KINDERSCHUTZFILTER ausgeschlossen und ist eingestuft als: ';
vp3='Wenn Sie mit der Einstufung nicht einverstanden sind und eine erneute Einstufung w�nschen, klicken Sie auf Nicht einverstanden:';
vp4='Wenn Sie die Regeln f�r den KINDERSCHUTZFILTER �ndern m�chten, klicken Sie auf �ndern:';
vp5='Wenn Sie die Regeln eine Stunde lang au�er Kraft setzen m�chten (nur f�r diesen Computer), geben Sie Ihr Kennwort ein, und klicken Sie auf Tempor�re Filterdeaktivierung:';
Disagree='Nicht einverstanden';
Change='�ndern';
Override='Tempor�re Filterdeaktivierung';
wc1='WAN > Verbindungstyp';
wc2='Verbindungstyp w�hlen:'; 
wc3='Dynamisch'; 
wc4='Dynamische Verbindungen sind der g�ngigste Verbindungstyp. Wenn Sie ein Kabelmodem verwenden, arbeiten Sie vermutlich mit einer dynamischen Verbindung. Wenn Sie ein Kabelmodem besitzen oder Ihren Verbindungstyp nicht kennen, sollten Sie diese Option verwenden.';  
wc5='Statisch'; 
wc6='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Verwenden Sie diese Option nur, wenn Sie von Ihrem Provider eine IP-Adresse erhalten haben, die sich nicht �ndert.';  
wc7='PPPoE'; 
wc8='Wenn Sie ein DSL-Modem verwenden oder Ihr Provider einen Benutzernamen und ein Kennwort f�r Sie festgelegt hat, arbeiten Sie mit dem Verbindungstyp PPPoE. Verwenden Sie diesen Verbindungstyp.';  
wc9='PPTP'; 
wc10='[nur europ�ische L�nder]. Dieser Verbindungstyp ist in vielen europ�ischen L�ndern �blich. Wenn Ihnen Ihr Provider mitgeteilt hat, dass Sie PPTP verwenden und Ihnen die erforderlichen PPTP-Daten �bermittelt hat, verwenden Sie diese Option.'; 
wc11='Telstra BigPond'; 
wc12='[nur Australien] Teilnehmer an Telstra BigPond Kabel oder DSL m�ssen diese Option zur Konfigurierung der Verbindung verwenden.'; 
Next='Weiter >';
wds1='WAN > DNS';
wds2='Wenn Ihnen Ihr Internetanbieter (ISP) eine bestimmte DNS-Adresse zugewiesen hat, geben Sie die Adresse in diesem Fenster ein und klicken Sie auf "�nderungen �bernehmen".'; 
wds3='Automatisch vom ISP'; 
wds4='DNS-Adresse';   
wds5='Sekund�re DNS-Adresse';   
wds6='DNS = DNS-Server (Domain Name Server). Server im Internet, der URLs (Universal Resource Locator - Universelle Quellenangabe) wie www.belkin.de in IP-Adressen aufl�st.';
wds7='Wenn Sie die automatische DNS-Funktion nicht nutzen m�chten, m�ssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr Internet-Provider zugewiesen hat.';
wdy1='WAN > Verbindungstyp > Dynamische IP';
wdy2='Geben Sie die Daten f�r die dynamische IP unten ein, und klicken Sie auf "�nderungen �bernehmen".';
wdy3='Hostname';  
wdy4='Hostname = Name, den manche Provider f�r die Verbindung mit Ihrem System verlangen.';  
wdy5='WAN MAC-Adresse �ndern'; 
wdy6='Ung�ltiger Host-Name: ~!##$%^&*()=+{}[]|\'":;?/.<> ';
wmc1='WAN > MAC-Adresse';
wmc2='Bei manchen Providern ist es erforderlich, dass Sie die MAC-Adresse des Netzwerkadapters von Ihrem Computer klonen (in den Router kopieren). Wenn Sie nicht wissen, ob das bei Ihnen der Fall ist, klonen Sie einfach die MAC-Adresse des Computers, der vor der Routerinstallation urspr�nglich an das Modem angeschlossen war. Das Klonen der MAC-Adresse verursacht keine Probleme im Netzwerk.';
wmc3='Wan Mac-Adresse'; 
wmc4='MAC-Adresse des Computers klonen';  
wmc5='Klonen';
wm1='Internet/WAN';
WAN='WAN';
wm2='Auf der Registerkarte "Internet/WAN" richten Sie den Router f�r die Verbindung zu Ihrem ISP ein. Der Router kann die Verbindung zu fast jedem Provider-System herstellen, sofern Sie die Routereinstellungen an den Verbindungstyp des ISP angepasst haben. F�r die Einrichtung des Routers zur Verbindung mit dem Provider klicken Sie links auf dem Bildschirm in der Registerkarte "Internet/WAN" auf "Verbindungstyp".';
wm3='Unterst�tzte Verbindungstypen: ';
wm4='<b>Dynamisch:</b> einschlie�lich der Provider, die einen Hostnamen verlangen oder die Verbindung an eine bestimmte MAC-Adresse koppeln.';
wm5='<b>Statische IP-Adresse:</b> Der Router unterst�tzt die Verbindung zu einem Provider, der eine statische IP-Adresse zuweist.'; 
wm6='<b>PPPoE:</b> Der Router unterst�tzt einen dynamischen Verbindungstyp, der eine PPPoE-Anmeldung zur Authentifizierung verlangt.'; 
wm7='<b>PPTP:</b> Nur f�r Teilnehmer in Europa. Der Router unterst�tzt Verbindungen zu europ�ischen Providern, die mit dem PPTP-Protokoll arbeiten.';
wm8='<b>Telstra BigPond:</b>';
wm9='Nur f�r Australien. Der Router unterst�tzt die Verbindung zu Telstra BigPond.'; 
wpe1='WAN > Verbindungstyp > PPPoE';
wpe2='Geben Sie die Daten f�r die PPPoE-Einstellungen unten ein und klicken Sie auf "�nderungen �bernehmen".';
wpe3='Benutzername';   
wpe4='Kennwort erneut eingeben';   
wpe5='Dienstname (optional)';    
wpe6='MTU (576-1492)';    
wpe7='Lassen Sie die MTU-Einstellung unver�ndert, es sei denn, Ihr Provider verlangt ausdr�cklich eine andere Einstellung als 1432.';
wpe8='Verbindung nach';
wpe9=' Minuten ohne Aktivit�t unterbrechen.';
idlerangerro='Passivzeitlimit: ung�ltige Zahlenangaben.\n Sie k�nnen Zahlen zwischen 1 und 99 eingeben.';
wpe10='Ung�ltiges Zeichen:: <>&';
pm='Ihr Dienst konnte das eingegebene Kennwort nicht best�tigen. Bitte �berpr�fen Sie, ob Sie das Kennwort richtig eingegeben haben.';
wpe11='Ung�ltiger MTU-Wert';
wpe12='Bitte geben Sie Ihren Benutzernamen ein.';
wpp1='WAN > Verbindungstyp > PPTP';
wpp2='PPTP-Konto';    
wpp3='PPTP Password (PPTP-Kennwort)';    
wpp4='Kennwort erneut eingeben';   
wpp5='Hostname';   
wpp6='Service IP Address (Dienst-IP-Adresse)';  
wpp7='IP-Adresse';  
wpp8='Subnet Mask';  
wpp9='Connection ID (Verbindungskennung; optional)';    
wpp10='Verbindung nach';
wpp11=' Minuten ohne Aktivit�t unterbrechen.';
wpp12='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben  ';
wpp13='Bitte geben Sie Ihr PPTP-Konto an.';
wpp14='Bitte geben Sie das Kennwort erneut ein!';
wpp15='Bitte geben Sie das Kennwort ein.!';
ws1='WAN > Verbindungstyp > Statische IP';
ws2='Geben Sie die Daten f�r die statische IP unten ein und klicken Sie auf "�nderungen �bernehmen".';
ws3='IP-Adresse';  
ws4='Subnetzmaske';   
ws5='ISP Gateway Address (Gateway-Adresse des Providers)';   
ws6='Mein Provider hat mir mehrere statische IP-Adressen zugeteilt';  
ws7='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben';  
dm='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern g�ltig. Zul�ssig sind Zahlen zwischen 0 und 255.';
sm='Sie haben keine g�ltigen Zahlen f�r die Subnetzmaske eingegeben.';
ws8='Please enter/validate your DNS address settings on the following screen';
wsc1='Alias-IP-Adressenliste';  
im='Die Alias-IP-Adressenliste ist voll. Es k�nnen keine zus�tzlichen Regeln erstellt werden.';
wt1='WAN > Verbindungstyp > Telstra BigPond';
wt2='Wenn Ihr Internet-Dienst von Telstra BigPond in Australien bereitgestellt wird, m�ssen Sie Ihre Daten in den folgenden Feldern eingeben. Diese Informationen werden von Telstra BigPond zur Verf�gung gestellt.';
wt3='W�hlen Sie Ihren Staat aus';
wt4='Benutzer entscheidet sich f�r manuelle Serveranmeldung'; 
wt5='Anmeldeserver'; 
Logout='Abmelden';
wt6='Bitte geben Sie Ihre Server-IP ein, oder w�hlen Sie Ihren Bundesstaat aus dem Men� aus.';
wla1='Funknetz > Als Access Point verwenden';
wlad1='Der Router kann als reiner Access Point eingerichtet werden, so dass alle Routing- und Firewallfunktionen abgestellt werden. W�hlen Sie hierzu "Aktivieren", und geben Sie die gew�nschte IP-Adresse f�r den Access Point ein.';
wlad2='aktivieren/deaktivieren';
wlae1='IP-Adresse festlegen';  
wlae2='Subnetzmaske';  
wlae3='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.'; 
wlae4='1) Funkkan�le von Router und Access Point m�ssen �bereinstimmen.<br>'+
      '2) Sicherheitseinstellungen (WEP) von Router und Access Point m�ssen �bereinstimmen.<br>'+
      '3) Wenn der MAC-Filter aktiviert ist, muss der Benutzer die WLAN MAC-Adresse(n) des Routers/Access Points erg�nzen, damit Kommunikation zwischen diesen Ger�ten stattfinden kann.<br>';
wlc1='Funknetz > Kanal und SSID';
wlc2='Hier k�nnen Sie die Funkeinstellungen des Routers �ndern. Klicken Sie auf "�nderungen �bernehmen", um die Einstellungen zu sichern. ';
wlc3='Funkkanal';
wlc4='SSID';  
wlc5='Funkmodus'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='SSID rundsenden';  
wlc10='Turbo Mode'; 
wlc11="Durch die Aktivierung des Turbo-Modus kann der Router (oder Access Point) Frame Bursting einsetzen, um eine maximale Durchsatzleistung vom Router oder Access Point zu den 802.11g-Clients zu erzielen. Der Turbo-Modus funktioniert bei 802.11g-Clients, die den Turbo-Modus unterst�tzen. 802.11g-Clients von Belkin mit aktuellen Treibern unterst�tzen den Turbo-Modus. Clients, die den Turbo-Modus nicht unterst�tzen, funktionieren normal, wenn der Turbo-Modus aktiviert ist.";
wlc12='Gesch�tzter Modus';
wlc13="HINWEIS: Meistens wird die beste Durchsatzleistung erreicht, wenn der gesch�tzte Modus deaktiviert ist. Wenn Sie in einer Umgebung mit INTENSIVEM 802.11b-Datenverkehr oder -Interferenzen arbeiten, wird die beste Durchsatzleistung erreicht, wenn der gesch�tzte Modus eingeschaltet ist.";
wlc14='Aktueller Kanal';
wle1='Funknetz > Sicherheit';
wle2='Sicherheitsmodus';
wle3='WPA-PSK (kein Server)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(mit Radius-Server)';
wle7="Hier k�nnen Sie Sicherheits-/Verschl�sselungseinstellungen konfigurieren. Die Sicherheitseinstellungen sollten aktiviert sein, damit die maximale Sicherheit im kabellosen Netzwerk gew�hrleistet werden kann. WPA (Wireless Protected Access) erm�glicht dynamische �nderungen der Schl�ssel und bietet die sicherste L�sung. In Funknetzumgebungen, in denen nicht alle Ger�te WPA unterst�tzen, sollte WEP (Wired Equivalent Privacy) verwendet werden.";
wle8='(13 zweistellige Hexadezimalzahlen)';  
wle9='HINWEIS: ';
wle10='Um ein Hexadezimalpaar automatisch zu erstellen, aktivieren Sie das Feld links und geben Sie dort eine Kennfolge (Passphrase) ein. ';
PP='Kennfolge';
generate='erstellen';
errm='Bitte geben Sie eine Kennfolge ein.';
keym='Schl�ssel ist unvollst�ndig';
wle11='Schl�ssel 1';  
wle12='Schl�ssel 2'; 
wle13='Schl�ssel 3'; 
wle14='Schl�ssel 4';   
wle15='(zweistellige Hexadezimalzahlen)'; 
wle16='WPA/WPA2(with Server)';
wle17='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schl�ssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
keym1=' ist nicht vollst�ndig ';
keym2=' ist ung�ltig, bitte zuerst korrigieren!';
wlm1='Funknetz';
wlm2='Auf dieser Registerkarte k�nnen Sie die Funkeinstellungen des Routers bestimmen.';
wlm3='Kanal und SSID';
wlm4='Funkkanal und SSID (Name des kabellosen Netzwerks) einstellen';
wlm5='Sicherheit';
wlm6='Sicherheitseinstellungen des kabellosen Netzwerks wie WPA- oder WEP-Einstellungen �ndern. ';
wlm7='Als Access Point verwenden';
wlm8='AP als Routerbetriebsmodus festlegen ';
wlm9='IP-Adresse festlegen';
wlm10='IP-Adresse f�r den AP festlegen.';
wlm11='MAC-Adresskontrolle'
wlm12='Richten Sie eine Liste zul�ssiger Clients ein, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren m�chten.';
wlm13='Kabellose Bridge';
wlm14='Erm�glicht die Einrichtung von WDS-Br�ckenmodi.';
ww8='Bitte Radius-Schnittstelle eingeben.';
ww9='Die Radiusschnittstelle muss eine Zahl zwischen 1 und 65535 sein';
ww10='Bitte geben Sie den Radiusschl�ssel ein';
ww11='Das Schl�sselintervall muss eine Nummer sein';
ww12='Das Schl�sselintervall sollte nicht l�nger als 60 Sekunden sein';
ww13='Authentifizierung';
ww1='WPA/WPA2 (mit Server)';
ww2='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schl�ssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
ww3='Verschl�sselungsmodus';
ww4='Radius-Server';
ww5='Radius-Port';
ww6='Radius-Schl�ssel';
ww7='Schl�sselintervall';
seconds='(Sekunden)';
wwp6='Pre-shared key (PSK) eingeben';
wwp7='Die L�nge des PSK sollte zwischen 8 und 63 oder 64 Hex liegen';
wwp1='Der Standard ist TKIP';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (kein Server)';
wwp4=' Wireless Protected Access mit PSK (Pre-Shared Key): Der Schl�ssel ist ein Kennwort, das entweder aus einem Wort, einem Satz oder eine Folge von Buchstaben und Zahlen besteht. Der Schl�ssel muss zwischen <b>8</b> und <b>63</b> Zeichen lang sein und kann Leer- und Sonderzeichen oder nur <b>64</b> Hexadezimalzeichen (0-F) beinhalten. Jeder Client, der ins Netzwerk eingebunden wird, muss denselben Schl�ssel verwenden (Pre-Shared Key: PSK).';
wwp5='Verdeckter PSK';
wlb1='Funknetz > Funkbr�cke (Bridge)';
wlb2='Die Funkbr�cke (WDS-System) verbindet kabellose Router und Access Points zur Erweiterung eines Netzwerks.';
wlb3='Funkbr�cke aktivieren.';
wlb4='(durch die Aktivierung dieser Funktion k�nnen weitere Access Points eine Verbindung zu diesem Access Point herstellen.)';
wlb5='Vorgabe: aktiviert';
wlb6='Nur bestimmte Access Points k�nnen Verbindung herstellen.';
wlb7="(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)";
wlb7="(MAC-Adresse des zu verbindenden Access Points eingeben. Wenn diese Option markiert ist, kann jeder Access Point eine Verbindung herstellen. Hinweis: F�r den Verbindungsaufbau zwischen Access Points muss mindestens ein Access Point die MAC-Adresse des anderen Access Points aufrufen. Tipp: die MAC-Adresse finden Sie heraus, wenn Sie an einer kabellosen Client-Karte eine Standort�bersicht abrufen.)";
wlb8='Verbindungsm�glichkeit f�r kabellose CLIENTS deaktivieren.';
wlb9='(Diese Funktion darf nur verwendet werden, wenn der Access Point ausschlie�lich zur kabellosen Verbindung mit anderen Access Points dient.)';
wlb10='Ung�ltige';
wlbss1='Standort�bersicht';
BSSID='BSSID';
wlbss2='Netzwerktyp';
wlbss3='Verschl�sselung';
wlbss4='Select';
wlbss5='Keine verf�gbare BSSID gefunden.'; 
wlbss6='Alle 4 Felder sind belegt; entfernen Sie eins, bevor Sie ein neues ausw�hlen!';
wlq1='QoS (Quality of Service)-Einstellung';
wlq2='oS sch�tzt wichtigen Daten in Ihrem Netzwerk, wie Multimediainhalte und "Voice over IP" (VoIP), so dass diese nicht mit anderen im Netzwerk gesendeten Daten kollidieren. Auf der Grundlage von 802.11e kann diese Funktion nach Wahl aus- oder eingeschaltet werden. Wenn Sie Multimediainhalte oder VoIP in Ihrem Netzwerk verwenden, sollte die QoS-Funktion aktiviert sein.<br>'; 
wlq3='QoS-Switch'; 
wlq4='Erm�glicht Ihnen, die QoS-Funktion an- oder abzuschalten.<br>'; 
wlac1='ACK-Modus'; 
wlac2=' Es gibt zwei ACK-Modi (Acknoledgement - Empfangsbest�tigung), die f�r die beste Multimedialeistung in Ihrem Netzwerk eingesetzt werden k�nnen: Burst ACK und Immediate ACK. <br><br>'+
'Immediate ACK ist werksseitig voreingestellt und wird f�r den normalen Netzwerkbetrieb empfohlen. Die �nderung des ACK-Modus auf Burst ACK kann die Durchsatzraten beeintr�chtigen. Verwenden Sie Immediate ACK, wenn "Long-Range"-Leistungen in Ihrem Netzwerk wichtig sind. <br><br>'+
'Burst ACK wird die Raten vermindern, da nicht jedes im Netzwerk versendete Paket best�tigt wird. Bei einer sehr guten Verbindung zwischen dem Router und dem Client kann mit Burst ACK die Durchsatzleistung erh�ht werden. Wenn f�r eine Anwendung, wie bei mehrfachen datenintensiven Videodatenstr�men, eine hohe Bandbreite ben�tigt wird, verwenden Sie den Modus Burst ACK. Bedenken Sie, dass die Leistung �ber l�ngere Distanzen in diesem Modus beeintr�chtigt werden kann. <br>';
wmac1='MAC-Adressenkontrolle einstellen'; 
wmac2=' Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen k�nnen, welche Computer f�r das kabellose Netzwerk zugelassen sind. Hinweis: Diese Liste betrifft nur Computer mit kabellosem Zugang. Die Liste kann so eingestellt werden, dass jedem Computer, mit dem versucht wird, auf das Netzwerk zuzugreifen und der nicht in der Liste aufgef�hrt wird, der Zugang verweigert wird. Wenn Sie diese Funktion aktivieren, m�ssen Sie die MAC-Adresse eines jeden Clients (Computers) in Ihrem Netzwerk angeben, um den Netzwerkzugriff f�r diesen zu erm�glichen. Mit der Sperrfunktion "Blockieren" k�nnen Sie den Netzwerkzugriff f�r die einzelnen Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu l�schen oder hinzuzuf�gen.<br>'+
'1.  Erstellen einer Zugriffsliste <br>'+
 'W�hlen Sie "Allow" (Erlauben) (1), um ein Liste der Computer zu erstellen, denen Sie den Zugang zum kabellosen Netzwerk erlauben.<br>'+
 '2. Geben Sie dann in ein freies Feld "MAC address" (3) (MAC-Adresse) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugang zum Funknetzwerk erlauben m�chten und klicken Sie anschlie�end auf "Add" (4) (Hinzuf�gen).<br>'+
 '3. Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff erlauben m�chten, eingetragen sind.'+
 '4. Klicken Sie auf "Apply Changes" (5) (�nderungen �bernehmen), um den Vorgang zu beenden.<br><br>'+
'Erstellen einer Ausschlussliste <br>'+
'n der "Deny Access"-Liste (Ausschlussliste) bestimmen Sie, welche Computer KEINEN Zugang zum Netzwerk haben sollen. Jedem Computer in dieser Liste wird der Zugang zum kabellosen Netzwerk verweigert. Alle anderen haben diesen Zugriff.<br>'+
 '1.W�hlen Sie "Deny" (2) (Ausschlie�en), um ein Liste der Computer zu erstellen, denen Sie den Zugang zum kabellosen Netzwerk verweigern.<br>'+
 '2. Geben Sie dann in ein freies Feld "MAC address" (3) (MAC-Adresse) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugang zum Funknetzwerk verweigern m�chten und klicken Sie anschlie�end auf "Add" (4) (Hinzuf�gen).<br>'+
 '3.	Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff verweigern m�chten, eingetragen sind.'+
 '4. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen) (5), um den Vorgang zu beenden.<br>'; //
wlmc1='Funknetz > MAC-Adressenkontrolle';
wlmc2='Mit der MAC-Adressenkontrolle k�nnen Sie eine Liste von Clients bestimmen, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren m�chten.';
Allow='Zulassen';   Deny='Nicht Zulassen';  
wlmc7='Legen Sie zuerst fest, ob der MAC-Adressenliste der Zugang erlaubt oder verwehrt werden soll!';
wlmc6='Es k�nnen h�chstens 16 MAC-Adressen eingegeben werden.';
wlmc5='Die korrekte MAC-Adresse muss folgenderma�en aussehen: xx:xx:xx:xx:xx:xx (wobei x eine Zahl zwischen 0-9 oder ein Buchstabe zwischen a-f ist).';
wlmc3="Ung�ltige MAC-Adresse";
wlmc4='Bitte zuerst korrigieren!';
ENTRY_FULL	= 'Alle Eintr�ge sind belegt.\nBitte l�schen Sie einige Eintr�ge, und versuchen Sie es erneut.';
CLEAR_CONFIRM= 'Soll der Eintrag gel�scht werden? ';
CLEAR_ALL_CONFIRM = 'Sollen alle Eintr�ge gel�scht werden?';
ERR_INTERNAL	= ' Interner Fehler: Bitte �berpr�fen Sie die JavaScript-Funktion --';
g1='Die "IP-Adresse" ist die interne IP-Adresse des Routers. Um die Konfigurations- '+ 
'Oberfl�che zu �ffnen, geben Sie diese IP-Adresse in die Adresszeile Ihres Browsers ein. Diese Adresse kann '+  
'kann bei Bedarf ge�ndert werden. Geben Sie hierzu die neue IP-Adresse ein, und klicken Sie auf "�nderungen  '+  
'�bernehmen". Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse w�hlen. Beispiele f�r nicht routbare '+  
'IP-Adressen: ';
g2='192.168.x.x (x steht f�r eine Zahl zwischen 0 und 255).<br>';
g3='10.x.x.x (x steht f�r eine Zahl zwischen 0 und 255).<br>';
g4='172.y.x.x (y steht f�r eine Zahl zwischen 16 und 31, x f�r eine Zahl zwischen 0 und 255).<br>';
g5='Die Subnetzmaske muss nicht ver�ndert werden '+
'. Bei Bedarf ist eine �nderung der Subnetzmaske m�glich. Sie sollten sie jedoch nur dann ver�ndern, '+
'wenn es hierf�r einen bestimmten Grund gibt.<br>';
g6='DNS ist die Abk�rzung f�r Domain Name Server (Dom�nennamen-Server). Ein Dom�nennamen-Server ist ein Server im '+ 
 'Internet, der URLs (Universal Resource Links - Universale Quellenangabe) wie www.belkin.de in IP-Adressen '+
'�bersetzt. Bei vielen Providern ist eine Eingabe dieser Informationen in den Router unn�tig. Das '+ 
'Feld "Automatisch vom Provider" sollte markiert sein, wenn Ihr Provider Ihnen keine spezifische '+
'DNS-Adresse zugeteilt hat. Wenn Sie mit einem statischen IP-Verbindungstyp arbeiten, m�ssen Sie eine '+
'spezifische DNS-Adresse und eine sekund�re DNS-Adresse angeben, damit die Verbindung richtig funktioniert Falls '+
'Sie mit einem dynamischen Verbindungstyp oder PPPoE arbeiten, m�ssen Sie wahrscheinlich keine DNS '+ 
'Adresse kennen. Um die DNS-Adresseinstellungen einzugeben, deaktivieren Sie die Funktion "Automatisch vom Provider" und '+
'eben Sie Ihre DNS-Adresse in das entsprechende Feld ein. Klicken Sie auf "�nderungen �bernehmen", um die Einstellungen zu sichern. <br>';
g7='Mit der DHCP-Serverfunktion wird die Einstellung eines Netzwerks sehr vereinfacht, weil jedem Computer im Netzwerk '+ 
'eine IP-Adresse zugeteilt wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. Wenn '+
'Sie den DHCP-Server deaktivieren, m�ssen Sie auf jedem Computer im Netzwerk manuell eine statische IP-Adresse einstellen'+
'. Der IP-Pool ist der IP-Adressbereich, der f�r eine dynamische Zuweisung '+
'an die Computer im Netzwerk reserviert ist. Der Standardbereich ist 2-100 (99 Computer). Wenn Sie '+
'diese Zahl m�chten, geben Sie eine neue Start- und eine neue Endadresse ein, und klicken Sie auf "Apply Changes" (�nderungen �bernehmen). <br>';
g8='Sie k�nnen einen lokalen Dom�nennamen (Netzwerknamen) f�r Ihr Netzwerk festlegen. Diese Einstellung muss normalerweise '+ 
'nicht ge�ndert werden, soweit Ihrerseits kein bestimmter Grund vorliegt. Sie k�nnen den Namen f�r Ihr Netzwerk frei w�hlen, '+
'z. B. "MEIN NETZWERK". <br>';
g9='Dynamische IP';
g10='Die meisten Kabelmodems arbeiten mit einem dynamischen Verbindungstyp. '+ 
'F�r die Verbindung zum Provider gen�gt es daher meistens, wenn Sie die Option "Dynamisch" w�hlen'+ 
'. F�r manche dynamischen Verbindungstypen muss ein Hostname angegeben werden. Wenn Ihnen ein Hostname '+
'zugewiesen wurde, k�nnen Sie ihn im entsprechenden Feld eintragen Der Hostname wird Ihnen vom Provider zugewiesen. '+
'Bei bestimmten dynamischen Verbindungen m�ssen Sie die MAC-Adresse des PCs klonen, '+
'der urspr�nglich mit dem Modem verbunden war. Klicken Sie hierzu auf den Link "Change WAN MAC address" (WAN MAC-Adresse �ndern)'+
'. Wenn der Router korrekt eingerichtet ist, zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an. <br>';
g11='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet Falls Ihr Provider '+
'mit statischen IP-Adressen arbeitet, m�ssen Sie die IP-Adresse, die Subnetzmaske und die Provider-Gateway-'+
'Adresse kennen. Diese Informationen erhalten Sie bei Ihrem Provider. Meistens sind sie in den Anmeldeunterlagen '+ 
'enthalten Geben Sie die Angaben ein, und klicken Sie auf "�nderungen �bernehmen". Wenn Sie die Einstellungen �bernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an.<br><br>'+
'Sollte Ihr Provider Ihnen mehr als eine statische IP-Adresse zuteilen, ist Ihr Router in der Lage, '+ 
'bis zu f�nf statische WAN-IP-Adressen zu verwalten. W�hlen Sie die Option "My ISP provides more than one static IP address" (Mein Provider hat mir mehrere statische IP-Adressen zugeteilt) '+
'und geben Sie die weiteren Adressen ein. <br>';
g12='Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie f�r die Internetverbindung ein DSL-Modem verwenden, '+ 
'verwendet Ihr ISP vermutlich PPPoE, um Sie f�r diesen Dienst anzumelden. Bei vorhandenem Internet-'+
'Zugang: Wenn Sie zu Hause oder in Ihrem B�ro eine Internetverbindung ohne Modem haben, m�ssen Sie ebenfalls PPPoE verwenden. '+
'<br><br>'+
'Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:<br>'+ 
'1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort f�r die Verbindung zum Internet zugewiesen<br>'+
'2) Ihr Provider hat Ihnen f�r die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt<br>'+
'3) Sie m�ssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen<br><br>'+
'Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. '+
'Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Service Name" (Dienstname) leer. '+
'Klicken Sie nach der Eingabe Ihrer Informationen auf "Apply Changes" (�nderungen �bernehmen). Wenn Sie die Einstellungen �bernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an. '+
'Weitere Informationen zur Konfigurierung des Routers f�r PPPoE finden Sie im Benutzerhandbuch.<br>';
g13='Einige Provider verlangen ein PPTP-Protokoll f�r die Verbindung. Hierbei wird eine direkte Verbindung zum System des Providers hergestellt. '+
'Geben Sie im entsprechenden Feld die Informationen ein, die Sie vom Provider erhalten haben. Klicken Sie danach '+
'auf "Apply Changes" (�nderungen �bernehmen). Wenn Sie die Einstellungen �bernommen haben, meldet die Statusanzeige '+
'"Connected" (Verbindung OK), wenn der Router korrekt konfiguriert wurde. ';
g14='Ihr Benutzername und Ihr Kennwort werden von Telstra BigPond vergeben. Geben Sie diese Informationen unten ein. '+ 
'Durch die Wahl des Bundesstaats wird die IP-Adresse des Anmeldeservers automatisch eingetragen. '+
'Wenn Ihre Anmeldeserver-Adresse nicht mit der Vorgabe �bereinstimmt, '+
'k�nnen Sie die richtige Adresse manuell eingeben. '+
'Klicken Sie nach der Eingabe auf "Apply Changes" (�nderungen �bernehmen). '+ 
'Wenn Sie die Einstellungen �bernommen haben, meldet die Statusanzeige "Connected" (Verbindung OK)'+
', wenn der Router korrekt konfiguriert wurde. ';
g15='MTU-Einstellungen'
g16='Die MTU-Einstellung darf nicht ge�ndert werden, es sei denn, Ihr Provider verlangt ausdr�cklich eine bestimmte MTU-Einstellung. '+ 
'�nderungen an der MTU-Einstellung k�nnen zu Problemen mit der Internet-Verbindung f�hren, wie '+ 
'Trennung vom Internet, langsame Verbindungen und Fehler bei der Arbeit mit Internet-Anwendungen. '; 

g17='Trennen nach X...'; 
g18='Die Funktion "Disconnect" dient zur automatischen Trennung des Routers vom Internet, wenn '+ 
'eine bestimmte Zeit lang keine Aktivit�t mehr festgestellt wird. Wenn Sie diese Option aktivieren und zum Beispiel '+
'5 in das Minutenfeld eingeben, wird der Router nach '+
'f�nf Minuten Inaktivit�t vom Internet getrennt. Diese Option sollte '+ 
'nur verwendet werden, wenn Ihre Internet-Nutzung nach Zeit abgerechnet wird. ';
g19='MAC ist das K�rzel f�r "Media Access Controller". Alle Netzwerk-Komponenten, einschlie�lich Karten '+ 
'Adapter und Router, besitzen eine eindeutige Seriennummer, die als MAC-Adresse bezeichnet wird. Ihr Provider '+
'speichert die MAC-Adresse des Adapters Ihres Computers, damit nur dieser Computer auf das '+ 
'Internet zugreifen kann. Wenn Sie den Router installieren, wird die MAC-Adresse des Routers '+ 
'vom Provider erkannt und die Verbindung unter Umst�nden unterbrochen. Belkin hat daher die M�glichkeit entwickelt, '+ 
'die MAC-Adresse des Computers in den Router zu kopieren ("Klonen"). Die MAC-Adresse '+ 
'wird dann vom Providersystem als die urspr�ngliche MAC-Adresse erkannt, so dass '+ 
'es die Verbindung zul�sst. Wenn Sie nicht wissen, ob Ihr Provider die urspr�ngliche '+ 
'MAC-Adresse verlangt, klonen Sie einfach die MAC-Adresse des Computers, der urspr�nglich '+ 
'an das Modem angeschlossen war. Das Klonen der Adresse verursacht keine Probleme im Netzwerk. <br> '+
'Achten Sie beim Klonen der MAC-Adresse darauf, dass Sie den Computer verwenden, der URSPR�NGLICH '+
'mit Ihrem Modem VERBUNDEN war, bevor der Router installiert wurde. Klicken Sie auf "MAC-Adresse klonen"'+ 
'. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen). Ihre MAC-Adresse wurde in den Router kopiert. ';
g20='Sie k�nnen den Betriebskanal des Routers wechseln. W�hlen Sie hierzu den gew�nschten neuen Kanal aus dem Dropdown-Men�. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen), um die Einstellung zu sichern. Sie '+
 'k�nnen auch die SSID �ndern. Die SSID ist der Name des kabellosen Netzwerks. Sie k�nnen die SSID frei festlegen. Wenn sich weitere Funknetzwerke in Ihrer '+
 'Umgebung befinden, sollten Sie Ihrem Netzwerk einen besonderen Namen geben. Als Standard ist Belkin_Pre-N_xxxxxx eingestellt. Um '+ 
'die SSID zu�ndern, klicken Sie auf das Feld "SSID" und geben Sie einen neuen Namen ein. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen), um die �nderung zu speichern.'; 
g21='Sie k�nnen Ihr kabelloses Netzwerk fast unsichtbar machen. Wenn Sie das Rundsenden '+ 
'der SSID deaktivieren, wird Ihr Netzwerk nicht in Standort�bersichten aufgenommen. Die Standort�bersicht ist eine Funktion, '+
'die viele moderne Funk-Netzwerkadapter anbieten. Dabei wird die "Luft" nach erreichbaren'+
'Netzwerken abgesucht und werden gefundene Netzwerke zur Verbindung angeboten. Wenn Sie die '+
'Rundsendung der SSID deaktivieren, verbessern Sie die Netzwerksicherheit.';
g22='Wenn Sie den Router als Access Point verwenden, m�ssen Sie eine IP-Adresse f�r den Access'+
 'Point festlegen. Die IP-Adresse muss sich im gleichen Bereich befinden wie das Netzwerk, da die Verbindung zum Netzwerk '+
 'bestehen bleibt. Um die erweiterte Konfigurierung des Routers erneut zu �ffnen, geben Sie '+
'die IP-Adresse in den Browser ein und melden Sie sich an.';
g23= 'Einstellen des Funkmodus';
g24= '�ber diesen Schalter stellen Sie den Funkmodus des Routers ein. Es gibt drei Modi. <br> '+
'1) Nur 802.11g<br>'+
'Verwenden Sie diese Funktion, wenn ausschlie�lich Pre-N- und 802.11g-kompatible Ger�te am Netzwerk angeschlossen sind und alle langsameren 802.11b-Ger�te au�en vor bleiben.<br> '+

'2) 802.11g & 802.11b<br>'+
'Verwenden Sie diese Funktion, wenn Pre-N-, 802.11g- und 802.11b-kompatible Ger�te am Netzwerk angeschlossen sind. <br>'+
'3) Aus<br>'+
'In diesem Modus wird der Access Point des Routers abgeschaltet, sodass kein kabelloses Ger�t Zugang zu Ihrem Netzwerk erh�lt. Das Ausschalten dieser Funktion ist eine sehr gute Methode, Ihr Netzwerk abzusichern, wenn Sie eine Zeit lang nicht zu Hause sind, oder Sie diese Funktion des Routers eine Zeit lang nicht ben�tigen.';
g25='Virtuelle Server';
g26='Mit dieser Funktion k�nnen Sie externe (Internet-)Anfragen bei Diensten wie '+ 
'Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen �ber Ihren Router '+ 
'an das interne Netzwerk leiten. Weil die internen Computer durch eine Firewall gesch�tzt sind, '+
'k�nnen die Rechner aus dem Internet nicht auf sie zugreifen, da sie nicht "sichtbar" sind. Wenn Sie '+ 
'die virtuelle Serverfunktion f�r eine bestimmte Anwendung einstellen m�ssen, sehen Sie in der Liste der verbreitetsten '+
'Anwendungen nach. Wenn Ihre Anwendung dort nicht aufgef�hrt wird, wenden Sie sich '+ 
'an den Hersteller des Programms, um dort zu erfahren, welche Port-Einstellungen Sie vornehmen m�ssen. W�hlen Sie, wenn vorhanden, '+
'die entsprechende Anwendung aus der Dropdown-Liste aus W�hlen Sie die Reihe, aus der Sie die Einstellungen kopieren '+
'm�chten, aus der Dropdown-Liste neben "In Zeile" aus und klicken Sie auf "Eingabe". Die Einstellungen '+
'werden in die angegebene Zeile �bertragen. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen),' +
'um die Einstellung zu sichern Um Einstellungen manuell einzugeben, tragen Sie die IP-Adresse in das Feld f�r den '+
'internen Server ein, dann die Ports, die freigegeben werden m�ssen (bei mehreren '+
'Ports trennen Sie diese durch Kommata); w�hlen Sie den Port-Typ aus (TCP oder UDP) und klicken Sie auf "Apply Changes" (�nderungen �bernehmen). Sie k�nnen pro '+
'interner IP-Adresse nur einen Port freigeben Das �ffnen von Ports in Ihrer Firewall kann ein Sicherheitsrisiko darstellen. Das '+
'Aktivieren und Deaktivieren von Einstellungen geht schnell. Daher sollten Sie die Einstellungen deaktivieren, '+
'wenn Sie eine bestimmte Anwendung momentan nicht verwenden. ';
g27='Client-IP-Filter';
g28='Sie k�nnen den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere '+ 
'Netzwerke zu einer bestimmten Zeit beschr�nkt wird. Die Beschr�nkung kann f�r einen einzelnen oder '+
'mehrere Computer festgelegt werden. Wenn Sie z.B. den Internet-Zugriff f�r einen bestimmten '+
'Computer einschr�nken m�chten, geben Sie seine IP-Adresse in die '+ 
'IP-Felder ein. Geben Sie dann in die beiden Schnittstellenfelder jeweils 80 ein. W�hlen Sie "TCP". W�hlen Sie "Blockieren". '+
'Sie k�nnen auch "Immer" ausw�hlen, um den Zugriff rund um die Uhr zu sperren. W�hlen Sie oben den Starttag, '+
'und die Startzeit und den Endtag und die Endzeit '+
'unten. Klicken Sie auf "Apply Changes" (�nderungen �bernehmen). Der Computer mit der angegebenen IP-Adresse wird jetzt '+
'zu den bestimmten Zeiten vom Internzugriff ausgeschlossen. Hinweis: Achten Sie darauf, '+
'dass unter "Utilities> System Settings> Time Zone" die richtige Zeitzone ausgew�hlt ist. ';
g29='MAC Adress-Filter';
g30='Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen k�nnen, '+
'wird der Zugriff auf das Netzwerk verweigert. Wenn Sie diese Funktion aktivieren, '+
'welche Computer f�r das Netzwerk zugelassen sind. Computern, die nicht in der Filterliste verzeichnet sind, '+
'm�ssen Sie die MAC-Adresse eines jeden Clients auf Ihrem Netzwerk angeben, um den Netzwerkzugriff f�r diesen zu '+
'erm�glichen. Mit der Sperrfunktion "Blockieren" k�nnen Sie den Netzwerkzugriff f�r die einzelnen '+
'Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu l�schen oder hinzuzuf�gen. Um '+ 
'Aktivieren dieser Funktion w�hlen Sie "MAC-Adressfilter aktivieren". Geben Sie dann die MAC-Adresse '+
'f�r jeden Computer im Netzwerk ein. Klicken Sie dazu auf "Add" (Hinzuf�gen) und geben Sie die MAC-Adresse in das '+
'entsprechende Feld ein. Klicken Sie auf "�nderungen �bernehmen", um die Einstellungen zu sichern. L�schen Sie eine MAC-Adresse aus '+
'der Liste, indem Sie neben dem Eintrag der Adresse, die Sie l�schen m�chten auf "Delete" (L�schen) klicken. Klicken Sie auf "Apply '+
'Changes" (�nderungen �bernehmen), um die Einstellungen zu speichern. <br><br>'+
'Hinweis: Sie k�nnen die MAC-Adresse der Computer, mit denen auf '+ 
'die administrativen Funktionen des Routers zugegriffen wird, nicht l�schen. (Dies sind die Computer, die gerade verwendet werden). ';
g31='Mit der DMZ-Funktion k�nnen Sie einen Computer festlegen, der von der '+
'Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, '+
'zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung. '+
'Verwenden Sie diese Funktion nur zeitweise. '+
'<font class="redBold">'+
'Der DMZ-Computer ist NICHT vor Hacker-Angriffen gesch�tzt.</font> '+ 
'Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das '+ 
'IP-Feld ein, und w�hlen Sie "Enable" (Aktivieren). Klicken Sie auf "Apply Changes" (�nderungen �bernehmen), um die �nderung in Kraft zu setzen. '+ 
'Wenn Sie mehrere statische WAN-IP-Adressen verwenden, '+
'k�nnen Sie die IP-Adresse festlegen, zu der der DMZ-Host umgeleitet wird. Geben Sie die WAN-IP-Adresse ein, '+
'zu der der DMZ-Host umgeleitet werden soll, geben Sie die beiden letzten Ziffern der IP-Adresse des '+
'DMZ-Host-Computers ein, w�hlen Sie "Enable" (Aktivieren), und klicken Sie auf "Apply Changes" (�nderungen �bernehmen). ';
g32='ICMP Ping blockieren';
g33='Computerhacker bedienen sich sogenannter "Pings", um potenzielle Opfer im '+
'Internet zu finden. �ber die Ping-Pr�fung einer IP-Adresse und die Antwort des '+
'adressierten Rechners kann ein Hacker Angriffspunkte feststellen. Das '+ 
'Router kann so eingerichtet werden, dass er auf ICMP-Pings von au�en nicht antwortet Hierdurch '+ 
'verbessern Sie den Schutz Ihres Routers. Um die Ping-Antwort abzuschalten, w�hlen Sie '+ 
'"Block ICMP Ping" (ICMP-Ping blockieren)und klicken auf "Apply Changes" (�nderungen �bernehmen). Der Router l�sst jetzt ICMP-Pings unbeantwortet. '; 
g34='Administratorenkennwort';
g35='Der Router wird OHNE festgelegtes Kennwort geliefert. Wenn Sie ein Kennwort hinzuf�gen m�chten, um '+
'den Schutz Ihres Routers zu erh�hen, k�nnen Sie hier ein Kennwort eingeben. Bewahren Sie das Kennwort sicher auf. '+
'Sie ben�tigen es, wenn Sie sich k�nftig am Router anmelden m�chten. Sie sollten '+
'ein Kennwort festlegen, wenn Sie die Fernverwaltung '+
'des Routers nutzen m�chten. <br><br>'+
'Mit dem Anmeldezeitlimit legen Sie fest, wie lange Sie an der Erweiterten Benutzeroberfl�che '+ 
'f�r die Routerkonfiguration angemeldet bleiben k�nnen. Die Z�hluhr startet, wenn keine '+
'Aktivit�t mehr registriert wird. Beispiel: Sie haben �nderungen mit der Erweiterten Benutzeroberfl�che vorgenommen '+
'und verlassen ihren Arbeitsplatz, ohne auf "Logout" (Abmelden) zu klicken. Angenommen, das Zeitlimit betr�gt '+
'10 Minuten, wird die Sitzung 10 Minuten, nachdem Sie den Computer verlassen haben, beendet. Wenn '+
'Sie weitere �nderungen vornehmen m�chten, m�ssen Sie sich erneut am Router anmelden. Das Zeitlimit '+
'f�r die Anmeldung dient der Sicherheit und ist auf 10 Minuten voreingestellt. Hinweis:  '+
'Es kann jeweils nur ein Computer an der erweiterten Konfigurationsoberfl�che zur Routerkonfiguration angemeldet sein. ';
g36='Uhrzeit und Zeitzone';
g37='Der Router aktualisiert die Uhrzeit, indem er eine Verbindung mit einem Simple Network Time Protocol (SNTP)-Server herstellt. '+  
'Dadurch kann der Router die Systemuhr mit dem weltweiten Internet synchronisieren Die '+ 
'synchronisierte Routeruhr dient zur Aufzeichnung des Sicherheitsprotokolls und zur Steuerung der Client-'+  
'Filter. W�hlen Sie die Zeitzone, in der Sie sich befinden. Wenn Sie sich in einer Region befinden, '+ 
'in der zwischen Sommer- und Winterzeit unterschieden wird, markieren Sie das Feld neben "Enable Daylight Saving" (Sommerzeit aktivieren)'+ 
'. Die Systemuhr wird nicht immer sofort aktualisiert. Sie m�ssen mindestens 15 Minuten abwarten, '+ 
'bis der Router die Zeitserver im Internet abfragt und eine Antwort erh�lt. Sie k�nnen '+ 
'die Uhr nicht selbst einstellen. '; 
g38='Fernverwaltung';
g39='Bevor Sie diese Funktion aktivieren, '+  
'<font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN. </font>'+ 
'Mit dem Fernmanagement k�nnen Sie �berall vom Internet aus �nderungen an den Router-Einstellungen vornehmen'+ 
'. F�r die Fernverwaltung des Routers gibt es zwei Methoden. Zum '+ 
'einen k�nnen Sie den Zugriff auf den Router vom gesamten Internet aus erlauben, in dem Sie die Funktion '+ 
'"Any IP address can remotely manage the router" (Beliebige IP Adresse zur Fernverwaltung des Routers zulassen) einstellen. Wenn Sie Ihre WAN-IP-Adresse  '+ 
'von einem Computer mit Internetverbindung eingeben, sehen Sie einen Anmeldebildschirm, '+ 
'�ber den Sie das Kennwort f�r Ihren Router eingeben m�ssen. Zum anderen k�nnen Sie eine '+ 
'bestimmte IP-Adresse festlegen, an der Sie die Fernverwaltung des Routers durchf�hren m�chten. Dies ist sicherer, aber auch '+   
'unpraktischer. Geben Sie f�r diese Methode die IP-Adresse des Computers, an dem Sie den Router fernverwalten m�chten, '+ 
'in das entsprechende Feld ein und aktivieren Sie die Option "Only this IP address can remotely '+ 
'manage the Router" (Nur diese IP-Adresse zur Fernverwaltung). Es wird DRINGEND EMPFOHLEN, dass Sie ein Administratorkennwort festlegen, '+ 
'bevor Sie diese Funktion aktivieren. Wenn Sie auf das Kennwort verzichten, '+ 
'setzen Sie Ihren Router der Gefahr von Manipulationen durch Unbefugte aus. ';
g40='NAT-Aktivierung';
g41='Bevor Sie diese Funktion aktivieren, '+  
'<font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN. </font>'+ 
'NAT (Netzwerkadress�bersetzung) ist die Methode, mit der der Router die einzelne '+ 
'IP-Adresse, die Sie von Ihrem Internet-Provider erhalten haben, auf mehrere Computer im Netzwerk aufteilt. Diese Funktion '+  
'sollte nur von erfahrenen Benutzern verwendet werden. Diese Funktion sollte nur verwendet werden, wenn der Provider Ihnen '+ 
'mehrere IP-Adressen zuteilt oder wenn Sie NAT zur weitergehenden Systemkonfigurierung abschalten m�ssen. '+  
'Wenn Sie eine einzelne IP-Adresse haben und die NAT ausschalten, k�nnen die Computer im Netzwerk '+ 
'nicht mehr auf das Internet zugreifen. Zudem k�nnen weitere Probleme auftreten. Eine Deaktivierung von NAT '+ 
'schaltet die Funktionen der Firewall ab. '; 
g42='Die UPnP (Universal Plug-and-Play)-Technologie erm�glicht den reibungslosen Betrieb von Sprach- '+
'und Videonachrichten, Spielen und anderen Anwendungen, die dem UPnP-Standard entsprechen. Einige '+
'Anwendungen ben�tigen f�r eine einwandfreie Funktion eine spezielle Konfiguration der Firewall im Router '+
'. Hierzu m�ssen meistens TCP- und UDP-Ports ge�ffnet und in bestimmten F�llen auch '+
'Trigger-Ports gesetzt werden. UPnP-kompatible Anwendungen k�nnen mit dem Router kommunizieren '+
'und ihm mitteilen, wie die Firewall konfiguriert werden muss. '+
'Werkseitig ist die UPnP-Funktion des Routers deaktiviert. Wenn Sie '+ 
'UPnP-kompatible Anwendungen einsetzen und die UPnP-Funktionen nutzen m�chten, k�nnen Sie die '+ 
'UPnP-Option aktivieren. W�hlen Sie hierzu auf der Seite "Utilities" (Dienstprogramme) im Abschnitt "UPnP Enabling" (UPnP-Aktivierung) die Option "Enable" (Aktivieren). '+ 
'Klicken Sie auf "Apply Changes" (�nderungen �bernehmen), um die �nderung zu speichern. ';
g43='Automatische Benachrichtigung zur Firmware-Aktualisierung';
g44='Der Router kann automatisch anfragen, ob eine neue Firmware-Version vorliegt '+ 
'und Sie ggf. darauf aufmerksam machen. Wenn Sie sich '+ 
'an der Erweiterten Benutzeroberfl�che des Routers anmelden, �berpr�ft der Router, ob neue Firmware '+ 
'verf�gbar ist. Ist dies der Fall, werden Sie benachrichtigt. Sie k�nnen '+ 
'die neue Version herunterladen oder die Benachrichtigung ignorieren. Werkseitig ist diese Funktion des Routers deaktiviert. '+  
'Wenn Sie sie aktivieren m�chten, klicken Sie auf "Enable" (Aktivieren) und dann auf "Apply Changes" (�nderungen �bernehmen). ';
g45='Sicherheitseinstellungen des Funknetzwerks';
g46='Verschl�sselungstechniken erh�hen die Sicherheit Ihres Funknetzwerks. Es kann nur ein Sicherheitstyp '+ 
'ausgew�hlt werden. Anwender m�ssen daher einen Modus ausw�hlen, '+ 
'der von allen Netzwerkger�ten im Funknetzwerk unterst�tzt wird. Dieses Belkin-Produkt verf�gt �ber 5 '+ 
'm�gliche Sicherheitseinstellungen:<br><br>'+
'1) Deaktiviert. In diesem Modus wird keine Verschl�sselung aktiviert. Offene Netzwerke, in denen jeder Benutzer '+ 
            'willkommen ist, sind meistens nicht verschl�sselt.<br><br> '+ 
'2) WPA PSK - Home (kein Server). WPA (Wireless protected Access - gesch�tzte Funk�bertragung). PSK ist eine aktuelle, '+ 
             'standardisierte Sicherheitstechnik, bei der jedes Informationspaket '+ 
             'mit einem anderen Code oder Schl�ssel verschl�sselt wird. Weil sich der Schl�ssel immer wieder �ndert, '+  
             'ist WPA sehr sicher. Es gibt zwei Arten der WPA-Sicherheit, WPA-PSK (Pre-Shared Key) und '+ 
             'WPA-Radius-Server. F�r den einen wird ein Server ben�tigt und f�r den '+  
             'anderen nicht. WPA-PSK eignet sich f�r zu Hause oder kleine B�ros, wo sich kein  '+  
             'Server befindet. Die PSK-Verschl�sselung wird automatisch aus einer Zeichenreihe '+  
             'oder einem Kennwort generiert. Das gr��te Sicherheitsrisiko bei WPA-PSK liegt daher '+  
             'in der Preisgabe des Kennworts.<br><br> '+ 
 'a. TKIP versus AES. W�hrend der WPA-Einrichtung muss der Nutzer die Wahl zwischen der Verschl�sselung mit '+  
 'TKIP oder AES treffen. Der WPA-Standard bestimmt TKIP, daher ist dies die Standardeinstellung. Dar�ber hinaus sollte '+ 
 ' TKIP bessere Kompatibilit�t mit kabellosen Ger�ten unterschiedlicher '+  
 ' Hersteller gew�hrleisten, da viele kabellose Produkte nicht mit AES erweitert werden. AES ist eine neue '+  
 ' Verschl�sselungstechnik auf der Grundlage des nicht ratifizierten 802.11i-Standards. Neue WPA-Standards '+  
   'arbeiten meist mit AES. Obwohl AES nicht ebenso popul�r ist, '+  
  ' wird diese Technik von einigen Anwendern vorgezogen. In jedem Fall muss f�r alle Netzwerkger�te dieselbe  '+  
   'Technik eingestellt sein.<br><br> '+
 'b. Pre-Shared Key. Geben Sie ein Wort oder eine Phrase mit maximal 40 Zeichen ein. Derselbe PSK muss '+  
   'ebenfalls f�r alle anderen Netzwerkger�te im Netzwerk eingestellt werden. Achten Sie dabei auf '+  
   'die Gro�- und Kleinschreibung ("n" ist ein anderes Zeichen als "N"). Der leichteste Weg, '+  
   'Ihre Sicherheitseinstellungen zu umgehen, ist die Preisgabe Ihres Kennworts.<br><br> '+ 
'3) 128-Bit WEP-Verschl�sselung. Bis vor kurzem galt 128-Bit WEP (Wired Equivalent Privacy - Sichere Funk�bertragung) als Standard f�r '+  
                'Funk�bertragungen. Auch wenn nicht alle Ihre kabellosen Ger�te WPA unterst�tzen, ist 128-Bit '+  
                'WEP noch immer eine hervorragende Sicherheitseinstellung. Sie m�ssen dazu eine Hexadezimalzahl eingeben '+  
                'oder diese automatisch generieren lassen.<br><br> '+ 
'4) 64-Bit WEP-Verschl�sselung. Belkin empfiehlt den 64 Bit-Modus f�r Netzwerke, in denen einige Ger�te weder '+  
               'WPA noch 128-Bit WEP unterst�tzen.<br><br> '+
'5) WPA - Radius-Server. (Auf diesen Modus wird �ber die Schaltfl�che "Erweitert" zugegriffen). WPA'+
'-Server ist nur f�r Netzwerke mit einem Radius-Server geeignet. Alle Parameter f�r diesen Modus '+
'sollten vom Administrator des Radius-Servers bereit gestellt werden. m Gegensatz zu WPA PSK, '+
'wird bei WPA-Server der Schl�ssel von einem Server auf die Clients �bertragen, anstatt diesen automatisch zu generieren.';
g57='Verwenden der dynamischen DNS';
g58='Der dynamische DNS-Dienst erm�glicht es Ihnen, eine dynamische IP-Adresse in jeder der zahlreichen Dom�nen, die DynDNS.org anbietet, als statischen Hostnamen auszuweisen. Sie erlauben Ihren Netzwerkcomputern damit, leichter auf verschiedene Bereiche des Internets zuzugreifen. DynDNS.org bietet diesen Dienst f�r maximal f�nf Hostnamen kostenlos im Internet an.<br>'+
'Der Dynamische DNSSM-Dienst ist ideal f�r private Internetseiten, Dateiserver oder um den Zugriff zu Ihrem Heim-PC von Ihrem Arbeitsplatz aus zu erleichtern. Verwenden Sie den Dienst, wenn Sie sicher gehen m�chten, dass Ihr Hostname immer zu Ihrer IP-Adresse f�hrt, unabh�ngig davon, wie oft diese von Ihrem Provider ge�ndert wird. Auch wenn sich Ihre IP-Adresse �ndert, k�nnen Ihre Freunde und Bekannte sie immer im Internet finden, indem Sie ersatzweise die Adresse ihrname.dyndns.org eingeben!<br>'+
'<br>Um sich kostenlos f�r Dynamic DNS anzumelden, �ffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>'+
'<br><b>Einstellen des Update-Clients f�r Dynamisches DNS</b><br>'+
'<br>Um sich kostenlos f�r Dynamic DNS anzumelden, �ffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>'+
'<br><b>Einstellen des Update-Clients f�r Dynamisches DNS</b><br>'+
'Sie m�ssen sich beim kostenlosen Aktualisierungsdienst von DynDNS.org anmelden, bevor Sie diese Funktion nutzen k�nnen. Nach der Registrierung befolgen Sie bitte diese Anweisungen.<br>'+
'1.Geben Sie in das Feld "User Name" (1) (Benutzername) Ihren DynDNS.org-Benutzernamen ein.<br>'+
'2.Geben Sie in das Feld "Password" (2) (Kennwort) Ihr DynDNS.org-Kennwort ein.<br>'+
'3.Geben Sie in das Feld "Domain Name" (3) (Dom�nenname) den DynDNS.org-Dom�nennamen ein, den Sie mit DynDNS.org einstellt haben, ein.<br>'+
'4.Klicken Sie auf Update Dynamic DNS" (Dynamisches DNS aktualisieren), um Ihre IP-Adresse zu aktualisieren."<br>'+
'Immer wenn Ihre IP-Adresse vom Provider ver�ndert wird, wird der Router automatisch die Server von DynDNS.org mit der neuen IP-Adresse aktualisieren. Sie k�nnen dies auch manuell tun, indem Sie auf die Schaltfl�che "Update Dynamic DNS" (4) (Dynamische DNS aktualisieren) klicken.<br>';
fw1='Firmware wird aktualisiert.';
fw2='UNTERBRECHEN SIE DEN ROUTER NICHT, SCHALTEN SIE IHN NICHT AB! Dies k�nnte dazu f�hren, dass der Router nicht mehr funktioniert.'; 
apply_text_1='Apply changes (�nderungen �bernehmen). Bitte warten Sie......';
warn_msg1='SSID kann nicht als NULL gesendet werden!';
warn_msg2='Das Funknetz wird neu gestartet, wenn Sie diese �nderung von einen kabellos verbundenem Computer aus machen. Der Computer kann kurzzeitig vom Router getrennt werden.';
parentalc_alert = 'Keine externe (Internet) Verbindung m�glich';

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

