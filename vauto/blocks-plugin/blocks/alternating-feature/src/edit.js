import { BlockControls, InspectorControls, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import BorderControls from '../../../components/border-controls/border-controls.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import VerticalAlign from '../../../components/vertical-align/vertical-align.js';
import MediaAlign from '../../../components/media-align/media-align.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/media-block'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'alternating-feature__flexible-inner' }, [
		['mx/media-block', { className: 'alternating-feature__media' }],
		['core/group', { className: 'alternating-feature__content' }, [
			['core/group', { className: 'alternating-feature__icon-subheading' }, [
				['mx/image', { className: 'alternating-feature__icon' }],
				['core/heading', { className: 'alternating-feature__subheading', level: 4, placeholder: 'Sub Heading' }]
			]],
			['core/heading', { className: 'alternating-feature__heading', level: 2, placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'alternating-feature__text', placeholder: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' }],
			['mx/buttons', { className: 'alternating-feature__primary-links', layout: { type: 'flex', orientation: 'vertical' } }, [
				['mx/button', { className: 'alternating-feature__link is-style-large-button is-style-full-width-button', placeholder: 'Link Text' }]
			]],
			['mx/buttons', { className: 'alternating-feature__underline-links', layout: { type: 'flex', orientation: 'vertical' } }, [
				['mx/button', { className: 'alternating-feature__link is-style-medium-button is-style-underline-button', placeholder: 'Link Text' }],
				['mx/button', { className: 'alternating-feature__link is-style-medium-button is-style-underline-button', placeholder: 'Link Text' }],
				['mx/button', { className: 'alternating-feature__link is-style-medium-button is-style-underline-button', placeholder: 'Link Text' }]
			]]
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
		className: `alternating-feature vertical-align--${verticalOption} media-align--${mediaAlign} layout-width--${widthOption} border--${borderAll} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
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
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={BLOCK_TEMPLATE} />
		</section>
	);
}
