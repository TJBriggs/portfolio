<?php 
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' testimonial-block--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' testimonial-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' testimonial-block--' . $pad;
		}
	}
?>
<article class="testimonial-block main-torso__module<?php echo $classes; ?>">
	<div class="testimonial-block__inner">
		<div class="testimonial-block__content">
			<h4><?php the_sub_field('testimonial'); ?></h4>
			<hr class="small-rule"></hr>
			<p><?php the_sub_field('byline'); ?></p>
			<?php 
				$logo_array = get_sub_field('logo');
				$logo_url = $logo_array['url'];
				$logo_alt = $logo_array['alt'];
			?>
			<img src="<?php echo $logo_url; ?>" alt="<?php echo $logo_alt; ?>">
		</div>
	</div>
</article>