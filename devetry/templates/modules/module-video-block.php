<?php
	// Enqueue Scripts
	wp_enqueue_script('owl');
	wp_enqueue_script('inview');
	// Modifier Classes
	$classes = '';
	$special_class = get_sub_field('modifiers');
	if($special_class){
		foreach ($special_class as $class) {
			$title = get_the_title($class->ID);
			$classes .= ' video-block--' . $title;
		}
	}
	// Slider Type
	$slider_type = get_sub_field('slider_type');
	if($slider_type){
		$classes .= ' video-block--' . $slider_type;
	}
	// Background Color
	$bg_color = get_sub_field('bg_color');
	if($bg_color){
		$classes .= ' video-block--' . $bg_color;
	}
	// Slider Type
	$slider_type = get_sub_field('slider_type');
	if($slider_type == 'slider') :
?>
<article class="video-block video-block--slider main-torso__module<?php echo $classes; ?>">
	<?php if(get_sub_field('section_title')) : ?>
		<h2 class="video-block__section-title"><?php the_sub_field('section_title'); ?></h2>
	<?php endif; ?>
	<?php if( have_rows('slides') ) : ?>
		<div class="slider owl-carousel js-video-slider">
			<?php $i = 0; ?>
			<?php while ( have_rows('slides') ) : the_row(); $i++; ?>
				<?php
					// Image Vars
					$image_array = get_sub_field('bg_image');
					$image_size = $image_array['sizes']['video-bg'];
					$image_style = ' style="background-image: url('.$image_size.');"';
				?>
				<div class="slider__slide"<?php echo $image_style; ?>>
					<div class="slider__slide-overlay">
						<div class="slider__slider-inner">
							<div class="slider__video-wrap">
								<?php
									// Poster Vars
									$mobile_img = get_sub_field('mobile_video_image');
									$mobile_url = $mobile_img['url'];
									// Video Vars
									$theme_url = get_bloginfo('template_url');
									$video_url = '';
									$video_name = get_sub_field('video_name');
									if($video_name) {
										$video_url = $theme_url . '/assets/video/' . $video_name;
									}
								?>
								<video class="slider__video" id="video-<?php echo $i; ?>" muted loop poster="<?php echo $mobile_url; ?>">
									<source src="<?php echo $video_url; ?>.mp4" type="video/mp4">
								</video>
							</div>
							<div class="slider__text-wrap">
								<div class="slider__main-wrap">
									<?php
										// Logo Vars
										$logo = get_sub_field('slide_logo');
									?>
									<div class="slider__logo">
										<img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
									</div>
									<div class="slider__main-text"><?php the_sub_field('main_text'); ?></div>
								</div>
								<div class="slider__features-wrap">
									<div class="slider__buttons">
										<a class="btn" href="<?php the_sub_field('button_one_link'); ?>"><?php the_sub_field('button_one_text'); ?></a>
									</div>
									<div class="slider__features"><?php the_sub_field('features_text'); ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<?php endwhile; ?>
		</div>
	<?php endif; ?>
</article>
<?php elseif($slider_type == 'carousel') : ?>
<article class="video-block video-block--carousel main-torso__module<?php echo $classes; ?>">
	<?php if(get_sub_field('section_title')) : ?>
		<h2 class="video-block__section-title"><?php the_sub_field('section_title'); ?></h2>
	<?php endif; ?>
	<?php if( have_rows('slides') ) : ?>
		<div class="slider owl-carousel js-video-carousel">
			<?php $i = 0; ?>
			<?php while ( have_rows('slides') ) : the_row(); $i++; ?>
				<?php
					// Image Vars
					$image_array = get_sub_field('bg_image');
					$image_size = $image_array['sizes']['video-bg'];
					$image_style = ' style="background-image: url('.$image_size.');"';
				?>
				<div class="slider__slide"<?php echo $image_style; ?>>
					<div class="slider__slide-overlay">
						<div class="slider__slider-inner">
							<div class="slider__video-wrap">
								<?php
									// Poster Vars
									$mobile_img = get_sub_field('mobile_video_image');
									$mobile_url = $mobile_img['url'];
									// Video Vars
									$theme_url = get_bloginfo('template_url');
									$video_url = '';
									$video_name = get_sub_field('video_name');
									if($video_name) {
										$video_url = $theme_url . '/assets/video/' . $video_name;
									}
								?>
								<video class="slider__video" id="video-<?php echo $i; ?>" muted loop poster="<?php echo $mobile_url; ?>">
									<source src="<?php echo $video_url; ?>.mp4" type="video/mp4">
								</video>
							</div>
							<div class="slider__text-wrap">
								<div class="slider__main-wrap">
									<?php
										// Logo Vars
										$logo = get_sub_field('slide_logo');
									?>
									<div class="slider__logo">
										<img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
									</div>
									<div class="slider__main-text"><?php the_sub_field('main_text'); ?></div>
								</div>
								<div class="slider__features-wrap">
									<div class="slider__buttons"></div>
									<div class="slider__features"><?php the_sub_field('features_text'); ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<?php endwhile; ?>
		</div>
	<?php endif; ?>
	<div class="video-block__nav-wrap">
		<?php
			$count_mod = '';
			if( get_sub_field('slides') ) {
				$count_mod = ' count--' . count( get_sub_field('slides') );
			}
		?>
		<ul class="video-block__nav<?php echo $count_mod; ?>">
			<?php while(have_rows('slides')) : the_row(); ?>
				<li class="nav-item">
					<a class="nav-item__link" href="javascript:void(0);">
						<?php
							$tab_logo = get_sub_field('tab_logo');
							$tab_url = $tab_logo['url'];
							$tab_alt = $tab_logo['alt'];
						?>
						<div class="nav-item__wrap">
							<img src="<?php echo $tab_url; ?>" alt="<?php echo $tab_alt; ?>">
							<span class="nav-item__text"><?php the_sub_field('tab_text'); ?></span>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
		</ul>
	</div>
</article>
<?php endif; ?>
