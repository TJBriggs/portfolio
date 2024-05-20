import Icon from '../atoms/Icon';

/**
 * @example
 * <BulkUserActivationAlert />
 */
const BulkUserActivationAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<h1>(<span>2</span>) Users Selected</h1>
			<p className='large'>Are you sure you want to activate these users?</p>
			<p className='dialog-info large'>
				<span>jon.anderson@gmail.ocm</span>
				<span>francis.dean@gmail.com</span>
			</p>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small toast-link' data-toastid='bulk-activate-success'><span className="button__text">Activate</span></a>
			</div>
		</>
	);
};

export default BulkUserActivationAlert;
