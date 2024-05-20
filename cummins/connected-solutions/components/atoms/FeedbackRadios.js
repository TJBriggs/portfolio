import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
/**
 * @example
 * <FeedbackRadios
 *    @param {string} alignment - (set button alignment horizontal or vertical, default is horizontal)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {array} id - (id for form related functionality)
 *    @param {func} options - (array of options, is required)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isEditable - (true is default, false sets select to disabled)
 * />
 */
const FeedbackRadios = ({
	classes,
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
		<div className={`radio-buttons smiley-radios horizontal${specialClasses}${validation ? ' ' + validation : ''}${isEditable ? '' : ' is-disabled'}`}>
			{labelText !== null &&
				<label className='radio-buttons__main-label'>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
			}
			<div className="radio-buttons__button-wrap">
				<label className={`radio-buttons__button-label`}>
					<input type='radio' id='' name='smiley-radio' value='very-satisfied' onChange={handleButtonSelect} disabled={isEditable ? false : true} />
					<Icon iconName='happy' />
					<span className='screen-reader-text'>Very Satisfied</span>
				</label>
				<label className={`radio-buttons__button-label`}>
					<input type='radio' id='' name='smiley-radio' value='satisfied' onChange={handleButtonSelect} disabled={isEditable ? false : true} />
					<Icon iconName='smile' />
					<span className='screen-reader-text'>Satisfied</span>
				</label>
				<label className={`radio-buttons__button-label`}>
					<input type='radio' id='' name='smiley-radio' value='okay' onChange={handleButtonSelect} disabled={isEditable ? false : true} />
					<Icon iconName='neutral' />
					<span className='screen-reader-text'>Okay</span>
				</label>
				<label className={`radio-buttons__button-label`}>
					<input type='radio' id='' name='smiley-radio' value='dissatisfied' onChange={handleButtonSelect} disabled={isEditable ? false : true} />
					<Icon iconName='frown' />
					<span className='screen-reader-text'>Dissatisfied</span>
				</label>
				<label className={`radio-buttons__button-label`}>
					<input type='radio' id='' name='smiley-radio' value='very-dissatisfied' onChange={handleButtonSelect} disabled={isEditable ? false : true} />
					<Icon iconName='angry' />
					<span className='screen-reader-text'>Very Disatisfied</span>
				</label>
			</div>
			{validation === 'error' && validationText !== null &&
				<p className="select-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

FeedbackRadios.defaultProps = {
	alignment: 'horizontal',
	classes: null,
	labelText: null,
	validationText: null,
	isRequired: false,
	isEditable: true
};

FeedbackRadios.propTypes = {
	alignment: PropTypes.string,
	classes: PropTypes.array,
	labelText: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default FeedbackRadios;
