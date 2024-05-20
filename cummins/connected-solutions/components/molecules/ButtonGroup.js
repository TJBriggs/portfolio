import PropTypes from 'prop-types';

/**
 * @example
 * <ButtonGroup
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} gap - (Optional gap between buttons: large, medium, small, null is default)
 *    @param {string} justification - (Optional button justification: flex-start is default, flex-end, center, space-between, space-evenly)
 * />
 */
const ButtonGroup = ({ children, classes, gap, justification }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`button-group${specialClasses}${gap !== null ? ' gap-' + gap : ''}${justification !== null ? ' justify-' + justification : ''}`}>
			{children}
		</div>
	);
};

ButtonGroup.defaultProps = {
	classes: null,
	gap: null,
	justification: null
};

ButtonGroup.propTypes = {
	classes: PropTypes.array,
	gap: PropTypes.string,
	justification: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default ButtonGroup;
