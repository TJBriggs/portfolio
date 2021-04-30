/**
 * External dependencies
 */
import ImagePicker from '../../2_components/image-picker';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ColorPicker, TextControl, ToggleControl } = wp.components;
const { RichText, URLInputButton } = wp.blockEditor;

export default function HeroBlockEdit({
	attributes: { bgColor, imgAlt, imgID, imgURL, headline, text, linkText, linkURL, linkToggle },
	className,
	setAttributes,
}) {
	const editorStyles = {
		backgroundColor: bgColor,
		backgroundImage: `url( ${imgURL} )`,
	};
	return (
		<div className={`${className} hero-block editor-hero-block`} style={editorStyles}>
			<div className="hero-block__copy">
				<TextControl
					className="hero-block__headline"
					tagName="h1"
					value={headline}
					onChange={(headline) => setAttributes({ headline })}
					placeholder={__('Headline')}
					keepPlaceholderOnFocus="true"
					withoutInteractiveFormatting="false"
				/>
				<RichText
					className="hero-block__text"
					tagName="div"
					multiline="p"
					value={text}
					onChange={(text) => setAttributes({ text })}
					placeholder={__('Text')}
					keepPlaceholderOnFocus="true"
					withoutInteractiveFormatting="false"
				/>
				<div className="link-fields">
					<TextControl
						className="link-fields__link"
						tagName="a"
						value={linkText}
						onChange={(linkText) => setAttributes({ linkText })}
						placeholder={__('Link Text (optional)')}
						keepPlaceholderOnFocus="true"
						withoutInteractiveFormatting="false"
					/>
					{linkText.length > 0 && (
						<div className="link-fields__text">
							<span className="link-fields__link-display">{linkText}</span>
							<i className="far fa-arrow-alt-circle-right" />
						</div>
					)}
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
			</div>
			<div className="hero-block__options">
				<div className="image-picker">
					<label htmlFor="ImagePicker">
						Background Image:
						<ImagePicker
							imgURL={imgURL}
							imgID={imgID}
							imgAlt={imgAlt}
							setAttributes={setAttributes}
						/>
					</label>
				</div>
				<div className="color-picker">
					<label>Background Color</label>
					<ColorPicker
						className="color-picker__picker"
						color={bgColor}
						onChangeComplete={(bgColor) => setAttributes({ bgColor: bgColor.hex })}
					/>
				</div>
			</div>
		</div>
	);
}
