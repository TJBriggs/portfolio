import { BlockControls, InspectorControls, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import BorderControls from '../../../components/border-controls/border-controls.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import VerticalAlign from '../../../components/vertical-align/vertical-align.js';
import MediaAlign from '../../../components/media-align/media-align.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/image', 'core/html'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'form-cta__flexible-inner' }, [
		['core/heading', { className: 'form-cta__heading h1', level: 2, textColor: 'brand-1', textAlign: 'center', placeholder: 'Centered Heading' }],
		['core/paragraph', { className: 'form-cta__centered-text thinweight', fontSize: 'large', align: 'center', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' }],
		['core/group', { className: 'form-cta__wrap' }, [
			['core/group', { className: 'form-cta__content' }, [
				['mx/image', { className: 'form-cta__media' }],
				['core/group', { className: 'form-cta__callouts' }, [
					['core/group', { className: 'form-cta__callout icon-callout icon-left' }, [
						['mx/image', { className: 'form-cta__callout-icon' }],
						['core/heading', { className: 'form-cta__callout-heading semibold', level: 4, placeholder: 'Callout Heading' }],
						['core/paragraph', { className: 'form-cta__text thinweight', placeholder: 'Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' }]
					]],
					['core/group', { className: 'form-cta__callout icon-callout icon-left' }, [
						['mx/image', { className: 'form-cta__callout-icon' }],
						['core/heading', { className: 'form-cta__callout-heading semibold', level: 4, placeholder: 'Callout Heading' }],
						['core/paragraph', { className: 'form-cta__text thinweight', placeholder: 'Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' }]
					]],
					['core/group', { className: 'form-cta__callout icon-callout icon-left' }, [
						['mx/image', { className: 'form-cta__callout-icon' }],
						['core/heading', { className: 'form-cta__callout-heading semibold', level: 4, placeholder: 'Callout Heading' }],
						['core/paragraph', { className: 'form-cta__text thinweight', placeholder: 'Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' }]
					]],
					['core/group', { className: 'form-cta__callout icon-callout icon-left' }, [
						['mx/image', { className: 'form-cta__callout-icon' }],
						['core/heading', { className: 'form-cta__callout-heading semibold', level: 4, placeholder: 'Callout Heading' }],
						['core/paragraph', { className: 'form-cta__text thinweight', placeholder: 'Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut' }]
					]]
				]],
			]],
			['core/group', { className: 'form-cta__form' }, [
				['core/html', { className: 'form-cta__form-embed' }]
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
		className: `form-cta vertical-align--${verticalOption} media-align--${mediaAlign} layout-width--${widthOption} border--${borderAll} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
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
