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
export default registerBlockType('wordpress-training/icon-callout', {
	title: __('Icon Callout', 'wordpress-training'),
	description: __('Icon Callout Description', 'wordpress-training'),
	icon: 'admin-comments',
	category: 'custom-blocks',
	keywords: [
		__('Icon', 'wordpress-training'),
		__('Callouts', 'wordpress-training'),
		__('Icon Callouts', 'wordpress-training'),
	],
	parent: ['wordpress-training/icon-callouts'],
	attributes,
	edit,
	save,
});
