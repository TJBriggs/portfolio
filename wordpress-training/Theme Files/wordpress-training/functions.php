<?php
/**
 * WP Theme constants and setup functions
 *
 * @package WordpressTraining
 */

// Useful global constants.
define( 'WORDPRESS_TRAINING_VERSION', '0.1.0' );
define( 'WORDPRESS_TRAINING_TEMPLATE_URL', get_template_directory_uri() );
define( 'WORDPRESS_TRAINING_PATH', get_template_directory() . '/' );
define( 'WORDPRESS_TRAINING_INC', WORDPRESS_TRAINING_PATH . 'includes/' );
define( 'WORDPRESS_TRAINING_CPT', WORDPRESS_TRAINING_INC . 'post-types/' );
define( 'WORDPRESS_TRAINING_CLS', WORDPRESS_TRAINING_INC . 'classes/' );

require_once WORDPRESS_TRAINING_INC . 'core.php';
require_once WORDPRESS_TRAINING_INC . 'blocks.php';
require_once WORDPRESS_TRAINING_INC . 'overrides.php';
require_once WORDPRESS_TRAINING_INC . 'template-functions.php';
require_once WORDPRESS_TRAINING_INC . 'template-tags.php';

/**
 * Load Custom Post Types and Taxonomies
 *
 * This will auto load all CPT files within includes/post-types/
 *
 */

/* foreach ( glob( WORDPRESS_TRAINING_CPT . '*.php', GLOB_NOSORT ) as $filename ) {
	require_once $filename;
} */

// Run the setup functions.
WordpressTraining\Core\setup();
WordpressTraining\Blocks\setup();

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
