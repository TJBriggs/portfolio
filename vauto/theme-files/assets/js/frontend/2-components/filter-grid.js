/**
 *
 * Filter Grid
 *
 */

(function () {
	'use strict';

	const html = document.querySelector('html');
	const filterToggle = document.querySelector('.filter-grid__toggle');
	const filterClose = document.querySelector('.filter-grid__filters-close');
	const filterOverlay = document.querySelector('.filter-grid__overlay');

	/**
	 * Toggle Filter Menu
	 */
	const toggleFilters = () => {
		html.classList.toggle('filter--open');
	};

	/**
	 * Close Filter Menu
	 */
	const closeFilters = () => {
		html.classList.remove('filter--open');
	};

	if (null !== filterToggle) {
		filterToggle.addEventListener('click', toggleFilters);
		filterClose.addEventListener('click', closeFilters);
		filterOverlay.addEventListener('click', closeFilters);
	}
})();
