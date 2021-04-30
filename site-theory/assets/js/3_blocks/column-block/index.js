/**
 *
 * Column Block
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
export default registerBlockType('theme-name/column-block', {
	title: __('Column Block'),
	description: __('Column Block Description'),
	icon,
	category: 'custom-blocks',
	keywords: [__('Column'), __('Block'), __('Column Block')],
	attributes,
	edit,
	save,
});
