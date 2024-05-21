<?php
/**
 * The header for our theme.
 *
 *
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

	<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php //if(get_field('head_scripts', 'option')) : ?>
		<?php //the_field('head_scripts', 'option'); ?>
	<?php //endif; ?>
	<?php wp_head(); //mandatory ?>
</head>

<body <?php body_class('page-'.$post->post_name); ?>>
<?php //if(get_field('open_body_scripts', 'option')) : ?>
	<?php //the_field('open_body_scripts', 'option'); ?>
<?php //endif; ?>
<div class="main-wrap">
	<header class="main-head main-head__landing">
		<div class="main-head__inner">
			<a class="main-head__logo" href="<?php echo get_site_url(); ?>">
				<?php $logo = get_field('header_logo', 'option'); ?>
				<img class="style-svg" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
			</a>
		</div> <!-- // main-head__inner -->
	</header> <!-- // main-head -->
	<?php if( get_template_part('templates/modules/module','hero-block') ) : ?>
		<?php get_template_part('templates/modules/module','hero-block'); ?>
	<?php endif; ?>