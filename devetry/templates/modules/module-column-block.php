<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' column-block--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' column-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' column-block--' . $pad;
		}
	}
	// Toggle classes
	$bg_color = get_sub_field('background_color');
	if($bg_color ) {
		$classes .= ' column-block--' . $bg_color;
	}
	$col_layout = get_sub_field('column_layout');
	if($col_layout) {
		$classes .= ' column-block--' . $col_layout;
	}
	$content_pos = get_sub_field('content_positioning');
	if($content_pos) {
		$classes .= ' column-block--' . $content_pos;
	}
	$image_col = get_sub_field('image_column');
	$image_type = $image_col['image_type'];
	if($image_type) {
		$classes .= ' column-block--image-' . $image_type;
	}
?>
<article class="column-block main-torso__module<?php echo $classes; ?>">
	<div class="column-block__inner">
		<div class="column-block__main-wrap">
			<div class="column-block__image-wrap">
				<?php
					if($col_layout === 'half') :
					// Main Image Vars
					$main_image = $image_col['main_image'];
					$main_img_url = $main_image['url'];
					$main_img_alt = $main_image['alt'];
				?>
					<img class="column-block__main-image" src="<?php echo $main_img_url; ?>" alt="<?php echo $main_img_alt; ?>">
				<?php
					// Thirds
					else :
				?>
					<?php
						// Circular Image Vars
						$image_style = '';
						$image_array = $image_col['circular_image'];
						$image_size = $image_array['sizes']['tabs'];
						$image_style = ' style="background-image: url('.$image_size.');"';
						if( $image_type === 'circular' ) :
					?>
						<div class="column-block__circular-image"<?php echo $image_style; ?>>
							<span class="column-block__circular-icon">
								<?php
									$icon = $image_col['circular_icon'];
									if($icon) :
								?>
									<img class="style-svg" src="<?php echo $icon['url']; ?>" alt="<?php echo $icon['alt']; ?>">
								<?php endif; ?>
							</span>
						</div> <!-- // circular-image -->
					<?php else : ?>
						<?php
							$reg_image = $image_col['regular_image'];
							$reg_url = $reg_image['url'];
							$reg_alt = $reg_image['alt'];
						?>
						<div class="column-block__regular-image">
							<img src="<?php echo $reg_url; ?>" alt="<?php echo $reg_alt; ?>">
						</div>
					<?php endif; ?>
				<?php endif; ?>
			</div> <!-- // image-wrap -->
			<div class="column-block__text-wrap">
				<?php
					$text_col = get_sub_field('text_column');
					$text_type = $text_col['text_type'];
					$text_icon = $text_col['text_icon'];
					$icon_url = $text_icon['url'];
					$icon_alt = $text_icon['alt'];
					// Testimonial
					if( $text_type === 'testimonial' && $col_layout === 'half') :
				?>
					<div class="column-block__testimonial-wrap">
						<?php
							$test_logo = $text_col['testimonial_logo'];
							$logo_url = $test_logo['url'];
							$logo_alt = $test_logo['alt'];
							$test_text = $text_col['testimonial_text'];
						?>
						<img class="column-block__testimonial-logo" src="<?php echo $logo_url; ?>" alt="<?php echo $logo_alt; ?>">
						<div class="column-block__testimonial"><?php echo $test_text; ?></div>
					</div>

				<?php
					// Normal Text
					else :
				?>
					<div>
						<div class="column-block__headline-wrap">
							<?php
								if($text_icon && $col_layout === 'half') :
							?>
								<img class="column-block__text-icon style-svg" src="<?php echo $icon_url; ?>" alt="<?php echo $icon_alt; ?>">
							<?php endif; ?>
							<?php if($text_col['headline']) : ?>
								<h4 class="column-block__headline"><?php echo $text_col['headline']; ?></h4>
							<?php endif; ?>
						</div> <!-- // headline-wrap -->

						<div class="column-block__main-text">
							<?php echo $text_col['paragraph_text']; ?>
						</div> <!-- // main-text -->

						<?php if($text_col['button_text']) : ?>
							<a class="btn" href="<?php echo $text_col['button_link']; ?>"><?php echo $text_col['button_text']; ?></a>
						<?php endif; ?>

					</div> <!-- // div -->
				<?php endif; ?>
			</div> <!-- // text-wrap -->
		</div> <!-- // main-wrap -->
	</div> <!-- // inner -->
</article>
