import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <FeedbackError />
 */
const FeedbackError = () => {
	return (
		<>
			<div className='status-icon error'>
				<Icon iconName='close' />
			</div>
			<Heading level='h1' text='Feedback Error' />
			<p className='large'>We were unable to capture your feedback.</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default FeedbackError;
