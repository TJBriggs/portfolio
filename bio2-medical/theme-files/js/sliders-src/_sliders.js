/*------------------------------------*\
    ::  Stats Slider
\*------------------------------------*/    
var statsSlider = function(){
    var $sroot = siteUrl.theUrl; // Variable comes from localized script defined in enqueue.php
    var $prev = $sroot + '/wp-content/themes/bio2/images/global/icon-prev-lg.png';
    var $next = $sroot + '/wp-content/themes/bio2/images/global/icon-next-lg.png';
    var $slides = $('.js-owl-carousel--stats-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            singleItem: true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};

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
                var $nav = that.$elem.prev().find('li');
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
/*------------------------------------*\
    ::  Carousel Slider
\*------------------------------------*/    
var carouselSlider = function(){
    var $sroot = siteUrl.theUrl;
    var $prev = $sroot + '/wp-content/themes/bio2/images/global/icon-prev-lg.png';
    var $next = $sroot + '/wp-content/themes/bio2/images/global/icon-next-lg.png';
    var $slides = $('.js-owl-carousel-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            items : 5,
            itemsCustom : [
                [0, 1],
                [500, 2],
                [768, 3],
                [1075, 4],
                [1350, 5],
                [1650, 6]
            ],
            pagination : true,
            navigation : true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Previous">'
            ]
        });
    }
};
$(document).ready(function() {
    statsSlider();
    iconSlider();
    carouselSlider();
});
