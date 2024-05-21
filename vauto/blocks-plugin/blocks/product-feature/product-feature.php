<?php
/**
 * Plugin Name:       Product Feature
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_product_feature_init() {
	register_block_type( __DIR__ );

	// register_block_pattern(
	// 	'mx/product-feature-pattern',
	// 	array(
	// 		'title' => __( 'Product Feature', 'mx-blocks-plugin' ),
	// 		'categories' => [ 'feature-blocks' ],
	// 		'content' => "",
	// 	)
	// );
}
add_action( 'init', 'mx_product_feature_init' );
