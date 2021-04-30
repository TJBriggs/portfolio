/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
const { RichText } = wp.blockEditor;

/**
 * Register block
 */
export default registerBlockType('theme-name/example-block', {
	title: __('Example Block'),
	description: __('Example Block Description'),
	icon: 'megaphone',
	category: 'custom-blocks',
	keywords: [__('Example'), __('Block'), __('Example Block')],
	attributes: {
		headline: {
			type: 'string',
			default: '',
			selector: '.example-block__headline',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: '.example-block__text',
		},
	},

	edit: (props) => {
		console.log(props);

		const { attributes, className, setAttributes } = props;
		const { headline, text } = attributes;

		return (
			<div className={`${className} example-block editor-example-block`}>
				<div className="hero-block__copy">
					<TextControl
						className="example-block__headline"
						value={headline}
						onChange={(headline) => setAttributes({ headline })}
						placeholder={__('Headline')}
						keepPlaceholderOnFocus="true"
						withoutInteractiveFormatting="false"
					/>
					<RichText
						className="example-block__text"
						tagName="div"
						multiline="p"
						value={text}
						onChange={(text) => setAttributes({ text })}
						placeholder={__('Text')}
						keepPlaceholderOnFocus="true"
						withoutInteractiveFormatting="false"
					/>
				</div>
			</div>
		);
	},
	save: (props) => {
		const { headline, text } = props.attributes;

		return (
			<section className="example-block">
				<div className="example-block__inner">
					{headline.length > 0 && <h1 className="example-block__headline">{headline}</h1>}
					{text.length > 0 && (
						<RichText.Content
							className="example-block__text"
							tagName="div"
							value={text}
						/>
					)}
				</div>
			</section>
		);
	},
});
