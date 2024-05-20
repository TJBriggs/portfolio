import { useEffect } from 'react';
import _debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <Tooltip
 *    @param {string} tooltipText - (text is required and is displayed in the tooltip box)
 *    @param {string} tooltipIconName - (optional icon, question mark is default)
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const Tooltip = ({ classes, tooltipIconName, tooltipText }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	useEffect(() => {

		const checkWidth = () => {
			let tooltips = document.querySelectorAll('.tooltip');

			tooltips.forEach(function (tooltip) {
				let tooltipBox = tooltip.querySelector('.tooltip__box');
				let windowWidth = window.innerWidth;

				if (windowWidth >= 830) {
					tooltipBox.classList.remove('reflect--left');
				} else {
					tooltipBox.classList.add('reflect--left');
				}
			});
		};
		const debounceCheckWidth = _debounce(checkWidth, 500);
		window.addEventListener('resize', debounceCheckWidth);
		checkWidth();
		return () => window.removeEventListener('resize', debounceCheckWidth);
	}, []);
	return (
		<a className='tooltip' role='tooltip'>
			<Icon iconName={tooltipIconName} />
			<div className='tooltip__box'>
				<Icon iconName={tooltipIconName} />
				<p>{tooltipText}</p>
			</div>
		</a>
	);
};

Tooltip.defaultProps = {
	classes: null,
	tooltipIconName: 'question-mark',
	tooltipText: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam',
};

Tooltip.propTypes = {
	classes: PropTypes.array,
	tooltipIconName: PropTypes.string,
	tooltipText: PropTypes.string,
};

export default Tooltip;
