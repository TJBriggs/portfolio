<?php
/**
 * Plugin Name:       Heading Button
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_heading_button_init() {
	register_block_type( __DIR__ );

	// register_block_pattern(
	// 	'mx/heading-button-pattern',
	// 	array(
	// 		'title' => __( 'Heading w/Button', 'mx-blocks-plugin' ),
	// 		'categories' => [ 'cta-blocks' ],
	// 		'content' => "",
	// 	)
	// );
}
add_action( 'init', 'mx_heading_button_init' );
