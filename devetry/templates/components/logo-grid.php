<?php
	if( is_page(719) ) {
		$page_id = 719;
	} else {
		$page_id = 2696;
	}
	// Modifier Classes
	$classes = '';
	// Margin classes
	$margins = get_field('margins', $page_id);
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' logo-grid--' . $margin;
		}
	}
	// Padding classes
	$padding = get_field('padding', $page_id);
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' logo-grid--' . $pad;
		}
	}
?>
<article class="logo-grid main-torso__module<?php echo $classes; ?>">
	<div class="logo-grid__inner">
		<?php if(get_field('section_title', $page_id)) : ?>
			<h2><?php the_field('section_title', $page_id); ?></h2>
		<?php endif; ?>
		<?php if(get_field('paragraph_text', $page_id)) : ?>
			<div class="logo-grid__text"><?php the_field('paragraph_text', $page_id); ?></div>
		<?php endif; ?>
		<?php if( have_rows('logos', $page_id) ) : ?>
			<div class="logo-grid__main-wrap">
				<?php while ( have_rows('logos', $page_id) ) : the_row();  ?>
					<?php
						// Logo Vars
						$logo_array = get_sub_field('logo', $page_id);
						$logo_url = $logo_array['url'];
						$logo_alt = $logo_array['alt'];
					?>
					<pre><?php //echo $logo_array; ?></pre>
					<div class="logo-grid__image-wrap">
						<img class="logo-grid__logo" src="<?php echo $logo_url; ?>" alt="<?php echo $logo_alt; ?>">
					</div>
				<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</div>
</article>
