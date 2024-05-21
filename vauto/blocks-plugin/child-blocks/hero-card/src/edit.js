import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
//import './editor.scss';

const ALLOWED_BLOCKS = ['core/paragraph', 'mx/image'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'hero-card__upper' }, [
		['core/group', { className: 'hero-card__icon-wrap' }, [
			['mx/image', { className: 'hero-card__icon' }],
			['core/paragraph', { className: 'hero-card__icon-text thinweight', fontSize: 'medium', placeholder: 'Lorem' }]
		]],
		['core/group', { className: 'hero-card__text-wrap' }, [
			['core/paragraph', { className: 'hero-card__text-large h1', placeholder: 'Lorem' }],
			['core/paragraph', { className: 'hero-card__text-medium thinweight', fontSize: 'medium', placeholder: 'Lorem ipsum dolor sit amet' }]
		]]
	]],
	['core/group', { className: 'hero-card__lower' }, [
		['core/group', { className: 'hero-card__icon-wrap' }, [
			['mx/image', { className: 'hero-card__icon' }],
			['core/paragraph', { className: 'hero-card__icon-text thinweight', fontSize: 'medium', placeholder: 'Lorem' }]
		]],
		['core/group', { className: 'hero-card__text-wrap' }, [
			['core/paragraph', { className: 'hero-card__text-large h1', placeholder: 'Lorem' }],
			['core/paragraph', { className: 'hero-card__text-medium thinweight', fontSize: 'medium', placeholder: 'Lorem ipsum dolor sit amet' }]
		]]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `hero-card`,
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
