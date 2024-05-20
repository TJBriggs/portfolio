import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from './Icon';

/**
 * @example
 * <Button
 *    @param {string} type - (primary is default, secondary)
 *    @param {array} classNames - (additional classes for styling purposes)
 *    @param {func} icon - (undefined is default, pass font-icon name here)
 *    @param {string} linkType - (normal is default, trigger)
 *    @param {string} width - (auto is default, full)
 *    @param {string} text - (text is required)
 *    @param {string} url - (optional, needed for normal linkType)
 *    @param {func} onClick - (optional, function to trigger action on click)
 *    @param {func} getStep - (optional, allows you to trigger a step change)
 *    @param {string} step - (optional, tracks current step)
 * />
 */
const Button = ({
	type,
	classNames,
	icon,
	linkType,
	width,
	text,
	url,
	getStep,
	step,
	onClick
}) => {
	const [clicks, setClicks] = useState(0);
	const handleClick = (e) => {
		e.preventDefault();
		setClicks(clicks + 1);
		if (getStep) {
			getStep(step + 1);
		}
		if (onClick) {
			onClick(clicks);
		}
	}

	if (linkType === 'trigger') {
		return (
			<a className={`button${type ? ' ' + type : ''}${width ? ' ' + width : ''}${classNames ? ' ' + classNames : ''}`} onClick={handleClick}>
				{icon &&
					<Icon iconName={icon} classes={['icon--left']} />
				}
				<span className='button__text'>{text}</span>
			</a>
		);
	} else {
		return (
			<Link href={url ? url : ''}>
				<a className={`button${type ? ' ' + type : ''}${width ? ' ' + width : ''}${classNames ? ' ' + classNames : ''}`}>
					{icon &&
						<Icon iconName={icon} classes={['icon--left']} />
					}
					<span className='button__text'>{text}</span>
				</a>
			</Link >
		);
	}
};

Button.defaultProps = {
	type: 'primary',
	linkType: 'normal',
	width: 'auto',
	text: 'Button Text',
};

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary']),
	classNames: PropTypes.string,
	icon: PropTypes.string,
	linkType: PropTypes.oneOf(['normal', 'trigger']),
	width: PropTypes.oneOf(['auto', 'full']),
	onClick: PropTypes.func,
	url: PropTypes.string
};

export default Button;
