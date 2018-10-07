<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the wordpress construct of pages
 * and that other 'pages' on your wordpress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Zemplate
 * @since Zemplate 3.0
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php if ( is_page(31) ): ?>
				<div class="privacy-policy main">
					<div class="privacy-policy__inner">
						<?php the_content(); ?>
					</div>
				</div>
		<?php else: ?>
		
	  	<?php if (get_field('content')): ?>
	  		<div id="next" class="torso-wrap">
			    <?php while(has_sub_field('content')): ?>
			    	<?php echo get_template_part('templates/parts/page', get_row_layout()); ?>
			    <?php endwhile; ?>
			</div> <!-- // torso-wrap -->
		   	<div class="main"></div>
		<?php endif; ?>
	<?php endif; ?>
<?php endwhile; ?>

<?php
	// change footer on location page so it is not redundant with normal footer
	if ( is_page(15) ) :
		get_footer( 'contact' );
	else :
		get_footer();
	endif;
?>