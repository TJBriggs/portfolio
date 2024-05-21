<?php
/**
 * Template Name: Style Guide Single
 *
 * @package mx-theme
 */

get_header(); ?>

<?php if ( ! post_password_required() ) : ?>
	<?php if ( have_posts() ) : ?>
		<article id="main-content" class="main-content main-content--style-guide-page">
			<?php
				if ( function_exists('yoast_breadcrumb') ) {
					echo get_template_part('template-parts/components/breadcrumbs');
				}
			?>
			<div class="style-guide">
				<?php while ( have_posts() ) : the_post(); ?>
					<header class="style-guide__header">
						<div class="style-guide__default-inner">
							<h1><?php the_title(); ?></h1>
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
					<?php the_content(); ?>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
		</article> <!-- main-content -->
	<?php endif; ?>
<?php else : ?>
	<?php echo mx_theme_password_form(); ?>
<?php endif; ?>

<?php get_footer(); ?>
