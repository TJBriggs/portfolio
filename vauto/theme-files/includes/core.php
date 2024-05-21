<?php
/**
 * Core setup, site hooks and filters.
 *
 * @package MxTheme\Core
 */

namespace MxTheme\Core;

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
	//add_action( 'enqueue_block_editor_assets', $n( 'editor' ), 999 );
	add_action( 'admin_enqueue_scripts', $n( 'admin' ), 999 );
	add_action( 'wp_head', $n( 'js_detection' ), 0 );
	add_action( 'login_enqueue_scripts', $n( 'login_styles' ) );
	add_filter( 'should_load_separate_core_block_assets', '__return_true' );
	add_filter( 'script_loader_tag', $n( 'script_loader_tag' ), 10, 2 );
}

/**
 * Makes Theme available for translation.
 *
 * Translations can be added to the /languages directory.
 *
 * @return void
 */
function i18n() {
	load_theme_textdomain( 'mx-theme', MX_THEME_PATH . '/languages' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function theme_setup() {
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'editor-styles' );
	add_editor_style( '/dist/css/style-editor.css' );
	add_theme_support(
		'html5',
		array(
			'search-form',
			'gallery',
		)
	);

	// This theme uses wp_nav_menu() in three locations.
	register_nav_menus(
		array(
			'utility-menu-links' => esc_html__( 'Utility Menu - Links', 'mx-theme' ),
			'utility-menu-buttons' => esc_html__( 'Utility Menu - Buttons', 'mx-theme' ),
			'header-primary' => esc_html__( 'Header Menu', 'mx-theme' ),
			'social-links' => esc_html__( 'Social Links - Footer', 'mx-theme' ),
			'footer-primary' => esc_html__( 'Footer Menu - Primary', 'mx-theme' ),
			'style-guide' => esc_html__( 'Style Guide Menu', 'mx-theme' ),
		)
	);

	// editor font enqueue
	add_editor_style(
		array(
			'editor-font-primary',
			'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
		)
	);
}

/**
 * Enqueue styles and scripts for the frontend only.
 *
 * @return void
 */
function frontend() {

	wp_enqueue_script(
		'shared-scripts',
		MX_THEME_TEMPLATE_URL . '/dist/js/scripts.js',
		['jquery'],
		MX_THEME_VERSION,
		true
	);

	wp_enqueue_script(
		'frontend-scripts',
		MX_THEME_TEMPLATE_URL . '/dist/js/frontend-scripts.js',
		['jquery' ],
		MX_THEME_VERSION,
		true
	);

	$translation_array = array(
		'siteUrl' => get_site_url(),
		'themeUrl' => get_stylesheet_directory_uri()
	);

	wp_localize_script( 'shared-scripts', 'wordpressData', $translation_array );
	wp_localize_script( 'frontend-scripts', 'wordpressData', $translation_array );

	wp_enqueue_script(
		'font-awesome',
		'https://kit.fontawesome.com/b390050450.js',
		MX_THEME_VERSION
	);

	wp_enqueue_style(
		'frontend-font-primary',
		'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
	);

	wp_enqueue_style(
		'shared-styles',
		MX_THEME_TEMPLATE_URL . '/dist/css/style.css',
		[],
		MX_THEME_VERSION
	);

	wp_enqueue_style(
		'frontend-styles',
		MX_THEME_TEMPLATE_URL . '/dist/css/frontend-styles.css',
		[],
		MX_THEME_VERSION
	);
}

/**
 * Enqueue styles and scripts for the admin (not block related).
 *
 * @return void
 */
function admin() {

	wp_enqueue_script(
		'admin-scripts',
		MX_THEME_TEMPLATE_URL . '/dist/js/admin-scripts.js',
		['jquery'],
		MX_THEME_VERSION,
		true
	);

	wp_enqueue_script(
		'font-awesome',
		'https://kit.fontawesome.com/b390050450.js',
		MX_THEME_VERSION
	);

	wp_enqueue_style(
		'admin-styles',
		MX_THEME_TEMPLATE_URL . '/dist/css/admin-styles.css',
		[],
		MX_THEME_VERSION
	);
}

/**
 * Enqueue styles and scripts shared between the Block Editor and the Frontend.
 *
 * @return void
 */
function editor() {

	wp_enqueue_script(
		'editor-scripts',
		MX_THEME_TEMPLATE_URL . '/dist/js/editor-scripts.js',
		['jquery', 'wp-blocks', 'wp-dom'],
		MX_THEME_VERSION,
		true
	);

	wp_enqueue_media();

	$meta_box_array = array(
		'title' => __( 'Choose or Upload an Image', 'mx-theme' ),
		'button' => __( 'Use this image', 'mx-theme' ),
	);

	wp_localize_script( 'editor-scripts', 'metaBoxData', $meta_box_array );

}

/**
 * Enqueue styles for the login page.
 *
 * @return void
 */
function login_styles() {

	wp_enqueue_style(
		'login-styles',
		MX_THEME_TEMPLATE_URL . '/dist/css/login-styles.css',
		[],
		MX_THEME_VERSION
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

/**
 * Appends a link tag used to add a manifest.json to the head
 *
 * @return void
 */
function add_manifest() {
	echo "<link rel='manifest' href='" . esc_url( MX_THEME_TEMPLATE_URL . '/manifest.json' ) . "' />";
}
