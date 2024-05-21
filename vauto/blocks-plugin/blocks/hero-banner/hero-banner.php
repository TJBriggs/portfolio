<?php
/**
 * Plugin Name:       Hero Banner
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_hero_banner_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/hero-banner-pattern',
		array(
			'title' => __( 'Hero Banner', 'mx-blocks-plugin' ),
			'categories' => [ 'hero-blocks' ],
			'content' => "<!-- wp:mx/hero-banner {\"gradient\":\"orange-gradient\"} -->
			<section class=\"wp-block-mx-hero-banner hero-banner has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><div class=\"hero-banner__shmedium-inner\"><!-- wp:group {\"className\":\"hero-banner__copy\"} -->
			<div class=\"wp-block-group hero-banner__copy\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":5,\"placeholder\":\"Centered Subheading\",\"textColor\":\"white\",\"className\":\"hero-banner__subheading thinweight uppercase\"} -->
			<h5 class=\"has-text-align-center hero-banner__subheading thinweight uppercase has-white-color has-text-color\">H5 - Thin All Caps</h5>
			<!-- /wp:heading -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":1,\"placeholder\":\"Centered Heading\",\"textColor\":\"white\",\"className\":\"hero-banner__heading\"} -->
			<h1 class=\"has-text-align-center hero-banner__heading has-white-color has-text-color\">Heading 1</h1>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.\",\"textColor\":\"white\",\"className\":\"hero-banner__text\"} -->
			<p class=\"has-text-align-center hero-banner__text has-white-color has-text-color\">Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div></section>
			<!-- /wp:mx/hero-banner -->",
		)
	);

	register_block_pattern(
		'mx/hero-banner-no-sub-pattern',
		array(
			'title' => __( 'Hero Banner - No Subheading', 'mx-blocks-plugin' ),
			'categories' => [ 'hero-blocks' ],
			'content' => "<!-- wp:mx/hero-banner {\"gradient\":\"orange-gradient\"} -->
			<section class=\"wp-block-mx-hero-banner hero-banner has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><div class=\"hero-banner__shmedium-inner\"><!-- wp:group {\"className\":\"hero-banner__copy\"} -->
			<div class=\"wp-block-group hero-banner__copy\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":1,\"placeholder\":\"Centered Heading\",\"textColor\":\"white\",\"className\":\"hero-banner__heading\"} -->
			<h1 class=\"has-text-align-center hero-banner__heading has-white-color has-text-color\">Heading 1</h1>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.\",\"textColor\":\"white\",\"className\":\"hero-banner__text\"} -->
			<p class=\"has-text-align-center hero-banner__text has-white-color has-text-color\">Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div></section>
			<!-- /wp:mx/hero-banner -->",
		)
	);

	register_block_pattern(
		'mx/hero-banner-no-text-pattern',
		array(
			'title' => __( 'Hero Banner - No Description', 'mx-blocks-plugin' ),
			'categories' => [ 'hero-blocks' ],
			'content' => "<!-- wp:mx/hero-banner {\"gradient\":\"orange-gradient\"} -->
			<section class=\"wp-block-mx-hero-banner hero-banner has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><div class=\"hero-banner__shmedium-inner\"><!-- wp:group {\"className\":\"hero-banner__copy\"} -->
			<div class=\"wp-block-group hero-banner__copy\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":5,\"placeholder\":\"Centered Subheading\",\"textColor\":\"white\",\"className\":\"hero-banner__subheading thinweight uppercase\"} -->
			<h5 class=\"has-text-align-center hero-banner__subheading thinweight uppercase has-white-color has-text-color\">H5 - Thin All Caps</h5>
			<!-- /wp:heading -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":1,\"placeholder\":\"Centered Heading\",\"textColor\":\"white\",\"className\":\"hero-banner__heading\"} -->
			<h1 class=\"has-text-align-center hero-banner__heading has-white-color has-text-color\">Heading 1</h1>
			<!-- /wp:heading --></div>
			<!-- /wp:group --></div></section>
			<!-- /wp:mx/hero-banner -->",
		)
	);
}
add_action( 'init', 'mx_hero_banner_init' );
