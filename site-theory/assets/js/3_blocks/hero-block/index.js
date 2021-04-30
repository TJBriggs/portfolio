/**
 *
 * Hero Block
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
export default registerBlockType('theme-name/hero-block', {
	title: __('Hero Block'),
	description: __('Hero Block Description'),
	icon,
	category: 'custom-blocks',
	keywords: [__('Hero'), __('Block'), __('Hero Block')],
	attributes,
	edit,
	save,
});
