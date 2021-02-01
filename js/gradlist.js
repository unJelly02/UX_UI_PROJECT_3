
// Function for Header and Footer to load
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $("#mainPage").load("mainPage.html"); 
});

// document.getElementById("id").innerHTML='<object type="text/html" data="x.html"></object>';
$(".addItemButton").on("click",function(){
    console.log('Add Item clicked');
    $(".addSpeaker")
    $(".addSpeaker").toggleClass("active");
    if ($(".addSpeaker").hasClass("active")) {
    //   $(".searchBar").css("height", "100vh");
    //   $("#searchForm").css("opacity","1");
    $(".addSpeaker").removeClass("inactive").addClass("active");
    }
    else {
    $(".searchBar").css('height', "0vh");
    $("#searchForm").css("opacity","0");
    $(".searchIcon").removeClass("active").addClass("inactive");
    }
})
$(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});