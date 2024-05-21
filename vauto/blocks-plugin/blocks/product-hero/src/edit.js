import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/image', 'mx/repeater', 'mx/hero-card', 'mx/hero-card-image'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'product-hero__default-inner' }, [
		['core/group', { className: 'product-hero__copy' }, [
			['mx/image', { className: 'product-hero__logo' }],
			['core/heading', { className: 'product-hero__heading h2', level: 1, textColor: 'white', placeholder: 'Heading Text' }],
			['core/paragraph', { className: 'product-hero__text', textColor: 'white', placeholder: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' }],
			['mx/buttons', { className: 'product-hero__tertiary-buttons' }, [
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'product-hero__link is-style-tertiary-button', placeholder: 'Button Text' }],
			]],
			['mx/buttons', { className: 'product-hero__primary-buttons' }, [
				['mx/button', { className: 'product-hero__link is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }],
			]]
		]],
		['core/group', { className: 'product-hero__image-wrap' }, [
			['mx/image', { className: 'product-hero__image' }],
			['mx/repeater', { className: 'product-hero__cards' }, [
				['mx/hero-card', { className: 'product-hero__card' }],
				['mx/hero-card', { className: 'product-hero__card' }]
			]]
		]],
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `product-hero`,
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
