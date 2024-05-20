import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @example
 * <RoundedTabs
 *    @param {string} ariaLabel - (label for tablist, is requrired)
 *    @param {string} uniqueID - (ID used to determine active content, is requrired)
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {string} type - (rounded, underline, rounded is default)
 *    @param {array} options - (option label, value, and url are requrired)
 *    @param {func} onClick - (function to captue selected tabs in parent component)
 * />
 */
const TabToggles = ({ ariaLabel, uniqueID, classNames, type, options, onClick }) => {
	const [selected, setSelected] = useState('tab-0');
	const handleClick = (event) => {
		const id = event.target.id;
		const panelID = id.replace('tab-', 'panel-');
		const activePanel = uniqueID + '-' + panelID;
		setSelected(id);
		if (onClick) {
			onClick(activePanel);
		}
	}

	/* Determine active tab on load */
	useEffect(() => {
		const panelID = selected.replace('tab-', 'panel-');
		const activePanel = uniqueID + '-' + panelID;
		if (onClick) {
			onClick(activePanel);
		}
	}, [selected, onClick, uniqueID]);
	return (
		<div id={uniqueID} className={`tab-toggles ${type}${classNames ? ' ' + classNames : ''}`}>
			<div className={`tab-toggles__wrap selected-${selected}`} role='tablist' aria-label={ariaLabel}>
				{options.map((option, index) => (
					<button className={`tab-toggles__tab-button${selected === 'tab-' + index ? ' selected' : ''}`} id={`tab-${index}`} key={index} role='tab' aria-selected={selected === 'tab-' + index ? true : false} tabIndex={index === 0 ? '0' : '-1'} data-panel={`${uniqueID}-panel-${index}`} onClick={handleClick}>
						{option.text}
					</button>
				))}
			</div>
		</div>
	);
};

TabToggles.defaultProps = {
	type: 'rounded',
	options: null,
};

TabToggles.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	classNames: PropTypes.string,
	type: PropTypes.oneOf(['rounded', 'underline']).isRequired,
	options: PropTypes.array.isRequired,
	onClick: PropTypes.func,
};

export default TabToggles;
