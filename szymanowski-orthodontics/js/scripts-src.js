$(function() {
    /*------------------------------------*\
        ::Mobile Menu
    \*------------------------------------*/
    // Expand mobile nav when hamburger is clicked
    $('.m-nav').click(function() {
        $('.head-nav').toggleClass('heynav');
        $('.main-head').toggleClass('hey_main-head');
        $(".hamburger").toggleClass("x-in-disguise");
    });
    // Expand submenu when arrow icon is clicked
    $('.head-nav > ul > li').click(function() {
        $(this).toggleClass('hey_sub-nav');
        $(this).siblings().removeClass('hey_sub-nav'); // remove class from all siblings to collapse previously opened submenus
    });

    /*------------------------------------*\
        ::Sticky Nav
    \*------------------------------------*/
    $.fn.scrollBottom = function() {
        return $(window).scrollTop() + $(window).height();
    };

    //you scroll and the nav does things
    var nav = function() {
        var wind = $(window);
        var header = $('header.main-head');

        //sticky nav
        $(document).scroll(function() {
            if (wind.scrollTop() < 30) {
                header.removeClass('scroll');
            } else {
                header.addClass('scroll');
            }
        }).trigger('scroll');
    }();


    /*------------------------------------*\
        ::Initiate Polaroid Slider
    \*------------------------------------*/
    if($(".flexslider--polaroids").length > 0) { // Check to see if element is on current page
        (function() {
            // store the slider in a local variable
            var $window = $(window),
                flexslider;

            // tiny helper function to add breakpoints
            function getGridSize() { // setting the number of slides in view for each breakpoint
                return (window.innerWidth < 960) ? 2 :
                    (window.innerWidth < 1024) ? 3 :
                    (window.innerWidth < 1220) ? 4 :
                    (window.innerWidth < 1440) ? 5 : 5;
            }

            $window.load(function() { // Initializing the flexslider and passing options
                $('.flexslider--polaroids').flexslider({
                    animation: "slide",
                    animationLoop: false,
                    itemWidth: 10,
                    directionNav: true,
                    controlNav: true,
                    animationLoop: false,
                    slideshow: false,
                    touch: false,
                    minItems: getGridSize(), // use function to pull in initial value
                    maxItems: getGridSize(), // use function to pull in initial value
                    start: function(slider) {
                        flexslider = slider;
                        $(".flexslider--polaroids").animate({
                            opacity: 1 // FadeIn flexslider once loaded to smooth out load and animation when inview
                        }, 1500);
                    }
                });
            });

            // check grid size on resize event
            $window.resize(function() {
                var gridSize = getGridSize();
                flexslider.vars.minItems = gridSize;
                flexslider.vars.maxItems = gridSize;
            });
        }());
    }
    /*----------------------------------------------------------*\
        :: Responsive Video
        Don't let the title fool you, I'm just hiding videos.
    \*----------------------------------------------------------*/
    // Swap out background image for background video (desktop only | Our Practice Page)
    if($(".parallax-wrap").length > 0) { // Check to see if element is on current page
        if (!Modernizr.touch) { // Run only on desktop otherwise keep background image instead of video
            var sroot = siteUrl.theUrl; // Grab site url for use in src in video tags below
            var bgVid = $(".parallax-wrap");
            bgVid.attr("style", ""); // Remove BG Image if on Desktop then append the video content below
            $("<video id='vid' preload='auto' autoplay loop='loop' muted='muted'><source src='" + sroot + "/wp-content/themes/drdamon/video/bg_vid.mp4' type='video/mp4' /><source src='" + sroot + "/wp-content/themes/drdamon/video/bg_vid.ogv' type='video/ogg' /><source src='" + sroot + "/wp-content/themes/drdamon/video/bg_vid.webm' type='video/webm' /><img src='" + sroot + "/wp-content/themes/drdamon/video/bg_vid.png' alt='Welcome to Szymanowski Orthodontics' title='No video playback capabilities, please download the video below' /></video>").appendTo(".bg-video");
        }
    }
    /*------------------------------------*\
        :: Initiate Stellar
    \*------------------------------------*/
    // Initialize graphs (Our Practice Page)
    if($(".stats").length > 0) {
        Pizza.init();
    }
    /*------------------------------------*\
        ::Inview Scripts
    \*------------------------------------*/
    // Trigger animations when elements are in view
    if(!Modernizr.touch) {
        // Polaroid Slider animation (Home Page)
        $('.polaroids').bind('inview', function(event, isInView) {
            if (isInView) { 
                $('.polaroid-1, .polaroid-2, .polaroid-3, .polaroid-4, .mascot, .bubble').addClass('visible');
            }
        });
        // Testimonial Slider animation (Home Page)
        $('.testimonials').bind('inview', function(event, isInView) {
            if (isInView) {
                $('.testimonial__text').addClass('visible');
            }
        });
        // Polaroid FadeIn (Patient Review Page)
        $('.review-row, .review-row--modifier').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).addClass('visible');
            }
        });
        // Image SlideIn (Treatments & Appliances Pages)   
        $('.page__group--img-left, .page__group--img-right').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).find('.thirds__group--1').addClass('visible');
            }
        });
        // Video FadeIn (Our Video Page)   
        $('.page__group--video .thirds__group--1, .page__group--video .thirds__group--2').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).addClass('visible');
            }
        });
    }
    /*------------------------------------*\
        ::Stat Animations
    \*------------------------------------*/
    $(".circle__stat").each(function() {
        //cache some stuff
        that = $(this);
        var svgObj = that.find(".circle__svg");
        var perObj = that.find(".circle__per");
        //establish dimensions
        var wide = that.width();
        var center = wide / 2;
        var radius = wide * 0.8 / 2;
        var start = center - radius;
        //grab the stats
        var per = perObj.text().replace("%", "") / 100;
        //set up the shapes
        var svg = Snap(svgObj.get(0));
        var arc = svg.path("");
        var circle = svg.circle(wide / 2, wide / 2, radius);
        //initialize the circle pre-animation
        circle.attr({
            stroke: "#dbdbdb",
            fill: "none",
            strokeWidth: 4
        });
        //empty the percentage
        perObj.text("");
        //gather everything together
        var stat = {
            center: center,
            radius: radius,
            start: start,
            svgObj: svgObj,
            per: per,
            svg: svg,
            arc: arc,
            circle: circle
        };
        //call the animation
        $(".stats").bind("inview", function(event, visible) {
            if (visible == true) {
                run(stat);
                $("[id^='pie']").addClass('donut-fill');
                $("[id^='donut']").addClass('donut-fill');
                $("[id^='line']").addClass('line-grow');
                $("[id^='bar']").addClass('bar-grow');
            } else {
                $("[id^='pie']").removeClass('donut-fill');
                $("[id^='donut']").removeClass('donut-fill');
                $("[id^='line']").removeClass('line-grow');
                $("[id^='bar']").removeClass('bar-grow');
                return false;
            }
        });
        //call the animation
        $(".main-foot__stats").bind("inview", function(event, visible) {
            if (visible == true) {
                run(stat);
            } else {
                return false;
            }
        });
    });
    //animation function
    function run(stat) {
        //establish the animation end point
        var endpoint = stat.per * 360;
        //set up animation (from, to, setter)
        Snap.animate(0, endpoint, function(val) {
            //remove the previous arc
            stat.arc.remove();
            //get the current percentage
            var curPer = Math.round(val / 360 * 100);
            //if it's maxed out
            if (curPer === 100) {
                //color the circle stroke instead of the arc
                stat.circle.attr({
                    stroke: "#199dab"
                });
                //otherwise animate the arc
            } else {
                //calculate the arc
                var d = val;
                var dr = d - 90;
                var radians = Math.PI * (dr) / 180;
                var endx = stat.center + stat.radius * Math.cos(radians);
                var endy = stat.center + stat.radius * Math.sin(radians);
                var largeArc = d > 180 ? 1 : 0;
                var path = "M" + stat.center + "," + stat.start + " A" + stat.radius + "," + stat.radius + " 0 " + largeArc + ",1 " + endx + "," + endy;
                //place the arc
                stat.arc = stat.svg.path(path);
                //style the arc
                stat.arc.attr({
                    stroke: "#199dab",
                    fill: "none",
                    strokeWidth: 4
                });
            }
            //grow the percentage text
            stat.svgObj.prev().html(curPer + "%");

            //animation speed and easing
        }, 1500, mina.easeinout);
    }

    /*------------------------------------*\
        ::Initiate News Slider
    \*------------------------------------*/
    if($(".flexslider--news").length > 0) { // Check to see if element is on current page
        $('.flexslider--news').flexslider({
            animation: "fade",
            slideshow: true,
            slideshowSpeed: 15000,
            controlNav: true,
            directionNav: true
        });
    }

    /*------------------------------------*\
        ::Initiate Testimonial Slider
    \*------------------------------------*/
    if($(".flexslider--testimonials").length > 0) { // Check to see if element is on current page
        $('.flexslider--testimonials').flexslider({
            animation: "fade",
            slideshow: true,
            slideshowSpeed: 8500,
            controlNav: false,
            directionNav: false
        });
    }

    /*------------------------------------*\
        :: Initiate Stellar (desktop only)
    \*------------------------------------*/
    var $window = $(window);

    var $mast = $('.masthead');
    var $para = $('.parallax-img');
    var $test = $('.treat-testimonial');
    var $all = $('.masthead, .treat-testimonial, .parallax-img');
    // cache the bg image url
    var $bg_url = $para.data("bg");

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 1024) {
            // if the window is greater than 1024px wide then turn on stellar parallax scroll
            $mast.attr("data-stellar-ratio", "0.55");
            $para.attr("data-stellar-ratio", "0.55");
            $test.attr("data-stellar-ratio", "0.5");
            $(window).stellar();
        } else {
            // if the window is smaller, remover stellar parallax scroll and inline styles
            $all.removeAttr("data-stellar-ratio");
            $all.removeAttr("style");
            // remove the positioning styles from stellar, then add back the background style
            $para.removeAttr("style").attr("style", $bg_url);
            // destroy the stellar function
            $.stellar('destroy');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    /*------------------------------------*\
        ::Hover Effects Your Team
    \*------------------------------------*/
    // Smooth out hover effect on touch devices
    if($(".employee-wrap").length > 0) { // Check to see if element is on current page
        $("employee-wrap").click(function() {
            // remove hover class from all elements each click 
            // then reapply to the element that was clicked
            $(this).removeClass('hover').addClass('hover');
        });
    }


    /*------------------------------------*\
        :: Initiate Accordions
    \*------------------------------------*/
    // Add jquery-ui accordian effect to FAQ page and FAQ section of Treatment pages
    if ($(".faqs").length > 0) { // Check to see if element is on current page
        $(function() {
            $(".accordion").accordion({
                heightStyle: "content",
                collapsible: true,
                active: false
            });
        });
    }

    /*------------------------------------*\
        :: Initiate Fancybox
    \*------------------------------------*/
    if($(".fancybox-media").length > 0) { // Check to see if element is on current page
        $('.fancybox-media').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
                media : {}
            }
        });
    }
});