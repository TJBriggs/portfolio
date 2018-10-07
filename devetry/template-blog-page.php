<?php
/**
 * Template Name: Blog Page
 */

$page_id = get_the_ID();

get_header(); ?>

<section class="main-torso blog-torso">
	<?php get_template_part('templates/components/cta-newsletter'); ?>
	<?php
		// if(get_field('blog_text_bg_color', $page_id)) {
		// 	get_template_part('templates/components/text-block');
		// }
	?>
	<article class="blog-content">
		<div class="blog-content__mobile-wrap blog-dropdown">
			<?php echo facetwp_display( 'facet', 'category_dropdown' ); ?>
		</div>
		<div class="blog-content__category-wrap">
			<div class="blog-content__category-links">
				<?php echo facetwp_display( 'facet', 'category_links' ); ?>
			</div>
		</div>
		<div class="blog-content__inner">
			<div class="blog-articles">
				<?php echo facetwp_display( 'template', 'blog_grid' ); ?>
			</div>
			<?php echo facetwp_display( 'pager' ); ?>
		</div><!-- // blog-content__inner -->
	</article><!-- // blog-content -->
	<?php
		if(get_field('blog_form_bg_color', $page_id)) {
			get_template_part('templates/components/form-block-text');
		}
	?>
</section><!-- // blog-torso -->

<?php get_footer(); ?>