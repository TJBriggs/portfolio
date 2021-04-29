import ImagePicker from '../../2_components/image-picker';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { TextControl } = wp.components;
const { RichText } = wp.blockEditor;

// eslint-disable-next-line react/function-component-definition
export default function HeroBlockEdit({
	attributes: { headline, imgAlt, imgID, imgURL, text },
	className,
	setAttributes,
}) {
	const bgImageStyles = {
		backgroundImage: `url( ${imgURL} )`,
	};
	return (
		<div className={`${className} hero-block editor-hero-block`} style={bgImageStyles}>
			<div className="hero-block__inner">
				<div className="hero-block__copy">
					<TextControl
						className="hero-block__headline"
						value={headline}
						onChange={(headline) => setAttributes({ headline })}
						placeholder={__('Headline Text', 'wordpress-training')}
						keepPlaceholderOnFocus="true"
					/>
					<RichText
						className="hero-block__text"
						value={text}
						onChange={(text) => setAttributes({ text })}
						tagName="div"
						placeholder={__('Text', 'wordpress-training')}
						multiline="p"
						keepPlaceholderOnFocus="true"
					/>
				</div>
				<div className="hero-block__image">
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
				</div>
			</div>
		</div>
	);
}
