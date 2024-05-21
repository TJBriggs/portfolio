<?php
/**
 *
 * Style Guide Post Type
 *
 */

/**
 *
 * Register Custom Post Type
 *
 */
function mx_register_style_guide_cpt() {

	$labels = array(
		'name' => _x( 'Style Guide', 'Post type general name', 'mx-theme' ),
		'singular_name' => _x( 'Style Guide', 'Post type singular name', 'mx-theme' ),
		'menu_name' => _x( 'Style Guide', 'Admin Menu text', 'mx-theme' ),
		'name_admin_bar' => _x( 'Style Guide', 'Add New on Toolbar', 'mx-theme' ),
		'add_new' => __( 'Add New Page', 'mx-theme' ),
		'add_new_item' => __( 'Add New Page', 'mx-theme' ),
		'new_item' => __( 'New Page', 'mx-theme' ),
		'edit_item' => __( 'Edit Page', 'mx-theme' ),
		'view_item' => __( 'View Page', 'mx-theme' ),
		'all_items' => __( 'All Pages', 'mx-theme' ),
		'search_items' => __( 'Search Pages', 'mx-theme' ),
		'not_found' => __( 'No Pages found.', 'mx-theme' ),
		'not_found_in_trash' => __( 'No Pages found in Trash.', 'mx-theme' ),
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'capability_type' => 'post',
		'menu_position' => 50,
		'menu_icon' => 'dashicons-admin-customizer',
		'show_in_rest' => true,
		'show_in_menu' => true,
		'hierarchical' => true,
		'has_archive' => true,
		'supports' => array( 'title', 'thumbnail', 'editor', 'revisions', 'page-attributes' ),
		'rewrite' => array(
			'with_front' => false,
		),
	);

	register_post_type( 'style-guide', $args );
}

add_action( 'init', __NAMESPACE__ . '\\mx_register_style_guide_cpt' );
