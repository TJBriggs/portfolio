import Icon from '../atoms/Icon';

/**
 * @example
 * <BulkAssetDeleteAlert />
 */
const BulkAssetDeleteAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>Are you sure you want to delete these assets?</p>
			<p className='dialog-info large'>
				<span>Asset ID: CA-03</span>
				<span>Asset ID: CA-04</span>
			</p>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small modal-close'><span className="button__text">Delete</span></a>
			</div>
		</>
	);
};

export default BulkAssetDeleteAlert;
