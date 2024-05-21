import { __ } from '@wordpress/i18n';
import { BlockControls, InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import Orientation from '../../../components/orientation/orientation.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/heading-button', 'mx/buttons', 'mx/button', 'mx/columns', 'mx/column', 'mx/image'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'cards__flexible-inner' }, [
		['core/heading', { className: 'cards__heading h1', textAlign: 'center', level: 2, placeholder: 'Optional Heading' }],
		['core/paragraph', { className: 'cards__text center-narrow', align: 'center', fontSize: 'large', placeholder: 'Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.' }],
		['mx/columns', { className: 'cards__columns gap--small', columnCount: 4, columnLayout: 'flex' }, [
			['mx/column', { className: 'card' }, [
				['mx/image', { className: 'card__media' }]
			]],
			['mx/column', { className: 'card' }, [
				['mx/image', { className: 'card__media' }]
			]],
			['mx/column', { className: 'card' }, [
				['mx/image', { className: 'card__media' }]
			]],
			['mx/column', { className: 'card' }, [
				['mx/image', { className: 'card__media' }]
			]]
		]]
	]]
];

export default function Edit({
	attributes: {
		itemOrientation,
		orientationIcon,
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
		className: `cards layout-width--${widthOption} cards--${itemOrientation} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
			</InspectorControls>
			<BlockControls>
				<BlockWidth widthIcon={widthIcon} widthOption={widthOption} setAttributes={setAttributes} />
				<Orientation orientationIcon={orientationIcon} itemOrientation={itemOrientation} setAttributes={setAttributes} />
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
