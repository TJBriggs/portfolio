import ButtonGroup from '../molecules/ButtonGroup';
import FleetAccessCheckboxes from '../atoms/FleetAccessCheckboxes';

/**
 * @example
 * <BulkFleetAccess />
 */
const BulkFleetAccess = () => {
	return (
		<>
			<p className='modal-children__intro-text'>(<span>x</span>) selected users - <span className='warning-text'>Warning this will overide all group access settings for these users.</span></p>
			<FleetAccessCheckboxes />
			<div className='modal-buttons'>
				<ButtonGroup
					gap='medium'
					justification='space-between'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium toast-link' data-toastid='bulk-access-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default BulkFleetAccess;
