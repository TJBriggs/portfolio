import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import Link from 'next/link';

/**
 * @example
 * <AssetTableRow
 *    @param {array} asset - (asset data for table)
 * />
 */
const AssetTableRow = ({ asset }) => {
	const {
		assetStatus,
		assetName,
		assetGroup,
		primaryFault,
		lastFaultDate,
		lastFaultTime,
		spn,
		fmi,
		faultDescription,
		recommendedAction,
		derateNotice,
		probabilities,
		faultCodes,
		troubleshootingAssistance,
		vin,
		ein
	} = asset;
	const [viewMore, setViewMore] = useState(false);
	const handleViewMore = (event) => {
		event.preventDefault();
		setViewMore(!viewMore);
	}
	return (
		<div className={`table-rows__row`}>
			<div className={`table-rows__cell col-1`}>
				<span className={`icon-wrap ${assetStatus}`}>
					<Icon iconName={assetStatus} />
				</span>
			</div>
			<div className={`table-rows__cell col-2`}>
				<Link href='#'>
					<a>{assetName}</a>
				</Link>
			</div>
			<div className={`table-rows__cell col-3`}>
				<Heading level='h4' classNames='compact mobile-only' text='Asset Group' />
				{assetGroup}
			</div>
			<div className={`table-rows__cell col-4`}>
				<Heading level='h4' classNames='compact mobile-only' text='Primary Fault Code' />
				{primaryFault}
			</div>
			<div className={`table-rows__cell col-5`}>
				<Heading level='h4' classNames='compact mobile-only' text='Fault Occurence' />
				<span className='fault-date'>{lastFaultDate},&nbsp;</span>
				<span className='fault-time'>{lastFaultTime}</span>
			</div>
			<div className={`table-rows__cell col-6`}>
				<Heading level='h4' classNames='compact mobile-only' text='SPN' />
				{spn}
			</div>
			<div className={`table-rows__cell col-7`}>
				<Heading level='h4' classNames='compact mobile-only' text='FMI' />
				{fmi}
			</div>
			<div className={`view-more-wrap${viewMore ? ' visible' : ''}`}>
				<div className={`table-rows__cell col-8`}>
					<Heading level='h4' classNames='compact mobile-only' text='Fault Description' />
					{faultDescription}
				</div>
				<div className={`table-rows__cell col-9`}>
					<Heading level='h4' classNames='compact mobile-only' text='Recommended Action' />
					<div>{recommendedAction}</div>
				</div>
				<div className={`table-rows__cell col-10`}>
					<Heading level='h4' classNames='compact mobile-only' text='Derate Notice' />
					<div>{derateNotice}</div>
				</div>
				<div className={`table-rows__cell col-11`}>
					<Heading level='h4' classNames='compact mobile-only' text='Troubleshooting Assistance' />
					<div>
						{troubleshootingAssistance}
					</div>
				</div>
				<div className={`table-rows__cell col-12`}>
					<Heading level='h4' classNames='compact mobile-only' text='Root Cause' />
					<div>
						{probabilities.map((probability, index) => (
							<span key={index} className='probability'>
								{probability}
							</span>
						))}
					</div>
				</div>
				<div className={`table-rows__cell col-13`}>
					<Heading level='h4' classNames='compact mobile-only' text='Fault Codes' />
					<div>
						{faultCodes.map((code, index) => (
							<a href='#' key={index} className='fault-code'>
								{code}
							</a>
						))}
					</div>
				</div>
				<div className={`table-rows__cell col-14`}>
					<Heading level='h4' classNames='compact mobile-only' text='VIN' />
					<div>
						{vin}
					</div>
				</div>
				<div className={`table-rows__cell col-15`}>
					<Heading level='h4' classNames='compact mobile-only' text='EIN' />
					<div>
						{ein}
					</div>
				</div>
			</div>
			<div className="view-more-button">
				<a onClick={handleViewMore}>{`View ${viewMore ? ' Less' : 'More'}`}</a>
			</div>
		</div>
	);
};

AssetTableRow.propTypes = {
	asset: PropTypes.object.isRequired,
};

export default AssetTableRow;
