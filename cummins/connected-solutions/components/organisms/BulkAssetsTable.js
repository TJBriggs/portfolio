import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import BulkAssetsHeader from '../molecules/BulkAssetsHeader';
import BulkAssetsRows from '../molecules/BulkAssetsRows';

/**
 * @example
 * <BulkAssetsTable
 *    @param {array} bulkAssetData - (asset data for table)
 * />
 */
const BulkAssetsTable = ({ bulkAssetData }) => {
	return (
		<Table classes={['bulk-assets']}>
			<div className="table__wrap">
				<BulkAssetsHeader />
				<BulkAssetsRows bulkAssetData={bulkAssetData} />
			</div>
		</Table>
	);
};

export default BulkAssetsTable;
