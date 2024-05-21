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

function mx_mgmt_team_meta_init() {
	register_block_type( __DIR__ );

	/* Register each meta field */
	register_post_meta( 'management-team', 'mt_person_image', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_person_image_alt', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_name', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_title', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_linkedin', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_email', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_phone', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_bio', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );

	register_post_meta( 'management-team', 'mt_button_text', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action( 'init', 'mx_mgmt_team_meta_init' );
