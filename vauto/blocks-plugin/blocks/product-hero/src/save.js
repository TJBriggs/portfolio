import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: `product-hero`,
	});

	return (
		<section {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</section>
	);
}
