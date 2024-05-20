import Icon from '../atoms/Icon';

/**
 * @example
 * <EditConnectivityAlert />
 */
const EditConnectivityAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>Please create a new connection before deleting the only remaining connection</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default EditConnectivityAlert;
