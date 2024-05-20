import { useEffect } from 'react';
import PropTypes from 'prop-types';
import _debounce from 'lodash/debounce';
import TableHeader from '../molecules/TableHeader';
import TableRows from '../molecules/TableRows';
import TableFooter from '../molecules/TableFooter';
import TableMeta from '../atoms/TableMeta';
import Pagination from '../atoms/Pagination';
import ShowCountDropdown from '../atoms/ShowCountDropdown';
import ShowMore from '../atoms/ShowMore';
import SortByDropdown from '../atoms/SortByDropdown';
import Icon from '../atoms/Icon';
import SortIcon from '../atoms/SortIcon';
import CircleIcon from '../atoms/CircleIcon';

/**
 * @example
 * <PrognosticsTable
 *    @param {array} prognostics - (insight data for table)
 * />
 */
const PrognosticsTable = ({ prognostics }) => {

	useEffect(() => {
		/* Close modal when browser is larger than 768 */
		const checkWidth = () => {
			let windowWidth = window.innerWidth;
			const html = document.getElementsByTagName('html')[0];
			const tableRows = document.querySelectorAll('.table-rows__row');
			tableRows.forEach(function (row) {
				if (row.classList.contains('mobile-modal--open')) {
					const close = row.querySelector('.close-modal');
					const moreDetails = row.querySelector('.more-details');
					const showButton = row.querySelector('.show-details');
					if (windowWidth >= 768) {
						row.classList.remove('mobile-modal--open');
						html.classList.remove('mobile-modal--open');
						moreDetails.classList.remove('more-details--open');
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
		const row = target.parentNode.parentNode;
		const close = row.querySelector('.close-modal');
		const moreDetails = row.querySelector('.more-details');
		const showButton = row.querySelector('.show-details');
		html.classList.add('mobile-modal--open');
		showButton.classList.remove('button--visible');
		row.classList.add('mobile-modal--open');
		close.classList.add('button--visible');
		moreDetails.classList.add('more-details--open');
	};

	const handleClose = (event) => {
		let row;
		const html = document.getElementsByTagName('html')[0];
		const target = event.target;
		if (target.classList.contains('close-modal')) {
			row = target.parentNode.parentNode;
		} else {
			row = target.parentNode.parentNode.parentNode;
		}
		const close = row.querySelector('.close-modal');
		const moreDetails = row.querySelector('.more-details');
		const showButton = row.querySelector('.show-details');
		close.classList.remove('button--visible');
		moreDetails.classList.remove('more-details--open');
		showButton.classList.add('button--visible');
		row.classList.remove('mobile-modal--open');
		html.classList.remove('mobile-modal--open');
	};
	return (
		<div className={`table prognostics`}>
			<div className='table__prognostics-wrap'>
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
						<div className='table-header__cell col-1 sortable' data-value='status' onClick={handleSort}>Status <SortIcon /></div>
						<div className='table-header__cell col-2 sortable' data-value='date-notified' onClick={handleSort}>Date Notified <SortIcon /></div>
						<div className='table-header__cell col-3 sortable' data-value='components' onClick={handleSort}>Components <SortIcon /></div>
						<div className='table-header__cell col-4 sortable' data-value='expected-failure' onClick={handleSort}>Expected Failure <SortIcon /></div>
						<div className='table-header__cell col-5 sortable' data-value='max-miles' onClick={handleSort}>Max Miles <SortIcon /></div>
						<div className='table-header__cell col-6 sortable' data-value='min-miles' onClick={handleSort}>Min Miles <SortIcon /></div>
						<div className='table-header__cell col-7 sortable' data-value='recommended-action' onClick={handleSort}>Recommended Action <SortIcon /></div>
						<div className='table-header__cell col-8 sortable' data-value='asset-groups' onClick={handleSort}>Asset Groups <SortIcon /></div>
						<div className='table-header__cell col-9 sortable' data-value='srt' onClick={handleSort}>SRT <SortIcon /></div>
						<div className='table-header__cell col-10 sortable' data-value='odometer-miles' onClick={handleSort}>Odometer Miles <SortIcon /></div>
						<div className='table-header__cell col-11 sortable' data-value='esn' onClick={handleSort}>ESN <SortIcon /></div>
						<div className='table-header__cell col-12'>Warranty</div>
					</div>
				</TableHeader>
				<TableRows>
					{prognostics.map((prognostic, index) => (
						<div className={`table-rows__row`} key={`p-${index}`}>
							<div className='table-rows__row-wrap'>
								<button className='close-modal' onClick={handleClose}><Icon iconName='close-thick' /></button>
								<div className={`table-rows__cell col-1`}>
									<label className='mobile-only bold'>Status</label>
									<div className='circle-icon__wrap'>
										<CircleIcon iconName={prognostic.status === 'active' ? 'check' : 'inactive'} backgroundColor={prognostic.status === 'active' ? 'active' : 'inactive'} />
										<span className='status-text'>{prognostic.status}</span>
									</div>
								</div>
								<div className={`table-rows__cell col-2`}>
									<label className='mobile-only bold'>Date Notified</label>
									{prognostic.dateNotified}
								</div>
								<div className={`table-rows__cell col-3`}>
									<label className='mobile-only primary-heading'>COMPONENT</label>
									{prognostic.components}
								</div>
								<div className={`table-rows__cell col-4`}>
									<label className='mobile-only bold'>Expected Failure</label>
									{prognostic.expectedFailure}
								</div>
								<div className={`table-rows__cell col-5`}>
									<label className='mobile-only bold'>Max Miles</label>
									{prognostic.maxMiles}
								</div>
								<div className={`table-rows__cell col-6`}>
									<label className='mobile-only bold'>Min Miles</label>
									{prognostic.minMiles}
								</div>
								<button className='show-details mobile-only button--visible' onClick={handleOpen}>Details</button>
								<div className='more-details'>
									<div className='more-details__wrap'>
										<div className={`table-rows__cell col-7`}>
											<label className='mobile-only bold'>Recommended Action</label>
											{prognostic.recommendedAction}
										</div>
										<div className={`table-rows__cell col-8`}>
											<label className='mobile-only bold'>Asset Groups</label>
											<div className='asset-groups'>
												{prognostic.assetGroups.map((group, index) => (
													<span key={`ag-${index}`} className='asset-groups__group'>
														{group}
														{index !== prognostic.assetGroups.length - 1 &&
															<span className='comma'>, </span>
														}
													</span>
												))}
											</div>
										</div>
										<div className={`table-rows__cell col-9`}>
											<label className='mobile-only bold'>SRT</label>
											{prognostic.srt}
										</div>
										<div className={`table-rows__cell col-10`}>
											<label className='mobile-only bold'>Odometer Miles</label>
											{prognostic.odometerMiles}
										</div>
										<div className={`table-rows__cell col-11`}>
											<label className='mobile-only bold'>ESN</label>
											{prognostic.esn}
										</div>
										<div className={`table-rows__cell col-12`}>
											<label className='mobile-only bold'>Warranty</label>
											<a href='#'>Warranty Link</a>
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

PrognosticsTable.propTypes = {
	prognostics: PropTypes.array.isRequired,
};

export default PrognosticsTable;
