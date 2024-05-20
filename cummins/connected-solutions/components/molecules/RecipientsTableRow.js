import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

/**
 * @example
 * <RecipientsTableRow
 *    @param {array} recipient - (user data for table)
 * />
 */
const RecipientsTableRow = ({ recipient }) => {
	const {
		email,
		workArea,
		assetGroups,
		language,
		timeZone
	} = recipient;
	const handleTrash = (event) => {
		event.preventDefault();
		console.log('remove table row');
	}
	return (
		<div className={`table-rows__row`}>

			<div className={`table-rows__cell col-1`}>
				<label className='mobile-only'>Recipient Email Address</label>
				{email}
			</div>
			<div className={`table-rows__cell col-2`}>
				<label className='mobile-only'>Work Area</label>
				{workArea}
			</div>
			<div className={`table-rows__cell col-3`}>
				<label className='mobile-only'>Language</label>
				{language}
			</div>
			<div className={`table-rows__cell col-4`}>
				<label className='mobile-only'>Time Zone</label>
				{timeZone}
			</div>
			<div className={`table-rows__cell col-5`}>
				<label className='mobile-only'>Asset Groups</label>
				{assetGroups}
			</div>
			<div className={`table-rows__cell col-6`}>
				<div className='actions-wrap'>
					<a className='modal-link eye' data-modalid='edit-recipient'>
						<Icon iconName='eye' />
					</a>
					<a className='modal-link edit' data-modalid='edit-recipient'>
						<Icon iconName='edit' />
					</a>
					<a className={`modal-link`} data-modalid='single-delete' onClick={handleTrash}>
						<Icon iconName='trash' />
					</a>
				</div>
			</div>
		</div>
	);
};

RecipientsTableRow.propTypes = {
	recipient: PropTypes.object.isRequired,
};

export default RecipientsTableRow;
