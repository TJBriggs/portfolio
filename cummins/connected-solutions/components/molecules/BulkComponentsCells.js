import PropTypes from 'prop-types';
import Accordion from '../atoms/Accordion';
import Select from '../atoms/Select';
import TextInput from '../atoms/TextInput';

/**
 * @example
 * <BulkComponentsCells
 *    @param {array} component - (asset data for table)
 * />
 */
const BulkComponentsCells = ({ component, index }) => {
	const {
		type,
		componentSerial,
		componentModel,
		torque,
		horsePower,
		fuelRating,
		error,
		errorCount,
	} = component;
	return (
		<>
			<Accordion
				classes={['nested-accordion', index === 0 ? 'top-accordion' : '']}
				toggleText={`Component #${index + 1}`}
				isExpanded={false}
				hasTrashIcon={false}
				errorCount={errorCount}
			>
				<div className={`table-rows__cell comp-col-1${error === 'type' ? ' error' : ''}`}>
					<label className='mobile-only'>Type<sup>*</sup></label>
					<Select
						type='underline'
						size='medium'
						classes={['table-select', error === 'type' ? 'error' : '']}
						id={error === 'type' ? 'error-3' : ''}
						currentValue={type}
						validationText='Validation text...'
						options={[
							{
								'value': 'engine',
								'label': 'Engine'
							},
							{
								'value': 'transmission',
								'label': 'Transmission'
							}
						]}
					/>
				</div>
				<div className={`table-rows__cell comp-col-2${error === 'serial-number' ? ' error' : ''}`}>
					<label className='mobile-only'>Serial Number<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'serial-number' ? 'error' : '']}
						id={error === 'serial-number' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={componentSerial}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell comp-col-3${error === 'service-model' ? ' error' : ''}`}>
					<label className='mobile-only'>Service Model<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'service-model' ? 'error' : '']}
						id={error === 'service-model' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={componentModel}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell comp-col-4${error === 'torque' ? ' error' : ''}`}>
					<label className='mobile-only'>Torque<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'torque' ? 'error' : '']}
						id={error === 'torque' ? 'error-4' : ''}
						size='medium'
						currentValue={torque}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell comp-col-5${error === 'horse-power' ? ' error' : ''}`}>
					<label className='mobile-only'>Horse Power<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'horse-power' ? 'error' : '']}
						id={error === 'horse-power' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={horsePower}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell comp-col-6 border-col${error === 'fuel-rating' ? ' error' : ''}`}>
					<label className='mobile-only'>Fuel Rating</label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'fuel-rating' ? 'error' : '']}
						id={error === 'fuel-rating' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={fuelRating}
						validationText='Validation text...'
					/>
				</div>
			</Accordion>
		</>
	);
};

BulkComponentsCells.propTypes = {
	component: PropTypes.object.isRequired,
};

export default BulkComponentsCells;
