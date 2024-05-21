import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as heroBanner } from '../../../icons/heroBanner.svg';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/hero-banner', {
	icon: heroBanner,
	edit: Edit,
	save,
});
