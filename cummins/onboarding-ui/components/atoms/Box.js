import { useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import TextInput from './TextInput';

/**
 * @example
 * <Box
 *    @param {object} box - (box settings, id, labelText, value)
 * />
 */
const Box = ({ box: { id, labelText } }) => {
	const [inputs, setInputs] = useState([]);
	const addInput = (clicks) => {
		let inputID = clicks + 1;
		const newInput = { inputID: inputID };
		setInputs([...inputs, newInput]);
	};

	const removeInput = (event) => {
		event.preventDefault();
		let targetID;
		const target = event.target;
		if (target.classList.contains('icon')) {
			targetID = parseInt(target.parentNode.id);
		} else {
			targetID = parseInt(target.id);
		}
		setInputs(inputs.filter(input => input.inputID !== targetID));
	};
	return (
		<div className="boxes__box">
			<h4 className='boxes__box-label'>{labelText}</h4>
			<TextInput
				inputType='text'
				id={`${id}-telematics-0`}
				labelText='Telematics Customer ID'
				tooltipText='Enter the Telematics Customer ID'
			/>
			{inputs.map((input, index) => (
				<div className='input-wrap' key={index}>
					<TextInput
						inputType='text'
						id={`${id}-telematics-${index + 1}`}
					/>
					<span className='remove-input' id={input.inputID} onClick={removeInput}>
						<Icon iconName='close-thick' />
					</span>
				</div>
			))}
			<div className="boxes__button-wrap">
				<Button classNames='add-id' text='+ Add ID' linkType='trigger' onClick={addInput} />
			</div>
		</div>
	);
};

export default Box;
