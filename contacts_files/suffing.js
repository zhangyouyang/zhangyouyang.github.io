$(".imgList").first("li").addClass("imgOn");$(".indexList").first("li").addClass("indexOn");var curIndex=0;var autoChange=setInterval(function(){if(curIndex<$(".imgList li").length-1){curIndex++;}else{curIndex=0;}
changeTo(curIndex);},2500);$(".indexList").find("li").each(function(item){var wid=$(this).parent().parent().parent().parent().parent().parent().parent().attr("id");$(this).hover(function(){clearInterval(autoChange);changeTo(item);curIndex=item;},function(){autoChange=setInterval(function(){if(curIndex<$(".imgList li").length-1){curIndex++;}else{curIndex=0;}
changeTo(curIndex);},2500);});});changeTo(0);function changeTo(num){$(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");$(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");$(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");}
$("#user_log1").hover(function(){clearInterval(autoChange);},function(){autoChange=setInterval(function(){},2500);});