import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
//import './editor.scss';

const ALLOWED_BLOCKS = ['mx/hero-slide', 'mx/feature-slide', 'mx/carousel-slide'];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `slider`,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
