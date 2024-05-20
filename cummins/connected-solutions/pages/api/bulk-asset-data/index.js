import { bulkAssetData } from '../../../data/bulk-asset-data';

export default function handler(req, res) {
	res.status(200).json(bulkAssetData);
}
