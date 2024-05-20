import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <MoveSuccess />
 */
const MoveSuccess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='check' />
			</div>
			<Heading level='h1' text='3 Assets Assigned to Group' />
			<p className='large'>US | SWest</p>
			<p className='large'>Changed records may not be visible in  current view</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default MoveSuccess;
