import { registerBlockType } from '@wordpress/blocks';
import { overlayText } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/form-cta', {
	icon: overlayText,
	edit: Edit,
	save,
});
