// IIFE
!function() {
    function o() {
        var o = !1;
        window.$S && window.$S.global_conf ? o = window.$S.global_conf.is_sxl : window.$S && window.$S.globalConf && (o = window.$S.globalConf.is_sxl);
        var e = {
            strikingly: {
                tips: "Please upgrade your browser to view this site properly. ",
                learnMoreURL: "https://support.strikingly.com/hc/en-us/articles/206256982",
                learnMoreText: "Learn More. "
            },
            sxl: {
                tips: "请升级你的浏览器以查看此页面。",
                learnMoreURL: "http://help.sxl.cn/hc/zh-cn/articles/206374141",
                learnMoreText: "了解更多。"
            }
        };
        return o ? e.sxl : e.strikingly;
    }
    function e() {
        var o = '<div class="browser-error-dialog s-edit-modal" style="display:block; position: fixed; background-color:#e7e9eb ; width: 70%; left: 15%; bottom: 50px; text-align: center;"><p style="padding: 30px; font-size: 140%;"><strong>${tips}<a href="${learnMoreURL}" target="_blank">${learnMoreText}</a></strong></p></div>';
        return o;
    }
    /**
   * reference:
   *  https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
   * @param ua
   * @param appName
   * @returns {number}
   */
    function n(o, e) {
        var n = -1, r = null;
        // Add : check IE 11
        return o && o.indexOf("MSIE") !== -1 ? r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})") : e && "Netscape" === e && o.indexOf("Trident") !== -1 && (r = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")), 
        r && null !== r.exec(o) && (n = window.parseInt(RegExp.$1)), n;
    }
    /**
   *  reference:
   *   http://stackoverflow.com/questions/4006420/detect-windows-version-with-javascript/4006430#4006430
   *   http://www.useragentstring.com/pages/useragentstring.php?name=Internet+Explorer
   * @param ua
   * @returns {number}
   */
    function r(o) {
        var e = -1, n = null;
        return o && o.indexOf("Windows NT") !== -1 && (n = new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,});")), 
        n && null !== n.exec(o) && (e = window.parseInt(RegExp.$1)), e;
    }
    // warning bar
    function i(n, r) {
        if (!$(".browser-error-dialog").length) {
            var i = o(), t = i.tips, l = i.learnMoreURL, a = i.learnMoreText, s = e();
            if ($("body").append(s.replace("${tips}", t).replace("${learnMoreURL}", l).replace("${learnMoreText}", a)), 
            $(".browser-error-dialog").css("position", "absolute"), 6 === r) // pls ignore ie6,I don't want to spend too much time
            return;
            var w, d, c = window.parseInt($(".browser-error-dialog").css("bottom"));
            $(window).scroll(function() {
                window.clearTimeout(d), d = window.setTimeout(function() {
                    w = 0 !== document.body.scrollTop ? document.body.scrollTop : $(window).scrollTop(), 
                    // document.title=("--:"+scrollTop+"==="+document.body.scrollTop+'--'+browserErrorDialogBottom);
                    $(".browser-error-dialog").animate({
                        bottom: c - w
                    }, "slow");
                }, 150);
            });
        }
    }
    function t() {
        // ie6 can't use global variable directly.
        var o = window && window.navigator && window.navigator.userAgent, e = window && window.navigator && window.navigator.appName, t = n(o, e), l = r(o);
        if (t !== -1) {
            var a = "";
            l < 10 && t < 11 && (a = "chrome"), a && i(a, t);
        }
    }
    function l() {
        window && t();
    }
    /**
   * this code only works in the Internet Explorer(version <= ie10)
   * @type {onLoad}
   */
    window.onload = l;
}();
