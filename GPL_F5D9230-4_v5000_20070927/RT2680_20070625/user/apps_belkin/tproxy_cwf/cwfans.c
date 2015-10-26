#include <stdio.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <unistd.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <nvram.h>

#define CWFANS_PORT 21483

static int bind_to_port(unsigned short bind_port)
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
	addr.sin_port = htons(bind_port);
	//addr.sin_addr.s_addr = inet_addr("127.0.0.1");

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

void main(int argc , char** argv )
{
	int server_sockfd , client_sockfd ;
	int server_len, client_len , content_size, shmid ;
	struct sockaddr_in	addr;
	char buffer[512] , *sn , *em , *pw , *rp , *ed , *sf , *datap , *tmp;
	FILE *cwfans;
	unsigned int port;

	if( argc > 1 )
		port = atoi(argv[1]);
	else
		port = CWFANS_PORT;

	sprintf( buffer , "/bin/iptables -I INPUT -p tcp -d %s --dport %d -j ACCEPT" , nvram_safe_get("wan_ipaddr") , port );
	system(buffer );	
	server_sockfd = bind_to_port(port);
	client_len = sizeof(&addr);
	client_sockfd = accept(server_sockfd, (struct sockaddr *)&addr, &client_len);
	content_size = read( client_sockfd, buffer , 512);
	buffer[content_size] = 0x0;
	datap = buffer ;
	if( content_size > 0 )
	{
		tmp = datap;
		for( ;tmp != NULL; )
		{
			tmp = strsep( &datap , " ");
			
			if( tmp == NULL )
				break;
			if( strstr( tmp , "SN"))//Serial number
			{
				sn = tmp ;
				strsep( &sn, "=");
			}				
			else if( strstr( tmp , "PW"))//password
			{
				pw = tmp ;
				strsep( &pw, "=");				
			}
			else if( strstr( tmp , "EM"))//email
			{
				em = tmp ;
				strsep( &em, "=");				
			}
			else if( strstr( tmp , "RP"))//remote port : port number for connection
			{
				rp = tmp ;
				strsep( &rp, "=");				
			}
			else if( strstr( tmp , "ED"))//expire date in seconds from 1970/1/1
			{
				ed = tmp ;
				strsep( &ed, "=");				
				*( ed+ strlen(ed) -3)=0x0;
			}
			else if( strstr( tmp , "SF"))//success or fail
			{
				sf = tmp ;
				strsep( &sf, "=");				
			}
		}
		nvram_set("cwf_expire_date", ed );
		nvram_set("cwf_user_email" , em );
		nvram_set("cwf_user_pwd" , pw );
		if( strcmp( sf , "1") == 0 )
		{
			nvram_set("cwf_registered", "1");
			nvram_set("cwf_parentalc_enabled", "1");
			if( (cwfans = fopen("/var/cwfans"  , "w")) != NULL )
			{
				fprintf(cwfans , "%s %s %s %s\n" , 
							nvram_safe_get("cwf_expire_date"),
							nvram_safe_get("cwf_user_email"),
							nvram_safe_get("cwf_user_pwd"),
							nvram_safe_get("cwf_registered"));
				fclose(cwfans);			
			}
			sprintf( buffer , "/bin/iptables -D INPUT -p tcp -d %s --dport %d -j ACCEPT" , nvram_safe_get("wan_ipaddr") , port );
			system(buffer );	
			system("/bin/iptables -t nat -A PORT_FW -s 192.168.2.1/24 -p tcp --dport 80 -j REDIRECT --to-port 81");
			system("/bin/tproxy_cwf -t -s 81 0.0.0.0");
		}	
	}
}
