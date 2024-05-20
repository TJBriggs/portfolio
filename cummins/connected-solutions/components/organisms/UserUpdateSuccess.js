import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <UserUpdateSuccess />
 */
const UserUpdateSuccess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='check' />
			</div>
			<Heading level='h1' text='User Updated' />
			<p className='large'>The record may not be visible in the current sort</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default UserUpdateSuccess;
