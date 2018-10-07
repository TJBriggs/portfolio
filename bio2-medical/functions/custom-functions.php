<?php
/*
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 1.0
 *
 * Theme-specific functions and definitions
 *
 * Use this file to set up any theme-specific functions you'd like to use
 * in the current theme.
 */
/*------------------------------------*\
    ::Add Background Images
    ----------------------------------*
    Usage:

        For responsive background images, use an array containing
        breakpoints and image paths. Remember the cascade!

        To just add a single, non-responsive image (e.g. an SVG), use a
        string instead of an array with just the image path, no breakpoints.

        You can also pass in 'pseudo' => ':before' or any other pseudo
        selector (:after, :hover, etc.) if you'd like, but it's optional.

        Avoid styling the .disambiguate-x classes directly; add another class
        and target that (or its pseudo selectors as the case may be).

        Example:
        <?php
            // get the image object
            $image_array = get_field('background_image');

            // establish the breakpoints/images (and optionally pseudo selector)
            $attr = array(
                'images' => array(
                    '(min-width: 801px)' => $image_array['sizes']['big'],
                    '(max-width: 800px)'  => $image_array['sizes']['smaller'],
                )
            );

            // execute the function and store the resulting array
            $bg_image = bg_image($attr);
        ?>
        <div class="hero <?php echo $bg_image['class']; // echo the disambiguated selector ?>">
            <?php echo $bg_image['styles']; // echo the <style> tag ?>
            <span>You're My Hero!</span>
        </div>

\*------------------------------------*/
function bg_image($attr) {
    // set an unique increment variable if it's not already set
    if(!isset($GLOBALS['disambiguation_incrament'])){
        $GLOBALS['disambiguation_incrament'] = 0;
    }
    // store the unique number after incrementing
    $unique_number = ++$GLOBALS['disambiguation_incrament'];

    // build the styles
    $styles  = '<style>';

        // if this is an array of sizes than set up breakpoints
        if(is_array($attr['images'])){
            // loop through images and insert into respective breakpoints
            foreach($attr['images'] as $bp => $src){
                // disambiguate the selector for multiples per-page
                $selector = '.disambiguate-' . $unique_number . $attr['pseudo'];
                // add the query
                $styles .= "\n@media ". $bp ." {";
                    $styles .= "\n\t" . $selector . "{\n\t\tbackground-image:url(\"" . $src . "\");\n\t}\n";
                $styles .= "}";
                $i++;
            }
        // if this is a string
        } else {
            // disambiguate the selector for multiples per-page
            $selector = '.disambiguate-' . $unique_number  . $attr['pseudo'];
            // just set up one image without breakpoints
            $styles .= $selector . "{\n\tbackground-image:url(\"" . $attr['images'] . "\");\n}";
        }
    $styles .= '</style>';

    // set up the return array
    $return_array = array(
        'class' => "disambiguate-$unique_number",
        'styles' => $styles
    );
    // return the styles
    return $return_array;
}
/*------------------------------------*\
    ::Add options page
\*------------------------------------*/
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Global Elements',
        'menu_title'    => 'Global Elements',
        'menu_slug'     => 'global-element-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}
/*------------------------------------*\
    ::  Fix Relevanssi with Yoast
\*------------------------------------*/ 
add_filter('relevanssi_modify_wp_query', 'rlv_meta_fix', 99);
function rlv_meta_fix($q) {
    $q->set('meta_query', '');
    return $q;
}   
/*------------------------------------*\
    ::Custom Scripts
    version: 1.0
    ----------------------------------
    Useful for adding 3rd party scripts
    like analytics.

    Usage:
    Add this to header.php right before
    the closing </head> tag:

    <?php the_field('before_closing_body', 'option'); ?>

    Add this to header.php right after
    the opening <body> tag:

    <?php the_field('after_opening_body', 'option'); ?>


    Add this to footer.php right before
    the closing </body> tag:

    <?php the_field('before_closing_body', 'option'); ?>


    Add the following code including this
    comment to your functions.php file.
    A new Custom Scripts menu item
    will appear in the WordPress sidebar
    where you can add your custom scripts.

\*------------------------------------*/
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Custom Scripts',
        'menu_title'    => 'Custom Scripts',
        'menu_slug'     => 'custom-scripts',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
    'key' => 'group_56eaaf410d8a4',
    'title' => 'Custom Scripts',
    'fields' => array (
        array (
            'key' => 'field_56eaaf69ba041',
            'label' => 'Description',
            'name' => '',
            'type' => 'message',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '<span style="color:red">For advanced users only.</span> These fields allow you to add custom code to common spots on your website. If handled improperly, changing these settings could break your site: edit with caution.',
            'new_lines' => 'wpautop',
            'esc_html' => 0,
        ),
        array (
            'key' => 'field_56eab060cc22d',
            'label' => 'Before Closing < / head >',
            'name' => 'before_closing_head',
            'type' => 'textarea',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '<!-- your code would go here --> </head>',
            'maxlength' => '',
            'rows' => '',
            'new_lines' => '',
            'readonly' => 0,
            'disabled' => 0,
        ),
        array (
            'key' => 'field_56eab09ccc22e',
            'label' => 'After Opening < body >',
            'name' => 'after_opening_body',
            'type' => 'textarea',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '<body> <!-- your code would go here -->',
            'maxlength' => '',
            'rows' => '',
            'new_lines' => '',
            'readonly' => 0,
            'disabled' => 0,
        ),
        array (
            'key' => 'field_56eab0b6cc22f',
            'label' => 'Before Closing < / body >',
            'name' => 'before_closing_body',
            'type' => 'textarea',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '<!-- your code would go here --> </body>',
            'maxlength' => '',
            'rows' => '',
            'new_lines' => '',
            'readonly' => 0,
            'disabled' => 0,
        ),
    ),
    'location' => array (
        array (
            array (
                'param' => 'options_page',
                'operator' => '==',
                'value' => 'custom-scripts',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => 1,
    'description' => '',
));
endif;

/*------------------------------------*\
    ::Button Shortcode
\*------------------------------------*/
//Usage: [button link='http://example.com' name='My Button' target='New Tab']
function btn_shortcode($attr) {
    extract(shortcode_atts(array(
        'link' => '#',
        'name' => 'Learn More',
        'new_window' => '',
        'style' => '',
        'classes' => ''
    ), $attr));
    $new_window = $new_window == '' ? '' : ' target="_blank"';
    if($style == ''){
        $classes .= ' btn';
    } else {
        $classes .= ' btn--'.$style;
    }
    return '<a href="'.$link.'" class="'.$classes.'"'.$same_window.'>'.$name.'</a>';
}
add_shortcode('button', 'btn_shortcode');

/*------------------------------------*\
    ::Allow SVG/vCard Uploads
\*------------------------------------*/
function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['vcf'] = 'text/x-vcard';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

/*------------------------------------*\
    ::Show Sub Page Nav for All the Things

    Basic usage:         [pagelist]
    Fixed usage:         [pagelist fixed="x-y"]

    Fixed examples:
    right top:     [pagelist fixed="right-top"]
    bottom left:   [pagelist fixed="left-bottom"]
    note: x comes before y always
//
\*------------------------------------*/
function page_list_shortcode($attr) {
    extract(shortcode_atts(array(
        'fixed' => ''
    ), $attr));
    $args = array(
        'post_type'         => 'all-the-things',
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
                    <a href="'.site_url('/all-the-things/').'">All the Things</a>
                </li>
            </ul>';


        return $str;
    }
}
add_shortcode('pagelist', 'page_list_shortcode'); 
/*---------------------------------------*\
    ::  Limit title length in blog feed
\*---------------------------------------*/
function tow_title($charlength) {
    $title_raw = get_the_title();
    $title = strip_tags($title_raw);
    $charlength++;
    if(strlen($title)>$charlength) {
        $subex = substr($title,0,$charlength-5);
        $exwords = explode(" ",$subex);
        $excut = -(strlen($exwords[count($exwords)-1]));
    if($excut<0) {
        echo substr($subex,0,$excut);
    } else {
        echo $subex;
    }
        echo "...";
    } else {
        echo $title;
    }
}
/*---------------------------------------*\
    ::  Limit excerpt length in blog feed
\*---------------------------------------*/
function tow_excerpt($charlength) {
    $excerpt = get_the_excerpt();
    $charlength++;
    if(strlen($excerpt)>$charlength) {
        $subex = substr($excerpt,0,$charlength-5);
        $exwords = explode(" ",$subex);
        $excut = -(strlen($exwords[count($exwords)-1]));
    if($excut<0) {
        echo substr($subex,0,$excut);
    } else {
        echo $subex;
    }
        echo "...";
    } else {
        echo $excerpt;
    }
}
/*--------------------------------------------*\
    ::  Limit excerpt length in careers feed
\*--------------------------------------------*/
function tow_career($charlength) {
    $excerpt = get_field('post_content');
    $charlength++;
    if(strlen($excerpt)>$charlength) {
        $subex = substr($excerpt,0,$charlength-5);
        $exwords = explode(" ",$subex);
        $excut = -(strlen($exwords[count($exwords)-1]));
    if($excut<0) {
        echo substr($subex,0,$excut);
    } else {
        echo $subex;
    }
        echo "...";
    } else {
        echo $excerpt;
    }
}
/*------------------------------------*\
    :: Add Search box to Navigation 
\*------------------------------------*/  
add_filter('wp_nav_menu_items','add_search_box', 10, 2);
function add_search_box($items, $args) {

        ob_start();
        get_search_form();
        $searchform = ob_get_contents();
        ob_end_clean();

        $items .= '<li class="nav-search">' . $searchform . '</li>';

    return $items;
}
/*------------------------------------*\
    ::  Load Login Page Styles
\*------------------------------------*/   
function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/style-login.css' );
    wp_enqueue_script( 'custom-login', get_stylesheet_directory_uri() . '/style-login.js' );
}
add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );