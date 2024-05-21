<?php
	if( is_page(719) ) {
		$page_id = 719;
	} else {
		$page_id = 2696;
	}
	// Modifier Classes
	$classes = '';
	// Margin classes
	$margins = get_field('blog_form_margins', $page_id);
	if($margins){
		foreach ($margins as $margin) {
			$classes .= ' form-block--' . $margin;
		}
	}
	// Padding classes
	$padding = get_field('blog_form_padding', $page_id);
	if($padding){
		foreach ($padding as $pad) {
			$classes .= ' form-block--' . $pad;
		}
	}
	// BG Color
	$bg_color = get_field('blog_form_bg_color', $page_id);
	if($bg_color) {
		$classes .= ' form-block--' . $bg_color;
	}
?>
<article class="form-block form-block--text main-torso__module<?php echo $classes; ?>">
	<div class="form-block__inner">
		<div class="form-block__main-wrap">
			<div class="form-block__text-wrap">
				<?php
					// Image Vars
					$image_style = '';
					$image_array = get_field('blog_form_bg_image', $page_id);
					$image_url = $image_array['url'];
					$image_style = ' style="background-image: url('.$image_url.');"';
				?>
				<div class="form-block__text"<?php echo $image_style; ?>>
					<h2><?php the_field('blog_form_section_title', $page_id); ?></h2>
					<?php if(get_field('blog_form_pg_text', $page_id)) : ?>
						<p><?php the_field('blog_form_pg_text', $page_id); ?></p>
					<?php endif; ?>
				</div>
			</div>
			<div class="form-block__form-wrap">
				<?php
					$form_id = get_field('blog_form_id', $page_id);
					echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false" tabindex="10"]');
				?>
			</div>
		</div>
	</div>
</article>
