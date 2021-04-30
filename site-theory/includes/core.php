<?php
/**
 * Core setup, site hooks and filters.
 *
 * @package ThemeName\Core
 */

namespace ThemeName\Core;

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
 * If you're building a theme based on "theme-name", change the
 * filename of '/languages/ThemeName.pot' to the name of your project.
 *
 * @return void
 */
function i18n() {
	load_theme_textdomain( 'theme-name', THEME_NAME_PATH . '/languages' );
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
			'header-1' => esc_html__( 'Header Menu', 'theme-name' ),
			'header-2' => esc_html__( 'Header Menu 2', 'theme-name' ),
			'footer' => esc_html__( 'Footer Menu', 'theme-name' ),
			'utiltiy' => esc_html__( 'Utility Menu', 'theme-name' )
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
		THEME_NAME_TEMPLATE_URL . '/dist/js/scripts.min.js',
		['jquery'],
		THEME_NAME_VERSION,
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
		THEME_NAME_VERSION
	);

	wp_enqueue_style(
		'styles',
		THEME_NAME_TEMPLATE_URL . '/dist/css/styles.min.css',
		[],
		THEME_NAME_VERSION
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
		THEME_NAME_TEMPLATE_URL . '/dist/js/admin-scripts.min.js',
		['jquery'],
		THEME_NAME_VERSION,
		true
	);

	wp_enqueue_script(
		'font-awesome',
		'https://kit.fontawesome.com/b390050450.js',
		THEME_NAME_VERSION
	);

	wp_enqueue_style(
		'admin-styles',
		THEME_NAME_TEMPLATE_URL . '/dist/css/admin-styles.min.css',
		[],
		THEME_NAME_VERSION
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
		THEME_NAME_TEMPLATE_URL . '/dist/css/login-styles.min.css',
		[],
		THEME_NAME_VERSION
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
