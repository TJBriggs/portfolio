import { __ } from '@wordpress/i18n';
import { PanelBody, ColorPalette } from '@wordpress/components';

export default function ColorSettings({ color, colors, setAttributes }) {

	return (
		<PanelBody title={__('Colors', 'mx-blocks-plugin')} initialOpen={true}>
			<ColorPalette
				colors={colors}
				disableCustomColors={true}
				value={color}
				onChange={(color) => setAttributes({ color })}
			/>
		</PanelBody>
	);
}