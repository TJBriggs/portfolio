<?php
/**
 * Header Template
 *
 * @package Mx Blocks
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="apple-mobile-web-app-title" content="Site Name">
		<meta name="application-name" content="Site Name">
		<?php wp_head(); ?>
		<script type='application/ld+json'>
		{
			"@context": "http://www.schema.org",
			"@type": "Organization",
			"name": "Site Name",
			"url": "",
			"logo": "",
			"description": "",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "XXXXXX",
				"addressLocality": "XXXXXX",
				"addressRegion": "XX",
				"postalCode": "XXXXX",
				"addressCountry": "United States of America"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+X(XXX)XXX-XXXX"
			}
		}
	</script>
	</head>
	<body <?php body_class(); ?>>
		<a class="skip-link screen-reader-text" href="#main-content">Skip to content</a>
		<header class="site-header">
			<div class="site-header__inner">
				<div class="site-header__wrap">
					<a href="/" class="site-header__logo">
						<img src="<?php echo get_template_directory_uri(); ?>/dist/images/logos/mx-login-logo.svg" alt="Mx Logo">
					</a>
					<div class="site-header__nav-toggle">
						<a href="JavaScript:void(0);" aria-controls="header-menu" aria-expanded="false"
							aria-label="Menu Toggle">
							Nav Toggle
						</a>
					</div>
					<div class="site-header__nav-wrap">
						<?php
							// Menu automatically wrapped in 'nav' element with a class of site-header__nav
							wp_nav_menu(
								array(
									'menu' => 'Header Menu',
									'container' => 'nav',
									'container_class' => 'site-header__nav',
									'items_wrap' => '<ul id="header-menu" class="site-header__menu" role="menubar">%3$s</ul>'
								)
							);
						?>
					</div>
				</div>
			</div>
		</header>
		<div class="close-menu-overlay"></div>
		<main role="main" class="site-container">
