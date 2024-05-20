import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <ShowCountDropdown
 *    @param {string} type - (primary is default, secondary, squared, underline)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} options - (option label, value, and url are requrired)
* />
 */
const ShowCountDropdown = ({
	type,
	size,
	classes,
	options,
}) => {
	const [selected, setSelected] = useState(5);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleSelect = (event) => {
		const value = event.target.dataset.value;
		setSelected(value);
		console.log('Change number of rows based on the value');
	}

	return (
		<div className='show-count'>
			<div className={`button-dropdown${specialClasses}`} tabIndex={0} value={selected}>
				<a className={`button ${type} ${size} button-dropdown__button`}>
					<span className='button__text button-part'>Show: <span className='count button-part'>{selected}</span></span>
					<Icon iconName='caret-down' classes={['icon--right', 'button-part']} />
				</a>
				<ul className={`button-dropdown__dropdown button-part`} tabIndex={1}>
					{options.map((option, i) => {
						return (
							<li className='button-dropdown__dropdown-item button-part' key={i}>
								<a className='button-dropdown__item-link button-part' data-value={option.value} onClick={handleSelect}>{option.label}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

ShowCountDropdown.defaultProps = {
	type: 'primary',
	size: 'medium',
	classes: null,
	options: null
};

ShowCountDropdown.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	classes: PropTypes.array,
	options: PropTypes.array.isRequired
};

export default ShowCountDropdown;
