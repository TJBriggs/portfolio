<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' image-grid--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' image-grid--' . $margin;
		}
	}
?>
<article class="image-grid main-torso__module<?php echo $classes; ?>">
	<div class="image-grid__inner">
		<?php
			$count = count(get_sub_field('images'));
		?>
		<?php if( have_rows('images') ) : ?>
			<?php
				$i = 0;
				$count_mod = '';
				if($count % 2 == 0) {
					$count_mod = ' image-grid__wrap--even';
				} else {
					$count_mod = ' image-grid__wrap--odd';
				}
			?>
			<div class="image-grid__wrap<?php echo $count_mod; ?> <?php echo $count; ?>">
				<?php while ( have_rows('images') ) : the_row();  ?>
					<?php
					$i++;
						// Image Vars
						//$image_style = '';
						$image_array = get_sub_field('image');
						$image_url = $image_array['url'];
						$image_style = ' style="background-image: url('.$image_url.');"';
						if($i == 6) {
							$i = 1;
						}
					?>
					<div class="image-grid__image image-grid__image--<?php echo $i; ?>"<?php echo $image_style; ?>></div>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</article>
