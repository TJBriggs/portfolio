import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/paragraph'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'hero-banner__copy' }, [
		['core/heading', { className: 'hero-banner__subheading thinweight uppercase', level: 5, textColor: 'white', textAlign: 'center', placeholder: 'Centered Subheading' }],
		['core/heading', { className: 'hero-banner__heading thinweight', level: 1, textColor: 'white', textAlign: 'center', placeholder: 'Centered Heading' }],
		['core/paragraph', { className: 'hero-banner__text', textColor: 'white', align: 'center', placeholder: 'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.' }],
	]]
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'hero-banner',
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<div className="hero-banner__shmedium-inner">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={BLOCK_TEMPLATE}
				/>
			</div>
		</section>
	);
}
