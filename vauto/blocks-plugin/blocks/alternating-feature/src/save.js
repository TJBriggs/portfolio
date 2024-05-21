import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { borderAll, marginBottom, marginTop, paddingBottom, paddingTop, mediaAlign, verticalOption, widthOption } }) {
	const blockProps = useBlockProps.save({
		className: `alternating-feature vertical-align--${verticalOption} media-align--${mediaAlign} layout-width--${widthOption} border--${borderAll} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</section>
	);
}
