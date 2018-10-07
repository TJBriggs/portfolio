/*------------------------------------*\
    :: Slider
\*------------------------------------*/
jQuery(function($){ 
    var $sroot = siteUrl.theUrl;
    var $prev = $sroot + '/wp-content/themes/pka/assets/images/icon-prev.png';
    var $next = $sroot + '/wp-content/themes/pka/assets/images/icon-next.png';
    $('.owl-carousel--slider').owlCarousel({
        navigation:true,
        singleItem: true,
        navigationText: [
            '<img src="'+ $prev +'" alt="Arrow Previous">',
            '<img src="'+ $next +'" alt="Arrow Previous">'
        ],
    });
});