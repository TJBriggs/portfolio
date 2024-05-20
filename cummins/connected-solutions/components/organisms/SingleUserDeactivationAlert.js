import Icon from '../atoms/Icon';

/**
 * @example
 * <SingleUserDeactivationAlert />
 */
const SingleUserDeactivationAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>Are you sure you want to deactivate this user?</p>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small toast-link modal-close' data-toastid='single-deactivate-success'><span className="button__text">Deactivate</span></a>
			</div>
		</>
	);
};

export default SingleUserDeactivationAlert;
