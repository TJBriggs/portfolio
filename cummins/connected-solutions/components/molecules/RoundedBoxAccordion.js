import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

/**
 * @example
 * <RoundedBoxAccordion
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} toggleText - (text displayed on accordion toggle is required)
 *    @param {boolean} toggleStatus - (false is default, true will display toggle status span)
 * />
 */
const RoundedBoxAccordion = ({ children, classes, toggleText, toggleStatus, isExpanded }) => {
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
		<section className="rounded-accordion">
			<div className="rounded-accordion__default-inner">
				<div className="rounded-box">
					<div className={`accordion${specialClasses}${expanded ? ' expanded' : ''}`}>
						<div className={`accordion__toggle`} onClick={handleToggle}>
							<Icon iconName='caret-down' />
							<h3>
								{toggleText}
								{toggleStatus &&
									<>
										&nbsp;-&nbsp;
										<span className='toggle-status'>OFF</span>
									</>
								}
							</h3>
						</div>
						<div className='accordion__content'>
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

RoundedBoxAccordion.defaultProps = {
	classes: null,
	toggleText: 'Rounded Accordion Toggle',
	toggleStatus: false,
	isExpanded: false
};

RoundedBoxAccordion.propTypes = {
	classes: PropTypes.array,
	toggleText: PropTypes.string.isRequired,
	isExpanded: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default RoundedBoxAccordion;
