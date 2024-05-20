import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import FleetHealthTableHeader from '../molecules/FleetHealthTableHeader';
import FleetHealthTableRows from '../molecules/FleetHealthTableRows';
import FleetHealthTableFooter from '../molecules/FleetHealthTableFooter';

/**
 * @example
 * <FleetHealthTable
 *    @param {array} fleetHealthAssets - (Fleet Health data for table)
 * />
 */
const FleetHealthTable = ({ fleetHealthAssets }) => {
	return (
		<Table classes={['fleet-health-table']}>
			<div className="table__wrap">
				<FleetHealthTableHeader />
				<FleetHealthTableRows fleetHealthAssets={fleetHealthAssets} />
			</div>
			<FleetHealthTableFooter />
		</Table>
	);
};

FleetHealthTable.propTypes = {
	fleetHealthAssets: PropTypes.array.isRequired,
};

export default FleetHealthTable;
