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
show1='Accueil';
show2='Aide';
show3='Connexion';
show4='D�connexion';
show5='Statut d\'Internet';
show6='Connexion';
show7='Pas de connexion';
show8='Configuration LAN';
show9='Param�tres de r�seau local';
show10='Liste de Clients DHCP';
show11='Internet / WAN';
show12='Type de Connexion';
show13='DNS';
show14='Adresse MAC';
show15='WLAN non disponible';
show16='Sans Fil';
show17='Canal et SSID';
show18= 'S�curit�';
show19=  'Utiliser comme point d\'acc�s';
show20=  'Sp�cifiez l\'adresse IP';
show21=  'Contr�le d\'adresses MAC';
show22=   'Pont Sans Fil';
show23=   'Pare-feu';
show24=   'Serveurs Virtuels';
show25=   'Filtres d\'IP des clients';
show26=   'Filtrage des adresses MAC';
show27=   'Zone DMZ';
show28=   'Blocage du ping WAN';
show29=   'Journal de s�curit�';
show30=   'Utilitaires';
show31=   'Control parental';
show32=   'Red�marrer le Routeur';
show33=   'Red�marrer le PA'
show34=  'R�tablir les param�tres par d�faut';
show35=  'Sauvegarder les param�tres';
show36=  'R�tablir les param�tres pr�c�dents';
show37=  'Mise � jour du micrologiciel';
show38=  'Param�tres du syst�me';
show39='Service d\'impression';
show40='Configuration du serveur d\'impression';
show41=   'DDNS';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='Plus d\'infos';
btn1='Effacer les modifications';
btn2='Enregistrer les modifications';
btn3='Mise � jour DNS Dynamique';
Router='Routeur';
AP='AP';
Dynamic='Dynamique';
cff1='V�rification du micrologiciel r�ussie';
cff2='Informations sur le micrologiciel'; 
cff3='Aucune mise � jour du micrologiciel n\'est disponible pour ce routeur !';
cff4='�chec de la connexion au serveur d\'informations sur le micrologiciel, <br>v�rifiez la connexion WAN.';
cff5='Une version mise � jour du micrologiciel de votre routeur est disponible';
d1='Belkin | Administrateur Multiple';
d2='Administrateur Multiple';
d3='Ce p�riph�rique est administr� par';
d4='en ce moment�!!';
fc1='Pare-feu > Filtres d\'IP des clients';
fc2a='Le routeur peut �tre configur� de sorte � limiter l\'acc�s de certains ordinateurs � Internet, au courrier �lectronique et autres fonctions r�seaux'; fc2b=' � des jours et des heures donn�s.';
IP='IP';
Port='Port (port ou port:port)';
Type='Type';
BT='Temps de blocage';
Day='Jour';
Tm='Temps';
Enable='Activer';
BOTH='LES DEUX';
Always='Toujours';
Block='Bloquer';
SUN='>DIM';
MON='>LUN';
TUE='>MAR';
WED='>MER';
THU='>JEU';
FRI='>VEN';
SAT='>SAM';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Vous n\'avez pas entr� l\'adresse IP du client ou certains num�ros de l\'adresse IP entr�e ne sont pas valides.  Le num�ro contenu dans la zone de saisie de l\'adresse IP doit �tre compris entre 1 et 254.';
fcsm='Les num�ros de ports que vous avez entr� ne sont pas valides.';
fcrm='Le dernier num�ro de port doit �tre sup�rieur au premier.';
fcripm='Le dernier num�ro IP doit �tre sup�rieur au premier.';
fcpm='Le num�ro de la zone de saisie du port doit �tre compris entre 1 et 65535.';
fd1='Pare-Feu > DMZ'; 
fd2='La zone DMZ vous permet de sp�cifier quel ordinateur de votre r�seau doit �tre plac� � l\'ext�rieur du pare-feu NAT. Cette op�ration peut s\'av�rer n�cessaire si la traduction d\'adresse r�seau (NAT) emp�che le bon fonctionnement d\'applications telles que les jeux ou les vid�oconf�rences.Servez-vous de cette fonction au besoin.'; 
fd3='L\'ordinateur plac� dans la zone DMZ ne sera pas prot�g� contre les attaques provenant de hackers.'; 
fd4='L\'ordinateur plac� dans la zone DMZ ne sera pas prot�g� contre les attaques provenant de hackers. Pour placer un ordinateur dans la zone DMZ, entrez les derniers chiffres de son adresse IP dans le champ de saisie ci-dessous, et s�lectionnez ��Activer��. Cliquez ��Envoyer�� pour que les modifications apport�es soient prises en compte.'; 
fd5='Adresse IP de l\'h�te DMZ virtuel'; 
fd6='IP fixe';  
fd7='IP priv�e';  
fd8='Activer'; 
fd9='Pare-feu > DDNS'; 
fd10='Le ��Dynamic DNS�� offre aux utilisateurs d\'Internet un nom de domaine fixe (au lieu d\'une adresse IP qui change de temps � autre), permettant l\'acc�s � votre routeur et aux applications configur�es dans les serveurs virtuels de votre routeur � partir de plusieurs endroits sur l\'Internet, sans devoir conna�tre votre adresse IP actuelle. Votre routeur sans fil prend en charge le DNS dynamique via DynDNS.org. ';
fd11='Vous devez cr�er un compte avant de pouvoir utiliser ce service.&nbsp;';
fd12='Nom d\'utilisateur > '; 
fd13='Mot de passe > '; 
fd14='Nom de Domaine > '; 
fd15='Veuillez entrer l\'adresse IP avant d\'activer la DMZ'; 
fd16='Auto-update'; 
fmc1='Pare-Feu > Filtrage des adresses MAC';
fmc2='Cette fonction vous permet de dresser une liste de clients autoris�s. Lorsque vous activez cette fonction, vous devez entrer l\'adresse MAC de chaque client de votre r�seau, pour permettre � chacun d\'acc�der au r�seau.';    
fmc3='Activer le Filtrage des Adresses MAC';   
fmc4='Liste de filtrage d\'adresses MAC';
fmc5='Bloquer';  
fmc6='H�te';  
fmc7='Adresse MAC';  
fmc9='Impossible d\'entrer une adresse MAC de multidiffusion�!';
fmc12='Cette adresse MAC existe d�j�!';
Add='Ajouter'; 
Del='Supprimer';
fmcipm='Vous n\'avez pas entr� tous les chiffres hexad�cimaux ou certains chiffres hexad�cimaux entr�s ne sont pas valides. Un chiffre hex peut �tre un nombre de 0 � 9 ou une lettre de A � F.';
fmn1='Pare-feu >';
fmn2='Votre Routeur poss�de un pare-feu afin de prot�ger votre r�seau contre une multitude d\'attaques provenant de pirates informatiques, incluant le Ping de la Mort (Ping of Death - PoD) et l\'attaque par D�ni de Service (Denial of Service - DoS). Vous pouvez au besoin d�sactiver la fonction de pare-feu. D�sactiver le pare-feu ne rendra pas votre r�seau totalement vuln�rable aux attaques provenant des pirates informatiques, mais il est recommand� d\'activer le pare-feu aussi souvent que possible.'; 
fmn3='Activer/D�sactiver Pare-Feu >';
Disable='D�sactiver';
fp1='Pare-Feu > Blocage du ping WAN';
fp2='<b> FONCTION AVANC�E�!</b> Vous pouvez configurer le Routeur de sorte qu\'il ignore un ping ICMP (ping au port WAN). Cette fonction rehausse le niveau de s�curit�.'; 
fp3='Blocage du Ping ICMP >';  
fs1='Firewall > Security log';
fs2='Le routeur conserve un journal de l\'activit� � l\'int�rieur de celui-ci, telle que les connexions et d�connexions, et toute tentative de connexion au routeur en provenance de l\'Internet. Vous pouvez visualiser le journal ci-dessous.'; 
fs3='Journal';
Save='Enregistrer';
Clear='Effacer';
Refresh='Actualiser';  
fv1='Pare-Feu > Serveurs Virtuels';
fvipm='Vous n\'avez pas entr� toutes les adresses IP \n ou certains num�ros entr�s ne sont pas valides. \n Le num�ro de l\'adresse IP doit �tre compris entre 1 et 254.';
fvrm='Le num�ro de port public ne peut pas �tre 88, car une collision aura lieu avec le service Web du routeur sans fil.' 
fvipr='La plage Ports entrants est incorrecte.'; 
fvppr='La plage Ports entrants est incorrecte.'; 
fv2='Cette fonction vous permet de relayer les appels de service externes (Interner) tel un serveur Web (port 80), un serveur FTP (port 21) ou autres applications via votre Routeur vers votre r�seau interne.'; 
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
fv200='Effacer l\'entr�e '; 
Description='Description'; 
Inb='Port entrant';  
Type='Type';  
Pipa='Adresse IP Priv�e ';  
Pport='Port priv�';  
htop='haut'; 
h1='Aide';
h2='GLOSSAIRE';  
h3='<b>Administrateur</b> Un administrateur est charg� de la maintenance du r�seau. Dans le cas pr�cis de ce routeur, c\'est la personne qui configure le routeur et apporte les changements aux param�tres.';  
h4='<b>Client</b> Se dit d\'un ordinateur faisant partie d\'un r�seau et qui utilise les services du routeur, tels que le serveur DHCP automatique et le Pare-Feu.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Ce protocole configure automatiquement les param�tres TCP/IP de tous les ordinateurs de votre r�seau domestique.';  
h6='<b>Acc�s � distance</b> Connexion qui utilise le r�seau t�l�phonique public.'; 
h7='<b>DMZ</b> Zone virtuelle du routeur qui n\'est pas prot�g�e par son pare-feu.  Un ordinateur peut �tre plac� dans la zone DMZ.';   
h8='<b>Adresse de serveur DNS</b> Le DNS (syst�me de nom de domaine) permet aux ordinateurs h�tes Internet de disposer d\'un nom de domaine (comme belkin.com, par exemple) et d\'une ou de plusieurs adresses IP (192.34.45.8, par exemple). Le serveur DNS g�re la base de donn�es des ordinateurs h�tes, de leurs noms de domaines respectifs ainsi que de leurs adresses IP. Ainsi, lorsqu\'un nom de domaine est demand� (vous tapez belkin.com dans votre navigateur Web), l\'utilisateur est renvoy� vers l\'adresse IP appropri�e. L\'adresse du serveur DNS utilis� par les ordinateurs de votre r�seau domestique est l\'emplacement du serveur DNS que votre fournisseur d\'acc�s a attribu�.';  
h9='<b>Modem DSL</b> DSL est l\'acronyme de Digital Subscriber Line. Un modem DSL utilise vos lignes t�l�phoniques existantes pour transmettre des donn�es � haut d�bit.';  
h10='<b>IP dynamique</b> Adresse IP obtenue automatiquement aupr�s du serveur DHCP.';  
h11='<b>Ethernet</b> Norme des r�seaux informatiques. Les r�seaux Ethernet sont connect�s par des c�bles et des hubs sp�ciaux. Ils transmettent les donn�es jusqu\'� 10 millions de bits par seconde (Mbps).';  
h12='<b>Pare-feu</b> Fronti�re �lectronique qui emp�che tout utilisateur non autoris� d\'acc�der � certains fichiers ou ordinateurs d\'un r�seau.';  
h13='<b>Micrologiciel</b> Logiciel emmagasin� dans la m�moire. Programmes essentiels qui demeurent en place m�me lorsque le syst�me est �teint. Les micrologiciels sont plus faciles � modifier que les mat�riels informatiques, mais plus permanents que les logiciels stock�s sur disque.';  
h14='<b>Adresse IP</b> IP est l\'acronyme d\'Internet Protocol. Une adresse IP est constitu�e d\'une s�rie de quatre nombres s�par�s par des points. Elle permet d\'identifier un ordinateur h�te Internet unique. Par exemple�: 192.34.45.8.';  
h15='<b>ISDN</b> Acronyme de Integrated Services Digital Network. Lignes de t�l�communications num�riques qui peuvent transmettre � la fois de la voix et des services r�seaux num�riques � un d�bit jusqu\'� 128�K et qui sont beaucoup plus rapides et fiables que les modems haut d�bit analogiques. Les lignes ISDN sont offertes par la plupart des op�rateurs t�l�phoniques.';  
h16='<b>FAI</b> Fournisseur d\'acc�s � Internet. Un FAI est une entreprise qui permet aux individus et aux autres entreprises de se connecter � Internet.';  
h17='<b>Adresse de passerelle du FAI</b> (voir FAI pour la d�finition). L\'adresse de passerelle du FAI est une adresse IP correspondant au routeur Internet situ� chez votre fournisseur d\'acc�s. Cette adresse n\'est requise que lorsque vous utilisez un modem c�ble ou ADSL.';  
h18='<b>LAN</b> R�seau local. Un LAN est un groupe d\'ordinateurs et de p�riph�riques connect�s entre eux dans une zone relativement restreinte (la maison ou le bureau, par exemple). Votre r�seau � domicile est consid�r� comme un r�seau local.';  
h19='<b>Adresse MAC</b> MAC est l\'acronyme de Media Access Control. L\'adresse MAC est l\'adresse mat�rielle du p�riph�rique connect� � un r�seau.';  
h20='<b>MTU</b> Acronyme de Maximum Transmission Unit. Le plus grand paquet (unit�) de donn�es pouvant �tre transmis sur un m�dium physique particulier.';  
h21='<b>NAT</b> Acronyme de Network Address Translation. Ce proc�d� permet � tous les ordinateurs de votre r�seau domestique d\'utiliser une seule adresse IP. Gr�ce � la technologie NAT du de votre passerelle r�seau domestique HomeConnect, vous pouvez acc�der � Internet depuis tous les ordinateurs de votre r�seau domestique sans devoir vous procurer d\'autres adresses IP aupr�s de votre FAI.';  
h22='<b>Port</b> Canal logique identifi� par son num�ro de port unique. Les applications �coutent certains ports pour rep�rer des informations pouvant y �tre li�es.';  
h23='<b>PPPoE</b> Acronyme de Point-to-Point Protocol over Ethernet (Protocole Poste � Poste par l\'Ethernet). Le protocole poste � poste est un moyen de s�curisation de la transmission des donn�es cr��, � l\'origine, pour les acc�s distants. PPPoE est utilis� pour les connexions Ethernet.';  
h24='<b>PPPTP</b> Acronyme de Point-to-Point Tunneling Protocol (Protocole de Tunnelisation Poste � Poste). Une version am�lior�e du PPP qui poss�de la capacit� d\'encapsuler des paquets de donn�es format�s pour un protocole r�seau en paquets pouvant �tre utilis�s par un autre protocole. Cette technique de tunnellisation permet aux donn�es TCP/IP d\'�tre transmises sur un r�seau non-TCP/IP. Le PPTP peut �tre utilis� pour relier deux r�seaux physiques diff�rents, en utilisant l\'Internet comme interm�diaire.';  
h25='<b>SNTP</b> Acronyme de Simple Network Time Protocol. Une norme de communication permettant la transmission d\'information en temps r�el sur un r�seau ou l\'Internet.';  
h26='<b>SPI</b> Acronyme de Stateful Packet Inspection. SPI est le type de s�curit� Internet pour entreprises que propose votre passerelle r�seau domestique HomeConnect. Gr�ce au SPI, la passerelle se comporte comme un pare-feu et prot�ge votre r�seau contre les pirates informatiques.';  
h27='<b>IP fixe</b> Adresse IP configur�e manuellement et qui ne change jamais.';  
h28='<b>Masque de sous-r�seau Mask</b> Un masque de sous-r�seau (qui peut faire partie des informations TCP/IP fournies par votre FAI) est un ensemble de quatre nombres configur�s comme une adresse IP. Il s\'emploie pour cr�er des nombres d\'adresses IP qui s\'utilisent uniquement avec un r�seau donn� (contrairement aux num�ros d\'adresses IP valides reconnus sur Internet qui doivent �tre attribu�s par le InterNIC).';  
h29='<b>TCP</b> Acronyme de Transmission Control Protocol. Protocole de transport de donn�es le plus courant sur Internet. Le protocole TCP est orient� vers la connexion et la transmission, et procure une communication fiable entre les r�seaux � commutation de paquets.';  
h30='<b>TCP/IP</b> Acronyme de Transmission Control Protocol over Internet Protocol. Il s\'agit du protocole standard pour la transmission des donn�es sur Internet.';  
h31='<b>UDP</b> Acronyme de User Datagram Protocol. Protocole de communication pour la couche r�seau Internet, la couche de transport et la couche session, ce qui rend possible l\'envoi d\'un message datagramme depuis un ordinateur vers une application fonctionnant sur un autre ordinateur. Contrairement au TCP, l\'UDP ne requiert pas de connexion et ne garantit pas une communication fiable�; l\'application elle-m�me doit traiter les erreurs et v�rifier la fiabilit� de la transmission.'; 
h32='<b>WAN</b> R�seau �tendu. R�seau qui permet de connecter des ordinateurs situ�s dans des zones g�ographiquement distinctes (b�timents, villes ou pays diff�rents). Internet est un r�seau �tendu.';  
h33='<b>Adresse IP WAN</b> Adresse IP attribu�e au routeur par le FAI.';  
h34='<b>WLAN</b> R�seau local sans fil. R�seau local qui relie des ordinateurs proches entre eux via des ondes radio (comme 802.11b)'; Enabled='Activ�';
Disabled='D�sactiv�';
i1='Setup Home'; 
i2='Status';
i3='Information sur la version'; 
i4='Version du micrologiciel'; 
i5='Version du code d\'amorce';  
i6='Version du mat�riel';  
i7='Num�ro de s�rie';  
i8='Param�tres de r�seau local'; 
i9='MAC LAN/WLAN';  
i9a='Adresse MAC du r�seau local';
i9b='WLAN non disponible'; 
i10='Adresse IP'; 
i11='Masque de Sous-R�seau'; 
i12='Serveur DHCP';
i13='Param�tres Internet';  
i14='Adresse MAC du WAN'; 
i15='Type de Connexion';  
i16='Masque de Sous-R�seau';  
i17='IP WAN'; 
i18='Passerelle par d�faut';  
i19='Adresse DNS';  
i20='Caract�ristiques'; 
i21='NAT';  
i22='Param�tres du pare-feu '; 
i23='SSID'; 
i24='S�curit�'; 
i25='Imprimante'; 
i26='(activer/d�sactiver)'; 
i27='Vous devez ouvrir une session avant d\'apporter des modifications.'; 
i28='Serveur d\'impression / Imprimante';
i29='Nom du Serveur d\'Impression';
i30='Impression via FTP';
i31='Impression brute TCP/IP'; 
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
langt='langue';
langc='Fran&ccedil;ais';
ld1='LAN > DHCP';
ld2='LAN > Liste de Clients DHCP';
ld3='Cette page montre l\'adresse IP, le Nom d\'H�te et l\'adresse MAC de chaque ordinateur reli� � votre r�seau. Si vous n\'avez pas sp�cifi� de nom d\'h�te pour l\'ordinateur, le champ Nom d\'H�te sera vide. Pour mettre � jour la liste, cliquez sur Rafra�chir.'; 
ld4='Adresse IP'; 
ld5='Nom d\'h�te';
ld6='Adresse MAC'; 
lm1='LAN';
lm2='Le serveur DHCP attribue automatiquement des adresses IP � chaque ordinateur afin de simplifier la configuration de la mise en r�seau. Les param�tres par d�faut du serveur DHCP sont compatibles avec la plupart des applications. Vous pouvez apporter des modifications aux param�tres si vous le d�sirez.'; 
lm3='Les modifications que vous pouvez apporter sont�:';
lm4='- Modifier l\'adresse IP interne du routeur. Valeur par d�faut = 192.168.2.1';
lm5='- Modifier le masque de sous-r�seau. Le masque par d�faut est 255.255.255.0';
lm6='- Activer/D�sactiver la fonction de serveur DHCP. Par D�faut= ON (Activ�)';
lm7='- Sp�cifiez l\'adresse de d�part et de fin de la R�serve d\'Adresses IP Par d�faut = D�part�: 2 / Fin�: 100';
lm8='- Entrer la dur�e d\'autorisation de l\'adresse IP Par d�faut = Permanent';
lm9='- Entrez un Nom de Domaine local. Par d�faut = Permanent';
lm10=' Pour apporter des modifications, cliquez sur ��Param�tres du R�seau local�� sur l\'onglet LAN, situ� � la gauche.';
lm11='Le Routeur vous fournira aussi une liste de tous les clients reli�s au r�seau. Pour visualiser la liste, cliquez ��Liste de Clients DHCP�� � l\'onglet LAN, � gauche.';
ls1='LAN > Param�tres de r�seau local';
ls2='Vous pouvez ici apporter des modifications au r�seau local (LAN). Pour que les modifications soient prises en compte, vous devez appuyer sur le bouton ��Enregistrer les Modifications�� au bas de l\'�cran.'; 
ls3='Adresse IP';   
ls4='Masque de Sous-R�seau';     
ls5='Serveur DHCP';  
On='Activ�';  
Off='D�sactiv�';  
all='all';
Auto='Auto'; 
langt='langue';
langc='Fran&ccedil;ais';
langcl='Current Langugae';
langal='Available Langugaes';
ls6='La fonction de serveur DHCP permet la mise en place d\'un r�seau en toute simplicit�, en attribuant une adresse IP � chacun des ordinateurs du r�seau. Il n\'est pas n�cessaire d\'apporter des modifications ici.'; 
ls7='Adresse de d�part du pool d\'adresses IP';  
ls8='Adresse de fin du pool d\'adresses IP';   
ls9='Dur�e d\'autorisation';   
ls10='Toujours'; 
ls11='Demi-heure';
ls12='1 heure';
ls13='Deux heures';
ls14='Demi-journ�e'; 
ls15='Un jour';
ls16='Deux jours';
ls17='Une semaine'; 
ls18='Deux semaines';  
ls19='La dur�e pendant laquelle le serveur DHCP r�servera l\'adresse IP pour chaque ordinateur.';  
ls20='Nom de domaine local';
Optional='Facultatif';  
ls21='Une fonction qui vous permet d\'attribuer un nom � votre r�seau.'; lsipm='Vous n\'avez pas entr� les num�ros ou certains num�ros entr�s ne sont pas valides. Les nombres contenus dans les zones de saisie doivent �tre compris entre 0 et 255.';
lssm='Le num�ro de masque de sous-r�seau entr� n\'est pas valide.'; lsnetm='Le pool IP doit �tre dans le m�me masque de sous-r�seau que la passerelle IP ';
lsendm='L\'adresse IP de fin doit �tre sup�rieure � l\'adresse IP de d�but.';
lspoolm='L\'adresse IP du r�seau local ne peut pas figurer dans le pool d\'adresses DHCP.'; 
lsipm2='Adresse IP LAN non valide, le dernier num�ro ne peut �tre ni 0 ni 255';
lsipm3='Adresse IP LAN non valide, le premier num�ro ne peut �tre ni 127 ni 0';
lsldnm='Nom de domaine local invalide';
lsipm4='L\'IP entr�e n\'est pas valide'; 
lsipalert='Veuillez modifier manuellement la zone de saisie Adresse dans la barre d\'�tat de votre navigateur et indiquer la nouvelle adresse LAN';
lsipm5='L\'adresse IP choisie doit �tre une adresse IP non-acheminable.)\n  192.168.x.x (o� x est un nombre compris entre 0 et 255). \n10.x.x.x (o� x est un nombre compris entre 0 et 255.)\n172.y.x.x (o� y est un nombre compris entre 16 et 31, et x est compris entre 0 et 255.)';
lsipc='Souhaitez-vous vraiment changer l\'adresse IP du r�seau local ?'; lo1='Connexion';
lo2='Avant d\'apporter des modifications, vous devez vous connecter avec votre mot de passe. Si vous n\'avez pas encore cr�� un mot de passe personnalis�, laissez ce champ vide et cliquez sur ��Envoyer��.';
lo3='Mot de passe';  
lo4='Par d�faut = laisser vide '; 
Clear='Effacer';
Submit='Envoyer';
le1='Belkin | Erreur de connexion ';
lerror='Erreur de connexion�!!';  
Utilities='Utilitaires > ';
rs1='R�initialisation r�ussie';
rs2='Veuillez attendre que le t�moin d\'alimentation cesse de clignoter.';  
rs3='Le Routeur red�marre';
rs4='secondes restantes.';  
rf1='Restauration des param�tres par d�faut du constructeur'; 
rf2='Veuillez attendre que le t�moin d\'alimentation cesse de clignoter.';  
rss1='R�tablissement des param�tres r�ussi';
rss2='Veuillez attendre que le t�moin d\'alimentation cesse de clignoter.';  
ufy1='R�tablir les param�tres par d�faut du fabricant';
ufy2='Cette option r�tablira les param�tres du Routeur vers les param�tres par d�faut du fabricant. Nous vous recommandons de faire une copie de vos param�tres avant de r�tablir la configuration par d�faut. Pour r�tablir la configuration par d�faut, cliquez sur le bouton ��R�tablir les Param�tres par D�faut�� ci-dessous.';
ufy3='AVERTISSEMENT�: Tous vos r�glages seront perdus�!\nEst-ce vraiment ce que vous voulez faire�?';
ufy4='La restauration des param�tres par d�faut peut prendre jusqu\'� 60 secondes. N\'�teignez pas le routeur pendant le processus.';
ufy5='Les param�tres par d�faut ne seront pas restaur�s. Aucun param�tre ne sera perdu�!';
ufy='R�tablir les Param�tres par D�faut';
ufe1='Utilitaires > Mise � Jour du Micrologiciel';
ufe2='De temps � autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises � jour peuvent contenir des am�liorations et des solutions � des probl�mes existants. Cliquez sur le lien ci-dessous pour v�rifier la disponibilit� d\'une mise � jour du micrologiciel de ce Routeur.';
ufe3='REMARQUE�: Veuillez faire une copie de vos param�tres avant de mettre � jour le micrologiciel.';
ufe4='Cliquez ici pour';
ufe5='acc�der � la page Enregistrer/Sauvegarder les param�tres en cours.';
ufe6='Rechercher une nouvelle version du micrologiciel >';
ufe7='V�rifier le micrologiciel'; 
ufe8='Mettre � jour le micrologiciel >';
Update='Mise � Jour';
ufe9='Veuillez sp�cifier o� se trouve le fichier de mise � niveau. Entrez le nom du fichier ainsi que son chemin d\'acc�s ou cliquez sur ��Parcourir�� pour acc�der � l\'emplacement du fichier.';
ufe10='Voulez-vous vraiment poursuivre la mise � jour�?';
ufe11='� la fin de la mise � niveau, il est possible que le routeur ne r�ponde pas aux commandes pendant une minute. Ceci est normal. Ne fermez ni ne red�marrez votre Routeur pendant cette p�riode.';
um1='Cet �cran vous permet de g�rer plusieurs param�tres du Routeur et accomplir certaines t�ches administratives.';
um2='Contr�le parental';
um3='Le Contr�le Parental de Belkin prot�ge votre famille du contenu Internet potentiellement choquant.'; 
um4='Le Contr�le Parental de Belkin consiste en un filtre configurable. Vous pouvez donc naviguer sur l\'Internet avec vos enfants, sans m�me y �tre.<br>&nbsp;';
um5='Red�marrer le Routeur';
um6='Parfois il peut �re utile de red�marrer le routeur lorsque celui-ci fonctionne de fa�on inappropri�e. Red�marrer le Routeur n\'affectera en rien vos param�tres de configuration.'; 
um7='R�tablir les param�tres par d�faut du fabricant';
um8='Cette option r�tablira les param�tres du Routeur vers les param�tres par d�faut du fabricant. Nous vous recommandons de faire une copie de vos param�tres avant de r�tablir la configuration par d�faut.';
um9='Enregistrer/Sauvegarder les param�tres actuels';
um10='Vous pouvez sauvegarder votre configuration actuelle gr�ce � cette fonction. Cela vous permettra de la r�tablir plus tard si vous perdez les param�tres ou s\'ils sont modifi�s. Nous vous recommandons de faire une copie de vos param�tres avant de mettre � jour le micrologiciel.';
um11='R�tablir les param�tres pr�alablement sauvegard�s';
um12='Cette option vous permet de r�tablir une configuration sauvegard�e pr�alablement.';
um13='Mise � jour du micrologiciel';
um14='De temps � autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises � jour peuvent contenir des am�liorations et des solutions aux probl�mes existants.';
um15='Param�tres du syst�me';
um16='� la page des Param�tres du Syst�me, vous pouvez entrer un nouveau mot de passe administrateur, r�gler le fuseau horaire';
um17=', activer la gestion � distance, et activer/d�sactiver la fonction';
um18=' de NAT du Routeur. ';
upc1='Utilitaires > Contr�le parental';
upc2='Le Contr�le Parental de Belkin prot�ge votre famille du contenu Internet potentiellement choquant. Le Contr�le parental est d�j� configur� pour bloquer de nombreux types de contenu Web. Vous pouvez toutefois le personnaliser de mani�re � ce qu\'il autorise plus ou moins de contenu. Tous les sites Internet peuvent facilement �tre bloqu�s ou autoris�s en tout temps.';
upc3='Votre abonnement au Contr�le Parental est ';
upc4='D�SACTIV�'; 
upc5='NON ACTIV�';
upc6='ACTIV�';
upc7='Pour ne plus afficher les invites du CONTR�LE PARENTAL, cliquez ici�:';
upc8='EXPIR�';
upc9='Your subscription will expire in ';
days='jour(s)';
upc10='Informations sur le compte';
Advanced='Avanc�';
Apply='Appliquer';
upc11='Actualiser les informations sur le compte';
upc12='Notification';
upc13='Vous �tes actuellement ';
upc14=' inscrit � la fonction de notification.';
not='non';
upc15='Cliquez ici pour voir un exemple du fonctionnement de la fonction de notification.';
upc16='Exemple de notification';
upc17='Cliquez ici pour vous inscrire � la fonction de notification.';
upc18='S\'inscrire maintenant';
upc19='Cliquez ici pour voir le rapport de notification.';
upc20='Voir le rapport';
upc21='�tat du Contr�le Parental';
upc22='Activer ou D�sactiver le Filtre de Contr�le Parental.';
upc23='Le Filtre Web est actuellement ';
upc24='Notification par e-mail';
upc25='Avertissez-moi par e-mail si le Contr�le Parental est outre-pass�.';
upc26='L\'e-mail en vigueur est ';
upc27='Modifier le param�tre';
upc28='Pour visualiser ou modifier les param�tres par d�faut du logiciel du Contr�le Parental, cliquez ici';
upc29='Inscription au Contr�le Parental';
upc30='Si vous d�sirez vous abonner � la fonction de Contr�le Parental, cliquez sur le bouton ci-dessous.'; 
upc31='Vous n\'�tes actuellement <b>PAS</b> abonn� au service de Contr�le Parental.';  
upc32='Renouvellement du Contr�le Parental';
upc33='La date � laquelle votre abonnement prend fin approche. Cliquez ici pour renouveler votre abonnement.';
upc34='Renouveler maintenant';
upc35='Cette page est vide';
ON='Activ�';
OFF='�teint';
pwd='Mot de passe';
Modify='Modifier';
upa1='Utilitaires &gt; Informations sur le compte de Contr�le Parental';
upa2="Vous pouvez modifier ici vos informations concernant le Contr�le Parental, telles que l'adresse e-mail pour la notification ou le mot de passe de l'administrateur.";
upa3="Modifier l'adresse e-mail de notification du Contr�le Parental.";
upa4="votre adresse e-mail actuelle"; 
upa5='Entrez votre nouvelle adresse e-mail'; 
upa6='Entrez de nouveau votre nouvelle adresse e-mail';
upa7="Modifier de mot de passe de l'administrateur du Contr�le Parental";
upa8='Entrez votre nouveau mot de passe';
upa9="Entrez de nouveau votre nouveau mot de passe";
upa14="L'adresse e-mail ne peut �tre nulle";
Change='Modifier';
Stop='Appliquer';
upad1='Utilitaires &gt; Param�tres avanc�s de Contr�le Parental';
upad2="Le Contr�le Parental de Belkin n�cessite une �valuation de la part de Cerberian (notre partenaire) pour chaque site web demand�. Normalement, le temps de r�ponse n�cessaire est inf�rieur � 1 seconde, ce qui n'occasionne aucun d�lai. Cependant, lorsque vous demandez un site rare qui ne fait pas partie de leur base de donn�es, ils �valuent le site de fa�on dynamique, ce qui peut prendre quelques secondes en fonction de la vitesse de chargement du site. Si le temps de r�ponse est plus lent que l'intervalle ci-dessous, vous pouvez configurer le CONTR�LE PARENTAL de la fa�on suivante�: Permettre l'acc�s � tous les sites sur temporisation, ou Bloquer l'acc�s � tous les sites sur temporisation.";
Timeout='Temporisation';
upad3='Temporisation apr�s';
upad4='secondes d\'attente d\'une r�ponse';
upad5='Action par d�faut lors de d�passement de la temporisation.';
upad6='En param�trant l\'action par d�faut lors du d�passement de la temporisation, le routeur bloquera/permettra l\'acc�s � la navigation selon le param�tre �tabli.';
upad7="Permettre l'acc�s � tous les sites sur temporisation.";
upad8="Bloquer l'acc�s � tous les sites sur temporisation.";
upr1='Utilitaires > Actualisation du compte de Contr�le Parental';
upr2="N'utilisez cette fonction que lorsque les informations li�es � votre abonnement au Contr�le Parental sont incorrectes.<br>Lorsque vous cliquez sur ce bouton, le routeur t�l�charge/actualise toutes les informations de compte depuis le site de Belkin.<br>Pour actualiser les informations de compte PARENTAL CONTROL du routeur, cliquez sur Actualiser�:";
uprev1='Utilitaires > R�tablir les Param�tres Pr�c�dents';
uprev2='Cette option vous permet de r�tablir une configuration sauvegard�e pr�alablement.';  
Restore='R�tablir';
uprev3='Entrez le nom du fichier contenant les param�tres sauvegard�s.';
uprev4='Voulez-vous poursuivre et r�tablir les param�tres�?';
uprev5='Suite au r�tablissement des param�tres, le Routeur peut ne pas r�pondre aux commandes pendant une p�riode pouvant aller jusqu\'� environ une minute.\n\nCeci est normal. Ne d�branchez pas votre Routeur pendant cette p�riode.';
ur1='Utilitaires > Red�marrer le Routeur';
ur2='Il peut parfois �tre utile de red�marrer le Routeur lorsque celui-ci fonctionne de fa�on incongrue. Red�marrer le Routeur n\'affectera en rien vos param�tres de configuration. Cliquez sur le bouton ��Red�marrer le Routeur�� ci-dessous pour red�marrer le Routeur.';
ur3='Red�marrer le Routeur';
ur4='Voulez-vous vraiment red�marrer le routeur�? Red�marrer le routeur n\'affectera en rien votre configuration.';
ur5='Allouez jusqu\'� 60 secondes au Routeur pour red�marrer. Ne d�branchez pas le Routeur avant que le processus de red�marrage ne soit compl�t�.';
usave1='Utilitaires > Sauvegarder les Param�tres Actuels';
usave2='Vous pouvez sauvegarder votre configuration actuelle gr�ce � cette fonction. Cela vous permettra de la r�tablir plus tard si vous perdez les param�tres ou s\'ils sont modifi�s. Nous vous recommandons de faire une copie de vos param�tres avant de mettre � jour le micrologiciel.'; 
Save='Enregistrer';
usys1='Utilitaires > Param�tres syst�me';
usys2='Mot de passe Administrateur: '; 
usys3='Le Routeur est livr� SANS mot de passe d�fini. Si par souci de s�curit� vous d�sirer ajouter un mot de passe, vous pouvez le configurer ici.';
usys4='Entrez le Mot de Passe actuel';  
usys5='Entrez le nouveau mot de passe';  
usys6='Confirmer le nouveau Mot de Passe';  
usys7='Temporisation de la Connexion';
usys8='(1-99 minutes)'; 
usys9='Time and Time Zone: '; 
January='janvier'; February='f�vrier'; March='mars'; April='avril'; May='mai'; June='juin'; July='juillet'; August='ao�t'; September='septembre'; October='octobre'; November='novembre'; December='d�cembre';
usys10="D�finissez votre fuseau horaire. Si vous demeurez dans une r�gion ayant recours � l'heure d'�t�, cochez cette case.";
usys11='D�calage et fuseau horaire';
usys12=' (GMT-12:00) Enewetak, Kwajalein';
usys13=' (GMT-11:00) �les Midway, Samoa';
usys14=' (GMT-10:00) Hawaii';
usys15=' (GMT-09:00) Alaska';
usys16=' (GMT-08:00) Pacifique (�.U. et Canada) ; Tijuana';
usys17=' (GMT-07:00) Arizona';
usys18=' (GMT-07:00) Montagnes Rocheuses (�.-U. et Canada) ';
usys19=' (GMT-06:00) Centre (�.-U. et Canada) ';
usys20=' (GMT-06:00) Mexico, Tegucigalpa';
usys21=' (GMT-06:00) Saskatchewan';
usys22=' (GMT-05:00) Bogota, Lima, Quito';
usys23=' (GMT-05:00) Est (�.-U. et Canada) ';
usys24=' (GMT-05:00) Indiana (Est) ';
usys25=' (GMT-04:00) Heure de Atlantique (Canada) ';
usys26=' (GMT-04:00) Caracas, La Paz';
usys27=' (GMT-04:00) Santiago';
usys28=' (GMT-03:00) Terre-Neuve';
usys29=' (GMT-03:00) Brasilia';
usys30=' (GMT-03:00) Buenos Aires, Georgetown';
usys31=' (GMT-02:00) Centre-Atlantique';
usys32=' (GMT-01:00) A�ores, Iles du Cap-Vert';
usys33=' (GMT) Casablanca, Monrovia';
usys34=' (GMT) Heure de Greenwich Dublin, �dimbourg';
usys35=' (GMT) Heure de Greenwich Lisbonne, Londres';
usys36=' (GMT+01:00) Amsterdam, Berlin, Berne, Rome';
usys37=' (GMT+01:00) Stockholm, Vienne, Belgrade';
usys38=' (GMT+01:00) Bratislava, Budapest, Ljubljana';
usys39=' (GMT+01:00) Prague, Bruxelles, Copenhague, Madrid';
usys40=' (GMT+01:00) Paris, Vilnius, Sarajevo, Skopje';
usys41=' (GMT+01:00) Sofia, Varsovie, Zagreb';
usys42=' (GMT+02:00) Ath�nes, Istanbul, Minsk';
usys43=' (GMT+02:00) Bucarest';
usys44=' (GMT+02:00) Le Caire';
usys45=' (GMT+02:00) Harare, Pretoria';
usys46=' (GMT+02:00) Helsinki, Riga, Tallinn';
usys47=' (GMT+02:00) Isra�l';
usys48=' (GMT+03:00) Bagdad, Kowe�t, Nairobi, Riyad';
usys49=' (GMT+03:00) Moscou, St. Petersbourg';
usys50=' (GMT+03:00) T�h�ran';
usys51=' (GMT+04:00) Abu Dhabi, Muscat, Tbilissi, Kazan';
usys52=' (GMT+04:00) Volgograd, Kaboul';
usys53=' (GMT+05:00) Islamabad, Karachi, Iekaterinbourg';
usys54=' (GMT+06:00) Alma Ata, Dacca';
usys55=' (GMT+07:00) Bangkok, Jakarta, Hanoi';
usys56=' (GMT+08:00) P�kin, Chongqoing, Ouroumtsi';
usys57=' (GMT+08:00) Hong Kong, Perth, Singapour, Taipei';
usys58=' (GMT+09:00) Tokyo, Osaka, Sapporo, Yakoutsk';
usys59=' (GMT+10:00) Brisbane';
usys60=' (GMT+10:00) Canberra, Melbourne, Sydney';
usys61=' (GMT+10:00) Guam, Port Moresby, Vladivostok';
usys62=' (GMT+10:00) Hobart';
usys63=' (GMT+11:00) Magadan, Iles Salomon, Nouvelle-Cal�donie';
usys64=' (GMT+12:00) Fidji, Kamtchatka, Iles Marshall';
usys65=' (GMT+12:00) Wellington, Auckland';
usys66='Heure d\'�t�';
usys67='Ajuster automatiquement � l\'heure d\'�t�';
usys68='Gestion � distance:';    
AF='FONCTION AVANC�E�!';
usys69='La gestion � distance vous permet d\'apporter des changements aux param�tres de votre Routeur, o� que vous soyez gr�ce � l\'Internet. Avant d\'activer cette fonction,';
usys70='ASSUREZ-VOUS D\'AVOIR ENTR� UN MOT DE PASSE ADMINISTRATEUR.';
usys71='N\'importe quelle adresse IP peut g�rer le routeur � distance.';  
usys72='Seulement cette adresse IP peut g�rer le routeur � distance';  
usys73='Activer la NAT�:';    
usys74='Vous permet d\'�teindre la fonction de traduction d\'adresse r�seau (NAT). Dans la plupart des cas, il est recommand� de ne PAS D�SACTIVER cette fonctionnalit�. ';
usys75='Activation/D�sactivation NAT';
usys76='Activer l\'UPNP: ';   
usys77="Vous permet de d�sactiver/d�sactiver la fonction UPnP du routeur. Si vous utilisez des applications prenant en charge l'UPnP, cette fonction permettra � ces applications de configurer automatiquement le routeur.";
usys78='UPNP Enable / Disable';
usys79='Activer la mise � jour automatique du micrologiciel�:';
usys80='Vous permet de v�rifier la disponibilit� de mises � jour pour votre routeur.';
usys81='Activer/D�sactiver la mise � jour automatique du micrologiciel ';
usys82='Le mot de passe en cours n\'est pas valide ';
usys83='Le nouveau mot de passe et le mot de passe de v�rification ne correspondent pas.';
usys84='Plage de temporisation de la connexion�: 1-99';
usys85='La longeur du mot de passe est incorrecte. La longueur du mot de passe doit �tre comprise entre 3 et 12 caract�res';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='Avant d\'activer cette fonction, il est FORTEMENT RECOMMAND� que vous ajoutiez un mot de passe administrateur.';
usys88='Serveur NTP principal';
usys89='Serveur NTP secondaire';
usys90='192.43.244.18-Am�rique du Nord';
usys91='132.163.4.102-Am�rique du Nord';
usys92='192.5.41.41-Am�rique du Nord';
usys93='192.5.41.209-Am�rique du Nord';
usys94='207.200.81.113-Am�rique du Nord';
usys95='208.184.49.9-Am�rique du Nord';
usys96='129.132.2.21-Europe';
usys97='130.149.17.8-Europe';
usys98='137.189.8.174-Asie/Pacifique';
usys99='Port d\'acc�s distant';
usysipm='Vous n\'avez pas entr� les num�ros de l\'IP ou certains num�ros entr�s ne sont pas valides. Ils doivent �tre compris entre 0 et 255';
usysb1='Le Routeur est livr� SANS mot de passe d�fini. Si par souci de s�curit� vous d�sirer ajouter un mot de passe, vous pouvez le configurer ici.';
vjs1='Adresse IP incorrecte, trop longue. Veuillez v�rifier.';
vjs2='Adresse IP incorrecte, \'.\' manquant , veuillez r�essayer�!';
vjs3='Adresse IP incorrecte, il manque des nombres entre \'.\'. Veuillez r�essayer�!';
vjs4="Adresse IP incorrecte, '.' superflu , veuillez r�essayer�!"
vjs5="Adresse IP incorrecte, les nombres entre '.' sont trop grands. Veuillez r�essayer�!";
vm1='Caract�re Invalide';
vm2=' � la position';
vm3='Doit �tre ';
vjs6='Format d\'ann�e incorrect. Veuillez l\'entrer de nouveau (2002, par exemple)';
vm4='Num�ro incorrect.'; 
vjs8='Incorrect, doit �tre compris entre 1970..2037';
vjs9='Format de mois incorrect. Veuillez l\'entrer de nouveau (01...12, par exemple)';
vjs10='Veuillez d\'abord entrer l\'ann�e et le mois';
vjs11='Format de jour incorrect. Veuillez l\'entrer de nouveau (01...31, par exemple), certains mois ne pouvant �tre que (00...28)';
vjs12='Format horaire incorrect. Veuillez l\'entrer de nouveau (00...23, par exemple)';
vjs13='Format des minutes incorrect. Veuillez l\'entrer de nouveau (00..59, par exemple)';
vjs14='MTU incorrect, doit �tre comprise entre 576...1492';
vjs15='MTU incorrect, doit �tre compris entre 128...65535';
vjs16="IP incorrecte�:";  vjs161=" non comprise ";   vjs162=" sous-r�seau";
vjs17='Les deux mots de passe entr�s sont diff�rents. Veuillez v�rifier�!.';
vjs18='Veuillez entrer un num�ro de port de d�but.';
vjs19='Le num�ro de port de d�but doit �tre inf�rieur � celui du port de fin.';
vjs20='Num�ro de port incorrect. Les num�ros de ports doive �tre des entiers positifs.';
vjs21='Longueur incorrecte';
vjs22='Format invalide � la position'; vjs221=' ! Doir �tre�:';
vjs23='Adresse MAC invalide, ceci est une adresse de diffusion.';
vjs24='Adresse MAC incorrecte. Il s\'agit d\'une adresse de type Null.';
vjs25='Adresse MAC invalide, ceci est une adresse de multidiffusion.';
vjs26='Adresses IP de d�but et de fin incorrectes. L\'adresse IP de fin doit �tre sup�rieure � celle du d�but.';
vjs27='Num�ro incorrect�! Doit �tre compris entre 1..65535';
vjs28='Format de masque de r�seau incorrect.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Adresse IP incorrecte. Le dernier num�ro ne peut �tre ni 0 ni 255.';
vjs31='Adresse IP LAN non valide, le premier num�ro ne peut pas �tre 127.';
vjs32='Adresse IP LAN incorrecte. Il ne peut s\'agir de 0.0.0.0';
vjs33='Adresse IP LAN incorrecte. Il ne peut s\'agir de 224.0.0.0';
vjs34='La plage autoris�e est';
vp1='Ce site web est bloqu� par le CONTR�LE PARENTAL';
vp2=' est bloqu� par le CONTR�LE PARENTAL et est class� comme�: ';
vp3='Si vous �tes en d�saccord avec l\'�valuation et d�sirez que le site soit �valu� a nouveau, cliquez sur D�saccord�:';
vp4='Si vous souhaitez modifier les param�tres du CONTR�LE PARENTAL, cliquez sur ��Modifier���:';
vp5='Pour outre-passer vos param�tres (cet ordinateur seulement) pour 1 heure, entrez votre mot de passe et cliquez sur ��Outre-Passer���:';
Disagree='D�saccord';
Change='Modifier';
Override='Outre-passer';
wc1='WAN > Type de Connexion';
wc2='S�lectionnez votre type de connexion:'; 
wc3='Dynamique'; 
wc4='La connexion de type Dynamique est la plus courante. Si vous utilisez un modem c�ble, il est fort probable que vous poss�diez une connexion dynamique. Si vous utilisez un modem c�ble ou n\'�tes pas certains de votre type de connexion, utilisez celle-ci.';  
wc5='Fixe'; 
wc6='Une connexion de type Adresse IP Fixe est moins courante que les autres types de connexion. Utilisez ce type de s�lection si votre FAI vous a attribu� une adresse IP qui ne change jamais.';  
wc7='PPPoE'; 
wc8='Si vous utilisez un modem DSL et/ou votre FAI vous a attribu� un nom d\'utilisateur et un mot de passe, il est fort probablement que votre connexion soit de type PPPoE. S�lectionnez ce type de connexion.';  
wc9='PPTP'; 
wc10='[Europe seulement]. Ce type de connexion se retrouve surtout en Europe. Si votre FAI vous recommande d\'utiliser sp�cifiquement le protocole PPTP et vous a fourni les informations requises, utilisez alors cette option.'; 
wc11='Telstra BigPond'; 
wc12='[Australie seulement] Les utilisateurs C�ble ou DSL de Telstra BigPond doivent utiliser cette option pour configurer leur connexion.'; 
Next='Suivant >';
wds1='WAN > DNS';
wds2='Si votre FAI vous a attribu� une adresse DNS sp�cifique, entrez l\'adresse dans cette fen�tre et cliquez sur ��Enregistrer les Modifications��.'; 
wds3='Automatiquement du FAI'; 
wds4='Adresse DNS';   
wds5='Adresse DNS Secondaire';   
wds6='DNS = serveur de nom de domaine. Un Serveur de Nom de Domaine est un serveur que l\'on retrouve sur l\'Internet, et qui traduit les URL (Universal Resource Links) telles que www.belkin.com en adresses IP.';
wds7='Vous devez entrer les param�tres DNS fournis par votre FAI si vous n\'utilisez pas la fonction DNS automatique';
wdy1='WAN > Type de connexion > IP dynamique';
wdy2='Pour configurer vos param�tres d\'adressage IP dynamique, entrez les informations de connexion ci-dessous et cliquez sur ��Enregistrer les Modifications��.';
wdy3='Nom d\'h�te';  
wdy4='Nom d\'H�te = nom requis par certains FAI pour la connexion � leur syst�me.';  
wdy5='Changer l\'Adresse MAC du WAN'; 
wdy6='Nom d\'h�te incorrect�: ~!##$%^&*()=+{}[]|\'":;?/.<> ';
wmc1='WAN > Adresse MAC';
wmc2='Certains FAI exigent que l\'adresse MAC de la carte r�seau de votre ordinateur soit clon�e (copi�e) dans le routeur. Advenant le cas que vous ignoriez si votre FAI l\'exige, clonez simplement l\'adresse MAC de l\'ordinateur originellement connect� au modem. Le clonage de l\'adresse MAC n\'entra�nera aucun probl�me pour votre r�seau.';
wmc3='Adresse MAC du WAN'; 
wmc4='Cloner l\'Adresse MAC de l\'Ordinateur';  
wmc5='Cloner';
wm1='Internet/WAN';
WAN='WAN';
wm2='Vous pouvez configurer votre Routeur selon les param�tres de votre FAI � l\'onglet Internet / WAN. Le Routeur peut pratiquement se connecter � tous les syst�mes de FAI, si bien s�r vous avez configur� votre Routeur avec les param�tres appropri�s � votre type de connexion. Pour configurer votre Routeur selon les param�tres de votre FAI, cliquez sur Type de Connexion � l\'onglet Internet / WAN, � la gauche de l\'�cran.';
wm3='Types de Connexions prises en charge:';
wm4='<b>Dynamique�:</b> y compris les FAI qui exigent un nom d\'h�te et ceux qui lient la connexion � une adresse MAC sp�cifique.';
wm5='<b> Adresse IP fixe�:</b> le Routeur prend en charge les connexions aux FAI attribuant une adresse IP fixe.'; 
wm6='<b>PPPoE�:</b> Le Routeur prend en charge les connexions dynamiques qui exigent une connexion PPPoE comme autentification.'; 
wm7='<b>PPTP�:</b> Pour utilisateurs Europ�ens SEULEMENT. le Routeur prend en charge les connexions aux FAI europ�ens utilisant le protocole PPTP.';
wm8='<b>Telstra BigPond :</b>';
wm9='Pour utilisateurs Australiens SEULEMENT. Le routeur prend en charge les connexions � Telstra BigPond.'; 
wpe1='WAN > Type de Connexion > PPPoE';
wpe2='Pour entrez vos param�tres PPPoE, entrez les informations ci-dessous et cliquez sur ��Enregistrer les Modifications��.';
wpe3='Nom d\'utilisateur';   
wpe4='Entrez � nouveau le mot de passe';   
wpe5='Nom de Service (Facultatif)';    
wpe6='MTU (576-1492)';    
wpe7='N\'apportez aucun changement aux param�tres de MTU, � moins que votre FAI ne vous ait fourni un param�tre diff�rent de 1432.';
wpe8='D�connecter apr�s';
wpe9=' minutes d\'inactivit�.';
idlerangerro='La dur�e d\'inactivit� des num�ros entr�s est invalide.\n Les num�ros doivent �tre compris entre 1 et 99.';
wpe10='Caract�re non valide�: <>&';
pm='Votre service est dans l\'impossibilit� de v�rifier le mot de passe entr�. Veuillez vous assurer que vous l\'avez correctement entr�.';
wpe11='Valeur MTU incorrecte';
wpe12='Veuillez entrer votre nom d\'utilisateur';
wpp1='WAN > Type de Connexion > PPTP';
wpp2='Compte PPTP';    
wpp3='Mot de passe PPTP';    
wpp4='Entrez � nouveau le mot de passe';   
wpp5='Nom d\'h�te';   
wpp6='Adresse de service IP';  
wpp7='Mon adresse IP';  
wpp8='Mon masque de sous-r�seau';  
wpp9='ID de connexion (optionnel)';    
wpp10='D�connecter apr�s';
wpp11=' minutes d\'inactivit�.';
wpp12='Cliquez ici pour entrer vos param�tres de DNS.';
wpp13='Veuillez entrer votre compte PPTP';
wpp14='Veuillez entrer � nouveau le mot de passe!';
wpp15='Veuillez entrer votre mot de passe';
ws1='WAN > Type de connexion > IP dynamique';
ws2='Pour configurer vos param�tres d\'adressage IP statique, entrez les informations de connexion ci-dessous et cliquez sur ��Enregistrer les Modifications��.';
ws3='Adresse IP';  
ws4='Masque de Sous-R�seau';   
ws5='Adresse de passerelle du FAI';   
ws6='Mon FAI m\'attribue plus d\'une adresse IP Statique?';  
ws7='Cliquez ici pour entrer vos param�tres de DNS.';  
dm='Il est possible que vous n\'ayez pas entr� tous les num�ros DNS ou certains de ces num�ros ne sont pas valides. Ils doivent �tre compris entre 0 et 255.';
sm='The Subnet mask numbers you entered are invalid.';
ws8='Veuillez entrer/valider vos param�tres d\'adresse DNS � l\'�cran suivant.';
wsc1='Alias IP Address';  
im='La liste d\'alias d\'Adresses IP est pleine. Il est impossible de cr�er d\'autres r�gles.';
wt1='WAN > Type de connexion > Telstra BigPond';
wt2='Si votre FAI est Telstra Big Pond en Australie, vous devez entrer vos informations ci-dessous. Ces informations vous sont fournies par Telstra Big Pond.';
wt3='S�lectionnez votre �tat de r�sidence�:';
wt4='L\'utilisateur d�cide manuellement de la connexion au serveur'; wt5='Connexion au Serveur'; 
Logout='D�connexion';
wt6='Veuillez entrer l\'adresse IP du Serveur ou s�lectionner votre �tat de r�sidence � partir du menu.';
wla1='Sans Fil > Utilisation comme point d\'acc�s';
wlad1='Le routeur peut �tre configur� pour agir strictement en tant que point d\'acc�s, outre-passant enti�rement les fonction d\'acheminement et de pare-feu. Pour ce faire, s�lectionnez ��Activer�� et entrez l\'Adresse IP que vous d�sirez attribuer au point d\'acc�s.';
wlad2='Activation/D�sactivation';
wlae1='Sp�cifiez l\'adresse IP';  
wlae2='Masque de sous-r�seau';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Les canaux doivent �tre identiques sur le routeur et le PA.<br>'+
      '2) Les param�tres de s�curit� (WEP) doivent �tre identiques sur le routeur et le PA.<br>'+
      '3) Si le filtrage MAC est activ�, assurez-vous d\'ajouter la ou les adresse(s) MAC WLAN du routeur/PA afin de permettre � ceux-ci de communiquer.<br>';
wlc1='Sans fil > Canal et SSID';
wlc2='Pour apporter des modifications aux param�tres du routeur, veuillez le faire ici. Cliquez sur ��Enregistrer les modifications�� pour enregistrer les param�tres.';
wlc3='Canal sans fil';
wlc4='SSID';  
wlc5='Mode Sans Fil'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Diffusion du SSID';  
wlc10='Turbo Mode'; 
wlc11="L'activation du Mode Turbo permet au routeur ou au point d'acc�s d'utiliser le Frame Bursting pour obtenir un d�bit maximal entre le routeur ou le point d'acc�s et les clients 802.11g, Le Mode Turbo fonctionne uniquement aupr�s de clients 802.11g prenant en charge le Mode Turbo. Les clients 802.11g de Belkin poss�dant les pilotes les plus r�cents prennent en charge le Mode Turbo. Les clients qui ne prennent pas en charge le Mode Turbo fonctionneront de fa�on habituelle si le Mode Turbo est activ�.";
wlc12='Mode Prot�g�';
wlc13="REMARQUE�: Dans la majorit� des cas, vous obtiendrez de meilleures performances (d�bit) avec le Mode Prot�g� �tant D�sactiv�. Si vous travaillez dans un environnement avec un trafic 802.11b TR�S DENSE ou subissez des interf�rences, vous obtiendrez de meilleures performances avec le Mode Prot�g� �tant Activ�.";
wlc14='Canal actuel';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
wle1='Sans Fil > S�curit�';
wle2='Mode S�curis�';
wle3='WPA-PSK (sans serveur)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="Vous pouvez configurer les param�tres de s�curit�/chiffrement ici. La S�curit� devrait �tre activ�e pour assurer la s�curit� maximale du r�seau sans fil. Le WPA (Wireless Protected Access) pr�sente un changement de cl�s dynamique et constitue la meilleure option de s�curit�. Dans les environnements sans fil, l� o� aucun des p�riph�riques ne prend en charge le WPA, le mode WEP (Wired Equivalent Privacy) devrait �tre utilis�.";
wle8='(paires de 13 chiffres hexad�cimaux)';  
wle9='REMARQUE�: ';
wle10='Pour g�n�rer automatiquement des paires hexad�cimales � l\'aide d\'une expression mot de passe, cochez la case de gauche et saisissez ici votre expression mot de passe ';
PP='Expression mot de passe'; 
generate='g�n�rer';
errm='Veuillez entrer une expression mot de passe';
keym='La cl� n\'est pas compl�te';
wle11='Cl� 1';  
wle12='Cl� 2'; 
wle13='Cl� 3'; 
wle14='Cl� 4';   
wle15='(paires de 13 chiffres hexad�cimaux)'; 
wle16='WPA/WPA2(with Server)';
wle17='Param�tres avanc�s - Le Wireless Protected Access utilisant un serveur pour distribuer les cl�s aux clients�: Cette option n�cessite qu\'un serveur Radius soit en op�ration sur le r�seau.';
keym1=' est incompl�te.';
keym2=' est invalide, veuillez d\'abord corriger�!';
wlm1='Sans Fil';
wlm2='Dans cet onglet, vous pouvez ajuster les param�tres de la section Sans Fil du Routeur.';
wlm3='Canal et SSID';
wlm4='Faire des ajustements au canal sans fil et au SSID (nom du r�seau sans fil).';
wlm5='S�curit�';
wlm6='Modifiez les param�tres de s�curit�, tels que les param�tres de WPA ou de WEP. ';
wlm7='Utiliser comme point d\'acc�s';
wlm8='D�finissez le mode de fonctionnement du routeur sur Point d\'acc�s ';
wlm9='Sp�cifiez l\'adresse IP';
wlm10='Sp�cifiez l\'adresse IP du PA.';
wlm11='Contr�le d\'adresses MAC'
wlm12='Dressez une liste de clients qui obtiendront ou se verront refuser l\'acc�s au r�seau sans fil.';
wlm13='Pont Sans Fil';
wlm14='Vous permet de param�trer les modes de pontage WDS.';
ww8='Entrez le num�ro de port du radius';
ww9='Le num�ro de port du Radius doit �tre un chiffre entre 1 et 65535';
ww10='Entrez la cl� du radius�:';
ww11='L\'intervalle de re-saisie de la cl� doit �tre un chiffre';
ww12='L\'intervalle de ressaisie de la cl� doit �tre plus grand que 60 secondes';
ww13='Authentification';
ww1='WPA (avec serveur) ';
ww2='Param�tres avanc�s - Le Wireless Protected Access utilisant un serveur pour distribuer les cl�s aux clients�: Cette option n�cessite qu\'un serveur Radius soit en op�ration sur le r�seau.';
ww3='Technique de chiffrement';
ww4='Serveur Radius';
ww5='Port Radius';
ww6='Cl� Radius';
ww7='Intervalle de ressaisie de la cl�';
seconds='secondes';
wwp6='Entrez la cl� pr�-partag�e (PSK)';
wwp7='La cl� pr�-partag�e doit �tre compos�e de 8 � 63 caract�res ou 64 hex';
wwp1='TKIP est l\'option par d�faut';
wwp2='Cl� Pr�-Partag�e (Pre-Shared Key - PSK)';
wwp3='WPA-PSK (sans serveur)';
wwp4='Wireless Protected Access avec cl� pr�-partag�e (pre-shared key)�: La cl� est un mot de passe, sous la forme d\'un mot, d\'une phrase ou d\'une cha�ne de lettres et de chiffres. La cl� doit �tre compos�e de <b>8</b> � <b>63</b> caract�res, et peut inclure des espaces et des symboles, ou une cl� hex <b>64</b> bits (0-F) seulement. Chaque client se connectant � un r�seau doit utiliser la m�me cl� (cl� pr�-partag�e).';
wwp5='Dissimuler la PSK';
wlb1='Sans Fil > Pont Sans Fil';
wlb2="Le Pontage Sans Fil ou Syst�me de Distribution Sans Fil (Wireless Distribution System - WDS) est utilis� pour connecter ensemble des routeurs et des points d'acc�s sans fil dans le but d'�tendre la port�e d'un r�seau.";
wlb3='Activer le Pontage sans fil.';
wlb4="(activer cette fonction permet � d'autres points d'acc�s de se connecter � ce point d'acc�s.)";
wlb5='Activ� par d�faut';
wlb6='Permettre UNIQUEMENT � des points d\'acc�s sp�cifiques de se connecter.';
wlb7="(Entrez l'Adresse MAC sans fil du point d'acc�s pour �tablir la connexion. Si cette option n'est pas coch�e, tous les PA pourront se connecter au r�seau. Remarque�: lorsque vous connectez des points d'acc�s, au moins l'un d'entre eux doit appeler l'adresse MAC de l'autre. Rappel�: vous pouvez conna�tre l'adresse MAC en utilisant la fonction de surveillance du site sur une carte client sans fil.)";
wlb8='D�sactiver la possibilit� pour les CLIENTS sans fil de se connecter.';
wlb9="(Cette fonction ne devrait �tre utilis�e que lorsqu'un point d'acc�s est utilis� exclusivement pour se connecter � d'autre points d'acc�s sans fil.)";
wlb10='pas valide';
BSSID='BSSID';
wlbss1='Analyse du site';
wlbss2='Type de r�seau';
wlbss3='Chiffrement';
wlbss4='S�lectionnez';
wlbss5='Aucun BSSID trouv�.'; 
wlbss6="Les quatre champs sont pleins, effacez-en un avant d'en entrer un nouveau�!";
wlq1='Configuration du QoS (Quality of Service)';
wlq2="Le QoS s'assure que les donn�es prioritaires sur votre r�seau, telles que le contenu multim�dia et la Voix sur IP (VoIP), ne soient pas ��contamin�es�� par les donn�es transmises sur votre r�seau. Bas� sur la norme 802.11e, vous pouvez activer/d�sactiver cette fonction ou vous pouvez choisir le mode d'accus� de r�ception de votre choix. Si vous comptez utiliser le transfert multim�dia en temps r�el ou la Voix sur IP sur votre r�seau, il est recommand� d'activer la fonction QoS.<br>"; 
wlq3='S�lecteur QoS'; 
wlq4='Vous permet d\activer/d�sactiver la fonction QoS.<br>'; 
wlac1='Mode ACK'; 
wlac2='Il existe deux modes d\'accus�s de r�ception (AR - ACK en anglais), pouvant �tre utilis�s pour tirer les meilleures performances multim�dia de votre r�seau�: Burst ACK et Immediate ACK. <br><br>'+
"Immediate ACK est le param�tre par d�faut. Nous vous le recommandons pour le fonctionnement normal du r�seau. Modifier le Mode AR de ��Immediate ACK�� � ��Burst ACK�� peut affecter le d�bit � longue port�e. Utilisez ��Immediate ACK�� lorsque la performance � grande distance est importante. <br><br>"+
"Le mode ��Burst ACK�� diminue le surd�bit en n'acquittant pas chaque paquet envoy� sur le r�seau. En pr�sence d\'une bonne connexion entre le routeur et le client, le mode ��Burst ACK�� peut am�liorer le d�bit. Si une application, telle que le t�l�chargement de contenu vid�o en temps r�el, requiert une bande passante maximale, utilisez le mode ��Burst ACK��. Rappelez-vous que la performance � grande port�e sera affect�e par l'utilisation du mode ��Burst ACK��. <br>";
wmac1='Configuration du contr�le d\'adresses MAC'; 
wmac2='Le filtre d\'adresse MAC repr�sente une puissante caract�ristique de s�curit�, vous permettant d\'autoriser, � des ordinateurs sp�cifiques, l\'acc�s � votre r�seau sans fil. Remarque�: Cette liste ne s\'applique qu\'aux ordinateurs sans fil. Cette liste peut �tre configur�e de sorte que tout ordinateur non sp�cifi� dans les param�tres du filtre et qui tente d\'acc�der au r�seau se verra refuser l\'acc�s. Lorsque vous activez cette fonction, vous devez entrer l\'adresse MAC de chaque client (ordinateur) de votre r�seau, pour permettre � chacun d\'acc�der au r�seau. La fonction ��Bloquer�� vous permet d\'activer et de d�sactiver facilement l\'acc�s au r�seau pour tout ordinateur sans devoir ajouter l\'adresse MAC de l\'ordinateur � la liste ni la supprimer.<br>'+
'Dresser une liste d\'ordinateurs ��autoris�s�� <br>'+
 '1.S�lectionnez la case d\'option ��Autoriser�� (1) pour commencer � dresser une liste d\'ordinateurs pouvant se connecter � votre r�seau sans fil.<br>'+
 '2. Puis, dans le champ ��Addresse MAC�� vide (3), entrez l\'adresse MAC de l\'ordinateur � qui vous autorisez l\'acc�s � votre r�seau sans fil. Cliquez ensuite sur ��Ajouter�� (4).<br>'+
 '3. Recommencez pour chaque ordinateur.<br>'+
 '4. Cliquez sur ��Enregistrer les modifications�� (5) pour terminer.<br><br>'+
'Dresser une liste d\'ordinateurs ��refus�s�� <br>'+
'La liste d\'acc�s restreint vous permet de sp�cifier les ordinateurs qui se verront REFUSER l\'acc�s au r�seau. Tout ordinateur se trouvant dans la liste se verra refuser l\'acc�s au r�seau sans fil. Tous les autres pourront y acc�der.<br>'+
 '1.S�lectionnez la case d\'option ��Refuser�� (2) pour commencer � dresser une liste d\'ordinateurs qui se verront refuser l\'acc�s � votre r�seau sans fil.<br>'+
 '2. Puis, dans le champ ��Addresse MAC�� vide (3), entrez l\'adresse MAC de l\'ordinateur � qui vous refusez l\'acc�s � votre r�seau sans fil. Cliquez ensuite sur ��Ajouter�� (4).<br>'+
 '3. Recommencez pour chaque ordinateur.<br>'+
 '4. Cliquez sur ��Enregistrer les modifications�� (5) pour terminer.<br>'; 
wlmc1='Wireless > Contr�le d\'adresse MAC';
wlmc2='Le Contr�le d\'adresse MAC permet de dresser une liste de clients � qui vous permettrez ou refuserez l\'acc�s au r�seau sans fil.';
Allow='Autoriser';   Deny='Refuser';   //Disable='D�sactiver';
wlmc7='D�terminez si vous voulez permettre ou restreindre l\'acc�s � la liste d\'adresses MAC en premier lieu�!';
wlmc6='Impossible d\'entrer plus de 16 adresses MAC�!';
wlmc5='L\'adresse MAC exacte doit �tre XX:XX:XX:XX:XX:XX, X �tant compris entre 0~9 et a-f�!';
wlmc3="Invalid MAC address ";
wlmc4='Veuillez d\'abord corriger�!';
ENTRY_FULL	= 'Toutes les entr�es sont pleines.\nVeuillez effacer certaines entr�es et recommencer.';
CLEAR_CONFIRM= 'Voulez-vous effacer l\'entr�e ';
CLEAR_ALL_CONFIRM = 'Voulez-vous effacer toutes les entr�es�?';
ERR_INTERNAL	= 'Erreur Interne�: Veuillez v�rifier la fonction javascript -- ';
g1='The L\'adresse IP repr�sente l\'Adresse IP interne du routeur. Pour acc�der � l\'interface de configuration '+
'avanc�e, entrez cette adresse IP dans la barre d\'adresse de votre navigateur. Cette adresse peut �tre '+  
'modifi�e au besoin. Pour modifier l\'adresse IP, entrez la nouvelle adresse IP et cliquez sur ��Enregistrer '+  
'les modifications��. L\'adresse IP choisie doit �tre une adresse IP non-acheminable. Exemples d\'adresse IP '+  
'non-acheminable : '; 
g2='192.168.x.x (o� x est un nombre compris entre 0 et 255.)<br>';
g3='10.x.x.x (o� x est un nombre compris entre 0 et 255)<br>';
g4='172.y.x.x (o� y est un nombre compris entre 16 et 31, et x est un chiffre est compris entre 0 et 255.)<br>';
g5='Il n\'est pas n�cessaire de modifier le masque '+
'de sous-r�seau. Il est toutefois possible de le modifier au besoin. N\'apportez des changements au masque de sous-r�seau '+
'que si vous le devez absolument.<br>';
g6="DNS est l'acronyme de Domain Name Server, qui se traduit par Serveur de Noms de Domaine. Un serveur de noms de domaine est un serveur qui se trouve sur Internet "+ 
 "et qui traduit les adresses URL (Universal Resource Links), telles que www.belkin.com, en "+ 
"adresses IP. La plupart des FAI n'exigent pas que vous entriez ces informations lors de la configuration du routeur. La "+ 
"bo�te ��Obtenir Automatiquement du FAI�� ne devrait �tre coch�e que lorsque votre FAI ne vous a pas attribu� d'adresse "+
"de DNS sp�cifique. Si vous utilisez une connexion de type IP fixe, il est possible que vous deviez entrer une "+
"adresse DNS sp�cifique et une adresse DNS secondaire pour assurer le bon fonctionnement de votre connexion. Si "+
"vous utilisez une connexion de type dynamique ou PPPoE, il est fort probable que vous n'ayez pas � entrer une adresse "+ 
"DNS. Pour entrer les param�tres d'adresse DNS, d�s�lectionnez la case ��Automatique du FAI�� et "+
"entrez les chiffres DNS dans les espaces fournis � cet effet. Cliquez sur ��Enregistrer les modifications�� pour enregistrer les param�tres. <br>";
g7="La fonction de serveur DHCP permet la mise en place d'un r�seau en toute simplicit�, en attribuant une adresse IP "+ 
"� chacun des ordinateurs du r�seau. Le serveur DHCP peut �tre d�sactiv� au besoin. Si vous "+
"d�sactivez le serveur DHCP, vous devrez entrer manuellement une adresse IP fixe pour chaque ordinateur "+
"du r�seau. Le pool d'adresses IP est la plage d'adresses IP mises de c�t� pour attribution dynamique "+
"aux ordinateurs de votre r�seau. La valeur par d�faut est de 2 � 100 (99 ordinateurs). Pour changer "+
"ce nombre, entrez de nouvelles adresses IP de d�but et de fin, puis cliquez sur ��Enregistrer les modifications��. <br>";
g8="Vous pouvez donner un nom de domaine local (nom de r�seau) � votre r�seau. Il n'est pas n�cessaire de modifier "+ 
"ce param�tre � moins qu'un imp�ratif particulier ne vous y oblige. Vous pouvez donner n'importe "+
"quel nom � votre r�seau (��MON R�SEAU��, par exemple). <br>";
g9='IP dynamique';
g10="Une connexion de type dynamique est le type de connexion le plus courant, et se retrouve sur les modems c�ble. "+ 
"Choisir l'option de connexion dynamique est souvent suffisant pour compl�ter la connexion "+ 
"� votre FAI. Certains types de connexion dynamique peuvent exiger un Nom d'H�te. Si votre FAI vous a attribu� un Nom d'H�te "+
"vous pouvez entrer celui-ci dans l'espace pr�vu. Votre Nom d'H�te est attribu� par votre FAI. "+
"Certaines connexions dynamiques peuvent exiger le clonage de l'adresse MAC du PC "+
"originellement connect� au modem. Pour ce faire, cliquez sur le lien Modifier l'adresse MAC du WAN "+
"� l'�cran. L'indicateur d'�tat de l'Internet affichera ��Connexion OK�� si votre routeur est configur� de fa�on appropri�e. <br>";
g11="Une connexion de type Adresse IP fixe est moins courante que les autres types de connexion. Si c'est le cas, "+
"vous devez conna�tre votre adresse IP, celle de votre masque de sous-r�seau ainsi que l'adresse de passerelle "+
"de votre FAI. Vous pouvez obtenir ces informations aupr�s de votre FAI ou parmi les documents fournis "+ 
"par votre FAI. Entrez les informations, et cliquez sur ��Enregistrer les Modifications��. Apr�s avoir enregistr� les modifications, "+
"l'indicateur d'�tat de l'Internet affichera ��Connexion OK�� si votre routeur est correctement configur�.<br><br>"+
"Si votre FAI vous a attribu� plus d'une adresse IP fixe, votre routeur est en mesure de recevoir "+ 
"jusqu'� cinq adresses IP fixes WAN. S�lectionnez ��Mon FAI fournit plus d'une adresse IP fixe��, "+
"et entrez les autres adresses. <br>"; 
g12="La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoE. Si vous utilisez un modem ADSL pour vous connecter � "+
"Internet, votre FAI utilise probablement le protocole PPPoE pour vous connecter au service. Si vous disposez, "+
"chez vous ou au bureau, d'une connexion � Internet qui ne n�cessite pas de modem, vous pouvez �galement utiliser PPPoE. "+
"<br><br>"+
"Vous poss�dez une connexion de type PPPoE si�:<br>"+ 
"1) Votre FAI vous a attribu� un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher � Internet.<br>"+
"2) Votre FAI vous a fourni des logiciels tels que WinPOET et Enternet300, et vous utilisez ceux-ci pour vous brancher � Internet.<br>"+
"3) Vous devez double-cliquer une ic�ne sur votre bureau, autre que celle de votre navigateur, pour vous brancher � Internet.<br><br>"+
"Pour configurer le routeur selon le protocole PPPoE, entrez votre nom d'utilisateur et votre mot de passe dans les champs pr�vus. "+
"Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide. "+
"Apr�s avoir entr� les informations, cliquez sur ��Enregistrer les modifications��. Apr�s avoir enregistr� les modifications, "+
"l'indicateur Statut d'Internet affichera ��Connexion OK�� si votre routeur est correctement configur�. "+
"Pour plus d'informations sur la configuration de votre routeur selon le protocole PPPoE, reportez-vous au manuel de l'utilisateur.<br>";
g13="Certains FAI exigent une connexion suivant le protocole PPTP. Ceci cr�e une connexion directe avec le syst�me du FAI. "+
"Entrez l'information fournie par votre FAI dans le champ pr�vu � cet effet. Lorsque vous avez termin�, "+
"Cliquez sur ��Enregistrer les Modifications��. Apr�s avoir enregistr� les modifications, l'indicateur Statut d'Internet affichera "+
"��Connect頻 si votre routeur est correctement configur�. ";
g14="Votre nom d'utilisateur et votre mot de passe vous sont fournis par Telstra BigPond. Saisissez ces donn�es ci-dessous. "+ 
"Lorsque vous choisissez votre �tat, l'adresse IP du serveur de connexion sera configur�e automatiquement. "+
"Si l'adresse du serveur de connexion est diff�rente de celle qui appara�t ici, "+
"vous pouvez entrer manuellement l'adresse IP du serveur de connexion. "+
"Apr�s avoir entr� les informations, cliquez sur ��Enregistrer les Modifications��. "+ 
"Apr�s avoir enregistr� les modifications, l'indicateur Statut d'Internet affichera ��Connect頻 "+
"si votre routeur est correctement configur�. ";
 g15='Param�tre MTU';
g16="Le param�tre MTU ne devrait jamais �tre modifi�, � moins que votre FAI ne vous ait fourni un param�tre sp�cifique. "+ 
"Modifier le param�tre de MTU peut entra�ner des probl�mes relatifs � votre connexion � Internet, notamment "+ 
"des d�connexions, un acc�s Internet lent et une d�faillance des applications Internet. "; 
g17='D�connexion apr�s...'; 
g18="La fonction de d�connexion permet de d�connecter automatiquement le routeur de votre FAI lorsque "+ 
"celui-ci est inactif pendant une p�riode de temps d�termin�e. Par exemple, en s�lectionnant "+
"cette option et en entrant le chiffre 5 dans le champ des minutes, le routeur "+
"se d�connectera automatiquement d'Internet apr�s 5�minutes d'inactivit� Internet. Cette option devrait �tre utilis�e "+ 
"si votre FAI vous facture � la minute. ";
g19="MAC est l'acronyme de Media Access Control. Tous les composants r�seau, notamment les cartes, "+ 
"les adaptateurs et les routeurs ont un ��num�ro de s�rie�� unique appel� adresse MAC. Il est possible que votre FAI "+
"enregistre l'adresse MAC de l'adaptateur de votre ordinateur et n'autorise que cet ordinateur "+ 
"� se brancher � Internet. Lorsque vous installez le routeur, son adresse MAC sera lue "+ 
"par votre FAI et ceci peut emp�cher le bon fonctionnement de votre connexion. Belkin vous permet "+ 
"de cloner (copier) l'adresse MAC de l'ordinateur dans le routeur. Cette adresse MAC "+ 
"� son tour, sera vue par le syst�me du FAI comme l'adresse MAC d'origine et autorisera "+ 
"la connexion. Si vous ne savez pas si votre FAI a besoin de voir l'adresse MAC d'origine, "+ 
"clonez simplement l'adresse MAC de l'ordinateur qui �tait reli� "+ 
"au modem au d�part. Le clonage de l'adresse n'entra�nera aucun probl�me � votre r�seau. <br> "+
"Pour cloner l'adresse MAC, assurez-vous d'utiliser l'ordinateur qui �tait CONNECT� � L'ORIGINE "+
"u modem avant que le routeur ne soit install�. Cliquez sur le bouton ��Cloner l'adresse  "+ 
"MAC��. Cliquez sur ��Enregistrer les Modifications��. Votre adresse MAC est maintenant clon�e dans le routeur. ";
g20="Pour modifier le canal d'op�ration du routeur, s�lectionnez le canal d�sir� � partir de la liste d�roulante et s�lectionnez votre canal. Cliquez sur ��Enregistrer les modifications�� pour enregistrer les param�tres. Vous "+
 "pouvez �galement modifier le SSID. Le SSID est l'�quivalent du nom du r�seau sans fil. Vous pouvez lui donner n'importe quel nom. S'il existe d'autres r�seaux sans fil dans votre "+
 "environnement imm�diat, vous devez donner un nom unique au v�tre. La valeur par d�faut est Belkin_Pre-N_xxxxxx. Pour "+ 
"le modifier, cliquez � l'int�rieur de la case SSID et entrez le nouveau nom. Cliquez sur ��Enregistrer les modifications��.";
g21="Il est possible de rendre presque invisible votre r�seau sans fil. En d�sactivant l'�mission du SSID, "+ 
"votre r�seau n'appara�tra pas lors de l'analyse du site. L'analyse de site est une fonction "+
"que poss�dent la majorit� des adaptateurs r�seau sans fil disponibles sur le march�. Elle balaye ��l'air ambiant�� � la recherche"+
"de r�seaux et permet � l'ordinateur de choisir parmi eux. Le fait de d�sactiver "+
"la fonction d'�mission du SSID renforce la s�curit� du r�seau.";
g22="Lorsque vous utilisez le routeur comme point d'acc�s, vous devez indiquer l'adresse IP du point"+
 "d'acc�s. Cette adresse IP doit figurer dans la m�me plage que le r�seau auquel"+
 "vous allez vous connecter. Pour acc�der � nouveau � l'interface d'installation �volu�e du routeur, entrez"+
 "l'adresse IP dans le navigateur Web et connectez-vous.";
g23="Utilisation de la fonction de commutation entre les modes sans fil";
g24="Ce commutateur vous permet de configurer les modes sans fil du routeur. Il existe trois modes : <br> "+
"1) 802.11g only<br>"+
"Ce param�tre vous permet de relier des dispositifs Pre-N et 802.11g � votre r�seau, en laissant de c�t� les p�riph�riques 802.11b.<br> "+
"2) 802.11g & 802.11b<br>"+
"Ce param�tre vous permet de relier des dispositifs Pre-N, 802.11g et 802.11b � votre r�seau. <br> "+
"3) Off<br>"+
"Ce param�tre vous permet d'�teindre le point d'acc�s du routeur, pour ainsi emp�cher tout dispositif r�seau de rejoindre votre r�seau. Ceci vous permet de s�curiser votre r�seau en votre absence, par exemple, ou lorsque vous d�sirez ne pas utiliser la fonction sans fil de votre R�seau � un moment donn�.";
g25="Serveurs virtuels";
g26="Cette fonction vous permet de relayer les appels de service externes (Interner) tel "+ 
"un serveur Web (port 80), un serveur FTP (port 21) ou d'autres applications, via le routeur "+ 
"et vers votre r�seau interne. �tant donn� que vos ordinateurs internes sont prot�g�s par le pare-feu, "+
"les machines provenant d'Internet ne peuvent pas acc�der � ceux-ci puisqu'ils sont ��invisibles��. Si vous devez "+ 
"configurer la fonction de Serveur virtuel pour une application particuli�re, une liste d'applications "+
"courantes vous est fournie. Si votre application ne s'y trouve pas, vous devez communiquer avec "+ 
"le fabricant de l'application et d�terminer quels param�tres de ports sont requis. Pour effectuer une s�lection dans la liste fournie, "+
"choisissez votre application � partir de la liste d�roulante. S�lectionnez la ligne dont vous voulez copier"+
"les param�tres dans la liste d�roulante ��vers la ligne��, puis cliquez ��Entr�e��. Les param�tres"+
"seront transf�r�s vers la ligne sp�cifi�e. Cliquez sur ��Enregistrer les modifications�� pour "+
"enregistrer les param�tres de cette application. Pour entrer les param�tres manuellement, entrez l'adresse IP dans l'espace pr�vu pour la machine "+
"(serveur) interne, les ports publics et LAN n�cessaires pour la passerelle (s�parer � l'aide d'une virgule), "+
"s�lectionnez le type de port (TCP ou UDP) puis cliquez sur ��Enregistrer les modifications��. Vous pouvez uniquement faire passer un "+
"seul port par adresse IP interne. L'ouverture des ports de votre pare-feu risque de compromettre la s�curit� de votre r�seau. Vous "+
"pouvez rapidement activer ou d�sactiver cette fonction. Il est recommand� de d�sactiver cette fonction "+
"lorsque vous n'utilisez pas d'application sp�cifique. ";
g27="Filtres d'IP des clients";
g28="Le routeur peut �tre configur� de sorte � limiter l'acc�s de certains ordinateurs � Internet, "+ 
"au courrier �lectronique et autres fonctions r�seaux, � des jours et des heures donn�s. La restriction peut s'appliquer � un seul ordinateur, "+
"� un groupe d'ordinateurs ou � plusieurs ordinateurs. Par exemple, pour limiter l'acc�s � Internet � un ordinateur particulier, "+
"entrez l'adresse IP de l'ordinateur dont vous d�sirez contr�ler l'acc�s dans "+ 
"les champs IP. Ensuite, entrez 80 et 80 dans les champs de ports. S�lectionnez TCP. S�lectionnez Bloquer. "+
"Vous pouvez aussi s�lectionner Toujours pour bloquer l'acc�s en tout temps. S�lectionnez le jour du d�but en "+
"haut, l'heure du d�but en haut, le jour de fin en bas et l'heure de fin "+
"en bas. Cliquez sur ��Enregistrer les Modifications��. L'ordinateur � l'adresse IP que vous avez sp�cifi�e ne pourra "+
"dor�navant plus acc�der � l'Internet aux heures sp�cifi�es. Remarque�: Assurez-vous d'avoir s�lectionn� "+
"le fuseau horaire appropri� sous Utilitaires > Param�tres du Syst�me > Fuseau Horaire. ";
g29="Filtrage d'adresses MAC";
g30="Le Filtre d'adresses MAC repr�sente une puissante caract�ristique de s�curit�, vous permettant "+
"et qui tente d'acc�der au r�seau se verra refuser l'acc�s. Lorsque vous activez cette fonction, "+
"d'autoriser, � des ordinateurs sp�cifiques, l'acc�s � votre r�seau. Tout ordinateur non sp�cifi� dans les param�tres du filtre "+
"vous devez entrer l'adresse MAC de chaque client de votre r�seau, pour permettre � chacun "+
"d'acc�der au r�seau. La fonction ��Bloquer�� vous permet d'activer et de d�sactiver facilement l'acc�s au r�seau pour tout "+
"ordinateur sans devoir ajouter l'adresse MAC de l'ordinateur � la liste ni la supprimer. Pour "+ 
"activer cette fonction, s�lectionnez ��Activer le Filtrage des adresses MAC��. Ensuite, entrez l'adresse MAC "+
"de tous les ordinateurs du r�seau. Pour cela, cliquez sur le champ fourni puis entrez l'adresse MAC "+
"de l'ordinateur � ajouter � la liste. Cliquez sur ��Enregistrer les modifications�� pour enregistrer les param�tres. Pour supprimer une adresse MAC "+
"de la liste, cliquez simplement sur ��Supprimer�� pr�s de l'adresse MAC � supprimer. Cliquez sur ��Enregistrer "+
"les modifications�� pour enregistrer les param�tres. <br><br>"+
"Remarque�: vous ne pourrez pas supprimer l'adresse MAC de l'ordinateur que vous utilisez pour acc�der "+ 
"aux fonctions d'administration du routeur (celui que vous utilisez en ce moment). ";
g31="La fonctionnalit� DMZ vous permet d'indiquer un ordinateur du r�seau qui sera plac� "+
"hors du pare-feu NAT. Cette op�ration peut s'av�rer n�cessaire si la traduction d'adresse r�seau (NAT) "+
"emp�che le bon fonctionnement d'applications telles que les jeux ou les vid�oconf�rences. "+
"Servez-vous de cette fonction au besoin. "+
'<font class="redBold">'+
"L'ordinateur plac� dans la zone DMZ ne sera pas prot�g� contre les attaques provenant de hackers.</font> "+ 
"Pour placer un ordinateur dans la DMZ, entrez les derniers chiffres de son adresse IP dans le "+ 
"champ � IP �, puis cliquez sur ��Activer��. Cliquez sur ��Enregistrer les modifications�� pour que le changement soit pris en compte. "+ 
"Si vous utilisez plusieurs adresses IP WAN fixes, il est possible de choisir celle "+
"vers laquelle l'h�te DMZ sera dirig�. Entrez l'adresse IP WAN vers laquelle vous "+
"d�sirez diriger l'h�te DMZ, entrez les deux derniers chiffres de l'adresse IP de "+
"l'ordinateur h�te de la zone DMZ, s�lectionnez ��Activez�� puis cliquez sur ��Enregistrer les modifications��. ";
g32="Blocage du Ping ICMP";
g33="Les pirates informatiques utilisent une technique appel�e ��Pinging�� pour d�nicher sur "+
"Internet. En �mettant un ping sur une certaine adresse IP et en recevant une r�ponse de celle-ci, "+
"un pirate peut savoir qu'il a un poste � pirater. La "+ 
"pouvez configurer le routeur de sorte qu'il ignore un ping ICMP venant de l'ext�rieur. Ceci "+ 
"rehausse le niveau de s�curit� de votre routeur. Pour d�sactiver la r�ponse au ping, s�lectionnez "+ 
"��Blocage du ping ICMP�� et cliquez sur � Enregistrer les modifications��. Le routeur ignorera un ping ICMP. "; 
g34="Mot de passe Administrateur";
g35="Le routeur est livr� SANS mot de passe d�fini. Si par souci de s�curit� vous d�sirer ajouter un mot de passe, "+
"vous pouvez le configurer ici. Conservez votre mot de passe dans un endroit s�r puisque "+
"vous en aurez besoin lorsque vous voudrez vous connecter au routeur par la suite. Nous "+
"recommandons aussi l'ajout d'un mot de passe si vous pr�voyez utiliser la fonction de gestion � distance "+
"du routeur. <br><br>"+
"L'option de temporisation de la connexion vous permet de d�terminer la plage horaire pendant laquelle vous pouvez �tre connect� "+ 
"au niveau de l'interface de configuration avanc�e du routeur. La temporisation d�bute lorsqu'il n'y a plus "+
"d'activit�. Par exemple, vous avez apport� des modifications au niveau de l'interface de configuration �volu�e, "+
"puis vous avez quitt� l'ordinateur sans cliquer sur ��D�connexion��. En supposant que vous ayez param�tr� "+
"la temporisation � 10�minutes, votre connexion prendra fin 10�minutes apr�s votre d�part. Vous "+
"devrez de nouveau vous connecter au routeur pour proc�der � d'autres modifications. L'option de temporisation de la connexion "+
"sert � des fins de s�curit�. La valeur par d�faut est 10�minutes. Prenez note qu'un seul "+
"ordinateur � la fois peut �tre connect� � l'interface de configuration avanc�e du routeur. ";
g36="Heure et Fuseau Horaire";
g37="Le routeur harmonise le temps en se connectant � un serveur SNTP (Simple Network Time Protocol). "+  
"Ceci lui permet de synchroniser l'horloge du syst�me avec l'Internet plan�taire. L'"+ 
"horloge ainsi synchronis�e est utilis�e par le routeur pour garder un journal de connexions et pour contr�ler le "+  
"filtrage des clients. S�lectionnez le fuseau horaire du pays dans lequel vous r�sidez. Si vous r�sidez dans une r�gion qui "+ 
"applique l'horaire d'�t�, cochez la case en regard de l'option ��Appliquer les "+ 
"horaires d'�t頻. L'horloge du syst�me peut ne pas �tre mise � jour imm�diatement. Laissez au moins 15�minutes au routeur "+ 
"pour contacter les serveurs sur Internet et recevoir une r�ponse. Vous ne pouvez "+ 
"pas modifier l'horloge vous-m�me. "; 
g38="Gestion � distance";
g39="Avant d'activer cette fonction,"+  
"<font class='plaintext_bold'>ASSUREZ-VOUS D'AVOIR AJOUT� UN MOT DE PASSE ADMINISTRATEUR. </font>"+ 
"La gestion � distance vous permet d'apporter des changements aux param�tres du routeur o� que vous soyez "+ 
"sur Internet. Il existe deux m�thodes pour g�rer votre routeur � distance. La premi�re "+ 
"m�thode consiste � permettre l'acc�s au routeur � partir de l'Internet en s�lectionnant "+ 
"��N'importe quelle adresse IP peut g�rer le routeur � distance��. Lorsque vous aurez entr� votre adresse IP WAN "+ 
"depuis un ordinateur sur Internet, un �cran de connexion appara�tra. "+ 
"Vous devrez y entrer le mot de passe du routeur. La deuxi�me m�thode consiste � "+ 
"permettre � une adresse IP sp�cifique de g�rer le routeur � distance. Cette m�thode est la plus s�curitaire, mais "+  
"la moins pratique. Pour y avoir recours, entrez l'adresse IP autoris�e � acc�der au routeur "+ 
"dans le champ fourni � cet effet, puis s�lectionnez ��Seule cette adresse IP est autoris�e "+ 
"� g�rer le routeur � distance��. Avant d'activer cette fonction, nous vous CONSEILLONS VIVEMENT "+ 
"de d�finir un mot de passe d'administrateur. Si vous laissez le mot de passe vide, vous autorisez potentiellement "+ 
"des intrusions sur le routeur. ";
g40="Activer le NAT";
g41="Avant d'activer cette fonction, "+  
"<font class='plaintext_bold'>ASSUREZ-VOUS D'AVOIR AJOUT� UN MOT DE PASSE ADMINISTRATEUR. </font>"+ 
"La traduction d'adresses r�seau (Network Address Translation, NAT) est la m�thode qui permet au routeur "+ 
"de partager une seule adresse IP attribu�e par le FAI avec les autres ordinateurs du r�seau. Cette fonction ne devrait �tre utilis�e "+ 
"que par des utilisateurs avanc�s. Cette fonction ne devrait �tre utilis�e que si votre FAI vous attribu� "+ 
"de multiples adresses IP, ou vous devrez d�sactiver la NAT pour acc�der aux configurations avanc�es du syst�me. "+  
"Si vous disposez d'une seule adresse IP et si vous d�sactivez le NAT, les ordinateurs de votre r�seau ne pourront "+ 
"pas acc�der � Internet. D'autres probl�mes peuvent aussi survenir. La d�sactivation NAT "+ 
"d�sactive les fonctions de votre pare-feu. "; 
g42="L'UPnP (Universal Plug-and-Play) est une technologie qui offre un fonctionnement transparent de la messagerie "+
"vocale et vid�o, des jeux, et d'autres applications compatibles avec l'UPnP. Certaines "+
"applications n�cessitent que le pare-feu du routeur soit configur� selon certains param�tres pour fonctionner "+
"correctement. Pour ce faire, vous devez habituellement ouvrir des ports TCP et UDP, et parfois m�me configurer des "+
"ports de d�clenchement. Une application qui est compatible avec l'UPnP poss�de la capacit� de communiquer avec "+
"le routeur, lui indiquant la mani�re dont le pare-feu doit �tre configur�. "+
"Le routeur est livr� avec la fonction UPnP d�sactiv�e. Si vous utilisez une application qui est "+ 
"compatible avec l'UPnP, et si vous d�sirez b�n�ficier des avantages de l'UPnP, vous pouvez "+ 
"activer la fonction UPnP. S�lectionnez simplement l'option ��Activer�� dans la section ��Activation de l'UPnP�� dans la page Utilitaires. "+ 
"Cliquez sur ��Appliquer les modifications�� pour enregistrer les modifications. ";
g43="Notification automatique de mise � jour du micrologiciel";
g44="Le routeur poss�de la capacit� intrins�que de v�rifier automatiquement s'il existe une nouvelle version du "+ 
"micrologiciel et de vous avertir lorsqu'elle est disponible. Lorsque vous vous connectez � "+ 
"l'interface avanc�e du routeur, le routeur proc�dera � la recherche d'une nouvelle version du micrologiciel, "+ 
"si celle-ci est disponible. Vous serez averti lorsqu'une une nouvelle version du micrologiciel est disponible. Vous pouvez choisir de "+ 
"t�l�charger cette nouvelle version ou de l'ignorer. Le routeur est livr� avec cette fonction d�sactiv�e. "+  
"Si vous voulez l'activer, s�lectionnez ��Activer�� et cliquez sur ��Enregistrer les Modifications��. ";
g45="S�curit� sans fil";
g46="Le chiffrement peut vous aider � s�curiser votre r�seau sans fil. Il n'est possible de s�lectionner qu'un seul mode de s�curit� "+ 
"� la fois. L'utilisateur doit donc s�lectionner le mode qui est "+ 
"pris en charge par tous les dispositifs du r�seau sans fil. Ce produit de Belkin pr�sente 5 "+ 
"possibilit�s de r�glage de la s�curit�:<br><br>"+
"1) D�sactiv�. Aucun chiffrement n'est activ� dans ce mode. Les r�seaux ouverts, o� tous les utilisateurs sont "+ 
"	      les bienvenus, ne sont pas chiffr�s.<br><br> "+ 
"2) WPA PSK - Home (sans serveur). Le WPA (Wireless Protected Access) PSK est une technologie de s�curit� r�cente "+ 
"             bas�e sur des normes o� chaque paquet de donn�es est "+ 
"             chiffr� au moyen d'un code ou d'une cl� diff�rente. Puisque la cl� change constamment, "+  
"             le WPA est tr�s s�r. Il existe deux cat�gories de WPA, soit le WPA-PSK (Pre-Shared Key) et le "+ 
"             WPA-Radius Server. La diff�rence est �vidente�: l'une n�cessite un serveur "+  
"             et l'autre non. le WPA-PSK convient pour les utilisateurs � domicile ou pour les petites entreprises, qui ne poss�dent pas "+  
"             de serveur. La cl� de chiffrement du PSK est automatiquement g�n�r�e � partir d'une "+  
"             cha�ne de caract�res ou une expression mot de passe. Le plus grand risque encouru au niveau de la s�curit� pour le WPA-PSK est "+  
"             qu'un autre utilisateur d�couvre la phrase de passe.<br><br> "+ 
" a. TKIP versus AES. Pour configurer le WPA, l'utilisateur doit choisir entre "+  
" le chiffrement TKIP ou l'AES.. La norme WPA d�finit le TKIP comme le chiffrement par d�faut. De plus, "+ 
" le TKIP assure une meilleure compatibilit� entre les appareils sans fil de diff�rents fabricants, "+  
" puisque la majorit� d'entre eux ne seront jamais mis � jour vers l'AES. L'AES est une nouvelle "+  
" technique de chiffrement bas�e sur la norme 802.11i qui n'est pas encore ratifi�e. Il est g�n�ralement consid�r� que les nouveaux standards de WPA "+  
" utilisent l'AES. Bien qu'elle ne soit pas populaire, certains utilisateurs peuvent "+  
" pr�f�rer utiliser cette technique de chiffrement. D'une fa�on ou d'une autre, tous les p�riph�riques r�seau doivent utiliser la m�me "+  
" technique.<br><br> "+
" b. Cl� pr�-partag�e. Entrez un mot ou une expression comportant jusqu'� 40�caract�res. La m�me cl� doit "+  
" aussi �tre utilis�e pour tous les autres p�riph�riques r�seau faisant partie de ce r�seau. Portez attention "+  
" � la casse (��n�� est diff�rent de ��N��). Souvenez-vous que la meilleure "+  
"fa�on pour quelqu'un pour p�n�trer votre r�seau, c'est de deviner votre cl�.<br><br> "+ 
"3) WEP sur 128�bits. Jusqu'� tout r�cemment, le WEP (Wired Equivalent Privacy) � 128 bits �tait la norme "+  
"                de chiffrement sans fil. Si vos p�riph�riques ne prennent pas tous en charge le WPA, le WEP sur 128 bits "+  
"                repr�sente une excellente option de s�curit�. Vous devrez entrer des nombres "+  
"                hexad�cimaux, mais il est aussi possible de les g�n�rer automatiquement.<br><br> "+ 
"4) WEP sur 64�bits. Belkin ne recommande le mode sur 64 bits que pour les r�seaux o� certains p�riph�riques ne prennent en charge "+  
"               ni le WPA ni le WEP sur 128 bits.<br><br> "+
"5) WPA - Serveur Radius. (Ce mode est accessible � partir du bouton Avanc�). Le serveur WPA"+
"ne convient qu'aux r�seaux utilisant un serveur Radius. Tous les param�tres de ce mode "+
"s'obtiennent aupr�s de l'administrateur de votre serveur Radius. � l'oppos� du WPA-PSK,"+
"le serveur WPA transmet la cl� � partir du serveur vers les clients, au lieu de la g�n�rer automatiquement."; 
g57="Utilisation du DNS Dynamique";
g58="Le service DNS Dynamique vous permet d'attribuer une adresse IP dynamique � un nom d'h�te fixe parmi ceux offerts par DynDNS.org, ce qui vous permet d'acc�der � vos ordinateurs � partir de maints endroits sur Internet. DynDNS.org offre ce service � la communaut� des Internautes, gratuitement, pour jusqu'� cinq noms d'h�te.<br>"+
"Le service DNS Dynamique est id�al pour les sites web maison, les serveurs de fichiers, ou pour vous faciliter l'acc�s � votre PC ou aux fichiers stock�s sur votre PC lorsque vous �tes au travail. Le service garantit que votre nom d'h�te pointe toujours vers votre adresse IP, peut importe si votre FAI modifie celle-ci. Lorsque votre adresse IP change, vos amis et associ�s peuvent toujours vous retrouver en visitant votrenom.dyndns.org�!<br>"+
"<br>Inscrivez-vous gratuitement et obtenez votre nom d'h�te DNS Dynamique � http://www.dyndns.org.<br>"+
"<br><b>Configuration du client DNS Dynamique du routeur</b><br>"+
"<br>Inscrivez-vous gratuitement et obtenez votre nom d'h�te DNS Dynamique � http://www.dyndns.org.<br>"+
"<br><b>Configuration du client DNS Dynamique du routeur</b><br>"+
"Vous devez vous inscrire au service gratuit de mise � jour de DynDNS.org avant d'utiliser cette fonction. Apr�s vous �tre inscrit, veuillez suivre les �tapes ci-dessous.<br>"+
"1.Entrez votre nom d'utilisateur DynDNS.org dans le champ ��User Name [Nom d'utilisateur]�� (1).<br>"+
"2.Entrez votre mot de passe DynDNS.org dans le champ ��Password [Mot de passe]�� (2).<br>"+
"3.Entrez votre nom d'utilisateur DynDNS.org dans le champ ��User Name [Nom d'utilisateur]�� (3).<br>"+
"4.Cliquez sur ��Update Dynamic DNS [Mise � jour DNS Dynamique]�� pour mettre � jour votre adresse IP.<br>"+
"Lorsque votre FAI modifie l'adresse IP qui vous est attribu�e, le routeur s'occupe de la mise � jour des serveurs DynDNS.org, avec votre nouvelle adresse IP. Vous pouvez �galement le faire manuellement, en cliquant sur le bouton ��Update Dynamic DNS [Mise � jour DNS Dynamique]�� (4).<br>";
fw1='Mise � jour du micrologiciel en cours.';
fw2='N\'INTERROMPEZ PAS LE PROCESSUS ET NE D�BRANCHEZ PAS LE ROUTEUR. Ceci pourrait rendre votre Routeur inutilisable.'; 
apply_text_1='Enregistrement des modifications. Veuillez patienter.......';
warn_msg1='Le SSID ne peut �tre NUL!';
warn_msg2='Le Routeur sans fil red�marre. Si vous faites cette modification � partir d\'un ordinateurs sans fil, celui-ci peut �tre d�connect� du Routeur pendant un court laps de temps.';


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
