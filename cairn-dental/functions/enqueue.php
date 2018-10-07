<?php

/*------------------------------------*\
    //Enques
		//CSS
		//Javascript
\*------------------------------------*/

/*------------------------------------*\
    //CSS
\*------------------------------------*/
	function theme_styles(){
		wp_register_style( 'owl-new', get_template_directory_uri() . '/plugins/owl-new/owl-carousel/owl.carousel.css', array(), '1.3.2','screen, projection' );
		wp_register_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0','screen, projection' );

		// enqueing:
		wp_enqueue_style( 'owl-new' );
		wp_enqueue_style( 'style' );
	}
	add_action('wp_enqueue_scripts', 'theme_styles');
	if($is_IE) {
		function ie_styles(){
			wp_register_style( 'ie', get_template_directory_uri() . '/css/ie.css', array(), '1.0','screen, projection' );

			// enqueing:
			wp_enqueue_style( 'ie' );
		}
		add_action('wp_enqueue_scripts', 'ie_styles');
	}
/*------------------------------------*\
    //Javascript
\*------------------------------------*/
// Register some javascript files, because we love javascript files. Enqueue a couple as well
// Reference: wp_register_script( $handle, $src, $deps, $ver, $in_footer );
function load_js_files() {
	if(!is_admin()){
		wp_deregister_script('jquery');
		wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', false, '1.10.1', true);
		wp_register_script('modernizr', get_template_directory_uri() . '/plugins/modernizr/modernizr.js', false, '2.8.3', true);
		wp_register_script('owl-new', get_template_directory_uri() . '/plugins/owl-new/owl-carousel/owl.carousel.min.js', false, '1.0.0', true);
		wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVEfCSeHGUhVRBC7seGQkpnO9ov7RPQbo', false, '3.0.0', true);
		wp_register_script('map', get_template_directory_uri() . '/js/map.min.js', false, '1.0', true);
		wp_register_script('team', get_template_directory_uri() . '/js/team.min.js', false, '1.0', true);
		wp_register_script('scripts', get_template_directory_uri() . '/js/scripts.min.js', false, '1.0', true);
		// Now we can localize the script with our data.
		$translation_array = array( 'theUrl' => get_site_url() );
		wp_localize_script( 'scripts', 'siteUrl', $translation_array );
		
		//Get in line!
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'modernizr' );
		wp_enqueue_script( 'owl-new' );
		wp_enqueue_script( 'scripts' );
		//If necessary, page specific enqueues
		// if ( is_page() ) {

		// }

		// Enable ajax support for comments
		if(is_singular() && comments_open() && get_option('thread_comments')){
		    wp_enqueue_script('comment-reply');
		}
	}
}
add_action( 'wp_enqueue_scripts', 'load_js_files' );

