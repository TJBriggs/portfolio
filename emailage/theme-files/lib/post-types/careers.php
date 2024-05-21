<?php
/*
 *
 * Careers Post Type
 *
 */
//namespace Lib\Post;

add_action('init', __NAMESPACE__ . '\\create_careers');
function create_careers() {
    //custom post type
    register_post_type('careers',
        array(
            'labels'       => array(
                'name'                       => 'Careers', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Career', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Careers', 'text_domain',
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
            'has_archive' => false,
            'menu_icon'   => 'dashicons-id-alt',
            'publicly_queryable' => true,
            'menu_position' => 8,
            'supports' => array(
                'editor',
                'author',
                'custom-fields',
                'title',
                'page-attributes'
            ),
        )
    );
    //taxonomy
    register_taxonomy(
        'job-categories',
        'careers',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Job Categories', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Job Category', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Job Categories', 'text_domain',
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
    //taxonomy
    register_taxonomy(
        'locations',
        'careers',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Job Locations', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Job Location', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Job Locations', 'text_domain',
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