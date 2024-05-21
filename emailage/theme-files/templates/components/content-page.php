<section class="main-torso page-torso">
	<?php // If ACF Flexible Content field is active on page loop through and build modules ?>
	<?php if(get_field('modules')) : ?>
	    <?php while(has_sub_field('modules')) : ?>
	        <?php echo get_template_part('templates/modules/module', get_row_layout()); ?>
	    <?php endwhile; ?>
	<?php // Else display normal content ?>
	<?php else: ?>
		<?php get_template_part('templates/components/content'); ?>
	<?php endif; ?>
</section>

