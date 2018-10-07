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
        } elseif($options == "one") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-1.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "two") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-2.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "three") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-3.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "four") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-4.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "five") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-5.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        } elseif($options == "six") {
            $placeholder = $place_url . '/wp-content/themes/cairn/images/placeholders/blog-feature-6.jpg';
            $image_style = ' style="background-image: url('.$placeholder.');"';
        }
    ?>
	<div class="single-torso__image <?php echo $options; ?>"<?php echo $image_style; ?>>
	    <div class="post__overlay">
            <?php get_template_part('templates/parts/module', 'social'); ?>
        </div> <!-- // post-title -->
    </div> <!-- //post__image -->
    <div class="single-torso__posted">
        <h4><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h4>
        <?php if(has_tag()):?>
            <img class="tag-icon" src="<?php bloginfo('template_url'); ?>/images/global/tag.svg" alt="Tag Icon">
            <span class="post-tag"><?php the_tags('');?></span>
        <?php endif;?>
        <span class="post-date"><?php echo get_the_date('n.j.y');?></span>
    </div> <!-- // posted -->
    <div class="single-torso__post">
        <p><?php echo tow_excerpt(210); ?></p>
    </div> <!-- // post -->
</article> <!-- //single__post -->