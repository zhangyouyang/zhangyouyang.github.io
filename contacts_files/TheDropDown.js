$(function(){var timer=null;$(".content_proDisplay_boxNav img").hover(function(){clearTimeout(timer);$(this).parents('div').siblings().find('.content_proDisplay_boxNavdown').slideUp();$(".content_proDisplay_boxNav img").parents('div').children('a').removeClass("linav2color");$(this).parents('div').children('a').addClass("linav2color");$(".content_proDisplay_boxNav img").attr("src","/images2016/img013/index_xiala.png");$(this).attr("src","/images2016/img013/index_xiala2.png");$(this).parents(".content_proDisplay_boxNav").find(".content_proDisplay_boxNavdown").slideDown(100);$(this).parents(".content_proDisplay_boxNav").css;$(this).next().show();},function(){timer=setTimeout(function(){$(".content_proDisplay_boxNavdown").slideUp(100);$(".content_proDisplay_boxNavdown").slideUp();$(".content_proDisplay_boxNav").find('a').removeClass("linav2color");$(".content_proDisplay_boxNav img").attr("src","/images2016/img013/index_xiala.png");$(this).next().hide();},200);});$(".content_proDisplay_boxNavdown").hover(function(){clearTimeout(timer);},function(){timer=setTimeout(function(){$(".content_proDisplay_boxNavdown").slideUp(100);$(".content_proDisplay_boxNavdown").slideUp();$(".content_proDisplay_boxNav").find('a').removeClass("linav2color");$(".content_proDisplay_boxNav img").attr("src","/images2016/img013/index_xiala.png");},200);});var a=$(".content_proDisplay_boxNav a");for(i=0,len=a.length;i<len;i++){if(a[i].href==window.location.href){a[i].style.borderLeft='5px solid #fe8d03';a[i].style.color='#fe8d03';}}
$(".content_proDisplay_boxItemList li:nth-child(4n)").css("margin-right","0");$(".honor_list li:nth-child(4n)").css("margin-right","0");var liindex=999;$(".content_proDisplay_boxNav").each(function(){$(this).css('z-index',liindex--);});});function addFavorite(){var url=window.location;var title=document.title;var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("msie 8")>-1){external.AddToFavoritesBar(url,title,'');}else{try{window.external.addFavorite(url,title);}catch(e){try{window.sidebar.addPanel(title,url,"");}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加");}}}}
function setHome(obj,vrl){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);}
catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
catch(e){alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");}
var prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',vrl);}}}
var Speed=1;var Space=5;var PageWidth=300;var fill=0;var MoveLock=false;var MoveTimeObj;var Comp=0;var AutoPlayObj=null;var l=$("#List1 div").length;if(l>2){GetObj("List2").innerHTML=GetObj("List1").innerHTML;}
GetObj('ISL_Cont').scrollLeft=fill;GetObj("ISL_Cont").onmouseover=function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout=function(){AutoPlay();}
AutoPlay();function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){clearInterval(AutoPlayObj);AutoPlayObj=setInterval('ISL_GoDown();ISL_StopDown();',3000);}
function ISL_GoUp(){if(MoveLock)return;clearInterval(AutoPlayObj);MoveLock=true;MoveTimeObj=setInterval('ISL_ScrUp();',Speed);}
function ISL_StopUp(){clearInterval(MoveTimeObj);if(GetObj('ISL_Cont').scrollLeft%PageWidth-fill!=0){Comp=fill-(GetObj('ISL_Cont').scrollLeft%PageWidth);CompScr();}else{MoveLock=false;}
AutoPlay();}
function ISL_ScrUp(){if(GetObj('ISL_Cont').scrollLeft<=0){GetObj('ISL_Cont').scrollLeft=GetObj('ISL_Cont').scrollLeft+GetObj('List1').offsetWidth}
GetObj('ISL_Cont').scrollLeft-=Space;}
function ISL_GoDown(){clearInterval(MoveTimeObj);if(MoveLock)return;clearInterval(AutoPlayObj);MoveLock=true;ISL_ScrDown();MoveTimeObj=setInterval('ISL_ScrDown()',Speed);}
function ISL_StopDown(){clearInterval(MoveTimeObj);if(GetObj('ISL_Cont').scrollLeft%PageWidth-fill!=0){Comp=PageWidth-GetObj('ISL_Cont').scrollLeft%PageWidth+fill;CompScr();}else{MoveLock=false;}
AutoPlay();}
function ISL_ScrDown(){if(GetObj('ISL_Cont').scrollLeft>=GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft=GetObj('ISL_Cont').scrollLeft-GetObj('List1').scrollWidth;}
GetObj('ISL_Cont').scrollLeft+=Space;}
function CompScr(){var num;if(Comp==0){MoveLock=false;return;}
if(Comp<0){if(Comp<-Space){Comp+=Space;num=Space;}else{num=-Comp;Comp=0;}
GetObj('ISL_Cont').scrollLeft-=num;setTimeout('CompScr()',Speed);}else{if(Comp>Space){Comp-=Space;num=Space;}else{num=Comp;Comp=0;}
GetObj('ISL_Cont').scrollLeft+=num;setTimeout('CompScr()',Speed);}}