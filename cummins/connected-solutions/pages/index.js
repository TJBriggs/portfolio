import { server } from '../config/index.js';

// Atoms
import Button from '../components/atoms/Button';
import AssetMap from '../components/atoms/AssetMap';
import Heading from '../components/atoms/Heading';
import FeedbackButton from '../components/atoms/FeedbackButton';
import DialogBox from '../components/atoms/DialogBox';

// Molecules
import RoundedBox from '../components/molecules/RoundedBox';
import DashboardHeader from '../components/molecules/DashboardHeader';
import Modal from '../components/molecules/Modal';

// Organisms
import PreventechTable from '../components/organisms/PreventechTable';
import PreventechNoPrognostics from '../components/organisms/PreventechNoPrognostics';
import OptitechTable from '../components/organisms/OptitechTable';

// Organisms - Modals & Dialogs
import FeedbackModal from '../components/organisms/FeedbackModal';
import FeedbackSuccess from '../components/organisms/FeedbackSuccess';
import FeedbackError from '../components/organisms/FeedbackError';

export const getStaticProps = async () => {
	let fleetHealth = [];
	let calibrationUpdates = [];
	let trimShield = [];
	let trimStatus = [];
	let error = "";
	try {
		const fleetRes = await fetch(
			`${server}/api/fleet-health`,
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
		fleetHealth = await fleetRes.json();

		const calibrationRes = await fetch(
			`${server}/api/calibration-updates`,
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
		calibrationUpdates = await calibrationRes.json();

		const shieldRes = await fetch(
			`${server}/api/trim-shield`,
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
		trimShield = await shieldRes.json();
		const statusRes = await fetch(
			`${server}/api/trim-status`,
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
		trimStatus = await statusRes.json();
	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			fleetHealth,
			calibrationUpdates,
			trimShield,
			trimStatus,
			error
		},
		revalidate: 15
	}
}

const Dashboard = ({ fleetHealth, calibrationUpdates, trimShield, trimStatus, error }) => {
	return (
		<>
			<FeedbackButton />
			<DashboardHeader />
			<AssetMap />
			<PreventechTable fleetHealth={fleetHealth} />
			<PreventechNoPrognostics fleetHealth={fleetHealth} />
			<OptitechTable calibrationUpdates={calibrationUpdates} trimShield={trimShield} trimStatus={trimStatus} fleetHealth={fleetHealth} />
			<RoundedBox
				classes={['dialog-links']}
				width='full'
			>
				<Heading
					size='medium'
					text='Dialog Links'
				/>
				<div className="dialog-button-wrap">
					<Button
						linkType='modal'
						text='Feedback Success'
						url='feedback-success'
					/>
					<Button
						linkType='modal'
						text='Feedback Error'
						url='feedback-error'
					/>
				</div>
			</RoundedBox>
			<Modal
				classes={['feedback-modal']}
				modalID='feedback-modal'
				modalUpperTitle='Give Feedback'
			>
				<FeedbackModal />
			</Modal>
			<DialogBox modalID='feedback-success'>
				<FeedbackSuccess />
			</DialogBox>
			<DialogBox modalID='feedback-error'>
				<FeedbackError />
			</DialogBox>
		</>
	);
};

export default Dashboard;
