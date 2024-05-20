import PropTypes from 'prop-types';
import TextInput from '../atoms/TextInput';
import PreFieldButtonDropdown from '../atoms/PreFieldButtonDropdown';
import PostFieldButton from '../atoms/PostFieldButton';

/**
 * @example
 * <ComplexSearchField
 * @param {array} classes - (additional classes for styling purposes)
 * @param {string} size - (large is default, medium, small)
 * @param {string} placeholderText - (Text that appears in the search field)
 * />
 */
const ComplexSearchField = ({ classes, size, placeholderText }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`search-field complex-search${specialClasses}`}>
			<PreFieldButtonDropdown
				classes={['modal-button', 'open-new']}
				type='secondary'
				text='Asset'
				size={size}
				options={[
					{
						'value': 'option-1',
						'label': 'Option 1',
						'linkType': 'trigger',
					},
					{
						'value': 'option-2',
						'label': 'Option 2',
						'linkType': 'trigger',
					},
					{
						'value': 'option-3',
						'label': 'Option 3',
						'linkType': 'trigger',
					}
				]}
			/>
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
ComplexSearchField.defaultProps = {
	classes: null,
	size: 'large',
	placeholderText: 'Search'
};

ComplexSearchField.propTypes = {
	classes: PropTypes.array,
	size: PropTypes.string,
	placeholderText: PropTypes.string
};

export default ComplexSearchField;
