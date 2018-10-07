<?php
    // Modifier Classes
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' blog-feed--' . $title;
        }
    }
?>
<article class="blog-feed<?php echo $classes; ?>"<?php echo $style; ?>>
    <div class="blog-feed__inner">
        <?php
            // Post Objects
            $post_objects = get_sub_field('blog_posts');
            if( $post_objects ):
        ?>
            <div class="feed__wrap">
                <?php $image_cnt = 0; ?>
                <?php foreach( $post_objects as $post): // variable must be called $post (IMPORTANT) ?>
                    <?php setup_postdata($post); ?>
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
                    <article class="single-torso__item">
                        <div class="single-torso__image"<?php echo $image_style; ?>>
                            <div class="post__overlay">
                                <?php get_template_part('templates/parts/module', 'social'); ?>
                            </div> <!-- // post-title -->
                        </div> <!-- //post__image -->
                        <div class="copy__wrap">
                            <div class="single-torso__posted">
                                <h4><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h4>
                            </div> <!-- // posted -->
                            <div class="single-torso__post">
                                <p><?php echo tow_excerpt(210); ?></p>
                                <a class="btn" href="<?php the_permalink(); ?>">Read More</a>
                            </div> <!-- // post -->
                        </div>
                    </article> <!-- //single__post -->              
                <?php endforeach; ?>
                <?php //wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
            </div> <!-- // feed__wrap -->  
        <?php endif; ?>
    </div> <!-- // blog-feed__inner -->
</section> <!-- // blog-feed -->
