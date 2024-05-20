import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <DecommissionAlert />
 */
const DecommissionAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<Heading level='h1' text='Alert' />
			<p className='large'>Are you sure you want to decommission this Asset?</p>
			<p className='dialog-info large'>
				<span>Asset ID: <a href="#">CA-06</a></span>
				<span>CSN: 03252021</span>
			</p>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small modal-close'><span className="button__text">Decommission</span></a>
			</div>
		</>
	);
};

export default DecommissionAlert;
