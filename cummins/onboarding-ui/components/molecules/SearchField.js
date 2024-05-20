import Icon from '../atoms/Icon';
import TextInput from '../atoms/TextInput';

/**
 * @example
 * <SearchField />
 */
const SearchField = () => {
	return (
		<form className="search-field" role='search'>
			<Icon iconName='magnifying-glass' />
			<TextInput
				classNames='search-field__search'
				inputType='search'
				placeholderText='Search telematics providers'
				id='search'
			/>
		</form>
	);
};

export default SearchField;
