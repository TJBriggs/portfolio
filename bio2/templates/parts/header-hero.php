<?php 
	$page_id = '';
	$bg_image = null;
	if(is_search()) {
		$page_id = 872;
	} elseif(is_tax('job_types')) {
		$page_id = 41;
	} elseif(is_category() || is_archive() || is_tag()) {
	    $page_id = 33;
    } elseif(is_404()) {
    	$page_id = 1024;
    } else {
    	$page_id = get_the_id();
    }
	// Video Handling
	$hero_type = get_field('hero_type', $page_id);
	$video = get_field( 'hero_video', $page_id );
	preg_match('/src="(.+?)"/', $video, $matches_url );
	$src = $matches_url[1];
	preg_match('/embed(.*?)?feature/', $src, $matches_id );
	$id = $matches_id[1];
	$id = str_replace( str_split( '?/' ), '', $id );

	$translation_array = array(
		'vidID' => $id,
		'heroType' => $hero_type,
		'theUrl' => get_site_url()
	);
	wp_localize_script( 'scripts', 'localScripts', $translation_array );
?>
<?php if(get_field('hero_type', $page_id) == "static") : ?>
	<?php 
        // Set Image Vars
        $image_array = get_field('hero_image', $page_id);
        $attr = array(
            'images' => array(
                '(min-width: 800px)' => $image_array['sizes']['hero'],
                '(max-width: 799px)' => $image_array['sizes']['two-third']
            )
        );
        // execute the function and store the resulting array
        $bg_image = bg_image($attr);
	?>
	<section class="hero-block hero-block--static <?php echo $bg_image['class']; ?>">
		<?php echo $bg_image['styles']; // echo the <style> tag ?>
		<div class="hero-block__inner">
			<?php 
				// Determine Text Layout
				$hero_text = get_field('hero_text', $page_id);
				$text_mod = '';
				if($hero_text !== 'none') : // Show Text?
					if($hero_text == 'left') { // Set modifier class
						$text_mod = ' hero-block__text--left';
					} elseif($hero_text == 'right') { // Set modifier class
						$text_mod = ' hero-block__text--right';
					}
			?>
				<div class="hero-block__text<?php echo $text_mod ?>">
					<h1><?php the_field('hero_title', $page_id); ?></h1>
					<p><?php the_field('hero_blurb', $page_id); ?></p>
					<?php if(get_field('add_button', $page_id) == 'true') : ?>
						<a class="btn" href="<?php the_field('button_link', $page_id); ?>"><?php the_field('button_text', $page_id); ?></a>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php elseif(get_field('hero_type', $page_id) == "video") : ?>
	<section class="hero-block hero-block--video">
		<div class="hero-block__main-wrap">
		    <div class="hero-block__video-wrap">
			    <div id="player"></div>
		        <div class="hero-block__content">
					<div class="hero-block__inner">
						<?php 
							// Determine Text Layout
							$hero_text = get_field('hero_text', $page_id);
							$text_mod = '';
							if($hero_text !== 'none') : // Show Text?
								if($hero_text == 'left') { // Set modifier class
									$text_mod = ' hero-block__text--left';
								} elseif($hero_text == 'right') { // Set modifier class
									$text_mod = ' hero-block__text--right';
								}
						?>
						<div class="hero-block__text<?php echo $text_mod ?>">
							<h1><?php the_field('hero_title', $page_id); ?></h1>
							<p><?php the_field('hero_blurb', $page_id); ?></p>
							<?php if(get_field('add_button', $page_id) == 'true') : ?>
								<a class="btn" href="<?php the_field('button_link', $page_id); ?>"><?php the_field('button_text', $page_id); ?></a>
							<?php endif; ?>
						</div>
						<?php endif; ?>
					</div>
		        </div>
	        </div>
		</div>
	</section>
<?php endif; ?>