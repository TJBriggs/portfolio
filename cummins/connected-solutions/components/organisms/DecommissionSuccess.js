import Icon from '../atoms/Icon';

/**
 * @example
 * <DecommissionSuccess />
 */
const DecommissionSuccess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='check' />
			</div>
			<p className='large'>Successfully decommissioned asset</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default DecommissionSuccess;
