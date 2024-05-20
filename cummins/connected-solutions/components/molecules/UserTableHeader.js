import TableHeader from './TableHeader';
import SortIcon from '../atoms/SortIcon';

const UserTableHeader = () => {
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
				<div className='table-header__cell col-1'>Select</div>
				<div className='table-header__cell col-2'>Name</div>
				<div className='table-header__cell col-3 sortable' data-value='email-address' onClick={handleSort}>Email Address <SortIcon /></div>
				<div className='table-header__cell col-4 sortable' data-value='user-role' onClick={handleSort}>Role <SortIcon /></div>
				<div className='table-header__cell col-5 sortable' data-value='fleet-access' onClick={handleSort}>Fleet Access <SortIcon /></div>
				<div className='table-header__cell col-6 sortable' data-value='user-status' onClick={handleSort}>Status <SortIcon /></div>
				<div className='table-header__cell col-7 sortable' data-value='actions'>Actions</div>
			</div>
		</TableHeader>
	);
};

export default UserTableHeader;
