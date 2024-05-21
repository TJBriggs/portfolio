<?php
/**
 * Plugin Name:       Hero Card with Image
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_hero_card_image_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'mx_hero_card_image_init' );
