<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' callout-image--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' callout-image--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' callout-image--' . $pad;
		}
	}
	// Image Vars
	$image_array = get_sub_field('background_image');
	$image_size = $image_array['sizes']['parallax'];
	$image_style = ' style="background-image: url('.$image_size.');"';
?>
<article class="callout-image main-torso__module<?php echo $classes; ?>"<?php echo $image_style; ?>>
	<div class="callout-image__overlay">
		<div class="callout-image__inner">
			<div class="callout-image__content">
				<div class="callout-image__text">
					<?php if(get_sub_field('title')) : ?>
						<h1><?php the_sub_field('title'); ?></h1>
					<?php endif; ?>
					<?php if(get_sub_field('text')) : ?>
						<div class="callout-image__blurb"><?php the_sub_field('text');  ?></div>
					<?php endif; ?>
				</div>
				<?php if( have_rows('icons') ) : ?>
					<div class="callout-image__icon-wrap">
						<?php while ( have_rows('icons') ) : the_row();  ?>
							<?php
								$icon = get_sub_field('icon');
							?>
							<div class="callout-image__icon">
								<img src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>">
								<h5><?php the_sub_field('caption'); ?></h5>
							</div>
						<?php endwhile; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</article>
