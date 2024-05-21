<?php
/**
 * Plugin Name:       Success Meta
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_success_story_meta_init() {
	register_block_type( __DIR__ );

	/* Register each meta field */
	register_post_meta( 'success-stories', 'ss_motto_image', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_motto_image_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_person_image', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_person_image_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_quote', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_product_image', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_product_image_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_box_image', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_box_image_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_name', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_title', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_dealership', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_video_url', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_stat_text', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_stat_icon', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_stat_icon_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_stat_caption', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_category_text', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_category_caption', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_products_used', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'success-stories', 'ss_bio', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action( 'init', 'mx_success_story_meta_init' );
