/**
 *
 * Accessible Main Navigation
 *
 */

(function ($) {
	const $nav = $('.site-header__nav');

	/* Don't run this code if the header nav isn't present */
	if (!$nav) {
		return false;
	}

	/* Variables */
	const $html = $('html');
	const $navWrap = $('.site-header__nav-wrap');
	const $logoutURL = wordpressData.logoutUrl; // eslint-disable-line
	const $overlay = $('.menu-overlay');
	const $navToggle = $('.site-header__nav-toggle');
	const $li = $('.site-header__menu li');
	const $a = $('.site-header__menu li a');
	const $firstA = $('.site-header__menu li:first-of-type > a');
	const $submenu = $('.menu-item-has-children .sub-menu');
	const $submenuLink = $('.menu-item-has-children > a');

	/* Set Accessibility Roles and Aria Attributes */
	$nav.attr('role', 'navigation');
	$nav.attr('aria-expanded', 'false');
	$li.attr('role', 'none');
	$submenuLink.addClass('submenu-link').attr({
		'aria-haspopup': 'true',
		'aria-expanded': 'false',
	});

	$submenuLink.removeAttr('href');

	/* Set tab-index for all nav links to 0 */
	$a.attr({
		role: 'menuitem',
		'tab-index': '0',
	});

	/* Set tab-index for firt nav link to -1 */
	$firstA.attr('tab-index', '-1');

	/* Add class for all submenus */
	$submenu.addClass('sub-menu sub-menu--primary');

	/**
	 * Toggle Mobile Nav
	 * This can be triggered by click of toggle or overlay
	 */
	const toggleNav = () => {
		/* Open or close mobile nav and set correct aria attributes */
		if ($navToggle.attr('aria-expanded') === 'false') {
			$navToggle.attr('aria-expanded', 'true');
			$navWrap.attr('aria-expanded', 'true');
			$html.addClass('nav-open');
		} else {
			$navToggle.attr('aria-expanded', 'false');
			$navWrap.attr('aria-expanded', 'false');
			$html.removeClass('nav-open');
		}
	};

	/* Add submenu toggles to DOM and create new variable */
	$(
		'<a class="toggle toggle--primary" href="JavaScript:void(0);" aria-expanded="false" aria-controls="sub-menu" aria-label="Submenu Toggle"><span class="bar top"></span><span class="bar bottom"></span></a>',
	).insertBefore($submenu);

	const $submenuToggle = $('.toggle');

	/**
	 *
	 * Toggle Mobile Submenu
	 *
	 */
	function toggleSubmenu() {
		const $toggle = $(this);
		const $submenuLi = $toggle.parent();
		const $submenuUl = $toggle.next();

		/* Open or close mobile nav and set correct aria attributes */
		if ($toggle.attr('aria-expanded') === 'false') {
			$submenuLi.addClass('active');
			$toggle.attr('aria-expanded', 'true');
			$submenuUl.slideDown(350);
		} else {
			$submenuLi.removeClass('active');
			$toggle.attr('aria-expanded', 'false');
			$submenuUl.slideUp(350);
		}
	}

	/**
	 * Helper Function for debouncing
	 *
	 * @param {Function} func function to debouce
	 * @param {number} wait amount of time to wait before firing function again
	 * @param {number} immediate (optional) argument
	 * @return {Function} return debounce function
	 */
	function debounce(func, wait, immediate) {
		let timeout;
		return function () {
			const context = this;
			const args = arguments;

			/**
			 * Set timeout for debounce
			 */
			const later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};

			const callNow = immediate && !timeout;

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	/**
	 * Check width and debounce
	 */
	const checkWidth = debounce(function () {
		/* Get windowWidth on resize/reload */
		const windowWidth = window.innerWidth;

		if (windowWidth >= 1025) {
			/* On resize remove display: none from submenus */
			$submenu.show();

			/* On hover of submenu links change aria attribute */
			$submenuLink.on('hover', function () {
				const $this = $(this);

				if ($this.attr('aria-expanded') === 'false') {
					$this.attr('aria-expanded', 'true');
				} else {
					$this.attr('aria-expanded', 'false');
				}
			});
		} else {
			/* Hide submenus on mobile */
			$submenu.hide();
		}
	}, 250);

	/* Event Listeners - Mobile */
	$navToggle.on('click', toggleNav);
	$overlay.on('click', toggleNav);
	$submenuToggle.on('click', toggleSubmenu);

	/* Event Listeners - Desktop */
	checkWidth(); /* On Page Load */
	window.addEventListener('resize', checkWidth); /* On Resize */

	/* Inject rep logout link in header */
	$('.portal-profile').after(`<li class="portal-only"><a href="${$logoutURL}">Logout</a></li>`);
})(jQuery);
