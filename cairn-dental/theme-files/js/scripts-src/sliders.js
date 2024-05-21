/*------------------------------------*\
    :: Sliders
\*------------------------------------*/
/*------------------------------------*\
    ::  Hero Slider
\*------------------------------------*/    
jQuery(function($){ 
    $('.owl-carousel--hero').owlCarousel({
	    navigation:true,
	    navigationText: ["prev","next"],
	    singleItem: true
	});
});
/*------------------------------------*\
    :: Icon Slider
\*------------------------------------*/
var iconSlider = function(){
    var $slides = $('.js-owl-carousel--icon-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
        	singleItem: true,
            pagination: false,
            mouseDrag:  false,
            touchDrag:  false,
            navigation: false,
            addClassActive: true,
            afterInit: function(){
                var that = this;
                var $nav = that.$elem.parent().prev().find('li');
                $nav.on('click', function(){
                    var $this = $(this);
                    $nav.removeClass('active');
                    $this.addClass('active');
                    that.goTo($this.index());
                }).eq(0).trigger('click');
            }
        });
    }
};
$(document).ready(function() {
    iconSlider();
});
/*------------------------------------*\
    ::  Full Width Slider
\*------------------------------------*/    
jQuery(function($){ 
    var $sroot = siteUrl.theUrl;
    var $prev = $sroot + '/wp-content/themes/cairn/images/global/icon-prev.png';
    var $next = $sroot + '/wp-content/themes/cairn/images/global/icon-next.png';
    $('.owl-carousel--full').owlCarousel({
        navigation:true,
        singleItem: true,
        navigationText: [
            '<img src="'+ $prev +'" alt="Arrow Previous">',
            '<img src="'+ $next +'" alt="Arrow Previous">'
        ],
    });
});
/*------------------------------------*\
    ::  Content Block W/Slider
\*------------------------------------*/ 
jQuery(function($){ 
    $('.js-owl-carousel--image-slider').owlCarousel({
        navigation:false,
        pagination:true,
        singleItem: true
    });
});
