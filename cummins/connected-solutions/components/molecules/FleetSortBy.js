import Heading from '../atoms/Heading';
import SortByDropdown from '../atoms/SortByDropdown';

const FleetSortBy = () => {
	return (
		<div className="sort-header mobile-only">
			<div className="sort-header__default-inner">
				<Heading
					size='small'
					text='20 Results Found'
				/>
				<SortByDropdown
					classes={['fleet-sort-by']}
					text='Sort by:'
					type='underline'
					size='small'
					initialLabel='Severity'
					options={[
						{
							'value': 'severity',
							'label': 'Severity'
						},
						{
							'value': 'asset-group',
							'label': 'Asset Group'
						},
						{
							'value': 'primary-fault-code',
							'label': 'Primary Fault Code'
						},
						{
							'value': 'fault-occurence',
							'label': 'Failure Occurence'
						},
						{
							'value': 'spn',
							'label': 'SPN'
						},
						{
							'value': 'fmi',
							'label': 'FMI'
						},
						{
							'value': 'fault-description',
							'label': 'Failure Description'
						},
						{
							'value': 'recommended-action',
							'label': 'Recommended Action'
						},
						{
							'value': 'derate-notice',
							'label': 'Derate Notice'
						},
						{
							'value': 'root-cause',
							'label': 'Root Cause'
						},
						{
							'value': 'related-fault-codes',
							'label': 'Related Fault Codes'
						},
						{
							'value': 'vin',
							'label': 'VIN'
						},
						{
							'value': 'ein',
							'label': 'EIN'
						}
					]}
				/>
			</div>
		</div>
	);
};

export default FleetSortBy;
