import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <SortByDropdown
 *    @param {string} type - (primary is default, secondary, squared, underline)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} options - (option label, value, and url are requrired)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 *    @param {boolean} isExpanded - (false is default, true)
 *    @param {string} initialLabel - (first label in the dropdown)
* />
 */
const SortByDropdown = ({
	type,
	size,
	classes,
	options,
	isExpanded,
	initialLabel,
	text
}) => {
	const [selected, setSelected] = useState('');
	const [selectedLabel, setSelectedLabel] = useState(null);
	const [expanded, setExpanded] = useState(isExpanded);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleExpand = () => {
		console.log('expand');
		setExpanded(true);
	}
	const handleClose = () => {
		setExpanded(false);
	}
	const handleSelect = (event) => {
		const value = event.target.dataset.value;
		const label = event.target.dataset.label;
		setSelected(value);
		setSelectedLabel(label);
		console.log('Trigger Sort');
		handleClose();
	}

	return (
		<div className={`button-dropdown sort-by${specialClasses} ${expanded ? ' dropdown--open' : ''}`} tabIndex={0} onFocus={handleExpand} value={selected}>
			<a className={`button ${type} ${size} button-dropdown__button`} onClick={handleExpand} data-value={selected}>
				<span className='button__text button-part'>{text} <span className='sort-label button-part'>{selectedLabel !== null ? selectedLabel : initialLabel}</span></span>
				<Icon iconName='caret-down' classes={['icon--right', 'button-part']} />
			</a>
			<ul className={`button-dropdown__dropdown button-part`} tabIndex={1}>
				{options.map((option, i) => {
					return (
						<li className='button-dropdown__dropdown-item button-part' key={i}>
							<a className='button-dropdown__item-link button-part' data-value={option.value} data-label={option.label} onClick={handleSelect}>{option.label}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

SortByDropdown.defaultProps = {
	type: 'primary',
	size: 'medium',
	initialLabel: 'Label',
	selectedLabel: null,
	classes: null,
	options: null,
	text: 'dropdown text',
	isExpanded: false
};

SortByDropdown.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	initialLabel: PropTypes.string.isRequired,
	selectedLabel: PropTypes.string,
	classes: PropTypes.array,
	options: PropTypes.array.isRequired,
	placeholderText: PropTypes.string,
	isExpanded: PropTypes.bool,
	text: PropTypes.string.isRequired
};

export default SortByDropdown;
