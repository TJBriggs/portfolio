/**
 *
 * Customizer Preview Scripts (Realtime updates within customizer)
 *
 */

(function ($) {
	// Variables
	const $header = $('.site-header');
	const $headerMainWrap = $('.site-header__main-wrap');
	const $headerUtilityWrap = $('.site-header__utility');
	const $headerLogoWrap = $('.header-layout-1 .site-header__logo-wrap');
	const $headerLogoWrapB = $('.header-layout-2 .site-header__logo-wrap a');
	const $headerLogo = $('.site-header__logo');
	const $navText = $('.site-header__menu > li > a');
	const $utilityText = $('.site-header__utility-menu > li > a');
	const $footerBG = $('.site-footer__bg');
	const $footerText = $('.site-footer');
	const $footerLogoWrap = $('.site-footer__logo-link');
	const $footerHR = $('.site-footer hr');
	const $navWrap = $('.site-header__nav-wrap');
	const $navButton = $('.nav-with-button .site-header__menu > li:last-of-type a');

	// Header Scripts
	wp.customize('header_logo', function (value) {
		value.bind(function (newval) {
			$headerLogo.attr('src', newval);
		});
	});

	wp.customize('header_layout', function (value) {
		value.bind(function (newval) {
			if (newval === 'layout-1') {
				$header.removeClass('default layout-2 layout-3');
				$headerUtilityWrap.css('display', 'flex');
			} else if (newval === 'layout-2') {
				$header.removeClass('default layout-1 layout-3');
				$headerUtilityWrap.css('display', 'none');
			} else if (newval === 'layout-3') {
				$header.removeClass('default layout-1 layout-2');
				$headerUtilityWrap.css('display', 'flex');
			} else {
				$header.removeClass('layout-1 layout-2 layout-3');
				$headerUtilityWrap.css('display', 'none');
			}
			$header.addClass(newval);
		});
	});

	wp.customize('header_logo_width', function (value) {
		value.bind(function (newval) {
			$headerLogoWrap.css('width', newval);
			$headerLogoWrapB.css('width', newval);
		});
	});

	wp.customize('header_bg_color', function (value) {
		value.bind(function (newval) {
			$headerMainWrap.css('background-color', newval);
		});
	});

	wp.customize('main_nav_color', function (value) {
		value.bind(function (newval) {
			$navText.css('color', newval);
		});
	});

	wp.customize('utility_bg_color', function (value) {
		value.bind(function (newval) {
			$headerUtilityWrap.css('background-color', newval);
		});
	});

	wp.customize('utility_nav_color', function (value) {
		value.bind(function (newval) {
			$utilityText.css('color', newval);
		});
	});

	wp.customize('button_toggle', function (value) {
		value.bind(function (newval) {
			if (newval === true) {
				$navWrap.addClass('nav-with-button');
			} else {
				$navWrap.removeClass('nav-with-button');
			}
		});
	});

	wp.customize('button_bg_color', function (value) {
		value.bind(function (newval) {
			$navButton.css('background-color', newval);
			$navButton.css('border-color', newval);
		});
	});

	wp.customize('button_text_color', function (value) {
		value.bind(function (newval) {
			$navButton.css('color', newval);
		});
	});

	// Footer Scripts
	wp.customize('footer_logo_width', function (value) {
		value.bind(function (newval) {
			$footerLogoWrap.css('width', newval);
		});
	});

	wp.customize('footer_bg_color', function (value) {
		value.bind(function (newval) {
			$footerBG.css('background-color', newval);
		});
	});

	wp.customize('footer_font_color', function (value) {
		value.bind(function (newval) {
			$footerText.css('color', newval);
		});
	});

	wp.customize('footer_hr_color', function (value) {
		value.bind(function (newval) {
			$footerHR.css('background-color', newval);
		});
	});
})(jQuery);
