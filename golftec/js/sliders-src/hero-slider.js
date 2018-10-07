/*------------------------------------*\
    :: Hero slider
\*------------------------------------*/
var heroSlider = function(){
    var $prev = '../images/global/arrow-prev.png';
    var $next = '../images/global/arrow-next.png';
    var $slides = $('.js-owl-carousel--hero-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            singleItem: true,
            pagination: true,
            addClassActive: true,
            afterInit: function(){

                Modernizr.on('videoautoplay', function(result){
                    if(!result) {
                        $('.hero-block__slide--video').each(function(){
                            var $this = $(this);

                            var fallback = $this.data('fallback-img');
                            if(fallback) {
                                $this.css('background-image', 'url('+ fallback +')');
                            }
                        });
                    } else {
                        //Loads the IFrame Player API code asynchronously.
                        var tag = document.createElement('script');
                        tag.src = "http://www.youtube.com/player_api";
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                        $('#player').attr('id', '');
                        var $activeSlide = $('.owl-item.active');
                        var $player = $activeSlide.find('.player').attr('id', 'player');
                        if($player.length > 0) {
                            buildVideo($player);
                        }
                    }
                });
            },
            afterMove: function() {
                Modernizr.on('videoautoplay', function(result){
                    if(result) {
                        var $vidPlayer = $('#player');
                        var vidID = $vidPlayer.data('video-id');
                        $vidPlayer.attr('id', '').replaceWith('<div class="player" data-video-id="'+ vidID +'"></div>');
                        var $activeSlide = $('.owl-item.active');
                        var $player = $activeSlide.find('.player').attr('id', 'player');
                        if($player.length > 0) {
                            buildVideo($player);
                            window.onYouTubePlayerAPIReady();
                        }
                    }
                });    
            },
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ]
        });
    }
};
jQuery(function($){
    heroSlider();
});  
