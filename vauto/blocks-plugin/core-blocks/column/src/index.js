import { registerBlockType } from '@wordpress/blocks';
import { column as icon } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from '../block.json';
import save from './save';

const { name } = metadata;
export { metadata, name };

registerBlockType('mx/column', {
	icon,
	edit,
	save,
	deprecated,
});
