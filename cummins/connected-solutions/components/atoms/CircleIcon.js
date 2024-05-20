import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <CircleIcon
 *    @param {string} iconName - (Name of icon from Icomoon font icon set, is required)
 *    @param {string} backgroundColor - (Color of circle,is required)
 *    @param {string} size - (Size of circle, small, medium, large, xlarge, medium is default)
 * />
 */
const CircleIcon = ({ iconName, backgroundColor, size }) => {
	return (
		<span className={`circle-icon ${backgroundColor} ${size}`}>
			<Icon iconName={iconName} />
		</span>
	);
};

CircleIcon.defaultProps = {
	iconName: 'placeholder',
	size: 'medium',
};

CircleIcon.propTypes = {
	iconName: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	size: PropTypes.string
};

export default CircleIcon;
