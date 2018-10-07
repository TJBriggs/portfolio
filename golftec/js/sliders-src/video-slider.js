/*------------------------------------*\
    :: Tab Slider
\*------------------------------------*/
var tabSlider = function(){
    var $slides = $('.js-owl-carousel--tab-slider');
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
                var $nav = that.$elem.parent().next().find('li');
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
    tabSlider();
});
