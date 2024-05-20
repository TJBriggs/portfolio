import Heading from '../atoms/Heading';
import SortIcon from '../atoms/SortIcon';
import Icon from '../atoms/Icon';
import ShowMore from '../atoms/ShowMore';
import SortByDropdown from '../atoms/SortByDropdown';

const PrognosticsCol = () => {
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
		<div className='prognostics-summary'>
			<Heading level='h3' classNames='prognostics-summary__heading compact' text='Prognostics Summary' />
			<div className="prognostics-summary__mobile-sort">
				<SortByDropdown
					classes={['prognostics-sort-by']}
					text='Sort by:'
					type='underline'
					size='small'
					initialLabel='Components'
					options={[
						{
							'value': 'components',
							'label': 'Components',
						},
						{
							'value': 'engine-model',
							'label': 'Engine Model',
						},
						{
							'value': 'quantity',
							'label': 'Quantity',
						}
					]}
				/>
			</div>
			<div className='prognostics-summary__table'>
				<div className="prognostics-summary__table-header">
					<div className="prognostics-summary__header-row">
						<div className='prognostics-summary__cell col-1 sortable' data-value='components' onClick={handleSort}>Components <SortIcon /></div>
						<div className='prognostics-summary__cell col-2 sortable' data-value='engine-model' onClick={handleSort}>Engine Model <SortIcon /></div>
						<div className='prognostics-summary__cell col-3 sortable' data-value='qty' onClick={handleSort}>Qty <SortIcon /></div>
					</div>
				</div>
				<div className="prognostics-summary__table-rows">
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							NOx Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2350 114B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							201
						</div>
					</div>
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							NOx Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2350 116B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							20
						</div>
					</div>
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							PM Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2350 118B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							34
						</div>
					</div>
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							PM Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2350 111B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							121
						</div>
					</div>
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							Intake NOx Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2349 211B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							4
						</div>
					</div>
					<div className="prognostics-summary__table-row">
						<div className='prognostics-summary__cell col-1'>
							Intake NOx Sensors
						</div>
						<div className='prognostics-summary__cell col-2'>
							<Heading level='h4' classNames='compact' text='Engine Model' />
							X15 CM2349 215B
						</div>
						<div className='prognostics-summary__cell col-3'>
							<Heading level='h4' classNames='compact' text='Quantity' />
							24
						</div>
					</div>
					<ShowMore />
				</div>
			</div>
		</div>
	);
};

export default PrognosticsCol;
