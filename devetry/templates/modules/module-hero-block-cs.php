<?php
	// if ( is_post_type_archive('case-studies') || taxonomy_exists('case-studies') ) {
	// 	$page_id = 2696;
	// } elseif( is_singular('case-studies') ) {
	// 	$page_id = get_the_ID();
	// }

	if ( is_singular('case-studies')  ) {
		$page_id = get_the_ID();
	} else {
		//$page_id = get_the_ID();
		$page_id = 2696;
	}

	// Hero Mods
	$hero_mod = '';
	$hero_type = get_field('cs_hero_type', $page_id);
	if( $hero_type ){
		$hero_mod = ' hero-block--' . $hero_type;
	}
	$image_style = '';
	// Image Vars
	$image_array = get_field('cs_hero_image', $page_id);
	$image_size = $image_array['sizes']['hero'];
	$image_style = ' style="background-image: url('.$image_size.');"';
?>
<article class="hero-block hero-block__blog<?php echo $hero_mod; ?>"<?php echo $image_style; ?>>
	<!-- <h1><?php echo $page_id; ?></h1> -->
	<div class="hero-block__overlay">
		<div class="hero-block__inner">
			<div class="hero-block__content">
				<?php if( $hero_type === 'single' ) : ?>
					<h1><strong><?php the_title(); ?></strong></h1>
				<?php elseif( get_field( 'cs_hero_text', $page_id ) ) : ?>
					<h1><?php the_field( 'cs_hero_text', $page_id ); ?></h1>
				<?php endif; ?>
			</div>
		</div>
	</div>
</article>
