import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

/**
 * @example
 * <RoundedTableToggle
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} toggleText - (text displayed on accordion toggle is required)
 *    @param {string} recipientCount - (number displayed on accordion toggle)
 * />
 */
const RoundedTableToggle = ({ children, classes, toggleText, recipientCount, isExpanded }) => {
	const [expanded, setExpanded] = useState(isExpanded);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleToggle = (event) => {
		const target = event.target;
		/* Do not expand if click is on button */
		if (!target.classList.contains('button__text') && !target.classList.contains('button')) {
			setExpanded(!expanded);
		}
	}
	return (
		<section className="rounded-accordion">
			<div className="rounded-accordion__default-inner">
				<div className="rounded-box flush-no-bottom-round table-toggle">
					<div className={`accordion${specialClasses}${expanded ? ' expanded' : ''}`}>
						<div className={`accordion__toggle`} onClick={handleToggle}>
							<Icon iconName='caret-down' />
							<h3>{toggleText} ({recipientCount})</h3>
							<Button
								size='small'
								linkType='modal'
								text='+ Add Recipient'
								url='add-recipient'
							/>
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

RoundedTableToggle.defaultProps = {
	classes: null,
	toggleText: 'Rounded Accordion Toggle',
	isExpanded: false,
	recipientCount: 0
};

RoundedTableToggle.propTypes = {
	classes: PropTypes.array,
	toggleText: PropTypes.string.isRequired,
	recipientCount: PropTypes.number,
	isExpanded: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default RoundedTableToggle;
