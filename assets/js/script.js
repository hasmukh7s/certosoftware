$(document).ready(function () {
    $('.hamburger-menu').on('click', function () {
        $('.bar').toggleClass('animate');
        $('.menu').toggleClass('active');
    });

    $('.has-children').on('click', function () {
        $(this).children('ul').slideToggle('slow', 'swing');
        $('.icon-arrow').toggleClass('open');
    });


    $('#slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

});