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
			<Heading level='h1' text='1 of 3 assets were registered successfully!' />
			<p className='large'>2 assets failed with the following error messages</p>
			<ul>
				<li className='large'>CA-03 (1) - Illegal value(s) in input stream</li>
			</ul>
			<p className='message-link large'><a href='#' download>Click here for a spreadsheet download of the messages</a></p>
			<p className='asset-info large'>Correct the errors and try again or email support at <a href='mailto:connectedsol.support@cummins.com'>connectedsol.support@cummins.com</a></p>
			<div className="button-wrap">
				<a className='button dialog-button small modal-close'><span className="button__text">Dismiss</span></a>
			</div>
		</>
	);
};

export default BulkRegFailed;
