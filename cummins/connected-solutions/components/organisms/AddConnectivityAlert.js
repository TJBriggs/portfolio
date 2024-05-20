import Icon from '../atoms/Icon';

/**
 * @example
 * <AddConnectivityAlert />
 */
const AddConnectivityAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>You must enter the data for the device above before you can add another device</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default AddConnectivityAlert;
