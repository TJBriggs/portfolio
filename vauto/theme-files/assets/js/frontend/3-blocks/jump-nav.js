/**
 *
 * Jump Nav
 *
 */
(function ($) {
	'use strict';

	const $jumpNav = $('.jump-nav');
	const $jumpHeading = $('.jump-nav__heading');

	// Display nav once scrolled past breadcrumbs
	function stickyJumpNav() {
		const $windowTop = $(window).scrollTop();
		const $crumbTop = $('.site-breadcrumbs').offset().top - 40;

		if ($windowTop > $crumbTop) {
			$jumpNav.addClass('jump-nav--show');
		} else {
			$jumpNav.removeClass('jump-nav--show');
		}
	}

	// add toggle
	function addToggle() {
		$('<div class="jump-nav__toggle"></div>').insertAfter($jumpHeading);
	}

	// toggle show
	function showLinks() {
		$('.jump-nav__toggle').on('click', function () {
			$(this).next().slideToggle(200).parent().toggleClass('jump-nav__toggle--active');
		});
	}

	if ($jumpNav.length !== 0) {
		$('html').addClass('jump-nav--onpage');
		$(window).scroll(stickyJumpNav);
		addToggle();
		showLinks();
	}
})(jQuery);
