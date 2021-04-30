<?php
/**
 * Custom template tags for this theme.
 *
 * This file is for custom template tags only and it should not contain
 * functions that will be used for filtering or adding an action.
 *
 * All functions should be prefixed with mx in order to prevent
 * pollution of the global namespace and potential conflicts with functions
 * from plugins.
 * Example: `theme_name_function()`
 *
 * @package ThemeName\Template_Tags
 *
 */

 /**
 * Pagination for archive, taxonomy, category, tag and search results pages
 *
 * @global $wp_query http://codex.wordpress.org/Class_Reference/WP_Query
 * @return Prints the HTML for the pagination if a template is $paged
 *
 */
function theme_name_pagination() {
	global $wp_query;

	$big = 999999999; // This needs to be an unlikely integer

	// For more options and info view the docs for paginate_links()
	// http://codex.wordpress.org/Function_Reference/paginate_links
	$paginate_links = paginate_links( array(
		'base' => str_replace( $big, '%#%', get_pagenum_link($big) ),
		'format' => '?paged=%#%',
		'current' => max( 1, get_query_var('paged') ),
		'total' => $wp_query->max_num_pages,
		'prev_text' => __('<i class="icon-cust-arrow-left"></i>'),
		'next_text' => __('<i class="icon-cust-arrow-right"></i>'),
		'mid_size' => 2
	) );

	// Display the pagination if more than one page is found
	if ( $paginate_links ) {
		echo '<div class="pagination">';
		echo '<div class="pagination__wrap">';
		echo $paginate_links;
		echo '</div>';
		echo '</div>';
	}
}

/**
 * Truncate Text
 *
 * Example:
 * truncateText( $string, 200 );
 *
 */
function theme_name_truncate_text( $text, $chars = 120 ) {

	if( strlen( $text ) > $chars ) {
		$text = $text . ' ';
		$text = substr( $text, 0, $chars );
		$text = substr( $text, 0, strrpos( $text ,' ' ) );
		$text = $text . '...';
	}

	return $text;
}
