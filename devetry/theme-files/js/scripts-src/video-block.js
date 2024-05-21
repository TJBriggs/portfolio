/*------------------------------------*\
    ::  Video Slider
\*------------------------------------*/    
var $window = $(window);
var $sroot = siteUrl.theUrl; // Variable comes from localized script defined in enqueue.php
var $prev = $sroot + '/wp-content/themes/devetry/assets/images/icon-prev.png';
var $next = $sroot + '/wp-content/themes/devetry/assets/images/icon-next.png';
var videoSlider = function(){
    // On resize check width and remove video if smaller than 1024px
    var $slides = $('.js-video-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            pagination:false,
            singleItem: true,
            slideSpeed: 300,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};
var videoCarousel = function(){
    // On resize check width and remove video if smaller than 1024px
    var $slides = $('.js-video-carousel');
    if($slides.length > 0){
        $slides.owlCarousel({
            singleItem: true,
            pagination: false,
            slideSpeed: 300,
            //autoHeight: true,
            navigation: true,
            addClassActive: true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
            afterInit: function(){
                var that = this;
                var $nav = that.$elem.next().find('li');
                var $prev = $('.owl-prev');
                var $next = $('.owl-next');
                $next.on('click', function(e){
                    $last = $('.video-block__nav').find('li:last');
                    if($last.hasClass('active')) {
                        $('.video-block__nav').find('li.active').removeClass('active');
                        $('.video-block__nav').find('li:first').addClass('active');
                    } else {
                        $('.video-block__nav').find('li.active').removeClass('active').next().addClass('active');
                    }
                });
                $prev.on('click', function(e){
                    $first = $('.video-block__nav').find('li:first');
                    if($first.hasClass('active')) {
                        $('.video-block__nav').find('li.active').removeClass('active');
                        $('.video-block__nav').find('li:last').addClass('active');
                    } else {
                        $('.video-block__nav').find('li.active').removeClass('active').prev().addClass('active');
                    }
                });
                $nav.on('click', function(e){
                    e.preventDefault();
                    var $this = $(this);
                    $nav.removeClass('active');
                    $this.addClass('active');
                    that.goTo($this.index());
                }).eq(0).trigger('click');
            }
        });
    }
};
var videoPlay = function(){
    // Inview Stuff
    $('.no-touch #video-1, .no-touch #video-2, .no-touch #video-3, .no-touch #video-4').on('inview', function(event, isInView) {
        $this = $(this);
        if (isInView) {
            // element is now visible in the viewport
            $this[0].play();
        } else {
            // element has gone out of viewport
            $this[0].pause();
        }
    });
};
$(document).ready(function() {
    $('.touch .slider__video').prop("controls", true);
    videoPlay();
    videoSlider();
    videoCarousel();
});