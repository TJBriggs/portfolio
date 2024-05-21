import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'mx/image', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/ss-card'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'featured-stories__grid' }, [
		['core/group', { className: 'featured-stories__column' }, [
			['mx/image', { className: 'featured-stories__logo', align: 'center' }],
			['core/heading', { className: 'featured-stories__heading', level: 2, textAlign: 'center', placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'featured-stories__text', align: 'center', placeholder: 'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.' }],
			['mx/ss-card', {}],
			['mx/ss-card', {}],
			['mx/buttons', { className: 'featured-stories__links', layout: { type: 'flex', justifyContent: 'center' } }, [
				['mx/button', { className: 'featured-stories__link', placeholder: 'Link Text' }]
			]]
		]],
		['core/group', { className: 'featured-stories__column' }, [
			['mx/image', { className: 'featured-stories__logo', align: 'center' }],
			['core/heading', { className: 'featured-stories__heading', level: 2, textAlign: 'center', placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'featured-stories__text', align: 'center', placeholder: 'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.' }],
			['mx/ss-card', {}],
			['mx/ss-card', {}],
			['mx/buttons', { className: 'featured-stories__links', layout: { type: 'flex', justifyContent: 'center' } }, [
				['mx/button', { className: 'featured-stories__link', placeholder: 'Link Text' }]
			]]
		]],
		['core/group', { className: 'featured-stories__column' }, [
			['mx/image', { className: 'featured-stories__logo', align: 'center' }],
			['core/heading', { className: 'featured-stories__heading', level: 2, textAlign: 'center', placeholder: 'Feature Heading' }],
			['core/paragraph', { className: 'featured-stories__text', align: 'center', placeholder: 'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.' }],
			['mx/ss-card', {}],
			['mx/ss-card', {}],
			['mx/buttons', { className: 'featured-stories__links', layout: { type: 'flex', justifyContent: 'center' } }, [
				['mx/button', { className: 'featured-stories__link', placeholder: 'Link Text' }]
			]]
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
		className: `featured-stories margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`
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
