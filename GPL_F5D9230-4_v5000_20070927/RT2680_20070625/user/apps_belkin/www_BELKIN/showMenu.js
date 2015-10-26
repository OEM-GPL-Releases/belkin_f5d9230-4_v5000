//added by bin 04/03/2003

function Try_Logout()
{	
	var f = document.forms[0];
	f.action ="/logout.cgi";
	f.submit();
}

function showHead(wanStatus,helpItem)
{
	var strHtml;
	
	strHtml = '<table border="0" cellspacing="0" cellpadding="0" align="left" width="100%" height="100%">'+
  				'<tr>'+ 
    				'<td colspan="3" bordercolor="#FFFFFF" height="64">'+ 
      					'<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#CCCCCC">'+
          					'<tr>'+ 
          						'<td rowspan="3" width="20" valign="bottom">'+
          							'<a href="http://www.belkin.com"><img src="head_logo.gif" border="0" width="140" height="64"></a>'+
          						'</td>'+
          						'<td rowspan="3" width="1" valign="bottom">'+
          							'<img src="line.gif" border="0" width="1" height="64">'+
          						'</td>'+
            					'<td colspan="4" align="right" nowrap>&nbsp;'+ 
            					'</td>'+
          					'</tr>';
    document.write(strHtml); 
    
   

  		strHtml =   		'<tr>'+
          						'<td colspan="4" height="18">'+
          							'<img src="title.gif" height="20" width="265">'+
          						'</td>'+
          					'</tr>';
       document.write(strHtml); 
  
	strHtml =           	'<tr>'+
          						'<td height="23" align="right" nowrap class="top_nav"> '+
            						'<nobr><a href="home.htm" class="top_nav">'+show1+'</a>'+ 
            						'| <a href="help.htm" class="top_nav">'+show2+'</script></a>';
    document.write(strHtml);        						 
	
	if(helpItem=='indexa' || helpItem=='Login' )
	{
     	strHtml ='| <a href="login.htm" class="top_nav">'+show3+'</a> &nbsp; &nbsp;';
     	document.write(strHtml); 
    }
    else
    {
		if (helpItem!='Help' && helpItem!='Parental Control') 
		{
      		strHtml ='| <a href="javascript:Try_Logout();" class="top_nav">'+show4+'</a> &nbsp; &nbsp;';
     		document.write(strHtml);
		}
		else 
			document.write('&nbsp; &nbsp;');
    }

    if(wanStatus == 'connected')
    {
     	strHtml =      				'<span class="top_nav">'+show5+': <b>'+
            						'<font face="verdana,arial" size="2" color="#0066FF">'+show6+'</font></b></span></nobr> ';
        document.write(strHtml);
	} 
	else if(wanStatus == 'disconnected')
	{
		strHtml =      				'<span class="top_nav">'+show5+': <b>'+
            						'<font face="verdana,arial" size="2" color="#FF0000">'+show7+'</font></b></span></nobr> ';
        document.write(strHtml);
	}
	
        strHtml =  				'</td>'+
          					'</tr>'+
      					'</table>'+
    				'</td>'+
  				'</tr>';
  	document.write(strHtml);
}


function showMenu(menuSection,menuItem,isAPmode)
{
	var yellow   ='#FFFFFF';
	var white    ='#FFFFFF';
	var red    	 ='#6699FF';
	var blue   	 ='#666666';
	var darkBlue ='#666666';
	var black    ='#CCCCCC';
	var bssid = '00:11:50:20:3B:B1';
	
	var strHtml;
		strHtml='<tr>'+ 
    				'<td valign="top" width="130" bgcolor="#666666" height="100%">'+ 
      				'<table width="140" border="0" cellspacing="0" cellpadding="0" align="left">';
      	document.write(strHtml);
    
    // Router Mode
    if(isAPmode =='0')
    {
    
		// LAN Section   
   		if(menuSection=='LAN')
   		{
   			printMenuSection('lan_main.htm', show8, yellow);
   			
   			if(menuItem=='LAN Settings')
   			{
   				printMenuDisabledItem('lan_settings.htm', show9, red, darkBlue);
        	}
        	else
        	{
        		printMenuItem('lan_settings.htm', show9, black, blue);
        	}
        	if(menuItem=='DHCP Client List')
       	 	{
       	 		printMenuDisabledItem('lan_dhcp.htm', show10, red, darkBlue);
       		}
       		else
       		{
       			printMenuItem('lan_dhcp.htm', show10, black, blue);
       		}
    	}
    	else
    	{ 
    		printMenuSection('lan_main.htm', show8, white); 
    		
        	printMenuItem('lan_settings.htm', show9, black, white);
        	printMenuItem('lan_dhcp.htm', show10, black, white);
		}
		
		// WAN Section   
		if(menuSection=='WAN')
		{
			printMenuSection('wan_main.htm', show11, yellow);
			
    		if(menuItem=='Connection Type')
    		{
    			printMenuDisabledItem('wan_conn.htm', show12, red, darkBlue);
    		}
    		else
    		{
    			printMenuItem('wan_conn.htm', show12, black, blue);
    		}
    		
    		if(menuItem=='DNS')
    		{
    			printMenuDisabledItem('wan_dns.htm', show13, red, darkBlue);
    		}
    		else
    		{
    			printMenuItem('wan_dns.htm', show13, black, blue);
    		}
    		
    		if(menuItem=='MAC Address')
    		{
    			printMenuDisabledItem('wan_mac.htm', show14, red, darkBlue);
    		}
    		else
    		{
    			printMenuItem('wan_mac.htm', show14, black, blue);
    		}
    	}
		else
		{	
			printMenuSection('wan_main.htm', show11, white);
    		
    		printMenuItem('wan_conn.htm', show12, black, white);
    		printMenuItem('wan_dns.htm', show13, black, white);
    		printMenuItem('wan_mac.htm', show14, black, white);
        }
	}
	
	// router or ap mode
      	
      	// WLAN Section   
      	if(bssid != show15) {
		if(menuSection=='WLAN')
		{
			printMenuSection('wireless_main.htm', show16, yellow);
			
        	if(menuItem=='Channel and SSID')
    		{
        		printMenuDisabledItem('wireless_chan.htm', show17, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wireless_chan.htm', show17, black, blue);
         	}
         	
            if(menuItem=='Security')
    		{
         		printMenuDisabledItem('wireless_encrypt.htm', show18, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wireless_encrypt.htm', show18, black, blue);
         	}
         	
         	if(menuItem=='Use as Access Point')
    		{
    			if('1'=='1' )
    			{
         			printMenuDisabledItem('wireless_apt.htm', show19, red, darkBlue);
         		}
         		else
         		{
         			printMenuDisabledItem('wireless_apt.htm', show20, red, darkBlue);
         		}
         	}
         	else
         	{
         		if('1'=='1' )
    			{
         			printMenuItem('wireless_apt.htm', show19, black, blue);
         		}
         		else
         		{
         			printMenuItem('wireless_apt.htm', show20, black, blue);
         		}
         	}
         	if(menuItem=='MAC Address Control')
    			{
         		printMenuDisabledItem('wireless_mac_ctrl.htm', show21, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wireless_mac_ctrl.htm', show21, black, blue);
         	}
		}
		else
		{
			printMenuSection('wireless_main.htm', show16, white);
    		
    		printMenuItem('wireless_chan.htm', show17, black, white);
    		printMenuItem('wireless_encrypt.htm', show18, black, white);    		
         	if('1'=='1' )
         	{
         		printMenuItem('wireless_apt.htm', show19, black, white);
         	}
         	else
         	{
         		printMenuItem('wireless_apt.htm', show20, black, white);
         	}
         printMenuItem('wireless_mac_ctrl.htm', show21, black, white);
      
      	}
      } 	      	
    //router mode    			
    if(isAPmode=='0') 
    {   	
       	// Fire Wall Section   
		if(menuSection=='Fire')
		{
			printMenuSection('fw_main.htm', show23, yellow);
			          	
          	if(menuItem=='Virtual Servers')
    		{
    			printMenuDisabledItem('fw_virt.htm', show24, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_virt.htm', show24, black, blue);
          	}
          	
          	if(menuItem=='Client IP Filters')
    		{
    			printMenuDisabledItem('fw_clientip.htm', show25, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_clientip.htm', show25, black, blue);
          	}
          	
          	/*if(menuItem=='MAC Address Filtering')
    		{
    			printMenuItem('fw_mac.htm', show26, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_mac.htm', show26, black, blue);
          	}
          */	
          	if(menuItem=='DMZ')
    			{
    			printMenuDisabledItem('fw_dmz.htm', show27, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_dmz.htm', show27, black, blue);
          	}
          	if(menuItem=='DDNS')
    			{
    			printMenuDisabledItem('fw_ddns.htm', show41, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_ddns.htm', show41, black, blue);
          	}
          	
          	if(menuItem=='WAN Ping Blocking')
    		{
    			printMenuDisabledItem('fw_ping.htm', show28, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_ping.htm', show28, black, blue);
          	}
          	
          	if(menuItem=='Security Log')
    		{
    			printMenuDisabledItem('fw_security.htm', show29, red, darkBlue);
        	}
        	else
        	{
        		printMenuItem('fw_security.htm', show29, black, blue);
        	}
		}
		else
		{
         	printMenuSection('fw_main.htm', show23, white);
    		//printMenuItem('fw_gtwy.htm', 'Application Gateways', black, white);
          	printMenuItem('fw_virt.htm', show24, black, white);
          	printMenuItem('fw_clientip.htm', show25, black, white);
          //	printMenuItem('fw_mac.htm', show26, black, white);
          	printMenuItem('fw_dmz.htm', show27, black, white);
          	printMenuItem('fw_ddns.htm', show41, black, white);
          	printMenuItem('fw_ping.htm', show28, black, white);
        	printMenuItem('fw_security.htm', show29, black, white);
        }
	} 
	
        // router or ap mode
      	// Utilities Section  
      	if(menuSection=='Util')
      	{	
      		printMenuSection('util_main.htm', show30, yellow);
      		
/*      		if(havepc==true) {
	        	if(isAPmode=='0') // router 
	        	{
	        		if(menuItem=='Parental Control')
	    				{	
	      				printMenuDisabledItem('util_parentalc.htm', show31, red, darkBlue);
	          	}
	        		else
	          	{
	          			printMenuItem('util_parentalc.htm', show31, black, blue);
	          	}
	          }
	        }
*/      	if(menuItem=='Restart Router')
    		{
    			if('1'=='1' )
    			{	
      				printMenuDisabledItem('util_reset.htm', show32, red, darkBlue);
          		}
          		else
          		{
          			printMenuDisabledItem('util_reset.htm', show33, red, darkBlue);
          		}
          	}
          	else
          	{
          		if('1'=='1' )
    			{	
      				printMenuItem('util_reset.htm', show32, black, blue);
          		}
          		else
          		{
          			printMenuItem('util_reset.htm', show33, black, blue);
          		}
          	}
          	if(menuItem=='Restore Factory Default')
    		{
    			printMenuDisabledItem('util_factory.htm', show34, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_factory.htm', show34, black, blue);
          	}
          	if(menuItem=='Save/Backup Settings')
    		{	
    			printMenuDisabledItem('util_save.htm', show35, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_save.htm', show35, black, blue);
          	}
          	if(menuItem=='Restore Previous Settings')
    		{
    			printMenuDisabledItem('util_prev.htm', show36, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_prev.htm', show36, black, blue);
          	}
          	if(menuItem=='Firmware Update')
    		{
    			printMenuDisabledItem('util_firmware.htm', show37, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_firmware.htm', show37, black, blue);
          	}
          	if(menuItem=='System Settings')
    		{
    			if(isAPmode=='0')
    			{
    				printMenuDisabledItem('util_system.htm', show38, red, darkBlue);
        		}
        		else
        		{
        			printMenuDisabledItem('utilb_system.htm', show38, red, darkBlue);
        		}
        	}
        	else
        	{
        		if(isAPmode=='0')
    			{
    				printMenuItem('util_system.htm', show38,  black, blue);
    				
        		}
        		else
        		{
        			printMenuItem('utilb_system.htm', show38,  black, blue);
        		}
        	}
      	}
      	else
      	{
      		printMenuSection('util_main.htm', show30, white);
      		
 /*     		if(havepc==true) {
	        	if(isAPmode=='0') // router 
	        	{
	          	printMenuItem('util_parentalc.htm', show31, black, white);
	          }
	        }
*/       	if('1'=='1' )
    		{	
      			printMenuItem('util_reset.htm', show32, black, white);
          	}
          	else
          	{
          			printMenuItem('util_reset.htm', show33, black, white);
          	}
          	printMenuItem('util_factory.htm', show34, black, white);
          	printMenuItem('util_save.htm', show35, black, white);
          	printMenuItem('util_prev.htm', show36, black, white);
          	printMenuItem('util_firmware.htm', show37, black, white);
        	if(isAPmode=='0')
    		{
    			printMenuItem('util_system.htm', show38,  black, white);
        	}
        	else
        	{
        		printMenuItem('utilb_system.htm', show38,  black, white);
        	}
        }
    
   		strHtml=		'</table>'+
    				'</td>'+
    				'<td valign="top" width="1" height="100%">'+
    					''+
    				'</td>';
   	document.write(strHtml);
   	
   
}

function showTail()
{
	var strHtml;
	strHtml = '</tr>'+
			'</table>'+
		'</body>'+
	'</html>';
	document.write(strHtml);
}

function printMenuSection(link, content, color)
{
	var strHtml;
	strHtml=		'<tr>'+ 
          				'<td colspan="2" height="20" width="140" bgcolor="#666666">'+
          					'&nbsp;&nbsp;'+
          					'<a href="' + link + '" class="section"><font color="' + color + '">'+content+'</font></a>'+
          				'</td>'+
        			'</tr>';
    document.write(strHtml);
}

function printMenuItem(link, content, color, background)
{
	var strHtml;	
    strHtml=		'<tr>'+  
          				'<td width="5" bgcolor="#666666">&nbsp;</td>'+ 
          				'<td class="leftLink" bgcolor="#666666">'+ 
          					'&nbsp;'+
          					'<a href="' + link + '" class="leftLink">' + content + '</a>'+ 
          				'</td>'+ 
         			'</tr>'; 
    document.write(strHtml);
}
function printMenuDisabledItem(link, content, color, background)
{
	var strHtml;	
    strHtml=		'<tr>'+  
          				'<td width="5" bgcolor="#666666">&nbsp;</td>'+ 
          				'<td class="leftLink" bgcolor="#666666">'+ 
          					'&nbsp;'+
          					'<font color="' + color + '">' + content + '</font>'+ 
          				'</td>'+ 
         			'</tr>'; 
    document.write(strHtml);
}
