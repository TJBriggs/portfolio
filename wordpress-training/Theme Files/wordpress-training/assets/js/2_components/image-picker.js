/**
 * WordPress dependencies
 */
const { Button, Icon, Tooltip } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Fragment } = wp.element;
const ALLOWED_MEDIA_TYPES = ['image'];
/**
 * Image Picker Component
 *
 * @param {Array} props passed in props
 * @return {void} background image component
 */
const ImagePicker = (props) => {
	const { imgAlt, imgID, imgURL, setAttributes } = props;

	/**
	 * onSelectImage
	 *
	 * @param {Object} img image object
	 */
	const onSelectImage = (img) => {
		setAttributes({
			imgID: img.id,
			imgURL: img.url,
			imgAlt: img.alt,
		});
	};

	/**
	 *
	 * onRemoveImage
	 *
	 */
	const onRemoveImage = () => {
		setAttributes({
			imgID: null,
			imgURL: null,
			imgAlt: null,
		});
	};

	return (
		<Fragment>
			{!imgID ? (
				<MediaUploadCheck>
					<div className="components-panel__item media-wrap">
						<MediaUpload
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={onSelectImage}
							value={imgID}
							id="bg-image"
							render={({ open }) => (
								<Tooltip text="Add Image">
									<Button className="add-media" onClick={open}>
										<Icon icon="admin-media" />
										Add Image
									</Button>
								</Tooltip>
							)}
						/>
					</div>
				</MediaUploadCheck>
			) : (
				<div className="components-panel__item image-wrapper">
					<img className="style-svg" src={imgURL} alt={imgAlt} />
					<Tooltip text="Remove Image">
						<Button className="remove-media" onClick={onRemoveImage}>
							<Icon icon="no-alt" />
						</Button>
					</Tooltip>
				</div>
			)}
		</Fragment>
	);
};

export default ImagePicker;
