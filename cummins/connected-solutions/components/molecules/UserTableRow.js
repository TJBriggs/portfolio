import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Checkbox from '../atoms/Checkbox';

/**
 * @example
 * <UserTableRow
 *    @param {array} user - (user data for table)
 * />
 */
const UserTableRow = ({ user }) => {
	const {
		userName,
		userEmail,
		userRole,
		fleetAccess,
		userStatus,
		userOption
	} = user;
	const handleTrash = (event) => {
		event.preventDefault();
		console.log('remove table row');
	}
	const handleOption = (event) => {
		event.preventDefault();
		console.log('Resend Invite or Reactivate');
	}
	return (
		<div className={`table-rows__row`}>
			<div className={`table-rows__cell col-1`}>
				<label className='mobile-only'>Select</label>
				<div className='select-wrap'>
					<Checkbox />
				</div>
			</div>
			<div className={`table-rows__cell col-2`}>
				<label className='mobile-only'>Name</label>
				{userName}
			</div>
			<div className={`table-rows__cell col-3`}>
				<label className='mobile-only'>Email Address</label>
				{userEmail}
			</div>
			<div className={`table-rows__cell col-4`}>
				<label className='mobile-only'>Role</label>
				{userRole}
			</div>
			<div className={`table-rows__cell col-5`}>
				<label className='mobile-only'>Fleet Access</label>
				{fleetAccess}
			</div>
			<div className={`table-rows__cell col-6`}>
				<label className='mobile-only'>Status</label>
				{userStatus}
			</div>
			<div className={`table-rows__cell col-7`}>
				<div className='actions-wrap'>
					{userStatus === 'Pending' &&
						<>
							<a className='modal-link eye' data-modalid='edit-user-pending'>
								<Icon iconName='eye' />
							</a>
							<a className={`modal-link email desktop-only`} data-modalid='language-select-alert' onClick={handleTrash}>
								<Icon iconName='email' />
							</a>
							<a className='modal-link edit' data-modalid='edit-user-pending'>
								<Icon iconName='edit' />
							</a>
						</>
					}
					{userStatus === 'Active' &&
						<>
							<a className='modal-link eye' data-modalid='edit-user-active'>
								<Icon iconName='eye' />
							</a>
							<span className="actions-placeholder"></span>
							<a className='modal-link edit' data-modalid='edit-user-active'>
								<Icon iconName='edit' />
							</a>
						</>
					}
					{userStatus === 'Inactive' &&
						<>
							<a className='modal-link eye' data-modalid='edit-user-inactive'>
								<Icon iconName='eye' />
							</a>
							<span className="actions-placeholder"></span>
							<a className='modal-link edit' data-modalid='edit-user-inactive'>
								<Icon iconName='edit' />
							</a>
						</>
					}
					<a className={`modal-link${userStatus === 'Inactive' ? ' disabled' : ''}`} data-modalid='single-deactivation' onClick={handleTrash}>
						<Icon iconName='trash' />
					</a>
				</div>
			</div>
		</div>
	);
};

UserTableRow.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserTableRow;
