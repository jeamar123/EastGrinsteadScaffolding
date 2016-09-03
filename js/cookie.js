$(document).ready(function(){if(!getCookieValue('persistentCookieExists')){$('#cookieWrapper').slideDown(1000);}
$('#cookieClose').click(function(){$('#cookieWrapper').slideUp(1000);setPersistentCookie();});});function getCookieValue(cookieName){var exp=new RegExp(escape(cookieName)+"=([^;]+)");if(exp.test(document.cookie+";")){exp.exec(document.cookie+";");return unescape(RegExp.$1);}
else return false;}
function setPersistentCookie(){if(testPersistentCookie()){var myName='persistentCookieExists';var myValue='true';var myPeriod='years';var myOffset=5;writePersistentCookie(myName,myValue,myPeriod,myOffset);}}
function testPersistentCookie(){writePersistentCookie("persistentCookieExists","true","minutes",1);if(getCookieValue("persistentCookieExists")=="true")
return true
else
return false;}
function writePersistentCookie(CookieName,CookieValue,periodType,offset){var expireDate=new Date();offset=offset/1;var myPeriodType=periodType;switch(myPeriodType.toLowerCase()){case"years":var year=expireDate.getYear();if(year<1000)year=year+1900;expireDate.setYear(year+offset);break;case"months":expireDate.setMonth(expireDate.getMonth()+offset);break;case"days":expireDate.setDate(expireDate.getDate()+offset);break;case"hours":expireDate.setHours(expireDate.getHours()+offset);break;case"minutes":expireDate.setMinutes(expireDate.getMinutes()+offset);break;default:expireDate.setMinutes(expireDate.getMinutes()+offset);break;}
document.cookie=escape(CookieName)+"="+escape(CookieValue)+"; expires="+expireDate.toGMTString()+"; path=/";}