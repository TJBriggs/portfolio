<?php
/**
 * Plugin Name:       Product Tab
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_product_tab_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'mx_product_tab_init' );
