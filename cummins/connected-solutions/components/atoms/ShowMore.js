import PropTypes from 'prop-types';

/**
 * @example
 * <ShowMore
 * @param {array} classes - (additional classes for styling purposes)
 * />
 */
const ShowMore = ({ classes }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleClick = () => {
		console.log('Show More Table Items');
	};
	return (
		<div className={`show-more${specialClasses}`}>
			<p><span>3</span> of <span>3</span> items</p>
			<a className='button primary medium' onClick={handleClick}>Show More</a>
		</div>
	);
};

ShowMore.defaultProps = {
	classes: null,
};

ShowMore.propTypes = {
	classes: PropTypes.array
};

export default ShowMore;
