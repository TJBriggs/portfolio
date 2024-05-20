import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <Modal
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} modalID - (ID that corresponds with modal link is required)
 * @param {string} modalUpperTitle - (title displayed in the red box is required)
 * @param {string} modalLowerTitle - (optional subtitle displayed in the black box)
 * />
 */
const Modal = ({ children, classes, modalID, modalUpperTitle, modalLowerTitle, isEditable, getIsEditable }) => {
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
	const handleEditMode = () => {
		getIsEditable(!isEditable);
	}
	return (
		<div id={modalID} className='modal'>
			<div className={`modal__content${specialClasses}`}>
				<div className={`modal__header`}>
					<div className='modal__header-upper'>
						<Heading level='h2' text={modalUpperTitle} />
						<a className='modal-close'>
							<Icon className='modal-close' iconName='close' />
						</a>
					</div>
					{modalLowerTitle &&
						<div className='modal__header-lower'>
							<Heading level='h3' text={modalLowerTitle} />
							<a className='edit-mode' data-modalid={modalID} onClick={handleEditMode}>
								<Icon classes={['edit-icon']} iconName='edit' onClick={handleEditMode} />
							</a>
						</div>
					}
				</div>
				<div className='modal__children'>
					{children}
				</div>
			</div>
		</div>
	);
};

Modal.defaultProps = {
	classes: null,
	modalUpperTitle: 'Modal Title',
};

Modal.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	modalID: PropTypes.string.isRequired,
	modalUpperTitle: PropTypes.string.isRequired,
	modalLowerTitle: PropTypes.string
};

export default Modal;
