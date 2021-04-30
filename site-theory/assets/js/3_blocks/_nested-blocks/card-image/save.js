export default function save({
	attributes: { imgAlt, imgURL, imageType, linkOption, linkURL, linkToggle },
}) {
	let cardImage;
	const bgStyle = {
		backgroundImage: `url( ${imgURL} )`,
	};

	if (linkOption) {
		// If Link
		if (linkToggle) {
			cardImage = (
				<a
					className="card-image column-block__column"
					href={linkURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					{imageType ? ( // Background Image
						<span className="card-image__bg-image" style={bgStyle}>
							<span className="screen-reader-text">{imgAlt}</span>
						</span>
					) : (
						// Inline Image
						<img src={imgURL} alt={imgAlt} />
					)}
				</a>
			);
		} else {
			cardImage = (
				<a className="card-image column-block__column" href={linkURL}>
					{imageType ? ( // Background Image
						<span className="card-image__bg-image" style={bgStyle}>
							<span className="screen-reader-text">{imgAlt}</span>
						</span>
					) : (
						// Inline Image
						<img src={imgURL} alt={imgAlt} />
					)}
				</a>
			);
		}
	} else {
		// No link
		cardImage = (
			<div className="card-image column-block__column">
				{imageType ? ( // Inline Image
					<img src={imgURL} alt={imgAlt} />
				) : (
					<span className="card-image__bg-image" style={bgStyle}>
						<span className="screen-reader-text">{imgAlt}</span>
					</span>
				)}
			</div>
		);
	}
	return cardImage;
}
