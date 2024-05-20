import PropTypes from 'prop-types';

/**
 * @example
 * <TableFooter
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const TableFooter = ({ classes, children }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`table-footer${specialClasses}`}>
			{children}
		</div>
	);
};

TableFooter.defaultProps = {
	classes: null,
};

TableFooter.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default TableFooter;
