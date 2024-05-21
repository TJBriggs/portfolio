<?php
    // Modifier Classes
    $classes = '';
    $special_class = get_sub_field('content_modifiers');
    if($special_class){
        foreach ($special_class as $class) {
            $title = get_the_title($class->ID);
            $classes .= ' blog-feed--' . $title;
        }
    }
    //spacing classes
    $spacing = get_sub_field('spacing');
    if($spacing){
        foreach ($spacing as $space) {
            $classes .= ' blog-feed--' . $space;
        }
    }
    // Background Modifiers
    $bg_mod = '';
    $bg_options = get_sub_field('bg_options');
    if($bg_options == "gray") {
        $bg_mod = ' blog-feed--bg-gray';
    } elseif($bg_options == "blue") {
        $bg_mod = ' blog-feed--bg-blue';
    } 
?>
<article class="blog-feed<?php echo $classes; ?><?php echo $bg_mod; ?>">
    <div class="blog-feed__inner">
        <?php if(get_sub_field('section_title')) : ?>
            <h1 class="section-title"><?php the_sub_field('section_title'); ?></h1>
        <?php endif; ?>
        <?php
            // Post Objects
            $post_objects = get_sub_field('blog_posts');
            if( $post_objects ):
        ?>
            <div class="blog-feed__wrap">
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
                        } else {
                            $placeholder = $place_url . '/wp-content/themes/bio2/images/placeholders/blog-feature-'.$options.'.jpg';
                            $image_style = ' style="background-image: url('.$placeholder.');"';
                        }
                    ?>
                    <div class="single-torso__image"<?php echo $image_style; ?>>
                        <div class="post__overlay">
                            <p><?php echo tow_title(170); ?></p>
                            <?php if(in_category(5)) : // Category for Press Releases ?>
                                <a class="read-more press" href="<?php the_field('press_link'); ?>" target="_blank">Read Full Post</a>
                            <?php else : ?>
                                <a class="read-more permalink" href="<?php the_permalink(); ?>">Read Full Post</a>
                            <?php endif; ?>
                        </div> <!-- // post-title -->
                    </div> <!-- //post__image -->
                <?php endforeach; ?>
                <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
            </div> <!-- // feed__wrap -->  
            <a class="blog-feed__btn btn" href="<?php the_sub_field('button_link'); ?>/category/news"><?php the_sub_field('button_text'); ?></a>
        <?php endif; ?>
    </div> <!-- // blog-feed__inner -->
</article> <!-- // blog-feed -->
