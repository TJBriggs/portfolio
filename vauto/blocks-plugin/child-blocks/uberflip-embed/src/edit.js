import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
//import './editor.scss';


export default function Edit({
	attributes: {
		collectionID,
		uberflipID
	},
	setAttributes
}) {
	const blockProps = useBlockProps({
		className: 'uberflip-embed',
		'data-uberflip-id': uberflipID,
		'data-collection-id': collectionID
	});
	return (
		<div {...useBlockProps(blockProps)}>
			<div className="uberflip-embed__fields">
				<TextControl
					label="Uberflip ID"
					value={uberflipID}
					onChange={(uberflipID) => setAttributes({ uberflipID })}
				/>
				<TextControl
					label="Collection ID"
					value={collectionID}
					onChange={(collectionID) => setAttributes({ collectionID })}
				/>
			</div>
			<div id={uberflipID} className='uberflip-wrap'></div>
		</div>
	);
}
