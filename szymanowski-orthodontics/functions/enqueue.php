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
		wp_register_style('flexslider', get_template_directory_uri() . '/plugins/flexslider/flexslider.css', array(), '1.0','screen, projection');
		wp_register_style('jquery-ui', get_template_directory_uri() . '/plugins/jquery-ui/jquery-ui.min.css', array(), '1.11.0','screen, projection');
		wp_register_style('fancybox', get_template_directory_uri() . '/plugins/fancybox/source/jquery.fancybox.css', array(), '0.2.0','screen, projection');
		wp_register_style('jquery-ui-theme', get_template_directory_uri() . '/plugins/jquery-ui/jquery-ui.theme.min.css', array(), '1.11.0','screen, projection');
		wp_register_style('pizza', get_template_directory_uri() . '/plugins/pizza-master/dist/css/pizza.css', array(), '0.1.0','screen, projection');
		wp_register_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0','screen, projection' );

		// enqueing:
		wp_enqueue_style( 'flexslider' );
		wp_enqueue_style( 'fancybox' );
		wp_enqueue_style( 'jquery-ui' );
		wp_enqueue_style( 'jquery-ui-theme' );
		wp_enqueue_style( 'pizza' );
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
		wp_register_script('flexslider', get_template_directory_uri() . '/plugins/flexslider/jquery.flexslider-min.js', false, '2.0.0', false);
		wp_register_script('modernizr', get_template_directory_uri() . '/plugins/modernizr/modernizr.js', false, '2.8.3', true);
		wp_register_script('inview', get_template_directory_uri() . '/plugins/inview/jquery.inview.min.js', false, '1.0.0', true);
		wp_register_script('stellar', get_template_directory_uri() . '/plugins/stellar/jquery.stellar.min.js', false, '0.6.2', true);
		wp_register_script('snap', get_template_directory_uri() . '/plugins/Snap.svg-0.3.0/dist/snap.svg-min.js', false, '0.3.0', false);
		wp_register_script('pizza', get_template_directory_uri() . '/plugins/pizza-master/dist/js/pizza.js', false, '0.1.0', false);
		//wp_register_script('addThis', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5400dd274966a64b', false, '0.1.0', true);
		wp_register_script('jquery-ui', get_template_directory_uri() . '/plugins/jquery-ui/jquery-ui.min.js', false, '1.11.0', false);
		wp_register_script('fancybox', get_template_directory_uri() . '/plugins/fancybox/source/jquery.fancybox.js', false, '0.2.0', true);
		wp_register_script('fancy-media', get_template_directory_uri() . '/plugins/fancybox/source/helpers/jquery.fancybox-media.js', false, '0.2.0', true);
		wp_register_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDELdLaKUQCrqCS43f0xYDbOGoX03Vh4LQ&sensor=false', false, '1.10.1', true);
		wp_register_script('map', get_template_directory_uri() . '/js/map.js', false, '1.0', true);
		wp_register_script('scripts', get_template_directory_uri() . '/js/scripts.js', false, '1.0', true);
		// Now we can localize the script with our data.
		$translation_array = array( 'theUrl' => get_site_url() );
		wp_localize_script( 'scripts', 'siteUrl', $translation_array );
		wp_localize_script( 'map', 'siteUrl', $translation_array );

		//Get in line!
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'modernizr' );
		wp_enqueue_script( 'inview' );
		wp_enqueue_script( 'stellar' );
		//wp_enqueue_script( 'addThis' );
		wp_enqueue_script( 'fancybox' );
		wp_enqueue_script( 'fancy-media' );
		wp_enqueue_script( 'gmap' );
		wp_enqueue_script( 'map' );
		wp_enqueue_script( 'scripts' );
		//If necessary, page specific enqueues
		// if ( is_page('') ) {

		// }

		// Enable ajax support for comments
		if(is_singular() && comments_open() && get_option('thread_comments')){
		    wp_enqueue_script('comment-reply');
		}
	}
}
add_action( 'wp_enqueue_scripts', 'load_js_files' );

