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
show4='Déconnexion';
show5='Statut d\'Internet';
show6='Connexion';
show7='Pas de connexion';
show8='Configuration LAN';
show9='Paramètres de réseau local';
show10='Liste de Clients DHCP';
show11='Internet / WAN';
show12='Type de Connexion';
show13='DNS';
show14='Adresse MAC';
show15='WLAN non disponible';
show16='Sans Fil';
show17='Canal et SSID';
show18= 'Sécurité';
show19=  'Utiliser comme point d\'accès';
show20=  'Spécifiez l\'adresse IP';
show21=  'Contrôle d\'adresses MAC';
show22=   'Pont Sans Fil';
show23=   'Pare-feu';
show24=   'Serveurs Virtuels';
show25=   'Filtres d\'IP des clients';
show26=   'Filtrage des adresses MAC';
show27=   'Zone DMZ';
show28=   'Blocage du ping WAN';
show29=   'Journal de sécurité';
show30=   'Utilitaires';
show31=   'Control parental';
show32=   'Redémarrer le Routeur';
show33=   'Redémarrer le PA'
show34=  'Rétablir les paramètres par défaut';
show35=  'Sauvegarder les paramètres';
show36=  'Rétablir les paramètres précédents';
show37=  'Mise à jour du micrologiciel';
show38=  'Paramètres du système';
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
btn3='Mise à jour DNS Dynamique';
Router='Routeur';
AP='AP';
Dynamic='Dynamique';
cff1='Vérification du micrologiciel réussie';
cff2='Informations sur le micrologiciel'; 
cff3='Aucune mise à jour du micrologiciel n\'est disponible pour ce routeur !';
cff4='Échec de la connexion au serveur d\'informations sur le micrologiciel, <br>vérifiez la connexion WAN.';
cff5='Une version mise à jour du micrologiciel de votre routeur est disponible';
d1='Belkin | Administrateur Multiple';
d2='Administrateur Multiple';
d3='Ce périphérique est administré par';
d4='en ce moment !!';
fc1='Pare-feu > Filtres d\'IP des clients';
fc2a='Le routeur peut être configuré de sorte à limiter l\'accès de certains ordinateurs à Internet, au courrier électronique et autres fonctions réseaux'; fc2b=' à des jours et des heures donnés.';
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
fcipm='Vous n\'avez pas entré l\'adresse IP du client ou certains numéros de l\'adresse IP entrée ne sont pas valides.  Le numéro contenu dans la zone de saisie de l\'adresse IP doit être compris entre 1 et 254.';
fcsm='Les numéros de ports que vous avez entré ne sont pas valides.';
fcrm='Le dernier numéro de port doit être supérieur au premier.';
fcripm='Le dernier numéro IP doit être supérieur au premier.';
fcpm='Le numéro de la zone de saisie du port doit être compris entre 1 et 65535.';
fd1='Pare-Feu > DMZ'; 
fd2='La zone DMZ vous permet de spécifier quel ordinateur de votre réseau doit être placé à l\'extérieur du pare-feu NAT. Cette opération peut s\'avérer nécessaire si la traduction d\'adresse réseau (NAT) empêche le bon fonctionnement d\'applications telles que les jeux ou les vidéoconférences.Servez-vous de cette fonction au besoin.'; 
fd3='L\'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers.'; 
fd4='L\'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers. Pour placer un ordinateur dans la zone DMZ, entrez les derniers chiffres de son adresse IP dans le champ de saisie ci-dessous, et sélectionnez « Activer ». Cliquez « Envoyer » pour que les modifications apportées soient prises en compte.'; 
fd5='Adresse IP de l\'hôte DMZ virtuel'; 
fd6='IP fixe';  
fd7='IP privée';  
fd8='Activer'; 
fd9='Pare-feu > DDNS'; 
fd10='Le « Dynamic DNS » offre aux utilisateurs d\'Internet un nom de domaine fixe (au lieu d\'une adresse IP qui change de temps à autre), permettant l\'accès à votre routeur et aux applications configurées dans les serveurs virtuels de votre routeur à partir de plusieurs endroits sur l\'Internet, sans devoir connaître votre adresse IP actuelle. Votre routeur sans fil prend en charge le DNS dynamique via DynDNS.org. ';
fd11='Vous devez créer un compte avant de pouvoir utiliser ce service.&nbsp;';
fd12='Nom d\'utilisateur > '; 
fd13='Mot de passe > '; 
fd14='Nom de Domaine > '; 
fd15='Veuillez entrer l\'adresse IP avant d\'activer la DMZ'; 
fd16='Auto-update'; 
fmc1='Pare-Feu > Filtrage des adresses MAC';
fmc2='Cette fonction vous permet de dresser une liste de clients autorisés. Lorsque vous activez cette fonction, vous devez entrer l\'adresse MAC de chaque client de votre réseau, pour permettre à chacun d\'accéder au réseau.';    
fmc3='Activer le Filtrage des Adresses MAC';   
fmc4='Liste de filtrage d\'adresses MAC';
fmc5='Bloquer';  
fmc6='Hôte';  
fmc7='Adresse MAC';  
fmc9='Impossible d\'entrer une adresse MAC de multidiffusion !';
fmc12='Cette adresse MAC existe déjà !';
Add='Ajouter'; 
Del='Supprimer';
fmcipm='Vous n\'avez pas entré tous les chiffres hexadécimaux ou certains chiffres hexadécimaux entrés ne sont pas valides. Un chiffre hex peut être un nombre de 0 à 9 ou une lettre de A à F.';
fmn1='Pare-feu >';
fmn2='Votre Routeur possède un pare-feu afin de protéger votre réseau contre une multitude d\'attaques provenant de pirates informatiques, incluant le Ping de la Mort (Ping of Death - PoD) et l\'attaque par Déni de Service (Denial of Service - DoS). Vous pouvez au besoin désactiver la fonction de pare-feu. Désactiver le pare-feu ne rendra pas votre réseau totalement vulnérable aux attaques provenant des pirates informatiques, mais il est recommandé d\'activer le pare-feu aussi souvent que possible.'; 
fmn3='Activer/Désactiver Pare-Feu >';
Disable='Désactiver';
fp1='Pare-Feu > Blocage du ping WAN';
fp2='<b> FONCTION AVANCÉE !</b> Vous pouvez configurer le Routeur de sorte qu\'il ignore un ping ICMP (ping au port WAN). Cette fonction rehausse le niveau de sécurité.'; 
fp3='Blocage du Ping ICMP >';  
fs1='Firewall > Security log';
fs2='Le routeur conserve un journal de l\'activité à l\'intérieur de celui-ci, telle que les connexions et déconnexions, et toute tentative de connexion au routeur en provenance de l\'Internet. Vous pouvez visualiser le journal ci-dessous.'; 
fs3='Journal';
Save='Enregistrer';
Clear='Effacer';
Refresh='Actualiser';  
fv1='Pare-Feu > Serveurs Virtuels';
fvipm='Vous n\'avez pas entré toutes les adresses IP \n ou certains numéros entrés ne sont pas valides. \n Le numéro de l\'adresse IP doit être compris entre 1 et 254.';
fvrm='Le numéro de port public ne peut pas être 88, car une collision aura lieu avec le service Web du routeur sans fil.' 
fvipr='La plage Ports entrants est incorrecte.'; 
fvppr='La plage Ports entrants est incorrecte.'; 
fv2='Cette fonction vous permet de relayer les appels de service externes (Interner) tel un serveur Web (port 80), un serveur FTP (port 21) ou autres applications via votre Routeur vers votre réseau interne.'; 
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
fv200='Effacer l\'entrée '; 
Description='Description'; 
Inb='Port entrant';  
Type='Type';  
Pipa='Adresse IP Privée ';  
Pport='Port privé';  
htop='haut'; 
h1='Aide';
h2='GLOSSAIRE';  
h3='<b>Administrateur</b> Un administrateur est chargé de la maintenance du réseau. Dans le cas précis de ce routeur, c\'est la personne qui configure le routeur et apporte les changements aux paramètres.';  
h4='<b>Client</b> Se dit d\'un ordinateur faisant partie d\'un réseau et qui utilise les services du routeur, tels que le serveur DHCP automatique et le Pare-Feu.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Ce protocole configure automatiquement les paramètres TCP/IP de tous les ordinateurs de votre réseau domestique.';  
h6='<b>Accès à distance</b> Connexion qui utilise le réseau téléphonique public.'; 
h7='<b>DMZ</b> Zone virtuelle du routeur qui n\'est pas protégée par son pare-feu.  Un ordinateur peut être placé dans la zone DMZ.';   
h8='<b>Adresse de serveur DNS</b> Le DNS (système de nom de domaine) permet aux ordinateurs hôtes Internet de disposer d\'un nom de domaine (comme belkin.com, par exemple) et d\'une ou de plusieurs adresses IP (192.34.45.8, par exemple). Le serveur DNS gère la base de données des ordinateurs hôtes, de leurs noms de domaines respectifs ainsi que de leurs adresses IP. Ainsi, lorsqu\'un nom de domaine est demandé (vous tapez belkin.com dans votre navigateur Web), l\'utilisateur est renvoyé vers l\'adresse IP appropriée. L\'adresse du serveur DNS utilisé par les ordinateurs de votre réseau domestique est l\'emplacement du serveur DNS que votre fournisseur d\'accès a attribué.';  
h9='<b>Modem DSL</b> DSL est l\'acronyme de Digital Subscriber Line. Un modem DSL utilise vos lignes téléphoniques existantes pour transmettre des données à haut débit.';  
h10='<b>IP dynamique</b> Adresse IP obtenue automatiquement auprès du serveur DHCP.';  
h11='<b>Ethernet</b> Norme des réseaux informatiques. Les réseaux Ethernet sont connectés par des câbles et des hubs spéciaux. Ils transmettent les données jusqu\'à 10 millions de bits par seconde (Mbps).';  
h12='<b>Pare-feu</b> Frontière électronique qui empêche tout utilisateur non autorisé d\'accéder à certains fichiers ou ordinateurs d\'un réseau.';  
h13='<b>Micrologiciel</b> Logiciel emmagasiné dans la mémoire. Programmes essentiels qui demeurent en place même lorsque le système est éteint. Les micrologiciels sont plus faciles à modifier que les matériels informatiques, mais plus permanents que les logiciels stockés sur disque.';  
h14='<b>Adresse IP</b> IP est l\'acronyme d\'Internet Protocol. Une adresse IP est constituée d\'une série de quatre nombres séparés par des points. Elle permet d\'identifier un ordinateur hôte Internet unique. Par exemple : 192.34.45.8.';  
h15='<b>ISDN</b> Acronyme de Integrated Services Digital Network. Lignes de télécommunications numériques qui peuvent transmettre à la fois de la voix et des services réseaux numériques à un débit jusqu\'à 128 K et qui sont beaucoup plus rapides et fiables que les modems haut débit analogiques. Les lignes ISDN sont offertes par la plupart des opérateurs téléphoniques.';  
h16='<b>FAI</b> Fournisseur d\'accès à Internet. Un FAI est une entreprise qui permet aux individus et aux autres entreprises de se connecter à Internet.';  
h17='<b>Adresse de passerelle du FAI</b> (voir FAI pour la définition). L\'adresse de passerelle du FAI est une adresse IP correspondant au routeur Internet situé chez votre fournisseur d\'accès. Cette adresse n\'est requise que lorsque vous utilisez un modem câble ou ADSL.';  
h18='<b>LAN</b> Réseau local. Un LAN est un groupe d\'ordinateurs et de périphériques connectés entre eux dans une zone relativement restreinte (la maison ou le bureau, par exemple). Votre réseau à domicile est considéré comme un réseau local.';  
h19='<b>Adresse MAC</b> MAC est l\'acronyme de Media Access Control. L\'adresse MAC est l\'adresse matérielle du périphérique connecté à un réseau.';  
h20='<b>MTU</b> Acronyme de Maximum Transmission Unit. Le plus grand paquet (unité) de données pouvant être transmis sur un médium physique particulier.';  
h21='<b>NAT</b> Acronyme de Network Address Translation. Ce procédé permet à tous les ordinateurs de votre réseau domestique d\'utiliser une seule adresse IP. Grâce à la technologie NAT du de votre passerelle réseau domestique HomeConnect, vous pouvez accéder à Internet depuis tous les ordinateurs de votre réseau domestique sans devoir vous procurer d\'autres adresses IP auprès de votre FAI.';  
h22='<b>Port</b> Canal logique identifié par son numéro de port unique. Les applications écoutent certains ports pour repérer des informations pouvant y être liées.';  
h23='<b>PPPoE</b> Acronyme de Point-to-Point Protocol over Ethernet (Protocole Poste à Poste par l\'Ethernet). Le protocole poste à poste est un moyen de sécurisation de la transmission des données créé, à l\'origine, pour les accès distants. PPPoE est utilisé pour les connexions Ethernet.';  
h24='<b>PPPTP</b> Acronyme de Point-to-Point Tunneling Protocol (Protocole de Tunnelisation Poste à Poste). Une version améliorée du PPP qui possède la capacité d\'encapsuler des paquets de données formatés pour un protocole réseau en paquets pouvant être utilisés par un autre protocole. Cette technique de tunnellisation permet aux données TCP/IP d\'être transmises sur un réseau non-TCP/IP. Le PPTP peut être utilisé pour relier deux réseaux physiques différents, en utilisant l\'Internet comme intermédiaire.';  
h25='<b>SNTP</b> Acronyme de Simple Network Time Protocol. Une norme de communication permettant la transmission d\'information en temps réel sur un réseau ou l\'Internet.';  
h26='<b>SPI</b> Acronyme de Stateful Packet Inspection. SPI est le type de sécurité Internet pour entreprises que propose votre passerelle réseau domestique HomeConnect. Grâce au SPI, la passerelle se comporte comme un pare-feu et protège votre réseau contre les pirates informatiques.';  
h27='<b>IP fixe</b> Adresse IP configurée manuellement et qui ne change jamais.';  
h28='<b>Masque de sous-réseau Mask</b> Un masque de sous-réseau (qui peut faire partie des informations TCP/IP fournies par votre FAI) est un ensemble de quatre nombres configurés comme une adresse IP. Il s\'emploie pour créer des nombres d\'adresses IP qui s\'utilisent uniquement avec un réseau donné (contrairement aux numéros d\'adresses IP valides reconnus sur Internet qui doivent être attribués par le InterNIC).';  
h29='<b>TCP</b> Acronyme de Transmission Control Protocol. Protocole de transport de données le plus courant sur Internet. Le protocole TCP est orienté vers la connexion et la transmission, et procure une communication fiable entre les réseaux à commutation de paquets.';  
h30='<b>TCP/IP</b> Acronyme de Transmission Control Protocol over Internet Protocol. Il s\'agit du protocole standard pour la transmission des données sur Internet.';  
h31='<b>UDP</b> Acronyme de User Datagram Protocol. Protocole de communication pour la couche réseau Internet, la couche de transport et la couche session, ce qui rend possible l\'envoi d\'un message datagramme depuis un ordinateur vers une application fonctionnant sur un autre ordinateur. Contrairement au TCP, l\'UDP ne requiert pas de connexion et ne garantit pas une communication fiable ; l\'application elle-même doit traiter les erreurs et vérifier la fiabilité de la transmission.'; 
h32='<b>WAN</b> Réseau étendu. Réseau qui permet de connecter des ordinateurs situés dans des zones géographiquement distinctes (bâtiments, villes ou pays différents). Internet est un réseau étendu.';  
h33='<b>Adresse IP WAN</b> Adresse IP attribuée au routeur par le FAI.';  
h34='<b>WLAN</b> Réseau local sans fil. Réseau local qui relie des ordinateurs proches entre eux via des ondes radio (comme 802.11b)'; Enabled='Activé';
Disabled='Désactivé';
i1='Setup Home'; 
i2='Status';
i3='Information sur la version'; 
i4='Version du micrologiciel'; 
i5='Version du code d\'amorce';  
i6='Version du matériel';  
i7='Numéro de série';  
i8='Paramètres de réseau local'; 
i9='MAC LAN/WLAN';  
i9a='Adresse MAC du réseau local';
i9b='WLAN non disponible'; 
i10='Adresse IP'; 
i11='Masque de Sous-Réseau'; 
i12='Serveur DHCP';
i13='Paramètres Internet';  
i14='Adresse MAC du WAN'; 
i15='Type de Connexion';  
i16='Masque de Sous-Réseau';  
i17='IP WAN'; 
i18='Passerelle par défaut';  
i19='Adresse DNS';  
i20='Caractéristiques'; 
i21='NAT';  
i22='Paramètres du pare-feu '; 
i23='SSID'; 
i24='Sécurité'; 
i25='Imprimante'; 
i26='(activer/désactiver)'; 
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
ld3='Cette page montre l\'adresse IP, le Nom d\'Hôte et l\'adresse MAC de chaque ordinateur relié à votre réseau. Si vous n\'avez pas spécifié de nom d\'hôte pour l\'ordinateur, le champ Nom d\'Hôte sera vide. Pour mettre à jour la liste, cliquez sur Rafraîchir.'; 
ld4='Adresse IP'; 
ld5='Nom d\'hôte';
ld6='Adresse MAC'; 
lm1='LAN';
lm2='Le serveur DHCP attribue automatiquement des adresses IP à chaque ordinateur afin de simplifier la configuration de la mise en réseau. Les paramètres par défaut du serveur DHCP sont compatibles avec la plupart des applications. Vous pouvez apporter des modifications aux paramètres si vous le désirez.'; 
lm3='Les modifications que vous pouvez apporter sont :';
lm4='- Modifier l\'adresse IP interne du routeur. Valeur par défaut = 192.168.2.1';
lm5='- Modifier le masque de sous-réseau. Le masque par défaut est 255.255.255.0';
lm6='- Activer/Désactiver la fonction de serveur DHCP. Par Défaut= ON (Activé)';
lm7='- Spécifiez l\'adresse de départ et de fin de la Réserve d\'Adresses IP Par défaut = Départ : 2 / Fin : 100';
lm8='- Entrer la durée d\'autorisation de l\'adresse IP Par défaut = Permanent';
lm9='- Entrez un Nom de Domaine local. Par défaut = Permanent';
lm10=' Pour apporter des modifications, cliquez sur « Paramètres du Réseau local » sur l\'onglet LAN, situé à la gauche.';
lm11='Le Routeur vous fournira aussi une liste de tous les clients reliés au réseau. Pour visualiser la liste, cliquez « Liste de Clients DHCP » à l\'onglet LAN, à gauche.';
ls1='LAN > Paramètres de réseau local';
ls2='Vous pouvez ici apporter des modifications au réseau local (LAN). Pour que les modifications soient prises en compte, vous devez appuyer sur le bouton « Enregistrer les Modifications » au bas de l\'écran.'; 
ls3='Adresse IP';   
ls4='Masque de Sous-Réseau';     
ls5='Serveur DHCP';  
On='Activé';  
Off='Désactivé';  
all='all';
Auto='Auto'; 
langt='langue';
langc='Fran&ccedil;ais';
langcl='Current Langugae';
langal='Available Langugaes';
ls6='La fonction de serveur DHCP permet la mise en place d\'un réseau en toute simplicité, en attribuant une adresse IP à chacun des ordinateurs du réseau. Il n\'est pas nécessaire d\'apporter des modifications ici.'; 
ls7='Adresse de départ du pool d\'adresses IP';  
ls8='Adresse de fin du pool d\'adresses IP';   
ls9='Durée d\'autorisation';   
ls10='Toujours'; 
ls11='Demi-heure';
ls12='1 heure';
ls13='Deux heures';
ls14='Demi-journée'; 
ls15='Un jour';
ls16='Deux jours';
ls17='Une semaine'; 
ls18='Deux semaines';  
ls19='La durée pendant laquelle le serveur DHCP réservera l\'adresse IP pour chaque ordinateur.';  
ls20='Nom de domaine local';
Optional='Facultatif';  
ls21='Une fonction qui vous permet d\'attribuer un nom à votre réseau.'; lsipm='Vous n\'avez pas entré les numéros ou certains numéros entrés ne sont pas valides. Les nombres contenus dans les zones de saisie doivent être compris entre 0 et 255.';
lssm='Le numéro de masque de sous-réseau entré n\'est pas valide.'; lsnetm='Le pool IP doit être dans le même masque de sous-réseau que la passerelle IP ';
lsendm='L\'adresse IP de fin doit être supérieure à l\'adresse IP de début.';
lspoolm='L\'adresse IP du réseau local ne peut pas figurer dans le pool d\'adresses DHCP.'; 
lsipm2='Adresse IP LAN non valide, le dernier numéro ne peut être ni 0 ni 255';
lsipm3='Adresse IP LAN non valide, le premier numéro ne peut être ni 127 ni 0';
lsldnm='Nom de domaine local invalide';
lsipm4='L\'IP entrée n\'est pas valide'; 
lsipalert='Veuillez modifier manuellement la zone de saisie Adresse dans la barre d\'état de votre navigateur et indiquer la nouvelle adresse LAN';
lsipm5='L\'adresse IP choisie doit être une adresse IP non-acheminable.)\n  192.168.x.x (où x est un nombre compris entre 0 et 255). \n10.x.x.x (où x est un nombre compris entre 0 et 255.)\n172.y.x.x (où y est un nombre compris entre 16 et 31, et x est compris entre 0 et 255.)';
lsipc='Souhaitez-vous vraiment changer l\'adresse IP du réseau local ?'; lo1='Connexion';
lo2='Avant d\'apporter des modifications, vous devez vous connecter avec votre mot de passe. Si vous n\'avez pas encore créé un mot de passe personnalisé, laissez ce champ vide et cliquez sur « Envoyer ».';
lo3='Mot de passe';  
lo4='Par défaut = laisser vide '; 
Clear='Effacer';
Submit='Envoyer';
le1='Belkin | Erreur de connexion ';
lerror='Erreur de connexion !!';  
Utilities='Utilitaires > ';
rs1='Réinitialisation réussie';
rs2='Veuillez attendre que le témoin d\'alimentation cesse de clignoter.';  
rs3='Le Routeur redémarre';
rs4='secondes restantes.';  
rf1='Restauration des paramètres par défaut du constructeur'; 
rf2='Veuillez attendre que le témoin d\'alimentation cesse de clignoter.';  
rss1='Rétablissement des paramètres réussi';
rss2='Veuillez attendre que le témoin d\'alimentation cesse de clignoter.';  
ufy1='Rétablir les paramètres par défaut du fabricant';
ufy2='Cette option rétablira les paramètres du Routeur vers les paramètres par défaut du fabricant. Nous vous recommandons de faire une copie de vos paramètres avant de rétablir la configuration par défaut. Pour rétablir la configuration par défaut, cliquez sur le bouton « Rétablir les Paramètres par Défaut » ci-dessous.';
ufy3='AVERTISSEMENT : Tous vos réglages seront perdus !\nEst-ce vraiment ce que vous voulez faire ?';
ufy4='La restauration des paramètres par défaut peut prendre jusqu\'à 60 secondes. N\'éteignez pas le routeur pendant le processus.';
ufy5='Les paramètres par défaut ne seront pas restaurés. Aucun paramètre ne sera perdu !';
ufy='Rétablir les Paramètres par Défaut';
ufe1='Utilitaires > Mise à Jour du Micrologiciel';
ufe2='De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises à jour peuvent contenir des améliorations et des solutions à des problèmes existants. Cliquez sur le lien ci-dessous pour vérifier la disponibilité d\'une mise à jour du micrologiciel de ce Routeur.';
ufe3='REMARQUE : Veuillez faire une copie de vos paramètres avant de mettre à jour le micrologiciel.';
ufe4='Cliquez ici pour';
ufe5='accéder à la page Enregistrer/Sauvegarder les paramètres en cours.';
ufe6='Rechercher une nouvelle version du micrologiciel >';
ufe7='Vérifier le micrologiciel'; 
ufe8='Mettre à jour le micrologiciel >';
Update='Mise à Jour';
ufe9='Veuillez spécifier où se trouve le fichier de mise à niveau. Entrez le nom du fichier ainsi que son chemin d\'accès ou cliquez sur « Parcourir » pour accéder à l\'emplacement du fichier.';
ufe10='Voulez-vous vraiment poursuivre la mise à jour ?';
ufe11='À la fin de la mise à niveau, il est possible que le routeur ne réponde pas aux commandes pendant une minute. Ceci est normal. Ne fermez ni ne redémarrez votre Routeur pendant cette période.';
um1='Cet écran vous permet de gérer plusieurs paramètres du Routeur et accomplir certaines tâches administratives.';
um2='Contrôle parental';
um3='Le Contrôle Parental de Belkin protège votre famille du contenu Internet potentiellement choquant.'; 
um4='Le Contrôle Parental de Belkin consiste en un filtre configurable. Vous pouvez donc naviguer sur l\'Internet avec vos enfants, sans même y être.<br>&nbsp;';
um5='Redémarrer le Routeur';
um6='Parfois il peut êre utile de redémarrer le routeur lorsque celui-ci fonctionne de façon inappropriée. Redémarrer le Routeur n\'affectera en rien vos paramètres de configuration.'; 
um7='Rétablir les paramètres par défaut du fabricant';
um8='Cette option rétablira les paramètres du Routeur vers les paramètres par défaut du fabricant. Nous vous recommandons de faire une copie de vos paramètres avant de rétablir la configuration par défaut.';
um9='Enregistrer/Sauvegarder les paramètres actuels';
um10='Vous pouvez sauvegarder votre configuration actuelle grâce à cette fonction. Cela vous permettra de la rétablir plus tard si vous perdez les paramètres ou s\'ils sont modifiés. Nous vous recommandons de faire une copie de vos paramètres avant de mettre à jour le micrologiciel.';
um11='Rétablir les paramètres préalablement sauvegardés';
um12='Cette option vous permet de rétablir une configuration sauvegardée préalablement.';
um13='Mise à jour du micrologiciel';
um14='De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises à jour peuvent contenir des améliorations et des solutions aux problèmes existants.';
um15='Paramètres du système';
um16='À la page des Paramètres du Système, vous pouvez entrer un nouveau mot de passe administrateur, régler le fuseau horaire';
um17=', activer la gestion à distance, et activer/désactiver la fonction';
um18=' de NAT du Routeur. ';
upc1='Utilitaires > Contrôle parental';
upc2='Le Contrôle Parental de Belkin protège votre famille du contenu Internet potentiellement choquant. Le Contrôle parental est déjà configuré pour bloquer de nombreux types de contenu Web. Vous pouvez toutefois le personnaliser de manière à ce qu\'il autorise plus ou moins de contenu. Tous les sites Internet peuvent facilement être bloqués ou autorisés en tout temps.';
upc3='Votre abonnement au Contrôle Parental est ';
upc4='DÉSACTIVÉ'; 
upc5='NON ACTIVÉ';
upc6='ACTIVÉ';
upc7='Pour ne plus afficher les invites du CONTRÔLE PARENTAL, cliquez ici :';
upc8='EXPIRÉ';
upc9='Your subscription will expire in ';
days='jour(s)';
upc10='Informations sur le compte';
Advanced='Avancé';
Apply='Appliquer';
upc11='Actualiser les informations sur le compte';
upc12='Notification';
upc13='Vous êtes actuellement ';
upc14=' inscrit à la fonction de notification.';
not='non';
upc15='Cliquez ici pour voir un exemple du fonctionnement de la fonction de notification.';
upc16='Exemple de notification';
upc17='Cliquez ici pour vous inscrire à la fonction de notification.';
upc18='S\'inscrire maintenant';
upc19='Cliquez ici pour voir le rapport de notification.';
upc20='Voir le rapport';
upc21='État du Contrôle Parental';
upc22='Activer ou Désactiver le Filtre de Contrôle Parental.';
upc23='Le Filtre Web est actuellement ';
upc24='Notification par e-mail';
upc25='Avertissez-moi par e-mail si le Contrôle Parental est outre-passé.';
upc26='L\'e-mail en vigueur est ';
upc27='Modifier le paramètre';
upc28='Pour visualiser ou modifier les paramètres par défaut du logiciel du Contrôle Parental, cliquez ici';
upc29='Inscription au Contrôle Parental';
upc30='Si vous désirez vous abonner à la fonction de Contrôle Parental, cliquez sur le bouton ci-dessous.'; 
upc31='Vous n\'êtes actuellement <b>PAS</b> abonné au service de Contrôle Parental.';  
upc32='Renouvellement du Contrôle Parental';
upc33='La date à laquelle votre abonnement prend fin approche. Cliquez ici pour renouveler votre abonnement.';
upc34='Renouveler maintenant';
upc35='Cette page est vide';
ON='Activé';
OFF='Éteint';
pwd='Mot de passe';
Modify='Modifier';
upa1='Utilitaires &gt; Informations sur le compte de Contrôle Parental';
upa2="Vous pouvez modifier ici vos informations concernant le Contrôle Parental, telles que l'adresse e-mail pour la notification ou le mot de passe de l'administrateur.";
upa3="Modifier l'adresse e-mail de notification du Contrôle Parental.";
upa4="votre adresse e-mail actuelle"; 
upa5='Entrez votre nouvelle adresse e-mail'; 
upa6='Entrez de nouveau votre nouvelle adresse e-mail';
upa7="Modifier de mot de passe de l'administrateur du Contrôle Parental";
upa8='Entrez votre nouveau mot de passe';
upa9="Entrez de nouveau votre nouveau mot de passe";
upa14="L'adresse e-mail ne peut être nulle";
Change='Modifier';
Stop='Appliquer';
upad1='Utilitaires &gt; Paramètres avancés de Contrôle Parental';
upad2="Le Contrôle Parental de Belkin nécessite une évaluation de la part de Cerberian (notre partenaire) pour chaque site web demandé. Normalement, le temps de réponse nécessaire est inférieur à 1 seconde, ce qui n'occasionne aucun délai. Cependant, lorsque vous demandez un site rare qui ne fait pas partie de leur base de données, ils évaluent le site de façon dynamique, ce qui peut prendre quelques secondes en fonction de la vitesse de chargement du site. Si le temps de réponse est plus lent que l'intervalle ci-dessous, vous pouvez configurer le CONTRÔLE PARENTAL de la façon suivante : Permettre l'accès à tous les sites sur temporisation, ou Bloquer l'accès à tous les sites sur temporisation.";
Timeout='Temporisation';
upad3='Temporisation après';
upad4='secondes d\'attente d\'une réponse';
upad5='Action par défaut lors de dépassement de la temporisation.';
upad6='En paramétrant l\'action par défaut lors du dépassement de la temporisation, le routeur bloquera/permettra l\'accès à la navigation selon le paramètre établi.';
upad7="Permettre l'accès à tous les sites sur temporisation.";
upad8="Bloquer l'accès à tous les sites sur temporisation.";
upr1='Utilitaires > Actualisation du compte de Contrôle Parental';
upr2="N'utilisez cette fonction que lorsque les informations liées à votre abonnement au Contrôle Parental sont incorrectes.<br>Lorsque vous cliquez sur ce bouton, le routeur télécharge/actualise toutes les informations de compte depuis le site de Belkin.<br>Pour actualiser les informations de compte PARENTAL CONTROL du routeur, cliquez sur Actualiser :";
uprev1='Utilitaires > Rétablir les Paramètres Précédents';
uprev2='Cette option vous permet de rétablir une configuration sauvegardée préalablement.';  
Restore='Rétablir';
uprev3='Entrez le nom du fichier contenant les paramètres sauvegardés.';
uprev4='Voulez-vous poursuivre et rétablir les paramètres ?';
uprev5='Suite au rétablissement des paramètres, le Routeur peut ne pas répondre aux commandes pendant une période pouvant aller jusqu\'à environ une minute.\n\nCeci est normal. Ne débranchez pas votre Routeur pendant cette période.';
ur1='Utilitaires > Redémarrer le Routeur';
ur2='Il peut parfois être utile de redémarrer le Routeur lorsque celui-ci fonctionne de façon incongrue. Redémarrer le Routeur n\'affectera en rien vos paramètres de configuration. Cliquez sur le bouton « Redémarrer le Routeur » ci-dessous pour redémarrer le Routeur.';
ur3='Redémarrer le Routeur';
ur4='Voulez-vous vraiment redémarrer le routeur ? Redémarrer le routeur n\'affectera en rien votre configuration.';
ur5='Allouez jusqu\'à 60 secondes au Routeur pour redémarrer. Ne débranchez pas le Routeur avant que le processus de redémarrage ne soit complété.';
usave1='Utilitaires > Sauvegarder les Paramètres Actuels';
usave2='Vous pouvez sauvegarder votre configuration actuelle grâce à cette fonction. Cela vous permettra de la rétablir plus tard si vous perdez les paramètres ou s\'ils sont modifiés. Nous vous recommandons de faire une copie de vos paramètres avant de mettre à jour le micrologiciel.'; 
Save='Enregistrer';
usys1='Utilitaires > Paramètres système';
usys2='Mot de passe Administrateur: '; 
usys3='Le Routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, vous pouvez le configurer ici.';
usys4='Entrez le Mot de Passe actuel';  
usys5='Entrez le nouveau mot de passe';  
usys6='Confirmer le nouveau Mot de Passe';  
usys7='Temporisation de la Connexion';
usys8='(1-99 minutes)'; 
usys9='Time and Time Zone: '; 
January='janvier'; February='février'; March='mars'; April='avril'; May='mai'; June='juin'; July='juillet'; August='août'; September='septembre'; October='octobre'; November='novembre'; December='décembre';
usys10="Définissez votre fuseau horaire. Si vous demeurez dans une région ayant recours à l'heure d'été, cochez cette case.";
usys11='Décalage et fuseau horaire';
usys12=' (GMT-12:00) Enewetak, Kwajalein';
usys13=' (GMT-11:00) Îles Midway, Samoa';
usys14=' (GMT-10:00) Hawaii';
usys15=' (GMT-09:00) Alaska';
usys16=' (GMT-08:00) Pacifique (É.U. et Canada) ; Tijuana';
usys17=' (GMT-07:00) Arizona';
usys18=' (GMT-07:00) Montagnes Rocheuses (É.-U. et Canada) ';
usys19=' (GMT-06:00) Centre (É.-U. et Canada) ';
usys20=' (GMT-06:00) Mexico, Tegucigalpa';
usys21=' (GMT-06:00) Saskatchewan';
usys22=' (GMT-05:00) Bogota, Lima, Quito';
usys23=' (GMT-05:00) Est (É.-U. et Canada) ';
usys24=' (GMT-05:00) Indiana (Est) ';
usys25=' (GMT-04:00) Heure de Atlantique (Canada) ';
usys26=' (GMT-04:00) Caracas, La Paz';
usys27=' (GMT-04:00) Santiago';
usys28=' (GMT-03:00) Terre-Neuve';
usys29=' (GMT-03:00) Brasilia';
usys30=' (GMT-03:00) Buenos Aires, Georgetown';
usys31=' (GMT-02:00) Centre-Atlantique';
usys32=' (GMT-01:00) Açores, Iles du Cap-Vert';
usys33=' (GMT) Casablanca, Monrovia';
usys34=' (GMT) Heure de Greenwich Dublin, Édimbourg';
usys35=' (GMT) Heure de Greenwich Lisbonne, Londres';
usys36=' (GMT+01:00) Amsterdam, Berlin, Berne, Rome';
usys37=' (GMT+01:00) Stockholm, Vienne, Belgrade';
usys38=' (GMT+01:00) Bratislava, Budapest, Ljubljana';
usys39=' (GMT+01:00) Prague, Bruxelles, Copenhague, Madrid';
usys40=' (GMT+01:00) Paris, Vilnius, Sarajevo, Skopje';
usys41=' (GMT+01:00) Sofia, Varsovie, Zagreb';
usys42=' (GMT+02:00) Athènes, Istanbul, Minsk';
usys43=' (GMT+02:00) Bucarest';
usys44=' (GMT+02:00) Le Caire';
usys45=' (GMT+02:00) Harare, Pretoria';
usys46=' (GMT+02:00) Helsinki, Riga, Tallinn';
usys47=' (GMT+02:00) Israël';
usys48=' (GMT+03:00) Bagdad, Koweït, Nairobi, Riyad';
usys49=' (GMT+03:00) Moscou, St. Petersbourg';
usys50=' (GMT+03:00) Téhéran';
usys51=' (GMT+04:00) Abu Dhabi, Muscat, Tbilissi, Kazan';
usys52=' (GMT+04:00) Volgograd, Kaboul';
usys53=' (GMT+05:00) Islamabad, Karachi, Iekaterinbourg';
usys54=' (GMT+06:00) Alma Ata, Dacca';
usys55=' (GMT+07:00) Bangkok, Jakarta, Hanoi';
usys56=' (GMT+08:00) Pékin, Chongqoing, Ouroumtsi';
usys57=' (GMT+08:00) Hong Kong, Perth, Singapour, Taipei';
usys58=' (GMT+09:00) Tokyo, Osaka, Sapporo, Yakoutsk';
usys59=' (GMT+10:00) Brisbane';
usys60=' (GMT+10:00) Canberra, Melbourne, Sydney';
usys61=' (GMT+10:00) Guam, Port Moresby, Vladivostok';
usys62=' (GMT+10:00) Hobart';
usys63=' (GMT+11:00) Magadan, Iles Salomon, Nouvelle-Calédonie';
usys64=' (GMT+12:00) Fidji, Kamtchatka, Iles Marshall';
usys65=' (GMT+12:00) Wellington, Auckland';
usys66='Heure d\'été';
usys67='Ajuster automatiquement à l\'heure d\'été';
usys68='Gestion à distance:';    
AF='FONCTION AVANCÉE !';
usys69='La gestion à distance vous permet d\'apporter des changements aux paramètres de votre Routeur, où que vous soyez grâce à l\'Internet. Avant d\'activer cette fonction,';
usys70='ASSUREZ-VOUS D\'AVOIR ENTRÉ UN MOT DE PASSE ADMINISTRATEUR.';
usys71='N\'importe quelle adresse IP peut gérer le routeur à distance.';  
usys72='Seulement cette adresse IP peut gérer le routeur à distance';  
usys73='Activer la NAT :';    
usys74='Vous permet d\'éteindre la fonction de traduction d\'adresse réseau (NAT). Dans la plupart des cas, il est recommandé de ne PAS DÉSACTIVER cette fonctionnalité. ';
usys75='Activation/Désactivation NAT';
usys76='Activer l\'UPNP: ';   
usys77="Vous permet de désactiver/désactiver la fonction UPnP du routeur. Si vous utilisez des applications prenant en charge l'UPnP, cette fonction permettra à ces applications de configurer automatiquement le routeur.";
usys78='UPNP Enable / Disable';
usys79='Activer la mise à jour automatique du micrologiciel :';
usys80='Vous permet de vérifier la disponibilité de mises à jour pour votre routeur.';
usys81='Activer/Désactiver la mise à jour automatique du micrologiciel ';
usys82='Le mot de passe en cours n\'est pas valide ';
usys83='Le nouveau mot de passe et le mot de passe de vérification ne correspondent pas.';
usys84='Plage de temporisation de la connexion : 1-99';
usys85='La longeur du mot de passe est incorrecte. La longueur du mot de passe doit être comprise entre 3 et 12 caractères';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='Avant d\'activer cette fonction, il est FORTEMENT RECOMMANDÉ que vous ajoutiez un mot de passe administrateur.';
usys88='Serveur NTP principal';
usys89='Serveur NTP secondaire';
usys90='192.43.244.18-Amérique du Nord';
usys91='132.163.4.102-Amérique du Nord';
usys92='192.5.41.41-Amérique du Nord';
usys93='192.5.41.209-Amérique du Nord';
usys94='207.200.81.113-Amérique du Nord';
usys95='208.184.49.9-Amérique du Nord';
usys96='129.132.2.21-Europe';
usys97='130.149.17.8-Europe';
usys98='137.189.8.174-Asie/Pacifique';
usys99='Port d\'accès distant';
usysipm='Vous n\'avez pas entré les numéros de l\'IP ou certains numéros entrés ne sont pas valides. Ils doivent être compris entre 0 et 255';
usysb1='Le Routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, vous pouvez le configurer ici.';
vjs1='Adresse IP incorrecte, trop longue. Veuillez vérifier.';
vjs2='Adresse IP incorrecte, \'.\' manquant , veuillez réessayer !';
vjs3='Adresse IP incorrecte, il manque des nombres entre \'.\'. Veuillez réessayer !';
vjs4="Adresse IP incorrecte, '.' superflu , veuillez réessayer !"
vjs5="Adresse IP incorrecte, les nombres entre '.' sont trop grands. Veuillez réessayer !";
vm1='Caractère Invalide';
vm2=' à la position';
vm3='Doit être ';
vjs6='Format d\'année incorrect. Veuillez l\'entrer de nouveau (2002, par exemple)';
vm4='Numéro incorrect.'; 
vjs8='Incorrect, doit être compris entre 1970..2037';
vjs9='Format de mois incorrect. Veuillez l\'entrer de nouveau (01...12, par exemple)';
vjs10='Veuillez d\'abord entrer l\'année et le mois';
vjs11='Format de jour incorrect. Veuillez l\'entrer de nouveau (01...31, par exemple), certains mois ne pouvant être que (00...28)';
vjs12='Format horaire incorrect. Veuillez l\'entrer de nouveau (00...23, par exemple)';
vjs13='Format des minutes incorrect. Veuillez l\'entrer de nouveau (00..59, par exemple)';
vjs14='MTU incorrect, doit être comprise entre 576...1492';
vjs15='MTU incorrect, doit être compris entre 128...65535';
vjs16="IP incorrecte :";  vjs161=" non comprise ";   vjs162=" sous-réseau";
vjs17='Les deux mots de passe entrés sont différents. Veuillez vérifier !.';
vjs18='Veuillez entrer un numéro de port de début.';
vjs19='Le numéro de port de début doit être inférieur à celui du port de fin.';
vjs20='Numéro de port incorrect. Les numéros de ports doive être des entiers positifs.';
vjs21='Longueur incorrecte';
vjs22='Format invalide à la position'; vjs221=' ! Doir être :';
vjs23='Adresse MAC invalide, ceci est une adresse de diffusion.';
vjs24='Adresse MAC incorrecte. Il s\'agit d\'une adresse de type Null.';
vjs25='Adresse MAC invalide, ceci est une adresse de multidiffusion.';
vjs26='Adresses IP de début et de fin incorrectes. L\'adresse IP de fin doit être supérieure à celle du début.';
vjs27='Numéro incorrect ! Doit être compris entre 1..65535';
vjs28='Format de masque de réseau incorrect.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Adresse IP incorrecte. Le dernier numéro ne peut être ni 0 ni 255.';
vjs31='Adresse IP LAN non valide, le premier numéro ne peut pas être 127.';
vjs32='Adresse IP LAN incorrecte. Il ne peut s\'agir de 0.0.0.0';
vjs33='Adresse IP LAN incorrecte. Il ne peut s\'agir de 224.0.0.0';
vjs34='La plage autorisée est';
vp1='Ce site web est bloqué par le CONTRÔLE PARENTAL';
vp2=' est bloqué par le CONTRÔLE PARENTAL et est classé comme : ';
vp3='Si vous êtes en désaccord avec l\'évaluation et désirez que le site soit évalué a nouveau, cliquez sur Désaccord :';
vp4='Si vous souhaitez modifier les paramètres du CONTRÔLE PARENTAL, cliquez sur « Modifier » :';
vp5='Pour outre-passer vos paramètres (cet ordinateur seulement) pour 1 heure, entrez votre mot de passe et cliquez sur « Outre-Passer » :';
Disagree='Désaccord';
Change='Modifier';
Override='Outre-passer';
wc1='WAN > Type de Connexion';
wc2='Sélectionnez votre type de connexion:'; 
wc3='Dynamique'; 
wc4='La connexion de type Dynamique est la plus courante. Si vous utilisez un modem câble, il est fort probable que vous possédiez une connexion dynamique. Si vous utilisez un modem câble ou n\'êtes pas certains de votre type de connexion, utilisez celle-ci.';  
wc5='Fixe'; 
wc6='Une connexion de type Adresse IP Fixe est moins courante que les autres types de connexion. Utilisez ce type de sélection si votre FAI vous a attribué une adresse IP qui ne change jamais.';  
wc7='PPPoE'; 
wc8='Si vous utilisez un modem DSL et/ou votre FAI vous a attribué un nom d\'utilisateur et un mot de passe, il est fort probablement que votre connexion soit de type PPPoE. Sélectionnez ce type de connexion.';  
wc9='PPTP'; 
wc10='[Europe seulement]. Ce type de connexion se retrouve surtout en Europe. Si votre FAI vous recommande d\'utiliser spécifiquement le protocole PPTP et vous a fourni les informations requises, utilisez alors cette option.'; 
wc11='Telstra BigPond'; 
wc12='[Australie seulement] Les utilisateurs Câble ou DSL de Telstra BigPond doivent utiliser cette option pour configurer leur connexion.'; 
Next='Suivant >';
wds1='WAN > DNS';
wds2='Si votre FAI vous a attribué une adresse DNS spécifique, entrez l\'adresse dans cette fenêtre et cliquez sur « Enregistrer les Modifications ».'; 
wds3='Automatiquement du FAI'; 
wds4='Adresse DNS';   
wds5='Adresse DNS Secondaire';   
wds6='DNS = serveur de nom de domaine. Un Serveur de Nom de Domaine est un serveur que l\'on retrouve sur l\'Internet, et qui traduit les URL (Universal Resource Links) telles que www.belkin.com en adresses IP.';
wds7='Vous devez entrer les paramètres DNS fournis par votre FAI si vous n\'utilisez pas la fonction DNS automatique';
wdy1='WAN > Type de connexion > IP dynamique';
wdy2='Pour configurer vos paramètres d\'adressage IP dynamique, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer les Modifications ».';
wdy3='Nom d\'hôte';  
wdy4='Nom d\'Hôte = nom requis par certains FAI pour la connexion à leur système.';  
wdy5='Changer l\'Adresse MAC du WAN'; 
wdy6='Nom d\'hôte incorrect : ~!##$%^&*()=+{}[]|\'":;?/.<> ';
wmc1='WAN > Adresse MAC';
wmc2='Certains FAI exigent que l\'adresse MAC de la carte réseau de votre ordinateur soit clonée (copiée) dans le routeur. Advenant le cas que vous ignoriez si votre FAI l\'exige, clonez simplement l\'adresse MAC de l\'ordinateur originellement connecté au modem. Le clonage de l\'adresse MAC n\'entraînera aucun problème pour votre réseau.';
wmc3='Adresse MAC du WAN'; 
wmc4='Cloner l\'Adresse MAC de l\'Ordinateur';  
wmc5='Cloner';
wm1='Internet/WAN';
WAN='WAN';
wm2='Vous pouvez configurer votre Routeur selon les paramètres de votre FAI à l\'onglet Internet / WAN. Le Routeur peut pratiquement se connecter à tous les systèmes de FAI, si bien sûr vous avez configuré votre Routeur avec les paramètres appropriés à votre type de connexion. Pour configurer votre Routeur selon les paramètres de votre FAI, cliquez sur Type de Connexion à l\'onglet Internet / WAN, à la gauche de l\'écran.';
wm3='Types de Connexions prises en charge:';
wm4='<b>Dynamique :</b> y compris les FAI qui exigent un nom d\'hôte et ceux qui lient la connexion à une adresse MAC spécifique.';
wm5='<b> Adresse IP fixe :</b> le Routeur prend en charge les connexions aux FAI attribuant une adresse IP fixe.'; 
wm6='<b>PPPoE :</b> Le Routeur prend en charge les connexions dynamiques qui exigent une connexion PPPoE comme autentification.'; 
wm7='<b>PPTP :</b> Pour utilisateurs Européens SEULEMENT. le Routeur prend en charge les connexions aux FAI européens utilisant le protocole PPTP.';
wm8='<b>Telstra BigPond :</b>';
wm9='Pour utilisateurs Australiens SEULEMENT. Le routeur prend en charge les connexions à Telstra BigPond.'; 
wpe1='WAN > Type de Connexion > PPPoE';
wpe2='Pour entrez vos paramètres PPPoE, entrez les informations ci-dessous et cliquez sur « Enregistrer les Modifications ».';
wpe3='Nom d\'utilisateur';   
wpe4='Entrez à nouveau le mot de passe';   
wpe5='Nom de Service (Facultatif)';    
wpe6='MTU (576-1492)';    
wpe7='N\'apportez aucun changement aux paramètres de MTU, à moins que votre FAI ne vous ait fourni un paramètre différent de 1432.';
wpe8='Déconnecter après';
wpe9=' minutes d\'inactivité.';
idlerangerro='La durée d\'inactivité des numéros entrés est invalide.\n Les numéros doivent être compris entre 1 et 99.';
wpe10='Caractère non valide : <>&';
pm='Votre service est dans l\'impossibilité de vérifier le mot de passe entré. Veuillez vous assurer que vous l\'avez correctement entré.';
wpe11='Valeur MTU incorrecte';
wpe12='Veuillez entrer votre nom d\'utilisateur';
wpp1='WAN > Type de Connexion > PPTP';
wpp2='Compte PPTP';    
wpp3='Mot de passe PPTP';    
wpp4='Entrez à nouveau le mot de passe';   
wpp5='Nom d\'hôte';   
wpp6='Adresse de service IP';  
wpp7='Mon adresse IP';  
wpp8='Mon masque de sous-réseau';  
wpp9='ID de connexion (optionnel)';    
wpp10='Déconnecter après';
wpp11=' minutes d\'inactivité.';
wpp12='Cliquez ici pour entrer vos paramètres de DNS.';
wpp13='Veuillez entrer votre compte PPTP';
wpp14='Veuillez entrer à nouveau le mot de passe!';
wpp15='Veuillez entrer votre mot de passe';
ws1='WAN > Type de connexion > IP dynamique';
ws2='Pour configurer vos paramètres d\'adressage IP statique, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer les Modifications ».';
ws3='Adresse IP';  
ws4='Masque de Sous-Réseau';   
ws5='Adresse de passerelle du FAI';   
ws6='Mon FAI m\'attribue plus d\'une adresse IP Statique?';  
ws7='Cliquez ici pour entrer vos paramètres de DNS.';  
dm='Il est possible que vous n\'ayez pas entré tous les numéros DNS ou certains de ces numéros ne sont pas valides. Ils doivent être compris entre 0 et 255.';
sm='The Subnet mask numbers you entered are invalid.';
ws8='Veuillez entrer/valider vos paramètres d\'adresse DNS à l\'écran suivant.';
wsc1='Alias IP Address';  
im='La liste d\'alias d\'Adresses IP est pleine. Il est impossible de créer d\'autres règles.';
wt1='WAN > Type de connexion > Telstra BigPond';
wt2='Si votre FAI est Telstra Big Pond en Australie, vous devez entrer vos informations ci-dessous. Ces informations vous sont fournies par Telstra Big Pond.';
wt3='Sélectionnez votre État de résidence :';
wt4='L\'utilisateur décide manuellement de la connexion au serveur'; wt5='Connexion au Serveur'; 
Logout='Déconnexion';
wt6='Veuillez entrer l\'adresse IP du Serveur ou sélectionner votre État de résidence à partir du menu.';
wla1='Sans Fil > Utilisation comme point d\'accès';
wlad1='Le routeur peut être configuré pour agir strictement en tant que point d\'accès, outre-passant entièrement les fonction d\'acheminement et de pare-feu. Pour ce faire, sélectionnez « Activer » et entrez l\'Adresse IP que vous désirez attribuer au point d\'accès.';
wlad2='Activation/Désactivation';
wlae1='Spécifiez l\'adresse IP';  
wlae2='Masque de sous-réseau';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Les canaux doivent être identiques sur le routeur et le PA.<br>'+
      '2) Les paramètres de sécurité (WEP) doivent être identiques sur le routeur et le PA.<br>'+
      '3) Si le filtrage MAC est activé, assurez-vous d\'ajouter la ou les adresse(s) MAC WLAN du routeur/PA afin de permettre à ceux-ci de communiquer.<br>';
wlc1='Sans fil > Canal et SSID';
wlc2='Pour apporter des modifications aux paramètres du routeur, veuillez le faire ici. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres.';
wlc3='Canal sans fil';
wlc4='SSID';  
wlc5='Mode Sans Fil'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Diffusion du SSID';  
wlc10='Turbo Mode'; 
wlc11="L'activation du Mode Turbo permet au routeur ou au point d'accès d'utiliser le Frame Bursting pour obtenir un débit maximal entre le routeur ou le point d'accès et les clients 802.11g, Le Mode Turbo fonctionne uniquement auprès de clients 802.11g prenant en charge le Mode Turbo. Les clients 802.11g de Belkin possédant les pilotes les plus récents prennent en charge le Mode Turbo. Les clients qui ne prennent pas en charge le Mode Turbo fonctionneront de façon habituelle si le Mode Turbo est activé.";
wlc12='Mode Protégé';
wlc13="REMARQUE : Dans la majorité des cas, vous obtiendrez de meilleures performances (débit) avec le Mode Protégé étant Désactivé. Si vous travaillez dans un environnement avec un trafic 802.11b TRÈS DENSE ou subissez des interférences, vous obtiendrez de meilleures performances avec le Mode Protégé étant Activé.";
wlc14='Canal actuel';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
wle1='Sans Fil > Sécurité';
wle2='Mode Sécurisé';
wle3='WPA-PSK (sans serveur)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="Vous pouvez configurer les paramètres de sécurité/chiffrement ici. La Sécurité devrait être activée pour assurer la sécurité maximale du réseau sans fil. Le WPA (Wireless Protected Access) présente un changement de clés dynamique et constitue la meilleure option de sécurité. Dans les environnements sans fil, là où aucun des périphériques ne prend en charge le WPA, le mode WEP (Wired Equivalent Privacy) devrait être utilisé.";
wle8='(paires de 13 chiffres hexadécimaux)';  
wle9='REMARQUE : ';
wle10='Pour générer automatiquement des paires hexadécimales à l\'aide d\'une expression mot de passe, cochez la case de gauche et saisissez ici votre expression mot de passe ';
PP='Expression mot de passe'; 
generate='générer';
errm='Veuillez entrer une expression mot de passe';
keym='La clé n\'est pas complète';
wle11='Clé 1';  
wle12='Clé 2'; 
wle13='Clé 3'; 
wle14='Clé 4';   
wle15='(paires de 13 chiffres hexadécimaux)'; 
wle16='WPA/WPA2(with Server)';
wle17='Paramètres avancés - Le Wireless Protected Access utilisant un serveur pour distribuer les clés aux clients : Cette option nécessite qu\'un serveur Radius soit en opération sur le réseau.';
keym1=' est incomplète.';
keym2=' est invalide, veuillez d\'abord corriger !';
wlm1='Sans Fil';
wlm2='Dans cet onglet, vous pouvez ajuster les paramètres de la section Sans Fil du Routeur.';
wlm3='Canal et SSID';
wlm4='Faire des ajustements au canal sans fil et au SSID (nom du réseau sans fil).';
wlm5='Sécurité';
wlm6='Modifiez les paramètres de sécurité, tels que les paramètres de WPA ou de WEP. ';
wlm7='Utiliser comme point d\'accès';
wlm8='Définissez le mode de fonctionnement du routeur sur Point d\'accès ';
wlm9='Spécifiez l\'adresse IP';
wlm10='Spécifiez l\'adresse IP du PA.';
wlm11='Contrôle d\'adresses MAC'
wlm12='Dressez une liste de clients qui obtiendront ou se verront refuser l\'accès au réseau sans fil.';
wlm13='Pont Sans Fil';
wlm14='Vous permet de paramétrer les modes de pontage WDS.';
ww8='Entrez le numéro de port du radius';
ww9='Le numéro de port du Radius doit être un chiffre entre 1 et 65535';
ww10='Entrez la clé du radius :';
ww11='L\'intervalle de re-saisie de la clé doit être un chiffre';
ww12='L\'intervalle de ressaisie de la clé doit être plus grand que 60 secondes';
ww13='Authentification';
ww1='WPA (avec serveur) ';
ww2='Paramètres avancés - Le Wireless Protected Access utilisant un serveur pour distribuer les clés aux clients : Cette option nécessite qu\'un serveur Radius soit en opération sur le réseau.';
ww3='Technique de chiffrement';
ww4='Serveur Radius';
ww5='Port Radius';
ww6='Clé Radius';
ww7='Intervalle de ressaisie de la clé';
seconds='secondes';
wwp6='Entrez la clé pré-partagée (PSK)';
wwp7='La clé pré-partagée doit être composée de 8 à 63 caractères ou 64 hex';
wwp1='TKIP est l\'option par défaut';
wwp2='Clé Pré-Partagée (Pre-Shared Key - PSK)';
wwp3='WPA-PSK (sans serveur)';
wwp4='Wireless Protected Access avec clé pré-partagée (pre-shared key) : La clé est un mot de passe, sous la forme d\'un mot, d\'une phrase ou d\'une chaîne de lettres et de chiffres. La clé doit être composée de <b>8</b> à <b>63</b> caractères, et peut inclure des espaces et des symboles, ou une clé hex <b>64</b> bits (0-F) seulement. Chaque client se connectant à un réseau doit utiliser la même clé (clé pré-partagée).';
wwp5='Dissimuler la PSK';
wlb1='Sans Fil > Pont Sans Fil';
wlb2="Le Pontage Sans Fil ou Système de Distribution Sans Fil (Wireless Distribution System - WDS) est utilisé pour connecter ensemble des routeurs et des points d'accès sans fil dans le but d'étendre la portée d'un réseau.";
wlb3='Activer le Pontage sans fil.';
wlb4="(activer cette fonction permet à d'autres points d'accès de se connecter à ce point d'accès.)";
wlb5='Activé par défaut';
wlb6='Permettre UNIQUEMENT à des points d\'accès spécifiques de se connecter.';
wlb7="(Entrez l'Adresse MAC sans fil du point d'accès pour établir la connexion. Si cette option n'est pas cochée, tous les PA pourront se connecter au réseau. Remarque : lorsque vous connectez des points d'accès, au moins l'un d'entre eux doit appeler l'adresse MAC de l'autre. Rappel : vous pouvez connaître l'adresse MAC en utilisant la fonction de surveillance du site sur une carte client sans fil.)";
wlb8='Désactiver la possibilité pour les CLIENTS sans fil de se connecter.';
wlb9="(Cette fonction ne devrait être utilisée que lorsqu'un point d'accès est utilisé exclusivement pour se connecter à d'autre points d'accès sans fil.)";
wlb10='pas valide';
BSSID='BSSID';
wlbss1='Analyse du site';
wlbss2='Type de réseau';
wlbss3='Chiffrement';
wlbss4='Sélectionnez';
wlbss5='Aucun BSSID trouvé.'; 
wlbss6="Les quatre champs sont pleins, effacez-en un avant d'en entrer un nouveau !";
wlq1='Configuration du QoS (Quality of Service)';
wlq2="Le QoS s'assure que les données prioritaires sur votre réseau, telles que le contenu multimédia et la Voix sur IP (VoIP), ne soient pas « contaminées » par les données transmises sur votre réseau. Basé sur la norme 802.11e, vous pouvez activer/désactiver cette fonction ou vous pouvez choisir le mode d'accusé de réception de votre choix. Si vous comptez utiliser le transfert multimédia en temps réel ou la Voix sur IP sur votre réseau, il est recommandé d'activer la fonction QoS.<br>"; 
wlq3='Sélecteur QoS'; 
wlq4='Vous permet d\activer/désactiver la fonction QoS.<br>'; 
wlac1='Mode ACK'; 
wlac2='Il existe deux modes d\'accusés de réception (AR - ACK en anglais), pouvant être utilisés pour tirer les meilleures performances multimédia de votre réseau : Burst ACK et Immediate ACK. <br><br>'+
"Immediate ACK est le paramètre par défaut. Nous vous le recommandons pour le fonctionnement normal du réseau. Modifier le Mode AR de « Immediate ACK » à « Burst ACK » peut affecter le débit à longue portée. Utilisez « Immediate ACK » lorsque la performance à grande distance est importante. <br><br>"+
"Le mode « Burst ACK » diminue le surdébit en n'acquittant pas chaque paquet envoyé sur le réseau. En présence d\'une bonne connexion entre le routeur et le client, le mode « Burst ACK » peut améliorer le débit. Si une application, telle que le téléchargement de contenu vidéo en temps réel, requiert une bande passante maximale, utilisez le mode « Burst ACK ». Rappelez-vous que la performance à grande portée sera affectée par l'utilisation du mode « Burst ACK ». <br>";
wmac1='Configuration du contrôle d\'adresses MAC'; 
wmac2='Le filtre d\'adresse MAC représente une puissante caractéristique de sécurité, vous permettant d\'autoriser, à des ordinateurs spécifiques, l\'accès à votre réseau sans fil. Remarque : Cette liste ne s\'applique qu\'aux ordinateurs sans fil. Cette liste peut être configurée de sorte que tout ordinateur non spécifié dans les paramètres du filtre et qui tente d\'accéder au réseau se verra refuser l\'accès. Lorsque vous activez cette fonction, vous devez entrer l\'adresse MAC de chaque client (ordinateur) de votre réseau, pour permettre à chacun d\'accéder au réseau. La fonction « Bloquer » vous permet d\'activer et de désactiver facilement l\'accès au réseau pour tout ordinateur sans devoir ajouter l\'adresse MAC de l\'ordinateur à la liste ni la supprimer.<br>'+
'Dresser une liste d\'ordinateurs « autorisés » <br>'+
 '1.Sélectionnez la case d\'option « Autoriser » (1) pour commencer à dresser une liste d\'ordinateurs pouvant se connecter à votre réseau sans fil.<br>'+
 '2. Puis, dans le champ « Addresse MAC » vide (3), entrez l\'adresse MAC de l\'ordinateur à qui vous autorisez l\'accès à votre réseau sans fil. Cliquez ensuite sur « Ajouter » (4).<br>'+
 '3. Recommencez pour chaque ordinateur.<br>'+
 '4. Cliquez sur « Enregistrer les modifications » (5) pour terminer.<br><br>'+
'Dresser une liste d\'ordinateurs « refusés » <br>'+
'La liste d\'accès restreint vous permet de spécifier les ordinateurs qui se verront REFUSER l\'accès au réseau. Tout ordinateur se trouvant dans la liste se verra refuser l\'accès au réseau sans fil. Tous les autres pourront y accéder.<br>'+
 '1.Sélectionnez la case d\'option « Refuser » (2) pour commencer à dresser une liste d\'ordinateurs qui se verront refuser l\'accès à votre réseau sans fil.<br>'+
 '2. Puis, dans le champ « Addresse MAC » vide (3), entrez l\'adresse MAC de l\'ordinateur à qui vous refusez l\'accès à votre réseau sans fil. Cliquez ensuite sur « Ajouter » (4).<br>'+
 '3. Recommencez pour chaque ordinateur.<br>'+
 '4. Cliquez sur « Enregistrer les modifications » (5) pour terminer.<br>'; 
wlmc1='Wireless > Contrôle d\'adresse MAC';
wlmc2='Le Contrôle d\'adresse MAC permet de dresser une liste de clients à qui vous permettrez ou refuserez l\'accès au réseau sans fil.';
Allow='Autoriser';   Deny='Refuser';   //Disable='Désactiver';
wlmc7='Déterminez si vous voulez permettre ou restreindre l\'accès à la liste d\'adresses MAC en premier lieu !';
wlmc6='Impossible d\'entrer plus de 16 adresses MAC !';
wlmc5='L\'adresse MAC exacte doit être XX:XX:XX:XX:XX:XX, X étant compris entre 0~9 et a-f !';
wlmc3="Invalid MAC address ";
wlmc4='Veuillez d\'abord corriger !';
ENTRY_FULL	= 'Toutes les entrées sont pleines.\nVeuillez effacer certaines entrées et recommencer.';
CLEAR_CONFIRM= 'Voulez-vous effacer l\'entrée ';
CLEAR_ALL_CONFIRM = 'Voulez-vous effacer toutes les entrées ?';
ERR_INTERNAL	= 'Erreur Interne : Veuillez vérifier la fonction javascript -- ';
g1='The L\'adresse IP représente l\'Adresse IP interne du routeur. Pour accéder à l\'interface de configuration '+
'avancée, entrez cette adresse IP dans la barre d\'adresse de votre navigateur. Cette adresse peut être '+  
'modifiée au besoin. Pour modifier l\'adresse IP, entrez la nouvelle adresse IP et cliquez sur « Enregistrer '+  
'les modifications ». L\'adresse IP choisie doit être une adresse IP non-acheminable. Exemples d\'adresse IP '+  
'non-acheminable : '; 
g2='192.168.x.x (où x est un nombre compris entre 0 et 255.)<br>';
g3='10.x.x.x (où x est un nombre compris entre 0 et 255)<br>';
g4='172.y.x.x (où y est un nombre compris entre 16 et 31, et x est un chiffre est compris entre 0 et 255.)<br>';
g5='Il n\'est pas nécessaire de modifier le masque '+
'de sous-réseau. Il est toutefois possible de le modifier au besoin. N\'apportez des changements au masque de sous-réseau '+
'que si vous le devez absolument.<br>';
g6="DNS est l'acronyme de Domain Name Server, qui se traduit par Serveur de Noms de Domaine. Un serveur de noms de domaine est un serveur qui se trouve sur Internet "+ 
 "et qui traduit les adresses URL (Universal Resource Links), telles que www.belkin.com, en "+ 
"adresses IP. La plupart des FAI n'exigent pas que vous entriez ces informations lors de la configuration du routeur. La "+ 
"boîte « Obtenir Automatiquement du FAI » ne devrait être cochée que lorsque votre FAI ne vous a pas attribué d'adresse "+
"de DNS spécifique. Si vous utilisez une connexion de type IP fixe, il est possible que vous deviez entrer une "+
"adresse DNS spécifique et une adresse DNS secondaire pour assurer le bon fonctionnement de votre connexion. Si "+
"vous utilisez une connexion de type dynamique ou PPPoE, il est fort probable que vous n'ayez pas à entrer une adresse "+ 
"DNS. Pour entrer les paramètres d'adresse DNS, désélectionnez la case « Automatique du FAI » et "+
"entrez les chiffres DNS dans les espaces fournis à cet effet. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. <br>";
g7="La fonction de serveur DHCP permet la mise en place d'un réseau en toute simplicité, en attribuant une adresse IP "+ 
"à chacun des ordinateurs du réseau. Le serveur DHCP peut être désactivé au besoin. Si vous "+
"désactivez le serveur DHCP, vous devrez entrer manuellement une adresse IP fixe pour chaque ordinateur "+
"du réseau. Le pool d'adresses IP est la plage d'adresses IP mises de côté pour attribution dynamique "+
"aux ordinateurs de votre réseau. La valeur par défaut est de 2 à 100 (99 ordinateurs). Pour changer "+
"ce nombre, entrez de nouvelles adresses IP de début et de fin, puis cliquez sur « Enregistrer les modifications ». <br>";
g8="Vous pouvez donner un nom de domaine local (nom de réseau) à votre réseau. Il n'est pas nécessaire de modifier "+ 
"ce paramètre à moins qu'un impératif particulier ne vous y oblige. Vous pouvez donner n'importe "+
"quel nom à votre réseau (« MON RÉSEAU », par exemple). <br>";
g9='IP dynamique';
g10="Une connexion de type dynamique est le type de connexion le plus courant, et se retrouve sur les modems câble. "+ 
"Choisir l'option de connexion dynamique est souvent suffisant pour compléter la connexion "+ 
"à votre FAI. Certains types de connexion dynamique peuvent exiger un Nom d'Hôte. Si votre FAI vous a attribué un Nom d'Hôte "+
"vous pouvez entrer celui-ci dans l'espace prévu. Votre Nom d'Hôte est attribué par votre FAI. "+
"Certaines connexions dynamiques peuvent exiger le clonage de l'adresse MAC du PC "+
"originellement connecté au modem. Pour ce faire, cliquez sur le lien Modifier l'adresse MAC du WAN "+
"à l'écran. L'indicateur d'état de l'Internet affichera « Connexion OK » si votre routeur est configuré de façon appropriée. <br>";
g11="Une connexion de type Adresse IP fixe est moins courante que les autres types de connexion. Si c'est le cas, "+
"vous devez connaître votre adresse IP, celle de votre masque de sous-réseau ainsi que l'adresse de passerelle "+
"de votre FAI. Vous pouvez obtenir ces informations auprès de votre FAI ou parmi les documents fournis "+ 
"par votre FAI. Entrez les informations, et cliquez sur « Enregistrer les Modifications ». Après avoir enregistré les modifications, "+
"l'indicateur d'état de l'Internet affichera « Connexion OK » si votre routeur est correctement configuré.<br><br>"+
"Si votre FAI vous a attribué plus d'une adresse IP fixe, votre routeur est en mesure de recevoir "+ 
"jusqu'à cinq adresses IP fixes WAN. Sélectionnez « Mon FAI fournit plus d'une adresse IP fixe », "+
"et entrez les autres adresses. <br>"; 
g12="La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoE. Si vous utilisez un modem ADSL pour vous connecter à "+
"Internet, votre FAI utilise probablement le protocole PPPoE pour vous connecter au service. Si vous disposez, "+
"chez vous ou au bureau, d'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoE. "+
"<br><br>"+
"Vous possédez une connexion de type PPPoE si :<br>"+ 
"1) Votre FAI vous a attribué un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet.<br>"+
"2) Votre FAI vous a fourni des logiciels tels que WinPOET et Enternet300, et vous utilisez ceux-ci pour vous brancher à Internet.<br>"+
"3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet.<br><br>"+
"Pour configurer le routeur selon le protocole PPPoE, entrez votre nom d'utilisateur et votre mot de passe dans les champs prévus. "+
"Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide. "+
"Après avoir entré les informations, cliquez sur « Enregistrer les modifications ». Après avoir enregistré les modifications, "+
"l'indicateur Statut d'Internet affichera « Connexion OK » si votre routeur est correctement configuré. "+
"Pour plus d'informations sur la configuration de votre routeur selon le protocole PPPoE, reportez-vous au manuel de l'utilisateur.<br>";
g13="Certains FAI exigent une connexion suivant le protocole PPTP. Ceci crée une connexion directe avec le système du FAI. "+
"Entrez l'information fournie par votre FAI dans le champ prévu à cet effet. Lorsque vous avez terminé, "+
"Cliquez sur « Enregistrer les Modifications ». Après avoir enregistré les modifications, l'indicateur Statut d'Internet affichera "+
"« Connecté » si votre routeur est correctement configuré. ";
g14="Votre nom d'utilisateur et votre mot de passe vous sont fournis par Telstra BigPond. Saisissez ces données ci-dessous. "+ 
"Lorsque vous choisissez votre état, l'adresse IP du serveur de connexion sera configurée automatiquement. "+
"Si l'adresse du serveur de connexion est différente de celle qui apparaît ici, "+
"vous pouvez entrer manuellement l'adresse IP du serveur de connexion. "+
"Après avoir entré les informations, cliquez sur « Enregistrer les Modifications ». "+ 
"Après avoir enregistré les modifications, l'indicateur Statut d'Internet affichera « Connecté » "+
"si votre routeur est correctement configuré. ";
 g15='Paramètre MTU';
g16="Le paramètre MTU ne devrait jamais être modifié, à moins que votre FAI ne vous ait fourni un paramètre spécifique. "+ 
"Modifier le paramètre de MTU peut entraîner des problèmes relatifs à votre connexion à Internet, notamment "+ 
"des déconnexions, un accès Internet lent et une défaillance des applications Internet. "; 
g17='Déconnexion après...'; 
g18="La fonction de déconnexion permet de déconnecter automatiquement le routeur de votre FAI lorsque "+ 
"celui-ci est inactif pendant une période de temps déterminée. Par exemple, en sélectionnant "+
"cette option et en entrant le chiffre 5 dans le champ des minutes, le routeur "+
"se déconnectera automatiquement d'Internet après 5 minutes d'inactivité Internet. Cette option devrait être utilisée "+ 
"si votre FAI vous facture à la minute. ";
g19="MAC est l'acronyme de Media Access Control. Tous les composants réseau, notamment les cartes, "+ 
"les adaptateurs et les routeurs ont un « numéro de série » unique appelé adresse MAC. Il est possible que votre FAI "+
"enregistre l'adresse MAC de l'adaptateur de votre ordinateur et n'autorise que cet ordinateur "+ 
"à se brancher à Internet. Lorsque vous installez le routeur, son adresse MAC sera lue "+ 
"par votre FAI et ceci peut empêcher le bon fonctionnement de votre connexion. Belkin vous permet "+ 
"de cloner (copier) l'adresse MAC de l'ordinateur dans le routeur. Cette adresse MAC "+ 
"à son tour, sera vue par le système du FAI comme l'adresse MAC d'origine et autorisera "+ 
"la connexion. Si vous ne savez pas si votre FAI a besoin de voir l'adresse MAC d'origine, "+ 
"clonez simplement l'adresse MAC de l'ordinateur qui était relié "+ 
"au modem au départ. Le clonage de l'adresse n'entraînera aucun problème à votre réseau. <br> "+
"Pour cloner l'adresse MAC, assurez-vous d'utiliser l'ordinateur qui était CONNECTÉ À L'ORIGINE "+
"u modem avant que le routeur ne soit installé. Cliquez sur le bouton « Cloner l'adresse  "+ 
"MAC ». Cliquez sur « Enregistrer les Modifications ». Votre adresse MAC est maintenant clonée dans le routeur. ";
g20="Pour modifier le canal d'opération du routeur, sélectionnez le canal désiré à partir de la liste déroulante et sélectionnez votre canal. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. Vous "+
 "pouvez également modifier le SSID. Le SSID est l'équivalent du nom du réseau sans fil. Vous pouvez lui donner n'importe quel nom. S'il existe d'autres réseaux sans fil dans votre "+
 "environnement immédiat, vous devez donner un nom unique au vôtre. La valeur par défaut est Belkin_Pre-N_xxxxxx. Pour "+ 
"le modifier, cliquez à l'intérieur de la case SSID et entrez le nouveau nom. Cliquez sur « Enregistrer les modifications ».";
g21="Il est possible de rendre presque invisible votre réseau sans fil. En désactivant l'émission du SSID, "+ 
"votre réseau n'apparaîtra pas lors de l'analyse du site. L'analyse de site est une fonction "+
"que possèdent la majorité des adaptateurs réseau sans fil disponibles sur le marché. Elle balaye « l'air ambiant » à la recherche"+
"de réseaux et permet à l'ordinateur de choisir parmi eux. Le fait de désactiver "+
"la fonction d'émission du SSID renforce la sécurité du réseau.";
g22="Lorsque vous utilisez le routeur comme point d'accès, vous devez indiquer l'adresse IP du point"+
 "d'accès. Cette adresse IP doit figurer dans la même plage que le réseau auquel"+
 "vous allez vous connecter. Pour accéder à nouveau à l'interface d'installation évoluée du routeur, entrez"+
 "l'adresse IP dans le navigateur Web et connectez-vous.";
g23="Utilisation de la fonction de commutation entre les modes sans fil";
g24="Ce commutateur vous permet de configurer les modes sans fil du routeur. Il existe trois modes : <br> "+
"1) 802.11g only<br>"+
"Ce paramètre vous permet de relier des dispositifs Pre-N et 802.11g à votre réseau, en laissant de côté les périphériques 802.11b.<br> "+
"2) 802.11g & 802.11b<br>"+
"Ce paramètre vous permet de relier des dispositifs Pre-N, 802.11g et 802.11b à votre réseau. <br> "+
"3) Off<br>"+
"Ce paramètre vous permet d'éteindre le point d'accès du routeur, pour ainsi empêcher tout dispositif réseau de rejoindre votre réseau. Ceci vous permet de sécuriser votre réseau en votre absence, par exemple, ou lorsque vous désirez ne pas utiliser la fonction sans fil de votre Réseau à un moment donné.";
g25="Serveurs virtuels";
g26="Cette fonction vous permet de relayer les appels de service externes (Interner) tel "+ 
"un serveur Web (port 80), un serveur FTP (port 21) ou d'autres applications, via le routeur "+ 
"et vers votre réseau interne. Étant donné que vos ordinateurs internes sont protégés par le pare-feu, "+
"les machines provenant d'Internet ne peuvent pas accéder à ceux-ci puisqu'ils sont « invisibles ». Si vous devez "+ 
"configurer la fonction de Serveur virtuel pour une application particulière, une liste d'applications "+
"courantes vous est fournie. Si votre application ne s'y trouve pas, vous devez communiquer avec "+ 
"le fabricant de l'application et déterminer quels paramètres de ports sont requis. Pour effectuer une sélection dans la liste fournie, "+
"choisissez votre application à partir de la liste déroulante. Sélectionnez la ligne dont vous voulez copier"+
"les paramètres dans la liste déroulante « vers la ligne », puis cliquez « Entrée ». Les paramètres"+
"seront transférés vers la ligne spécifiée. Cliquez sur « Enregistrer les modifications » pour "+
"enregistrer les paramètres de cette application. Pour entrer les paramètres manuellement, entrez l'adresse IP dans l'espace prévu pour la machine "+
"(serveur) interne, les ports publics et LAN nécessaires pour la passerelle (séparer à l'aide d'une virgule), "+
"sélectionnez le type de port (TCP ou UDP) puis cliquez sur « Enregistrer les modifications ». Vous pouvez uniquement faire passer un "+
"seul port par adresse IP interne. L'ouverture des ports de votre pare-feu risque de compromettre la sécurité de votre réseau. Vous "+
"pouvez rapidement activer ou désactiver cette fonction. Il est recommandé de désactiver cette fonction "+
"lorsque vous n'utilisez pas d'application spécifique. ";
g27="Filtres d'IP des clients";
g28="Le routeur peut être configuré de sorte à limiter l'accès de certains ordinateurs à Internet, "+ 
"au courrier électronique et autres fonctions réseaux, à des jours et des heures donnés. La restriction peut s'appliquer à un seul ordinateur, "+
"à un groupe d'ordinateurs ou à plusieurs ordinateurs. Par exemple, pour limiter l'accès à Internet à un ordinateur particulier, "+
"entrez l'adresse IP de l'ordinateur dont vous désirez contrôler l'accès dans "+ 
"les champs IP. Ensuite, entrez 80 et 80 dans les champs de ports. Sélectionnez TCP. Sélectionnez Bloquer. "+
"Vous pouvez aussi sélectionner Toujours pour bloquer l'accès en tout temps. Sélectionnez le jour du début en "+
"haut, l'heure du début en haut, le jour de fin en bas et l'heure de fin "+
"en bas. Cliquez sur « Enregistrer les Modifications ». L'ordinateur à l'adresse IP que vous avez spécifiée ne pourra "+
"dorénavant plus accéder à l'Internet aux heures spécifiées. Remarque : Assurez-vous d'avoir sélectionné "+
"le fuseau horaire approprié sous Utilitaires > Paramètres du Système > Fuseau Horaire. ";
g29="Filtrage d'adresses MAC";
g30="Le Filtre d'adresses MAC représente une puissante caractéristique de sécurité, vous permettant "+
"et qui tente d'accéder au réseau se verra refuser l'accès. Lorsque vous activez cette fonction, "+
"d'autoriser, à des ordinateurs spécifiques, l'accès à votre réseau. Tout ordinateur non spécifié dans les paramètres du filtre "+
"vous devez entrer l'adresse MAC de chaque client de votre réseau, pour permettre à chacun "+
"d'accéder au réseau. La fonction « Bloquer » vous permet d'activer et de désactiver facilement l'accès au réseau pour tout "+
"ordinateur sans devoir ajouter l'adresse MAC de l'ordinateur à la liste ni la supprimer. Pour "+ 
"activer cette fonction, sélectionnez « Activer le Filtrage des adresses MAC ». Ensuite, entrez l'adresse MAC "+
"de tous les ordinateurs du réseau. Pour cela, cliquez sur le champ fourni puis entrez l'adresse MAC "+
"de l'ordinateur à ajouter à la liste. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. Pour supprimer une adresse MAC "+
"de la liste, cliquez simplement sur « Supprimer » près de l'adresse MAC à supprimer. Cliquez sur « Enregistrer "+
"les modifications » pour enregistrer les paramètres. <br><br>"+
"Remarque : vous ne pourrez pas supprimer l'adresse MAC de l'ordinateur que vous utilisez pour accéder "+ 
"aux fonctions d'administration du routeur (celui que vous utilisez en ce moment). ";
g31="La fonctionnalité DMZ vous permet d'indiquer un ordinateur du réseau qui sera placé "+
"hors du pare-feu NAT. Cette opération peut s'avérer nécessaire si la traduction d'adresse réseau (NAT) "+
"empêche le bon fonctionnement d'applications telles que les jeux ou les vidéoconférences. "+
"Servez-vous de cette fonction au besoin. "+
'<font class="redBold">'+
"L'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers.</font> "+ 
"Pour placer un ordinateur dans la DMZ, entrez les derniers chiffres de son adresse IP dans le "+ 
"champ « IP », puis cliquez sur « Activer ». Cliquez sur « Enregistrer les modifications » pour que le changement soit pris en compte. "+ 
"Si vous utilisez plusieurs adresses IP WAN fixes, il est possible de choisir celle "+
"vers laquelle l'hôte DMZ sera dirigé. Entrez l'adresse IP WAN vers laquelle vous "+
"désirez diriger l'hôte DMZ, entrez les deux derniers chiffres de l'adresse IP de "+
"l'ordinateur hôte de la zone DMZ, sélectionnez « Activez » puis cliquez sur « Enregistrer les modifications ». ";
g32="Blocage du Ping ICMP";
g33="Les pirates informatiques utilisent une technique appelée « Pinging » pour dénicher sur "+
"Internet. En émettant un ping sur une certaine adresse IP et en recevant une réponse de celle-ci, "+
"un pirate peut savoir qu'il a un poste à pirater. La "+ 
"pouvez configurer le routeur de sorte qu'il ignore un ping ICMP venant de l'extérieur. Ceci "+ 
"rehausse le niveau de sécurité de votre routeur. Pour désactiver la réponse au ping, sélectionnez "+ 
"« Blocage du ping ICMP » et cliquez sur « Enregistrer les modifications ». Le routeur ignorera un ping ICMP. "; 
g34="Mot de passe Administrateur";
g35="Le routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, "+
"vous pouvez le configurer ici. Conservez votre mot de passe dans un endroit sûr puisque "+
"vous en aurez besoin lorsque vous voudrez vous connecter au routeur par la suite. Nous "+
"recommandons aussi l'ajout d'un mot de passe si vous prévoyez utiliser la fonction de gestion à distance "+
"du routeur. <br><br>"+
"L'option de temporisation de la connexion vous permet de déterminer la plage horaire pendant laquelle vous pouvez être connecté "+ 
"au niveau de l'interface de configuration avancée du routeur. La temporisation débute lorsqu'il n'y a plus "+
"d'activité. Par exemple, vous avez apporté des modifications au niveau de l'interface de configuration évoluée, "+
"puis vous avez quitté l'ordinateur sans cliquer sur « Déconnexion ». En supposant que vous ayez paramétré "+
"la temporisation à 10 minutes, votre connexion prendra fin 10 minutes après votre départ. Vous "+
"devrez de nouveau vous connecter au routeur pour procéder à d'autres modifications. L'option de temporisation de la connexion "+
"sert à des fins de sécurité. La valeur par défaut est 10 minutes. Prenez note qu'un seul "+
"ordinateur à la fois peut être connecté à l'interface de configuration avancée du routeur. ";
g36="Heure et Fuseau Horaire";
g37="Le routeur harmonise le temps en se connectant à un serveur SNTP (Simple Network Time Protocol). "+  
"Ceci lui permet de synchroniser l'horloge du système avec l'Internet planétaire. L'"+ 
"horloge ainsi synchronisée est utilisée par le routeur pour garder un journal de connexions et pour contrôler le "+  
"filtrage des clients. Sélectionnez le fuseau horaire du pays dans lequel vous résidez. Si vous résidez dans une région qui "+ 
"applique l'horaire d'été, cochez la case en regard de l'option « Appliquer les "+ 
"horaires d'été ». L'horloge du système peut ne pas être mise à jour immédiatement. Laissez au moins 15 minutes au routeur "+ 
"pour contacter les serveurs sur Internet et recevoir une réponse. Vous ne pouvez "+ 
"pas modifier l'horloge vous-même. "; 
g38="Gestion à distance";
g39="Avant d'activer cette fonction,"+  
"<font class='plaintext_bold'>ASSUREZ-VOUS D'AVOIR AJOUTÉ UN MOT DE PASSE ADMINISTRATEUR. </font>"+ 
"La gestion à distance vous permet d'apporter des changements aux paramètres du routeur où que vous soyez "+ 
"sur Internet. Il existe deux méthodes pour gérer votre routeur à distance. La première "+ 
"méthode consiste à permettre l'accès au routeur à partir de l'Internet en sélectionnant "+ 
"« N'importe quelle adresse IP peut gérer le routeur à distance ». Lorsque vous aurez entré votre adresse IP WAN "+ 
"depuis un ordinateur sur Internet, un écran de connexion apparaîtra. "+ 
"Vous devrez y entrer le mot de passe du routeur. La deuxième méthode consiste à "+ 
"permettre à une adresse IP spécifique de gérer le routeur à distance. Cette méthode est la plus sécuritaire, mais "+  
"la moins pratique. Pour y avoir recours, entrez l'adresse IP autorisée à accéder au routeur "+ 
"dans le champ fourni à cet effet, puis sélectionnez « Seule cette adresse IP est autorisée "+ 
"à gérer le routeur à distance ». Avant d'activer cette fonction, nous vous CONSEILLONS VIVEMENT "+ 
"de définir un mot de passe d'administrateur. Si vous laissez le mot de passe vide, vous autorisez potentiellement "+ 
"des intrusions sur le routeur. ";
g40="Activer le NAT";
g41="Avant d'activer cette fonction, "+  
"<font class='plaintext_bold'>ASSUREZ-VOUS D'AVOIR AJOUTÉ UN MOT DE PASSE ADMINISTRATEUR. </font>"+ 
"La traduction d'adresses réseau (Network Address Translation, NAT) est la méthode qui permet au routeur "+ 
"de partager une seule adresse IP attribuée par le FAI avec les autres ordinateurs du réseau. Cette fonction ne devrait être utilisée "+ 
"que par des utilisateurs avancés. Cette fonction ne devrait être utilisée que si votre FAI vous attribué "+ 
"de multiples adresses IP, ou vous devrez désactiver la NAT pour accéder aux configurations avancées du système. "+  
"Si vous disposez d'une seule adresse IP et si vous désactivez le NAT, les ordinateurs de votre réseau ne pourront "+ 
"pas accéder à Internet. D'autres problèmes peuvent aussi survenir. La désactivation NAT "+ 
"désactive les fonctions de votre pare-feu. "; 
g42="L'UPnP (Universal Plug-and-Play) est une technologie qui offre un fonctionnement transparent de la messagerie "+
"vocale et vidéo, des jeux, et d'autres applications compatibles avec l'UPnP. Certaines "+
"applications nécessitent que le pare-feu du routeur soit configuré selon certains paramètres pour fonctionner "+
"correctement. Pour ce faire, vous devez habituellement ouvrir des ports TCP et UDP, et parfois même configurer des "+
"ports de déclenchement. Une application qui est compatible avec l'UPnP possède la capacité de communiquer avec "+
"le routeur, lui indiquant la manière dont le pare-feu doit être configuré. "+
"Le routeur est livré avec la fonction UPnP désactivée. Si vous utilisez une application qui est "+ 
"compatible avec l'UPnP, et si vous désirez bénéficier des avantages de l'UPnP, vous pouvez "+ 
"activer la fonction UPnP. Sélectionnez simplement l'option « Activer » dans la section « Activation de l'UPnP » dans la page Utilitaires. "+ 
"Cliquez sur « Appliquer les modifications » pour enregistrer les modifications. ";
g43="Notification automatique de mise à jour du micrologiciel";
g44="Le routeur possède la capacité intrinsèque de vérifier automatiquement s'il existe une nouvelle version du "+ 
"micrologiciel et de vous avertir lorsqu'elle est disponible. Lorsque vous vous connectez à "+ 
"l'interface avancée du routeur, le routeur procédera à la recherche d'une nouvelle version du micrologiciel, "+ 
"si celle-ci est disponible. Vous serez averti lorsqu'une une nouvelle version du micrologiciel est disponible. Vous pouvez choisir de "+ 
"télécharger cette nouvelle version ou de l'ignorer. Le routeur est livré avec cette fonction désactivée. "+  
"Si vous voulez l'activer, sélectionnez « Activer » et cliquez sur « Enregistrer les Modifications ». ";
g45="Sécurité sans fil";
g46="Le chiffrement peut vous aider à sécuriser votre réseau sans fil. Il n'est possible de sélectionner qu'un seul mode de sécurité "+ 
"à la fois. L'utilisateur doit donc sélectionner le mode qui est "+ 
"pris en charge par tous les dispositifs du réseau sans fil. Ce produit de Belkin présente 5 "+ 
"possibilités de réglage de la sécurité :<br><br>"+
"1) Désactivé. Aucun chiffrement n'est activé dans ce mode. Les réseaux ouverts, où tous les utilisateurs sont "+ 
"	      les bienvenus, ne sont pas chiffrés.<br><br> "+ 
"2) WPA PSK - Home (sans serveur). Le WPA (Wireless Protected Access) PSK est une technologie de sécurité récente "+ 
"             basée sur des normes où chaque paquet de données est "+ 
"             chiffré au moyen d'un code ou d'une clé différente. Puisque la clé change constamment, "+  
"             le WPA est très sûr. Il existe deux catégories de WPA, soit le WPA-PSK (Pre-Shared Key) et le "+ 
"             WPA-Radius Server. La différence est évidente : l'une nécessite un serveur "+  
"             et l'autre non. le WPA-PSK convient pour les utilisateurs à domicile ou pour les petites entreprises, qui ne possèdent pas "+  
"             de serveur. La clé de chiffrement du PSK est automatiquement générée à partir d'une "+  
"             chaîne de caractères ou une expression mot de passe. Le plus grand risque encouru au niveau de la sécurité pour le WPA-PSK est "+  
"             qu'un autre utilisateur découvre la phrase de passe.<br><br> "+ 
" a. TKIP versus AES. Pour configurer le WPA, l'utilisateur doit choisir entre "+  
" le chiffrement TKIP ou l'AES.. La norme WPA définit le TKIP comme le chiffrement par défaut. De plus, "+ 
" le TKIP assure une meilleure compatibilité entre les appareils sans fil de différents fabricants, "+  
" puisque la majorité d'entre eux ne seront jamais mis à jour vers l'AES. L'AES est une nouvelle "+  
" technique de chiffrement basée sur la norme 802.11i qui n'est pas encore ratifiée. Il est généralement considéré que les nouveaux standards de WPA "+  
" utilisent l'AES. Bien qu'elle ne soit pas populaire, certains utilisateurs peuvent "+  
" préférer utiliser cette technique de chiffrement. D'une façon ou d'une autre, tous les périphériques réseau doivent utiliser la même "+  
" technique.<br><br> "+
" b. Clé pré-partagée. Entrez un mot ou une expression comportant jusqu'à 40 caractères. La même clé doit "+  
" aussi être utilisée pour tous les autres périphériques réseau faisant partie de ce réseau. Portez attention "+  
" à la casse (« n » est différent de « N »). Souvenez-vous que la meilleure "+  
"façon pour quelqu'un pour pénétrer votre réseau, c'est de deviner votre clé.<br><br> "+ 
"3) WEP sur 128 bits. Jusqu'à tout récemment, le WEP (Wired Equivalent Privacy) à 128 bits était la norme "+  
"                de chiffrement sans fil. Si vos périphériques ne prennent pas tous en charge le WPA, le WEP sur 128 bits "+  
"                représente une excellente option de sécurité. Vous devrez entrer des nombres "+  
"                hexadécimaux, mais il est aussi possible de les générer automatiquement.<br><br> "+ 
"4) WEP sur 64 bits. Belkin ne recommande le mode sur 64 bits que pour les réseaux où certains périphériques ne prennent en charge "+  
"               ni le WPA ni le WEP sur 128 bits.<br><br> "+
"5) WPA - Serveur Radius. (Ce mode est accessible à partir du bouton Avancé). Le serveur WPA"+
"ne convient qu'aux réseaux utilisant un serveur Radius. Tous les paramètres de ce mode "+
"s'obtiennent auprès de l'administrateur de votre serveur Radius. À l'opposé du WPA-PSK,"+
"le serveur WPA transmet la clé à partir du serveur vers les clients, au lieu de la générer automatiquement."; 
g57="Utilisation du DNS Dynamique";
g58="Le service DNS Dynamique vous permet d'attribuer une adresse IP dynamique à un nom d'hôte fixe parmi ceux offerts par DynDNS.org, ce qui vous permet d'accéder à vos ordinateurs à partir de maints endroits sur Internet. DynDNS.org offre ce service à la communauté des Internautes, gratuitement, pour jusqu'à cinq noms d'hôte.<br>"+
"Le service DNS Dynamique est idéal pour les sites web maison, les serveurs de fichiers, ou pour vous faciliter l'accès à votre PC ou aux fichiers stockés sur votre PC lorsque vous êtes au travail. Le service garantit que votre nom d'hôte pointe toujours vers votre adresse IP, peut importe si votre FAI modifie celle-ci. Lorsque votre adresse IP change, vos amis et associés peuvent toujours vous retrouver en visitant votrenom.dyndns.org !<br>"+
"<br>Inscrivez-vous gratuitement et obtenez votre nom d'hôte DNS Dynamique à http://www.dyndns.org.<br>"+
"<br><b>Configuration du client DNS Dynamique du routeur</b><br>"+
"<br>Inscrivez-vous gratuitement et obtenez votre nom d'hôte DNS Dynamique à http://www.dyndns.org.<br>"+
"<br><b>Configuration du client DNS Dynamique du routeur</b><br>"+
"Vous devez vous inscrire au service gratuit de mise à jour de DynDNS.org avant d'utiliser cette fonction. Après vous être inscrit, veuillez suivre les étapes ci-dessous.<br>"+
"1.Entrez votre nom d'utilisateur DynDNS.org dans le champ « User Name [Nom d'utilisateur] » (1).<br>"+
"2.Entrez votre mot de passe DynDNS.org dans le champ « Password [Mot de passe] » (2).<br>"+
"3.Entrez votre nom d'utilisateur DynDNS.org dans le champ « User Name [Nom d'utilisateur] » (3).<br>"+
"4.Cliquez sur « Update Dynamic DNS [Mise à jour DNS Dynamique] » pour mettre à jour votre adresse IP.<br>"+
"Lorsque votre FAI modifie l'adresse IP qui vous est attribuée, le routeur s'occupe de la mise à jour des serveurs DynDNS.org, avec votre nouvelle adresse IP. Vous pouvez également le faire manuellement, en cliquant sur le bouton « Update Dynamic DNS [Mise à jour DNS Dynamique] » (4).<br>";
fw1='Mise à jour du micrologiciel en cours.';
fw2='N\'INTERROMPEZ PAS LE PROCESSUS ET NE DÉBRANCHEZ PAS LE ROUTEUR. Ceci pourrait rendre votre Routeur inutilisable.'; 
apply_text_1='Enregistrement des modifications. Veuillez patienter.......';
warn_msg1='Le SSID ne peut être NUL!';
warn_msg2='Le Routeur sans fil redémarre. Si vous faites cette modification à partir d\'un ordinateurs sans fil, celui-ci peut être déconnecté du Routeur pendant un court laps de temps.';


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
