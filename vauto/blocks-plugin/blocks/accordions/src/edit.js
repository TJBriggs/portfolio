import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/image', 'mx/buttons', 'mx/button', 'mx/repeater', 'mx/accordion-group', 'mx/accordion'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'accordions__flexible-inner' }, [
		['core/group', { className: 'accordions__main' }, [
			['core/heading', { className: 'accordions__heading other-heading', level: 2, placeholder: 'Heading Text' }],
			['core/paragraph', { className: 'accordions__text', align: 'left', placeholder: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' }],
			['mx/repeater', { className: 'accordions__wrap' }, [
				['mx/accordion-group', {}],
				['mx/accordion-group', {}],
				['mx/accordion-group', {}]
			]]
		]],
		['core/group', { className: 'accordions__sidebar', id: 'accordions__sidebar', tagName: 'aside' }, [
			['core/heading', { className: 'accordions__sidebar-heading h1 bold', level: 3, placeholder: 'Sidebar Heading' }],
			['core/group', { className: 'accordions-callout' }, [
				['mx/image', { className: 'accordions-callout__image' }],
				['core/heading', { className: 'accordions-callout__heading eyebrow', level: 4, placeholder: 'Eyebrow Text' }],
				['core/paragraph', { className: 'accordions-callout__text ', placeholder: 'Lorem ipsum dolor sit tempor massa egestas.' }],
				['mx/buttons', { className: 'accordions-callout__links', layout: 'flex', orientation: 'vertical' }, [
					['mx/button', { className: 'accordions-callout__link is-style-arrow-link', placeholder: 'Link Text' }]
				]],
			]],
			['core/group', { className: 'accordions-callout' }, [
				['mx/image', { className: 'accordions-callout__image' }],
				['core/heading', { className: 'accordions-callout__heading eyebrow', level: 4, placeholder: 'Eyebrow Text' }],
				['core/paragraph', { className: 'accordions-callout__text ', placeholder: 'Lorem ipsum dolor sit tempor massa egestas.' }],
				['mx/buttons', { className: 'accordions-callout__links', layout: 'flex', orientation: 'vertical' }, [
					['mx/button', { className: 'accordions-callout__link is-style-arrow-link', placeholder: 'Link Text' }]
				]],
			]],
			['core/group', { className: 'accordions-callout' }, [
				['mx/image', { className: 'accordions-callout__image' }],
				['core/heading', { className: 'accordions-callout__heading eyebrow', level: 4, placeholder: 'Eyebrow Text' }],
				['core/paragraph', { className: 'accordions-callout__text ', placeholder: 'Lorem ipsum dolor sit tempor massa egestas.' }],
				['mx/buttons', { className: 'accordions-callout__links', layout: 'flex', orientation: 'vertical' }, [
					['mx/button', { className: 'accordions-callout__link is-style-arrow-link', placeholder: 'Link Text' }]
				]],
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
		widthOption },
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: `accordions layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
			</InspectorControls>
			<BlockControls>
				<BlockWidth
					widthIcon={widthIcon}
					widthOption={widthOption}
					setAttributes={setAttributes}
				/>
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
