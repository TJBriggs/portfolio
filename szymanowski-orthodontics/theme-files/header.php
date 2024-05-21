    <?php
/**
 * The header for our theme.
 *
 *
 * @package WordPress
 * @subpackage 
 * @since Zemplate 2.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <!--[if lt IE 9]>
        <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!--[if IE 9]>
        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/ie9.css" />
    <![endif]-->

    <?php wp_head(); //mandatory ?>
    <?php get_template_part('templates/parts/header', 'analytics'); ?>
</head>
<?php 
    # current page slug
    $slug = $post->post_name;

    # get parent page's slug
    $post_data = get_post($post->post_parent);
    $slug = $post_data->post_name;

    if ( $slug == 'treatments' ) {
        $sub_page = "treatments-sub";
    }
?>

<body id="<?php echo $sub_page; ?>" <?php body_class('page-'.$post->post_name); ?>>

<div class="hide">
    <?php 
        $svgpath = get_template_directory() . "/images/icons/svg-defs.svg"; 
        include_once($svgpath); 
    ?>
</div> <!-- // hide -->
<div class="wrap-all-the-things"> <!-- Closed in footer.php -->
    <header class="main-head">
        <div class="main-head__inner">
            <div class="phone"><a href="tel:916.993.4171">916.993.4171</a></div>
            <div class="login"><a href="http://www.anywheredolphin.com/" target="_blank">login</a></div>
            <div class="logo">
                <a href="<?php echo site_url(); ?>">
                    <object>
                        <svg class="icon shape-logo">
                            <use xlink:href="#shape-logo-main"></use>
                        </svg>
                    </object>
                </a>
            </div> <!-- // logo -->
            <div class="sticky-nav-logo"><a href="<?php echo site_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/images/global/sticky-logo.png" alt="Szymanowski orthodontics"></a></div>
            <div class="mobile-logo">
                <a href="<?php echo site_url(); ?>">
                    <object>
                        <svg class="icon shape-mark">
                            <use xlink:href="#shape-mark"></use>
                        </svg>
                    </object>
                </a> <!-- //link wrapping logo svg --> 
            </div> <!-- //mobile-logo --> 
            <!-- <div class="m-nav"></div> --> <!-- hamburger icon --> 
            <p class="m-nav"><a href="#" ><span class="hamburger"></span><span class="screen-reader-text">Menu</span></a></p>
            <div class="main-head__nav">
                <?php
                    $attr = array(
                        'theme_location'  => 'head-menu',
                        'container'       => 'nav',
                        'container_class' => 'head-nav',
                        'menu_class'      => 'menu'
                    );
                    wp_nav_menu($attr);
                ?>
            </div> <!-- //main-head__nav --> 
        </div> <!-- //__inner --> 
    </header> <!-- //main-head -->
    <?php if(get_field('masthead_content')) : ?>
        <div class="fixed-cta__wrap">

            <a class="fixed-cta__btn" href="<?php echo site_url(); ?>/contact-us">
                <span class="cta-icon">
                    <object>
                        <svg class="icon shape-mark-white">
                            <use xlink:href="#shape-mark-white"></use>
                        </svg>
                    </object>
                </span>
                <span class="cta_text">get started<span>
            </a><!-- // fixed__cta -->
        </div><!-- //fixed-cta__wrap -->
        <?php get_template_part('templates/parts/header','masthead'); ?>
    <?php elseif(is_page('contact-us')) : ?>
        <?php get_template_part('templates/parts/header','map'); ?>
    <?php endif; ?>