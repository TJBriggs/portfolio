/*------------------------------------*\
   ::ScrollTo Animation
\*------------------------------------*/
var scrollToAnchor = function() {
    var scrollElement = 'html, body',
    $window = $(window);
   	$('html').on('click', 'a[href^="."], a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 1
        }, 800);
    });
    Blog Pagination
    $('html').on('click', '.facetwp-page', function (event) {
        //event.preventDefault();
        var $blogFeed = $('#blog-feed');
        $('html, body').animate({
            scrollTop: ($($blogFeed).offset().top - 200)
        },800);
    });
};
$(document).ready(function() {
    scrollToAnchor();
});