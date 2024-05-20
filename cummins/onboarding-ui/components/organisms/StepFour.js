import { useState } from 'react';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import SearchField from '../molecules/SearchField';
import ButtonGroup from '../molecules/ButtonGroup';
import Boxes from '../molecules/Boxes';

/**
 * @example
 * <StepFour
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const StepFour = ({ getStep, step }) => {
	const [boxes, setBoxes] = useState([]);
	const toggleBox = (box) => {
		if (box.value === true) {
			const newBox = box;
			setBoxes([...boxes, newBox]);
		} else {
			const boxToRemove = box.id;
			setBoxes(boxes.filter(box => box.id !== boxToRemove));
		}
	};
	return (
		<section className='step step--four'>
			<header className='step__header'>
				<h2>Select your telematics providers</h2>
			</header>
			<form>
				<h3>Select all that apply</h3>
				<SearchField />
				<div className='form-fields checkbox-scroll'>
					<div className='field--half'>
						<Checkbox
							classNames='rounded-bottom'
							id='cummins'
							labelText='Cummins'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half field--last'>
						<Checkbox
							classNames='rounded-bottom'
							id='copilotoSatelital'
							labelText='Copiloto Satelital'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half'>
						<Checkbox
							classNames='rounded-bottom'
							id='driverTech'
							labelText='DriverTech'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half field--last'>
						<Checkbox
							classNames='rounded-bottom'
							id='fariaEntelnet'
							labelText='Faria Entelnet'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half'>
						<Checkbox
							classNames='rounded-bottom'
							id='fleetComplete'
							labelText='Fleet Complete'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half field--last'>
						<Checkbox
							classNames='rounded-bottom'
							id='geoTab'
							labelText='Geotab'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half'>
						<Checkbox
							classNames='rounded-bottom'
							id='hyundaiConstruction'
							labelText='Hyundai Construction Equipment'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half field--last'>
						<Checkbox
							classNames='rounded-bottom'
							id='komtraxPlus'
							labelText='KomtraxPlus'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half'>
						<Checkbox
							classNames='rounded-bottom'
							id='foobar'
							labelText='Etiam Nibh'
							onToggle={toggleBox}
						/>
					</div>
					<div className='field--half field--last'>
						<Checkbox
							classNames='rounded-bottom'
							id='foobarbaz'
							labelText='Parturient Mattis'
							onToggle={toggleBox}
						/>
					</div>
				</div>
				<Boxes boxes={boxes} />
				<ButtonGroup layout='vertical'>
					<Button classNames='disabled' text='Save And Continue' width='full' linkType='trigger' getStep={getStep} step={step} />
					<Button text='Skip For Now' width='full' linkType='trigger' getStep={getStep} step={step} />
				</ButtonGroup>
			</form>
		</section>
	);
};

export default StepFour;
