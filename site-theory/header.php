<?php
/**
 * Header Template
 *
 * @package Mx Blocks
 */
$layout_option = get_theme_mod( 'header_layout', 'default' );
$header_logo_id = get_option( 'header_logo' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="<?php echo esc_attr( $layout_option ); ?>">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( home_url() ); ?>/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( home_url() ); ?>/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( home_url() ); ?>/favicon-16x16.png">
		<link rel="manifest" href=<?php echo esc_url( home_url() ); ?>"/site.webmanifest">
		<link rel="mask-icon" href="<?php echo esc_url( home_url() ); ?>/safari-pinned-tab.svg" color="#d55ba7">
		<meta name="apple-mobile-web-app-title" content="Site Name">
		<meta name="application-name" content="Site Name">
		<script src="https://kit.fontawesome.com/b390050450.js" crossorigin="anonymous"></script>
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
		<?php do_action( 'after_body' ); ?>
		<a class="skip-link screen-reader-text" href="#main-content">Skip to content</a>
		<header class="site-header <?php echo esc_attr( $layout_option ); ?>">
			<?php if( $layout_option === 'layout-1' || $layout_option === 'layout-3' ) : ?>
				<div class="site-header__utility">
					<div class="site-header__inner">
						<?php
							// Menu automatically wrapped in 'nav' element with a class of site-header__nav
							wp_nav_menu(
								array(
									'menu' => 'Utility Menu',
									'container' => 'nav',
									'container_class' => 'site-header__utility-nav',
									'items_wrap' => '<ul id="utility-menu" class="site-header__utility-menu" role="menubar">%3$s</ul>'
								)
							);
						?>
					</div>
				</div>
			<?php endif; ?>
			<div class="site-header__main">
				<div class="site-header__inner">
					<?php if( $layout_option === 'default' || $layout_option === 'layout-1' ) : ?>
						<?php $button_toggle = get_theme_mod( 'button_toggle', false ); ?>
						<div class="site-header__main-wrap header-layout-1">
							<a class="site-header__logo-wrap" href="<?php echo get_site_url(); ?>">
								<img class="site-header__logo" src="<?php echo wp_get_attachment_url( $header_logo_id ); ?>" alt="Site Logo">
							</a>
							<div class="site-header__toggle-wrap">
								<a class="site-header__nav-toggle" href="JavaScript:void(0);" aria-controls="header-menu" aria-expanded="false" aria-label="Menu Toggle">
									<span><!-- non-semantic (╯°□°）╯︵ ┻━┻ --></span>
									<span><!-- but what can you do? ¯\_(ツ)_/¯  --></span>
									<span><!-- it looks so cool ┻━┻︵ \(°□°)/ ︵ ┻━┻ --></span>
									<span><!-- y not use? (ノಠ益ಠ)ノ彡 --></span>
								</a>
							</div>
							<div class="site-header__nav-wrap<?php echo ( $button_toggle ? ' nav-with-button' : '' ); ?>">
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
								<?php if( $layout_option === 'layout-1' ) : ?>
									<div class="site-header__mobile-links">
										<?php
											// Menu automatically wrapped in 'nav' element with a class of site-header__nav
											wp_nav_menu(
												array(
													'menu' => 'Utility Menu',
													'container' => 'nav',
													'container_class' => 'site-header__mobile-utility',
													'items_wrap' => '<ul id="mobile-utility__menu" class="site-header__mobile-menu" role="menubar">%3$s</ul>'
												)
											);
										?>
									</div>
								<?php endif; ?>
							</div>
						</div>
					<?php else : ?>
						<div class="site-header__main-wrap header-layout-2" data-logo-src="<?php echo wp_get_attachment_url( $header_logo_id ); ?>">
							<div class="site-header__mobile-wrap">
								<a class="site-header__logo-wrap" href="<?php echo get_site_url(); ?>">
									<img class="site-header__logo" src="<?php echo wp_get_attachment_url( $header_logo_id ); ?>" alt="Site Logo">
								</a>
								<div class="site-header__toggle-wrap">
									<a class="site-header__nav-toggle" href="JavaScript:void(0);" aria-controls="header-menu" aria-expanded="false" aria-label="Menu Toggle">
										<span><!-- non-semantic (╯°□°）╯︵ ┻━┻ --></span>
										<span><!-- but what can you do? ¯\_(ツ)_/¯  --></span>
										<span><!-- it looks so cool ┻━┻︵ \(°□°)/ ︵ ┻━┻ --></span>
										<span><!-- y not use? (ノಠ益ಠ)ノ彡 --></span>
									</a>
								</div>
							</div>
							<div class="site-header__nav-wrap">
								<?php
									// Menu automatically wrapped in 'nav' element with a class of site-header__nav
									wp_nav_menu(
										array(
											'menu' => 'Header Menu 2',
											'container' => 'nav',
											'container_class' => 'site-header__nav',
											'items_wrap' => '<ul id="header-menu" class="site-header__menu" role="menubar">%3$s</ul>'
										)
									);
								?>
								<?php if( $layout_option === 'layout-3' ) : ?>
									<div class="site-header__mobile-links">
										<?php
											// Menu automatically wrapped in 'nav' element with a class of site-header__nav
											wp_nav_menu(
												array(
													'menu' => 'Utility Menu',
													'container' => 'nav',
													'container_class' => 'site-header__mobile-utility',
													'items_wrap' => '<ul id="mobile-utility__menu" class="site-header__mobile-menu" role="menubar">%3$s</ul>'
												)
											);
										?>
									</div>
								<?php endif; ?>
							</div>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</header> <!-- site-header -->
		<div class="menu-overlay"></div>
		<main role="main" class="site-container">
