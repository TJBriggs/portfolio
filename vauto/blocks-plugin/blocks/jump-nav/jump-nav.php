<?php
/**
 * Plugin Name:       Jump Nav
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_jump_nav_init() {
	register_block_type( __DIR__ );

	// register_block_pattern(
	// 	'mx/jump-nav-pattern',
	// 	array(
	// 		'title' => __( 'Jump Navigation', 'mx-blocks-plugin' ),
	// 		'categories' => [ 'cta-blocks' ],
	// 		'content' => "",
	// 	)
	// );
}
add_action( 'init', 'mx_jump_nav_init' );
