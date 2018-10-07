<article class="single-torso__item">
    <?php 
        // Image Options
        $options = get_field('image_options');
        // Placeholder Var
        $place_url = get_site_url();
        if($options == "custom") {
            $image_array = get_field('hero_image');
            $image_size = $image_array['sizes']['blog-image'];
            $image_style = ' style="background-image: url('.$image_size.');"';
        } else {
            $placeholder = $place_url . '/wp-content/themes/bio2/images/placeholders/blog-feature-'.$options.'.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } 
    ?>
	<div class="single-torso__image <?php echo $options; ?>"<?php echo $image_style; ?>>
	    <div class="post__overlay">
            <?php get_template_part('templates/parts/module', 'social'); ?>
            <span class="post-date"><?php echo get_the_date('n.j.y');?></span>
            <p><?php echo tow_title(150); ?></p>
            <?php if(in_category(5)) : // Category for Press Releases ?>
                <a class="read-more" href="<?php the_field('press_link'); ?>" target="_blank">Visit Original Article</a>
            <?php else : ?>
                <a class="read-more" href="<?php the_permalink(); ?>">Read More</a>
            <?php endif; ?>
        </div> <!-- // post-title -->
    </div> <!-- //post__image -->
    <?php if(has_tag()):?>
        <span class="post-tag"><?php the_tags('');?></span>
    <?php endif;?>
</article> <!-- //single__post -->