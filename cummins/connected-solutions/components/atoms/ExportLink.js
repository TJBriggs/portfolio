import Icon from './Icon';

/**
 * @example
 * <ExportLink />
 */
const ExportLink = () => {
	const handleClick = () => {
		console.log('Export Something');
	};
	return (
		<a role="link" onClick={handleClick}>
			<Icon iconName='download' />
		</a>
	);
};

export default ExportLink;
