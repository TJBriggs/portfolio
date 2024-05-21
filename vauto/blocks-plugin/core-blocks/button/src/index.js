import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { button as icon } from '@wordpress/icons';
import deprecated from './deprecated';
import edit from './edit';
import metadata from '../block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

registerBlockType('mx/button', {
	icon,
	example: {
		attributes: {
			className: 'is-style-primary-button',
			text: __('Call to Action', 'mx-blocks-plugin'),
		},
	},
	edit,
	save,
	deprecated,
	merge: (a, { text = '' }) => ({
		...a,
		text: (a.text || '') + text,
	}),
});
