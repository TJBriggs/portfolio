import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <Button
 *    @param {string} type - (primary is default, secondary, text)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {func} iconOne - (null is default, Import Icon from svg file and pass it here )
 *    @param {func} iconTwo - (null is default, Import Icon from svg file and pass it here )
 *    @param {string} linkType - (normal is default, external, modal, toast)
 *    @param {boolean} Round - (false is default, true)
 *    @param {string} size - (default and large)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 *    @param {string} url - (# is default, URL is required )
 * />
 */
const Button = ({
	type,
	classes,
	iconOne,
	iconTwo,
	linkType,
	round,
	size,
	text,
	url
}) => {
	let specialClasses = '';
	if (round !== null && round === true) {
		specialClasses = ' round';
	}
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	if (linkType === 'normal') {
		return (
			<Link href={url}>
				<a className={`button ${type} ${size}${specialClasses}`} role='button'>
					{iconOne !== null &&
						<Icon iconName={iconOne} classes={['icon--left']} />
					}
					<span className='button__text'>{text}</span>
					{iconTwo !== null &&
						<Icon iconName={iconTwo} classes={['icon--right']} />
					}
				</a>
			</Link >
		);
	} else if (linkType === 'external') {
		return (
			<a href={url} className={`button ${type} ${size}${specialClasses}`} rel='noopener noreferrer' role='button'>
				{iconOne !== null &&
					<Icon iconName={iconOne} classes={['icon--left']} />
				}
				<span className='button__text'>{text}</span>
				{iconTwo !== null &&
					<Icon iconName={iconTwo} classes={['icon--right']} />
				}
			</a>
		);
	} else if (linkType === 'modal') {
		return (
			<a className={`button ${type} ${size}${specialClasses} modal-link`} data-modalid={url} role='button'>
				{iconOne !== null &&
					<Icon iconName={iconOne} classes={['icon--left']} />
				}
				<span className='button__text'>{text}</span>
				{iconTwo !== null &&
					<Icon iconName={iconTwo} classes={['icon--right']} />
				}
			</a>
		);
	} else if (linkType === 'toast') {
		return (
			<a className={`button ${type} ${size}${specialClasses} toast-link`} data-toastid={url} role='button'>
				{iconOne !== null &&
					<Icon iconName={iconOne} classes={['icon--left']} />
				}
				<span className='button__text'>{text}</span>
				{iconTwo !== null &&
					<Icon iconName={iconTwo} classes={['icon--right']} />
				}
			</a>
		);
	}
};

Button.defaultProps = {
	type: 'pill',
	classes: null,
	iconOne: null,
	iconTwo: null,
	linkType: 'normal',
	round: null,
	size: 'default',
	text: 'Button Text',
	url: '#'
};

Button.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	iconOne: PropTypes.string,
	iconTwo: PropTypes.string,
	linkType: PropTypes.string,
	round: PropTypes.bool,
	size: PropTypes.oneOf(['default', 'large']).isRequired,
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};

export default Button;
