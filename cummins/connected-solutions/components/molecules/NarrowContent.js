import PropTypes from 'prop-types';

/**
 * @example
 * <NarrowContent
 *    @param {array} classNames - (additional classes for styling purposes)
 * />
 */
const NarrowContent = ({ children, classNames }) => {
	return (
		<section className={`narrow-content ${classNames}`}>
			<div className='narrow-content__narrow-inner'>
				{children}
			</div>
		</section>
	);
};

NarrowContent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	classNames: PropTypes.string
};

export default NarrowContent;
