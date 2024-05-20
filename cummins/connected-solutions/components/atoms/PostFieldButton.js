import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <PostFieldButton
 * @param {string} type - (primary is default, secondary)
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} icon - (icon name from icomoon icon set, is required)
 * @param {string} size - (large, medium is default, small)
 * @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 * />
 */
const PostFieldButton = ({
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
		<button className={`button post-field ${type} ${size}${specialClasses}`} type="submit">
			<Icon iconName={icon} classes={['icon--left']} />
			<span className='button__text'>{text}</span>
		</button>
	);
};

PostFieldButton.defaultProps = {
	type: 'primary',
	classes: null,
	icon: 'placeholder',
	size: 'medium',
	text: 'Button Text',
};

PostFieldButton.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	icon: PropTypes.string.isRequired,
	size: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default PostFieldButton;
