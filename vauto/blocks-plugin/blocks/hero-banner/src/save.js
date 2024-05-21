import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'hero-banner',
	});

	return (
		<section {...useBlockProps.save(blockProps)}>
			<div className="hero-banner__shmedium-inner">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
