/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { TextControl } = wp.components;
const { RichText } = wp.blockEditor;
const { InnerBlocks } = wp.blockEditor;
const ALLOWED_BLOCKS = ['wordpress-training/icon-callout'];

// eslint-disable-next-line react/function-component-definition
export default function IconCalloutsEdit({
	attributes: { headline, text },
	className,
	setAttributes,
}) {
	return (
		<section className={`${className} icon-callouts editor-icon-callouts`}>
			<div className="icon-callouts__copy">
				<TextControl
					className="icon-callouts__headline"
					tagName="h2"
					value={headline}
					onChange={(headline) => setAttributes({ headline })}
					placeholder={__('Headline Text', 'wordpress-training')}
					keepPlaceholderOnFocus="true"
				/>
				<RichText
					className="icon-callouts__text"
					value={text}
					onChange={(text) => setAttributes({ text })}
					tagName="div"
					placeholder={__('Text', 'wordpress-training')}
					multiline="p"
					keepPlaceholderOnFocus="true"
				/>
			</div>
			<div className="icon-callouts__wrap">
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</section>
	);
}
