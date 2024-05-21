import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
//import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/image'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'product-feature__flexible-inner' }, [
		['mx/image', { className: 'product-feature__logo', align: 'center' }],
		['core/heading', { className: 'product-feature__heading h1', level: 2, textAlign: 'center', textColor: 'white', placeholder: 'Centered Heading' }],
		['core/paragraph', { className: 'product-feature__text center-narrow', align: 'center', fontSize: 'large', textColor: 'white', placeholder: 'Centered text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' }],
		['mx/buttons', { className: 'product-feature__links is-style-large-button', layout: { type: 'flex', justifyContent: 'center' } }, [
			['mx/button', { className: 'product-feature__link', placeholder: 'Link Text' }]
		]],
		['core/group', { className: 'product-feature__callouts' }, [
			['core/group', { className: 'product-feature__column' }, [
				['core/group', { className: 'product-feature__callout icon-callout icon-above' }, [
					['mx/image', { className: 'product-feature__callout-icon' }],
					['core/heading', { className: 'product-feature__callout-heading h4', level: 3, textColor: 'white', placeholder: 'Callout Heading' }],
					['core/paragraph', { className: 'product-feature__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
				]],
				['core/group', { className: 'product-feature__callout icon-callout icon-above' }, [
					['mx/image', { className: 'product-feature__callout-icon' }],
					['core/heading', { className: 'product-feature__callout-heading h4', level: 3, textColor: 'white', placeholder: 'Callout Heading' }],
					['core/paragraph', { className: 'product-feature__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
				]]
			]],
			['core/group', { className: 'product-feature__column column--center' }, [
				['mx/image', { className: 'product-feature__center-image', align: 'center' }],
			]],
			['core/group', { className: 'product-feature__column' }, [
				['core/group', { className: 'product-feature__callout icon-callout icon-above' }, [
					['mx/image', { className: 'product-feature__callout-icon' }],
					['core/heading', { className: 'product-feature__callout-heading h4', level: 3, textColor: 'white', placeholder: 'Callout Heading' }],
					['core/paragraph', { className: 'product-feature__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
				]],
				['core/group', { className: 'product-feature__callout icon-callout icon-above' }, [
					['mx/image', { className: 'product-feature__callout-icon' }],
					['core/heading', { className: 'product-feature__callout-heading h4', level: 3, textColor: 'white', placeholder: 'Callout Heading' }],
					['core/paragraph', { className: 'product-feature__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
				]]
			]],
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
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: `product-feature layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
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
