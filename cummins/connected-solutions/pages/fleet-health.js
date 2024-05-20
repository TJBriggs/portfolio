import { useEffect, useState } from 'react';
import { server } from '../config/index.js';
// Atoms
import Heading from '../components/atoms/Heading';
import FeedbackButton from '../components/atoms/FeedbackButton';

// Molecules
import RoundedBox from '../components/molecules/RoundedBox';
import FleetHealthHeader from '../components/molecules/FleetHealthHeader';
import FleetHealthFilters from '../components/molecules/FleetHealthFilters';
import FleetActiveFilters from '../components/molecules/FleetActiveFilters';
import FleetSortBy from '../components/molecules/FleetSortBy';
import Modal from '../components/molecules/Modal';
import DialogBox from '../components/atoms/DialogBox';

// Organisms
import FleetHealthTable from '../components/organisms/FleetHealthTable';

// Organisms - Modals & Dialogs
import FeedbackModal from '../components/organisms/FeedbackModal';
import FeedbackSuccess from '../components/organisms/FeedbackSuccess';
import FeedbackError from '../components/organisms/FeedbackError';

export const getStaticProps = async () => {
	let fleetHealthAssets = [];
	let error = "";
	try {
		const res = await fetch(
			`${server}/api/fleet-health-assets`,
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
		fleetHealthAssets = await res.json();
	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			fleetHealthAssets,
			error
		},
		revalidate: 15
	}
}

const Dashboard = ({ fleetHealthAssets, error }) => {
	console.log(error);
	/* Page Level State */
	const [filterState, setFilterState] = useState(false);
	const getFilterState = (state) => {
		setFilterState(state);
	}

	useEffect(() => {
		const anchorlinks = document.querySelectorAll('a[href^="#"]');

		/* Anchor Links */
		anchorlinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.classList.contains('horizontal-scroll')) {
					const hashval = link.getAttribute('href');
					const target = document.getElementById(hashval.substring(1));
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
					history.pushState(null, null, hashval);
					e.preventDefault();
				} else {
					const hashval = link.parentNode.getAttribute('href');
					const target = document.getElementById(hashval.substring(1));
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'end',
						inline: 'start'
					});
					history.pushState(null, null, hashval);
					e.preventDefault();
				}
			});
		});
	}, []);
	return (
		<>
			<FeedbackButton />
			<FleetHealthHeader />
			<RoundedBox
				classes={['fleet-filters-box', filterState === true ? 'filters--open' : 'filters--closed']}
				width='full'
			>
				<Heading
					level='h2'
					text='Filters'
				/>
				<FleetHealthFilters filterState={filterState} getFilterState={getFilterState} />
			</RoundedBox>
			<FleetActiveFilters filterState={filterState} getFilterState={getFilterState} />
			<FleetSortBy />
			<FleetHealthTable fleetHealthAssets={fleetHealthAssets} />
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
