import { useEffect } from 'react';
import TextInput from '../atoms/TextInput';
import Checkbox from '../atoms/Checkbox';
import Select from '../atoms/Select';
import ButtonGroup from '../molecules/ButtonGroup';
import FleetAccessCheckboxes from '../atoms/FleetAccessCheckboxes';

/**
 * @example
 * <EditUser
 *  @param {boolean} isEditable - (true is default, False disables fields)
 * />
 */
const EditUser = ({ isEditable }) => {
	useEffect(() => {
		const resendCheckboxes = document.querySelectorAll('.resend-checkbox input[type="checkbox"]');

		/* Resend Checkbox */
		resendCheckboxes.forEach((checkbox) => {
			checkbox.addEventListener('click', (event) => {
				const target = event.target;
				const statusFields = target.closest(('.status-fields'));
				const checked = event.target.checked;
				if (checked) {
					statusFields.classList.add('resend--checked');
				} else {
					statusFields.classList.remove('resend--checked');
				}
			});
		});
	}, []);
	return (
		<>
			<div className="field-grid">
				<TextInput
					labelText='First Name'
					isRequired={true}
					currentValue='Jon'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Last Name'
					isRequired={true}
					currentValue='Anderson'
					isEditable={isEditable}
				/>
				<TextInput
					inputType='email'
					labelText='Email Address'
					isRequired={true}
					currentValue='jon.anderson@gmail.com'
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
				<div className="status-fields pending-fields">
					<label>User Status</label>
					<div className="status-fields__box">
						<p className='small'>Pending</p>
						<Checkbox classes={['resend-checkbox']} labelText='Resend Invite Email' isChecked={false} isEditable={isEditable} />
						<Select
							type='underline'
							size='medium'
							labelText='Email Language'
							validationText='Validation Message'
							isEditable={isEditable}
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
								}
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
						<a className='button primary medium toast-link' data-toastid='user-edit-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default EditUser;
