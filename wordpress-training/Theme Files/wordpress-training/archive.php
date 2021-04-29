<?php
/**
 * Archive Template
 *
 * @package Mx Blocks
 */

get_header(); ?>

<article id="main-content" class="main-content main-content--archive">
	<article class="posts posts--archive">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		<?php else : ?>
			<h1>There are no posts at this time.</h1>
		<?php endif; ?>
	</article> <!-- posts -->
</article> <!-- main-content -->

<aside class="sidebar sidebar--archive">
	<?php get_template_part( 'template-parts/components/sidebar' ); ?>
</aside> <!-- sidebar -->

<?php get_footer(); ?>
