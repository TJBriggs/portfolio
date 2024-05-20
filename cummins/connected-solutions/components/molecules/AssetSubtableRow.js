import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

/**
 * @example
 * <AssetsSubtableRow
 *    @param {array} component - (component data for subtable)
 * />
 */
const AssetSubtableRow = ({ component }) => {
	const {
		componentSerial,
		componentType,
		serviceModel,
		calibrationID,
		horsePower,
		torque,
		fuelRating,
		subscription,
		activationDate
	} = component;
	return (
		<div className='subtable-rows__row'>
			<div className='subtable-rows__cell col-1'>
				{componentType === 'Engine' &&
					<Icon iconName='engine' />
				}
				{componentType === 'Transmission' &&
					<Icon iconName='transmission' />
				}
			</div>
			<div className='subtable-rows__cell col-2'>
				{componentSerial}
			</div>
			<div className='subtable-rows__cell col-3'>
				{serviceModel}
			</div>
			<div className='subtable-rows__cell col-4'>
				{calibrationID}
			</div>
			<div className='subtable-rows__cell col-5'>
				{horsePower}
			</div>
			<div className='subtable-rows__cell col-6'>
				{torque}
			</div>
			<div className='subtable-rows__cell col-7'>
				{fuelRating}
			</div>
			<div className='subtable-rows__cell col-8'>
				{subscription}
			</div>
			<div className='subtable-rows__cell col-9'>
				{activationDate}
			</div>
		</div>
	);
};

AssetSubtableRow.propTypes = {
	component: PropTypes.object.isRequired,
};

export default AssetSubtableRow;
