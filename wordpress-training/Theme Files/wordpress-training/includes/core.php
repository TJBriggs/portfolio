<?php
/**
 * Core setup, site hooks and filters.
 *
 * @package WordpressTraining\Core
 */

namespace WordpressTraining\Core;

/**
 * Set up theme defaults and register supported WordPress features.
 *
 * @return void
 */
function setup() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	add_action( 'after_setup_theme', $n( 'i18n' ) );
	add_action( 'after_setup_theme', $n( 'theme_setup' ) );
	add_action( 'wp_enqueue_scripts', $n( 'frontend' ) );
	add_action( 'admin_enqueue_scripts', $n( 'admin' ) );
	add_action( 'wp_head', $n( 'js_detection' ), 0 );
	add_action( 'login_enqueue_scripts', $n( 'login_styles' ) );
	add_filter( 'script_loader_tag', $n( 'script_loader_tag' ), 10, 2 );
}

/**
 * Makes Theme available for translation.
 *
 * Translations can be added to the /languages directory.
 * If you're building a theme based on "wordpress-training", change the
 * filename of '/languages/WordpressTraining.pot' to the name of your project.
 *
 * @return void
 */
function i18n() {
	load_theme_textdomain( 'wordpress-training', WORDPRESS_TRAINING_PATH . '/languages' );
}

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

	// This theme uses wp_nav_menu() in three locations.
	register_nav_menus(
		array(
			'header-' => esc_html__( 'Header Menu', 'wordpress-training' ),
			'footer' => esc_html__( 'Footer Menu', 'wordpress-training' ),
		)
	);
}

/**
 * Enqueue scripts for front-end.
 *
 * @return void
 */
function frontend() {

	wp_enqueue_script(
		'scripts',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/js/scripts.min.js',
		['jquery'],
		WORDPRESS_TRAINING_VERSION,
		true
	);

	$translation_array = array(
		'siteUrl' => get_site_url(),
		'themeUrl' => get_stylesheet_directory_uri()
	);

	wp_localize_script( 'scripts', 'wordpressData', $translation_array );

	wp_enqueue_script(
		'font-awesome',
		'https://kit.fontawesome.com/b390050450.js',
		WORDPRESS_TRAINING_VERSION
	);

	wp_enqueue_style(
		'styles',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/css/styles.min.css',
		[],
		WORDPRESS_TRAINING_VERSION
	);
}

/**
 * Enqueue styles for Admin.
 *
 * @return void
 */
function admin() {

	wp_enqueue_script(
		'admin-scripts',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/js/admin-scripts.min.js',
		['jquery'],
		WORDPRESS_TRAINING_VERSION,
		true
	);

	wp_enqueue_script(
		'font-awesome',
		'https://kit.fontawesome.com/b390050450.js',
		WORDPRESS_TRAINING_VERSION
	);

	wp_enqueue_style(
		'admin-styles',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/css/admin-styles.min.css',
		[],
		WORDPRESS_TRAINING_VERSION
	);

}

/**
 * Enqueue styles for login page.
 *
 * @return void
 */
function login_styles() {

	wp_enqueue_style(
		'login-styles',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/css/login-styles.min.css',
		[],
		WORDPRESS_TRAINING_VERSION
	);

}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 *
 * @return void
 */
function js_detection() {

	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}

/**
 * Add async/defer attributes to enqueued scripts that have the specified script_execution flag.
 *
 * @link https://core.trac.wordpress.org/ticket/12009
 * @param string $tag    The script tag.
 * @param string $handle The script handle.
 * @return string
 */
function script_loader_tag( $tag, $handle ) {
	$script_execution = wp_scripts()->get_data( $handle, 'script_execution' );

	if ( ! $script_execution ) {
		return $tag;
	}

	if ( 'async' !== $script_execution && 'defer' !== $script_execution ) {
		return $tag;
	}

	// Abort adding async/defer for scripts that have this script as a dependency. _doing_it_wrong()?
	foreach ( wp_scripts()->registered as $script ) {
		if ( in_array( $handle, $script->deps, true ) ) {
			return $tag;
		}
	}

	// Add the attribute if it hasn't already been added.
	if ( ! preg_match( ":\s$script_execution(=|>|\s):", $tag ) ) {
		$tag = preg_replace( ':(?=></script>):', " $script_execution", $tag, 1 );
	}

	return $tag;
}
