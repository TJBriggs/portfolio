import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import PrimaryAccordion from '../../../components/primary-accordion/primary-accordion.js';
import './editor.scss';

const BLOCK_TEMPLATE = [
	['core/group', { className: 'accordion__toggle' }, [
		['core/paragraph', { className: 'accordion__toggle-heading', placeholder: 'Q:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?' }],
	]],
	['core/group', { className: 'accordion__content' }, []]
];

export default function Edit({
	attributes: {
		primaryAccordion
	},
	setAttributes
}) {
	const blockProps = useBlockProps({
		className: `accordion ${primaryAccordion ? 'accordion--primary' : ''}`,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<BlockControls>
				<PrimaryAccordion primaryAccordion={primaryAccordion} setAttributes={setAttributes} />
			</BlockControls>
			<InnerBlocks
				template={BLOCK_TEMPLATE}
			/>
		</div>
	);
}
