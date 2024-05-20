import { assets } from '../../../data/assets';

export default function handler(req, res) {
	res.status(200).json(assets);
}
