/*------------------------------------*\
    :: Basic slider
\*------------------------------------*/
var basicSlider = function(){
    var $prev = '../images/global/arrow-prev.png';
    var $next = '../images/global/arrow-next.png';
    var $slides = $('.js-owl-carousel--basic-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            singleItem: true,
            pagination: true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};
jQuery(function($){
    basicSlider();
});  
