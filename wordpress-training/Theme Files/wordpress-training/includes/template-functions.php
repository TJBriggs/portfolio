<?php
/**
 *
 * Default functions which enhance the theme by hooking into WordPress
 *
 * All functions should be prefixed with wordpress_training in order to prevent
 * pollution of the global namespace and potential conflicts with functions
 * from plugins.
 * Example: `wordpress_training_function()`
 *
 * @package WordpressTraining\Template_Functions
 *
 */

/**
 *
 * Custom Body Class
 *
 */
function wordpress_training_body_class($classes) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}

add_filter('body_class', 'wordpress_training_body_class');

/**
 *
 * Add SVG Support
 *
 */
function wordpress_training_mime_types( $mimes ) {
	$mimes[ 'svg' ] = 'image/svg+xml';
	return $mimes;
}

add_filter( 'upload_mimes', 'wordpress_training_mime_types' );

/**
 *
 * Add Password Protect Form
 *
 */
function wordpress_training_password_form() {
	global $post;
	$label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
	$output = '<form action="' . esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ) . '" method="post">';
	$output .= '<p>' . __( "To view this protected post, enter the password below:" ) . '</p>';
	$output .= '<label for="' . $label . '">' . __( "Password:" ) . ' </label>';
	$output .= '<input name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" />';
	$output .= '<input type="submit" name="Submit" value="' . esc_attr__( "Submit" ) . '" />';
	$output .= '</form>';
	return $output;
}

add_filter( 'the_password_form', 'wordpress_training_password_form' );

/**
 *
 * Custom Login Logo URL
 *
 */
function wordpress_training_login_logo_url() {
	return esc_url( home_url( '/' ) );
}

add_filter( 'login_headerurl', 'wordpress_training_login_logo_url' );

/**
 *
 * Custom URL Title
 *
 */
function wordpress_training_login_logo_url_title() {
	return 'Mx WordPress Training';
}

add_filter( 'login_headertext', 'wordpress_training_login_logo_url_title' );

/**
 *
 * Adds a bar at the bottom of the page that shows
 * the name of the template being used. Uncomment
 * code below to troubleshoot template issues.
 *
 */

/* function wordpress_training_show_template() {
	global $template;
	$style = '
		background-color:rgba(0,0,0,1);
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		color:var(--c-white);
		padding:.5em;
		font-size:.6em;
	';
	echo '<div style="'.$style.'">'.$template.'</div>';
}

add_action('wp_footer', 'wordpress_training_show_template'); */
