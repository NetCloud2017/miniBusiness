var CID = "0";
window.top !== window.self && (window.top.location = window.location);

(function () {
    if (
        !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            navigator.userAgent.toLowerCase()
        )
    ) {
        document.close();
        document.body.innerHTML =
            '<link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css"><div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在手机浏览器打开链接</h4></div></div>';
    }
})();

var system = {
    win: false,
    mac: false,
    iPhone: false,
    xll: false,
    ipad: false,
    Android: false,
    Ios: false,
};

var p = navigator.platform;
var u = navigator.userAgent;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.iPhone = p.indexOf("iPhone") == 0;
system.x11 = p == "X11" || p.indexOf("Linux") == 0;
system.ipad = navigator.userAgent.match(/iPad/i) != null ? true : false;
system.Android = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
system.ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (system.win || system.mac) {
    document.close();
    document.body.innerHTML =
        '<link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css"><div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在手机浏览器打开链接</h4></div></div>';
}

var picurl = "";

var t0picurl = "";
// var videourl = "";
// var t0videourl = "http://wy.eveuu.cn/wuye/";

var domain = "http://pay.shuobofootball.xyz:88/";

var config = JSON.parse(localStorage.getItem("config")) || { try: 4 };
var vip = gc("vip") || 0;
sbnum = config["try"] || 4;

if (gc("vip") == 0 || gc("vip") == null) {
    $(".toubuyonghu").html("普通用户");
    $(".dqdj").html("<em><strong>体验区</strong></em>");
    $(".tq").html("<em><strong>体验区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>开通VIP<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-icon-test"></span><p class="dqwz">体验区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse" ></span><p class="hmwz">会员区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-icon-test icoyanse"></span><p class="hmwz">体验区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-huiyuan1"></span><p class="dqwz">会员区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-icon-test icoyanse"></span><p class="hmwz">体验区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-icon-test icoyanse"></span><p class="hmwz">体验区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-icon-test icoyanse"></span><p class="hmwz">体验区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-icon-test icoyanse"></span><p class="hmwz">体验区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );
    //$('#yanse').html('<style type="text/css">.cnl-tag{background-color: #e92525;}.ui-newstips {background-color: #a70442;}.icoyanse{color: #a70442;}#header .ui-tiled li.active {background-color: #a70442;}.hmwz{font-size:13px;color: #a70442;}#toubu.ui-toubu-positive {background-color: #a70442;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #e74885;}</style>');
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );

    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #d0674d;}.ui-newstips {background-color: #d0674d;}.icoyanse{color: #d0674d;}#header .ui-tiled li.active {background-color: #d0674d;}.hmwz{font-size:13px;color: #d0674d;}#toubu.ui-toubu-positive {background-color: #d0674d;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #d0674d;}</style>'
    );
    //$('#234').html('<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>');
    //$('#123').html('<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>');
}
if (gc("vip") == 1) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("VIP会员");
    $(".dqdj").html("<em><strong>会员区</strong></em>");
    $(".tq").html("<em><strong>会员区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级黄钻会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-huiyuan1"></span><p class="dqwz">会员区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse" ></span><p class="hmwz">会员区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-huiyuan" ></span><p class="dqwz">黄钻区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-huiyuan1 icoyanse"></span><p class="hmwz">会员区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #fd25b1;}.ui-newstips {background-color: #fd25b1;}.icoyanse{color: #fd25b1;}#header .ui-tiled li.active {background-color: #fd25b1;}.hmwz{font-size:13px;color: #fd25b1;}#toubu.ui-toubu-positive {background-color: #fd25b1;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #fd25b1;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
}
if (gc("vip") == 2) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("黄钻会员");
    $(".dqdj").html("<em><strong>黄钻区</strong></em>");
    $(".tq").html("<em><strong>黄钻区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级钻石会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-huiyuan"></span><p class="dqwz">黄钻区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01"></span><p class="dqwz">钻石区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-huiyuan icoyanse"></span><p class="hmwz">黄钻区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #dd524d;}.ui-newstips {background-color: #dd524d;}.icoyanse{color: #dd524d;}#header .ui-tiled li.active {background-color: #dd524d;}.hmwz{font-size:13px;color: #dd524d;}#toubu.ui-toubu-positive {background-color: #dd524d;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #dd524d;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    //$('#234').html('<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 57%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>');
}
if (gc("vip") == 3) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("钻石会员");
    $(".dqdj").html("<em><strong>钻石区</strong></em>");
    $(".tq").html("<em><strong>钻石区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级VPN权限<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01" ></span><p class="dqwz">钻石区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-vpn"></span><p class="dqwz">VPN区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-shiliangzhinengduixiang01 icoyanse"></span><p class="hmwz">钻石区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #7e0f8c;}.ui-newstips {background-color: #7e0f8c;}.icoyanse{color: #7e0f8c;}#header .ui-tiled li.active {background-color: #7e0f8c;}.hmwz{font-size:13px;color: #7e0f8c;}#toubu.ui-toubu-positive {background-color: #7e0f8c;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #7e0f8c;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
}
if (gc("vip") == 4) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("VPN权限");
    $(".dqdj").html("<em><strong>VPN区</strong></em>");
    $(".tq").html("<em><strong>VPN区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级海外会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-vpn" ></span><p class="dqwz">VPN区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-haiwaigou"></span><p class="dqwz">海外区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-vpn icoyanse"></span><p class="hmwz">VPN区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #e607c1;}.ui-newstips {background-color: #e607c1;}.icoyanse{color: #e607c1;}#header .ui-tiled li.active {background-color: #e607c1;}.hmwz{font-size:13px;color: #e607c1;}#toubu.ui-toubu-positive {background-color: #e607c1;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #e607c1;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
}
if (gc("vip") == 5) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("海外会员");
    $(".dqdj").html("<em><strong>海外区</strong></em>");
    $(".tq").html("<em><strong>海外区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级黑金会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-haiwaigou" ></span><p class="dqwz">海外区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing"></span><p class="dqwz">黑金区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-haiwaigou icoyanse"></span><p class="hmwz">海外区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #f13a3a;}.ui-newstips {background-color: #f13a3a;}.icoyanse{color: #f13a3a;}#header .ui-tiled li.active {background-color: #f13a3a;}.hmwz{font-size:13px;color: #f13a3a;}#toubu.ui-toubu-positive {background-color: #f13a3a;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #f13a3a;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.hb li{width:49.9%;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators li {background-color: white;}.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}</style>'
    );
}
if (gc("vip") == 6) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("黑金会员");
    $(".dqdj").html("<em><strong>黑金区</strong></em>");
    $(".tq").html("<em><strong>黑金区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级高清会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing" ></span><p class="dqwz">黑金区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-gaoqing"></span><p class="dqwz">加速区</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-heizuanpaiming-lingxing icoyanse"></span><p class="hmwz">黑金区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #351919;}.ui-newstips {background-color: #351919;}.icoyanse{color: #351919;}.hb li .ui-grid-trisect-img{padding-top: 70%;}#header .ui-tiled li.active {background-color: #351919;}.hmwz{font-size:13px;color: #351919;}#toubu.ui-toubu-positive {background-color: #351919;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #351919;}</style>'
    );
    $("#123").html(
        '<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>'
    );
}
if (gc("vip") == 7) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("加速节点");
    $(".dqdj").html("<em><strong>加速区</strong></em>");
    $(".tq").html("<em><strong>加速区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级至尊会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-gaoqing" ></span><p class="dqwz">加速区</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-zhizunqia"></span><p class="dqwz">至尊会员</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-gaoqing icoyanse"></span><p class="hmwz">加速区</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #ff00a5;}.ui-newstips {background-color: #ff00a5;}.icoyanse{color: #ff00a5;}#header .ui-tiled li.active {background-color: #ff00a5;}.hmwz{font-size:13px;color: #ff00a5;}#toubu.ui-toubu-positive {background-color: #ff00a5;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #ff00a5;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>'
    );
    $("#123").html(
        '<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>'
    );
}

if (gc("vip") == 8) {
    $(".ui-slider").addClass("yc");
    $(".kg").addClass("yc");
    $(".ui-panel").addClass("top10");
    $(".toubuyonghu").html("至尊会员");
    $(".dqdj").html("<em><strong>至尊区</strong></em>");
    $(".tq").html("<em><strong>至尊区电影</strong></em>");
    $(".ktdj").html(
        '<em onclick="pay()"><strong>升级帝王会员<strong></strong></strong></em>'
    );
    $("#lanm1").html(
        '<span class="icon iconfont icon-zhizunqia" ></span><p class="dqwz">至尊会员</p>'
    );
    $("#lanm2").html(
        '<span class="icon iconfont icon-wangguan icoyanse"></span><p class="hmwz">帝王会员</p>'
    );

    $("#lanm21").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#lanm22").html(
        '<span class="icon iconfont icon-wangguan"></span><p class="dqwz">帝王会员</p>'
    );

    $("#lanm31").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#lanm32").html(
        '<span class="icon iconfont icon-wangguan icoyanse"></span><p class="hmwz">帝王会员</p>'
    );

    $("#lanm41").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#lanm42").html(
        '<span class="icon iconfont icon-wangguan icoyanse"></span><p class="hmwz">帝王会员</p>'
    );

    $("#lanm51").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#lanm52").html(
        '<span class="icon iconfont icon-wangguan icoyanse"></span><p class="hmwz">帝王会员</p>'
    );

    $("#lanm61").html(
        '<span class="icon iconfont icon-zhizunqia icoyanse"></span><p class="hmwz">至尊会员</p>'
    );
    $("#lanm62").html(
        '<span class="icon iconfont icon-wangguan icoyanse"></span><p class="hmwz">帝王会员</p>'
    );
    $("#yanse").html(
        '<style type="text/css">.cnl-tag{background-color: #d0674d;}.ui-newstips {background-color: #d0674d;}.icoyanse{color: #d0674d;}#header .ui-tiled li.active {background-color: #d0674d;}.hmwz{font-size:13px;color: #d0674d;}#toubu.ui-toubu-positive {background-color: #d0674d;border-bottom: 1px solid #e0e0e0;overflow: hidden}#toubu .ui-tiled li.active {background-color: #d0674d;}</style>'
    );
    $("#234").html(
        '<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>'
    );
    $("#123").html(
        '<style type="text/css">.ui-slider-indicators li.current:before {background-color: #e92525;left: 0px;top: 0px;width: 7px;height: 7px;}.hb li .ui-grid-trisect-img{padding-top: 70%;}.ui-slider-indicators {right:0;}.ui-arrowlink:before {display: none;}.ui-grid-trisect-img {padding-top: 133%}.ui-grid-trisect-img>span,.ui-grid-halve-img>span {width: 100%;height:100%;position: absolute;top: 0;left: 0;z-index: 1;background-repeat: no-repeat;-webkit-background-size: cover}</style>'
    );
}

function gq(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
function sc(o, t, i) {
    i = i || "d1";
    var a = getsec(i),
        n = new Date();
    n.setTime(n.getTime() + 1 * a);
    document.cookie =
        o + "=" + escape(t) + ";path=/;expires=" + n.toGMTString(); //
}
function sc2(o, t, i) {
    document.cookie = o + "=" + escape(t) + ";path=/;expires=" + i; //
}
function get2t() {
    var a = getsec("d30"),
        n = new Date();
    n.setTime(n.getTime() + 1 * a);
    var t2t = gc("t2t") || sc("t2t", n.toGMTString(), "d30");
    var t2t = gc("t2t");
    return t2t;
}

function set2t(i) {
    var a = getsec(i),
        n = new Date();
    n.setTime(n.getTime() + 1 * a);
    sc("t2t", n.toGMTString(), i);
}
function gc(o) {
    var t,
        i = new RegExp("(^| )" + o + "=([^;]*)(;|$)");
    var v = (t = document.cookie.match(i)) ? t[2] : null;
    if (v) v = unescape(v);
    return v;
}
function isv(k) {
    return gc(k) > 0;
}
if (gq("f")) sc("ios", 1, "d30");
gc("t") || sc("t", new Date().getTime() / 1000, "d30");
var browser = {
    versions: (function () {
        var o = navigator.userAgent;
        navigator.appVersion;
        return {
            mobile:
                !!o.match(/AppleWebKit.*Mobile/i) ||
                !!o.match(
                    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
                ),
            mac: o.indexOf("Mac") > -1,
            ios: !!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: o.indexOf("Android") > -1 || o.indexOf("Linux") > -1,
            weixin: !!o.match(/MicroMessenger/i),
            qq: !!o.match(/QQ/i),
        };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
};

(function (window) {
    var u = {};
    u.jsonToStr = function (json) {
        if (typeof json === "object") {
            return JSON && JSON.stringify(json);
        }
    };
    u.strToJson = function (str) {
        if (typeof str === "string") {
            return JSON && JSON.parse(str);
        }
    };
    u.rand = function (n, m) {
        if (!m) (m = n), (n = 0);
        var w = m - n;
        Math.random() * w;
        Math.random() * w + n;
        return Math.round(Math.random() * w + n);
    };
    window.$api = u;

    var config = localStorage.getItem("config");
    if (!config) {
        var vqd = "qd";
        vqd = gq("c") ? gq("c") : gc("qudaoid");

        if (window.android != null && typeof window.android != "undefined") {
            if (window.android.getData()) {
                let uuid = window.android.getData();
                $.ajax({
                    type: "get",
                    async: false,
                    url:
                        domain +
                        "api/config?uuid=" +
                        uuid +
                        "&platform=0" +
                        "&channel_id=" +
                        vqd +
                        "&version=0" +
                        "&sign=" +
                        getKey(domain + "api/config") +
                        "&time=" +
                        signTime,
                    success: function (json) {
                        json = decrypt(json);
                        config = json.data;
                        localStorage.setItem(
                            "config",
                            JSON.stringify(json.data)
                        );
                        sbnum = config["try"] || 4;
                        t0picurl = json.data.picUrl;
                    },
                });
            }
        } else {
            $.ajax({
                type: "get",
                async: false,
                url:
                    domain +
                    "api/config?uuid=" +
                    imeif() +
                    "&platform=2" +
                    "&channel_id=" +
                    vqd +
                    "&version=0" +
                    "&sign=" +
                    getKey(domain + "api/config") +
                    "&time=" +
                    signTime,
                success: function (json) {
                    json = decrypt(json);
                    config = json.data;
                    localStorage.setItem("config", JSON.stringify(json.data));
                    sbnum = config["try"] || 4;
                    t0picurl = json.data.picUrl;
                },
            });
        }
    } else {
        t0picurl = JSON.parse(localStorage.getItem("config")).picUrl;
    }
})(window);
//点击视频播放

if (gq("c")) {
    CID = gq("c");
    //if (gc('CID') && CID != gc('CID'))
    //	cc();
    sc("CID", gq("c"), "d30");
} else if (gc("CID")) {
    CID = gc("CID");
}
function play(o, t, p) {
    if (typeof canplay != "undefined" && canplay) {
        var videoUrl = JSON.parse(localStorage.getItem("config")).videoUrl;
        var trytime = gc("x_a_watch") || 0;
        if (parseInt(sbnum) > parseInt(trytime)) {
            sc2("x_a_watch", ++trytime, get2t());
            if (isv("vip")) {
                window.location.href =
                    "./play.app?title=" +
                    escape(o) +
                    "&mp4=" +
                    t +
                    "&pic=" +
                    t0picurl +
                    p;
            } else {
                window.location.href =
                    "./play.app?title=" +
                    escape(o) +
                    "&mp4=" +
                    t +
                    "&pic=" +
                    t0picurl +
                    p;
            }
        } else {
            pay();
        }
    }
}
//提醒支付

function pay(show) {
    var nConfig = JSON.parse(localStorage.getItem("config"));
    if (gc("vip") == 0 || gc("vip") == null) {
        $("#paybox").dialog("show");
        $("#paybox .rmbNum").text(nConfig.levels[0].price || 48);
    }
    if (gc("vip") == 1) {
        $("#paybox1").dialog("show");
        $("#paybox1 .rmbNum").text(nConfig.levels[1].price || 32);
    }
    if (gc("vip") == 2) {
        $("#paybox2").dialog("show");
        $("#paybox2 .rmbNum").text(nConfig.levels[2].price || 100);
    }
    if (gc("vip") == 3) {
        $("#paybox3").dialog("show");
        $("#paybox3 .rmbNum").text(nConfig.levels[3].price || 50);
    }
    if (gc("vip") == 4) {
        $("#paybox4").dialog("show");
        $("#paybox4 .rmbNum").text(nConfig.levels[4].price || 38);
    }
    if (gc("vip") == 5) {
        $("#paybox5").dialog("show");
        $("#paybox5 .rmbNum").text(nConfig.levels[5].price || 38);
    }
    if (gc("vip") == 6) {
        $("#paybox6").dialog("show");
        $("#paybox6 .rmbNum").text(nConfig.levels[6].price || 200);
    }
    if (gc("vip") == 7) {
        $("#paybox7").dialog("show");
        $("#paybox7 .rmbNum").text(nConfig.levels[7].price || 200);
    }
    if (gc("vip") == 8) {
        $("#paybox8").dialog("show");
        $("#paybox8 .rmbNum").text(nConfig.levels[7].price || 200);
    }
    // if ($('video').length > 0) {
    //     gopay();
    // }else if(show != 2){
    //     pay2();
    // }

    //o.on("dialog:action", function (o) {
    //1 == o.index && (window.location.href =  APP+"/Index/buy");
    //1 == o.index && (window.location.href = "./check.html?c=" + CID);
    //})
}
//播放界面提示支付
var recordPayOn = 0;
function pay2() {
    var dia = $.dialog({
        title: "\u6e29\u99a8\u63d0\u793a",
        content:
            "\u5347\u7ea7\u4f1a\u5458\u7b49\u7ea7\u770b\u5b8c\u6574\u89c6\u9891\u007e",
        button: ["\u7b49\u4e0b\u5145", "\u53bb\u5145\u503c"],
    });
    // console.log(1);
    dia.on("dialog:action", function (e) {
        // dia.off("dialog:action");
        // e.stopPropagation();
        // e.preventDefault();
        if (e.index == 1) {
            // setTimeout(()=>{
            pay();
            // },0)
        }
        // else if(recordPayOn==0){
        //     setTimeout(()=>{
        //         pay();
        //     },0)
        //     recordPayOn = 1;
        // }else if(recordPayOn==1){
        //     recordPayOn = 0;
        // }
    });
}
//提示充值。
function getNo() {
    if (1 == Math.floor(2 * Math.random() + 1)) {
        var o = "x_a_no",
            t = 3985,
            i = gc(o);
        i ? ((_ckno = parseInt(i) + 1), sc(o, _ckno, "d30")) : sc(o, t, "d30"),
            (i = i ? _ckno : t);
        $("#showno").html(i);
        $(".ui-newstips-wrap").show().addClass("flip-top");
        setTimeout(function () {
            $(".ui-newstips-wrap").hide();
        }, 5e3);
    }
}
function getsec(o) {
    var t = 1 * o.substring(1, o.length),
        i = o.substring(0, 1);
    return "s" == i
        ? 1e3 * t
        : "h" == i
        ? 60 * t * 60 * 1e3
        : "d" == i
        ? 24 * t * 60 * 60 * 1e3
        : void 0;
}

function goback() {
    //window.location.href = APP+"/Index/index";
    window.location.href = "./index.app";
}
function load_paylink(_cid) {
    sc("an", 1, "d30");
}
function payopen(topay) {
    if (isv("vip")) return;
    if (topay) window.location.href = "./check.html?c=" + CID;
    else pay2();
}
//function gettry() {
//	urlx = Math.floor(Math.random() * 4)+1;
//	var trytime = gc("x_a_watch") || 0;
//trytime = trytime-1;
//alert(trytime);
//trytime++;
//sc("x_a_watch", trytime);
// return 'http://v.wuxigouwuka.com:81' + urlx + '.mp4'
//return  'http://v.tydyzs.com:8088/vip0/1/'+ urlx +'.mp4'
//}
function _test(v) {
    if (v) {
        //sc('vip', v, 'd1');
    }
    console.log("vip: " + gc("vip"));
    console.log("x_a_watch: " + gc("x_a_watch"));
    console.log("sbnum: " + sbnum);
}

try {
    isplay == 1;
} catch (e) {
    isplay = false;
}
//如果是播放资源
if (typeof isplay != "undefined" && isplay) {
    //不是vip，获取试播资源。
    //if (!isv('vip')) {
    //    vl = gettry();
    //}
    var playbox = $("#willesPlay");

    // if(gc('vip')!=6){
    // $('<div style="text-align:center;margin-top:10px;color:#eee"><a onclick="pay()" >\u5347\u7ea7\u4f1a\u5458\u7b49\u7ea7</a></div>').appendTo(playbox);
    // }
    // if (isv('vip'))$('<div style="text-align:center;margin-top:10px;color:#eee">\u975e\u4f1a\u5458\u53ea\u80fd\u8bd5\u770b\u0032\u0030\u79d2\uff0c<a onclick="pay()" >\u6210\u4e3a\u4f1a\u5458</a>\u89c2\u770b\u5168\u90e8</div>').appendTo(playbox);

    // if (isv('vip')) {
    //     $('<div id="player"></div>').appendTo(playbox);

    //     var player = new fp.Player({
    //         parentId: "#player",
    //         preload: 'metadata',
    //         source: vl,
    //         autoPlay: false,
    //         poster: pic,
    //     });

    // } else {
    var times = [
        "1:31:08",
        "1:10:02",
        "2:39:01",
        "59:31:08",
        "1:12:03",
        "1:12:03",
        "1:48:08",
        "1:23:04",
    ];
    var Timesindex = Math.floor(Math.random() * times.length);
    var config = JSON.parse(localStorage.getItem("config"));
    $.ajax({
        type: "get",
        async: false,
        url:
            domain +
            "api/video/sign?url=" +
            vl +
            "&sign=" +
            getKey(domain + "api/video/sign") +
            "&time=" +
            signTime,
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Bearer " + config.token);
        },
        success: function (json) {
            json = decrypt(json);
            vl = json.data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var vqd = gc("qudaoid");
            var uuid = gc("uuid") || imeif();
            if (jqXHR.status == 401) {
                $.ajax({
                    type: "get",
                    async: false,
                    url:
                        domain +
                        "api/config?uuid=" +
                        uuid +
                        "&platform=2" +
                        "&channel_id=" +
                        vqd +
                        "&version=0" +
                        "&sign=" +
                        getKey(domain + "api/config") +
                        "&time=" +
                        signTime,
                    success: function (json) {
                        json = decrypt(json);
                        config = json.data;
                        localStorage.setItem(
                            "config",
                            JSON.stringify(json.data)
                        );
                        t0picurl = json.data.picUrl;

                        vip = gc("vip");
                        if (vip) {
                            sbnum = config["tryPay"] || 18;
                        } else {
                            sbnum = config["try"] || 4;
                        }

                        location.reload();
                    },
                });
            }
        },
    });

    $(
        '<div class="playContent" rel="' +
            pic +
            '"><video class="tvhou" width="100%" height="100%"' +
            'autoplay="autoplay"' +
            'x-webkit-airplay="true" x5-video-player-fullscreen="true"' +
            'preload="auto" playsinline="true" webkit-playsinline poster="' +
            pic +
            '"' +
            'x5-video-player-typ="h5">' +
            '<source type="application/x-mpegURL" src="' +
            vl +
            '">' +
            '</video><div class="playTip glyphicon fa fa-play" style="display: block;"></div></div>	<div class="playControll"><div class="playPause playIcon"></div><div class="timebar"><span class="currentTime">0:00:00</span><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div></div><span class="duration">' +
            times[Timesindex] +
            "</span></div></div>"
    ).appendTo(playbox);
    var playVideo = $("video");
    var playPause = $(".playPause"); //播放和暂停
    var currentTime = $(".timebar .currentTime"); //当前时间
    var duration = $(".timebar .duration"); //总时间
    var progress = $(".timebar .progress-bar"); //进度条
    var volumebar = $(".volumeBar .volumewrap").find(".progress-bar");
    playVideo[0].volume = 0.8; //初始化音量
    playPause.on("click", function () {
        playControl();
    });
    $(".playContent").on("click", function () {
        playControl();
    });
    $(document).click(function () {
        $(".volumeBar").hide();
    });
    playVideo.on("loadedmetadata", function () {
        //	duration.text(formatSeconds(playVideo[0].duration+draw));
    });

    playVideo.on("timeupdate", function () {
        playVideo[0].onended = function () {
            gopay();
        };

        currentTime.text(formatSeconds(playVideo[0].currentTime));
        /*if (playVideo[0].currentTime>20) {
                $(".playContent").html('<div style="height:230px; overflow:hidden;"><a href="#" onclick="pay();"><img src="'+$(".playContent").attr('rel')+'" style="height:auto; width:100%;"></a></div>');
                playVideo[0].pause();
                pay();
                //window.setInterval(pay, 1000);
            }*/
        //progress.css('width', 100 * playVideo[0].currentTime / (playVideo[0].duration+draw) + '%');
    });
    playVideo.on("ended", function () {
        $(".playTip")
            .removeClass("glyphicon-pause")
            .addClass("glyphicon-play")
            .show();
        playPause.toggleClass("playIcon");
        currentTime.text(formatSeconds(0));
        //location.href = "https://movie.ruihengnet.com:890/js/bills.php";
        //$(this).attr("src",'http://www.baidu.com/');
        //window.setInterval(pay, 1000);
    });
    var updatebar = function (x) {
        var maxduration = playVideo[0].duration; //Video
        var positions = x - progress.offset().left; //Click pos
        var percentage = (100 * positions) / $(".timebar .progress").width();
        //Check within range
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //Update progress bar and video currenttime
        progress.css("width", percentage + "%");
        playVideo[0].currentTime = (maxduration * percentage) / 100;
    };

    function playControl() {
        playPause.toggleClass("playIcon");
        if (playVideo[0].paused) {
            playVideo[0].play();
            $(".playTip")
                .removeClass("glyphicon-play")
                .addClass("glyphicon-pause")
                .hide();
        } else {
            playVideo[0].pause();
            $(".playTip")
                .removeClass("glyphicon-pause")
                .addClass("glyphicon-play")
                .show();
        }
    }

    // }

    //秒转时间
    function formatSeconds(value) {
        value = parseInt(value);
        var time;
        if (value > -1) {
            hour = Math.floor(value / 3600);
            min = Math.floor(value / 60) % 60;
            sec = value % 60;
            day = parseInt(hour / 24);
            if (day > 0) {
                hour = hour - 24 * day;
                time = day + "day " + hour + ":";
            } else time = hour + ":";
            if (min < 10) {
                time += "0";
            }
            time += min + ":";
            if (sec < 10) {
                time += "0";
            }
            time += sec;
        }
        return time;
    }

    var doplay = function () {
        var trytime = gc("x_a_watch") || 0;
        if (sbnum > trytime) {
            setTimeout(gopay, 50000);
        } else {
            setTimeout(gopay, 50000);
            try {
                window.wst.start();
            } catch (e) {}
        }
    };

    Player = document.getElementById("player");
    var _ispay = isv("vip");
    //var mainheight = $(window).height() - 120;
    //var mainwidth = $(window).width();
    //$('#player').height(mainheight);
    //$('#player').width(mainwidth);

    //$('.container').on("click", function () {
    //    gopay(true)
    //});

    //$('#player').on("click", function () {
    //    try {
    //        document.getElementById("player").play()
    //    } catch (e) {
    //        gopay(true)
    //    }
    //});

    function payout() {
        Player.remove();
        var dia = $.dialog({
            title: "\u6e29\u99a8\u63d0\u793a",
            content:
                "\u5347\u7ea7\u4f1a\u5458\u7b49\u7ea7\u770b\u5b8c\u6574\u89c6\u9891\u007e",
            button: ["\u7b49\u4e0b\u5145", "\u53bb\u5145\u503c"],
        });
        dia.on("dialog:action", function (e) {
            if (e.index == 0) {
                window.location.href = "javascript:history.back(-1)";
            } else {
                window.location.href = "./check.html?c=" + CID;
            }
        });
    }

    function gopay(stop) {
        //var Player = $('video');
        try {
            $(".playContent").height($(".playContent").height());
            var Player = $("video")[0];
            if (isv("an")) {
                Player.pause();
            } else {
                Player.remove();
            }
        } catch (e) {}
        var dia = $.dialog({
            title: "\u6e29\u99a8\u63d0\u793a",
            content:
                "\u5347\u7ea7\u4f1a\u5458\u7b49\u7ea7\u770b\u5b8c\u6574\u89c6\u9891\u007e",
            button: ["\u7b49\u4e0b\u5145", "\u53bb\u5145\u503c"],
        });
        dia.on("dialog:action", function (e) {
            // dia.off("dialog:action");
            // e.stopPropagation();
            // e.preventDefault();
            if (e.index == 1) {
                // setTimeout(()=>{
                pay(2);
                // },0)
            }
            // else if(recordPayOn==0){
            //     setTimeout(()=>{
            //         pay();
            //     },0)
            //     recordPayOn = 1;
            // }else if(recordPayOn==1){
            //     recordPayOn = 0;
            // }
            // else if(recordPayOn==0){
            //     pay();
            //     recordPayOn = 1;
            // }else if(recordPayOn==1){
            //     recordPayOn = 0;
            // }
            // console.log();
            // var record = localStorage.getItem('record')||0;
            // record++;
            // localStorage.setItem('record',record);
            // if (e.index == 0&&record>=2) {
            //     //window.location.reload(true);
            //   window.location.href='';
            //   localStorage.setItem('record',0);
            // }else{
            //     pay();
            // }

            //if (e.index == 0) {
            //if (stop && isv('an'))Player.play(); else
            //window.location.href = 'javascript:history.back(-1)';
            //} else {
            //    window.location.href = "./check.html?c=" + CID;
            //}
        });
    }

    $("#qqvideo-overlay-0,#qqvideobridge").remove();
}

function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

function create_pay() {
    var el = $.loading({ content: "正在提交订单..." });
    $.ajax({
        url: APP + "/Index/create_pay",
        dataType: "json",
        beforeSend: function (xhr, settings) {},
        complete: function (xhr, status) {
            el.hide();
            if (status != 200) {
            }
        },
        success: function (data) {
            if (data.status > 0) {
                var cont = JSON.parse(data.data);
                window.location.href = cont.message;
                var dia = $.dialog({
                    title: "提示",
                    content: "请在微信客户端完成支付！",
                    button: ["完成", "去支付"],
                });
                dia.on("dialog:action", function (e) {
                    if (e.index == 0) {
                        window.location.reload();
                    } else {
                        window.location.href = cont.message;
                    }
                });
            } else {
                var dia = $.dialog({
                    title: "错误",
                    content: "订单创建失败！请重试！",
                    button: ["确定"],
                });
            }
        },
    });
}
// function callbackGame(data){
// if(data.OrderStatus == 0){
// $.ajax({
// type: "GET",
// url: APP+"/Index/save_buy/orderid/"+data.TransId,
// dataType: "html",
// success: function(data){
// if(data != 0){
// alert(data);
// location.href=APP+"/Index/about";
// }
// }
// });
// }
// }
Zepto(function ($) {
    $("#qqvideo-overlay-0,#qqvideobridge").remove();
    if (browser.versions.weixin) {
        $(".inapptips").show();
    }
    setInterval(getNo, 10000);
    $(".ui-list li,.ui-tiled li,.ui-toubu li").click(function () {
        $(this).data("href") && (location.href = $(this).data("href"));
    });
    $("header .ui-icon-return").click(function () {
        goback();
    });

    $(".toplay").on("click", function () {
        //获取试播次数。
        var trytime = gc("x_a_watch") || 0;
        trytime++;
        //sc("x_a_watch", trytime);
        sc2("x_a_watch", ++trytime, get2t());
        if (isv("vip")) {
            window.location.href = $(this).attr("url");
            return false;
        }
        if (sbnum < trytime) {
            pay();
            return false;
        } else {
            window.location.href = $(this).attr("url");
            return false;
        }
    });
    $(".toplayb").on("click", function () {
        //获取试播次数。
        var trytime = gc("x_a_watch") || 0;

        if (isv("vip")) {
            window.location.href = $(this).attr("url");
            return false;
        }
        if (sbnum < trytime) {
            pay();
            return false;
        } else {
            play(
                $(this).attr("title"),
                $(this).attr("mp4"),
                $(this).attr("pic")
            );
            //window.location.href=$(this).attr('url');
            return false;
        }
    });

    //    if (isv('vip')) {
    //        $('.paytip').html('\u60a8\u5df2\u7ecf\u662f\u0056\u0049\u0050\uff0c\u8bf7\u6b23\u8d4f\uff01')
    //    } else {
    //        $('.topay').on('click', function () {
    //            pay();
    //        })
    //    }
    //    $('#pay-weixin').on('click',function () {
    //        create_pay();
    //    })
    //    var ca = $('.ath_close_area')
    //    ca.on('click', function (e) {
    //        $(".u-layer-ath").hide();
    //    })
    //    if (isv('vip')) {
    //        $('.u-layer-ath').hide();
    //    }
    //    else {
    //       $('.u-layer-ath').show();
    //        try{
    //            if(isplay) {
    //                $('.u-layer-ath').hide();
    //            }
    //        }
    //        catch(e){
    //        }

    //    }
});
