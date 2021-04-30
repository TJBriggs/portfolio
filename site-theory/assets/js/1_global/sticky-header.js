/**
 *
 * Accessible Main Navigation
 *
 */
(function () {
	const html = document.querySelector('html');
	const header = document.querySelector('.site-header');

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

	// eslint-disable-next-line no-unused-vars
	let position = 0;

	const checkScroll = debounce(function () {
		if (window.pageYOffset >= 10) {
			html.classList.add('header-collapsed');
			header.classList.add('collapsed');
			position = window.pageYOffset;
		} else {
			html.classList.remove('header-collapsed');
			header.classList.remove('collapsed');
			position = window.pageYOffset;
		}
	}, 50);

	/* Event Listeners */
	window.addEventListener('scroll', checkScroll);
})();
