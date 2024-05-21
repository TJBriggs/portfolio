<?php
/**
 * Plugin Name:       Callout Bar
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_callout_bar_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/callout-bar-pattern',
		array(
			'title' => __( 'Callout Bar', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/callout-bar {} -->
			<section class=\"wp-block-mx-callout-bar callout-bar layout-width--centered margin-bottom--none margin-top--none padding-bottom--none padding-top--none\"><!-- wp:group {\"className\":\"callout-bar__flexible-inner\"} -->
			<div class=\"wp-block-group callout-bar__flexible-inner\"><!-- wp:group {\"backgroundColor\":\"gray-4\",\"className\":\"callout-bar__bg-color\"} -->
			<div class=\"wp-block-group callout-bar__bg-color has-gray-4-background-color has-background\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Callout Heading\",\"className\":\"callout-bar__heading other-heading\"} -->
			<h2 class=\"has-text-align-center callout-bar__heading other-heading\">Heading - Other</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"callout-bar__links\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons callout-bar__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"callout-bar__link is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button callout-bar__link is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Link - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/callout-bar -->",
		)
	);

	register_block_pattern(
		'mx/callout-bar-full-pattern',
		array(
			'title' => __( 'Callout Bar - Full Width', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/callout-bar {\"widthOption\":\"full\",\"backgroundColor\":\"gray-4\"} -->
			<section class=\"wp-block-mx-callout-bar callout-bar layout-width--full margin-bottom--none margin-top--none padding-bottom--none padding-top--none has-gray-4-background-color has-background has-gray-4-background-color has-background\"><!-- wp:group {\"className\":\"callout-bar__flexible-inner\"} -->
			<div class=\"wp-block-group callout-bar__flexible-inner\"><!-- wp:group {\"className\":\"callout-bar__bg-color\"} -->
			<div class=\"wp-block-group callout-bar__bg-color\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Callout Heading\",\"className\":\"callout-bar__heading other-heading\"} -->
			<h2 class=\"has-text-align-center callout-bar__heading other-heading\">Heading - Other</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"callout-bar__links\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons callout-bar__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"callout-bar__link is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button callout-bar__link is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Link - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/callout-bar -->",
		)
	);
}
add_action( 'init', 'mx_callout_bar_init' );
