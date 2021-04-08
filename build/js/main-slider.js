$(document).ready(function () {
    var mainSlider = new Swiper('.section-main-slider .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        loop:true,
        autoplay: {
            delay: 3000,
            disableOnInteraction:false,
        },
    });
});