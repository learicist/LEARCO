$(document).ready(function() {

    // MOUSEENTER NAV EFFECTS
    $('#navMain').on({
        mouseenter: function () {
            if (window.innerWidth >= 581) {
                $(this).css("background-color", "rgba(0, 115, 230, 0.40)");
                //$(".links").css("color", "white");
            }             
        },
        mouseleave: function () {
            if (window.innerWidth >= 581) {
                $(this).css("background-color", "rgb(240, 248, 255, 0.65)");
            }
        }
    });

});