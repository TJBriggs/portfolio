import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import CircleIcon from '../atoms/CircleIcon';
import ExportLink from '../atoms/ExportLink';
import Tooltip from '../atoms/Tooltip';


/**
 * @example
 * <DetailsRoundedBox
 *    @param {object} assetDetails - (asset data for header)
 * />
 */
const DetailsRoundedBox = ({ assetDetails }) => {
	let iconName;
	let bgColor;
	const {
		name,
		vin,
		reports,
		status,
		engineSerial,
		notices,
		engineModel,
		assetGroups
	} = assetDetails;
	if (status === 'Immediate Action') {
		iconName = 'shutdown';
		bgColor = 'red';
	} else if (status === 'derate') {
		iconName = 'derate';
		bgColor = 'yellow';
	} else if (status === 'active') {
		iconName = 'check';
		bgColor = 'green';
	}
	const [expanded, setExpanded] = useState(false);
	const handleClick = () => {
		setExpanded(!expanded);
	}
	useEffect(() => {
		const checkWidth = () => {
			let windowWidth = window.innerWidth;
			if (windowWidth >= 768) {
				setExpanded(true);
			} else {
				setExpanded(false);
			}
		};
		checkWidth();
	}, []);
	return (
		<section className={`full-box details-box`}>
			<div className="full-box__default-inner">
				<div className='rounded-box'>
					<header className="details-box__header">
						<CircleIcon iconName={iconName} backgroundColor={bgColor} size='xlarge' />
						<div className="details-box__header-text">
							<div className="details-box__header-title">
								<Heading level='h1' text={name} /><ExportLink />
							</div>
							<div className={`details-box__header-toggle${expanded ? ' expanded' : ''}`} role='button' aria-hidden={expanded} onClick={handleClick}>
								<Icon iconName='caret-up' /><span className='h4 compact'>Asset Detail</span>
							</div>
						</div>
					</header>
					{expanded &&
						<div className={`details-box__content${expanded ? ' expanded' : ''}`} aria-hidden={expanded}>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='VIN' />
								<span>{vin}</span>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Reports' />
								<span>{reports}</span>
							</div>
							<div className="details-box__item">
								<h4 className='compact'>Asset Status <Tooltip tooltipText='Etiam porta sem malesuada magna mollis euismod.' /></h4>
								<span>{status}</span>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Engine Serial #' />
								<span>{engineSerial}</span>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Last Connection' />
								<a href='#'>Engine History</a>
							</div>
							<div className="details-box__item notices">
								<h4 className='compact'>Notice <Tooltip tooltipText='Etiam porta sem malesuada magna mollis euismod.' /></h4>
								<div className="notice-wrap">
									{notices.map((notice, index) => (
										<div className="notice-wrap__item" key={`adn-${index}`}>
											<CircleIcon iconName={notice === 'active' ? 'check' : notice} backgroundColor={notice} />
											<span className='notice-text'>{notice}</span>
										</div>
									))}
								</div>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Engine Model' />
								<span>{engineModel}</span>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Last Known Location' />
								<a href='#'>Geo Location Link</a>
							</div>
							<div className="details-box__item">
								<Heading level='h4' classNames='compact' text='Asset Groups' />
								{assetGroups.map((group, index) => (
									<span key={`ag-${index}`}>
										{group}
										{index !== assetGroups.length - 1 ? ', ' : ''}
									</span>
								))}
							</div>
						</div>
					}
					<div className={`details-box__toggle-wrap${expanded ? ' expanded' : ''}`} onClick={handleClick}>
						<div className={`details-box__mobile-toggle`}>
							<Icon iconName='caret-up' />
							{expanded ?
								<span>Hide Details</span>
								: <span>Asset Detail</span>
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

DetailsRoundedBox.propTypes = {
	assetDetails: PropTypes.object.isRequired,
};

export default DetailsRoundedBox;
