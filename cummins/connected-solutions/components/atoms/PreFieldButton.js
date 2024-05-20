import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <PreFieldButton
 * @param {string} type - (primary is default, secondary)
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} icon - (icon name from icomoon icon set, is required)
 * @param {string} size - (default, large)
 * @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 * />
 */
const PreFieldButton = ({
	type,
	classes,
	icon,
	size,
	text,
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<button className={`button pre-field ${type} ${size}${specialClasses}`} type="submit">
			<span className='button__text'>{text}</span>
			<Icon iconName={icon} classes={['icon--right']} />
		</button>
	);
};

PreFieldButton.defaultProps = {
	type: 'secondary',
	classes: null,
	icon: 'caret-down',
	size: 'default',
	text: 'Button Text',
};

PreFieldButton.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	icon: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['default', 'large']).isRequired,
	text: PropTypes.string.isRequired,
};

export default PreFieldButton;
