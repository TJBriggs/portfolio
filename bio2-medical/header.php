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
<html <?php language_attributes(); ?> class="locked">
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
    <?php the_field('before_closing_head', 'option'); ?>
</head>

<body <?php body_class('page-'.$post->post_name); ?>>
<?php the_field('after_opening_body', 'option'); ?>
<div class="hide">
<?php 
    $svgpath = get_template_directory() . "/images/general-sprite/symbol/svg/sprite.symbol.svg"; 
    include_once($svgpath); 
?>
</div> <!-- // hide -->
<div class="wrap-all-the-things">
    <div class="zen-options">
        <a class="zen-icon" href="<?php echo get_site_url(); ?>/patterns/">
            <img src="<?php bloginfo('template_url'); ?>/images/global/zenman_white.png" alt="Zenman Icon" />
        </a> <!-- // phone-icon -->
    </div>
    <div class="site-select">
        <div class="site-select__modal">
            <h1>Where are you viewing this site?</h1>
            <img src="<?php bloginfo('template_url'); ?>/images/global/map.png" " alt="Map of Contents">
            <a class="site-select__btn btn btn--us" href="<?php echo get_site_url(); ?>/?lang=en">United States</a>
            <a class="site-select__btn btn btn--int" href="<?php echo get_site_url(); ?>/?lang=fr">International</a>
        </div>
    </div>
    <header class="main-head">
        <div class="main-head__inner">
            <a class="main-head__logo" href="<?php the_field('logo_link', 'option'); ?>">
                <?php $logo = get_field('logo', 'option'); ?>
                <img src="<?php echo $logo; ?>" alt="Bio2 Medical Logo">
            </a> <!-- // main-head__logo -->
            <a class="main-head__login" href="<?php the_field('login_url', 'option'); ?>">client portal</a> <!-- // main-head__login -->
            <a href="javascript:void(0);" id="js-nav-trigger" class="main-head__trigger" aria-label="Activate navigation">
                <span>Menu</span>
            </a>
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
            </div> <!-- //__nav -->
            <div class="main-head__search">
                <form role="search" method="get" id="searchform" action="<?php echo get_site_url(); ?>">
                    <div class="search-wrap">
                        <input type="search" placeholder="Search" value="" name="s" id="s" autocomplete="off">
                        <input type="submit" id="searchsubmit" value="">
                        <span class="main-head__search-icon"></span>
                    </div>
                </form>
            </div> <!-- //__search -->
        </div> <!-- //__inner -->
    </header> <!-- //main-head -->
    <?php if(is_page(37) || is_page(39)) : ?>
        <?php get_template_part('templates/parts/header','map'); ?>
    <?php else : ?>
        <?php get_template_part('templates/parts/header','hero'); ?>
    <?php endif; ?>