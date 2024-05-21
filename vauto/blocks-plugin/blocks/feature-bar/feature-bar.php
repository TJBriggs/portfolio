<?php
/**
 * Plugin Name:       Feature Bar
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_feature_bar_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/feature-bar-pattern',
		array(
			'title' => __( 'Feature Bar - Button', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/feature-bar {\"gradient\":\"orange-gradient\",\"className\":\"feature-bar\u002d\u002dquote\"} -->
			<section class=\"wp-block-mx-feature-bar feature-bar margin-bottom--none margin-top--none padding-bottom--default padding-top--default feature-bar--button has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><!-- wp:group {\"className\":\"feature-bar__medium-inner\"} -->
			<div class=\"wp-block-group feature-bar__medium-inner\"><!-- wp:group {\"className\":\"feature-bar__copy\"} -->
			<div class=\"wp-block-group feature-bar__copy\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Feature Heading\",\"className\":\"feature-bar__heading\"} -->
			<h2 class=\"has-text-align-center feature-bar__heading\">Heading 2...Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-secondary-button\"} -->
			<div class=\"wp-block-mx-button is-style-secondary-button\"><a class=\"wp-block-button__link\">Secondary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/feature-bar -->",
		)
	);

	register_block_pattern(
		'mx/feature-bar-quote-pattern',
		array(
			'title' => __( 'Feature Bar - Quote', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/feature-bar {\"gradient\":\"orange-gradient\",\"className\":\"feature-bar\u002d\u002dquote\"} -->
			<section class=\"wp-block-mx-feature-bar feature-bar margin-bottom--none margin-top--none padding-bottom--default padding-top--default feature-bar--quote has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><!-- wp:group {\"className\":\"feature-bar__medium-inner\"} -->
			<div class=\"wp-block-group feature-bar__medium-inner\"><!-- wp:group {\"className\":\"feature-bar__copy\"} -->
			<div class=\"wp-block-group feature-bar__copy\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Feature Heading\",\"className\":\"feature-bar__heading\"} -->
			<h2 class=\"has-text-align-center feature-bar__heading\"><em>Heading 2 Italic...Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</em></h2>
			<!-- /wp:heading --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/feature-bar -->",
		)
	);

	register_block_pattern(
		'mx/feature-bar-blue-pattern',
		array(
			'title' => __( 'Feature Bar - Blue', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/feature-bar {\"gradient\":\"blue-reverse-gradient\"} -->
			<section class=\"wp-block-mx-feature-bar feature-bar margin-bottom--none margin-top--none padding-bottom--default padding-top--default has-blue-reverse-gradient-gradient-background has-background has-blue-reverse-gradient-gradient-background has-background\"><!-- wp:group {\"className\":\"feature-bar__xsmall-inner\"} -->
			<div class=\"wp-block-group feature-bar__xsmall-inner\"><!-- wp:group {\"className\":\"feature-bar__copy\"} -->
			<div class=\"wp-block-group feature-bar__copy\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"feature-bar__heading\"} -->
			<h2 class=\"feature-bar__heading\">Heading 2</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"feature-bar__text\"} -->
			<p class=\"feature-bar__text\">Body Copy...Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/feature-bar -->",
		)
	);
}
add_action( 'init', 'mx_feature_bar_init' );
