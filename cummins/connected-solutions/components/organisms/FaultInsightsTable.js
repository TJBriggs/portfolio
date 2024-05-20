import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _debounce from 'lodash/debounce';
import CircleIcon from '../atoms/CircleIcon';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import SortIcon from '../atoms/SortIcon';
import Pagination from '../atoms/Pagination';
import RowToggle from '../atoms/RowToggle';
import ShowCountDropdown from '../atoms/ShowCountDropdown';
import ShowMore from '../atoms/ShowMore';
import SortByDropdown from '../atoms/SortByDropdown';
import TableMeta from '../atoms/TableMeta';
import TableFooter from '../molecules/TableFooter';
import TableHeader from '../molecules/TableHeader';
import TableRows from '../molecules/TableRows';

/**
 * @example
 * <FaultInsightsTable
 *    @param {array} faultInsights - (insight data for table)
 * />
 */
const FaultInsightsTable = ({ faultInsights }) => {

	useEffect(() => {
		/* Close modal when browser is larger than 768 */
		const checkWidth = () => {
			let windowWidth = window.innerWidth;
			const html = document.getElementsByTagName('html')[0];
			const tableRows = document.querySelectorAll('.table-rows__row');
			tableRows.forEach(function (row) {
				if (row.classList.contains('mobile-modal--open')) {
					const close = row.querySelector('.close-modal');
					const subtable = row.querySelector('.subtable');
					const showButton = row.querySelector('.show-details');
					if (windowWidth >= 768) {
						row.classList.remove('mobile-modal--open');
						html.classList.remove('mobile-modal--open');
						subtable.classList.remove('mobile-subtable--open');
						close.classList.remove('button--visible');
						showButton.classList.add('button--visible');
					}
				}
			});
		};
		const debounceCheckWidth = _debounce(checkWidth, 500);
		window.addEventListener('resize', debounceCheckWidth);
		checkWidth();
		return () => window.removeEventListener('resize', debounceCheckWidth);
	}, []);

	const handleSort = (event) => {
		let newStatus;
		const target = event.target;
		const columnValue = target.getAttribute('data-value');
		const headerCells = document.querySelectorAll('.table-header__cell');
		if (event.target.classList.contains('icon')) {
			target = target.parentNode.parentNode;
		}
		if (target.classList.contains('sort--asc')) {
			newStatus = 'sort--desc';
		} else if (target.classList.contains('sort--desc')) {
			newStatus = 'sort--asc';
		} else {
			newStatus = 'sort--asc';
		}
		/* Remove all sort classes from all columns */
		headerCells.forEach(function (cell) {
			if (cell.classList.contains('sort--asc')) {
				cell.classList.remove('sort--asc');
			} else if (cell.classList.contains('sort--desc')) {
				cell.classList.remove('sort--desc');
			}
		});
		/* Add class to new column */
		target.classList.add(newStatus);
		/* Logic to sort table or reset table below, based on columnValue and newStatus */
	}
	const handleOpen = (event) => {
		const html = document.getElementsByTagName('html')[0];
		const target = event.target;
		const row = target.parentNode;
		const close = row.querySelector('.close-modal');
		const subtable = row.querySelector('.subtable');
		const showButton = row.querySelector('.show-details');
		html.classList.add('mobile-modal--open');
		showButton.classList.remove('button--visible');
		row.classList.add('mobile-modal--open');
		close.classList.add('button--visible');
		subtable.classList.add('mobile-subtable--open');
	};

	const handleClose = (event) => {
		let row;
		const html = document.getElementsByTagName('html')[0];
		const target = event.target;
		if (target.classList.contains('close-modal')) {
			row = target.parentNode;
		} else {
			row = target.parentNode.parentNode;
		}
		const close = row.querySelector('.close-modal');
		const subtable = row.querySelector('.subtable');
		const showButton = row.querySelector('.show-details');
		close.classList.remove('button--visible');
		subtable.classList.remove('mobile-subtable--open');
		showButton.classList.add('button--visible');
		row.classList.remove('mobile-modal--open');
		html.classList.remove('mobile-modal--open');
	};
	return (
		<div className={`table fault-insights`}>
			<div className='table__insights-wrap'>
				<SortByDropdown
					classes={['mobile-only']}
					text='Sort by:'
					type='underline'
					size='small'
					initialLabel='First Occurence'
					options={[
						{
							'value': 'first',
							'label': 'First Occurrence'
						},
						{
							'value': 'first',
							'label': 'Last Occurrence',
						},
					]}
				/>

				<TableHeader>
					<div className="table-header__row">
						<div className='table-header__cell col-1'></div>
						<div className='table-header__cell col-2 sortable' data-value='fault-code' onClick={handleSort}>Fault Code <SortIcon /></div>
						<div className='table-header__cell col-3'>Fault Description</div>
						<div className='table-header__cell col-4'>Related Faults</div>
						<div className='table-header__cell col-5 sortable' data-value='occurence-time' onClick={handleSort}>Occurence Time <SortIcon /></div>
						<div className='table-header__cell col-6 sortable' data-value='notice' onClick={handleSort}>Notice <SortIcon /></div>
					</div>
				</TableHeader>
				<TableRows>
					{faultInsights.map((insight, index) => (
						<div className={`table-rows__row`} key={`fi-${index}`}>
							<button className='close-modal' onClick={handleClose}><Icon iconName='close-thick' /></button>
							<div className={`table-rows__cell col-1`}>
								<RowToggle />
							</div>
							<div className={`table-rows__cell col-2`}>
								<label className='mobile-only primary-heading'>PRIMARY FAULT CODE</label>
								<a className='h4-compact' href='#'>{insight.primaryFault}</a>
							</div>
							<div className={`table-rows__cell col-3`}>
								<Heading level='h4' classNames='compact mobile-only' text='Fault Description' />
								{insight.faultDescription}
							</div>
							<div className={`table-rows__cell col-4`}>
								<Heading level='h4' classNames='compact mobile-only' text='Related Faults' />
								<div className='related-faults'>
									{insight.relatedFaults.map((fault, index) => (
										<span key={`rf-${index}`} className='related-fault'>
											{fault}
											<span className='mobile-only'>{index !== insight.relatedFaults.length - 1 ? ', ' : ''}</span>
										</span>
									))}
								</div>
							</div>
							<div className={`table-rows__cell col-5`}>
								<Heading level='h4' classNames='compact mobile-only' text='Occurence Time' />
								{insight.occurenceTime}
							</div>
							<div className={`table-rows__cell col-6`}>
								<Heading level='h4' classNames='compact mobile-only' text='Notice' />
								<div className="notice-wrap">
									{insight.notices.map((notice, index) => (
										<div className="notice-wrap__item" key={`pn-${index}`}>
											<CircleIcon iconName={notice === 'active' ? 'check' : notice} backgroundColor={notice} />
											<span className='notice-text'>{notice}</span>
										</div>
									))}
								</div>
							</div>
							<button className='show-details mobile-only button--visible' onClick={handleOpen}>Details</button>
							<div className={`subtable`}>
								<div className='subtable__wrap'>
									<div className='subtable__col col--1'>
										<Heading level='h3' classNames='compact' text='Primary Fault Information' />
										<div className='subtable__item'>
											<Heading level='h4' classNames='compact' text='Troubleshooting Assistance' />
											{insight.primaryInfo.troubleshooting}
										</div>
										<div className='subtable__item'>
											<Heading level='h4' classNames='compact' text='Recommended Action' />
											{insight.primaryInfo.recommended}
										</div>
										<div className='subtable__item'>
											<div className='spn-wrap'>
												<div className='spn-wrap__item'>
													<Heading level='h4' classNames='compact' text='SPN' />
													{insight.primaryInfo.spn}
												</div>
												<div className='spn-wrap__item'>
													<Heading level='h4' classNames='compact' text='FMI' />
													{insight.primaryInfo.fmi}
												</div>
											</div>
										</div>
									</div>
									<div className='subtable__col col--2'>
										<Heading level='h3' classNames='compact' text='Suggested Root Cause' />
										<div className='subtable__item'>
											<Heading level='h4' classNames='compact' text='Component or System' />
											{insight.rootCause.components.map((component, index) => (
												<div className='component' key={`comp-${index}`}>
													<span className='component__name'>{component.name}</span>
													<span className='component__probability'>{component.probability}</span>
												</div>
											))}
										</div>
										<div className='subtable__item'>
											<p>{insight.rootCause.details}</p>
											<p><strong>{insight.rootCause.torqueDerate}</strong> Torque Derate in <strong>{insight.rootCause.operatingHours}</strong> Operating Hours after initial fault occurrence</p>
										</div>
									</div>
									<div className='subtable__col col--3'>
										<Heading level='h3' classNames='compact' text='Related Fault Information' />
										<div className='horizontal-items'>
											{insight.relatedInfo.map((info, index) => (
												<div className='horizontal-items__row' key={`srf-${index}`}>
													<div className='horizontal-items__item col-1'>
														<Heading level='h4' classNames='compact' text='Fault Code' />
														{info.faultCode}
													</div>
													<div className='horizontal-items__item col-2'>
														<Heading level='h4' classNames='compact' text='Date Occured' />
														{info.dateOccured}
													</div>
													<div className='horizontal-items__item col-3'>
														<Heading level='h4' classNames='compact' text='Time Occured' />
														{info.timeOccured}
													</div>
													<div className='horizontal-items__item col-4'>
														<div className='spn-wrap'>
															<div className='spn-wrap__item'>
																<Heading level='h4' classNames='compact' text='SPN' />
																{info.spn}
															</div>
															<div className='spn-wrap__item'>
																<Heading level='h4' classNames='compact' text='FMI' />
																{info.fmi}
															</div>
														</div>
													</div>
													<div className='horizontal-items__item col-5'>
														<Heading level='h4' classNames='compact' text='Fault Description' />
														{info.faultDescription}
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</TableRows>
			</div >
			<TableFooter>
				<div className="table-footer__wrap">
					<TableMeta />
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
				<ShowMore classes={['mobile-only']} />
			</TableFooter>
		</div >
	);
};

FaultInsightsTable.propTypes = {
	faultInsights: PropTypes.array.isRequired,
};

export default FaultInsightsTable;
