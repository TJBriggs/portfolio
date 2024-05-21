<?php
/**
 * Register Block Settings
 *
 * @package MxBlocksPlugin
 */

namespace MxBlocksPlugin\BlockSettings;

use \WP_Error;

function mx_block_settings() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	add_action( 'init', $n( 'mx_block_settings_init' ) );
	add_action( 'after_setup_theme', $n( 'mx_block_pattern_categories' ) );
	add_filter( 'block_categories_all', $n( 'mx_block_categories' ), 10, 2 );
	add_action( 'enqueue_block_editor_assets', $n( 'editor' ), 999 );
	
	/* Remove block plugin suggestions when searching blocks */
	remove_action( 'enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets' );
	remove_action( 'enqueue_block_editor_assets', 'gutenberg_enqueue_block_editor_assets_block_directory' );
	do_action( 'mx_block_settings_loaded' );
}

/**
 * Fires an action so other plugins/themes can hook into before our settings initialize.
 *
 * @return void
 */
function mx_block_settings_init() {
	do_action( 'mx_block_settings_init' );
}

/**
 * Enqueue styles and scripts specific to the editor.
 *
 * @return void
 */
function editor() {

	wp_enqueue_script(
		'editor-scripts',
		'/wp-content/mu-plugins/mx-blocks-plugin/dist/js/editor-scripts.js',
		['jquery', 'wp-blocks', 'wp-dom', 'wp-dom-ready'],
		MX_BLOCKS_PLUGIN_VERSION,
		true
	);

	wp_enqueue_style(
		'editor-styles',
		'/wp-content/mu-plugins/mx-blocks-plugin//dist/css/editor-styles.css',
		[],
		MX_BLOCKS_PLUGIN_VERSION
	);
}

/**
 * 
 * Register Block Categories
 * 
 */
function mx_block_categories( $block_categories, $editor_context ) {

	if ( ! empty( $editor_context->post ) ) {
		array_push(
			$block_categories,
			array(
				'slug' => 'callouts',
				'title' => __( 'Callouts', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'cards',
				'title' => __( 'Cards', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'ctas',
				'title' => __( 'CTAs', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'features',
				'title' => __( 'Features', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'grids',
				'title' => __( 'Grids', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'heros',
				'title' => __( 'Heros', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'links',
				'title' => __( 'Links', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'meta',
				'title' => __( 'Meta Blocks', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'sliders',
				'title' => __( 'Carousel & Sliders', 'mx-blocks-plugin' ),
				'icon' => null,
			),
			array(
				'slug' => 'utilities',
				'title' => __( 'Utility Blocks', 'mx-blocks-plugin' ),
				'icon' => null,
			)
		);
	}
	return $block_categories;
}

/**
 * 
 * Register/Unregister Block Pattern Categories
 * 
 */
function mx_block_pattern_categories() {

	remove_theme_support( 'core-block-patterns' );

	/* Register Custom Block Pattern Categories */
	register_block_pattern_category(
		'cta-blocks',
		array( 'label' => __( 'CTAs', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'callout-blocks',
		array( 'label' => __( 'Callouts', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'card-blocks',
		array( 'label' => __( 'Cards', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'feature-blocks',
		array( 'label' => __( 'Features', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'hero-blocks',
		array( 'label' => __( 'Heros', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'text-blocks',
		array( 'label' => __( 'Text', 'mx-blocks-plugin' ) )
	);
	register_block_pattern_category(
		'slider-blocks',
		array( 'label' => __( 'Sliders & Carousels', 'mx-blocks-plugin' ) )
	);
}
