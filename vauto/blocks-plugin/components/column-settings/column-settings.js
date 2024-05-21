import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl, RangeControl } from '@wordpress/components';
import './column-settings.scss';

export default function ColumnCount({ columnCount, columnLayout, setAttributes }) {
	return (
		<PanelBody title={__('Column Settings', 'mx-blocks-plugin')} initialOpen={true}>
			<div className="mx-inspector-settings mx-column-settings">
				<label>{__('Columns', 'mx-blocks-plugin')}</label>
				<RangeControl
					min={1}
					max={6}
					step={1}
					onChange={(columnCount) => setAttributes({ columnCount })}
					value={columnCount}
				/>
				<label>{__('Layout', 'mx-blocks-plugin')}</label>
				<div className="radio-control">
					<RadioControl
						selected={columnLayout}
						options={[
							{ label: 'Center', value: 'flex' },
							{ label: 'Grid', value: 'grid' },
						]}
						onChange={(columnLayout) => setAttributes({ columnLayout })}
					/>
				</div>

			</div>
		</PanelBody>
	);
}