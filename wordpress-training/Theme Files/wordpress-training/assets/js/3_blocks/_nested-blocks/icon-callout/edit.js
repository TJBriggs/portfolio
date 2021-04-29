import ImagePicker from '../../../2_components/image-picker';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { TextControl } = wp.components;

// eslint-disable-next-line react/function-component-definition
export default function IconCalloutEdit({
	attributes: { imgAlt, imgID, imgURL, text },
	className,
	setAttributes,
}) {
	return (
		<div className={`${className} icon-callout editor-icon-callout`}>
			<div className="icon-callout__icon">
				<div className="image-picker">
					<label htmlFor="ImagePicker">
						<span>Icon:</span>
						<ImagePicker
							imgURL={imgURL}
							imgID={imgID}
							imgAlt={imgAlt}
							setAttributes={setAttributes}
						/>
					</label>
				</div>
			</div>
			<div className="icon-callout__copy">
				<TextControl
					className="icon-callout__text"
					tagName="h4"
					value={text}
					onChange={(text) => setAttributes({ text })}
					placeholder={__('Subtitle Text', 'wordpress-training')}
					keepPlaceholderOnFocus="true"
				/>
			</div>
		</div>
	);
}
