<?php
/*
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */

/*
 * Require any custom functions you'd like to add to this theme.
 *
 * This is where you should add any custom functions specific
 * to the current theme.
 */
require_once('functions/enqueue.php');


/*
 * Require any custom functions you'd like to add to this theme.
 *
 * This is where you should add any custom functions specific
 * to the current theme.
 */
require_once('functions/custom-functions.php');




/*
 * Require Lu's standard collection of miscellaneous functions
 *
 * These are helpful functions included with all Lu themes.
 */

require_once('functions/lu-functions.php');

/*
 * Require custom post types and taxonomies
 *
 * This will auto load everything in the directory.
 */
foreach (glob(get_template_directory().'/functions/post-types/*.php', GLOB_NOSORT) as $filename){
	require_once $filename;
}