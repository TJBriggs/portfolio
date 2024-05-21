<?php
	if( is_page(719) ) {
		$page_id = 719;
	} else {
		$page_id = 2696;
	}
	// Modifier Classes
	$classes = '';
	// Margin classes
	$margins = get_field('blog_text_margins', $page_id);
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' text-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_field('blog_text_padding', $page_id);
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' text-block--' . $pad;
		}
	}
	$bg_color = get_field('blog_text_bg_color', $page_id);
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
			if( get_field('blog_text_lead_text', $page_id) && get_field('blog_text_paragraph_text', $page_id) ) {
				$margin_mod = ' text-block--margin-top';
			}
		?>
		<?php if(get_field('blog_text_lead_text', $page_id)) : ?>
			<p class="text-block__lead-text"><?php the_field('blog_text_lead_text', $page_id); ?></p>
		<?php endif; ?>
		<?php if(get_field('blog_text_pg_text')) : ?>
			<div class="text-block__main-text<?php echo $margin_mod; ?>"><?php the_field('blog_text_pg_text', $page_id); ?></div>
		<?php endif; ?>
	</div>
</article>
