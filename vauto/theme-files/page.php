<?php
/**
 * Page Template
 *
 * @package mx-theme
 */

get_header(); ?>

<?php if ( ! post_password_required() ) : ?>
	<?php if ( have_posts() ) : ?>
		<article id="main-content" class="main-content main-content--page">
			<?php
				if ( function_exists('yoast_breadcrumb') && ! is_front_page() ) {
					echo get_template_part('template-parts/components/breadcrumbs');
				}
			?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; wp_reset_postdata(); ?>
		</article> <!-- main-content -->
	<?php endif; ?>
<?php else : ?>
	<?php echo mx_theme_password_form(); ?>
<?php endif; ?>

<?php get_footer(); ?>
