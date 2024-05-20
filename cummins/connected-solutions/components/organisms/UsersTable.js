import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import UserTableHeader from '../molecules/UserTableHeader';
import UserTableRows from '../molecules/UserTableRows';
import UserTableFooter from '../molecules/UserTableFooter';

/**
 * @example
 * <UsersTable
 *    @param {array} userData - (users data for table)
 * />
 */
const UsersTable = ({ userData }) => {
	return (
		<Table classes={['users-table']}>
			<div className="table__wrap">
				<UserTableHeader />
				<UserTableRows userData={userData} />
			</div>
			<UserTableFooter />
		</Table>
	);
};

UsersTable.propTypes = {
	userData: PropTypes.array.isRequired,
};

export default UsersTable;
