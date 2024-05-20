import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <UserAddSuccess />
 */
const UserAddSuccess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='check' />
			</div>
			<Heading level='h1' text='User Added' />
			<p className='large'>The record may not be visible in the current sort</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default UserAddSuccess;
