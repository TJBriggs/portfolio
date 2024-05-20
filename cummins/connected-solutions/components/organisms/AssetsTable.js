import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import AssetTableHeader from '../molecules/AssetTableHeader';
import AssetTableRows from '../molecules/AssetTableRows';
import AssetTableFooter from '../molecules/AssetTableFooter';

/**
 * @example
 * <AssetsTable
 *    @param {array} assets - (asset data for table)
 * />
 */
const AssetsTable = ({ assets }) => {
	return (
		<Table classes={['assets-table']}>
			<div className="table__wrap">
				<AssetTableHeader />
				<AssetTableRows assets={assets} />
			</div>
			<AssetTableFooter />
		</Table>
	);
};

AssetsTable.propTypes = {
	assets: PropTypes.array.isRequired,
};

export default AssetsTable;
