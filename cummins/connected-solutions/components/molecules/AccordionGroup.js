import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';

/**
 * @example
 * <AccordionGroup
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} groupHeading - (Optional text that will create a header above you accordions)
 *    @param {string} addMoreText - (enter text to add optional add more button)
 * />
 */
const AccordionGroup = ({ addMoreText, children, classes, groupHeading }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleAddMore = () => {
		console.log('trigger functionality to add another element to accordion group');
	}
	return (
		<div className={`accordion-group${specialClasses}`}>
			{groupHeading &&
				<Heading level='h3' classNames='accordion-group__heading' text={groupHeading} />
			}
			{children}
			{addMoreText &&
				<a className='accordion-group__add-button' onClick={handleAddMore}>{addMoreText}</a>
			}
		</div>
	);
};

AccordionGroup.defaultProps = {
	classes: null
};

AccordionGroup.propTypes = {
	addMoreText: PropTypes.string,
	classes: PropTypes.array,
	groupHeading: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default AccordionGroup;
