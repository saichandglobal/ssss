// ==UserScript==
// @name         gitlab canary
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jarv
// @match        https://gitlab.com/*
// @match        https://gprd.gitlab.com/*
// @match        https://gstg.gitlab.com/*
// @grant        none
// ==/UserScript==
/*
javascript:void((function(d){
document.cookie='gitlab_canary=' + (document.cookie.indexOf('gitlab_canary=true') >= 0 ?  'false' : 'true') + ';domain=.gitlab.com;path=/;expires=' + new Date(Date.now() + 31536000000).toUTCString(); location.reload();})(document));

*/

(function() {
    function setCnyCookie(value) {
        var date = new Date(Date.now() + 31536000000)
        var expires = "; expires=" + date.toUTCString();
        document.cookie = "gitlab_canary=" + value + expires + ";domain=.gitlab.com;path=/";
        location.reload();
    }
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    function updateCny() {
        var canaryCookie = getCookie("gitlab_canary");
        (canaryCookie === "true") ? setCnyCookie("false") : setCnyCookie("true");
    }
    var canaryCookie = getCookie("gitlab_canary");
    cnyButtonText = (canaryCookie === "true") ? "Canary Enabled" : "Canary Disabled";
    if (canaryCookie === "true") {
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#6610f2";
    }
    var zNode = document.createElement ('div');
    zNode.innerHTML = '<button style="height:100%" id="myButton" type="button"><b>'
                + cnyButtonText + '</b><br /><small>click to toggle</small></button>';
    zNode.onclick = updateCny;
    document.getElementsByClassName("header-content")[0].appendChild(zNode);
})();
