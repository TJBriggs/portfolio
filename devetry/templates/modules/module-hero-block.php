<?php
	$page_id = get_the_ID();

	// Hero Mods
	$hero_mod = '';
	$hero_type = get_field('hero_type');
	if( $hero_type ) {
		$hero_mod = ' hero-block--' . $hero_type;
	}

	// Image Vars
	$image_style = '';
	$image_array = get_field('hero_image');
	$image_size = $image_array['sizes']['hero'];
	if ( $hero_type != 'none') {
		$image_style = ' style="background-image: url('.$image_size.');"';
	}
?>
<article class="hero-block<?php echo $hero_mod; ?>"<?php echo $image_style; ?>>
	<?php if( $hero_type != 'none' ) : ?>
		<div class="hero-block__overlay">
			<div class="hero-block__inner">
				<div class="hero-block__content">
					<div class="hero-block__item-wrap">
						<?php if(get_field('hero_text')) : ?>
							<h1><?php the_field('hero_text'); ?></h1>
						<?php endif; ?>
						<?php if(get_field('button_options') === 'one') : ?>
							<div class="hero-block__btn-wrap">
								<a class="btn btn--blue" href="<?php the_field('button_one_link'); ?>"><?php the_field('button_one_text'); ?></a>
							</div>
						<?php elseif(get_field('button_options') === 'two') : ?>
							<div class="hero-block__btn-wrap">
								<a class="btn btn--blue" href="<?php the_field('button_one_link'); ?>"><?php the_field('button_one_text'); ?></a>
								<a class="btn btn--alt" href="<?php the_field('button_two_link'); ?>"><?php the_field('button_two_text'); ?></a>
							</div>
						<?php endif; ?>
					</div>
				</div>
				<?php
					$button_mod = '';
					if(get_field('button_options') === 'one' || get_field('button_options') === 'two') {
						$button_mod = ' buttons-present';
					}
				?>
				<img class="hero-block__arrow<?php echo $button_mod; ?>" src="<?php bloginfo('template_url'); ?>/assets/images/arrow-down.png" alt="Arrow Icon">
			</div>
		</div>
	<?php endif; ?>
</article>
