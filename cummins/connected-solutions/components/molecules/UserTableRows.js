import PropTypes from 'prop-types';
import TableRows from './TableRows';
import UserTableRow from './UserTableRow';

/**
 * @example
 * <UserTableRows
 *    @param {array} userData - (users data for table)
 * />
 */
const UserTableRows = ({ userData }) => {
	return (
		<TableRows>
			{userData.map((user, index) => (
				<UserTableRow user={user} key={index} />
			))}
		</TableRows>
	);
};

UserTableRows.propTypes = {
	userData: PropTypes.array.isRequired,
};

export default UserTableRows;
