import { registerBlockType } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/mgmt-team-meta', {
	edit: Edit,
	save: () => {
		return null;
	},
});
