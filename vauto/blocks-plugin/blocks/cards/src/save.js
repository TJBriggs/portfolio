import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { widthOption, itemOrientation, marginBottom, marginTop, paddingBottom, paddingTop } }) {
	const blockProps = useBlockProps.save({
		className: `cards layout-width--${widthOption} cards--${itemOrientation} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</section>
	);
}
