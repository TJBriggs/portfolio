import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/mt-card', {
	apiVersion: 2,
	title: 'Management Team Card',
	icon: 'id-alt',
	category: 'cards',
	description: 'Basic card block to display a management team member.',
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
			default: 'management-team'
		},
		postTypeTitle: {
			type: 'string',
		}
	},
	parent: [
		'mx/column',
		'mx/group'
	],
	edit: Edit,
});
