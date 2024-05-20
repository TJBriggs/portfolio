import PropTypes from 'prop-types';

/**
 * @example
 * <secondaryTable
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */
const SecondaryTable = ({ children, classes }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<div className={`secondary-table${specialClasses}`}>
			<div className="secondary-table__default-inner">
				{children}
			</div>
		</div>
	);
};

SecondaryTable.defaultProps = {
	classes: null
};

SecondaryTable.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default SecondaryTable;
