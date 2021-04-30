/**
 *
 * Open PDF Files in new tab
 *
 */

(function ($) {
	$('[href$=".pdf"]').attr('target', '_blank');
})(jQuery);
