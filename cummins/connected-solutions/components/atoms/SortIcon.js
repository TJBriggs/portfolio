import Icon from '../atoms/Icon';

/**
 * @example
 * <SortIcon * />
 */
const SortIcon = () => {
	return (
		<span className={`sort-icon`}>
			<Icon iconName='sort-default' />
			<Icon iconName='sort-asc' />
			<Icon iconName='sort-desc' />
		</span>
	);
};

export default SortIcon;
