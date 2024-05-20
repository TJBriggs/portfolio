import Icon from '../atoms/Icon';

/**
 * @example
 * <RegistrationSuccess />
 */
const RegistrationSuccess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='check' />
			</div>
			<p className='large'>Asset successfully registered</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default RegistrationSuccess;
