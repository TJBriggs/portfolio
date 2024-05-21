/**
 *
 * Smooth Scrolling Anchors
 *
 */
(function () {
	const anchorlinks = document.querySelectorAll('a[href^="#"]');

	for (const item of anchorlinks) {
		item.addEventListener('click', (e) => {
			const hashval = item.getAttribute('href');
			const target = document.querySelector(hashval);
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
			history.pushState(null, null, hashval);
			e.preventDefault();
		});
	}
})();
