import { useEffect, useState } from 'react';
import { server } from '../config/index.js';

// Atoms
import Button from '../components/atoms/Button';
import ButtonDropdown from '../components/atoms/ButtonDropdown';
import ExportButton from '../components/atoms/ExportButton';
import Heading from '../components/atoms/Heading';
import ShowCountDropdown from '../components/atoms/ShowCountDropdown';
import Pagination from '../components/atoms/Pagination';

// Molecules
import AssetsBulkActions from '../components/molecules/AssetsBulkActions';
import ButtonGroup from '../components/molecules/ButtonGroup';
import Modal from '../components/molecules/Modal';
import PageHeader from '../components/molecules/PageHeader';
import RoundedBox from '../components/molecules/RoundedBox';
import SearchField from '../components/molecules/SearchField';
import DialogBox from '../components/atoms/DialogBox';

// Organisms
import AddSingle from '../components/organisms/AddSingle';
import EditSingle from '../components/organisms/EditSingle';
import AddBulk from '../components/organisms/AddBulk';
import AddParent from '../components/organisms/AddParent';
import AddChild from '../components/organisms/AddChild';
import AssetsTable from '../components/organisms/AssetsTable';

// Organisms - Modals & Dialogs
import MoveAssets from '../components/organisms/MoveAssets';
import ModalError from '../components/organisms/ModalError';
import MoveSuccess from '../components/organisms/MoveSuccess';
import AddConnectivityAlert from '../components/organisms/AddConnectivityAlert';
import EditConnectivityAlert from '../components/organisms/EditConnectivityAlert';
import DecommissionAlert from '../components/organisms/DecommissionAlert';
import DecommissionFailed from '../components/organisms/DecommissionFailed';
import DecommissionSuccess from '../components/organisms/DecommissionSuccess';
import RegistrationSuccess from '../components/organisms/RegistrationSuccess';
import BulkRegSuccess from '../components/organisms/BulkRegSuccess';
import BulkRegFailed from '../components/organisms/BulkRegFailed';
import SingleAssetDeleteAlert from '../components/organisms/SingleAssetDeleteAlert';
import BulkAssetDeleteAlert from '../components/organisms/BulkAssetDeleteAlert';

export const getStaticProps = async () => {
	let assets = [];
	let bulkAssetData = [];
	let error = "";
	try {
		const res = await fetch(
			`${server}/api/assets`,
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
		assets = await res.json();

		const bulkAssetRes = await fetch(
			`${server}/api/bulk-asset-data`,
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
		bulkAssetData = await bulkAssetRes.json();
	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			assets,
			bulkAssetData,
			error
		},
		revalidate: 1
	}
}

const ManageAssets = ({ assets, bulkAssetData, error }) => {
	/* Page Level State */
	const [bulkStep, setBulkStep] = useState(1);
	const getBulkStep = (step) => {
		setBulkStep(step);
	}
	const [isEditable, setIsEditable] = useState();
	const getIsEditable = (status) => {
		setIsEditable(status);
	}

	useEffect(() => {
		/* Set editing mode based on window size */
		function checkWidth() {
			if (window.innerWidth < 768) {
				setIsEditable(false);
			} else {
				setIsEditable(true);
			}
		}
		window.addEventListener('resize', checkWidth);
		checkWidth();

		return () => window.removeEventListener('resize', checkWidth);
	}, []);
	return (
		<>
			<PageHeader />
			<RoundedBox
				width='full'
			>
				<Heading
					size='medium'
					text='Manage Assets and Groups'
					tagText='New'
				/>
				<div className='button-row'>
					<ButtonGroup classes={['add-buttons']} gap='medium'>
						<ButtonDropdown
							text='Add Asset'
							options={[
								{
									'value': 'single',
									'label': 'Single',
									'linkType': 'modal',
									'url': 'add-single'
								},
								{
									'value': 'bulk',
									'label': 'Bulk',
									'linkType': 'modal',
									'url': 'add-bulk'
								},
							]}
						/>
						<ButtonDropdown
							text='Add Group'
							options={[
								{
									'value': 'parent',
									'label': 'Add New Parent Group',
									'linkType': 'modal',
									'url': 'add-parent'
								},
								{
									'value': 'child',
									'label': 'Add Child to Existing Parent',
									'linkType': 'modal',
									'url': 'add-child'
								},
							]}
						/>
					</ButtonGroup>
					<ButtonGroup classes={['search-export']} gap='medium'>
						<SearchField placeholderText='Ex. Giga-78 Or Serial Number' />
						<ExportButton
							text='Export'
						/>
					</ButtonGroup>
				</div>
			</RoundedBox>
			<RoundedBox
				classes={['table-filters', 'flush-no-bottom-round']}
				width='full'
			>
				<AssetsBulkActions />
				<div className='pagination-wrap desktop-only'>
					<ShowCountDropdown
						type='underline'
						size='small'
						options={[
							{
								'value': '5',
								'label': '5',
							},
							{
								'value': '10',
								'label': '10',
							},
							{
								'value': '25',
								'label': '25',

							},
							{
								'value': '50',
								'label': '50',
							},
						]}
					/>
					<Pagination pages={5} />
				</div>
			</RoundedBox>
			<AssetsTable assets={assets} />
			<RoundedBox
				width='full'
			>
				<Heading
					size='medium'
					text='Dialog Links'
				/>
				<div className="dialog-button-wrap">
					<Button
						linkType='modal'
						text='Move Success'
						url='move-success'
					/>
					<Button
						linkType='modal'
						text='Add Connectivity Alert'
						url='add-connectivity'
					/>
					<Button
						linkType='modal'
						text='Edit Connectivity Alert'
						url='edit-connectivity'
					/>
					<Button
						linkType='modal'
						text='Registration Success'
						url='registration-success'
					/>
					<Button
						linkType='modal'
						text='Bulk Registration Success'
						url='bulk-success'
					/>
					<Button
						linkType='modal'
						text='Bulk Registration Failed'
						url='bulk-failed'
					/>
					<Button
						linkType='modal'
						text='Decommission Success'
						url='decommission-success'
					/>
					<Button
						linkType='modal'
						text='Decommission Alert'
						url='decommission-alert'
					/>
					<Button
						linkType='modal'
						text='Decommission Failed'
						url='decommission-failed'
					/>
					<Button
						linkType='modal'
						text='Single Asset Delete'
						url='single-asset-delete'
					/>
					<Button
						linkType='modal'
						text='Bulk Asset Delete'
						url='bulk-asset-delete'
					/>
					<Button
						linkType='modal'
						text='Modal Error'
						url='modal-error'
					/>
				</div>
			</RoundedBox>
			<Modal
				classes={['add-single']}
				modalID='add-single'
				modalUpperTitle='Add Asset - Single Registration'
				modalLowerTitle='Asset'
			>
				<AddSingle />
			</Modal>
			<Modal
				classes={bulkStep === 3 ? ['add-bulk', 'modal-wide', 'final-step'] : ['add-bulk']}
				modalID='add-bulk'
				modalUpperTitle='Add Assets - Bulk Registration'
			>
				<AddBulk bulkAssetData={bulkAssetData} getBulkStep={getBulkStep} />
			</Modal>
			<Modal
				classes={['edit-single']}
				modalID='CA-10'
				modalUpperTitle='Edit Asset'
				modalLowerTitle='Asset CA-10'
				getIsEditable={getIsEditable}
				isEditable={isEditable}
			>
				<EditSingle isEditable={isEditable} />
			</Modal>
			<Modal
				classes={['add-parent']}
				modalID='add-parent'
				modalUpperTitle='Add New Parent Group'
			>
				<AddParent />
			</Modal>
			<Modal
				classes={['add-child']}
				modalID='add-child'
				modalUpperTitle='Add New Child Group'
			>
				<AddChild />
			</Modal>
			<Modal
				classes={['move-assets']}
				modalID='move-assets'
				modalUpperTitle='Assign Asset to Group'
			>
				<MoveAssets />
			</Modal>
			<Modal
				classes={['modal-error']} // Modifier class of modal-error required for styling purposes
				modalID='modal-error'
				modalUpperTitle='Error Message - Invalid Characters'
			>
				<ModalError />
			</Modal>
			<DialogBox modalID='move-success'>
				<MoveSuccess />
			</DialogBox>
			<DialogBox modalID='add-connectivity'>
				<AddConnectivityAlert />
			</DialogBox>
			<DialogBox modalID='edit-connectivity'>
				<EditConnectivityAlert />
			</DialogBox>
			<DialogBox modalID='registration-success'>
				<RegistrationSuccess />
			</DialogBox>
			<DialogBox modalID='bulk-success'>
				<BulkRegSuccess />
			</DialogBox>
			<DialogBox modalID='bulk-failed' classes={['dialog-box--large']}>
				<BulkRegFailed />
			</DialogBox>
			<DialogBox modalID='decommission-success'>
				<DecommissionSuccess />
			</DialogBox>
			<DialogBox modalID='decommission-alert'>
				<DecommissionAlert />
			</DialogBox>
			<DialogBox modalID='decommission-failed'>
				<DecommissionFailed />
			</DialogBox>
			<DialogBox modalID='single-asset-delete'>
				<SingleAssetDeleteAlert />
			</DialogBox>
			<DialogBox modalID='bulk-asset-delete'>
				<BulkAssetDeleteAlert />
			</DialogBox>
		</>
	);
};

export default ManageAssets;
