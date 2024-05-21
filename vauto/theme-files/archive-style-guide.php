<?php
/**
 * Template Name: Style Guide
 *
 * @package mx-theme
 */

get_header(); ?>

	<article id="main-content" class="main-content main-content--style-guide">
		<?php
			if ( function_exists('yoast_breadcrumb') ) {
				echo get_template_part('template-parts/components/breadcrumbs');
			}
		?>
		<div class="main-content__default-inner">
			<div class="style-guide">
				<header class="style-guide__header">
					<div class="style-guide__default-inner">
						<h1>Style Guide</h1>
						<?php
							// Menu automatically wrapped in 'nav' element with a class of site-header__nav
							wp_nav_menu(
								array(
									'menu' => 'Style Guide Menu',
									'container' => 'nav',
									'container_class' => 'style-guide__nav',
									'items_wrap' => '<ul id="style-guide-menu" class="style-guide__menu" role="menubar">%3$s</ul>'
								)
							);
						?>
					</div>
				</header>
				<section class="colors">
					<div class="colors__default-inner">
						<h2 class="colors__headline">Colors</h2>
						<div class="colors__wrap">
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-brand-1-background-color"></div>
									<h3 class="label">Brand 1</h3>
									<p class="color-item__value">
										<strong>vAuto Orange</strong><br />
										#EF5713<br />
										--wp--preset--color--brand-1
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-brand-2-background-color"></div>
									<h3 class="label">Brand 2</h3>
									<p class="color-item__value">
										<strong>vAuto Light Orange</strong><br />
										#FF8022<br />
										--wp--preset--color--brand-2
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-brand-3-background-color"></div>
									<h3 class="label">Brand 3</h3>
									<p class="color-item__value">
										<strong>Conquest Gold</strong><br />
										#FFBE2C<br />
										--wp--preset--color--brand-3
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-brand-4-background-color"></div>
									<h3 class="label">Brand 4</h3>
									<p class="color-item__value">
										<strong>Stockwave Blue</strong><br />
										#0195D7<br />
										--wp--preset--color--brand-4
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-brand-5-background-color"></div>
									<h3 class="label">Brand 5</h3>
									<p class="color-item__value">
										<strong>iRecon Red</strong><br />
										#DB162C<br />
										--wp--preset--color--brand-5
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
								<div class="color-item__swatch has-black-background-color"></div>
									<h3 class="label">Black</h3>
									<p class="color-item__value">
										<strong>Pure Black</strong><br />
										#000000<br />
										--wp--preset--color--black
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-white-background-color"></div>
									<h3 class="label">White</h3>
									<p class="color-item__value">
										<strong>Pure White</strong><br />
										#FFFFFF<br />
										--wp--preset--color--white
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-1-background-color"></div>
									<h3 class="label">Gray 1</h3>
									<p class="color-item__value">
										<strong>vAuto - Dark Gray</strong><br />
										#5F717B<br />
										--wp--preset--color--gray-1
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-2-background-color"></div>
									<h3 class="label">Gray 2</h3>
									<p class="color-item__value">
										<strong>vAuto - Medium Gray</strong><br />
										#C3C8CB<br />
										--wp--preset--color--gray-2
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-3-background-color"></div>
									<h3 class="label">Gray 3</h3>
									<p class="color-item__value">
									<strong>vAuto - Gray</strong><br />
										#DCE3E6<br />
										--wp--preset--color--gray-3
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-4-background-color"></div>
									<h3 class="label">Gray 4</h3>
									<p class="color-item__value">
									<strong>vAuto - Light Gray</strong><br />
										#F2F5F7<br />
										--wp--preset--color--gray-4
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-5-background-color"></div>
									<h3 class="label">Gray 5</h3>
									<p class="color-item__value">
										<strong>Secondary Button - Hover</strong><br />
										#434D52<br />
										--wp--preset--color--gray-5
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-gray-6-background-color"></div>
									<h3 class="label">Gray 6</h3>
									<p class="color-item__value">
										<strong>Extra Dark - BG</strong><br />
										#242424<br />
										--wp--preset--color--gray-6
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-error-background-color"></div>
									<h3 class="label">Error</h3>
									<p class="color-item__value">
										<strong>Error Color</strong><br />
										#B33831<br />
										--wp--preset--color--error
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="colors">
					<div class="colors__default-inner">
						<h2 class="colors__headline">Gradients</h2>
						<div class="colors__wrap">
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-orange-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Orange Gradient</strong><br />
										#F4601E => #FF8205<br />
										--wp--preset--gradient--orange-gradient
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-yellow-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Yellow Gradient</strong><br />
										#FF9D2B => #FFB6112<br />
										--wp--preset--gradient--yellow-gradient
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-blue-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Blue Gradient</strong><br />
										#009BE0 => #006FC1<br />
										--wp--preset--gradient--blue-gradient
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-blue-reverse-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Blue Reverse Gradient</strong><br />
										#006FC1 => #009BE0<br />
										--wp--preset--gradient--blue-reverse-gradient
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-black-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Black Gradient</strong><br />
										#3B3B3B => #212121<br />
										--wp--preset--gradient--black-gradient
									</p>
								</div>
							</div>
							<div class="color-item">
								<div class="color-item__wrap">
									<div class="color-item__swatch has-dark-gray-gradient-background"></div>
									<h3 class="label">Gradient</h3>
									<p class="color-item__value">
										<strong>vAuto - Dark Gray Gradient</strong><br />
										#3E3E3E => #242424<br />
										--wp--preset--gradient--dark-gray-gradient
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="typography">
					<div class="typography__default-inner">
						<h2 class="typography__headline">Typography</h2>
						<div class="typography__wrap">
							<div class="typography-item typography-item--full">
								<div class="typography-item__wrap">
									<div class="typography-item__text">
										<h2 class="label">Primary Font - Open Sans</h2>
									</div>
									<p class="typography-item__example has-font-family-primary">
										ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
										<strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ</strong><br>
										abcdefghijklmnopqrstuvwxyz<br>
										<strong>abcdefghijklmnopqrstuvwxyz</strong><br />
										123456789 <strong>123456789</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="text-elements">
					<div class="text-elements__default-inner">
						<h2 class="text-elements__headline">Text Elements</h2>
						<div class="text-elements__wrap">
							<div class="text-element text-element--full">
								<div class="text-element__wrap">
									<h4 class="label">Hero Heading</h4>
									<h1 class="hero-heading">Nulla lorem dolor sit amet</h1>
									<p class="p--large">Body text...Lorem ipsum dolor sit, amet consectetur elit. Expedita dicta inventore officiis voluptates natus, conseq maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Other Heading</h4>
									<h1 class="other-heading">Nulla lorem dolor sit amet</h1>
									<p class="p--large">Article body text...Lorem ipsum dolor sit, amet consectetur elit. Expedita dicta inventore officiis voluptates natus, conseq maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H1</h4>
									<h1>Heading1 Nulla Lorem</h1>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H2</h4>
									<h2>Heading2 Nam Fringilla</h2>
									<h2 class="semibold">Heading2 Semibold Nam Fringilla</h2>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H3</h4>
									<h3>Heading3 Consectetur adipiscing</h3>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H4</h4>
									<h4>Heading4 Nunc interdum</h4>
									<h4 class="semibold">Heading4 Semibold Nunc interdum</h4>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H5</h4>
									<h5>Heading5 Lorem ipsum dolor</h5>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">H6</h4>
									<h6>Heading6 Natus conseq maxime</h6>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Body</h4>
									<p>Body text...Lorem ipsum dolor sit, amet consectetur elit. Expedita dicta inventore officiis voluptates natus, conseq maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Body Small</h4>
									<p class="p--small">Body small text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dicta inventore officiis voluptates natus, consequuntur maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Body Medium</h4>
									<p class="p--med">Body medium text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dicta inventore officiis voluptates natus, consequuntur maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Body Large</h4>
									<p class="p--large">Body large text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dicta inventore officiis voluptates natus, consequuntur maxime porro explicabo dolor adipisci.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Eyebrow Text</h4>
									<p class="eyebrow">Estibulum</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Caption</h4>
									<p class="caption">Adipicsing dolor sit amet.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Label</h4>
									<p class="label">Consectetur</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Source</h4>
									<p class="source">Voluptates maxime porro.</p>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Feature Tag</h4>
									<div class="featured-tag" style="top:30px;left:20px;">Featured</div>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Stat Number</h4>
									<div class="stat__number">12%</div>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Stat Text</h4>
									<div class="stat__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dicta inventore officiis.</div>
								</div>
							</div>
							<div class="text-element">
								<div class="text-element__wrap">
									<h4 class="label">Blockquote</h4>
									<blockquote>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, minus.</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="links">
					<div class="links__default-inner">
						<h2 class="links__headline">Buttons &amp; Links</h2>
						<div class="links__wrap">
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Primary Button</h4>
									<div class="link-item__link">
										<a class="button--primary" href="#">Button Text</a>
										<div class="source">Default state</div>
									</div>
									<div class="link-item__link">
										<a class="button--primary hover" href="#">Button Text</a>
										<div class="source">Hover state</div>
									</div>
									<div class="link-item__link">
										<a class="button--primary active" href="#">Button Text</a>
										<div class="source">Active state</div>
									</div>
								</div>
							</div>
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Secondary Button</h4>
									<div class="link-item__link">
										<a class="button--secondary" href="#">Button Text</a>
										<div class="source">Default state</div>
									</div>
									<div class="link-item__link">
										<a class="button--secondary hover" href="#">Button Text</a>
										<div class="source">Hover state</div>
									</div>
									<div class="link-item__link">
										<a class="button--secondary active" href="#">Button Text</a>
										<div class="source">Active state</div>
									</div>
								</div>
							</div>
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Tertiary Button</h4>
									<div class="link-item__link">
										<a class="button--tertiary" href="#">Button Text</a>
										<div class="source">Default state <br />(Transparent Background)</div>
									</div>
									<div class="link-item__link">
										<a class="button--tertiary hover" href="#">Button Text</a>
										<div class="source">Hover state</div>
									</div>
									<div class="link-item__link">
										<a class="button--tertiary active" href="#">Button Text</a>
										<div class="source">Active state</div>
									</div>
								</div>
							</div>
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Play Button</h4>
									<div class="link-item__link play-button">
										<a class="wp-block-button__link" href="#">Link Text</a>
										<div class="source">Default state</div>
									</div>
									<div class="link-item__link play-button">
										<a class="wp-block-button__link hover" href="#">Link Text</a>
										<div class="source">Hover state</div>
									</div>
									<div class="link-item__link play-button">
										<a class="wp-block-button__link active" href="#">Link Text</a>
										<div class="source">Active state</div>
									</div>
								</div>
							</div>
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Text Link</h4>
									<div class="link-item__link">
										<p>Nulla lorem ipsum dolor sit amet lorem eget <a href="#">link text</a> lacinia odio.</p>
										<div class="source">Default state</div>
									</div>
									<div class="link-item__link">
										<p>Nulla lorem ipsum dolor sit amet lorem eget <a class="hover" href="#">link text here</a> lacinia odio.</p>
										<div class="source">Hover state</div>
									</div>
								</div>
							</div>
							<div class="link-item">
								<div class="link-item__wrap">
									<h4 class="label">Arrow Link</h4>
									<div class="link-item__link is-style-arrow-link">
										<a class="wp-block-button__link" href="#">
											<span>Link Text</span>
										</a>
										<div class="source">Default state</div>
									</div>
									<div class="link-item__link is-style-arrow-link">
										<a class="wp-block-button__link hover" href="#">
											<span>Link Text</span>
										</a>
										<div class="source">Hover state</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="form-elements">
					<div class="form-elements__default-inner">
						<h2 class="form-elements__headline">Form Elements</h2>
						[[ coming soon ]]
					</div>
				</section>
			</div>
		</div>
	</article> <!-- main-content -->

<?php get_footer(); ?>
