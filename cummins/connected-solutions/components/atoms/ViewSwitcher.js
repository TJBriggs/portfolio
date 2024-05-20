import { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * @example
 * <ButtonDropdown
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} options - (option label, value, and url are requrired)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 *    @param {func} getMobileActiveCol - (function to set active column on mobile)
* />
 */
const ViewSwitcher = ({
	classes,
	options,
	text,
	getMobileActiveCol
}) => {
	const [selected, setSelected] = useState();
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}

	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		const viewSwitchers = document.querySelectorAll('.view-switcher');
		const viewSwitcherLinks = document.querySelectorAll('.view-switcher__link');

		/* Open View Switcher Dropdown on click */
		viewSwitcherLinks.forEach((link) => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				link.parentNode.classList.toggle('dropdown--open');
			});
		});

		/* Close modal or dropdowns when clicking outside of it */
		html.addEventListener('click', function (event) {
			const classes = event.target.classList;

			/* If click is not part of the View Switcher Link */
			if (
				!classes.contains('button-part') &&
				!classes.contains('view-switcher__link')
			) {
				/* Close any open view switchers */
				viewSwitchers.forEach((viewSwitcher) => {
					if (viewSwitcher.classList.contains('dropdown--open')) {
						viewSwitcher.classList.remove('dropdown--open');
					}
				});
			}
		});

	}, []);

	const handleSelect = (event) => {
		const value = event.target.dataset.value;
		const col = event.target.dataset.col;
		setSelected(value);
		getMobileActiveCol(col);
	}
	return (
		<div className={`view-switcher${specialClasses}`} tabIndex={0} value={selected}>
			<a className={`view-switcher__link`}>{text}</a>
			<ul className={`view-switcher__dropdown button-part`} tabIndex={1}>
				{options.map((option, i) => {
					return (
						<li className='view-switcher__dropdown-item button-part' key={i}>
							{option.linkType === 'modal' &&
								<a className={`view-switcher__item-link modal-link`} data-modalid={option.url} data-value={option.value} data-index={i}>
									{option.label}
								</a>
							}
							{option.linkType === 'default' &&
								<Link href={option.url}>
									<a href={option.url} className={`view-switcher__item-link`} data-index={i}>{option.label}</a>
								</Link >
							}
							{option.linkType === 'trigger' &&
								<a className={`view-switcher__item-link`} data-value={option.value} data-col={option.col} data-index={i} onClick={handleSelect}>
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

ViewSwitcher.defaultProps = {
	classes: null,
	options: null,
	text: 'Link Text'
};

ViewSwitcher.propTypes = {
	classes: PropTypes.array,
	options: PropTypes.array.isRequired,
	text: PropTypes.string.isRequired,
	getMobileActiveCol: PropTypes.func
};

export default ViewSwitcher;
