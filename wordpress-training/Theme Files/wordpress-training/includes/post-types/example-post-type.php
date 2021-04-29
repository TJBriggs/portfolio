<?php
/**
 *
 * Example Post Type
 *
 */
namespace WordpressTraining\Example_CPT;

/**
 *
 * Register Custom Post Type
 *
 */
function WORDPRESS_TRAINING_register_example_cpt() {

	$labels = array(
		'name' => _x( 'Example CPT', 'Post type general name', 'WORDPRESS_TRAINING' ),
		'singular_name' => _x( 'Example CPT', 'Post type singular name', 'WORDPRESS_TRAINING' ),
		'menu_name' => _x( 'Example CPT', 'Admin Menu text', 'WORDPRESS_TRAINING' ),
		'name_admin_bar' => _x( 'Example CPT', 'Add New on Toolbar', 'WORDPRESS_TRAINING' ),
		'add_new' => __( 'Add New', 'WORDPRESS_TRAINING' ),
		'add_new_item' => __( 'Add New Item', 'WORDPRESS_TRAINING' ),
		'new_item' => __( 'New Item', 'WORDPRESS_TRAINING' ),
		'edit_item' => __( 'Edit Item', 'WORDPRESS_TRAINING' ),
		'view_item' => __( 'View Item', 'WORDPRESS_TRAINING' ),
		'all_items' => __( 'All Items', 'WORDPRESS_TRAINING' ),
		'search_items' => __( 'Search Items', 'WORDPRESS_TRAINING' ),
		'not_found' => __( 'No Items found.', 'WORDPRESS_TRAINING' ),
		'not_found_in_trash' => __( 'No Items found in Trash.', 'WORDPRESS_TRAINING' ),
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'capability_type' => 'post',
		'menu_position' => 7,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt'),
		'rewrite' => array(
			'slug' => 'example-cpt',
			'with_front' => false,
		),
	);

	register_post_type( 'example-cpt', $args );
}

add_action( 'init', __NAMESPACE__ . '\\WORDPRESS_TRAINING_register_example_cpt' );

/**
 *
 * Register Example Taxonomy
 *
 */
function WORDPRESS_TRAINING_register_example_tax() {

	$labels = array(
		'name' => _x( 'Example Taxonomy', 'taxonomy general name', 'WORDPRESS_TRAINING' ),
		'singular_name' => _x( 'Example Taxonomy', 'taxonomy singular name', 'WORDPRESS_TRAINING' ),
		'search_items' => __( 'Search Taxonomies', 'WORDPRESS_TRAINING' ),
		'all_items' => __( 'All Taxonomies', 'WORDPRESS_TRAINING' ),
		'edit_item' => __( 'Edit Taxonomy', 'WORDPRESS_TRAINING' ),
		'update_item' => __( 'Update Taxonomy', 'WORDPRESS_TRAINING' ),
		'add_new_item' => __( 'Add New Taxonomy', 'WORDPRESS_TRAINING' ),
		'new_item_name' => __( 'New Taxonomy Name', 'WORDPRESS_TRAINING' ),
		'menu_name' => __( 'Taxonomies', 'WORDPRESS_TRAINING' ),
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
	);

	register_taxonomy( 'example-taxonomy', 'example-cpt', $args );

}

add_action( 'init', __NAMESPACE__ . '\\WORDPRESS_TRAINING_register_example_tax' );
