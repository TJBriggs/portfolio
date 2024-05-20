import PropTypes from 'prop-types';

/**
 * @example
 * <Table
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const Table = ({ children, classes }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`table${specialClasses}`}>
			<div className="table__default-inner">
				{children}
			</div>
		</div>
	);
};

Table.defaultProps = {
	classes: null,
};

Table.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default Table;
