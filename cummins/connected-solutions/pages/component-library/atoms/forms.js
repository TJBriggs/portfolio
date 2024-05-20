import Heading from '../../../components/atoms/Heading';
import TextInput from '../../../components/atoms/TextInput';
import TextArea from '../../../components/atoms/TextArea';
import Select from '../../../components/atoms/Select';
import Checkbox from '../../../components/atoms/Checkbox';
import ButtonDropdown from '../../../components/atoms/ButtonDropdown';
import ShowCountDropdown from '../../../components/atoms/ShowCountDropdown';
import SortByDropdown from '../../../components/atoms/SortByDropdown';
import IconDropdown from '../../../components/atoms/IconDropdown';
import ViewSwitcher from '../../../components/atoms/ViewSwitcher';
import FleetAccessCheckboxes from '../../../components/atoms/FleetAccessCheckboxes';
import RadioButtons from '../../../components/atoms/RadioButtons';
import FeedbackRadios from '../../../components/atoms/FeedbackRadios';
import SlideToggle from '../../../components/atoms/SlideToggle';
import Icon from '../../../components/atoms/Icon';

const forms = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<Heading level='h1' text='Atoms - Form Components' />
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Text Input - Primary</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.primary.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='primary'
										size='large'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='primary'
										size='large'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='primary'
										size='large'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='primary'
										size='large'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='primary'
										size='large'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='primary'
										size='large'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.primary.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='primary'
										size='medium'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='primary'
										size='medium'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='primary'
										size='medium'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='primary'
										size='medium'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='primary'
										size='medium'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='primary'
										size='medium'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.primary.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='primary'
										size='small'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='primary'
										size='small'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='primary'
										size='small'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='primary'
										size='small'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='primary'
										size='small'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='primary'
										size='small'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Text Input - Secondary</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.secondary.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='secondary'
										size='large'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='secondary'
										size='large'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='secondary'
										size='large'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='secondary'
										size='large'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='secondary'
										size='large'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='secondary'
										size='large'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.secondary.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='secondary'
										size='medium'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='secondary'
										size='medium'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='secondary'
										size='medium'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='secondary'
										size='medium'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='secondary'
										size='medium'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='secondary'
										size='medium'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.secondary.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextInput
										type='secondary'
										size='small'
										labelText='Default'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['hover']}
										type='secondary'
										size='small'
										labelText='Hover'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['focus']}
										type='secondary'
										size='small'
										labelText='Focus'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['active']}
										type='secondary'
										size='small'
										labelText='Active'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['success']}
										type='secondary'
										size='small'
										labelText='Success'
										placeholderText='Placeholder Text'
									/>
								</div>
								<div className='element-group__item'>
									<TextInput
										classes={['error']}
										type='secondary'
										size='small'
										labelText='Error'
										placeholderText='Placeholder Text'
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Text Area</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.primary.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextArea
										size='large'
										labelText='Default'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['hover']}
										size='large'
										labelText='Hover'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['focus']}
										size='large'
										labelText='Focus'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['active']}
										size='large'
										labelText='Active'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['success']}
										size='large'
										labelText='Success'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['error']}
										size='large'
										labelText='Error'
										placeholderText='Enter your message here'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.primary.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextArea
										size='medium'
										labelText='Default'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['hover']}
										size='medium'
										labelText='Hover'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['focus']}
										size='medium'
										labelText='Focus'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['active']}
										size='medium'
										labelText='Active'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['success']}
										size='medium'
										labelText='Success'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['error']}
										size='medium'
										labelText='Error'
										placeholderText='Enter your message here'
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.primary.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<TextArea
										size='small'
										labelText='Default'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['hover']}
										size='small'
										labelText='Hover'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['focus']}
										size='small'
										labelText='Focus'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['active']}
										size='small'
										labelText='Active'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['success']}
										size='small'
										labelText='Success'
										placeholderText='Enter your message here'
									/>
								</div>
								<div className='element-group__item'>
									<TextArea
										classes={['error']}
										size='small'
										labelText='Error'
										placeholderText='Enter your message here'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Select - Primary</h2>
					<div className='form-element__grid'>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.primary.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='primary'
										size='large'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='primary'
										size='large'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='primary'
										size='large'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='primary'
										size='large'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='primary'
										size='large'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='primary'
										size='large'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.primary.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='primary'
										size='medium'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='primary'
										size='medium'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='primary'
										size='medium'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='primary'
										size='medium'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='primary'
										size='medium'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='primary'
										size='medium'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.primary.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='primary'
										size='small'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='primary'
										size='small'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='primary'
										size='small'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='primary'
										size='small'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='primary'
										size='small'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='primary'
										size='small'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Select - Underline</h2>
					<div className='form-element__grid'>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.underline.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='underline'
										size='large'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='underline'
										size='large'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='underline'
										size='large'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='underline'
										size='large'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='underline'
										size='large'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='underline'
										size='large'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.underline.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='underline'
										size='medium'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='underline'
										size='medium'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='underline'
										size='medium'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='underline'
										size='medium'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='underline'
										size='medium'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='underline'
										size='medium'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.underline.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='underline'
										size='small'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='underline'
										size='small'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='underline'
										size='small'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='underline'
										size='small'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='underline'
										size='small'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='underline'
										size='small'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Select - Pill</h2>
					<div className='form-element__grid'>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Large' />
								<Heading level='h3' classNames='compact code' text='.pill.large' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='pill'
										size='large'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='pill'
										size='large'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='pill'
										size='large'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='pill'
										size='large'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='pill'
										size='large'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='pill'
										size='large'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Medium' />
								<Heading level='h3' classNames='compact code' text='.pill.medium' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='pill'
										size='medium'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='pill'
										size='medium'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='pill'
										size='medium'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='pill'
										size='medium'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='pill'
										size='medium'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='pill'
										size='medium'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
						<div className='element-group select-fields'>
							<div className='element-group__header sub-heading'>
								<Heading level='h3' text='Small' />
								<Heading level='h3' classNames='compact code' text='.pill.small' />
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Select
										type='pill'
										size='small'
										options={[
											{
												'value': 'default',
												'label': 'Default'
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
											},
											{
												'value': 'option-4',
												'label': 'Option'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['hover']}
										type='pill'
										size='small'
										options={[
											{
												'value': 'hover',
												'label': 'Hover'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['focus']}
										type='pill'
										size='small'
										options={[
											{
												'value': 'focus',
												'label': 'Focus'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['active']}
										type='pill'
										size='small'
										options={[
											{
												'value': 'active',
												'label': 'Active'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['success']}
										type='pill'
										size='small'
										options={[
											{
												'value': 'success',
												'label': 'Success'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
									/>
								</div>
								<div className='element-group__item'>
									<Select
										classes={['error']}
										type='pill'
										size='small'
										options={[
											{
												'value': 'error',
												'label': 'Error'
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
											},
											{
												'value': 'option-4',
												'label': 'Option 4'
											}
										]}
										validationText='Validation Text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Dropdowns</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Button Dropdown</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item no-flex'>
									<ButtonDropdown
										text='Button Text'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'modal',
												'url': 'option-1'
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'modal',
												'url': 'option-2'
											},
										]}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Show Count Dropdown</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<ShowCountDropdown
										text='Show:'
										type='underline'
										size='small'
										options={[
											{
												'value': '5',
												'label': '5',
											},
											{
												'value': '10',
												'label': '10',
											},
											{
												'value': '25',
												'label': '25',

											},
											{
												'value': '50',
												'label': '50',
											},
										]}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Sort By Dropdown</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<SortByDropdown
										text='Sort by:'
										type='underline'
										size='small'
										initialLabel='A-Z'
										options={[
											{
												'value': 'a-z',
												'label': 'A-Z'
											},
											{
												'value': 'z-a',
												'label': 'Z-A'
											}
										]}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Icon Dropdown</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<IconDropdown
										text='Select Asset Type'
										labelText='Asset Type'
										options={[
											{
												'value': 'asset-type-1',
												'label': 'Asset Name',
												'icon': 'truck'
											},
											{
												'value': 'asset-type-2',
												'label': 'Asset Name',
												'icon': 'engine'
											},
											{
												'value': 'asset-type-3',
												'label': 'Asset Name',
												'icon': 'transmission'
											}
										]}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>View Switcher Dropdown</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item view-switcher-item'>
									<ViewSwitcher
										text='View'
										options={[
											{
												'value': 'tab-1',
												'col': 'col-1',
												'label': 'Tab 1 View',
												'linkType': 'trigger',

											},
											{
												'value': 'tab-2',
												'col': 'col-2',
												'label': 'Tab 2 View',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Checkboxes</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Default</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<Checkbox labelText='Default' />
								</div>
								<div className='element-group__item'>
									<Checkbox classes={['hover']} labelText='Hover' />
								</div>
								<div className='element-group__item'>
									<Checkbox classes={['focus']} labelText='Focus' />
								</div>
								<div className='element-group__item'>
									<Checkbox labelText='Checked' isChecked={true} />
								</div>
								<div className='element-group__item'>
									<Checkbox labelText='Indeterminate' classes={['partial']} />
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Checkbox with Icon</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item checkbox-icon'>
									<Icon iconName='placeholder' />
									<Checkbox labelText='Default' />
								</div>
								<div className='element-group__item checkbox-icon'>
									<Icon iconName='placeholder' />
									<Checkbox classes={['hover']} labelText='Hover' />
								</div>
								<div className='element-group__item checkbox-icon'>
									<Icon iconName='placeholder' />
									<Checkbox classes={['focus']} labelText='Focus' />
								</div>
								<div className='element-group__item checkbox-icon'>
									<Icon iconName='placeholder' />
									<Checkbox labelText='Checked' isChecked={true} />
								</div>
								<div className='element-group__item checkbox-icon'>
									<Icon iconName='placeholder' />
									<Checkbox labelText='Indeterminate' classes={['partial']} />
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Asset Group Checkboxes</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<FleetAccessCheckboxes />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Radio Buttons</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Vertical</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<RadioButtons
										id='vertical-radios'
										labelText='Label Text...Bibendum Tortor Sem Consectetur Condimentum'
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
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Horizontal</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<RadioButtons
										alignment='horizontal'
										id='horizontal-radios'
										labelText='Label Text...Bibendum Tortor Sem Consectetur Condimentum'
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
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Feedback Radios</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<FeedbackRadios labelText='What do you think of the product?' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='form-element'>
				<div className='font-element__wide-inner'>
					<h2 className='hero section-heading'>Slide Toggles</h2>
					<div className='form-element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Slide Toggle with Label Top</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<SlideToggle
										labelText='Label Text...'
										labelLocation='top'
										isChecked={false}
									/>
								</div>
								<div className='element-group__item'>
									<SlideToggle
										labelText='Label Text...'
										labelLocation='top'
										isChecked={true}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Slide Toggle with Label Right</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<SlideToggle
										labelText='Label Text...'
										labelLocation='right'
										isChecked={false}
										changeLabel={false}
									/>
								</div>
								<div className='element-group__item'>
									<SlideToggle
										labelText='Label Text...'
										labelLocation='right'
										isChecked={true}
										changeLabel={false}
									/>
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Slide Toggle with Changing Label</h3>
							</div>
							<div className='element-group__grid'>
								<div className='element-group__item'>
									<SlideToggle
										labelLocation='right'
										isChecked={false}
										changeLabel={true}
										onLabel='Active'
										offLabel='Inactive'
									/>
								</div>
								<div className='element-group__item'>
									<SlideToggle
										labelLocation='right'
										isChecked={true}
										changeLabel={true}
										onLabel='Active'
										offLabel='Inactive'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default forms;
