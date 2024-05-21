<?php
/*
 *
 * Portfolio Post Type
 *
 */
//namespace Lib\Post;

add_action('init', __NAMESPACE__ . '\\create_portfolio');
function create_portfolio() {
    //custom post type
    register_post_type('portfolio',
        array(
            'labels'       => array(
                'name'                       => 'Portfolio', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Portfolio', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Portfolio', 'text_domain',
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
            'menu_icon'   => 'dashicons-portfolio',
            //'publicly_queryable' => false,
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
        'portfolio_type',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Portfolio Type', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Portfolio Type', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Portfolio Type', 'text_domain',
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
        'market_sectors',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Market Sectors', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Market Sector', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Market Sectors', 'text_domain',
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
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Locations', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Location', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Locations', 'text_domain',
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
        'owners',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Owners', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Owner', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Owners', 'text_domain',
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
        'architects',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Architects', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Architect', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Architects', 'text_domain',
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
        'contractors',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Contractors', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Contractor', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Contractors', 'text_domain',
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
        'construction_type',
        'portfolio',
        array(
            'hierarchical' => true,
            'labels'       => array(
                'name'                       => 'Construction Types', 'Taxonomy General Name', 'text_domain',
                'singular_name'              => 'Construction Type', 'Taxonomy Singular Name', 'text_domain',
                'menu_name'                  => 'Construction Types', 'text_domain',
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