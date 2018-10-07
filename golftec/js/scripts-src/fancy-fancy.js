/*------------------------------------------*\
    :: Open video in Fancybox
\*------------------------------------------*/
var fancyFancy = function () {
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
};
$(document).ready(function() {
    if ($.isFunction($.fn.fancybox)) { // Check to see if fancybox function is on current page
    fancyFancy();
    }
});