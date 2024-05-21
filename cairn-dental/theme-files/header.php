
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
<body <?php body_class('page-'.$post->post_name); ?>>
<?php get_template_part('templates/parts/header', 'social'); ?>
<div class="hide">
    <?php 
        $svgpath = get_template_directory() . "/images/general-sprite/symbol/svg/sprite.symbol.svg"; 
        include_once($svgpath); 
    ?>
</div> <!-- // hide -->
<div class="wrap-all-the-things">
    <header class="main-head">
        <div class="main-head__border">
            <div class="main-head__inner">
                <a class="main-head__logo" href="<?php echo get_site_url(); ?>">
                    <?php $logo = get_field('header_logo', 'option'); ?>
                    <img src="<?php echo $logo; ?>" alt="Cairn Dental Logo">
                </a> <!-- // main-head__logo -->
                <?php
                    $phone = get_field('phone_number', 'option');
                    $phone_numbers = preg_replace('/[^0-9]/', '', $phone); 
                    $client_link = get_field('client_login_link', 'option');
                    $agency_link = get_field('agency_login_link', 'option');
                ?>
                <a class="main-head__phone" href="tel:<?php echo $phone_numbers; ?>"><?php echo $phone; ?></a>
                <a href="javascript:void(0);" id="js-nav-trigger" class="main-head__trigger" aria-label="Activate navigation">
                    <span><!-- non-semantic (╯°□°）╯︵ ┻━┻ --></span>
                    <span><!-- but what can you do? ¯\_(ツ)_/¯  --></span>
                    <span><!-- it looks so cool ┻━┻︵ \(°□°)/ ︵ ┻━┻ --></span>
                    <span><!-- y u no not use? (ノಠ益ಠ)ノ彡 --></span>
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
                </div>
            </div> <!-- //__inner -->
        </div>
    </header> <!-- //main-head -->
    <?php if(is_page(37)) : ?>
        <?php get_template_part('templates/parts/header','map'); ?>
    <?php elseif(is_404()) : ?>
        <section class="hero-block hero-block--static hero-404" style="background-image: url(<?php echo get_template_directory_uri(); ?>/images/global/hero-404.jpg)"></section> <!-- // hero-block --> 
    <?php elseif(!is_single()) : ?>
        <?php get_template_part('templates/parts/header','hero'); ?>
    <?php endif; ?>
