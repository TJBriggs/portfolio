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
		wp_register_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0','screen, projection' );

		// enqueing:
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
	/**
	 * Register and enqueue a custom stylesheet in the WordPress admin.
	 */
	function wpdocs_enqueue_custom_admin_style() {
		wp_register_style( 'custom_wp_admin_css', get_template_directory_uri() . '/admin-style.css', false, '1.0.0' );
		wp_enqueue_style( 'custom_wp_admin_css' );
	}
	add_action( 'admin_enqueue_scripts', 'wpdocs_enqueue_custom_admin_style' );
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
		wp_register_script('font-awesome', 'https://use.fontawesome.com/b5ae4d476d.js', false, '4.7.0', true);
		wp_register_script('owl', get_template_directory_uri() . '/plugins/owl-carousel/owl-carousel/owl.carousel.min.js', false, '1.0.0', true);
		wp_register_script('inview', get_template_directory_uri() . '/plugins/inview/jquery.inview.min.js', false, '1.0.0', true);
		wp_register_script('scripts', get_template_directory_uri() . '/js/scripts.min.js', null, '1.0', true);

		$translation_array = array(
			'theUrl' => get_site_url()
		);
		wp_localize_script( 'scripts', 'siteUrl', $translation_array );
		wp_enqueue_script('jquery');
		wp_enqueue_script('modernizr');
		wp_enqueue_script('font-awesome');

		gravity_form_enqueue_scripts(1); // fixes js error on contact page
		gravity_form_enqueue_scripts(4, true); // fixes js error on contact page
		wp_enqueue_script('scripts'); // Actually loads the registered script of 'scripts'
	}
}
add_action( 'wp_enqueue_scripts', 'load_js_files' );