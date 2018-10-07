/*------------------------------------*\
   ::ScrollTo Next
\*------------------------------------*/
var scrollToAnchor = function() {
    var scrollElement = 'html, body',
    $window = $(window);
   	$("a[href*='#']").click(function(e) {
       	e.preventDefault();
       	var $this = $(this),
           	target = this.hash,
           	$target = $(target),
           	scroll = $target.offset().top;
       	$(scrollElement).stop().animate({
           	'scrollTop': scroll
       	}, 800, 'swing', function() {
           	window.location.hash = target;
           	$window.scrollTop(scroll);
       	});
   	});
};
$(document).ready(function() {
    scrollToAnchor();
});