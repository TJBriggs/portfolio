<?php
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' logo-grid--' . $title;
		}
	}
	// Margin classes
	$margins = get_sub_field('margins');
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' logo-grid--' . $margin;
		}
	}
	// Padding classes
	$padding = get_sub_field('padding');
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' logo-grid--' . $pad;
		}
	}
?>
<article class="logo-grid main-torso__module<?php echo $classes; ?>">
	<div class="logo-grid__inner">
		<?php if(get_sub_field('section_title')) : ?>
			<h2><?php the_sub_field('section_title'); ?></h2>
		<?php endif; ?>
		<?php if(get_sub_field('paragraph_text')) : ?>
			<div class="logo-grid__text"><?php the_sub_field('paragraph_text'); ?></div>
		<?php endif; ?>
		<?php if( have_rows('logos') ) : ?>
			<div class="logo-grid__main-wrap">
				<?php while ( have_rows('logos') ) : the_row();  ?>
					<?php
						// Logo Vars
						$logo_array = get_sub_field('logo');
						$logo_url = $logo_array['url'];
						$logo_alt = $logo_array['alt'];
					?>
					<div class="logo-grid__image-wrap">
						<img class="logo-grid__logo" src="<?php echo $logo_url; ?>" alt="<?php echo $logo_alt; ?>">
					</div>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</article>
