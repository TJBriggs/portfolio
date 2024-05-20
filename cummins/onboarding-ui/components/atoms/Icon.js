import PropTypes from 'prop-types';
/**
 * @example
 * <Icon
 *    @param {array} className - (additional classes for styling purposes)
 *    @param {string} iconName - (placeholder is default, iconName is required)
 * />
 */

const Icon = ({
	className,
	iconName
}) => {
	return (
		<i className={`icon icon-${iconName}${className ? ' ' + className : ''}`} aria-hidden='true'></i>
	);
};

Icon.defaultProps = {
	iconName: 'placeholder'
};

Icon.propTypes = {
	className: PropTypes.string,
	iconName: PropTypes.string.isRequired
};

export default Icon;
