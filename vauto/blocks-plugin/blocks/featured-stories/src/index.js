import { registerBlockType } from '@wordpress/blocks';
import { ReactComponent as featuredStory } from '../../../icons/featuredStory.svg';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType('mx/featured-stories', {
	icon: featuredStory,
	edit: Edit,
	save,
});
