import { BlockControls, InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
//import './editor.scss';

const ALLOWED_BLOCKS = ['core/heading', 'core/html', 'core/group', 'mx/uberflip-embed'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'uberflip-features__flexible-inner' }, [
		['core/heading', { className: 'uberflip-features__heading h1', level: 2, textAlign: 'center', placeholder: 'Centered Heading' }],
		['core/paragraph', { className: 'centered-text__text center-narrow', fontSize: 'large', align: 'center', placeholder: 'Centered text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' }],
		['mx/uberflip-embed', {}]
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
		className: `uberflip-features layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
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
				templateLock="all"
			/>
		</section>
	);
}
