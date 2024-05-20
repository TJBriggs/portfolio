import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import RecipientsTableHeader from '../molecules/RecipientsTableHeader';
import RecipientsTableRows from '../molecules/RecipientsTableRows';

/**
 * @example
 * <RecipientsTable
 *    @param {array} recipeints - (recipients data for table)
 * />
 */
const RecipientsTable = ({ recipients }) => {
	return (
		<Table classes={['recipients-table']}>
			<div className="table__wrap">
				<RecipientsTableHeader />
				<RecipientsTableRows recipients={recipients} />
			</div>
		</Table>
	);
};

RecipientsTable.propTypes = {
	recipients: PropTypes.array.isRequired,
};

export default RecipientsTable;
