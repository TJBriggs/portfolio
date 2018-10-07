/*------------------------------------*\
    :: Way Point Animation Effects
\*------------------------------------*/
jQuery(function($){
    /*------------------------------------*\
        :: Waypoints
    \*------------------------------------*/
    if ($.isFunction($.fn.waypoint)) { // Check to see if waypoint function is on current page
        var cta_icons = function () {
            var cta_icon = $('.cta__icon');
            // Remove visible class on page load so that it can animate in
            // If JS is off, icon will automatically appear
            cta_icon.removeClass('visible'); //
            $('.icon-ctas').waypoint(function(){  
                cta_icon.addClass('visible');
            }, { offset: '65%' });
        };
        cta_icons(); 
    }

    if ($.isFunction($.fn.waypoint)) { // Check to see if waypoint function is on current page
        var graph_icons = function () {
            var list_icon = $('.icon__icon');
            // Remove visible class on page load so that it can animate in
            // If JS is off, icon will automatically appear
            list_icon.removeClass('visible'); 
            $('.graph-block').waypoint(function(){  
                list_icon.addClass('visible');
            }, { offset: '65%' });
        };
        graph_icons();
    }
});
