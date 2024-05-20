import { useState } from 'react';
import TextInput from '../atoms/TextInput';
import Select from '../atoms/Select';
import RadioButtons from '../atoms/RadioButtons';
import ButtonGroup from '../molecules/ButtonGroup';
import Button from '../atoms/Button';

/**
 * @example
 * <StepTwo
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const StepTwo = ({ getStep, step }) => {
	const [dropdownState, setDropdownState] = useState(false);
	const getDropdownState = (state) => {
		setDropdownState(state);
	}
	return (
		<section className='step step--two'>
			<header className='step__header'>
				<h2>Tell us about your company</h2>
			</header>
			<form>
				<h3>Contact Information</h3>
				<TextInput
					labelText='First Name'
					id='firstName'
				/>
				<TextInput
					labelText='Last Name'
					id='lastName'
				/>
				<TextInput
					inputType='email'
					labelText='Email Address'
					id='emailAddress'
				/>
				<TextInput
					labelText='Job Title'
					id='jobTitle'
				/>
				<h3 className='top-margin'>Cummins Representative Information</h3>
				<RadioButtons
					alignment='horizontal'
					id='contact-radios'
					labelText='Do you already have contact with Cummins?'
					validationText='Validation Message'
					getDropdownState={getDropdownState}
					dropdownState={dropdownState}
					options={[
						{
							'value': 'yes',
							'label': 'Yes'
						},
						{
							'value': 'no',
							'label': 'No'
						}
					]}
				/>
				{dropdownState && (
					<>
						<TextInput
							labelText='Contact First Name'
							id='contactFirstName'
						/>
						<TextInput
							labelText='Contact Last Name'
							id='contactLastName'
						/>
						<TextInput
							inputType='email'
							labelText='Contact Email'
							id='contactEmail'
						/>
					</>
				)}
				<ButtonGroup layout='vertical'>
					<Button text='Save And Continue' width='full' linkType='trigger' getStep={getStep} step={step} />
				</ButtonGroup>
			</form>
		</section>
	);
};

export default StepTwo;
