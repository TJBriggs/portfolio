import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

//import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph', 'mx/buttons', 'mx/button', 'mx/image'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'product-tab__header' }, [
		['mx/image', { className: 'product-tab__logo' }],
		['core/paragraph', { className: 'product-tab__text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam' }],
		['mx/buttons', { className: 'product-tab__links' }, [
			['mx/button', { className: 'product-tab__link', placeholder: 'View Product' }]
		]],
	]],
	['core/group', { className: 'product-tab__callouts' }, [
		['core/group', { className: 'product-tab__column' }, [
			['core/group', { className: 'product-tab__callout icon-callout icon-above' }, [
				['mx/image', { className: 'product-tab__callout-icon' }],
				['core/heading', { className: 'product-tab__callout-heading', level: 4, textColor: 'white', placeholder: 'Callout Heading' }],
				['core/paragraph', { className: 'product-tab__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
			]],
			['core/group', { className: 'product-tab__callout icon-callout icon-above' }, [
				['mx/image', { className: 'product-tab__callout-icon' }],
				['core/heading', { className: 'product-tab__callout-heading', level: 4, textColor: 'white', placeholder: 'Callout Heading' }],
				['core/paragraph', { className: 'product-tab__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
			]]
		]],
		['core/group', { className: 'product-tab__column column--center' }, [
			['mx/image', { className: 'product-tab__center-image' }],
		]],
		['core/group', { className: 'product-tab__column' }, [
			['core/group', { className: 'product-tab__callout icon-callout icon-above' }, [
				['mx/image', { className: 'product-tab__callout-icon' }],
				['core/heading', { className: 'product-tab__callout-heading', level: 4, textColor: 'white', placeholder: 'Callout Heading' }],
				['core/paragraph', { className: 'product-tab__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
			]],
			['core/group', { className: 'product-tab__callout icon-callout icon-above' }, [
				['mx/image', { className: 'product-tab__callout-icon' }],
				['core/heading', { className: 'product-tab__callout-heading', level: 4, textColor: 'white', placeholder: 'Callout Heading' }],
				['core/paragraph', { className: 'product-tab__callout-text', textColor: 'white', placeholder: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et' }],
			]]
		]]
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: `product-tab`,
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
