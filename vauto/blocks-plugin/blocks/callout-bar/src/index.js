import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as calloutBar } from '../../../icons/calloutBar.svg';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/callout-bar', {
	icon: calloutBar,
	edit: Edit,
	save,
});
