<?php
/*
 *
 * Case Studies Post Type
 *
 */
add_action('init', 'create_case_studies');
function create_case_studies() {
	//custom post type
	register_post_type('case-studies',
		array(
			'labels'       => array(
				'name'                       => 'Case Studies', 'Taxonomy General Name', 'text_domain',
				'singular_name'              => 'Case Study', 'Taxonomy Singular Name', 'text_domain',
				'menu_name'                  => 'Case Studies', 'text_domain',
				'all_items'                  => 'All Items', 'text_domain',
				'parent_item'                => 'Parent Item', 'text_domain',
				'parent_item_colon'          => 'Parent Item:', 'text_domain',
				'new_item_name'              => 'New Item Name', 'text_domain',
				'add_new_item'               => 'Add New Item', 'text_domain',
				'edit_item'                  => 'Edit Item', 'text_domain',
				'update_item'                => 'Update Item', 'text_domain',
				'separate_items_with_commas' => 'Separate items with commas', 'text_domain',
				'search_items'               => 'Search Items', 'text_domain',
				'add_or_remove_items'        => 'Add or remove items', 'text_domain',
				'choose_from_most_used'      => 'Choose from the most used items', 'text_domain',
				'not_found'                  => 'Not Found', 'text_domain',
			),
			'public' => true,
			'has_archive' => true,
			'menu_icon'   => 'dashicons-tablet',
			'publicly_queryable' => true,
			'query_var' => true,
			'menu_position' => 21,
			'supports' => array(
				'custom-fields',
				'editor',
				'title',
				'page-attributes'
			),
		)
	);
	//taxonomy
	register_taxonomy(
		'case-study-category',
		'case-studies',
		array(
			'hierarchical' => true,
			'rewrite' => array( 'slug' => 'case-study-category' ),
			'show_admin_column' => true,
			'query_var' => true,
			'labels'       => array(
				'name'                       => 'Categories', 'Taxonomy General Name', 'text_domain',
				'singular_name'              => 'Category', 'Taxonomy Singular Name', 'text_domain',
				'menu_name'                  => 'Categories', 'text_domain',
				'all_items'                  => 'All Items', 'text_domain',
				'parent_item'                => 'Parent Item', 'text_domain',
				'parent_item_colon'          => 'Parent Item:', 'text_domain',
				'new_item_name'              => 'New Item Name', 'text_domain',
				'add_new_item'               => 'Add New Item', 'text_domain',
				'edit_item'                  => 'Edit Item', 'text_domain',
				'update_item'                => 'Update Item', 'text_domain',
				'separate_items_with_commas' => 'Separate items with commas', 'text_domain',
				'search_items'               => 'Search Items', 'text_domain',
				'add_or_remove_items'        => 'Add or remove items', 'text_domain',
				'choose_from_most_used'      => 'Choose from the most used items', 'text_domain',
				'not_found'                  => 'Not Found', 'text_domain',
			),
			'capabilities' => array(
				'manage__terms' => 'edit_posts',
				'edit_terms'    => 'manage_categories',
				'delete_terms'  => 'manage_categories',
				'assign_terms'  => 'edit_posts'
			)
		)
	);
}