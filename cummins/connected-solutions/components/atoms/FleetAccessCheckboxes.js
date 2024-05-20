import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

/**
 * @example
 * <FleetAccessCheckboxes
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} labelText - (true is default, False disables checkboxes)
 *    @param {boolean} isEditable - (true is default, False disables checkboxes)
 * />
 */
const FleetAccessCheckboxes = ({ classes, labelText, isEditable }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	/* Run on load or with event listeners */
	useEffect(() => {
		const accordionCheckboxToggles = document.querySelectorAll('.accordion-checkbox__toggle');

		/* Open Checkbox Accordion on click */
		accordionCheckboxToggles.forEach((toggle) => {
			toggle.addEventListener('click', (event) => {
				event.preventDefault();
				toggle.parentNode.parentNode.parentNode.classList.toggle('expanded')
			});
		});
	}, []);

	return (
		<div className={`fleet-checkboxes${specialClasses}${isEditable ? '' : ' is-disabled'}`}>
			<label>{labelText}</label>
			<div className="fleet-checkboxes__container">
				<div className='accordion-checkbox__field'>
					<input type="checkbox" disabled={isEditable ? false : true} />
					<label>All</label>
				</div>
				<div className="accordion-checkbox">
					<div className="accordion-checkbox__parent">
						<div className="accordion-checkbox__toggle-wrap">
							<div className="accordion-checkbox__toggle"><Icon iconName='caret-right' /></div>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>US</label>
						</div>
					</div>
					<div className="accordion-checkbox__content">
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Northeast</label>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Northwest</label>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Southwest</label>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Midwest</label>
						</div>
					</div>
				</div>
				<div className="accordion-checkbox">
					<div className="accordion-checkbox__parent">
						<div className="accordion-checkbox__toggle-wrap">
							<div className="accordion-checkbox__toggle"><Icon iconName='caret-right' /></div>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Canada</label>
						</div>
					</div>
					<div className="accordion-checkbox__content">
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>North</label>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>South</label>
						</div>
					</div>
				</div>
				<div className="accordion-checkbox">
					<div className="accordion-checkbox__parent">
						<div className="accordion-checkbox__toggle-wrap">
							<div className="accordion-checkbox__toggle"><Icon iconName='caret-right' /></div>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>Mexico</label>
						</div>
					</div>
					<div className="accordion-checkbox__content">
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>North</label>
						</div>
						<div className='accordion-checkbox__field'>
							<input type="checkbox" disabled={isEditable ? false : true} />
							<label>South</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

FleetAccessCheckboxes.defaultProps = {
	classes: null,
	labelText: 'Groups',
	isEditable: true
};

FleetAccessCheckboxes.propTypes = {
	classes: PropTypes.array,
	labelText: PropTypes.string,
	isEditable: PropTypes.bool
};

export default FleetAccessCheckboxes;
