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

    // PAGE RELOAD ON BRAND
    $(".navbar-brand").on("click", function () {
        location.reload();
    });

    // NAV OPTIONS
    $(".links").on({
        click: function() {
            switch (this.id) {
                case "bizCapBtn":
                    $("#mainPage").addClass("hidden");
                    $("#bizCapPage").removeClass("hidden");
                    break
                case "empPayBtn":
                    $("#mainPage").addClass("hidden");
                    $("#empPayPage").removeClass("hidden");
                    break
                case "rdTaxBtn":
                    $("#mainPage").addClass("hidden");
                    $("#rdTaxPage").removeClass("hidden");
                    break
            }

            // ...ROTATE THROUGH .PAGETOP CLASS AND ADD HIDDEN, REMOVE FROM CHOSEN

        }
    });

});