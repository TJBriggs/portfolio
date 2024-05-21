/*------------------------------------*\
    :: Scrollto Effects
\*------------------------------------*/
jQuery(function($){
   /*------------------------------------*\
       ::ScrollTo Next
   \*------------------------------------*/
   var scrollToAnchor = function() {
       var scrollElement = 'html, body',
           $window = $(window);
       $("a[href^='#next']").click(function(e) {
           e.preventDefault();
           var $this = $(this),
               target = this.hash,
               $target = $(target),
               scroll = $target.offset().top - 95;
           $(scrollElement).stop().animate({
               'scrollTop': scroll
           }, 800, 'swing', function() {
               window.location.hash = target;
               $window.scrollTop(scroll);
           });
       });
   }();
});