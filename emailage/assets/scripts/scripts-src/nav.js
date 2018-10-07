/*------------------------------------*\
    :: Sticky Header and Nav
\*------------------------------------*/
var clickable = function($el, stopProp){
    stopProp = stopProp || false;
    // stop link propogation
    if(stopProp){
        $el.find('a').click(function(e){
            e.stopPropagation();
        });
    }
};

jQuery(function($){
    var $trigger = $('#js-nav-trigger');
    clickable(
        $('#menu-main').find('.menu-item-has-children'),
        true
    );
    clickable($trigger);
    $trigger.on("click", function(){
        var $mainHead = $('.main-head');
        var $mNav = $('.main-head__nav');
        var $nav = $('.head-nav');
        var $switcher = $('.language-switcher');
        var $bod = $('body');
        $switcher.fadeToggle(350);
        $switcher.toggleClass('visible');
        $bod.toggleClass('active');
        $mNav.toggleClass('open');
        $nav.toggleClass('open');
        $trigger.toggleClass('active');

    });
});
/*------------------------------------*\
    ::Sticky Header
\*------------------------------------*/
$(window).scroll(
    function() {
        var $banner = $('.home .main-head__banner');
        var $hero = $('.hero-block');
        var heroHeight = $hero.outerHeight();
        if( $banner.length > 0) {
            if ($(document).scrollTop() <= heroHeight - 10) {
                $('.main-head').removeClass('banner-hidden').addClass('banner-visible');
            } else {
                $('.main-head').removeClass('banner-visible').addClass('banner-hidden');
            }
        }
    }
);