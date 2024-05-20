import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <DialogBox
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} modalID - (ID that corresponds with modal link is required)
 * />
 */
const DialogBox = ({ children, classes, modalID }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const modals = document.querySelectorAll('.modal');
		const modalLinks = document.querySelectorAll('.modal-link');
		const modalCloseLinks = document.querySelectorAll('.modal-close');

		/* Open Modal on click */
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
		});
	}, []);
	return (
		<div id={modalID} className='modal'>
			<div className={`modal__content dialog-box${specialClasses}`}>
				{children}
			</div>
		</div>
	);
};

DialogBox.defaultProps = {
	classes: null,
};

DialogBox.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	modalID: PropTypes.string.isRequired,
};

export default DialogBox;
