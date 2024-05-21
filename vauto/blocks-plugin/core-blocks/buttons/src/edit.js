/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const ALLOWED_BLOCKS = ['mx/button'];

function ButtonsEdit({ attributes: { layout = {} } }) {
	const blockProps = useBlockProps();
	const preferredStyle = useSelect((select) => {
		const preferredStyleVariations = select(
			blockEditorStore
		).getSettings().__experimentalPreferredStyleVariations;
		return preferredStyleVariations?.value?.['mx/button'];
	}, []);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: [
			[
				'mx/button',
				{ className: preferredStyle && `is-style-${preferredStyle}` },
			],
		],
		__experimentalLayout: layout,
		templateInsertUpdatesSelection: true,
	});

	return (
		<>
			<div {...innerBlocksProps} />
		</>
	);
}

export default ButtonsEdit;
