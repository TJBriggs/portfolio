import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes: { primaryAccordion } }) {
	const blockProps = useBlockProps.save({
		className: `accordion ${primaryAccordion ? 'accordion--primary' : ''}`,
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
