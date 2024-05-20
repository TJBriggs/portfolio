import SortByDropdown from '../atoms/SortByDropdown';
import ButtonDropdown from '../atoms/ButtonDropdown';
import Checkbox from '../atoms/Checkbox';

const AssetsBulkActions = () => {
	return (
		<div className='bulk-actions'>
			<Checkbox
				labelText='Select All'
				labelMobileOnly={true}
			/>
			<ButtonDropdown
				text='Bulk Actions'
				type='underline'
				size='small'
				options={[
					{
						'value': 'move',
						'label': 'Move Assets',
						'linkType': 'modal',
						'url': 'move-assets'
					},
					{
						'value': 'delete',
						'label': 'Delete Assets',
						'linkType': 'modal',
						'url': 'bulk-asset-delete'
					},
				]}
			/>
			<SortByDropdown
				classes={['mobile-only']}
				text='Sort by AssetID:'
				type='underline'
				size='small'
				initialLabel='A-Z'
				options={[
					{
						'value': 'a-z',
						'label': 'A-Z'
					},
					{
						'value': 'z-a',
						'label': 'Z-A',
					},
				]}
			/>
		</div>
	);
};

export default AssetsBulkActions;
