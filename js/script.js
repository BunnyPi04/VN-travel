var scrollTop = $('.back-to-top');
$(window).scroll(function() {
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css('opacity', '1');
    } else {
        $(scrollTop).css('opacity', '0');
    }
}); // scroll END

//animate hover scrolltop button
$(scrollTop).mouseenter(function() {
    $('.to-top-arrow').animate({
        marginBottom: '+=30px', //moves up
    });
}).mouseleave(function() {
    $('.to-top-arrow').animate({
        marginBottom: '-=30px', //moves down
    });
});

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500);

    return false;
}); // click() scroll top END

$('.home-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dotsClass: 'slick-dots',
    prevArrow: `<a class="slick-arrow__left" href="#tesmonial-slide" >
                    <span class="nsy-icon nsy-slide-arrow-left"></span>
                </a>`,
    nextArrow: `<a class="slick-arrow__right" href="#tesmonial-slide">
                    <span class="nsy-icon nsy-slide-arrow-right"></span>
                </a>`,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }
  ]
});