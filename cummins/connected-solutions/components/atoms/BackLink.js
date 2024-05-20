import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <BackButton
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {string} text - (Go Back is default, Text is required for screen readers even if it is an icon button)
 *    @param {string} url - (# is default, URL is required )
 * />
 */
const BackLink = ({
	classes,
	text,
	url
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<Link href={url}>
			<a className={`back-link${specialClasses}`}>
				<Icon iconName='caret-left' classes={['icon--left']} />
				<span className='link__text'>{text}</span>
			</a>
		</Link >
	);
};

BackLink.defaultProps = {
	classes: null,
	text: 'Go Back',
	url: '#'
};

BackLink.propTypes = {
	classes: PropTypes.array,
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};

export default BackLink;
