<?php
/**
 * Sage includes
 *
 * The $sage_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/sage/pull/1042
 */
$sage_includes = [
  'lib/enqueue.php',                   // Enqueue all styles and scripts
  'lib/sage-functions/extras.php',     // Custom functions
  'lib/sage-functions/setup.php',      // Theme setup
  'lib/sage-functions/titles.php',     // Page titles
  'lib/sage-functions/wrapper.php',    // Theme wrapper class
  'lib/sage-functions/customizer.php', // Theme customizer
];
/*
 * Require all the Sage function files in the sage-functions directory
 *
 * This will auto load all files declared above in the $sage_includes array.
 */
foreach ($sage_includes as $file) {
  if (!$filepath = locate_template($file)) {
    trigger_error(sprintf(__('Error locating %s for inclusion', 'sage'), $file), E_USER_ERROR);
  }

  require_once $filepath;
}
unset($file, $filepath);
/*
 * Require custom post types and taxonomies declared in lib/post-types directory
 *
 * This will auto load everything in the directory.
 */
foreach (glob(get_template_directory() .'/lib/post-types/*.php', GLOB_NOSORT) as $filename){
    require_once $filename;
}
/*
 * Require custom functions defined in lib/lucid-functions directory
 *
 * This will auto load everything in the directory.
 */
foreach (glob(get_template_directory() .'/lib/lu-functions/*.php', GLOB_NOSORT) as $filename){
    require_once $filename;
}
/*--------------------------------------------*\
    ::  Remove counts in dropdown of FacetWP
\*--------------------------------------------*/  
add_filter( 'facetwp_facet_dropdown_show_counts', '__return_false' );
/*------------------------------------*\
    :: Gravity Forms
\*------------------------------------*/  
add_filter("gform_confirmation_anchor", create_function("","return true;"));