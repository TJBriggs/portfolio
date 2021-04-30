<?php
/**
 * Index Template
 *
 * @package ThemeName
 */

get_header(); ?>

<?php if ( ! post_password_required() ) : ?>
	<?php if ( have_posts() ) : ?>
		<article id="main-content" class="main-content main-content--index">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; wp_reset_postdata(); ?>
		</article> <!-- main-content -->
	<?php endif; ?>
<?php else : ?>
	<?php echo MxBlocks_password_form(); ?>
<?php endif; ?>

<?php get_footer(); ?>
