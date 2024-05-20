import TableRows from './TableRows';
import BulkAssetsRow from '../molecules/BulkAssetsRow';

/**
 * @example
 * <BulkAssetsRows
 *    @param {array} bulkAssetData - (asset data for table)
 * />
 */
const BulkAssetsRows = ({ bulkAssetData }) => {
	return (
		<TableRows>
			{bulkAssetData.map((asset, index) => (
				<BulkAssetsRow asset={asset} index={index} key={index} />
			))}
		</TableRows>
	);
};

export default BulkAssetsRows;
