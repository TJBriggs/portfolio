/**
 *
 * Card Text
 *
 */

import icon from './icon';
import attributes from './attributes';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType('theme-name/card-text', {
	title: __('Card: Text'),
	description: __('Card Text Description'),
	icon,
	category: 'custom-blocks',
	keywords: [__('Card'), __('Text'), __('Card Text')],
	parent: ['theme-name/column-block'],
	attributes,
	edit,
	save,
});
