<?php
/**
 *
 * Example Post Type
 *
 */
namespace ThemeName\Example_CPT;

/**
 *
 * Register Custom Post Type
 *
 */
function theme_name_register_example_cpt() {

	$labels = array(
		'name' => _x( 'Example CPT', 'Post type general name', 'theme_name' ),
		'singular_name' => _x( 'Example CPT', 'Post type singular name', 'theme_name' ),
		'menu_name' => _x( 'Example CPT', 'Admin Menu text', 'theme_name' ),
		'name_admin_bar' => _x( 'Example CPT', 'Add New on Toolbar', 'theme_name' ),
		'add_new' => __( 'Add New', 'theme_name' ),
		'add_new_item' => __( 'Add New Item', 'theme_name' ),
		'new_item' => __( 'New Item', 'theme_name' ),
		'edit_item' => __( 'Edit Item', 'theme_name' ),
		'view_item' => __( 'View Item', 'theme_name' ),
		'all_items' => __( 'All Items', 'theme_name' ),
		'search_items' => __( 'Search Items', 'theme_name' ),
		'not_found' => __( 'No Items found.', 'theme_name' ),
		'not_found_in_trash' => __( 'No Items found in Trash.', 'theme_name' ),
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

add_action( 'init', __NAMESPACE__ . '\\theme_name_register_example_cpt' );

/**
 *
 * Register Example Taxonomy
 *
 */
function theme_name_register_example_tax() {

	$labels = array(
		'name' => _x( 'Example Taxonomy', 'taxonomy general name', 'theme_name' ),
		'singular_name' => _x( 'Example Taxonomy', 'taxonomy singular name', 'theme_name' ),
		'search_items' => __( 'Search Taxonomies', 'theme_name' ),
		'all_items' => __( 'All Taxonomies', 'theme_name' ),
		'edit_item' => __( 'Edit Taxonomy', 'theme_name' ),
		'update_item' => __( 'Update Taxonomy', 'theme_name' ),
		'add_new_item' => __( 'Add New Taxonomy', 'theme_name' ),
		'new_item_name' => __( 'New Taxonomy Name', 'theme_name' ),
		'menu_name' => __( 'Taxonomies', 'theme_name' ),
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

add_action( 'init', __NAMESPACE__ . '\\theme_name_register_example_tax' );