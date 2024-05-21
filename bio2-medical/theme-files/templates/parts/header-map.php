<?php
    // call/set up the scripts
    wp_enqueue_script('gmap');
    wp_enqueue_script('map');
    $urls = array('image' => get_template_directory_uri().'/images/global/map-marker.png');
    wp_localize_script('map', 'urls', $urls);
?>
<?php if(have_rows('locations_repeater')) : ?>
	<div class="header-map header-map--<?php the_field('map_type') ?>">
		<?php while (have_rows('locations_repeater')) : the_row(); 
			$location = get_sub_field('location');
			$marker = get_sub_field('map_marker');
			$marker_type = get_sub_field('marker_pin_type');
		?>
			<div class="marker" data-icon="<?php echo $marker_type; ?>" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>">
				<?php echo $marker; ?>			
			</div> <!-- // marker -->
		<?php endwhile; ?>
	</div> <!-- // contact-location -->
<?php endif; ?>