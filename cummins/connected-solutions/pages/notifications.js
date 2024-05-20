import { useEffect, useState } from 'react';
import Image from 'next/image';
import { server } from '../config/index.js';

// Atoms
import Button from '../components/atoms/Button';
import Checkbox from '../components/atoms/Checkbox';
import Select from '../components/atoms/Select';
import SlideToggle from '../components/atoms/SlideToggle';
import Toast from '../components/atoms/Toast';
import Tooltip from '../components/atoms/Tooltip';

import Heading from '../components/atoms/Heading';

// Molecules
import Modal from '../components/molecules/Modal';
import PageHeader from '../components/molecules/PageHeader';
import NotificationsHeader from '../components/molecules/NotificationsHeader';
import RoundedBoxAccordion from '../components/molecules/RoundedBoxAccordion';
import RoundedTableToggle from '../components/molecules/RoundedTableToggle';

// Organisms
import RecipientsTable from '../components/organisms/RecipientsTable';

// Organisms - Modals & Dialogs
import AddRecipient from '../components/organisms/AddRecipient';
import EditRecipient from '../components/organisms/EditRecipient';

export const getStaticProps = async () => {
	let recipients = [];
	let error = "";
	try {
		const res = await fetch(
			`${server}/api/recipients`,
			{
				method: "GET",
				headers: {
					// update with your user-agent
					"User-Agent":
						"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
					Accept: "application/json; charset=UTF-8",
				},
			}
		);
		recipients = await res.json();


	} catch (e) {
		error = e.toString();
	}

	return {
		props: {
			recipients,
			error
		},
		revalidate: 1
	}
}

const Notifications = ({ recipients, error }) => {

	/* Page Level State */
	const [isEditable, setIsEditable] = useState();
	const getIsEditable = (status) => {
		setIsEditable(status);
	}

	/* Run on load or with event listeners */
	useEffect(() => {
		/* Set editing mode based on window size */
		function checkWidth() {
			if (window.innerWidth < 768) {
				setIsEditable(false);
			} else {
				setIsEditable(true);
			}
		}
		window.addEventListener('resize', checkWidth);
		checkWidth();

		return () => window.removeEventListener('resize', checkWidth);
	}, []);
	return (
		<>
			<PageHeader />
			<NotificationsHeader />
			<RoundedBoxAccordion toggleText='Event-based Email Notifications' isExpanded={true}>
				<div className="main-toggle">
					<SlideToggle
						classes={['main-toggle__toggle']}
						labelText='Receive alerts as faults occur, each primary fault sent in separate email'
						labelLocation='right'
					/>
					<a href="#">View sample email</a>
				</div>
				<div className="fault-boxes">
					<Heading level='h4' text='Fault Priorities To Include' />
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
			</RoundedBoxAccordion>
			<RoundedBoxAccordion toggleText='Periodic Email Notifications' isExpanded={false}>
				<div className="main-toggle">
					<SlideToggle
						classes={['main-toggle__toggle']}
						labelText='Combine all insights into a digest emailed at selected frequency'
						labelLocation='right'
					/>
					<a href="#">View sample email</a>
				</div>
				<div className="frequency-group">
					<Heading level='h4' text='Frequency' />
					<div className="frequency-group__select">
						<Select
							type='underline'
							size='small'
							validationText='Validation Message'
							options={[
								{
									'value': 'select',
									'label': 'Select'
								},
								{
									'value': 'once-daily',
									'label': 'Once Daily'
								},
								{
									'value': 'twice-Daily',
									'label': 'Twice Daily'
								},
								{
									'value': 'weekly',
									'label': 'Weekly'
								}
							]}
						/>
						<Tooltip tooltipText='This will control how often the periodic email is sent to the recipients' />
					</div>
					<Checkbox labelText='Include Spreadsheet as an Email Attachment.' />
				</div>
				<div className="fault-group">
					<Heading level='h4' text='Fault Priorities To Include' />
					<div className="fault-group__checkbox-wrap">
						<div className="fault-group__checkbox">
							<Image
								alt='Immediate Action'
								src={`/icons/multicolor/immediate-action.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
							<Checkbox labelText='Immediate Action' />
						</div>
						<div className="fault-group__checkbox">
							<Image
								alt='Service Within 3 Days'
								src={`/icons/multicolor/service-3days.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
							<Checkbox labelText='Service Within 3 Days' />
						</div>
						<div className="fault-group__checkbox">
							<Image
								alt='Service Within 7 Days'
								src={`/icons/multicolor/service-7days.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
							<Checkbox labelText='Service Within 7 Days' />
						</div>
						<div className="fault-group__checkbox">
							<Image
								alt='Next Planned Maintenance'
								src={`/icons/multicolor/planned-maintenance.svg`}
								layout="responsive"
								width={32}
								height={32}
							/>
							<Checkbox labelText='Next PM (Planned Maintenance)' />
						</div>
					</div>
				</div>
				<div className="maintenance-group">
					<SlideToggle
						labelText='Maintenance Insights'
						labelLocation='right'
					/>
				</div>
				<div className="prognostics-group">
					<div className="prognostics-group__toggle-wrap">
						<SlideToggle
							labelText='Prognostics Insights'
							labelLocation='right'
						/>
						<Tooltip tooltipText='Prognostics Insights are dependent on Equipment connectivity and component model availability' />
					</div>
					<Checkbox labelText='30 Days To Failure' />
					<Checkbox labelText='90 Days To Failure' />
				</div>
			</RoundedBoxAccordion>
			<RoundedBoxAccordion toggleText='Field Action Notifications'>
				<div className="main-toggle">
					<SlideToggle
						classes={['main-toggle__toggle']}
						labelText='Emailed monthly'
						labelLocation='right'
					/>
				</div>
			</RoundedBoxAccordion>
			<RoundedTableToggle toggleText='Email Recipients' recipientCount={7} >
				<RecipientsTable recipients={recipients} />
			</RoundedTableToggle>
			<RoundedBoxAccordion toggleText='External Delivery System'>
				<div className="external-group">
					<Heading level='h4' text='Send Insights to:' />
					<Select
						type='underline'
						size='small'
						validationText='Validation Message'
						options={[
							{
								'value': 'select',
								'label': 'Select'
							},
							{
								'value': 'none',
								'label': 'None'
							},
							{
								'value': 'option-2',
								'label': 'Option 2'
							}
						]}
					/>
					<Tooltip tooltipText='This will control how often the periodic email is sent to the recipients' />
				</div>
			</RoundedBoxAccordion>
			<Modal
				classes={['add-recipient']}
				modalID='add-recipient'
				modalUpperTitle='Add Recipient'
			>
				<AddRecipient />
			</Modal>
			<Modal
				classes={['edit-recipient']}
				modalID='edit-recipient'
				modalUpperTitle='Edit Recipient'
				modalLowerTitle='kim.brooks@gmail.com'
				getIsEditable={getIsEditable}
				isEditable={isEditable}
			>
				<EditRecipient
					isEditable={isEditable}
				/>
			</Modal>
			<Toast
				text='Recipient successfully added'
				toastID='recipient-add-success'
				status='success'
			/>
			<Toast
				text='Recipient successfully updated'
				toastID='recipient-edit-success'
				status='success'
			/>
		</>
	);
};

export default Notifications;
