import { useState } from 'react';
import Image from 'next/image';
import Heading from '../../../components/atoms/Heading';
import Pagination from '../../../components/atoms/Pagination';
import Checkbox from '../../../components/atoms/Checkbox';
import Select from '../../../components/atoms/Select';
import Tooltip from '../../../components/atoms/Tooltip';
import RoundedBox from '../../../components/molecules/RoundedBox';
import RoundedBoxAccordion from '../../../components/molecules/RoundedBoxAccordion';
import SecondaryTableHeader from '../../../components/molecules/SecondaryTableHeader';
import AssetsBulkActions from '../../../components/molecules/AssetsBulkActions';
import ShowCountDropdown from '../../../components/atoms/ShowCountDropdown';

const RoundedElements = () => {
	const [mobileActiveCol, setMobileActiveCol] = useState('col-1');
	const getMobileActiveCol = (col) => {
		setMobileActiveCol(col);
	}
	return (
		<>
			<section className='cl-header'>
				<div className='cl-header__default-inner'>
					<h1 className='cl-header__heading h3 small'>Molecules - Rounded Elements</h1>
				</div>
			</section>
			<section className='element'>
				<div className='element__default-inner'>
					<h2 className='hero section-heading'>Rounded Boxes</h2>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Default Rounded Box</h3>
						</div>
						<div className="element-group__item">
							<RoundedBox
								width='full'
							>
								<Heading
									size='medium'
									text='Rounded Box with Heading'
									tagText='New'
								/>
							</RoundedBox>
						</div>
					</div>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Rounded Box Accordion</h3>
						</div>
						<div className="element-group__item">
							<RoundedBoxAccordion toggleText='Rounded Box Toggle Text'>
								<h3>Accordion Content</h3>
							</RoundedBoxAccordion>
						</div>
					</div>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Rounded Box Accordion with Toggle Status</h3>
						</div>
						<div className="element-group__item">
							<RoundedBoxAccordion toggleText='Rounded Box Toggle Text' toggleStatus={true}>
								<h3>Accordion Content</h3>
							</RoundedBoxAccordion>
						</div>
					</div>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Rounded Box with Table Header</h3>
						</div>
						<div className="element-group__item">
							<RoundedBox
								classes={['table-filters', 'flush-no-bottom-round']}
								width='full'
							>
								<AssetsBulkActions />
								<div className='pagination-wrap desktop-only'>
									<ShowCountDropdown
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
									<Pagination pages={5} />
								</div>
							</RoundedBox>
						</div>
					</div>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Rounded Secondary Table Header</h3>
						</div>
						<div className="element-group__item">
							<SecondaryTableHeader
								upperTitle='Upper Title'
								colOneTitle='Column One Title'
								colTwoTitle='Column Two Title'
								colTwoTag='New'
								getMobileActiveCol={getMobileActiveCol}
								mobileActiveCol={mobileActiveCol}
								viewSwitcherOptions={[
									{
										'value': 'view-1',
										'col': 'col-1',
										'label': 'View 1',
										'linkType': 'trigger',

									},
									{
										'value': 'view-2',
										'col': 'col-2',
										'label': 'View 2',
										'linkType': 'trigger',
									},
								]}
							/>
						</div>
					</div>
					<div className="element-group">
						<div className="element-group__header sub-heading">
							<h3>Rounded Fault Boxes</h3>
						</div>
						<div className="element-group__item">
							<RoundedBox
								width='full'
							>
								<div className="fault-boxes">
									<Heading level='h3' classNames='compact' text='Fault Priorities To Include' />
									<div className="fault-boxes__wrap">
										<div className="fault-boxes__box">
											<div className="fault-boxes__checkbox">
												<Image
													alt='Immediate Action'
													src={`/icons/multicolor/immediate-action.svg`}
													layout="responsive"
													width={32}
													height={32}
												/>
												<Checkbox labelText='Immediate Action' />
											</div>
											<div className="fault-boxes__select">
												<Select
													type='underline'
													size='small'
													labelText='Suppress emails'
													validationText='Validation Message'
													options={[
														{
															'value': 'select',
															'label': 'Select'
														},
														{
															'value': '1-hour',
															'label': '1 Hour'
														},
														{
															'value': '3-hours',
															'label': '3 Hours'
														},
														{
															'value': '8-hours',
															'label': '8 Hours'
														}
													]}
												/>
												<Tooltip tooltipText='Suppress emails when the same fault occurs multiple times for an ESN' />
											</div>
										</div>
										<div className="fault-boxes__box">
											<div className="fault-boxes__checkbox">
												<Image
													alt='Service within 3 days'
													src={`/icons/multicolor/service-3days.svg`}
													layout="responsive"
													width={32}
													height={32}
												/>
												<Checkbox labelText='Service Within 3 Days' />
											</div>
											<div className="fault-boxes__select">
												<Select
													type='underline'
													size='small'
													labelText='Suppress emails'
													validationText='Validation Message'
													options={[
														{
															'value': 'select',
															'label': 'Select'
														},
														{
															'value': '1-hour',
															'label': '1 Hour'
														},
														{
															'value': '3-hours',
															'label': '3 Hours'
														},
														{
															'value': '8-hours',
															'label': '8 Hours'
														}
													]}
												/>
												<Tooltip tooltipText='Suppress emails when the same fault occurs multiple times for an ESN' />
											</div>
										</div>
										<div className="fault-boxes__box">
											<div className="fault-boxes__checkbox">
												<Image
													alt='Service within 7 days'
													src={`/icons/multicolor/service-7days.svg`}
													layout="responsive"
													width={32}
													height={32}
												/>
												<Checkbox labelText='Service Within 7 Days' />
											</div>
											<div className="fault-boxes__select">
												<Select
													type='underline'
													size='small'
													labelText='Suppress emails'
													validationText='Validation Message'
													options={[
														{
															'value': 'select',
															'label': 'Select'
														},
														{
															'value': '1-hour',
															'label': '1 Hour'
														},
														{
															'value': '3-hours',
															'label': '3 Hours'
														},
														{
															'value': '8-hours',
															'label': '8 Hours'
														}
													]}
												/>
												<Tooltip tooltipText='Suppress emails when the same fault occurs multiple times for an ESN' />
											</div>
										</div>
										<div className="fault-boxes__box">
											<div className="fault-boxes__checkbox">
												<Image
													alt='Next Planned Maintenance'
													src={`/icons/multicolor/planned-maintenance.svg`}
													layout="responsive"
													width={32}
													height={32}
												/>
												<Checkbox labelText='Next PM (Planned Maintenance)' />
											</div>
											<div className="fault-boxes__select">
												<Select
													type='underline'
													size='small'
													labelText='Suppress emails'
													validationText='Validation Message'
													options={[
														{
															'value': 'select',
															'label': 'Select'
														},
														{
															'value': '1-hour',
															'label': '1 Hour'
														},
														{
															'value': '3-hours',
															'label': '3 Hours'
														},
														{
															'value': '8-hours',
															'label': '8 Hours'
														}
													]}
												/>
												<Tooltip tooltipText='Suppress emails when the same fault occurs multiple times for an ESN' />
											</div>
										</div>
									</div>
								</div>
							</RoundedBox>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RoundedElements;
