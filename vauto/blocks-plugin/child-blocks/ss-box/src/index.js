import { registerBlockType } from '@wordpress/blocks';
import { cover } from '@wordpress/icons';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';

registerBlockType('mx/ss-box', {
	apiVersion: 2,
	title: 'Success Story Box',
	icon: cover,
	category: 'ctas',
	description: 'Basic CTA box to display a success story.',
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
		'core/group',
		'mx/column'
	],
	edit: Edit,
});
