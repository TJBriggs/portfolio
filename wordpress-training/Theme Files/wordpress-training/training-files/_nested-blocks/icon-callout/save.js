export default function save({ attributes: { imgALT, imgURL, text } }) {
	return (
		<div className="icon-callout">
			{imgURL.length > 0 && (
				<div className="icon-callout__icon">
					<img className="style-svg" src={imgURL} alt={imgALT} />
				</div>
			)}
			{text.length > 0 && <h4 className="icon-callout__text">{text}</h4>}
		</div>
	);
}
