<article class="single-torso__item">
    <?php 
        // Image Options
        $options = get_field('image_options');
        // Placeholder Var
        $place_url = get_site_url();
        if($options == "custom") {
            $image_array = get_field('half_hero_image');
            $image_size = $image_array['sizes']['blog-image'];
            $image_style = ' style="background-image: url('.$image_size.');"';
        } elseif($options == "one") {
            $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-feature-1.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "two") {
            $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-feature-2.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "three") {
            $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-feature-3.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "four") {
            $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-feature-4.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "five") {
            $placeholder = $place_url . '/wp-content/themes/ami/images/placeholders/blog-feature-5.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        }
    ?>
	<div class="single-torso__image"<?php echo $image_style; ?>>
	    <div class="post__overlay">
            <?php get_template_part('templates/parts/page', 'social'); ?>
        </div> <!-- // post-title -->
    </div> <!-- //post__image -->
    <div class="single-torso__posted">
        <h4><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h4>
        <span class="post-date"><?php echo get_the_date('n.j.y');?></span>
        <?php if(has_tag()):?>
            <img class="tag-icon" src="<?php bloginfo('template_url'); ?>/images/global/tag.svg" alt="Tag Icon">
            <span class="post-tag"><?php the_tags('');?></span>
        <?php endif;?>
    </div> <!-- // posted -->
    <div class="single-torso__post">
        <p><?php echo tow_excerpt(200); ?></p>
        <a class="continue" href="<?php the_permalink(); ?>">Continue Reading</a>
    </div> <!-- // post -->
</article> <!-- //single__post -->