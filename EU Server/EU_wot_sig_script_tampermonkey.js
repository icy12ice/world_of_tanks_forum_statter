// ==UserScript==
// @name       World Of Tanks Stats Lookup EU
// @namespace  World_Of_Tanks
// @version    1.0
// @description  Adds a relevant stats to every forum poster
// @match      http://forum.worldoftanks.eu/index.php?/topic/*
// @require    http://code.jquery.com/jquery-latest.js
// @copyright  icy12ice
// ==/UserScript==

var $j = jQuery.noConflict();

$j( document ).ready(function() {
    $j("div.hentry").each(function(index) {
        try {
			var name = $j(this).find("span[itemprop='creator name']").text();
			var sigLink = "http://wotlabs.net/sig_dark/eu/" + name + "/signature.png";
			$j(this).find(".post_count").html('<div class="wotstats"><img src="' + sigLink + '"></div>');
        } catch(err) {
        }
    });
    $j(".wotstats").css("width", "106");
    $j(".wotstats").css("overflow", "hidden");
});