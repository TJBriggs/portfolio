<?php
	// CTA Options
	$form_options = get_sub_field('form_options');
?>

<?php if( $form_options === 'text' ) : ?>

	<?php
		$classes = '';
		$margins = get_sub_field('margins');
		if($margins){
			foreach ($margins as $margin) {
				$classes .= ' form-block--' . $margin;
			}
		}
		// Padding classes
		$padding = get_sub_field('padding');
		if($padding){
			foreach ($padding as $pad) {
				$classes .= ' form-block--' . $pad;
			}
		}
		// Overlap Mod
		$overlap_mod = get_sub_field('hero_overlap');
		if($overlap_mod){
			$classes .= ' form-block--overlap';
		}
		// Overlap BG Color
		$overlap_bg = get_sub_field('overlap_bg');
		if($overlap_bg){
			$classes .= ' form-block--' . $overlap_bg;
		}
	?>

	<article class="form-block form-block--text main-torso__module<?php echo $classes; ?>">
		<div class="form-block__inner">
			<div class="form-block__main-wrap">
				<div class="form-block__text-wrap">
					<?php
						// Image Vars
						$image_style = '';
						$image_array = get_sub_field('background_image');
						$image_url = $image_array['url'];
						$image_style = ' style="background-image: url('.$image_url.');"';
					?>
					<div class="form-block__text"<?php echo $image_style; ?>>
						<h2><?php the_sub_field('section_title'); ?></h2>
						<?php if(get_sub_field('paragraph_text')) : ?>
							<p><?php the_sub_field('paragraph_text'); ?></p>
						<?php endif; ?>
					</div>
				</div>
				<div class="form-block__form-wrap">
					<?php
						$form_id = get_sub_field('form_id');
						echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false" tabindex="10"]');
					?>
				</div>
			</div>
		</div>
	</article>

<?php elseif( $form_options === 'circle') : ?>
	<?php
		// BG Image
		$bg_style = '';
		$bg_image = get_sub_field('background_image');
		$bg_size = $bg_image['sizes']['hero'];
		$bg_style = ' style="background-image: url('.$bg_size.');"';
	?>

	<article class="form-block form-block--circle main-torso__module"<?php echo $bg_style; ?>>
		<div class="form-block__inner">
			<div class="form-block__main-wrap">
				<div class="form-block__form-wrap">
					<?php
						$form_id = get_sub_field('form_id');
						echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]');
					?>
				</div>
				<div class="form-block__image-wrap">
					<figure>
						<?php
							// Image Vars
							$image_array = get_sub_field('circular_image');
							$image_url = $image_array['url'];
							$image_alt = $image_array['alt'];
						?>
						<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
						<figcaption><?php the_sub_field('image_caption'); ?></figcaption>
					</figure>
				</div>
			</div>
		</div>
	</article>

<?php elseif( $form_options === 'map') : ?>

	<article class="contact-block main-torso__module">
		<div class="contact-block__inner">
			<div class="contact-block__main-wrap">
				<?php
					// Map Image
					$map_style = '';
					$map_image = get_sub_field('map_image');
					$map_url = $map_image['url'];
					$map_style = ' style="background-image: url('.$map_url.');"';
				?>
				<a class="contact-block__map" href="<?php the_sub_field('map_link'); ?>" target="_blank"<?php echo $map_style; ?>></a>
				<div class="contact-block__form-wrap">
					<?php
						$form_id = get_sub_field('form_id');
						echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false"]');
					?>
				</div>
			</div>
		</div>
	</article>

<?php endif; ?>
