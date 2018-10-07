/*------------------------------------*\
    :: Button Slider
\*------------------------------------*/
var buttonSlider = function(){
    var $slides = $('.js-owl-carousel--button-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            singleItem: true,
            pagination: false,
            mouseDrag:  false,
            touchDrag:  false,
            navigation: false,
            addClassActive: true,
            transitionStyle: "fade",
            afterInit: function(){
                var that = this;
                var $nav = that.$elem.next().find('a');
                $nav.on('click touchstart', function(){
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
    buttonSlider();
});