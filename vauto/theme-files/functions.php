<?php
/**
 * WP Theme constants and setup functions
 *
 * @package mx-theme
 */

// Useful global constants.
define( 'MX_THEME_VERSION', '0.1.43' );
define( 'MX_THEME_TEMPLATE_URL', get_template_directory_uri() );
define( 'MX_THEME_PATH', get_template_directory() . '/' );
define( 'MX_THEME_DIR', MX_THEME_PATH . 'template-parts/' );
define( 'MX_THEME_INC', MX_THEME_PATH . 'includes/' );
define( 'MX_THEME_CPT', MX_THEME_INC . 'post-types/' );
define( 'MX_THEME_CLS', MX_THEME_INC . 'classes/' );

require_once MX_THEME_INC . 'core.php';
require_once MX_THEME_INC . 'overrides.php';
require_once MX_THEME_INC . 'template-functions.php';
require_once MX_THEME_INC . 'template-tags.php';

/**
 * Load Custom Post Types and Taxonomies
 *
 * This will auto load all CPT files within includes/post-types/
 *
 */
foreach ( glob( MX_THEME_CPT . '*.php', GLOB_NOSORT ) as $filename ) {
	require_once $filename;
}

// Run the setup functions.
MxTheme\Core\setup();

if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for the the new wp_body_open() function that was added in 5.2
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
