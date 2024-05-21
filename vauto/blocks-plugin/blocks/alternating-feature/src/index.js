import { registerBlockType } from '@wordpress/blocks';
import { mediaAndText } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/alternating-feature', {
	icon: mediaAndText,
	edit: Edit,
	save,
});
