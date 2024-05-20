import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import Checkbox from '../atoms/Checkbox';
import ButtonGroup from '../molecules/ButtonGroup';
import FleetAccessCheckboxes from '../atoms/FleetAccessCheckboxes';

/**
 * @example
 * <AddRecipient />
 */
const AddRecipient = () => {
	return (
		<>
			<div className="field-flex">
				<TextInput
					labelText='Email Address'
					inputType='email'
					isRequired={true}
				/>
				<Select
					type='underline'
					size='medium'
					labelText='Work Area'
					validationText='Validation Message'
					options={[
						{
							'value': 'select',
							'label': 'Select Below'
						},
						{
							'value': 'mgmt-operations',
							'label': 'Fleet Management & Operations'
						},
						{
							'value': 'maintenance',
							'label': 'Maintenance'
						},
						{
							'value': 'fleet-analytics',
							'label': 'Fleet Analytics'
						},
						{
							'value': 'owner-operator',
							'label': 'Owner Operator'
						},
						{
							'value': 'dealer-distributor',
							'label': 'Dealer/Distributor'
						},
						{
							'value': 'cummins-represenative',
							'label': 'Cummins Representative'
						},
						{
							'value': 'other',
							'label': 'Other'
						}
					]}
				/>
				<Select
					type='underline'
					size='medium'
					labelText='Language'
					validationText='Validation Message'
					options={[
						{
							'value': 'select',
							'label': 'Select Below'
						},
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
				<Select
					type='underline'
					size='medium'
					labelText='Time Zone'
					validationText='Validation Message'
					options={[
						{
							'value': 'select',
							'label': 'Select Below'
						},
						{
							'value': 'est-new-york',
							'label': 'EST (+3 UTC) New York'
						},
						{
							'value': 'cst-chicago',
							'label': 'CST (+4 UTC) Chicago'
						},
						{
							'value': 'mst-denver',
							'label': 'MST (+4 UTC) Denver'
						},
						{
							'value': 'pst-san-diego',
							'label': 'PST (+5 UTC) San Diego'
						}
					]}
				/>
				<FleetAccessCheckboxes labelText='Asset Groups' />
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
						<a className='button primary medium toast-link' data-toastid='recipient-add-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default AddRecipient;
