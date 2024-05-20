import PropTypes from 'prop-types';

const RoundedBox = ({ children, classes, width }) => {
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	if (width === 'full') {
		return (
			<section className={`full-box${specialClasses}`}>
				<div className="full-box__default-inner">
					<div className='rounded-box'>
						{children}
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<div className={`rounded-box${specialClasses}`}>
				{children}
			</div>
		);
	}
};

RoundedBox.defaultProps = {
	classes: null
};

RoundedBox.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	classes: PropTypes.array,
	width: PropTypes.string,
};

export default RoundedBox;
