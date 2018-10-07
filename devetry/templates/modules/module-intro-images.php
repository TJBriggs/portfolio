<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' intro-images--' . $title;
		}
	}
	// BG Image
	$bg_style = '';
	$bg_image = get_sub_field('background_image');
	$bg_size = $bg_image['sizes']['hero'];
	$bg_style = ' style="background-image: url('.$bg_size.');"';
?>
<article class="intro-images main-torso__module<?php echo $classes; ?>"<?php echo $bg_style; ?>>
	<div class="intro-images__inner">
		<div class="intro-images__content-wrap">
			<h2><?php the_sub_field('section_title'); ?></h2>
			<?php if(get_sub_field('subtitle')) : ?>
				<h4><?php the_sub_field('subtitle'); ?></h4>
			<?php endif; ?>
			<div class="intro-images__intro"><?php the_sub_field('text'); ?></div>
			<?php if(get_sub_field('button_text')) : ?>
				<a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
			<?php endif; ?>
			<?php if( have_rows('images') ) : ?>
				<div class="intro-images__image-wrap">
					<?php while ( have_rows('images') ) : the_row();  ?>
						<?php
							// Image Vars
							$image_style = '';
							$image_array = get_sub_field('image');
							$image_size = $image_array['sizes']['intro-grid'];
							$image_style = ' style="background-image: url('.$image_size.');"';
						?>
						<div class="intro-images__image"<?php echo $image_style; ?>>
							<span class="intro-images__icon">
								<?php $icon = get_sub_field('icon'); ?>
								<img class="style-svg" src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>">
							</span>
						</div>
					<?php endwhile; ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</article>
