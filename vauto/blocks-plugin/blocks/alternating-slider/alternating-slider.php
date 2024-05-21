<?php
/**
 * Plugin Name:       Alternating Slider
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_alternating_slider_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/alternating-slider-pattern',
		array(
			'title' => __( 'Alternating Slider', 'mx-blocks-plugin' ),
			'categories' => [ 'slider-blocks' ],
			'content' => "<!-- wp:mx/alternating-slider {\"mediaAlign\":\"right\"} -->
			<section class=\"wp-block-mx-alternating-slider alternating-slider vertical-align--middle media-align--right layout-width--centered border--false  margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:cover {\"dimRatio\":0,\"isDark\":false,\"className\":\"alternating-slider__cover\"} -->
			<div class=\"wp-block-cover is-light alternating-slider__cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><div class=\"wp-block-cover__inner-container\"><!-- wp:mx/slider {\"className\":\"alternating-slider__slider\"} -->
			<div class=\"wp-block-mx-slider slider alternating-slider__slider\"><!-- wp:mx/ss-card {\"postID\":219,\"postTitle\":\"John Malishenko\",\"postTypeTitle\":\"Success Stories\"} /-->

			<!-- wp:mx/ss-card {\"postID\":212,\"postTitle\":\"Brian Benstock\",\"postTypeTitle\":\"Success Stories\"} /-->

			<!-- wp:mx/ss-card {\"postID\":219,\"postTitle\":\"John Malishenko\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/slider -->

			<!-- wp:group {\"className\":\"alternating-slider__content\"} -->
			<div class=\"wp-block-group alternating-slider__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-slider__heading semibold\"} -->
			<h2 class=\"alternating-slider__heading semibold\">Heading 2 - Semibold</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-slider__text thinweight\",\"fontSize\":\"x-large\"} -->
			<p class=\"alternating-slider__text thinweight has-x-large-font-size\">Body X-Large - Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div></div>
			<!-- /wp:cover --></section>
			<!-- /wp:mx/alternating-slider -->",
		)
	);

	register_block_pattern(
		'mx/alternating-slider-background-pattern',
		array(
			'title' => __( 'Alternating Slider - Background Image', 'mx-blocks-plugin' ),
			'categories' => [ 'slider-blocks' ],
			'content' => "<!-- wp:mx/alternating-slider {\"className\":\"alternating-slider\u002d\u002dbg-image\"} -->
			<section class=\"wp-block-mx-alternating-slider alternating-slider vertical-align--middle media-align--left layout-width--centered border--false  margin-bottom--none margin-top--none padding-bottom--default padding-top--default alternating-slider--bg-image\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0,\"className\":\"alternating-slider__cover\"} -->
			<div class=\"wp-block-cover alternating-slider__cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:mx/slider {\"className\":\"alternating-slider__slider\"} -->
			<div class=\"wp-block-mx-slider slider alternating-slider__slider\"><!-- wp:mx/ss-card {\"postID\":219,\"postTitle\":\"John Malishenko\",\"postTypeTitle\":\"Success Stories\"} /-->

			<!-- wp:mx/ss-card {\"postID\":218,\"postTitle\":\"Mike Shaw\",\"postTypeTitle\":\"Success Stories\"} /-->

			<!-- wp:mx/ss-card {\"postID\":216,\"postTitle\":\"Jim Blickle\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/slider -->

			<!-- wp:group {\"className\":\"alternating-slider__content\"} -->
			<div class=\"wp-block-group alternating-slider__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-slider__heading semibold\"} -->
			<h2 class=\"alternating-slider__heading semibold\">Heading 2 - Semibold</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-slider__text thinweight\",\"fontSize\":\"x-large\"} -->
			<p class=\"alternating-slider__text thinweight has-x-large-font-size\">Body X-Large - Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div></div>
			<!-- /wp:cover --></section>
			<!-- /wp:mx/alternating-slider -->",
		)
	);
}
add_action( 'init', 'mx_alternating_slider_init' );
