import { BlockControls, InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'mx/buttons', 'mx/button'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'callout-bar__flexible-inner' }, [
		['core/group', { className: 'callout-bar__bg-color' }, [
			['core/heading', { className: 'callout-bar__heading other-heading', level: 2, textAlign: 'center', placeholder: 'Callout Heading' }],
			['mx/buttons', { className: 'callout-bar__links', layout: { type: 'flex', justifyContent: 'center' } }, [
				['mx/button', { className: 'callout-bar__link is-style-underline-button', placeholder: 'Link Text' }],
			]]
		]]
	]]
];

export default function Edit({
	attributes: {
		marginBottom,
		marginTop,
		paddingBottom,
		paddingTop,
		widthIcon,
		widthOption
	},
	setAttributes
}) {
	const blockProps = useBlockProps({
		className: `callout-bar layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
			</InspectorControls>
			<BlockControls>
				<BlockWidth widthIcon={widthIcon} widthOption={widthOption} setAttributes={setAttributes} />
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
