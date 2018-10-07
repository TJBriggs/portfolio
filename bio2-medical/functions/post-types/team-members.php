<?php
/*
 * @package WordPress
 * @subpackage Zemplate
 *
 * Team Member Post Type
 *
 */

/*------------------------------------*\
    :: Team Members
\*------------------------------------*/
add_action('init', 'create_members');
function create_members() {
    //custom post type
    register_post_type('members',
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
            
            'has_archive' => true,
            'menu_icon'   => 'dashicons-groups',
            'publicly_queryable' => true,
            'menu_position' => 25,
            'supports' => array(
                'title',
            ),
        )
    );
    //taxonomy
    register_taxonomy(
        'member_types',
        'members',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Member Types', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Member Type', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Member Types', 'text_domain',
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