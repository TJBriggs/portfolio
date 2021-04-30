const { RichText } = wp.blockEditor;

export default function save({
	attributes: { bgColor, headline, imgURL, linkText, linkToggle, linkURL, text },
}) {
	let link;
	const frontendStyles = {
		backgroundColor: bgColor,
		backgroundImage: `url( ${imgURL} )`,
	};

	if (linkToggle === true) {
		link = (
			<a
				className="hero-block__link"
				href={linkURL}
				target="_blank"
				rel="noopener noreferrer"
			>
				{linkText}
			</a>
		);
	} else {
		link = (
			<a className="hero-block__link" href={linkURL}>
				{linkText}
			</a>
		);
	}

	return (
		<section className="hero-block">
			<div className="hero-block__background" style={frontendStyles}>
				<div className="hero-block__inner">
					{headline.length > 0 && <h1 className="hero-block__headline">{headline}</h1>}
					{text.length > 0 && (
						<RichText.Content className="hero-block__text" tagName="div" value={text} />
					)}
					{link}
				</div>
			</div>
		</section>
	);
}
