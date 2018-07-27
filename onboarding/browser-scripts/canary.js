// ==UserScript==
// @name         gitlab canary
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes the navbar purple when the canary cookie is set.
// @author       jarv
// @match        https://gitlab.com/*
// @match        https://gprd.gitlab.com/*
// @match        https://gstg.gitlab.com/*
// @grant        none
// ==/UserScript==

(function() {

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


    var canaryCookie = getCookie("gitlab_canary");

    if (canaryCookie !== null) {
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#6610f2";
    }
})();
