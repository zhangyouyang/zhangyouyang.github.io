function GetUrlParam(url, paraName) {
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr != null && arr[0] == paraName) {
                return arr[1]
            }
        }
        return ""
    } else {
        return ""
    }
}
var jsurl = $("script").last().attr("src");
var companyname = "";
companyname = GetUrlParam(jsurl, "companyname");
var dlhtm = '��' + '<a class="topNav_txtLogin" href="https://my.jqw.com/2017/web/login2017.aspx" rel="nofollow" target="_top">�����¼</a>' +'��';
	dlhtm += '��' + '<a class="topNav_txtLogin" href="https://reg.jqw.com" rel="nofollow">���ע��</a>' + '��';
var regexCooike = /JQWADMIN=(.*?)($|;)/g;
strCooike = unescape(document.cookie.match(regexCooike));
if (strCooike == "null") {
    dlhtm = '��' + '<a class="topNav_txtLogin" rel="nofollow" href="https://my.jqw.com/2017/web/login2017.aspx" rel="nofollow" target="_top">�����¼</a>' + '��';
	dlhtm += '��' + '<a class="topNav_txtLogin" href="https://reg.jqw.com" rel="nofollow">���ע��</a>' + '��';
} else {
    var regexUser = /membername=(.*?)($|&)/g;
    strUser = strCooike.match(regexUser).toString();
    strUser = strUser.replace("membername=", "").replace("&", "");
    if (strUser.indexOf("membername") > -1) {
        strUser = strUser.match(regexUser).toString();
        strUser = strUser.replace("membername=", "").replace("&", "")
    }
    var regexUserid = /memberid=(.*?)($|&)/g;
    strUserid = strCooike.match(regexUserid).toString();
    strUser = strUser.replace("memberid=", "").replace("&", "");
    dlhtm = '<p class="topNav_txtName">' + strUser + "</p>";
	dlhtm += '<div class="DingButd2_navBox">';
	dlhtm += '<p class="DingButd2_navBox_p">�������<s></s></p>';
	dlhtm += '<div class="DingButd2_navBox_navDown">';
	dlhtm += '<p class="DingButd2_navBox_p1">�������<s></s></p>';
	dlhtm += '<p><a href="https://my.jqw.com/2017/Web/DataPage.aspx" rel="nofollow">�˻�����</a></p>';
    dlhtm += '<p><a href="https://member3.jqw.com/member2015/index.aspx" rel="nofollow">���̹���</a></p>';
    dlhtm += '<p><a href=\'https://www.jqw.com/loginOut.aspx\' target="_parent" rel="nofollow">�˳���¼</a></p>';
	dlhtm += '</div>';
	dlhtm += '</div>';
}
var dingbu_html = "";
dingbu_html += '<div class="topNav">';
dingbu_html += '<div class="topNav_txt">'
dingbu_html += '<p class="topNav_txtWelcome">��ӭ���ķ��ʣ�</p>'
dingbu_html += "   " + dlhtm + "</div></div>";
document.write(dingbu_html);
$(function() {
	//��������
    $(".DingButd2_navBox").mouseover(function() {
        $(".DingButd2_navBox_p").hide();
        $(".DingButd2_navBox_navDown").show()
    });
    $(".DingButd2_navBox").mouseout(function() {
        $(".DingButd2_navBox_p").show();
        $(".DingButd2_navBox_navDown").hide()
    })
	//������ά��
	$(".topLogo_leftTop_codeBox").mouseover(function() {
		$(".code_showCode").show()
	});
	$(".topLogo_leftTop_codeBox").mouseout(function() {
		$(".code_showCode").hide()
	});
});