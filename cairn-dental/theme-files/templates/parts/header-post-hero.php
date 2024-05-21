<?php 
	// Image vars
    $halfImg = get_field('half_hero_image');
    $halfImage = $halfImg['sizes']['hero'];
    $halfImg = $halfImg['url'];
    $halfStyle = ' style="background-image: url('.$halfImg.');"';
    // Load random placeholder iamge if no here was uploaded
    if(!$halfImg) {
        // Random Integer
        $random = rand(1, 5);
        // Placehoder vars
        $place_url = get_site_url();
        if($random == 1) {
            $placeholder = $place_url . "/wp-content/themes/ami/images/global/blog-placeholder-1.jpg";
        } elseif($random == 2) {
            $placeholder = $place_url . "/wp-content/themes/ami/images/global/blog-placeholder-2.jpg";
        } elseif($random == 3) {
            $placeholder = $place_url . "/wp-content/themes/ami/images/global/blog-placeholder-3.jpg";
        } elseif($random == 4) {
            $placeholder = $place_url . "/wp-content/themes/ami/images/global/blog-placeholder-4.jpg";
        } else {
            $placeholder = $place_url . "/wp-content/themes/ami/images/global/blog-placeholder-5.jpg";
        }
        $placeStyle = ' style="background-image: url('.$placeholder.');"';
    	$halfStyle = $placeStyle;
    }
?>
<article class="hero-block hero-block--half <?php echo $random; ?>"<?php echo $halfStyle; ?>>
    <h2 class="hero-block__title"><?php the_title(); ?></h2>
</article> <!-- // hero-block__half -->
