import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'feature-bar__xsmall-inner' }, [
		['core/group', { className: 'feature-bar__copy' }, [
			['core/heading', { className: 'feature-bar__heading', level: 2, placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'feature-bar__text', placeholder: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' }]
		]]
	]]
];

export default function Edit({
	attributes: {
		marginBottom,
		marginTop,
		paddingBottom,
		paddingTop
	},
	setAttributes
}) {

	const blockProps = useBlockProps({
		className: `feature-bar margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
