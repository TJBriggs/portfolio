import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { contentID } }) {
	const blockProps = useBlockProps.save({
		className: 'modal-content',
		id: contentID,
		style: { display: 'none' }
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
