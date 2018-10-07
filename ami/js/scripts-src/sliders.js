/*------------------------------------*\
    :: Sliders
\*------------------------------------*/
jQuery(function($){ 
    /*------------------------------------*\
        ::  Tabs Slider (Home Page)
    \*------------------------------------*/
    if ($.isFunction($.fn.flexslider)) { // Check to see if flexslider function is on current page
        var tabs = function () {
            $(".tab-slider__slider").flexslider({
                keyboard: true,
                animation: "fade",
                directionNav: false,
                touch: true,
                selector: ".tab-slider__slides > .tab-slider__slide",
                slideshow: false,
                controlsContainer: ".tabs-slider__nav",
                manualControls: ".tabs > .tab",
                useCss: false
            });
        };
        tabs();
    }
    /*------------------------------------*\
        ::  Graph Slider (Home Page)
    \*------------------------------------*/
    if ($.isFunction($.fn.flexslider)) { // Check to see if flexslider function is on current page
        var graphs = function () {
            $(".graph-slider__slider").flexslider({
                keyboard: true,
                animation: "fade",
                directionNav: false,
                touch: true,
                selector: ".graph-slider__slides > .graph-slider__slide",
                slideshow: false,
                controlsContainer: ".graph-slider__nav",
                manualControls: ".icons > .icon",
                useCss: false
            });
        };
        graphs();
    }
    /*------------------------------------*\
        ::  Icon Slider (Expertise Page)
    \*------------------------------------*/
    if ($.isFunction($.fn.flexslider)) { // Check to see if flexslider function is on current page
        var icons = function () {
            $(".icon-slider__slider").flexslider({
                keyboard: true,
                animation: "fade",
                directionNav: false,
                touch: true,
                selector: ".icon-slider__slides > .icon-slider__slide",
                slideshow: false,
                controlsContainer: ".icon-slider__nav",
                manualControls: ".icons > .icon",
                useCss: false
            });
        };
        icons();
    }
    /*------------------------------------*\
        ::  Studies Slider (Clients Page)
    \*------------------------------------*/
    if ($.isFunction($.fn.flexslider)) { // Check to see if flexslider function is on current page
        var studies = function () {
            $(".hidden-content__slider").flexslider({
                animation: "fade",
                slideshow: false,
                selector: ".hidden-content__slides > .hidden-content__slide",
                controlNav: true,
                directionNav: true,
                touch: true
            });
        };
        studies();
    }
});