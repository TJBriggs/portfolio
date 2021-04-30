<?php
/**
 * WP Theme constants and setup functions
 *
 * @package ThemeName
 */

// Useful global constants.
define( 'THEME_NAME_VERSION', '0.1.0' );
define( 'THEME_NAME_TEMPLATE_URL', get_template_directory_uri() );
define( 'THEME_NAME_PATH', get_template_directory() . '/' );
define( 'THEME_NAME_INC', THEME_NAME_PATH . 'includes/' );
define( 'THEME_NAME_CPT', THEME_NAME_INC . 'post-types/' );
define( 'THEME_NAME_CLS', THEME_NAME_INC . 'classes/' );

require_once THEME_NAME_INC . 'core.php';
require_once THEME_NAME_INC . 'blocks.php';
require_once THEME_NAME_INC . 'overrides.php';
require_once THEME_NAME_INC . 'template-functions.php';
require_once THEME_NAME_INC . 'template-tags.php';
require_once THEME_NAME_CLS . 'class-customizer.php';
require_once THEME_NAME_CLS . 'class-range-slider.php';

/**
 * Load Custom Post Types and Taxonomies
 *
 * This will auto load all CPT files within includes/post-types/
 *
 */

/* foreach ( glob( THEME_NAME_CPT . '*.php', GLOB_NOSORT ) as $filename ) {
	require_once $filename;
} */

// Run the setup functions.
ThemeName\Core\setup();
ThemeName\Blocks\setup();

// Require Composer autoloader if it exists.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for the the new wp_body_open() function that was added in 5.2
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
