import { registerBlockType } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/success-story-meta', {
	edit: Edit,
	save: () => {
		return null;
	},
});
