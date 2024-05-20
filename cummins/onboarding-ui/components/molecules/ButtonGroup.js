import PropTypes from 'prop-types';

/**
 * @example
 * <ButtonGroup
 *    @param {array} children - (additional classes for styling purposes)
 *    @param {array} className - (additional classes for styling purposes)
 *    @param {string} layout - (horizontal is default, vertical)
 * />
 */
const ButtonGroup = ({
	children,
	className,
	layout
}) => {
	return (
		<div className={`button-group${className ? ' ' + className : ''}${layout ? ' ' + layout : ''}`}>
			{children}
		</div>
	);
};

ButtonGroup.defaultProps = {
	layout: 'horizontal',
};

ButtonGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	className: PropTypes.string,
	layout: PropTypes.oneOf(['horizontal', 'vertical'])
};

export default ButtonGroup;
