import Icon from '../atoms/Icon';

/**
 * @example
 * <DecommissionFailed />
 */
const DecommissionFailed = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<p className='large'>Asset failed to decommission</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default DecommissionFailed;
