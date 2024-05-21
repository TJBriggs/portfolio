import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'mx/buttons', 'mx/button'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'jump-nav__default-inner' }, [
		['mx/buttons', { className: 'jump-nav__links', layout: { type: 'flex', justifyContent: 'space-between' } }, [
			['mx/button', { className: 'jump-nav__link is-style-text-link', placeholder: 'Link Text' }],
			['mx/button', { className: 'jump-nav__link is-style-text-link', placeholder: 'Link Text' }],
			['mx/button', { className: 'jump-nav__link is-style-text-link', placeholder: 'Link Text' }],
			['mx/button', { className: 'jump-nav__link is-style-text-link', placeholder: 'Link Text' }]
		]]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `jump-nav`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
