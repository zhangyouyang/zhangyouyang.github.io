var isIE=/msie/i.test(navigator.userAgent);function gID(id){return document.getElementById(id);}
function ScrollDiv(id,pScrollY){var ScrollY=document.documentElement.scrollTop||document.body.scrollTop;if(pScrollY==null){pScrollY=0;}
var moveTop=.1*(ScrollY-pScrollY);moveTop=(moveTop>0)?Math.ceil(moveTop):Math.floor(moveTop);gID(id).style.top=parseInt(gID(id).style.top)+moveTop+"px";pScrollY=pScrollY+moveTop;setTimeout("ScrollDiv('"+id+"',"+pScrollY+");",50);}
function addObjEvent(obj,eventName,eventFunc){if(obj.attachEvent){obj.attachEvent(eventName,eventFunc);}else if(obj.addEventListener){var eventName2=eventName.toString().replace(/on(.*)/i,'$1');obj.addEventListener(eventName2,eventFunc,false);}else{obj[eventName]=eventFunc;}}
function delObjEvent(obj,eventName,eventFunc){if(obj.detachEvent){obj.detachEvent(eventName,eventFunc);}else if(obj.removeEventListener){var eventName2=eventName.toString().replace(/on(.*)/i,'$1');obj.removeEventListener(eventName2,eventFunc,false);}else{obj[eventName]=null;}}
function MoveDiv(obj,e){e=e||window.event;var ie6=isIE;if(/msie 9/i.test(navigator.userAgent)){ie6=false;}
if(ie6&&e.button==1||!ie6&&e.button==0){}else{return false;}
obj.style.position='absolute';obj.ondragstart=function(){return false;}
var x=e.screenX-obj.offsetLeft;var y=e.screenY-obj.offsetTop;addObjEvent(document,'onmousemove',moving);addObjEvent(document,'onmouseup',endMov);e.cancelBubble=true;if(isIE){obj.setCapture();}else{window.captureEvents(Event.mousemove);}
if(e.preventDefault){e.preventDefault();e.stopPropagation();}
e.returnValue=false;return false;function moving(e){obj.style.left=(e.screenX-x)+'px';obj.style.top=(e.screenY-y)+'px';return false;}
function endMov(e){delObjEvent(document,'onmousemove',moving);delObjEvent(document,'onmouseup',arguments.callee);if(isIE){obj.releaseCapture();}else{window.releaseEvents(Event.mousemove);}}}