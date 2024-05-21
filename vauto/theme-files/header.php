<?php
/**
 * Header Template
 *
 * @package mx-theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="apple-touch-icon" sizes="180x180" href="/wp-content/themes/vauto/dist/images/logos/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/wp-content/themes/vauto/dist/images/logos/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/wp-content/themes/vauto/dist/images/logos/favicon-16x16.png">
		<link rel="manifest" href="/wp-content/themes/vauto/dist/images/logos/site.webmanifest">
		<link rel="mask-icon" href="/wp-content/themes/vauto/dist/images/logos/safari-pinned-tab.svg" color="var(--wp--preset--color--brand-1)">
		<meta name="msapplication-TileColor" content="var(--wp--preset--color--white)">
		<meta name="msapplication-config" content="/wp-content/themes/vauto/dist/images/logos/browserconfig.xml">
		<meta name="theme-color" content="var(--wp--preset--color--white)">
		<meta name="apple-mobile-web-app-title" content="vAuto">
		<meta name="application-name" content="vAuto">
		<?php wp_head(); ?>
		<script type='application/ld+json'>
		{
			"@context": "http://www.schema.org",
			"@type": "Organization",
			"name": "vauto.com",
			"url": "https://vauto.com",
			"logo": "",
			"description": "",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "1901 S. Meyers Rd., Suite 700",
				"addressLocality": "Oakbrook Terrace",
				"addressRegion": "IL",
				"postalCode": "60181",
				"addressCountry": "United States of America"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+1(866)402-6582"
			}
		}
		</script>
		<!-- Google Tag Manager -->

		<!-- End Google Tag Manager -->
	</head>
	<body <?php body_class(); ?>>
		<!-- Google Tag Manager (noscript) -->

		<!-- End Google Tag Manager (noscript) -->
		<div class="site-container">
			<a class="skip-link screen-reader-text" href="#main-content"><?php esc_html_e( 'Skip to content', 'mx-theme' ); ?></a>
			<header class="site-header">
				<div class="upper-header">
					<div class="upper-header__default-inner">
						<div class="upper-header__nav">
							<?php wp_nav_menu(
								array(
									'menu' => 'Utility Menu - Links',
									'container' => 'nav',
								)
							); ?>
							<div class="upper-header__search">
								<?php get_search_form(); ?>
							</div>
							<?php wp_nav_menu(
								array(
									'menu' => 'Utility Menu - Buttons',
									'container' => 'nav',
								)
							); ?>
							</ul>
						</div>
					</div>
				</div>
				<div class="lower-header">
					<div class="lower-header__default-inner">
						<div class="lower-header__wrap">
							<a class="lower-header__logo" href="<?php echo esc_url( get_home_url() ); ?>">
								<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/logos/logo-color.svg" alt="vAuto Logo">
							</a>
							<div class="lower-header__nav-wrap">
								<?php wp_nav_menu( array( 'menu' => 'Utility Menu', 'theme_location' => 'utility-menu' ) ); ?>
								<?php wp_nav_menu( array( 'menu' => 'Header Menu', 'theme_location' => 'header-primary' ) ); ?>
							</div>
						</div>
					</div>
				</div>
				<div class="close-menu-overlay"></div>
			</header>
			<main role="main" class="site-torso">
