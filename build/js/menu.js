
$(document).ready(function () {
    $("#menu-btn").on("click", function () {
        $(this).toggleClass("open");
    });
    var menu_tl = gsap.timeline({ paused: true, reversed: true });
    var menu_start = {
        display: 'flex',
        xPercent: -100
    };
    var menu_end = {
        xPercent: 0,
        display: 'flex',
        ease: Power4.easeInOut
    };
    menu_tl.fromTo($("#menu"), .5, menu_start, menu_end);

    $("#menu-btn, #menu-close").on("click", function () {
        menu_tl.reversed() ? menu_tl.play() : menu_tl.reverse();
    });

    $(".menu-content-body .with-submenu").on("click", function (e) {
        var $this = $(this);
        var target = $(event.target);
        if (target.is(".submenu-show")) {
            gsap.fromTo($this.next(), {
                xPercent: -100,
                display: 'flex',
            }, {
                xPercent: 0,
                display: 'flex',
                ease: Power4.easeInOut,
                duration: .5
            });
            return false;
        }
    });
    $(".submenu-btn-back").on("click",function(e){
        gsap.fromTo($(this).closest("ul"), {
            display:'flex',
            xPercent:0,
        }, {
            xPercent:-100,
            display:'none',
            ease: Power4.easeInOut,
            duration: .5
        });
    });
});
