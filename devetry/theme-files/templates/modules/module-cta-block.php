<?php
	// Modifier Classes
	$classes = '';

	// CTA Options
	$cta_options = get_sub_field('cta_options');

	// Overlay Color
	if( $cta_options === 'overlay' ) {
		$overlay_color = get_sub_field('overlay_color');
		if($overlay_color == 'blue') {
			$classes .= ' cta-overlay--overlay-blue';
		} elseif($overlay_color == 'gray') {
			$classes .= ' cta-overlay--overlay-gray';
		}
	}

	// Image Vars
	if( $cta_options === 'overlay' || $cta_options === 'block' ) {
		$image_array = get_sub_field('background_image');
		$image_size = $image_array['sizes']['hero'];
		$image_style = ' style="background-image: url('.$image_size.');"';
	}

	// BG Colors & Image Layout
	if( $cta_options === 'file' ) {
		$bg_color = get_sub_field('background_color');
		$img_layout = get_sub_field('image_layout');
		if($bg_color) {
			$classes .= ' cta-file--' . $bg_color;
		}
		if($img_layout) {
			$classes .= ' cta-file--' . $img_layout;
		}
	}
?>
<?php if( $cta_options === 'bar' ) : ?>
	<article class="cta-bar main-torso__module">
		<div class="cta-bar__inner">
			<div class="cta-bar__main-wrap">
				<div class="cta-bar__text-wrap">
					<h3><?php the_sub_field('text'); ?></h3>
				</div>
				<div class="cta-bar__btn-wrap">
					<a class="btn btn--blue" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
				</div>
			</div>
		</div>
	</article>
<?php elseif( $cta_options === 'block') : ?>
	<article class="cta-block-image main-torso__module<?php echo $classes; ?>"<?php echo $image_style; ?>>
		<div class="cta-block-image__inner">
			<h2><?php the_sub_field('section_title'); ?></h2>
			<div class="cta-block-image__text"><?php the_sub_field('text_wysiwyg'); ?></div>
			<?php if(get_sub_field('button_text')) : ?>
				<a class="btn" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
			<?php endif; ?>
		</div>
	</article>
<?php elseif( $cta_options === 'overlay') : ?>
	<article class="cta-overlay main-torso__module"<?php echo $image_style; ?>>
		<div class="cta-overlay__overlay<?php echo $classes; ?>">
			<div class="cta-overlay__inner">
				<div class="cta-overlay__text-wrap">
					<?php if(get_sub_field('section_title')) : ?>
						<h4 class="cta-overlay__heading"><?php the_sub_field('section_title'); ?></h4>
					<?php endif; ?>
					<?php if(get_sub_field('subtitle')) : ?>
						<h5 class="cta-overlay__subheading"><?php the_sub_field('subtitle'); ?></h5>
					<?php endif; ?>
					<?php if(get_sub_field('text_wysiwyg')) : ?>
						<div class="cta-overlay__main-text"><?php the_sub_field('text_wysiwyg'); ?></div>
					<?php endif; ?>
					<?php if(get_sub_field('button_text')) : ?>
						<a class="btn btn--alt" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_text'); ?></a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</article>
<?php elseif( $cta_options === 'newsletter') : ?>
	<article class="cta-newsletter main-torso__module<?php echo $classes; ?>">
		<div class="cta-newsletter__inner">
			<div class="cta-newsletter__main-wrap">
				<div class="cta-newsletter__text-wrap">
					<div class="cta-newsletter__text">
						<h3><?php the_sub_field('section_title'); ?></h3>
						<div class="cta-newsletter__blurb"><?php the_sub_field('text'); ?></div>
					</div>
				</div>
				<div class="cta-newsletter__form-wrap">
					<div class="cta-newsletter__form">
						<?php
							$form_id = get_sub_field('form_id');
							echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false" tabindex="50"]');
						?>
					</div>
				</div>
			</div>
		</div>
	</article>
<?php elseif( $cta_options === 'file' ) : ?>
	<article class="cta-file main-torso__module<?php echo $classes; ?>">
		<div class="cta-file__inner">
			<div class="cta-file__main-wrap">
				<div class="cta-file__text-wrap">
					<div class="cta-file__text">
						<?php if(get_sub_field('section_title')) : ?>
							<h3 class="cta-file__heading"><?php the_sub_field('section_title'); ?></h3>
						<?php endif; ?>
						<?php if(get_sub_field('subtitle')) : ?>
							<h4 class="cta-file__subheading"><?php the_sub_field('subtitle'); ?></h4>
						<?php endif; ?>
						<?php if(get_sub_field('text_wysiwyg')) : ?>
							<div class="cta-file__main-text"><?php the_sub_field('text_wysiwyg'); ?></div>
						<?php endif; ?>
						<?php
							$form_id = get_sub_field('form_id');
							echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false" tabindex="50"]');
						?>
					</div>
				</div>
				<div class="cta-file__image-wrap">
					<?php
						// File Image
						$file_img = get_sub_field('image');
						$img_url = $file_img['url'];
						$img_alt = $file_img['alt'];
					?>
					<img src="<?php echo $img_url; ?>" alt="<?php echo $img_alt; ?>">
				</div>
			</div>
		</div>
	</article>
<?php endif; ?>




