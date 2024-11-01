import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PostPicker } from '../../../components/post-picker/post-picker';
import './editor.scss';

export default function Edit({
	attributes: {
		postID,
		postTitle,
		postType,
		postTypeTitle
	},
	isSelected,
	setAttributes
}) {

	const blockProps = useBlockProps({
		className: `mt-card__wrap`,
	});
	return (
		<div {...useBlockProps(blockProps)}>
			{(isSelected || postID === 0)
				? <PostPicker
					postCustomLabel='Select a Team Member'
					postID={postID}
					postTitle={postTitle}
					postType={postType}
					postTypeTitle={postTypeTitle}
					setAttributes={setAttributes}
				/>
				: <ServerSideRender
					block="mx/mt-card"
					attributes={{
						postID: postID,
						postTitle: postTitle,
						postType: postType,
						postTypeTitle: postTypeTitle
					}}
				/>
			}
		</div>
	);
}
