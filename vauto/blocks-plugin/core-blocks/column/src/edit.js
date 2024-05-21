import classnames from 'classnames';
import {
	InnerBlocks,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	InspectorControls,
	useBlockProps,
	useSetting,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	__experimentalUseCustomUnits as useCustomUnits,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { sprintf, __ } from '@wordpress/i18n';
import AddTag from '../../../components/add-tag/add-tag.js';

function ColumnEdit({
	attributes: {
		addTag,
		templateLock = false,
		allowedBlocks,
	},
	setAttributes,
	clientId,
}) {

	const { columnsIds, hasChildBlocks, rootClientId } = useSelect(
		(select) => {
			const { getBlockOrder, getBlockRootClientId } = select(
				blockEditorStore
			);

			const rootId = getBlockRootClientId(clientId);

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				rootClientId: rootId,
				columnsIds: getBlockOrder(rootId),
			};
		},
		[clientId]
	);

	const blockProps = useBlockProps({
		className: `column add-tag--${addTag}`,
	});

	const columnsCount = columnsIds.length;
	const currentColumnPosition = columnsIds.indexOf(clientId) + 1;

	const label = sprintf(
		/* translators: 1: Block label (i.e. "Block: Column"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
		__('%1$s (%2$d of %3$d)'),
		blockProps['aria-label'],
		currentColumnPosition,
		columnsCount
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ ...blockProps, 'aria-label': label },
		{
			templateLock,
			allowedBlocks,
			renderAppender: hasChildBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<>
			<BlockControls>
				<AddTag addTag={addTag} setAttributes={setAttributes} />
			</BlockControls>
			<div {...innerBlocksProps} />
		</>
	);
}

export default ColumnEdit;
