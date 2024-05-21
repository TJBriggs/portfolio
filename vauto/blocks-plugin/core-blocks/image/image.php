<?php
/**
 * Plugin Name:       Image
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

/**
 * Renders the `core/image` block on the server,
 * adding a data-id attribute to the element if core/gallery has added on pre-render.
 *
 * @param  array  $attributes The block attributes.
 * @param  string $content    The block content.
 * @return string Returns the block content with the data-id attribute added.
 */
function render_block_custom_image( $attributes, $content ) {
	//wp_die('callback');
	if ( isset( $attributes['data-id'] ) ) {
		// Add the data-id="$id" attribute to the img element
		// to provide backwards compatibility for the Gallery Block,
		// which now wraps Image Blocks within innerBlocks.
		// The data-id attribute is added in a core/gallery `render_block_data` hook.
		$data_id_attribute = 'data-id="' . esc_attr( $attributes['data-id'] ) . '"';
		if ( ! strpos( $content, $data_id_attribute ) ) {
			$content = str_replace( '<img', '<img ' . $data_id_attribute . ' ', $content );
		}
	}
	return $content;
}

function mx_image_init() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'render_block_custom_image',
		)
	);
}
add_action( 'init', 'mx_image_init' );
