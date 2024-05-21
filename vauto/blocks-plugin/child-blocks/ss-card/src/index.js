import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/ss-card', {
	apiVersion: 2,
	title: 'Success Story Card',
	icon: 'analytics',
	category: 'cards',
	description: 'Basic card block to display a success story.',
	attributes: {
		postID: {
			type: 'number',
			default: 0
		},
		postTitle: {
			type: 'string',
		},
		postType: {
			type: 'string',
			default: 'success-stories'
		},
		postTypeTitle: {
			type: 'string',
		}
	},
	parent: [
		'mx/featured-stories',
		'mx/slider',
		'mx/column'
	],
	edit: Edit,
});
