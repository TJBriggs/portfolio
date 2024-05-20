import TextInput from '../atoms/TextInput';
import TextArea from '../atoms/TextArea';
import Select from '../atoms/Select';
import Checkbox from '../atoms/Checkbox';
import RadioButtons from '../atoms/RadioButtons';
import FeedbackRadios from '../atoms/FeedbackRadios';
import ButtonGroup from '../molecules/ButtonGroup';

const FeedbackModal = () => {
	return (
		<>
			<div className="form-fields">
				<TextInput
					classes={['field--half']}
					inputType='email'
					labelText='Email'
				/>
				<Select
					classes={['field--half']}
					type='secondary'
					size='medium'
					labelText='Product'
					validationText='Validation Message'
					options={[
						{
							'value': 'select',
							'label': 'Select Below'
						},
						{
							'value': 'preventech',
							'label': 'PrevenTech'
						},
						{
							'value': 'optitech',
							'label': 'OptiTech'
						},
						{
							'value': 'prognostics',
							'label': 'Prognostics'
						},
						{
							'value': 'fleet-health',
							'label': 'Fleet Health'
						}
					]}
				/>
				<FeedbackRadios classes={['field--half']} labelText='What do you think of the product?' />
				<TextArea
					classes={['field--full']}
					size='medium'
					labelText='Please share any feedback on how we can make these products work better for you?'
					placeholderText='Enter your feedback here'
					rows={6}
				/>
				<RadioButtons
					alignment='horizontal'
					id='feedback-content'
					labelText='May we contact you for follow up on your feedback?'
					validationText='Validation Message'
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
			</div>
			<div className='modal-buttons'>
				<ButtonGroup
					gap='medium'
					justification='flex-start'
				>
					<div className="modal-button cancel">
						<a className='button secondary medium modal-close'>Cancel</a>
					</div>
					<div className="modal-button save">
						<a className='button primary medium modal-link' data-modalid='feedback-success'>Send</a>
					</div>
				</ButtonGroup>
			</div>
		</>
	);
};

export default FeedbackModal;
