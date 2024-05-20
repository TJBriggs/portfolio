import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/TextInput';
import Icon from '../atoms/Icon';

/**
 * @example
 * <AddressAccordion
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {boolean} isExpanded - (false is default, true)
 * />
 */
const AddressAccordion = ({ classes, isExpanded }) => {
	const [expanded, setExpanded] = useState(isExpanded);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleToggle = () => {
		setExpanded(!expanded);
	}
	return (
		<div className={`address-accordion${specialClasses}${expanded ? ' expanded' : ''}`}>
			<label className='address-accordion__toggle' onClick={handleToggle}><span className='address-accordion__icon'><Icon iconName='caret-right' /></span>{expanded ? 'Address' : 'Click to edit address'}</label>
			{expanded &&
				<>
					<TextInput />
					<TextInput
						labelText='Address 2'
					/>
					<TextInput
						labelText='City'
					/>
					<TextInput
						labelText='State'
					/>
					<TextInput
						labelText='Region'
					/>
					<TextInput
						labelText='Country'
					/>
					<TextInput
						labelText='Zip Code'
					/>
				</>
			}
		</div>
	);
};

AddressAccordion.defaultProps = {
	classes: null,
	isExpanded: false
};

AddressAccordion.propTypes = {
	classes: PropTypes.array,
	isExpanded: PropTypes.bool
};

export default AddressAccordion;
