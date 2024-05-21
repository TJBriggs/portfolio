import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as uberflipFeature } from '../../../icons/uberflipFeature.svg';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/uberflip-features', {
	icon: uberflipFeature,
	edit: Edit,
	save,
});
