import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ColorPalette, PanelBody } from '@wordpress/components';
//import './editor.scss';


export default function Edit({
	attributes: { colorValue },
	setAttributes
}) {
	const bgColors = [
		{ name: 'Brand 1', color: '#E8171F' },
		{ name: 'Brand 2', color: '#07A0AA' },
		{ name: 'Brand 3', color: '#7BBDCA' },
		{ name: 'Brand 4', color: '#00993B' },
		{ name: 'Brand 5', color: '#6165AE' },
	];

	const blockProps = useBlockProps({
		className: `color-swatch`,
	});
	console.log(colorValue);
	return (
		<div {...useBlockProps(blockProps)}>
			<InspectorControls>
				<PanelBody title="Square Color" initialOpen={true}>
					<ColorPalette
						colors={bgColors}
						value={colorValue}
						onChange={(colorValue) => setAttributes({ colorValue })}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='color-swatch__swatch' style={{ backgroundColor: colorValue }}></div>
		</div >
	);
}
