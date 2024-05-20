import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <Pagination
 *    @param {number} pages - (number of page links to display)
 *    @param {array} classes - (additional classes for styling purposes)
 * />
 */

const Pagination = ({
	pages,
	classes
}) => {
	const [prevDisabled, setPrevDisabled] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(false);
	const [activeIndex, setActiveIndex] = useState(1);
	let specialClasses = '';
	if (classes !== null) {
		classes.forEach((x) => {
			specialClasses += ` ${x}`;
		});
	}
	const handleClick = (event) => {
		const page = parseInt(event.target.dataset.page);
		if (page === 1) {
			setPrevDisabled(true);
			setNextDisabled(false);
		} else if (page === pages) {
			setPrevDisabled(false);
			setNextDisabled(true);
		} else {
			setPrevDisabled(false);
			setNextDisabled(false);
		}
		setActiveIndex(page);
	};
	return (
		<ul className='pagination'>
			<li className='pagination__arrow'>
				<a className={`pagination__arrow-link ${prevDisabled ? 'disabled' : ''}`}>
					<Icon iconName='caret-left' />
				</a>
			</li>
			{Array.from(Array(pages), (e, i) => {
				return <li className='pagination__number' key={i + 1}><a className={`pagination__number-link ${activeIndex === i + 1 ? 'active' : ''}`} data-page={i + 1} onClick={handleClick}>{i + 1}</a></li>
			})}
			<li className='pagination__arrow'>
				<a className={`pagination__arrow-link ${nextDisabled ? 'disabled' : ''}`}>
					<Icon iconName='caret-right' />
				</a>
			</li>
		</ul>
	);
};

Pagination.defaultProps = {
	pages: 1,
	classes: null
};

Pagination.propTypes = {
	pages: PropTypes.number,
	classes: PropTypes.array,

};

export default Pagination;
