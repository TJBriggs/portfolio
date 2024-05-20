import TextInput from '../atoms/TextInput';
import AddressAccordion from '../molecules/AddressAccordion';
import ButtonGroup from '../molecules/ButtonGroup';
import ButtonDropdown from '../atoms/ButtonDropdown';

/**
 * @example
 * <AddParent />
 */
const AddParent = () => {
	return (
		<>
			<p className='modal-children__intro-text'>Please enter the details for your new Parent Group</p>
			<div className="field-wrap">
				<TextInput
					labelText='Parent Group'
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

export default AddParent;
