import { registerBlockType } from '@wordpress/blocks';
import { moveTo } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/jump-nav', {
	icon: moveTo,
	edit: Edit,
	save,
});
