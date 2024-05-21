import { registerBlockType } from '@wordpress/blocks';
import { buttons } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from '../block.json';
import deprecated from './deprecated';
import transforms from './transforms';
import Edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name };

registerBlockType('mx/buttons', {
	icon: buttons,
	deprecated,
	transforms,
	edit: Edit,
	save,
});
