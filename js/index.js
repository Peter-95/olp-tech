$(document).ready(function() {

    // language
    $("#language-ar").click(function() {

        var element = $(".text-on");
        var element2 = $(".text-off");

        element.removeClass("text-on").addClass("text-off");
        element2.removeClass("text-off").addClass("text-on");

    });
    $("#language-en").click(function() {

        var element3 = $(".text-off");
        var element4 = $(".text-on");

        element3.removeClass("text-off").addClass("text-on");
        element4.removeClass("text-on").addClass("text-off");

    });



});
$(function() {
    "use strict"
    $(".count").countTo({
        from: 0,
        to: 67,
        speed: 3000,
    });
    $(".count1").countTo({
        from: 0,
        to: 1078,
        speed: 3000,
    });
    $(".count2").countTo({
        from: 0,
        to: 20,
        speed: 3000,
    });
    $(".count3").countTo({
        from: 0,
        to: 63,
        speed: 3000,
    });
});
$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});
// on grid calculateTip
function onGrid() {
    var billAmt = document.getElementById("amount").value;
    var billKw = document.getElementById("billKw").value;
    var area = document.getElementById("area").value;

    // tariff
    var tariff = Number(billAmt) / Number(billKw);
    document.getElementById("tariff").value = tariff;

    // capacty &Savings

    var p = (Number(billKw) / 30) / 5;
    var p5 = Number(billKw) / 30 / 5;
    if (area >= 8 * p) {
        document.getElementById("capacity").value = p;
        document.getElementById("Savings").value = "99";


    } else {
        p = Number(area) / 8;
        document.getElementById("capacity").value = p;
        document.getElementById("Savings").value = Math.round(p / p5 * 100);
    };


    // Cost
    var totalCost = p * 15600;
    document.getElementById("Cost").value = totalCost;
};

// pumping 
function pumping() {

    var horsePower = document.getElementById("hp").value;
    var motor = document.getElementById("motor").value;

    var p = horsePower;
    document.getElementById("capacity-p").value = p;


    var Cost = p * 9700;
    var cos2 = p * 7900;
    if (document.getElementById("motor").checked == false) {
        document.getElementById("Cost-p").value = cos2;
    } else {
        document.getElementById("Cost-p").value = Cost;

    }


    document.getElementById("Savings-p").value = 100;

};