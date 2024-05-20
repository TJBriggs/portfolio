import PropTypes from 'prop-types';
import TextInput from '../atoms/TextInput';
import PostFieldButton from '../atoms/PostFieldButton';

/**
 * @example
 * <SearchField
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} size - (large is default, medium, small)
 * @param {string} placeholderText - (Text that appears in the search field)
 * />
 */
const SearchField = ({ classes, size, placeholderText }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`search-field${specialClasses}`}>
			<TextInput
				inputType='search'
				type='secondary'
				size={size}
				placeholderText={placeholderText}
			/>
			<PostFieldButton
				text='Search'
				size={size}
				icon='magnifying-glass'
			/>
		</div>
	);
};
SearchField.defaultProps = {
	classes: null,
	size: 'large',
	placeholderText: 'Search'
};

SearchField.propTypes = {
	classes: PropTypes.array,
	size: PropTypes.string,
	placeholderText: PropTypes.string
};

export default SearchField;
