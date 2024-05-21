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
require_once('faqs.php');
require_once('team-members.php');

/*------------------------------------*\
    ::Register Image Sizes
\*------------------------------------*/
add_image_size( 'hero', 2400, 9999, true );
add_image_size( 'content-slide', 535, 425, true );
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

/*------------------------------------*\
    ::Options Page
\*------------------------------------*/
if(function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    => 'Global Elements',
        'menu_title'    => 'Global Elements',
        'menu_slug'     => 'global-element-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}

/*-----------------------------------------*\
    ::Show Sub Page Nav for All the Things
\*-----------------------------------------*/
function list_subpages() {
  $children = wp_list_pages('title_li=&child_of=315&echo=0&depth=1');
  if($children) {
    $content.= '<ul>'.$children.'</ul>';
    return $content;
  }
}
add_shortcode('subpages', 'list_subpages');

/*---------------------------------------*\
    ::  Limit title length in blog feed
\*---------------------------------------*/
function tow_title($charlength) {
    $title = get_the_title();
    $charlength++;
    if(strlen($title)>$charlength) {
        $subex = substr($title,0,$charlength-5);
        $exwords = explode(" ",$subex);
        $excut = -(strlen($exwords[count($exwords)-1]));
    if($excut<0) {
        echo substr($subex,0,$excut);
    } else {
        echo $subex;
    }
        echo "...";
    } else {
        echo $title;
    }
}

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