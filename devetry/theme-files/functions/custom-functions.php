<?php
/*
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 *
 * Theme-specific functions and definitions
 *
 * Use this file to set up any theme-specific functions you'd like to use
 * in the current theme.
 */
/*------------------------------------*\
	:: Gravity Forms No Jump to Top
\*------------------------------------*/
// add_filter("gform_confirmation_anchor", create_function("","return true;"));
/*------------------------------------*\
	:: ACF Options Page
\*------------------------------------*/
/*
 * These pages are a great place to load logos, social icons, etc
 * A custom field with a rule utilizing the option page is required
 * https://www.advancedcustomfields.com/resources/options-page/
 */
if( function_exists('acf_add_options_page') ) {
	// Section name in sidebar
	$parent = acf_add_options_page(array(
		'page_title'    => 'Global Elements',
		'menu_title'    => 'Global Elements',
		'icon_url' => 'dashicons-admin-site'
	));
	// Scripts main page
	acf_add_options_page(array(
		'page_title'    => 'Scripts',
		'menu_title'    => 'Scripts',
		'icon_url' => 'dashicons-editor-code'
	));
	// Optional subpage
	acf_add_options_sub_page(array(
		'page_title'    => 'Header Elements',
		'menu_title'    => 'Header Elements',
		'parent_slug'   => $parent['menu_slug']
	));
	// Optional subpage
	acf_add_options_sub_page(array(
		'page_title'    => 'Footer Elements',
		'menu_title'    => 'Footer Elements',
		'parent_slug'   => $parent['menu_slug']
	));
}
// Hide All Case Studies Terms on frontend for case-study-excerpt
if( !is_admin() ){
	add_filter('get_the_terms', 'modify_term_list', 1);
}
function modify_term_list($terms){
	foreach($terms as $term_index => $term_object){
		if($term_object->name === 'All Case Studies') {
			unset($terms[$term_index]);
		} else {
			return $terms;
		}
	}
}