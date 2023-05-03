$(document).ready(function() {

    // MOUSEENTER NAV EFFECTS
    /*$('#navMain').on({
        mouseenter: function () {
            if (window.innerWidth >= 700) {
                $(this).css("background-color", "rgb(25, 178, 80, 0.85)");
                
            }             
        },
        mouseleave: function () {
            if (window.innerWidth >= 700) {
                $(this).css("background-color", "rgb(240, 248, 255, 0.65)");
            }
        }
    });*/

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
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "empPayBtn":
                    $(".pageTop").addClass("hidden");
                    $("#empPayPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "rdTaxBtn":
                    $(".pageTop").addClass("hidden");
                    $("#rdTaxPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "assetBtn":
                    $(".pageTop").addClass("hidden");
                    $("#assetPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "ertcBtn":
                    $(".pageTop").addClass("hidden");
                    $("#ertcPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "payProcessBtn":
                    $(".pageTop").addClass("hidden");
                    $("#payProcessPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "equipFinBtn":
                    $(".pageTop").addClass("hidden");
                    $("#equipFinPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "bizConsultBtn":
                    $(".pageTop").addClass("hidden");
                    $("#bizConsultPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
            }
        }
    });

    //COLLAPSE MENU WHEN USER CLICKS ON PAGE BODY
    $(".pageTop").on({
        click: function () {
            if ($("#hamButton").attr("aria-expanded") === "true") {
                $("#hamButton").trigger("click");
            }
        }
    });
    

});