<?php
/**
 * Plugin Name:       Centered Text
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_centered_text_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/centered-text-pattern',
		array(
			'title' => __( 'Centered Text', 'mx-blocks-plugin' ),
			'categories' => [ 'text-blocks' ],
			'content' => "<!-- wp:mx/centered-text -->
			<section class=\"wp-block-mx-centered-text centered-text layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-text__flexible-inner\"} -->
			<div class=\"wp-block-group centered-text__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Centered Heading\",\"className\":\"centered-text__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-text__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Centered text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-text__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-text__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"centered-text__links\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons centered-text__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"centered-text__link\"} -->
			<div class=\"wp-block-mx-button centered-text__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-text -->",
		)
	);
}
add_action( 'init', 'mx_centered_text_init' );
