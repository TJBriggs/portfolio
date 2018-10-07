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
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VJ6SX5');</script>
<!-- End Google Tag Manager -->
	<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php //if(get_field('head_scripts', 'option')) : ?>
		<?php //the_field('head_scripts', 'option'); ?>
	<?php //endif; ?>
	<?php wp_head(); //mandatory ?>
</head>

<body <?php body_class('page-'.$post->post_name); ?>>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VJ6SX5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<?php //if(get_field('open_body_scripts', 'option')) : ?>
	<?php //the_field('open_body_scripts', 'option'); ?>
<?php //endif; ?>
<div class="main-wrap">
	<header class="main-head">
		<div class="main-head__inner">

			<a class="main-head__logo" href="<?php echo get_site_url(); ?>">
				<?php $logo = get_field('header_logo', 'option'); ?>
				<img class="style-svg" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
			</a>

			<?php
				$cta_text = get_field('header_cta_text', 'option');
				$cta_link = get_field('header_cta_link', 'option');
				if( $cta_text && $cta_link ) :
			?>
				<div class="main-head__cta">
					<a id="main-nav-button-cta" class="btn btn--blue btn--rounded" href="<?php echo $cta_link; ?>"><?php echo $cta_text; ?></a>
				</div>
			<?php endif; ?>

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
			<div class="main-head__trigger-wrap">
				<a href="javascript:void(0);" id="js-nav-trigger" class="main-head__trigger" aria-label="Activate navigation">
					<span><!-- non-semantic (╯°□°）╯︵ ┻━┻ --></span>
					<span><!-- but what can you do? ¯\_(ツ)_/¯  --></span>
					<span><!-- it looks so cool ┻━┻︵ \(°□°)/ ︵ ┻━┻ --></span>
					<span><!-- y u no not use? (ノಠ益ಠ)ノ彡 --></span>
				</a>
			</div>

		</div> <!-- // main-head__inner -->
	</header> <!-- // main-head -->
	<?php if( is_404() ) : ?>
		<?php // Don't load a hero module ?>
	<?php elseif( is_tax('case-studies') || is_post_type_archive('case-studies') || is_singular('case-studies') ) : ?>
		<?php get_template_part('templates/modules/module','hero-block-cs'); ?>
	<?php elseif( is_page(719) || is_single() ) : ?>
		<?php get_template_part('templates/modules/module','hero-block-blog'); ?>
	<?php else : ?>
		<?php get_template_part('templates/modules/module','hero-block'); ?>
	<?php endif; ?>
