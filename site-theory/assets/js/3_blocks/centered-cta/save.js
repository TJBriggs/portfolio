const { RichText } = wp.blockEditor;

export default function save({
	attributes: { bgColor, headline, text, linkText, linkURL, linkToggle },
}) {
	let link;
	const frontendStyles = {
		backgroundColor: bgColor,
	};

	if (linkToggle === true) {
		link = (
			<a
				className="centered-cta__link"
				href={linkURL}
				target="_blank"
				rel="noopener noreferrer"
			>
				{linkText}
				<i className="far fa-arrow-alt-circle-right" />
			</a>
		);
	} else {
		link = (
			<a className="centered-cta__link" href={linkURL}>
				{linkText}
				<i className="far fa-arrow-alt-circle-right" />
			</a>
		);
	}

	return (
		<section className="centered-cta" style={frontendStyles}>
			<div className="centered-cta__inner">
				<div className="centered-cta__wrap">
					{headline.length > 0 && <h3 className="centered-cta__headline">{headline}</h3>}
					{text.length > 0 && (
						<RichText.Content
							className="centered-cta__text"
							tagName="div"
							value={text}
						/>
					)}
					<div className="centered-cta__link-wrap">{link}</div>
				</div>
			</div>
		</section>
	);
}
