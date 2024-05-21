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

    // expand sub menu
    $el.click(function(){
        $el.not(this).removeClass('active');
        $(this).toggleClass('active');
    });
};

jQuery(function($){
    var trigger = $('#js-nav-trigger');
    clickable(
        $('#menu-main').find('.menu-item-has-children'),
        true
    );
    clickable(trigger);
    trigger.on("click", function(){
        var $bod = $('body');
        if(!$bod.hasClass('active')) {
            // set width to the width _before_ adding overflow:hidden
            $('body, html').toggleClass('locked');
            // change menu text to close
            $('.main-head__trigger span').text('Close');
        } else {
            // make flexible again
           $('body, html').toggleClass('locked');
            // change close back to menu
            $('.main-head__trigger span').text('Menu');
        }
        $bod.toggleClass('active');
    });
});
/*------------------------------------*\
    ::Sticky Header
\*------------------------------------*/
jQuery(function($){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.main-head__inner').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var $mNav = $('.main-head__trigger');
        if(!$mNav.hasClass('active')) { // if the nav is open don't shrink header
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('body').addClass('scrollin');
                $('.main-head').removeClass('nav--large').addClass('nav--small');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('body').removeClass('scrollin');
                    $('.main-head').removeClass('nav--small').addClass('nav--large');
                }
            }
            lastScrollTop = st;
        }
    }
});