<?php
/**
 * Template Name: Landing Page
 */
get_header('landing'); ?>

<?php if ( !post_password_required() ) : ?>

	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

		<section class="main-torso page-torso">
			<?php // If ACF Flexible Content field is active on page loop through and build modules ?>
				<?php if(get_field('modules')) : ?>
					<?php while(has_sub_field('modules')) : ?>
						<?php echo get_template_part('templates/modules/module', get_row_layout()); ?>
					<?php endwhile; ?>
				<?php // Else display normal content ?>
			<?php else : ?>
				<?php the_content(); ?>
			<?php endif; ?>
		</section><!-- //main-torso -->

	<?php endwhile; ?>

<?php else : ?>
	<?php echo my_password_form(); ?>
<?php endif; ?>

<?php get_footer('landing'); ?>