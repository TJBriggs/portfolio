import Icon from '../atoms/Icon';

/**
 * @example
 * <SingleAssetDeleteAlert />
 */
const SingleAssetDeleteAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>Are you sure you want to delete this asset?</p>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small modal-close'><span className="button__text">Delete</span></a>
			</div>
		</>
	);
};

export default SingleAssetDeleteAlert;
