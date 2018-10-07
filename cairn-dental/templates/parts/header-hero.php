<?php 
	$page_id = '';
    if(is_category() || is_tag()) {
        $page_id = 33;
    } else {
        $page_id = get_the_id();
    }
	$hero_type = get_field('hero_type', $page_id);
	if($hero_type == "image") : 
?>
<?php 
	// Set Image Vars
	$hero_array = get_field('static_image', $page_id);
	$hero_size = $hero_array['sizes']['hero'];
	$hero_style = ' style="background-image: url('.$hero_size.');"';
	// Positin Modifier
	$position_mod = '';
	$position = get_field('image_position_left', $page_id);
	if($position) {
		$position_mod = ' hero-block--position-left';
	}
?>
	<section class="hero-block hero-block--static<?php echo $position_mod; ?>"<?php echo $hero_style; ?>>
		<div class="hero-block__overlay overlay">
			<div class="overlay__inner">
				<div class="overlay__content">
					<div class="title__wrap">
						<h1><?php the_field('static_title', $page_id); ?></h1>
					</div> <!-- // title-wrap --> 	
					<div class="text__wrap">
						<p><?php the_field('static_text', $page_id); ?></p>
					</div> <!-- // text-wrap --> 	
					<div class="btn__wrap">
						<a class="btn btn-alt btn-hero" href="<?php the_field('static_btn_lnk', $page_id); ?>"><?php the_field('static_btn_txt', $page_id); ?></a>
					</div> <!-- // btn-wrap --> 
				</div> <!-- // overlay__content --> 			
			</div> <!-- // overlay__inner --> 	
		</div> <!-- // hero-block__overlay --> 
	</section> <!-- // hero-block --> 
<?php elseif($hero_type == "image-only") : ?>
	<?php 
	// Set Image Vars
	$hero_array = get_field('static_image', $page_id);
	$hero_size = $hero_array['sizes']['hero'];
	$hero_style = ' style="background-image: url('.$hero_size.');"';
	// Positin Modifier
	$position_mod = '';
	$position = get_field('image_position_left', $page_id);
	if($position) {
		$position_mod = ' hero-block--position-left';
	}
?>
	<section class="hero-block hero-block--static<?php echo $position_mod; ?>"<?php echo $hero_style; ?>>
	</section> <!-- // hero-block --> 
<?php elseif($hero_type == "slider") : ?>
	<section class="hero-block hero-block--slider">
		<?php if( have_rows('hero_repeater', $page_id) ) : ?>
			<div class="owl-carousel owl-carousel--hero">
				<?php while ( have_rows('hero_repeater', $page_id) ) : the_row(); ?>
					<?php 
						// Set Image Vars
						$slide_array = get_sub_field('slide_image', $page_id);
						$slide_size = $slide_array['sizes']['hero'];
						$slide_style = ' style="background-image: url('.$slide_size.');"';
						// Positin Modifier
						$position_mod = '';
						$position = get_sub_field('slide_position_left', $page_id);
						if($position) {
							$position_mod = ' item--position-left';
						}
					?>
		    		<div class="item<?php echo $position_mod; ?>"<?php echo $slide_style; ?>>
						<div class="hero-block__overlay">
							<div class="overlay__inner">
								<div class="overlay__content">	
									<span class="slider-icon icon-prev"><img src="<?php bloginfo('template_url'); ?>/images/global/icon-prev.png" alt="Previous Slide Arrow Icon"></span>
									<div class="text__wrap">
										<h1><?php the_sub_field('slide_title', $page_id); ?></h1>
										<p><?php the_sub_field('slide_text', $page_id); ?></p>
									</div> <!-- // text-wrap --> 	
									<div class="btn__wrap">
										<a class="btn btn-alt btn-hero" href="<?php the_sub_field('slide_btn_lnk', $page_id); ?>"><?php the_sub_field('slide_btn_txt', $page_id); ?></a>
									</div> <!-- // btn-wrap --> 
									<span class="slider-icon icon-next"><img src="<?php bloginfo('template_url'); ?>/images/global/icon-next.png" alt="Next Slide Arrow Icon"></span>
								</div> <!-- // overlay__content --> 			
							</div> <!-- // overlay__inner --> 	
						</div> <!-- // hero-block__overlay --> 
		    		</div>
		    	<?php endwhile; ?>
			</div>
		<?php endif; ?>
	</section>
<?php endif; ?>