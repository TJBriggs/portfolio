/*------------------------------------------*\
    :: Open video in Fancybox
\*------------------------------------------*/
jQuery(function($){
    if ($.isFunction($.fn.fancybox)) { // Check to see if waypoint function is on current page
        var fancyFancy = function () {
            $('.fancybox-media').fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                helpers : {
                    media : {}
                }
            });
        };
        fancyFancy(); 
    }
});