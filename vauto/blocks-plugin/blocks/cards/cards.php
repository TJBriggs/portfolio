<?php
/**
 * Plugin Name:       Cards
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_cards_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/cards-heading-button-pattern',
		array(
			'title' => __( 'Cards - Heading & Button', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:mx/heading-button -->
			<div class=\"wp-block-mx-heading-button heading-button\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"heading-button__heading h1\"} -->
			<h2 class=\"heading-button__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"heading-button__links\"} -->
			<div class=\"wp-block-mx-buttons heading-button__links\"><!-- wp:mx/button {\"placeholder\":\"Button Text\",\"className\":\"heading-button__link is-style-large-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button heading-button__link is-style-large-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Button Primary - Large</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/heading-button -->

			<!-- wp:mx/columns {\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-centered-text-pattern',
		array(
			'title' => __( 'Cards - Centered Text', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"className\":\"cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-double-pattern',
		array(
			'title' => __( 'Cards - 2 Cards', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"orientationIcon\":{\"key\":null,\"ref\":null,\"props\":{\"xmlns\":\"http://www.w3.org/2000/svg\",\"viewBox\":\"0 0 24 24\",\"children\":{\"key\":null,\"ref\":null,\"props\":{\"d\":\"M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z\"},\"_owner\":null}},\"_owner\":null},\"className\":\"cards\u002d\u002ddouble cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--double cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-single-pattern',
		array(
			'title' => __( 'Cards - Single Card', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"orientationIcon\":{\"key\":null,\"ref\":null,\"props\":{\"xmlns\":\"http://www.w3.org/2000/svg\",\"viewBox\":\"0 0 24 24\",\"children\":{\"key\":null,\"ref\":null,\"props\":{\"d\":\"M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z\"},\"_owner\":null}},\"_owner\":null},\"className\":\"cards\u002d\u002dsingle cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--single cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":53,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-large card__media\"><img src=\"/wp-content/uploads/2022/06/logo-color.svg\" alt=\"\" class=\"wp-image-53\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-icons-pattern',
		array(
			'title' => __( 'Cards - Icons', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"className\":\"cards\u002d\u002dicons\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--icons\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:mx/heading-button -->
			<div class=\"wp-block-mx-heading-button heading-button\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"heading-button__heading h1\"} -->
			<h2 class=\"heading-button__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"heading-button__links\"} -->
			<div class=\"wp-block-mx-buttons heading-button__links\"><!-- wp:mx/button {\"placeholder\":\"Button Text\",\"className\":\"heading-button__link is-style-large-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button heading-button__link is-style-large-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Button Primary - Large</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/heading-button -->

			<!-- wp:mx/columns {\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--4 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"addTag\":true,\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--true card\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<div class=\"wp-block-mx-image card__media\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3} -->
			<h3>Heading 3</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<div class=\"wp-block-mx-image card__media\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3} -->
			<h3>Heading 3</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<div class=\"wp-block-mx-image card__media\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3} -->
			<h3>Heading 3</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"align\":\"center\",\"id\":100,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<div class=\"wp-block-mx-image card__media\"><figure class=\"aligncenter size-full\"><img src=\"/wp-content/uploads/2022/06/graph-02@2x.png\" alt=\"\" class=\"wp-image-100\"/></figure></div>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3} -->
			<h3>Heading 3</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-underline-button is-style-full-width-button\"} -->
			<div class=\"wp-block-mx-button is-style-underline-button is-style-full-width-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-jumbo-pattern',
		array(
			'title' => __( 'Cards - Jumbo', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"className\":\"cards\u002d\u002djumbo cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--vertical margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--jumbo cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"columnCount\":3,\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--3 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":98,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-horizontal.png\" alt=\"\" class=\"wp-image-98\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3,\"className\":\"h1\"} -->
			<h3 class=\"h1\">Heading 1</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-small-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button is-style-small-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":98,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-horizontal.png\" alt=\"\" class=\"wp-image-98\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3,\"className\":\"h1\"} -->
			<h3 class=\"h1\">Heading 1</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-small-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button is-style-small-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":98,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-horizontal.png\" alt=\"\" class=\"wp-image-98\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":3,\"className\":\"h1\"} -->
			<h3 class=\"h1\">Heading 1</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph -->
			<p>Body - dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-small-button is-style-underline-button\"} -->
			<div class=\"wp-block-mx-button is-style-small-button is-style-underline-button\"><a class=\"wp-block-button__link\">Underline Button - M</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-horizontal-pattern',
		array(
			'title' => __( 'Cards - Horizontal', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"itemOrientation\":\"horizontal\",\"orientationIcon\":{\"key\":null,\"ref\":null,\"props\":{\"xmlns\":\"http://www.w3.org/2000/svg\",\"viewBox\":\"0 0 24 24\",\"children\":{\"key\":null,\"ref\":null,\"props\":{\"d\":\"M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z\"},\"_owner\":null}},\"_owner\":null},\"className\":\"cards\u002d\u002dgrid cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--horizontal margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--grid cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"columnCount\":2,\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--2 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-horizontal-grid-pattern',
		array(
			'title' => __( 'Cards - Horizontal Grid', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"itemOrientation\":\"horizontal\",\"orientationIcon\":{\"key\":null,\"ref\":null,\"props\":{\"xmlns\":\"http://www.w3.org/2000/svg\",\"viewBox\":\"0 0 24 24\",\"children\":{\"key\":null,\"ref\":null,\"props\":{\"d\":\"M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z\"},\"_owner\":null}},\"_owner\":null},\"className\":\"cards\u002d\u002dcard-grid\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--horizontal margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--card-grid\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:mx/heading-button {\"className\":\"heading-button\u002d\u002darrow-link\"} -->
			<div class=\"wp-block-mx-heading-button heading-button heading-button--arrow-link\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"heading-button__heading h1\"} -->
			<h2 class=\"heading-button__heading h1\">Heading 1</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons {\"className\":\"heading-button__links\"} -->
			<div class=\"wp-block-mx-buttons heading-button__links\"><!-- wp:mx/button {\"placeholder\":\"Button Text\",\"className\":\"heading-button__link is-style-arrow-link\"} -->
			<div class=\"wp-block-mx-button heading-button__link is-style-arrow-link\"><a class=\"wp-block-button__link\">Arrow Link</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:mx/heading-button -->

			<!-- wp:mx/columns {\"columnCount\":2,\"className\":\"cards__columns gap\u002d\u002dsmall\"} -->
			<div class=\"wp-block-mx-columns columns columns--2 columns--flex cards__columns gap--small\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);

	register_block_pattern(
		'mx/cards-horizontal-slider-pattern',
		array(
			'title' => __( 'Cards - Horizontal Slider', 'mx-blocks-plugin' ),
			'categories' => [ 'card-blocks' ],
			'content' => "<!-- wp:mx/cards {\"itemOrientation\":\"horizontal\",\"className\":\"cards\u002d\u002dslider cards\u002d\u002dcentered-heading\"} -->
			<section class=\"wp-block-mx-cards cards layout-width--centered cards--horizontal margin-bottom--none margin-top--none padding-bottom--default padding-top--default cards--slider cards--centered-heading\"><!-- wp:group {\"className\":\"cards__flexible-inner\"} -->
			<div class=\"wp-block-group cards__flexible-inner\"><!-- wp:heading {\"textAlign\":\"center\",\"placeholder\":\"Optional Heading\",\"className\":\"cards__heading h1\"} -->
			<h2 class=\"has-text-align-center cards__heading h1\">Heading 1 - Card Slider</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Optional text...Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac.\",\"className\":\"cards__text center-narrow\",\"fontSize\":\"large\"} -->
			<p class=\"has-text-align-center cards__text center-narrow has-large-font-size\">Body Large...Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/columns {\"columnCount\":2,\"className\":\"cards__columns gap\u002d\u002dsmall cards__slider\"} -->
			<div class=\"wp-block-mx-columns columns columns--2 columns--flex cards__columns gap--small cards__slider\"><!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column -->

			<!-- wp:mx/column {\"className\":\"card\"} -->
			<div class=\"wp-block-mx-column column add-tag--false card\"><!-- wp:mx/image {\"id\":99,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"card__media\"} -->
			<figure class=\"wp-block-mx-image size-full card__media\"><img src=\"/wp-content/uploads/2022/06/dale-pollak-vertical.png\" alt=\"\" class=\"wp-image-99\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:group {\"className\":\"card__copy\"} -->
			<div class=\"wp-block-group card__copy\"><!-- wp:heading {\"level\":6,\"className\":\"thinweight uppercase\"} -->
			<h6 class=\"thinweight uppercase\">Body - Caps</h6>
			<!-- /wp:heading -->

			<!-- wp:heading {\"level\":3,\"className\":\"thinweight\"} -->
			<h3 class=\"thinweight\">Heading 3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
			<!-- /wp:heading -->

			<!-- wp:mx/buttons -->
			<div class=\"wp-block-mx-buttons\"><!-- wp:mx/button {\"className\":\"is-style-xsmall-button\"} -->
			<div class=\"wp-block-mx-button is-style-xsmall-button\"><a class=\"wp-block-button__link\">Primary - S</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/column --></div>
			<!-- /wp:mx/columns --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/cards -->",
		)
	);
}
add_action( 'init', 'mx_cards_init' );
