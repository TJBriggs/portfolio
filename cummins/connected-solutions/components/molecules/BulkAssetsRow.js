import PropTypes from 'prop-types';
import Accordion from '../atoms/Accordion';
import Icon from '../atoms/Icon';
import Select from '../atoms/Select';
import TextInput from '../atoms/TextInput';
import BulkComponentsCells from '../molecules/BulkComponentsCells';

/**
 * @example
 * <BulkAssetsRow
 *    @param {array} asset - (asset data for table)
 * />
 */
const BulkAssetsRow = ({ asset, index }) => {
	const {
		assetID,
		serialNumber,
		description,
		provider,
		deviceID,
		assetGroup,
		components,
		error,
		errorCount,
		warning,
		warningCount
	} = asset;
	const handleTrash = (event) => {
		event.preventDefault();
		console.log('remove table row');
	}
	return (
		<div className={`table-rows__row`}>
			<Accordion
				classes={['primary-accordion']}
				toggleText={`Asset ID: ${assetID}`}
				isExpanded={false}
				hasTrashIcon={true}
				errorCount={errorCount}
				warningCount={warningCount}
			>
				<div className={`table-rows__cell action-col border-col`}>
					<a onClick={handleTrash}>
						<Icon iconName='trash' />
					</a>
				</div>
				<div className={`table-rows__cell col-1${error === 'asset-id' ? ' error' : ''}`}>
					<label className='mobile-only'>Asset ID<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'asset-id' ? 'error' : '']}
						id={error === 'asset-id' ? 'error-1' : ''}
						size='medium'
						currentValue={assetID}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell col-2${error === 'serial-number' ? ' error' : ''}`}>
					<label className='mobile-only'>Serial Number<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'serial-number' ? 'error' : '']}
						id={error === 'serial-number' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={serialNumber}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell col-3 border-col${error === 'description' ? ' error' : ''}`}>
					<label className='mobile-only'>Description</label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'description' ? 'error' : '']}
						id={error === 'description' ? 'error-1' : ''}
						size='medium'
						currentValue={description}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell con-col-1${error === 'provider' ? ' error' : ''}`}>
					<label className='mobile-only'>Provider<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'provider' ? 'error' : '']}
						id={error === 'provider' ? 'error-' + index + 1 : ''}
						size='medium'
						currentValue={provider}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell con-col-2 border-col${error === 'device-id' ? ' error' : ''}`}>
					<label className='mobile-only'>Device ID<sup>*</sup></label>
					<TextInput
						type='primary'
						classes={['table-input', error === 'device-id' ? 'error' : '']}
						id={error === 'device-id' ? 'error-2' : ''}
						size='medium'
						currentValue={deviceID}
						validationText='Validation text...'
					/>
				</div>
				<div className={`table-rows__cell ag-col border-col${warning === 'asset-group' ? ' warning' : ''}`}>
					<label className='mobile-only'>Asset Group</label>
					<Select
						type='underline'
						size='medium'
						classes={['table-select', warning === 'asset-group' ? 'error' : '']}
						id={warning === 'asset-group' ? 'warning-2' : ''}
						currentValue={assetGroup}
						validationText='Validation text...'
						options={[
							{
								'value': 'us-northeast',
								'label': 'US | Northeast'
							},
							{
								'value': 'us-northwest',
								'label': 'US | Northwest'
							},
							{
								'value': 'us-southwest',
								'label': 'US | SouthWest'
							},
							{
								'value': 'us-midwest',
								'label': 'US | MidWest'
							},
							{
								'value': 'canada',
								'label': 'Canada'
							},
						]}
					/>
				</div>
				{components.map((component, index) => (
					<BulkComponentsCells component={component} index={index} key={index} />
				))}
			</Accordion>
		</div>
	);
};

BulkAssetsRow.propTypes = {
	asset: PropTypes.object,
};

export default BulkAssetsRow;
