<?php
/**
 * WordPress Block Editor Setup
 *
 * @package WordpressTraining\Core
 */

namespace WordpressTraining\Blocks;

/**
 * Set up blocks
 *
 * @return void
 */
function setup() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	//add_action( 'enqueue_block_assets', $n( 'blocks_editor_scripts' ) );
	add_action( 'enqueue_block_editor_assets', $n( 'blocks_editor_scripts' ) );
	add_filter( 'block_categories', $n( 'blocks_categories' ), 10, 2 );
}

/**
 * Enqueue shared frontend and editor JavaScript for blocks.
 *
 * @return void
 */

/* function blocks_scripts() {

	wp_enqueue_script(
		'blocks',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/js/blocks.js',
		[],
		WORDPRESS_TRAINING_VERSION,
		true
	);
} */


/**
 * Enqueue editor-only JavaScript/CSS for blocks.
 *
 * @return void
 */
function blocks_editor_scripts() {

	wp_enqueue_script(
		'blocks-editor',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/js/blocks.min.js',
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		WORDPRESS_TRAINING_VERSION,
		false
	);

	$translation_array = array(
		'siteUrl' => get_site_url(),
		'themeUrl' => get_stylesheet_directory_uri()
	);

	wp_localize_script( 'blocks-editor', 'wordpressData', $translation_array );

	wp_enqueue_style(
		'block-styles',
		WORDPRESS_TRAINING_TEMPLATE_URL . '/dist/css/block-admin-styles.min.css',
		[],
		WORDPRESS_TRAINING_VERSION
	);

}

/**
 * Filters the registered block categories.
 *
 * @param array  $categories Registered categories.
 * @param object $post       The post object.
 *
 * @return array Filtered categories.
 */
function blocks_categories( $categories, $post ) {
	if ( ! in_array( $post->post_type, array( 'post', 'page' ), true ) ) {
		return $categories;
	}

	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'custom-blocks',
				'title' => __( 'Custom Blocks', 'wordpress-training' ),
			),
		)
	);
}
