/*
    HERO-CAROUSEL - Last updated: 04.05.15
*/
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(function() {

    //==================================================
    // Variables
    //==================================================

    var TOUCH_ENABLED = $(".touch").length;

    //==================================================
    // Launch
    //==================================================

    function launchHeroCarousel() {
        var largeUp = $(window).width() > 1025; // no more touch

        bxSliderHero = $('.js-carousel').bxSlider({
            auto: false, //(largeUp ? true : false),
            mode: 'fade',
            adaptiveHeight: true,
            responsive: true,
            touchEnabled: false,
            speed: 900,
            pause: 6000, // Slow timer
            slideMargin: 0,
            slideSelector: ".lv-hero",
            minSlides: 1,
            // controls: true,
            nextSelector: ".lv-hero-next",
            prevSelector: ".lv-hero-prev",
            nextText: "",
            prevText: "",
            infiniteLoop: true,
            useCSS: true,
            pager: (TOUCH_ENABLED ? false : true),
            pagerSelector: '.lv-hero-carousel-bullets',
            onSliderLoad:  function(el){  $('.lv-hero-caption', el).hide().show().addClass('slideInRight');},
            onSlideBefore: function(el){  $('.lv-hero-caption', el).hide().removeClass('slideInRight');},
            onSlideAfter:  function(el){  $('.lv-hero-caption', el).show().addClass('slideInRight');}
        });
    }
    launchHeroCarousel();
});

// $('.js-carousel').slick({
//     adaptiveHeight: true,
//     autoplay: false,
//     autoplaySpeed: 8000,
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     // fade: true,
//     slide: '.lv-hero',
//     cssEase: 'linear',
//     responsive: [
//         {
//           breakpoint: 640,
//           settings: {
//             autoplay: false,
//             swipe: false,
//             fade: false
//           }
//         }
//       ]
// });

//==================================================
//
//==================================================