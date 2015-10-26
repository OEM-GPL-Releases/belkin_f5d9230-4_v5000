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
show6='Conexión';
show7='Sin conexión';
show8='Configuración de LAN';
show9='Configuración LAN';
show10='Lista de clientes DHCP';
show11='Internet WAN';
show12='Tipo de conexión';
show13='DNS';
show14='Dirección MAC';
show15='WLAN no disponible';
show16='Inalámbrico';
show17='Canal y SSID';
show18= 'Seguridad';
show19=  'Utilizar como Punto de acceso';
show20=  'Especificar dirección IP';
show21=  'Control de direcciones MAC';
show22=   'Puente inalámbrico';
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
show34=  'Restaurar configuración predeterminada de fábrica';
show35=  'Guardar copia de seguridad';
show36=  'Restaurar parametros anteriores';
show37=  'Actualización del firmware';
show38=  'Parametros del sistema';
show39='Servicio de impresora';
show40='Configuración del servidor de impresión';
show41=   'DDNS';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
sm1='Más información ';
btn1='Borrar cambios ';
btn2=' Aplicar cambios ';
btn3='Actualizar DNS dinámico';
Router='Router';
AP='AP';
Dynamic=' Dinámica ';
cff1='Comprobación de firmware con éxito';
cff2='Información sobre el firmware.'; 
cff3='No existe ninguna actualización nueva de firmware disponible para este Router';
cff4='Imposible conectar con el servidor de información del firmware, <br>vuelva a comprobar la conexión WAN.';
cff5='Existe una versión disponible para su Router';
d1='Belkin | Duplicar Administrador';
d2='Duplicar Administrador';
d3='Este dispositivo es gestionado por';
d4='¡¡actualmente!!';
fc1='Firewall > filtros para IP de clientes ';
fc2a='El Router puede ser configurado para restringir el acceso a Internet, al correo electrónico o a otros servicios de red'; fc2b=' en determinados días y horas.'; 
IP='IP';
Port='Port';
Type='Tipo';
BT='Tiempo de bloqueo';
Day='Día';
Tm='Hora';
Enable='Activar';
BOTH='AMBOS';
Always='Siempre';
Block='Bloqueo';
SUN='>DOM';
MON='>LUN';
TUE='>MAR';
WED='>MIÉR';
THU='>JUE';
FRI='>VIE';
SAT='>SÁB';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Bien no ha introducido la dirección IP del cliente o bien alguno de los números de la dirección IP que ha introducido no son válidos.  El número en el recuadro de introducción de IP deberá encontrarse entre 1 y 254.';
fcsm='Los números de puerto que ha introducido no son válidos.';
fcrm='El último en la serie de puertos deberá ser mayor que el primero.';
fcripm='El último en la serie de ip deberá ser mayor que el primero.';
fcpm='El número en el recuadro de introducción del puerto deberá encontrarse entre 1 y 65535.';
fd1='Firewall > DMZ '; 
fd2='La función DMZ le permite especificar un ordenador de su red para ser colocado fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT esté causando problemas con una aplicación como, por ejemplo, una aplicación de juegos o de videoconferencia. Utilice esta característica de forma temporal.'; 
fd3='El ordenador que se encuentra en la DMZ no está protegido contra los ataques de piratas informáticos.'; 
fd4='Para situar un ordenador en la DMZ, introduzca los dígitos finales de su dirección IP en el campo inferior y seleccione "Activar". Haga clic en "Enviar" para que los cambios tengan efecto.'; 
fd5='Dirección IP del host virtual de DMZ '; 
fd6='IP Estática ';  
fd7='IP privado ';  
fd8='Activar '; 
fd9='Firewall > DDNS'; 
fd10='El DNS dinámico le permite proporcionar a los usuarios de Internet un nombre de dominio fijo (en lugar de una dirección IP, que puede cambiar periódicamente), permitiendo el acceso a su router y las aplicaciones configuradas en los servidores virtuales de su router, desde diversas ubicaciones de Internet sin necesidad de conocer su dirección IP actual. Su Router inalámbrico es compatible con el DNS dinámico a través de DynDNS.org ';
fd11='Debe crear una cuenta de usuario antes de utilizar este servicio.&nbsp;';
fd12='Nombre de usuario > '; 
fd13='Contraseña > '; 
fd14='Nombre de dominio > '; 
fd15='Por favor, introduzca la dirección IP antes de activar DMZ'; 
fd16='Auto-update'; 
fmc1='Firewall > Filtrado de direcciones MAC';
fmc2='Esta función le permite establecer una lista de clientes permitidos. Cuando active esta función, deberá introducir la dirección MAC de cada cliente de su red para permitir el acceso a la misma de cada uno de ellos. Por fovor, introduzca un nombre de usuario para identificar qué ordenador se incluye en la lista. El nombre de usuario no debe incluir espacios ni caracteres especiales.';    
fmc3='Activar filtrado de direcciones MAC';   
fmc4='Lista para el filtrado de direcciones MAC';
fmc5='Bloqueo';  
fmc6='Host';  
fmc7='Dirección MAC';  
fmc9='No puede introducir una MAC de multidifusión';
fmc12='¡Esta MAC ya ha sido añadida!';
Add='Añadir'; 
Del='Borrar';
fmcipm=' Bien no ha introducido todos los dígitos hexadecimales o bien algunos de los dígitos hexadecimales introducidos es incorrecto. Un dígito hexadecimal puede ser un número entre 0 y 9 o una letra de la A a la F.';
fmn1='Firewall >';
fmn2='Su router se encuentra equipado con un firewall que protege su red de una amplia gama de ataques habituales de piratas informáticos, incluidos los ataques Ping of Death (PoD) y Denial of Service (DoS). En caso necesario, puede desactivar la función de firewall. Si desactiva la protección por firewall, no dejará su red completamente vulnerable a los ataques de los piratas, pero es recomendable dejar activado el firewall siempre que sea posible.'; 
fmn3=' Activar / Desactivar el firewall >';
Disable='Desactivar';
fp1='Firewall > Bloquear Ping a WAN';
fp2='<b>¡FUNCIÓN AVANZADA!</b> Es posible configurar el router para que no responda a un ping ICMP (un ping al puerto WAN). Esta característica ofrece un mayor nivel de seguridad.'; 
fp3='Bloquear ping ICMP >';  
fs1='Firewall > Registro de seguridad';
fs2='El router conserva un registro de toda actividad que tiene lugar en el mismo como, por ejemplo, las entradas y salidas y todos los intentos de acceder al router desde Internet. El registro puede ser visualizado en la parte inferior.'; 
fs3='Archivo de registro';
Save='Guardar';
Clear='Borrar';
Refresh='Actualizar';  
fv1='Firewall > Servidores virtuales';
fvipm='Bien no ha introducido todas las direcciones ip, \n o bien algunos de los números introducidos es incorrecto. \n El número en el recuadro de entrada de la dirección IP deberá ser un número entre 1 y 254.';
fvrm='El número de puerto público no podrá ser 88, porque entraría en conflicto con el servicio web del Router inalámbrico.';
fvipr='La gama de puertos de entrada no es correcta.'
fvppr='La serie de puertos privados no es correcta.';
fv2='Esta función le permitirá dirigir llamadas (Internet) externas para servicios como un servidor web.(puerto 80), servidor FTP (puerto 21), u otras aplicaciones mediante su router a su red interna.'; 
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
Description='Descripción';;
Inb='Puerto de entrada';  
Type='Tipo';  
Pipa='Dirección IP privada';  
Pport='Puerto Privado';  
htop='arriba'; 
h1='Ayuda';
h2='GLOSARIO DE TÉRMINOS';  
h3='<b>Administrador</b> Un Administrador realiza el servicio de mantener una red. En el caso de este Router, la persona que lo configura y efectúa los cambios en los parametros.';
h4='<b>Cliente</b> Un ordenador de la red que emplea los servicios del Router como, por ejemplo, el servidor DHCP automático y el firewall.'; 
h5='<b>DHCP</b> Protocolo de configuración de host dinámico. Este protocolo configura automáticamente los parametros TCP/IP de todos los ordenadores de la red de su hogar.';  
h6='<b>Dial-Up</b> Una conexión que emplea la red telefónica pública.'; 
h7='<b>DMZ</b> Una zona virtual en el Router que no se encuentra protegida por el firewall del Router.  Es posible situar un ordenador en la DMZ.';   
h8='<b>Dirección de servidor DNS</b> DNS significa "Domain Name System" (Sistema de nombres de dominio) y permite a los ordenadores host de Internet disponer de un nombre de dominio (como belkin.com) y una o más direcciones IP (como 192.34.45.8). Un servidor DNS conserva una base de datos de los ordenadores host y de sus respectivos nombres de dominio y direcciones IP, de forma que cuando se requiere un nombre de dominio (como, por ejemplo, al introducir "belkin.com" en su navegador de Internet), el usuario es enviado a la dirección IP correcta. La dirección del servidor DNS utilizada por los ordenadores de la red de su hogar es la ubicación del servidor DNS que ha asignado su ISP.';  
h9='<b>Módem DSL</b> DSL significa Línea de abonados digitales. Un módem DSL emplea sus líneas de teléfono existentes para transmitir los datos a altas velocidades.';  
h10='<b>IP dinámica</b> Una dirección IP que se obtiene de forma automática de un servidor DHCP.';  
h11='<b>Ethernet</b> Un estándar para redes de ordenadores. Las redes Ethernet se conectan mediante hubs y cables especiales, y transfieren datos a hasta 10 millones de bits por segundo (Mbps).';  
h12='<b>Firewall</b> Una frontera electrónica que evita el acceso de usuarios no autorizados a determinados archivos u ordenadores de una red.';  
h13='<b>Firmware</b> El software almacenado en la memoria. Los programas esenciales que permanecen incluso cuando se apaga el sistema. El firmware es más fácil de modificar que el hardware pero es más permanente que el software almacenado en un disco.';  
h14='<b>Dirección IP</b> IP significa Protocolo de Internet. Una dirección IP se compone de una serie de números separados por periodos que identifica a un único y exclusivo host de Internet. Ejemplo: 192.34.45.8.';  
h15='<b>ISDN</b> Red digital de servicios integrados. Son las líneas digitales de telecomunicación que pueden transmitir tanto voz como servicios de red digital hasta 128 K, mucho más rápidas y más robustas que los módems analógicos de alta velocidad. Las líneas ISDN son ofrecidas por numerosas compañías de teléfono.';  
h16='<b>ISP</b> Proveedor de servicios de Internet. Un ISP es una empresa que proporciona conectividad a Internet para personas individuales o para empresas u organizaciones.';  
h17='<b>Dirección de pasarela ISP</b> (véase la definición de ISP). La dirección de Gateway (pasarela) del ISP es una dirección IP para el router de Internet situado en la oficina del ISP. Esta dirección es requerida únicamente cuando se emplea un módem por cable o DSL.';  
h18='<b>LAN</b> Red de área local. Una LAN es un grupo de ordenadores y dispositivos conectados juntos en una zona relativamente reducida (como una casa o una oficina). La red de su hogar es considerada como una LAN.';  
h19='<b>Dirección MAC</b> MAC significa Control de acceso a los medios. Una dirección MAC es la dirección de hardware de un dispositivo conectado a una red.';  
h20='<b>MTU</b> Unidad de transmisión máxima. La mayor unidad de datos que puede ser transmitida por un medio físico individual.';  
h21='<b>NAT</b> Traducción de direcciones de red. Este proceso permite que todos los ordenadores en la red de su casa utilicen una sola dirección IP. Utilizando la propiedad NAT de la gateway (pasarela) para red de hogar HomeConnect, podrá acceder a Internet desde cualquier ordenador de la red de su hogar sin necesidad de adquirir más direcciones IP de su ISP.';  
h22='<b>Puerto</b> n canal lógico que es identificado por su número de puerto exclusivo. Las aplicaciones escuchan los diferentes puertos para ver si existe en ellos información que pueda estar relacionada con ellas.';  
h23='<b>PPPoE</b> Protocolo punto a punto a través de Ethernet. El Protocolo punto a punto a través de Ethernet es un método para la transmisión segura de datos creado originalmente para conexiones telefónicas; el PPPoE es para conexiones de Ethernet.';  
h24='<b>PPTP</b> Protocolo de túnel punto a punto. Una versión del PPP (Protocolo punto a punto) que tiene la capacidad de encapsular paquetes de datos formateados para un protocolo de red en paquetes utilizados por otro protocolo. Esta técnica de túneles permite que los datos TCP/IP sean transmitidos sobre una red que no es TCP/IP. El PPTP puede ser empleado para unir diferentes redes físicas utilizando Internet como intermediario.';  
h25='<b>SNTP</b> Protocolo horario de red simple. Un estándar de comunicación que permite la transmisión de información en tiempo real por una red o por Internet.';  
h26='<b>SPI</b> Inspección de paquetes de datos. SPI es el tipo de seguridad de Internet de nivel corporativo proporcionada por su pasarela de red doméstica HomeConnect. Utilizando la SPI, la gateway (pasarela) actúa a modo de "firewall", protegiendo su red de los piratas informáticos.';  
h27='<b>IP estática</b> Una dirección IP que es configurada manualmente y nunca cambia.';  
h28='<b>Máscara de subred</b> Una máscara de subred, que puede formar parte de la información de TCP/IP suministrada por su ISP, es un conjunto de cuatro números configurado como dirección IP. Se emplea para crear números de direcciones IP empleados exclusivamente dentro de una red particular (al contrario de los números de direcciones IP válidas reconocidos por Internet, que deben ser asignados por InterNIC).';  
h29='<b>TCP</b> Protocolo de control de transmisiones. Es el protocolo de nivel de transporte de Internet más común. El TCP está orientado a la conexión y al flujo de información y proporciona una comunicación fiable a través de redes de conmutación de paquetes.';  
h30='<b>TCP/IP</b> Protocolo de control de transmisiones a través de protocolo de Internet. Este es el protocolo estándar para la transmisión de datos a través de Internet.';  
h31='<b>UDP</b> Protocolo de los datagramas del usuario. Protocolo de comunicaciones del nivel de red de Internet, nivel de transporte y nivel de sesión, que hace posible enviar un mensaje datagrama desde un ordenador hasta una aplicación que se esté ejecutando en otro ordenador. A diferencia del TCP, el UDP carece de conexión y no garantiza una comunicación fiable; la propia aplicación debe procesar todo tipo de errores y controlar que el envío sea fiable. '; 
h32='<b>WAN</b> Red de área amplia. Una red que conecta ordenadores situados en áreas geográficas separadas, (es decir, diferentes edificios, ciudades, países). Internet es una red de área amplia.';  
h33='<b>Dirección IP de WAN</b> La dirección IP asignada al router por el ISP.';  
h34='<b>WLAN</b> Red inalámbrica de área local. Una red de área local que conecta ordenadores cercanos a través de radioemisión (como 802.11b)';
Enabled='Activado';
Disabled='Desactivado';
i1='Setup Home'; 
i2='Estado';
i3='Información sobre la versión'; 
i4='Versión del firmware'; 
i5='Boot version';  
i6='Versión hardware';  
i7='Número de serie';  
i8='Parametros LAN'; 
i9='MAC de LAN/WLAN';  
i9a='MAC de LAN'; 
i9b='WLAN no disponible';
i9b='WLAN Not Available';
i10='Dirección IP'; 
i11='Máscara de subred'; 
i12='Servidor DHCP';
i13='Parametros de Internet';  
i14='Dirección Mac de Wan'; 
i15='Tipo de conexión';  
i16='Máscara de subred';  
i17='IP de Wan'; 
i18='Puerta de enlace predeterminada';  
i19='Dirección DNS';  
i20='Características'; 
i21='NAT';  
i22='Cortafuegos';
i23='SSID'; 
i24='Seguridad'; 
i25='Impresora'; 
i26='(activar/desactivar)';
i27='Deberá registrarse para poder modificar cualquiera de los parametros.'; 
i28='Servidor de impresión / Impresora'
i29='Nombre del servidor de impresión'
i30='Impresión FTP'
i31='Impresión TCP/IP RAW'
i32='WLAN settings';
i33='UPnP';
i34='WLAN MAC';
i35='System date/time';
ld1='LAN > DHCP';
ld2='LAN > Lista de clientes DHCP';
ld3='Esta página le muestra la dirección IP, el Nombre de Host y la dirección MAC de cada uno de los ordenadores conectados a su red. Si el ordenador no tiene especificado ningún nombre de host, el campo de Nombre del host estará en blanco. Al pulsar "Actualizar" se actualizará la lista.'; 
ld4='Dirección IP'; 
ld5=' Nombre del host';
ld6='Dirección MAC'; 
lm1='LAN';
lm2='Su router está equipado con un servidor DHCP que asignará automáticamente direcciones IP a cada uno de los ordenadores de su red. Los parametros establecidos de fábrica para el servidor DHCP funcionarán en la mayoría de aplicaciones. Si precisa efectuar cambios en estos parametros, podrá hacerlo.'; 
lm3='Los cambios que puede realizar son:';
lm4='- Modificar la dirección IP interna del router. Predeterminado = 192.168.2.1';
lm5='- Modificar la Máscara de Subred. Predeterminada = 255.255.255.0';
lm6='- Activar/Desactivar la función de servidor DHCP. Predeterminada= ON (Activada)';
lm7='- Especificar la dirección de inicio y final del conjunto de IP. Predeterminado = de inicio: 2 / de final: 100';
lm8='- Especificar el tiempo límite de concesión de la dirección IP. Predeterminado= Siempre';
lm9='- Especificar un Nombre de Dominio local. Predeterminado= Belkin ';
lm10='Para efectuar cambios, haga clic en "Parametros LAN" en la pestaña LAN de la izquierda.';
lm11='El router le proporcionará asimismo una lista de todos los ordenadores cliente conectados a la red. Para visualizar la lista, haga clic en "Lista de clientes DHCP" en la pestaña LAN de la izquierda.';
ls1='LAN > Parametros LAN';
ls2='Aquí podrá efectuar modificaciones en la red de área local (LAN). Para que los cambios tengan efecto, deberá pulsar el botón "Aplicar cambios" en la parte inferior de la pantalla.'; 
ls3='Dirección IP';   
ls4='Máscara de subred';     
ls5='Servidor DHCP';  
On='Encendido';  
Off='Apagado';  
all='all';
Auto='Auto'; 
langt='lengua';
langc='Espa&ntilde;ol';
langcl='Current Language';
langal='Available Languages';
ls6='La función de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP a cada ordenador de la red. No es necesario efectuar cambios aquí.'; 
ls7='Primer dirección del grupo de IP';  
ls8='Ultima dirección del grupo de IP';   
ls9='Tiempo límite de concesión';   
ls10='Siempre'; 
ls11='Media hora';
ls12='1 hora';
ls13='Dos horas';
ls14='Medio día'; 
ls15='Un día';
ls16='Dos días';
ls17='Una semana'; 
ls18='Dos semanas';  
ls19='La cantidad de tiempo que el servidor DHCP reservará la dirección IP para cada ordenador.';  
ls20='Nombre de dominio local';
Optional='Opcional';  
ls21='Una propiedad que le permite asignar un nombre a su red.'; 
lsipm='Bien no ha introducido todos los números, o bien alguno de los números introducidos es incorrecto. El número deberá encontrarse entre 0 y 255 en todos los recuadros de introducción.';
Issm='El número de Máscara de subred que ha introducido no es válido.';
Isnetm='El conjunto de IP deberá encontrarse en la misma subred que el IP de gateway (pasarela) ';
Isendm='La dirección IP de final deberá ser mayor que la dirección IP de inicio.';
Ispoolm='La dirección IP de LAN no puede encontrarse en el conjunto de direcciones de DHCP.';
lsipm2='Dirección IP de Lan no válida, el último número no puede ser 0 ni 255';
lsipm3='Dirección IP de Lan no válida, el primer número no puede ser 127 ni 0';
lsldnm='Nombre de dominio local no válido';
lsipm4='La dirección IP introducida no es válida';
lsipalert='Introduzca de forma manual la nueva dirección Lan en el recuadro de entrada de la Dirección de la barra de estado de su navegador';
lsipm5='La dirección IP que seleccione deberá se un IP no enrutable.\n  192.168.x.x (en donde x es un valor entre 0 y 255.) \n10.x.x.x (donde x es cualquier valor entre 0 y 255.)\n172.y.x.x (donde y es cualquier valor entre 16 y 31 y x es cualquier valor entre 0 y 255.)';
lsipc='¿Desea realmente modificar la dirección IP de LAN?';
lo1='Ingresar';
lo2='Para poder modificar cualquiera de los parametros, deberá acceder con una contraseña. Si no ha establecido aún una contraseña personalizada, deje este espacio en blanco y haga clic en "Enviar"';
lo3='Contraseña';  
lo4='Por defecto = dejar en blanco ';
Clear='Cancelar';
Submit='Entrar';
le1='Belkin | Error de acceso';
lerror='¡Error de acceso!';  
Utilities='Utilidades > ';
rs1='Reinicio correcto';
rs2='El proceso de reinicio ha finalizado cuando la luz de encendido deja de parpadear.';  
rs3='El router se reinicia';
rs4='segundos restantes.';  
rf1='Restaurar configuración predeterminada de fábrica Correcto'; 
rf2='El proceso de restablecimiento ha finalizado cuando la luz de encendido deja de parpadear.';  
rss1='Parametros restablecidos correctamente';
rss2='Los parametros se han restablecido completamente cuando la luz de encendido deja de parpadear.';  
ufy1='Restaurar la configuración predeterminada de fábrica';
ufy2='El empleo de esta opción restaurará los parametros (predeterminados) de fábrica del router. Se recomienda que realice una copia de seguridad de sus parametros antes de restaurar todos los parametros predeterminados. Para restaurar los parametros predeterminados de fábrica, haga clic en el botón "Restaurar configuración predeterminada" de la parte inferior.';
ufy3='ADVERTENCIA: ¡Se perderán todos sus parametros!\n¿Está seguro de que desea hacerlo?';
ufy4='El restaurar los parametros predeterminados puede durar hasta 60 segundos. No apague o desconecte el router durante este proceso.';
ufy5='No restaurará la configuración predeterminada de fábrica. ¡No se perderá ningún ajuste!';
ufy='Restaurar configuración predeterminada';
ufe1='Utilidades > Actualización del firmware';
ufe2='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras y soluciones para los problemas que puedan haber existido. Haga clic en el vínculo de la parte inferior para comprobar si existe una nueva actualización de firmware disponible para este router.';
ufe3='NOTA: Realice copias de seguridad de sus parametros actuales antes de actualizar la versión del firmware. Haga clic aquí para ir a la página de Guardar/Copia de seguridad de parametros actuales.';
ufe4='Haga clic ';
ufe5='aquí para ir a la página de Guardar/Copia de seguridad de parametros actuales.';
ufe6='Buscar una nueva versión del firmware >';
ufe7='Comprobar Firmware'; 
ufe8='Actualización del firmware >';
Update='Actualizar';
ufe9='Especifique la ubicación del archivo de actualizacion. Introduzca la ruta y el nombre del archivo o haga clic en "Examinar" para buscar la ubicación del archivo';
ufe10='¿Está seguro de que desea continuar con la actualización?';
ufe11='Al final de la actualización, es posible que el router no responda a los comandos durante un plazo de un minuto. Esto es normal. No apague ni reinicie el router durante ese tiempo.';
um1='Esta pantalla le permite gestionar diferentes parámetros del router y llevar a cabo determinadas funciones de administrador.';
um2='Control parental';
um3='El Control parental de Belkin le protege a usted y sus hijos de contenidos no deseables de Internet.'; 
um4='El Control parental de Belkin es el filtro que va a instalar. Ahora podrá navegar por la red con sus hijos incluso cuando no esté con ellos.<br>&nbsp;';
um5='Reiniciar el router';
um6='Algunas veces es posible que sea necesario reiniciar el router en caso de que comience a funcionar mal. Al reiniciar el router no se borrará ninguno de sus parametros de configuración.'; 
um7='Restaurar la configuración predeterminada de fábrica';
um8='El empleo de esta opción restaurará los parametros (predeterminados) de fábrica del router. Se recomienda que realice una copia de seguridad de sus parametros antes de restaurar todos los parametros predeterminados.';
um9='Guardar/Copia de seguridad de parametros actuales';
um10='Puede guardar su configuración actual utilizando esta propiedad. El guardar su configuración le permitirá restaurarla posteriormente, en caso de que sus parametros se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuración actual antes de llevar a cabo una actualización del firmware.';
um11='Restaurar parametros guardados anteriormente';
um12='Esta opción le permitirá restaurar una configuración guardada anteriormente.';
um13='Actualización del firmware';
um14='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras de las propiedades y soluciones para los problemas que puedan haber existido.';
um15='Parametros del sistema';
um16='En la página de parametros del sistema podrá introducir una nueva contraseña de administrador';
um17=', establecer la zona horaria, activar la gestión a distancia y encender y apagar la función NAT';
um18=' del router.';
upc1='Utilidades > Control parental';
upc2='El Control parental de Belkin le protege a usted y a sus hijos o empleados de contenidos no deseables de Internet. El Control parental viene ya preconfigurado para bloquear numerosos tipos de contenidos web, pero puede ser personalizado para ser más o menos restrictivo. Cualquier página web puede ser configurada para estar bien permanentemente bloqueada o permanentemente permitida.';
upc3='Su suscripción al Control parental está ';
upc4='DESACTIVADA'; 
upc5='NO ACTIVADA';
upc6='ACTIVADA';
upc7='Para detener los mensajes de inscripción al CONTROL PARENTAL, haga clic aquí:';
upc8='HA CADUCADO';
upc9='Your subscription will expire in ';
days='días';
upc10='Información sobre la cuenta';
Advanced='Avanzado';
Apply='Aplicar';
upc11='Actualizar información sobre la cuenta';
upc12='Informe';
upc13='Actualmente está ';
not='no';
upc15='Haga clic aquí para ver un ejemplo de cómo funciona el informe.';
upc16='Ejemplo de informe';
upc17='Haga clic aquí para suscribirse a la opción de informe.';
upc18='Suscribirse ahora';
upc19='Haga clic aquí para ver su informe.';
upc20='Ver informe';
upc21='Estado del Control parental';
upc22='ENCIENDE y APAGA el filtro del Control parental.';
upc23='El filtro web está actualmente ';
upc24='Notificación por correo electrónico';
upc25='Notifíquenme por correo electrónico si el Control parental está anulado.';
upc26='El correo electrónico está actualmente ';
ON='ENCENDIDO';
OFF='APAGADO';
pwd='Contraseña';
upc27='Modificar política';
upc28='Para ver o modificar las políticas por defecto para su Control parental, haga clic aquí';
Modify='Modificar';
upc29='Inscripción al Control parental';
upc30='Si desea inscribirse para utilizar la función de Control parental de Belkin, pulse el botón siguiente.'; 
upc31='Actualmente <b>NO</b> está suscrito al servicio del Control parental.';  
upc32='Renovación del Control parental';
upc33='Se acerca la fecha de finalización de su suscripción. Haga clic para renovar su suscripción.';
upc34='Renovar ahora';
upc35='url vacío';
upa1='Utilidades e Información sobre la cuenta del Control parental';
upa2="Puede modificar aquí su información de usuario del Control parental, como la dirección de correo electrónico para las notificaciones del Control parental y la contraseña de administrador del Control parental.";
upa3='Modificar la dirección de correo electrónico para las notificaciones del Control parental.';
upa5='Introduzca su nueva dirección de correo electrónico'; 
upa6='Introduzca otra vez su nueva dirección de correo electrónico';
upa7='Modificar la contraseña de administrador del Control parental';
upa8='Introduzca su nueva contraseña';
upa9='Introduzca otra vez su nueva contraseña';
upa14='La dirección de correo electrónico no se puede dejar como nula';
Change='Cambiar';
Stop='Aplicar';
upad1='Utilidades y Parametros avanzados del Control parental';
upad2="El Control parental de Belkin requiere una respuesta de valoración de Internet de Cerberian (nuestro socio) para cada página web solicitada. Normalmente, el tiempo de respuesta es inferior a 1 segundo, lo que no supone prácticamente ningún retraso. No obstante, si solicita una página poco frecuente que no se encuentre en su base de datos, procederán rápidamente a su valoración, lo que puede tardar varios segundos dependiendo de la rapidez con que se cargue la página. Si el tiempo de respuesta es más lento que el intervalo de tiempo inferior, los CONTROLES PARENTALES pueden ser configurados para: Permitir todas las páginas para las que se supere el límite de tiempo, o Bloquear todas las páginas para las que se supere el límite de tiempo.";
Timeout='Límite de tiempo';
upad3='Límite de tiempo tras la espera';
upad4='segundos para una respuesta';
upad5='Comportamiento por defecto cuando se supera el límite de tiempo';
upad6='Dependiendo el comportamiento seleccionado para el caso de superación del límite de tiempo, el router bloqueará/permitirá la navegación.';
upad7='Permitir todas las páginas para las que se supere el límite de tiempo.';
upad8='Bloquear todas las páginas para las que se supere el límite de tiempo.';
upc1='Utilidades > Actualizar la cuenta del Control parental';
upr2='Esta función tan sólo es necesaria en el caso del que la información de su suscripción al CONTROL PARENTAL no sea correcta.Al pulsar este botón, el router descargará/actualizará toda la información sobre la cuenta de la que dispone Belkin.Para actualizar la información sobre la cuenta de su router sobre el CONTROL PARENTAL, haga clic en Actualizar:';
uprev1='Utilidades > Restaurar parametros anteriores';
uprev2='Esta opción le permitirá restaurar una configuración guardada anteriormente.';  
Restore='Restaurar';
uprev3='Introduzca el nombre del archivo que contiene la copia de seguridad de los parametros.';
uprev4='¿Desea continuar y restaurar los parametros?';
uprev5='Tras restabler los parametros, es posible que el router no responda\n a los comandos durante un plazo de un minuto.\n\nEsto es normal. No apague el router durante este tiempo.';
ur1='Utilidades > Reiniciar el router';
ur2='Algunas veces es posible que sea necesario reiniciar el route en caso de que comience a funcionar mal. Al reiniciar el router no se borrará ninguno de sus parametros de configuración. Haga clic en el botón de "Reiniciar router" de la parte inferior para reiniciar el router.';
ur3='Reiniciar el router';
ur4='¿Está seguro de que desea reiniciar el Router? El reinicio del Router no afectará a su configuración.';
ur5='Espere 60 segundos hasta que se reinicie el  router. No apague el  router antes de que se haya completado el reinicio.';
usave1='Utilidades > Guardar/Copia de seguridad de parametros actuales';
usave2='Puede guardar su configuración actual utilizando esta función. Guardar su configuración le permitirá restaurarla posteriormente en caso de que sus parametros se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuración actual antes de llevar a cabo una actualización del firmware.'; 
Save='Guardar';
usys1='Utilidades > Parametros del sistema';
usys2='Contraseña de administrador:'; 
usys3='El router efectúa el envío SIN necesidad de introducir contraseña. Si desea añadir una contraseña para disfrutar de una mayor seguridad, puede establecerla aquí.';
usys4='Introduzca la contraseña actual';  
usys5='Introduzca la nueva contraseña';  
usys6='Confirme la nueva contraseña';  
usys7='Tiempo límite de acceso';
usys8='(1-99 minutos)'; 
usys9='Hora y Zona Horaria: '; 
January='Enero'; February='Febrero'; March='Marzo'; April='April'; May='Mayo'; June='Junio'; July='Julio'; August='Agosto'; September='Septiembre'; October='Octubre'; November='Noviembre'; December='Diciembre';
usys10='Establezca su zona horaria. Si reside en una zona que se realiza el cambio de hora según el horario de verano, coloque una marca en este recuadro.';
usys11='Diferencia de zonas horarias';
usys12='(GMT-12:00) Enewetak, Kwajalein';
usys13='(GMT-11:00) Isla Midway, Samoa';
usys14='(GMT-10:00) Hawái';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Hora del Pacífico (EE.UU. y Canadá); Tijuana';
usys17='(GMT-07:00) Arizona';
usys18='(GMT-07:00) Hora de las montañas (EE.UU. y Canadá)';
usys19='(GMT-06:00) Hora central (EE.UU. y Canadá)';
usys20='(GMT-06:00) Ciudad de México, Tegucigalpa';
usys21='(GMT-06:00) Saskatchewan';
usys22='(GMT-05:00) Bogotá, Lima, Quito';
usys23='(GMT-05:00) Hora del Este (EE.UU. y Canadá)';
usys24='(GMT-05:00) Indiana (Este)';
usys25='(GMT-04:00) Hora del Atlántico (Canadá)';
usys26='(GMT-04:00) Caracas, La Paz';
usys27='(GMT-04:00) Santiago';
usys28='(GMT-03:00) Terranova';
usys29='(GMT-03:00) Brasilia';
usys30='(GMT-03:00) Buenos Aires, Georgetown';
usys31='(GMT-02:00) Atlántico medio';
usys32='(GMT-01:00) Islas Azores, Cabo Verde';
usys33='(GMT) Casablanca, Monrovia';
usys34='(GMT) Hora media de Greenwich: Dublín, Edimburgo';
usys35='(GMT) Hora media de Greenwich: Lisboa, Londres';
usys36='(GMT+01:00) Ámsterdam, Berlín, Berna, Roma';
usys37='(GMT+01:00) Estocolmo, Viena, Belgrado';
usys38='(GMT+01:00) Bratislava, Budapest, Liubliana';
usys39='(GMT+01:00) Praga, Bruselas, Copenhague, Madrid';
usys40='(GMT+01:00) París, Vilnius, Sarajevo, Skopje';
usys41='(GMT+01:00) Sofía, Varsovia, Zagreb';
usys42='(GMT+02:00) Atenas, Estambul, Minsk';
usys43='(GMT+02:00) Bucarest';
usys44='(GMT+02:00) El Cairo';
usys45='(GMT+02:00) Harare, Pretoria';
usys46='(GMT+02:00) Helsinki, Riga, Tallín';
usys47='(GMT+02:00) Israel';
usys48='(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad';
usys49='(GMT+03:00) Moscú, San Petersburgo';
usys50='(GMT+03:00) Teherán';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tiflis, Kazán';
usys52='(GMT+04:00) Volgogrado, Kabul';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterimburgo';
usys54='(GMT+06:00) Almaty, Dhaka';
usys55='(GMT+07:00) Bangkok, Yakarta, Hanoi';
usys56='(GMT+08:00) Pekín, Chongqing, Urumqi';
usys57='(GMT+08:00) Hong Kong, Perth, Singapur, Taipei';
usys58='(GMT+09:00) Tokio, Osaka, Saporo, Yakutsk';
usys59='(GMT+10:00) Brisbane';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok';
usys62='(GMT+10:00) Hobart';
usys63='(GMT+11:00) Magadán, Islas Salomón, Nueva Caledonia';
usys64='(GMT+12:00) Fiji, Kamchatka, Islas Marshall';
usys65='(GMT+12:00) Wellington, Auckland';
usys66='Cambio de hora según el horario de verano';
usys67='Cambiar la hora automáticamente según el horario de verano';
usys68='Gestión a distancia:';    
AF='¡PROPIEDAD AVANZADA!';
usys69='La gestión a distancia le permite efectuar cambios en los parametros de su router desde cualquier parte a través de Internet. Antes de activar esta función,';
usys70='ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR.';
usys71='Cualquier dirección IP puede administrar el router remotamente.';  
usys72='Únicamente esta dirección IP puede administrar el router remotamente';  
usys73='Activación de NAT:';    
usys74='Le permite desactivar la propiedad de Traducción de direcciones de red. En prácticamente NINGÚN caso debería desactivar esta función.';
usys75='Activar / Desactivar NAT';
usys76='Activación de UPNP:';   
usys77='Le permite activar o desactivar la propiedad UPNP del Router. Si emplea aplicaciones compatibles con UPnP, la activación del UPnP permitirá que dichas aplicaciones configuren automáticamente el router.';
usys78='UPNP Enable / Disable';
usys79='Activar la actualización automática del firmware:';
usys80='Le permite comprobar automáticamente la disponibilidad de actualizaciones de firmware para su router.';
usys81='Activar / Desactivar la actualización automática del firmware';
usys82='La contraseña actual no es válida';
usys83='La nueva contraseña y la repetición de la nueva contraseña no coinciden';
usys84='Intervalo de tiempo límite de acceso: 1-99';
usys85='La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 12 y la longitud mínima de la contraseña es 3';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='Se recomienda que establezca su contraseña de administrador.';
usys88='Servidor NTP primario';
usys89='Servidor NTP de respaldo';
usys90='192.43.244.18-América del Norte';
usys91='132.163.4.102-América del Norte';
usys92='192.5.41.41-América del Norte';
usys93='192.5.41.209-América del Norte';
usys94='207.200.81.113-América del Norte';
usys95='208.184.49.9-América del Norte';
usys96='129.132.2.21-Europa';
usys97='130.149.17.8-Europa';
usys98='137.189.8.174-Pacífico asiático';
usys99='Puerto de acceso remoto';
usysipm='Bien no ha introducido todos los números de la IP, o bien algunos de los números introducidos es incorrecto. Los números deben encontrarse entre 0 y 255';
usysb1='El router efectúa el envío SIN necesidad de introducir contraseña. Si desea añadir una contraseña para disfrutar de una mayor seguridad, puede establecerla aquí.';
vjs1="Dirección IP no válida, demasiado larga, compruebe de nuevo!";
vjs2="Dirección IP no válida, falta '.' , compruebe de nuevo!";
vjs3="Dirección IP no válida, faltan números entre '.', compruebe de nuevo!";
vjs4="Dirección IP no válida, sobre '.' , compruebe de nuevo!"
vjs5="Dirección IP no válida, los números entre '.' son demasiado grandes, compruebe de nuevo!";
vm1='Uno de los caracteres no es válido';
vm2=' en la posición';
vm3='Deberá ser ';
vjs6='Formato del año no válido, introdúzcalo como, p. ej., 2002';
vm4='Número no válido'; 
vjs8='No válido, deberá estar entre 1970 y 2037';
vjs9='Formato del mes no válido, introdúzcalo como, p. ej., 01... 12';
vjs10='Introduzca primero al año y el mes';
vjs11='Formato del día no válido, introdúzcalo como, p. ej., 01... 31, es posible que algún mes sólo tenga 00... 28';
vjs12='Formato de la hora no válido, introdúzcalo como, p. ej. 00... 23';
vjs13='Formato de los minutos no válido, introdúzcalo como, p. ej. 00... 59';
vjs14='MTU no válido, deberá estar entre 576 y 1492';
vjs15='MRU no válido, deberá estar entre 128 y 65535';
vjs16="Ip no válida:";  vjs161=" no en ";   vjs162=" máscara de red";
vjs17='Ha introducido dos contraseñas distintas, compruebe de nuevo ambas!';
vjs18='Introduzca el número del puerto de inicio.';
vjs19='El número del puerto de inicio deberá ser inferior al del número del puerto de finalización.';
vjs20='Número de puerto no válido, los números de puerto deberán ser enteros positivos';
vjs21='Longitud no válida';
vjs22='Formato no válido en la posición'; vjs221='! Deberá ser:';
vjs23='Dirección MAC no válida, es una dirección de emisión.';
vjs24='Dirección MAC no válida, es una dirección nula.';
vjs25='Dirección MAC no válida, es una dirección multicast.';
vjs26='Dirección IP de inicio y final no válidas, el IP final deberá ser superior al IP de inicio';
vjs27='¡Número no válido! Deberá estar entre 1 y 65535';
vjs28='Formato de máscara de red no válido.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Dirección Ip no válida, el último número no puede ser 0 ni 255';
vjs31='Dirección Ip de Lan no válida, el primer número no puede ser 127';
vjs32='Dirección Ip de Lan no válida, no puede ser 0.0.0.0';
vjs33='Dirección Ip de Lan no válida, deberá ser inferior a 224.0.0.0';
vjs34='El intevalo válido es';
vp1='Esta página web está bloqueada por el CONTROL PARENTAL';
vp2=' está prohibida por el CONTROL PARENTAL y clasificada como: ';
vp3='Si está en desacuerdo con la valoración y desea que la página sea valorada de nuevo, haga clic en Desacuerdo:';
vp4='Si desea modificar la política del CONTROL PARENTAL, haga clic en Cambiar:';
vp5='Para anular su política (sólo este ordenador) durante 1 hora, introduzca la contraseña y haga clic en Anular:';
Disagree='Desacuerdo';
Change='Cambiar';
Override='Anular';
wc1='WAN > Tipo de conexión';
wc2='Seleccione su tipo de conexión:'; 
wc3='Dinámica'; 
wc4='El tipo de conexión Dinámica es la más habitual. Si emplea un módem por cable, entonces dispondrá probablemente de una conexión dinámica. Si tiene un módem por cable o no está seguro de su tipo de conexión, emplee ésta.';  
wc5='Estática'; 
wc6='El tipo de conexión de dirección IP Estática es menos común que otros tipos de conexión. Utilice esta selección sólo si su ISP le ha proporcionado una dirección IP que no cambia nunca.';  
wc7='PPPoE'; 
wc8='Si emplea un módem DSL y/o su ISP le ha proporcionado una Nombre de Usuario y una Contraseña, entonces su tipo de conexión es PPPoE. Utilice este tipo de conexión.';  
wc9='PPTP'; 
wc10='[Sólo para países europeos]. Este tipo de conexión es más habitual es países europeos. Si su ISP le ha indicado específicamente que haga uso del PPTP y le ha proporcionado la información apropiada sobre el mismo, utilice esta opción.'; 
wc11='Telstra BigPond'; 
wc12='[Australia solamente] Los usuarios de cable o DSL de Telstra BigPond utilizarán esta opción para configurar la conexión.'; 
Next='Siguiente >';
wds1='WAN > DNS';
wds2='En el caso de que su ISP le haya proporcionado una dirección DNS específica, introdúzcala en esta ventana y haga clic en "Aplicar cambios".'; 
wds3='Automáticamente desde el ISP'; 
wds4='Dirección DNS';   
wds5='Dirección DNS secundaria';   
wds6='DNS = Servidor de nombres de dominio. Un servidor ubicado en Internet que convierte los URL (vínculos de recursos universales) como, por ejemplo, www.belkin.com en direcciones IP.';
wds7='Deberá introducir los parametros DNS que le ha proporcionado su ISP en caso de no emplear la función de DNS Automático';
wdy1='WAN > Tipo de conexión > IP dinámico';
wdy2='Para introducir los parametros de su IP Dinámica, introduzca su información a continuación y haga clic en "Aplicar cambios".';
wdy3='Nombre del host';  
wdy4='Nombre de Host = un nombre que algunos Proveedores de servicios de Internet requieren para conectar con su sistema.';  
wdy5='Modificar la dirección MAC de WAN'; 
wdy6="Nombre del host no válido: ~!##$%^&*()=+{}[]|'\":;?/.<>";
wmc1='WAN > Dirección MAC';
wmc2='Algunos ISP le requieren que clone (copie) la dirección MAC de la tarjeta de red de su ordenador en el router. Si no está seguro, clone simplemente la dirección MAC del ordenador que se encontraba orginariamente conectado al módem antes de instalar el router. La clonación de la dirección MAC no causará ningún tipo de problemas en su red.';
wmc3='Dirección Mac de Wan'; 
wmc4='Clonar la dirección MAC del ordenador';  
wmc5='Clonar';
wm1='Internet/WAN';
WAN='WAN';
wm2='La pestaña Internet/WAN es donde configurará su router para conectar con su proveedor de servicios de Internet (ISP, Internet Service Provider). El router es capaz de conectarse a prácticamente cualquier sistema de Proveedor de servicios de Internet siempre que hayan sido configurados correctamente los parametros del router para su tipo de conexión al ISP. Para configurar el router para la conexión con su ISP, haga clic en "Tipo de conexión" en la pestaña Internet/WAN de la parte izquierda de la pantalla.';
wm3='Tipos de conexión admitidos:';
wm4='<b>Dinámica:</b> incluye los ISP que requieren un nombre de host y los ISP que establecen la conexión con una dirección MAC específica.';
wm5='<b>Dirección IP estática:</b> el router admite una conexión con un ISP que asigna una dirección IP estática.'; 
wm6='<b>PPPoE:</b> el ruoter admite un tipo de conexión dinámica que requiere un acceso de PPPoE para la autenticación.'; 
wm7='<b>PPTP:</b> Para usuarios europeos SOLAMENTE. El router admite conexiones con ISP europeos que se conectan a través de PPTP.';
wm8='<b>Telstra BigPond:</b>';
wm9=' Usuarios australianos SOLAMENTE. El router admite la conexión con Telstra BigPond.'; 
wpe1='WAN > Tipo de conexión> PPPoE';
wpe2='Para introducir los parametros de su PPPoE, introduzca su información a continuación y haga clic en "Aplicar cambios".';
wpe3='Nombre de usuario';   
wpe4='Volver a introducir contraseña';   
wpe5='Nombre de Servicio (Opcional)';    
wpe6='MTU (576-1492)';    
wpe7='No realice cambios en el ajuste MTU a menos que su ISP requiera específicamente un ajuste diferente de 1432.';
wpe8='Desconectar después de';
wpe9=' minutos sin actividad.';
idlerangerro='Los números que ha introducido para el tiempo de inactividad no son válidos.\n El número debe ser un entero entre 1 y 99';
wpe10='Uno de los caracteres no es válido: <>&';
pm='Su servicio no ha podido verificar la contraseña que ha introducido. Confirme que haya introducido su contraseña correctamente.';
wpe11='Valor MTU no válido';
wpe12='Introduzca su nombre de usuario';
wpp1='WAN > Tipo de conexión > PPTP';
wpp2='Cuenta PPTP';    
wpp3='Contraseña PPTP';    
wpp4='Volver a introducir contraseña';   
wpp5='Nombre del host';   
wpp6='Dirección IP de servicio';  
wpp7='Mi dirección IP';  
wpp8='Mi máscara de subred';  
wpp9='ID de conexión (opcional)';    
wpp10='Desconectar después de';
wpp11=' minutos sin actividad.';
wpp12='Haga clic aquí para introducir sus parametros DNS';
wpp13='Introduzca su cuenta PPTP';
wpp14='Introduzca de nuevo su contraseña!';
wpp15='Introduzca su contraseña!';
ws1='WAN > Tipo de conexión > IP estático';
ws2='Para introducir los parametros de su IP Estática, introduzca su información a continuación y haga clic en "Aplicar cambios".';
ws3='Dirección IP';  
ws4='Máscara de subred';   
ws5='Puerta de enlace predeterminada del ISP';   
ws6='¿Suministra mi ISP más de una dirección IP estática?';  
ws7='Haga clic aquí para introducir sus parametros DNS';  
dm='Bien no ha introducido todos los números DNS, o bien alguno de los números introducidos es incorrecto. Los números deberán ser o encontrarse entre 0 y 255';
sm='Los números de máscara de subred que ha introducido no son válidos.';
ws8='Por favor introduzca/valide sus parametros de dirección DNS en la siguiente pantalla.';
wsc1='Alias IP Address';  
im='La lista de direcciones IP con alias está llena. No es posible crear reglas adicionales.';
wt1='WAN > Tipo de conexión > Telstra BigPond';
wt2='Si su servicio de Internet es suministrado por Telstra BigPond en Australia, necesitará introducir su información a continuación. Esta información es suministrada por Telstra BigPond.';
wt3='Seleccione su Estado';
wt4='El usuario decide el servidor de acceso manualmente'; 
wt5='Servidor de acceso'; 
Logout='Salir';
wt6='Introduzca el IP de su servidor o seleccione su estado del menú.';
wla1='Inalámbrico > Utilizar como Punto de acceso';
wlad1='El Router puede ser configurado para actuar estrictamente como un Punto de acceso, anulando las funciones de enrutamiento y firewall. Para que esto suceda, seleccione "Activar" e introduzca la dirección IP que desee que tenga el Punto de acceso.';
wlad2='Activar / Desactivar';
wlae1='Especificar dirección IP';  
wlae2='Máscara de subred';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Los canales inalámbricos deberán coincidir entre el Router y el PA.<br>'+
      '2) Los parametros de seguridad (WEP) deberán coincidir entre el Router y el PA.<br>'+
      '3) Si está activado el filtro de direcciones MAC, el usuario deberá asegurarse de añadir las direcciones MAC de WLAN del Router/PA con el fin de permitir la comunicación entre los mismos.<br>';
wlc1='Inalámbrico > Canal y SSID';
wlc2='Para efectuar cambios en los parametros inalámbricos del router, realice los cambios aquí. Haga clic en "Aplicar cambios" para guardar los parametros.';
wlc3='Canal inalámbrico';
wlc4='SSID';  
wlc5='Modo Inalámbrico'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Emitir SSID';  
wlc10='Turbo Mode'; 
wlc11='Al activar el modo Turbo se permite al Router o Punto de acceso utilizar "Frame Bursting" (envío de ráfagas de tramas) para obtener el máximo rendimiento del Router o Punto de acceso para clientes 802.11g. El modo Turbo funcionará con clientes 802.11g que soporten el Modo Turbo. Los Clientes 802.11g de Belkin que empleen el controlador más actualizado soportarán el Modo Turbo. Los clientes que no soporten el Modo Turbo operarán normalmente cuando esté activado el Modo Turbo.';
wlc12='Modo protegido';
wlc13="NOTA: En la mayoría de las situaciones, el mejor rendimiento se alcanza con el Modo protegido DESACTIVADO. Si está trabajando en un entorno de tráfico 802.11b INTENSO o con interferencias, el mejor rendimiento se conseguirá con el Modo protegido encendido ACTIVADO.";
wlc14='Canal actual';
wle1='Inalámbrica > Seguridad';
wle2='Modo de seguridad';
wle3='WPA-PSK (sin servidor)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="Aquí podrá establecer sus parametros de seguridad inalámbrica/encriptación. Se deberá activar la seguridad para garantizar la máxima seguridad inalámbrica. El WPA (Acceso inalámbrico protegido) proporciona cambios dinámicos de clave y constituye la mejor solución de seguridad. En entorno inalámbricos, donde no todos los dispositivos admiten WPA, se deberá emplear WEP (Privacidad equivalente a la del cable).";
wle8='(13 pares de dígitos hexadecimales)';  
wle9='NOTA:';
wle10='Para generar automáticamente pares hexadecimales utilizando una Frase de paso, seleccione el recuadro de la izquierda e introduzca en el la frase de paso.';
PP='Frase de paso'; 
generate='Generar';
errm='Introduzca una Frase de paso';
keym='La clave no está completa.';
wle11='Clave 1';  
wle12='Clave 2'; 
wle13='Clave 3'; 
wle14='Clave 4';   
wle15='(pares de dígitos hexadecimales)'; 
wle16='WPA/WPA2 (con servidor)';
wle17='Ajuste avanzado - Acceso inalámbrico protegido empleando un servidor para distribuir claves a los clientes: Esta opción requiere que esté funcionando en la red un servidor Radius.';
keym1='La clave no está completa.';
keym2=' no es válida, por favor, corríjala primero!';
wlm1='Inalámbrico';
wlm2='En esta pestaña podrá regular los parametros de la sección inalámbrica del router.';
wlm3='Canal y SSID';
wlm4='Realice las adaptaciones del canal inalámbrico y del SSID (nombre de red inalámbrica)';
wlm5='Seguridad';
wlm6='Modifique los parametros de seguridad inalámbrica como parametros WPA o parametros WEP. ';
wlm7='UTILIZAR como Punto de acceso';
wlm8='Establecer el modo de funcionamiento del Router en modo PA ';
wlm9='Especificar dirección IP';
wlm10='Especificar dirección IP del PA.';
wlm11='Control de direcciones MAC'
wlm12='Establezca una lista de clientes a los que desee permitir o denegar el acceso a la red inalámbrica.';
wlm13='Puente inalámbrico';
wlm14='Le permite configurar modos de puenteo WDS.';
ww8='Introduzca el número del puerto Radius.';
ww9='El número de puerto Radius deberá encontrarse entre 1 y 65535';
ww10='Introduzca la clave Radius.';
ww11='El intervalo de repetición de clave deberá ser un número';
ww12='El intervalo de repetición de clave deberá ser superior a 60 segundos';
ww13='Autenticación';
ww1='WPA(con servidor) ';
ww2='Ajuste avanzado - Acceso inalámbrico protegido empleando un servidor para distribuir claves a los clientes: Esta opción requiere que esté funcionando en la red un servidor Radius.';
ww3='Técnica de encriptación';
ww4='Servidor Radius';
ww5='Puerto Radius';
wwp6='Introduzca la clave precompartida (PSK)';
wwp7='La longitud de la clave precompartida deberá ser de 8 a 63 o 64 hex.';
seconds='(segundos)';
wwp6='Input pre-shared key (PSK)';
wwp7='The length of pre-shared key should be 8 to 63 or 64 Hex';
wwp1='Default is TKIP';
wwp2='Clave precompartida (PSK)';
wwp3='WPA-PSK (sin servidor)';
wwp4='Acceso inalámbrico protegido con una clave precompartida: La clave es una contraseña, con forma de palabra, frase o serie de números y letras. La clave deberá tener entre <b>8</b> y <b>63</b> caracteres de longitud y puede incluir espacios y símbolos, sólo <b>64</b> dígitos hexadecimales (de 0 a 9 y de A a F). Cada cliente que se conecte a la red deberá emplear la misma clave (clave precompartida).';
wwp5='Ocultar PSK';
wlb1='Inalámbrica > Puente inalámbrico';
wlb2='El Puenteo inalámbrico o Sistema de distribución inalámbrica (WDS) se emplea para conectar Routers inalámbricos con Puntos de acceso inalámbricos para ampliar una red.';
wlb3='Activar puenteo inalámbrico.';
wlb4='(al activar esta propiedad se permite a otros Puntos de acceso conectar con este Punto de acceso.)';
wlb5='Por defecto está activada';
wlb6='Activa SÓLO Puntos de acceso específicos para conectar.';
wlb7="(Introducir dirección MAC inalámbrica del PA al que conectar. Si este elemento no está marcado, podrá conectar cualquier PA. Nota: al conectar los puntos de acceso, al menos se necesitará uno para llamar a la dirección MAC de los demás. Consejo: la dirección MAC se encuentra utilizando una inspección de la ubicación en la tarjeta del cliente inalámbrico.)";
wlb8='Desactivar la capacidad de los CLIENTES inalámbricos para conectarse.';
wlb9='(Esta propiedad sólo deberá ser utilizada cuando el PA se emplee exclusivamente para conectarse a otros PA de forma inalámbrica.)';
wlb10='invalid';
BSSID='BSSID';
wlbss1='Inspección de la ubicación';
wlbss2='Tipo de red';
wlbss3='Encriptación';
wlbss4='Seleccionar';
wlbss5='No se ha encontrado BSSID disponible.'; 
wlbss6='Los 4 campos están llenos, elimine uno de ellos antes de seleccionar otro nuevo';
wlq1='QoS (Calidad de servicio) Configuración';
wlq2='QoS establece la prioridad entre los datos importantes de su red como el contenido multimedia y de voz por IP (VoIP) para que otros datos que se están enviando por la red no interfieran. Basada en 802.11e, esta función se puede activar o desactivar y puede elegir el modo de reconocimiento que quiera utilizar. Si quiere transmitir contenido multimedia o utilizar VoIP en su red, la función QoS debe activarse.<br>'; 
wlq3='Conmutador QoS'; 
wlq4='Le permite activar o desactivar QoS.<br>'; 
wlac1='Modo RCN'; 
wlac2=' Existen dos modos de reconocimiento (RCN) que pueden utilizarse para obtener el mejor rendimiento multimedia en su red: RCN de ráfagas y RCN inmediato. <br><br>'+
 'El RCN inmediato es el ajuste predeterminado (de fábrica) y se recomienda para el funcionamiento normal de la red. El cambio del modo RCN de RCN inmediato a RCN de ráfagas puede afectar a la tasa de transferencia de largo alcance. Utilice el modo RCN inmediato si lo más importante para usted es el rendimiento de largo alcance de su red. <br><br>'+
'El modo RCN de ráfagas reducirá el tiempo de procesamiento y no se reconocerán todos los paquetes que se envían a través de la red. Cuando existe muy buena conexión entre el Router y el cliente, el RCN a ráfagas puede lograr un aumento de la tasa de transferencia. Si una aplicación, como cuando se transmiten archivos de vídeo de alta definición, exige el máximo ancho de banda, utilice el modo RCN de ráfagas. Recuerde que el rendimiento de largo alcance puede verse afectado cuando se utiliza el modo RCN de ráfagas. <br>';
wmac1='Ajuste de Control de direcciones MAC'; 
wmac2=' El filtro de direcciones MAC es una potente característica de seguridad que le permite especificar qué ordenadores están permitidos en la red. Nota: Esta lista solo se aplica a los ordenadores inalámbricos. Cualquier ordenador que trate de acceder a la red y no esté especificado en la lista de filtrado no obtendrá permiso para acceder. Cuando active esta propiedad, deberá introducir la dirección MAC de cada cliente (ordenador) de su red para permitir el acceso a la misma de cada uno de ellos. La característica "Bloquear" le permite encender y apagar el acceso a la red fácilmente para cualquier ordenador, sin tener que añadir y eliminar la dirección MAC del ordenador de la lista.<br>'+
'Configurar una lista de acceso permitido <br>'+
 '1.Seleccione el botón "Permitir" (1) para empezar a configurar una lista de ordenadores con acceso para conectar a la red inalámbrica.<br>'+
 '2. A continuación, en el campo "Dirección MAC", que está vacío (3), introduzca la dirección MAC del ordenador inalámbrico al que desea conceder acceso a la red inalámbrica, después haga clic en "Añadir" (4).<br>'+
 '3. Repita el proceso hasta que haya introducido todos los ordenadores que desee añadir.<br>'+
 '4. Haga clic en "Aplicar cambios" (5) para finalizar.<br><br>'+
'Configurar una lista de acceso denegado <br>'+
'La lista "Denegar acceso" le permite especificar a qué ordenadores quiere DENEGAR el acceso a la red. Se denegará el acceso a la red inalámbrica a todos los ordenadores que se encuentren en la lista. El resto podrá acceder.<br>'+
 '1.Seleccione el botón "Denegar" (2) para empezar a configurar una lista de ordenadores con acceso denegado a la red inalámbrica.'+
 '2. A continuación, en el campo "Dirección MAC", que está vacío (3), introduzca la dirección MAC del ordenador inalámbrico al que desea denegar el acceso a la red inalámbrica, después haga clic en "Añadir" (4).<br>'+
 '3. Repita el proceso hasta que haya introducido todos los ordenadores a los que desee denegar el acceso.<br>'+
 '4. Haga clic en "Aplicar cambios" (5) para finalizar.<br>';
wlmc1='Inalámbrico > Control de direcciones MAC';
wlmc2='El Control de direcciones MAC es la capacidad de establecer una lista de clientes a los que desee permitir o denegar el acceso a la red inalámbrica.';
Allow='Permitir';   Deny='Denegar';   //Disable='Desactivar';
wlmc7='Seleccione primero si desea permitir o denegar el acceso a lista de direcciones MAC';
wlmc6='No\ puede introducir más de 16 direcciones MAC';
wlmc3="Dirección MAC no válida ";
wlmc4='por favor, corríjala primero!';
wlmc5='La dirección MAC correcta deberá ser xx:xx:xx:xx:xx:xx en donde x está entre 0-9 y a-f!';
ENTRY_FULL	= 'Todas las entradas están llenas.\nElimine algunas entradas y pruebe de nuevo.';
CLEAR_CONFIRM= '¿Desea borrar la entrada? ';
CLEAR_ALL_CONFIRM = '¿Desea borrar todas las entradas? ';
ERR_INTERNAL	= 'Error interno: Compruebe el funcionamiento de javascrip --';
g1='La "Dirección IP" es la dirección IP interna del Router. Para acceder a la interfaz de configuración avanzada '+ 
'introduzca esta dirección IP en la barra de direcciones de su navegador. Esta dirección puede '+  
'modificarse si es necesario. Para modificar la dirección IP, introduzca la nueva dirección IP y haga clic en "Aplicar '+  
'Cambios". La dirección IP que elija debería ser una IP no enrutable. Ejemplos de dirección no enrutable '+  
'IP son: ';
g2='192.168.x.x (donde x es una cifra entre el 0 y el 255.)<br>';
g3='10.x.x.x (donde x es una cifra entre el 0 y el 255).<br>';
g4='172.y.x.x (donde x es una cifra entre 16 y 31 y x es una cifra entre 0 y 255).<br>';
g5='No es necesario modificar la máscara de subred'+
'. Es posible modificar la máscara de subred en caso necesario. Únicamente realice cambios a la máscara '+
'de subred si tiene una razón específica para hacerlo.<br>';
g6='DNS es un acrónimo de Servidor de nombres de dominio. Un Servidor de nombres de dominio es un servidor situado en '+ 
 'Internet que convierte los URL (Localizador de recursos universales), como www.belkin.com, en direcciones IP'+
'. Muchos ISP no precisan que usted introduzca esta información en el Router. El '+ 
'recuadro de selección "Automáticamente desde el ISP" deberá encontrarse marcado si su ISP no le ha proporcionado ninguna '+
'dirección DNS específica. Si está utilizando un tipo de conexión con IP estática, entonces puede que necesite introducir una '+
'dirección DNS específica y una dirección DNS secundaria para que su conexión funcione de forma adecuada. Si '+
'su tipo de conexión es dinámica o PPPoE, es probable que no sea necesario introducir ninguna '+ 
'dirección DNS. Para introducir los parametros de la dirección DNS, retire la marca del recuadro de selección "Automáticamente desde el ISP" e '+
'introduzca sus entradas DNS en los espacios correspondientes. Haga clic en "Aplicar cambios" para guardar los parametros. <br>';
g7='La función de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP '+ 
'a cada ordenador de la red. El servidor DHCP puede ser desconectado si es necesario. Para desactivar '+
'el servidor DHCP será necesario que usted establezca manualmente una dirección IP estática en cada ordenador  '+
'de su red. El conjunto de IP es la serie de las direcciones IP apartadas para la asignación dinámica '+
'a los ordenadores de su red. El valor predeterminado es 2-100 (99 ordenadores) y si desea cambiar '+
'este número, puede hacerlo introduciendo una dirección IP nueva de inicio y final y haciendo clic sobre "Aplicar cambios". <br>';
g8='Puede establecer un nombre de dominio local (nombre de red) para su red. No es necesario modificar '+ 
'esta configuración a no ser que tenga una necesidad avanzada específica para hacerlo. Puede dar a la red el nombre '+
'que quiera como "MI RED". <br>';
g9='IP dinámico';
g10='Un tipo de conexión dinámica es el tipo de conexión más habitual para módems por cable. '+ 
'Configurar el tipo de conexión como dinámico es suficiente en muchos casos para completar la conexión '+ 
'con su ISP. Algunos tipos de conexión dinámica es posible que requieran un Nombre de Host. Puede introducir su Nombre de host '+
'en el espacio correspondiente, si le ha sido asignado uno. Su ISP le asignará su Nombre de Host. '+
'Algunas conexiones dinámicas es posible que requieran la clonación de la dirección MAC del PC que se encontraba '+
'originariamente conectado al módem. Para hacerlo, haga clic en el vínculo "Modificar la dirección MAC de WAN" '+
'que aparece en la pantalla. El indicador del estado de Internet mostrará el mensaje "Conectado" si su Router está configurado correctamente. <br>';
g11='Un tipo de conexión de Dirección IP estática es menos común que otros tipos de conexión. Si su ISP '+
'emplea direccionamiento IP estático, necesitará su Dirección IP, Máscara de subred y '+
'dirección de pasarela del ISP. Esta información puede obtenerla de su ISP o en la documentación que le envió '+ 
'su ISP. Introduzca su información y haga clic sobre "Aplicar cambios". Después de aplicar los cambios, '+
'el indicador de estado de Internet mostrará "Conexión  " si su Router está configurado correctamente.<br><br>'+
'Si su ISP le asigna más de una dirección IP estática, su router tendrá la capacidad de gestionar '+ 
'hasta cinco direcciones IP WAN estáticas. Seleccione "Mi ISP suministra más de una dirección IP estática" '+
'e introduzca las direcciones adicionales. <br>';
g12='La mayoría de proveedores de DSL emplean PPPoE como tipo de conexión. Si utiliza un módem DSL para conectarse a '+
'Internet, es posible que su ISP emplee PPPoE para darle acceso al servicio. Si dispone de una conexión a Internet '+
'en su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoE. '+
'<br><br>'+
'Su tipo de conexión es PPPoE si:<br>'+ 
'1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet<br>'+
'2) Su ISP le proporcionó software como WinPOET, Enternet300 que usted emplea para conectarse a Internet<br>'+
'3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet<br><br>'+
'Para configurar el Router de forma que utilice PPPoE, introduzca su Nombre de usuario y Contraseña en los espacios correspondientes. '+
'Si no dispone de Nombre de servicio o no lo conoce, deje en blanco el campo Nombre de servicio. '+
'Una vez introducida la información, haga clic sobre "Aplicar cambios". Después de aplicar los cambios, '+
'el indicador del estado de Internet mostrará el mensaje "Conectado" si su Router está configurado correctamente. '+
'Para obtener más detalles acerca de cómo configurar su Router para utilizar PPPoE, consulte el Manual del usuario.<br>';
g13='Algunos ISP requieren una conexión que emplee el protocolo PPTP. Este protocolo establece una conexión directa con el sistema del ISP. '+
'Introduzca la información proporcionada por su ISP en el espacio correspondiente. Cuando haya terminado, '+
'haga clic en "Aplicar cambios". Después de aplicar los cambios, el indicador de estado de Internet mostrará '+
'"Conectado" si su Router ha sido configurado correctamente. ';
g14='Telstra BigPond le proporcionará su nombre de usuario y contraseña. Introduzca esta información a continuación. '+ 
'Al seleccionar su estado se rellenará automáticamente la dirección IP de su Servidor de acceso. '+
'Si la dirección de su Servidor de acceso es distinta de que se indica aquí, '+
'es posible que deba introducir manualmente la dirección IP del Servidor de acceso. '+
'Cuando haya introducido su información, haga clic en "Aplicar cambios". '+ 
'Después de aplicar los cambios, el indicador de estado de Internet mostrará "Conectado" '+
'si su Router ha sido configurado correctamente. ';
g15='Ajuste MTU';
g16='El ajuste MTU no debería ser modificado nunca a no ser que su ISP le proporcione un ajuste MTU específico. '+ 
'Si cambia el ajuste MTU puede tener problemas con su conexión a Internet, incluso '+
'desconexión a Internet, acceso lento a Internet y problemas para que las aplicaciones a Internet funcionen correctamente. '; 
g17='Desconectar después de X...'; 
g18='La función de Desconexión se utiliza para desconectar automáticamente el router de su ISP cuando '+ 
'no existe actividad durante un determinado período de tiempo. Por ejemplo, al colocar una marca '+
'junto a esta opción e introducir 5 en el campo para los minutos, el router '+
'se desconectará de Internet después de 5 minutos sin actividad en Internet. Esta opción deberá '+ 
'utilizarse en el caso de que usted abone sus servicios de Internet por minutos. ';
g19='MAC es el acrónimo de Controlador de acceso a los medios. Todos los componentes de red, incluidos adaptadores, '+ 
'tarjetas y routers, disponen de un "número de serie" exclusivo llamado dirección MAC. Es posible que su ISP '+
'registre la dirección MAC del adaptador de su ordenador y que sólo permita a ese ordenador en particular '+ 
'la conexión al servicio de Internet. Cuando instale el router, la dirección MAC del mismo '+ 
'será "examinada"por el ISP y esto puede provocar que la conexión no funcione. Belkin incorpora '+ 
'la posibilidad de clonar (copiar) la dirección MAC del ordenador al router. Esta dirección MAC '+ 
'será considerada por el sistema del ISP como la dirección MAC original y le '+ 
'permitirá que la conexión funcione. Si no está seguro de si su ISP necesita ver la dirección MAC original, '+ 
'clone simplemente la dirección MAC del ordenador que se encontraba originariamente conectado '+ 
'al módem. La clonación de la dirección no causará ningún tipo de problemas en su red. <br> '+
'Para Clonar su dirección MAC, asegúrese de estar utilizando el ordenador que se encontraba ORIGINALMENTE '+
'CONECTADO a su módem antes de la instalación del Router. Haga clic en el botón "Clonar dirección MAC" '+ 
'. Haga clic sobre "Aplicar cambios". Su dirección MAC ha sido ahora clonada en el router. ';
g20='Para modificar el canal de funcionamiento del Router, seleccione el canal deseado del menú desplegable y seleccione su canal. Haga clic en "Aplicar cambios" para guardar el ajuste. También '+
 'puede cambiar el SSID. El SSID es el equivalente al nombre de la red inalámbrica. Puede llamar al SSID como desee. Si existen otras redes inalámbricas en su '+
 'área, deberá dar a su red inalámbrica un nombre exclusivo. El nombre predeterminado es Belkin_Pre-N_xxxxxx. Para '+
'modificar el SSID, haga clic en el recuadro de SSID e introduzca un nuevo nombre. Haga clic sobre "Aplicar cambios" para realizar el cambio.'; 
g21='Es posible lograr que su red inalámbrica sea prácticamente invisible. Al desactivar la emisión '+ 
'del SSID, su red no aparecerá en una inspección de la ubicación. La funcionalidad de estudio del sitio '+
'está hoy disponible en muchos de los adaptadores de red inalámbricos del mercado. Buscará en el "aire" cualquier red disponible'+
' y permitirá que el ordenador seleccione la red desde el estudio del sitio. Desactivar la '+
'la emisión del SSID contribuirá a elevar la seguridad.';
g22='Cuando emplee el Router como Punto de acceso, deberá especificar una dirección IP para el'+
 '.Punto de acceso. Esta dirección IP deberá encontrarse dentro de la misma serie que la red a la que vaya'+
 'a conectarlo. Para acceder de nuevo a la interfaz de configuración avanzada del Router, introduzca'+
 'la dirección IP en el navegador de Internet e inicie una sesión.';
g23= 'Utilización del conmutador del modo inalámbrico';
g24= 'Este conmutador le permite seleccionar los modos inalámbricos del Router. Existen tres modos. <br> '+
'1) Sólo 802.11 g<br>'+
'Si selecciona esta modalidad del Router, sólo permitirá a los dispositivos compatibles con Pre-N y 802.11g unirse a la red, y los dispositivos más lentos como 802.11b se quedarán fuera de la red.<br> '+
'2) 802.11g y 802.11b<br>'+
'Si selecciona esta modalidad del Router, permitirá a los dispositivos compatibles con Pre-N, 802.11g y 802.11b unirse a la red. <br>'+
'3) Off<br>'+
'Este modo desactivará el punto de acceso del Router, por lo que no se podrán unir a la red los dispositivos inalámbricos. Desactivar la función inalámbrica de su Router es una excelente manera de proteger su red cuando se va a ausentar de casa durante un largo periodo de tiempo, o si no desea utilizar la capacidad inalámbrica del Router durante un tiempo determinado.';
g25='Servidores virtuales';
g26='Esta función le permitirá dirigir llamadas (Internet) externas para servicios como '+ 
'un servidor web (puerto 80), servidor FTP (puerto 21), y otras aplicaciones a través de su Router '+ 
'hasta su red interna. Debido a que sus ordenadores internos están protegidos por un firewall, '+
'no pueden acceder a ellos otras máquinas a través de Internet, porque no pueden ser \'vistos\'. Si necesita '+ 
'configurar la función de Servidor Virtual para una aplicación determinada, puede disponer de la lista de '+
'de aplicaciones comunes proporcionada. Si su aplicación no se encuentra en la lista, será preciso que se ponga en contacto '+ 
'con el vendedor de la aplicación para descubrir los parametros de los puertos precisos. Para seleccionar un elemento de la '+
'lista, seleccione su aplicación en la lista desplegable. Seleccione la fila de la que desea copiar '+
'los parametros en la lista desplegable que hay junto a la fila, a continuación haga clic en "Intro". Los parametros '+
'serán transferidos a la fila seleccionada que especifique. Haga clic en "Aplicar cambios" para guardar el ajuste para '+
'esa aplicación. Para introducir los parametros de forma manual, introduzca la dirección IP en el espacio correspondiente para la '+
'máquina interna (servidor), los puertos que se deben pasar (utilice una coma entre los distintos '+
'puertos), seleccione el tipo de puerto (TCP o UDP), y haga clic en "Aplicar cambios". Únicamente podrá pasar un '+
'puerto por cada dirección IP interna. Abrir puertos en su firewall puede significar un riesgo para la seguridad de la red. Puede '+
'activar y desactivar los parametros con gran rapidez. Se recomienda desactivar los parametros '+
'cuando no esté utilizando una aplicación específica. ';
g27='Filtros para IP de clientes';
g28='El Router puede ser configurado para restringir el acceso a Internet, al correo electrónico o a otros servicios de red '+ 
'en determinados días y horas. Puede establecerse una restricción para un ordenador, un '+
'nivel de ordenadores o varios ordenadores. Para restringir el acceso a Internet a un único '+
'ordenador, introduzca la dirección IP del ordenador al que desea restringir el acceso '+ 
'en los campos de IP. A continuación, introduzca 80 y 80 en los campos de Puerto. Seleccione TCP. "Seleccione Block (Bloquear).""" '+
'También puede seleccionar Siempre para bloquear el acceso de forma permanente. Seleccione el día de comienzo en '+
'la parte superior, la hora de comienzo en la parte superior, el día de finalización en la parte inferior y la hora de finalización en la '+
'parte inferior. Haga clic sobre "Aplicar cambios". A partir de ahora, el ordenador con la dirección IP que ha especificado '+
'tendrá bloqueado el acceso en los momentos que ha fijado. Nota: asegúrese de haber seleccionado '+
'la zona horaria correcta en Utilidades> Parametros del sistema> Zona horaria. ';
g29='Filtrado de direcciones MAC';
g30='El Filtro de Direcciones MAC es una potente característica de seguridad que le permite especificar qué '+
'no esté especificado en la lista de filtrado, no obtendrá permiso para acceder. Cuando active esta propiedad, '+
'ordenadores están permitidos en la red. Cualquier ordenador que trate de acceder a la red y '+
'deberá introducir la dirección MAC de cada cliente de su red para permitir el acceso a '+
'cada uno de ellos. La función "Bloquear" le permite activar y desactivar el acceso a la red fácilmente para cualquier '+
'ordenador, sin tener que añadir y eliminar la dirección MAC del ordenador de la lista. Para '+ 
'activar esta característica, seleccione "Activar filtrado de direcciones MAC". A continuación, introduzca la dirección MAC '+
'de cada ordenador de su red haciendo clic en "Añadir" e introduciendo la dirección MAC en el '+
'espacio correspondiente. Haga clic en "Aplicar cambios" para guardar los parametros. Para borrar una dirección MAC de '+
'la lista, haga clic simplemente en la opción "Borrar" junto a la dirección MAC que desee borrar. Haga clic sobre "Aplicar '+
'cambios" para guardar los parametros. <br><br>'+
'Nota: no podrá borrar la dirección MAC del ordenador que utiliza para '+ 
'acceder a las funciones de administración del Router. (el ordenador que está empleando ahora mismo). ';
g31='La característica DMZ le permite especificar un ordenador de su red para colocarlo '+
'fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT esté causando '+
'problemas con una aplicación como, por ejemplo, una aplicación de juegos o de videoconferencia. '+
'Utilice esta característica de forma temporal. '+
'<font class="redBold">'+
'El ordenador que se encuentra en la DMZ no está protegido contra los ataques de piratas informáticos.</font> '+ 
'Para situar un ordenador en la DMZ, introduzca los dígitos finales de su dirección IP en el '+ 
'campo IP y seleccione "Activar". Haga clic en "Aplicar cambios" para que los cambios se hagan efectivos. '+ 
'Si está utilizando múltiples direcciones IP estáticas de WAN, será posible seleccionar a qué '+
'dirección IP de WAN será dirigido el host de DMZ. Introduzca la dirección IP de WAN a la que '+
'desee dirigir el host de DMZ, introduzca los dos últimos dígitos de la dirección IP del '+
'del ordenador host de DMZ, seleccione "Activar" y haga clic en "Aplicar cambios". ';
g32='Bloquear ICMP Ping'
g33='Los piratas informáticos utilizan lo que se conoce como "pinging" (revisar actividad) para encontrar víctimas potenciales en '+
'Internet. Al revisar la actividad de una dirección IP específica y recibir una respuesta de la dirección IP '+
'el pirata informático puede decidirse a comprobar si existe algo de interés. El '+ 
'Router puede ser configurado de forma que no responda a los intentos de ping ICMP provenientes del exterior. Esto '+ 
'eleva el nivel de seguridad de su Router. Para apagar la respuesta al ping, seleccione '+ 
'"Bloquear ping ICMP" y haga clic en "Aplicar cambios". El router no responderá a ningún ICMP ping. '; 
g34='Contraseña de administrador';
g35='El Router que se le ha suministrado viene SIN contraseña. Si desea añadir una contraseña para aumentar '+
'la seguridad, security, puede establecerla aquí. Guarde su contraseña en un lugar seguro, ya que '+
'la necesitará si tiene que acceder al Router en el futuro. También '+
'se recomienda que establezca una contraseña si va a utilizar la característica de gestión a distancia '+
'de este Router. <br><br>'+
'La opción de tiempo límite de inactividad le permite establecer el periodo de tiempo que puede estar registrado '+ 
'en la interfaz de configuración avanzada del Router. El temporizador se inicia cuando deja de detectarse '+
'actividad. Por ejemplo, usted ha efectuado algunos cambios en la interfaz de configuración avanzada, '+
'y después deja su ordenador solo sin hacer clic en "Cerrar sesión". Suponiendo que el tiempo límite de inactividad está establecido '+
'en 10 minutos, la sesión finalizará 10 minutos después de que se haya marchado. Deberá '+
'acceder al router de nuevo si desea realizar más cambios. La opción de tiempo límite de inactividad '+
'se debe a motivos de seguridad y está establecida de forma predeterminada en 10 minutos. Tenga en cuenta que '+
'no se puede acceder a la interfaz de configuración avanzada del router con más de un ordenador al mismo tiempo. ';
g36='Hora y Zona horaria';
g37='El Router mantiene la hora conectándose a un servidor SNTP (Protocolo horario de red simple). '+  
'Esto permite al Router sincronizar el reloj del sistema con la red global de Internet. El '+ 
'reloj sincronizado en el Router se utiliza para grabar el registro de seguridad y controlar el '+  
'el filtro de clientes. Seleccione la zona horaria en la que reside.  Si reside en una zona en la que se '+ 
'realiza el cambio de hora según el horario de verano, coloque una marca en el recuadro junto a "Activar hora según el '+ 
'horario de verano". Puede que el reloj del sistema no se actualice de forma inmediata. Deje pasar al menos 15 minutos para '+ 
'que el router se ponga en contacto con los servidores de hora en Internet y obtenga una respuesta. No podrá '+
'cambiar la hora del reloj usted mismo. '; 
g38='Administración Remota';
g39='Antes de activar esta función,'+  
'<font class="plaintext_bold">ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR. </font>'+ 
'La gestión a distancia le permite efectuar cambios en los parametros de su Router desde cualquier parte '+ 
'a través de Internet. Existen dos métodos de administrar el router remotamente. El primer '+ 
'método consiste en permitir el acceso al router desde cualquier parte en Internet seleccionando '+ 
'"Cualquier dirección IP puede administrar el router remotamente". Al introducir su dirección IP de WAN '+ 
'desde cualquier ordenador en Internet, aparecerá una ventana de acceso en la que '+ 
'deberá introducir la contraseña de su router. El segundo método consiste en permitir '+ 
'la gestión a distancia del router únicamente a una dirección IP específica. Este método es más seguro, pero menos '+  
'cómodo. Para utilizar este método, introduzca la dirección IP desde la que vaya a acceder al '+ 
'al Router en el espacio previsto y seleccione "Solo esta dirección IP puede '+ 
'administrar el router remotamente". Antes de activar esta función, se RECOMIENDA ENCARECIDAMENTE que '+ 
'establezca su contraseña de administrador. Si deja la contraseña vacía, dejará expuesto '+ 
'su Router a posibles intrusiones. ';
g40='Activación de NAT'
g41='Antes de activar esta función, '+  
'<font class="plaintext_bold">ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR. </font>'+ 
'La Traducción de direcciones de red (NAT) es el método con el que el router comparte la única '+ 
'dirección IP asignada por su ISP con el resto de ordenadores de la red. Solo los usuarios avanzados '+ 
'pueden utilizar esta función. Esta función deberá ser empleada únicamente si su ISP le asigna '+ 
'varias direcciones IP o si necesita desactivar NAT para una configuración avanzada del sistema. '+  
'Si dispone de una sola dirección IP y desactiva NAT, los ordenadores de su red no podrán '+ 
'acceder a Internet. Es posible asimismo que sucedan otros problemas. Al desactivar NAT '+
'se desactivarán las funciones de su firewall. '; 
g42='UPnP (Plug-and-play universal) es una tecnología que ofrece un funcionamiento perfecto de las opciones de mensajes de voz '+
'mensajes de vídeo, juegos y otras aplicaciones compatibles con UPnP. Algunas '+
'aplicaciones requieren que se configure el firewall del Router de forma específica para que puedan funcionar '+
'correctamente. Normalmente se requiere abrir los puertos TCP y UDP y en algunos casos establecer '+
'puertos de activación. Una aplicación compatible con UPnP tiene la capacidad de comunicarse con '+
'el Router, básicamente "indicando" al Router de qué forma necesita que se configure el firewall. '+
'El Router que se le ha suministrado viene con la función UPnP desactivada. Si está utilizando cualquier aplicación compatible con '+ 
'UPnP, y desea aprovechar las ventajas de las funcionalidades UPnP, puede activar esta '+ 
'opción UPnP. Simplemente seleccione "Activar" en la sección "Activar UpnP" de la página de Utilidades. '+ 
'Haga clic sobre "Aplicar cambios" para guardar el cambio. ';
g43='Notificación automática de actualización del firmware';
g44='El Router tiene la capacidad incorporada de buscar automáticamente una nueva versión del '+ 
'firmware y de informarle de que está disponible una nueva versión. Cuando acceda a la '+ 
'interfaz avanzada del Router, este efectuará una búsqueda para comprobar si existe una nueva versión del firmware '+ 
'disponible. Si existe nuevo firmware disponible, aparecerá una notificación. Puede optar por '+ 
'descargar la nueva versión o por ignorar el mensaje. El router se suministra con esta la función desactivada. '+  
'Si desea activarla, seleccione "Activar" y haga clic en "Aplicar cambios". ';
g45='Seguridad inalámbrica';
g46='El empleo de encriptación puede contribuir a mantener su red segura. Sólo puede seleccionarse un tipo de seguridad '+ 
'a la vez. Por lo tanto, se debe seleccionar un modo que sea '+ 
'admitido por todos los dispositivos de red que haya en la red inalámbrica. Este producto de Belkin tiene 5 '+ 
'posibilidades de parametros de seguridad:<br><br>'+
'1) Desactivado. En este modo no se activa ninguna encriptación. Las redes abiertas, en las que todos los usuarios son '+ 
'             bienvenidos, prefieren a veces no activar la encriptación.<br><br> '+ 
'2) WPA PSK - Doméstico (sin servidor). El WPA (Wireless Protected Access, acceso protegido inalámbrico) PSK es una'+ 
'             técnica de seguridad basada en estándares recientes, en la que cada paquete de información '+ 
'             se encripta con un código o clave diferentes. Como la clave está cambiando constantemente, '+  
'             el WPA es muy seguro. Existen dos tipos de WPA, WPA-PSK (Clave precompartida) y '+ 
'             WPA-Servidor Radius. Evidentemente, la diferencia es que uno requiere un servidor '+  
'             y el otro no. El WPA-PSK es para los usuarios de ordenadores para el hogar y oficinas pequeñas que no disponen de '+  
'             un servidor. La clave de encriptación PSK se genera automáticamente desde '+  
'             una cadena de caracteres o frase de paso. Obviamente, el mayor riesgo de seguridad en WPA PSK es '+  
'             que alguien descubra su frase de paso.<br><br> '+ 
 'a. TKIP frente a AES. La configuración de WPA requiere que el usuario elija entre encriptar utilizando '+  
 'TKIP o AES. El estándar WPA especifica TKIP, que es el valor predeterminado. Además, '+ 
 ' TKIP debería proporcionar mejor compatibilidad entre los productos inalámbricos de los diferentes '+  
 ' proveedores ya que muchos productos inalámbricos nunca incorporarán AES. AES es una nueva '+  
 ' técnica de encriptación basada en el estándar no ratificado 802.11i. Los nuevos estándares WPA '+  
   'están considerando utilizar AES. A pesar de que AES no es tan popular, algunos usuarios '+  
  ' podrían preferir utilizar esta técnica. En cualquier caso, todos los dispositivos de red deben emplear la misma '+  
   'técnica.<br><br> '+
 'b. Clave precompartida. Introduzca cualquier palabra o frase de hasta 40 caracteres. Se debe utilizar también el mismo PSK '+  
   'para cada dispositivo de red inalámbrica de la red. Tenga cuidado con '+  
   'las diferencias entre mayúsculas y minúsculas ("n" no es igual que "N".) Recuerde, la forma más fácil '+  
   'de poner en riesgo su seguridad es que alguien adivine su PSK.<br><br> '+ 
'3) WEP de 128 bits. Hasta hace poco, la WEP (Privacidad equivalente a cableado) de 128 bits era el estándar para '+  
   'la encriptación inalámbrica. Si no todos sus dispositivos inalámbricos son compatibles con WPA, la WEP de 128 bits '+  
   'ofrece una opción de seguridad que sigue siendo muy buena. Será necesario que introduzca los '+  
   'números hexadecimales, o también puede generarlos automáticamente.<br><br> '+
'4) WEP de 64 bits. Belkin sólo recomienda el modo de 64 bits en redes en las que los algunos dispositivos no sean compatibles '+  
   'con WPA ni con WEP de 128 bits.<br><br> '+
'5) WPA - Servidor Radius. (A este modo se accede desde el botón Avanzado). Este WPA'+
'es sólo para redes que utilizan un servidor Radius. Todos los parámetros para este modo'+
'deben ser obtenidos desde el administrador de su servidor Radius. A diferencia de WPA PSK'+
', el servidor WPA transfiere la clave desde el servidor a los clientes en lugar de generarla automáticamente.';
g57='Uso de DNS dinámico';
g58='El servicio DNS dinámico le permite otorgar a una dirección IP dinámica uno de los muchos nombres de host estático que ofrece la lista de dominios de DynDNS.org; de esta manera, podrá acceder a sus ordenadores en red de manera más sencilla desde varias ubicaciones en Internet. DynDNS.org ofrece a la comunidad de Internet este servicio para hasta cinco nombres de host en forma gratuita.<br>'+
'El servicio DNSSM dinámico es ideal para una página web personal, un servidor de archivos o para facilitar el acceso a su PC del hogar y los archivos guardados cuando está en el trabajo. Mediante la utilización de este servicio puede estar seguro de que el nombre de host siempre conducirá a su dirección IP, independientemente de cuántas veces su ISP la cambie. Cuando su dirección IP cambia, sus amigos y socios pueden ubicarlo siempre visitando sunombre.dyndns.org.<br>'+
'<br>Puede registrarse de manera gratuita para obtener su nombre de host DNS dinámico en http://www.dyndns.org.<br>'+
'<br><b>Configuración del cliente de actualización para DNS dinámico del router</b><br>'+
'<br>Puede registrarse de manera gratuita para obtener su nombre de host DNS dinámico en http://www.dyndns.org.<br>'+
'<br><b>Configuración del cliente de actualización para DNS dinámico del router</b><br>'+
'Debe registrarse en el servicio gratuito de actualización de DynDNS.org antes de poder utilizar esta función. Una vez que se haya registrado, siga las instrucciones que se indican a continuación.<br>'+
'1.Introduzca su nombre de usuario de DynDNS.org en el campo "Nombre de usuario" (1).<br>'+
'2.Introduzca su contraseña de DynDNS.org en el campo "Contraseña" (2).<br>'+
'3.Introduzca el nombre de dominio de DynDNS.org que ha configurado en DynDNS.org en el campo "Nombre de dominio" (3).<br>'+
'4.Haga clic en "Actualizar DNS dinámico" para actualizar su dirección IP.<br>'+
'Si la dirección IP dinámica que le ha asignado su ISP cambia, el Router actualizará automáticamente los servidores de DynDNS.org con la dirección IP nueva. También puede hacer esto de manera manual pulsando el botón \"Actualizar DNS dinámico\" (4).<br>';
fw1='Actualización del firmware en curso.';
fw2='NO APAGUE O DESACTIVE EL ROUTER, si lo hace podría dañar el router dejándolo inoperable.'; 
apply_text_1='Aplicando cambios. Por favor, espere...';
warn_msg1='SSID no se puede ajustar como NULO!';
warn_msg2='La conexión inalámbica se reiniciará, si está realizando este cambio desde un ordenador inalámbrico, puede que su ordenador inalámbrico se desconecte temporalmente del router.';

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
