<?php
/**
 * REST API CORS filter.
 *
 * @package  Postlight_Headless_WP
 */

/**
 * Allow GET requests from origin
 * Thanks to https://joshpress.net/access-control-headers-for-the-wordpress-rest-api/
 */
add_action(
	'rest_api_init',
	function () {
		remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

		add_filter(
			'rest_pre_serve_request',
			function ( $value ) {
				header( 'Access-Control-Allow-Origin: ' . get_frontend_origin() );
				header( 'Access-Control-Allow-Methods: GET' );
				header( 'Access-Control-Allow-Credentials: true' );
				return $value;
			}
		);
	},
	15
);

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function theme_setup() {
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);
}

add_action( 'after_setup_theme', ( 'theme_setup' ) );
