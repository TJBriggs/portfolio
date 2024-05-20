
import AccordionGroup from '../../../components/molecules/AccordionGroup';
import Accordion from '../../../components/atoms/Accordion';
import ButtonAccordion from '../../../components/atoms/ButtonAccordion';
import Tag from '../../../components/atoms/Tag';
import Tooltip from '../../../components/atoms/Tooltip';

const miscellaneous = () => {
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__wide-inner'>
					<h1 className='cl-header__heading h3 small'>Atoms - Miscellaneous</h1>
				</div>
			</section>
			<section className='element'>
				<div className='element__wide-inner'>
					<h2 className='hero section-heading'>Individual Accordions</h2>
					<div className='element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Single Accordions</h3>
							</div>
							<div className='element-group__item'>
								<Accordion
									toggleText='Toggle With Trash Icon'
									isExpanded={true}
									hasTrashIcon={true}
								>
									<p>Accordion Content</p>
								</Accordion>
								<Accordion
									toggleText='Toggle Without Trash Icon'
									isExpanded={false}
									hasTrashIcon={false}
								>
									<p>Accordion Content</p>
								</Accordion>
								<Accordion
									toggleText='Toggle Text'
									isExpanded={false}
									hasTrashIcon={false}
								>
									<p>Accordion Content</p>
								</Accordion>
								<Accordion
									toggleText='Toggle Text'
									isExpanded={false}
									hasTrashIcon={false}
								>
									<p>Accordion Content</p>
								</Accordion>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Accordion Group with Nested Accordions</h3>
							</div>
							<div className='element-group__item accordion-group-item'>
								<AccordionGroup
									groupHeading='Group Heading'
									addMoreText='Button To Add Another Accordion Element'
								>
									<Accordion
										toggleText='Toggle With Trash Icon'
										isExpanded={true}
										hasTrashIcon={true}
									>
										<p>Accordion Content</p>
									</Accordion>
									<Accordion
										toggleText='Toggle Without Trash Icon'
										isExpanded={false}
										hasTrashIcon={false}
									>
										<p>Accordion Content</p>
									</Accordion>
									<Accordion
										toggleText='Toggle Text'
										isExpanded={false}
										hasTrashIcon={false}
									>
										<p>Accordion Content</p>
									</Accordion>
									<Accordion
										toggleText='Toggle Text'
										isExpanded={false}
										hasTrashIcon={false}
									>
										<p>Accordion Content</p>
									</Accordion>
								</AccordionGroup>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Button Accordion</h3>
							</div>
							<div className='element-group__item'>
								<ButtonAccordion buttonText='Button Text'>
									<p>Accordion Content</p>
								</ButtonAccordion>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='element'>
				<div className='element__wide-inner'>
					<h2 className='hero section-heading'>Other Elements</h2>
					<div className='element__grid'>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Tags</h3>
							</div>
							<div className="element-group__grid tag-grid">
								<div className='element-group__item tag-item'>
									<Tag text='Large Tag' size='large' />
								</div>
								<div className='element-group__item tag-item'>
									<Tag text='Medium Tag' size='medium' />
								</div>
								<div className='element-group__item tag-item'>
									<Tag text='Small Tag' size='small' />
								</div>
							</div>
						</div>
						<div className='element-group'>
							<div className='element-group__header sub-heading'>
								<h3>Tooltips</h3>
							</div>
							<div className="element-group__grid tag-grid">
								<div className='element-group__item'>
									<Tooltip tooltipText='This tooltip has the default question mark icon' />
								</div>
								<div className='element-group__item'>
									<Tooltip tooltipText='This tooltip has a custom icon' tooltipIconName='placeholder' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default miscellaneous;
