import { recipients } from '../../../data/recipients';

export default function handler(req, res) {
	res.status(200).json(recipients);
}
