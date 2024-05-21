<?php
/**
 * Plugin Name:       form-cta
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_form_cta_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/form-cta-pattern',
		array(
			'title' => __( 'Form CTA - Demo Form', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/form-cta {\"borderAll\":true} -->
			<section class=\"wp-block-mx-form-cta form-cta vertical-align--middle media-align--left layout-width--centered border--true margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"form-cta__flexible-inner\"} -->
			<div class=\"wp-block-group form-cta__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Centered Heading\",\"textColor\":\"brand-1\",\"className\":\"form-cta__heading h1\"} -->
			<h2 class=\"has-text-align-center form-cta__heading h1 has-brand-1-color has-text-color\">Heading 1 - Orange</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\",\"className\":\"form-cta__centered-text thinweight\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center form-cta__centered-text thinweight has-large-font-size\">Body - Large...Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
			<!-- /wp:paragraph -->

			<!-- wp:group {\"className\":\"form-cta__wrap\"} -->
			<div class=\"wp-block-group form-cta__wrap\"><!-- wp:group {\"className\":\"form-cta__content\"} -->
			<div class=\"wp-block-group form-cta__content\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"form-cta__media\"} -->
			<figure class=\"wp-block-mx-image size-full form-cta__media\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></a></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"form-cta__callouts\"} -->
			<div class=\"wp-block-group form-cta__callouts\"><!-- wp:group {\"className\":\"form-cta__callout icon-callout icon-left\"} -->
			<div class=\"wp-block-group form-cta__callout icon-callout icon-left\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"form-cta__callout-icon\"} -->
			<figure class=\"wp-block-mx-image size-full form-cta__callout-icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Callout Heading\",\"className\":\"form-cta__callout-heading semibold\"} -->
			<h4 class=\"form-cta__callout-heading semibold\">Heading 4 - Semibold</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\",\"className\":\"form-cta__text thinweight\"} -->
			<p class=\"form-cta__text thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"form-cta__callout icon-callout icon-left\"} -->
			<div class=\"wp-block-group form-cta__callout icon-callout icon-left\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"form-cta__callout-icon\"} -->
			<figure class=\"wp-block-mx-image size-full form-cta__callout-icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Callout Heading\",\"className\":\"form-cta__callout-heading semibold\"} -->
			<h4 class=\"form-cta__callout-heading semibold\">Heading 4 - Semibold</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\",\"className\":\"form-cta__text thinweight\"} -->
			<p class=\"form-cta__text thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"form-cta__callout icon-callout icon-left\"} -->
			<div class=\"wp-block-group form-cta__callout icon-callout icon-left\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"form-cta__callout-icon\"} -->
			<figure class=\"wp-block-mx-image size-full form-cta__callout-icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Callout Heading\",\"className\":\"form-cta__callout-heading semibold\"} -->
			<h4 class=\"form-cta__callout-heading semibold\">Heading 4 - Semibold</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\",\"className\":\"form-cta__text thinweight\"} -->
			<p class=\"form-cta__text thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"form-cta__callout icon-callout icon-left\"} -->
			<div class=\"wp-block-group form-cta__callout icon-callout icon-left\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"form-cta__callout-icon\"} -->
			<figure class=\"wp-block-mx-image size-full form-cta__callout-icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Callout Heading\",\"className\":\"form-cta__callout-heading semibold\"} -->
			<h4 class=\"form-cta__callout-heading semibold\">Heading 4 - Semibold</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Callout text...ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\",\"className\":\"form-cta__text thinweight\"} -->
			<p class=\"form-cta__text thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"gradient\":\"orange-gradient\",\"className\":\"form-cta__form\"} -->
			<div class=\"wp-block-group form-cta__form has-orange-gradient-gradient-background has-background\"><!-- wp:html -->
			<h1>Form will go here...</h1>
			<!-- /wp:html --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/form-cta -->",
		)
	);
}
add_action( 'init', 'mx_form_cta_init' );
