/**
 *
 * Open PDF Files in new tab
 *
 */
(function () {
	const html = document.getElementsByTagName('html')[0];
	const modals = document.querySelectorAll('.modal');
	const modalLinks = document.querySelectorAll('.modal-link');
	const dropdowns = document.querySelectorAll('.button-dropdown');
	const dropdownButtons = document.querySelectorAll('.button-dropdown__button');
	const accordionToggles = document.querySelectorAll('.accordion__toggle');
	const accordionCheckboxToggles = document.querySelectorAll('.accordion-checkbox__toggle');
	const modalCloseLinks = document.querySelectorAll('.modal-close');
	const rowToggles = document.querySelectorAll('.row-toggle');
	const anchorlinks = document.querySelectorAll('a[href^="#"]');

	modalLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			/* Close any open modals */
			modals.forEach((modal) => {
				if (modal.classList.contains('modal--open')) {
					modal.classList.remove('modal--open');
					html.classList.remove('modal--open');
				}
			});
			let modalID = '';
			if (event.target.matches('.modal-link')) {
				modalID = event.target.dataset.modalid;
			} else if (event.target.parentNode.matches('.modal-link')) {
				modalID = event.target.parentNode.dataset.modalid;
			}
			/* Get the modal ID and open the modal */
			const modal = document.getElementById(modalID);
			modal.classList.add('modal--open');
			html.classList.add('modal--open');
		});
	});

	/* Close Modal on click of modal-close elements (close icons, cancel buttons, etc) */
	modalCloseLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			modals.forEach((modal) => {
				if (modal.classList.contains('modal--open')) {
					modal.classList.remove('modal--open');
					html.classList.remove('modal--open');
				}
			});
		});
	});

	/* Open Dropdown on click */
	dropdownButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			event.preventDefault();
			/* Close any open dropdowns */
			dropdowns.forEach((dropdown) => {
				if (dropdown.classList.contains('dropdown--open')) {
					dropdown.classList.remove('dropdown--open');
				}
			});
			/* Add open class to parent wrapper */
			button.parentNode.classList.toggle('dropdown--open');
		});
	});

	/* Open Accordion on click */
	accordionToggles.forEach((toggle) => {
		toggle.addEventListener('click', (event) => {
			event.preventDefault();
			toggle.parentNode.classList.toggle('expanded')
		});
	});

	/* Open Accordion on click */
	accordionCheckboxToggles.forEach((toggle) => {
		toggle.addEventListener('click', (event) => {
			event.preventDefault();
			toggle.parentNode.parentNode.parentNode.classList.toggle('expanded')
		});
	});

	/* Open and close subtables on click of row-toggle */
	rowToggles.forEach((toggle) => {
		toggle.addEventListener('click', (event) => {
			event.preventDefault();
			const parentRow = toggle.closest('.table-rows__row');
			const subTable = parentRow.querySelector('.subtable');
			toggle.classList.toggle('subtable--open');
			subTable.classList.toggle('subtable--open');
		});
	});

	/* Anchor Links */
	anchorlinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			if (link.classList.contains('horizontal-scroll')) {
				const hashval = link.getAttribute('href');
				const target = document.getElementById(hashval.substring(1));
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				history.pushState(null, null, hashval);
				e.preventDefault();
			} else {
				const hashval = link.parentNode.getAttribute('href');
				const target = document.getElementById(hashval.substring(1));
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'end',
					inline: 'start'
				});
				history.pushState(null, null, hashval);
				e.preventDefault();
			}
		});
	});

	/* Close modal or dropdowns when clicking outside of it */
	html.addEventListener('click', function (event) {
		const classes = event.target.classList;
		/* If click is not part of modal */
		if (html.classList.contains('modal--open')) {
			if (classes.contains('modal')) {
				/* Close any open modals */
				modals.forEach((modal) => {
					if (modal.classList.contains('modal--open')) {
						modal.classList.remove('modal--open');
						html.classList.remove('modal--open');
					}
				});
			}
		}

		/* If click is not part of the dropdown button */
		if (
			!classes.contains('button-part') &&
			!classes.contains('button-dropdown__button')
		) {
			/* Close any open dropdowns */
			dropdowns.forEach((dropdown) => {
				if (dropdown.classList.contains('dropdown--open')) {
					dropdown.classList.remove('dropdown--open');
				}
			});
		}
	});
})();
