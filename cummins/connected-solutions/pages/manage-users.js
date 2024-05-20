import { useEffect, useState } from 'react';
import { server } from '../config/index.js';

// Atoms
import Button from '../components/atoms/Button';
import ExportButton from '../components/atoms/ExportButton';
import Heading from '../components/atoms/Heading';
import Pagination from '../components/atoms/Pagination';
import Toast from '../components/atoms/Toast';

// Molecules
import ButtonGroup from '../components/molecules/ButtonGroup';
import UsersBulkActions from '../components/molecules/UsersBulkActions';
import Modal from '../components/molecules/Modal';
import PageHeader from '../components/molecules/PageHeader';
import RoundedBox from '../components/molecules/RoundedBox';
import ShowCountDropdown from '../components/atoms/ShowCountDropdown';
import SearchField from '../components/molecules/SearchField';
import DialogBox from '../components/atoms/DialogBox';

// Organisms
import UsersTable from '../components/organisms/UsersTable';
import AddUser from '../components/organisms/AddUser';
import EditUserActive from '../components/organisms/EditUserActive';
import EditUserInactive from '../components/organisms/EditUserInactive';
import EditUserPending from '../components/organisms/EditUserPending';
import BulkFleetAccess from '../components/organisms/BulkFleetAccess';
import BulkUserRole from '../components/organisms/BulkUserRole';

// Organisms - Dialogs
import UserAddSuccess from '../components/organisms/UserAddSuccess';
import UserAddFail from '../components/organisms/UserAddFail';
import UserUpdateSuccess from '../components/organisms/UserUpdateSuccess';
import UserUpdateFail from '../components/organisms/UserUpdateFail';
import UserFleetError from '../components/organisms/UserFleetError';
import BulkUserDeactivationAlert from '../components/organisms/BulkUserDeactivationAlert';
import BulkUserActivationAlert from '../components/organisms/BulkUserActivationAlert';
import SingleUserDeactivationAlert from '../components/organisms/SingleUserDeactivationAlert';
import LanguageSelectAlert from '../components/organisms/LanguageSelectAlert';

export const getStaticProps = async () => {
	let userData = [];
	let error = "";
	try {
		const res = await fetch(
			`${server}/api/user-data`,
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
		userData = await res.json();
	} catch (e) {
		error = e.toString();
	}
	return {
		props: {
			userData,
			error
		},
		revalidate: 1
	}
}

const ManageUsers = ({ userData, error }) => {
	/* Page Level State */
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
					text='Manage Users'
					tagText='New'
				/>
				<div className='button-row'>
					<ButtonGroup classes={['user-buttons']} gap='medium'>
						<Button
							classes={['add-user__button']}
							linkType='modal'
							url="add-user"
							text='Add User'
						/>
						<SearchField placeholderText='Ex. User Name or Email
						Address' />
						<ExportButton text='Export' />
					</ButtonGroup>
				</div>
			</RoundedBox>
			<RoundedBox
				classes={['table-filters', 'flush-no-bottom-round']}
				width='full'
			>
				<div className="bulk-wrap">
					<UsersBulkActions />
				</div>
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
			<UsersTable userData={userData} />
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
						text='Add Success'
						url='add-success'
					/>
					<Button
						linkType='modal'
						text='Add Failure'
						url='add-fail'
					/>
					<Button
						linkType='modal'
						text='Update Success'
						url='update-success'
					/>
					<Button
						linkType='modal'
						text='Update Failure'
						url='update-fail'
					/>
					<Button
						linkType='modal'
						text='Fleet Error'
						url='fleet-error'
					/>
					<Button
						linkType='modal'
						text='Single Deactivation Alert'
						url='single-deactivation'
					/>
					<Button
						linkType='modal'
						text='Bulk Deactivation Alert'
						url='bulk-deactivation'
					/>
				</div>
			</RoundedBox>
			<RoundedBox
				width='full'
			>
				<Heading
					size='medium'
					text='Toast Links'
				/>
				<div className="dialog-button-wrap">
					<Button
						linkType='toast'
						text='Add User Success'
						url='user-add-success'
					/>
					<Button
						linkType='toast'
						text='Add User Error'
						url='user-add-error'
					/>
					<Button
						linkType='toast'
						text='Edit User Success'
						url='user-edit-success'
					/>
					<Button
						linkType='toast'
						text='Edit User Error'
						url='user-edit-error'
					/>
					<Button
						linkType='toast'
						text='Single Deactivate Success'
						url='single-deactivate-success'
					/>
					<Button
						linkType='toast'
						text='Single Deactivate Error'
						url='single-deactivate-error'
					/>
					<Button
						linkType='toast'
						text='Bulk Activate Success'
						url='bulk-activate-success'
					/>
					<Button
						linkType='toast'
						text='Bulk Activate Error'
						url='bulk-activate-error'
					/>
					<Button
						linkType='toast'
						text='Bulk Deactivate Success'
						url='bulk-deactivate-success'
					/>
					<Button
						linkType='toast'
						text='Bulk Deactivate Error'
						url='bulk-deactivate-error'
					/>
					<Button
						linkType='toast'
						text='Bulk Access Success'
						url='bulk-access-success'
					/>
					<Button
						linkType='toast'
						text='Bulk Access Error'
						url='bulk-access-error'
					/>
					<Button
						linkType='toast'
						text='Bulk Role Success'
						url='bulk-role-success'
					/>
					<Button
						linkType='toast'
						text='Bulk Role Error'
						url='bulk-role-error'
					/>
					<Button
						linkType='toast'
						text='Invite Sent Again'
						url='invite-sent-success'
					/>
					<Button
						linkType='toast'
						text='User Reactivated'
						url='user-reactivate-success'
					/>
				</div>
			</RoundedBox>
			<Modal
				classes={['add-user']}
				modalID='add-user'
				modalUpperTitle='Add User'
			>
				<AddUser />
			</Modal>
			<Modal
				classes={['edit-user']}
				modalID='edit-user-active'
				modalUpperTitle='Edit User Active'
				modalLowerTitle='Kim Brooks'
				getIsEditable={getIsEditable}
				isEditable={isEditable}
			>
				<EditUserActive isEditable={isEditable} />
			</Modal>
			<Modal
				classes={['edit-user']}
				modalID='edit-user-inactive'
				modalUpperTitle='Edit User Inactive'
				modalLowerTitle='Francis Dean'
				getIsEditable={getIsEditable}
				isEditable={isEditable}
			>
				<EditUserInactive isEditable={isEditable} />
			</Modal>
			<Modal
				classes={['edit-user']}
				modalID='edit-user-pending'
				modalUpperTitle='Edit User Pending'
				modalLowerTitle='Jon Anderson'
				getIsEditable={getIsEditable}
				isEditable={isEditable}
			>
				<EditUserPending isEditable={isEditable} />
			</Modal>
			<Modal
				classes={['fleet-access']}
				modalID='fleet-access'
				modalUpperTitle='Manage Bulk Fleet Access'
			>
				<BulkFleetAccess />
			</Modal>
			<Modal
				classes={['bulk-user-role']}
				modalID='bulk-user-role'
				modalUpperTitle='Bulk Edit User Role'
			>
				<BulkUserRole />
			</Modal>
			<DialogBox modalID='add-success'>
				<UserAddSuccess />
			</DialogBox>
			<DialogBox modalID='add-fail'>
				<UserAddFail />
			</DialogBox>
			<DialogBox modalID='update-success'>
				<UserUpdateSuccess />
			</DialogBox>
			<DialogBox modalID='update-fail'>
				<UserUpdateFail />
			</DialogBox>
			<DialogBox modalID='fleet-error'>
				<UserFleetError />
			</DialogBox>
			<DialogBox modalID='single-deactivation'>
				<SingleUserDeactivationAlert />
			</DialogBox>
			<DialogBox modalID='bulk-deactivation'>
				<BulkUserDeactivationAlert />
			</DialogBox>
			<DialogBox modalID='bulk-activation'>
				<BulkUserActivationAlert />
			</DialogBox>
			<DialogBox modalID='language-select-alert'>
				<LanguageSelectAlert />
			</DialogBox>
			<Toast
				text='New user created, invite sent'
				toastID='user-add-success'
				status='success'
			/>
			<Toast
				text='Unable to add user'
				toastID='user-add-error'
				status='error'
			/>
			<Toast
				text='Edits saved successfully'
				toastID='user-edit-success'
				status='success'
			/>
			<Toast
				text='Unable to edit user'
				toastID='user-edit-error'
				status='error'
			/>
			<Toast
				text='Access successfully granted to group US (6), Canada (2)'
				toastID='bulk-access-success'
				status='success'
			/>
			<Toast
				text='Unable to update access for these users'
				toastID='bulk-access-error'
				status='error'
			/>
			<Toast
				text='(X) User roles have been successfully updated'
				toastID='bulk-role-success'
				status='success'
			/>
			<Toast
				text='Unable to update user roles'
				toastID='bulk-role-error'
				status='error'
			/>
			<Toast
				text='User successfully deactivated'
				toastID='single-deactivate-success'
				status='success'
			/>
			<Toast
				text='Unable to deactivate user'
				toastID='single-deactivate-error'
				status='error'
			/>
			<Toast
				text='(2) Users have been activated'
				toastID='bulk-activate-success'
				status='success'
			/>
			<Toast
				text='Unable to activate users'
				toastID='bulk-activate-error'
				status='error'
			/>
			<Toast
				text='(2) Users have been deactivated'
				toastID='bulk-deactivate-success'
				status='success'
			/>
			<Toast
				text='Unable to deactivate users'
				toastID='bulk-deactivate-error'
				status='error'
			/>
			<Toast
				text='Invite sent again'
				toastID='invite-sent-success'
				status='success'
			/>
			<Toast
				text='User Reactivated'
				toastID='user-reactivate-success'
				status='success'
			/>
		</>
	);
};

export default ManageUsers;
