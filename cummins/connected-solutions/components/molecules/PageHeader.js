import PropTypes from 'prop-types';
import BackLink from '../atoms/BackLink';

/**
 * @example
 * <PageHeader
 * @param {array} classes - (additional classes for styling purposes)
 * />
 */
const PageHeader = ({ classes }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	return (
		<section className={`page-header${specialClasses}`}>
			<div className="page-header__default-inner">
				<div className='page-header__wrap'>
					<BackLink
						text='Go Back'
						url='/'
					/>
				</div>
			</div>
		</section>
	);
};
PageHeader.defaultProps = {
	classes: null
};

PageHeader.propTypes = {
	classes: PropTypes.array,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default PageHeader;
