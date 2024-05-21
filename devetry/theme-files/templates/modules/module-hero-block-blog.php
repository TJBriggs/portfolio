<?php
	$page_id = get_the_ID();

	// Hero Mods
	$hero_mod = '';
	$hero_type = get_field('blog_hero_type', $page_id);
	if( $hero_type ){
		$hero_mod = ' hero-block--' . $hero_type;
	}
	$image_style = '';
	// Image Vars
	$image_array = get_field('blog_hero_image', $page_id);
	$image_size = $image_array['sizes']['hero'];
	$image_style = ' style="background-image: url('.$image_size.');"';
?>
<article class="hero-block hero-block__blog<?php echo $hero_mod; ?>"<?php echo $image_style; ?>>
	<div class="hero-block__overlay">
		<div class="hero-block__inner">
			<div class="hero-block__content">
				<?php if( is_single() ) : ?>
					<div>
						<h1><strong><?php the_title(); ?></strong></h1>
						<span><?php echo get_the_date('n.j.y');?></span>
					</div>
				<?php elseif( get_field( 'blog_hero_text', $page_id ) ) : ?>
					<h1><?php the_field( 'blog_hero_text', $page_id ); ?></h1>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php
		if( is_single() ) {
			echo get_template_part( 'templates/components/social-share' );
		}
	?>
</article>
