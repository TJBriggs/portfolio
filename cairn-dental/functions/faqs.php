<?php
/*
 * @package WordPress
 * @subpackage Zemplate
 *
 * FAQs Post Type
 *
 */
/*------------------------------------*\
    FAQs Custom Post Type
\*------------------------------------*/
add_action('init', 'create_faqs');
function create_faqs() {
    //custom post type
    register_post_type('faqs',
        array(
            'labels'       => array(
                'name'                       => 'FAQs', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'FAQ', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'FAQS', 'text_domain',
                'menu_position'              => 6,
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
            'menu_icon'   => 'dashicons-lightbulb',
            'publicly_queryable' => false,
            'menu_position' => 6,
            'supports' => array(
                'title'
            ),
        )
    );
    //taxonomy
    register_taxonomy(
        'faq_cats',
        'faqs',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'FAQ Categories', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'FAQ Category', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'FAQ Categories', 'text_domain',
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