$(document).ready(function () {
    var filter_tl = gsap.timeline({ paused: true, reversed: true });
    var menu_start = {
        display: 'flex',
        xPercent: 100
    };
    var menu_end = {
        xPercent: 0,
        display: 'flex',
        ease: Power4.easeInOut
    };
    filter_tl.fromTo($("#filter-menu"), .5, menu_start, menu_end);

    $("#filter-btn, #filter-menu-close").on("click", function () {
        filter_tl.reversed() ? filter_tl.play() : filter_tl.reverse();
    });

    var minValue = Number($("#filter-price #minCost").attr("min"));
    var maxValue = Number($("#filter-price #maxCost").attr("max"));

    $("#filter-slider").slider({
        min: minValue,
        max: maxValue,
        values: [minValue, maxValue],
        range: true,
        stop: function (event, ui) {
            $("input#minCost").val($("#filter-slider").slider("values", 0));
            $("input#maxCost").val($("#filter-slider").slider("values", 1));
        },
        slide: function (event, ui) {
            $("input#minCost").val($("#filter-slider").slider("values", 0));
            $("input#maxCost").val($("#filter-slider").slider("values", 1));
        }
    });
    $("input#minCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#filter-slider").slider("values", 0, value1);
    });


    $("input#maxCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();

        if (value2 > maxValue) { value2 = maxValue; $("input#maxCost").val(maxValue) }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#filter-slider").slider("values", 1, value2);
    });
});
