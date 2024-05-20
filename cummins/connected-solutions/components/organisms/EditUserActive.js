import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import ButtonGroup from '../molecules/ButtonGroup';
import FleetAccessCheckboxes from '../atoms/FleetAccessCheckboxes';
import SlideToggle from '../atoms/SlideToggle';

/**
 * @example
 * <EditUser
 *  @param {boolean} isEditable - (true is default, False disables fields)
 * />
 */
const EditUser = ({ isEditable }) => {
	return (
		<>
			<div className="field-grid">
				<TextInput
					labelText='First Name'
					isRequired={true}
					currentValue='Kim'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Last Name'
					isRequired={true}
					currentValue='Brooks'
					isEditable={isEditable}
				/>
				<TextInput
					inputType='email'
					labelText='Email Address'
					isRequired={true}
					currentValue='kim.brooks@gmail.com'
					isEditable={isEditable}
				/>
				<Select
					type='underline'
					size='medium'
					labelText='Role'
					validationText='Validation Message'
					isEditable={isEditable}
					options={[
						{
							'value': 'select',
							'label': 'Select Below'
						},
						{
							'value': 'service-technician',
							'label': 'Service Technician'
						},
						{
							'value': 'account-manager',
							'label': 'Account Manager'
						},
						{
							'value': 'maintenance-manager',
							'label': 'Maintenance Manager'
						},
						{
							'value': 'user',
							'label': 'User'
						}
					]}
				/>
				<FleetAccessCheckboxes isEditable={isEditable} />
				<div className="status-fields">
					<label>User Status</label>
					<div className="status-fields__box">
						<SlideToggle
							labelLocation='right'
							isChecked={true}
							changeLabel={true}
							onLabel='Active'
							offLabel='Inactive'
						/>
					</div>
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
						<a className='button primary medium toast-link' data-toastid='user-edit-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default EditUser;
