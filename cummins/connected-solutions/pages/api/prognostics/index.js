import { prognostics } from '../../../data/prognostics';

export default function handler(req, res) {
	res.status(200).json(prognostics);
}
