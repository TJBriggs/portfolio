<?php
/*
 *
 * Leadership Post Type
 *
 */
//namespace Lib\Post;

add_action('init', __NAMESPACE__ . '\\create_leadership');
function create_leadership() {
    //custom post type
    register_post_type('leadership',
        array(
            'labels'       => array(
                'name'                       => 'Leadership', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Leadership', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Leadership', 'text_domain',
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
            'menu_icon'   => 'dashicons-groups',
            'publicly_queryable' => false,
            'menu_position' => 9,
            'supports' => array(
                'editor',
                'custom-fields',
                'title',
                'page-attributes'
            ),
        )
    );
    //taxonomy
    register_taxonomy(
        'leadership-category',
        'leadership',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Category', 'Taxonomy General Name', 'text_domain',
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