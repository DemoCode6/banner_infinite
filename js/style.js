// JavaScript Document
$(function ($) {
    var dir = 1;
    var vt = 15;
    dir33 = 1;
    var ScrollBox = document.getElementById('proRoll_1');//滚动外层遮挡框架
    if (!ScrollBox) return false;
    var OldContent = ScrollBox.getElementsByTagName("ul")[0];//UL index=0;
    if (!OldContent) return false;
    var domeOne = ScrollBox.getElementsByTagName("li");// li
    if (!domeOne.length) return false;
    var domeOneLen = domeOne.length;
    var OldLong = 0;//旧总长
    var NewLong = 0;//新总长-外层框架长度
    var NewContent = OldContent.innerHTML;
    if (dir == "1") {
        for (var i = 0; i < domeOneLen; i++) {
            OldLong += domeOne[i].offsetWidth;
        }
        while (NewLong < (ScrollBox.offsetWidth)) {
            NewContent += OldContent.innerHTML;
            NewLong += OldLong;
        }
    } else if (dir == "2") {
        for (var i = 0; i < domeOneLen; i++) {
            OldLong += domeOne[i].offsetHeight;
        }
        while (NewLong < (ScrollBox.offsetHeight)) {
            NewContent += OldContent.innerHTML;
            NewLong += OldLong;
        }
    }//判断新UL的总长
    OldContent.innerHTML = NewContent;//生成新的Ul
    var domeTwo = ScrollBox.getElementsByTagName("li")[domeOneLen];//滚动结束位置
    var myRoll = function () {

        if (dir33 > 0) {
            if (ScrollBox.scrollLeft == domeTwo.offsetLeft) {
                ScrollBox.scrollLeft = 0;
            } else {
                ScrollBox.scrollLeft++;
            }
        } else {

            if (ScrollBox.scrollLeft == 0) {
                ScrollBox.scrollLeft = domeTwo.offsetLeft;
            }
            ScrollBox.scrollLeft--;
        }

    }//滚动

    var timer = setInterval(myRoll, vt);//周期性调用滚动
    ScrollBox.onmouseover = function () { clearInterval(timer) }
    ScrollBox.onmouseout = function () { timer = setInterval(myRoll, vt) };
    $('.scroll > li').hover(function () {
        $(this).find('div').show();
    }, function () {
        $(this).find('div').hide();
    });
});
function r_left1() { if (dir33 = -1) dir33 = 1 }//换向左移
function r_right1() { if (dir33 = 1) dir33 = -1 }//换向右移



