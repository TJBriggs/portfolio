<?php
/**
 * This file contains hooks and functions that override the behavior of WP Core.
 *
 * @package mx-theme
 */

namespace MxTheme\Overrides;

/**
 * Registers instances where we will override default WP Core behavior.
 *
 * @link https://developer.wordpress.org/reference/functions/print_emoji_detection_script/
 * @link https://developer.wordpress.org/reference/functions/print_emoji_styles/
 * @link https://developer.wordpress.org/reference/functions/wp_staticize_emoji/
 * @link https://developer.wordpress.org/reference/functions/wp_staticize_emoji_for_email/
 * @link https://developer.wordpress.org/reference/functions/wp_generator/
 * @link https://developer.wordpress.org/reference/functions/wlwmanifest_link/
 * @link https://developer.wordpress.org/reference/functions/rsd_link/
 *
 * @return void
 */
function setup() {
	// Remove the Emoji detection script.
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );

	// Remove inline Emoji detection script.
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );

	// Remove Emoji-related styles from front end and back end.
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );

	// Remove Emoji-to-static-img conversion.
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

	add_filter( 'tiny_mce_plugins', __NAMESPACE__ . '\disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', __NAMESPACE__ . '\disable_emoji_dns_prefetch', 10, 2 );

	// Remove WordPress generator meta.
	remove_action( 'wp_head', 'wp_generator' );
	// Remove Windows Live Writer manifest link.
	remove_action( 'wp_head', 'wlwmanifest_link' );
	// Remove the link to Really Simple Discovery service endpoint.
	remove_action( 'wp_head', 'rsd_link' );

}

/**
 * Filter function used to remove the TinyMCE emoji plugin.
 *
 * @link https://developer.wordpress.org/reference/hooks/tiny_mce_plugins/
 *
 * @param  array $plugins An array of default TinyMCE plugins.
 * @return array          An array of TinyMCE plugins, without wpemoji.
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) && in_array( 'wpemoji', $plugins, true ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	}

	return $plugins;
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @link https://developer.wordpress.org/reference/hooks/emoji_svg_url/
 *
 * @param  array  $urls          URLs to print for resource hints.
 * @param  string $relation_type The relation type the URLs are printed for.
 * @return array                 Difference betwen the two arrays.
 */
function disable_emoji_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' === $relation_type ) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

		$urls = array_values( array_diff( $urls, array( $emoji_svg_url ) ) );
	}

	return $urls;
}


/**
 * FacetWP - Override expand icons
 *
 */
add_filter( 'facetwp_assets', function( $assets ) {
	FWP()->display->json['expand'] = '<svg width="16" height="16"><polygon points="13,7 9,7 9,3 7,3 7,7 3,7 3,9 7,9 7,13 9,13 9,9 13,9"></polygon></svg>';
	FWP()->display->json['collapse'] = '<svg width="16" height="16"><rect x="3" y="7" width="10" height="2"></rect></svg>';

	// Return the same thing (since we're hijacking this hook)
	return $assets;
});

/**
 * FacetWP - Override Search Icon to be button
 *
 */
add_filter( 'facetwp_facet_html', function( $output, $params ) {
	if ( 'search' == $params['facet']['type'] ) {
		$output = str_replace( '<i class="facetwp-icon"></i>', '<a class="facetwp-icon button--primary">Search</a>', $output );
	}
	return $output;
}, 10, 2 );

/**
 * FacetWP - Add class to load more button
 *
 */
add_filter( 'facetwp_facet_html', function( $output, $params ) {
	if ( 'pager' == $params['facet']['type'] ) {
		$output = str_replace( 'facetwp-load-more', 'facetwp-load-more button--tertiary', $output );
	}
	return $output;
}, 10, 2 );

/**
 * FacetWP - Remove counts on dropdowns
 *
 */
add_filter( 'facetwp_facet_dropdown_show_counts', function( $return, $params ) {
	if ( 'success_story_department' == $params['facet']['name'] ) {
		$return = false;
	}
	if ( 'success_story_product' == $params['facet']['name'] ) {
		$return = false;
	}
	return $return;
}, 10, 2 );

/**
 * FacetWP - Auto pre-filter based on current category
 *
 */
add_filter( 'facetwp_template_use_archive', '__return_true' );
