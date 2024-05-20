import { trimShield } from '../../../data/trim-shield';

export default function handler(req, res) {
	res.status(200).json(trimShield);
}
