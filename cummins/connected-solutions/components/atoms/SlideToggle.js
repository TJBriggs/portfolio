import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <SlideToggle
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} size - (large, medium is default, small, xsmall)
 *    @param {string} labelText - (optional text above the select field)
 *    @param {string} labelLocation - (top is default or right)
 *    @param {string} validationText - (optional validation text that appears below the input)
 *    @param {boolean} isRequired - (false is default, true displays a asterisk)
 *    @param {boolean} isChecked - (false is default, true makes the SlideToggle checked)
 *    @param {boolean} isEditable - (true is default, false makes the SlideToggle disabled)
 *    @param {boolean} changeLabel - (false is default, true lets you set onLabel and offLabel text)
 *    @param {string} onLabel - (text to be displayed when the SlideToggle is on)
 *    @param {string} offLabel - (text to be displayed when the SlideToggle is off)
 * />
 */
const SlideToggle = ({
	classes,
	isChecked,
	labelText,
	labelLocation,
	validationText,
	isRequired,
	isEditable,
	changeLabel,
	onLabel,
	offLabel
}) => {
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
		const target = event.target;
		const mainToggle = target.parentNode.parentNode.parentNode;
		const accordion = target.closest('.accordion');
		if (value && validationText) {
			setValidation('success');
		}
		setCheckedStatus(value);
		if (mainToggle.classList.contains('main-toggle__toggle')) {
			const toggleStatus = accordion.querySelector('.toggle-status');

			if (toggleStatus !== null && toggleStatus.innerHTML === 'ON') {
				toggleStatus.innerHTML = 'OFF';
			} else if (toggleStatus !== null && toggleStatus.innerHTML === 'OFF') {
				toggleStatus.innerHTML = 'ON';
			}
		}

	};
	return (
		<div className={`slide-toggle${specialClasses}${isEditable ? '' : ' is-disabled'}`}>
			<div className={`slide-toggle__wrap label--${labelLocation}`}>
				{(labelText !== null && labelLocation === 'top') &&
					<label className='label-top'>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
				}
				<div className="slide-toggle__ui-wrap">
					<input type="checkbox" onChange={handleChange} checked={checkedStatus ? true : false} disabled={isEditable ? false : true} />
					<div className={`slide-toggle__toggle toggle--${checkedStatus ? 'on' : 'off'}`}>
						<span className="slide-toggle__circle"></span>
					</div>
				</div>
				{(labelText !== null && labelLocation === 'right' && changeLabel === false) &&
					<label className='label-right'>{labelText}{isRequired ? <sup>*</sup> : ''}</label>
				}
				{(labelText === null && labelLocation === 'right' && changeLabel === true) &&
					<label className='label-right'>{checkedStatus ? onLabel : offLabel}</label>
				}
			</div>
			{validation === 'error' && validationText !== null &&
				<p className="slide-toggle-field__validation-message">
					{validationText}
				</p>
			}
		</div>
	);
};

SlideToggle.defaultProps = {
	classes: null,
	labelText: null,
	labelLocation: 'top',
	validationText: null,
	isRequired: false,
	isChecked: false,
	isEditable: true,
	changeLabel: false
};

SlideToggle.propTypes = {
	classes: PropTypes.array,
	labelText: PropTypes.string,
	labelLocation: PropTypes.string,
	validationText: PropTypes.string,
	isRequired: PropTypes.bool,
	isChecked: PropTypes.bool,
	isEditable: PropTypes.bool,
	changeLabel: PropTypes.bool,
	onLabel: PropTypes.string,
	offLabel: PropTypes.string
};

export default SlideToggle;
