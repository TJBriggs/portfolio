import { trimStatus } from '../../../data/trim-status';

export default function handler(req, res) {
	res.status(200).json(trimStatus);
}
