<?php 
    // Image Options
    $options = get_field('image_options');
    // Placeholder Var
    $place_url = get_site_url();
    if($options == "custom") {
        $image_array = get_field('hero_image');
        $image_size = $image_array['sizes']['single-hero'];
        $image_style = ' style="background-image: url('.$image_size.');"';
    } else {
        $placeholder = $place_url . '/wp-content/themes/bio2/images/placeholders/blog-placeholder-'.$options.'.jpg';
        $image_style = ' style="background-image: url('.$placeholder.');"';
    } 
?>
<div class="single-torso__hero"<?php echo $image_style; ?>>
    <div class="hero__overlay">
        <?php get_template_part('templates/parts/module', 'social'); ?>
        <span class="post-date"><?php echo get_the_date('n.j.y');?></span>
    </div>
</div> <!-- // hero-block__half -->