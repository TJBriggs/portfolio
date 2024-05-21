import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
//import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/repeater', 'mx/accordion'];

const BLOCK_TEMPLATE = [
	['core/heading', { className: 'accordion-group__heading h1 bold', level: 3, placeholder: 'Heading Text' }],
	['mx/repeater', { className: 'accordion-group__wrap' }, [
		['mx/accordion', {}]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `accordion-group`,
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
