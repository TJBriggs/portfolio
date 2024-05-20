import PropTypes from 'prop-types';
/**
 * @example
 * <Icon
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} iconName - (placeholder is default, iconName is required)
 * />
 */

const Icon = ({
	classes,
	iconName
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<i className={`icon icon-${iconName}${specialClasses}`}></i>
	);
};

Icon.defaultProps = {
	classes: null,
	iconName: 'placeholder'
};

Icon.propTypes = {
	classes: PropTypes.array,
	iconName: PropTypes.string.isRequired
};

export default Icon;
