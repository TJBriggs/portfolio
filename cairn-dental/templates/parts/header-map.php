<?php
    // call/set up the scripts
    wp_enqueue_script('gmap');
    wp_enqueue_script('map');
    $urls = array('image' => get_template_directory_uri().'/images/global/map-marker.png');
    wp_localize_script('scripts', 'urls', $urls);
?>
<?php if(have_rows('locations_repeater')) : ?>
	<section class="map-block">
		<div class="header-map">
			<?php while (have_rows('locations_repeater')) : the_row(); 
				$location = get_sub_field('location');
				$marker = get_sub_field('map_marker');
			?>
				<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>">
					<?php echo $marker; ?>			
				</div> <!-- // marker -->
			<?php endwhile; ?>
		</div> <!-- // contact-location -->
		<div class="map-block__overlay">
			<div class="overlay__inner">
				<div class="overlay__content">
					<div class="title__wrap">
						<h1><?php the_field('overlay_title'); ?></h1>
					</div> <!-- // title-wrap --> 	
					<div class="text__wrap">
						<p><?php the_field('overlay_text'); ?></p>
					</div> <!-- // text-wrap --> 	
				</div> <!-- // overlay__content --> 			
			</div> <!-- // overlay__inner --> 	
		</div> <!-- // hero-block__overlay --> 
	</section> <!-- // map-block --> 	
<?php endif; ?>