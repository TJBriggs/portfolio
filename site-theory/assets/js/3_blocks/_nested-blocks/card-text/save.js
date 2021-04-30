const { RichText } = wp.blockEditor;

export default function save({
	attributes: { bgColor, headline, linkText, linkToggle, linkURL, text },
}) {
	let link;
	const bg = {
		backgroundColor: bgColor,
	};

	if (linkToggle === true) {
		link = (
			<a className="card-text__link" href={linkURL} target="_blank" rel="noopener noreferrer">
				{linkText}
				<i className="far fa-arrow-alt-circle-right" />
			</a>
		);
	} else {
		link = (
			<a className="card-text__link" href={linkURL}>
				{linkText}
				<i className="far fa-arrow-alt-circle-right" />
			</a>
		);
	}

	return (
		<div className="card-text column-block__column" style={bg}>
			{headline.length > 0 && <h3 className="card-text__headline">{headline}</h3>}
			{text.length > 0 && (
				<RichText.Content className="card-text__text" tagName="div" value={text} />
			)}
			{linkURL.length > 0 && <div className="card-text__link-wrap">{link}</div>}
		</div>
	);
}
