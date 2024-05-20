import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import AddressAccordion from '../molecules/AddressAccordion';
import ButtonGroup from '../molecules/ButtonGroup';
import ButtonDropdown from '../atoms/ButtonDropdown';

/**
 * @example
 * <AddChild />
 */
const AddChild = () => {
	return (
		<>
			<p className='modal-children__intro-text'>Please enter the details for your new Child Group</p>
			<div className="field-wrap">
				<Select
					type='underline'
					size='medium'
					labelText='Asset Group (Parent | Child)'
					validationText='Validation Message'
					options={[
						{
							'value': 'unassigned',
							'label': 'Unassigned'
						},
						{
							'value': 'us-northeast',
							'label': 'US | Northeast'
						},
						{
							'value': 'us-northwest',
							'label': 'US | Northwest'
						},
						{
							'value': 'us-southwest',
							'label': 'US | SouthWest'
						},
						{
							'value': 'us-midwest',
							'label': 'US | MidWest'
						},
						{
							'value': 'canada',
							'label': 'Canada | South'
						},
					]}
				/>
				<TextInput
					labelText='New Child Group'
					isRequired={true}
				/>
				<TextInput
					labelText='Description'
				/>
				<AddressAccordion />
			</div>
			<div className='modal-buttons'>
				<ButtonGroup
					gap='small'
					justification='space-between'
				>
					<ButtonDropdown
						classes={['modal-button', 'open-new']}
						text='Save and add another group'
						options={[
							{
								'value': 'parent',
								'label': 'Add New Parent Group',
								'linkType': 'modal',
								'url': 'add-parent'
							},
							{
								'value': 'child',
								'label': 'Add Child to Existing Parent',
								'linkType': 'modal',
								'url': 'add-child'
							},
						]}
					/>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default AddChild;
