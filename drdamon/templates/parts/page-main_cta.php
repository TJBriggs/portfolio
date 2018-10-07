<?php if(get_sub_field('section_bg_color')): ?>
<?php $cta_bg = get_sub_field('section_bg_color'); ?>
<section class="main-cta <?php echo $cta_bg; ?>">
<?php endif; ?>
	<div class="main-cta__inner">		
		<?php if(get_sub_field('cta_text')): ?>
		    <?php $cta_text = get_sub_field('cta_text'); ?>
				<div class="main-cta__text ">				
					<?php echo $cta_text; ?>
				</div> <!-- //main-cta__text -->
		<?php endif; ?>

		<?php if(get_sub_field('cta_buttons')): ?>
		    <?php $cta_btns = get_sub_field('cta_buttons'); ?>
				<div class="main-cta__buttons">				
					<?php echo $cta_btns; ?>
				</div> <!-- //main-cta__buttons -->
		<?php endif; ?>
	</div> <!-- //main-cta__inner -->
</section> <!-- //main-cta -->

