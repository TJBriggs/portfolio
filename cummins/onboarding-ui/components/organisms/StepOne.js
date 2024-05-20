import TextInput from '../atoms/TextInput';
import ButtonGroup from '../molecules/ButtonGroup';
import Button from '../atoms/Button';
import Select from '../atoms/Select';
/**
 * @example
 * <StepOne
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const StepOne = ({ getStep, step }) => {
	return (
		<section className='step step--one'>
			<header className="step__header">
				<h2>Register your company for free</h2>
				<p className='large'>Start your registration for your account and gain access to select digital services and applications Cummins has to offer. Then, look out for an email with next steps to complete the process.</p>
			</header>
			<form>
				<TextInput
					labelText='Company Name'
					id='firstName'
				/>
				<Select
					labelText='Market'
					id='market'
					tooltipText='Select the market you are interested in'
					options={[
						{
							'value': 'select',
							'label': 'Select'
						},
						{
							'value': 'option-1',
							'label': 'Option 1'
						},
						{
							'value': 'option-2',
							'label': 'Option 2'
						},
						{
							'value': 'option-3',
							'label': 'Option 3'
						}
					]}
				/>
				<TextInput
					labelText='Headquarters Address'
					id='headquartersAddress'
				/>
				<Select
					labelText='Country'
					id='country'
					tooltipText='Select your country'
					options={[
						{
							'value': 'select',
							'label': 'Select'
						},
						{
							'value': 'us',
							'label': 'United States'
						},
						{
							'value': 'canada',
							'label': 'Canada'
						},
						{
							'value': 'mexico',
							'label': 'Mexico'
						}
					]}
				/>
				<TextInput
					labelText='City'
					id='firstName'
				/>

				<div className='form-fields'>
					<div className='field--half'>
						<Select
							labelText='State'
							id='state'
							options={[
								{
									'value': 'select',
									'label': 'Select'
								},
								{
									'value': 'alabama',
									'label': 'AL'
								},
								{
									'value': 'alaska',
									'label': 'AK'
								},
								{
									'value': 'arizona',
									'label': 'AZ'
								}
							]}
						/>
					</div>
					<div className='field--half field--last'>
						<TextInput
							labelText='Zip / Postal Code'
							id='firstName'
						/>
					</div>
				</div>
				<ButtonGroup layout='vertical'>
					<Button text='Get Started' width='full' linkType='trigger' getStep={getStep} step={step} />
				</ButtonGroup>
			</form>
			<footer className='step__footer'>
				<p className='small'>Already have an account? <a href='#'>Sign In</a></p>
			</footer>
		</section>
	);
};

export default StepOne;
