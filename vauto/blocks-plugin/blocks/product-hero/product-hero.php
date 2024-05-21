<?php
/**
 * Plugin Name:       Product Hero
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_product_hero_init() {
	register_block_type( __DIR__ );

	// register_block_pattern(
	// 	'mx/product-hero-pattern',
	// 	array(
	// 		'title' => __( 'Product Hero', 'mx-blocks-plugin' ),
	// 		'categories' => [ 'hero-blocks' ],
	// 		'content' => "",
	// 	)
	// );

	// register_block_pattern(
	// 	'mx/product-hero-alt-pattern',
	// 	array(
	// 		'title' => __( 'Product Hero - Alternative', 'mx-blocks-plugin' ),
	// 		'categories' => [ 'hero-blocks' ],
	// 		'content' => "",
	// 	)
	// );
}
add_action( 'init', 'mx_product_hero_init' );
