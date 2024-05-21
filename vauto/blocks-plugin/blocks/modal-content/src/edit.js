import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import {
	TextControl,
	PanelBody,
} from '@wordpress/components';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { displayShortcut } from '@wordpress/keycodes';
import { linkOff, customLink } from '@wordpress/icons';
import './editor.scss';

const ALLOWED_BLOCKS = ['core/group'];

const BLOCK_TEMPLATE = [
	['core/group', { className: 'modal-content__bg-color' }, [

	]]
];

function ModalContent({
	attributes: {
		contentID,
	},
	setAttributes
}) {

	const blockProps = useBlockProps({
		className: 'modal-content',
		id: contentID,
	});

	return (
		<div {...useBlockProps(blockProps)}>
			<InspectorControls>
				<PanelBody title={__('Modal Settings', 'mx-blocks-plugin')} initialOpen={true}>
					<div className="modal-controls">
						<label className="custom-label"><strong>{__('Modal ID', 'mx-blocks-plugin')}</strong></label>
						<TextControl
							className="wp-block-navigation-link__inline-link-input"
							placeholder={__('Modal ID', 'mx-blocks-plugin')}
							value={contentID}
							onChange={(contentID) => setAttributes({ contentID })}
						/>
						<p>Enter a unique ID for this hidden content. This ID will be referenced in the Modal Link.</p>
					</div>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={BLOCK_TEMPLATE}
			/>
		</div>
	);
}

export default ModalContent;
