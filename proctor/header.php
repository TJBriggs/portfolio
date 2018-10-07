    <?php
/**
 * The header for our theme.
 *
 *
 * @package WordPress
 * @subpackage Zemplate
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

    <?php wp_head(); //mandatory ?>
    <?php //get_template_part('templates/parts/header', 'analytics'); ?>
</head>
<?php 
    # current page slug
    $slug = $post->post_name;

    # get parent page's slug
    $post_data = get_post($post->post_parent);
    $slug = $post_data->post_name;

    if ( $slug == 'what-we-do' ) {
        $sub_page = 'id="what-we-do-sub"';
    }
?>
<body <?php echo $sub_page; ?> <?php body_class('page-'.$post->post_name); ?>>
<div class="hide">
    <?php 
        $svgpath = get_template_directory() . "/svgs/icons/svg-defs.svg"; 
        include_once($svgpath); 
    ?>
</div> <!-- // hide -->
<?php if(!is_page('process')): ?>
    <div class="wrap-all-the-things">
<?php endif;?>
    <header class="main-head">
        <div class="main-head__wrap">
            <div class="main-head__inner">
                <div class="main-head__login">
                    <span class="phone"><a href="tel:303.572.1149">303.572.1149</a></span>
                    <span class="login"><a href="">Log In</a></span>
                </div>
                <div class="main-head__logo">
                    <a href="<?php echo get_site_url(); ?>">
                        <img class="logo--desktop" src="<?php bloginfo('template_url'); ?>/images/global/logo-text.png" alt="Proctor">
                        <img class="logo--mobile" src="<?php bloginfo('template_url'); ?>/images/global/logo.jpg" alt="Proctor">
                    </a>
                </div> <!-- //__logo -->
                <div class="main-head__nav">
                    <div class="nav__activator">
                        <a class="icon" href="javascript:void(0)">menu</a>
                    </div>
                    <div class="head-nav__wrap">
                    <div class="icon icon--cancel"><span class="screen-reader-text" aria-hidden="true">X</span></div>
                        <?php
                            $attr = array(
                                'theme_location'  => 'head-menu',
                                'container'       => 'nav',
                                'container_class' => 'head-nav',
                                'menu_class'      => 'menu'
                            );
                            wp_nav_menu($attr);
                        ?>
                    </div> <!-- //head-nav__wrap -->
                </div> <!-- //main-head__nav -->
            </div> <!-- //__inner -->
        </div>
        <?php if(get_field('hero_content')) : ?>
            <?php get_template_part('templates/parts/header','hero'); ?>
        <?php elseif(is_page(25)) : ?>
            <?php get_template_part('templates/parts/header','map'); ?>
        <?php endif; ?>
    </header> <!-- //main-head -->
