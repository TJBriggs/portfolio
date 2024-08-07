import domReady from '@wordpress/dom-ready';

domReady(function () {
	wp.blocks.unregisterBlockType('core/audio');
	wp.blocks.unregisterBlockType('core/archives');
	wp.blocks.unregisterBlockType('core/avatar');
	wp.blocks.unregisterBlockType('core/block');
	wp.blocks.unregisterBlockType('core/buttons');
	wp.blocks.unregisterBlockType('core/button');
	wp.blocks.unregisterBlockType('core/calendar');
	wp.blocks.unregisterBlockType('core/categories');
	wp.blocks.unregisterBlockType('core/code');
	wp.blocks.unregisterBlockType('core/column');
	wp.blocks.unregisterBlockType('core/columns');
	wp.blocks.unregisterBlockType('core/comment-author-avatar');
	wp.blocks.unregisterBlockType('core/comment-author-name');
	wp.blocks.unregisterBlockType('core/comment-content');
	wp.blocks.unregisterBlockType('core/comment-date');
	wp.blocks.unregisterBlockType('core/comment-edit-link');
	wp.blocks.unregisterBlockType('core/comment-reply-link');
	wp.blocks.unregisterBlockType('core/comment-template');
	wp.blocks.unregisterBlockType('core/comments-pagination');
	wp.blocks.unregisterBlockType('core/comments-pagination-next');
	wp.blocks.unregisterBlockType('core/comments-pagination-numbers');
	wp.blocks.unregisterBlockType('core/comments-pagination-previous');
	wp.blocks.unregisterBlockType('core/comments-query-loop');
	wp.blocks.unregisterBlockType('core/comments-title');
	//wp.blocks.unregisterBlockType('core/cover');
	//wp.blocks.unregisterBlockType('core/embed');
	wp.blocks.unregisterBlockType('core/file');
	wp.blocks.unregisterBlockType('core/freeform');
	wp.blocks.unregisterBlockType('core/gallery');
	//wp.blocks.unregisterBlockType('core/group');
	//wp.blocks.unregisterBlockType('core/heading');
	wp.blocks.unregisterBlockType('core/home-link');
	//wp.blocks.unregisterBlockType('core/html');
	wp.blocks.unregisterBlockType('core/image');
	wp.blocks.unregisterBlockType('core/latest-comments');
	wp.blocks.unregisterBlockType('core/latest-posts');
	//wp.blocks.unregisterBlockType('core/list');
	wp.blocks.unregisterBlockType('core/loginout');
	//wp.blocks.unregisterBlockType('core/media-text');
	wp.blocks.unregisterBlockType('core/missing');
	wp.blocks.unregisterBlockType('core/more');
	wp.blocks.unregisterBlockType('core/navigation');
	wp.blocks.unregisterBlockType('core/navigation-link');
	wp.blocks.unregisterBlockType('core/navigation-submenu');
	wp.blocks.unregisterBlockType('core/nextpage');
	wp.blocks.unregisterBlockType('core/page-list');
	//wp.blocks.unregisterBlockType('core/paragraph');
	wp.blocks.unregisterBlockType('core/pattern');
	wp.blocks.unregisterBlockType('core/post-author');
	wp.blocks.unregisterBlockType('core/post-author-biography');
	wp.blocks.unregisterBlockType('core/post-author-name');
	wp.blocks.unregisterBlockType('core/post-comment');
	wp.blocks.unregisterBlockType('core/post-comments');
	wp.blocks.unregisterBlockType('core/post-comments-count');
	wp.blocks.unregisterBlockType('core/post-comments-form');
	wp.blocks.unregisterBlockType('core/post-comments-link');
	wp.blocks.unregisterBlockType('core/post-content');
	wp.blocks.unregisterBlockType('core/post-date');
	wp.blocks.unregisterBlockType('core/post-excerpt');
	wp.blocks.unregisterBlockType('core/post-featured-image');
	wp.blocks.unregisterBlockType('core/post-navigation-link');
	wp.blocks.unregisterBlockType('core/post-template');
	wp.blocks.unregisterBlockType('core/post-terms');
	wp.blocks.unregisterBlockType('core/post-title');
	wp.blocks.unregisterBlockType('core/preformatted');
	wp.blocks.unregisterBlockType('core/pullquote');
	wp.blocks.unregisterBlockType('core/query');
	wp.blocks.unregisterBlockType('core/query-no-results');
	wp.blocks.unregisterBlockType('core/query-pagination');
	wp.blocks.unregisterBlockType('core/query-pagination-next');
	wp.blocks.unregisterBlockType('core/query-pagination-numbers');
	wp.blocks.unregisterBlockType('core/query-pagination-previous');
	wp.blocks.unregisterBlockType('core/query-title');
	wp.blocks.unregisterBlockType('core/quote');
	wp.blocks.unregisterBlockType('core/read-more');
	wp.blocks.unregisterBlockType('core/rss');
	wp.blocks.unregisterBlockType('core/search');
	wp.blocks.unregisterBlockType('core/separator');
	//wp.blocks.unregisterBlockType('core/shortcode');
	wp.blocks.unregisterBlockType('core/site-logo');
	wp.blocks.unregisterBlockType('core/site-tagline');
	wp.blocks.unregisterBlockType('core/site-title');
	wp.blocks.unregisterBlockType('core/social-link');
	wp.blocks.unregisterBlockType('core/social-links');
	wp.blocks.unregisterBlockType('core/spacer');
	//wp.blocks.unregisterBlockType('core/table');
	wp.blocks.unregisterBlockType('core/table-of-contents');
	wp.blocks.unregisterBlockType('core/tag-cloud');
	wp.blocks.unregisterBlockType('core/template-part');
	wp.blocks.unregisterBlockType('core/term-description');
	wp.blocks.unregisterBlockType('core/text-columns');
	wp.blocks.unregisterBlockType('core/verse');
	//wp.blocks.unregisterBlockType('core/video');


	/* Unregister Core Block Types */
	/* Embed Variants Allowed */
	const allowedEmbedBlocks = ['youtube', 'vimeo'];

	wp.blocks.getBlockType('core/embed').variations.forEach(function (blockVariation) {
		if (allowedEmbedBlocks.indexOf(blockVariation.name) === -1) {
			wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
		}
	});
});
