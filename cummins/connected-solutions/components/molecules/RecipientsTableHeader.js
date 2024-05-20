import TableHeader from './TableHeader';
import SortIcon from '../atoms/SortIcon';

const RecipientsTableHeader = () => {
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
	return (
		<TableHeader>
			<div className="table-header__row">
				<div className='table-header__cell col-1 sortable' data-value='email' onClick={handleSort}>Recipient Email Address <SortIcon /></div>
				<div className='table-header__cell col-2 sortable' data-value='work-area' onClick={handleSort}>Work Area <SortIcon /></div>
				<div className='table-header__cell col-3 sortable' data-value='language' onClick={handleSort}>Language <SortIcon /></div>
				<div className='table-header__cell col-4 sortable' data-value='time-zone' onClick={handleSort}>Time Zone <SortIcon /></div>
				<div className='table-header__cell col-5 sortable' data-value='asset-groups' onClick={handleSort}>Asset Groups <SortIcon /></div>
				<div className='table-header__cell col-6 sortable' data-value='actions'>Actions</div>
			</div>
		</TableHeader>
	);
};

export default RecipientsTableHeader;
