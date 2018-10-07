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
/*-----------------------------------------------*\
    ::  Load the custom post type of modifiers
\*-----------------------------------------------*/
require_once('modifiers.php');

/*------------------------------------*\
    ::Register Image Sizes
\*------------------------------------*/
add_image_size( 'hero', 2400, 9999, true );
add_image_size( 'full-width', 1140, 850, true );

/*------------------------------------*\
    :: Button Shortcode
\*------------------------------------*/
//Usage: [button url='http://google.com' name='My Button' target='New Tab']
function btn_shortcode($atts) {
    extract(shortcode_atts(array(
        'url' => '#',
        'name' => '',
        'target' => ''
    ), $atts));
    if($target){
        $target = ' target="_blank"';
    }
    return '<a href="'.$url.'" class="btn"'.$target.'>'.$name.'</a>';
}
add_shortcode('button', 'btn_shortcode');

/*---------------------------------------*\
    ::  Limit excerpt length in blog feed
\*---------------------------------------*/
function tow_excerpt($charlength) {
    $excerpt = get_the_excerpt();
    $charlength++;
    if(strlen($excerpt)>$charlength) {
        $subex = substr($excerpt,0,$charlength-5);
        $exwords = explode(" ",$subex);
        $excut = -(strlen($exwords[count($exwords)-1]));
    if($excut<0) {
        echo substr($subex,0,$excut);
    } else {
        echo $subex;
    }
        echo "...";
    } else {
        echo $excerpt;
    }
}

/*------------------------------------*\
    ::Options Page
\*------------------------------------*/
if(function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}
/*--------------------------------------*\
    :: Custom Single page for Careers
\*--------------------------------------*/
//Gets post cat slug and looks for single-[cat slug].php and applies it
add_filter('single_template', create_function(
    '$the_template',
    'foreach( (array) get_the_category() as $cat ) {
        if ( file_exists(TEMPLATEPATH . "/single-{$cat->slug}.php") )
        return TEMPLATEPATH . "/single-{$cat->slug}.php"; }
    return $the_template;' )
);