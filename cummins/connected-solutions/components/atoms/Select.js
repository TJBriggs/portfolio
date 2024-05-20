import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <Select
 *    @param {string} type - (primary is default, secondary, underline, pill)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality)
 *    @param {string} currentValue - (optional value for the input)
 *    @param {func} options - (array of options, is required)
 *    @param {string} size - (large, medium is default, small, xsmall)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets select to disabled)
 * />
 */
const Select = ({
	type,
	classes,
	id,
	currentValue,
	options,
	size,
	labelText,
	validationText,
	isRequired,
	isEditable
}) => {
	let specialClasses = '';
	const [validation, setValidation] = useState('');
	const [selectValue, setSelectValue] = useState(currentValue);
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	useEffect(() => {
		if (specialClasses.includes('success')) {
			setValidation('success');
		}
		if (specialClasses.includes('error')) {
			setValidation('error');
		}
	}, [specialClasses]);
	const handleSelectChange = (event) => {
		setSelectValue(event.target.value);
	};
	return (
		<div className={`select-field${specialClasses}${isEditable ? '' : ' is-disabled'}`}>
			{labelText !== null &&
				<label>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<select id={id} className={`${type} ${size}${validation ? ' ' + validation : ''}`} value={selectValue} onChange={handleSelectChange} disabled={isEditable ? false : true}>
				{options.map((option, i) => {
					return (
						<option key={i} value={option.value}>{option.label}</option>
					);
				})}
			</select>
			{validation === 'error' && validationText !== null &&
				<p className="select-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

Select.defaultProps = {
	type: 'primary',
	classes: null,
	id: null,
	currentValue: '',
	options: null,
	size: 'medium',
	labelText: null,
	validationText: null,
	isRequired: false,
	isEditable: true
};

Select.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	id: PropTypes.string,
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
