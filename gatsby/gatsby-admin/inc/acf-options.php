<?php
/**
 * Add ACF options page.
 *
 * @package  Postlight_Headless_WP
 */

// Add a custom options page to associate ACF fields.
if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page(
		[
			'page_title' => 'Headless Settings',
			'menu_title' => 'Headless',
			'menu_slug'  => 'headless-settings',
			'capability' => 'manage_options',
			'post_id'    => 'headless-settings',
			'redirect'   => false,
		]
	);
}

if (!function_exists('acf_nullify_empty')) {
	/**
	 * Return `null` if an empty value is returned from ACF.
	 *
	 * @param mixed $value
	 * @param mixed $post_id
	 * @param array $field
	 *
	 * @return mixed
	 */
	function acf_nullify_empty($value, $post_id, $field) {
		if (empty($value)) {
			return null;
		}
		return $value;
	}
}
add_filter('acf/format_value', 'acf_nullify_empty', 100, 3);
