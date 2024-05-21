import { get, filter, map, pick, includes } from 'lodash';
import LinkTypes from '../../../components/link-types/link-types.js';
import { isBlobURL } from '@wordpress/blob';
import {
	ExternalLink,
	PanelBody,
	RadioControl,
	ResizableBox,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarButton,
	Popover,
} from '@wordpress/components';
import { useViewportMatch, usePrevious } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	__experimentalImageSizeControl as ImageSizeControl,
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
	store as blockEditorStore,
	BlockAlignmentControl,
	__experimentalImageEditor as ImageEditor,
	__experimentalImageEditingProvider as ImageEditingProvider,
} from '@wordpress/block-editor';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { __, sprintf, isRTL } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { createBlock, switchToBlockType } from '@wordpress/blocks';
import { crop, link, linkOff, overlayText, upload } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { store as coreStore } from '@wordpress/core-data';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';

/**
 * Internal dependencies
 */
import { createUpgradedEmbedBlock } from '../../embed/util';
import useClientWidth from './use-client-width';
import { isExternalImage, isMediaDestroyed } from './edit';

/**
 * Module constants
 */
import { MIN_SIZE, ALLOWED_MEDIA_TYPES } from './constants';

export default function Image({
	temporaryURL,
	attributes: {
		url = '',
		alt,
		caption,
		align,
		id,
		href,
		customHref,
		modalHref,
		rel,
		linkClass,
		linkDestination,
		linkIcon,
		linkType,
		title,
		videoID,
		videoType,
		videoURL,
		width,
		height,
		linkTarget,
		sizeSlug,
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onReplace,
	onCloseModal,
	onSelectImage,
	onSelectURL,
	onUploadError,
	containerRef,
	context,
	clientId,
	onImageLoadError,
}) {
	const imageRef = useRef();
	const captionRef = useRef();
	const urlRef = useRef();
	const prevUrl = usePrevious(url);
	const { allowResize = true } = context;
	const { getBlock } = useSelect(blockEditorStore);

	const { image, multiImageSelection } = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			const { getMultiSelectedBlockClientIds, getBlockName } = select(
				blockEditorStore
			);
			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				image: id && isSelected ? getMedia(id) : null,
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every(
						(_clientId) =>
							getBlockName(_clientId) === 'core/image'
					),
			};
		},
		[id, isSelected]
	);
	const {
		canInsertCover,
		imageEditing,
		imageSizes,
		maxWidth,
		mediaUpload,
	} = useSelect(
		(select) => {
			const {
				getBlockRootClientId,
				getSettings,
				canInsertBlockType,
			} = select(blockEditorStore);

			const rootClientId = getBlockRootClientId(clientId);
			const settings = pick(getSettings(), [
				'imageEditing',
				'imageSizes',
				'maxWidth',
				'mediaUpload',
			]);

			return {
				...settings,
				canInsertCover: canInsertBlockType(
					'core/cover',
					rootClientId
				),
			};
		},
		[clientId]
	);
	const { replaceBlocks, toggleSelection } = useDispatch(blockEditorStore);
	const { createErrorNotice, createSuccessNotice } = useDispatch(
		noticesStore
	);
	const isLargeViewport = useViewportMatch('medium');
	const isWideAligned = includes(['wide', 'full'], align);
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState({});

	const [isEditingCustomHref, setIsEditingCustomHref] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const isCustomHrefSet = !!customHref;

	const [isEditingModalHref, setIsEditingModalHref] = useState(false);
	const isModalHrefSet = !!modalHref;

	function startEditing(event) {
		console.log(linkType);
		event.preventDefault();
		setIsEditingCustomHref(true);
		setIsEditingModalHref(true);
		setIsOpen(true);
	}

	function unlink() {
		setAttributes({
			videoID: undefined,
			videoURL: undefined,
			customHref: undefined,
			modalHref: undefined,
			linkTarget: undefined,
			rel: undefined,
		});
		setIsEditingCustomHref(false);
		setIsEditingModalHref(false);
		setIsOpen(false);
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingCustomHref(false);
			setIsEditingModalHref(false);
		}
	}, [isSelected]);

	const [isEditingImage, setIsEditingImage] = useState(false);
	const [externalBlob, setExternalBlob] = useState();
	const clientWidth = useClientWidth(containerRef, [align]);
	const isResizable = allowResize && !(isWideAligned && isLargeViewport);
	const imageSizeOptions = map(
		filter(imageSizes, ({ slug }) =>
			get(image, ['media_details', 'sizes', slug, 'source_url'])
		),
		({ name, slug }) => ({ value: slug, label: name })
	);

	// If an image is externally hosted, try to fetch the image data. This may
	// fail if the image host doesn't allow CORS with the domain. If it works,
	// we can enable a button in the toolbar to upload the image.
	useEffect(() => {
		if (!isExternalImage(id, url) || !isSelected || externalBlob) {
			return;
		}

		window
			.fetch(url)
			.then((response) => response.blob())
			.then((blob) => setExternalBlob(blob))
			// Do nothing, cannot upload.
			.catch(() => { });
	}, [id, url, isSelected, externalBlob]);

	// Focus the caption after inserting an image from the placeholder. This is
	// done to preserve the behaviour of focussing the first tabbable element
	// when a block is mounted. Previously, the image block would remount when
	// the placeholder is removed. Maybe this behaviour could be removed.
	useEffect(() => {
		if (url && !prevUrl && isSelected) {
			captionRef.current.focus();
		}
	}, [url, prevUrl]);

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// witdth and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo(() => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	]);

	function onResizeStart() {
		toggleSelection(false);
	}

	function onResizeStop() {
		toggleSelection(true);
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

	function onImageError() {
		// Check if there's an embed block that handles this URL, e.g., instagram URL.
		// See: https://github.com/WordPress/gutenberg/pull/11472
		const embedBlock = createUpgradedEmbedBlock({ attributes: { url } });
		const shouldReplace = undefined !== embedBlock;

		if (shouldReplace) {
			onReplace(embedBlock);
		}

		onImageLoadError(shouldReplace);
	}

	function onSetHref(props) {
		setAttributes(props);
	}

	function onSetTitle(value) {
		// This is the HTML title attribute, separate from the media object
		// title.
		setAttributes({ title: value });
	}

	function updateAlt(newAlt) {
		setAttributes({ alt: newAlt });
	}

	function updateImage(newSizeSlug) {
		const newUrl = get(image, [
			'media_details',
			'sizes',
			newSizeSlug,
			'source_url',
		]);
		if (!newUrl) {
			return null;
		}

		setAttributes({
			url: newUrl,
			width: undefined,
			height: undefined,
			sizeSlug: newSizeSlug,
		});
	}

	function uploadExternal() {
		mediaUpload({
			filesList: [externalBlob],
			onFileChange([img]) {
				onSelectImage(img);

				if (isBlobURL(img.url)) {
					return;
				}

				setExternalBlob();
				createSuccessNotice(__('Image uploaded.'), {
					type: 'snackbar',
				});
			},
			allowedTypes: ALLOWED_MEDIA_TYPES,
			onError(message) {
				createErrorNotice(message, { type: 'snackbar' });
			},
		});
	}

	function updateAlignment(nextAlign) {
		const extraUpdatedAttributes = ['wide', 'full'].includes(nextAlign)
			? { width: undefined, height: undefined }
			: {};
		setAttributes({
			...extraUpdatedAttributes,
			align: nextAlign,
		});
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingImage(false);
		}
		if (isSelected && isMediaDestroyed(id)) {
			onImageLoadError();
		}
	}, [isSelected]);

	const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
	const allowCrop = !multiImageSelection && canEditImage && !isEditingImage;

	function switchToCover() {
		replaceBlocks(
			clientId,
			switchToBlockType(getBlock(clientId), 'core/cover')
		);
	}

	const controls = (
		<>
			<BlockControls group="block">
				<BlockAlignmentControl
					value={align}
					onChange={updateAlignment}
				/>
				<LinkTypes linkIcon={linkIcon} linkType={linkType} setAttributes={setAttributes} />
				{!multiImageSelection && !isEditingImage && linkType === 'basic' && (
					<>
						<ImageURLInputUI
							url={href || ''}
							onChangeUrl={onSetHref}
							linkDestination={linkDestination}
							mediaUrl={(image && image.source_url) || url}
							mediaLink={image && image.link}
							linkTarget={linkTarget}
							linkClass={linkClass}
							rel={rel}
						/>
					</>
				)}
				{!multiImageSelection && !isEditingImage && linkType !== 'basic' && (
					<>
						<ToolbarButton
							name="link"
							icon={link}
							title={__('Link', 'mx-blocks-plugin')}
							shortcut={displayShortcut.primary('k')}
							onClick={startEditing}
							startEditing
						/>
						{(isCustomHrefSet || videoURL || isModalHrefSet) && (
							<ToolbarButton
								name="link"
								icon={linkOff}
								title={__('Unlink', 'mx-blocks-plugin')}
								shortcut={displayShortcut.primaryShift('k')}
								onClick={unlink}
								isActive={true}
							/>
						)}
					</>
				)}
				{isOpen && (
					<Popover
						position="bottom left"
						onClose={() => {
							setIsEditingCustomHref(false);
							setIsOpen(false);
						}}
						focusOnMount={isEditingCustomHref ? 'firstElement' : false}
					>
						{linkType === 'scroll' && (
							<div className='modal-link__wrap'>
								<TextControl
									className="wp-block-navigation-link__inline-link-input"
									placeholder={__('Scroll ID', 'mx-blocks-plugin')}
									value={customHref}
									onChange={(customHref) => setAttributes({ customHref })}
									onRemove={() => {
										unlink();
									}}
									forceIsEditingLink={isEditingCustomHref}
								/>
								<div class='link-help'><p>The Scroll ID should match the HTML Anchor value of the element you would like to scroll to. A # symbol is required in front of the Scroll ID.</p><strong>Example: #html-anchor</strong></div>
							</div>
						)}
						{(linkType === 'modal' || linkType === 'modal-gallery') && (
							<div className='modal-link__wrap'>
								<TextControl
									className="wp-block-navigation-link__inline-link-input"
									placeholder={__('Modal ID', 'mx-blocks-plugin')}
									value={modalHref}
									onChange={(modalHref) => setAttributes({ modalHref })}
									onRemove={() => {
										unlink();
									}}
									forceIsEditingLink={isEditingModalHref}
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
									}}
									forceIsEditingLink={isEditingModalHref}
								/>
								{videoType === 'youtube'
									? <div class='link-help'><label>{__('Example YouTube ID In Bold:', 'mx-blocks-plugin')}</label>https://www.youtube.com/watch?v=<strong>71EZb94AS1k</strong></div>
									: <div className='link-help'><label>{__('Example Vimeo ID In Bold:', 'mx-blocks-plugin')}Example Vimeo ID In Bold:</label>https://vimeo.com/<strong>662718427</strong></div>
								}
							</div>
						)}
					</Popover>
				)}
				{allowCrop && (
					<ToolbarButton
						onClick={() => setIsEditingImage(true)}
						icon={crop}
						label={__('Crop')}
					/>
				)}
				{externalBlob && (
					<ToolbarButton
						onClick={uploadExternal}
						icon={upload}
						label={__('Upload external image')}
					/>
				)}
				{!multiImageSelection && canInsertCover && (
					<ToolbarButton
						icon={overlayText}
						label={__('Add text over image')}
						onClick={switchToCover}
					/>
				)}
			</BlockControls>
			{!multiImageSelection && !isEditingImage && (
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={id}
						mediaURL={url}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						accept="image/*"
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
						onCloseModal={onCloseModal}
					/>
				</BlockControls>
			)}
			<InspectorControls>
				<PanelBody title={__('Image settings')}>
					{!multiImageSelection && (
						<TextareaControl
							label={__('Alt text (alternative text)')}
							value={alt}
							onChange={updateAlt}
							help={
								<>
									<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
										{__(
											'Describe the purpose of the image'
										)}
									</ExternalLink>
									{__(
										'Leave empty if the image is purely decorative.'
									)}
								</>
							}
						/>
					)}
					<ImageSizeControl
						onChangeImage={updateImage}
						onChange={(value) => setAttributes(value)}
						slug={sizeSlug}
						width={width}
						height={height}
						imageSizeOptions={imageSizeOptions}
						isResizable={isResizable}
						imageWidth={naturalWidth}
						imageHeight={naturalHeight}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls __experimentalGroup="advanced">
				<TextControl
					label={__('Title attribute')}
					value={title || ''}
					onChange={onSetTitle}
					help={
						<>
							{__(
								'Describe the role of this image on the page.'
							)}
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{__(
									'(Note: many devices and browsers do not display this text.)'
								)}
							</ExternalLink>
						</>
					}
				/>
			</InspectorControls>
		</>
	);

	const filename = getFilename(url);
	let defaultedAlt;

	if (alt) {
		defaultedAlt = alt;
	} else if (filename) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__('This image has an empty alt attribute; its file name is %s'),
			filename
		);
	} else {
		defaultedAlt = __('This image has an empty alt attribute');
	}

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		<>
			<img
				src={temporaryURL || url}
				alt={defaultedAlt}
				onError={() => onImageError()}
				onLoad={(event) => {
					setLoadedNaturalSize({
						loadedNaturalWidth: event.target?.naturalWidth,
						loadedNaturalHeight: event.target?.naturalHeight,
					});
				}}
				ref={imageRef}
			/>
			{temporaryURL && <Spinner />}
		</>
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if (clientWidth && naturalWidth && naturalHeight) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth
			? clientWidth * ratio
			: naturalHeight;
	}

	if (canEditImage && isEditingImage) {
		img = (
			<ImageEditor
				url={url}
				width={width}
				height={height}
				clientWidth={clientWidth}
				naturalHeight={naturalHeight}
				naturalWidth={naturalWidth}
			/>
		);
	} else if (!isResizable || !imageWidthWithinContainer) {
		img = <div style={{ width, height }}>{img}</div>;
	} else {
		const currentWidth = width || imageWidthWithinContainer;
		const currentHeight = height || imageHeightWithinContainer;

		const ratio = naturalWidth / naturalHeight;
		const minWidth =
			naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight =
			naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		/* eslint-disable no-lonely-if */
		// See https://github.com/WordPress/gutenberg/issues/7584.
		if (align === 'center') {
			// When the image is centered, show both handles.
			showRightHandle = true;
			showLeftHandle = true;
		} else if (isRTL()) {
			// In RTL mode the image is on the right by default.
			// Show the right handle and hide the left handle only when it is
			// aligned left. Otherwise always show the left handle.
			if (align === 'left') {
				showRightHandle = true;
			} else {
				showLeftHandle = true;
			}
		} else {
			// Show the left handle and hide the right handle only when the
			// image is aligned right. Otherwise always show the right handle.
			if (align === 'right') {
				showLeftHandle = true;
			} else {
				showRightHandle = true;
			}
		}
		/* eslint-enable no-lonely-if */

		img = (
			<ResizableBox
				className={videoURL ? 'has-play-icon' : ''}
				size={{
					width: width ?? 'auto',
					height: height ?? 'auto',
				}}
				showHandle={isSelected}
				minWidth={minWidth}
				maxWidth={maxWidthBuffer}
				minHeight={minHeight}
				maxHeight={maxWidthBuffer / ratio}
				lockAspectRatio
				enable={{
					top: false,
					right: showRightHandle,
					bottom: true,
					left: showLeftHandle,
				}}
				onResizeStart={onResizeStart}
				onResizeStop={(event, direction, elt, delta) => {
					onResizeStop();
					setAttributes({
						width: parseInt(currentWidth + delta.width, 10),
						height: parseInt(currentHeight + delta.height, 10),
					});
				}}
			>
				{img}
			</ResizableBox>
		);
	}

	return (
		<ImageEditingProvider
			id={id}
			url={url}
			naturalWidth={naturalWidth}
			naturalHeight={naturalHeight}
			clientWidth={clientWidth}
			onSaveImage={(imageAttributes) =>
				setAttributes(imageAttributes)
			}
			isEditing={isEditingImage}
			onFinishEditing={() => setIsEditingImage(false)}
		>
			{ /* Hide controls during upload to avoid component remount,
				which causes duplicated image upload. */ }
			{!temporaryURL && controls}
			{img}
			{(!RichText.isEmpty(caption) || isSelected) && (
				<RichText
					ref={captionRef}
					tagName="figcaption"
					aria-label={__('Image caption text')}
					placeholder={__('Add caption')}
					value={caption}
					onChange={(value) =>
						setAttributes({ caption: value })
					}
					inlineToolbar
					__unstableOnSplitAtEnd={() =>
						insertBlocksAfter(createBlock('core/paragraph'))
					}
				/>
			)}
		</ImageEditingProvider>
	);
}
