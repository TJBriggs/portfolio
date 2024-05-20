import { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

/**
 * @example
 * <Select
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality, is required)
 *    @param {string} currentValue - (optional value for the input)
 *    @param {func} options - (array of options, is required)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {string} tooltipText - (optional tooltip that appears to the right of the label)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 * />
 */
const Select = ({
	classNames,
	id,
	currentValue,
	options,
	labelText,
	validationText,
	tooltipText,
	isRequired,
}) => {
	const [validation, setValidation] = useState('');
	const [selectValue, setSelectValue] = useState(currentValue ? currentValue : '');
	const handleSelectChange = (event) => {
		setSelectValue(event.target.value);
		//setValidation('success');
		//setValidation('error');
	};
	return (
		<div className={`select-field${classNames ? ' ' + classNames : ''}${validation ? ' ' + validation : ''}`}>
			{labelText &&
				<label>
					{labelText}{isRequired ? <sup>*</sup> : ''}
					{tooltipText &&
						<Tooltip tooltipIconName='question-mark' tooltipText={tooltipText} />
					}
				</label>
			}
			<select id={id} value={selectValue} onChange={handleSelectChange}>
				{options.map((option, i) => {
					return (
						<option key={i} value={option.value}>{option.label}</option>
					);
				})}
			</select>
			{validation === 'error' && validationText &&
				<p className="select-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

Select.defaultProps = {
	options: null,
	isRequired: false,
};

Select.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	id: PropTypes.string.isRequired,
	currentValue: PropTypes.string,
	options: PropTypes.array.isRequired,
	size: PropTypes.string,
	defaultValue: PropTypes.string,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default Select;
