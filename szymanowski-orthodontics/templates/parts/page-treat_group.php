<?php if(get_sub_field('section_bg_color')): ?>
<?php $tg_bg = get_sub_field('section_bg_color'); ?>
<section class="treat-group <?php echo $tg_bg; ?>">
<?php endif; ?>
	<div class="treat-group__inner">
		<?php if(get_sub_field('treat_group_title')): ?>
			<?php $tg_title = get_sub_field('treat_group_title'); ?>
				<h2 class="treat-group__title"><?php echo $tg_title; ?></h2>	
		<?php endif; ?>

		<?php if(get_sub_field('treat_group_text')): ?>
			<?php $tg_text = get_sub_field('treat_group_text'); ?>
			<div class="treat-group__text">
				<?php echo $tg_text; ?>
			</div> <!-- // treat-group__text -->
		<?php endif; ?>

		<ul class="treat-list">
			<?php if(have_rows('treatment_repeater')) : ?>
				<?php while(have_rows('treatment_repeater')) : the_row(); ?>
					<?php $treat_name = get_sub_field('treatment_name'); ?>
			        <?php $treat_link = get_sub_field('treatment_link'); ?>
					<li>
						<a href="<?php echo $treat_link; ?>">
							<h4><?php echo $treat_name; ?></h4>
						</a>
					</li>
				<?php endwhile; ?>
			<?php endif; ?>
		</ul> <!-- // treat-list -->
	</div> <!-- // treat-group__inner -->
</section> <!-- // treat-group -->


