import { server } from '../config/index.js';

// Molecules
import AssetDetailsHeader from '../components/molecules/AssetDetailsHeader';

// Organisms
import DetailsRoundedBox from '../components/organisms/DetailsRoundedBox';
import DetailsTabs from '../components/organisms/DetailsTabs';

export const getStaticProps = async () => {
	let assetDetails = [];
	let faultInsights = [];
	let prognostics = [];
	let error = "";
	try {
		const detailsRes = await fetch(
			`${server}/api/asset-details`,
			{
				method: "GET",
				headers: {
					// update with your user-agent
					"User-Agent":
						"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
					Accept: "application/json; charset=UTF-8",
				},
			}
		);
		assetDetails = await detailsRes.json();

		const insightsRes = await fetch(
			`${server}/api/fault-insights`,
			{
				method: "GET",
				headers: {
					// update with your user-agent
					"User-Agent":
						"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
					Accept: "application/json; charset=UTF-8",
				},
			}
		);
		faultInsights = await insightsRes.json();

		const prognosticsRes = await fetch(
			`${server}/api/prognostics`,
			{
				method: "GET",
				headers: {
					// update with your user-agent
					"User-Agent":
						"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
					Accept: "application/json; charset=UTF-8",
				},
			}
		);
		prognostics = await prognosticsRes.json();
	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			assetDetails,
			faultInsights,
			prognostics,
			error
		},
		revalidate: 1
	}
}
const AssetDetails = ({ assetDetails, faultInsights, prognostics, error }) => {
	return (
		<>
			<AssetDetailsHeader assetName='Giga-78' />
			<DetailsRoundedBox assetName='Giga-78' assetDetails={assetDetails} />
			<DetailsTabs faultInsights={faultInsights} prognostics={prognostics} />
		</>
	);
};

export default AssetDetails;
