/*------------------------------------*\
    ::  Navigation Functionality
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
        $('main-head__trigger').toggleClass('active');
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
    /*------------------------------------*\
    ::Sticky Header
    \*------------------------------------*/
    var didScroll;
    var lastScrollTop = 0;
    var delta = 1;
    var navbarHeight = 1;
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
        //var $mNav = $('.main-head__trigger');
        if(!trigger.hasClass('active')) { // if the nav is open don't shrink header
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('body').addClass('scrollin');
                $('.main-head--original').removeClass('main-head--normal').addClass('main-head--sticky');
            } else if(st == 0) {
                    $('body').removeClass('scrollin');
                    $('.main-head--original').removeClass('main-head--sticky').addClass('main-head--normal');
            }
            lastScrollTop = st;
        }
    }
});