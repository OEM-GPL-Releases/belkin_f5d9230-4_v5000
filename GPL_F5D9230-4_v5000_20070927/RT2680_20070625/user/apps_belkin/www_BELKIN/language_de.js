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
show15='WLAN nicht verfügbar';
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
btn1='Änderungen aufheben';
btn2='Änderungen übernehmen';
btn3='Dynamisches DNS aktualisieren';
Router='Router';
AP='AP';
Dynamic='Dynamisch';
cff1='Firmware erfolgreich prüfen';
cff2='Firmware-Informationen.'; 
cff3='Für diesen Router steht keine Firmware-Aktualisierung zur Verfügung.';
cff4='Kann keine Verbindung zum Firmware-Server herstellen, <br>bitte überprüfen Sie die WAN-Verbindung.';
cff5='Es steht eine aktualisierte Version der Firmware führ Ihren Router zur Verfügung';
d1='Belkin | Administrator duplizieren';
d2='Administrator duplizieren';
d3='Dieses Gerät wird verwaltet von';
d4='derzeit!!';
fc1='Firewall > Client-IP-Filter';
fc2a='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mails oder andere Netzwerkdienste '; fc2b=' auf bestimmte Tage und Uhrzeiten beschränkt wird.'; 
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
fcipm='Entweder haben Sie die Client-IP-Adresse nicht eingegeben, oder bestimmte Zahlen in der IP-Adresse sind ungültig.  Die Zahl im IP-Eingabefeld muss zwischen 1 und 254 liegen.';
fcsm='Sie haben keine gültigen Schnittstellen eingegeben';
fcrm='Die zweite Zahl des Schnittstellenbereichs muss größer sein als die erste.';
fcripm='Die zweite Zahl des IP-Bereichs muss größer sein als die erste.';
fcpm='Die Zahl im Eingabefeld für die Schnittstelle muss zwischen 1 und 65535 liegen.';
fd1='Firewall > DMZ'; 
fd2='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung.'; 
fd3='Verwenden Sie diese Funktion nur zeitweise.'; 
fd4='Der DMZ-Computer ist nicht vor Hacker-Angriffen geschützt. Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das Eingabefeld unten ein, und wählen Sie "Aktivieren". Klicken Sie auf "Absenden", um die Änderung in Kraft zu setzen.'; 
fd5='IP-Adresse des virtuellen DMZ-Host'; 
fd6='Statische IP-Adresse';  
fd7='Private IP';  
fd8='Aktivieren'; 
fd9='Firewall > DDNS'; 
fd10='Mit dynamischer DNS können Sie Internet-Nutzern einen festen Domänennamen (anstatt einer sicher immer wieder ändernden IP-Adresse) zuteilen, indem Sie Ihren Router und die Anwendungen in den virtuellen Servern des Routers von jedem Ort über das Internet zugänglich machen, ohne dass die aktuelle IP-Adresse bekannt sein muss. Ihr Kabelloser Router unterstützt dynamisches DMS über DynDNS.org ';
fd11='Sie müssen ein Konto einrichten, bevor Sie diesen Dienst nutzen können;';
fd12='Benutzername > '; 
fd13='Kennwort > '; 
fd14='Domänenname > '; 
fd15='Bitte geben Sie die IP-Adresse ein, bevor Sie die DMZ aktivieren'; fd16='Auto-update'; 
fmc1='Firewall > MAC-Adressfilter';
fmc2='Mit dieser Funktion richten Sie eine Liste zulässiger Clients ein. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen können. Bitte geben Sie für die Bestimmung der gelisteten Computer einen Benutzernamen ein. Der Benutzername darf keine Leer- oder Sonderzeichen enthalten.';    
fmc3='MAC-Adressfilter aktivieren';   
fmc4='MAC-Adressfilterliste';
fmc5='Blockieren';  
fmc6='Host';  
fmc7='MAC-Adresse';  
fmc9='Keine Eingabe einer Multicast MAC-Adresse möglich';
fmc12='Diese MAC-Adresse wurde bereits zugefügt!';
Add='Hinzufügen'; 
Del='Entfernen';
fmcipm='Entweder haben Sie nicht alle Hexadezimal-Ziffern eingegeben oder einige der eingegebenen Hexadezimal-Ziffern sind ungültig. Ein Hexadezimalzeichen ist entweder eine Zahl zwischen 0 und 9 oder ein Buchstabe zwischen A und F.';
fmn1='Firewall >';
fmn2='Ihr Router ist mit einer Firewall ausgestattet, die Ihr Netzwerk vor einer Reihe häufig vorkommender Hacker-Attacken schützt, darunter PoD (Ping of Death) und DoS-Angriffe (Denial of Service). Sie können die Firewall bei Bedarf abschalten. Dadurch ist Ihr Netzwerk Angriffen nicht völlig schutzlos ausgeliefert; die Gefahr unbefugter Eingriffe wächst jedoch. Daher sollten Sie die Firewall weitmöglichst aktiviert lassen.'; 
fmn3='Firewall aktivieren/deaktivieren >';
Disable='Deaktivieren';
fp1='Firewall > WAN Ping-Blockierung';
fp2='<b>ERWEITERTE FUNKTION!</b> Sie können den Router so einstellen, dass er auf ICMP-Pings (Pings an der WAN-Schnittstelle) nicht reagiert. Dadurch erhöht sich Ihre Sicherheit.'; 
fp3='ICMP-Ping blockieren >';  
fs1='Firewall > Sicherheitsprotokoll';
fs2='Der Router protokolliert alle routerinternen Aktivitäten wie das An- und Abmelden von Computern und Versuche aus dem Internet, auf den Router zuzugreifen. Das Protokoll kann unten angezeigt werden.'; 
fs3='Protokolldatei';
Save='Speichern';
Clear='Löschen';
Refresh='Aktualisieren';  
fv1='Firewall > Virtuelle Server';
fvipm='Entweder haben Sie nicht alle IP-Adressen eingegeben \n oder einige der eingegebenen Zahlen sind ungültig. \n Die Zahl im Eingabefeld für die IP-Adresse muss zwischen 0 und 254 liegen.';
fvrm='Die öffentliche Schnittstelle kann nicht auf 88 gesetzt werden, da es sonst zu einem Konflikt mit dem Internetdienst des kabellosen Routers kommt.';
fvipr='Der interne Schnittstellenbereich ist nicht korrekt.';
fvppr='Der private Schnittstellenbereich ist nicht korrekt.';
fv2='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router zum internen Netzwerk aktivieren.'; 
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
fv200='Eingabe löschen ';
Description='Beschreibung';
Inb='Interne Schnittstelle';  
Type='Typ';  
Pipa='Private IP-Adresse ';  
Pport='Private Schnittstelle';  
htop='oben'; 
h1='Hilfe';
h2='FACHGLOSSAR';  
h3='<b>Administrator</b> Ein Administrator ist für die Wartung eines Netzwerks verantwortlich. Bei diesem Router die Person, die ihn einrichtet und seine Einstellungen verändert.';  
h4='<b>Client</b> Computer im Netzwerk, der die Dienste des Routers nutzt, zum Beispiel den automatischen DHCP-Server und die Firewall.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dieses Protokoll konfiguriert die TCP/IP-Einstellungen jedes Computers im SoHo-Netzwerk automatisch.';  
h6='<b>DFÜ</b> Verbindung, die über das öffentliche Telefonnetz zustande kommt.'; 
h7='<b>DMZ</b> Virtuelle Zone im Router, die von seiner Firewall nicht geschützt wird.  Es kann jeweils nur ein Computer in die DMZ-Zone versetzt werden.';   
h8='<b>DNS-Serveradresse</b> DNS steht für Domain Name System (Domänen-Namensystem). Mit DNS können Internet-Hostrechner einen Domänennamen (zum Beispiel belkin.de) und mehrere IP-Adressen wie 192.34.45.8 besitzen. DNS-Server unterhalten eine Datenbank, in denen die Hostrechner und ihre jeweiligen Domänennamen und IP-Adressen verzeichnet sind. Wird ein Domänenname abgefragt (zum Beispiel durch die Eingabe von "belkin.de" in Ihrem Browser) wird der Benutzer mit der entsprechenden IP-Adresse verbunden. Die Computer in Ihrem Netzwerk zu Hause verwenden die DNS-Serveradresse des DNS-Servers, den Ihnen Ihr Provider zugewiesen hat.';  
h9='<b>DSL-Modem</b> DSL ist die Abkürzung von "Digital Subscriber Line" (Digitale Teilnehmerleitung). DSL-Modems nutzen die vorhandene Telefonleitung zur Datenübertragung mit hoher Geschwindigkeit.';  
h10='<b>Dynamische IP</b> IP-Adresse, die von einem DHCP-Server automatisch zugewiesen wurde.';  
h11='<b>Ethernet</b> Standard für Computernetzwerke. Ethernet-Netzwerke verbinden Computer durch spezielle Kabel und Hubs und ermöglichen Datenübertragungen mit bis zu 10 Millionen Bit pro Sekunde (Mbit/s).';  
h12='<b>Firewall</b> Elektronische Schwelle, die den Zugriff Unbefugter auf bestimmte Dateien oder Computer in einem Netzwerk verhindert.';  
h13='<b>Firmware</b> Software, die permanent im Arbeitsspeicher gespeichert ist. Wichtige Programme, die auch beim Abschalten des Systems im Speicher bleiben. Firmware kann leichter als Hardware verändert werden, ist aber dauerhafter als die Software auf einer Festplatte.';  
h14='<b>IP-Adresse</b> IP steht für "Internet Protocol" (Internet-Protokoll). IP-Adressen bestehen aus vier Zahlen, die durch Punkte voneinander getrennt werden. Die Zahlenfolge kennzeichnet jeweils einen bestimmten, eindeutigen Host-Computer im Internet. Beispiel: 192.34.45.8.';  
h15='<b>ISDN</b> Kürzel für "Integrated Services Digital Network". Digitale Telekommunikationsverbindungen, die sowohl Sprach- als auch digitale Netzwerkdienste bei Raten bis zu 128 K bieten. Sie sind wesentlich schneller und zuverlässiger als analoge Hi-Speed Verbindungen per Modem. ISDN-Leitungen werden in der Regel von Telefongesellschaften angeboten.';  
h16='<b>ISP</b> Abkürzung für Internet Service Provider (Internet-Dienstanbieter, Provider). Der ISP stellt die Verbindung für Einzelpersonen, Unternehmen und Organisationen zum Internet bereit.';  
h17='<b>ISP-Gateway-Adresse</b> (siehe auch ISP). Die ISP-Gateway-Adresse ist eine IP-Adresse für den Internet-Router des Providers. Diese Adresse wird nur für Kabel- oder DSL-Modems benötigt.';  
h18='<b>LAN</b> Local Area Network (lokales Netzwerk). Als LAN wird eine Gruppe von Computern und Geräten bezeichnet, die auf relativ kleiner Fläche miteinander verbunden sind (zum Beispiel in einem Haus oder Büro). Ihr Netzwerk zu Hause ist ein solches LAN.';  
h19='<b>MAC-Adresse</b> MAC steht für Media Access Control (Medienzugangskontrolle). MAC-Adresse ist die Bezeichnung für die Hardwareadresse eines Geräts, das mit einem Netzwerk verbunden ist.';  
h20='<b>MTU</b> Maximum Transmission Unit (maximale Übertragungseinheit). Die größte Datenmenge, mit auf einem bestimmten physikalischen Medium übertragen werden kann.';  
h21='<b>NAT</b> Network Address Translation (Netzwerkadressübersetzung). Durch dieses Verfahren können sich alle Computer in Ihrem Heimnetzwerk eine IP-Adresse teilen. Durch die NAT-Funktionalität des HomeConnect Heimnetzwerk-Gateways können alle Computer in Ihrem Heimnetzwerk auf das Internet zugreifen, ohne dass Sie mehrere IP-Adressen von Ihrem Provider beziehen müssen.';  
h22='<b>Schnittstelle (Port)</b> Logischer Kanal, der durch seine eindeutige Schnittstellennummer gekennzeichnet ist. Anwendungen warten an bestimmten Schnittstellen auf Daten, die für sie bestimmt sein könnten.'; 
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet (PPP-Protokoll über Ethernet). Das PPP-Protokoll ist ein Verfahren zur sicheren Datenübertragung, das ursprünglich für DFÜ-Verbindungen entwickelt wurde. PPPoE setzt dieses Verfahren in Ethernet-Netzwerken um.';  
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol (PPTP-Tunnel-Protokoll) Eine Version des PPP-Protokolls, das Datenpakete, die für ein bestimmtes Netzwerk formatiert wurden, zu Paketen für ein anderes Protokoll umformen kann. Durch dieses Tunnelverfahren können TCP/IP-Daten auch über TCP/IP-fremde Netzwerke übertragen werden. PPTP kann zur Vernetzung unterschiedlicher physikalischer Netzwerke mit dem Internet als Mittler dienen.';  
h25='<b>SNTP</b> Simple Network Time Protocol (Einfaches Netzwerkzeitprotokoll) Kommunikationsstandard, der die Übertragung von Echtzeitdaten über ein Netzwerk oder das Internet ermöglicht.';
h26='<b>SPI</b> Stateful Packet Inspection (Paketstatus-Überprüfung). SPI ist die Bezeichnung für ein Internet-Sicherheitsverfahren in Industriequalität, das vom HomeConnect Heimnetz-Gateway bereitgestellt wird. Unter SPI dient der Gateway als Firewall, die Ihr Netzwerk vor Computerhackern schützt.';  
h27='<b>Statische IP</b> IP-Adresse, die manuell konfiguriert wird und sich nicht ändert.';  
h28='<b>Subnet Mask</b> Als Subnet Mask wird eine Folge von vier Zahlen bezeichnet, die wie eine IP-Adresse aufgebaut ist. In den vom Provider bereitgestellten TCP/IP-Daten sind oft auch Subnet Masks enthalten. Subnet Masks dienen zur Erstellung von IP-Adressen, die nur innerhalb eines bestimmten Netzwerks gelten (anders als die IP-Adressen im Internet, die von der Organisation InterNIC zentral vergeben werden).';  
h29='<b>TCP</b> Transmission Control Protocol (Übertragungskontrollprotokoll). Das gängigste Protokoll für die Internet-Transportschicht. TCP ist verbindungsorientiert und datenstromorientiert und sorgt für zuverlässige Kommunikation über paketvermittelte Netzwerke.';  
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol (Übertragungskontrollprotokoll/Internet-Protokoll). Das Standardprotokoll zur Datenübertragung im Internet.';  
h31='<b>UDP</b> User Datagram Protocol. Kommunikationsprotokoll für die Internet-Vermittlungsschicht, Transport- und Sitzungsschicht, das es möglich macht, eine Datagramm-Meldung von einem Computer an eine Anwendung zu versenden, die auf einem anderen Computer läuft. Anders als TCP ist UPD nicht verbindungsorientiert und gewährleistet keine zuverlässige Kommunikation. Die jeweilige Anwendung muss Fehler selbst verarbeiten und die Zuverlässigkeit der Datenvermittlung überprüfen. '; 
h32='<b>WAN</b> Wide Area Network (Überregionales Netzwerk). Netzwerk, das Computer, die sich zum Beispiel in verschiedenen Gebäuden, Städten oder Ländern befinden, weiträumig miteinander verbindet. Das bekannteste Beispiel für ein WAN ist das Internet.';  
h33='<b>WAN IP-Adresse</b> Die IP-Adresse, die der Provider dem Router zuweist.';  
h34='<b>WLAN</b> Wireless Local Area Network (Kabelloses lokales Netzwerk). Lokales Netzwerk, das Computer über Funk miteinander verbindet (zum Beispiel 802.11b)'; 
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
i9b='WLAN nicht verfügbar';
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
i27='Um Einstellungen ändern zu können, müssen Sie sich anmelden.'; 
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
ld3='Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Computer angegeben, die mit dem Netzwerk verbunden sind. Wenn für einen Computer kein Hostname festgelegt ist, ist das entsprechende Hostnamen-Feld leer. Mit "Aktualisieren" können Sie die Liste aktualisieren.'; 
ld4='IP-Adresse'; 
ld5='Hostname';
ld6='MAC-Adresse'; 
lm1='LAN';
lm2='Ihr Router ist mit einem DHCP-Server ausgestattet, der jedem Computer im Netzwerk automatisch eine IP-Adresse zuweist. Die Werkseinstellungen für den DHCP-Server funktionieren für die meisten Anwendungen. Sie können die Einstellungen jedoch bei Bedarf verändern.'; 
lm3='Folgende Änderungen können durchgeführt werden:';
lm4='- Ändern der internen IP-Adresse des Routers. Standardeinstellung = 192.168.2.1';
lm5='- Ändern der Subnetzmaske. Standardeinstellung = 255.255.255.0';
lm6='- DHCP-Serverfunktion aktivieren/deaktivieren. Vorgabe= AN (Aktiviert)';
lm7='- Einstellen der Start- und der Endadresse des IP-Pools. Vorgabe = Startadresse: 2 / Endadresse: 100';
lm8='- Vergabedauer für die IP-Adresse angeben. Vorgabe= Unbefristet ';
lm9='- Lokalen Domänennamen angeben. Standard = Belkin';
lm10='Zur Durchführung von Änderungen klicken Sie links in der Registerkarte "LAN" auf "LAN-Einstellungen".';
lm11='Der Router stellt eine Liste aller Client-Computer bereit, die mit dem Netzwerk verbunden sind. Um die Liste abzurufen, klicken Sie links auf der Registerkarte "LAN" auf "DCHP-Client-Liste".';
ls1='LAN > LAN-Einstellungen';
ls2='Hier können Sie das LAN (Lokales Netzwerk) einstellen. Damit die Änderungen umgesetzt werden, müssen Sie auf die Schaltfläche "Änderungen übernehmen" unten auf dem Bildschirm klicken.'; 
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
ls6='Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Hier müssen keine Änderungen durchgeführt werden.'; 
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
ls19='Die Zeit, während der der DHCP-Server die IP-Adresse für die einzelnen Computer reserviert.';  
ls20='Lokaler Domänenname';
Optional='Optional';  
ls21='Funktion zur Benennung eines Netzwerks.'; 
lsipm='Entweder haben Sie nicht alle Zahlen eingegeben, oder einige der eingegebenen Zahlen sind ungültig. Die Zahl in jedem Eingabefeld muss zwischen 0 und 255 liegen.';
lssm='Sie haben eine ungültige Subnetzmaske-Nummer eingegeben.';
lsnetm='Der IP-Pool muss sich im gleichen Subnet wie die Gateway-IP befinden. ';
lsendm='Die IP-Endadresse muss größer sein als die IP-Startadresse.';
lspoolm='Die LAN IP-Adresse darf sich nicht im DHCP-Adresspool befinden.';
lsipm2='Ungültige LAN IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
lsipm3='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 0 oder 127 sein.';
lsldnm='Ungültiger lokaler Domänenname';
lsipm4='Die eingegebene IP ist ungültig';
lsipalert='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
lsipm5='Die gewählte IP-Adresse muss unroutbar sein.\n  192.168.x.x (x steht für eine Zahl zwischen 0 und 255.) \n10.x.x.x (x steht für eine Zahl zwischen 0 und 255.)\n172.y.x.x (y steht für eine Zahl zwischen 16 und 31 und x für eine Zahl zwischen  0 und 255.)';
lsipc='Soll die LAN IP-Adresse wirklich geändert werden?';
lo1='Anmelden';
lo2='Um Einstellungen ändern zu können, müssen Sie sich mit einem Kennwort anmelden. Wenn Sie noch kein eigenes Kennwort eingestellt haben, können Sie dieses Feld leer lassen und auf "Absenden" klicken." ';
lo3='Kennwort';  
lo4='Vorgabe = leer lassen ';
Clear='Löschen';
Submit='Absenden';
le1='Belkin | Anmeldefehler';
lerror='Anmeldefehler!';  
Utilities='Dienstprogramme > ';
rs1='Reset Successfully';
rs2='Das Zurücksetzen ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rs3='Der Router wird neu gestartet';
rs4='Sekunden verbleiben.';  
rf1='Werkseinstellungen wiederherstellen erfolgreich'; 
rf2='Die Wiederherstellung ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rss1='Einstellungen wiederherstellen erfolgreich';
rss2='Die Wiederherstellung ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
ufy1='Werkseinstellungen';
ufy2='Mit dieser Option setzen Sie alle Routereinstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen. Um die Werkseinstellungen des Routers wiederherzustellen, klicken Sie auf die Schaltfläche "Werkseinstellungen".';
ufy3='ACHTUNG: Alle Einstellungen gehen verloren!\nMöchten Sie den Vorgang fortsetzen?';
ufy4='Die Wiederherstellung der Werkseinstellungen nimmt bis zu 60 Sekunden in Anspruch. Schalten Sie den Router während dieses Vorgangs nicht ab.';
ufy5='Werkseinstellungen werden nicht wiederhergestellt. Alle Einstellungen bleiben erhalten!';
ufy='Standardeinstellungen wiederherstellen';
ufe1='Dienstprogramme > Firmware aktualisieren';
ufe2='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Updates enthalten Verbesserungen und Lösungen für mögliche Probleme. Klicken Sie auf den Link unten, um zu überprüfen, ob für den Router neue Firmware verfügbar ist.';
ufe3=' HINWEIS: Bitte sichern Sie Ihre aktuellen Einstellungen, bevor Sie die Firmware-Version aktualisieren.';
ufe4='Klicken Sie hier,';
ufe5='um auf die Seite Aktuelle Einstellungen speichern/sichern zurückzukehren.';
ufe6='Neue Firmwareversion abfragen >';
ufe7='Firmware abfragen'; 
ufe8='Aktualisieren der Firmware >';
Update='Aktualisieren';
ufe9='Bitte geben Sie den Pfad der Aktualisierungsdatei an. Geben Sie hierzu Pfad und Namen der Datei ein oder klicken Sie auf "Durchsuchen", um die Datei zu suchen.';
ufe10='Sind Sie sicher, dass Sie die Aktualisierung fortsetzen möchten?';
ufe11='Am Ende der Aktualisierung reagiert der Router bis zu einer Minute lang nicht auf Befehle. Dies ist völlig normal. Schalten Sie den Router während dieser Zeit nicht ab, und führen Sie keinen Neustart durch.';
um1='Auf dieser Seite können Sie verschiedene Parameter des Routers verwalten und Verwaltungsfunktionen durchführen.';
um2='Kinderschutzfilter';
um3='Der Belkin Kinderschutzfilter schützt Sie und Ihre Kinder vor anstößigen Inhalten im Internet.'; 
um4='Der Belkin Kinderschutzfilter ist der Filter, den Sie eingerichtet haben. Jetzt können Sie Ihre Kinder selbst dann im Internet surfen lassen, wenn Sie nicht selbst vor dem Bildschirm sitzen.<br>&nbsp;';
um5='Neustart Router';
um6='Wenn der Router nicht mehr fehlerfrei funktioniert, kann oft ein Neustart Abhilfe schaffen. Bei einem Neustart bleiben Ihre Konfigurationseinstellungen erhalten.'; 
um7='Werkseinstellungen';
um8='Mit dieser Option setzen Sie alle Routereinstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen.';
um9='Aktuelle Einstellungen Speichern/Sichern';
um10='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.';
um11='Vorherige Einstellungen wiederherstellen';
um12='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';
um13='Firmware aktualisieren';
um14='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Aktualisierungen enthalten verbesserte Funktionen und Lösungen für eventuelle Probleme.';
um15='Systemeinstellungen';
um16='Auf der Seite "Systemeinstellungen" können Sie ein neues Administratorkennwort festlegen';
um17=', die Zeitzone einstellen, die Fernverwaltung aktivieren und die NAT-Funktion ';
um18='des Routers ein- oder ausschalten.';
upc1='Dienstprogramme > Kinderschutzfilter';
upc2='Der Belkin Kinderschutzfilter schützt Sie und Ihre Kinder oder Mitarbeiter vor anstößigen Inhalten im Web. Der Kinderschutzfilter ist so voreingestellt, dass viele Arten von Web-Inhalten gefiltert werden. Sie können die Einschränkungen jedoch lockern oder verschärfen. Jede Website kann ohne großen Aufwand so eingestellt werden, dass sie stets blockiert oder stets zugelassen wird.';
upc3='Ihre Lizenz für den Kinderschutzfilter ist ';
upc4='DE-AKTIVIERT'; 
upc5='NICHT-AKTIVIERT';
upc6='AKTIVIERT';
upc7='Wenn Sie die Lizenz-Dialoge für den Kinderschutzfilter abstellen möchten, klicken Sie hier:';
upc8='ABGELAUFEN';
upc9='Your subscription will expire in ';
days='Tagen';
upc10='Kontendaten';
Advanced='Erweitert';
Apply='Übernehmen';
upc11='Kontendaten aktualisieren';
upc12='Bericht';
upc13='Sie sind derzeit';
upc14=' am Berichtdienst angemeldet.';
not='nicht';
upc15='Klicken Sie hier, um ein Beispiel abzurufen, das Ihnen die Berichtfunktion erläutert.';
upc16='Musterbericht';
upc17='Klicken Sie hier, um die Berichtfunktion zu abonnieren.';
upc18='Jetzt Lizenz erwerben';
upc19='Klicken Sie hier, um Ihren Bericht anzuzeigen.';
upc20='Bericht anzeigen';
upc21='Kinderschutzfilterstatus';
upc22='Kinderschutzfilter Aktivieren/Deaktivieren.';
upc23='Web Filter ist ';
upc24='E-Mail-Benachrichtigung';
upc25='Bitte benachrichtigen Sie mich per E-Mail, wenn den Kinderschutzfilter außer Kraft gesetzt wurde.';
upc26='E-Mail ist ';
upc27='Vorgaben ändern';
upc28='Klicken Sie hier, um die Vorgaben für Ihren Kinderschutzfilter zu überprüfen oder zu ändern';
upc29='Lizenzierung des Kinderschutzfilters';
upc30='Wenn Sie sich für den Kinderschutzfilter von Belkin anmelden möchten, klicken Sie bitte auf die unten stehende Schaltfläche.'; 
upc31='Sie besitzen <b>KEINE</b> Lizenz für den Kinderschutzfilter.';  
upc32='Kinderschutzfilter verlängern';
upc33='Ihre Lizenz läuft bald ab. Bitte klicken Sie hier, um die Lizenz zu verlängern.';
upc34='Jetzt verlängern';
upc35='URL ist leer';
Modify='Ändern';
upa1='Dienstprogramme &gt; Kinderschutzfilter: Kontendaten';
upa2="Hier können Sie Ihre Benutzerdaten für den Kinderschutzfilter ändern, zum Beispiel die E-Mail-Adresse für Benachrichtigungen und das Administratorkennwort für den Kinderschutzfilter.";
upa3='E-Mail-Adresse für Mitteilungen ändern.';
upa4='Aktuelle E-Mail-Adresse'; 
upa5='Neue E-Mail-Adresse eingeben'; 
upa6='Neue E-Mail-Adresse erneut eingeben';
upa7='Administratorkennwort für Kinderschutzfilter ändern.';
upa8='Neues Kennwort eingeben';
upa9='Neues Kennwort erneut eingeben';
upa14='E-Mailadressen können nicht auf Null gestellt werden';
Change='Ändern';
Stop=Apply;
upad1='Dienstprogramme &gt; Weitere Einstellungen für den Kinderschutzfilter';
upad2="Der Belkin Kinderschutzfilter fordert für jede aufgerufene Website eine Internet-Einstufung durch unseren Partner Cerberian an. Normalerweise liegt die Antwortzeit unter einer Sekunde, so dass keine Verzögerungen entstehen. Wenn Sie jedoch eine unbekanntere Site aufrufen, die noch nicht in der Partnerdatenbank enthalten ist, wird die Site dynamisch bewertet. Je nachdem, wie schnell die Site geladen wird, kann dies einige Sekunden dauern. Für den Fall, dass die Antwortzeit das unten angegebene Limit überschreitet, kann der KINDERSCHUTZFILTER folgendermaßen konfiguriert werden: Alle Sites bei einer Zeitüberschreitung zulassen, oder: - Alle Sites bei einer Zeitüberschreitung blockieren.";
Timeout='Zeitlimit';
upad3='Zeitlimit nach Wartefrist von';
upad4='Sekunden für eine Antwort';
upad5='Voreingestellte Reaktion bei Zeitüberschreitung';
upad6='Je nach der voreingestellten Reaktion bei Zeitüberschreitungen blockiert der Router alle Webaufrufe oder lässt sie zu.';
upad7='Bei Zeitüberschreitung alle Sites zulassen.';
upad8='Alle Sites bei einer Zeitüberschreitung blockieren.';
upr1='Dienstprogramme > Kinderschutzfilter: Konto aktualisieren';
upr2='Diese Funktion wird nur dann benötigt, wenn die Daten für Ihre KINDERSCHUTZFILTER-Lizenz fehlerhaft sind.<br>Wenn Sie auf diese Schaltfläche klicken, lädt der Router alle Konteninformationen von Belkin herunter und aktualisiert sie.<br>Um Ihre Daten für den KINDERSCHUTZFILTER zu aktualisieren, klicken Sie auf Aktualisieren:';
uprev1='Dienstprogramme > Vorherige Einstellungen wiederherstellen';
uprev2='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';  
Restore='Wiederherstellen';
uprev3='Geben Sie den Namen der Datei an, die die gesicherten Einstellungen enthält.';
uprev4='Möchten Sie die Wiederherstellung der Einstellungen fortsetzen?';
uprev5='Nach der Wiederherstellung der Einstellungen reagiert\n der Router bis zu einer Minute lang nicht auf Befehle. \n\nDies ist völlig normal. Währenddessen darf der Router nicht abgeschaltet werden.';
ur1='Dienstprogramme > Neustart Router ';
ur2='Bisweilen kann es notwendig sein, den Router zurückzusetzen oder neu zu starten, falls dieser nicht mehr erwartungsgemäß funktioniert. Bei einem Neustart bleiben die Konfigurationseinstellungen erhalten. Klicken Sie unten auf die Schaltfläche "Neustart Router", um den Router neu zu starten.';
ur3='Neustart Router';
ur4='Sind Sie sicher, dass Sie den Router neu starten möchten? Der Router-Neustart wirkt sich nicht auf die Konfiguration aus.';
ur5='Der Neustart des Routers dauert etwa 60 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.';
usave1='Dienstprogramme > Aktuelle Einstellungen sichern/Sicherheitskopie erstellen';
usave2='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.'; 
Save='Speichern';
usys1='Dienstprogramme > Systemeinstellungen';
usys2='Administratorkennwort: '; 
usys3='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
usys4='Aktuelles Kennwort eingeben';  
usys5='Neues Kennwort eingeben';  
usys6='Neues Kennwort bestätigen';  
usys7='Anmeldezeitlimit';
usys8='(1-99 Minuten)'; 
usys9='Zeit and Zeitzonen: '; 
January='Januar'; February='Februar'; March='März'; April='April'; May='Mai'; June='Juni'; July='Juli'; August='August'; September='September'; October='Oktober'; November='November'; December='Dezember';
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
usys69='Die Fernverwaltung ermöglicht das Ändern Ihrer Routereinstellungen von jedem Ort aus, an dem sich ein Internet-Anschluss befindet. Bevor Sie diese Funktion aktivieren,';
usys70='SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN.';
usys71='Beliebige IP Adresse zur Fernverwaltung des Routers zulassen.';  
usys72='Nur diese IP-Adresse zur Fernverwaltung des Routers zulassen';  
usys73='NAT-Aktivierung:';    
usys74='Ermöglicht die Deaktivierung der NAT-Funktion. Normalerweise sollte diese Funktion NICHT deaktiviert werden. ';
usys75='NAT Enable / Disable';
usys76='UPnP-Aktivierung:';   
usys77='Ermöglicht die Deaktivierung der UPNP-Funktion des Routers. Wenn Sie Anwendungen benutzen, die UPnP unterstützen, können diese Anwendungen automatisch den Router konfigurieren, wenn Sie UPnP aktivieren. ';
usys78='UPnP Aktivieren / Deaktivieren ';
usys79='Aktivieren der Automatischen Firmware-Aktualisierung:';
usys80='Ermöglicht Ihnen die automatische Suche nach Firmware-Aktualisierungen für den Router.';
usys81='Automatische Firmware-Aktualisierung Aktivieren / Deaktivieren ';
usys82='Das aktuelle Kennwort ist ungültig ';
usys83='Neues Kennwort und bestätigtes neues Kennwort stimmen nicht überein ';
usys84='Anmeldezeitlimit-Bereich: 1-99';
usys85='Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 3 und höchstens 12 Zeichen bestehen.';
usys86='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
usys87='Es wird dringend empfohlen, ein Administratorkennwort festzulegen.';
usys88='Primärer NTP-Server';
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
usysipm='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die Nummern sollten zwischen 0 und 255 liegen';
usysb1='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
vjs1='Ungültige IP-Adresse, zu lang. Bitte erneut prüfen.';
vjs2=' Ungültige IP-Adresse, fehlender Punkt \'.\' , Bitte erneut prüfen!';
vjs3='Ungültige IP-Adresse, fehlende Zahlen zwischen den Punkten \'.\'. Bitte erneut prüfen.';
vjs4="Ungültige IP-Adresse, überflüssiger Punkt '.' , Bitte erneut prüfen!"
vjs5='Ungültige IP-Adresse, Nummern zwischen \'.\'  sind zu groß. Bitte erneut prüfen!';
vm1='Ungültiges Zeichen:';
vm2='an Position';
vm3='Gültig ist ';
vjs6='Ungültiges Jahresformat, bitte eingeben als (z.B. 2002).';
vm4='Ungültige Zahl'; 
vjs8='Ungültig, zulässig ist der Zahlenbereich 1970 bis 2037.';
vjs9='Ungültiges Monatsformat, bitte eingeben als (01 bis 12).';
vjs10='Bitte Jahr und Monat zuerst eingeben';
vjs11='Ungültiges Tagesformat. Bitte als (01 bis 31) eingeben, für bestimmte Monate nur (01 bis 28).';
vjs12='Ungültiges Stundenformat, bitte eingeben als (00 bis 23).';
vjs13='Ungültiges Minutenformat, bitte eingeben als (00 bis 59).';
vjs14='Ungültige MTU; MTU muss zwischen 576 und 1492 liegen.';
vjs15='Ungültige MRU; MRU muss zwischen 128 und 65535 liegen';
vjs16="Ungültige IP: ";  vjs161=" nicht in ";   vjs162=" Netmask";
vjs17='Sie haben zwei verschiedene Kennwörter eingeben. Bitte nochmals überprüfen!';
vjs18='Bitte Schnittstellen-Startnummer eingeben.';
vjs19='Die Schnittstellen-Startnummer muss kleiner sein als die Endnummer.';
vjs20='Ungültige Schnittstellennummer. Für Schnittstellen sind nur positive ganze Zahlen zulässig.';
vjs21='Ungültige Länge';
vjs22='Ungültiges Format an Position'; vjs221='! Gültig ist:';
vjs23='Ungültige MAC-Adresse; dies ist eine Rundsendeadresse.';
vjs24='Ungültige MAC-Adresse; dies ist eine Nulladresse.';
vjs25='Ungültige MAC-Adresse; dies ist eine Sammeladresse.';
vjs26='Ungültige IP-Start- und Endadresse; IP-Endadresse muss größer sein als IP-Startadresse';
vjs27='Ungültige Zahl! Gültig ist der Bereich 1 bis 65535';
vjs28='Ungültiges Netmask-Format.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Ungültige IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
vjs31='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 127 sein.';
vjs32='Ungültige LAN IP-Adresse (0.0.0.0).';
vjs33='Ungültige LAN IP-Adresse. Adresse muss unter 224.0.0.0 liegen.';
vjs34='Gültiger Zahlenbereich: ';
vp1='Diese Website wird vom KINDERSCHUTZFILTER blockiert.';
vp2=' wird vom KINDERSCHUTZFILTER ausgeschlossen und ist eingestuft als: ';
vp3='Wenn Sie mit der Einstufung nicht einverstanden sind und eine erneute Einstufung wünschen, klicken Sie auf Nicht einverstanden:';
vp4='Wenn Sie die Regeln für den KINDERSCHUTZFILTER ändern möchten, klicken Sie auf Ändern:';
vp5='Wenn Sie die Regeln eine Stunde lang außer Kraft setzen möchten (nur für diesen Computer), geben Sie Ihr Kennwort ein, und klicken Sie auf Temporäre Filterdeaktivierung:';
Disagree='Nicht einverstanden';
Change='Ändern';
Override='Temporäre Filterdeaktivierung';
wc1='WAN > Verbindungstyp';
wc2='Verbindungstyp wählen:'; 
wc3='Dynamisch'; 
wc4='Dynamische Verbindungen sind der gängigste Verbindungstyp. Wenn Sie ein Kabelmodem verwenden, arbeiten Sie vermutlich mit einer dynamischen Verbindung. Wenn Sie ein Kabelmodem besitzen oder Ihren Verbindungstyp nicht kennen, sollten Sie diese Option verwenden.';  
wc5='Statisch'; 
wc6='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Verwenden Sie diese Option nur, wenn Sie von Ihrem Provider eine IP-Adresse erhalten haben, die sich nicht ändert.';  
wc7='PPPoE'; 
wc8='Wenn Sie ein DSL-Modem verwenden oder Ihr Provider einen Benutzernamen und ein Kennwort für Sie festgelegt hat, arbeiten Sie mit dem Verbindungstyp PPPoE. Verwenden Sie diesen Verbindungstyp.';  
wc9='PPTP'; 
wc10='[nur europäische Länder]. Dieser Verbindungstyp ist in vielen europäischen Ländern üblich. Wenn Ihnen Ihr Provider mitgeteilt hat, dass Sie PPTP verwenden und Ihnen die erforderlichen PPTP-Daten übermittelt hat, verwenden Sie diese Option.'; 
wc11='Telstra BigPond'; 
wc12='[nur Australien] Teilnehmer an Telstra BigPond Kabel oder DSL müssen diese Option zur Konfigurierung der Verbindung verwenden.'; 
Next='Weiter >';
wds1='WAN > DNS';
wds2='Wenn Ihnen Ihr Internetanbieter (ISP) eine bestimmte DNS-Adresse zugewiesen hat, geben Sie die Adresse in diesem Fenster ein und klicken Sie auf "Änderungen übernehmen".'; 
wds3='Automatisch vom ISP'; 
wds4='DNS-Adresse';   
wds5='Sekundäre DNS-Adresse';   
wds6='DNS = DNS-Server (Domain Name Server). Server im Internet, der URLs (Universal Resource Locator - Universelle Quellenangabe) wie www.belkin.de in IP-Adressen auflöst.';
wds7='Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr Internet-Provider zugewiesen hat.';
wdy1='WAN > Verbindungstyp > Dynamische IP';
wdy2='Geben Sie die Daten für die dynamische IP unten ein, und klicken Sie auf "Änderungen übernehmen".';
wdy3='Hostname';  
wdy4='Hostname = Name, den manche Provider für die Verbindung mit Ihrem System verlangen.';  
wdy5='WAN MAC-Adresse ändern'; 
wdy6='Ungültiger Host-Name: ~!##$%^&*()=+{}[]|\'":;?/.<> ';
wmc1='WAN > MAC-Adresse';
wmc2='Bei manchen Providern ist es erforderlich, dass Sie die MAC-Adresse des Netzwerkadapters von Ihrem Computer klonen (in den Router kopieren). Wenn Sie nicht wissen, ob das bei Ihnen der Fall ist, klonen Sie einfach die MAC-Adresse des Computers, der vor der Routerinstallation ursprünglich an das Modem angeschlossen war. Das Klonen der MAC-Adresse verursacht keine Probleme im Netzwerk.';
wmc3='Wan Mac-Adresse'; 
wmc4='MAC-Adresse des Computers klonen';  
wmc5='Klonen';
wm1='Internet/WAN';
WAN='WAN';
wm2='Auf der Registerkarte "Internet/WAN" richten Sie den Router für die Verbindung zu Ihrem ISP ein. Der Router kann die Verbindung zu fast jedem Provider-System herstellen, sofern Sie die Routereinstellungen an den Verbindungstyp des ISP angepasst haben. Für die Einrichtung des Routers zur Verbindung mit dem Provider klicken Sie links auf dem Bildschirm in der Registerkarte "Internet/WAN" auf "Verbindungstyp".';
wm3='Unterstützte Verbindungstypen: ';
wm4='<b>Dynamisch:</b> einschließlich der Provider, die einen Hostnamen verlangen oder die Verbindung an eine bestimmte MAC-Adresse koppeln.';
wm5='<b>Statische IP-Adresse:</b> Der Router unterstützt die Verbindung zu einem Provider, der eine statische IP-Adresse zuweist.'; 
wm6='<b>PPPoE:</b> Der Router unterstützt einen dynamischen Verbindungstyp, der eine PPPoE-Anmeldung zur Authentifizierung verlangt.'; 
wm7='<b>PPTP:</b> Nur für Teilnehmer in Europa. Der Router unterstützt Verbindungen zu europäischen Providern, die mit dem PPTP-Protokoll arbeiten.';
wm8='<b>Telstra BigPond:</b>';
wm9='Nur für Australien. Der Router unterstützt die Verbindung zu Telstra BigPond.'; 
wpe1='WAN > Verbindungstyp > PPPoE';
wpe2='Geben Sie die Daten für die PPPoE-Einstellungen unten ein und klicken Sie auf "Änderungen übernehmen".';
wpe3='Benutzername';   
wpe4='Kennwort erneut eingeben';   
wpe5='Dienstname (optional)';    
wpe6='MTU (576-1492)';    
wpe7='Lassen Sie die MTU-Einstellung unverändert, es sei denn, Ihr Provider verlangt ausdrücklich eine andere Einstellung als 1432.';
wpe8='Verbindung nach';
wpe9=' Minuten ohne Aktivität unterbrechen.';
idlerangerro='Passivzeitlimit: ungültige Zahlenangaben.\n Sie können Zahlen zwischen 1 und 99 eingeben.';
wpe10='Ungültiges Zeichen:: <>&';
pm='Ihr Dienst konnte das eingegebene Kennwort nicht bestätigen. Bitte überprüfen Sie, ob Sie das Kennwort richtig eingegeben haben.';
wpe11='Ungültiger MTU-Wert';
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
wpp11=' Minuten ohne Aktivität unterbrechen.';
wpp12='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben  ';
wpp13='Bitte geben Sie Ihr PPTP-Konto an.';
wpp14='Bitte geben Sie das Kennwort erneut ein!';
wpp15='Bitte geben Sie das Kennwort ein.!';
ws1='WAN > Verbindungstyp > Statische IP';
ws2='Geben Sie die Daten für die statische IP unten ein und klicken Sie auf "Änderungen übernehmen".';
ws3='IP-Adresse';  
ws4='Subnetzmaske';   
ws5='ISP Gateway Address (Gateway-Adresse des Providers)';   
ws6='Mein Provider hat mir mehrere statische IP-Adressen zugeteilt';  
ws7='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben';  
dm='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern gültig. Zulässig sind Zahlen zwischen 0 und 255.';
sm='Sie haben keine gültigen Zahlen für die Subnetzmaske eingegeben.';
ws8='Please enter/validate your DNS address settings on the following screen';
wsc1='Alias-IP-Adressenliste';  
im='Die Alias-IP-Adressenliste ist voll. Es können keine zusätzlichen Regeln erstellt werden.';
wt1='WAN > Verbindungstyp > Telstra BigPond';
wt2='Wenn Ihr Internet-Dienst von Telstra BigPond in Australien bereitgestellt wird, müssen Sie Ihre Daten in den folgenden Feldern eingeben. Diese Informationen werden von Telstra BigPond zur Verfügung gestellt.';
wt3='Wählen Sie Ihren Staat aus';
wt4='Benutzer entscheidet sich für manuelle Serveranmeldung'; 
wt5='Anmeldeserver'; 
Logout='Abmelden';
wt6='Bitte geben Sie Ihre Server-IP ein, oder wählen Sie Ihren Bundesstaat aus dem Menü aus.';
wla1='Funknetz > Als Access Point verwenden';
wlad1='Der Router kann als reiner Access Point eingerichtet werden, so dass alle Routing- und Firewallfunktionen abgestellt werden. Wählen Sie hierzu "Aktivieren", und geben Sie die gewünschte IP-Adresse für den Access Point ein.';
wlad2='aktivieren/deaktivieren';
wlae1='IP-Adresse festlegen';  
wlae2='Subnetzmaske';  
wlae3='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.'; 
wlae4='1) Funkkanäle von Router und Access Point müssen übereinstimmen.<br>'+
      '2) Sicherheitseinstellungen (WEP) von Router und Access Point müssen übereinstimmen.<br>'+
      '3) Wenn der MAC-Filter aktiviert ist, muss der Benutzer die WLAN MAC-Adresse(n) des Routers/Access Points ergänzen, damit Kommunikation zwischen diesen Geräten stattfinden kann.<br>';
wlc1='Funknetz > Kanal und SSID';
wlc2='Hier können Sie die Funkeinstellungen des Routers ändern. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. ';
wlc3='Funkkanal';
wlc4='SSID';  
wlc5='Funkmodus'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='SSID rundsenden';  
wlc10='Turbo Mode'; 
wlc11="Durch die Aktivierung des Turbo-Modus kann der Router (oder Access Point) Frame Bursting einsetzen, um eine maximale Durchsatzleistung vom Router oder Access Point zu den 802.11g-Clients zu erzielen. Der Turbo-Modus funktioniert bei 802.11g-Clients, die den Turbo-Modus unterstützen. 802.11g-Clients von Belkin mit aktuellen Treibern unterstützen den Turbo-Modus. Clients, die den Turbo-Modus nicht unterstützen, funktionieren normal, wenn der Turbo-Modus aktiviert ist.";
wlc12='Geschützter Modus';
wlc13="HINWEIS: Meistens wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus deaktiviert ist. Wenn Sie in einer Umgebung mit INTENSIVEM 802.11b-Datenverkehr oder -Interferenzen arbeiten, wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus eingeschaltet ist.";
wlc14='Aktueller Kanal';
wle1='Funknetz > Sicherheit';
wle2='Sicherheitsmodus';
wle3='WPA-PSK (kein Server)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(mit Radius-Server)';
wle7="Hier können Sie Sicherheits-/Verschlüsselungseinstellungen konfigurieren. Die Sicherheitseinstellungen sollten aktiviert sein, damit die maximale Sicherheit im kabellosen Netzwerk gewährleistet werden kann. WPA (Wireless Protected Access) ermöglicht dynamische Änderungen der Schlüssel und bietet die sicherste Lösung. In Funknetzumgebungen, in denen nicht alle Geräte WPA unterstützen, sollte WEP (Wired Equivalent Privacy) verwendet werden.";
wle8='(13 zweistellige Hexadezimalzahlen)';  
wle9='HINWEIS: ';
wle10='Um ein Hexadezimalpaar automatisch zu erstellen, aktivieren Sie das Feld links und geben Sie dort eine Kennfolge (Passphrase) ein. ';
PP='Kennfolge';
generate='erstellen';
errm='Bitte geben Sie eine Kennfolge ein.';
keym='Schlüssel ist unvollständig';
wle11='Schlüssel 1';  
wle12='Schlüssel 2'; 
wle13='Schlüssel 3'; 
wle14='Schlüssel 4';   
wle15='(zweistellige Hexadezimalzahlen)'; 
wle16='WPA/WPA2(with Server)';
wle17='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schlüssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
keym1=' ist nicht vollständig ';
keym2=' ist ungültig, bitte zuerst korrigieren!';
wlm1='Funknetz';
wlm2='Auf dieser Registerkarte können Sie die Funkeinstellungen des Routers bestimmen.';
wlm3='Kanal und SSID';
wlm4='Funkkanal und SSID (Name des kabellosen Netzwerks) einstellen';
wlm5='Sicherheit';
wlm6='Sicherheitseinstellungen des kabellosen Netzwerks wie WPA- oder WEP-Einstellungen ändern. ';
wlm7='Als Access Point verwenden';
wlm8='AP als Routerbetriebsmodus festlegen ';
wlm9='IP-Adresse festlegen';
wlm10='IP-Adresse für den AP festlegen.';
wlm11='MAC-Adresskontrolle'
wlm12='Richten Sie eine Liste zulässiger Clients ein, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
wlm13='Kabellose Bridge';
wlm14='Ermöglicht die Einrichtung von WDS-Brückenmodi.';
ww8='Bitte Radius-Schnittstelle eingeben.';
ww9='Die Radiusschnittstelle muss eine Zahl zwischen 1 und 65535 sein';
ww10='Bitte geben Sie den Radiusschlüssel ein';
ww11='Das Schlüsselintervall muss eine Nummer sein';
ww12='Das Schlüsselintervall sollte nicht länger als 60 Sekunden sein';
ww13='Authentifizierung';
ww1='WPA/WPA2 (mit Server)';
ww2='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schlüssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
ww3='Verschlüsselungsmodus';
ww4='Radius-Server';
ww5='Radius-Port';
ww6='Radius-Schlüssel';
ww7='Schlüsselintervall';
seconds='(Sekunden)';
wwp6='Pre-shared key (PSK) eingeben';
wwp7='Die Länge des PSK sollte zwischen 8 und 63 oder 64 Hex liegen';
wwp1='Der Standard ist TKIP';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (kein Server)';
wwp4=' Wireless Protected Access mit PSK (Pre-Shared Key): Der Schlüssel ist ein Kennwort, das entweder aus einem Wort, einem Satz oder eine Folge von Buchstaben und Zahlen besteht. Der Schlüssel muss zwischen <b>8</b> und <b>63</b> Zeichen lang sein und kann Leer- und Sonderzeichen oder nur <b>64</b> Hexadezimalzeichen (0-F) beinhalten. Jeder Client, der ins Netzwerk eingebunden wird, muss denselben Schlüssel verwenden (Pre-Shared Key: PSK).';
wwp5='Verdeckter PSK';
wlb1='Funknetz > Funkbrücke (Bridge)';
wlb2='Die Funkbrücke (WDS-System) verbindet kabellose Router und Access Points zur Erweiterung eines Netzwerks.';
wlb3='Funkbrücke aktivieren.';
wlb4='(durch die Aktivierung dieser Funktion können weitere Access Points eine Verbindung zu diesem Access Point herstellen.)';
wlb5='Vorgabe: aktiviert';
wlb6='Nur bestimmte Access Points können Verbindung herstellen.';
wlb7="(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)";
wlb7="(MAC-Adresse des zu verbindenden Access Points eingeben. Wenn diese Option markiert ist, kann jeder Access Point eine Verbindung herstellen. Hinweis: Für den Verbindungsaufbau zwischen Access Points muss mindestens ein Access Point die MAC-Adresse des anderen Access Points aufrufen. Tipp: die MAC-Adresse finden Sie heraus, wenn Sie an einer kabellosen Client-Karte eine Standortübersicht abrufen.)";
wlb8='Verbindungsmöglichkeit für kabellose CLIENTS deaktivieren.';
wlb9='(Diese Funktion darf nur verwendet werden, wenn der Access Point ausschließlich zur kabellosen Verbindung mit anderen Access Points dient.)';
wlb10='Ungültige';
wlbss1='Standortübersicht';
BSSID='BSSID';
wlbss2='Netzwerktyp';
wlbss3='Verschlüsselung';
wlbss4='Select';
wlbss5='Keine verfügbare BSSID gefunden.'; 
wlbss6='Alle 4 Felder sind belegt; entfernen Sie eins, bevor Sie ein neues auswählen!';
wlq1='QoS (Quality of Service)-Einstellung';
wlq2='oS schützt wichtigen Daten in Ihrem Netzwerk, wie Multimediainhalte und "Voice over IP" (VoIP), so dass diese nicht mit anderen im Netzwerk gesendeten Daten kollidieren. Auf der Grundlage von 802.11e kann diese Funktion nach Wahl aus- oder eingeschaltet werden. Wenn Sie Multimediainhalte oder VoIP in Ihrem Netzwerk verwenden, sollte die QoS-Funktion aktiviert sein.<br>'; 
wlq3='QoS-Switch'; 
wlq4='Ermöglicht Ihnen, die QoS-Funktion an- oder abzuschalten.<br>'; 
wlac1='ACK-Modus'; 
wlac2=' Es gibt zwei ACK-Modi (Acknoledgement - Empfangsbestätigung), die für die beste Multimedialeistung in Ihrem Netzwerk eingesetzt werden können: Burst ACK und Immediate ACK. <br><br>'+
'Immediate ACK ist werksseitig voreingestellt und wird für den normalen Netzwerkbetrieb empfohlen. Die Änderung des ACK-Modus auf Burst ACK kann die Durchsatzraten beeinträchtigen. Verwenden Sie Immediate ACK, wenn "Long-Range"-Leistungen in Ihrem Netzwerk wichtig sind. <br><br>'+
'Burst ACK wird die Raten vermindern, da nicht jedes im Netzwerk versendete Paket bestätigt wird. Bei einer sehr guten Verbindung zwischen dem Router und dem Client kann mit Burst ACK die Durchsatzleistung erhöht werden. Wenn für eine Anwendung, wie bei mehrfachen datenintensiven Videodatenströmen, eine hohe Bandbreite benötigt wird, verwenden Sie den Modus Burst ACK. Bedenken Sie, dass die Leistung über längere Distanzen in diesem Modus beeinträchtigt werden kann. <br>';
wmac1='MAC-Adressenkontrolle einstellen'; 
wmac2=' Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen können, welche Computer für das kabellose Netzwerk zugelassen sind. Hinweis: Diese Liste betrifft nur Computer mit kabellosem Zugang. Die Liste kann so eingestellt werden, dass jedem Computer, mit dem versucht wird, auf das Netzwerk zuzugreifen und der nicht in der Liste aufgeführt wird, der Zugang verweigert wird. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adresse eines jeden Clients (Computers) in Ihrem Netzwerk angeben, um den Netzwerkzugriff für diesen zu ermöglichen. Mit der Sperrfunktion "Blockieren" können Sie den Netzwerkzugriff für die einzelnen Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu löschen oder hinzuzufügen.<br>'+
'1.  Erstellen einer Zugriffsliste <br>'+
 'Wählen Sie "Allow" (Erlauben) (1), um ein Liste der Computer zu erstellen, denen Sie den Zugang zum kabellosen Netzwerk erlauben.<br>'+
 '2. Geben Sie dann in ein freies Feld "MAC address" (3) (MAC-Adresse) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugang zum Funknetzwerk erlauben möchten und klicken Sie anschließend auf "Add" (4) (Hinzufügen).<br>'+
 '3. Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff erlauben möchten, eingetragen sind.'+
 '4. Klicken Sie auf "Apply Changes" (5) (Änderungen übernehmen), um den Vorgang zu beenden.<br><br>'+
'Erstellen einer Ausschlussliste <br>'+
'n der "Deny Access"-Liste (Ausschlussliste) bestimmen Sie, welche Computer KEINEN Zugang zum Netzwerk haben sollen. Jedem Computer in dieser Liste wird der Zugang zum kabellosen Netzwerk verweigert. Alle anderen haben diesen Zugriff.<br>'+
 '1.Wählen Sie "Deny" (2) (Ausschließen), um ein Liste der Computer zu erstellen, denen Sie den Zugang zum kabellosen Netzwerk verweigern.<br>'+
 '2. Geben Sie dann in ein freies Feld "MAC address" (3) (MAC-Adresse) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugang zum Funknetzwerk verweigern möchten und klicken Sie anschließend auf "Add" (4) (Hinzufügen).<br>'+
 '3.	Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff verweigern möchten, eingetragen sind.'+
 '4. Klicken Sie auf "Apply Changes" (Änderungen übernehmen) (5), um den Vorgang zu beenden.<br>'; //
wlmc1='Funknetz > MAC-Adressenkontrolle';
wlmc2='Mit der MAC-Adressenkontrolle können Sie eine Liste von Clients bestimmen, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
Allow='Zulassen';   Deny='Nicht Zulassen';  
wlmc7='Legen Sie zuerst fest, ob der MAC-Adressenliste der Zugang erlaubt oder verwehrt werden soll!';
wlmc6='Es können höchstens 16 MAC-Adressen eingegeben werden.';
wlmc5='Die korrekte MAC-Adresse muss folgendermaßen aussehen: xx:xx:xx:xx:xx:xx (wobei x eine Zahl zwischen 0-9 oder ein Buchstabe zwischen a-f ist).';
wlmc3="Ungültige MAC-Adresse";
wlmc4='Bitte zuerst korrigieren!';
ENTRY_FULL	= 'Alle Einträge sind belegt.\nBitte löschen Sie einige Einträge, und versuchen Sie es erneut.';
CLEAR_CONFIRM= 'Soll der Eintrag gelöscht werden? ';
CLEAR_ALL_CONFIRM = 'Sollen alle Einträge gelöscht werden?';
ERR_INTERNAL	= ' Interner Fehler: Bitte überprüfen Sie die JavaScript-Funktion --';
g1='Die "IP-Adresse" ist die interne IP-Adresse des Routers. Um die Konfigurations- '+ 
'Oberfläche zu öffnen, geben Sie diese IP-Adresse in die Adresszeile Ihres Browsers ein. Diese Adresse kann '+  
'kann bei Bedarf geändert werden. Geben Sie hierzu die neue IP-Adresse ein, und klicken Sie auf "Änderungen  '+  
'übernehmen". Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen. Beispiele für nicht routbare '+  
'IP-Adressen: ';
g2='192.168.x.x (x steht für eine Zahl zwischen 0 und 255).<br>';
g3='10.x.x.x (x steht für eine Zahl zwischen 0 und 255).<br>';
g4='172.y.x.x (y steht für eine Zahl zwischen 16 und 31, x für eine Zahl zwischen 0 und 255).<br>';
g5='Die Subnetzmaske muss nicht verändert werden '+
'. Bei Bedarf ist eine Änderung der Subnetzmaske möglich. Sie sollten sie jedoch nur dann verändern, '+
'wenn es hierfür einen bestimmten Grund gibt.<br>';
g6='DNS ist die Abkürzung für Domain Name Server (Domänennamen-Server). Ein Domänennamen-Server ist ein Server im '+ 
 'Internet, der URLs (Universal Resource Links - Universale Quellenangabe) wie www.belkin.de in IP-Adressen '+
'übersetzt. Bei vielen Providern ist eine Eingabe dieser Informationen in den Router unnötig. Das '+ 
'Feld "Automatisch vom Provider" sollte markiert sein, wenn Ihr Provider Ihnen keine spezifische '+
'DNS-Adresse zugeteilt hat. Wenn Sie mit einem statischen IP-Verbindungstyp arbeiten, müssen Sie eine '+
'spezifische DNS-Adresse und eine sekundäre DNS-Adresse angeben, damit die Verbindung richtig funktioniert Falls '+
'Sie mit einem dynamischen Verbindungstyp oder PPPoE arbeiten, müssen Sie wahrscheinlich keine DNS '+ 
'Adresse kennen. Um die DNS-Adresseinstellungen einzugeben, deaktivieren Sie die Funktion "Automatisch vom Provider" und '+
'eben Sie Ihre DNS-Adresse in das entsprechende Feld ein. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. <br>';
g7='Mit der DHCP-Serverfunktion wird die Einstellung eines Netzwerks sehr vereinfacht, weil jedem Computer im Netzwerk '+ 
'eine IP-Adresse zugeteilt wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. Wenn '+
'Sie den DHCP-Server deaktivieren, müssen Sie auf jedem Computer im Netzwerk manuell eine statische IP-Adresse einstellen'+
'. Der IP-Pool ist der IP-Adressbereich, der für eine dynamische Zuweisung '+
'an die Computer im Netzwerk reserviert ist. Der Standardbereich ist 2-100 (99 Computer). Wenn Sie '+
'diese Zahl möchten, geben Sie eine neue Start- und eine neue Endadresse ein, und klicken Sie auf "Apply Changes" (Änderungen übernehmen). <br>';
g8='Sie können einen lokalen Domänennamen (Netzwerknamen) für Ihr Netzwerk festlegen. Diese Einstellung muss normalerweise '+ 
'nicht geändert werden, soweit Ihrerseits kein bestimmter Grund vorliegt. Sie können den Namen für Ihr Netzwerk frei wählen, '+
'z. B. "MEIN NETZWERK". <br>';
g9='Dynamische IP';
g10='Die meisten Kabelmodems arbeiten mit einem dynamischen Verbindungstyp. '+ 
'Für die Verbindung zum Provider genügt es daher meistens, wenn Sie die Option "Dynamisch" wählen'+ 
'. Für manche dynamischen Verbindungstypen muss ein Hostname angegeben werden. Wenn Ihnen ein Hostname '+
'zugewiesen wurde, können Sie ihn im entsprechenden Feld eintragen Der Hostname wird Ihnen vom Provider zugewiesen. '+
'Bei bestimmten dynamischen Verbindungen müssen Sie die MAC-Adresse des PCs klonen, '+
'der ursprünglich mit dem Modem verbunden war. Klicken Sie hierzu auf den Link "Change WAN MAC address" (WAN MAC-Adresse ändern)'+
'. Wenn der Router korrekt eingerichtet ist, zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an. <br>';
g11='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet Falls Ihr Provider '+
'mit statischen IP-Adressen arbeitet, müssen Sie die IP-Adresse, die Subnetzmaske und die Provider-Gateway-'+
'Adresse kennen. Diese Informationen erhalten Sie bei Ihrem Provider. Meistens sind sie in den Anmeldeunterlagen '+ 
'enthalten Geben Sie die Angaben ein, und klicken Sie auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an.<br><br>'+
'Sollte Ihr Provider Ihnen mehr als eine statische IP-Adresse zuteilen, ist Ihr Router in der Lage, '+ 
'bis zu fünf statische WAN-IP-Adressen zu verwalten. Wählen Sie die Option "My ISP provides more than one static IP address" (Mein Provider hat mir mehrere statische IP-Adressen zugeteilt) '+
'und geben Sie die weiteren Adressen ein. <br>';
g12='Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden, '+ 
'verwendet Ihr ISP vermutlich PPPoE, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet-'+
'Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoE verwenden. '+
'<br><br>'+
'Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:<br>'+ 
'1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen<br>'+
'2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt<br>'+
'3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen<br><br>'+
'Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. '+
'Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Service Name" (Dienstname) leer. '+
'Klicken Sie nach der Eingabe Ihrer Informationen auf "Apply Changes" (Änderungen übernehmen). Wenn Sie die Einstellungen übernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbindung OK) an. '+
'Weitere Informationen zur Konfigurierung des Routers für PPPoE finden Sie im Benutzerhandbuch.<br>';
g13='Einige Provider verlangen ein PPTP-Protokoll für die Verbindung. Hierbei wird eine direkte Verbindung zum System des Providers hergestellt. '+
'Geben Sie im entsprechenden Feld die Informationen ein, die Sie vom Provider erhalten haben. Klicken Sie danach '+
'auf "Apply Changes" (Änderungen übernehmen). Wenn Sie die Einstellungen übernommen haben, meldet die Statusanzeige '+
'"Connected" (Verbindung OK), wenn der Router korrekt konfiguriert wurde. ';
g14='Ihr Benutzername und Ihr Kennwort werden von Telstra BigPond vergeben. Geben Sie diese Informationen unten ein. '+ 
'Durch die Wahl des Bundesstaats wird die IP-Adresse des Anmeldeservers automatisch eingetragen. '+
'Wenn Ihre Anmeldeserver-Adresse nicht mit der Vorgabe übereinstimmt, '+
'können Sie die richtige Adresse manuell eingeben. '+
'Klicken Sie nach der Eingabe auf "Apply Changes" (Änderungen übernehmen). '+ 
'Wenn Sie die Einstellungen übernommen haben, meldet die Statusanzeige "Connected" (Verbindung OK)'+
', wenn der Router korrekt konfiguriert wurde. ';
g15='MTU-Einstellungen'
g16='Die MTU-Einstellung darf nicht geändert werden, es sei denn, Ihr Provider verlangt ausdrücklich eine bestimmte MTU-Einstellung. '+ 
'Änderungen an der MTU-Einstellung können zu Problemen mit der Internet-Verbindung führen, wie '+ 
'Trennung vom Internet, langsame Verbindungen und Fehler bei der Arbeit mit Internet-Anwendungen. '; 

g17='Trennen nach X...'; 
g18='Die Funktion "Disconnect" dient zur automatischen Trennung des Routers vom Internet, wenn '+ 
'eine bestimmte Zeit lang keine Aktivität mehr festgestellt wird. Wenn Sie diese Option aktivieren und zum Beispiel '+
'5 in das Minutenfeld eingeben, wird der Router nach '+
'fünf Minuten Inaktivität vom Internet getrennt. Diese Option sollte '+ 
'nur verwendet werden, wenn Ihre Internet-Nutzung nach Zeit abgerechnet wird. ';
g19='MAC ist das Kürzel für "Media Access Controller". Alle Netzwerk-Komponenten, einschließlich Karten '+ 
'Adapter und Router, besitzen eine eindeutige Seriennummer, die als MAC-Adresse bezeichnet wird. Ihr Provider '+
'speichert die MAC-Adresse des Adapters Ihres Computers, damit nur dieser Computer auf das '+ 
'Internet zugreifen kann. Wenn Sie den Router installieren, wird die MAC-Adresse des Routers '+ 
'vom Provider erkannt und die Verbindung unter Umständen unterbrochen. Belkin hat daher die Möglichkeit entwickelt, '+ 
'die MAC-Adresse des Computers in den Router zu kopieren ("Klonen"). Die MAC-Adresse '+ 
'wird dann vom Providersystem als die ursprüngliche MAC-Adresse erkannt, so dass '+ 
'es die Verbindung zulässt. Wenn Sie nicht wissen, ob Ihr Provider die ursprüngliche '+ 
'MAC-Adresse verlangt, klonen Sie einfach die MAC-Adresse des Computers, der ursprünglich '+ 
'an das Modem angeschlossen war. Das Klonen der Adresse verursacht keine Probleme im Netzwerk. <br> '+
'Achten Sie beim Klonen der MAC-Adresse darauf, dass Sie den Computer verwenden, der URSPRÜNGLICH '+
'mit Ihrem Modem VERBUNDEN war, bevor der Router installiert wurde. Klicken Sie auf "MAC-Adresse klonen"'+ 
'. Klicken Sie auf "Apply Changes" (Änderungen übernehmen). Ihre MAC-Adresse wurde in den Router kopiert. ';
g20='Sie können den Betriebskanal des Routers wechseln. Wählen Sie hierzu den gewünschten neuen Kanal aus dem Dropdown-Menü. Klicken Sie auf "Apply Changes" (Änderungen übernehmen), um die Einstellung zu sichern. Sie '+
 'können auch die SSID ändern. Die SSID ist der Name des kabellosen Netzwerks. Sie können die SSID frei festlegen. Wenn sich weitere Funknetzwerke in Ihrer '+
 'Umgebung befinden, sollten Sie Ihrem Netzwerk einen besonderen Namen geben. Als Standard ist Belkin_Pre-N_xxxxxx eingestellt. Um '+ 
'die SSID zuändern, klicken Sie auf das Feld "SSID" und geben Sie einen neuen Namen ein. Klicken Sie auf "Apply Changes" (Änderungen übernehmen), um die Änderung zu speichern.'; 
g21='Sie können Ihr kabelloses Netzwerk fast unsichtbar machen. Wenn Sie das Rundsenden '+ 
'der SSID deaktivieren, wird Ihr Netzwerk nicht in Standortübersichten aufgenommen. Die Standortübersicht ist eine Funktion, '+
'die viele moderne Funk-Netzwerkadapter anbieten. Dabei wird die "Luft" nach erreichbaren'+
'Netzwerken abgesucht und werden gefundene Netzwerke zur Verbindung angeboten. Wenn Sie die '+
'Rundsendung der SSID deaktivieren, verbessern Sie die Netzwerksicherheit.';
g22='Wenn Sie den Router als Access Point verwenden, müssen Sie eine IP-Adresse für den Access'+
 'Point festlegen. Die IP-Adresse muss sich im gleichen Bereich befinden wie das Netzwerk, da die Verbindung zum Netzwerk '+
 'bestehen bleibt. Um die erweiterte Konfigurierung des Routers erneut zu öffnen, geben Sie '+
'die IP-Adresse in den Browser ein und melden Sie sich an.';
g23= 'Einstellen des Funkmodus';
g24= 'Über diesen Schalter stellen Sie den Funkmodus des Routers ein. Es gibt drei Modi. <br> '+
'1) Nur 802.11g<br>'+
'Verwenden Sie diese Funktion, wenn ausschließlich Pre-N- und 802.11g-kompatible Geräte am Netzwerk angeschlossen sind und alle langsameren 802.11b-Geräte außen vor bleiben.<br> '+

'2) 802.11g & 802.11b<br>'+
'Verwenden Sie diese Funktion, wenn Pre-N-, 802.11g- und 802.11b-kompatible Geräte am Netzwerk angeschlossen sind. <br>'+
'3) Aus<br>'+
'In diesem Modus wird der Access Point des Routers abgeschaltet, sodass kein kabelloses Gerät Zugang zu Ihrem Netzwerk erhält. Das Ausschalten dieser Funktion ist eine sehr gute Methode, Ihr Netzwerk abzusichern, wenn Sie eine Zeit lang nicht zu Hause sind, oder Sie diese Funktion des Routers eine Zeit lang nicht benötigen.';
g25='Virtuelle Server';
g26='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie '+ 
'Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router '+ 
'an das interne Netzwerk leiten. Weil die internen Computer durch eine Firewall geschützt sind, '+
'können die Rechner aus dem Internet nicht auf sie zugreifen, da sie nicht "sichtbar" sind. Wenn Sie '+ 
'die virtuelle Serverfunktion für eine bestimmte Anwendung einstellen müssen, sehen Sie in der Liste der verbreitetsten '+
'Anwendungen nach. Wenn Ihre Anwendung dort nicht aufgeführt wird, wenden Sie sich '+ 
'an den Hersteller des Programms, um dort zu erfahren, welche Port-Einstellungen Sie vornehmen müssen. Wählen Sie, wenn vorhanden, '+
'die entsprechende Anwendung aus der Dropdown-Liste aus Wählen Sie die Reihe, aus der Sie die Einstellungen kopieren '+
'möchten, aus der Dropdown-Liste neben "In Zeile" aus und klicken Sie auf "Eingabe". Die Einstellungen '+
'werden in die angegebene Zeile übertragen. Klicken Sie auf "Apply Changes" (Änderungen übernehmen),' +
'um die Einstellung zu sichern Um Einstellungen manuell einzugeben, tragen Sie die IP-Adresse in das Feld für den '+
'internen Server ein, dann die Ports, die freigegeben werden müssen (bei mehreren '+
'Ports trennen Sie diese durch Kommata); wählen Sie den Port-Typ aus (TCP oder UDP) und klicken Sie auf "Apply Changes" (Änderungen übernehmen). Sie können pro '+
'interner IP-Adresse nur einen Port freigeben Das Öffnen von Ports in Ihrer Firewall kann ein Sicherheitsrisiko darstellen. Das '+
'Aktivieren und Deaktivieren von Einstellungen geht schnell. Daher sollten Sie die Einstellungen deaktivieren, '+
'wenn Sie eine bestimmte Anwendung momentan nicht verwenden. ';
g27='Client-IP-Filter';
g28='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere '+ 
'Netzwerke zu einer bestimmten Zeit beschränkt wird. Die Beschränkung kann für einen einzelnen oder '+
'mehrere Computer festgelegt werden. Wenn Sie z.B. den Internet-Zugriff für einen bestimmten '+
'Computer einschränken möchten, geben Sie seine IP-Adresse in die '+ 
'IP-Felder ein. Geben Sie dann in die beiden Schnittstellenfelder jeweils 80 ein. Wählen Sie "TCP". Wählen Sie "Blockieren". '+
'Sie können auch "Immer" auswählen, um den Zugriff rund um die Uhr zu sperren. Wählen Sie oben den Starttag, '+
'und die Startzeit und den Endtag und die Endzeit '+
'unten. Klicken Sie auf "Apply Changes" (Änderungen übernehmen). Der Computer mit der angegebenen IP-Adresse wird jetzt '+
'zu den bestimmten Zeiten vom Internzugriff ausgeschlossen. Hinweis: Achten Sie darauf, '+
'dass unter "Utilities> System Settings> Time Zone" die richtige Zeitzone ausgewählt ist. ';
g29='MAC Adress-Filter';
g30='Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen können, '+
'wird der Zugriff auf das Netzwerk verweigert. Wenn Sie diese Funktion aktivieren, '+
'welche Computer für das Netzwerk zugelassen sind. Computern, die nicht in der Filterliste verzeichnet sind, '+
'müssen Sie die MAC-Adresse eines jeden Clients auf Ihrem Netzwerk angeben, um den Netzwerkzugriff für diesen zu '+
'ermöglichen. Mit der Sperrfunktion "Blockieren" können Sie den Netzwerkzugriff für die einzelnen '+
'Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu löschen oder hinzuzufügen. Um '+ 
'Aktivieren dieser Funktion wählen Sie "MAC-Adressfilter aktivieren". Geben Sie dann die MAC-Adresse '+
'für jeden Computer im Netzwerk ein. Klicken Sie dazu auf "Add" (Hinzufügen) und geben Sie die MAC-Adresse in das '+
'entsprechende Feld ein. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. Löschen Sie eine MAC-Adresse aus '+
'der Liste, indem Sie neben dem Eintrag der Adresse, die Sie löschen möchten auf "Delete" (Löschen) klicken. Klicken Sie auf "Apply '+
'Changes" (Änderungen übernehmen), um die Einstellungen zu speichern. <br><br>'+
'Hinweis: Sie können die MAC-Adresse der Computer, mit denen auf '+ 
'die administrativen Funktionen des Routers zugegriffen wird, nicht löschen. (Dies sind die Computer, die gerade verwendet werden). ';
g31='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der '+
'Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, '+
'zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung. '+
'Verwenden Sie diese Funktion nur zeitweise. '+
'<font class="redBold">'+
'Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.</font> '+ 
'Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das '+ 
'IP-Feld ein, und wählen Sie "Enable" (Aktivieren). Klicken Sie auf "Apply Changes" (Änderungen übernehmen), um die Änderung in Kraft zu setzen. '+ 
'Wenn Sie mehrere statische WAN-IP-Adressen verwenden, '+
'können Sie die IP-Adresse festlegen, zu der der DMZ-Host umgeleitet wird. Geben Sie die WAN-IP-Adresse ein, '+
'zu der der DMZ-Host umgeleitet werden soll, geben Sie die beiden letzten Ziffern der IP-Adresse des '+
'DMZ-Host-Computers ein, wählen Sie "Enable" (Aktivieren), und klicken Sie auf "Apply Changes" (Änderungen übernehmen). ';
g32='ICMP Ping blockieren';
g33='Computerhacker bedienen sich sogenannter "Pings", um potenzielle Opfer im '+
'Internet zu finden. Über die Ping-Prüfung einer IP-Adresse und die Antwort des '+
'adressierten Rechners kann ein Hacker Angriffspunkte feststellen. Das '+ 
'Router kann so eingerichtet werden, dass er auf ICMP-Pings von außen nicht antwortet Hierdurch '+ 
'verbessern Sie den Schutz Ihres Routers. Um die Ping-Antwort abzuschalten, wählen Sie '+ 
'"Block ICMP Ping" (ICMP-Ping blockieren)und klicken auf "Apply Changes" (Änderungen übernehmen). Der Router lässt jetzt ICMP-Pings unbeantwortet. '; 
g34='Administratorenkennwort';
g35='Der Router wird OHNE festgelegtes Kennwort geliefert. Wenn Sie ein Kennwort hinzufügen möchten, um '+
'den Schutz Ihres Routers zu erhöhen, können Sie hier ein Kennwort eingeben. Bewahren Sie das Kennwort sicher auf. '+
'Sie benötigen es, wenn Sie sich künftig am Router anmelden möchten. Sie sollten '+
'ein Kennwort festlegen, wenn Sie die Fernverwaltung '+
'des Routers nutzen möchten. <br><br>'+
'Mit dem Anmeldezeitlimit legen Sie fest, wie lange Sie an der Erweiterten Benutzeroberfläche '+ 
'für die Routerkonfiguration angemeldet bleiben können. Die Zähluhr startet, wenn keine '+
'Aktivität mehr registriert wird. Beispiel: Sie haben Änderungen mit der Erweiterten Benutzeroberfläche vorgenommen '+
'und verlassen ihren Arbeitsplatz, ohne auf "Logout" (Abmelden) zu klicken. Angenommen, das Zeitlimit beträgt '+
'10 Minuten, wird die Sitzung 10 Minuten, nachdem Sie den Computer verlassen haben, beendet. Wenn '+
'Sie weitere Änderungen vornehmen möchten, müssen Sie sich erneut am Router anmelden. Das Zeitlimit '+
'für die Anmeldung dient der Sicherheit und ist auf 10 Minuten voreingestellt. Hinweis:  '+
'Es kann jeweils nur ein Computer an der erweiterten Konfigurationsoberfläche zur Routerkonfiguration angemeldet sein. ';
g36='Uhrzeit und Zeitzone';
g37='Der Router aktualisiert die Uhrzeit, indem er eine Verbindung mit einem Simple Network Time Protocol (SNTP)-Server herstellt. '+  
'Dadurch kann der Router die Systemuhr mit dem weltweiten Internet synchronisieren Die '+ 
'synchronisierte Routeruhr dient zur Aufzeichnung des Sicherheitsprotokolls und zur Steuerung der Client-'+  
'Filter. Wählen Sie die Zeitzone, in der Sie sich befinden. Wenn Sie sich in einer Region befinden, '+ 
'in der zwischen Sommer- und Winterzeit unterschieden wird, markieren Sie das Feld neben "Enable Daylight Saving" (Sommerzeit aktivieren)'+ 
'. Die Systemuhr wird nicht immer sofort aktualisiert. Sie müssen mindestens 15 Minuten abwarten, '+ 
'bis der Router die Zeitserver im Internet abfragt und eine Antwort erhält. Sie können '+ 
'die Uhr nicht selbst einstellen. '; 
g38='Fernverwaltung';
g39='Bevor Sie diese Funktion aktivieren, '+  
'<font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN. </font>'+ 
'Mit dem Fernmanagement können Sie überall vom Internet aus Änderungen an den Router-Einstellungen vornehmen'+ 
'. Für die Fernverwaltung des Routers gibt es zwei Methoden. Zum '+ 
'einen können Sie den Zugriff auf den Router vom gesamten Internet aus erlauben, in dem Sie die Funktion '+ 
'"Any IP address can remotely manage the router" (Beliebige IP Adresse zur Fernverwaltung des Routers zulassen) einstellen. Wenn Sie Ihre WAN-IP-Adresse  '+ 
'von einem Computer mit Internetverbindung eingeben, sehen Sie einen Anmeldebildschirm, '+ 
'über den Sie das Kennwort für Ihren Router eingeben müssen. Zum anderen können Sie eine '+ 
'bestimmte IP-Adresse festlegen, an der Sie die Fernverwaltung des Routers durchführen möchten. Dies ist sicherer, aber auch '+   
'unpraktischer. Geben Sie für diese Methode die IP-Adresse des Computers, an dem Sie den Router fernverwalten möchten, '+ 
'in das entsprechende Feld ein und aktivieren Sie die Option "Only this IP address can remotely '+ 
'manage the Router" (Nur diese IP-Adresse zur Fernverwaltung). Es wird DRINGEND EMPFOHLEN, dass Sie ein Administratorkennwort festlegen, '+ 
'bevor Sie diese Funktion aktivieren. Wenn Sie auf das Kennwort verzichten, '+ 
'setzen Sie Ihren Router der Gefahr von Manipulationen durch Unbefugte aus. ';
g40='NAT-Aktivierung';
g41='Bevor Sie diese Funktion aktivieren, '+  
'<font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORENKENNWORT FESTLEGEN. </font>'+ 
'NAT (Netzwerkadressübersetzung) ist die Methode, mit der der Router die einzelne '+ 
'IP-Adresse, die Sie von Ihrem Internet-Provider erhalten haben, auf mehrere Computer im Netzwerk aufteilt. Diese Funktion '+  
'sollte nur von erfahrenen Benutzern verwendet werden. Diese Funktion sollte nur verwendet werden, wenn der Provider Ihnen '+ 
'mehrere IP-Adressen zuteilt oder wenn Sie NAT zur weitergehenden Systemkonfigurierung abschalten müssen. '+  
'Wenn Sie eine einzelne IP-Adresse haben und die NAT ausschalten, können die Computer im Netzwerk '+ 
'nicht mehr auf das Internet zugreifen. Zudem können weitere Probleme auftreten. Eine Deaktivierung von NAT '+ 
'schaltet die Funktionen der Firewall ab. '; 
g42='Die UPnP (Universal Plug-and-Play)-Technologie ermöglicht den reibungslosen Betrieb von Sprach- '+
'und Videonachrichten, Spielen und anderen Anwendungen, die dem UPnP-Standard entsprechen. Einige '+
'Anwendungen benötigen für eine einwandfreie Funktion eine spezielle Konfiguration der Firewall im Router '+
'. Hierzu müssen meistens TCP- und UDP-Ports geöffnet und in bestimmten Fällen auch '+
'Trigger-Ports gesetzt werden. UPnP-kompatible Anwendungen können mit dem Router kommunizieren '+
'und ihm mitteilen, wie die Firewall konfiguriert werden muss. '+
'Werkseitig ist die UPnP-Funktion des Routers deaktiviert. Wenn Sie '+ 
'UPnP-kompatible Anwendungen einsetzen und die UPnP-Funktionen nutzen möchten, können Sie die '+ 
'UPnP-Option aktivieren. Wählen Sie hierzu auf der Seite "Utilities" (Dienstprogramme) im Abschnitt "UPnP Enabling" (UPnP-Aktivierung) die Option "Enable" (Aktivieren). '+ 
'Klicken Sie auf "Apply Changes" (Änderungen übernehmen), um die Änderung zu speichern. ';
g43='Automatische Benachrichtigung zur Firmware-Aktualisierung';
g44='Der Router kann automatisch anfragen, ob eine neue Firmware-Version vorliegt '+ 
'und Sie ggf. darauf aufmerksam machen. Wenn Sie sich '+ 
'an der Erweiterten Benutzeroberfläche des Routers anmelden, überprüft der Router, ob neue Firmware '+ 
'verfügbar ist. Ist dies der Fall, werden Sie benachrichtigt. Sie können '+ 
'die neue Version herunterladen oder die Benachrichtigung ignorieren. Werkseitig ist diese Funktion des Routers deaktiviert. '+  
'Wenn Sie sie aktivieren möchten, klicken Sie auf "Enable" (Aktivieren) und dann auf "Apply Changes" (Änderungen übernehmen). ';
g45='Sicherheitseinstellungen des Funknetzwerks';
g46='Verschlüsselungstechniken erhöhen die Sicherheit Ihres Funknetzwerks. Es kann nur ein Sicherheitstyp '+ 
'ausgewählt werden. Anwender müssen daher einen Modus auswählen, '+ 
'der von allen Netzwerkgeräten im Funknetzwerk unterstützt wird. Dieses Belkin-Produkt verfügt über 5 '+ 
'mögliche Sicherheitseinstellungen:<br><br>'+
'1) Deaktiviert. In diesem Modus wird keine Verschlüsselung aktiviert. Offene Netzwerke, in denen jeder Benutzer '+ 
            'willkommen ist, sind meistens nicht verschlüsselt.<br><br> '+ 
'2) WPA PSK - Home (kein Server). WPA (Wireless protected Access - geschützte Funkübertragung). PSK ist eine aktuelle, '+ 
             'standardisierte Sicherheitstechnik, bei der jedes Informationspaket '+ 
             'mit einem anderen Code oder Schlüssel verschlüsselt wird. Weil sich der Schlüssel immer wieder ändert, '+  
             'ist WPA sehr sicher. Es gibt zwei Arten der WPA-Sicherheit, WPA-PSK (Pre-Shared Key) und '+ 
             'WPA-Radius-Server. Für den einen wird ein Server benötigt und für den '+  
             'anderen nicht. WPA-PSK eignet sich für zu Hause oder kleine Büros, wo sich kein  '+  
             'Server befindet. Die PSK-Verschlüsselung wird automatisch aus einer Zeichenreihe '+  
             'oder einem Kennwort generiert. Das größte Sicherheitsrisiko bei WPA-PSK liegt daher '+  
             'in der Preisgabe des Kennworts.<br><br> '+ 
 'a. TKIP versus AES. Während der WPA-Einrichtung muss der Nutzer die Wahl zwischen der Verschlüsselung mit '+  
 'TKIP oder AES treffen. Der WPA-Standard bestimmt TKIP, daher ist dies die Standardeinstellung. Darüber hinaus sollte '+ 
 ' TKIP bessere Kompatibilität mit kabellosen Geräten unterschiedlicher '+  
 ' Hersteller gewährleisten, da viele kabellose Produkte nicht mit AES erweitert werden. AES ist eine neue '+  
 ' Verschlüsselungstechnik auf der Grundlage des nicht ratifizierten 802.11i-Standards. Neue WPA-Standards '+  
   'arbeiten meist mit AES. Obwohl AES nicht ebenso populär ist, '+  
  ' wird diese Technik von einigen Anwendern vorgezogen. In jedem Fall muss für alle Netzwerkgeräte dieselbe  '+  
   'Technik eingestellt sein.<br><br> '+
 'b. Pre-Shared Key. Geben Sie ein Wort oder eine Phrase mit maximal 40 Zeichen ein. Derselbe PSK muss '+  
   'ebenfalls für alle anderen Netzwerkgeräte im Netzwerk eingestellt werden. Achten Sie dabei auf '+  
   'die Groß- und Kleinschreibung ("n" ist ein anderes Zeichen als "N"). Der leichteste Weg, '+  
   'Ihre Sicherheitseinstellungen zu umgehen, ist die Preisgabe Ihres Kennworts.<br><br> '+ 
'3) 128-Bit WEP-Verschlüsselung. Bis vor kurzem galt 128-Bit WEP (Wired Equivalent Privacy - Sichere Funkübertragung) als Standard für '+  
                'Funkübertragungen. Auch wenn nicht alle Ihre kabellosen Geräte WPA unterstützen, ist 128-Bit '+  
                'WEP noch immer eine hervorragende Sicherheitseinstellung. Sie müssen dazu eine Hexadezimalzahl eingeben '+  
                'oder diese automatisch generieren lassen.<br><br> '+ 
'4) 64-Bit WEP-Verschlüsselung. Belkin empfiehlt den 64 Bit-Modus für Netzwerke, in denen einige Geräte weder '+  
               'WPA noch 128-Bit WEP unterstützen.<br><br> '+
'5) WPA - Radius-Server. (Auf diesen Modus wird über die Schaltfläche "Erweitert" zugegriffen). WPA'+
'-Server ist nur für Netzwerke mit einem Radius-Server geeignet. Alle Parameter für diesen Modus '+
'sollten vom Administrator des Radius-Servers bereit gestellt werden. m Gegensatz zu WPA PSK, '+
'wird bei WPA-Server der Schlüssel von einem Server auf die Clients übertragen, anstatt diesen automatisch zu generieren.';
g57='Verwenden der dynamischen DNS';
g58='Der dynamische DNS-Dienst ermöglicht es Ihnen, eine dynamische IP-Adresse in jeder der zahlreichen Domänen, die DynDNS.org anbietet, als statischen Hostnamen auszuweisen. Sie erlauben Ihren Netzwerkcomputern damit, leichter auf verschiedene Bereiche des Internets zuzugreifen. DynDNS.org bietet diesen Dienst für maximal fünf Hostnamen kostenlos im Internet an.<br>'+
'Der Dynamische DNSSM-Dienst ist ideal für private Internetseiten, Dateiserver oder um den Zugriff zu Ihrem Heim-PC von Ihrem Arbeitsplatz aus zu erleichtern. Verwenden Sie den Dienst, wenn Sie sicher gehen möchten, dass Ihr Hostname immer zu Ihrer IP-Adresse führt, unabhängig davon, wie oft diese von Ihrem Provider geändert wird. Auch wenn sich Ihre IP-Adresse ändert, können Ihre Freunde und Bekannte sie immer im Internet finden, indem Sie ersatzweise die Adresse ihrname.dyndns.org eingeben!<br>'+
'<br>Um sich kostenlos für Dynamic DNS anzumelden, öffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>'+
'<br><b>Einstellen des Update-Clients für Dynamisches DNS</b><br>'+
'<br>Um sich kostenlos für Dynamic DNS anzumelden, öffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>'+
'<br><b>Einstellen des Update-Clients für Dynamisches DNS</b><br>'+
'Sie müssen sich beim kostenlosen Aktualisierungsdienst von DynDNS.org anmelden, bevor Sie diese Funktion nutzen können. Nach der Registrierung befolgen Sie bitte diese Anweisungen.<br>'+
'1.Geben Sie in das Feld "User Name" (1) (Benutzername) Ihren DynDNS.org-Benutzernamen ein.<br>'+
'2.Geben Sie in das Feld "Password" (2) (Kennwort) Ihr DynDNS.org-Kennwort ein.<br>'+
'3.Geben Sie in das Feld "Domain Name" (3) (Domänenname) den DynDNS.org-Domänennamen ein, den Sie mit DynDNS.org einstellt haben, ein.<br>'+
'4.Klicken Sie auf Update Dynamic DNS" (Dynamisches DNS aktualisieren), um Ihre IP-Adresse zu aktualisieren."<br>'+
'Immer wenn Ihre IP-Adresse vom Provider verändert wird, wird der Router automatisch die Server von DynDNS.org mit der neuen IP-Adresse aktualisieren. Sie können dies auch manuell tun, indem Sie auf die Schaltfläche "Update Dynamic DNS" (4) (Dynamische DNS aktualisieren) klicken.<br>';
fw1='Firmware wird aktualisiert.';
fw2='UNTERBRECHEN SIE DEN ROUTER NICHT, SCHALTEN SIE IHN NICHT AB! Dies könnte dazu führen, dass der Router nicht mehr funktioniert.'; 
apply_text_1='Apply changes (Änderungen übernehmen). Bitte warten Sie......';
warn_msg1='SSID kann nicht als NULL gesendet werden!';
warn_msg2='Das Funknetz wird neu gestartet, wenn Sie diese Änderung von einen kabellos verbundenem Computer aus machen. Der Computer kann kurzzeitig vom Router getrennt werden.';
parentalc_alert = 'Keine externe (Internet) Verbindung möglich';

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

