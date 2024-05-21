import classnames from 'classnames';
import LinkTypes from '../../../components/link-types/link-types.js';
import { __ } from '@wordpress/i18n';
import { useCallback, useEffect, useState, useRef } from '@wordpress/element';
import {
	Button,
	ButtonGroup,
	PanelBody,
	RadioControl,
	TextControl,
	ToolbarButton,
	Popover,
} from '@wordpress/components';
import {
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import { link, linkOff } from '@wordpress/icons';
import { createBlock } from '@wordpress/blocks';
import './editor.scss';

const NEW_TAB_REL = 'noreferrer noopener';

function WidthPanel({ selectedWidth, setAttributes }) {
	function handleChange(newWidth) {
		// Check if we are toggling the width off
		const width = selectedWidth === newWidth ? undefined : newWidth;

		// Update attributes
		setAttributes({ width });
	}

	return (
		<PanelBody title={__('Width settings')}>
			<ButtonGroup aria-label={__('Button width')}>
				{[25, 50, 75, 100].map((widthValue) => {
					return (
						<Button
							key={widthValue}
							isSmall
							variant={
								widthValue === selectedWidth
									? 'primary'
									: undefined
							}
							onClick={() => handleChange(widthValue)}
						>
							{widthValue}%
						</Button>
					);
				})}
			</ButtonGroup>
		</PanelBody>
	);
}

function ButtonEdit(props) {
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		onReplace,
		mergeBlocks,
	} = props;
	const {
		linkIcon,
		linkTarget,
		linkType,
		placeholder,
		rel,
		style,
		text,
		url,
		modalURL,
		videoID,
		videoURL,
		videoType,
		width,
	} = attributes;

	const onSetLinkRel = useCallback(
		(value) => {
			setAttributes({ rel: value });
		},
		[setAttributes]
	);

	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = rel;
		if (newLinkTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			linkTarget: newLinkTarget,
			rel: updatedRel,
		});
	}

	function setButtonText(newText) {
		// Remove anchor tags from button text content.
		setAttributes({ text: newText.replace(/<\/?a[^>]*>/g, '') });
	}

	function setVideoURL(videoID) {
		let newURL = '';
		if (videoType === 'youtube') {
			newURL = `https://www.youtube.com/watch?v=${videoID}&autoplay=1&rel=0&showinfo=0`;
		} else {
			newURL = `https://vimeo.com/${videoID}`;
		}
		setAttributes({
			videoID,
			videoURL: newURL
		});
	}

	function onKeyDown(event) {
		if (isKeyboardEvent.primary(event, 'k')) {
			startEditing(event);
		} else if (isKeyboardEvent.primaryShift(event, 'k')) {
			unlink();
			richTextRef.current?.focus();
		}
	}

	const borderProps = useBorderProps(attributes);
	const colorProps = useColorProps(attributes);
	const spacingProps = useSpacingProps(attributes);
	const ref = useRef();
	const richTextRef = useRef();

	const blockProps = useBlockProps({
		ref,
		onKeyDown
	});

	const [isEditingURL, setIsEditingURL] = useState(false);
	const [isEditingModalURL, setIsEditingModalURL] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const isURLSet = !!url;
	const opensInNewTab = linkTarget === '_blank';

	function startEditing(event) {
		event.preventDefault();
		setIsEditingURL(true);
		setIsEditingModalURL(true);
		setIsOpen(true);
	}

	function unlink() {
		setAttributes({
			videoID: undefined,
			videoURL: undefined,
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		});
		setIsEditingURL(false);
		setIsEditingModalURL(false);
		setIsOpen(false);
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingURL(false);
			setIsEditingModalURL(false);
			setIsOpen(false);
		}
	}, [isSelected]);

	return (
		<>
			<div
				{...blockProps}
				className={classnames(blockProps.className, {
					[`has-custom-width wp-block-button__width-${width}`]: width,
					[`has-custom-font-size`]: blockProps.style.fontSize,
				})}
			>
				<RichText
					ref={richTextRef}
					aria-label={__('Button text', 'mx-blocks-plugin')}
					placeholder={placeholder || __('Add text…', 'mx-blocks-plugin')}
					value={text}
					onChange={(value) => setButtonText(value)}
					withoutInteractiveFormatting
					className={classnames(
						className,
						'wp-block-button__link',
						colorProps.className,
						borderProps.className,
						{
							// For backwards compatibility add style that isn't
							// provided via block support.
							'no-border-radius': style?.border?.radius === 0,
						}
					)}
					style={{
						...borderProps.style,
						...colorProps.style,
						...spacingProps.style,
					}}
					onSplit={(value) =>
						createBlock('mx/button', {
							...attributes,
							text: value,
						})
					}
					onReplace={onReplace}
					onMerge={mergeBlocks}
					identifier="text"
				/>
			</div>
			<BlockControls group="block">
				<LinkTypes linkIcon={linkIcon} linkType={linkType} setAttributes={setAttributes} />
				<ToolbarButton
					name="link"
					icon={link}
					title={__('Link', 'mx-blocks-plugin')}
					shortcut={displayShortcut.primary('k')}
					onClick={startEditing}
				/>
				{(isURLSet || videoURL) && (
					<ToolbarButton
						name="link"
						icon={linkOff}
						title={__('Unlink', 'mx-blocks-plugin')}
						shortcut={displayShortcut.primaryShift('k')}
						onClick={unlink}
						isActive={true}
					/>
				)}
			</BlockControls>
			{isSelected && isOpen && (isEditingURL || isEditingModalURL || isURLSet) && (
				<Popover
					position="bottom center"
					onClose={() => {
						setIsEditingURL(false);
						setIsEditingModalURL(false);
						setIsOpen(false);
						richTextRef.current?.focus();
					}}
					anchorRef={ref?.current}
					focusOnMount={isEditingURL ? 'firstElement' : false}
				>
					{linkType === 'basic' && (
						<LinkControl
							className="wp-block-navigation-link__inline-link-input"
							value={{ url, opensInNewTab }}
							onChange={({
								url: newURL = '',
								opensInNewTab: newOpensInNewTab,
							}) => {
								setAttributes({ url: newURL });

								if (opensInNewTab !== newOpensInNewTab) {
									onToggleOpenInNewTab(newOpensInNewTab);
								}
							}}
							onRemove={() => {
								unlink();
								richTextRef.current?.focus();
							}}
							forceIsEditingLink={isEditingURL}
						/>
					)}
					{linkType === 'scroll' && (
						<div className='modal-link__wrap'>
							<TextControl
								className="wp-block-navigation-link__inline-link-input"
								placeholder={__('Scroll ID', 'mx-blocks-plugin')}
								value={url}
								onChange={(url) => setAttributes({ url })}
								onRemove={() => {
									unlink();
									richTextRef.current?.focus();
								}}
								forceIsEditingLink={isEditingURL}
							/>
							<div class='link-help'><p>The Scroll ID should match the HTML Anchor value of the element you would like to scroll to. A # symbol is required in front of the Scroll ID.</p><strong>Example: #html-anchor</strong></div>
						</div>
					)}
					{(linkType === 'modal' || linkType === 'modal-gallery') && (
						<div className='modal-link__wrap'>
							<TextControl
								className="wp-block-navigation-link__inline-link-input"
								placeholder={__('Modal ID', 'mx-blocks-plugin')}
								value={modalURL}
								onChange={(modalURL) => setAttributes({ modalURL })}
								onRemove={() => {
									unlink();
									richTextRef.current?.focus();
								}}
								forceIsEditingLink={isEditingModalURL}
							/>
							<div class='link-help'><p>The Modal ID should match the ID used in the Modal Content block. A # symbol is required in front of the Modal ID.</p><strong>Example: #modal-id</strong></div>
						</div>
					)}
					{linkType === 'video' && (
						<div className='video-link__wrap'>
							<label>Video Type</label>
							<RadioControl
								selected={videoType}
								options={[
									{ label: 'YouTube', value: 'youtube' },
									{ label: 'Vimeo', value: 'vimeo' },
								]}
								onChange={(videoType) => setAttributes({ videoType })}
							/>
							<TextControl
								className="wp-block-navigation-link__inline-link-input"
								placeholder={__('Video ID', 'mx-blocks-plugin')}
								value={videoID}
								onChange={setVideoURL}
								onRemove={() => {
									unlink();
									richTextRef.current?.focus();
								}}
								forceIsEditingLink={isEditingURL}
							/>
							{videoType === 'youtube'
								? <div class='link-help'><label>{__('Example YouTube ID In Bold:', 'mx-blocks-plugin')}</label>https://www.youtube.com/watch?v=<strong>71EZb94AS1k</strong></div>
								: <div className='link-help'><label>{__('Example Vimeo ID In Bold:', 'mx-blocks-plugin')}Example Vimeo ID In Bold:</label>https://vimeo.com/<strong>662718427</strong></div>
							}
						</div>
					)}
				</Popover>
			)}
			{/* <InspectorControls>
				<WidthPanel
					selectedWidth={width}
					setAttributes={setAttributes}
				/>
			</InspectorControls> */}
			<InspectorControls __experimentalGroup="advanced">
				<TextControl
					label={__('Link rel')}
					value={rel || ''}
					onChange={onSetLinkRel}
				/>
			</InspectorControls>
		</>
	);
}

export default ButtonEdit;
