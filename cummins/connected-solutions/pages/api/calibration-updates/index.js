import { calibrationUpdates } from '../../../data/calibration-updates';

export default function handler(req, res) {
	res.status(200).json(calibrationUpdates);
}
