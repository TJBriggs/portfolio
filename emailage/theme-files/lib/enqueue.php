<?php

namespace Roots\Sage\Lu;

/**
 * Theme assets
 */
function assets() {
	/*------------------------------------*\
    	:: CSS
	\*------------------------------------*/	
	// Register Styles
	// Usage: wp_register_style( $handle, $src, $deps, $ver, $media );
	// https://codex.wordpress.org/Function_Reference/wp_register_style
  	wp_register_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0','screen, projection' );

  	// Global Enqueue - Calls registered styles on every page
  	// 
  	wp_enqueue_style('style');

  	/*------------------------------------*\
    	:: JavaScript
	\*------------------------------------*/	
  	if(!is_admin()) { // Dont load js on admin pages

  		// Register Scripts - Only need to require jquery on first script that needs it
	  	// Usage: wp_register_script( string $handle, string $src, array $deps = array(), string|bool|null $ver = false, bool $in_footer = false )
	  	// https://developer.wordpress.org/reference/functions/wp_register_script/
	  	wp_deregister_script('jquery');
		wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', false, '3.2.1', true);
        wp_register_script('font-awesome', 'https://use.fontawesome.com/b5ae4d476d.js', false, '4.7.0', true);
        wp_register_script('recaptcha', 'https://www.google.com/recaptcha/api.js', null, null, true);

        wp_register_script('owl', get_template_directory_uri() . '/plugins/owl-carousel/owl-carousel/owl.carousel.min.js', false, '1.0.0', true);
	  	wp_register_script('scripts', get_template_directory_uri() . '/assets/scripts/scripts.min.js', null, '1.0', true);
	  	
	  	// Global Enqueues - Calls registered scripts on every page (order specific)
	  	// Example: wp_enqueue_script('$handle');
	  	wp_enqueue_script('jquery');
        wp_enqueue_script('recaptcha');
        wp_enqueue_script('font-awesome');
        wp_enqueue_script('owl');
	  	wp_enqueue_script('scripts'); // Actually loads the registered script of 'scripts'

	  	// Page Based Enqueues - Calls registered scripts on specified pages
	  	// Uncomment code below and specify page by id or slug, etc
		// if ( is_page() ) {

		// }

	  	// Localize Scripts
	  	// Use specified php data in your local scripts (JavaScript)
	  	// https://codex.wordpress.org/Function_Reference/wp_localize_script
	  	// Store php data in the translation array
	  	// Usage: 
	 	// $translation_array = array( 
	 	//     'theUrl' => get_site_url(),
	 	//     'theTitle' => get_title()     
	 	// ); 
	 	// Use wp_localize_script to define which script the data will be used in, name the object, and pull in the array
	 	// Usage: 
		// wp_localize_script( '$handle', 'object-name', $translation_array );

		// Enable ajax support for comments
	  	if (is_single() && comments_open() && get_option('thread_comments')) {
	    	wp_enqueue_script('comment-reply');
	  	}
  	}
  	
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\assets', 100);
