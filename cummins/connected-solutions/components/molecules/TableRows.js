import PropTypes from 'prop-types';

/**
 * @example
 * <Table
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const TableRows = ({ classes, children }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`table-rows${specialClasses}`}>
			{children}
		</div>
	);
};

TableRows.defaultProps = {
	classes: null,
};

TableRows.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default TableRows;
