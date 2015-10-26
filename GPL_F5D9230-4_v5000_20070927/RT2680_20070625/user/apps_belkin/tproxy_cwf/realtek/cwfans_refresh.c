#include <stdio.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <unistd.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <board.h>
#include <sys/ipc.h>
#include <sys/shm.h>

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

void main()
{
	int server_sockfd , client_sockfd ;
	int server_len, client_len , content_size, shmid ;
	struct sockaddr_in	addr;
	char buffer[512] , *sn , *em , *pw , *rp , *ed , *sf , *datap , *tmp;
	FILE *cwfans;
	romeCfgParam_t *pRomeCfgParam;
	
	printf("Gamble : enabled refresh program\n");
	shmid=shmget(SHM_PROMECFGPARAM,sizeof(romeCfgParam_t),0666|IPC_CREAT);
	pRomeCfgParam=shmat(shmid,(void*)0,0);

	server_sockfd = bind_to_port(21493);
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
			else if( strstr( tmp , "ED"))//expire date
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
		//printf("sn %s, pw %s, em %s, rp %s, ed %s, sf %s\n",sn,pw,em,rp,ed,sf);
		pRomeCfgParam -> gemtekCfgParam.cwf_expire_date=atol(ed);
		strcpy( pRomeCfgParam -> gemtekCfgParam.cwf_user_email , em );
		strcpy( pRomeCfgParam -> gemtekCfgParam.cwf_user_pwd , pw );
		if( strcmp( sf , "1") == 0 )
		{
			pRomeCfgParam -> gemtekCfgParam.cwf_registered = 1;
			if( (cwfans = fopen("/var/cwfans"  , "w")) != NULL )
			{
				fprintf(cwfans , "%u %s %s %d\n" , 
							pRomeCfgParam -> gemtekCfgParam.cwf_expire_date,
							pRomeCfgParam -> gemtekCfgParam.cwf_user_email,
							pRomeCfgParam -> gemtekCfgParam.cwf_user_pwd,
							pRomeCfgParam -> gemtekCfgParam.cwf_registered);
				fclose(cwfans);			
			}
		}	
	}
	shmdt(pRomeCfgParam);
	
}
