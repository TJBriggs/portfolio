<?php
/**
 *
 * Management Team Post Type
 *
 */

/**
 *
 * Register Custom Post Type
 *
 */
function mx_register_management_team_cpt() {

	$labels = array(
		'name' => _x( 'Management Team', 'Post type general name', 'mx-theme' ),
		'singular_name' => _x( 'Team Member', 'Post type singular name', 'mx-theme' ),
		'menu_name' => _x( 'Mgmt. Team', 'Admin Menu text', 'mx-theme' ),
		'name_admin_bar' => _x( 'Management Team', 'Add New on Toolbar', 'mx-theme' ),
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
		'has_archive' => false,
		'menu_position' => 7,
		'menu_icon' => 'dashicons-businessman',
		'show_in_rest' => true,
		'supports' => array( 'title', 'editor', 'custom-fields' ),
		'template' => array(
			array( 'mx/mgmt-team-meta'),
		)
	);

	register_post_type( 'management-team', $args );
}

add_action( 'init', __NAMESPACE__ . '\\mx_register_management_team_cpt' );
