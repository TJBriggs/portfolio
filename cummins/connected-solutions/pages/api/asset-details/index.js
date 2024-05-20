import { assetDetails } from '../../../data/asset-details';

export default function handler(req, res) {
	res.status(200).json(assetDetails);
}
