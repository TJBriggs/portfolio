import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import Select from '../atoms/Select';

/**
 * @example
 * <LanguageSelectAlert />
 */
const LanguageSelectAlert = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<Heading level='h1' text='Alert' />
			<p className='large'>Select the language for the invite email</p>
			<Select
				type='underline'
				size='medium'
				validationText='Validation Message'
				options={[
					{
						'value': 'english',
						'label': 'English'
					},
					{
						'value': 'french',
						'label': 'French'
					},
					{
						'value': 'spanish',
						'label': 'Spanish'
					}
				]}
			/>
			<div className="button-wrap">
				<a className='button secondary small modal-close'><span className="button__text">Cancel</span></a>
				<a className='button dialog-button small toast-link' data-toastid='invite-sent-success'><span className="button__text">Send Email</span></a>
			</div>
		</>
	);
};

export default LanguageSelectAlert;
