import { BlockControls, InspectorControls, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import BorderControls from '../../../components/border-controls/border-controls.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import VerticalAlign from '../../../components/vertical-align/vertical-align.js';
import MediaAlign from '../../../components/media-align/media-align.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/cover', 'core/group', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/slider', 'mx/ss-card'];

const BLOCK_TEMPLATE = [
	['core/cover', { className: 'alternating-slider__cover' }, [
		['mx/slider', { className: 'alternating-slider__slider' }, [
			['mx/ss-card', {}],
			['mx/ss-card', {}],
			['mx/ss-card', {}],
		]],
		['core/group', { className: 'alternating-slider__content' }, [
			['core/heading', { className: 'alternating-slider__heading semibold', level: 2, placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'alternating-slider__text thinweight', fontSize: 'x-large', placeholder: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' }],
		]]
	]]
];

export default function Edit({
	attributes: {
		borderAll,
		mediaAlign,
		marginBottom,
		marginTop,
		paddingBottom,
		paddingTop,
		verticalOption,
		verticalIcon,
		widthIcon,
		widthOption
	},
	setAttributes
}) {
	const blockProps = useBlockProps({
		className: `alternating-slider vertical-align--${verticalOption} media-align--${mediaAlign} layout-width--${widthOption} border--${borderAll} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
				<BorderControls borderAll={borderAll} setAttributes={setAttributes} />
			</InspectorControls>
			<BlockControls>
				<BlockWidth widthIcon={widthIcon} widthOption={widthOption} setAttributes={setAttributes} />
				<VerticalAlign verticalIcon={verticalIcon} verticalOption={verticalOption} setAttributes={setAttributes} />
				<MediaAlign mediaAlign={widthIcon} setAttributes={setAttributes} />
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
