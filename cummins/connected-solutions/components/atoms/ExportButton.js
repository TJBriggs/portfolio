import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <ExportButton
 *    @param {string} type - (primary is default, secondary, text)
 *    @param {array} classes - (additional classes for styling purposes)
 *    @param {func} iconOne - (null is default, Import Icon from svg file and pass it here )
 *    @param {func} iconTwo - (null is default, Import Icon from svg file and pass it here )
 *    @param {string} size - (large, medium is default, small, xsmall)
 *    @param {string} text - (Button Text is default, Text is required for screen readers even if it is an icon button)
 * />
 */
const ExportButton = ({
	type,
	classes,
	iconOne,
	iconTwo,
	size,
	text,
}) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleClick = () => {
		console.log('Export Something');
	};
	return (
		<a className={`button export-button ${type} ${size}${specialClasses}`} onClick={handleClick}>
			{iconOne !== null &&
				<Icon iconName={iconOne} classes={['icon--left']} />
			}
			<span className='button__text'>{text}</span>
			{iconTwo !== null &&
				<Icon iconName={iconTwo} classes={['icon--right']} />
			}
		</a>
	);
};

ExportButton.defaultProps = {
	type: 'pill',
	classes: null,
	iconOne: null,
	iconTwo: null,
	size: 'medium',
	text: 'Button Text'
};

ExportButton.propTypes = {
	type: PropTypes.string,
	classes: PropTypes.array,
	iconOne: PropTypes.string,
	iconTwo: PropTypes.string,
	size: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default ExportButton;
