
// Function for Header and Footer to load
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $("#mainPage").load("mainPage.html"); 
});

// document.getElementById("id").innerHTML='<object type="text/html" data="x.html"></object>';
$(document).ready(function(){
    $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});