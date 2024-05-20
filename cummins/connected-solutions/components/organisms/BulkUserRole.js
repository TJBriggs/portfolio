import ButtonGroup from '../molecules/ButtonGroup';
import Select from '../atoms/Select';


/**
 * @example
 * <BulkUserRole />
 */
const BulkUserRole = () => {
	return (
		<>
			<p className='modal-children__intro-text'>(<span>x</span>) selected users - <span className='warning-text'>Warning this will update the role of these users.</span></p>
			<div className="status-fields">
				<div className="status-fields__box">
					<Select
						type='underline'
						size='medium'
						labelText='User Role'
						validationText='Validation Message'
						options={[
							{
								'value': 'maintenance-manager',
								'label': 'Maintenance Manager'
							},
							{
								'value': 'account-manager',
								'label': 'Account Manager'
							},
							{
								'value': 'service-technician',
								'label': 'Service Technician'
							},
							{
								'value': 'operator',
								'label': 'Operator'
							},
							{
								'value': 'user',
								'label': 'User'
							}
						]}
					/>
				</div>
			</div>
			<div className='modal-buttons'>
				<ButtonGroup
					gap='medium'
					justification='space-between'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium toast-link' data-toastid='bulk-role-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default BulkUserRole;
