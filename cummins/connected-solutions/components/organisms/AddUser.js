import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import ButtonGroup from '../molecules/ButtonGroup';
import FleetAccessCheckboxes from '../atoms/FleetAccessCheckboxes';

/**
 * @example
 * <AddUser />
 */
const AddUser = () => {
	return (
		<>
			<div className="field-flex">
				<TextInput
					labelText='First Name'
					isRequired={true}
				/>
				<TextInput
					labelText='Last Name'
					isRequired={true}
				/>
				<TextInput
					inputType='email'
					labelText='Email Address'
					isRequired={true}
				/>
				<Select
					type='underline'
					size='medium'
					labelText='Role'
					validationText='Validation Message'
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
				<FleetAccessCheckboxes />
				<div className="status-fields">
					<label>Notification Email Language</label>
					<div className="status-fields__box">
						<Select
							type='underline'
							size='medium'
							validationText='Validation Message'
							options={[
								{
									'value': 'english',
									'label': 'English'
								},
								{
									'value': 'french',
									'label': 'French'
								},
								{
									'value': 'spanish',
									'label': 'Spanish'
								},

							]}
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
						<a className='button primary medium toast-link' data-toastid='user-add-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default AddUser;
