import SortByDropdown from '../atoms/SortByDropdown';
import ButtonDropdown from '../atoms/ButtonDropdown';
import Checkbox from '../atoms/Checkbox';

const UserBulkActions = () => {
	return (
		<div className='bulk-actions'>
			<Checkbox
				classes={['select-all']}
				labelText='Select All'
				labelMobileOnly={true}
			/>
			<ButtonDropdown
				classes={['user-actions']}
				text='Bulk Actions'
				type='underline'
				size='small'
				options={[
					{
						'value': 'bulk-user-activate',
						'label': 'Activate Users',
						'linkType': 'modal',
						'url': 'bulk-activation'
					},
					{
						'value': 'bulk-user-deactivate',
						'label': 'Deactivate Users',
						'linkType': 'modal',
						'url': 'bulk-deactivation'
					},
					{
						'value': 'bulk-user-role',
						'label': 'Edit User Role',
						'linkType': 'modal',
						'url': 'bulk-user-role'
					},
					{
						'value': 'fleet-access',
						'label': 'Edit Group Access',
						'linkType': 'modal',
						'url': 'fleet-access'
					}
				]}
			/>
			<div className='show-inactive'>
				<Checkbox
					classes={['show-inactive__checkbox']}
					labelText='Show Inactive Users'
				/>
			</div>
			<SortByDropdown
				classes={['user-sort-by']}
				text='Sort by Email:'
				type='underline'
				size='small'
				initialLabel='A-Z'
				options={[
					{
						'value': 'a-z',
						'label': 'A-Z',
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

export default UserBulkActions;
