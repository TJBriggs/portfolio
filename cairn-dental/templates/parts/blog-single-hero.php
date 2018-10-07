<?php 
    // Image Options
    $options = get_field('image_options');
    // Placeholder Var
    $place_url = get_site_url();
    if($options == "custom") {
        $image_array = get_field('hero_image');
        $image_size = $image_array['sizes']['single-hero'];
        $image_style = ' style="background-image: url('.$image_size.');"';
    } elseif($options == "one") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-1.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "two") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-2.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "three") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-3.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "four") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-4.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "five") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-5.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } elseif($options == "six") {
        $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-placeholder-6.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    }
?>
<div class="single-torso__hero"<?php echo $image_style; ?>>
    <div class="hero__overlay">
        <?php get_template_part('templates/parts/module', 'social'); ?>
    </div>
</div> <!-- // hero-block__half -->