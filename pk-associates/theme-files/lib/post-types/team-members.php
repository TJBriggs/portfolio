<?php
/*
 *
 * Portfolio Post Type
 *
 */
//namespace Lib\Post;

add_action('init', __NAMESPACE__ . '\\create_team_members');
function create_team_members() {
    //custom post type
    register_post_type('team-members',
        array(
            'labels'       => array(
                'name'                       => 'Team Members', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Team Member', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Team Members', 'text_domain',
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
            'menu_position' => 20,
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
        'featured-member',
        'team-members',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Featured Member', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Featured Member', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Featured Member', 'text_domain',
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