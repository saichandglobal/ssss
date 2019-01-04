// ==UserScript==
// @name         GCP Console - Project Color Coder
// @namespace    gitlab.com/gitlab-com/gl-infra
// @version      0.1
// @description  Color code projects in GCP console to distinguish between production, staging, DR...etc
// @author       aamarsanaa@
// @match        https://console.cloud.google.com/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

const PROJECT_FIELD = 'project';
const URL_DELIMETER = '&';
const PROJECT_DELIMETER = '=';

const PROJECT_PRODUCTION = 'gitlab-production';
const PROJECT_PRODUCTION_COLOR = 'red';

const PROJECT_STAGING = 'gitlab-staging-1';
const PROJECT_STAGING_COLOR = 'blue';

const PROJECT_INTERNAL = 'gitlab-internal-153318';
const PROJECT_INTERNAL_COLOR = 'green';

//TODO Add DR and other projects

var $ = window.jQuery;

var colorCode = function(project_id) {
    if (project_id == PROJECT_PRODUCTION){
        $('.pcc-platform-bar-container').css('background-color', PROJECT_PRODUCTION_COLOR);
    }
    else if (project_id == PROJECT_STAGING){
        $('.pcc-platform-bar-container').css('background-color', PROJECT_STAGING_COLOR);
    }
    else if (project_id == PROJECT_INTERNAL){
        $('.pcc-platform-bar-container').css('background-color', PROJECT_INTERNAL_COLOR);
    }
};

$(document).ready(function() {
    'use strict';
    var project_id = '';
    var url = window.location.href;
    var url_fields = url.split(URL_DELIMETER);
    var length = url_fields.length;

    for (var i = 0; i < length; i++){
        if (url_fields[i].includes(PROJECT_FIELD) == true) {
            project_id = url_fields[i].split(PROJECT_DELIMETER)[1];
            break;
        }
    }

    if(project_id != ''){
        colorCode(project_id);
    }
});

// This is triggered when a project is selected from the overlay window
$(document).on("click", ".cfc-purview-picker-list-name-link", function() {
    var project_id = '';
    project_id = $(this).parent('div').parent('td').next().find('span').text().trim();

    if(project_id != ''){
        colorCode(project_id);
    }
});