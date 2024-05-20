import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <TextInput
 *    @param {string} type - (primary is default, secondary)
 *    @param {string} inputType - (text is default, email, password, url, tel, number)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality)
 *    @param {string} currentValue - (optional value for the input)
 *    @param {string} size - (large, medium is default, small)
 *    @param {string} placeholderText - (optional placeholder text)
 *    @param {string} labelText - (optional text that appears above the input)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets field to diasabled)
 * />
 */
const TextInput = ({
	type,
	inputType,
	classes,
	id,
	currentValue,
	size,
	placeholderText,
	labelText,
	validationText,
	isRequired,
	isEditable
}) => {
	let specialClasses = '';
	const [fieldValue, setFieldValue] = useState(currentValue);
	const [validation, setValidation] = useState('');
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	useEffect(() => {
		if (specialClasses.includes(' success')) {
			setValidation('success');
		}
		if (specialClasses.includes(' error')) {
			setValidation('error');
		}
	}, [specialClasses]);

	const handleChange = (event) => {
		setFieldValue(event.target.value);
	};

	return (
		<div className={`text-input ${type} ${size}${specialClasses}${labelText ? ' has-label' : ''}${validation ? ' ' + validation : ''}`}>
			{labelText !== null &&
				<label>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<input id={id} className={`${validation ? validation : ''}`} type={inputType} placeholder={placeholderText} value={fieldValue} onChange={handleChange} disabled={isEditable ? false : true} />
			{validation === 'error' && validationText !== null &&
				<p className="text-input__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

TextInput.defaultProps = {
	type: 'primary',
	inputType: 'text',
	classes: null,
	id: null,
	CurrentValue: null,
	size: 'medium',
	labelText: null,
	validationText: null,
	isRequired: false,
	isEditable: true
};

TextInput.propTypes = {
	type: PropTypes.string,
	inputType: PropTypes.string,
	classes: PropTypes.array,
	id: PropTypes.string,
	currentValue: PropTypes.string,
	size: PropTypes.string,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default TextInput;
