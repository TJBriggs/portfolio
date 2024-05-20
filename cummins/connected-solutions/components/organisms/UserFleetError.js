import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <UserFleetError />
 */
const UserFleetError = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<Heading level='h1' text='Fleet Access Error' />
			<p className='large'>Error message from Server</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default UserFleetError;
