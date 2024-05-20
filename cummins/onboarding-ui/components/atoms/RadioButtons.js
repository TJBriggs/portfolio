import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <RadioButtons
 *    @param {string} alignment - (set button alignment horizontal or vertical, default is vertical)
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality, is required)
 *    @param {func} options - (array of options, is required)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 * />
 */
const RadioButtons = ({
	alignment,
	classNames,
	id,
	options,
	labelText,
	validationText,
	isRequired,
	getDropdownState
}) => {
	const [validation, setValidation] = useState('');
	useEffect(() => {
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
	}, []);
	const handleButtonSelect = (event) => {
		const targetValue = event.target.value;
		if (targetValue === 'yes') {
			getDropdownState(true);
		} else {
			getDropdownState(false);
		}
	};
	return (
		<div className={`radio-buttons${alignment === 'horizontal' ? ' horizontal' : ' vertical'}${classNames ? ' ' + classNames : ''}${validation ? ' ' + validation : ''}`} role='radiogroup'>
			{labelText &&
				<label className='radio-buttons__main-label'>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<div className="radio-buttons__button-wrap">
				{options.map((option, i) => {
					return (
						<label key={i} className={`radio-buttons__button-label`}>
							<input type="radio" id={id} name={`group-${id}`} value={option.value} onChange={handleButtonSelect} />
							<span>{option.label}</span>
						</label>
					);
				})}
			</div>
			{validation === 'error' && validationText &&
				<p className="select-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

RadioButtons.defaultProps = {
	alignment: 'vertical',
	options: null,
	isRequired: false,

};

RadioButtons.propTypes = {
	alignment: PropTypes.string,
	classeNames: PropTypes.array,
	id: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool
};

export default RadioButtons;
