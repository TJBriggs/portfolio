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

function vidbtn_shortcode($atts) {
    extract(shortcode_atts(array(
        'url' => '#',
        'name' => 'learn more',
        'target' => ''
    ), $atts));
    if($target){
        $target = ' target="_blank"';
    }
    return '<a href="'.$url.'" class="btn fancybox-media"'.$target.'>'.$name.'</a>';
}
add_shortcode('vidbutton', 'vidbtn_shortcode');

function mastBtn_shortcode($atts) {
    extract(shortcode_atts(array(
        'url' => '#',
        'name' => 'learn more',
        'target' => ''
    ), $atts));
    if($target){
        $target = ' target="_blank"';
    }
    return '<a href="'.$url.'" class="mastBtn"'.$target.'>'.$name.'</a>';
}
add_shortcode('mastButton', 'mastBtn_shortcode');

function mainCTA_shortcode($atts) {
    extract(shortcode_atts(array(
        'url' => '#',
        'name' => 'learn more',
        'target' => ''
    ), $atts));
    if($target){
        $target = ' target="_blank"';
    }
    return '<a href="'.$url.'" class="main_cta_btn"'.$target.'>'.$name.'</a>';
}
add_shortcode('mainCTA', 'mainCTA_shortcode');

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
//add_image_size( 'masthead', 1140, 445, true );
add_image_size( 'masthead', 1024, 400, true );
add_image_size( 'parallax', 9999, 1461, true );
add_image_size( 'team', 400, 400, true );
add_image_size( 'polaroid', 225, 225, true );
//add_image_size( 'carousel', 375, 375, true );

/*------------------------------------*\
    Testimonials Custom Post Type
\*------------------------------------*/
function my_custom_post_testimonials() {
    $labels = array(
        'name'               => _x( 'Testimonials', 'post type general name' ),
        'singular_name'      => _x( 'Testimonial', 'post type singular name' ),
        'add_new'            => _x( 'Add New Testimonial', 'testimonial' ),
        'add_new_item'       => __( 'Add New Testimonial' ),
        'edit_item'          => __( 'Edit Testimonial' ),
        'new_item'           => __( 'New Testimonial' ),
        'all_items'          => __( 'All Testimonials' ),
        'view_item'          => __( 'View Testimonial' ),
        'search_items'       => __( 'Search Testimonials' ),
        'not_found'          => __( 'No Testimonials found' ),
        'not_found_in_trash' => __( 'No Testimonials found in the Trash' ), 
        'parent_item_colon'  => '',
        'menu_name'          => 'Testimonials'
        );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our Testimonials and Testimonial specific data',
        'public'        => true,
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'revisions', 'sticky' ),
        'has_archive'   => true,
        'taxonomies' => array('Testimonials')
    );
    register_post_type( 'testimonials', $args ); 
}
add_action( 'init', 'my_custom_post_testimonials' );
 
 
/*------------------------------------*\
    Testimonials Custom Category
\*------------------------------------*/
function add_custom_taxonomies() {
  $labels = array(
    'name'              => _x( 'Testimonial Types', 'taxonomy general name' ),
    'singular_name'     => _x( 'Testimonial Type', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Testimonial Types' ),
    'all_items'         => __( 'All Testimonial Types' ),
    'parent_item'       => __( 'Parent Testimonial Types' ),
    'parent_item_colon' => __( 'Parent Testimonial Types:' ),
    'edit_item'         => __( 'Edit Testimonial Types' ), 
    'update_item'       => __( 'Update Testimonial Type' ),
    'add_new_item'      => __( 'Add New Testimonial Type' ),
    'new_item_name'     => __( 'New Testimonial Type' ),
    'menu_name'         => __( 'Testimonial Types' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'testimonial-type', 'testimonials', $args );
}
add_action( 'init', 'add_custom_taxonomies', 0 );

/*------------------------------------*\
    FAQ Custom Post Type
\*------------------------------------*/
function my_custom_post_faqs() {
    $labels = array(
        'name'               => _x( 'FAQs', 'post type general name' ),
        'singular_name'      => _x( 'FAQ', 'post type singular name' ),
        'add_new'            => _x( 'Add New FAQ', 'faq' ),
        'add_new_item'       => __( 'Add New FAQ' ),
        'edit_item'          => __( 'Edit FAQ' ),
        'new_item'           => __( 'New FAQ' ),
        'all_items'          => __( 'All FAQs' ),
        'view_item'          => __( 'View FAQ' ),
        'search_items'       => __( 'Search FAQs' ),
        'not_found'          => __( 'No FAQs found' ),
        'not_found_in_trash' => __( 'No FAQs found in the Trash' ), 
        'parent_item_colon'  => '',
        'menu_name'          => 'FAQs'
        );
    $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our FAQs and FAQ specific data',
        'public'        => true,
        'menu_position' => 6,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'revisions' ),
        'has_archive'   => true,
        'taxonomies' => array('FAQs')
    );
    register_post_type( 'faqs', $args ); 
}
add_action( 'init', 'my_custom_post_faqs' );
 
/*------------------------------------*\
    FAQ Custom Category
\*------------------------------------*/
function add_faq_custom_taxonomies() {
  $labels = array(
    'name'              => _x( 'FAQ Types', 'taxonomy general name' ),
    'singular_name'     => _x( 'FAQ Type', 'taxonomy singular name' ),
    'search_items'      => __( 'Search FAQ Types' ),
    'all_items'         => __( 'All FAQ Types' ),
    'parent_item'       => __( 'Parent FAQ Types' ),
    'parent_item_colon' => __( 'Parent FAQ Types:' ),
    'edit_item'         => __( 'Edit FAQ Types' ), 
    'update_item'       => __( 'Update FAQ Type' ),
    'add_new_item'      => __( 'Add New FAQ Type' ),
    'new_item_name'     => __( 'New FAQ Type' ),
    'menu_name'         => __( 'FAQ Types' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'faq-type', 'faqs', $args );
}
add_action( 'init', 'add_faq_custom_taxonomies', 0 );