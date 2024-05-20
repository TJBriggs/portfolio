import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <ButtonAccordion
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} buttonText - (text displayed on accordion toggle is required)
 *    @param {boolean} isExpanded - (false is default, true expands accordion on load)
 * />
 */
const ButtonAccordion = ({ buttonText, children, classes, isExpanded }) => {
	const [expanded, setExpanded] = useState(isExpanded);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleToggle = () => {
		setExpanded(!expanded);
	}
	return (
		<div className={`button-accordion${specialClasses}${expanded ? ' expanded' : ''}`}>
			<a className='button primary medium button-accordion__button button-accordion__toggle' onClick={handleToggle}>{buttonText}</a>
			<div className='button-accordion__content'>
				{children}
			</div>
		</div>
	);
};

ButtonAccordion.defaultProps = {
	classes: null,
	buttonText: 'Button Text',
	isExpanded: false
};

ButtonAccordion.propTypes = {
	classes: PropTypes.array,
	buttonText: PropTypes.string.isRequired,
	isExpanded: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default ButtonAccordion;
