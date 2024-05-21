/*------------------------------------*\
    :: Fancybox forms
\*------------------------------------*/
jQuery(function($){
    if ($.isFunction($.fn.fancybox)) { // Check to see if fancybox function is on current page
        var fancyForms = function () {
            $(".fancybox").fancybox({
                'openEffect': 'fade',
                'closeEffect': 'fade'
            });
        };
        fancyForms();
    }
});