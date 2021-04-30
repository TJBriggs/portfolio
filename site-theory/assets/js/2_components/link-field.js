/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { TextControl, ToggleControl } = wp.components;
const { URLInputButton } = wp.blockEditor;
/**
 * Link Field  Component
 *
 * @param {Array} props passed in props
 * @return {void} Link Fields
 */
const LinkField = (props) => {
	const { linkText, linkToggle, linkURL, setAttributes } = props;

	return (
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
	);
};

export default LinkField;
