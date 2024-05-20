import PropTypes from 'prop-types';
import TableRows from '../molecules/TableRows';
import AssetTableRow from '../molecules/AssetTableRow';

/**
 * @example
 * <AssetsTableRows
 *    @param {array} assets - (asset data for table)
 * />
 */
const AssetTableRows = ({ assets }) => {
	return (
		<TableRows>
			{assets.map((asset, index) => (
				<AssetTableRow asset={asset} key={index} />
			))}
		</TableRows>
	);
};

AssetTableRows.propTypes = {
	assets: PropTypes.array.isRequired,
};

export default AssetTableRows;
