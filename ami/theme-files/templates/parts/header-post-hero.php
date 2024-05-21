<?php 
    // Image Options
    $options = get_field('image_options');
    // Placeholder Var
    $place_url = get_site_url();
    if($options == "custom") {
        $image_array = get_field('half_hero_image');
        $image_size = $image_array['sizes']['hero'];
        $image_style = ' style="background-image: url('.$image_size.');"';
    } elseif($options == "one") {
        $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-placeholder-1.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "two") {
        $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-placeholder-2.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "three") {
        $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-placeholder-3.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "four") {
        $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-placeholder-4.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "five") {
        $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-placeholder-5.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    }
?>
<section class="hero-block hero-block--half <?php echo $random; ?>"<?php echo $image_style; ?>>
    <h2 class="hero-block__title"><?php the_title(); ?></h2>
</section> <!-- // hero-block__half -->
