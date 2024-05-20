import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <Checkbox
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {array} id - (id for form related functionality, is required)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} labelMobileOnly - (false is default, true hides the label on mobile)
 *    @param {boolean} isChecked - (false is default, true makes the checkbox checked)
 *    @param {func} onToggle - (optional, function to trigger action on click)
 * />
 */
const Checkbox = ({ classNames, id, labelText, validationText, isRequired, labelMobileOnly, onToggle }) => {
	const [validation, setValidation] = useState('');
	const handleChange = (event) => {
		const value = event.target.checked;
		if (value && validationText) {
			setValidation('success');
		}
		if (onToggle) {
			onToggle({ id, labelText, value });
		}
	};

	return (
		<div className={`checkbox-field${classNames ? ' ' + classNames : ''}`}>
			<div className={`checkbox-field__wrap`}>
				<input id={id} type="checkbox" onChange={handleChange} />
				{labelText &&
					<label className={labelMobileOnly ? 'mobile-only' : ''} htmlFor={id}>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
				}
			</div>
			{validation === 'error' && validationText &&
				<p className="checkbox-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

Checkbox.defaultProps = {
	isRequired: false,
	isEditable: true
};

Checkbox.propTypes = {
	classeNames: PropTypes.string,
	labelText: PropTypes.string,
	id: PropTypes.string.isRequired,
	validationText: PropTypes.string,
	onToggle: PropTypes.func,
	isRequired: PropTypes.bool,
	isEditable: PropTypes.bool
};

export default Checkbox;
