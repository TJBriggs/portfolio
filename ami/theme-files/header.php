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
    <?php get_template_part('templates/parts/header', 'analytics'); ?>
</head>

<body <?php body_class('page-'.$post->post_name); ?>>
<div class="hide">
    <?php 
        $svgpath = get_template_directory() . "/images/general-sprite/symbol/svg/sprite.symbol.svg"; 
        include_once($svgpath); 
    ?>
</div> <!-- // hide -->
<div class="wrap-all-the-things">
    <header class="main-head">
        <div class="main-head__inner">
            <a class="main-head__logo" href="<?php echo get_site_url(); ?>">
                <object>
                    <svg class="logo-head">
                      <use xlink:href="#logo-head"></use>
                    </svg>
                </object>
            </a> <!-- // main-head__logo -->
            <div class="main-head__utility-nav">
                <?php
                    $phone = get_field('head_phone_number', 'option');
                    $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                    $client_link = get_field('client_login_link', 'option');
                    $agency_link = get_field('agency_login_link', 'option');
                ?>
                <a class="phone-number" href="tel:<?php echo $phone_numbers; ?>">
                    <span class="phone-icon">
                        <object>
                            <svg class="phone">
                                <use xlink:href="#phone"></use>
                            </svg>
                        </object>
                    </span>
                    <span class="number-text"><?php echo $phone; ?></span>
                </a>
                <a class="client-login" href="<?php echo $client_link; ?>">Client Login</a>
                <a class="agency-login" href="<?php echo $agency_link; ?>">Agency Login</a>
            </div> <!-- // main-head__utility-nav -->
            <div class="main-head__m-nav"><a class="btn--m-nav" href="javascript:void(0)" ><span class="screen-reader-text">Menu</span><span class="hamburger"></span></a></div> <!-- hamburger icon --> 
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
            </div> <!-- // main-head__nav -->
        </div> <!-- // main-head__inner -->
    </header> <!-- //main-head -->
    <?php if(is_page(15)) : ?>
        <?php get_template_part('templates/parts/header','map'); ?> 
    <?php elseif(is_single()) : ?> 
        <?php get_template_part('templates/parts/header','post-hero'); ?>
    <?php else : ?>
        <?php get_template_part('templates/parts/header','hero'); ?>
    <?php endif; ?>