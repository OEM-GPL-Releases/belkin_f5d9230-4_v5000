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
show1='Inicio';
show2='Ayuda';
show3='Acceder';
show4='Salir';
show5='Estado de Internet';
show6='Conexi�n';
show7='Sin conexi�n';
show8='Configuraci�n de LAN';
show9='Configuraci�n LAN';
show10='Lista de clientes DHCP';
show11='Internet WAN';
show12='Tipo de conexi�n';
show13='DNS';
show14='Direcci�n MAC';
show15='WLAN no disponible';
show16='Inal�mbrico';
show17='Canal y SSID';
show18= 'Seguridad';
show19=  'Utilizar como Punto de acceso';
show20=  'Especificar direcci�n IP';
show21=  'Control de direcciones MAC';
show22=   'Puente inal�mbrico';
show23=   'Firewall';
show24=   'Servidores virtuales';
show25=   'Filtros para IP de clientes';
show26=   'Filtrado de direcciones MAC';
show27=   'DMZ';
show28=   'Bloquear ping a WAN';
show29=   'Registro de seguridad';
show30=   'Utilidades';
show31=   'Control parental';
show32=   'Reiniciar el router';
show33=   'Reiniciar PA'
show34=  'Restaurar configuraci�n predeterminada de f�brica';
show35=  'Guardar copia de seguridad';
show36=  'Restaurar parametros anteriores';
show37=  'Actualizaci�n del firmware';
show38=  'Parametros del sistema';
show39='Servicio de impresora';
show40='Configuraci�n del servidor de impresi�n';
show41=   'DDNS';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='M�s informaci�n ';
btn1='Borrar cambios ';
btn2=' Aplicar cambios ';
btn3='Actualizar DNS din�mico';
Router='Router';
AP='AP';
Dynamic=' Din�mica ';
cff1='Comprobaci�n de firmware con �xito';
cff2='Informaci�n sobre el firmware.'; 
cff3='No existe ninguna actualizaci�n nueva de firmware disponible para este Router';
cff4='Imposible conectar con el servidor de informaci�n del firmware, <br>vuelva a comprobar la conexi�n WAN.';
cff5='Existe una versi�n disponible para su Router';
d1='Belkin | Duplicar Administrador';
d2='Duplicar Administrador';
d3='Este dispositivo es gestionado por';
d4='��actualmente!!';
fc1='Firewall > filtros para IP de clientes ';
fc2a='El Router puede ser configurado para restringir el acceso a Internet, al correo electr�nico o a otros servicios de red'; fc2b=' en determinados d�as y horas.'; 
IP='IP';
Port='Port';
Type='Tipo';
BT='Tiempo de bloqueo';
Day='D�a';
Tm='Hora';
Enable='Activar';
BOTH='AMBOS';
Always='Siempre';
Block='Bloqueo';
SUN='>DOM';
MON='>LUN';
TUE='>MAR';
WED='>MI�R';
THU='>JUE';
FRI='>VIE';
SAT='>S�B';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Bien no ha introducido la direcci�n IP del cliente o bien alguno de los n�meros de la direcci�n IP que ha introducido no son v�lidos.  El n�mero en el recuadro de introducci�n de IP deber� encontrarse entre 1 y 254.';
fcsm='Los n�meros de puerto que ha introducido no son v�lidos.';
fcrm='El �ltimo en la serie de puertos deber� ser mayor que el primero.';
fcripm='El �ltimo en la serie de ip deber� ser mayor que el primero.';
fcpm='El n�mero en el recuadro de introducci�n del puerto deber� encontrarse entre 1 y 65535.';
fd1='Firewall > DMZ '; 
fd2='La funci�n DMZ le permite especificar un ordenador de su red para ser colocado fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT est� causando problemas con una aplicaci�n como, por ejemplo, una aplicaci�n de juegos o de videoconferencia. Utilice esta caracter�stica de forma temporal.'; 
fd3='El ordenador que se encuentra en la DMZ no est� protegido contra los ataques de piratas inform�ticos.'; 
fd4='Para situar un ordenador en la DMZ, introduzca los d�gitos finales de su direcci�n IP en el campo inferior y seleccione "Activar". Haga clic en "Enviar" para que los cambios tengan efecto.'; 
fd5='Direcci�n IP del host virtual de DMZ '; 
fd6='IP Est�tica ';  
fd7='IP privado ';  
fd8='Activar '; 
fd9='Firewall > DDNS'; 
fd10='El DNS din�mico le permite proporcionar a los usuarios de Internet un nombre de dominio fijo (en lugar de una direcci�n IP, que puede cambiar peri�dicamente), permitiendo el acceso a su router y las aplicaciones configuradas en los servidores virtuales de su router, desde diversas ubicaciones de Internet sin necesidad de conocer su direcci�n IP actual. Su Router inal�mbrico es compatible con el DNS din�mico a trav�s de DynDNS.org ';
fd11='Debe crear una cuenta de usuario antes de utilizar este servicio.&nbsp;';
fd12='Nombre de usuario > '; 
fd13='Contrase�a > '; 
fd14='Nombre de dominio > '; 
fd15='Por favor, introduzca la direcci�n IP antes de activar DMZ'; 
fd16='Auto-update'; 
fmc1='Firewall > Filtrado de direcciones MAC';
fmc2='Esta funci�n le permite establecer una lista de clientes permitidos. Cuando active esta funci�n, deber� introducir la direcci�n MAC de cada cliente de su red para permitir el acceso a la misma de cada uno de ellos. Por fovor, introduzca un nombre de usuario para identificar qu� ordenador se incluye en la lista. El nombre de usuario no debe incluir espacios ni caracteres especiales.';    
fmc3='Activar filtrado de direcciones MAC';   
fmc4='Lista para el filtrado de direcciones MAC';
fmc5='Bloqueo';  
fmc6='Host';  
fmc7='Direcci�n MAC';  
fmc9='No puede introducir una MAC de multidifusi�n';
fmc12='�Esta MAC ya ha sido a�adida!';
Add='A�adir'; 
Del='Borrar';
fmcipm=' Bien no ha introducido todos los d�gitos hexadecimales o bien algunos de los d�gitos hexadecimales introducidos es incorrecto. Un d�gito hexadecimal puede ser un n�mero entre 0 y 9 o una letra de la A a la F.';
fmn1='Firewall >';
fmn2='Su router se encuentra equipado con un firewall que protege su red de una amplia gama de ataques habituales de piratas inform�ticos, incluidos los ataques Ping of Death (PoD) y Denial of Service (DoS). En caso necesario, puede desactivar la funci�n de firewall. Si desactiva la protecci�n por firewall, no dejar� su red completamente vulnerable a los ataques de los piratas, pero es recomendable dejar activado el firewall siempre que sea posible.'; 
fmn3=' Activar / Desactivar el firewall >';
Disable='Desactivar';
fp1='Firewall > Bloquear Ping a WAN';
fp2='<b>�FUNCI�N AVANZADA!</b> Es posible configurar el router para que no responda a un ping ICMP (un ping al puerto WAN). Esta caracter�stica ofrece un mayor nivel de seguridad.'; 
fp3='Bloquear ping ICMP >';  
fs1='Firewall > Registro de seguridad';
fs2='El router conserva un registro de toda actividad que tiene lugar en el mismo como, por ejemplo, las entradas y salidas y todos los intentos de acceder al router desde Internet. El registro puede ser visualizado en la parte inferior.'; 
fs3='Archivo de registro';
Save='Guardar';
Clear='Borrar';
Refresh='Actualizar';  
fv1='Firewall > Servidores virtuales';
fvipm='Bien no ha introducido todas las direcciones ip, \n o bien algunos de los n�meros introducidos es incorrecto. \n El n�mero en el recuadro de entrada de la direcci�n IP deber� ser un n�mero entre 1 y 254.';
fvrm='El n�mero de puerto p�blico no podr� ser 88, porque entrar�a en conflicto con el servicio web del Router inal�mbrico.';
fvipr='La gama de puertos de entrada no es correcta.'
fvppr='La serie de puertos privados no es correcta.';
fv2='Esta funci�n le permitir� dirigir llamadas (Internet) externas para servicios como un servidor web.(puerto 80), servidor FTP (puerto 21), u otras aplicaciones mediante su router a su red interna.'; 
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
fv200='Borrar entrada';
Description='Descripci�n';;
Inb='Puerto de entrada';  
Type='Tipo';  
Pipa='Direcci�n IP privada';  
Pport='Puerto Privado';  
htop='arriba'; 
h1='Ayuda';
h2='GLOSARIO DE T�RMINOS';  
h3='<b>Administrador</b> Un Administrador realiza el servicio de mantener una red. En el caso de este Router, la persona que lo configura y efect�a los cambios en los parametros.';
h4='<b>Cliente</b> Un ordenador de la red que emplea los servicios del Router como, por ejemplo, el servidor DHCP autom�tico y el firewall.'; 
h5='<b>DHCP</b> Protocolo de configuraci�n de host din�mico. Este protocolo configura autom�ticamente los parametros TCP/IP de todos los ordenadores de la red de su hogar.';  
h6='<b>Dial-Up</b> Una conexi�n que emplea la red telef�nica p�blica.'; 
h7='<b>DMZ</b> Una zona virtual en el Router que no se encuentra protegida por el firewall del Router.  Es posible situar un ordenador en la DMZ.';   
h8='<b>Direcci�n de servidor DNS</b> DNS significa "Domain Name System" (Sistema de nombres de dominio) y permite a los ordenadores host de Internet disponer de un nombre de dominio (como belkin.com) y una o m�s direcciones IP (como 192.34.45.8). Un servidor DNS conserva una base de datos de los ordenadores host y de sus respectivos nombres de dominio y direcciones IP, de forma que cuando se requiere un nombre de dominio (como, por ejemplo, al introducir "belkin.com" en su navegador de Internet), el usuario es enviado a la direcci�n IP correcta. La direcci�n del servidor DNS utilizada por los ordenadores de la red de su hogar es la ubicaci�n del servidor DNS que ha asignado su ISP.';  
h9='<b>M�dem DSL</b> DSL significa L�nea de abonados digitales. Un m�dem DSL emplea sus l�neas de tel�fono existentes para transmitir los datos a altas velocidades.';  
h10='<b>IP din�mica</b> Una direcci�n IP que se obtiene de forma autom�tica de un servidor DHCP.';  
h11='<b>Ethernet</b> Un est�ndar para redes de ordenadores. Las redes Ethernet se conectan mediante hubs y cables especiales, y transfieren datos a hasta 10 millones de bits por segundo (Mbps).';  
h12='<b>Firewall</b> Una frontera electr�nica que evita el acceso de usuarios no autorizados a determinados archivos u ordenadores de una red.';  
h13='<b>Firmware</b> El software almacenado en la memoria. Los programas esenciales que permanecen incluso cuando se apaga el sistema. El firmware es m�s f�cil de modificar que el hardware pero es m�s permanente que el software almacenado en un disco.';  
h14='<b>Direcci�n IP</b> IP significa Protocolo de Internet. Una direcci�n IP se compone de una serie de n�meros separados por periodos que identifica a un �nico y exclusivo host de Internet. Ejemplo: 192.34.45.8.';  
h15='<b>ISDN</b> Red digital de servicios integrados. Son las l�neas digitales de telecomunicaci�n que pueden transmitir tanto voz como servicios de red digital hasta 128 K, mucho m�s r�pidas y m�s robustas que los m�dems anal�gicos de alta velocidad. Las l�neas ISDN son ofrecidas por numerosas compa��as de tel�fono.';  
h16='<b>ISP</b> Proveedor de servicios de Internet. Un ISP es una empresa que proporciona conectividad a Internet para personas individuales o para empresas u organizaciones.';  
h17='<b>Direcci�n de pasarela ISP</b> (v�ase la definici�n de ISP). La direcci�n de Gateway (pasarela) del ISP es una direcci�n IP para el router de Internet situado en la oficina del ISP. Esta direcci�n es requerida �nicamente cuando se emplea un m�dem por cable o DSL.';  
h18='<b>LAN</b> Red de �rea local. Una LAN es un grupo de ordenadores y dispositivos conectados juntos en una zona relativamente reducida (como una casa o una oficina). La red de su hogar es considerada como una LAN.';  
h19='<b>Direcci�n MAC</b> MAC significa Control de acceso a los medios. Una direcci�n MAC es la direcci�n de hardware de un dispositivo conectado a una red.';  
h20='<b>MTU</b> Unidad de transmisi�n m�xima. La mayor unidad de datos que puede ser transmitida por un medio f�sico individual.';  
h21='<b>NAT</b> Traducci�n de direcciones de red. Este proceso permite que todos los ordenadores en la red de su casa utilicen una sola direcci�n IP. Utilizando la propiedad NAT de la gateway (pasarela) para red de hogar HomeConnect, podr� acceder a Internet desde cualquier ordenador de la red de su hogar sin necesidad de adquirir m�s direcciones IP de su ISP.';  
h22='<b>Puerto</b> n canal l�gico que es identificado por su n�mero de puerto exclusivo. Las aplicaciones escuchan los diferentes puertos para ver si existe en ellos informaci�n que pueda estar relacionada con ellas.';  
h23='<b>PPPoE</b> Protocolo punto a punto a trav�s de Ethernet. El Protocolo punto a punto a trav�s de Ethernet es un m�todo para la transmisi�n segura de datos creado originalmente para conexiones telef�nicas; el PPPoE es para conexiones de Ethernet.';  
h24='<b>PPTP</b> Protocolo de t�nel punto a punto. Una versi�n del PPP (Protocolo punto a punto) que tiene la capacidad de encapsular paquetes de datos formateados para un protocolo de red en paquetes utilizados por otro protocolo. Esta t�cnica de t�neles permite que los datos TCP/IP sean transmitidos sobre una red que no es TCP/IP. El PPTP puede ser empleado para unir diferentes redes f�sicas utilizando Internet como intermediario.';  
h25='<b>SNTP</b> Protocolo horario de red simple. Un est�ndar de comunicaci�n que permite la transmisi�n de informaci�n en tiempo real por una red o por Internet.';  
h26='<b>SPI</b> Inspecci�n de paquetes de datos. SPI es el tipo de seguridad de Internet de nivel corporativo proporcionada por su pasarela de red dom�stica HomeConnect. Utilizando la SPI, la gateway (pasarela) act�a a modo de "firewall", protegiendo su red de los piratas inform�ticos.';  
h27='<b>IP est�tica</b> Una direcci�n IP que es configurada manualmente y nunca cambia.';  
h28='<b>M�scara de subred</b> Una m�scara de subred, que puede formar parte de la informaci�n de TCP/IP suministrada por su ISP, es un conjunto de cuatro n�meros configurado como direcci�n IP. Se emplea para crear n�meros de direcciones IP empleados exclusivamente dentro de una red particular (al contrario de los n�meros de direcciones IP v�lidas reconocidos por Internet, que deben ser asignados por InterNIC).';  
h29='<b>TCP</b> Protocolo de control de transmisiones. Es el protocolo de nivel de transporte de Internet m�s com�n. El TCP est� orientado a la conexi�n y al flujo de informaci�n y proporciona una comunicaci�n fiable a trav�s de redes de conmutaci�n de paquetes.';  
h30='<b>TCP/IP</b> Protocolo de control de transmisiones a trav�s de protocolo de Internet. Este es el protocolo est�ndar para la transmisi�n de datos a trav�s de Internet.';  
h31='<b>UDP</b> Protocolo de los datagramas del usuario. Protocolo de comunicaciones del nivel de red de Internet, nivel de transporte y nivel de sesi�n, que hace posible enviar un mensaje datagrama desde un ordenador hasta una aplicaci�n que se est� ejecutando en otro ordenador. A diferencia del TCP, el UDP carece de conexi�n y no garantiza una comunicaci�n fiable; la propia aplicaci�n debe procesar todo tipo de errores y controlar que el env�o sea fiable. '; 
h32='<b>WAN</b> Red de �rea amplia. Una red que conecta ordenadores situados en �reas geogr�ficas separadas, (es decir, diferentes edificios, ciudades, pa�ses). Internet es una red de �rea amplia.';  
h33='<b>Direcci�n IP de WAN</b> La direcci�n IP asignada al router por el ISP.';  
h34='<b>WLAN</b> Red inal�mbrica de �rea local. Una red de �rea local que conecta ordenadores cercanos a trav�s de radioemisi�n (como 802.11b)';
Enabled='Activado';
Disabled='Desactivado';
i1='Setup Home'; 
i2='Estado';
i3='Informaci�n sobre la versi�n'; 
i4='Versi�n del firmware'; 
i5='Boot version';  
i6='Versi�n hardware';  
i7='N�mero de serie';  
i8='Parametros LAN'; 
i9='MAC de LAN/WLAN';  
i9a='MAC de LAN'; 
i9b='WLAN no disponible';
i9b='WLAN Not Available';
i10='Direcci�n IP'; 
i11='M�scara de subred'; 
i12='Servidor DHCP';
i13='Parametros de Internet';  
i14='Direcci�n Mac de Wan'; 
i15='Tipo de conexi�n';  
i16='M�scara de subred';  
i17='IP de Wan'; 
i18='Puerta de enlace predeterminada';  
i19='Direcci�n DNS';  
i20='Caracter�sticas'; 
i21='NAT';  
i22='Cortafuegos';
i23='SSID'; 
i24='Seguridad'; 
i25='Impresora'; 
i26='(activar/desactivar)';
i27='Deber� registrarse para poder modificar cualquiera de los parametros.'; 
i28='Servidor de impresi�n / Impresora'
i29='Nombre del servidor de impresi�n'
i30='Impresi�n FTP'
i31='Impresi�n TCP/IP RAW'
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
ld1='LAN > DHCP';
ld2='LAN > Lista de clientes DHCP';
ld3='Esta p�gina le muestra la direcci�n IP, el Nombre de Host y la direcci�n MAC de cada uno de los ordenadores conectados a su red. Si el ordenador no tiene especificado ning�n nombre de host, el campo de Nombre del host estar� en blanco. Al pulsar "Actualizar" se actualizar� la lista.'; 
ld4='Direcci�n IP'; 
ld5=' Nombre del host';
ld6='Direcci�n MAC'; 
lm1='LAN';
lm2='Su router est� equipado con un servidor DHCP que asignar� autom�ticamente direcciones IP a cada uno de los ordenadores de su red. Los parametros establecidos de f�brica para el servidor DHCP funcionar�n en la mayor�a de aplicaciones. Si precisa efectuar cambios en estos parametros, podr� hacerlo.'; 
lm3='Los cambios que puede realizar son:';
lm4='- Modificar la direcci�n IP interna del router. Predeterminado = 192.168.2.1';
lm5='- Modificar la M�scara de Subred. Predeterminada = 255.255.255.0';
lm6='- Activar/Desactivar la funci�n de servidor DHCP. Predeterminada= ON (Activada)';
lm7='- Especificar la direcci�n de inicio y final del conjunto de IP. Predeterminado = de inicio: 2 / de final: 100';
lm8='- Especificar el tiempo l�mite de concesi�n de la direcci�n IP. Predeterminado= Siempre';
lm9='- Especificar un Nombre de Dominio local. Predeterminado= Belkin ';
lm10='Para efectuar cambios, haga clic en "Parametros LAN" en la pesta�a LAN de la izquierda.';
lm11='El router le proporcionar� asimismo una lista de todos los ordenadores cliente conectados a la red. Para visualizar la lista, haga clic en "Lista de clientes DHCP" en la pesta�a LAN de la izquierda.';
ls1='LAN > Parametros LAN';
ls2='Aqu� podr� efectuar modificaciones en la red de �rea local (LAN). Para que los cambios tengan efecto, deber� pulsar el bot�n "Aplicar cambios" en la parte inferior de la pantalla.'; 
ls3='Direcci�n IP';   
ls4='M�scara de subred';     
ls5='Servidor DHCP';  
On='Encendido';  
Off='Apagado';  
all='all';
Auto='Auto'; 
langt='lengua';
langc='Espa&ntilde;ol';
langcl='Current Language';
langal='Available Languages';
ls6='La funci�n de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP a cada ordenador de la red. No es necesario efectuar cambios aqu�.'; 
ls7='Primer direcci�n del grupo de IP';  
ls8='Ultima direcci�n del grupo de IP';   
ls9='Tiempo l�mite de concesi�n';   
ls10='Siempre'; 
ls11='Media hora';
ls12='1 hora';
ls13='Dos horas';
ls14='Medio d�a'; 
ls15='Un d�a';
ls16='Dos d�as';
ls17='Una semana'; 
ls18='Dos semanas';  
ls19='La cantidad de tiempo que el servidor DHCP reservar� la direcci�n IP para cada ordenador.';  
ls20='Nombre de dominio local';
Optional='Opcional';  
ls21='Una propiedad que le permite asignar un nombre a su red.'; 
lsipm='Bien no ha introducido todos los n�meros, o bien alguno de los n�meros introducidos es incorrecto. El n�mero deber� encontrarse entre 0 y 255 en todos los recuadros de introducci�n.';
Issm='El n�mero de M�scara de subred que ha introducido no es v�lido.';
Isnetm='El conjunto de IP deber� encontrarse en la misma subred que el IP de gateway (pasarela) ';
Isendm='La direcci�n IP de final deber� ser mayor que la direcci�n IP de inicio.';
Ispoolm='La direcci�n IP de LAN no puede encontrarse en el conjunto de direcciones de DHCP.';
lsipm2='Direcci�n IP de Lan no v�lida, el �ltimo n�mero no puede ser 0 ni 255';
lsipm3='Direcci�n IP de Lan no v�lida, el primer n�mero no puede ser 127 ni 0';
lsldnm='Nombre de dominio local no v�lido';
lsipm4='La direcci�n IP introducida no es v�lida';
lsipalert='Introduzca de forma manual la nueva direcci�n Lan en el recuadro de entrada de la Direcci�n de la barra de estado de su navegador';
lsipm5='La direcci�n IP que seleccione deber� se un IP no enrutable.\n  192.168.x.x (en donde x es un valor entre 0 y 255.) \n10.x.x.x (donde x es cualquier valor entre 0 y 255.)\n172.y.x.x (donde y es cualquier valor entre 16 y 31 y x es cualquier valor entre 0 y 255.)';
lsipc='�Desea realmente modificar la direcci�n IP de LAN?';
lo1='Ingresar';
lo2='Para poder modificar cualquiera de los parametros, deber� acceder con una contrase�a. Si no ha establecido a�n una contrase�a personalizada, deje este espacio en blanco y haga clic en "Enviar"';
lo3='Contrase�a';  
lo4='Por defecto = dejar en blanco ';
Clear='Cancelar';
Submit='Entrar';
le1='Belkin | Error de acceso';
lerror='�Error de acceso!';  
Utilities='Utilidades > ';
rs1='Reinicio correcto';
rs2='El proceso de reinicio ha finalizado cuando la luz de encendido deja de parpadear.';  
rs3='El router se reinicia';
rs4='segundos restantes.';  
rf1='Restaurar configuraci�n predeterminada de f�brica Correcto'; 
rf2='El proceso de restablecimiento ha finalizado cuando la luz de encendido deja de parpadear.';  
rss1='Parametros restablecidos correctamente';
rss2='Los parametros se han restablecido completamente cuando la luz de encendido deja de parpadear.';  
ufy1='Restaurar la configuraci�n predeterminada de f�brica';
ufy2='El empleo de esta opci�n restaurar� los parametros (predeterminados) de f�brica del router. Se recomienda que realice una copia de seguridad de sus parametros antes de restaurar todos los parametros predeterminados. Para restaurar los parametros predeterminados de f�brica, haga clic en el bot�n "Restaurar configuraci�n predeterminada" de la parte inferior.';
ufy3='ADVERTENCIA: �Se perder�n todos sus parametros!\n�Est� seguro de que desea hacerlo?';
ufy4='El restaurar los parametros predeterminados puede durar hasta 60 segundos. No apague o desconecte el router durante este proceso.';
ufy5='No restaurar� la configuraci�n predeterminada de f�brica. �No se perder� ning�n ajuste!';
ufy='Restaurar configuraci�n predeterminada';
ufe1='Utilidades > Actualizaci�n del firmware';
ufe2='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras y soluciones para los problemas que puedan haber existido. Haga clic en el v�nculo de la parte inferior para comprobar si existe una nueva actualizaci�n de firmware disponible para este router.';
ufe3='NOTA: Realice copias de seguridad de sus parametros actuales antes de actualizar la versi�n del firmware. Haga clic aqu� para ir a la p�gina de Guardar/Copia de seguridad de parametros actuales.';
ufe4='Haga clic ';
ufe5='aqu� para ir a la p�gina de Guardar/Copia de seguridad de parametros actuales.';
ufe6='Buscar una nueva versi�n del firmware >';
ufe7='Comprobar Firmware'; 
ufe8='Actualizaci�n del firmware >';
Update='Actualizar';
ufe9='Especifique la ubicaci�n del archivo de actualizacion. Introduzca la ruta y el nombre del archivo o haga clic en "Examinar" para buscar la ubicaci�n del archivo';
ufe10='�Est� seguro de que desea continuar con la actualizaci�n?';
ufe11='Al final de la actualizaci�n, es posible que el router no responda a los comandos durante un plazo de un minuto. Esto es normal. No apague ni reinicie el router durante ese tiempo.';
um1='Esta pantalla le permite gestionar diferentes par�metros del router y llevar a cabo determinadas funciones de administrador.';
um2='Control parental';
um3='El Control parental de Belkin le protege a usted y sus hijos de contenidos no deseables de Internet.'; 
um4='El Control parental de Belkin es el filtro que va a instalar. Ahora podr� navegar por la red con sus hijos incluso cuando no est� con ellos.<br>&nbsp;';
um5='Reiniciar el router';
um6='Algunas veces es posible que sea necesario reiniciar el router en caso de que comience a funcionar mal. Al reiniciar el router no se borrar� ninguno de sus parametros de configuraci�n.'; 
um7='Restaurar la configuraci�n predeterminada de f�brica';
um8='El empleo de esta opci�n restaurar� los parametros (predeterminados) de f�brica del router. Se recomienda que realice una copia de seguridad de sus parametros antes de restaurar todos los parametros predeterminados.';
um9='Guardar/Copia de seguridad de parametros actuales';
um10='Puede guardar su configuraci�n actual utilizando esta propiedad. El guardar su configuraci�n le permitir� restaurarla posteriormente, en caso de que sus parametros se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuraci�n actual antes de llevar a cabo una actualizaci�n del firmware.';
um11='Restaurar parametros guardados anteriormente';
um12='Esta opci�n le permitir� restaurar una configuraci�n guardada anteriormente.';
um13='Actualizaci�n del firmware';
um14='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras de las propiedades y soluciones para los problemas que puedan haber existido.';
um15='Parametros del sistema';
um16='En la p�gina de parametros del sistema podr� introducir una nueva contrase�a de administrador';
um17=', establecer la zona horaria, activar la gesti�n a distancia y encender y apagar la funci�n NAT';
um18=' del router.';
upc1='Utilidades > Control parental';
upc2='El Control parental de Belkin le protege a usted y a sus hijos o empleados de contenidos no deseables de Internet. El Control parental viene ya preconfigurado para bloquear numerosos tipos de contenidos web, pero puede ser personalizado para ser m�s o menos restrictivo. Cualquier p�gina web puede ser configurada para estar bien permanentemente bloqueada o permanentemente permitida.';
upc3='Su suscripci�n al Control parental est� ';
upc4='DESACTIVADA'; 
upc5='NO ACTIVADA';
upc6='ACTIVADA';
upc7='Para detener los mensajes de inscripci�n al CONTROL PARENTAL, haga clic aqu�:';
upc8='HA CADUCADO';
upc9='Your subscription will expire in ';
days='d�as';
upc10='Informaci�n sobre la cuenta';
Advanced='Avanzado';
Apply='Aplicar';
upc11='Actualizar informaci�n sobre la cuenta';
upc12='Informe';
upc13='Actualmente est� ';
not='no';
upc15='Haga clic aqu� para ver un ejemplo de c�mo funciona el informe.';
upc16='Ejemplo de informe';
upc17='Haga clic aqu� para suscribirse a la opci�n de informe.';
upc18='Suscribirse ahora';
upc19='Haga clic aqu� para ver su informe.';
upc20='Ver informe';
upc21='Estado del Control parental';
upc22='ENCIENDE y APAGA el filtro del Control parental.';
upc23='El filtro web est� actualmente ';
upc24='Notificaci�n por correo electr�nico';
upc25='Notif�quenme por correo electr�nico si el Control parental est� anulado.';
upc26='El correo electr�nico est� actualmente ';
ON='ENCENDIDO';
OFF='APAGADO';
pwd='Contrase�a';
upc27='Modificar pol�tica';
upc28='Para ver o modificar las pol�ticas por defecto para su Control parental, haga clic aqu�';
Modify='Modificar';
upc29='Inscripci�n al Control parental';
upc30='Si desea inscribirse para utilizar la funci�n de Control parental de Belkin, pulse el bot�n siguiente.'; 
upc31='Actualmente <b>NO</b> est� suscrito al servicio del Control parental.';  
upc32='Renovaci�n del Control parental';
upc33='Se acerca la fecha de finalizaci�n de su suscripci�n. Haga clic para renovar su suscripci�n.';
upc34='Renovar ahora';
upc35='url vac�o';
upa1='Utilidades e Informaci�n sobre la cuenta del Control parental';
upa2="Puede modificar aqu� su informaci�n de usuario del Control parental, como la direcci�n de correo electr�nico para las notificaciones del Control parental y la contrase�a de administrador del Control parental.";
upa3='Modificar la direcci�n de correo electr�nico para las notificaciones del Control parental.';
upa5='Introduzca su nueva direcci�n de correo electr�nico'; 
upa6='Introduzca otra vez su nueva direcci�n de correo electr�nico';
upa7='Modificar la contrase�a de administrador del Control parental';
upa8='Introduzca su nueva contrase�a';
upa9='Introduzca otra vez su nueva contrase�a';
upa14='La direcci�n de correo electr�nico no se puede dejar como nula';
Change='Cambiar';
Stop='Aplicar';
upad1='Utilidades y Parametros avanzados del Control parental';
upad2="El Control parental de Belkin requiere una respuesta de valoraci�n de Internet de Cerberian (nuestro socio) para cada p�gina web solicitada. Normalmente, el tiempo de respuesta es inferior a 1 segundo, lo que no supone pr�cticamente ning�n retraso. No obstante, si solicita una p�gina poco frecuente que no se encuentre en su base de datos, proceder�n r�pidamente a su valoraci�n, lo que puede tardar varios segundos dependiendo de la rapidez con que se cargue la p�gina. Si el tiempo de respuesta es m�s lento que el intervalo de tiempo inferior, los CONTROLES PARENTALES pueden ser configurados para: Permitir todas las p�ginas para las que se supere el l�mite de tiempo, o Bloquear todas las p�ginas para las que se supere el l�mite de tiempo.";
Timeout='L�mite de tiempo';
upad3='L�mite de tiempo tras la espera';
upad4='segundos para una respuesta';
upad5='Comportamiento por defecto cuando se supera el l�mite de tiempo';
upad6='Dependiendo el comportamiento seleccionado para el caso de superaci�n del l�mite de tiempo, el router bloquear�/permitir� la navegaci�n.';
upad7='Permitir todas las p�ginas para las que se supere el l�mite de tiempo.';
upad8='Bloquear todas las p�ginas para las que se supere el l�mite de tiempo.';
upc1='Utilidades > Actualizar la cuenta del Control parental';
upr2='Esta funci�n tan s�lo es necesaria en el caso del que la informaci�n de su suscripci�n al CONTROL PARENTAL no sea correcta.Al pulsar este bot�n, el router descargar�/actualizar� toda la informaci�n sobre la cuenta de la que dispone Belkin.Para actualizar la informaci�n sobre la cuenta de su router sobre el CONTROL PARENTAL, haga clic en Actualizar:';
uprev1='Utilidades > Restaurar parametros anteriores';
uprev2='Esta opci�n le permitir� restaurar una configuraci�n guardada anteriormente.';  
Restore='Restaurar';
uprev3='Introduzca el nombre del archivo que contiene la copia de seguridad de los parametros.';
uprev4='�Desea continuar y restaurar los parametros?';
uprev5='Tras restabler los parametros, es posible que el router no responda\n a los comandos durante un plazo de un minuto.\n\nEsto es normal. No apague el router durante este tiempo.';
ur1='Utilidades > Reiniciar el router';
ur2='Algunas veces es posible que sea necesario reiniciar el route en caso de que comience a funcionar mal. Al reiniciar el router no se borrar� ninguno de sus parametros de configuraci�n. Haga clic en el bot�n de "Reiniciar router" de la parte inferior para reiniciar el router.';
ur3='Reiniciar el router';
ur4='�Est� seguro de que desea reiniciar el Router? El reinicio del Router no afectar� a su configuraci�n.';
ur5='Espere 60 segundos hasta que se reinicie el  router. No apague el  router antes de que se haya completado el reinicio.';
usave1='Utilidades > Guardar/Copia de seguridad de parametros actuales';
usave2='Puede guardar su configuraci�n actual utilizando esta funci�n. Guardar su configuraci�n le permitir� restaurarla posteriormente en caso de que sus parametros se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuraci�n actual antes de llevar a cabo una actualizaci�n del firmware.'; 
Save='Guardar';
usys1='Utilidades > Parametros del sistema';
usys2='Contrase�a de administrador:'; 
usys3='El router efect�a el env�o SIN necesidad de introducir contrase�a. Si desea a�adir una contrase�a para disfrutar de una mayor seguridad, puede establecerla aqu�.';
usys4='Introduzca la contrase�a actual';  
usys5='Introduzca la nueva contrase�a';  
usys6='Confirme la nueva contrase�a';  
usys7='Tiempo l�mite de acceso';
usys8='(1-99 minutos)'; 
usys9='Hora y Zona Horaria: '; 
January='Enero'; February='Febrero'; March='Marzo'; April='April'; May='Mayo'; June='Junio'; July='Julio'; August='Agosto'; September='Septiembre'; October='Octubre'; November='Noviembre'; December='Diciembre';
usys10='Establezca su zona horaria. Si reside en una zona que se realiza el cambio de hora seg�n el horario de verano, coloque una marca en este recuadro.';
usys11='Diferencia de zonas horarias';
usys12='(GMT-12:00) Enewetak, Kwajalein';
usys13='(GMT-11:00) Isla Midway, Samoa';
usys14='(GMT-10:00) Haw�i';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Hora del Pac�fico (EE.UU. y Canad�); Tijuana';
usys17='(GMT-07:00) Arizona';
usys18='(GMT-07:00) Hora de las monta�as (EE.UU. y Canad�)';
usys19='(GMT-06:00) Hora central (EE.UU. y Canad�)';
usys20='(GMT-06:00) Ciudad de M�xico, Tegucigalpa';
usys21='(GMT-06:00) Saskatchewan';
usys22='(GMT-05:00) Bogot�, Lima, Quito';
usys23='(GMT-05:00) Hora del Este (EE.UU. y Canad�)';
usys24='(GMT-05:00) Indiana (Este)';
usys25='(GMT-04:00) Hora del Atl�ntico (Canad�)';
usys26='(GMT-04:00) Caracas, La Paz';
usys27='(GMT-04:00) Santiago';
usys28='(GMT-03:00) Terranova';
usys29='(GMT-03:00) Brasilia';
usys30='(GMT-03:00) Buenos Aires, Georgetown';
usys31='(GMT-02:00) Atl�ntico medio';
usys32='(GMT-01:00) Islas Azores, Cabo Verde';
usys33='(GMT) Casablanca, Monrovia';
usys34='(GMT) Hora media de Greenwich: Dubl�n, Edimburgo';
usys35='(GMT) Hora media de Greenwich: Lisboa, Londres';
usys36='(GMT+01:00) �msterdam, Berl�n, Berna, Roma';
usys37='(GMT+01:00) Estocolmo, Viena, Belgrado';
usys38='(GMT+01:00) Bratislava, Budapest, Liubliana';
usys39='(GMT+01:00) Praga, Bruselas, Copenhague, Madrid';
usys40='(GMT+01:00) Par�s, Vilnius, Sarajevo, Skopje';
usys41='(GMT+01:00) Sof�a, Varsovia, Zagreb';
usys42='(GMT+02:00) Atenas, Estambul, Minsk';
usys43='(GMT+02:00) Bucarest';
usys44='(GMT+02:00) El Cairo';
usys45='(GMT+02:00) Harare, Pretoria';
usys46='(GMT+02:00) Helsinki, Riga, Tall�n';
usys47='(GMT+02:00) Israel';
usys48='(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad';
usys49='(GMT+03:00) Mosc�, San Petersburgo';
usys50='(GMT+03:00) Teher�n';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tiflis, Kaz�n';
usys52='(GMT+04:00) Volgogrado, Kabul';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterimburgo';
usys54='(GMT+06:00) Almaty, Dhaka';
usys55='(GMT+07:00) Bangkok, Yakarta, Hanoi';
usys56='(GMT+08:00) Pek�n, Chongqing, Urumqi';
usys57='(GMT+08:00) Hong Kong, Perth, Singapur, Taipei';
usys58='(GMT+09:00) Tokio, Osaka, Saporo, Yakutsk';
usys59='(GMT+10:00) Brisbane';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok';
usys62='(GMT+10:00) Hobart';
usys63='(GMT+11:00) Magad�n, Islas Salom�n, Nueva Caledonia';
usys64='(GMT+12:00) Fiji, Kamchatka, Islas Marshall';
usys65='(GMT+12:00) Wellington, Auckland';
usys66='Cambio de hora seg�n el horario de verano';
usys67='Cambiar la hora autom�ticamente seg�n el horario de verano';
usys68='Gesti�n a distancia:';    
AF='�PROPIEDAD AVANZADA!';
usys69='La gesti�n a distancia le permite efectuar cambios en los parametros de su router desde cualquier parte a trav�s de Internet. Antes de activar esta funci�n,';
usys70='ASEG�RESE DE HABER ESTABLECIDO LA CONTRASE�A DEL ADMINISTRADOR.';
usys71='Cualquier direcci�n IP puede administrar el router remotamente.';  
usys72='�nicamente esta direcci�n IP puede administrar el router remotamente';  
usys73='Activaci�n de NAT:';    
usys74='Le permite desactivar la propiedad de Traducci�n de direcciones de red. En pr�cticamente NING�N caso deber�a desactivar esta funci�n.';
usys75='Activar / Desactivar NAT';
usys76='Activaci�n de UPNP:';   
usys77='Le permite activar o desactivar la propiedad UPNP del Router. Si emplea aplicaciones compatibles con UPnP, la activaci�n del UPnP permitir� que dichas aplicaciones configuren autom�ticamente el router.';
usys78='UPNP Enable / Disable';
usys79='Activar la actualizaci�n autom�tica del firmware:';
usys80='Le permite comprobar autom�ticamente la disponibilidad de actualizaciones de firmware para su router.';
usys81='Activar / Desactivar la actualizaci�n autom�tica del firmware';
usys82='La contrase�a actual no es v�lida';
usys83='La nueva contrase�a y la repetici�n de la nueva contrase�a no coinciden';
usys84='Intervalo de tiempo l�mite de acceso: 1-99';
usys85='La longitud de la contrase�a no es v�lida. La longitud m�xima de la contrase�a es 12 y la longitud m�nima de la contrase�a es 3';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='Se recomienda que establezca su contrase�a de administrador.';
usys88='Servidor NTP primario';
usys89='Servidor NTP de respaldo';
usys90='192.43.244.18-Am�rica del Norte';
usys91='132.163.4.102-Am�rica del Norte';
usys92='192.5.41.41-Am�rica del Norte';
usys93='192.5.41.209-Am�rica del Norte';
usys94='207.200.81.113-Am�rica del Norte';
usys95='208.184.49.9-Am�rica del Norte';
usys96='129.132.2.21-Europa';
usys97='130.149.17.8-Europa';
usys98='137.189.8.174-Pac�fico asi�tico';
usys99='Puerto de acceso remoto';
usysipm='Bien no ha introducido todos los n�meros de la IP, o bien algunos de los n�meros introducidos es incorrecto. Los n�meros deben encontrarse entre 0 y 255';
usysb1='El router efect�a el env�o SIN necesidad de introducir contrase�a. Si desea a�adir una contrase�a para disfrutar de una mayor seguridad, puede establecerla aqu�.';
vjs1="Direcci�n IP no v�lida, demasiado larga, compruebe de nuevo!";
vjs2="Direcci�n IP no v�lida, falta '.' , compruebe de nuevo!";
vjs3="Direcci�n IP no v�lida, faltan n�meros entre '.', compruebe de nuevo!";
vjs4="Direcci�n IP no v�lida, sobre '.' , compruebe de nuevo!"
vjs5="Direcci�n IP no v�lida, los n�meros entre '.' son demasiado grandes, compruebe de nuevo!";
vm1='Uno de los caracteres no es v�lido';
vm2=' en la posici�n';
vm3='Deber� ser ';
vjs6='Formato del a�o no v�lido, introd�zcalo como, p. ej., 2002';
vm4='N�mero no v�lido'; 
vjs8='No v�lido, deber� estar entre 1970 y 2037';
vjs9='Formato del mes no v�lido, introd�zcalo como, p. ej., 01... 12';
vjs10='Introduzca primero al a�o y el mes';
vjs11='Formato del d�a no v�lido, introd�zcalo como, p. ej., 01... 31, es posible que alg�n mes s�lo tenga 00... 28';
vjs12='Formato de la hora no v�lido, introd�zcalo como, p. ej. 00... 23';
vjs13='Formato de los minutos no v�lido, introd�zcalo como, p. ej. 00... 59';
vjs14='MTU no v�lido, deber� estar entre 576 y 1492';
vjs15='MRU no v�lido, deber� estar entre 128 y 65535';
vjs16="Ip no v�lida:";  vjs161=" no en ";   vjs162=" m�scara de red";
vjs17='Ha introducido dos contrase�as distintas, compruebe de nuevo ambas!';
vjs18='Introduzca el n�mero del puerto de inicio.';
vjs19='El n�mero del puerto de inicio deber� ser inferior al del n�mero del puerto de finalizaci�n.';
vjs20='N�mero de puerto no v�lido, los n�meros de puerto deber�n ser enteros positivos';
vjs21='Longitud no v�lida';
vjs22='Formato no v�lido en la posici�n'; vjs221='! Deber� ser:';
vjs23='Direcci�n MAC no v�lida, es una direcci�n de emisi�n.';
vjs24='Direcci�n MAC no v�lida, es una direcci�n nula.';
vjs25='Direcci�n MAC no v�lida, es una direcci�n multicast.';
vjs26='Direcci�n IP de inicio y final no v�lidas, el IP final deber� ser superior al IP de inicio';
vjs27='�N�mero no v�lido! Deber� estar entre 1 y 65535';
vjs28='Formato de m�scara de red no v�lido.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Direcci�n Ip no v�lida, el �ltimo n�mero no puede ser 0 ni 255';
vjs31='Direcci�n Ip de Lan no v�lida, el primer n�mero no puede ser 127';
vjs32='Direcci�n Ip de Lan no v�lida, no puede ser 0.0.0.0';
vjs33='Direcci�n Ip de Lan no v�lida, deber� ser inferior a 224.0.0.0';
vjs34='El intevalo v�lido es';
vp1='Esta p�gina web est� bloqueada por el CONTROL PARENTAL';
vp2=' est� prohibida por el CONTROL PARENTAL y clasificada como: ';
vp3='Si est� en desacuerdo con la valoraci�n y desea que la p�gina sea valorada de nuevo, haga clic en Desacuerdo:';
vp4='Si desea modificar la pol�tica del CONTROL PARENTAL, haga clic en Cambiar:';
vp5='Para anular su pol�tica (s�lo este ordenador) durante 1 hora, introduzca la contrase�a y haga clic en Anular:';
Disagree='Desacuerdo';
Change='Cambiar';
Override='Anular';
wc1='WAN > Tipo de conexi�n';
wc2='Seleccione su tipo de conexi�n:'; 
wc3='Din�mica'; 
wc4='El tipo de conexi�n Din�mica es la m�s habitual. Si emplea un m�dem por cable, entonces dispondr� probablemente de una conexi�n din�mica. Si tiene un m�dem por cable o no est� seguro de su tipo de conexi�n, emplee �sta.';  
wc5='Est�tica'; 
wc6='El tipo de conexi�n de direcci�n IP Est�tica es menos com�n que otros tipos de conexi�n. Utilice esta selecci�n s�lo si su ISP le ha proporcionado una direcci�n IP que no cambia nunca.';  
wc7='PPPoE'; 
wc8='Si emplea un m�dem DSL y/o su ISP le ha proporcionado una Nombre de Usuario y una Contrase�a, entonces su tipo de conexi�n es PPPoE. Utilice este tipo de conexi�n.';  
wc9='PPTP'; 
wc10='[S�lo para pa�ses europeos]. Este tipo de conexi�n es m�s habitual es pa�ses europeos. Si su ISP le ha indicado espec�ficamente que haga uso del PPTP y le ha proporcionado la informaci�n apropiada sobre el mismo, utilice esta opci�n.'; 
wc11='Telstra BigPond'; 
wc12='[Australia solamente] Los usuarios de cable o DSL de Telstra BigPond utilizar�n esta opci�n para configurar la conexi�n.'; 
Next='Siguiente >';
wds1='WAN > DNS';
wds2='En el caso de que su ISP le haya proporcionado una direcci�n DNS espec�fica, introd�zcala en esta ventana y haga clic en "Aplicar cambios".'; 
wds3='Autom�ticamente desde el ISP'; 
wds4='Direcci�n DNS';   
wds5='Direcci�n DNS secundaria';   
wds6='DNS = Servidor de nombres de dominio. Un servidor ubicado en Internet que convierte los URL (v�nculos de recursos universales) como, por ejemplo, www.belkin.com en direcciones IP.';
wds7='Deber� introducir los parametros DNS que le ha proporcionado su ISP en caso de no emplear la funci�n de DNS Autom�tico';
wdy1='WAN > Tipo de conexi�n > IP din�mico';
wdy2='Para introducir los parametros de su IP Din�mica, introduzca su informaci�n a continuaci�n y haga clic en "Aplicar cambios".';
wdy3='Nombre del host';  
wdy4='Nombre de Host = un nombre que algunos Proveedores de servicios de Internet requieren para conectar con su sistema.';  
wdy5='Modificar la direcci�n MAC de WAN'; 
wdy6="Nombre del host no v�lido: ~!##$%^&*()=+{}[]|'\":;?/.<>";
wmc1='WAN > Direcci�n MAC';
wmc2='Algunos ISP le requieren que clone (copie) la direcci�n MAC de la tarjeta de red de su ordenador en el router. Si no est� seguro, clone simplemente la direcci�n MAC del ordenador que se encontraba orginariamente conectado al m�dem antes de instalar el router. La clonaci�n de la direcci�n MAC no causar� ning�n tipo de problemas en su red.';
wmc3='Direcci�n Mac de Wan'; 
wmc4='Clonar la direcci�n MAC del ordenador';  
wmc5='Clonar';
wm1='Internet/WAN';
WAN='WAN';
wm2='La pesta�a Internet/WAN es donde configurar� su router para conectar con su proveedor de servicios de Internet (ISP, Internet Service Provider). El router es capaz de conectarse a pr�cticamente cualquier sistema de Proveedor de servicios de Internet siempre que hayan sido configurados correctamente los parametros del router para su tipo de conexi�n al ISP. Para configurar el router para la conexi�n con su ISP, haga clic en "Tipo de conexi�n" en la pesta�a Internet/WAN de la parte izquierda de la pantalla.';
wm3='Tipos de conexi�n admitidos:';
wm4='<b>Din�mica:</b> incluye los ISP que requieren un nombre de host y los ISP que establecen la conexi�n con una direcci�n MAC espec�fica.';
wm5='<b>Direcci�n IP est�tica:</b> el router admite una conexi�n con un ISP que asigna una direcci�n IP est�tica.'; 
wm6='<b>PPPoE:</b> el ruoter admite un tipo de conexi�n din�mica que requiere un acceso de PPPoE para la autenticaci�n.'; 
wm7='<b>PPTP:</b> Para usuarios europeos SOLAMENTE. El router admite conexiones con ISP europeos que se conectan a trav�s de PPTP.';
wm8='<b>Telstra BigPond:</b>';
wm9=' Usuarios australianos SOLAMENTE. El router admite la conexi�n con Telstra BigPond.'; 
wpe1='WAN > Tipo de conexi�n> PPPoE';
wpe2='Para introducir los parametros de su PPPoE, introduzca su informaci�n a continuaci�n y haga clic en "Aplicar cambios".';
wpe3='Nombre de usuario';   
wpe4='Volver a introducir contrase�a';   
wpe5='Nombre de Servicio (Opcional)';    
wpe6='MTU (576-1492)';    
wpe7='No realice cambios en el ajuste MTU a menos que su ISP requiera espec�ficamente un ajuste diferente de 1432.';
wpe8='Desconectar despu�s de';
wpe9=' minutos sin actividad.';
idlerangerro='Los n�meros que ha introducido para el tiempo de inactividad no son v�lidos.\n El n�mero debe ser un entero entre 1 y 99';
wpe10='Uno de los caracteres no es v�lido: <>&';
pm='Su servicio no ha podido verificar la contrase�a que ha introducido. Confirme que haya introducido su contrase�a correctamente.';
wpe11='Valor MTU no v�lido';
wpe12='Introduzca su nombre de usuario';
wpp1='WAN > Tipo de conexi�n > PPTP';
wpp2='Cuenta PPTP';    
wpp3='Contrase�a PPTP';    
wpp4='Volver a introducir contrase�a';   
wpp5='Nombre del host';   
wpp6='Direcci�n IP de servicio';  
wpp7='Mi direcci�n IP';  
wpp8='Mi m�scara de subred';  
wpp9='ID de conexi�n (opcional)';    
wpp10='Desconectar despu�s de';
wpp11=' minutos sin actividad.';
wpp12='Haga clic aqu� para introducir sus parametros DNS';
wpp13='Introduzca su cuenta PPTP';
wpp14='Introduzca de nuevo su contrase�a!';
wpp15='Introduzca su contrase�a!';
ws1='WAN > Tipo de conexi�n > IP est�tico';
ws2='Para introducir los parametros de su IP Est�tica, introduzca su informaci�n a continuaci�n y haga clic en "Aplicar cambios".';
ws3='Direcci�n IP';  
ws4='M�scara de subred';   
ws5='Puerta de enlace predeterminada del ISP';   
ws6='�Suministra mi ISP m�s de una direcci�n IP est�tica?';  
ws7='Haga clic aqu� para introducir sus parametros DNS';  
dm='Bien no ha introducido todos los n�meros DNS, o bien alguno de los n�meros introducidos es incorrecto. Los n�meros deber�n ser o encontrarse entre 0 y 255';
sm='Los n�meros de m�scara de subred que ha introducido no son v�lidos.';
ws8='Por favor introduzca/valide sus parametros de direcci�n DNS en la siguiente pantalla.';
wsc1='Alias IP Address';  
im='La lista de direcciones IP con alias est� llena. No es posible crear reglas adicionales.';
wt1='WAN > Tipo de conexi�n > Telstra BigPond';
wt2='Si su servicio de Internet es suministrado por Telstra BigPond en Australia, necesitar� introducir su informaci�n a continuaci�n. Esta informaci�n es suministrada por Telstra BigPond.';
wt3='Seleccione su Estado';
wt4='El usuario decide el servidor de acceso manualmente'; 
wt5='Servidor de acceso'; 
Logout='Salir';
wt6='Introduzca el IP de su servidor o seleccione su estado del men�.';
wla1='Inal�mbrico > Utilizar como Punto de acceso';
wlad1='El Router puede ser configurado para actuar estrictamente como un Punto de acceso, anulando las funciones de enrutamiento y firewall. Para que esto suceda, seleccione "Activar" e introduzca la direcci�n IP que desee que tenga el Punto de acceso.';
wlad2='Activar / Desactivar';
wlae1='Especificar direcci�n IP';  
wlae2='M�scara de subred';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Los canales inal�mbricos deber�n coincidir entre el Router y el PA.<br>'+
      '2) Los parametros de seguridad (WEP) deber�n coincidir entre el Router y el PA.<br>'+
      '3) Si est� activado el filtro de direcciones MAC, el usuario deber� asegurarse de a�adir las direcciones MAC de WLAN del Router/PA con el fin de permitir la comunicaci�n entre los mismos.<br>';
wlc1='Inal�mbrico > Canal y SSID';
wlc2='Para efectuar cambios en los parametros inal�mbricos del router, realice los cambios aqu�. Haga clic en "Aplicar cambios" para guardar los parametros.';
wlc3='Canal inal�mbrico';
wlc4='SSID';  
wlc5='Modo Inal�mbrico'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Emitir SSID';  
wlc10='Turbo Mode'; 
wlc11='Al activar el modo Turbo se permite al Router o Punto de acceso utilizar "Frame Bursting" (env�o de r�fagas de tramas) para obtener el m�ximo rendimiento del Router o Punto de acceso para clientes 802.11g. El modo Turbo funcionar� con clientes 802.11g que soporten el Modo Turbo. Los Clientes 802.11g de Belkin que empleen el controlador m�s actualizado soportar�n el Modo Turbo. Los clientes que no soporten el Modo Turbo operar�n normalmente cuando est� activado el Modo Turbo.';
wlc12='Modo protegido';
wlc13="NOTA: En la mayor�a de las situaciones, el mejor rendimiento se alcanza con el Modo protegido DESACTIVADO. Si est� trabajando en un entorno de tr�fico 802.11b INTENSO o con interferencias, el mejor rendimiento se conseguir� con el Modo protegido encendido ACTIVADO.";
wlc14='Canal actual';
wle1='Inal�mbrica > Seguridad';
wle2='Modo de seguridad';
wle3='WPA-PSK (sin servidor)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="Aqu� podr� establecer sus parametros de seguridad inal�mbrica/encriptaci�n. Se deber� activar la seguridad para garantizar la m�xima seguridad inal�mbrica. El WPA (Acceso inal�mbrico protegido) proporciona cambios din�micos de clave y constituye la mejor soluci�n de seguridad. En entorno inal�mbricos, donde no todos los dispositivos admiten WPA, se deber� emplear WEP (Privacidad equivalente a la del cable).";
wle8='(13 pares de d�gitos hexadecimales)';  
wle9='NOTA:';
wle10='Para generar autom�ticamente pares hexadecimales utilizando una Frase de paso, seleccione el recuadro de la izquierda e introduzca en el la frase de paso.';
PP='Frase de paso'; 
generate='Generar';
errm='Introduzca una Frase de paso';
keym='La clave no est� completa.';
wle11='Clave 1';  
wle12='Clave 2'; 
wle13='Clave 3'; 
wle14='Clave 4';   
wle15='(pares de d�gitos hexadecimales)'; 
wle16='WPA/WPA2 (con servidor)';
wle17='Ajuste avanzado - Acceso inal�mbrico protegido empleando un servidor para distribuir claves a los clientes: Esta opci�n requiere que est� funcionando en la red un servidor Radius.';
keym1='La clave no est� completa.';
keym2=' no es v�lida, por favor, corr�jala primero!';
wlm1='Inal�mbrico';
wlm2='En esta pesta�a podr� regular los parametros de la secci�n inal�mbrica del router.';
wlm3='Canal y SSID';
wlm4='Realice las adaptaciones del canal inal�mbrico y del SSID (nombre de red inal�mbrica)';
wlm5='Seguridad';
wlm6='Modifique los parametros de seguridad inal�mbrica como parametros WPA o parametros WEP. ';
wlm7='UTILIZAR como Punto de acceso';
wlm8='Establecer el modo de funcionamiento del Router en modo PA ';
wlm9='Especificar direcci�n IP';
wlm10='Especificar direcci�n IP del PA.';
wlm11='Control de direcciones MAC'
wlm12='Establezca una lista de clientes a los que desee permitir o denegar el acceso a la red inal�mbrica.';
wlm13='Puente inal�mbrico';
wlm14='Le permite configurar modos de puenteo WDS.';
ww8='Introduzca el n�mero del puerto Radius.';
ww9='El n�mero de puerto Radius deber� encontrarse entre 1 y 65535';
ww10='Introduzca la clave Radius.';
ww11='El intervalo de repetici�n de clave deber� ser un n�mero';
ww12='El intervalo de repetici�n de clave deber� ser superior a 60 segundos';
ww13='Autenticaci�n';
ww1='WPA(con servidor) ';
ww2='Ajuste avanzado - Acceso inal�mbrico protegido empleando un servidor para distribuir claves a los clientes: Esta opci�n requiere que est� funcionando en la red un servidor Radius.';
ww3='T�cnica de encriptaci�n';
ww4='Servidor Radius';
ww5='Puerto Radius';
wwp6='Introduzca la clave precompartida (PSK)';
wwp7='La longitud de la clave precompartida deber� ser de 8 a 63 o 64 hex.';
seconds='(segundos)';
wwp6='Input pre-shared key (PSK)';
wwp7='The length of pre-shared key should be 8 to 63 or 64 Hex';
wwp1='Default is TKIP';
wwp2='Clave precompartida (PSK)';
wwp3='WPA-PSK (sin servidor)';
wwp4='Acceso inal�mbrico protegido con una clave precompartida: La clave es una contrase�a, con forma de palabra, frase o serie de n�meros y letras. La clave deber� tener entre <b>8</b> y <b>63</b> caracteres de longitud y puede incluir espacios y s�mbolos, s�lo <b>64</b> d�gitos hexadecimales (de 0 a 9 y de A a F). Cada cliente que se conecte a la red deber� emplear la misma clave (clave precompartida).';
wwp5='Ocultar PSK';
wlb1='Inal�mbrica > Puente inal�mbrico';
wlb2='El Puenteo inal�mbrico o Sistema de distribuci�n inal�mbrica (WDS) se emplea para conectar Routers inal�mbricos con Puntos de acceso inal�mbricos para ampliar una red.';
wlb3='Activar puenteo inal�mbrico.';
wlb4='(al activar esta propiedad se permite a otros Puntos de acceso conectar con este Punto de acceso.)';
wlb5='Por defecto est� activada';
wlb6='Activa S�LO Puntos de acceso espec�ficos para conectar.';
wlb7="(Introducir direcci�n MAC inal�mbrica del PA al que conectar. Si este elemento no est� marcado, podr� conectar cualquier PA. Nota: al conectar los puntos de acceso, al menos se necesitar� uno para llamar a la direcci�n MAC de los dem�s. Consejo: la direcci�n MAC se encuentra utilizando una inspecci�n de la ubicaci�n en la tarjeta del cliente inal�mbrico.)";
wlb8='Desactivar la capacidad de los CLIENTES inal�mbricos para conectarse.';
wlb9='(Esta propiedad s�lo deber� ser utilizada cuando el PA se emplee exclusivamente para conectarse a otros PA de forma inal�mbrica.)';
wlb10='invalid';
BSSID='BSSID';
wlbss1='Inspecci�n de la ubicaci�n';
wlbss2='Tipo de red';
wlbss3='Encriptaci�n';
wlbss4='Seleccionar';
wlbss5='No se ha encontrado BSSID disponible.'; 
wlbss6='Los 4 campos est�n llenos, elimine uno de ellos antes de seleccionar otro nuevo';
wlq1='QoS (Calidad de servicio) Configuraci�n';
wlq2='QoS establece la prioridad entre los datos importantes de su red como el contenido multimedia y de voz por IP (VoIP) para que otros datos que se est�n enviando por la red no interfieran. Basada en 802.11e, esta funci�n se puede activar o desactivar y puede elegir el modo de reconocimiento que quiera utilizar. Si quiere transmitir contenido multimedia o utilizar VoIP en su red, la funci�n QoS debe activarse.<br>'; 
wlq3='Conmutador QoS'; 
wlq4='Le permite activar o desactivar QoS.<br>'; 
wlac1='Modo RCN'; 
wlac2=' Existen dos modos de reconocimiento (RCN) que pueden utilizarse para obtener el mejor rendimiento multimedia en su red: RCN de r�fagas y RCN inmediato. <br><br>'+
 'El RCN inmediato es el ajuste predeterminado (de f�brica) y se recomienda para el funcionamiento normal de la red. El cambio del modo RCN de RCN inmediato a RCN de r�fagas puede afectar a la tasa de transferencia de largo alcance. Utilice el modo RCN inmediato si lo m�s importante para usted es el rendimiento de largo alcance de su red. <br><br>'+
'El modo RCN de r�fagas reducir� el tiempo de procesamiento y no se reconocer�n todos los paquetes que se env�an a trav�s de la red. Cuando existe muy buena conexi�n entre el Router y el cliente, el RCN a r�fagas puede lograr un aumento de la tasa de transferencia. Si una aplicaci�n, como cuando se transmiten archivos de v�deo de alta definici�n, exige el m�ximo ancho de banda, utilice el modo RCN de r�fagas. Recuerde que el rendimiento de largo alcance puede verse afectado cuando se utiliza el modo RCN de r�fagas. <br>';
wmac1='Ajuste de Control de direcciones MAC'; 
wmac2=' El filtro de direcciones MAC es una potente caracter�stica de seguridad que le permite especificar qu� ordenadores est�n permitidos en la red. Nota: Esta lista solo se aplica a los ordenadores inal�mbricos. Cualquier ordenador que trate de acceder a la red y no est� especificado en la lista de filtrado no obtendr� permiso para acceder. Cuando active esta propiedad, deber� introducir la direcci�n MAC de cada cliente (ordenador) de su red para permitir el acceso a la misma de cada uno de ellos. La caracter�stica "Bloquear" le permite encender y apagar el acceso a la red f�cilmente para cualquier ordenador, sin tener que a�adir y eliminar la direcci�n MAC del ordenador de la lista.<br>'+
'Configurar una lista de acceso permitido <br>'+
 '1.Seleccione el bot�n "Permitir" (1) para empezar a configurar una lista de ordenadores con acceso para conectar a la red inal�mbrica.<br>'+
 '2. A continuaci�n, en el campo "Direcci�n MAC", que est� vac�o (3), introduzca la direcci�n MAC del ordenador inal�mbrico al que desea conceder acceso a la red inal�mbrica, despu�s haga clic en "A�adir" (4).<br>'+
 '3. Repita el proceso hasta que haya introducido todos los ordenadores que desee a�adir.<br>'+
 '4. Haga clic en "Aplicar cambios" (5) para finalizar.<br><br>'+
'Configurar una lista de acceso denegado <br>'+
'La lista "Denegar acceso" le permite especificar a qu� ordenadores quiere DENEGAR el acceso a la red. Se denegar� el acceso a la red inal�mbrica a todos los ordenadores que se encuentren en la lista. El resto podr� acceder.<br>'+
 '1.Seleccione el bot�n "Denegar" (2) para empezar a configurar una lista de ordenadores con acceso denegado a la red inal�mbrica.'+
 '2. A continuaci�n, en el campo "Direcci�n MAC", que est� vac�o (3), introduzca la direcci�n MAC del ordenador inal�mbrico al que desea denegar el acceso a la red inal�mbrica, despu�s haga clic en "A�adir" (4).<br>'+
 '3. Repita el proceso hasta que haya introducido todos los ordenadores a los que desee denegar el acceso.<br>'+
 '4. Haga clic en "Aplicar cambios" (5) para finalizar.<br>';
wlmc1='Inal�mbrico > Control de direcciones MAC';
wlmc2='El Control de direcciones MAC es la capacidad de establecer una lista de clientes a los que desee permitir o denegar el acceso a la red inal�mbrica.';
Allow='Permitir';   Deny='Denegar';   //Disable='Desactivar';
wlmc7='Seleccione primero si desea permitir o denegar el acceso a lista de direcciones MAC';
wlmc6='No\ puede introducir m�s de 16 direcciones MAC';
wlmc3="Direcci�n MAC no v�lida ";
wlmc4='por favor, corr�jala primero!';
wlmc5='La direcci�n MAC correcta deber� ser xx:xx:xx:xx:xx:xx en donde x est� entre 0-9 y a-f!';
ENTRY_FULL	= 'Todas las entradas est�n llenas.\nElimine algunas entradas y pruebe de nuevo.';
CLEAR_CONFIRM= '�Desea borrar la entrada? ';
CLEAR_ALL_CONFIRM = '�Desea borrar todas las entradas? ';
ERR_INTERNAL	= 'Error interno: Compruebe el funcionamiento de javascrip --';
g1='La "Direcci�n IP" es la direcci�n IP interna del Router. Para acceder a la interfaz de configuraci�n avanzada '+ 
'introduzca esta direcci�n IP en la barra de direcciones de su navegador. Esta direcci�n puede '+  
'modificarse si es necesario. Para modificar la direcci�n IP, introduzca la nueva direcci�n IP y haga clic en "Aplicar '+  
'Cambios". La direcci�n IP que elija deber�a ser una IP no enrutable. Ejemplos de direcci�n no enrutable '+  
'IP son: ';
g2='192.168.x.x (donde x es una cifra entre el 0 y el 255.)<br>';
g3='10.x.x.x (donde x es una cifra entre el 0 y el 255).<br>';
g4='172.y.x.x (donde x es una cifra entre 16 y 31 y x es una cifra entre 0 y 255).<br>';
g5='No es necesario modificar la m�scara de subred'+
'. Es posible modificar la m�scara de subred en caso necesario. �nicamente realice cambios a la m�scara '+
'de subred si tiene una raz�n espec�fica para hacerlo.<br>';
g6='DNS es un acr�nimo de Servidor de nombres de dominio. Un Servidor de nombres de dominio es un servidor situado en '+ 
 'Internet que convierte los URL (Localizador de recursos universales), como www.belkin.com, en direcciones IP'+
'. Muchos ISP no precisan que usted introduzca esta informaci�n en el Router. El '+ 
'recuadro de selecci�n "Autom�ticamente desde el ISP" deber� encontrarse marcado si su ISP no le ha proporcionado ninguna '+
'direcci�n DNS espec�fica. Si est� utilizando un tipo de conexi�n con IP est�tica, entonces puede que necesite introducir una '+
'direcci�n DNS espec�fica y una direcci�n DNS secundaria para que su conexi�n funcione de forma adecuada. Si '+
'su tipo de conexi�n es din�mica o PPPoE, es probable que no sea necesario introducir ninguna '+ 
'direcci�n DNS. Para introducir los parametros de la direcci�n DNS, retire la marca del recuadro de selecci�n "Autom�ticamente desde el ISP" e '+
'introduzca sus entradas DNS en los espacios correspondientes. Haga clic en "Aplicar cambios" para guardar los parametros. <br>';
g7='La funci�n de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP '+ 
'a cada ordenador de la red. El servidor DHCP puede ser desconectado si es necesario. Para desactivar '+
'el servidor DHCP ser� necesario que usted establezca manualmente una direcci�n IP est�tica en cada ordenador  '+
'de su red. El conjunto de IP es la serie de las direcciones IP apartadas para la asignaci�n din�mica '+
'a los ordenadores de su red. El valor predeterminado es 2-100 (99 ordenadores) y si desea cambiar '+
'este n�mero, puede hacerlo introduciendo una direcci�n IP nueva de inicio y final y haciendo clic sobre "Aplicar cambios". <br>';
g8='Puede establecer un nombre de dominio local (nombre de red) para su red. No es necesario modificar '+ 
'esta configuraci�n a no ser que tenga una necesidad avanzada espec�fica para hacerlo. Puede dar a la red el nombre '+
'que quiera como "MI RED". <br>';
g9='IP din�mico';
g10='Un tipo de conexi�n din�mica es el tipo de conexi�n m�s habitual para m�dems por cable. '+ 
'Configurar el tipo de conexi�n como din�mico es suficiente en muchos casos para completar la conexi�n '+ 
'con su ISP. Algunos tipos de conexi�n din�mica es posible que requieran un Nombre de Host. Puede introducir su Nombre de host '+
'en el espacio correspondiente, si le ha sido asignado uno. Su ISP le asignar� su Nombre de Host. '+
'Algunas conexiones din�micas es posible que requieran la clonaci�n de la direcci�n MAC del PC que se encontraba '+
'originariamente conectado al m�dem. Para hacerlo, haga clic en el v�nculo "Modificar la direcci�n MAC de WAN" '+
'que aparece en la pantalla. El indicador del estado de Internet mostrar� el mensaje "Conectado" si su Router est� configurado correctamente. <br>';
g11='Un tipo de conexi�n de Direcci�n IP est�tica es menos com�n que otros tipos de conexi�n. Si su ISP '+
'emplea direccionamiento IP est�tico, necesitar� su Direcci�n IP, M�scara de subred y '+
'direcci�n de pasarela del ISP. Esta informaci�n puede obtenerla de su ISP o en la documentaci�n que le envi� '+ 
'su ISP. Introduzca su informaci�n y haga clic sobre "Aplicar cambios". Despu�s de aplicar los cambios, '+
'el indicador de estado de Internet mostrar� "Conexi�n  " si su Router est� configurado correctamente.<br><br>'+
'Si su ISP le asigna m�s de una direcci�n IP est�tica, su router tendr� la capacidad de gestionar '+ 
'hasta cinco direcciones IP WAN est�ticas. Seleccione "Mi ISP suministra m�s de una direcci�n IP est�tica" '+
'e introduzca las direcciones adicionales. <br>';
g12='La mayor�a de proveedores de DSL emplean PPPoE como tipo de conexi�n. Si utiliza un m�dem DSL para conectarse a '+
'Internet, es posible que su ISP emplee PPPoE para darle acceso al servicio. Si dispone de una conexi�n a Internet '+
'en su casa u oficina peque�a que no requiere m�dem, es posible que tambi�n utilice PPPoE. '+
'<br><br>'+
'Su tipo de conexi�n es PPPoE si:<br>'+ 
'1) Su ISP le proporcion� un nombre de usuario y contrase�a que son necesarios para conectarse a Internet<br>'+
'2) Su ISP le proporcion� software como WinPOET, Enternet300 que usted emplea para conectarse a Internet<br>'+
'3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet<br><br>'+
'Para configurar el Router de forma que utilice PPPoE, introduzca su Nombre de usuario y Contrase�a en los espacios correspondientes. '+
'Si no dispone de Nombre de servicio o no lo conoce, deje en blanco el campo Nombre de servicio. '+
'Una vez introducida la informaci�n, haga clic sobre "Aplicar cambios". Despu�s de aplicar los cambios, '+
'el indicador del estado de Internet mostrar� el mensaje "Conectado" si su Router est� configurado correctamente. '+
'Para obtener m�s detalles acerca de c�mo configurar su Router para utilizar PPPoE, consulte el Manual del usuario.<br>';
g13='Algunos ISP requieren una conexi�n que emplee el protocolo PPTP. Este protocolo establece una conexi�n directa con el sistema del ISP. '+
'Introduzca la informaci�n proporcionada por su ISP en el espacio correspondiente. Cuando haya terminado, '+
'haga clic en "Aplicar cambios". Despu�s de aplicar los cambios, el indicador de estado de Internet mostrar� '+
'"Conectado" si su Router ha sido configurado correctamente. ';
g14='Telstra BigPond le proporcionar� su nombre de usuario y contrase�a. Introduzca esta informaci�n a continuaci�n. '+ 
'Al seleccionar su estado se rellenar� autom�ticamente la direcci�n IP de su Servidor de acceso. '+
'Si la direcci�n de su Servidor de acceso es distinta de que se indica aqu�, '+
'es posible que deba introducir manualmente la direcci�n IP del Servidor de acceso. '+
'Cuando haya introducido su informaci�n, haga clic en "Aplicar cambios". '+ 
'Despu�s de aplicar los cambios, el indicador de estado de Internet mostrar� "Conectado" '+
'si su Router ha sido configurado correctamente. ';
g15='Ajuste MTU';
g16='El ajuste MTU no deber�a ser modificado nunca a no ser que su ISP le proporcione un ajuste MTU espec�fico. '+ 
'Si cambia el ajuste MTU puede tener problemas con su conexi�n a Internet, incluso '+
'desconexi�n a Internet, acceso lento a Internet y problemas para que las aplicaciones a Internet funcionen correctamente. '; 
g17='Desconectar despu�s de X...'; 
g18='La funci�n de Desconexi�n se utiliza para desconectar autom�ticamente el router de su ISP cuando '+ 
'no existe actividad durante un determinado per�odo de tiempo. Por ejemplo, al colocar una marca '+
'junto a esta opci�n e introducir 5 en el campo para los minutos, el router '+
'se desconectar� de Internet despu�s de 5 minutos sin actividad en Internet. Esta opci�n deber� '+ 
'utilizarse en el caso de que usted abone sus servicios de Internet por minutos. ';
g19='MAC es el acr�nimo de Controlador de acceso a los medios. Todos los componentes de red, incluidos adaptadores, '+ 
'tarjetas y routers, disponen de un "n�mero de serie" exclusivo llamado direcci�n MAC. Es posible que su ISP '+
'registre la direcci�n MAC del adaptador de su ordenador y que s�lo permita a ese ordenador en particular '+ 
'la conexi�n al servicio de Internet. Cuando instale el router, la direcci�n MAC del mismo '+ 
'ser� "examinada"por el ISP y esto puede provocar que la conexi�n no funcione. Belkin incorpora '+ 
'la posibilidad de clonar (copiar) la direcci�n MAC del ordenador al router. Esta direcci�n MAC '+ 
'ser� considerada por el sistema del ISP como la direcci�n MAC original y le '+ 
'permitir� que la conexi�n funcione. Si no est� seguro de si su ISP necesita ver la direcci�n MAC original, '+ 
'clone simplemente la direcci�n MAC del ordenador que se encontraba originariamente conectado '+ 
'al m�dem. La clonaci�n de la direcci�n no causar� ning�n tipo de problemas en su red. <br> '+
'Para Clonar su direcci�n MAC, aseg�rese de estar utilizando el ordenador que se encontraba ORIGINALMENTE '+
'CONECTADO a su m�dem antes de la instalaci�n del Router. Haga clic en el bot�n "Clonar direcci�n MAC" '+ 
'. Haga clic sobre "Aplicar cambios". Su direcci�n MAC ha sido ahora clonada en el router. ';
g20='Para modificar el canal de funcionamiento del Router, seleccione el canal deseado del men� desplegable y seleccione su canal. Haga clic en "Aplicar cambios" para guardar el ajuste. Tambi�n '+
 'puede cambiar el SSID. El SSID es el equivalente al nombre de la red inal�mbrica. Puede llamar al SSID como desee. Si existen otras redes inal�mbricas en su '+
 '�rea, deber� dar a su red inal�mbrica un nombre exclusivo. El nombre predeterminado es Belkin_Pre-N_xxxxxx. Para '+
'modificar el SSID, haga clic en el recuadro de SSID e introduzca un nuevo nombre. Haga clic sobre "Aplicar cambios" para realizar el cambio.'; 
g21='Es posible lograr que su red inal�mbrica sea pr�cticamente invisible. Al desactivar la emisi�n '+ 
'del SSID, su red no aparecer� en una inspecci�n de la ubicaci�n. La funcionalidad de estudio del sitio '+
'est� hoy disponible en muchos de los adaptadores de red inal�mbricos del mercado. Buscar� en el "aire" cualquier red disponible'+
' y permitir� que el ordenador seleccione la red desde el estudio del sitio. Desactivar la '+
'la emisi�n del SSID contribuir� a elevar la seguridad.';
g22='Cuando emplee el Router como Punto de acceso, deber� especificar una direcci�n IP para el'+
 '.Punto de acceso. Esta direcci�n IP deber� encontrarse dentro de la misma serie que la red a la que vaya'+
 'a conectarlo. Para acceder de nuevo a la interfaz de configuraci�n avanzada del Router, introduzca'+
 'la direcci�n IP en el navegador de Internet e inicie una sesi�n.';
g23= 'Utilizaci�n del conmutador del modo inal�mbrico';
g24= 'Este conmutador le permite seleccionar los modos inal�mbricos del Router. Existen tres modos. <br> '+
'1) S�lo 802.11 g<br>'+
'Si selecciona esta modalidad del Router, s�lo permitir� a los dispositivos compatibles con Pre-N y 802.11g unirse a la red, y los dispositivos m�s lentos como 802.11b se quedar�n fuera de la red.<br> '+
'2) 802.11g y 802.11b<br>'+
'Si selecciona esta modalidad del Router, permitir� a los dispositivos compatibles con Pre-N, 802.11g y 802.11b unirse a la red. <br>'+
'3) Off<br>'+
'Este modo desactivar� el punto de acceso del Router, por lo que no se podr�n unir a la red los dispositivos inal�mbricos. Desactivar la funci�n inal�mbrica de su Router es una excelente manera de proteger su red cuando se va a ausentar de casa durante un largo periodo de tiempo, o si no desea utilizar la capacidad inal�mbrica del Router durante un tiempo determinado.';
g25='Servidores virtuales';
g26='Esta funci�n le permitir� dirigir llamadas (Internet) externas para servicios como '+ 
'un servidor web (puerto 80), servidor FTP (puerto 21), y otras aplicaciones a trav�s de su Router '+ 
'hasta su red interna. Debido a que sus ordenadores internos est�n protegidos por un firewall, '+
'no pueden acceder a ellos otras m�quinas a trav�s de Internet, porque no pueden ser \'vistos\'. Si necesita '+ 
'configurar la funci�n de Servidor Virtual para una aplicaci�n determinada, puede disponer de la lista de '+
'de aplicaciones comunes proporcionada. Si su aplicaci�n no se encuentra en la lista, ser� preciso que se ponga en contacto '+ 
'con el vendedor de la aplicaci�n para descubrir los parametros de los puertos precisos. Para seleccionar un elemento de la '+
'lista, seleccione su aplicaci�n en la lista desplegable. Seleccione la fila de la que desea copiar '+
'los parametros en la lista desplegable que hay junto a la fila, a continuaci�n haga clic en "Intro". Los parametros '+
'ser�n transferidos a la fila seleccionada que especifique. Haga clic en "Aplicar cambios" para guardar el ajuste para '+
'esa aplicaci�n. Para introducir los parametros de forma manual, introduzca la direcci�n IP en el espacio correspondiente para la '+
'm�quina interna (servidor), los puertos que se deben pasar (utilice una coma entre los distintos '+
'puertos), seleccione el tipo de puerto (TCP o UDP), y haga clic en "Aplicar cambios". �nicamente podr� pasar un '+
'puerto por cada direcci�n IP interna. Abrir puertos en su firewall puede significar un riesgo para la seguridad de la red. Puede '+
'activar y desactivar los parametros con gran rapidez. Se recomienda desactivar los parametros '+
'cuando no est� utilizando una aplicaci�n espec�fica. ';
g27='Filtros para IP de clientes';
g28='El Router puede ser configurado para restringir el acceso a Internet, al correo electr�nico o a otros servicios de red '+ 
'en determinados d�as y horas. Puede establecerse una restricci�n para un ordenador, un '+
'nivel de ordenadores o varios ordenadores. Para restringir el acceso a Internet a un �nico '+
'ordenador, introduzca la direcci�n IP del ordenador al que desea restringir el acceso '+ 
'en los campos de IP. A continuaci�n, introduzca 80 y 80 en los campos de Puerto. Seleccione TCP. "Seleccione Block (Bloquear).""" '+
'Tambi�n puede seleccionar Siempre para bloquear el acceso de forma permanente. Seleccione el d�a de comienzo en '+
'la parte superior, la hora de comienzo en la parte superior, el d�a de finalizaci�n en la parte inferior y la hora de finalizaci�n en la '+
'parte inferior. Haga clic sobre "Aplicar cambios". A partir de ahora, el ordenador con la direcci�n IP que ha especificado '+
'tendr� bloqueado el acceso en los momentos que ha fijado. Nota: aseg�rese de haber seleccionado '+
'la zona horaria correcta en Utilidades> Parametros del sistema> Zona horaria. ';
g29='Filtrado de direcciones MAC';
g30='El Filtro de Direcciones MAC es una potente caracter�stica de seguridad que le permite especificar qu� '+
'no est� especificado en la lista de filtrado, no obtendr� permiso para acceder. Cuando active esta propiedad, '+
'ordenadores est�n permitidos en la red. Cualquier ordenador que trate de acceder a la red y '+
'deber� introducir la direcci�n MAC de cada cliente de su red para permitir el acceso a '+
'cada uno de ellos. La funci�n "Bloquear" le permite activar y desactivar el acceso a la red f�cilmente para cualquier '+
'ordenador, sin tener que a�adir y eliminar la direcci�n MAC del ordenador de la lista. Para '+ 
'activar esta caracter�stica, seleccione "Activar filtrado de direcciones MAC". A continuaci�n, introduzca la direcci�n MAC '+
'de cada ordenador de su red haciendo clic en "A�adir" e introduciendo la direcci�n MAC en el '+
'espacio correspondiente. Haga clic en "Aplicar cambios" para guardar los parametros. Para borrar una direcci�n MAC de '+
'la lista, haga clic simplemente en la opci�n "Borrar" junto a la direcci�n MAC que desee borrar. Haga clic sobre "Aplicar '+
'cambios" para guardar los parametros. <br><br>'+
'Nota: no podr� borrar la direcci�n MAC del ordenador que utiliza para '+ 
'acceder a las funciones de administraci�n del Router. (el ordenador que est� empleando ahora mismo). ';
g31='La caracter�stica DMZ le permite especificar un ordenador de su red para colocarlo '+
'fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT est� causando '+
'problemas con una aplicaci�n como, por ejemplo, una aplicaci�n de juegos o de videoconferencia. '+
'Utilice esta caracter�stica de forma temporal. '+
'<font class="redBold">'+
'El ordenador que se encuentra en la DMZ no est� protegido contra los ataques de piratas inform�ticos.</font> '+ 
'Para situar un ordenador en la DMZ, introduzca los d�gitos finales de su direcci�n IP en el '+ 
'campo IP y seleccione "Activar". Haga clic en "Aplicar cambios" para que los cambios se hagan efectivos. '+ 
'Si est� utilizando m�ltiples direcciones IP est�ticas de WAN, ser� posible seleccionar a qu� '+
'direcci�n IP de WAN ser� dirigido el host de DMZ. Introduzca la direcci�n IP de WAN a la que '+
'desee dirigir el host de DMZ, introduzca los dos �ltimos d�gitos de la direcci�n IP del '+
'del ordenador host de DMZ, seleccione "Activar" y haga clic en "Aplicar cambios". ';
g32='Bloquear ICMP Ping'
g33='Los piratas inform�ticos utilizan lo que se conoce como "pinging" (revisar actividad) para encontrar v�ctimas potenciales en '+
'Internet. Al revisar la actividad de una direcci�n IP espec�fica y recibir una respuesta de la direcci�n IP '+
'el pirata inform�tico puede decidirse a comprobar si existe algo de inter�s. El '+ 
'Router puede ser configurado de forma que no responda a los intentos de ping ICMP provenientes del exterior. Esto '+ 
'eleva el nivel de seguridad de su Router. Para apagar la respuesta al ping, seleccione '+ 
'"Bloquear ping ICMP" y haga clic en "Aplicar cambios". El router no responder� a ning�n ICMP ping. '; 
g34='Contrase�a de administrador';
g35='El Router que se le ha suministrado viene SIN contrase�a. Si desea a�adir una contrase�a para aumentar '+
'la seguridad, security, puede establecerla aqu�. Guarde su contrase�a en un lugar seguro, ya que '+
'la necesitar� si tiene que acceder al Router en el futuro. Tambi�n '+
'se recomienda que establezca una contrase�a si va a utilizar la caracter�stica de gesti�n a distancia '+
'de este Router. <br><br>'+
'La opci�n de tiempo l�mite de inactividad le permite establecer el periodo de tiempo que puede estar registrado '+ 
'en la interfaz de configuraci�n avanzada del Router. El temporizador se inicia cuando deja de detectarse '+
'actividad. Por ejemplo, usted ha efectuado algunos cambios en la interfaz de configuraci�n avanzada, '+
'y despu�s deja su ordenador solo sin hacer clic en "Cerrar sesi�n". Suponiendo que el tiempo l�mite de inactividad est� establecido '+
'en 10 minutos, la sesi�n finalizar� 10 minutos despu�s de que se haya marchado. Deber� '+
'acceder al router de nuevo si desea realizar m�s cambios. La opci�n de tiempo l�mite de inactividad '+
'se debe a motivos de seguridad y est� establecida de forma predeterminada en 10 minutos. Tenga en cuenta que '+
'no se puede acceder a la interfaz de configuraci�n avanzada del router con m�s de un ordenador al mismo tiempo. ';
g36='Hora y Zona horaria';
g37='El Router mantiene la hora conect�ndose a un servidor SNTP (Protocolo horario de red simple). '+  
'Esto permite al Router sincronizar el reloj del sistema con la red global de Internet. El '+ 
'reloj sincronizado en el Router se utiliza para grabar el registro de seguridad y controlar el '+  
'el filtro de clientes. Seleccione la zona horaria en la que reside.  Si reside en una zona en la que se '+ 
'realiza el cambio de hora seg�n el horario de verano, coloque una marca en el recuadro junto a "Activar hora seg�n el '+ 
'horario de verano". Puede que el reloj del sistema no se actualice de forma inmediata. Deje pasar al menos 15 minutos para '+ 
'que el router se ponga en contacto con los servidores de hora en Internet y obtenga una respuesta. No podr� '+
'cambiar la hora del reloj usted mismo. '; 
g38='Administraci�n Remota';
g39='Antes de activar esta funci�n,'+  
'<font class="plaintext_bold">ASEG�RESE DE HABER ESTABLECIDO LA CONTRASE�A DEL ADMINISTRADOR. </font>'+ 
'La gesti�n a distancia le permite efectuar cambios en los parametros de su Router desde cualquier parte '+ 
'a trav�s de Internet. Existen dos m�todos de administrar el router remotamente. El primer '+ 
'm�todo consiste en permitir el acceso al router desde cualquier parte en Internet seleccionando '+ 
'"Cualquier direcci�n IP puede administrar el router remotamente". Al introducir su direcci�n IP de WAN '+ 
'desde cualquier ordenador en Internet, aparecer� una ventana de acceso en la que '+ 
'deber� introducir la contrase�a de su router. El segundo m�todo consiste en permitir '+ 
'la gesti�n a distancia del router �nicamente a una direcci�n IP espec�fica. Este m�todo es m�s seguro, pero menos '+  
'c�modo. Para utilizar este m�todo, introduzca la direcci�n IP desde la que vaya a acceder al '+ 
'al Router en el espacio previsto y seleccione "Solo esta direcci�n IP puede '+ 
'administrar el router remotamente". Antes de activar esta funci�n, se RECOMIENDA ENCARECIDAMENTE que '+ 
'establezca su contrase�a de administrador. Si deja la contrase�a vac�a, dejar� expuesto '+ 
'su Router a posibles intrusiones. ';
g40='Activaci�n de NAT'
g41='Antes de activar esta funci�n, '+  
'<font class="plaintext_bold">ASEG�RESE DE HABER ESTABLECIDO LA CONTRASE�A DEL ADMINISTRADOR. </font>'+ 
'La Traducci�n de direcciones de red (NAT) es el m�todo con el que el router comparte la �nica '+ 
'direcci�n IP asignada por su ISP con el resto de ordenadores de la red. Solo los usuarios avanzados '+ 
'pueden utilizar esta funci�n. Esta funci�n deber� ser empleada �nicamente si su ISP le asigna '+ 
'varias direcciones IP o si necesita desactivar NAT para una configuraci�n avanzada del sistema. '+  
'Si dispone de una sola direcci�n IP y desactiva NAT, los ordenadores de su red no podr�n '+ 
'acceder a Internet. Es posible asimismo que sucedan otros problemas. Al desactivar NAT '+
'se desactivar�n las funciones de su firewall. '; 
g42='UPnP (Plug-and-play universal) es una tecnolog�a que ofrece un funcionamiento perfecto de las opciones de mensajes de voz '+
'mensajes de v�deo, juegos y otras aplicaciones compatibles con UPnP. Algunas '+
'aplicaciones requieren que se configure el firewall del Router de forma espec�fica para que puedan funcionar '+
'correctamente. Normalmente se requiere abrir los puertos TCP y UDP y en algunos casos establecer '+
'puertos de activaci�n. Una aplicaci�n compatible con UPnP tiene la capacidad de comunicarse con '+
'el Router, b�sicamente "indicando" al Router de qu� forma necesita que se configure el firewall. '+
'El Router que se le ha suministrado viene con la funci�n UPnP desactivada. Si est� utilizando cualquier aplicaci�n compatible con '+ 
'UPnP, y desea aprovechar las ventajas de las funcionalidades UPnP, puede activar esta '+ 
'opci�n UPnP. Simplemente seleccione "Activar" en la secci�n "Activar UpnP" de la p�gina de Utilidades. '+ 
'Haga clic sobre "Aplicar cambios" para guardar el cambio. ';
g43='Notificaci�n autom�tica de actualizaci�n del firmware';
g44='El Router tiene la capacidad incorporada de buscar autom�ticamente una nueva versi�n del '+ 
'firmware y de informarle de que est� disponible una nueva versi�n. Cuando acceda a la '+ 
'interfaz avanzada del Router, este efectuar� una b�squeda para comprobar si existe una nueva versi�n del firmware '+ 
'disponible. Si existe nuevo firmware disponible, aparecer� una notificaci�n. Puede optar por '+ 
'descargar la nueva versi�n o por ignorar el mensaje. El router se suministra con esta la funci�n desactivada. '+  
'Si desea activarla, seleccione "Activar" y haga clic en "Aplicar cambios". ';
g45='Seguridad inal�mbrica';
g46='El empleo de encriptaci�n puede contribuir a mantener su red segura. S�lo puede seleccionarse un tipo de seguridad '+ 
'a la vez. Por lo tanto, se debe seleccionar un modo que sea '+ 
'admitido por todos los dispositivos de red que haya en la red inal�mbrica. Este producto de Belkin tiene 5 '+ 
'posibilidades de parametros de seguridad:<br><br>'+
'1) Desactivado. En este modo no se activa ninguna encriptaci�n. Las redes abiertas, en las que todos los usuarios son '+ 
'             bienvenidos, prefieren a veces no activar la encriptaci�n.<br><br> '+ 
'2) WPA PSK - Dom�stico (sin servidor). El WPA (Wireless Protected Access, acceso protegido inal�mbrico) PSK es una'+ 
'             t�cnica de seguridad basada en est�ndares recientes, en la que cada paquete de informaci�n '+ 
'             se encripta con un c�digo o clave diferentes. Como la clave est� cambiando constantemente, '+  
'             el WPA es muy seguro. Existen dos tipos de WPA, WPA-PSK (Clave precompartida) y '+ 
'             WPA-Servidor Radius. Evidentemente, la diferencia es que uno requiere un servidor '+  
'             y el otro no. El WPA-PSK es para los usuarios de ordenadores para el hogar y oficinas peque�as que no disponen de '+  
'             un servidor. La clave de encriptaci�n PSK se genera autom�ticamente desde '+  
'             una cadena de caracteres o frase de paso. Obviamente, el mayor riesgo de seguridad en WPA PSK es '+  
'             que alguien descubra su frase de paso.<br><br> '+ 
 'a. TKIP frente a AES. La configuraci�n de WPA requiere que el usuario elija entre encriptar utilizando '+  
 'TKIP o AES. El est�ndar WPA especifica TKIP, que es el valor predeterminado. Adem�s, '+ 
 ' TKIP deber�a proporcionar mejor compatibilidad entre los productos inal�mbricos de los diferentes '+  
 ' proveedores ya que muchos productos inal�mbricos nunca incorporar�n AES. AES es una nueva '+  
 ' t�cnica de encriptaci�n basada en el est�ndar no ratificado 802.11i. Los nuevos est�ndares WPA '+  
   'est�n considerando utilizar AES. A pesar de que AES no es tan popular, algunos usuarios '+  
  ' podr�an preferir utilizar esta t�cnica. En cualquier caso, todos los dispositivos de red deben emplear la misma '+  
   't�cnica.<br><br> '+
 'b. Clave precompartida. Introduzca cualquier palabra o frase de hasta 40 caracteres. Se debe utilizar tambi�n el mismo PSK '+  
   'para cada dispositivo de red inal�mbrica de la red. Tenga cuidado con '+  
   'las diferencias entre may�sculas y min�sculas ("n" no es igual que "N".) Recuerde, la forma m�s f�cil '+  
   'de poner en riesgo su seguridad es que alguien adivine su PSK.<br><br> '+ 
'3) WEP de 128 bits. Hasta hace poco, la WEP (Privacidad equivalente a cableado) de 128 bits era el est�ndar para '+  
   'la encriptaci�n inal�mbrica. Si no todos sus dispositivos inal�mbricos son compatibles con WPA, la WEP de 128 bits '+  
   'ofrece una opci�n de seguridad que sigue siendo muy buena. Ser� necesario que introduzca los '+  
   'n�meros hexadecimales, o tambi�n puede generarlos autom�ticamente.<br><br> '+
'4) WEP de 64 bits. Belkin s�lo recomienda el modo de 64 bits en redes en las que los algunos dispositivos no sean compatibles '+  
   'con WPA ni con WEP de 128 bits.<br><br> '+
'5) WPA - Servidor Radius. (A este modo se accede desde el bot�n Avanzado). Este WPA'+
'es s�lo para redes que utilizan un servidor Radius. Todos los par�metros para este modo'+
'deben ser obtenidos desde el administrador de su servidor Radius. A diferencia de WPA PSK'+
', el servidor WPA transfiere la clave desde el servidor a los clientes en lugar de generarla autom�ticamente.';
g57='Uso de DNS din�mico';
g58='El servicio DNS din�mico le permite otorgar a una direcci�n IP din�mica uno de los muchos nombres de host est�tico que ofrece la lista de dominios de DynDNS.org; de esta manera, podr� acceder a sus ordenadores en red de manera m�s sencilla desde varias ubicaciones en Internet. DynDNS.org ofrece a la comunidad de Internet este servicio para hasta cinco nombres de host en forma gratuita.<br>'+
'El servicio DNSSM din�mico es ideal para una p�gina web personal, un servidor de archivos o para facilitar el acceso a su PC del hogar y los archivos guardados cuando est� en el trabajo. Mediante la utilizaci�n de este servicio puede estar seguro de que el nombre de host siempre conducir� a su direcci�n IP, independientemente de cu�ntas veces su ISP la cambie. Cuando su direcci�n IP cambia, sus amigos y socios pueden ubicarlo siempre visitando sunombre.dyndns.org.<br>'+
'<br>Puede registrarse de manera gratuita para obtener su nombre de host DNS din�mico en http://www.dyndns.org.<br>'+
'<br><b>Configuraci�n del cliente de actualizaci�n para DNS din�mico del router</b><br>'+
'<br>Puede registrarse de manera gratuita para obtener su nombre de host DNS din�mico en http://www.dyndns.org.<br>'+
'<br><b>Configuraci�n del cliente de actualizaci�n para DNS din�mico del router</b><br>'+
'Debe registrarse en el servicio gratuito de actualizaci�n de DynDNS.org antes de poder utilizar esta funci�n. Una vez que se haya registrado, siga las instrucciones que se indican a continuaci�n.<br>'+
'1.Introduzca su nombre de usuario de DynDNS.org en el campo "Nombre de usuario" (1).<br>'+
'2.Introduzca su contrase�a de DynDNS.org en el campo "Contrase�a" (2).<br>'+
'3.Introduzca el nombre de dominio de DynDNS.org que ha configurado en DynDNS.org en el campo "Nombre de dominio" (3).<br>'+
'4.Haga clic en "Actualizar DNS din�mico" para actualizar su direcci�n IP.<br>'+
'Si la direcci�n IP din�mica que le ha asignado su ISP cambia, el Router actualizar� autom�ticamente los servidores de DynDNS.org con la direcci�n IP nueva. Tambi�n puede hacer esto de manera manual pulsando el bot�n \"Actualizar DNS din�mico\" (4).<br>';
fw1='Actualizaci�n del firmware en curso.';
fw2='NO APAGUE O DESACTIVE EL ROUTER, si lo hace podr�a da�ar el router dej�ndolo inoperable.'; 
apply_text_1='Aplicando cambios. Por favor, espere...';
warn_msg1='SSID no se puede ajustar como NULO!';
warn_msg2='La conexi�n inal�mbica se reiniciar�, si est� realizando este cambio desde un ordenador inal�mbrico, puede que su ordenador inal�mbrico se desconecte temporalmente del router.';

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
