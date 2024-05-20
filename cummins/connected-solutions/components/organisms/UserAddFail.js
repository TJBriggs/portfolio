import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <BulkRegFailed />
 */
const BulkRegFailed = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<Heading level='h1' text='Unable To Add User' />
			<p className='large'>Please check the fields and submit again.</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Dismiss</span></a>
			</div>
		</>
	);
};

export default BulkRegFailed;
