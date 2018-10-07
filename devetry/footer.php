<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the wrap div and all content
 *
 * @package WordPress
 * @subpackage Lu
 * @since Lu 2.0
 */
?>

<footer class="main-foot">
	<div class="main-foot__inner">
		<div class="main-foot__image-wrap">
			<?php
				// Image One Vars
				$img_one_array = get_field('image_one', 'option');
				$img_one_url = $img_one_array['url'];
				$img_one_alt = $img_one_array['alt'];

				// Image Two Vars
				$img_two_array = get_field('image_two', 'option');
				$img_two_url = $img_two_array['url'];
				$img_two_alt = $img_two_array['alt'];
			?>
			<?php if($img_one_array) : ?>
				<img src="<?php echo $img_one_url; ?>"alt="<?php echo $img_one_alt; ?>">
			<?php endif; ?>
			<?php if($img_two_array) : ?>
				<img src="<?php echo $img_two_url; ?>"alt="<?php echo $img_two_alt; ?>">
			<?php endif; ?>
		</div>
		<div class="main-foot__content">
			<p class="main-foot__address"><a href="<?php the_field('address_link', 'option'); ?>" target="_blank"><?php echo the_field('address', 'option'); ?></a></p>
			<?php if( have_rows('social_links', 'option') ) : ?>
				<div class="main-foot__social-wrap">
					<ul class="main-foot__social-links">
						<?php while ( have_rows('social_links', 'option') ) : the_row();  ?>
							<li><a href="<?php the_sub_field('social_link', 'option'); ?>" target="_blank"><?php the_sub_field('social_icon', 'option'); ?></a></li>
						<?php endwhile; ?>
					</ul>
				</div>
			<?php endif; ?>
			<p class="main-foot__copyright"><?php the_field('copyright_text', 'option'); ?>&nbsp;<?php echo date('Y'); ?></p>
		</div>
	</div> <!-- // main-foot__inner -->
</footer> <!-- // main-foot -->
<!-- sticky footer will fail if anything goes between the closing footer and .wrap -->
</div><!-- // main-wrap -->

<?php wp_footer(); //mandatory ?>
<?php //if(get_field('closing_body_scripts', 'option')) : ?>
	<?php //the_field('closing_body_scripts', 'option'); ?>
<?php //endif; ?>
</body>
</html>