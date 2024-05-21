<?php
/**
 * Plugin Name:       General Content
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_general_content_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/general-content-cover-ctas-pattern',
		array(
			'title' => __( 'Cover CTAs', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"className\":\"cover-ctas\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default cover-ctas\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"h1\"} -->
			<h2 class=\"has-text-align-center h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center center-narrow has-large-font-size\">Body Large - Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"columnCount\":3} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0} -->
			<div class=\"wp-block-cover\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"h2 bold\"} -->
			<h3 class=\"has-text-align-center h2 bold\">Heading 2 - Bold</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"modal-gallery\",\"className\":\"is-style-modal-link\"} -->
			<div class=\"wp-block-mx-button is-style-modal-link\"><a data-fancybox=\"gallery\" data-src=\"#modal-1\" class=\"wp-block-button__link\">Modal Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-stat-callouts-pattern',
		array(
			'title' => __( 'Stat Callouts', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"backgroundColor\":\"gray-3\",\"className\":\"number-stats\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large number-stats has-gray-3-background-color has-background has-gray-3-background-color has-background\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/columns {\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">800K</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">85%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">30</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">16%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-stat-callouts-heading-pattern',
		array(
			'title' => __( 'Stat Callouts - Heading', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"backgroundColor\":\"gray-3\",\"className\":\"number-stats\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large number-stats has-gray-3-background-color has-background has-gray-3-background-color has-background\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"h1\"} -->
			<h2 class=\"has-text-align-center h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"center-narrow number-stats__text\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center center-narrow number-stats__text has-large-font-size\">Body Large - Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">800K</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">85%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">30</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"stat__number\"} -->
			<h3 class=\"has-text-align-center stat__number\">16%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"stat__text\"} -->
			<p class=\"has-text-align-center stat__text\">Body Copy - Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-stat-callouts-icons-pattern',
		array(
			'title' => __( 'Stat Callouts - Icons', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"className\":\"icon-stats\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large icon-stats\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"h1\"} -->
			<h2 class=\"has-text-align-center h1\">Heading 1- <strong>Bold Text</strong>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/columns {\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/image {\"align\":\"center\",\"id\":69,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"stat__icon\"} -->
			<div class=\"wp-block-mx-image stat__icon\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-01@2x.png\" alt=\"\" class=\"wp-image-69\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"other-heading\"} -->
			<h3 class=\"has-text-align-center other-heading\">39,874</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"thinweight stat__text\",\"fontSize\":\"medium\"} -->
			<p class=\"has-text-align-center thinweight stat__text has-medium-font-size\">Body Medium Thin - Lorem ipsum dolor </p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"stat__icon\"} -->
			<div class=\"wp-block-mx-image stat__icon\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"other-heading\"} -->
			<h3 class=\"has-text-align-center other-heading\">59%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"thinweight stat__text\",\"fontSize\":\"medium\"} -->
			<p class=\"has-text-align-center thinweight stat__text has-medium-font-size\">Body Medium Thin - Lorem ipsum dolor </p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"stat__icon\"} -->
			<div class=\"wp-block-mx-image stat__icon\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"other-heading\"} -->
			<h3 class=\"has-text-align-center other-heading\">43%</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"thinweight stat__text\",\"fontSize\":\"medium\"} -->
			<p class=\"has-text-align-center thinweight stat__text has-medium-font-size\">Body Medium Thin - Lorem ipsum dolor </p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/image {\"align\":\"center\",\"id\":70,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"stat__icon\"} -->
			<div class=\"wp-block-mx-image stat__icon\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-03@2x.png\" alt=\"\" class=\"wp-image-70\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"className\":\"other-heading\"} -->
			<h3 class=\"has-text-align-center other-heading\">65,823</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"className\":\"thinweight stat__text\",\"fontSize\":\"medium\"} -->
			<p class=\"has-text-align-center thinweight stat__text has-medium-font-size\">Body Medium Thin - Lorem ipsum dolor </p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-cta-boxes-pattern',
		array(
			'title' => __( 'CTA Boxes', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"className\":\"cta-boxes\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default cta-boxes\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/columns {\"columnCount\":2,\"columnLayout\":\"grid\",\"className\":\"gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--2 columns--grid gap--small\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0,\"className\":\"cta-box\"} -->
			<div class=\"wp-block-cover cta-box\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"className\":\"play-heading\"} -->
			<div class=\"wp-block-group play-heading\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":1056,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"hide-play-icon\"} -->
			<figure class=\"wp-block-mx-image size-full hide-play-icon\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/play-icon@2x.png\" alt=\"\" class=\"wp-image-1056\"/></a></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"className\":\"defaultweight\"} -->
			<h2 class=\"defaultweight\">Heading 2 - Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</h2>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\"} -->
			<div class=\"wp-block-mx-button\"><a data-fancybox=\"true\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\" class=\"wp-block-button__link\">Button Primary - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0,\"className\":\"cta-box\"} -->
			<div class=\"wp-block-cover cta-box\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"className\":\"defaultweight\"} -->
			<h2 class=\"defaultweight\">Heading 2 - Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body Copy - Maecenas sed diam eget .</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\"} -->
			<div class=\"wp-block-mx-button\"><a data-fancybox=\"true\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\" class=\"wp-block-button__link\">Button Primary - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0,\"className\":\"cta-box\"} -->
			<div class=\"wp-block-cover cta-box\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"className\":\"play-heading\"} -->
			<div class=\"wp-block-group play-heading\"><!-- wp:mx/image {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\",\"id\":1056,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"hide-play-icon\"} -->
			<figure class=\"wp-block-mx-image size-full hide-play-icon\"><a data-fancybox=\"true\" class=\"video-modal has-play-icon\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\"><img src=\"/wp-content/uploads/2022/06/play-icon@2x.png\" alt=\"\" class=\"wp-image-1056\"/></a></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"className\":\"defaultweight\"} -->
			<h2 class=\"defaultweight\">Play Video</h2>
			<!-- /wp:heading --></div>
			<!-- /wp:group --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:cover {\"url\":\"/wp-content/uploads/2022/06/car-bg@2x.png\",\"id\":67,\"dimRatio\":0,\"className\":\"cta-box\"} -->
			<div class=\"wp-block-cover cta-box\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-67\" alt=\"\" src=\"/wp-content/uploads/2022/06/car-bg@2x.png\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:heading {\"className\":\"defaultweight\"} -->
			<h2 class=\"defaultweight\">Heading 2</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body Copy - Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"linkType\":\"video\",\"videoID\":\"71EZb94AS1k\",\"videoURL\":\"https://www.youtube.com/watch?v=71EZb94AS1k\u0026autoplay=1\u0026rel=0\u0026showinfo=0\"} -->
			<div class=\"wp-block-mx-button\"><a data-fancybox=\"true\" data-src=\"https://www.youtube.com/watch?v=71EZb94AS1k&amp;autoplay=1&amp;rel=0&amp;showinfo=0\" class=\"wp-block-button__link\">Button Primary - Medium</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div></div>
			<!-- /wp:cover --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-ss-boxes-pattern',
		array(
			'title' => __( 'Success Story Boxes', 'mx-blocks-plugin' ),
			'categories' => [ 'cta-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"className\":\"cta-boxes\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default cta-boxes\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/columns {\"columnCount\":2} -->
			<div class=\"wp-block-mx-columns columns columns--2 columns--flex\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/ss-box {\"postID\":219,\"postTitle\":\"John Malishenko\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/ss-box {\"postID\":218,\"postTitle\":\"Mike Shaw\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/ss-box {\"postID\":216,\"postTitle\":\"Jim Blickle\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/ss-box {\"postID\":212,\"postTitle\":\"Brian Benstock\",\"postTypeTitle\":\"Success Stories\"} /--></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-basic-callouts-pattern',
		array(
			'title' => __( 'Basic Callouts', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"className\":\"basic-callouts basic-callouts\u002d\u002dheading-button\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large basic-callouts basic-callouts--heading-button\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/heading-button {\"className\":\"heading-button\u002d\u002darrow-link\"} -->
			<div class=\"wp-block-mx-heading-button heading-button heading-button--arrow-link\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"heading-button__heading h1\"} -->
			<h2 class=\"heading-button__heading h1\">Latest News</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"heading-button__links\"} -->
			<div class=\"wp-block-mx-buttons heading-button__links\"><!-- wp:mx/button {\"placeholder\":\"Button Text\",\"className\":\"heading-button__link is-style-large-button is-style-full-width-button is-style-arrow-link\"} -->
			<div class=\"wp-block-mx-button heading-button__link is-style-large-button is-style-full-width-button is-style-arrow-link\"><a class=\"wp-block-button__link\">View all news</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/heading-button -->

			<!-- wp:mx/columns {\"columnCount\":3,\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:paragraph {\"className\":\"uppercase thinweight\"} -->
			<p class=\"uppercase thinweight\">Feabruary 29, 2024</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {\"level\":3,\"className\":\"h5\"} -->
			<h3 class=\"h5\">Kelley Blue Book Instant Cash Offer Launches All-New Features to Help Dealers Combat Inventory Shortage Challenges, Gain Competitive Advantage, Grow Profits</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button -->
			<div class=\"wp-block-mx-button\"><a class=\"wp-block-button__link\">Primary Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:paragraph {\"className\":\"uppercase thinweight\"} -->
			<p class=\"uppercase thinweight\">Feabruary 29, 2024</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {\"level\":3,\"className\":\"h5\"} -->
			<h3 class=\"h5\">Kelley Blue Book Instant Cash Offer Launches All-New Features to Help Dealers Combat Inventory Shortage Challenges, Gain Competitive Advantage, Grow Profits</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button -->
			<div class=\"wp-block-mx-button\"><a class=\"wp-block-button__link\">Primary Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:paragraph {\"className\":\"uppercase thinweight\"} -->
			<p class=\"uppercase thinweight\">Feabruary 29, 2024</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {\"level\":3,\"className\":\"h5\"} -->
			<h3 class=\"h5\">Kelley Blue Book Instant Cash Offer Launches All-New Features to Help Dealers Combat Inventory Shortage Challenges, Gain Competitive Advantage, Grow Profits</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button -->
			<div class=\"wp-block-mx-button\"><a class=\"wp-block-button__link\">Primary Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-basic-callouts-icon-left-pattern',
		array(
			'title' => __( 'Basic Callouts - Icon Left', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"className\":\"basic-callouts basic-callouts\u002d\u002dheading-button\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large basic-callouts basic-callouts--heading-button\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/columns {\"columnCount\":3,\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/general-content-basic-callouts-icon-above-pattern',
		array(
			'title' => __( 'Basic Callouts - Icon Above', 'mx-blocks-plugin' ),
			'categories' => [ 'callout-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"paddingBottom\":\"large\",\"paddingTop\":\"large\",\"className\":\"basic-callouts basic-callouts\u002d\u002dheading-button\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--large padding-top--large basic-callouts basic-callouts--heading-button\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:mx/columns {\"columnCount\":3,\"className\":\"gap\u002d\u002dlarge\"} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex gap--large\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading icon-above\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading icon-above\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading icon-above\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading icon-above\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:group {\"className\":\"basic-callouts__icon-subheading icon-above\"} -->
			<div class=\"wp-block-group basic-callouts__icon-subheading icon-above\"><!-- wp:mx/image {\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"basic-callouts__icon\"} -->
			<figure class=\"wp-block-mx-image size-full basic-callouts__icon\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"className\":\"basic-callouts__subheading\"} -->
			<h4 class=\"basic-callouts__subheading\">Heading 4</h4>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:paragraph {\"className\":\"thinweight\"} -->
			<p class=\"thinweight\">Body - ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-text-link\"} -->
			<div class=\"wp-block-mx-button is-style-text-link\"><a class=\"wp-block-button__link\">Text Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/cards-founders-pattern',
		array(
			'title' => __( 'Cards - Founders', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"className\":\"cards mt-cards cards\u002d\u002dfounders cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards mt-cards cards--founders cards--centered-heading\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"h1\"} -->
			<h2 class=\"has-text-align-center h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/columns {\"columnCount\":3,\"className\":\"gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex gap--small\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":389,\"postTitle\":\"Dale Pollak\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":390,\"postTitle\":\"Randy Kobat\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);

	register_block_pattern(
		'mx/cards-mgmt-pattern',
		array(
			'title' => __( 'Cards - Management', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/general-content {\"className\":\"cards mt-cards cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-general-content general-content layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards mt-cards cards--centered-heading\"><!-- wp:group {\"className\":\"general-content__flexible-inner\"} -->
			<div class=\"wp-block-group general-content__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"className\":\"h1\"} -->
			<h2 class=\"has-text-align-center h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/columns {\"className\":\"gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex gap--small\"><!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":391,\"postTitle\":\"Roger Vidal\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":392,\"postTitle\":\"Michael Chiovari\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":393,\"postTitle\":\"Fabian Macken\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":394,\"postTitle\":\"David Rice\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":395,\"postTitle\":\"Joseph Dougherty\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"column\"} -->
			<div class=\"wp-block-mx-column column add-tag--false\"><!-- wp:mx/mt-card {\"postID\":396,\"postTitle\":\"Chrisey Bell\",\"postTypeTitle\":\"Management Team\"} /--></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/general-content -->",
		)
	);
}
add_action( 'init', 'mx_general_content_init' );
