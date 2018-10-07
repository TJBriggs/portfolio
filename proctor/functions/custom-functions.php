<?php
/*
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 1.0
 *
 * Theme-specific functions and definitions
 *
 * Use this file to set up any theme-specific functions you'd like to use
 * in the current theme.
 */
/*------------------------------------*\
    //Button Shortcode
\*------------------------------------*/
//Usage: [button url='http://google.com' name='My Button' target='New Tab']
function btn_shortcode($atts) {
    extract(shortcode_atts(array(
        'url' => '#',
        'name' => 'learn more',
        'target' => ''
    ), $atts));
    if($target){
        $target = ' target="_blank"';
    }
    return '<a href="'.$url.'" class="btn"'.$target.'>'.$name.'</a>';
}
add_shortcode('button', 'btn_shortcode');

/*------------------------------------------------------*\
    //Register widgets and sidebar
\*------------------------------------------------------*/
function arphabet_widgets_init() {
    register_sidebar( array(
        'name' => __( 'Primary Widget Area'),
        'id' => 'primary-widget-area',
        'description' => __( 'The primary widget area'),
        'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
        'after_widget' => '</li>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

/*------------------------------------*\
    ::Allow Upload of SVG
\*------------------------------------*/
function cc_mime_types( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

/*------------------------------------*\
    ::Enable Feature Images
\*------------------------------------*/
add_theme_support( 'post-thumbnails' );

/*------------------------------------*\
    ::Register Image Sizes
\*------------------------------------*/
add_image_size( 'hero', 1024, 434, true );
add_image_size( 'parallax', 9999, 9999, false );
add_image_size( 'carousel', 375, 375, false );
add_image_size( 'sliderThumb', 190, 90, true );
add_image_size( 'sliderFull', 765, 585, true );
add_image_size( 'services', 1500, 2254, true );
add_image_size( 'projects', 585, 460, true );
add_image_size( 'members', 585, 460, true );

/*------------------------------------*\
    Work Custom Post Type
\*------------------------------------*/
function my_custom_post_projects() {
    $labels = array(
        'name'               => _x( 'Projects', 'post type general name' ),
        'singular_name'      => _x( 'Project', 'post type singular name' ),
        'add_new'            => _x( 'Add New Project', 'project' ),
        'add_new_item'       => __( 'Add New Project' ),
        'edit_item'          => __( 'Edit Project' ),
        'new_item'           => __( 'New Project' ),
        'all_items'          => __( 'All Projects' ),
        'view_item'          => __( 'View Project' ),
        'search_items'       => __( 'Search Projects' ),
        'not_found'          => __( 'No Projects found' ),
        'not_found_in_trash' => __( 'No Projects found in the Trash' ), 
        'parent_item_colon'  => '',
        'menu_name'          => 'Projects'
        );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our Projects and Project specific data',
        'public'        => true,
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'revisions', 'sticky' ),
        'has_archive'   => true,
        'taxonomies' => array('Projects')
    );
    register_post_type( 'projects', $args ); 
}
add_action( 'init', 'my_custom_post_projects' );
 
 
/*------------------------------------*\
    Work Custom Category
\*------------------------------------*/
function add_custom_taxonomies() {
  $labels = array(
    'name'              => _x( 'Project Types', 'taxonomy general name' ),
    'singular_name'     => _x( 'Project Type', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Project Types' ),
    'all_items'         => __( 'All Project Types' ),
    'parent_item'       => __( 'Parent Project Types' ),
    'parent_item_colon' => __( 'Parent Project Types:' ),
    'edit_item'         => __( 'Edit Project Types' ), 
    'update_item'       => __( 'Update Project Type' ),
    'add_new_item'      => __( 'Add New Project Type' ),
    'new_item_name'     => __( 'New Project Type' ),
    'menu_name'         => __( 'Project Types' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'project-type', 'projects', $args );
}
add_action( 'init', 'add_custom_taxonomies', 0 );

/*------------------------------------*\
    Team Member Custom Post Type
\*------------------------------------*/
function my_custom_post_members() {
    $labels = array(
        'name'               => _x( 'Team Members', 'post type general name' ),
        'singular_name'      => _x( 'Team Member', 'post type singular name' ),
        'add_new'            => _x( 'Add New Member', 'team member' ),
        'add_new_item'       => __( 'Add New Member' ),
        'edit_item'          => __( 'Edit Team Member' ),
        'new_item'           => __( 'New Team Member' ),
        'all_items'          => __( 'All Team Members' ),
        'view_item'          => __( 'View Team Member' ),
        'search_items'       => __( 'Search Team Members' ),
        'not_found'          => __( 'No Team Members found' ),
        'not_found_in_trash' => __( 'No Team Members found in the Trash' ), 
        'parent_item_colon'  => '',
        'menu_name'          => 'Team Members'
        );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our Team Members and Team Member specific data',
        'public'        => true,
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'revisions', 'sticky' ),
        'has_archive'   => true,
        'taxonomies' => array('member-type')
    );
    register_post_type( 'team members', $args ); 
}
add_action( 'init', 'my_custom_post_members' );
 
/*------------------------------------*\
    Member Custom Category
\*------------------------------------*/
function add_member_custom_taxonomies() {
  $labels = array(
    'name'              => _x( 'Member Types', 'taxonomy general name' ),
    'singular_name'     => _x( 'Member Type', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Member Types' ),
    'all_items'         => __( 'All Member Types' ),
    'parent_item'       => __( 'Parent Member Types' ),
    'parent_item_colon' => __( 'Parent Member Types:' ),
    'edit_item'         => __( 'Edit Member Types' ), 
    'update_item'       => __( 'Update Member Type' ),
    'add_new_item'      => __( 'Add New Member Type' ),
    'new_item_name'     => __( 'New Member Type' ),
    'menu_name'         => __( 'Member Types' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'member-type', 'members', $args );
}
add_action( 'init', 'add_member_custom_taxonomies', 0 );