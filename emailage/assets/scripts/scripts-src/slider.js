/*------------------------------------*\
    :: Slider
\*------------------------------------*/
var sliders = function(){
    $('.owl-carousel--slider').owlCarousel({
        navigation: false,
        singleItem: true,
        pagination: true
    });
    $('.owl-pagination').wrap('<div classs="pagination-wrap" style="width: 100%; max-width: 1060px; margin: 0 auto; overflow:hidden; text-align:center;"></div>');
}
$(document).ready(function() {
    sliders();
});