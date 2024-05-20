import { userData } from '../../../data/user-data';

export default function handler(req, res) {
	res.status(200).json(userData);
}
