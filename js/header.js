

// Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//     var x = document.getElementById("navDemo");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else {
//         x.className = x.className.replace(" w3-show", "");
//     }
// }
// function fade() {
//     $('.preloader').fadeOut("slow");
//     }
//     setTimeout(fade, 3000);
    
//     $(".searchButton").on("click", function(){
//     $(".searchButton").toggleClass("active");
//     if ($(".searchButton").hasClass("active")) {
//         $(".searchBar").css("height", "100vh");
//         $("#searchForm").css("opacity","1");
//         $(".searchIcon").removeClass("fa-search").addClass("fa-times");
//     }
//     else {
//         $(".searchBar").css('height', "0vh");
//         $("#searchForm").css("opacity","0");
//         $(".searchIcon").removeClass("fa-times").addClass("fa-search");
//     }
//     });
    
//     $(".toggle").click(function(){
//     $(this).find(".toggleContainer").toggleClass("active");
//     $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
//     });

$(".nav-link").on("click", function(){
    console.log('Clicked');
    if ($(this).hasClass("active")) {
        let classValue = $(this).removeClass("active");
        console.log('classValue in if',classValue);
        let d=localStorage.setItem('value',classValue)
        console.log(d);
    }
    else
    {
        let classValue = $(this).addClass("active")
        console.log('classValue in else',classValue);
        // let d=localStorage.setItem('value',classValue)
        localStorage.setItem('activeTab', classValue)
        let d=localStorage.getItem('myKey')
        myStorage = window.localStorage;
        console.log(d.innerHTM);
        console.log('my storage',myStorage);
        return classValue;
    }

    //     $(this).find(".toggleContainer").toggleClass("active");
    // $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
})
function second() {
    myValue = null;
    if (localStorage.getItem('value')) {
        myValue = localStorage.getItem('value');
        console.log(myValue);
    }
}