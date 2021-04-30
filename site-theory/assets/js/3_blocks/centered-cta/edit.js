/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ColorPicker, TextControl, ToggleControl } = wp.components;
const { RichText, URLInputButton } = wp.blockEditor;

export default function CenteredCTAEdit({
	attributes: { bgColor, headline, linkText, linkToggle, linkURL, text },
	className,
	setAttributes,
}) {
	const editorStyles = {
		backgroundColor: bgColor,
	};

	return (
		<div className={`${className} centered-cta editor-centered-cta`} style={editorStyles}>
			<div className="centered-cta__wrap">
				<TextControl
					className="centered-cta__headline"
					tagName="h3"
					value={headline}
					onChange={(headline) => setAttributes({ headline })}
					placeholder={__('Headline')}
					keepPlaceholderOnFocus="true"
					withoutInteractiveFormatting="false"
				/>
				<RichText
					className="centered-cta__text"
					tagName="div"
					multiline="p"
					value={text}
					onChange={(text) => setAttributes({ text })}
					placeholder={__('Text (optional)')}
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
