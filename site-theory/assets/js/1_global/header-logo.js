/**
 *
 * Header Logo
 *
 */

(function ($) {
	const $headerLogoSRC = $('.header-layout-2').data('logo-src');
	const $headerLogoWrap = $('.menu-item-home.site-header__logo-wrap a');
	const headerLogo = document.createElement('img');

	headerLogo.setAttribute('src', $headerLogoSRC);
	headerLogo.setAttribute('alt', 'Header Logo');

	$headerLogoWrap.append(headerLogo);
})(jQuery);
