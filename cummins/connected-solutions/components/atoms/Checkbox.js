import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <Checkbox
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} size - (large, medium is default, small, xsmall)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} labelMobileOnly - (false is default, true hides the label on mobile)
 *    @param {boolean} isChecked - (false is default, true makes the checkbox checked)
 *    @param {boolean} isEditable - (true is default, false makes the checkbox disabled)
 * />
 */
const Checkbox = ({ classes, isChecked, labelText, validationText, isRequired, labelMobileOnly, isEditable }) => {
	let specialClasses = '';
	const [validation, setValidation] = useState('');
	const [checkedStatus, setCheckedStatus] = useState(isChecked);
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleChange = (event) => {
		const value = event.target.checked;
		if (value && validationText) {
			setValidation('success');
		}
		setCheckedStatus(value);
		console.log('Trigger something');
	};
	return (
		<div className={`checkbox-field${specialClasses}${isEditable ? '' : ' is-disabled'}`}>
			<div className={`checkbox-field__wrap`}>
				<input type="checkbox" onChange={handleChange} checked={checkedStatus ? true : false} disabled={isEditable ? false : true} />
				{labelText !== null &&
					<label className={labelMobileOnly ? 'mobile-only' : ''}>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
				}
			</div>
			{validation === 'error' && validationText !== null &&
				<p className="checkbox-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

Checkbox.defaultProps = {
	classes: null,
	labelText: null,
	validationText: null,
	isRequired: false,
	isChecked: false,
	isEditable: true
};

Checkbox.propTypes = {
	classes: PropTypes.array,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isChecked: PropTypes.bool,
	isEditable: PropTypes.bool
};

export default Checkbox;
