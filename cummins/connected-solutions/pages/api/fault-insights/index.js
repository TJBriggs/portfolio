import { faultInsights } from '../../../data/fault-insights';

export default function handler(req, res) {
	res.status(200).json(faultInsights);
}
