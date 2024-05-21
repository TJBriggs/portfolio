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
		<article class="single-torso__content">
			<div class="single-torso__content-inner">
				<?php the_content(); ?>
			</div>
		</article> <!-- //single-torso__content -->
		<article class="cta-newsletter cta-newsletter__blog main-torso__module<?php echo $classes; ?>">
			<div class="cta-newsletter__inner">
				<div class="cta-newsletter__main-wrap">
					<div class="cta-newsletter__text-wrap">
						<div class="cta-newsletter__text">
							<h3>Subscribe</h3>
							<div class="cta-newsletter__blurb">Keep up with our blog and newsletter</div>
						</div>
					</div>
					<div class="cta-newsletter__form-wrap">
						<div class="cta-newsletter__form">
							<?php echo do_shortcode('[gravityform id="5" title="false" description="false" tabindex="50"]'); ?>
						</div>
					</div>
				</div>
			</div>
		</article>
		<article class="blog-content">
			<h2>A few of our favorites...</h2>
			<div class="blog-content__inner">
				<?php
					$post_id = get_the_ID();
					$blog_args = array(
						'post_type' => 'post',
						'posts_per_page' => 2,
						'orderby' => 'date',
						'order' => 'DESC',
						'post__not_in' => array($post_id)
					);
					$blog_query = new WP_Query( $blog_args );
					if ( $blog_query->have_posts() ) :
				?>
					<div class="blog-articles blog-articles__single">
						<?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
							<?php get_template_part('templates/components/blog-excerpt'); ?>
						<?php endwhile; wp_reset_query(); ?>
					</div>
				<?php endif; ?>
			</div><!-- // blog-content__inner -->
		</article><!-- // blog-content -->
	</section><!-- // single-torso -->
<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>