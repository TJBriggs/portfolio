import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'mx/buttons', 'mx/button'];

const BLOCK_TEMPLATE = [
	['core/heading', { className: 'heading-button__heading h1', level: 2, placeholder: 'Heading Text' }],
	['mx/buttons', { className: 'heading-button__links' }, [
		['mx/button', { className: 'heading-button__link is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `heading-button`,
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
