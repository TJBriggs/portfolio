/**
 *
 * Card Image
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
export default registerBlockType('theme-name/card-image', {
	title: __('Card: Image'),
	description: __('Card Image Description'),
	icon,
	category: 'custom-blocks',
	keywords: [__('Card'), __('Image'), __('Card Image')],
	parent: ['theme-name/column-block'],
	attributes,
	edit,
	save,
});
