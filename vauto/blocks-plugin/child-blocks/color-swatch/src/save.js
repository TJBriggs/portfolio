import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { colorValue } }) {
	const blockProps = useBlockProps.save({
		className: `color-swatch`,
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<div className='color-swatch__swatch' style={{ backgroundColor: colorValue }}></div>
		</div>
	);
}
