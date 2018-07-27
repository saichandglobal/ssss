// ==UserScript==
// @name         Check all for merge requests
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Check the checkboxes for merge requests (Remove source branch, Squash commits) 
// @author       jarv
// @match        https://gitlab.com/*/merge_requests/new*
// @match        https://dev.gitlab.org/*/merge_requests/new*
// @match        https://ops.gitlab.net/*/merge_requests/new*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    checkThem([].slice.call(document.querySelectorAll('input[type="checkbox"]')));
    function checkThem(nodes) {
        nodes.forEach(function(n) { n.checked = true });
    }
})();
