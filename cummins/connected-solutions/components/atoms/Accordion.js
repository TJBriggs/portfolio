import { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Icon from './Icon';

/**
 * @example
 * <Accordion
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} toggleText - (text displayed on accordion toggle is required)
 *    @param {boolean} hasTrashIcon - (false is default, true)
 *    @param {boolean} errorCount - (used in the bulk assets table, default is 0)
 *    @param {boolean} warningCount - (used in the bulk assets table, default is 0)
 *    @param {boolean} isExpanded - (false is default, true expands accordion on load)
 * />
 */
const Accordion = ({ children, classes, toggleText, hasTrashIcon, errorCount, warningCount, isExpanded }) => {
	const [removal, setRemoval] = useState(false);
	const [expanded, setExpanded] = useState(isExpanded);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleRemoval = () => {
		setRemoval(!removal);
	}
	const handleToggle = () => {
		setExpanded(!expanded);
	}

	const handleUndo = () => {
		console.log('add item back to view');
	}
	return (
		<div className={`accordion${specialClasses}${expanded ? ' expanded' : ''}`}>
			<div className={`accordion__toggle${removal ? ' to-be-removed' : ''}`} onClick={handleToggle}>
				<Icon iconName='caret-down' />
				<Heading level='h4' text={toggleText} />
				{(errorCount > 0 || warningCount > 0) &&
					<div className='error-indicators'>
						{errorCount > 0 &&
							<span className="error-indicators__box error-box">
								{errorCount}
							</span>
						}
						{warningCount > 0 &&
							<span className="error-indicators__box warning-box">
								{warningCount}
							</span>
						}
					</div>
				}
				{hasTrashIcon && !removal &&
					<a className='accordion__trash-link' onClick={handleRemoval}>
						<Icon iconName='trash' />
					</a>
				}
				{removal &&
					<a className='accordion__undo-link' onClick={handleUndo}>
						<Icon iconName='undo' />
					</a>
				}
			</div>
			<div className='accordion__content'>
				{children}
			</div>
		</div>
	);
};

Accordion.defaultProps = {
	classes: null,
	toggleText: 'Accordion Toggle',
	isExpanded: false,
	hasTrashIcon: false,
	errorCount: 0,
	warningCount: 0
};

Accordion.propTypes = {
	classes: PropTypes.array,
	toggleText: PropTypes.string.isRequired,
	isExpanded: PropTypes.bool,
	hasTrashIcon: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	errorCount: PropTypes.number,
	warningCount: PropTypes.number
};

export default Accordion;
