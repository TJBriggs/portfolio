
$(function() {
    /*------------------------------------*
        :: Navigation
    *------------------------------------*/
    $('.nav__activator a').click(function() {
        $('.head-nav__wrap').toggleClass('active');
    });
    $('.icon--cancel').click(function() {
        $('.head-nav__wrap').removeClass('active');
    });
    // Close menu if open and click happens outside of menu
    $('body').on('click',function(e) {
        if($('.head-nav__wrap').hasClass('active')){
            if($(e.target).closest('.main-head__nav').length == 0){
                $('.head-nav__wrap').removeClass('active');
            }
        }
    });
    /*------------------------------------*\
        :: Sticky Nav
    \*------------------------------------*/
    if (!Modernizr.touch) {
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
    }

    /*------------------------------------*\
        :: Flexslider Icon Slider
    \*------------------------------------*/
    if($(".slider--icon").length > 0) { // Check to see if element is on current page
        $(".slider--icon").flexslider({
            animation: "fade",
            directionNav: false,
            touch: false,
            selector: ".icon__slides > .slide__item",
            slideshow: false,
            controlsContainer: ".icon__nav",
            manualControls: ".icon__nav > .icon__nav-item",
            useCss: false
        });
    }   

    /*------------------------------------*\
        :: Initiate Carousel Slider
    \*------------------------------------*/
    if($(".carousel--slider").length > 0) { // Check to see if element is on current page
        (function() {
        // store the slider in a local variable
        var $window = $(window),
            flexslider2;

        // tiny helper function to add breakpoints
        function getGridSize() {
                return (window.innerWidth < 500) ? 1 :
                    (window.innerWidth < 900) ? 2 : 3;
            }

            $window.load(function() {
                $('.carousel--slider').flexslider({
                    animation: "slide",
                    animationLoop: false,
                    itemWidth: 224,
                    directionNav: true,
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    touch: true,
                    minItems: getGridSize(), // use function to pull in initial value
                    maxItems: getGridSize(), // use function to pull in initial value
                    start: function(slider2) {
                        flexslider2 = slider2;
                    }
                });
            });

            // check grid size on resize event
            $window.resize(function() {
                var gridSize = getGridSize();

                flexslider2.vars.minItems = gridSize;
                flexslider2.vars.maxItems = gridSize;
            });
        }()); 
    }

    /*------------------------------------*\
        :: Initiate Work Slider
    \*------------------------------------*/
    if($(".work--flexslider").length > 0) { // Check to see if element is on current page
        $('.work--flexslider').flexslider({
            animation: "fade",
            slideshow: false,
            touch: false,
            selector: ".work__slides > .work__slide",
            manualControls: ".work__control-nav li",
            useCSS: false,
            directionNav: false
        });
    }

    /*------------------------------------*\
        :: Initiate Image Slider
    \*------------------------------------*/
    if($(".image--flexslider").length > 0) {
        $('.image--flexslider').flexslider({
            animation: "fade",
            slideshow: false,
            touch: true,
            controlNav: true,
            directionNav: false
        });
    }

    /*------------------------------------*\
        :: Flexslider Tab Slider
    \*------------------------------------*/
    if($(".slider--tabs").length > 0) {
        // Initialize Tab Slider
        $(".slider--tabs").flexslider({
            animation: "fade",
            directionNav: false,
            smoothHeight: true,
            touch: false,
            selector: ".tab__slides > .tab__item",
            slideshow: false,
            controlsContainer: ".tabby__nav",
            manualControls: ".tabby__nav > .tabby__nav-item",
            useCss: false
        });
        // Add tab borders on page load
        var navBegin = $(".tabby__nav");
        $("div.flex-active").nextUntil( navBegin, "div" ).addClass("border-right");
        // Remove appropriate tab borders based on which tab is clicked
        $( ".tabby__nav-item" ).click(function() {
              $(".tabby__nav-item").removeClass("border-left border-right")
              $("div.flex-active").prevUntil( navBegin, "div" ).addClass("border-left");
              $("div.flex-active").nextUntil( navBegin, "div" ).addClass("border-right");
        });
    }

    /*--------------------------------------------------------*\
        :: Replace Flickr link with external, Flickr site link
    \*--------------------------------------------------------*/
    if($('.photonic-flickr-stream').length > 0) {
        $('.photonic-flickr-image').each(function(){
            $this = $(this);
            var $link   = $this.find('a');
            var rel     = $link.attr('rel');
            var classes = $link.attr('class');
            var img     = $link.html();

            var trueLink = $link.attr('title');
            trueLink = trueLink.match(/'(.*?)'/);
            trueLink = trueLink[0];
            trueLink = trueLink.replace(/\'/g,"");

            var newLink = '<a class="'+classes+'" rel="'+rel+'" href="'+trueLink+'" target="_blank">'+img+'</a>';
            $link.replaceWith(newLink);
        });
    }
    /*----------------------------------------*\
    :: Force hover state on ios - What We Do
    \*----------------------------------------*/
    $( ".services .service" ).hover(
        function() {
            $( this ).addClass( "hover" );
        }, function() {
            $( this ).removeClass( "hover" );
        }
    );

    /*----------------------------------------*\
    :: Open Project Slider on Click of image
    \*----------------------------------------*/
    $(".project").on('click',function() {
        $this = $(this);
        $this.parent().nextAll(".info_wrappin").each(function() {
            if ($(this).is(".info_wrappin")) {
                $(this).prevAll(".info_wrappin").empty();
                $(this).nextAll(".info_wrappin").empty();
                var $html = $this.closest('.project__wrap').find(".info__details--project").clone(true, true);
                $(this).html($html);
                var theRow = $(this).attr('id');
                var fullRow = "#"+theRow;
                $(fullRow+' .project--flexslider').flexslider({
                    animation: "fade",
                    slideshow: false,
                    selector: ".project__slides > .project__slide",
                    useCSS: false,
                    controlNav: true,
                    directionNav: false
                });
                return false;
            }
        });
    });
    $(".closer").on('click',function() {
        $(this).parent().parent().empty();
        return false;
    });


    /*------------------------------------*\
        :: Scroll to Project Slider
    \*------------------------------------*/
    var scrollElement = 'html, body',
    $window = $(window);
    $("a[href^='#project']").click(function(e) {
        e.preventDefault();
        var $this = $(this),
            target = this.hash,
            $target = $(target),
            scroll = $target.offset().top - 200;
        $(scrollElement).stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function() {
            window.location.hash = target;
            $window.scrollTop(scroll);
        });
    });

    /*--------------------------------------------*\
    :: Open Team Member Details on Click of image
    \*--------------------------------------------*/
    $(".team__member").on('click',function() {
        $this = $(this);
        $this.parent().nextAll(".info_wrappin").each(function() {
            if ($(this).is(".info_wrappin")) {
                $(this).prevAll(".info_wrappin").empty();
                $(this).nextAll(".info_wrappin").empty();
                var $html = $this.closest('.team__wrap').find(".member__details").clone(true, true);
                $(this).html($html);    
                return false;
            }
        });
    });
    $(".closer").on('click',function() {
        $(this).parent().parent().empty();
        return false;
    });

    /*------------------------------------*\
        :: Scroll to Team Member Info
    \*------------------------------------*/
    var scrollElement = 'html, body',
    $window = $(window);
    $("a[href^='#team']").click(function(e) {
        e.preventDefault();
        var $this = $(this),
            target = this.hash,
            $target = $(target),
            scroll = $target.offset().top - 200;
        $(scrollElement).stop().animate({
            'scrollTop': scroll
        }, 500, 'swing', function() {
            window.location.hash = target;
            $window.scrollTop(scroll);
        });
    });

     /*----------------------------------------------------------*\
        ::Responsive Video
          Don't let the title fool you, I'm just hiding videos.
    \*----------------------------------------------------------*/
    if($('.process__nav').length > 0) {
        if (!Modernizr.touch) {
            var sroot = siteUrl.theUrl;
            var procIdea = $("#ideation.process-step");
            var procDesi = $("#design-step.process-step");
            var procProd = $("#production.process-step");
            var procAct = $("#activation.process-step");
            procIdea.attr("style", "");
            procDesi.attr("style", "");
            procProd.attr("style", "");
            procAct.attr("style", "");
            procIdea.removeClass("touchy");
            procDesi.removeClass("touchy");
            procProd.removeClass("touchy");
            procAct.removeClass("touchy");
            $("<video class='step__video' preload='auto' autoplay loop='loop' muted='muted'><source src='" + sroot + "/wp-content/themes/proctor/video/process/ideation.mp4' type='video/mp4'><source src='" + sroot + "/wp-content/themes/proctor/video/process/ideation.ogv' type='video/ogg'><img src='" + sroot + "/wp-content/themes/proctor/video/process/ideation.jpg' alt='ideation process' title='No video playback capabilities, please download the video below'></video>").insertAfter("#ideation .video__inner");
            $("<video class='step__video' preload='auto' autoplay loop='loop' muted='muted'><source src='" + sroot + "/wp-content/themes/proctor/video/process/design.mp4' type='video/mp4'><source src='" + sroot + "/wp-content/themes/proctor/video/process/design.ogv' type='video/ogg'><img src='" + sroot + "/wp-content/themes/proctor/video/process/design.jpg' alt='design process' title='No video playback capabilities, please download the video below'></video>").insertAfter("#design-step .video__inner");
            $("<video class='step__video' preload='auto' autoplay loop='loop' muted='muted'><source src='" + sroot + "/wp-content/themes/proctor/video/process/production.mp4' type='video/mp4'><source src='" + sroot + "/wp-content/themes/proctor/video/process/production.ogv' type='video/ogg'><img src='" + sroot + "/wp-content/themes/proctor/video/process/production.jpg' alt='production process' title='No video playback capabilities, please download the video below'></video>").insertAfter("#production .video__inner");
            $("<video class='step__video' preload='auto' autoplay loop='loop' muted='muted'><source src='" + sroot + "/wp-content/themes/proctor/video/process/activation.mp4' type='video/mp4'><source src='" + sroot + "/wp-content/themes/proctor/video/process/activation.ogv' type='video/ogg'><img src='" + sroot + "/wp-content/themes/proctor/video/process/activation.jpg' alt='activation process' title='No video playback capabilities, please download the video below'></video>").insertAfter("#activation .video__inner");
        }
    }

    /*------------------------------------*\
        :: Inview Scripts
    \*------------------------------------*/
    // Trigger animations when elements are in view
    if(!Modernizr.touch) {
        $('#design-step').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).find('.video__cta').addClass('visible');
            }
        });
        $('#production').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).find('.video__cta').addClass('visible');
            }
        });
        $('#activation').bind('inview', function(event, isInView) {
            if (isInView) {
                $(this).find('.video__cta').addClass('visible');
            }
        });
    }
    /*------------------------------------*\
        :: Our Work Scripts
    \*------------------------------------*/
    if($('.project-iso').length > 0) {
        $item = $('.project__wrap');
        // Function to count the number of visible projects displayed
        // Add class for styling purposes to item 1 & 2, 7 & 8, etc
        function counter() {
            var currCnt = 1;
            $item.each(function(){
                // $(this).addClass('cnt-'+currCnt);
                $this = $(this);
                if($this.attr('data-visible') == 'true'){
                    if(currCnt == 1) {
                        $this.addClass('half');
                        currCnt++;
                    } else if (currCnt == 2) {
                        $this.addClass('half');
                        currCnt = 3;
                    } else if (currCnt == 7) {
                        $this.addClass('half');
                        currCnt++;
                    } else if (currCnt == 8) {
                        $this.addClass('half');
                        currCnt = 3;
                    } else {
                        currCnt++;
                    }
                }
            });
        }
        // call function to add class to all appropriate projects
        counter();

        /*------------------------------------*\
            :: Initiatie Fancy Box
        \*------------------------------------*/
        $(".fancybox").fancybox({
            'nextEffect': 'fade',
            'prevEffect': 'fade'
        });

        /*------------------------------------*\
            :: Variables for Isotope
        \*------------------------------------*/
        var $imgs = $('.project__wrap');
        var $win = $(window);
        var $container = $('.iso__container');

        /*------------------------------------*\
            ::LazyLoad
        \*------------------------------------*/
        $imgs.lazyload({
            effect: "fadeIn",
            failure_limit: Math.max($imgs.length - 1, 0)
        });
        /*------------------------------------*
          :: Isotope
        *------------------------------------*/
        // Initiate Isotope
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            resizeable: true
         });        
        // Function to check each project for visibility 
        // Toggle data attribute from true or false 
        function setVis(){
            $item.each(function(){
                var display = $(this).css('display');
                if (display == "none") {
                    $(this).attr('data-visible', 'false');
                } else {
                    $(this).attr('data-visible', 'true');
                }
            });
        }

        // Click event for Isotope filters
        $('#filters a').click(function() {
            //remove class of half
            $('.project__wrap').removeClass('half');
            // filter projects
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue,
            });

            $(this).addClass('actifilter').siblings().removeClass('actifilter');
            // Run visibility function, set projects visibility so that 
            // the appropriate projects are counted
            //window.setTimeout(setVis, 500);   
            // Run Counter Funtion and add half class to appropriate projects for styling purposes
            //window.setTimeout(counter, 500); 
        });
    }
});






