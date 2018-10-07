/*------------------------------------*\
    :: Way Point Animation Effects
\*------------------------------------*/
/*------------------------------------*\
    ::  Icon Callouts Waypoint
\*------------------------------------*/   
var iconCallouts = function () {
    var $section = $('.icon-callouts');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Centered CTA Waypoint  
\*------------------------------------*/    
var centeredCTA = function () {
    var $section = $('.centered-cta');
    var $wrap = $('.centered-cta__wrap');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $wrap.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
        $wrap.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Column Callout Waypoint  
\*------------------------------------*/    
var columnCallout = function () {
    var $section = $('.column-callout');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Coaches Block 
\*------------------------------------*/    
var coachesBlock = function () {
    var $section = $('.coaches-block');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
$(document).ready(function() {
    if ($.isFunction($.fn.waypoint)) { // Check to see if waypoint function is on current page
        iconCallouts();
        centeredCTA();
        columnCallout();
        coachesBlock();
    }
});
