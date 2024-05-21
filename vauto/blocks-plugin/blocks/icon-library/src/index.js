import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/icon-library', {
	edit: Edit,
	save: () => {
		return null;
	},
});
