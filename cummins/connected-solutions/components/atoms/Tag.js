import PropTypes from 'prop-types';
import Icon from './Icon';
/**
 * @example
 * <Tag
 *    @param {string} color - (red is default, green, pink, violet, gold)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} icon - (icon name from icomoon icon set, is required)
 *    @param {string} size - (large, medium is default, small)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 * />
 */
const Tag = ({
	color,
	classes,
	icon,
	size,
	text
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<span className={`tag bg-${color} ${size}${specialClasses}`}>
			{icon !== null &&
				<Icon iconName={icon} classes={['icon--left']} />
			}
			<span className='tag__text'>{text}</span>
		</span>
	);
};

Tag.defaultProps = {
	color: 'red',
	classes: null,
	icon: null,
	size: 'medium',
	text: 'Tag Text',
};

Tag.propTypes = {
	color: PropTypes.string,
	classes: PropTypes.array,
	icon: PropTypes.string,
	size: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Tag;
