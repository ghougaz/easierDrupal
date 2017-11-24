// ==UserScript==
// @name         easierDrupal
// @version      0.3
// @description  drupal yeah
// @author       You
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
// @match        https://cms.ibm.com/node/*/edit
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Closing details
    function closeAll (openDetails){
        var details = document.getElementsByTagName("details");
        var len = details.length;
        for(var i=0; i<len; i++){
            if(details[i] != openDetails){
                details[i].removeAttribute("open");
            }
        }
    }


    //Display show/hide table and fieldsets
    function showHide() {
        $('fieldset .required-fields').toggle();
        $('.tabledrag-toggle-weight-wrapper').toggle();
        $('table .field-multiple-table, table .field-multiple-table + div').toggle();
        $('.field--name-field-testimonial-cta').toggle();
        $('.field-multiple-table').toggle();
    }
    //Display show/hide right informations
    function displayMeta() {
        $('.layout-region-node-secondary').toggle();
        if($('.layout-region-node-secondary').css('display') === 'none') {
            $('.layout-region-node-main').css('width','100%');
        } else {
            $('.layout-region-node-main').css('width' , '70%');
        }}

    //starting jQuery
    $('.field--type-language').hide();
    closeAll();

    //Button Collapse Menu
    var buttonShowHide = $('<a>').addClass('toolbar-icon buttonShowHide toolbar-icon-system-admin-config').text('Show/Hide');
    var buttonDisplayMeta = $('<a>').addClass('toolbar-icon buttonDisplayMeta toolbar-icon-system-admin-config').text('Right Info');
    var collapse = $('<a>').addClass('toolbar-icon collapse toolbar-icon-menu').text("Collapse");
    var li = $('<li>').addClass('menu-item');
    var liButton = $('<li>').addClass('menu-item');
    var liButtonDisplay = $('<li>').addClass('menu-item');
    li.append(collapse);
    liButton.append(buttonShowHide);
    liButtonDisplay.append(buttonDisplayMeta);
    $('.toolbar-menu').append(li);
    $('.toolbar-menu').append(liButton);
    $('.toolbar-menu').append(liButtonDisplay);
    $('.collapse').click(function() {closeAll();});
    $('.buttonShowHide').click(function() {showHide();});
    $('.buttonDisplayMeta').click(function() {displayMeta();});

    //Function insert new global CSS
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }


    //Hide useless content
    addGlobalStyle('fieldset .required-fields {display: none ;}');
    addGlobalStyle('.tabledrag-toggle-weight-wrapper {display: none ;}');
    addGlobalStyle('table .field-multiple-table {display: none ;}');
    addGlobalStyle('.field-multiple-table {display: none ;}');
    addGlobalStyle('table .field-multiple-table + div {display: none ;}');
    addGlobalStyle('.field--name-field-testimonial-cta {display: none ;}');

    //Others Settings
    addGlobalStyle('thead th {background-color: inherit; !important; }');
    addGlobalStyle('tbody tr:hover {background-color: rgba(0, 0, 0, 0.05); }');
    addGlobalStyle ('.field--type-list-string fieldset.fieldgroup {background-color: inherit !important}');

    //Leadspace Background Setting
    addGlobalStyle('[data-drupal-selector="edit-field-lead-space"] { background-color: snow !important; }');

    //Bands Background Settings
    addGlobalStyle('[data-drupal-selector="edit-field-page-wrap-band-ref"] { background-color: aliceblue !important; }');

    //Fields Background Settings
    addGlobalStyle ('.field--type-entity-reference div div fieldset {background-color: honeydew !important;}' );
    addGlobalStyle ('.field--type-entity-reference div div fieldset div fieldset {background-color: ghostwhite !important; }' );
    addGlobalStyle ('.field--type-entity-reference div div fieldset div fieldset div div fieldset {background-color: papayawhip !important; }' );

    //Layout Settings
    addGlobalStyle ('.layout-region-node-main {width: 100%}');
    addGlobalStyle ('.layout-region-node-secondary {width: 30%; display: none;}');
    addGlobalStyle ('@media screen and (max-width: 975px) {.layout-region-node-secondary, .layout-region-node-main {width: 100% !important}}');

})();
