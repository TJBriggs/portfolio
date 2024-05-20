import { useEffect } from 'react';
import Icon from './Icon';

const RowToggle = () => {
	const handleToggle = (event) => {
		const target = event.target;
		console.log(target);
		const parent = target.parentNode;
		const parentRow = target.closest('.table-rows__row');
		const subTable = parentRow.querySelector('.subtable');
		parent.classList.toggle('subtable--open');
		parentRow.classList.toggle('subtable--open');
		subTable.classList.toggle('subtable--open');
	}
	return (
		<a className={`row-toggle desktop-only`} onClick={handleToggle}>
			<Icon iconName='caret-down' classes={['row-toggle__icon']} />
		</a>
	);
};

export default RowToggle;
