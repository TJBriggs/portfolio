<?php
/**
 *
 * Example Post Type
 *
 * @package MxAdmin\Custom_Post_Type
 *
 */
namespace MxAdmin\Example_CPT;

/**
 *
 * Register Custom Post Type
 *
 */
function mx_register_example_cpt() {
	$args = array(
		'public'        => true,
		'label'         => 'Example CPT',
		'menu_position' => 6,
		'menu_icon'     => 'dashicons-lightbulb',
		'show_in_rest'  => true,
		'supports'      => array (
			'title',
			'editor',
			'excerpt',
			'thumbnail'
		)
	);
	register_post_type( 'example-cpt', $args );
}
add_action( 'init', __NAMESPACE__ . '\\mx_register_example_cpt' );

/**
 *
 * Register Basic Taxonomy
 *
 */
function mx_register_example_tax() {
	register_taxonomy(
		'example-tax',
		'example-cpt',
		array(
			'label'        => __( 'Example Tax' ),
			'hierarchical' => true,
			'show_in_rest' => true
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\mx_register_example_tax' );
