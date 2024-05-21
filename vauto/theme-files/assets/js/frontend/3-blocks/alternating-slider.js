/**
 *
 * Alternating Slider
 *
 */
(function ($) {
	'use strict';
	if ($('.alternating-slider').length) {
		// prettier-ignore
		$('.site-torso .alternating-slider__slider').not('.slick-initialized').slick({
			arrows: false,
			dots: true,
			infinite: true,
			speed: 300,
			swipe: true,
			fade: false,
			autoplay: false,
			adaptiveHeight: false,
		});
	}
})(jQuery);
