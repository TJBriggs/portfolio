import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { marginBottom, marginTop, paddingBottom, paddingTop, widthOption } }) {
	const blockProps = useBlockProps.save({
		className: `centered-text layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</section>
	);
}
