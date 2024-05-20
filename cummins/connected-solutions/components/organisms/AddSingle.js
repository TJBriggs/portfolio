import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import Accordion from '../atoms/Accordion';
import AccordionGroup from '../molecules/AccordionGroup';
import ButtonGroup from '../molecules/ButtonGroup';

/**
 * @example
 * <AddSingle />
 */
const AddSingle = () => {
	return (
		<>
			<div className="field-grid">
				<TextInput
					labelText='Asset ID'
					isRequired={true}
				/>
				<TextInput
					labelText='Asset Serial #'
				/>
				<TextInput
					labelText='Asset Description'
				/>
				<TextInput
					labelText='Asset Make'
				/>
				<TextInput
					labelText='Asset Control Model'
				/>
				<TextInput
					labelText='Asset Model'
				/>
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
			</div>
			<AccordionGroup
				groupHeading='Connectivity Device'
				addMoreText='Add Another Connectivity Device'
			>
				<Accordion
					toggleText='Enter Connectivity Device Below'
					isExpanded={true}
				>
					<div className="field-grid connectivity-fields">
						<TextInput
							labelText='Connectivity Provider'
							isRequired={true}
						/>
						<TextInput
							labelText='Device ID'
							isRequired={true}
						/>
						<TextInput
							labelText='Model'
						/>
						<TextInput
							labelText='Serial Number'
						/>
						<TextInput
							labelText='Device Firmware Version'
						/>
						<TextInput
							labelText='Device Software Version'
						/>
					</div>
				</Accordion>
			</AccordionGroup>
			<AccordionGroup
				addMoreText='Add Another Component'
				groupHeading='Component'
			>
				<Accordion
					toggleText='Enter Component Below'
					isExpanded={true}
				>
					<div className="field-grid component-fields">
						<TextInput
							labelText='Component Serial Number'
							isRequired={true}
						/>
						<TextInput
							labelText='Service Model Name'
						/>
						<TextInput
							labelText='Component Make'
						/>
						<TextInput
							labelText='Calibration ID'
						/>
						<TextInput
							labelText='Torque'
						/>
						<TextInput
							labelText='Horse Power'
						/>
						<TextInput
							labelText='Fuel Rating'
						/>
						<TextInput
							labelText='SC Option'
						/>
						<TextInput
							labelText='DO Option'
						/>
					</div>
				</Accordion>
			</AccordionGroup>
			<div className='modal-buttons'>
				<ButtonGroup
					gap='medium'
					justification='space-between'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<p className='modal-button__warning'>Must add at least one Connectivity Device and Component</p>
						<a className='button primary medium disabled'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default AddSingle;
