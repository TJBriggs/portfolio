<?php
/**
 * Plugin Name:       Modal Content
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_modal_content_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/modal-content-cover-cta-pattern',
		array(
			'title' => __( 'Cover CTA Modal', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/modal-content {\"contentID\":\"modal-1\",\"className\":\"modal-content\u002d\u002dcover-cta\"} -->
			<div class=\"wp-block-mx-modal-content modal-content modal-content--cover-cta\" id=\"modal-1\" style=\"display:none\"><!-- wp:group {\"className\":\"modal-content__bg-color\"} -->
			<div class=\"wp-block-group modal-content__bg-color\"><!-- wp:group {\"className\":\"cover-cta__images\"} -->
			<div class=\"wp-block-group cover-cta__images\"><!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"cover-cta__copy\"} -->
			<div class=\"wp-block-group cover-cta__copy\"><!-- wp:heading {\"className\":\"other-heading\"} -->
			<h2 class=\"other-heading\">Donec id elit non mi porta gravida at eget metus. </h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Bocy Copy - Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph -->
			<p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/modal-content -->",
		)
	);
}
add_action( 'init', 'mx_modal_content_init' );
