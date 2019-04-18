"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Brenden Riley
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

// runs the function upon the page loading
window.addEventListener("load", function () {
    // gets all the select element within the govLinks form
    var allSelect = document.querySelectorAll("#govLinks select");
    // For each item within the allSelect variable, it will change the href of the page to be the value of whatever was selected.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function () {
            location.href = event.target.value;
        }
    }

})