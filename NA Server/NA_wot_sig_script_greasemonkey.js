// ==UserScript==
// @name        World Of Tanks Stats Lookup NA
// @namespace   World_Of_Tanks
// @description Looks up user's stats on wotlabs
// @version     1.0
// @grant       none
// @match		http://forum.worldoftanks.com/index.php?/topic/*
// @require     http://code.jquery.com/jquery-latest.js
// @copyright   icy12ice
// ==/UserScript==

var $j = jQuery.noConflict();

$j( document ).ready(function() {
    $j("div.hentry").each(function(index) {
        try {
			var name = $j(this).find("span.author").text().trim();
			var sigLink = "http://wotlabs.net/sig_dark/na/" + name + "/signature.png";
			$j(this).find(".post_count").html('<div class="wotstats"><img src="' + sigLink + '"></div>');
        } catch(err) {
        }
    });
    $j(".wotstats").css("width", "106");
    $j(".wotstats").css("overflow", "hidden");
});