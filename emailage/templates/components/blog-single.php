<article class="blog-content">
    <?php while (have_posts()) : the_post(); ?>
            <div class="blog-content__content">
                <?php 
                    // Image Vars
                    $image_array = get_field('featured_image');
                    $image_url = $image_array['url'];
                    //$image_size = $image_array['sizes']['blog-hero'];
                    $image_style = ' style="background-image: url('.$image_url.');"';
                    if($image_array) :
                ?>
                    <div class="blog-content__image"<?php echo $image_style; ?>></div>
                <?php endif; ?>
                <div class="blog-content__social">
                    <?php get_template_part('templates/components/social-share'); ?>
                </div>
                <?php the_content(); ?>
                <?php if(is_singular('careers')) : ?>
                    <?php 
                        // Get Job Info (Position, Category, Location)
                        $id = get_the_id();
                        global $post;
                        $position = $post->post_title;
                        $locations = wp_get_post_terms($id, 'locations');
                        $location = $locations[0]->name;
                        $categories = wp_get_post_terms($id, 'job-categories');
                        $cat = $categories[0]->name;
                        $btn_href = '/company/careers/application-page/?position=' . $position . '&location=' . $location . '&category=' . $cat;
                    ?>
                    <a class="btn" href="<?php echo $btn_href; ?>">Apply Now</a>
                <?php endif; ?>
            </div>
    <?php endwhile; wp_reset_query(); ?>
</article>
