import PropTypes from 'prop-types';
import TableRows from './TableRows';
import RecipientsTableRow from './RecipientsTableRow';

/**
 * @example
 * <RecipientsTableRows
 *    @param {array} recipients - (recipients data for table)
 * />
 */
const RecipientsTableRows = ({ recipients }) => {
	return (
		<TableRows>
			{recipients.map((recipient, index) => (
				<RecipientsTableRow recipient={recipient} key={index} />
			))}
		</TableRows>
	);
};

RecipientsTableRows.propTypes = {
	recipients: PropTypes.array.isRequired,
};

export default RecipientsTableRows;
