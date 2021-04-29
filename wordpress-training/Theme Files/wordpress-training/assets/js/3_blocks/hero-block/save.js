const { RichText } = wp.blockEditor;

export default function save({ attributes: { headline, imgURL, text } }) {
	const bgImageStyles = {
		backgroundImage: `url( ${imgURL} )`,
	};
	return (
		<section className="hero-block" style={bgImageStyles}>
			<div className="hero-block__inner">
				{headline.length > 0 && <h1 className="hero-block__headline">{headline}</h1>}
				{text.length > 0 && (
					<RichText.Content className="hero-block__text" tagName="div" value={text} />
				)}
			</div>
		</section>
	);
}
