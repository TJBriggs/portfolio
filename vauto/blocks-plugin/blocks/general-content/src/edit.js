import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import BlockWidth from '../../../components/block-width/block-width.js';
import SpacingControls from '../../../components/spacing-controls/spacing-controls.js';
import './editor.scss';

const BLOCK_TEMPLATE = [
	['core/group', { className: 'general-content__flexible-inner' }, []]
];

export default function Edit({
	attributes: {
		marginBottom,
		marginTop,
		paddingBottom,
		paddingTop,
		widthIcon,
		widthOption
	},
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: `general-content layout-width--${widthOption} margin-bottom--${marginBottom} margin-top--${marginTop} padding-bottom--${paddingBottom} padding-top--${paddingTop}`,
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<InspectorControls>
				<SpacingControls marginBottom={marginBottom} marginTop={marginTop} paddingBottom={paddingBottom} paddingTop={paddingTop} setAttributes={setAttributes} />
			</InspectorControls>
			<BlockControls>
				<BlockWidth
					widthIcon={widthIcon}
					widthOption={widthOption}
					setAttributes={setAttributes}
				/>
			</BlockControls>
			<InnerBlocks
				template={BLOCK_TEMPLATE}
			/>
		</section>
	);
}
