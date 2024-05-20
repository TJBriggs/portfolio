import TableHeader from './TableHeader';
import SortIcon from '../atoms/SortIcon';

const FleetHealthTableHeader = () => {
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
				<div className='table-header__cell col-1'><span className='screen-reader-text'>Severity Icon</span></div>
				<div className='table-header__cell col-2 sortable' data-value='asset-name' onClick={handleSort}>Asset Name <SortIcon /></div>
				<div className='table-header__cell col-3 sortable' data-value='asset-group' onClick={handleSort}>Asset Group <SortIcon /></div>
				<div className='table-header__cell col-4 sortable' data-value='fault-code' onClick={handleSort}>Primary Fault Code <SortIcon /></div>
				<div className='table-header__cell col-5 sortable' data-value='last-occurence' onClick={handleSort}>Last Fault Occurence <SortIcon /></div>
				<div className='table-header__cell col-6 sortable' data-value='spn' onClick={handleSort}>SPN <SortIcon /></div>
				<div className='table-header__cell col-7 sortable' data-value='fmi' onClick={handleSort}>FMI <SortIcon /></div>
				<div className='table-header__cell col-8 sortable' data-value='fault-description' onClick={handleSort}>Fault Description <SortIcon /></div>
				<div className='table-header__cell col-9 sortable' data-value='recommended-action' onClick={handleSort}>Recommended Action <SortIcon /></div>
				<div className='table-header__cell col-10 sortable' data-value='derate-notice' onClick={handleSort}>Derate Notice <SortIcon /></div>
				<div className='table-header__cell col-11 sortable' data-value='troubleshooting' onClick={handleSort}>Troubleshooting Assistance <SortIcon /></div>
				<div className='table-header__cell col-12 sortable' data-value='probabilities' onClick={handleSort}>Component / Stystem Probability <SortIcon /></div>
				<div className='table-header__cell col-13 sortable' data-value='related-faults' onClick={handleSort}>Related Faults <SortIcon /></div>
				<div className='table-header__cell col-14 sortable' data-value='vin' onClick={handleSort}>VIN <SortIcon /></div>
				<div className='table-header__cell col-15 sortable' data-value='ein' onClick={handleSort}>EIN <SortIcon /></div>
			</div>
		</TableHeader>
	);
};

export default FleetHealthTableHeader;
