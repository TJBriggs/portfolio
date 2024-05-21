import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import ColumnSettings from '../../../components/column-settings/column-settings';
import './editor.scss';

const ALLOWED_BLOCKS = [];

const BLOCK_TEMPLATE = [
	['mx/column', { className: 'column' }],
	['mx/column', { className: 'column' }],
	['mx/column', { className: 'column' }],
	['mx/column', { className: 'column' }]
];

export default function Edit({
	attributes: {
		columnCount,
		columnLayout,
	},
	setAttributes
}) {
	const blockProps = useBlockProps({
		className: `columns columns--${columnCount} columns--${columnLayout}`,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<InspectorControls>
				<ColumnSettings setAttributes={setAttributes} columnLayout={columnLayout} columnCount={columnCount} />
			</InspectorControls>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={BLOCK_TEMPLATE} />
		</div>
	);
}
