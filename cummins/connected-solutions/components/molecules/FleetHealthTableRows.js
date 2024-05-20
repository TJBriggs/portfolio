import PropTypes from 'prop-types';
import TableRows from './TableRows';
import FleetHealthTableRow from './FleetHealthTableRow';

/**
 * @example
 * <FleetHealthTableRows
 *    @param {array} fleetHealthAssets - (asset data for table)
 * />
 */
const FleetHealthTableRows = ({ fleetHealthAssets }) => {
	return (
		<TableRows>
			{fleetHealthAssets.map((asset, index) => (
				<FleetHealthTableRow asset={asset} key={index} />
			))}
		</TableRows>
	);
};

FleetHealthTableRows.propTypes = {
	fleetHealthAssets: PropTypes.array.isRequired,
};

export default FleetHealthTableRows;
