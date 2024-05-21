<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' text-block--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' text-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' text-block--' . $pad;
		}
	}
	$bg_color = get_sub_field('background_color');
	if($bg_color == 'blue') {
		$classes .= ' text-block--blue';
	} elseif($bg_color == 'gray') {
		$classes .= ' text-block--gray';
	}
?>
<article class="text-block main-torso__module<?php echo $classes; ?>">
	<div class="text-block__inner">
		<?php
			$margin_mod = '';
			if( get_sub_field('lead_text') && get_sub_field('paragraph_text') ) {
				$margin_mod = ' text-block--margin-top';
			}
		?>
		<?php if(get_sub_field('lead_text')) : ?>
			<p class="text-block__lead-text"><?php the_sub_field('lead_text'); ?></p>
		<?php endif; ?>
		<?php if(get_sub_field('paragraph_text')) : ?>
			<div class="text-block__main-text<?php echo $margin_mod; ?>"><?php the_sub_field('paragraph_text'); ?></div>
		<?php endif; ?>
	</div>
</article>
