<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' tabs-block--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' tabs-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' tabs-block--' . $pad;
		}
	}
?>
<article class="tabs-block main-torso__module<?php echo $classes; ?>">
	<div class="tabs-block__inner">
		<h2 class="tabs-block__section-title"><?php the_sub_field('section_title'); ?></h2>
		<?php if( have_rows('tabs_repeater') ) : ?>
			<?php $i = 0;  ?>
			<ul class="tabs-block__nav">
				<?php while ( have_rows('tabs_repeater') ) : the_row();  ?>
					<?php $i++; ?>
					<li class="tabs-block__nav-item" id="nav--<?php echo $i; ?>"><?php the_sub_field('tab_title'); ?></li>
				<?php endwhile; ?>
			</ul>
		<?php endif; ?>
		<?php if( have_rows('tabs_repeater') ) : ?>
			<?php $j = 0; ?>
			<div class="tabs-block__tab-wrap">
				<?php while ( have_rows('tabs_repeater') ) : the_row();  ?>
					<?php $j++; ?>
					<div class="tabs-block__tab-item" id="tab--<?php echo $j; ?>">
						<h5 class="tabs-block__tab-title"><?php the_sub_field('tab_title'); ?></h5>
						<div class="tabs-block__content-wrap">
							<div class="tabs-block__image-wrap">
								<?php
									// Image Vars
									$image_style = '';
									$image_array = get_sub_field('tab_image');
									$image_size = $image_array['sizes']['tabs'];
									$image_style = ' style="background-image: url('.$image_size.');"';
								?>
								<div class="tabs-block__image"<?php echo $image_style; ?>>
									<span class="tabs-block__icon">
										<?php $icon = get_sub_field('tab_icon'); ?>
										<img class="style-svg" src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>">
									</span>
								</div>
							</div>
							<div class="tabs-block__text-wrap">
								<span>
									<h3 class="tabs-block__subtitle"><?php the_sub_field('tab_subtitle'); ?></h3>
									<div class="tabs-block__text"><p><?php the_sub_field('tab_text'); ?></p></div>
									<?php if(get_sub_field('button_text')) : ?>
										<a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
									<?php endif; ?>
								</span>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</article>
