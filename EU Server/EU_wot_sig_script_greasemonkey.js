// ==UserScript==
// @name        World Of Tanks Stats Lookup
// @namespace   World_Of_Tanks
// @description Looks up user's stats on wotlabs
// @version     1.0
// @grant       none
// @require     http://code.jquery.com/jquery-latest.js
// @copyright   icy12ice
// ==/UserScript==

/*
Add this to your "included pages"
http://forum.worldoftanks.eu/index.php?/topic/*
*/
var $j = jQuery.noConflict();

$j( document ).ready(function() {
    $j("div.hentry").each(function(index) {
        try {
			var name = $j(this).find("span[itemprop='name']").text();
			var sigLink = "http://wotlabs.net/sig_dark/eu/" + name + "/signature.png";
			$j(this).find(".post_count").html('<div class="wotstats"><img src="' + sigLink + '"></div>');
        } catch(err) {
        }
    });
    $j(".wotstats").css("width", "106");
    $j(".wotstats").css("overflow", "hidden");
});