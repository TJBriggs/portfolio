/**
 *
 * One Column Block
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
export default registerBlockType('theme-name/centered-cta', {
	title: __('Centered CTA'),
	description: __('Centered CTA Description'),
	icon,
	category: 'custom-blocks',
	keywords: [__('Centered'), __('CTA'), __('Centered CTA')],
	attributes,
	edit,
	save,
});
