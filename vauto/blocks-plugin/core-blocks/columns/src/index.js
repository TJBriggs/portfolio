import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { columns as icon } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from '../block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

registerBlockType('mx/columns', {
	icon,
	edit: Edit,
	save,
});
