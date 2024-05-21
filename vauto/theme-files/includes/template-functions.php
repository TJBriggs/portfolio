<?php
/**
 *
 * Default functions which enhance the theme by hooking into WordPress
 *
 * All functions should be prefixed with mx_theme in order to prevent
 * pollution of the global namespace and potential conflicts with functions
 * from plugins.
 * Example: `mx_theme_function()`
 *
 * @package MxTheme\Template_Functions
 *
 */

/**
 *
 * Custom Body Class
 *
 */
function mx_theme_body_class($classes) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}

add_filter( 'body_class', 'mx_theme_body_class' );

/**
 *
 * Add Password Protect Form
 *
 */
function mx_theme_password_form() {
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

add_filter( 'the_password_form', 'mx_theme_password_form' );

/**
 *
 * Custom Login Logo URL
 *
 */
function mx_theme_login_logo_url() {
	return esc_url( home_url( '/' ) );
}

add_filter( 'login_headerurl', 'mx_theme_login_logo_url' );

/**
 *
 * Custom Login URL Title
 *
 */
function mx_theme_login_logo_url_title() {
	return 'mx-theme';
}

add_filter( 'login_headertext', 'mx_theme_login_logo_url_title' );



/**
 *
 * Redirect Mgmt Single Pages
 *
 */
function mx_theme_mgmt_redirects() {
	if ( is_post_type_archive( 'management-team' ) || is_singular( 'management-team' ) ) {
		$target = get_option('siteurl');
		$redirect_url = $target . '/about-vauto/';
		wp_redirect($redirect_url, 301);
	}
}

add_action( 'template_redirect', 'mx_theme_mgmt_redirects' );

/**
 *
 * Adds a bar at the bottom of the page that shows
 * the name of the template being used. Uncomment
 * code below to troubleshoot template issues.
 *
 */

// function mx_theme_show_template() {
// 	global $template;
// 	$style = '
// 		background-color:rgba(0,0,0,1);
// 		position:fixed;
// 		bottom:0;
// 		right:0;
// 		left:0;
// 		color: #FFF;
// 		padding:.5em;
// 		font-size:.6em;
// 		z-index: 99999;
// 	';
// 	echo '<div style="'.$style.'">'.$template.'</div>';
// }

// add_action('wp_footer', 'mx_theme_show_template');
