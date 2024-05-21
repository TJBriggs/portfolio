import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/cover', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/image', 'mx/repeater', 'mx/hero-card', 'mx/hero-card-image'];

const BLOCK_TEMPLATE = [
	['core/cover', { className: 'feature-hero__cover' }, [
		['core/group', { className: 'feature-hero__copy' }, [
			['mx/image', { className: 'feature-hero__desktop-image' }],
			['mx/buttons', { className: 'feature-hero__underline-buttons', layout: { type: 'flex', orientation: 'vertical' } }, [
				['mx/button', { className: 'feature-hero__link is-style-underline-button is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'feature-hero__link is-style-underline-button is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'feature-hero__link is-style-underline-button is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'feature-hero__link is-style-underline-button is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }],
				['mx/button', { className: 'feature-hero__link is-style-underline-button is-style-large-button is-style-full-width-button', placeholder: 'Button Text' }]
			]]
		]],
		['core/group', { className: 'feature-hero__cards-wrap' }, [
			['mx/image', { className: 'feature-hero__mobile-image' }],
			['mx/repeater', { className: 'feature-hero__cards' }, [
				['mx/hero-card', { className: 'feature-hero__card' }],
				['mx/hero-card-image', { className: 'feature-hero__card' }]
			]]
		]]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `feature-hero`,
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
