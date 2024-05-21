<?php
/**
 * Plugin Name:       Alternating Feature
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_alternating_feature_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/alternating-feature-basic-left-pattern',
		array(
			'title' => __( 'Alternating Feature - Media Left', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"mediaAlign\":\"right\"} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--right layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-basic-right-pattern',
		array(
			'title' => __( 'Alternating Feature - Media Right', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--left layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></a></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-basic-border-pattern',
		array(
			'title' => __( 'Alternating Feature - With Border', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"borderAll\":true} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--left layout-width--centered border--true margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></a></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-basic-youtube-pattern',
		array(
			'title' => __( 'Alternating Feature - YouTube Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"mediaAlign\":\"right\"} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--right layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:embed {\"url\":\"https://www.youtube.com/watch?v=71EZb94AS1k\",\"type\":\"video\",\"providerNameSlug\":\"youtube\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->
			<figure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">
			https://www.youtube.com/watch?v=71EZb94AS1k
			</div></figure>
			<!-- /wp:embed --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-basic-vimeo-pattern',
		array(
			'title' => __( 'Alternating Feature - Vimeo Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--left layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:embed {\"url\":\"https://vimeo.com/706326143\",\"type\":\"video\",\"providerNameSlug\":\"vimeo\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->
			<figure class=\"wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">
			https://vimeo.com/706326143
			</div></figure>
			<!-- /wp:embed --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-basic-lottie-pattern',
		array(
			'title' => __( 'Alternating Feature - Lottie Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"mediaAlign\":\"right\"} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--right layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:gb/lottiefiles {\"src\":\"/wp-content/uploads/2022/07/1657247176.json\",\"id\":\"lpttlhbg\",\"loopHack\":\"{\u0022autoplay\u0022:true,\u0022loop\u0022:true,\u0022controls\u0022:null}\"} -->
			<div class=\"wp-block-gb-lottiefiles\" style=\"background-color:transparent\"><lottie-player id=\"lpttlhbg\" interactivitytype=\"none\" interactivitymode=\"none\" visibilitystart=\"0\" visibilityend=\"1\" framesstart=\"0\" framesend=\"25\" rest=\"{&quot;autoplay&quot;:true,&quot;loop&quot;:true,&quot;controls&quot;:null}\" totalframes=\"25\" mode=\"normal\" src=\"/wp-content/uploads/2022/07/1657247176.json\" speed=\"1\" background=\"transparent\" class=\"lottie-player mx-auto\" style=\"width:300px;height:300px\"></lottie-player></div>
			<!-- /wp:gb/lottiefiles --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link\"><a class=\"wp-block-button__link\">Primary Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/email-cta-form-pattern',
		array(
			'title' => __( 'Email CTA', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"gradient\":\"orange-gradient\",\"className\":\"email-cta\"} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--left layout-width--centered border--false margin-bottom--none margin-top--none padding-bottom--large padding-top--large email-cta has-orange-gradient-gradient-background has-background has-orange-gradient-gradient-background has-background\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-full\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></a></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block -->

			<!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:heading {\"placeholder\":\"Feature Heading\",\"textColor\":\"white\",\"className\":\"alternating-feature__heading h1 defaultweight\"} -->
			<h2 class=\"alternating-feature__heading h1 defaultweight has-white-color has-text-color\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"textColor\":\"white\",\"className\":\"alternating-feature__text thinweight\"} -->
			<p class=\"alternating-feature__text thinweight has-white-color has-text-color\">Body Copy - Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph -->

			<!-- wp:html -->
			<h1 style=\"color: white;\">Email Form Goes Here</h1>
			<!-- /wp:html --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);

	register_block_pattern(
		'mx/alternating-feature-complex-right-pattern',
		array(
			'title' => __( 'Alternating Feature - Multiple CTAs Right', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/alternating-feature {\"borderAll\":true,\"mediaAlign\":\"right\",\"className\":\"multiple-ctas\"} -->
			<section class=\"wp-block-mx-alternating-feature alternating-feature vertical-align--middle media-align--right layout-width--centered border--true margin-bottom--none margin-top--none padding-bottom--default padding-top--default multiple-ctas\"><!-- wp:group {\"className\":\"alternating-feature__flexible-inner\"} -->
			<div class=\"wp-block-group alternating-feature__flexible-inner\"><!-- wp:group {\"className\":\"alternating-feature__content\"} -->
			<div class=\"wp-block-group alternating-feature__content\"><!-- wp:group {\"className\":\"alternating-feature__icon-subheading\"} -->
			<div class=\"wp-block-group alternating-feature__icon-subheading\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"alternating-feature__icon\"} -->
			<figure class=\"wp-block-mx-image size-full alternating-feature__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Sub Heading\",\"className\":\"alternating-feature__subheading\"} -->
			<h4 class=\"alternating-feature__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:heading {\"placeholder\":\"Feature Heading\",\"className\":\"alternating-feature__heading\"} -->
			<h2 class=\"alternating-feature__heading\">Heading 2 - met consectutor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"alternating-feature__text\"} -->
			<p class=\"alternating-feature__text\">Body Copy - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__primary-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__primary-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link is-style-large-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link is-style-large-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Primary Button - Large</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons -->

			<!-- wp:mx/buttons {\"className\":\"alternating-feature__underline-links\",\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} -->
			<div class=\"wp-block-mx-buttons alternating-feature__underline-links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link is-style-medium-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link is-style-medium-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - Medium</a></div>
			<!-- /wp:mx/button -->

			<!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link is-style-medium-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link is-style-medium-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - Medium</a></div>
			<!-- /wp:mx/button -->

			<!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"alternating-feature__link is-style-medium-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button alternating-feature__link is-style-medium-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group -->

			<!-- wp:mx/media-block {\"className\":\"alternating-feature__media\"} -->
			<div class=\"wp-block-mx-media-block media-block alternating-feature__media\"><!-- wp:mx/image {\"id\":74,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->
			<figure class=\"wp-block-mx-image size-large\"><img src=\"/wp-content/uploads/2022/06/laptop-slash@2x-1024x971.png\" alt=\"\" class=\"wp-image-74\"/></figure>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/alternating-feature -->",
		)
	);
}
add_action( 'init', 'mx_alternating_feature_init' );
