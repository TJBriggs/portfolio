<?php
/**
 * Plugin Name:       Accordions
 * Description:       Starter block written with ESNext standard and JSX support.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The Mx Group
 * Text Domain:       mx-blocks-plugin
 *
 * @package           mx-blocks-plugin
 */

function mx_accordions_init() {
	register_block_type( __DIR__ );

	register_block_pattern(
		'mx/accordions-sidebar-pattern',
		array(
			'title' => __( 'Accordions - Sidebar', 'mx-blocks-plugin' ),
			'categories' => [ 'text-blocks' ],
			'content' => "<!-- wp:mx/accordions {} -->
			<section class=\"wp-block-mx-accordions accordions layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"accordions__flexible-inner\"} -->
			<div class=\"wp-block-group accordions__flexible-inner\"><!-- wp:group {\"className\":\"accordions__main\"} -->
			<div class=\"wp-block-group accordions__main\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordions__heading other-heading\"} -->
			<h2 class=\"accordions__heading other-heading\">FAQs</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"left\",\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"accordions__text\"} -->
			<p class=\"has-text-align-left accordions__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget? Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/repeater {\"className\":\"accordions__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordions__wrap\"><!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Products</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">ProfitTime GPS</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Provision</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Conquest</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Stockwave</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Stockwave Plus</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Merchandising</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Reconditioning</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group -->

			<!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Markets</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Lorem Ipsum</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group -->

			<!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Support and Training</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Support</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Training</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"tagName\":\"aside\",\"className\":\"accordions__sidebar\"} -->
			<aside class=\"wp-block-group accordions__sidebar\"><!-- wp:heading {\"level\":3,\"placeholder\":\"Sidebar Heading\",\"className\":\"accordions__sidebar-heading h1 bold\"} -->
			<h3 class=\"accordions__sidebar-heading h1 bold\">You may also like:</h3>
			<!-- /wp:heading -->

			<!-- wp:group {\"className\":\"accordions-callout\"} -->
			<div class=\"wp-block-group accordions-callout\"><!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"accordions-callout__image\"} -->
			<figure class=\"wp-block-mx-image size-full accordions-callout__image\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Eyebrow Text\",\"className\":\"accordions-callout__heading eyebrow\"} -->
			<h4 class=\"accordions-callout__heading eyebrow\">Category Eyebrow</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Lorem ipsum dolor sit tempor massa egestas.\",\"className\":\"accordions-callout__text \"} -->
			<p class=\"accordions-callout__text\">Lorem ipsum dolor sit tempor massa egestas.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"accordions-callout__links\"} -->
			<div class=\"wp-block-mx-buttons accordions-callout__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"accordions-callout__link is-style-arrow-link\"} -->
			<div class=\"wp-block-mx-button accordions-callout__link is-style-arrow-link\"><a class=\"wp-block-button__link\">Link Text</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordions-callout\"} -->
			<div class=\"wp-block-group accordions-callout\"><!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"accordions-callout__image\"} -->
			<figure class=\"wp-block-mx-image size-full accordions-callout__image\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Eyebrow Text\",\"className\":\"accordions-callout__heading eyebrow\"} -->
			<h4 class=\"accordions-callout__heading eyebrow\">Category Eyebrow</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Lorem ipsum dolor sit tempor massa egestas.\",\"className\":\"accordions-callout__text \"} -->
			<p class=\"accordions-callout__text\">Lorem ipsum dolor sit tempor massa egestas.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"accordions-callout__links\"} -->
			<div class=\"wp-block-mx-buttons accordions-callout__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"accordions-callout__link is-style-arrow-link\"} -->
			<div class=\"wp-block-mx-button accordions-callout__link is-style-arrow-link\"><a class=\"wp-block-button__link\">Link Text</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordions-callout\"} -->
			<div class=\"wp-block-group accordions-callout\"><!-- wp:mx/image {\"id\":75,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"accordions-callout__image\"} -->
			<figure class=\"wp-block-mx-image size-full accordions-callout__image\"><img src=\"/wp-content/uploads/2022/06/laptop@2x.png\" alt=\"\" class=\"wp-image-75\"/></figure>
			<!-- /wp:mx/image -->

			<!-- wp:heading {\"level\":4,\"placeholder\":\"Eyebrow Text\",\"className\":\"accordions-callout__heading eyebrow\"} -->
			<h4 class=\"accordions-callout__heading eyebrow\">Category Eyebrow</h4>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"placeholder\":\"Lorem ipsum dolor sit tempor massa egestas.\",\"className\":\"accordions-callout__text \"} -->
			<p class=\"accordions-callout__text\">Lorem ipsum dolor sit tempor massa egestas.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/buttons {\"className\":\"accordions-callout__links\"} -->
			<div class=\"wp-block-mx-buttons accordions-callout__links\"><!-- wp:mx/button {\"placeholder\":\"Link Text\",\"className\":\"accordions-callout__link is-style-arrow-link\"} -->
			<div class=\"wp-block-mx-button accordions-callout__link is-style-arrow-link\"><a class=\"wp-block-button__link\">Link Text</a></div>
			<!-- /wp:mx/button --></div>
			<!-- /wp:mx/buttons --></div>
			<!-- /wp:group --></aside>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/accordions -->",
		)
	);

	register_block_pattern(
		'mx/accordions-pattern',
		array(
			'title' => __( 'Accordions - Centered', 'mx-blocks-plugin' ),
			'categories' => [ 'text-blocks' ],
			'content' => "<!-- wp:mx/accordions {} -->
			<section class=\"wp-block-mx-accordions accordions layout-width--centered margin-bottom--none margin-top--none padding-bottom--default padding-top--default\"><!-- wp:group {\"className\":\"accordions__flexible-inner\"} -->
			<div class=\"wp-block-group accordions__flexible-inner\"><!-- wp:group {\"className\":\"accordions__main\"} -->
			<div class=\"wp-block-group accordions__main\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordions__heading other-heading\"} -->
			<h2 class=\"accordions__heading other-heading\">FAQs</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {\"align\":\"left\",\"placeholder\":\"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\",\"className\":\"accordions__text\"} -->
			<p class=\"has-text-align-left accordions__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget? Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et.</p>
			<!-- /wp:paragraph -->

			<!-- wp:mx/repeater {\"className\":\"accordions__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordions__wrap\"><!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Products</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">ProfitTime GPS</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Provision</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Conquest</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Stockwave</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Stockwave Plus</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Merchandising</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Reconditioning</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group -->

			<!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Markets</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Lorem Ipsum</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A: </strong>Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group -->

			<!-- wp:mx/accordion-group -->
			<div class=\"wp-block-mx-accordion-group accordion-group\"><!-- wp:heading {\"placeholder\":\"Heading Text\",\"className\":\"accordion-group__heading h1 bold\"} -->
			<h2 class=\"accordion-group__heading h1 bold\">Support and Training</h2>
			<!-- /wp:heading -->

			<!-- wp:mx/repeater {\"className\":\"accordion-group__wrap\"} -->
			<div class=\"wp-block-mx-repeater repeater accordion-group__wrap\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Support</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:heading {\"level\":3,\"className\":\"bold\"} -->
			<h3 class=\"bold\">Training</h3>
			<!-- /wp:heading --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion -->

			<!-- wp:mx/accordion -->
			<div class=\"wp-block-mx-accordion accordion\"><!-- wp:group {\"className\":\"accordion__toggle\"} -->
			<div class=\"wp-block-group accordion__toggle\"><!-- wp:paragraph -->
			<p><strong>Q:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum dui, a dignissim nisl pretium eget?</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group -->

			<!-- wp:group {\"className\":\"accordion__content\"} -->
			<div class=\"wp-block-group accordion__content\"><!-- wp:paragraph -->
			<p><strong>A:</strong> Fusce vulputate odio augue, vel finibus est feugiat ac. Nam consectetur eros leo. Suspendisse potenti. Pellentesque imperdiet facilisis dolor et molestie.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:group --></div>
			<!-- /wp:mx/accordion --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:mx/accordion-group --></div>
			<!-- /wp:mx/repeater --></div>
			<!-- /wp:group --></div>
			<!-- /wp:group --></section>
			<!-- /wp:mx/accordions -->",
		)
	);
}
add_action( 'init', 'mx_accordions_init' );
