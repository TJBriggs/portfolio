import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as featureBar } from '../../../icons/featureBar.svg';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/feature-bar', {
	icon: featureBar,
	edit: Edit,
	save,
});
