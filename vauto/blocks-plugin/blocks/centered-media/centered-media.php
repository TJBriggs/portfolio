<?php
/**
 * Plugin Name:       Centered Media
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_centered_media_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/centered-media-image-pattern',
		array(
			'title' => __( 'Centered Media - Image', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/centered-media {} -->
			<section class=\"wp-block-mx-centered-media centered-media layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-media__flexible-inner\"} -->
			<div class=\"wp-block-group centered-media__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"centered-media__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-media__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-media__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-media__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/media-block {\"className\":\"centered-media__media\"} -->
			<div class=\"wp-block-mx-media-block media-block centered-media__media\"><!-- wp:mx/image {\"align\":\"center\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<div class=\"wp-block-mx-image\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure></div>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-media -->",
		)
	);

	register_block_pattern(
		'mx/centered-media-video-modal-pattern',
		array(
			'title' => __( 'Centered Media - Video Modal', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/centered-media {} -->
			<section class=\"wp-block-mx-centered-media centered-media layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-media__flexible-inner\"} -->
			<div class=\"wp-block-group centered-media__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"centered-media__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-media__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-media__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-media__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/media-block {\"className\":\"centered-media__media\"} -->
			<div class=\"wp-block-mx-media-block media-block centered-media__media\"><!-- wp:mx/image {\"align\":\"center\",\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->
			<div class=\"wp-block-mx-image\"><figure class=\"aligncenter size-full\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></a></figure></div>
			<!-- /wp:mx/image --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-media -->",
		)
	);

	register_block_pattern(
		'mx/centered-media-youtube-embed-pattern',
		array(
			'title' => __( 'Centered Media - YouTube Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/centered-media {} -->
			<section class=\"wp-block-mx-centered-media centered-media layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-media__flexible-inner\"} -->
			<div class=\"wp-block-group centered-media__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"centered-media__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-media__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-media__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-media__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/media-block {\"className\":\"centered-media__media\"} -->
			<div class=\"wp-block-mx-media-block media-block centered-media__media\"><!-- wp:embed {\"url\":\"https://www.youtube.com/watch?v=71EZb94AS1k\",\"type\":\"video\",\"providerNameSlug\":\"youtube\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->
			<figure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">
			https://www.youtube.com/watch?v=71EZb94AS1k
			</div></figure>
			<!-- /wp:embed --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-media -->",
		)
	);

	register_block_pattern(
		'mx/centered-media-vimeo-embed-pattern',
		array(
			'title' => __( 'Centered Media - Vimeo Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/centered-media {} -->
			<section class=\"wp-block-mx-centered-media centered-media layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-media__flexible-inner\"} -->
			<div class=\"wp-block-group centered-media__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"centered-media__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-media__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-media__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-media__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/media-block {\"className\":\"centered-media__media\"} -->
			<div class=\"wp-block-mx-media-block media-block centered-media__media\"><!-- wp:embed {\"url\":\"https://vimeo.com/706326143\",\"type\":\"video\",\"providerNameSlug\":\"vimeo\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->
			<figure class=\"wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">
			https://vimeo.com/706326143
			</div></figure>
			<!-- /wp:embed --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-media -->",
		)
	);

	register_block_pattern(
		'mx/centered-media-lottie-embed-pattern',
		array(
			'title' => __( 'Centered Media - Lottie Embed', 'mx-blocks-plugin' ),
			'categories' => [ 'feature-blocks' ],
			'content' => "<!-- wp:mx/centered-media {} -->
			<section class=\"wp-block-mx-centered-media centered-media layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"centered-media__flexible-inner\"} -->
			<div class=\"wp-block-group centered-media__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"centered-media__heading h1\"} -->
			<h2 class=\"has-text-align-center centered-media__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\",\"className\":\"centered-media__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center centered-media__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/media-block {\"className\":\"centered-media__media\"} -->
			<div class=\"wp-block-mx-media-block media-block centered-media__media\"><!-- wp:gb/lottiefiles {\"src\":\"/wp-content/uploads/2022/07/1657248157.json\",\"id\":\"ekuejcwq\",\"loopHack\":\"{\u0022autoplay\u0022:true,\u0022loop\u0022:true,\u0022controls\u0022:null}\"} -->
			<div class=\"wp-block-gb-lottiefiles\" style=\"background-color:transparent\"><lottie-player id=\"ekuejcwq\" interactivitytype=\"none\" interactivitymode=\"none\" visibilitystart=\"0\" visibilityend=\"1\" framesstart=\"0\" framesend=\"25\" rest=\"{&quot;autoplay&quot;:true,&quot;loop&quot;:true,&quot;controls&quot;:null}\" totalframes=\"25\" mode=\"normal\" src=\"/wp-content/uploads/2022/07/1657248157.json\" speed=\"1\" background=\"transparent\" class=\"lottie-player mx-auto\" style=\"width:300px;height:300px\"></lottie-player></div>
			<!-- /wp:gb/lottiefiles --></div>
			<!-- /wp:mx/media-block --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/centered-media -->",
		)
	);
}
add_action( 'init', 'mx_centered_media_init' );
