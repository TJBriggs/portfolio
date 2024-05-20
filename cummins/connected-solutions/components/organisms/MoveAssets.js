import { useState } from 'react';
import ButtonGroup from '../molecules/ButtonGroup';

/**
 * @example
 * <MoveAssets />
 */
const MoveAssets = () => {
	const [valuesArray, setValuesArray] = useState([]);
	const [activeIndex, setActiveIndex] = useState('');
	const handleClick = (event) => {
		const value = event.target.dataset.value;
		setValuesArray(value);
		setActiveIndex(value);
	}
	return (
		<>
			<p className='status-text'>Assigning <span>3</span> Assets To Existing Group</p>
			<div className="field-wrap">
				<div className="field-group">
					<label>Parent Groups</label>
					<ul className="field-group__list" data-value={valuesArray}>
						<li className={`field-group__list-item${activeIndex === 'us' ? ' active' : ''}`} data-value='us' onClick={handleClick}>US</li>
						<li className={`field-group__list-item${activeIndex === 'canada' ? ' active' : ''}`} data-value='canada' onClick={handleClick}>Canada</li>
						<li className={`field-group__list-item${activeIndex === 'parent-unassigned' ? ' active' : ''}`} data-value='parent-unassigned' onClick={handleClick}>Unassigned</li>
					</ul>
				</div>
				<div className="field-group">
					<label>Child Groups</label>
					<ul className="field-group__list" data-value={valuesArray}>
						<li className={`field-group__list-item${activeIndex === 'nwest' ? ' active' : ''}`} data-value='nwest' onClick={handleClick}>NWest</li>
						<li className={`field-group__list-item${activeIndex === 'swest' ? ' active' : ''}`} data-value='swest' onClick={handleClick}>SWest</li>
						<li className={`field-group__list-item${activeIndex === 'nmidwest-us' ? ' active' : ''}`} data-value='nmidwest-us' onClick={handleClick}>NMidwest-US</li>
						<li className={`field-group__list-item${activeIndex === 'smidwest-us' ? ' active' : ''}`} data-value='smidwest-us' onClick={handleClick}>SMidwest-US</li>
						<li className={`field-group__list-item${activeIndex === 'child-unassigned' ? ' active' : ''}`} data-value='child-unassigned' onClick={handleClick}>Unassigned</li>
					</ul>
				</div>
			</div>
			<div className='modal-buttons'>
				<ButtonGroup
					gap='medium'
					justification='space-between'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium modal-link' data-modalid='move-success'>Save</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default MoveAssets;
