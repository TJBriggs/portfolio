import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
//import './editor.scss';

const ALLOWED_BLOCKS = ['core/embed', 'core/video', 'core/html', 'mx/image', 'gb/lottiefiles'];

const BLOCK_TEMPLATE = [
	['mx/image', {}]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `media-block`,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</div>
	);
}
