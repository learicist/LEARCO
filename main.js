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

    const pages = [$("#bizCapPage"), $("#empPayPage"), $("#rdTaxPage"), $("#assetPage"), $("#ertcPage"), $("#payProcessPage"), $("#equipFinPage"), $("#bizConsultPage")];

    console.log(pages[0]);

    // NAV OPTIONS
    $(".links").on({
        click: function() {
            switch (this.id) {
                case "bizCapBtn":
                    $(".pageTop").addClass("hidden");
                    pages[0].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "empPayBtn":
                    $(".pageTop").addClass("hidden");
                    pages[1].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "rdTaxBtn":
                    $(".pageTop").addClass("hidden");
                    pages[2].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "assetBtn":
                    $(".pageTop").addClass("hidden");
                    pages[3].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "ertcBtn":
                    $(".pageTop").addClass("hidden");
                    pages[4].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "payProcessBtn":
                    $(".pageTop").addClass("hidden");
                    pages[5].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "equipFinBtn":
                    $(".pageTop").addClass("hidden");
                    pages[6].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "bizConsultBtn":
                    $(".pageTop").addClass("hidden");
                    pages[7].removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                
                // HANDLE UNIQUE CASES FOR CLICK FROM BIZCON PAGE
                case "consult_bizCapBtn":
                    console.log("test");
                    setTimeout(function () {
                        $(".pageTop").addClass("hidden");
                        $("#bizCapPage").removeClass("hidden");
                        if ($("#hamButton").attr("aria-expanded") === "true") {
                            $("#hamButton").trigger("click");
                        }
                        console.log("test");
                    }, 1500);
                    
                    break
            }
        }
    });

    //HANLDE BEHAVIOR FOR NAV LINKS IN FOOTER
    $(".footNavLinks").on({
        click: function () {
            switch (this.id) {
                case "footBizCon":
                    $(".pageTop").addClass("hidden");
                    $("#bizConsultPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "footEquipFin":
                    $(".pageTop").addClass("hidden");
                    $("#equipFinPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "footAssBack":
                    $(".pageTop").addClass("hidden");
                    $("#assetPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
                case "footERTC":
                    $(".pageTop").addClass("hidden");
                    $("#ertcPage").removeClass("hidden");
                    if ($("#hamButton").attr("aria-expanded") === "true") {
                        $("#hamButton").trigger("click");
                    }
                    break
            }
        }
    });

    $(".footNavContactLinks").on({
        mouseover: function () {
            switch (this.id) {
                case "footNavPhoneLink":
                    $(this).html("917-443-7934");
                    break
                case "footNavEmailLink":
                    $(this).html("michael" + "<br>" + "@learcobusinessservices" + "<br>" + ".com");
                    $("#footNavEmail").css({
                        fontSize: "calc(10px + 0.6vw)",
                        margin: "-13.5px auto"
                    });
                    break
                case "footNavTextLink":
                    $(this).html("917-443-7934");
                    break
            }
        },
        mouseout: function () {
            switch (this.id) {
                case "footNavPhoneLink":
                    $(this).html("Phone Call");
                    break
                case "footNavEmailLink":
                    $(this).html("Email");
                    $("#footNavEmail").css({
                        fontSize: "calc(10px + 0.8vw)",
                        margin: "20px auto"
                    });
                    break
                case "footNavTextLink":
                    $(this).html("Text Message");
                    break
            }
        },
        click: function () {
            if (this.id === "footNavEmailLink") {
                console.log('test');
            }
            
        }
    });

    //COLLAPSE MENU WHEN USER CLICKS ON PAGE BODY OR FOOTER
    $(".pageTop").on({
        click: function () {
            if ($("#hamButton").attr("aria-expanded") === "true") {
                $("#hamButton").trigger("click");
            }
        }
    });

    $("#footBox").on({
        click: function () {
            if ($("#hamButton").attr("aria-expanded") === "true") {
                $("#hamButton").trigger("click");
            }
        }
    });

    if (window.innerWidth <= 165) {
        // location.reload();
        alert("Please view this page on a device with a larger screen width. Thank you");
    }
    

});