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
export default registerBlockType('wordpress-training/hero-block', {
	title: __('Hero Block', 'wordpress-training'),
	description: __('Hero Block Description', 'wordpress-training'),
	icon: 'format-image',
	category: 'custom-blocks',
	keywords: [
		__('Hero', 'wordpress-training'),
		__('Block', 'wordpress-training'),
		__('Hero Block', 'wordpress-training'),
	],
	attributes,
	edit,
	save,
});
