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
/*-----------------------------------------*\
    :: Show Sub Page Nav for Patterns
\*-----------------------------------------*/
function page_list_shortcode($attr) {
    extract(shortcode_atts(array(
        'fixed' => ''
    ), $attr));
    $args = array(
        'post_type'         => 'patterns',
        'posts_per_page'    => '-1',
        'orderby'           => 'title',
        'order'             => 'ASC'
    );
    $the_query = new WP_Query($args);
    $list = '';
    if ($the_query->have_posts()) {
        $list .= '<ul>';
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $list .= '<li>';
                $list .= '<a href="'.get_the_permalink().'">';
                    $list .= get_the_title();
                $list .= '</a>';
            $list .= '</li>';

        }
        $list .= '</ul>';
    }
    wp_reset_postdata();
  if($list) {
    $r = rand();
    if($fixed != ''){
        $fixed_arr = explode('-', $fixed);
        $fixed = '#things-list-'.$r.' {
                        position: fixed;
                        '.$fixed_arr[0].': 0;
                        '.$fixed_arr[1].': 0;
                        opacity: .4;
                        transition: opacity 300ms;
                    }
                    #things-list-'.$r.':hover ul:before {
                        content: "";
                        position: absolute;
                        background-color: black;

                        '.$fixed_arr[0].': 0;
                        '.$fixed_arr[1].': 0;
                        z-index: -1;
                        opacity: 0;
                    }
                    #things-list-'.$r.':hover {
                        opacity: 1;
                    }';
    }
    $str =  '<ul id="things-list-'.$r.'">
                <style scoped>
                    #things-list-'.$r.' {
                        position: relative;
                        z-index: 9999;
                        font-size: 12px;
                        box-shadow: 0 0 2px white, 0 0 2px black;
                    }
                    #things-list-'.$r.' li {
                        list-style: none !important;
                        padding: 0;
                        margin: 0;
                    }
                    #things-list-'.$r.' li:before {
                        display: none;
                    }
                    #things-list-'.$r.', #things-list-'.$r.' ul {
                        margin: 0;
                        padding: 0;
                        width: 150px;
                        background: rgba(50,50,50,.6);
                    }
                    #things-list-'.$r.' a {
                        display: block;
                        width: 100%;
                        padding: 5px;
                        color: #fff;
                        text-decoration: none;
                        transition: color 300ms;
                    }
                    #things-list-'.$r.' a:hover {
                        background-color: #000;
                    }
                    #things-list-'.$r.' a:hover {
                        color: white;
                    }
                    #things-list-'.$r.' li ul {
                        display: none;
                        position: relative;
                    }
                    #things-list-'.$r.' li:hover ul {
                        display: block;
                    }
                    #__bs_notify__ {
                        opacity: .2 !important;
                        background-color: teal !important;
                        font-size: .5em !important;
                        padding: .7em !important;
                    }
                    '.$fixed.'
                </style>
                <li>
                    '.$list.'
                    <a href="'.site_url('/patterns/').'">Patterns</a>
                </li>
            </ul>';


        return $str;
    }
}
add_shortcode('pagelist', 'page_list_shortcode');
/*------------------------------------*\
    :: Google Maps API Key for ACF Pro
\*------------------------------------*/     
function my_acf_init() {
    acf_update_setting('google_api_key', 'AIzaSyDoJrg1OxyfKMhhZUY9lArcC_YNghN6EdY');
}
add_action('acf/init', __NAMESPACE__ . '\\my_acf_init');

/*------------------------------------*\
    :: Sort Additional Projects
\*------------------------------------*/    
add_action( 'wp_ajax_nopriv_sort_projects', __NAMESPACE__ . '\\sort_projects' );   
add_action( 'wp_ajax_sort_projects', __NAMESPACE__ . '\\sort_projects' );  
function sort_projects() {  
    get_template_part('templates/components/portfolio', 'additional-projects');
    die;
}
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
//         opacity:.9;
//         padding:.5em;
//         font-size:.6em;
//     ';
//     echo '<div style="'.$style.'">'.$template.'</div>';
// }
// add_action('wp_footer', __NAMESPACE__ . '\\show_template');