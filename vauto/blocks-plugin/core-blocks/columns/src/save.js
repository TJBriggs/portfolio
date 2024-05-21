import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { columnCount, columnLayout } }) {
	const blockProps = useBlockProps.save({
		className: `columns columns--${columnCount} columns--${columnLayout}`,
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
