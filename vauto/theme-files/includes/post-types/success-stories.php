<?php
/**
 *
 * Success Stories Post Type
 *
 */

/**
 *
 * Register Custom Post Type
 *
 */
function mx_register_success_stories_cpt() {

	$labels = array(
		'name' => _x( 'Success Stories', 'Post type general name', 'mx-theme' ),
		'singular_name' => _x( 'Success Story', 'Post type singular name', 'mx-theme' ),
		'menu_name' => _x( 'Success Stories', 'Admin Menu text', 'mx-theme' ),
		'name_admin_bar' => _x( 'Success Stories', 'Add New on Toolbar', 'mx-theme' ),
		'add_new' => __( 'Add New', 'mx-theme' ),
		'add_new_item' => __( 'Add New Item', 'mx-theme' ),
		'new_item' => __( 'New Item', 'mx-theme' ),
		'edit_item' => __( 'Edit Item', 'mx-theme' ),
		'view_item' => __( 'View Item', 'mx-theme' ),
		'all_items' => __( 'All Items', 'mx-theme' ),
		'search_items' => __( 'Search Items', 'mx-theme' ),
		'not_found' => __( 'No Items found.', 'mx-theme' ),
		'not_found_in_trash' => __( 'No Items found in Trash.', 'mx-theme' ),
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'capability_type' => 'post',
		'menu_position' => 7,
		'menu_icon' => 'dashicons-groups',
		'show_in_rest' => true,
		'hierarchical' => true,
		'has_archive' => true,
		'supports' => array( 'title', 'editor', 'custom-fields' ),
		'template' => array(
			array( 'mx/success-story-meta'),
		),
		'rewrite' => array(
			'slug' => 'success-stories/%dept%',
			'with_front' => false,
		),
	);

	register_post_type( 'success-stories', $args );
}

add_action( 'init', __NAMESPACE__ . '\\mx_register_success_stories_cpt' );

/**
 *
 * Register Example Taxonomy
 *
 */
function mx_register_success_stories_tax() {

	$department_labels = array(
		'name' => _x( 'Departments', 'taxonomy general name', 'mx-theme' ),
		'singular_name' => _x( 'Departments', 'taxonomy singular name', 'mx-theme' ),
		'search_items' => __( 'Search Departments', 'mx-theme' ),
		'all_items' => __( 'All Departments', 'mx-theme' ),
		'edit_item' => __( 'Edit Department', 'mx-theme' ),
		'update_item' => __( 'Update Department', 'mx-theme' ),
		'add_new_item' => __( 'Add New Department', 'mx-theme' ),
		'new_item_name' => __( 'New Department Name', 'mx-theme' ),
		'menu_name' => __( 'Departments', 'mx-theme' ),
	);

	$department_args = array(
		'hierarchical' => true,
		'labels' => $department_labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'show_in_rest' => true,
		'query_var' => true,
	);

	register_taxonomy( 'success-stories-departments', 'success-stories', $department_args );

	$product_labels = array(
		'name' => _x( 'Products', 'taxonomy general name', 'mx-theme' ),
		'singular_name' => _x( 'Products', 'taxonomy singular name', 'mx-theme' ),
		'search_items' => __( 'Search Products', 'mx-theme' ),
		'all_items' => __( 'All Products', 'mx-theme' ),
		'edit_item' => __( 'Edit Product', 'mx-theme' ),
		'update_item' => __( 'Update Product', 'mx-theme' ),
		'add_new_item' => __( 'Add New Product', 'mx-theme' ),
		'new_item_name' => __( 'New Product Name', 'mx-theme' ),
		'menu_name' => __( 'Products', 'mx-theme' ),
	);

	$product_args = array(
		'hierarchical' => true,
		'labels' => $product_labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'show_in_rest' => true,
		'query_var' => true,
	);

	register_taxonomy( 'success-stories-products', 'success-stories', $product_args );

}

add_action( 'init', __NAMESPACE__ . '\\mx_register_success_stories_tax' );

function mx_ss_post_link( $post_link, $id = 0 ){
	$post = get_post($id);
	if ( is_object( $post ) ){
		$terms = wp_get_object_terms( $post->ID, 'success-stories-departments' );
		if( $terms ){
			return str_replace( '%dept%' , $terms[0]->slug , $post_link );
		}
	}
	return $post_link;
}
add_filter( 'post_type_link', 'mx_ss_post_link', 1, 3 );

function ss_archive_rewrite_rules() {
	add_rewrite_rule(
		'^success-stories/(.*)/(.*)/?$',
		'index.php?post_type=success-stories&name=$matches[2]',
		'top'
	);
}
add_action( 'init', 'ss_archive_rewrite_rules' );
