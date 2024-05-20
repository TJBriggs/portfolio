import PropTypes from 'prop-types';
import AssetSubtableRow from './AssetSubtableRow';
import Icon from '../atoms/Icon';
import Link from 'next/link';
import Checkbox from '../atoms/Checkbox';
import RowToggle from '../atoms/RowToggle';

/**
 * @example
 * <AssetTableRow
 *    @param {array} asset - (asset data for table)
 * />
 */
const AssetTableRow = ({ asset }) => {
	const {
		assetID,
		assetType,
		assetSerial,
		assetDescription,
		controlModel,
		assetGroup,
		assetSubscription,
		activationDate,
		components
	} = asset;
	const handleTrash = (event) => {
		event.preventDefault();
		console.log('remove table row');
	}
	return (
		<div className={`table-rows__row`}>
			<div className={`table-rows__cell col-1`}>
				<label className='mobile-only'>Select</label>
				<div className='select-wrap'>
					<Checkbox />
					<RowToggle />
				</div>
			</div>
			<div className={`table-rows__cell col-2`}>
				<label className='mobile-only'>Type</label>
				{assetType === 'Haul Truck' &&
					<Icon iconName='truck' />
				}
				{assetType === 'Transport Truck' &&
					<Icon iconName='truck' />
				}
			</div>
			<div className={`table-rows__cell col-3`}>
				<label className='mobile-only'>Asset ID</label>
				<Link href='#'>
					<a>{assetID} <span>({components.length})</span></a>
				</Link>
			</div>
			<div className={`table-rows__cell col-4`}>
				<label className='mobile-only'>Asset Serial #</label>
				{assetSerial}
			</div>
			<div className={`table-rows__cell col-5`}>
				<label className='mobile-only'>Asset Description</label>
				{assetDescription}
			</div>
			<div className={`table-rows__cell col-6`}>
				<label className='mobile-only'>Asset Control Model</label>
				{controlModel}
			</div>
			<div className={`table-rows__cell col-7`}>
				<label className='mobile-only'>Asset Group</label>
				{assetGroup}
			</div>
			<div className={`table-rows__cell col-8`}>
				<label className='mobile-only'>Subscription</label>
				{assetSubscription}
			</div>
			<div className={`table-rows__cell col-9`}>
				<label className='mobile-only'>Activation Date</label>
				{activationDate}
			</div>
			<div className={`table-rows__cell col-10`}>
				<div className='actions-wrap'>
					<a className='modal-link eye' data-modalid='CA-10'>
						<Icon iconName='eye' />
					</a>
					<a className='modal-link edit' data-modalid='CA-10'>
						<Icon iconName='edit' />
					</a>
					<a className='modal-link' data-modalid='single-asset-delete' onClick={handleTrash}>
						<Icon iconName='trash' />
					</a>
				</div>
			</div>
			<div className={`subtable desktop-only`}>
				<div className='subtable-header'>
					<div className='subtable-header__row'>
						<div className='subtable-header__cell col-1'>Type</div>
						<div className='subtable-header__cell col-2'>Component Serial #</div>
						<div className='subtable-header__cell col-3'>Service Model</div>
						<div className='subtable-header__cell col-4'>Calibration ID</div>
						<div className='subtable-header__cell col-5'>Horse Power</div>
						<div className='subtable-header__cell col-6'>Torque</div>
						<div className='subtable-header__cell col-7'>Fuel Rating</div>
						<div className='subtable-header__cell col-8'>Subscription</div>
						<div className='subtable-header__cell col-9'>Activation Date</div>
					</div>
				</div>
				<div className='subtable-rows'>
					{components.map((component, index) => (
						<AssetSubtableRow component={component} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

AssetTableRow.propTypes = {
	asset: PropTypes.object.isRequired,
};

export default AssetTableRow;
