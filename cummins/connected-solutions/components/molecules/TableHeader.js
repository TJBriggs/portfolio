import PropTypes from 'prop-types';

/**
 * @example
 * <TableHeader
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const TableHeader = ({ classes, children }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`table-header${specialClasses}`}>
			{children}
		</div>
	);
};

TableHeader.defaultProps = {
	classes: null,
};

TableHeader.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default TableHeader;
