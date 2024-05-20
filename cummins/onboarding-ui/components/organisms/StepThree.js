import { useEffect } from 'react';
import Checkbox from '../atoms/Checkbox';
import ButtonGroup from '../molecules/ButtonGroup';
import RoundedBox from '../molecules/RoundedBox';
import TermsService from '../molecules/TermsService';
import Button from '../atoms/Button';

/**
 * @example
 * <StepThree
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const StepThree = ({ getStep, step }) => {
	useEffect(() => {
		const termsCheckbox = document.getElementById('termsCheckbox');
		const saveButton = document.querySelector('.save-button');

		/* Enable Save Button */
		termsCheckbox.addEventListener('click', (event) => {

			const checked = event.target.checked;
			if (checked) {
				saveButton.classList.remove('disabled');
			} else {
				saveButton.classList.add('disabled');
			}
		});

	}, []);
	return (
		<section className='step step--three'>
			<header className='step__header'>
				<h2>Review our terms of service agreement</h2>
			</header>
			<form>
				<RoundedBox>
					<TermsService />
				</RoundedBox>
				<Checkbox
					classNames='rounded-border'
					id='termsCheckbox'
					labelText='I have read and hereby agree to the Terms of Service Agreement'
				/>
				<ButtonGroup layout='horizontal'>
					<Button text='Download' type='secondary' linkType='trigger' icon='download-underline' />
					<Button classNames='save-button disabled' text='Save And Continue' linkType='trigger' getStep={getStep} step={step} />
				</ButtonGroup>
			</form>
		</section>
	);
};

export default StepThree;
