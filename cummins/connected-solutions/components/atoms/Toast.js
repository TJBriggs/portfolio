import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <DialogBox
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} toastID - (ID that corresponds with toast link/trigger is required)
 * @param {string} status - (status determines the icon and color, success, error)
 * @param {string} text - (text displayed in toast)
 * />
 */
const Toast = ({ classes, status, toastID, text }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const modals = document.querySelectorAll('.modal');
		const toasts = document.querySelectorAll('.toast');
		const toastLinks = document.querySelectorAll('.toast-link');

		/* Open Toast on click */
		toastLinks.forEach((link) => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				const modals = document.querySelectorAll('.modal');

				/* Close any open modals or toasts*/
				if (modals.length > 0) {
					modals.forEach((modal) => {
						if (modal.classList.contains('modal--open')) {
							modal.classList.remove('modal--open');
							html.classList.remove('modal--open');
						}
					});
				}
				if (toasts.length > 0) {
					toasts.forEach((toast) => {
						if (toast.classList.contains('toast--open')) {
							toast.classList.remove('toast--open');
							html.classList.remove('toast--open');
						}
					});
					let toastID = '';
					if (event.target.matches('.toast-link')) {
						toastID = event.target.dataset.toastid;
					} else if (event.target.parentNode.matches('.toast-link')) {
						toastID = event.target.parentNode.dataset.toastid;
					}
					/* Get the toast ID and open the toast */
					const toast = document.getElementById(toastID);
					toast.classList.add('toast--open');
					html.classList.add('toast--open');
					/* Wait 15 seconds and close the toast */
					setTimeout(() => {
						toast.classList.remove('toast--open');
						html.classList.remove('toast--open');
					}, 2500);
				}
			});
		});

		/* Close modal or dropdowns when clicking outside of it */
		html.addEventListener('click', function (event) {
			const classes = event.target.classList;

			/* If click is not part of toast */
			if (html.classList.contains('toast--open')) {
				if (classes.contains('toast')) {
					/* Close any open toasts */
					toasts.forEach((toast) => {
						if (toast.classList.contains('toast--open')) {
							toast.classList.remove('toast--open');
							html.classList.remove('toast--open');
						}
					});
				}
			}
		});
	}, []);
	return (
		<div id={toastID} className='toast'>
			<div className={`toast__content${specialClasses}`}>
				{status === 'success' &&
					<span className="toast__icon success">
						<Icon iconName='check' />
					</span>
				}
				{status === 'error' &&
					<span className="toast__icon error">
						<Icon iconName='close' />
					</span>
				}
				<p className='toast__text'>{text}</p>
			</div>
		</div>
	);
};

Toast.defaultProps = {
	classes: null,
	text: 'Toast Text...'
};

Toast.propTypes = {
	classes: PropTypes.array,
	toastID: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Toast;
