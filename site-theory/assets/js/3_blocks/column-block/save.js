const { InnerBlocks } = wp.blockEditor;
export default function save({ attributes: { columnOption, twoColumnLayout, threeColumnLayout } }) {
	let layoutModifier = '';
	if (columnOption === 'two-column') {
		layoutModifier = ` layout--${twoColumnLayout}`;
	} else if (columnOption === 'three-column') {
		layoutModifier = ` layout--${threeColumnLayout}`;
	}
	return (
		<section className={`column-block column-block--${columnOption}`}>
			<div className={`column-block__wrap${layoutModifier}`}>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
