/* vim:ai ts=4 sw=4
 * tproxy.c:
 *
 * This is a transparent proxy server. It can be started from inetd to
 * service HTTP requests, or run as a stand-alone daemon. HTTP requests
 * are transparently accepted and passed to the WWW proxy cache for
 * handling. The HTTP request line is modified into a form usable by
 * the WWW proxy cache. The destination WWW site name is extracted from
 * the HTTP headers to avoid DNS lookups.
 */
#include <signal.h>
#include <fcntl.h>
#include <pwd.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <errno.h>

#include <time.h>


#include <sys/types.h>
#include <sys/wait.h>
#include <sys/time.h>
#include <sys/stat.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <unistd.h>
#include <assert.h>

#include <re865x.h>
//#include <rtl8651_dos.h> /* for DoS define */
//#include <rtl8651_multicast.h>
#include <rtl8651_tblDrv.h>
#include <board.h>

#include <wait.h>
#include <sys/socket.h>
#include <sys/ioctl.h>
#include <net/if.h>
#include <net/if_arp.h>
#include <linux/if_ether.h>
#include <net/route.h>
#include <unistd.h> /* for sleep */
#include <linux/config.h>


#include <sys/ipc.h>
#include <sys/shm.h>

/*#include <rt_stack/h/sys/porting.h> */


#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
# include <syslog.h>
#endif
#ifdef HAVE_PATHS_H
# include <paths.h>
#endif

#ifdef HAVE_GETOPT_H
# include <getopt.h>
#endif

#ifdef IPFILTER
# include <sys/ioctl.h>
# include <netinet/in_systm.h>
# include <netinet/ip.h>
# include <netinet/tcp.h>
# include <net/if.h>
# include <netinet/ip_compat.h>
# include <netinet/ip_fil.h>
# include <netinet/ip_nat.h>
#endif

#ifdef IPTABLES
# include <linux/netfilter_ipv4.h>
#endif

#ifdef TCP_WRAPPERS
# include <tcpd.h>
#endif

/* For Solaris */
#ifndef INADDR_NONE
# define INADDR_NONE		(in_addr_t)-1
#endif

/* For Linux */
#if defined(SIGCLD) && !defined(SIGCHLD)
# define SIGCHLD			SIGCLD
#endif

#ifndef _PATH_DEVNULL
# define _PATH_DEVNULL		"/dev/null"
#endif
#ifndef _PATH_VARRUN
# define _PATH_VARRUN		"/var/run/"
#endif

#include "acl.h"

#define ACTIVITY_TIMEOUT	60			/* 120 seconds, 2 minutes */
#define BUFFER_SIZE			(32769)		/* Requests must fit in this size */
#define REFERRER_SIZE		(1024)
#define HOSTNAME_SIZE		(256)

#define PS_METHOD			0
#define PS_METHOD_END		5
#define PS_URI				10
#define PS_URI_END			15
#define PS_VERSION			20
#define PS_HEADER			30
#define PS_HEADER_END		35
#define PS_POST_DATA		40
#define PS_END_OF_REQUEST	45
#define PS_HOST_HEADER		50	/* Needs 10 slots */
#define PS_REFERER_HEADER	60	/* Needs 10 slots */
#define PS_LENGTH_HEADER	70	/* Needs 20 slots */
#define PS_TRANSPARENT		100

#define RC_TRANSPARENT		1
#define RC_FORCED			2
#define RC_DNSLOOKUP		3
#define RC_NODNS			4

#ifdef CWF_PARENTAL
#define CWF_HOST_NAME		"sp.cwfservice.net"
#define CWF_PORT		80
#define CWF_ALLOW		0
#define CWF_BLOCK		1
#define CWF_WAIT_RESPONSE	2
#define NOSN
#define CWFSHM_KEY		5985
#define	SIZE			1024
#endif





// Added by Steve for Debugging purposes,

#ifndef USE_STEVE_DEBUG
#define sdebug( fmt , args... ) 
#else
#define sdebug( fmt , args... )	fprintf(stderr,fmt, ##args ); fprintf( stderr , "\n");
#endif








/*
 * Typedefs.
 */
typedef unsigned long	ip_address_t;
typedef unsigned char	byte_t;
#ifdef CWF_PARENTAL
typedef struct category_
{
	char		index[3];
	char		desc[32];
}	category_t;
typedef struct cwfshm_
{
	unsigned char	cwf_timeouted;
	unsigned char	forked;
}	cwfshm_t;
#endif
typedef struct buffer_
{
	byte_t				buffer[BUFFER_SIZE];
	int					head;
	int					free_space;
}	buffer_t;

typedef struct connection_
{
	int					client_fd;
	int					proxy_fd;
#ifdef CWF_PARENTAL	
	int					cwf_fd;
	char			cwf_url[2048];
	unsigned char		cwf_stat;
	char		client_mac[28];
	char		client_mac_str[18];
#endif	
	struct sockaddr_in	client_addr;
	struct sockaddr_in	dest_addr;
	buffer_t			read_buffer;
	buffer_t			request;
	buffer_t			auth_response;
	int					parse_state;
	int					method_end_offset;
	int					url_offset;
	int					url_end_offset;
	int					version_offset;
	char				host_header[HOSTNAME_SIZE];
	int					host_header_length;
	char				referer_header[REFERRER_SIZE];
	int					referer_header_length;
	int					content_length;
	int					request_number;
}	connection_t;

#ifdef CWF_PARENTAL 
category_t Content[92]={
	{"00", "Overrides" },
	{"01", "Adult / Mature"},
	{"03", "Pornography"},
	{"04", "Sex Education"},
	{"05", "Intimate Apparel /Swimsuit"},
	{"06", "Nudity"},
	{"08", "Alcohol / Tobacco"},
	{"09", "Illegal /Questionable"},
	{"0B", "Gambling"},
	{"0E", "Violence / Hate /Racism"},
	{"0F", "Weapons"},
	{"10", "Abortion"},
	{"14", "Arts /Entertainment"},
	{"15", "Business /Economy"},
	{"16", "Cult / Occult"},
	{"19", "Illegal Drugs"},
	{"1B", "Education"},
	{"1C", "Educational"},
	{"1D", "Cultural Institutions"},
	{"1F", "Financial Services"},
	{"20", "Brokerage / Trading"},
	{"21", "Games"},
	{"22", "Government / Legal"},
	{"23", "Military"},
	{"24", "Political / Activist Groups"},
	{"25", "Health"},
	{"26", "Computers /Internet"},
	{"27", "Hacking / Proxy Avoidance"},
	{"28", "Search Engines /Portals"},
	{"2A", "Web Communications"},
	{"2D", "Job Search /Careers"},
	{"2E", "News / Media"},
	{"2F", "Personals / Dating"},
	{"30", "Recreation and Hobbies"},
	{"31", "Reference"},
	{"33", "Chat / Instant Messaging"},
	{"34", "Email"},
	{"35", "Newsgroups"},
	{"36", "Religion"},
	{"3A", "Shopping"},
	{"3B", "Auctions"},
	{"3C", "Real Estate"},
	{"3D", "Society / Lifestyle"},
	{"3E", "Gay / Lesbian"},
	{"40", "Restaurants /Dining / Food"},
	{"41", "Sports / Recreation/ Hobbies"},
	{"42", "Travel"},
	{"43", "Vehicles"},
	{"44", "Humor / Jokes"},
	{"45", "Streaming Media /MP3"},
	{"47", "Software Downloads"},
	{"48", "Pay to Surf"},
	{"57", "For Kids"},
	{"58", "Web Advertisement"},
	{"59", "Web Hosting"},
	{"5A", "Unrated"},
	{"5B", "Miscellaneous"}
};
#endif
#ifdef CWF_PARENTAL	
	struct hostent *hostaddr;
	char   cwf_ip[4][20]={
				"65.160.238.183",
				"65.160.238.181",
				"68.142.141.201",
				"217.169.46.101"
				};
	int    cwf_host_count = 4;
	char   BEL_SerialNumber[20];
	unsigned int	router_ip;
	unsigned char	cwf_timeout_action ;
	unsigned int	cwf_timeout_timer;
	cwfshm_t	*cwft;
	//char gwireless[64]={0};
#endif	

char blockResponse[BUFFER_SIZE] =
"<!-- DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\" -->"
"<HTML LANG=en-US><HEAD>"
"Version:2.0.22 . 2003, Cerberian Inc. Page 36 The Cerberian. Web Filter 2.0 OEM Integration Guide"
"<TITLE>Violation</TITLE><META HTTP-EQUIV=\"content-type\" CONTENT=\"text/html; charset=ISO-8859-1\">"
"<LINK REL=\"Shortcut Icon\" HREF=\"../favicon.ico\"><LINK REL=\"stylesheet\" TYPE=\"text/css\" HREF=\"http://www.cerberian.com/styles/site.css\">"
"<SCRIPT LANGUAGE=\"JavaScript\">"
"<!-- hide from old browsers function pop(url) {"
"openWindow=window.open(url,'pop','scrollbars,resizable,menubar=1,toolbar=0,location=0,width=350,height=200');}// -->"
"</SCRIPT></HEAD><BODY BGCOLOR=\"#FFFFFF\" MARGINHEIGHT=\"0\" MARGINWIDTH=\"0\" TOPMARGIN=\"0\" LEFTMARGIN=\"10\" ><TABLE WIDTH=\"98%\" BORDER=\"0\"><TR><TD>"
"<H1>Cerberian Web Filter Violation</H1><BR>"
"<P>The site that you requested is in violation of your Internet policy."
"<P>The URL you requested was: %s"
"<P>The site was categorized as:<P><U class=\"yellow\">Category</U>"
"<BR>%s<BR><BR><BR><BR>"
"<P>If you feel that the filtering service has improperly blocked you from the above site, "
"<A HREF=\"http://filter.belkin.com/site/sitereview1.jsp?url=http://%s/&over=true\">"
"click here</A>.<TABLE BORDER=\"0\" ALIGN=\"RIGHT\">"
"<TR><TD ALIGN=\"RIGHT\"><IMG SRC=\"http://filter.belkin.com/images/cerblogo.gif\"></TD>"
"</TR></TABLE></TD></TR></TABLE></BODY></HTML>";
/*
 * Macros.
 */
#define FD_MAX(a,b)		((a) > (b) ? (a) : (b))

/*
 * Function prototypes.
 */
static void usage(char *prog, char *opt);
static short getportnum(char *portnum);
static ip_address_t getipaddress(char *ipaddr);
static uid_t getuserid(char *user);
static uid_t getgroupid(uid_t uid);
static int bind_to_port(ip_address_t bind_ip, short bind_port);
static int connect_to_proxy(ip_address_t ip, short port);
static void lookup_hostname(struct sockaddr_in *addr, char *hostname, int hostlen, int needed);
static void server_main_loop(int sock, char *server_hostname, short server_port);
static void trans_proxy(int sock, struct sockaddr_in *addr,
						char *server_hostname, short server_port);
static int process_proxy_response(connection_t *conn, size_t last_read);
static int process_client_request(connection_t *conn, size_t last_read);
static int send_data(int fd, char *data, size_t length);
#if defined(DEBUG_INPUT_REQUESTS) || defined(DEBUG_OUTPUT_REQUESTS)
static void print_request(char *prefix, char *data, size_t length);
#endif
static void write_pid(char *prog);
static void term_signal(int sig);
static void alarm_signal(int sig);
#ifdef CWF_PARENTAL
int confirm_client_request_with_cwf(connection_t *conn, size_t last_read );
int process_auth_response( connection_t *conn, size_t last_read );
#endif
#ifdef LOG_TO_FILE
static void hup_signal(int sig);
static void log_it(char *fmt, ...);
#endif

int socket_nonblocking(int sock);
int socket_blocking(int sock);
romeCfgParam_t *pRomeCfgParam;

extern int re865xIoctl(char *name,uint32 arg0, uint32 arg1, uint32 arg2, uint32 arg3);

/*
 * Command line switches.
 */
static char				*prog;
static int				daemonize = 1;
static int				fully_transparent = 0;
static int				proxy_only = 0;
static char				*force_url = NULL;
static int				force_url_length;
#ifdef LOG_TO_FILE
static char				*log_file_name = NULL;
static FILE				*log_file = NULL;
#endif

#ifdef IPFILTER
/*
 * The /dev/ipnat device node.
 */
static int				natdev = -1;
#endif

#ifdef TCP_WRAPPERS
/*
 * The syslog levels for tcp_wrapper checking.
 */
int						deny_severity;
int						allow_severity;
#endif
/*
 * re865x Ioctl (to call kernel functions including rtl8651 table driver APIs
 */
int re865xIoctl(char *name,uint32 arg0, uint32 arg1, uint32 arg2, uint32 arg3)
{
	uint32 args[4];
	struct ifreq ifr;
	int sockfd;

	args[0] = arg0;
	args[1] = arg1;
	args[2] = arg2;
	args[3] = arg3;

	if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
		DEBUG_P("fatal error socket\n");
		return -3;
	}
	strcpy((char*)&ifr.ifr_name, name);
	((uint32 *)(&ifr.ifr_data))[0] = (uint32)args;
	if (ioctl(sockfd, SIOCDEVPRIVATE, &ifr)<0)
	{
		perror("device ioctl:");
		DEBUG_P("\nerror %s line %d\n",__FUNCTION__,__LINE__);
		close(sockfd);
		return -1;
	}
	close(sockfd);
	return 0;
} /* end re865xIoctl */


/*
	register napt-redirect rule
*/
int32 rtl8651_registerRedirectOutboundNaptFlow(
		uint8	isTcp,			/* TRUE: tcp, FALSE: udp */
		ipaddr_t	sip,				/* val 0 for wildcard */
		uint16	sport,			/* val 0 for wildcard */
		ipaddr_t	originalDip,		/* val 0 for wildcard */
		uint16	originalDport,	/* val 0 for wildcard */
		ipaddr_t	newDip,			/* val 0 for don't care, automatically assigned by gateway's LAN IP */
		uint16	newDport		/* must assign a new Dport to protocol stack */
)
{
	uint32 args[7];
	int32 ret;

	args[0] = (uint32)isTcp;
	args[1] = sip;
	args[2] = (uint32)sport;
	args[3] = originalDip;
	args[4] = (uint32)originalDport;
	args[5] = newDip;
	args[6] = (uint32)newDport;
	
	re865xIoctl("eth0", RTL8651_IOCTL_NAPTREDIRECT_REGISTER_RULE, (uint32)args, 0, (uint32)&ret);

	return ret;
}

/*
	unregister napt-redirect rule
*/
int32 rtl8651_unregisterRedirectOutboundNaptFlow(
		uint8	isTcp,			/* TRUE: tcp, FALSE: udp */
		ipaddr_t	sip,				/* val 0 for wildcard */
		uint16	sport,			/* val 0 for wildcard */
		ipaddr_t	originalDip,		/* val 0 for wildcard */
		uint16	originalDport,	/* val 0 for wildcard */
		ipaddr_t	newDip,			/* val 0 for wildcard */
		uint16	newDport		/* val 0 for wildcard */
)
{
	uint32 args[7];
	int32 ret;

	args[0] = (uint32)isTcp;
	args[1] = sip;
	args[2] = (uint32)sport;
	args[3] = originalDip;
	args[4] = (uint32)originalDport;
	args[5] = newDip;
	args[6] = (uint32)newDport;
	
	re865xIoctl("eth0", RTL8651_IOCTL_NAPTREDIRECT_UNREGISTER_RULE, (uint32)args, 0, (uint32)&ret);

	return ret;
}

/*
	query napt-redirect flow
*/
int32 rtl8651_queryRedirectOutboundNaptFlow(
		uint8	isTcp,
		ipaddr_t	sip,
		uint16	sport,
		ipaddr_t	*pOriginalDip,
		uint16	*pOriginalDport,
		ipaddr_t	newDip,
		uint16	newDport
)
{
	uint32 args[7];
	int32 ret;

	args[0] = (uint32)isTcp;
	args[1] = sip;
	args[2] = (uint32)sport;
	args[3] = pOriginalDip;
	args[4] = pOriginalDport;
	args[5] = newDip;
	args[6] = (uint32)newDport;
	
	re865xIoctl("eth0", RTL8651_IOCTL_NAPTREDIRECT_QUERY_FLOW, (uint32)args, 0, (uint32)&ret);

	return ret;
}

/*
 * Main loop.
 */
int main(int argc, char **argv)
{
	int					arg;
	int					run_as_server = 0;
	ip_address_t		bind_ip = INADDR_ANY;
	short				bind_port = -1;
	char 				*server_hostname = NULL;
	short				server_port = -1;
	uid_t				run_uid = 0;
	gid_t				run_gid = 0;
#if !defined(DEBUG) && !defined(DEBUG_INPUT_REQUESTS) && !defined(DEBUG_OUTPUT_REQUESTS)
	int					fd;
#endif
	int					sock;
	struct sockaddr_in	addr;
	int					len;
	int			shmid;
	int			shmid2;
	
#ifdef NOSN
	FILE	*BELSN;
#endif

#ifdef __EMBEDDED__
	int loop_end =0;
#endif
		printf("shm size %d 0x%08x\n",sizeof(romeCfgParam_t) , pRomeCfgParam);
	if ((shmid=shmget(SHM_PROMECFGPARAM, 0 ,0666))==-1)
//	if ((shmid=shmget(SHM_PROMECFGPARAM, 0, 0))==-1)
	{
		printf("Gamble : fail to get shmid %d\n",sizeof(romeCfgParam_t));
		printf("%s\n",strerror(errno));
		  if (errno == EEXIST)
		  {
           // If already available just get the 
           // shared memory id
        		printf("Gamble : already available just get the shared memory id\n");
           	if ((shmid = shmget(SHM_PROMECFGPARAM, 0, 0)) == -1)
           	{
           		printf("Gamble fail to get shmid again\n");
           	}
   	   	
   	   	if ((pRomeCfgParam=shmat(shmid,(void*)0,0))== (void *)-1);
				{
					printf("Gamble : fail to attach again\n");
				}
        }
	}
	else
	{
		
		if ( ( pRomeCfgParam=(romeCfgParam_t *)shmat(shmid,(void*)0,0) )== (void *)-1);
		{
			printf("%s 0x%08x\n",strerror(errno),pRomeCfgParam);
			printf("Gamble : fail to attach\n");
		}
	}
	
	router_ip = pRomeCfgParam->ifCfgParam[1].ipAddr[0];
	router_ip = router_ip << 8 | pRomeCfgParam->ifCfgParam[1].ipAddr[1];
	router_ip = router_ip << 8 | pRomeCfgParam->ifCfgParam[1].ipAddr[2];
	router_ip = router_ip << 8 | pRomeCfgParam->ifCfgParam[1].ipAddr[3];
	cwf_timeout_timer = pRomeCfgParam->gemtekCfgParam.cwf_timeout_timer;
	cwf_timeout_action = pRomeCfgParam->gemtekCfgParam.cwf_timeout_action;
	//cwf_timeout_timer = 30;
	//cwf_timeout_action = CWF_ALLOW;
//test mac	
	//strcpy( pRomeCfgParam->gemtekCfgParam.parental_mac , "00:00:1C:D3:B5:72");
	//strcpy(gwireless, pRomeCfgParam->gemtekCfgParam.wl0_ssid);
	
sdebug("router_ip 0x%08x\n" , router_ip )
sdebug("Gamble cwf_timeout_timer %d\n" , cwf_timeout_timer)	
sdebug("Gamble wireless ssid1 %s\n" , gwireless)			
sdebug("Gamble wireless Domain %s\n" , pRomeCfgParam->dhcpsCfgParam.domain )	

#ifdef NOSN
	if( (BELSN=fopen("/var/belsn" , "r")) == NULL )
		strcpy( BEL_SerialNumber, "BEL151111" );
	else
	{
		fgets( BEL_SerialNumber , 20 , BELSN );
		*(strchr(BEL_SerialNumber, '\n')) = 0x0;
		printf("The serial number is %s\n" , BEL_SerialNumber);
		fclose(BELSN);
	}	
#else
	
#endif
	/*
	 * Get the name of the program.
	 */
	if ((prog = strrchr(argv[0], '/')) != NULL)
		++prog;
	else
		prog = argv[0];

sdebug("Get the name of the program.")

	/*
	 * Reset the access control list.
	 */
	reset_acl();
sdebug("Reset the access control list.")


	/*
	 * Parse the command line arguments.
	 */
	while ((arg = getopt(argc, argv, "dtps:r:b:f:l:a:")) != EOF)
	{
		switch (arg)
		{
		case 't':
			fully_transparent = 1;
			proxy_only = 0;
			break;

		case 'p':
			proxy_only = 1;
			fully_transparent = 0;
			break;

		case 's':
			run_as_server = 1;
			bind_port = getportnum(optarg);
			break;

		case 'd':
			if (run_as_server)
			{
				daemonize = 0;
			}
			else
			{
				usage(prog, "This option is valid when running as a server");
			}
			break;

		case 'b':
			if (run_as_server)
			{
				bind_ip = getipaddress(optarg);
			}
			else
			{
				usage(prog, "This option is valid when running as a server");
			}
			break;

		case 'r':
			if (run_as_server)
			{
				run_uid = getuserid(optarg);
				run_gid = getgroupid(run_uid);
			}
			else
			{
				usage(prog, "This option is valid when running as a server");
			}
			break;

		case 'a':
			if (run_as_server)
			{
				if (!add_acl(optarg))
					usage(prog, "ACL not in expected format");
			}
			else
			{
				usage(prog, "This option is valid when running as a server");
			}
			break;

		case 'f':
			force_url = optarg;
			force_url_length = strlen(force_url);
			break;

#ifdef LOG_TO_FILE
		case 'l':
			log_file_name = optarg;
			break;
#endif

#ifndef __EMBEDDED__
		default:
		case '?':
			usage(prog, NULL);
			break;
#else
		case '?':
			usage(prog, NULL);
			break;

		default:
			if (arg != 255) {
				usage(prog, NULL);
    				exit(1);
			}
			else
			{
				loop_end = 1;
				break;
			}
#endif
		}

#ifdef __EMBEDDED__
		if (loop_end) break;
#endif
	}

sdebug("Parse the command line arguments.")

	/*
	 * Process the remaining command line arguments.
	 */
	for (; optind < argc; ++optind)
	{
		if (server_hostname == NULL)
		{
			server_hostname = argv[optind];
		}
		else if (server_port == -1)
		{
			server_port = getportnum(argv[optind]);
		}
		else
		{
			usage(prog, "Extra arguments were specified.");
		}
	}
sdebug("Process the remaining command line arguments.")

	/*
	 * Test to make sure required args were provided and are valid.
	 */
	if (!fully_transparent && server_hostname == NULL)
	{
		usage(prog, "No proxyhost was specified (or it was invalid).");
	}
	if (!fully_transparent && server_port == -1)
	{
		usage(prog, "No proxyport was specified (or it was invalid).");
	}
	if (run_as_server && (bind_ip == INADDR_NONE))
	{
		usage(prog, "The server ipaddr is invalid.");
	}
	if (run_as_server && (bind_port == -1))
	{
		usage(prog, "No server port was specified (or it was invalid).");
	}
sdebug("Test to make sure required args were provided and are valid.")

	/*
	 * Set the current directory to the root filesystem.
	 */
	chdir("/");
sdebug("Set the current directory to the root filesystem.")

#ifdef IPFILTER
	/*
	 * Now is a good time to open /dev/ipnat, before giving up our uid/gid.
	 */
	if ((natdev = open(IPL_NAT, O_RDONLY)) < 0)
	{
		perror("open(" IPL_NAT ")");
		exit(1);
	}
#endif

#ifdef LOG_TO_FILE
	/*
	 * Open the log file for the first time.
	 */
	if (log_file_name)
	{
		log_file = fopen(log_file_name, "a");
# ifdef LOG_TO_FILE_LINEBUFF
		if (log_file)
			setvbuf(log_file, NULL, _IOLBF, BUFSIZ);
# endif
	}
#endif

sdebug("Open the log file for the first time.")

	if
        ( rtl8651_registerRedirectOutboundNaptFlow(TRUE ,0,0,0,80,0,81) 
          ==  FAILED )
       {                                        
       	  printf("rtl8651_registerRedirectOutboundNaptFlow ERROR \n");
          exit(0);                                     
       }   
	/*
	 * See if we should run as a server.
	 */
	if (run_as_server)
	{
		/*
		 * Start by binding to the port, the child inherits this socket.
		 */
		sock = bind_to_port(bind_ip, bind_port);

		/*
		 * Start a server process.
		 */
		if (daemonize)
		{
			switch (fork())
			{
			case -1:
				/*
				 * We could not fork a daemon process.
				 */
				perror("fork()");
				exit(1);
			case 0:
				/*
				 * The child continues as the daemon process.
				 */
				break;
			default:
				/*
				 * Parent exits at this stage.
				 */
				_exit(0);
			}

			/*
			 * Start a new session and group.
			 */
			setsid();
		}

#if !defined(DEBUG) && !defined(DEBUG_INPUT_REQUESTS) && !defined(DEBUG_OUTPUT_REQUESTS)
		/*
		 * Point file descriptors to /dev/null, unless DEBUG is defined.
		 */
#ifndef USE_STEVE_DEBUG
		if ((fd = open(_PATH_DEVNULL, O_RDWR, 0)) >= 0)
		{

			dup2(fd, STDIN_FILENO);
			dup2(fd, STDOUT_FILENO);
			dup2(fd, STDERR_FILENO);
			if (fd > STDERR_FILENO)
				close(fd);
		}
#endif
#endif

#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		/*
		 * Open syslog for logging errors.
		 */
		openlog(prog, LOG_PID, LOG_DAEMON);
#endif

		/*
		 * Ignore some signals.
		 */
		if (daemonize)
			signal(SIGINT, SIG_IGN);
		signal(SIGQUIT, SIG_IGN);
		signal(SIGTSTP, SIG_IGN);
		signal(SIGCONT, SIG_IGN);
		signal(SIGPIPE, SIG_IGN);
		signal(SIGALRM, alarm_signal);
#ifdef LOG_TO_FILE
		signal(SIGHUP, hup_signal);
#else
		signal(SIGHUP, SIG_IGN);
#endif
		signal(SIGTERM, term_signal);

sdebug("Ignore some signals.")
		/*
		 * Create a .pid file in /var/run.
		 */
		write_pid(prog);
sdebug("Create a .pid file in /var/run.")

		/*
		 * Drop back to an untrusted user.
		 */
		if (run_gid != 0)
			setgid(run_gid);
		if (run_uid != 0)
			setuid(run_uid);
sdebug("Drop back to an untrusted user ?")

		/*
		 * Handle the server main loop.
		 */
sdebug("Before --- Handle the server main loop.")
		server_main_loop(sock, server_hostname, server_port);
sdebug("After --- Handle the server main loop.")
sdebug("Should never exit.")
		/*
		 * Should never exit.
		 */
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		closelog();
#endif
		exit(1);
	}

#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
	/*
	 * Open syslog for logging errors.
	 */
	openlog(prog, LOG_PID, LOG_DAEMON);
#endif

	/*
	 * We are running from inetd so find the peer address.
	 */
sdebug("Before  --- We are running from inetd so find the peer address.")
	len = sizeof(addr);
	if (getpeername(STDIN_FILENO, (struct sockaddr *)&addr, &len) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "getpeername(): %m");
		closelog();
#endif
		exit(1);
	}

sdebug("After  --- We are running from inetd so find the peer address.")

	/*
	 * Set the keepalive socket option to on.
	 */
	{
		int		on = 1;
		setsockopt(STDIN_FILENO, SOL_SOCKET, SO_KEEPALIVE, (char *)&on, sizeof(on));
	}
sdebug("Set the keepalive socket option to on.")
	/*
	 * We are running from inetd so process stdin.
	 */
	trans_proxy(STDIN_FILENO, &addr, server_hostname, server_port);
sdebug("We are running from inetd so process stdin.")
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
	closelog();
#endif
sdebug("End")
	return (0);
}

int
socket_nonblocking(int sock)
{
	int flags;

	assert(sock >= 0);

	flags = fcntl(sock, F_GETFL, 0);
	return fcntl(sock, F_SETFL, flags | O_NONBLOCK);
}

/*
 * Set the socket to blocking -rjkaes
 */
int
socket_blocking(int sock)
{
	int flags;

	assert(sock >= 0);

	flags = fcntl(sock, F_GETFL, 0);
	return fcntl(sock, F_SETFL, flags & ~O_NONBLOCK);
}

/*
 * Print some basic help information.
 */
static void usage(char *prog, char *opt)
{
	if (opt)
	{
		fprintf(stderr, "%s: %s\n", prog, opt);
	}
#ifdef LOG_TO_FILE
	fprintf(stderr, "usage: %s [-t | -p] [-f url] [-s port [-d] [-b ipaddr] [-r user] [-a acl]] [-l file] proxyhost proxyport\n", prog);
#else
	fprintf(stderr, "usage: %s [-t | -p] [-f url] [-s port [-d] [-b ipaddr] [-r user] [-a acl]] proxyhost proxyport\n", prog);
#endif
	fprintf(stderr, "    -t          Operate transparently, don't talk to a proxy.\n");
	fprintf(stderr, "    -p          Only talk to a proxy, disable direct fall-back.\n");
	fprintf(stderr, "    -f url      Force access to always go to specified URL.\n");
	fprintf(stderr, "    -s port     Run as a server bound to the specified port.\n");
	fprintf(stderr, "    -d          Do not background the daemon in server mode.\n");
	fprintf(stderr, "    -b ipaddr   Bind to the specified ipaddr in server mode.\n");
	fprintf(stderr, "    -r user     Run as the specified user in server mode.\n");
	fprintf(stderr, "    -a acl      Add an ACL to restrict connections in server mode.\n");
#ifdef LOG_TO_FILE
	fprintf(stderr, "    -l file     Log accesses to the specified file (relative to /).\n");
#endif
	exit(1);
}

/*
 * Return the port number, in network order, of the specified service.
 */
static short getportnum(char *portnum)
{

	char			*digits = portnum;
#ifndef __EMBEDDED__
	struct servent	*serv;
#endif
	short			port;

	for (port = 0; isdigit((int)*digits); ++digits)
	{
		port = (port * 10) + (*digits - '0');
	}

#ifndef __EMBEDDED__
	if ((*digits != '\0') || (port <= 0))
	{
		if ((serv = getservbyname(portnum, "tcp")) != NULL)
		{
			port = serv->s_port;
		}
		else
		{
			port = -1;
		}
		endservent();
	}
	else
		port = htons(port);
#else	/* EMBEDDED */
		port = htons(port);
#endif

#ifdef DEBUG
	printf("Port lookup %s -> %hd\n", portnum, ntohs(port));
#endif

	return (port);
}

/*
 * Return the IP address of the specified host.
 */
static ip_address_t getipaddress(char *ipaddr)
{
	struct hostent	*host;
	ip_address_t	ip;

sdebug("(%s)%d 0x%08x" ,__FUNCTION__,__LINE__, ipaddr )
	 if (((ip = inet_addr(ipaddr)) == INADDR_NONE)&&
		(strcmp(ipaddr, "255.255.255.255") != 0))
	{
		if ((host = gethostbyname(ipaddr)) != NULL)
		{
			memcpy(&ip, host->h_addr, sizeof(ip));
		}
		// endhostent();	// Modified by Steve, since vLinux does not support TCP-based DNS queries.
	}

sdebug("IP lookup %s -> 0x%08lx\n", ipaddr, ntohl(ip));

	return (ip);
}

/*
 * Find the userid of the specified user.
 */
static uid_t getuserid(char *user)
{
	struct passwd	*pw;
	uid_t			uid;

	if ((pw = getpwnam(user)) != NULL)
	{
		uid = pw->pw_uid;
	}
	else if (*user == '#')
	{
		uid = (uid_t)atoi(&user[1]);
	}
	else
	{
		uid = -1;
	}

#ifdef DEBUG
	printf("User lookup %s -> %lu\n", user, (unsigned long)uid);
#endif

	endpwent();

	return (uid);
}

/*
 * Find the groupid of the specified user.
 */
static uid_t getgroupid(uid_t uid)
{
	struct passwd	*pw;
	gid_t			gid;

	if ((pw = getpwuid(uid)) != NULL)
	{
		gid = pw->pw_gid;
	}
	else
	{
		gid = -1;
	}

#ifdef DEBUG
	printf("Group lookup %lu -> %lu\n", (unsigned long)uid, (unsigned long)gid);
#endif

	endpwent();

	return (gid);
}

/*
 * Bind to the specified ip and port.
 */
static int bind_to_port(ip_address_t bind_ip, short bind_port)
{
	struct sockaddr_in	addr;
	int					sock;

	/*
	 * Allocate a socket.
	 */
	if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0)
	{
		perror("socket()");
		exit(1);
	}

	/*
	 * Set the SO_REUSEADDR option so we can start tproxy quickly if it dies.
	 */
	{
	 	int	on = 1;

		setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, (char *)&on, sizeof(on));
	}

	/*
	 * Set the address to listen to.
	 */
	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_port = bind_port;
	addr.sin_addr.s_addr = bind_ip;

	/*
	 * Bind our socket to the above address.
	 */
	if (bind(sock, (struct sockaddr *)&addr, sizeof(addr)) < 0)
	{
		perror("bind()");
		close(sock);
		exit(1);
	}

	/*
	 * Establish a large listen backlog.
	 */
	if (listen(sock, SOMAXCONN) < 0)
	{
		perror("listen()");
		close(sock);
		exit(1);
	}

	return (sock);
}

/*
 * Connect to the proxy server.
 */
static int connect_to_proxy(ip_address_t ip, short port)
{
	struct sockaddr_in	addr;
	int					sock;

	/*
	 * Allocate a socket.
	 */
	if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "socket(): %m");
#endif
sdebug("connect proxy socket fail")
		return (-1);
	}

	/*
	 * Set the address to connect to.
	 */
	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_port = port;
	addr.sin_addr.s_addr = ip;

	/*
	 * Connect our socket to the above address.
	 */
	if (connect(sock, (struct sockaddr *)&addr, sizeof(addr)) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_WARNING, "connect(): %m");
#endif
sdebug("connect proxy connect fail")
		close(sock);
		return (-1);
	}

	/*
	 * Set the keepalive socket option to on.
	 */
	{
		int		on = 1;
		//setsockopt(STDIN_FILENO, SOL_SOCKET, SO_KEEPALIVE, (char *)&on, sizeof(on));
	}
	return (sock);
}

static int connect_to_cwf(ip_address_t ip, short port)
{
	struct sockaddr_in	addr;
	int					sock;

	/*
	 * Allocate a socket.
	 */
	if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "socket(): %m");
#endif
sdebug("connect proxy socket fail")
		return (-1);
	}

	/*
	 * Set the address to connect to.
	 */
	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_port = port;
	addr.sin_addr.s_addr = ip;

	/*
	 * Connect our socket to the above address.
	 */
	if (connect(sock, (struct sockaddr *)&addr, sizeof(addr)) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_WARNING, "connect(): %m");
#endif
sdebug("connect proxy connect fail")
		close(sock);
		return (-1);
	}


	return (sock);
}

/*
 * Translate a sockaddr_in structure into a usable ASCII hostname.
 */
static void lookup_hostname(struct sockaddr_in *addr, char *hostname, int hostlen, int needed)
{
#ifdef DNS_LOOKUPS
	struct hostent	*host;

	if (needed)
	{
		if ((host = gethostbyaddr((char *)&addr->sin_addr,
								  sizeof(addr->sin_addr), AF_INET)) != NULL)
		{
			strncpy(hostname, host->h_name, hostlen);
			hostname[hostlen - 1] = '\0';
		}
		else
		{
			strncpy(hostname, inet_ntoa(addr->sin_addr), hostlen);
			hostname[hostlen - 1] = '\0';
# ifdef LOG_TO_SYSLOG
			syslog(LOG_WARNING, "DNS lookup for %s failed: %m", hostname);
# endif
		}
	}
	else
	{
# ifdef USELESS_DNS_LOOKUPS
		if ((host = gethostbyaddr((char *)&addr->sin_addr,
								  sizeof(addr->sin_addr), AF_INET)) != NULL)
		{
			strncpy(hostname, host->h_name, hostlen);
			hostname[hostlen - 1] = '\0';
		}
		else
		{
			strncpy(hostname, inet_ntoa(addr->sin_addr), hostlen);
			hostname[hostlen - 1] = '\0';
#  ifdef LOSYSLOG
			syslog(LOG_WARNING, "DNS lookup for %s failed: %m", hostname);
#  endif
		}
# else
		strncpy(hostname, inet_ntoa(addr->sin_addr), hostlen);
		hostname[hostlen - 1] = '\0';
# endif
	}
#else
	strncpy(hostname, inet_ntoa(addr->sin_addr), hostlen);
	hostname[hostlen - 1] = '\0';
#endif
}

/*
 * This is the main loop when running as a server.
 */
static void server_main_loop(int sock, char *server_hostname, short server_port)
{
	int					new_sock;
	struct sockaddr_in	addr;
	int					len;
	pid_t				pid;
#ifdef DO_DOUBLE_FORK
	int					status;
sdebug("DO_DOUBLE_FORK")
#endif
#ifdef TCP_WRAPPERS
	struct request_info	req;
#endif
#ifdef CWF_PARENTAL
	int		i;
	int		shmid,shmid2 , forked=0;
#endif
	
	shmid2 = shmget(CWFSHM_KEY , sizeof(cwfshm_t), 0666 | IPC_CREAT);
	cwft = shmat( shmid2 , NULL , 0 ); 
	shmid=shmget(SHM_PROMECFGPARAM,sizeof(romeCfgParam_t),0666|IPC_CREAT);

#ifdef CWF_PARENTAL
/*
	hostaddr = gethostbyname(CWF_HOST_NAME);
	
	for( i = 0 ;hostaddr != NULL && hostaddr->h_addr_list[i] != NULL ; i++ )
	{
		
		strcpy(cwf_ip[i] , inet_ntoa( *( struct in_addr*)( hostaddr -> h_addr_list[ i])) );
sdebug( "i=%d,cwf_ip=%s" , i , cwf_ip[i] )		
	}	
	//cwf_host_count = i ;
*/	
#endif
	/*
	 * Ignore dead children so no zombies should be left hanging. However some
	 * systems don't allow this, see the DO_DOUBLE_FORK option.
	 */
#ifdef SA_NOCLDWAIT
	/* Go BSD */
sdebug("SA_NOCLDWAIT: Go BSD")
	{
		struct sigaction	sa;

		memset(&sa, 0, sizeof(sa));
		sa.sa_handler = SIG_IGN;
		sa.sa_flags = SA_NOCLDWAIT;
		sigaction(SIGCHLD, &sa, NULL);
	}
#else
	/* Go Linux & SVR4 */
sdebug("Go Linux & SVR4")
 	signal(SIGCHLD, SIG_IGN);
#endif
	
sdebug("pRomeCfgParam->gemtekCfgParam.parental_mac = %s" , pRomeCfgParam->gemtekCfgParam.parental_mac)	
	
	for (;;)
	{
		/*
		 * Accept an incoming connection.
		 */
		len = sizeof(addr);
		
		if( cwft->cwf_timeouted == 1 && !(cwft->forked) )
		{
			cwft->forked = 1;
			switch (pid = fork())
			{
				case -1:
					continue;
				case 0://child
					sleep(60);
					cwft = shmat( shmid2 , NULL , 0 ); 
					cwft->cwf_timeouted=0;
					cwft->forked=0;
					shmdt(cwft);
					exit(0);
				default:
					continue;
			}
		}
		if( strlen(pRomeCfgParam->gemtekCfgParam.parental_mac) > 0 && !forked )
		{
			forked = 1;
			switch (pid = fork())
			{
				case -1:
					continue;
				case 0://child
					sleep(3600);
					pRomeCfgParam=shmat(shmid,(void*)0,0);
					sdebug("client mac\n",pRomeCfgParam->gemtekCfgParam.parental_mac);
					pRomeCfgParam->gemtekCfgParam.parental_mac[0]=0x0;
					unlink("/var/allowed_mac");
					shmdt(pRomeCfgParam);
					exit(0);
				default:
					continue;
			}
		}
		if( strlen(pRomeCfgParam->gemtekCfgParam.parental_mac) == 0)
		{
			sdebug("client mac==0\n");
			forked = 0;
		}	

sdebug("Before -- Accept an incoming connection.")
		while ((new_sock = accept(sock, (struct sockaddr *)&addr, &len)) < 0)
		{
			/*
			 * Connection resets are common enough to log them as debug only.
			 */
printf( strerror(errno));
printf("Connection resets are common enough to log them as debug only.\n");

#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
			if (errno != ECONNRESET)
				syslog(LOG_ERR, "accept(): %m");
# ifdef LOG_TO_SYSLOG
			else
				syslog(LOG_INFO, "accept(): %m");
# endif
#endif
		}
		
sdebug("An incoming connection accepted")
		/*
		 * Check if the access is allowed by ACL rule.
		 */
		if (!check_acl(&addr))
		{
sdebug("ACL refused")
#ifdef LOG_TO_SYSLOG
			syslog(LOG_AUTH | LOG_NOTICE, "ACL refused from %.100s",
					inet_ntoa(addr.sin_addr));
#endif
#ifdef LOG_TO_FILE
			log_it("ACL refused from %.100s", inet_ntoa(addr.sin_addr));
#endif
		}
		else
		{

sdebug("ACL granted")
#ifdef TCP_WRAPPERS
sdebug("ifdef TCP_WRAPPERS")
			/*
			 * Initialise the tcp_wrappers request structure. Get the information
			 * about the remote machine that is connecting to us.
			 */
			request_init(&req, RQ_DAEMON, "tproxy", RQ_FILE, new_sock, 0);
			fromhost(&req);
sdebug("Initialise the tcp_wrappers request structure.\n Get the information about the remote machine that is connecting to us.")

			/*
			 * Initialise the default logging facility and level. Note that
			 * we only alfused connections. There is enough
			 * logging for valid connections elsewhere.
			 */
			deny_severity = LOG_AUTH | LOG_NOTICE;
sdebug("Initialise the default logging facility and level. ")
			/*
			 * Determine if access is allowed.
			 */
			if (!hosts_access(&req))
			{
sdebug("refused connection from")
# ifdef LOG_TO_SYSLOG
				syslog(deny_severity, "refused connection from %.100s", eval_client(&req));
# endif
# ifdef LOG_TO_FILE
				log_it("Refused connection from %.100s", eval_client(&req));
# endif
			}
			else
#endif
			{
				/*
				 * Create a new process to handle the connection.
				 */
sdebug("accepted connection from")
sdebug("Create a new process to handle the connection.")
				switch (pid = fork())
				{
				case -1:	/* Error */
					/*
					 * Under load conditions just ignore new connections.
					 */
					break;

				case 0:		/* Child */
#ifdef DO_DOUBLE_FORK
					/*
					 * Some systems like to fork again as the child. This makes the client
					 * run as a child of init so we don't have to handle reaping them.
					 * However all this forking slows us downm so it's optional.
					 */
					if (fork() > 0)	/* Parent */
						exit(0);
#endif

					/*
					 * Start the proxy work in the new socket.
					 */
					cwft = shmat( shmid2 , NULL , 0 ); 
					pRomeCfgParam=shmat(shmid,(void*)0,0);
					trans_proxy(new_sock, &addr, server_hostname, server_port);
					socket_blocking( new_sock );
					sdebug("close client sock fd")
					if( shutdown(new_sock, SHUT_WR) == -1 )
					{
						if( close(new_sock) < 0 )
							printf("--------------------close socket error----------------");
					}	
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
					closelog();
#endif
					shmdt(pRomeCfgParam);
					shmdt(cwft);
					exit(0);

				default:	/* Parent */
					/*
					 * Wait for the child process to terminate. Since it forked another
					 * child to handle the request, it should terminate quickly.
					 */
#ifdef DO_DOUBLE_FORK
					waitpid(pid, &status, 0);
#endif
					close(new_sock);
					break;
				}
			}
		}
	}	
}
		/*
		 *  the transparent proxy activity.
 */
static void trans_proxy(int sock, struct sockaddr_in *from_addr,
						char *server_hostname, short server_port)
{
	ip_address_t		server_ip;
	connection_t		conn;
	int					length;
	int					max_fd;
	fd_set				read_fd;
#ifdef IPFILTER
	natlookup_t			natlook;
#endif
	int i , arp_fd,len , ret = 0;
	FILE *arp_fp;
	char	buf[512] , ip[20] , mac[20] , dummy[20] , *macp;
	struct timeval	timeout;
	
	srand(time(0));
	
	/*
	 * Initialise the connection structure.
	 */
	memset(&conn, 0, sizeof(connection_t));
	conn.client_fd = sock;
	conn.client_addr = *from_addr;
	conn.read_buffer.free_space = sizeof(conn.read_buffer.buffer);
	conn.request.free_space = sizeof(conn.request.buffer);
	conn.auth_response.free_space = sizeof(conn.auth_response.buffer);
	
	conn.parse_state = PS_METHOD;
	conn.parse_state = PS_METHOD;
#ifdef CWF_PARENTAL	
	conn.cwf_stat = CWF_ALLOW;
sdebug("-----------------------");
sdebug("cwf sockfd %d" , conn.cwf_fd);
sdebug("-----------------------");
#endif	

#ifdef IPTABLES
	/*
	 * The first thing we do is get the IP address that the client was
	 * trying to connected to. Here lies part of the magic. Linux-2.4
	 * introduces IPTABLES which uses getsockopt instead of getsockname
	 * for a more obvious interface.
	 */
sdebug("IPTABLES support")	 
#if 0
	length = sizeof(conn.dest_addr);
	if (getsockopt(sock, SOL_IP, SO_ORIGINAL_DST, (char *)&conn.dest_addr, &length) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "getsockopt(SO_ORIGINAL_DST): %m");
#endif
		sdebug("IPTABLES support error return")	 
		return;
	}
#endif	
	conn.dest_addr.sin_port = 80 ;
sdebug("conn.client_addr.sin_addr 0x%08x" , conn.client_addr.sin_addr.s_addr )	
sdebug("conn.client_addr.sin_port %d" , conn.client_addr.sin_port )
	rtl8651_queryRedirectOutboundNaptFlow( TRUE , conn.client_addr.sin_addr.s_addr , conn.client_addr.sin_port , &(conn.dest_addr.sin_addr.s_addr) , &(conn.dest_addr.sin_port) , router_ip , 81); 
sdebug("conn.dest_addr.sin_addr 0x%08x" , conn.dest_addr.sin_addr.s_addr )	
sdebug("conn.dest_addr.sin_port %d" , conn.dest_addr.sin_port )	
	if( (conn.client_addr.sin_addr.s_addr & 0xFFFFFF00) != (router_ip & 0xFFFFFF00) )
		exit(0);
	memset( conn.client_mac , 0 , 6 );	
	if( (arp_fd = open("/proc/net/arp" , O_RDONLY )) < 0 )
	{
		sprintf(conn.client_mac , "%s" , "00%3A11%3A22%3A33%3A44%3A55");
		printf("open /proc/net/arp error ");
	}
	else
	{	
		if( (arp_fp = fdopen( arp_fd , "r" )) == NULL )
		{
			close(arp_fd);
			sprintf(conn.client_mac , "%s" , "00%3A11%3A22%3A33%3A44%3A55");
			//printf("fopen /proc/net/arp error ");
		}	
		else
		{
			while( !feof(arp_fp) )
			{
				fgets(buf , 512 , arp_fp );
				//printf("buf %s\n" , buf);
				sscanf( buf , "%s\t%s\t%s\t%s\t%s\t%s\t" , ip , dummy, dummy , mac , dummy , dummy);
				//printf("ip %s mac %s\n" , ip , mac );
				if( conn.client_addr.sin_addr.s_addr == inet_addr(ip) )
				{
					strcpy(conn.client_mac_str , mac );
					for( i = 0,macp=mac ; *macp != NULL ; i++,macp++ )
					{
						if( *macp == ':' )
							
							i += (sprintf( &(conn.client_mac[i]) , "%s" , "%3A" )) -1;
						else
							conn.client_mac[i] = *macp;
						
					}
					//printf("client mac is %s\n" , conn.client_mac );
				}	
			}	
			fclose(arp_fp);
			close(arp_fd);
		}	
	}
#else/*!IPTABLES*/

	/*
	 * The first thing we do is get the IP address that the client was
	 * trying to connected to. Here lies part of the magic. Normally
	 * getsockname returns our address, but not with transparent proxying.
	 */
	length = sizeof(conn.dest_addr);
	if (getsockname(sock, (struct sockaddr *)&conn.dest_addr, &length) < 0)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "getsockname(): %m");
#endif
		return;
	}

#if IPFILTER
	/*
	 * However, under IPFILTER, we have to do additional work. The "to_addr"
	 * has been changed by the IP filter to trick the IP stack into
	 * processing the packet locally. We need to lookup the real remote
	 * address ourselves using an ioctl().
	 */

	/*
	 * Build up the NAT natlookup structure.
	 */
	memset(&natlook, 0, sizeof(natlook));
	natlook.nl_inip = conn.dest_addr.sin_addr;
	natlook.nl_outip = conn.client_addr.sin_addr;
	natlook.nl_flags = IPN_TCP;
	natlook.nl_inport = conn.dest_addr.sin_port;
	natlook.nl_outport = conn.client_addr.sin_port;

	/*
	 * Use the NAT device to lookup the mapping pair.
	 */
	if (ioctl(natdev, SIOCGNATL, &natlook) == -1)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "ioctl(SIOCGNATL): %m");
#endif
		return;
	}

	conn.dest_addr.sin_addr = natlook.nl_realip;
	conn.dest_addr.sin_port = natlook.nl_realport;
#endif

#endif/*!IPTABLES*/

	/*
	 * Lookup proxy server IP address. Because we do the lookup for every
	 * request we make use of DNS round-robin for load balancing.
	 */
sdebug("(%s)%d" , __FUNCTION__ , __LINE__ )	 
	server_ip = getipaddress(server_hostname);
sdebug("server_ip 0x%08x\n" , server_ip)	
	if (server_ip == INADDR_NONE)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		syslog(LOG_ERR, "Could not resolve IP address for proxy: %s", server_hostname);
#endif
		return;
	}

	/*
	 * Connect to the proxy server (or to the original destination in the case
	 * of fully transparent mode, or a failed connect to the proxy).
	 */
#ifndef CWF_PARENTAL	 
	if (fully_transparent ||
		(conn.proxy_fd = connect_to_proxy(server_ip, server_port)) == -1)
	{
		if (!proxy_only)
		{
			conn.proxy_fd = connect_to_proxy(conn.dest_addr.sin_addr.s_addr, conn.dest_addr.sin_port);
sdebug("ip 0x%08x conn.proxy_fd %d" , conn.dest_addr.sin_addr.s_addr , conn.proxy_fd)
			fully_transparent = 1;
		}
		else
		{
			conn.proxy_fd = -1;
		}
	}
#else	
	//conn.proxy_fd = connect_to_proxy(conn.dest_addr.sin_addr.s_addr, conn.dest_addr.sin_port);
//sdebug("ip 0x%08x conn.proxy_fd %d" , conn.dest_addr.sin_addr.s_addr , conn.proxy_fd)
#endif
/*
	if (conn.proxy_fd == -1)
	{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
		if (fully_transparent)
			syslog(LOG_ERR, "Could not connect to destination");
		else if (proxy_only)
			syslog(LOG_ERR, "Could not connect to proxy host \"%s\"", server_hostname);
		else
			syslog(LOG_ERR, "Could not connect to proxy host \"%s\" or destination", server_hostname);
#endif
sdebug("conn.proxy_fd == -1")
		return;
	}
*/	
	/*
	 * This loop acts a bit like the guy in the middle of a "bucket brigade".
	 * When the client passes some data, it gets handed off to the server,
	 * and vise-versa. However for data received from the client, it is
	 * buffered until a full request is received. Once a full request is
	 * received, the request is re-written before being sent to the server.
	 */
#ifdef CWF_PARENTAL	 
	conn.cwf_fd = -1; 
#endif	
	socket_nonblocking(conn.client_fd);
	
	for (;;)
	{
		/*
		 * Construct a select read mask from both file descriptors.
		 */
		if( conn.proxy_fd <= 0 )
			if( (conn.proxy_fd = connect_to_proxy(conn.dest_addr.sin_addr.s_addr, conn.dest_addr.sin_port)) == -1 )
				continue;
					
		socket_nonblocking(conn.proxy_fd);
sdebug("tran_proxy --> start for")
		FD_ZERO(&read_fd);
		FD_SET(conn.client_fd, &read_fd);
		FD_SET(conn.proxy_fd, &read_fd);
		max_fd = FD_MAX(conn.client_fd, conn.proxy_fd);
#ifdef CWF_PARENTAL	 
		if( conn.cwf_fd > 0 )
		{
			FD_SET(conn.cwf_fd, &read_fd);
			max_fd = FD_MAX(max_fd , conn.cwf_fd);
			socket_nonblocking(conn.cwf_fd);
		}
#endif		
sdebug("proxy_fd %d" , conn.proxy_fd)			
sdebug("cwf_fd %d" , conn.cwf_fd)			
sdebug("client_fd %d" , conn.client_fd)			
sdebug("max_fd %d" , max_fd)			
		/*
		 * Disconnect after some period of in-activity.
		 */
		
		/*
		 * Wait for some data to be read. If we get an signal then
		 * ignore the -1 return and try again.
		 */
		timeout.tv_sec = 120 ;
		timeout.tv_usec = 0;
		
		ret = select(max_fd + 1, &read_fd, NULL, NULL, &timeout);
		 
		if ( ret < 0)
		{
			if (errno != EINTR)
			{
				sdebug("select():");
				close(conn.proxy_fd);
				return;
			}
		}
		else if( ret == 0 )//timeout
		{
			close(conn.proxy_fd);
			close(conn.client_fd);
			close(conn.cwf_fd);
			return;	
		}
sdebug("After select")
		/*
		 * We have something so disable the alarm.
		 */
		
		/*
		 * See if any data can be read from the client.
		 */
sdebug("After alarm")
#ifdef CWF_PARENTAL	 
sdebug("conn.client_fd %d " , conn.client_fd );
#endif
		if (FD_ISSET(conn.client_fd, &read_fd))
		{
sdebug("FD_ISSET(conn.client_fd, &read_fd)")			
			switch (length = read(conn.client_fd,
					&conn.request.buffer[conn.request.head],
					conn.request.free_space - conn.request.head))
			{
			case -1:
				sdebug("client fd error")			
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
				if (errno != ECONNRESET)
					syslog(LOG_WARNING, "read(client) failed: %m");
# ifdef LOG_TO_SYSLOG
				else
					syslog(LOG_INFO, "read(client) failed: %m");
# endif
#endif
				if( close(conn.proxy_fd) < 0 )
					printf("%s\n" , strerror(errno));
				return;

			case 0:
			sdebug("client length = %d ,conn.request.head = %d" , length,conn.request.head)
sdebug("conn.request.free_space %d " , conn.request.free_space);
//sdebug("client close fd conn.proxy_fd %d" , conn.proxy_fd);
				if( (conn.request.free_space - conn.request.head) > 0)
				{
					if( close(conn.proxy_fd) < 0 )
						printf("%s\n" , strerror(errno));
					return;
				}	
				//close(conn.client_fd);
				continue;
				//return;

			default:
				/*
				 * Take into account this new data chunk.
				 */
				conn.request.head += length;
sdebug("conn.request.free_space %d " , conn.request.free_space);
sdebug("conn.request.length %d " , length);
sdebug("conn.client_fd %d" , conn.client_fd);
sdebug("conn.proxy_fd %d " , conn.proxy_fd);
				
				/*
				 * Process requests read from the client. Returns 0 if a
				 * processed request could not be written to the proxy.
				 */
#ifdef CWF_PARENTAL	 
				 
				alarm(cwf_timeout_timer);
				confirm_client_request_with_cwf(&conn, length) ;
#else
				if (!process_client_request(&conn, length))
				{
#ifdef LOG_TO_SYSLOG
					syslog(LOG_WARNING, "write(proxy) failed: %m");
#endif
					if( close(conn.proxy_fd) < 0 )
						printf("%s\n" , strerror(errno));
					return;
				}
#endif				
				break;
			}
		}
#ifdef CWF_PARENTAL	 
		/*
		 * See if any data can be read from the proxy.
		 */
#ifdef CWF_PARENTAL	 
sdebug("conn.cwf_fd %d " , conn.cwf_fd );
#endif
		if (conn.cwf_fd > 0 && FD_ISSET(conn.cwf_fd, &read_fd) )
		{
sdebug("process_auth_response conn.auth_response.head %d" , conn.auth_response.head)				 
			switch (length = read(conn.cwf_fd,
					&conn.auth_response.buffer[conn.auth_response.head],
					conn.auth_response.free_space - conn.auth_response.head))
			{
			case -1:
				sdebug("cwf_fd error")	
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
				syslog(LOG_WARNING, "read(proxy) failed: %m");
#endif
				if( close(conn.cwf_fd) < 0 )
					printf("%s\n" , strerror(errno));
				return;

			case 0:
/*sdebug("cwf close fd conn.cwf_fd %d" , conn.cwf_fd);
				return;*/
				sdebug("close cwf_fd")				
				if( close(conn.cwf_fd) < 0 )
					printf("%s\n" , strerror(errno));
				FD_CLR( conn.cwf_fd , &read_fd);
				conn.cwf_fd=-1;
				break;
			default:
				/*
				 * Take into account this new data chunk.
				 */
				alarm(0);
				conn.auth_response.head += length;

				/*
				 * Process responses read from the proxy. Returns 0 if a
				 * processed request could not be written to the client.
				 */
sdebug("process_auth_response read_fd 0x%08x" , read_fd)				 
				process_auth_response(&conn, length);
				if( conn.cwf_stat == CWF_ALLOW && conn.request.head > 0 )
				{
sdebug("process_client_request read_fd 0x%08x" , read_fd)				 
					if (!process_client_request(&conn, conn.request.head))
					{
						sdebug("write(proxy) failed");
						close(conn.proxy_fd);
						return;
					}
				}
				else
				{
					socket_blocking(conn.proxy_fd);
					close(conn.proxy_fd);
					return;
				}	
				break;
			}
		}
#endif
		/*
		 * See if any data can be read from the proxy.
		 */
#ifdef CWF_PARENTAL	 
sdebug("conn.proxy_fd %d " , conn.proxy_fd );
#endif
		if (FD_ISSET(conn.proxy_fd, &read_fd) )
		{
sdebug("FD_ISSET(conn.proxy_fd, &read_fd)")						
			switch (length = read(conn.proxy_fd,
					&conn.read_buffer.buffer[conn.read_buffer.head],
					conn.read_buffer.free_space - conn.read_buffer.head))
			{
			case -1:
				sdebug("read(proxy) failed");
				if( close(conn.proxy_fd) < 0 )
					printf("%s\n" , strerror(errno));
				return;

			case 0:
/*sdebug("proxy close fd conn.proxy_fd %d" , conn.proxy_fd);*/
				sdebug("close proxy");
				//close(conn.client_fd);
				if( close(conn.proxy_fd) < 0 )
					printf("%s\n" , strerror(errno));
				FD_CLR( conn.proxy_fd , &read_fd);
				conn.proxy_fd = -1;
				return;
			default:
				/*
				 * Take into account this new data chunk.
				 */
				conn.read_buffer.head += length;
				/*
				 * Process responses read from the proxy. Returns 0 if a
				 * processed request could not be written to the client.
				 */
sdebug("process_proxy_response read_fd 0x%08x" , read_fd)				 				 
				if (!process_proxy_response(&conn, length))
				{
#ifdef LOG_TO_SYSLOG
					syslog(LOG_WARNING, "write(client) failed: %m");
#endif
sdebug("write client error")
					
					return;
				}
				break;
			}
		}
	}
}

/*
 * Process responses read from the proxy. Returns 0 if a
 * processed request could not be written to the client.
 */
static int process_proxy_response(connection_t *conn, size_t last_read)
{
	/*
	 * Write the response to the client.
	 */
#ifdef CWF_PARENTAL	 
	 
	switch( conn->cwf_stat)
	{ 
		case CWF_BLOCK:
sdebug("case CWF_BLOCK:")		
			conn->read_buffer.head = 0;
			return (0);
		case CWF_WAIT_RESPONSE:
sdebug("case CWF_WAIT_RESPONSE:")		
			return (1);
		case CWF_ALLOW:	
sdebug("case CWF_ALLOW:")		
#endif
			if (!send_data(conn->client_fd, conn->read_buffer.buffer, conn->read_buffer.head))
				return (0);
		
			/*
			 * Now that all data is written, reset the "head" index.
			 */
			conn->read_buffer.head = 0;
			return (1);
#ifdef CWF_PARENTAL	 
	}
#endif
}

/*
 * Process requests read from the client. Returns 0 if a
 * processed request could not be written to the proxy.
 *
 * Requests are parsed by way of a state machine. The
 * request is only written to the proxy when it has been
 * fully read and processed.
 */
static int process_client_request(connection_t *conn, size_t last_read)
{
	size_t	index;
	size_t	send_size;
	int		c;
	int		request_change;
#if defined(LOG_TO_SYSLOG) || defined(LOG_TO_FILE)
	char	client_host[HOSTNAME_SIZE];
#endif
	char	request_buffer[BUFFER_SIZE];
	char	request_port[16];
#if defined(LOG_TO_SYSLOG) || defined(LOG_TO_FILE)
	char	*url_string;
#endif
	/*
	 * Start the processing over again. Called when switching to
	 * transparent mode after a CONNECT method is received.
	 */
reprocess_buffer:

	/*
	 * Transparent mode simply sends any read data to the proxy.
	 */
	alarm(0); 
	if (conn->parse_state == PS_TRANSPARENT)
	{
		/*
		 * Write the buffer to the proxy.
		 */
sdebug("process_client_request send data %d" , conn->request.head)	
		if ( (c= send_data(conn->proxy_fd, conn->request.buffer, conn->request.head)) == 0 )
			return (0);
		conn->request.head = 0;
		
	}
	else
	{
sdebug("process_client_request else")		 
		/*
		 * Loop over the data that has just been added to the request buffer.
		 */
		index = conn->request.head - last_read;
		while (index < conn->request.head)
		{
			/*
			 * Fetch the next character to process.
			 */
			c = conn->request.buffer[index];

			/*
			 * Parse the data that we currently have. This state machine handles HTTP/0.9
			 * requests that don't include headers, as well as HTTP/1.x requests that
			 * do include headers and are terminated with a blank line.
			 */
			switch (conn->parse_state)
			{
			case PS_METHOD:
				if (c == '\r')					conn->parse_state = PS_METHOD + 1;
				else if (c == '\n')				conn->parse_state = PS_END_OF_REQUEST;
				else if (c == ' ') {			conn->parse_state = PS_METHOD_END;
					conn->method_end_offset = index;
				}
				break;

			case PS_METHOD + 1:
				if (c == '\n')					conn->parse_state = PS_END_OF_REQUEST;
				else							conn->parse_state = PS_METHOD;
				break;

			case PS_METHOD_END:
				if (c == '\r')					conn->parse_state = PS_METHOD_END + 1;
				else if (c == '\n')				conn->parse_state = PS_END_OF_REQUEST;
				else if (c != ' ') {			conn->parse_state = PS_URI;
					conn->url_offset = index;
				}
				break;

			case PS_METHOD_END + 1:
				if (c == '\n')					conn->parse_state = PS_END_OF_REQUEST;
				else							conn->parse_state = PS_METHOD_END;
				break;

			case PS_URI:
				if (c == '\r') {				conn->parse_state = PS_URI + 1;
					conn->url_end_offset = index;
				}
				else if (c == '\n') {			conn->parse_state = PS_END_OF_REQUEST;
					conn->url_end_offset = index;
				}
				else if (c == ' ') {			conn->parse_state = PS_URI_END;
					conn->url_end_offset = index;
				}
				break;

			case PS_URI + 1:
				if (c == '\n')					conn->parse_state = PS_END_OF_REQUEST;
				else							conn->parse_state = PS_URI;
				break;

			case PS_URI_END:
				if (c == '\r')					conn->parse_state = PS_URI_END + 1;
				else if (c == '\n')				conn->parse_state = PS_END_OF_REQUEST;
				else if (c != ' ') {			conn->parse_state = PS_VERSION;
					conn->version_offset = index;
				}
				break;

			case PS_URI_END + 1:
				if (c == '\n')					conn->parse_state = PS_END_OF_REQUEST;
				else							conn->parse_state = PS_URI_END;
				break;

			case PS_VERSION:
				if (c == '\r')					conn->parse_state = PS_VERSION + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				break;

			case PS_VERSION + 1:
				if (c == '\n')					conn->parse_state = PS_HEADER_END;
				else							conn->parse_state = PS_VERSION;
				break;

			case PS_HEADER:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				break;

			case PS_HEADER + 1:
				if (c == '\n')					conn->parse_state = PS_HEADER_END;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HEADER_END:
				if (c == '\r')					conn->parse_state = PS_HEADER_END + 1;
				else if (c == '\n') {
					if (conn->content_length > 0)
						conn->parse_state = PS_POST_DATA;
					else
						conn->parse_state = PS_END_OF_REQUEST;
				}
				else if (c == 'H' || c == 'h')	conn->parse_state = PS_HOST_HEADER;
				else if (c == 'R' || c == 'r')	conn->parse_state = PS_REFERER_HEADER;
				else if (c == 'C' || c == 'c')	conn->parse_state = PS_LENGTH_HEADER;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HEADER_END + 1:
				if (c == '\n') {
					if (conn->content_length > 0)
						conn->parse_state = PS_POST_DATA;
					else
						conn->parse_state = PS_END_OF_REQUEST;
				}
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HOST_HEADER:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'O' || c == 'o')	conn->parse_state = PS_HOST_HEADER + 1;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HOST_HEADER + 1:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'S' || c == 's')	conn->parse_state = PS_HOST_HEADER + 2;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HOST_HEADER + 2:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'T' || c == 't')	conn->parse_state = PS_HOST_HEADER + 3;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HOST_HEADER + 3:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == ':')				conn->parse_state = PS_HOST_HEADER + 4;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_HOST_HEADER + 4:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c != ' ') {			conn->parse_state = PS_HOST_HEADER + 5;
					conn->host_header[conn->host_header_length++] = c;
				}
				break;

			case PS_HOST_HEADER + 5:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (conn->host_header_length < (sizeof(conn->host_header) - 1))
					conn->host_header[conn->host_header_length++] = c;
				break;

			case PS_REFERER_HEADER:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'E' || c == 'e')	conn->parse_state = PS_REFERER_HEADER + 1;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 1:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'F' || c == 'f')	conn->parse_state = PS_REFERER_HEADER + 2;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 2:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'E' || c == 'e')	conn->parse_state = PS_REFERER_HEADER + 3;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 3:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'R' || c == 'r')	conn->parse_state = PS_REFERER_HEADER + 4;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 4:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'E' || c == 'e')	conn->parse_state = PS_REFERER_HEADER + 5;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 5:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'R' || c == 'r')	conn->parse_state = PS_REFERER_HEADER + 6;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 6:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == ':')				conn->parse_state = PS_REFERER_HEADER + 7;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_REFERER_HEADER + 7:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c != ' ') {			conn->parse_state = PS_REFERER_HEADER + 8;
					conn->referer_header[conn->referer_header_length++] = c;
				}
				break;

			case PS_REFERER_HEADER + 8:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (conn->referer_header_length < (sizeof(conn->referer_header) - 1))
					conn->referer_header[conn->referer_header_length++] = c;
				break;

			case PS_LENGTH_HEADER:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'O' || c == 'o')	conn->parse_state = PS_LENGTH_HEADER + 1;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 1:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'N' || c == 'n')	conn->parse_state = PS_LENGTH_HEADER + 2;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 2:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'T' || c == 't')	conn->parse_state = PS_LENGTH_HEADER + 3;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 3:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'E' || c == 'e')	conn->parse_state = PS_LENGTH_HEADER + 4;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 4:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'N' || c == 'n')	conn->parse_state = PS_LENGTH_HEADER + 5;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 5:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'T' || c == 't')	conn->parse_state = PS_LENGTH_HEADER + 6;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 6:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == '-')				conn->parse_state = PS_LENGTH_HEADER + 7;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 7:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'L' || c == 'l')	conn->parse_state = PS_LENGTH_HEADER + 8;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 8:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'E' || c == 'e')	conn->parse_state = PS_LENGTH_HEADER + 9;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 9:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'N' || c == 'n')	conn->parse_state = PS_LENGTH_HEADER + 10;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 10:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'G' || c == 'g')	conn->parse_state = PS_LENGTH_HEADER + 11;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 11:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'T' || c == 't')	conn->parse_state = PS_LENGTH_HEADER + 12;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 12:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == 'H' || c == 'h')	conn->parse_state = PS_LENGTH_HEADER + 13;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 13:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c == ':')				conn->parse_state = PS_LENGTH_HEADER + 14;
				else							conn->parse_state = PS_HEADER;
				break;

			case PS_LENGTH_HEADER + 14:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c != ' ') {			conn->parse_state = PS_LENGTH_HEADER + 15;
					if (c >= '0' && c <= '9')
						conn->content_length = c - '0';
					else
						conn->content_length = 0;
				}
				break;

			case PS_LENGTH_HEADER + 15:
				if (c == '\r')					conn->parse_state = PS_HEADER + 1;
				else if (c == '\n')				conn->parse_state = PS_HEADER_END;
				else if (c >= '0' && c <= '9') {
					conn->content_length *= 10;
					conn->content_length += c - '0';
				}
				break;

			case PS_POST_DATA:
				if (conn->content_length <= 1)	conn->parse_state = PS_END_OF_REQUEST;
				else
					--conn->content_length;
				break;

			case PS_TRANSPARENT:
				break;
			}

			/*
			 * We have now officially "consumed" the character.
			 */
			++index;

#ifdef DEBUG
			/*
			 * Print the current character and the parse state.
			 */
			if (c >= ' ' && c <= '~')
				printf("Char:    %c, parse state %d\n", c, conn->parse_state);
			else
				printf("Char: 0x%02x, parse state %d\n", c, conn->parse_state);
#endif

			/*
			 * OK we have parsed a complete request.
			 */
			if (conn->parse_state == PS_END_OF_REQUEST)
			{
				/*
				 * Keep track of how many requests per connection.
				 */
				++conn->request_number;

				/*
				 * If we didn't find a Host: header then do a DNS lookup.
				 */
				if (!fully_transparent && conn->host_header_length == 0)
				{
					lookup_hostname(&conn->dest_addr, conn->host_header,
							sizeof(conn->host_header), 1);
					conn->host_header_length = strlen(conn->host_header);

					request_change = RC_DNSLOOKUP;
				}
				else
				{
					conn->host_header[conn->host_header_length] = '\0';

					request_change = RC_NODNS;
				}

#ifdef DEBUG_INPUT_REQUESTS
				/*
				 * For debugging dump out the original request.
				 */
				print_request("Got  : ", conn->request.buffer, index);
#endif

				/*
				 * Build the resulting request into "request_buffer" and set "send_size"
				 * to the length of the request. This enables the final request to be
				 * written with a single write(2) system call. This should be more
				 * efficient for both transproxy and the proxy.
				 */
				if ((fully_transparent) ||
					(strncasecmp(conn->request.buffer, "CONNECT ", 8) == 0))
				{
					/*
					 * Leave the request as it is. Transparent mode is usefull for
					 * operation in a proxy firewall. Or HTTPS protocol doesn't
					 * like modifications so just pass the request on.
					 */
					memcpy(request_buffer, conn->request.buffer, index);
					send_size = index;

					request_change = RC_TRANSPARENT;
				}
				else if (force_url && conn->url_offset > 0)
				{
					/*
					 * Check if the request was referred to by the forced URL.
					 */
					if ((conn->referer_header_length > 0) &&
						(strcmp(conn->referer_header, force_url) == 0))
					{
						/*
						 * It appears that the request is for a page that is
						 * referred to by the original forced URL. In this case
						 * we must let it pass un-changed.
						 */
						memcpy(request_buffer, conn->request.buffer, index);
						send_size = index;
					}
					else
					{
						/*
						 * Force the request to the configured URL. Any images referred to
						 * by this forced URL will work because of the previous check for
						 * requests that have been referred to by the forced URL.
						 */
						send_size = 0;
						memcpy(&request_buffer[send_size], conn->request.buffer, conn->url_offset);
						send_size += conn->url_offset;
						memcpy(&request_buffer[send_size], force_url, force_url_length);
						send_size += force_url_length;
						memcpy(&request_buffer[send_size], &conn->request.buffer[conn->url_end_offset], index - conn->url_end_offset);
						send_size += index - conn->url_end_offset;
						conn->url_end_offset = conn->url_offset + force_url_length;
					}

					request_change = RC_FORCED;
				}
				else if (conn->url_offset > 0 &&
						 conn->request.buffer[conn->url_offset] == '/')
				{
					/*
					 * The request was provided with a URI so we must re-write the request
					 * to a URL of the form {http://hostname}/URI.
					 */
					send_size = 0;
					memcpy(&request_buffer[send_size], conn->request.buffer, conn->url_offset);
					send_size += conn->url_offset;
					memcpy(&request_buffer[send_size], "http://", 7);
					send_size += 7;
					conn->url_end_offset += 7;
					memcpy(&request_buffer[send_size], conn->host_header, conn->host_header_length);
					send_size += conn->host_header_length;
					conn->url_end_offset += conn->host_header_length;
					if ((ntohs(conn->dest_addr.sin_port) != 80) &&
#ifdef USE_STRSTR_BUG
						(strstr(conn->host_header, ":") == NULL))
#else
						(strchr(conn->host_header, ':') == NULL))
#endif
					{
						sprintf(request_port, ":%u", ntohs(conn->dest_addr.sin_port));
						memcpy(&request_buffer[send_size], request_port, strlen(request_port));
						send_size += strlen(request_port);
						conn->url_end_offset += strlen(request_port);
					}
					memcpy(&request_buffer[send_size], &conn->request.buffer[conn->url_offset], index - conn->url_offset);
					send_size += index - conn->url_offset;
				}
				else
				{
					/*
					 * The request didn't appear to have a URI or URL specified. so
					 * leave the request as it is.
					 */
					memcpy(request_buffer, conn->request.buffer, index);
					send_size = index;

					request_change = RC_TRANSPARENT;
				}

				/*
				 * Write the request to the proxy.
				 */
				if (!send_data(conn->proxy_fd, request_buffer, send_size))
					return (0);

#ifdef DEBUG_OUTPUT_REQUESTS
				/*
				 * For debugging dump out the new request.
				 */
				print_request("Sent : ", request_buffer, send_size);
#endif

#if defined(LOG_TO_SYSLOG) || defined(LOG_TO_FILE)
				/*
				 * Find a pretty name for the client.
				 */
				lookup_hostname(&conn->client_addr, client_host, sizeof(client_host), 0);

				/*
				 * Get the URL for logging.
				 */
				if (conn->url_offset > 0)
				{
					url_string = &request_buffer[conn->url_offset];
					request_buffer[conn->url_end_offset] = '\0';
				}
				else
					url_string = "-";

				/*
				 * Log the request.
				 */
				switch (request_change)
				{
				case RC_TRANSPARENT:
# ifdef LOG_TO_SYSLOG
					syslog(LOG_NOTICE, "Transparent   %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
# ifdef LOG_TO_FILE
					log_it("Transparent   %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
					break;

				case RC_FORCED:
# ifdef LOG_TO_SYSLOG
					syslog(LOG_NOTICE, "Forced        %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
# ifdef LOG_TO_FILE
					log_it("Forced        %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
					break;

				case RC_DNSLOOKUP:
# ifdef LOG_TO_SYSLOG
					syslog(LOG_NOTICE, "Request       %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
# ifdef LOG_TO_FILE
					log_it("Request       %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
					break;

				case RC_NODNS:
# ifdef LOG_TO_SYSLOG
					syslog(LOG_NOTICE, "Request_NoDNS %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
# ifdef LOG_TO_FILE
					log_it("Request_NoDNS %d %s -> %s",
							conn->request_number, client_host, url_string);
# endif
					break;
				}
#endif

				/*
				 * If there is any more data after the current request,
				 * then shift it down in the buffer. Then continue with
				 * the next request.
				 */
				if (index < conn->request.head)
				{
					memcpy(conn->request.buffer, &conn->request.buffer[index],
							conn->request.head - index);
					conn->request.head -= index;
				}
				else
					conn->request.head = 0;

				/*
				 * It we received a CONNECT method then we break out of
				 * the request parsing mode and simply pass data to the
				 * proxy transparently.
				 */
				if (strncasecmp(request_buffer, "CONNECT ", 8) == 0)
				{
					/*
					 * Switch the parser state to transparent mode.
					 */
					conn->parse_state = PS_TRANSPARENT;

					/*
					 * Check if there is any data in the buffer that
					 * should be sent now in transparent mode.
					 */
					goto reprocess_buffer;
				}
				else
				{
					/*
					 * Re-initialise the parser state.
					 */
					conn->parse_state = PS_METHOD;
					conn->url_offset = 0;
					conn->version_offset = 0;
					conn->host_header[0] = '\0';
					conn->host_header_length = 0;
					conn->referer_header_length = 0;
					conn->content_length = 0;
				}
			}
		}
	}

	return (1);
}

/*
 * Send data to a file descriptor (sock). Re-try if the write returns
 * after not sending all of the data.
 */
static int send_data(int fd, char *data, size_t length)
{
	size_t	index;
	size_t	written;

	/*
	 * Loop while there is data to process.
	 */
	for (index = 0; index < length; index += written)
	{
		written = write(fd, &data[index], length - index);
sdebug("written %d" , written )
		if (written < 0)
			return (0);
	}

	return (1);
}

#if defined(DEBUG_INPUT_REQUESTS) || defined(DEBUG_OUTPUT_REQUESTS)
/*
 * Print an HTTP request.
 */
static void print_request(char *prefix, char *data, size_t length)
{
	size_t	index;
	int		c;
	int		print_prefix = 1;

	for (index = 0; index < length; ++index)
	{
		if (print_prefix)
			printf("%s", prefix);

		c = data[index];

		if (c >= ' ' && c <= '~')
			printf("%c", c);
		else if (c == '\r')
			printf("\\r");
		else if (c == '\n')
			printf("\\n\n");
		else
			printf(".");

		print_prefix = (c == '\n');
	}

	if (!print_prefix)
		printf("\n");
}
#endif

/*
 * Write out a pid file.
 */
static void write_pid(char *prog)
{
	char	filename[1024];
	FILE	*fp;

	sprintf(filename, "%s%s.pid", _PATH_VARRUN, prog);
	if ((fp = fopen(filename, "w")) != NULL)
	{
		fprintf(fp, "%lu\n", (unsigned long)getpid());
		fclose(fp);
	}
}

/*
 * Catch alarm signals and exit.
 */
static void alarm_signal(int sig)
{
#if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
	syslog(LOG_NOTICE, "Alarm signal caught - connection timeout");
#endif
sdebug("Alarm signal caught - connection timeout")
sdebug("cwf_timeout_action = %d" , cwf_timeout_action)
	if( cwf_timeout_action  == CWF_BLOCK )
		exit(0);
	else
	{
sdebug("cwft->cwf_timeouted = %d" , cwft->cwf_timeouted)
		cwft->cwf_timeouted = 1;
		exit(0) ;		
	}
}

/*
 * Catch termination signal and exit.
 */
static void term_signal(int sig)
{
	char	filename[1024];

	sprintf(filename, "%s%s.pid", _PATH_VARRUN, prog);
	unlink(filename);
	rtl8651_unregisterRedirectOutboundNaptFlow(TRUE ,0,0,0,80,0,81);
	shmdt(pRomeCfgParam);
#ifdef LOG_TO_SYSLOG
	syslog(LOG_NOTICE, "Termination signal caught - exiting");
#endif
	exit(1);
}

#ifdef LOG_TO_FILE
/*
 * Catch HUP signals and re-open the log file.
 */
static void hup_signal(int sig)
{
	signal(sig, hup_signal);

	/*
	 * Close the current log file.
	 */
	if (log_file)
	{
		fclose(log_file);
		log_file = NULL;
	}

	/*
	 * Re-open the log file if it is closed.
	 */
	if (log_file == NULL && log_file_name)
	{
		log_file = fopen(log_file_name, "a");
# ifdef LOG_TO_FILE_LINEBUFF
		if (log_file)
			setvbuf(log_file, NULL, _IOLBF, BUFSIZ);
# endif
	}

# if defined(LOG_TO_SYSLOG) || defined(LOG_FAULTS_TO_SYSLOG)
	if (log_file)
		syslog(LOG_NOTICE, "HUP signal caught - re-open log '%s'", log_file_name);
	else if (log_file_name)
		syslog(LOG_NOTICE, "HUP signal caught - re-open failed '%s'", log_file_name);
# endif
}

/*
 * Append an entry to the log file.
 */
static void log_it(char *fmt, ...)
{
	time_t	now;
#ifndef __EMBEDDED__
	char	date[20];
#endif
	va_list	args;

	if (log_file)
	{
		time(&now);
#ifndef __EMBEDDED__
		strftime(date, sizeof(date), "%Y/%m/%d %H:%M:%S", localtime(&now));
		fprintf(log_file, "%s  ", date);
#else
		fprintf(log_file, "%ul (s)  ", now);
#endif
		va_start(args, fmt);
		vfprintf(log_file, fmt, args);
		va_end(args);
		fprintf(log_file, "\n");
	}
}
#endif

#ifdef CWF_PARENTAL
/* NOTHING , reference only
typedef struct buffer_
{
	byte_t				buffer[BUFFER_SIZE];
	int					head;
	int					free_space;
}	buffer_t;
*/

int confirm_client_request_with_cwf(connection_t *conn, size_t last_read )
{
	
	char *ignore_list[12] ={".js",".gif", ".jpg", ".jpe", ".jpeg", ".tiff", ".tif", ".png", ".bmp", ".crl", ".css", (char*)0};
	byte_t cwfbuf[BUFFER_SIZE];
	byte_t cwfsendbuf[BUFFER_SIZE];
	byte_t cwftmp[BUFFER_SIZE];
	int i = 0 , len;
	char *url , *host , *cwfp , *p1;
	unsigned short 		cwf_port;
	int	unblock_mac = 0;
   FILE  *fp;
	
	memset(cwfbuf , 0 , BUFFER_SIZE);
	url = strchr(conn->request.buffer , '\r');
	if( url != NULL && *(url+1) == '\n')
	{
		memcpy( cwfbuf , conn->request.buffer , (unsigned int)url - (unsigned int)(conn->request.buffer) );
		sdebug("first cmd %s",cwfbuf)
	}
	unblock_mac = 0 ; 
	if( (fp =fopen("/var/allowed_mac","r")) != NULL )
	{
		fgets( pRomeCfgParam->gemtekCfgParam.parental_mac , 18 , fp );
		fclose(fp); 
sdebug("uimac %s\n",pRomeCfgParam->gemtekCfgParam.parental_mac)	
sdebug("gamble: %s\n",pRomeCfgParam->gemtekCfgParam.wl0_ssid)	
sdebug("agmac %s\n",conn->client_mac_str)	
	if( strlen(pRomeCfgParam->gemtekCfgParam.parental_mac) > 0 && !strcmp( conn->client_mac_str ,pRomeCfgParam->gemtekCfgParam.parental_mac) )
		unblock_mac =1;
		
		
	}	
	/*check if this is a GET request*/
	if( strstr( cwfbuf , "GET") && cwft->cwf_timeouted==0 && !unblock_mac )
	{
sdebug("This is an GET request")
		memcpy( cwfbuf , conn->request.buffer , last_read );
		url = cwfp = cwfbuf;
		url = strsep( &cwfp , "\r");
sdebug("url %s " , url)
		for( ; cwfp != NULL ; )
		{
			host = strsep( &cwfp , "\r");
sdebug("host %s " , host)
			if( strstr( host , "Host: "))
				break;
		}

		/*check if this request could be ignored*/
		for( i = 0 ; i < 11 ; i++)
		{			
			if( strstr(url , ignore_list[i]) )
			{
sdebug("in the ignore list ")
				conn->parse_state = PS_TRANSPARENT;
				if (!process_client_request(conn, conn->request.head))
				{
					close(conn->proxy_fd);
					return;
				}
				//close(conn->cwf_fd);
				conn->cwf_stat = CWF_ALLOW;
				return CWF_ALLOW;
			}	
		}
sdebug("Not in the ignore list ")
		/*process request*/
		url = strchr( url , '/');
		url ++;
sdebug("url %s" , url)
		len = sprintf(cwfsendbuf , "GET /A/71/%s/%s/-/0/%s/80/%s\r\n" 
					 "Accept: */*\r\n"
					 "Accept-Language: en-us\r\n"
					 "Host:  sp.cwfservice.net:80\r\n"
					 "Connection: close\r\n\r\n" 
#ifdef NOSN					 
					 ,BEL_SerialNumber
#else
					,"BEL1MOUZ"					 
#endif					
					,conn->client_mac,host+7,url);
		sprintf( conn->cwf_url , "http://%s/%s" , host+7,url );
sdebug("cwfsendbuf %s " , cwfsendbuf)
sdebug("cwfsendbuf len %d strlen %d" , len , strlen(cwfsendbuf))
		cwf_port = CWF_PORT;
sdebug("cwf_host_count %d" , cwf_host_count)
		if(  cwf_host_count > 1 )
		{
			for( i = ( rand()%(cwf_host_count-1)) ; i < cwf_host_count ; i++ )
			{
		sdebug("cwf_ip%d= %s " ,i, cwf_ip[i] )		
				if( (conn->cwf_fd = connect_to_cwf(inet_network(cwf_ip[i]), cwf_port)) != -1 )
					break;
			}	
		}
		else
		{
			if( (conn->cwf_fd = connect_to_cwf(inet_network(cwf_ip[0]), cwf_port)) == -1 )
				return 0;
		}	

sdebug("conn->cwf_fd %d " , conn->cwf_fd)
		if (!send_data(conn->cwf_fd, cwfsendbuf, len))
		{
sdebug("cwfsendbuf error ")
			close( conn->cwf_fd );
			return (0);
		}	
		
		conn->cwf_stat = CWF_WAIT_RESPONSE;
		return CWF_WAIT_RESPONSE;
	}
	else
	{
		conn->parse_state = PS_TRANSPARENT;
sdebug("process request directly")		
		if (!process_client_request(conn, conn->request.head))
		{
sdebug("error close(conn->proxy_fd)")		
			close(conn->proxy_fd);
			return;
		}
		conn->cwf_stat = CWF_ALLOW;
		return CWF_ALLOW;
	}
}


int process_auth_response( connection_t *conn, size_t last_read )
{
	int len , result , i ;
	unsigned char buf[512];
	FILE *BlockInfo ;
	char *startp , *endp , *codep;
	
	conn->auth_response.head = 0;
	startp = NULL ;
	startp = strstr( conn->auth_response.buffer , "<BlkC>");
	if( startp )
	{
		if ( (BlockInfo = fopen( "/var/block_info" , "w")) != NULL )
		{
			fprintf( BlockInfo , "%s\n" , conn->cwf_url );
			endp =strstr( conn->auth_response.buffer , "</BlkC>"); 
			sdebug("endp %s",endp);
			memcpy ( buf , (startp + 5 + 1) , endp - ( startp + 5 + 1 ) );
			buf[2] = 0x0;
			sdebug("Code %s",buf);
			for( i = 0 ; i < 92 ; i++ )
			{
				fprintf(stderr , "Code[%d] %s",i,Content[i].index);
				if( !strcmp( Content[i].index , buf) )
				{
					fprintf( BlockInfo , "%s\n" , Content[i].desc );
					fclose(BlockInfo);
					break;
				}	
			}
		}	
		
sdebug("cwfsendbuf auth BLOCK ")
		len = sprintf( conn->auth_response.buffer , 
			"HTTP/1.1 302 Found\r\nLocation: http://%d.%d.%d.%d/violate.asp\r\n",
			pRomeCfgParam->ifCfgParam[1].ipAddr[0],
			pRomeCfgParam->ifCfgParam[1].ipAddr[1],
			pRomeCfgParam->ifCfgParam[1].ipAddr[2],
			pRomeCfgParam->ifCfgParam[1].ipAddr[3]
			);
sdebug("auth BLOCK while 1")
		while( read(conn->client_fd , buf , 512 ) > 0  );	
sdebug("auth BLOCK while 2")

		if (!send_data(conn->client_fd, conn->auth_response.buffer, len))
		{
			sdebug("cwfsendbuf error ")
			return 0;
		}	
		conn->cwf_stat = CWF_BLOCK;
sdebug("auth BLOCK return 0")
		return 0;
	}
	else
	{
sdebug("cwfsendbuf auth ALLOW ")
		conn->cwf_stat = CWF_ALLOW;
		return 1;		
	}	
}

#endif
