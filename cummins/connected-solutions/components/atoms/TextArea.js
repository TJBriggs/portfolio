import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <TextArea
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality)
 *    @param {string} currentValue - (optional value for the input)
 *    @param {string} size - (large, medium is default, small)
 *    @param {string} placeholderText - (optional placeholder text)
 *    @param {string} labelText - (optional text that appears above the input)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets field to diasabled)
 *    @param {number} rows - (specify height of textarea)
 * />
 */
const TextArea = ({
	classes,
	id,
	currentValue,
	size,
	placeholderText,
	labelText,
	validationText,
	isRequired,
	isEditable,
	rows
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
		<div className={`text-area primary ${size}${specialClasses}${labelText ? ' has-label' : ''}${validation ? ' ' + validation : ''}`}>
			{labelText !== null &&
				<label>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<textarea
				id={id}
				className={`${validation ? validation : ''}`}
				placeholder={placeholderText}
				value={fieldValue}
				onChange={handleChange}
				disabled={isEditable ? false : true}
				rows={rows}
			>
				{fieldValue}
			</textarea>
			{validation === 'error' && validationText !== null &&
				<p className="text-area__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

TextArea.defaultProps = {
	classes: null,
	id: null,
	CurrentValue: null,
	size: 'medium',
	labelText: null,
	validationText: null,
	isRequired: false,
	isEditable: true,
	rows: 4
};

TextArea.propTypes = {
	classes: PropTypes.array,
	id: PropTypes.string,
	currentValue: PropTypes.string,
	size: PropTypes.string,
	placeholderText: PropTypes.string,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool,
	rows: PropTypes.number
};

export default TextArea;
