<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' button-block--' . $title;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' button-block--' . $pad;
		}
	}
	// BG Colors
	$bg_color = get_sub_field('background_color');
	if($bg_color ) {
		$classes .= ' button-block--' . $bg_color;
	}
	// Button Options
	$button_options = get_sub_field('button_options');
	if($bg_color ) {
		$classes .= ' button-block--' . $button_options;
	}
?>
<article class="button-block main-torso__module<?php echo $classes; ?>">
	<div class="button-block__inner">
		<div class="button-block__main-wrap button-block--<?php echo $button_options; ?>">
			<?php if( $button_options === 'left' || $button_options === 'both' ) : ?>
				<a class="button-block__btn btn btn--left" href="<?php the_sub_field('button_left_link') ?>">
					<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
					<span><?php the_sub_field('button_left_text') ?></span>
				</a>
			<?php endif; ?>
			<?php if( $button_options === 'right' || $button_options === 'both' ) : ?>
				<a class="button-block__btn btn btn--right" href="<?php the_sub_field('button_right_link') ?>">
					<span><?php the_sub_field('button_right_text') ?></span>
					<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
				</a>
			<?php endif; ?>

		</div> <!-- // main-wrap -->
	</div> <!-- // inner -->
</article>
