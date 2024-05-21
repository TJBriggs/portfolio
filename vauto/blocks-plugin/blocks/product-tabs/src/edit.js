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

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/repeater', 'mx/product-tab'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'product-tabs__flexible-inner' }, [
		['core/heading', { className: 'product-tabs__heading', level: 2, textAlign: 'center', textColor: 'white', placeholder: 'Optional Heading' }],
		['core/paragraph', { className: 'product-tabs__text center-narrow', align: 'center', fontSize: 'large', textColor: 'white', placeholder: 'Centered text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' }],
		['mx/buttons', { className: 'product-tabs__links', layout: { type: 'flex', justifyContent: 'center' } }, [
			['mx/button', { className: 'product-tabs__link is-style-text-link', placeholder: 'Link Text' }]
		]],
		['mx/buttons', { className: 'product-tabs__tabs-buttons is-style-text-link is-style-tabs-button', layout: { type: 'flex', justifyContent: 'space-between' } }, [
			['mx/button', { className: 'product-tabs__link is-style-text-link', id: 'tab--1', placeholder: 'Used Car' }],
			['mx/button', { className: 'product-tabs__link is-style-text-link', id: 'tab--2', placeholder: 'New Car' }],
			['mx/button', { className: 'product-tabs__link is-style-text-link', id: 'tab--3', placeholder: 'Wholesale' }],
			['mx/button', { className: 'product-tabs__link is-style-text-link', id: 'tab--4', placeholder: 'Reconditioning' }],
			['mx/button', { className: 'product-tabs__link is-style-text-link', id: 'tab--5', placeholder: 'Merchandising' }]
		]],
		['mx/repeater', { className: 'product-tabs__tabs-panels' }, [
			['mx/product-tab', { className: 'product-tabs__panel', id: 'panel--1' }],
			['mx/product-tab', { className: 'product-tabs__panel', id: 'panel--2' }],
			['mx/product-tab', { className: 'product-tabs__panel', id: 'panel--3' }],
			['mx/product-tab', { className: 'product-tabs__panel', id: 'panel--4' }],
			['mx/product-tab', { className: 'product-tabs__panel', id: 'panel--5' }]
		]],
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
		className: `product-tabs layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
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
