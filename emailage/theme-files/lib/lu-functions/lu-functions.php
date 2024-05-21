<?php
/*
 *
 * Lucid Starter Functions
 *
 */
namespace Lib\Lu;

/*------------------------------------*\
    :: ACF Options Page
\*------------------------------------*/   
/*
 * Uncomment code below and update titles to add ACF Options page(s) 
 * These pages are a great place to load logos, social icons, etc
 * A custom field with a rule utilizing the option page is required 
 * https://www.advancedcustomfields.com/resources/options-page/
 */ 
if( function_exists('acf_add_options_page') ) {
    // Section name in sidebar
    $parent = acf_add_options_page(array(
        'page_title'    => 'Global Elements',
        'menu_title'    => 'Global Elements',
        'icon_url' => 'dashicons-admin-site'
    ));
    // Scripts main page
    acf_add_options_page(array(
        'page_title'    => 'Scripts',
        'menu_title'    => 'Scripts',
        'icon_url' => 'dashicons-editor-code'
    ));
    // Optional subpage
    acf_add_options_sub_page(array(
        'page_title'    => 'Header Elements',
        'menu_title'    => 'Header Elements',
        'parent_slug'   => $parent['menu_slug']
    ));
    // Optional subpage
    acf_add_options_sub_page(array(
        'page_title'    => 'Footer Elements',
        'menu_title'    => 'Footer Elements',
        'parent_slug'   => $parent['menu_slug']
    ));
}

/*------------------------------------*\
    :: Password Protect Form
\*------------------------------------*/
function my_password_form() {
    global $post;
    $label = 'pwbox-'.( empty( $post->ID ) ? rand() : $post->ID );
    $o = '<p>Please enter the password to view this page.</p>
    	  <form action="' . esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ) . '" method="post">
    		<label for="' . $label . '">' . __( "Password:<br>" ) . ' </label>
    		<input class="password__box" name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" />
    		<br><input type="submit" name="Submit" value="' . esc_attr__( "Submit" ) . '" />
    	  </form>';
    return $o;
}
add_filter( 'the_password_form', __NAMESPACE__ . '\\my_password_form' );
/*------------------------------------*\
    :: Custom Excerpt Length
\*------------------------------------*/  
function custom_excerpt_length( $length ) {
    return 10;
}
add_filter( 'excerpt_length', __NAMESPACE__ . '\\custom_excerpt_length', 999 ); 

/*------------------------------------*\
    :: Show Future Event Posts
\*------------------------------------*/    
function show_future_posts($posts) {
   global $wp_query, $wpdb;
   if(is_single() && $wp_query->post_count == 0)
   {
      $posts = $wpdb->get_results($wp_query->request);
   }
   return $posts;
}
add_filter('the_posts', __NAMESPACE__ . '\\show_future_posts');

/*------------------------------------*\
    :: Language Switcher Widget
\*------------------------------------*/  
 function wpb_widgets_init() {
    register_sidebar( array(
        'name'          => 'Header Language Switcher',
        'id'            => 'header-language-switcher',
        'before_widget' => '<div class="language-switcher__wrap">',
        'after_widget'  => '</div>'
    ) );
}
add_action( 'widgets_init', __NAMESPACE__ . '\\wpb_widgets_init' );
/*------------------------------------*\
    :: Gravity Form Population
\*------------------------------------*/  
// add_filter( 'gform_field_value_date', 'populate_to' );
// function populate_date( $value ) {
//    return '10/10/2010';
// }  
/*------------------------------------*\
    :: Show Templates
\*------------------------------------*/
/*
 * Uncomment code below to add a bar at the bottom of the page 
 * that shows which template is being used.
 * Great for troubleshooting template heirarchy, etc.
 */
// function show_template() {
//     global $template;
//     $style = '
//         background-color:rgba(0,0,0,1);
//         position:fixed;
//         bottom:0;
//         right:0;
//         left:0;
//         color:#fff;
//         opacity:.6;
//         padding:.5em;
//         font-size:.6em;
//     ';
//     echo '<div style="'.$style.'">'.$template.'</div>';
// }
// add_action('wp_footer', __NAMESPACE__ . '\\show_template');