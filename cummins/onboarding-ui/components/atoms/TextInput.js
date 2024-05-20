import { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
/**
 * @example
 * <TextInput
 *    @param {string} inputType - (text is default, email, password, url, tel, number)
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality, is required)
 *    @param {string} currentValue - (optional value for the input)
 *    @param {string} placeholderText - (optional placeholder text)
 *    @param {string} labelText - (optional text that appears above the input)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {string} tooltipText - (optional tooltip that appears to the right of the label)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 * />
 */
const TextInput = ({
	inputType,
	classNames,
	id,
	currentValue,
	placeholderText,
	labelText,
	validationText,
	tooltipText,
	isRequired,
}) => {
	const [fieldValue, setFieldValue] = useState(currentValue ? currentValue : '');
	const [validation, setValidation] = useState('');
	const handleChange = (event) => {
		setFieldValue(event.target.value);
		//setValidation('success');
		//setValidation('error');
	};

	return (
		<div className={`text-input${classNames ? ' ' + classNames : ''}${labelText ? ' has-label' : ''}${validation ? ' ' + validation : ''}`}>
			{labelText &&
				<label>
					{labelText}{isRequired ? <sup>*</sup> : ''}
					{tooltipText &&
						<Tooltip tooltipIconName='question-mark' tooltipText={tooltipText} />
					}
				</label>
			}
			<input id={id} type={inputType} placeholder={placeholderText} value={fieldValue} onChange={handleChange} />
			{validation === 'error' && validationText &&
				<p className="text-input__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

TextInput.defaultProps = {
	inputType: 'text',
	isRequired: false,
};

TextInput.propTypes = {
	inputType: PropTypes.oneOf(['text', 'search', 'email', 'password', 'url', 'tel', 'number']).isRequired,
	classNames: PropTypes.string,
	id: PropTypes.string.isRequired,
	currentValue: PropTypes.string,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	tooltipText: PropTypes.string,
	isRequired: PropTypes.bool
};

export default TextInput;
