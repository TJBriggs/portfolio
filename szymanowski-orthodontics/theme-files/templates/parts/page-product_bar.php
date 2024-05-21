<?php if(get_sub_field('section_bg_color')): ?>
<?php $pb_bg = get_sub_field('section_bg_color'); ?>
<section class="product-bar <?php echo $pb_bg; ?>">
<?php endif; ?>
	<div class="product-bar__inner">
		<?php if(have_rows('image_repeater')) : ?>
			<?php while(have_rows('image_repeater')) : the_row(); ?>
				<?php $prod_image = get_sub_field('product_image'); ?>
				<?php $prod_link = get_sub_field('product_link'); ?>
					<?php if($prod_image) : ?>
						<div class="product-image"><a href="<?php echo $prod_link; ?>"><img src="<?php echo $prod_image['url']; ?>" alt="<?php echo $prod_image['alt']; ?>"></a></div>
					<?php endif; ?>
			<?php endwhile; ?>
		<?php endif; ?>
	</div> <!-- // product-bar__inner -->
	<hr>
</section> <!-- // product-bar -->

