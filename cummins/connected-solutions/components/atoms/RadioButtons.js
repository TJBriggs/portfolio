import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <RadioButtons
 *    @param {string} alignment - (set button alignment horizontal or vertical, default is vertical)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality)
 *    @param {func} options - (array of options, is required)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets select to disabled)
 * />
 */
const RadioButtons = ({
	alignment,
	classes,
	id,
	options,
	labelText,
	validationText,
	isRequired,
	isEditable
}) => {
	let specialClasses = '';
	const [validation, setValidation] = useState('');
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
		const radioButtons = document.querySelectorAll('input[type="radio"]');
		/* Handle checked Radio Buttons */
		radioButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				const buttonWrap = button.closest('.radio-buttons__button-wrap');
				const allRadioLabels = buttonWrap.querySelectorAll('.radio-buttons__button-label');

				/* Remove checked from all labels and radio buttons */
				allRadioLabels.forEach((label) => {
					label.classList.remove('checked');
				});

				if (button.checked) {
					button.parentNode.classList.add('checked');
				} else {
					button.parentNode.classList.remove('checked');
				}
			});
		});
	}, [specialClasses]);
	const handleButtonSelect = (event) => {
		console.log(event);
	};
	return (
		<div className={`radio-buttons${alignment === 'horizontal' ? ' horizontal' : ' vertical'}${specialClasses}${validation ? ' ' + validation : ''}${isEditable ? '' : ' is-disabled'}`}>
			{labelText !== null &&
				<label className='radio-buttons__main-label'>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<div className="radio-buttons__button-wrap">
				{options.map((option, i) => {
					return (
						<label key={i} className={`radio-buttons__button-label`}>
							<input type="radio" id={id} name={`group-${id}`} value={option.value} onChange={handleButtonSelect} disabled={isEditable ? false : true} />
							<span>{option.label}</span>
						</label>
					);
				})}
			</div>
			{validation === 'error' && validationText !== null &&
				<p className="select-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

RadioButtons.defaultProps = {
	alignment: 'vertical',
	classes: null,
	id: null,
	options: null,
	labelText: null,
	validationText: null,
	isRequired: false,
	isEditable: true
};

RadioButtons.propTypes = {
	alignment: PropTypes.string,
	classes: PropTypes.array,
	id: PropTypes.string,
	options: PropTypes.array.isRequired,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default RadioButtons;
