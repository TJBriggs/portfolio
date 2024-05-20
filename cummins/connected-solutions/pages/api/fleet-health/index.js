import { fleetHealth } from '../../../data/fleet-health';

export default function handler(req, res) {
	res.status(200).json(fleetHealth);
}
