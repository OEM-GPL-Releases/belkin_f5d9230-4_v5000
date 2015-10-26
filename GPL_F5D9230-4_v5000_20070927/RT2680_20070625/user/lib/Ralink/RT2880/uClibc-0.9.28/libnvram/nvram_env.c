/*
 * (C) Copyright 2000-2003
 * Wolfgang Denk, DENX Software Engineering, wd@denx.de.
 *
 * See file CREDITS for list of people who contributed to this
 * project.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of
 * the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston,
 * MA 02111-1307 USA
 */

#include <errno.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <string.h>
#include <sys/types.h>
#include <sys/ioctl.h>
#include <sys/stat.h>
#include <unistd.h>
#include "nvram_env.h"
#include "flash_api.h"
#include <fcntl.h>
typedef unsigned char uchar;


/*
Roger: NVRAM layout
0 		- 0x1000			u-boot parameters
0x1000  - 0x2000			pseudo EEPROM 0x200 bytes used
0x2000  - 0x4000			reserved
0x4000  - 0x8000			Wireless Config
0x8000	- 0xc000			if redundant use this as secondary wireless config
0xc000  - 0x10000			reserved
*/
#define NVRAM_OFFSET		0x30000
#define ENV1_OFFSET			0x32000
#define ENV2_OFFSET			(ENV1_OFFSET + ENV_BLK_SIZE)
#define ENV_BLK_SIZE		0x4000

static int curdev;
enum {false=0,true};

#define MAX_CACHE_ENV_ENTRY		4096

#define CFG_ENV_SIZE ENVSIZE(curdev)

#define ENV_SIZE      getenvsize()

typedef struct environment_s {
	unsigned long crc;			/* CRC32 over data bytes    */
	unsigned char flags;			/* active or obsolete */
	unsigned char *data;
} env_t;

typedef struct cache_environment_s {
	unsigned char *name;
	unsigned char *value;
} cache_t;

static env_t environment;

static cache_t cache_env[MAX_CACHE_ENV_ENTRY];

static int HaveRedundEnv = 0;

static uchar active_flag = 1;
static int buffer_opt=0;   	
static uchar obsolete_flag = 0;


#define XMK_STR(x)	#x
#define MK_STR(x)	XMK_STR(x)

static uchar default_environment[ENV1_SIZE] = {
	"SystemName=RalinkAP\0"
	"ModuleName=RT2860\0"
	"Login=admin\0"
	"Password=admin\0"
	"getTimeMethod=PC\0"
	"ntp_server=220.130.158.51\0"
	"ntp_intervel=24\0"
	"timeZone=46\0"
	"user_time_yr=\0"
	"user_time_mo=\0"
	"user_time_dd=\0"
	"user_time_hr=\0"
	"user_time_mn=\0"
	"wanConnectionMode=BRIDGE\0"
	"wan_ipaddr=192.168.5.201\0"
	"wan_netmask=255.255.255.0\0"
	"wan_gateway=192.168.5.254\0"
	"wan_primary_dns=192.168.1.5\0"
	"wan_secondary_dns=168.95.1.1\0"
	"wan_wins=\0"
	"clone_macaddr=\0"
	"lan_ipaddr=192.168.100.1\0"
	"lan_netmask=255.255.255.0\0"
	"dhcpEnabled=1\0"
	"dhcpStart=192.168.100.2\0"
	"dhcpEnd=192.168.100.254\0"
	"dhcpLease=1440\0"
	"dns_relay_enabled=0\0"
	"option_dns=168.95.192.1\0"
	"RadioEnable=1\0"
	"CountryRegion=5\0"
	"CountryRegionABand=7\0"
	"CountryCode=\0"
	"SSIDNum=1\0"
	"SSID=RalinkInitialAP\0"
	"SSIDPos=1;0;0;0\0"
	"WirelessMode=0\0"
	"TxRate=0\0"
	"Channel=7\0"
	"BasicRate=15\0"
	"BeaconPeriod=100\0"
	"DtimPeriod=1\0"
	"TxPower=100\0"
	"DisableOLBC=0\0"
	"BGProtection=0\0"
	"TxPreamble=0\0"
	"RTSThreshold=2347\0"
	"FragThreshold=2346\0"
	"TxBurst=0\0"
	"PktAggregate=0\0"
	"TurboRate=0\0"
	"WmmCapable=0\0"
	"APSDCapable=0\0"
	"DLSCapable=0\0"
	"APAifsn=3;7;1;1\0"
	"APCwmin=4;4;3;2\0"
	"APCwmax=6;10;4;3\0"
	"APTxop=0;0;94;47\0"
	"APACM=0;0;0;0\0"
	"AckPolicy=0;0;0;0\0"
	"BSSAifsn=3;7;2;2\0"
	"BSSCwmin=4;4;3;2\0"
	"BSSCwmax=10;10;4;3\0"
	"BSSTxop=0;0;94;47\0"
	"BSSACM=0;0;0;0\0"
	"NoForwarding=0\0"
	"NoForwardingBTNBSSID=0\0"
	"HideSSID=0\0"
	"ShortSlot=0\0"
	"AutoChannelSelect=0\0"
	"SecurityMode=0\0"
	"UAMIPPool=192.168.182.0/24\0"
	"UAMDhcpIF=\0"
	"UAMDns1=\0"
	"UAMDns2=\0"
	"UAMLeaseTime=600\0"
	"UAMRadiusNASID=nas01\0"
	"UAMRadius1=\0"
	"UAMRadius2=\0"
	"UAMRadiusSecret=\0"
	"UAMUrl=https://192.168.1.25/cgi-bin/hotspotlogin.cgi\0"
	"VLANEnable=0\0"
	"VLANName=\0"
	"VLANID=0\0"
	"VLANPriority=0\0"
	"WscAKMP=1\0"
	"WscConfigured=0\0"
	"WscModeOption=0\0"
	"WscActionIndex=9\0"
	"WscPinCode=\0"
	"WscRegResult=1\0"
	"WscUseUPnP=1\0"
	"WscUseUFD=0\0"
	"WscSSID=RalinkInitialAP\0"
	"WscKeyMGMT=WPA-EAP\0"
	"WscConfigMethod=138\0"
	"WscAuthType=1\0"
	"WscEncrypType=1\0"
	"WscNewKey=scaptest\0"
	"IEEE8021X=0\0"
	"IEEE80211H=0\0"
	"PreAuth=0\0"
	"AuthMode=OPEN\0"
	"EncrypType=NONE\0"
	"RekeyInterval=3600\0"
	"RekeyMethod=DISABLE\0"
	"PMKCachePeriod=10\0"
	"WPAPSK=\0"
	"DefaultKeyID=2\0"
	"Key1Type=0\0"
	"Key1Str=\0"
	"Key2Type=0\0"
	"Key2Str=\0"
	"Key3Type=0\0"
	"Key3Str=\0"
	"Key4Type=0\0"
	"Key4Str=\0"
	"HSCounter=0\0"
	"HT_HTC=0\0"
	"HT_RDG=1\0"
	"HT_LinkAdapt=0\0"
	"HT_OpMode=0\0"
	"HT_MpduDensity=3\0"
	"HT_EXTCHA=0\0"
	"HT_BW=1\0"
	"HT_AutoBA=1\0"
	"HT_AMSDU=0\0"
	"HT_BAWinSize=16\0"
	"HT_GI=1\0"
	"HT_STBC=1\0"
	"HT_MCS=33\0"
	"NintendoCapable=0\0"
	"AccessPolicy0=0\0"
	"AccessControlList0=\0"
	"AccessPolicy1=0\0"
	"AccessControlList1=\0"
	"AccessPolicy2=0\0"
	"AccessControlList2=\0"
	"AccessPolicy3=0\0"
	"AccessControlList3=\0"
	"WdsEnable=0\0"
	"WdsEncrypType=NONE\0"
	"WdsList=\0"
	"WdsKey=\0"
	"RADIUS_Server=\0"
	"RADIUS_Port=1812\0"
	"RADIUS_Key=\0"
	"RADIUS_Acct_Server=\0"
	"RADIUS_Acct_Port=1813\0"
	"RADIUS_Acct_Key=\0"
	"session_timeout_interval=0\0"
	"idle_timeout_interval=0\0"
	"own_ip_addr=\0"
	"Ethifname=eth1\0"
	"\0"			/* Termimate env_t data with 2 NULs */
};

static uchar *envmatch (uchar * s1, uchar * s2);
static int env_init (void);
static int buff_env_init ();
static unsigned char *cache_in (unsigned char *name,unsigned char *val);
static int flash_io (int mode);

static inline ulong getenvsize (void)
{
	ulong rc = ENV_BLK_SIZE - sizeof (long);

	if (HaveRedundEnv)
		rc -= sizeof (char);
	return rc;
}

void nvram_init(void)
{
    environment.data=0;
    memset(cache_env,sizeof(cache_env),0);
}

void nvram_close(void)
{
    int i;

    for(i=0;i< MAX_CACHE_ENV_ENTRY;i++)
    {	    
    	if(cache_env[i].name)
	    free(cache_env[i].name);
	if(cache_env[i].value)
	    free(cache_env[i].value);
    }	
}

unsigned char *nvram_get(unsigned char *name)
{ 
    unsigned char * result;
    result = nvram_getenv(name);
    if(environment.data != default_environment)
	free(environment.data);    
    return result;
}

int nvram_set (char *name, char *value)
{
    int result;	
    char *argv[4] = { "setenv", name, value, NULL };
    
    result= nvram_setenv (3, argv);
    if(environment.data != default_environment )
	free(environment.data);    
    return result;
}

int nvram_bufset (char *name, char *value)
{
    char *argv[4] = { "setenv", name, value, NULL };
    
    return nvram_buff_setenv (3, argv);
}

int nvram_commit()
{
    int result;
    
    result= do_nvram_commit();
    if(environment.data != default_environment )
	free(environment.data);    
    return result;
    
}

int nvram_match(unsigned char *name, unsigned char *value)
{
    unsigned char *tmp;
    int ret;

    tmp = nvram_get(name);
    if(tmp)
    {
         ret = (!strcmp((char *)tmp,(char *)value));
         return ret;
    }
    else
         return false;
}
/*
 * Search the environment for a variable.
 * Return the value, if found, or NULL, if not found.
 */
unsigned char *nvram_getenv (unsigned char *name)
{
	uchar *env, *nxt;

	if (env_init ())
		return (NULL);

	for (env = environment.data; *env; env = nxt + 1) {
		uchar *val;

		for (nxt = env; *nxt; ++nxt) {
			if (nxt >= &environment.data[ENV_SIZE]) {
				fprintf (stderr, "## Error: "
					"environment not terminated\n");
				return (NULL);
			}
		}
		val = envmatch (name, env);
		if (!val)
			continue;
		return cache_in(name,val);
	}
	return (NULL);
}

static unsigned char *cache_in (unsigned char *name,unsigned char *val)
{
    int i=0;
    static int next_cache_entry=0;
    
    unsigned char *cache_entry_name;
    unsigned char *cache_entry_value;
    
    for(i=0;i<MAX_CACHE_ENV_ENTRY;i++)
    {
    	if (cache_env[i].name ==0){
		break;
	}	
	if (strcmp((char *)cache_env[i].name, (char *)name)==0)//found 
	{
		if(cache_env[i].value)
		    free(cache_env[i].value);
	        if (( cache_entry_value= (unsigned char *)calloc (1, strlen((char *)val)+1)) == NULL) {
		    printf("can not allocate memory for cache value \n");
		    return NULL;

		}    
		cache_env[i].value=cache_entry_value;
		strcpy((char *)cache_env[i].value, (char *)val);
		return cache_entry_value;
	}
    }
    if (next_cache_entry <MAX_CACHE_ENV_ENTRY)// not found
    {
	if(cache_env[i].value)
	    free(cache_env[i].value);
        if (( cache_entry_value= calloc (1, strlen((char *)val)+1)) == NULL) {
	    printf("can not allocate memory for cache value\n");
	    return NULL;

	}    
	if(cache_env[i].name)
	    free(cache_env[i].name);
        if (( cache_entry_name= calloc (1, strlen((char *)name)+1)) == NULL) {
	    printf("can not allocate memory for cache name tag\n");
	    return NULL;
	}
	cache_env[next_cache_entry].name=cache_entry_name;
	cache_env[next_cache_entry].value=cache_entry_value;
	strcpy((char *)cache_env[next_cache_entry].name, (char *)name);     
	strcpy((char *)cache_env[next_cache_entry].value, (char *)val);     
	next_cache_entry++;
	return cache_entry_value;
    }	
    else
	printf("ERROR: nvram cache full\n");    
    return NULL;
}
/*
 * Print the current definition of one, or more, or all
 * environment variables
 */
void nvram_printenv (int argc, char *argv[])
{
	uchar *env, *nxt;
	int i, n_flag;

	if (env_init ())
		return;

	if (argc == 1) {		/* Print all env variables  */
		for (env = environment.data; *env; env = nxt + 1) {
			for (nxt = env; *nxt; ++nxt) {
				if (nxt >= &environment.data[ENV_SIZE]) {
					fprintf (stderr, "## Error: "
						"environment not terminated\n");
					return;
				}
			}

			printf ("%s\n", env);
		}
		return;
	}

	if (strcmp (argv[1], "-n") == 0) {
		n_flag = 1;
		++argv;
		--argc;
		if (argc != 2) {
			fprintf (stderr, "## Error: "
				"`-n' option requires exactly one argument\n");
			return;
		}
	} else {
		n_flag = 0;
	}

	for (i = 1; i < argc; ++i) {	/* print single env variables   */
		uchar *name = (uchar *) argv[i];
		uchar *val = NULL;

		for (env = environment.data; *env; env = nxt + 1) {

			for (nxt = env; *nxt; ++nxt) {
				if (nxt >= &environment.data[ENV_SIZE]) {
					fprintf (stderr, "## Error: "
						"environment not terminated\n");
					return;
				}
			}
			val = envmatch (name, env);
			if (val) {
				if (!n_flag) {
					fputs ((char *)name, stdout);
					putc ('=', stdout);
				}
				puts ((char *)val);
				break;
			}
		}
		if (!val)
			fprintf (stderr, "## Error: \"%s\" not defined\n", name);
	}
}

int buff_env_init( )
{
    // only read once	
    // after commit , buffer_opt will be clean to 0
    if(buffer_opt==0)
    {	    
    	env_init();
	buffer_opt=1;
    }	
    return 0;
} 

int do_nvram_commit()
{
	if(buffer_opt==0)
	{
	    printf("nothing to be commit\n");
	    return 0;
	}
	
	/* Update CRC */
	environment.crc = crc32 (0, environment.data, ENV_SIZE);
	printf("Commit crc = %x\n", environment.crc);

	/* write environment back to flash */
	if (flash_io (O_RDWR)) {
		fprintf (stderr, "Error: can't write fw_env to flash\n");
		return (-1);
	}
	buffer_opt=0;
	return (0);

}

int nvram_buff_setenv (int argc, char *argv[])
{
	int i, len;
	uchar *env, *nxt;
	uchar *oldval = NULL;
	uchar *name;
	
	if (argc < 2) {
		return (EINVAL);
	}
	
	if (buffer_opt==0 && buff_env_init ())
		return (errno);

	name = (uchar *)argv[1];

	/*
	 * search if variable with this name already exists
	 */
	for (nxt = env = environment.data; *env; env = nxt + 1) {
		for (nxt = env; *nxt; ++nxt) {
			if (nxt >= &environment.data[ENV_SIZE]) {
				fprintf (stderr, "## Error: "
					"environment not terminated\n");
				return (EINVAL);
			}
		}
		if ((oldval = envmatch (name, env)) != NULL)
			break;
	}

	/*
	 * Delete any existing definition
	 */
	if (oldval) {
		/*
		 * Ethernet Address and serial# can be set only once
		 */
		if ((strcmp ((char *)name, "ethaddr") == 0) ||
			(strcmp ((char *)name, "serial#") == 0)) {
			fprintf (stderr, "Can't overwrite \"%s\"\n", name);
			return (EROFS);
		}

		if (*++nxt == '\0') {
			*env = '\0';
		} else {
			for (;;) {
				*env = *nxt++;
				if ((*env == '\0') && (*nxt == '\0'))
					break;
				++env;
			}
		}
		*++env = '\0';
	}

	/*
	 * Append new definition at the end
	 */
	for (env = environment.data; *env || *(env + 1); ++env);
	if (env > environment.data)
		++env;
	/*
	 * Overflow when:
	 * "name" + "=" + "val" +"\0\0"  > ENV_BLK_SIZE - (env-environment)
	 */
	len = strlen ((char *)name) + 2;
	/* add '=' for first arg, ' ' for all others */
	for (i = 2; i < argc; ++i) {
		len += strlen (argv[i]) + 1;
	}
	if (len > (&environment.data[ENV_SIZE] - env)) {
		fprintf (stderr,
			"Error: environment overflow, \"%s\" deleted\n",
			name);
		return (-1);
	}
	while ((*env = *name++) != '\0')
		env++;
	for (i = 2; i < argc; ++i) {
		uchar *val = (uchar *)argv[i];

		*env = (i == 2) ? '=' : ' ';
		while ((*++env = *val++) != '\0');
	}

	/* end is marked with double '\0' */
	*++env = '\0';
	return (0);
}

/*
 * Deletes or sets environment variables. Returns errno style error codes:
 * 0	  - OK
 * EINVAL - need at least 1 argument
 * EROFS  - certain variables ("ethaddr", "serial#") cannot be
 *	    modified or deleted
 *
 */
int nvram_setenv (int argc, char *argv[])
{
	int i, len;
	uchar *env, *nxt;
	uchar *oldval = NULL;
	uchar *name;

	if (argc < 2) {
		return (EINVAL);
	}

	if (env_init ())
		return (errno);

	name = (uchar *)argv[1];

	/*
	 * search if variable with this name already exists
	 */
	for (nxt = env = environment.data; *env; env = nxt + 1) {
		for (nxt = env; *nxt; ++nxt) {
			if (nxt >= &environment.data[ENV_SIZE]) {
				fprintf (stderr, "## Error: "
					"environment not terminated\n");
				return (EINVAL);
			}
		}
		if ((oldval = envmatch (name, env)) != NULL)
			break;
	}

	/*
	 * Delete any existing definition
	 */
	if (oldval) {
		/*
		 * Ethernet Address and serial# can be set only once
		 */
		if ((strcmp ((char *)name, "ethaddr") == 0) ||
			(strcmp ((char *)name, "serial#") == 0)) {
			fprintf (stderr, "Can't overwrite \"%s\"\n", name);
			return (EROFS);
		}

		if (*++nxt == '\0') {
			*env = '\0';
		} else {
			for (;;) {
				*env = *nxt++;
				if ((*env == '\0') && (*nxt == '\0'))
					break;
				++env;
			}
		}
		*++env = '\0';
	}

	/* Delete only ? */
	if (argc < 3)
		goto WRITE_FLASH;

	/*
	 * Append new definition at the end
	 */
	for (env = environment.data; *env || *(env + 1); ++env);
	if (env > environment.data)
		++env;
	/*
	 * Overflow when:
	 * "name" + "=" + "val" +"\0\0"  > ENV_BLK_SIZE - (env-environment)
	 */
	len = strlen ((char *)name) + 2;
	/* add '=' for first arg, ' ' for all others */
	for (i = 2; i < argc; ++i) {
		len += strlen (argv[i]) + 1;
	}
	if (len > (&environment.data[ENV_SIZE] - env)) {
		fprintf (stderr,
			"Error: environment overflow, \"%s\" deleted\n",
			name);
		return (-1);
	}
	while ((*env = *name++) != '\0')
		env++;
	for (i = 2; i < argc; ++i) {
		uchar *val = (uchar *)argv[i];

		*env = (i == 2) ? '=' : ' ';
		while ((*++env = *val++) != '\0');
	}

	/* end is marked with double '\0' */
	*++env = '\0';

  WRITE_FLASH:

	/* Update CRC */
	environment.crc = crc32 (0, environment.data, ENV_SIZE);

	/* write environment back to flash */
	if (flash_io (O_RDWR)) {
		fprintf (stderr, "Error: can't write fw_env to flash\n");
		return (-1);
	}

	return (0);
}


static int flash_io (int mode)
{
	ulong offset;
	int len, otherdev;
	
	len = sizeof (environment.crc);
	if (HaveRedundEnv) {
		len += sizeof (environment.flags);
	}

	if (mode == O_RDONLY)
	{
		offset = ENV1_OFFSET + curdev * ENV_BLK_SIZE;
		FlashRead(&environment, offset, len);
		FlashRead(environment.data, offset+len, ENV_SIZE);
	}
	else // mode == O_RDWR
	{
		if (HaveRedundEnv)
		{
			otherdev = !curdev;
		}
		else
		{
			otherdev = curdev;
		}
		
		offset = ENV1_OFFSET + otherdev * ENV_BLK_SIZE;
		
		FlashWrite(&environment, offset, len);
		FlashWrite(environment.data, offset+len, ENV_SIZE);
		
		// write obsolete_flag to current device
		if (HaveRedundEnv)
		{
			offset = ENV1_OFFSET + curdev * ENV_BLK_SIZE;
			FlashWrite(&obsolete_flag, offset+sizeof(environment.crc) , sizeof (obsolete_flag));
		}
	}
}


/*
 * s1 is either a simple 'name', or a 'name=value' pair.
 * s2 is a 'name=value' pair.
 * If the names match, return the value of s2, else NULL.
 */

static uchar *envmatch (uchar * s1, uchar * s2)
{

	while (*s1 == *s2++)
		if (*s1++ == '=')
			return (s2);
	if (*s1 == '\0' && *(s2 - 1) == '=')
		return (s2);
	return (NULL);
}

/*
 * Prevent confusion if running from erased flash memory
 */
static int env_init (void)
{
	int crc1, crc1_ok;
	uchar *addr1;
	uchar *addr2;

	int crc2, crc2_ok;
	uchar flag1, flag2;


	if ((addr1 = calloc (1, ENV_SIZE)) == NULL) {
	    fprintf (stderr,
			"Not enough memory for environment (%ld bytes)\n",
			ENV_SIZE);
	      	environment.data=0;
		return (errno);
	}
	/* read environment from FLASH to local buffer */
	environment.data = addr1;
	
	
	curdev = 0;

	if (flash_io (O_RDONLY)) {
		
	//	return (errno); // Dennis Lee
	}
	
	



	crc1_ok = ((crc1 = crc32 (0, environment.data, ENV_SIZE))
			   == environment.crc);
	if (!HaveRedundEnv) {
		if (!crc1_ok) {
			fprintf (stderr,
				"Warning: Bad CRC, using default environment\n");
			environment.data = default_environment;
			free (addr1);
		}
	} else {
		flag1 = environment.flags;

		curdev = 1;
		if ((addr2 = calloc (1, ENV_SIZE)) == NULL) {
		    fprintf (stderr,
				"Not enough memory for environment (%ld bytes)\n",
				ENV_SIZE);
			return (errno);
		}    
		environment.data = addr2;

		if (flash_io (O_RDONLY)) {
			return (errno);
		}

		crc2_ok = ((crc2 = crc32 (0, environment.data, ENV_SIZE))
				   == environment.crc);
		flag2 = environment.flags;

		if (crc1_ok && !crc2_ok) {
			environment.data = addr1;
			environment.flags = flag1;
			environment.crc = crc1;
			curdev = 0;
			free (addr2);
		} else if (!crc1_ok && crc2_ok) {
			environment.data = addr2;
			environment.flags = flag2;
			environment.crc = crc2;
			curdev = 1;
			free (addr1);
		} else if (!crc1_ok && !crc2_ok) {
			fprintf (stderr,
				"Warning: Bad CRC, using default environment\n");
			environment.data = default_environment;
			curdev = 0;
			free (addr2);
			free (addr1);
		} else if (flag1 == active_flag && flag2 == obsolete_flag) {
			environment.data = addr1;
			environment.flags = flag1;
			environment.crc = crc1;
			curdev = 0;
			free (addr2);
		} else if (flag1 == obsolete_flag && flag2 == active_flag) {
			environment.data = addr2;
			environment.flags = flag2;
			environment.crc = crc2;
			curdev = 1;
			free (addr1);
		} else if (flag1 == flag2) {
			environment.data = addr1;
			environment.flags = flag1;
			environment.crc = crc1;
			curdev = 0;
			free (addr2);
		} else if (flag1 == 0xFF) {
			environment.data = addr1;
			environment.flags = flag1;
			environment.crc = crc1;
			curdev = 0;
			free (addr2);
		} else if (flag2 == 0xFF) {
			environment.data = addr2;
			environment.flags = flag2;
			environment.crc = crc2;
			curdev = 1;
			free (addr1);
		}
	}
	return (0);
}





