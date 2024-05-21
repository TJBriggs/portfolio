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
        var $bod = $('body');
        var $nav = $('.main-head__nav');
        $bod.toggleClass('active');
        $nav.toggleClass('open');
        $trigger.toggleClass('active');
    });
});
/*------------------------------------*\
    ::Sticky Header
\*------------------------------------*/
jQuery(function($){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('body').addClass('scrollin');
            $('.main-head').removeClass('nav--hidden').addClass('nav--visible');
        } else {
            $('body').removeClass('scrollin');
            $('.main-head').removeClass('nav--visible').addClass('nav--hidden');
        }
    });
});