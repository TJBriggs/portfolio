import PropTypes from 'prop-types';
import Tag from './Tag';

/**
 * @example
 * <Heading
 *    @param {string} level - (h1 - h4, is required, default is h2)
 *    @param {string} text - (heading text is required)
 *    @param {func} tagText - (optional text displayed in red tag)
 *    @param {array} classNames - (additional classes for styling purposes)
 * />
 */
const Heading = ({ level, text, tagText, classNames }) => {

	switch (level) {
		case 'h1':
			return (
				<h1 className={classNames}>
					{text}
					{tagText &&
						<Tag text={tagText} />
					}
				</h1>
			);
			break;
		case 'h2':
			return (
				<h2 className={classNames}>
					{text}
					{tagText &&
						<Tag text={tagText} />
					}
				</h2>
			);
			break;
		case 'h3':
			return (
				<h3 className={classNames}>
					{text}
					{tagText &&
						<Tag text={tagText} />
					}
				</h3>
			);
			break;
		case 'h4':
			return (
				<h4 className={classNames}>
					{text}
					{tagText &&
						<Tag text={tagText} />
					}
				</h4>
			);
			break;
		default:
			return (
				<h2 className={classNames}>
					{text}
					{tagText &&
						<Tag text={tagText} />
					}
				</h2>
			);
	}
};

Heading.defaultProps = {
	level: 'h2',
	text: 'Heading Text',
};

Heading.propTypes = {
	classNames: PropTypes.string,
	level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
	text: PropTypes.string.isRequired,
	tagText: PropTypes.string,
};

export default Heading;
