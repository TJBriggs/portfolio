import ShowCountDropdown from '../atoms/ShowCountDropdown';
import TableFooter from './TableFooter';
import TableMeta from '../atoms/TableMeta';
import Pagination from '../atoms/Pagination';
import ShowMore from '../atoms/ShowMore';

const UserTableFooter = () => {
	return (
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
			<ShowMore />
		</TableFooter>
	);
};

export default UserTableFooter;
