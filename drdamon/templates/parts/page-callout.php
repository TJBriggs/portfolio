<?php if(get_sub_field('section_bg_color')): ?>
<?php $callout_bg = get_sub_field('section_bg_color'); ?>
<section class="callout <?php echo $callout_bg; ?>">
<?php endif; ?>
	<div class="callout__inner">
		<?php if(get_sub_field('callout_title')): ?>
			<?php $callout_title = get_sub_field('callout_title'); ?>
			<div class="section__title-wrap">
				<h2 class="section__title"><?php echo $callout_title; ?></h2>	
			</div> <!-- //section__title-wrap -->
		<?php endif; ?>
		<?php if(have_rows('callout_repeater')) : ?>
			<?php while(have_rows('callout_repeater')) : the_row(); ?>
		        <?php $callout_sub_header = get_sub_field('callout_sub_header'); ?>
		        <?php $callout_text = get_sub_field('callout_text'); ?>
		        <?php $callout_image = get_sub_field('callout_image'); ?>
		        <?php $callout_order = get_sub_field('callout_order'); ?>
				<?php
		        	if($callout_order === "right"):
		        		$modifier = "--swapped";
		        	endif;		      
		        ?>
					<div class="callout__text<?php echo $modifier ?>">
						<?php if( !empty($callout_sub_header) ): ?>
							<h2 class="callout__subheader"><?php echo $callout_sub_header; ?></h2>	
						<?php endif; ?>
						<?php echo $callout_text; ?>
					</div> <!-- //callout__text -->

					<div class="callout__image<?php echo $modifier ?>">
						<img src="<?php echo $callout_image['url']; ?>" alt="<?php echo $callout_image['alt']; ?>">
					</div> <!-- //callout__image -->
			<?php endwhile; ?>
		<?php endif; ?>
	</div> <!-- //callout__inner -->
</section>

