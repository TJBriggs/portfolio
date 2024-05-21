<?php
/**
 * Single Template
 *
 * @package mx-theme
 */

get_header(); ?>

<?php if ( ! post_password_required() ) : ?>
	<?php if ( have_posts() ) : ?>
		<?php
			if ( function_exists('yoast_breadcrumb') ) {
				echo get_template_part('template-parts/components/resource-breadcrumbs');
			}
		?>
		<article id="main-content" class="main-content main-content--single">
			<div class="main-content__wrap">
				<article>
					<?php while ( have_posts() ) : the_post(); ?>
						<div class="long-copy">
							<?php the_content(); ?>
						</div>
					<?php endwhile; wp_reset_postdata(); ?>
				</article>
			</div>
		</article> <!-- main-content -->
	<?php endif; ?>
<?php else : ?>
	<?php echo mx_theme_password_form(); ?>
<?php endif; ?>



<?php get_footer(); ?>
