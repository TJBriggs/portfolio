import Image from 'next/image';
import Icon from '../atoms/Icon';
import Checkbox from '../atoms/Checkbox';
import ExportButton from '../atoms/ExportButton';
import Select from '../atoms/Select';
import ButtonGroup from '../molecules/ButtonGroup';

const FleetHealthFilters = ({ getFilterState, filterState }) => {
	const handleCloseClick = () => {
		getFilterState(!filterState);
	};

	const handleReset = () => {
		console.log('clear filters');
	};

	const handleApplyFilter = () => {
		console.log('apply filters');
		// Close Filters
		getFilterState(!filterState);
	}
	return (
		<>
			<a onClick={handleCloseClick}>
				<Icon classes={['close-filters', 'mobile-only']} iconName='close-thick' />
			</a>
			<div className='fleet-filters'>
				<div className="fleet-filters__checkbox-wrap">
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Immediate Action'
							src={`/icons/multicolor/immediate-action.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Immediate Action' />
					</div>
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Service Within 3 Days'
							src={`/icons/multicolor/service-3days.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Service Within 3 Days' />
					</div>
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Service Within 7 Days'
							src={`/icons/multicolor/service-7days.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Service Within 7 Days' />
					</div>
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Next Planned Maintenance'
							src={`/icons/multicolor/planned-maintenance.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Next PM' />
					</div>
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Inactive'
							src={`/icons/multicolor/inactive.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Inactive' />
					</div>
					<div className="fleet-filters__checkbox checkbox-icon">
						<Image
							alt='Ok'
							src={`/icons/multicolor/ok.svg`}
							layout="responsive"
							width={32}
							height={32}
						/>
						<Checkbox labelText='Ok' />
					</div>
				</div>
				<div className="fleet-filters__select-wrap">
					<Select
						type='secondary'
						size='medium'
						labelText='Asset Name'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Derate Status'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Asset Group'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Engine Model'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Fault Code'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Fault Code Category'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='Engine Serial No.'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
					<Select
						type='secondary'
						size='medium'
						labelText='VIN'
						validationText='Validation Message'
						options={[
							{
								'value': 'all',
								'label': 'All'
							},
							{
								'value': 'option-1',
								'label': 'Option 1'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							},
							{
								'value': 'option-3',
								'label': 'Option 3'
							},
							{
								'value': 'option-4',
								'label': 'Option 4'
							}
						]}
					/>
				</div>
				<ExportButton
					classes={['desktop-only']}
					text='Export'
				/>
				<ButtonGroup classes={['filter-buttons']} gap='medium'>
					<a className='button secondary medium' onClick={handleReset}>Reset</a>
					<a className='button primary medium' onClick={handleApplyFilter}>Apply Filters</a>
				</ButtonGroup>
			</div>
		</>
	);
};

export default FleetHealthFilters;
