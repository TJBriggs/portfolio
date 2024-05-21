/*------------------------------------*\
    :: Sticky Header and Nav
\*------------------------------------*/
jQuery(function($){
    // Expand mobile nav when hamburger is clicked
    var $headNav = $('.head-nav');
    var $mainHead = $('.main-head');
    var $hamburger = $(".hamburger");
    var $mNav = $(".main-head__m-nav");
    $mNav.click(function() {
        var navX = function(){
            $headNav.toggleClass('heynav');
            $mainHead.toggleClass('hey_main-head');
            $hamburger.toggleClass("x-in-disguise");
        };
        navX();
    });
    // Expand submenu when arrow icon is clicked
    $('.head-nav > ul > li').click(function() {
        $(this)
            .toggleClass('hey_sub-nav')
            .siblings()
            .removeClass('hey_sub-nav'); // remove class from all siblings to collapse previously opened submenus
    });

    /*------------------------------------*\
        ::Sticky Header
    \*------------------------------------*/
    $(window).scroll(
        function() {
            var heroHeight = $('.hero-block').outerHeight();
            if ($(document).scrollTop() <= heroHeight - 10) {
                //alert(heroHeight);
                $('.main-head').removeClass('main-head--dark').addClass('main-head--normal');
            } else {
                $('.main-head').removeClass('main-head--normal').addClass('main-head--dark');
            }
        }
    );
});