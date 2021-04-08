
$(document).ready(function () {

    $('.product-slider .swiper-container').each(function () {
        new Swiper($(this), {
            pagination: {
                el: $(this).find('.swiper-pagination'),
                type: 'bullets',
            },
            slidesPerView: 2,
            spaceBetween: 10
        });
    });
    var productGallerySlider = new Swiper('.product-gallery-slider .swiper-container', {
        speed: 400,
    });
    $.fancybox.defaults.thumbs = false;
    $.fancybox.defaults.slideShow = false;

    $("#show-reviews-modal").on("click", function () {
        $("#all-reviews-modal").addClass("open")
    })
    $(".product-feedback-modal-close").on("click", function () {
        $(this).parent().removeClass("open")
    })
    $(".add-review").on("click", function () {
        $("#add-review-modal").addClass("open")
    })
    $(".buy-click").on("click", function () {
        $(".buy-click-form").addClass("open");
        $(this).toggleClass("open");
    })
    $(".buy-click-form-close").on("click", function () {
        $(".buy-click-form").removeClass("open");
    })
});
