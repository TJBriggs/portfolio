const { InnerBlocks, RichText } = wp.blockEditor;

export default function save({ attributes: { headline, text } }) {
	return (
		<section className="icon-callouts">
			<div className="icon-callouts__inner">
				{headline.length > 0 && <h2 className="icon-callouts__headline">{headline}</h2>}
				{text.length > 0 && (
					<RichText.Content className="icon-callouts__text" tagName="div" value={text} />
				)}
				<div className="icon-callouts__wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
