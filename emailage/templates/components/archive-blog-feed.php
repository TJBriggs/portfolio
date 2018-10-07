<article class="blog-feed blog-feed--archive blog-feed--accent-green">
    <div class="blog-feed__inner">
        <h4 class="blog-feed__colored-title"><?php single_tag_title(); ?> Articles</h4>
        <?php 
            $tags = get_the_tags();
            $tag = $tags[0]->slug;
            $blog_args = array(
                'post_type' => 'post',
                'posts_per_page' => -1,
                'orderby' => 'date', 
                'order' => 'DESC',
                'tag' => $tag
            );
            $blog_query = new WP_Query( $blog_args ); 
            if ( $blog_query->have_posts() ) :
        ?>
        <div class="blog-feed__wrap">
            <?php while ( $blog_query->have_posts() ) : $blog_query->the_post(); ?>
                <a class="blog-feed__post" href="<?php echo esc_url(the_permalink()); ?>">
                    <?php $post_id = get_the_id(); ?>
                    <?php 
                        // Image Vars
                        $image_array = get_field('featured_image');
                        $image_size = $image_array['sizes']['blog-feature'];
                        $image_style = ' style="background-image: url('.$image_size.');"';
                    ?>
                    <?php if($image_array) : ?>
                        <div class="blog-feed__image"<?php echo $image_style; ?>></div>
                    <?php endif; ?>
                    <div class="blog-feed__text">
                        <?php 
                            $cat = get_the_category();
                            $cat = $cat[0]->name;
                            $title = get_the_title();
                        ?>
                        <h6><?php echo $cat; ?></h6>
                        <h3><?php esc_html_e(the_title()); ?></h3>
                    </div>
                </a>
            <?php endwhile; wp_reset_query(); ?>
        </div>
        <?php else : ?>
            <h2>Sorry, no results were found.</h2>
        <?php endif; ?>
    </div>
</article>
