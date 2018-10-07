<?php
/**
 * The template for displaying archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */
$page_id = 2696;

get_header('case-study'); ?>

<section class="main-torso blog-torso">
	<?php
		if(get_field('blog_text_bg_color', $page_id)) {
			get_template_part('templates/components/text-block');
		}
	?>
	<article class="blog-content case-studies-content">
		<div class="blog-content__mobile-wrap case-study-dropdown">
			<?php echo facetwp_display( 'facet', 'cs_category_dropdown' ); ?>
		</div>
		<div class="blog-content__category-wrap">
			<div class="blog-content__category-links">
				<?php echo facetwp_display( 'facet', 'cs_category_links' ); ?>
			</div>
		</div>
		<div class="blog-content__inner">
			<div class="blog-articles">
				<?php echo facetwp_display( 'template', 'case_study_grid' ); ?>
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