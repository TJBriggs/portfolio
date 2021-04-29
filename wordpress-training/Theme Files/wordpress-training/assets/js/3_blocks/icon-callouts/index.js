/**
 *
 * Hero Block
 *
 */

/**
 * Block Imports
 */
import attributes from './attributes';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
/**
 * Register block
 */
export default registerBlockType('wordpress-training/icon-callouts', {
	title: __('Icon Callouts', 'wordpress-training'),
	description: __('Hero Block Description', 'wordpress-training'),
	icon: 'format-chat',
	category: 'custom-blocks',
	keywords: [
		__('Icon', 'wordpress-training'),
		__('Callouts', 'wordpress-training'),
		__('Icon Callouts', 'wordpress-training'),
	],
	attributes,
	edit,
	save,
});
