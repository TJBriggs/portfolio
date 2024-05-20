import Heading from '../../../components/atoms/Heading';
import Button from '../../../components/atoms/Button';
import PreFieldButton from '../../../components/atoms/PreFieldButton';
import PostFieldButton from '../../../components/atoms/PostFieldButton';
import PreFieldButtonDropdown from '../../../components/atoms/PreFieldButtonDropdown';

const buttons = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<Heading level='h1' text='Atoms - Buttons' />
				</div>
			</section>
			<section className='button-family'>
				<div className='button-family__wide-inner'>
					<Heading level='h2' text='Button - Primary' />
					<div className="button-family__grid">
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.primary' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<Button
										type='primary'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										classes={['hover']}
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.primary.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<Button
										type='primary'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='primary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='button-family'>
				<div className='button-family__wide-inner'>
					<Heading level='h2' text='Button - Secondary' />
					<div className="button-family__grid">
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.secondary' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<Button
										type='secondary'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										text='Active'
										url='#'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<Button
										type='secondary'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['active']}
										type='secondary'
										iconOne='placeholder'
										iconTwo='placeholder'
										linkType='normal'
										size='large'
										text='Active'
										url='#'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='button-family'>
				<div className='button-family__wide-inner'>
					<Heading level='h2' text='Button - Round' />
					<div className="button-family__grid col-2">
						<div className='button-group'>
							<div className="button-group__header sub-heading round-buttons">
								<Heading level='h3' text='Primary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.primary.round' />
							</div>
							<div className="button-group__grid round-default">
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='Focus'
										url='#'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading round-buttons">
								<Heading level='h3' text='Primary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.primary.round.large' />
							</div>
							<div className="button-group__grid round-large">
								<div className="button-group__item">
									<Button
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='primary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading round-buttons">
								<Heading level='h3' text='Secondary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.round' />
							</div>
							<div className="button-group__grid round-default">
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										text='Focus'
										url='#'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading round-buttons">
								<Heading level='h3' text='Secondary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.round.large' />
							</div>
							<div className="button-group__grid round-large">
								<div className="button-group__item">
									<Button
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Default'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['hover']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Hover'
										url='#'
									/>
								</div>
								<div className="button-group__item">
									<Button
										classes={['focus']}
										type='secondary'
										iconOne='placeholder'
										linkType='normal'
										round={true}
										size='large'
										text='Focus'
										url='#'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='button-family'>
				<div className='button-family__wide-inner'>
					<Heading level='h2' text='Pre-field Buttons' />
					<div className="button-family__grid col-2">
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.primary.pre-field' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButton
										text='Default'
										type='primary'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['hover']}
										text='Hover'
										type='primary'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['focus']}
										text='Focus'
										type='primary'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['active']}
										text='Active'
										type='primary'
										icon='placeholder'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.primary.pre-field.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButton
										text='Default'
										type='primary'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['hover']}
										text='Hover'
										type='primary'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['focus']}
										text='Focus'
										type='primary'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['active']}
										text='Active'
										type='primary'
										size='large'
										icon='placeholder'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.pre-field' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButton
										text='Default'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['hover']}
										text='Hover'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['focus']}
										text='Focus'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['active']}
										text='Active'
										icon='placeholder'
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.pre-field.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButton
										text='Default'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['hover']}
										text='Hover'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['focus']}
										text='Focus'
										size='large'
										icon='placeholder'
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButton
										classes={['active']}
										text='Active'
										size='large'
										icon='placeholder'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='button-family'>
				<div className='button-family__wide-inner'>
					<Heading level='h2' text='Pre-field Dropdown Buttons' />
					<div className="button-family__grid col-2">
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.primary.pre-field' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButtonDropdown
										type='primary'
										text='Default'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['hover']}
										type='primary'
										text='Hover'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['focus']}
										type='primary'
										text='Focus'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['active']}
										type='primary'
										text='Active'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Primary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.primary.pre-field.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButtonDropdown
										type='primary'
										text='Default'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['hover']}
										type='primary'
										text='Hover'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['focus']}
										type='primary'
										text='Focus'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['active']}
										type='primary'
										text='Active'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Default' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.pre-field' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButtonDropdown
										type='secondary'
										text='Default'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['hover']}
										type='secondary'
										text='Hover'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['focus']}
										type='secondary'
										text='Focus'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['active']}
										type='secondary'
										text='Active'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
							</div>
						</div>
						<div className='button-group'>
							<div className="button-group__header sub-heading">
								<Heading level='h3' text='Secondary - Large' />
								<Heading level='h3' classNames='compact code' text='.button.secondary.pre-field.large' />
							</div>
							<div className="button-group__grid">
								<div className="button-group__item">
									<PreFieldButtonDropdown
										type='secondary'
										text='Default'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['hover']}
										type='secondary'
										text='Hover'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['focus']}
										type='secondary'
										text='Focus'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
												'linkType': 'trigger',
											}
										]}
									/>
								</div>
								<div className="button-group__item">
									<PreFieldButtonDropdown
										classes={['active']}
										type='secondary'
										text='Active'
										size='large'
										options={[
											{
												'value': 'option-1',
												'label': 'Option 1',
												'linkType': 'trigger',
											},
											{
												'value': 'option-2',
												'label': 'Option 2',
												'linkType': 'trigger',
											},
											{
												'value': 'option-3',
												'label': 'Option 3',
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
		</>
	);
};

export default buttons;
