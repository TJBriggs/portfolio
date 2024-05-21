/**
 *
 * Card Slider
 *
 */
(function ($) {
	'use strict';
	if ($('.cards--slider').length) {
		// prettier-ignore
		$('.site-torso .cards__slider').not('.slick-initialized').slick({
			arrows: false,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 300,
			mobileFirst: true,
			swipe: true,
			fade: false,
			autoplay: false,
			adaptiveHeight: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				},
			],
		});
	}
})(jQuery);
