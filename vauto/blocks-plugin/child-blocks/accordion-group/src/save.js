import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: `accordion-group`,
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
