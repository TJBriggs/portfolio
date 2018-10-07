/*------------------------------------*\
    :: dot slider
\*------------------------------------*/
var dotSlider = function(){
    var $prev = '../images/global/arrow-prev-dark.png';
    var $next = '../images/global/arrow-next-dark.png';
    var $slides = $('.js-owl-carousel--dot-slider');
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
    dotSlider();
});