<?php
/**
 *
 * Default functions which enhance the theme by hooking into WordPress
 *
 * All functions should be prefixed with theme_name in order to prevent
 * pollution of the global namespace and potential conflicts with functions
 * from plugins.
 * Example: `theme_name_function()`
 *
 * @package ThemeName\Template_Functions
 *
 */

/**
 *
 * Custom Body Class
 *
 */
function theme_name_body_class($classes) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}

add_filter('body_class', 'theme_name_body_class');

/**
 *
 * Add SVG Support
 *
 */
function theme_name_mime_types( $mimes ) {
	$mimes[ 'svg' ] = 'image/svg+xml';
	return $mimes;
}

add_filter( 'upload_mimes', 'theme_name_mime_types' );

/**
 *
 * Add Password Protect Form
 *
 */
function theme_name_password_form() {
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

add_filter( 'the_password_form', 'theme_name_password_form' );

/**
 *
 * Custom Login Logo URL
 *
 */
function theme_name_login_logo_url() {
	return esc_url( home_url( '/' ) );
}

add_filter( 'login_headerurl', 'theme_name_login_logo_url' );

/**
 *
 * Custom URL Title
 *
 */
function theme_name_login_logo_url_title() {
	return 'Mx Site Theory';
}

add_filter( 'login_headertext', 'theme_name_login_logo_url_title' );

/**
 *
 * Adds a bar at the bottom of the page that shows
 * the name of the template being used. Uncomment
 * code below to troubleshoot template issues.
 *
 */

/* function theme_name_show_template() {
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

add_action('wp_footer', 'theme_name_show_template'); */
