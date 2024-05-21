<?php
/*
 *
 * Events Post Type
 *
 */
//namespace Lib\Post;

add_action('init', __NAMESPACE__ . '\\create_events');
function create_events() {
    //custom post type
    register_post_type('events',
        array(
            'labels'       => array(
                'name'                       => 'Events', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Event', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Events', 'text_domain',
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
            'menu_icon'   => 'dashicons-calendar-alt',
            'publicly_queryable' => true,
            'menu_position' => 5,
            'supports' => array(
                'editor',
                'custom-fields',
                'title',
                'page-attributes'
            ),
        )
    );
}