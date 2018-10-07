/*------------------------------------*\
    ::  Dot Carousel
\*------------------------------------*/	
var dotCarousel = function(){
    var $prev = '../images/global/arrow-prev-dark.png';
    var $next = '../images/global/arrow-next-dark.png';
    var $slides = $('.js-owl-carousel--dot-carousel');
    if($slides.length > 0){
        $slides.owlCarousel({
            items : 5,
            navigation : true,
            pagination: true,
            itemsCustom : [
                [0, 1],
                [1025, 2],
                [1700, 3]
            ],            
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};
$(document).ready(function() {
    dotCarousel();
});