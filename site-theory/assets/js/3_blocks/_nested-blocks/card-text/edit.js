/**
 * External dependencies
 */
import LinkField from '../../../2_components/link-field';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ColorPicker, TextControl } = wp.components;
const { RichText } = wp.blockEditor;

export default function CardTextEdit({
	attributes: { bgColor, headline, linkText, linkToggle, linkURL, text },
	className,
	setAttributes,
}) {
	return (
		<div
			className={`${className} card-text column-block__column`}
			style={{ backgroundColor: bgColor }}
		>
			<div className="card-text__wrap">
				<TextControl
					className="card-text__headline"
					tagName="h3"
					value={headline}
					onChange={(headline) => setAttributes({ headline })}
					placeholder={__('Headline')}
					keepPlaceholderOnFocus="true"
					withoutInteractiveFormatting="false"
				/>
				<RichText
					className="card-text__text"
					tagName="div"
					multiline="p"
					value={text}
					onChange={(text) => setAttributes({ text })}
					placeholder={__('Text (optional)')}
					keepPlaceholderOnFocus="true"
					withoutInteractiveFormatting="false"
				/>
			</div>
			<LinkField
				linkText={linkText}
				linkToggle={linkToggle}
				linkURL={linkURL}
				setAttributes={setAttributes}
			/>
			<div className="color-picker">
				<label>Background Color</label>
				<ColorPicker
					className="color-picker__picker"
					color={bgColor}
					onChangeComplete={(bgColor) => setAttributes({ bgColor: bgColor.hex })}
				/>
			</div>
		</div>
	);
}
