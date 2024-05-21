import { __ } from '@wordpress/i18n';
import { useSelect, select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { ComboboxControl, Spinner } from '@wordpress/components';
import './post-picker.scss';

/**
 * @example
 * <PostPicker
 *    @param {string} postCustomLabel - (Optional label above the post selector)
 *    @param {number} postID - (Attribute to capture the selected post ID)
 *    @param {string} postTitle - (Attribute to capture the selected post Title)
 *    @param {string} postType - (Attribute to capture the selected post type)
 *    @param {string} postTypeTitle - (Attribute to capture the selected post type title)
 *    @param {func} setAttributes - (Function to set state of postID, postTitle, postType, postTypeTitle)
 * />
 */
export const PostPicker = ({ postCustomLabel, postID, postTitle, postType, postTypeTitle, setAttributes }) => {
	let postTypeOptions = [];
	let postOptions = [];
	const [filteredPostTypeOptions, setFilteredPostTypeOptions] = useState(postTypeOptions);
	const [filteredPostOptions, setFilteredPostOptions] = useState(postOptions);

	/* Format postTypeTitle on load */
	useEffect(() => {
		if (postType) {
			let rawTitle = postType.replace(/-|_/g, ' ');
			let words = rawTitle.split(' ');
			for (let i = 0; i < words.length; i++) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
			}
			let formattedTitle = words.join(' ');
			setAttributes({
				postID,
				postTitle,
				postType: postType,
				postTypeTitle: formattedTitle,
			});
		}
	}, []);

	/* Get all post type options */
	const postTypes = useSelect((select) => {
		return select('core').getPostTypes({ per_page: -1 });
	});

	/* Loop through post types and add to postTypeOptions, exclude unecessary types */
	if (postTypes) {
		postTypes.forEach((postType) => {
			if (postType.slug !== 'attachment' && postType.slug !== 'wp_block' && postType.slug !== 'nav_menu_item' && postType.slug !== 'wp_template' && postType.slug !== 'wp_template_part' && postType.slug !== 'wp_navigation' && postType.slug !== 'style-guide') {
				postTypeOptions.push({ value: postType.slug, label: postType.name });
			}
		});
	}

	/* Get all posts based on selected post type */
	const posts = useSelect((select) => {
		return select('core').getEntityRecords('postType', postType);
	});

	/* Loop through posts and add to postOptions */
	if (posts) {
		postOptions.push({ value: 0, label: 'Search by post title...' });
		posts.forEach((post) => {
			postOptions.push({ value: post.id, label: post.title.rendered });
		});
	}

	/* Event handlers */
	const handlePostTypeChange = (value) => {
		let rawTitle = value.replace(/-|_/g, ' ');
		let words = rawTitle.split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		let formattedTitle = words.join(' ');
		setAttributes({
			postID,
			postTitle,
			postType: value,
			postTypeTitle: formattedTitle,
		});
	}

	const handlePostTypeClear = () => {
		console.log('type clear');
		setAttributes({
			postID: 0,
			postTitle: '',
			postType: null,
			postTypeTitle: '',
		});
	}

	const handlePostChange = (value) => {
		const postData = select('core').getEntityRecord('postType', postType, value);
		setAttributes({
			postID: value,
			postTitle: postData.title.rendered,
			postType,
			postTypeTitle
		});
	}

	const handlePostClear = () => {
		console.log('post clear');
		setAttributes({
			postID: 0,
			postTitle: '',
			postType,
			postTypeTitle
		});
	}
	return (
		<div className='post-picker'>
			<div className='post-picker__post-type'>
				{
					/* If postType is set, display Post Title and clear button */
					(postType !== null) ?
						<div className='post-picker__preview'>
							<label>Post Type</label>
							<p className='post-picker__title'>{postTypeTitle}</p>
							<button className='post-picker__clear components-button is-primary' onClick={handlePostTypeClear}>Clear Post Type</button>
						</div>
						/* If postType is not set yet, but options are loaded, show combobox */
						: (postType === null && postTypeOptions.length > 0) ?
							<ComboboxControl
								label='Select a Post Type'
								value={postType}
								onChange={handlePostTypeChange}
								options={filteredPostTypeOptions}
								onFilterValueChange={(inputValue) =>
									setFilteredPostTypeOptions(
										postTypeOptions.filter((postTypeOption) =>
											postTypeOption.label
												.toLowerCase()
												.startsWith(inputValue.toLowerCase())
										)
									)
								}
							/>
							/* Else show loading */
							: <div className='post-picker__spinner'>
								<Spinner />
								<span>{__('Loading post types...', 'mx-blocks-plugin')}</span>
							</div>

				}
			</div>
			<div class='post-picker__posts'>
				{
					/* If postID is set, display Post Title and clear button */
					(postID !== 0) ?
						<div className='post-picker__preview'>
							<label>Post Title</label>
							<p className='post-picker__title'>{postTitle}</p>
							<button className='post-picker__clear components-button is-primary' onClick={handlePostClear}>Clear Post</button>
						</div>
						/* If postID is not set, but options have loaded show combobox */
						: (postID === 0 && postOptions.length > 0) ?
							<ComboboxControl
								label={postCustomLabel ? postCustomLabel : `Select a Post`}
								value={postID}
								onChange={handlePostChange}
								options={filteredPostOptions}
								onFilterValueChange={(inputValue) =>
									setFilteredPostOptions(
										postOptions.filter((postOption) =>
											postOption.label
												.toLowerCase()
												.startsWith(inputValue.toLowerCase())
										)
									)
								}
							/>
							/* Else show spinner */
							: (postType !== null && postID !== 0 && postOptions.length === 0) ?
								<div className='post-picker__spinner'>
									<Spinner />
									<span>{__('Loading posts...', 'mx-blocks-plugin')}</span>
								</div>
								: null

				}
			</div>
		</div>
	);
}
