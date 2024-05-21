<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<section class="main-torso single-torso">
		<?php // If ACF Flexible Content field is active on page loop through and build modules ?>
			<?php if(get_field('modules')) : ?>
				<?php while(has_sub_field('modules')) : ?>
					<?php echo get_template_part('templates/modules/module', get_row_layout()); ?>
				<?php endwhile; ?>
			<?php // Else display normal content ?>
			<?php else : ?>
				<?php the_content(); ?>
			<?php endif; ?>
	</section><!-- // single-torso -->
<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>