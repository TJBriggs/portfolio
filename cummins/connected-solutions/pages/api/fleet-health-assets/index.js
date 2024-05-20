import { fleetHealthAssets } from '../../../data/fleet-health-assets';

export default function handler(req, res) {
	res.status(200).json(fleetHealthAssets);
}
