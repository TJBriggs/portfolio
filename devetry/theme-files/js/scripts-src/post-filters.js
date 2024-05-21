/*------------------------------------*\
	:: Post Filters
\*------------------------------------*/
var postFilters = function () {

	$(document).on('facetwp-loaded', function() {
		// Change text of first dropdown options
		$('.blog-dropdown .fs-option:first-of-type').find('.fs-option-label').text('All Posts');
		$('.case-study-dropdown .fs-option:first-of-type').find('.fs-option-label').text('All Case Studies');
		// If a filter is selected run the animation
		// Check query string
		var pageUrl = window.location.search;
		// If query string is present run scroll animation
		if( pageUrl ) {
			$('html, body').animate({
				scrollTop: $('.blog-content').offset().top - 100
			}, 'slow');
		}
	});
};

$(document).ready(function() {
	postFilters();
});