var daysOfMonth = new Array(
 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
var daysOfMonthLY = new Array(
 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
function isLeapYear(year) {
 year = year - 0;
 if ((year/4)   != Math.floor(year/4))   return false;
 if ((year/100) != Math.floor(year/100)) return true;
 if ((year/400) != Math.floor(year/400)) return false;
 return true;
}
function isValidDate(day, month, year) {
 day = day - 0; month = month - 0; year = year - 0;
 if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
	(!isLeapYear(year) && day > daysOfMonth[month-1]))
	return false;
 else	return true;
}
function validateIp(val){
 if(val.length==0) return;
 var ii; sval=String(val);
 if(val.length>15)
	{alert(vjs1);return false;}
 i1=sval.indexOf('.');
 if(i1==-1)
	{alert(vjs2);return false;}
 sub1=sval.substring(0,i1);

 tempval=sval.substring(i1+1,val.length);
 i2=tempval.indexOf('.');
 if(i2==-1)
	{alert(vjs2);return false;}
 sub2=tempval.substring(0,i2);

 tempval=tempval.substring(i2+1,tempval.length);
 i3=tempval.indexOf('.');
 if(i3==-1)
	{alert(vjs2);return false;}
 sub3=tempval.substring(0,i3);

 tempval=tempval.substring(i3+1,tempval.length);
 i4=tempval.indexOf('.');
 if(i4!=-1)
	{alert(vjs4);return false;}
 sub4=tempval.substring(0,tempval.length);

 if(sub1.length==0 || sub2.length==0 || sub3.length==0 || sub4.length==0)
	{alert(vjs3);return false;}

 if((sub1-0)<0 || (sub1-0)>255 || (sub2-0)<0 || (sub2-0)>255 ||
 (sub3-0)<0 || (sub3-0)>255 || (sub4-0)<0 || (sub4-0)>255)
	{alert(vjs5);return false;}

 for (ii=0; ii<sval.length; ii++)
 {
 if (sval.charAt(ii)=='.')
 {continue;}
 else if (sval.charAt(ii)<'0' || sval.charAt(ii)>'9')
 {
	alert(vm1+'['+sval.charAt(ii)+'] '+vm2+(ii+1)+'! '+vm3+' 0123456789');
	return false;
 }
 }
}
function validateYear(val){
 var bool=true;
 if(val.length!=4 || val<0000)
	bool = false;
 if(bool==false)
	{alert(vjs6); return false;}
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
 if((val-0)<1970 || (val-0)>2037)
 {
	alert(vjs8);
	return false;
 }
}
function validateMonth(val){
 month = val - 0;
 if(val.length!=2 || month<1 || month>12)
 {alert(vjs9);return false;}
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}
function validateDate(date,month,year){
 //day = date - 0; month = month - 0; year = year - 0;
 if(month.length==0 || year.length==0)
 {
	alert(vjs10);
	return false;
 }
 day = date - 0; month = month - 0; year = year - 0;
 if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
 (!isLeapYear(year) && day > daysOfMonth[month-1]) ||
 (date.length!=2))
 {
	alert(vjs11);
	return false;
 }
 for(i=0; i<date.length; i++)
 {
	if(date.charAt(i)<'0' || date.charAt(i)>'9')
	{	alert(vm4+date.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}
function validateHour(val) {
 hour = val - 0;
 if(val.length!=2 || hour<0 || hour>23)
 {
	alert(vjs12);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}
function validateMinute(val) {
 min = val - 0;
 if(val.length!=2 || min<0 || min>59)
 {
	alert(vjs13);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}
function validateMTU(val) 
{
 mval = val; mval=mval-0;
 if(val.length<3 || mval<1440 || mval>1494)
 {
	alert(vjs14);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}

function validatePPPoEMTU(val) 
{
	mval = val; mval=mval-0;
 	if(val.length<3 || mval<576 || mval>1492)
 	{
		alert(vjs14);
		return false;
 	} 
 	for(i=0; i<val.length; i++)
 	{
		if(val.charAt(i)<'0' || val.charAt(i)>'9')
		{	
			alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
			return false;
		}
 	}
}

function validateMRU(val)
{
 mval = val; mval=mval-0;
 if(val.length<3 || mval<128 || mval>65535)
 {
	alert(vjs15);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
}
function hex(val)
{
	var h = (val-0).toString(16);
	if(h.length==1) h='0'+h;
	return h.toUpperCase();
}
function validateGateway(wanIp,netmaskIp,gatewayIp) {
	if(gatewayIp.length==0) return true;
	if(validateWanIp(gatewayIp) == false) return false;
	var i1,i2,i3, wip, nip, gip;

	i1=wanIp.indexOf('.');
	i2=wanIp.indexOf('.',(i1+1));
	i3=wanIp.indexOf('.',(i2+1));
	wip = hex(wanIp.substring(0,i1)) + hex(wanIp.substring((i1+1),i2)) +hex(wanIp.substring((i2+1),i3))+hex(wanIp.substring((i3+1),wanIp.length));
	wip = '0x'+wip;

	i1=netmaskIp.indexOf('.');
	i2=netmaskIp.indexOf('.',(i1+1));
	i3=netmaskIp.indexOf('.',(i2+1));
	nip = hex(netmaskIp.substring(0,i1)) + hex(netmaskIp.substring((i1+1),i2)) +hex(netmaskIp.substring((i2+1),i3)) +hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip = '0x'+nip;

	i1=gatewayIp.indexOf('.');
	i2=gatewayIp.indexOf('.',(i1+1));
	i3=gatewayIp.indexOf('.',(i2+1));
	gip = hex(gatewayIp.substring(0,i1)) + hex(gatewayIp.substring((i1+1),i2)) +hex(gatewayIp.substring((i2+1),i3)) +hex(gatewayIp.substring((i3+1),gatewayIp.length));
	gip = '0x'+gip;

	if((wip & nip) != (gip & nip))
	{
		alert(vjs16 +gatewayIp+vjs161 + wanIp+"/"+netmaskIp+vjs162);
		return false;
	}
	if((nip|gip-0)==-1) {
		alert("Broadcast address "+gatewayIp+" should not be in IP pool.");
		return false;	
	}
	
}
function validatePasswd(val1, val2){
 if(val1!=val2)
 {
	alert(vjs17);
	return false;
 }
}
function validateStartEndPort(startval, endval){
 if(endval.length==0) return;
 if(validatePort(endval)==false) return false;
 start=startval-0;
 end= endval-0;
 if(startval.length==0)
 {
	alert(vjs18);
	return;
 }
 if(start>end)
 {
	alert(vjs19);
	return false;
 }
 if(start<0 || end<0)
 {
	alert(vjs20);
	return false;
 }
}
function validateMac(val){
 var i;
 sval=String(val);

 if (sval.length>0 && sval.length!=17)
 {	alert(vjs21);
	return false;
 }
 for (i=0; i<sval.length; i++)
 {	if ((i % 3)==2)
	{if (sval.charAt(i)!=':')
	 {  alert(vjs22+(i+1)+vjs221);
            return false;
         }
 	}
	else if (!((sval.charAt(i)>='0' && sval.charAt(i)<='9') ||
	(sval.charAt(i)>='A' && sval.charAt(i)<='F')  ||
	(sval.charAt(i)>='a' && sval.charAt(i)<='f')))
 	{  
	 alert(vm1+'['+sval.charAt(i)+'] '+vm2+(i+1)+'! '+vm3+' 0123456789ABCDEFabcdef');
	 return false;
 	}
 }
 var sub1=val.substring(0,2);
 var sub2=val.substring(3,5);
 var sub3=val.substring(6,8);
 var sub4=val.substring(9,11);
 var sub5=val.substring(12,14);
 var sub6=val.substring(15);

 if (sub1=='ff' && sub2=='ff' && sub3=='ff' && sub4=='ff' && sub5=='ff' && sub6=='ff')
 {
	alert(vjs23);
	return false;
 }
 if (sub1=='00' && sub2=='00' && sub3=='00' && sub4=='00' && sub5=='00' && sub6=='00')
 {
	alert(vjs24);
	return false;
 }
 sub1='0x'+sub1;
 if((sub1 & 1)==1)
 {
	alert(vjs25);
	return false;
 }
 return true;
}
function validateStartEndIp(lanip,netip,startip, endip)
{
 if(endip.length==0) return;
 if((validateGateway(lanip,netip,endip)) == false) return false;

 i1=startip.indexOf('.');
 i2=startip.indexOf('.',(i1+1));
 i3=startip.indexOf('.',(i2+1));
 sip = hex(startip.substring(0,i1)) + hex(startip.substring((i1+1),i2)) +hex(startip.substring((i2+1),i3))+hex(startip.substring((i3+1),startip.length));
 sip = '0x'+sip;

 i1=endip.indexOf('.');
 i2=endip.indexOf('.',(i1+1));
 i3=endip.indexOf('.',(i2+1));
 eip = hex(endip.substring(0,i1)) + hex(endip.substring((i1+1),i2)) +hex(endip.substring((i2+1),i3))+hex(endip.substring((i3+1),endip.length));
 eip = '0x'+eip;

 if(sip>eip)
 {
	alert(vjs26);
	return false;
 }
}
function validateNumber(val)
{
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+' ! '+vm3+' 0123456789');
		return false;
	}
 }	
}
function validatePort(val)
{
 if(val.length==0) return true;
 if(validateNumber(val)==false) return false;
 if((val-0)<1 || (val-0)>65535)
 {
	alert('Invalid number! Must between 1..65535');
	return false;
 }
 return true;
}
function validateIdleTime(val)
{
 if(validateNumber(val)==false) return false;
 if((val-0)<1 || (val-0)>1440)
 {
	alert(vjs27);
	return false;
 }
}
function validatelength(val)
{
 if(val.length>63)
 {
	alert(vjs21);
	return false;
 }
}
function validatehttp_username(val)
{
 if(validatelength(val)==false) return false;
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)==':')
	{
		alert(vm4+' : '+vm2+(i+1));
		return false;
	}
 }
}
function validatename(val)
{
	if(validatelength(val)==false) return false;
}
function validateLanClassANetmask(val)
{
 if(val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' &&
	val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254'&&
	val!='255.255.0.0' && val!='255.255.128.0' && val!='255.255.192.0' && val!='255.255.224.0' &&
	val!='255.255.240.0' && val!='255.255.248.0' && val!='255.255.252.0' && val!='255.255.254.0' &&
	val!='255.0.0.0' && val!='255.128.0.0' && val!='255.192.0.0' && val!='255.224.0.0' &&
	val!='255.240.0.0' && val!='255.248.0.0' && val!='255.252.0.0' && val!='255.254.0.0')
 {
	alert(vjs28);
	return false;
 }
}
function validateLanNetmask(val)
{
 if(val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' &&
	val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254')
 {
	alert(vjs29);
	return false;
 }
}
function filterIp(lanip, netip, fip)
{
 var tempip;
 i=fip.lastIndexOf('.');

 tempip=fip.substring(i+1,fip.length);
 if(tempip=='*')
	tempip=fip.substring(0,i+1)+'0';
 else tempip=fip;

 if(validateGateway(lanip,netip,tempip)==false)
	return false;
}
function validateEt1Mac(val){
 var i;
 sval=String(val);

 if (sval.length>0 && sval.length!=17)
 {	alert(vjs21);
	return false;
 }

 for (i=0; i<sval.length; i++)
 {	if ((i % 3)==2)
	{if (sval.charAt(i)!=':')
	 {	alert(vm4+vm2+(i+1)+'! '+vm3+' :');
		return false;
	 }
	}
	else if (!((sval.charAt(i)>='0' && sval.charAt(i)<='9') ||
		(sval.charAt(i)>='A' && sval.charAt(i)<='F')  ||
		(sval.charAt(i)>='a' && sval.charAt(i)<='f')))
	{  
		alert(vm4+'['+sval.charAt(i)+'] '+vm2+(i+1)+'! '+vm3+' 0123456789ABCDEFabcdef');
 		return false;
	}
 }
 var sub1=val.substring(0,2);
 var sub2=val.substring(3,5);
 var sub3=val.substring(6,8);
 var sub4=val.substring(9,11);
 var sub5=val.substring(12,14);
 var sub6=val.substring(15);

 if (sub1=='ff' && sub2=='ff' && sub3=='ff' && sub4=='ff' && sub5=='ff' && sub6=='ff')
 {
	alert(vjs23);
	return false;
 }
 sub1='0x'+sub1;
 if((sub1 & 1)==1)
 {
	alert(vjs25);
	return false;
 }
 return true;
}
function validateNetMask(val)
{
	if(val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' &&
	 val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254'&&
	 val!='255.255.0.0' && val!='255.255.128.0' && val!='255.255.192.0' && val!='255.255.224.0' &&
	 val!='255.255.240.0' && val!='255.255.248.0' && val!='255.255.252.0' && val!='255.255.254.0' &&
	 val!='255.0.0.0' && val!='255.128.0.0' && val!='255.192.0.0' && val!='255.224.0.0' &&
	 val!='255.240.0.0' && val!='255.248.0.0' && val!='255.252.0.0' && val!='255.254.0.0' &&
	 val!='128.0.0.0' && val!='192.0.0.0' && val!='224.0.0.0' &&
	 val!='240.0.0.0' && val!='248.0.0.0' && val!='252.0.0.0' && val!='254.0.0.0')
	{
		alert(vjs28);
		return false;
	}
}
function validateWanIp(val)
{
	if(validateIp(val)==false) return false;

	var ii; sval=String(val);
	i1=val.indexOf('.');
	sub1=val.substring(0,i1);

	tempval=val.substring(i1+1,val.length);
	i2=tempval.indexOf('.');
	sub2=tempval.substring(0,i2);

	tempval=tempval.substring(i2+1,tempval.length);
	i3=tempval.indexOf('.');
	sub3=tempval.substring(0,i3);

	tempval=tempval.substring(i3+1,tempval.length);
	i4=tempval.indexOf('.');
	sub4=tempval.substring(0,tempval.length);
	
	if(sub1=='0' || sub1=='255')
	{
		alert(vjs30);
		return false;
	}
	if(sub4=='0' || sub4=='255')
	{
		alert(vjs30);
		return false;
	}
	if(sub1=='127')
	{
		alert(vjs31);
		return false;
	}
	if(val=='0.0.0.0')
	{
		alert(vjs32);
		return false;
	}

	if((sub1-0)>223)
	{
		alert(vjs33);
		return false;
	}
	return true;
}
function validateRange(val,val1,val2)
{
 if(validateNumber(val)==false) return false;
 if((val2-0)>0)
 {
	if((val-0)<(val1-0) || (val-0)>(val2-0) )
	{
		alert(vjs34+' (' + val1 + '..' + val2 + ')');
		return false;
	}
 }
}
function isBlank(s)
{
	if(!s)
		return true;
	for (i=0;i<s.length;i++)
	{
		c=s.charAt(i);
		if ((c!=' ')&&(c!='\n')&&(c!='\t'))
			return false;
	}
	return true;
}
function checkvalid(value)
{
   	var localname=value.toLowerCase();
	for(i=0;i<localname.length;i++)
	{
	    	var token=localname.charAt(i);
	    	if(token==':' || token==';'  || token=='\"' || token=='\''|| token=='<' || token=='>' || token=='*' 
	      		|| token=='+' || token=='=' || token=='\\'|| token=='|' || token=='?' || token==',' )
	   		{
	      		alert("Invalid character: :;\"\'<>+=\\|?, ");
	      		return false;
	    	}  
	} 
    return true;
}
function getFocus(elm)
{
	elm.focus();
	elm.select();
}

// +++ Kyo add
function IPCheck ( I ) // 1 ~ 254
{
	if ( isNaN( I.value ))
	{
	//	alert("Invalid value for IP address !");
       	alert(lsipm4);
		I.focus();
		return false;
	}	

	//d = parseInt ( I.value , 10 );
	d = I.value;
	data = d.match(/[^0-9]/g);
	if (data || !d) {
		alert(lsipm4);
		I.focus();
		return false;
	}

	if ( !(d<255 && d>0)) 
	{
		alert(lsipm4);
		I.focus();	
		return false;
	}
	return true;
}

function IPCheck1 ( I )// 0~ 255
{
	//d = parseInt ( I.value , 10 );
	d = I.value;
	if(I.value=="")
		return false;	
	else {
		data = d.match(/[^0-9]/g);
		if (data || !d) {
			alert(lsipm4);
			I.focus();
			return false;
		}
	
		if ( !(d<256 && d>=0)) 
		{
		//	alert("IP is out of range in [0-255] !");
	          alert(lsipm4);
			I.focus();	
			return false;
		}
		return true;
	}
}
// --- Kyo add