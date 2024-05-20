import React, { useLayoutEffect, useState } from 'react';
import Icon from '../atoms/Icon';
import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import IconDropdown from '../atoms/IconDropdown';
import Accordion from '../atoms/Accordion';
import AccordionGroup from '../molecules/AccordionGroup';
import ButtonGroup from '../molecules/ButtonGroup';

/**
 * @example
 * <EditSingle />
 */
const EditSingle = ({ isEditable }) => {
	return (
		<>
			<div className="field-grid">
				<IconDropdown
					text='Select Asset Type'
					labelText='Asset Type'
					isEditable={isEditable}
					options={[
						{
							'value': 'asset-type-1',
							'label': 'Asset Name',
							'icon': 'truck'
						},
						{
							'value': 'asset-type-2',
							'label': 'Asset Name',
							'icon': 'engine'
						},
						{
							'value': 'asset-type-3',
							'label': 'Asset Name',
							'icon': 'transmission'
						}
					]}
				/>
				<TextInput
					labelText='Asset ID'
					isRequired={true}
					currentValue='CA-10'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Asset Serial #'
					currentValue='6BDYD49X4KJ225122'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Asset Description'
					currentValue='Transport Truck'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Asset Make'
					currentValue='SuperTruck'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Asset Control Model'
					currentValue='3309044'
					isEditable={isEditable}
				/>
				<TextInput
					labelText='Asset Model'
					currentValue='345808-30'
					isEditable={isEditable}
				/>
				<Select
					type='underline'
					size='medium'
					labelText='Asset Group'
					validationText='Validation Message'
					isEditable={isEditable}
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
					toggleText='TMI Device - TD-BOP-2000-A'
					isExpanded={true}
					hasTrashIcon={true}
				>
					<div className="field-grid connectivity-fields">
						<TextInput
							labelText='Connectivity Provider'
							isRequired={true}
							currentValue='TMI'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Device ID'
							isRequired={true}
							currentValue='TD-BOP-2000-A'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Model'
							currentValue='131134-1'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Serial Number'
							currentValue='349589-458590'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Device Firmware Version'
							currentValue='5.6.2'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Device Software Version'
							currentValue='1.2.3'
							isEditable={isEditable}
						/>
					</div>
				</Accordion>
			</AccordionGroup>
			<AccordionGroup
				addMoreText='Add Another Component'
				groupHeading='Component'
			>
				<Accordion
					toggleText='Engine - 0980289'
					isExpanded={true}
					hasTrashIcon={true}
				>
					<div className="field-grid component-fields">
						<IconDropdown
							text='Select Asset Type'
							labelText='Asset Type'
							isEditable={isEditable}
							options={[
								{
									'value': 'asset-type-1',
									'label': 'Asset Name',
									'icon': 'truck'
								},
								{
									'value': 'asset-type-2',
									'label': 'Asset Name',
									'icon': 'engine'
								},
								{
									'value': 'asset-type-3',
									'label': 'Asset Name',
									'icon': 'transmission'
								}
							]}
						/>
						<TextInput
							labelText='Component Serial Number'
							isRequired={true}
							currentValue='0980289'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Service Model Name'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Component Make'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Calibration ID'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Torque'
							currentValue='2700'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Horse Power'
							currentValue='13111'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Fuel Rating'
							currentValue='FR6794'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='SC Option'
							currentValue='3456546'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='DO Option'
							currentValue='FR0670400'
							isEditable={isEditable}
						/>
					</div>
				</Accordion>
				<Accordion
					toggleText='Transmission - 2498509'
					isExpanded={false}
					hasTrashIcon={true}
				>
					<div className="field-grid component-fields">
						<IconDropdown
							text='Select Asset Type'
							labelText='Asset Type'
							isEditable={isEditable}
							options={[
								{
									'value': 'asset-type-1',
									'label': 'Asset Name',
									'icon': 'truck'
								},
								{
									'value': 'asset-type-2',
									'label': 'Asset Name',
									'icon': 'engine'
								},
								{
									'value': 'asset-type-3',
									'label': 'Asset Name',
									'icon': 'transmission'
								}
							]}
						/>
						<TextInput
							labelText='Component Serial Number'
							isRequired={true}
							currentValue='0980289'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Service Model Name'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Component Make'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Calibration ID'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Torque'
							currentValue='2700'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Horse Power'
							currentValue='13111'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Fuel Rating'
							currentValue='FR6794'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='SC Option'
							currentValue='3456546'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='DO Option'
							currentValue='FR0670400'
							isEditable={isEditable}
						/>
					</div>
				</Accordion>
				<Accordion
					toggleText='Oil Filter - 7798430'
					isExpanded={false}
					hasTrashIcon={true}
				>
					<div className="field-grid component-fields">
						<IconDropdown
							text='Select Asset Type'
							labelText='Asset Type'
							isEditable={isEditable}
							options={[
								{
									'value': 'asset-type-1',
									'label': 'Asset Name',
									'icon': 'truck'
								},
								{
									'value': 'asset-type-2',
									'label': 'Asset Name',
									'icon': 'engine'
								},
								{
									'value': 'asset-type-3',
									'label': 'Asset Name',
									'icon': 'transmission'
								}
							]}
						/>
						<TextInput
							labelText='Component Serial Number'
							isRequired={true}
							currentValue='0980289'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Service Model Name'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Component Make'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Calibration ID'
							currentValue='345808-30'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Torque'
							currentValue='2700'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Horse Power'
							currentValue='13111'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='Fuel Rating'
							currentValue='FR6794'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='SC Option'
							currentValue='3456546'
							isEditable={isEditable}
						/>
						<TextInput
							labelText='DO Option'
							currentValue='FR0670400'
							isEditable={isEditable}
						/>
					</div>
				</Accordion>
			</AccordionGroup>
			<div className='modal-buttons centered-warning'>
				<p className='modal-buttons__warning small'>
					<Icon iconName='edit-underline' />
					No changes made so far
				</p>
				<ButtonGroup
					gap='large'
					justification='space-between'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium disabled'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default EditSingle;
