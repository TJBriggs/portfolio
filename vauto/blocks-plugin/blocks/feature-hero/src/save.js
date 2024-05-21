import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes: { widthOption } } ) {
	const blockProps = useBlockProps.save( {
		className: `feature-hero`,
	} );

	return (
		<section { ...useBlockProps.save( blockProps ) }>
			<InnerBlocks.Content />
		</section>
	);
}
