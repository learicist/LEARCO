$(document).ready(function() {

    // MOUSEENTER NAV EFFECTS
    $('#navMain').on({
        mouseenter: function () {
            if (window.innerWidth >= 581) {
                $(this).css("background-color", "rgb(252, 185, 0, 0.65)");
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
                    $(".pageTop").addClass("hidden");
                    $("#bizCapPage").removeClass("hidden");
                    break
                case "empPayBtn":
                    $(".pageTop").addClass("hidden");
                    $("#empPayPage").removeClass("hidden");
                    break
                case "rdTaxBtn":
                    $(".pageTop").addClass("hidden");
                    $("#rdTaxPage").removeClass("hidden");
                    break
                case "assetBtn":
                    $(".pageTop").addClass("hidden");
                    $("#assetPage").removeClass("hidden");
                    break
                case "ertcBtn":
                    $(".pageTop").addClass("hidden");
                    $("#ertcPage").removeClass("hidden");
                    break
                case "payProcessBtn":
                    $(".pageTop").addClass("hidden");
                    $("#payProcessPage").removeClass("hidden");
                    break
                case "equipFinBtn":
                    $(".pageTop").addClass("hidden");
                    $("#equipFinPage").removeClass("hidden");
                    break
                case "bizConsultBtn":
                    $(".pageTop").addClass("hidden");
                    $("#bizConsultPage").removeClass("hidden");
                    break
            }
        }
    });

    // $(".links").css({
    //     // if (($"#"))
    //     "margin": "10px 0",
    // });

});