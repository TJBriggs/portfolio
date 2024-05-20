import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

/**
 * @example
 * <FeedbackSucess />
 */
const FeedbackSucess = () => {
	return (
		<>
			<div className='status-icon success'>
				<Icon iconName='thumbs-up' />
			</div>
			<Heading level='h1' text='Thank You' />
			<p className='large'>We will let our team know about your feedback.</p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Ok</span></a>
			</div>
		</>
	);
};

export default FeedbackSucess;
