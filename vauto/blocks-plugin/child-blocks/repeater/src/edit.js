import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

const BLOCK_TEMPLATE = [
	['core/group', { className: 'repeater__wrap' }, []]
];



export default function Edit() {
	const blockProps = useBlockProps({
		className: `repeater`,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<InnerBlocks
				template={BLOCK_TEMPLATE}
			/>
		</div>
	);
}
