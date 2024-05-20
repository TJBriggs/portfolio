import { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <ButtonDropdown
 *    @param {string} type - (primary is default, secondary, squared, underline)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} options - (option label, value, and url are requrired)
 *    @param {string} size - (default, large)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
* />
 */
const ButtonDropdown = ({
	type,
	size,
	classes,
	options,
	text
}) => {
	const [selected, setSelected] = useState('');
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleSelect = (event) => {
		const value = event.target.dataset.value;
		console.log('Trigger Something');
		setSelected(value);
	}
	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const dropdowns = document.querySelectorAll('.button-dropdown');
		const dropdownButtons = document.querySelectorAll('.button-dropdown__button');

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

		/* Close modal or dropdowns when clicking outside of it */
		html.addEventListener('click', function (event) {
			const classes = event.target.classList;

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
	}, []);
	return (
		<div className={`button-dropdown${specialClasses}`} tabIndex={0} value={selected}>
			<a className={`button ${type} ${size} button-dropdown__button`}>
				<span className='button__text button-part'>{text}</span>
				<Icon iconName='caret-down' classes={['icon--right', 'button-part']} />
			</a>
			<ul className={`button-dropdown__dropdown button-part`} tabIndex={1}>
				{options.map((option, i) => {
					return (
						<li className='button-dropdown__dropdown-item button-part' key={i}>
							{option.linkType === 'modal' &&
								<a className='button-dropdown__item-link modal-link button-part' data-modalid={option.url} data-value={option.value}>
									{option.label}
								</a>
							}
							{option.linkType === 'default' &&
								<Link href={option.url}>
									<a href={option.url} className='button-dropdown__item-link'>{option.label}</a>
								</Link >
							}
							{option.linkType === 'trigger' &&
								<a className='button-dropdown__item-link button-part' data-value={option.value} onClick={handleSelect}>
									{option.label}
								</a>
							}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

ButtonDropdown.defaultProps = {
	type: 'primary',
	size: 'default',
	classes: null,
	options: null,
	text: 'dropdown text'
};

ButtonDropdown.propTypes = {
	type: PropTypes.string,
	size: PropTypes.oneOf(['default', 'large']).isRequired,
	classes: PropTypes.array,
	options: PropTypes.array.isRequired,
	placeholderText: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default ButtonDropdown;
