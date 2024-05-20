import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <IconDropdown
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} options - (option label and value, is requrired icon is optional)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 *    @param {string} labelText - (optional label text above the dropdown)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets field to diasabled)
* />
 */
const IconDropdown = ({
	classes,
	options,
	text,
	labelText,
	isRequired,
	isEditable
}) => {
	const [selected, setSelected] = useState('');
	const [currentIcon, setCurrentIcon] = useState('truck');
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleClick = (event) => {
		let value = '';
		let icon = '';
		if (event.target.matches('.icon-item')) {
			value = event.target.dataset.value;
			icon = event.target.dataset.icon;
		} else if (event.target.parentNode.matches('.icon-item')) {
			value = event.target.parentNode.dataset.value;
			icon = event.target.parentNode.dataset.icon;
		}
		setSelected(value);
		setCurrentIcon(icon);
	}
	return (
		<div className={`button-dropdown button-icon-dropdown${specialClasses}${isEditable ? '' : ' is-disabled'}`} tabIndex={0} value={selected}>
			{labelText !== null &&
				<label>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<a className={`button button-dropdown__button`}>
				<span className='button__text button-part screen-reader-text'>{text}</span>
				<Icon iconName={currentIcon ? currentIcon : 'truck'} classes={['current-icon', 'button-part']} />
				<Icon iconName='caret-right' classes={['caret-icon', 'button-part']} />
			</a>
			<ul className={`button-dropdown__dropdown button-part`} tabIndex={1}>
				{options.map((option, i) => {
					return (
						<li className='button-dropdown__dropdown-item button-part' key={i} >
							<a className='icon-item' data-value={option.value} data-icon={option.icon} onClick={handleClick}><Icon iconName={option.icon} /><span>{option.label}</span></a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

IconDropdown.defaultProps = {
	type: 'underline',
	classes: null,
	options: null,
	text: 'dropdown text',
	labelText: null,
	isRequired: false,
	isEditable: true
};

IconDropdown.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	classes: PropTypes.array,
	options: PropTypes.array.isRequired,
	text: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	isRequired: PropTypes.bool
};

export default IconDropdown;
