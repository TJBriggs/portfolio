import { useBlockProps } from '@wordpress/block-editor';

export default function save({
	attributes: {
		collectionID,
		uberflipID
	},
}) {
	const blockProps = useBlockProps.save({
		className: 'uberflip-embed',
		'data-uberflip-id': uberflipID,
		'data-collection-id': collectionID
	});

	return (
		<div {...useBlockProps.save(blockProps)}>
			<div id={uberflipID} className='uberflip-wrap'></div>
		</div>
	);
}
