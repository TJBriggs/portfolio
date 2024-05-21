<?php if(get_sub_field('section_bg_color')): ?>
<?php $section_bg = get_sub_field('section_bg_color'); ?>
<section class="ctas <?php echo $section_bg; ?>">
<?php endif; ?>
	<div class="ctas__inner">
		<?php if(get_sub_field('section_title')): ?>
			<?php $section_title = get_sub_field('section_title'); ?>
			<div class="section__title-wrap">
				<h2 class="section__title"><?php echo $section_title; ?></h2>	
			</div> <!-- //section__title-wrap -->
		<?php endif; ?>

		<?php if(get_sub_field('section_intro')): ?>
			<?php $intro = get_sub_field('section_intro'); ?>
			<div class="ctas__section-intro"><?php echo $intro; ?></div>	
		<?php endif; ?>

		<ul>
			<?php 
				$count = count(get_sub_field('cta_repeater'));
					if($count == 1):
						$cta_class = "cta--full";
					elseif($count == 2):
						$cta_class = "cta--half";
			    	else: 
			    	 	$cta_class = "cta--thirds";
			    	endif;
			 ?>
			<?php if(have_rows('cta_repeater')) : ?>
				<?php while(have_rows('cta_repeater')) : the_row(); ?>
			        <?php $cta_link = get_sub_field('cta_link'); ?>
			        <?php $cta_link_text = get_sub_field('cta_link_text'); ?>
						<li class="cta <?php echo $cta_class; ?>">
							<a class="btn" target="_blank" href="<?php echo $cta_link; ?>"><?php echo $cta_link_text ?></a>
						</li>
				<?php endwhile; ?>
			<?php endif; ?>
		</ul>
	</div> <!-- //ctas__inner -->
</section> <!-- //ctas -->