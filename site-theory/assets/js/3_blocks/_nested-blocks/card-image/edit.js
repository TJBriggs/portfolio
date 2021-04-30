/**
 * External dependencies
 */
import ImagePicker from '../../../2_components/image-picker';
/**
 * WordPress dependencies
 */
const { ToggleControl } = wp.components;
const { URLInputButton } = wp.blockEditor;

export default function CardImageEdit({
	attributes: { imgAlt, imgID, imgURL, imageType, linkOption, linkURL, linkToggle },
	setAttributes,
	className,
}) {
	let bgStyle;
	if (imgURL.length > 0) {
		bgStyle = {
			backgroundImage: `url( ${imgURL} )`,
		};
	}

	return (
		<div className={`${className} card-image column-block__column`}>
			{imgURL.length > 0 && (
				<div className="card-image__display">
					{imageType ? ( // Background Image
						<span className="card-image__bg-image" style={bgStyle}>
							<span className="screen-reader-text">{imgAlt}</span>
						</span>
					) : (
						// Inline Image
						<img src={imgURL} alt={imgAlt} />
					)}
				</div>
			)}
			<div className="image-picker">
				<ToggleControl
					className="image-type"
					label="Image Type:"
					help={imageType ? 'Background Image' : 'Inline Image'}
					checked={imageType}
					onChange={() => setAttributes({ imageType: !imageType })}
				/>
				<label htmlFor="ImagePicker">
					Image:
					<ImagePicker
						imgURL={imgURL}
						imgID={imgID}
						imgAlt={imgAlt}
						setAttributes={setAttributes}
					/>
				</label>
			</div>
			<div className="card-image__link-wrap">
				<label htmlFor="ToggleControl">Link Options:</label>
				<ToggleControl
					className="link-option-toggle"
					label="Make image a link?"
					help={linkOption ? 'Link' : 'No Link'}
					checked={linkOption}
					onChange={() => setAttributes({ linkOption: !linkOption })}
				/>
				{linkOption && (
					<div className="link-fields">
						<URLInputButton
							className="link-fields__url-input"
							url={linkURL}
							onChange={(linkURL) => setAttributes({ linkURL })}
						/>
						{linkURL.length > 0 && (
							<div className="link-fields__url-display">
								<label>Link URL:</label>
								<em>{linkURL}</em>
							</div>
						)}
						<ToggleControl
							className="link-fields__link-toggle"
							label="Link Type:"
							help={linkToggle ? 'External Link' : 'Internal Link'}
							checked={linkToggle}
							onChange={() => setAttributes({ linkToggle: !linkToggle })}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
