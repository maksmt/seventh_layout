$(document).ready(function () {
    $('.market__button-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1200,
    });
});


$(document).ready(function () {
    $('.button__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1400,

    });

});
$(document).ready(function () {
    $('.features__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,

    });

});

var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 20) {
        $(".header").css({
            "box-shadow": "0 5px 5px -5px #b66161",
        })
    }
    if (scrolled < 20) {
        $(".header").css({
            "box-shadow": "0 0px 0px 0px #b66161",
        })
    }
}